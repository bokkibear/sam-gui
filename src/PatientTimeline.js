import React from 'react';
import createClass from 'create-react-class';
import { Collapse } from 'react-collapse';
import moment from 'moment';

const PLAIN_LIST_STYLE = {
    listStyleType: "none",
    padding: 0,
    margin: 0
};

const timeline = [{
    id: 12345,
    summary: "Clinical Notes",
    source: "Dr Sam",
    timestamp: "2017-12-29T14:04:00"
},{
    id: 12346,
    summary: "Blood Pressure Reading 120/80",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T12:25:00"
},{
    id: 12347,
    summary: "Nursing notes",
    source: "A. N. Urse",
    timestamp: "2017-12-28T08:10:00"
}];

const TIMELINE_ENTRY_STYLE = {
    padding: "8px"
};

const LIGHT_STYLE = {
    fontWeight: 400,
    fontSize: "12px",
    color: "#777",
    marginLeft: "16px"
};

function TimelineEntry( { timestamp, summary, source, id, onClick, isOpened } ) {
    const className = isOpened ? "timeline-entry is-opened" : "timeline-entry";
    return (
        <li class={ className } style={ TIMELINE_ENTRY_STYLE } onClick={ () => onClick( id ) }>            
            <h3 style={ { padding: 0, margin: "4px 0px" } }>
                { summary }
                <span style={ LIGHT_STYLE }>{ source }</span>
            </h3>
            <div style={ { fontSize: "80%" } }>{ moment( timestamp ).fromNow() }</div>
            <Collapse isOpened={ isOpened }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Collapse>
        </li>
    );
}

const PatientTimeline = createClass({
    getInitialState() {
        return { openEntry: false };
    },
    toggleEntryOpen( entryId ) {
        this.setState( ( previousState ) => {
            const alreadyOpen = previousState.openEntry === entryId;
            return {
                openEntry: alreadyOpen ? false : entryId
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
                                isOpened={ this.state.openEntry === timelineItem.id } 
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