import React from 'react';
import createClass from 'create-react-class';
import { connect } from 'react-redux';
import TimelineEntry from './TimelineEntry';
import NewClinicalNote from './NewClinicalNote';
import PatientSummary from './PatientSummary';

const PLAIN_LIST_STYLE = {
    listStyleType: "none",
    padding: 0,
    margin: 0
};



const PatientTimeline = createClass({
    getInitialState() {
        return { openEntries: [] };
    },
    toggleEntryOpen( entryId ) {
        this.setState( ( previousState ) => {
            const { openEntries } = previousState;
            const alreadyOpen = openEntries.includes( entryId );
            return {
                openEntries: alreadyOpen ? 
                    openEntries.filter( eachEntryId => eachEntryId !== entryId ) :
                    [ ...openEntries, entryId ]
            };
        });
    },
    render() {
        const { style, timeline } = this.props;
        return (
            <div style={ style }>
                <PatientSummary />
                <NewClinicalNote />
                <ul style={ PLAIN_LIST_STYLE }>
                    { 
                        timeline.map( timelineItem => 
                            <TimelineEntry 
                                key={ timelineItem.id } 
                                isOpened={ this.state.openEntries.includes( timelineItem.id ) } 
                                onClick={ this.toggleEntryOpen } 
                                { ...timelineItem } 
                            /> 
                        ) 
                    }
                </ul>
            </div>
        );
    }
});

function mapStateToProps( { timeline } ) {
    return { timeline };
}

export default connect( mapStateToProps )( PatientTimeline );