import React from 'react';
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

function TimelineEntry( { timestamp, summary, source } ) {
    return (
        <li class="timeline-entry" style={ TIMELINE_ENTRY_STYLE }>
            <h3>
                { summary }
                <span style={ LIGHT_STYLE }>{ source }</span>
            </h3>
            { moment( timestamp ).fromNow() }
        </li>
    );
}

export default function PatientTimeline({ style }) {
    return (
        <div style={ style }>
            <ul style={ PLAIN_LIST_STYLE }>
                { timeline.map( timelineItem => <TimelineEntry key={ timelineItem.id } { ...timelineItem } /> ) }
            </ul>
        </div>
    );
}