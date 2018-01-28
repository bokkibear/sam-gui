import React from 'react';
import { connect } from 'react-redux';
import MedicalIcon from './MedicalIcon';
import moment from 'moment';

const OBSERVATION_TYPES = ["BP reading"];

function getLatestObservations( timeline ) {
    const latestByType = {};
    timeline.forEach( timelineItem => {
        const { type, timestamp } = timelineItem;
        if ( OBSERVATION_TYPES.includes( type ) ) {
            const existingLatest = latestByType[ type ];
            if ( !existingLatest || moment( existingLatest.timestamp ).isBefore( moment( timestamp ) ) ) {
                latestByType[ type ] = timelineItem;
            }
        }
    });
    return latestByType;
}

function LatestObservations( { timeline } ) {
    const latestObservations = getLatestObservations( timeline );
    return (
        <div style={ { display: "flex" } }>
            { 
                OBSERVATION_TYPES.map( observationType => {
                    const latestObservation = latestObservations[ observationType ];
                    if ( !latestObservation ) return false;
                    return (
                        <div style={ { margin: "8px", display: "flex" } }>
                            <div>
                                <MedicalIcon style={ { fontSize: "32px" } } icon={ latestObservation.icon } />
                            </div>
                            <div style={ { marginLeft: "8px" } }>
                                <div>{ latestObservation.value }</div>
                                <div style={ { fontSize: "10px", color: "#ccd" } }>
                                    { moment( latestObservation.timestamp ).fromNow() }
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

function mapStateToProps( { timeline } ) {
    return { timeline };
}

export default connect( mapStateToProps )( LatestObservations );

