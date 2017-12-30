import React from 'react';
import createClass from 'create-react-class';
import { Collapse } from 'react-collapse';
import MedicalIcon from './MedicalIcon';
import moment from 'moment';

const PLAIN_LIST_STYLE = {
    listStyleType: "none",
    padding: 0,
    margin: 0
};

const timeline = [{
    id: 12348,
    summary: "BP reading 70/50 (dropped 45% in 20 hours)",
    timestamp: "2017-12-30T10:10:00",
    icon: "cardiology",
    alert: "warning"
},{
    id: 12345,
    summary: "Clinical Notes",
    source: "Dr Sam",
    timestamp: "2017-12-29T14:04:00",
    detail: true,
    tags: [ "urgent action", "close monitoring", "deteriorating condition" ]
},{
    id: 12346,
    summary: "BP reading 120/80",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T12:25:00",
    icon: "cardiology"
},{
    id: 12347,
    summary: "Nursing notes",
    source: "A. N. Urse",
    timestamp: "2017-12-28T08:10:00",
    detail: true,
    tags: [ "NTR", "patient asleep" ]
},{
    id: 12348,
    summary: "Scheduled rapidevlol dosage (200mg) - final dosage",
    timestamp: "2017-12-28T05:10:00",
    icon: "pharmacy"
}];

const TIMELINE_ENTRY_STYLE = {
    padding: "8px",
    display: "flex"
};

const LIGHT_STYLE = {
    fontWeight: 400,
    color: "#777",
    margin: "0px 16px"
};

const BUTTON_STYLE = { 
    padding: "8px", 
    height: "38px", 
    border: "none", 
    background: "transparent", 
    cursor: "pointer",
    fontSize: "120%",
    fontWeight: "bold",
    color: "inherit"
};

function TimelineEntry( { timestamp, summary, source, id, onClick, isOpened, detail, icon, tags = [], alert } ) {
    return (
        <li className="timeline-entry" data-alert={ alert } style={ TIMELINE_ENTRY_STYLE } >
            <div style={ { width: "64px", fontSize: "32px", textAlign: "center" } }>
                <MedicalIcon icon={ icon } />
            </div>
            <div style={ { flex: "1 1 0" } }>                                
                <h3 style={ { padding: 0, margin: "4px 0px", fontWeight: 500 } }>
                    { summary }
                    <ul style={ { listStyleType: "none", display: "inline-block" } }>
                        {
                            tags.map( tag => <li style={ { display: "inline-block", backgroundColor: "#444", color: "#fff", borderRadius: "4px", padding: "2px 5px", fontSize: "70%", fontWeight: "bold", margin: "2px" } } key={ tag }>{ tag }</li> )
                        }
                    </ul>
                </h3>
                <div style={ { fontSize: "80%" } }>
                    { moment( timestamp ).fromNow() }                    
                    <span style={ LIGHT_STYLE }>{ source }</span>
                </div>
                <Collapse isOpened={ isOpened }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Collapse>
            </div>
            { 
                detail ? 
                    <button style={ BUTTON_STYLE } onClick={ () => onClick( id ) }>{ isOpened ? "▲" : "▼" }</button> : 
                    false 
            }
           
        </li>
    );
}

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
        return (
            <div style={ this.props.style }>
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

export default PatientTimeline;