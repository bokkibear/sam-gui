import React from 'react';
import createClass from 'create-react-class';
import TimelineEntry from './TimelineEntry';

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