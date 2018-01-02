import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import moment from 'moment';

let id = 10000;
function getNextUniqueId() {
    return id++;
}

const INITIAL_TIMELINE_DATA = withIds( ff([{    
    summary: "BP reading 70/50 (dropped 45% in 20 hours)",
    timestamp: "2017-12-30T10:10:00",
    icon: "wfmi wfmi-cardiology",
    type: "BP reading",
    alert: "warning"
},{    
    summary: "Clinical Notes",
    source: "Dr Sam",
    timestamp: "2017-12-29T14:04:00",
    icon: "fa fa-file-text-o",
    detail: true,
    type: "notes",
    tags: [ "urgent action", "close monitoring", "deteriorating condition" ]
},{   
    summary: "BP reading 120/80",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T12:25:00",
    icon: "wfmi wfmi-cardiology",
    type: "BP reading",
    alert: "minor"
},{      
    summary: "BP reading 124/81",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T10:25:00",
    icon: "wfmi wfmi-cardiology",
    type: "BP reading",
    alert: "minor"
},{
    summary: "BP reading 124/81",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T08:25:00",
    icon: "wfmi wfmi-cardiology",
    type: "BP reading",
    alert: "minor"
},{
    summary: "BP reading 125/85",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T06:25:00",
    icon: "wfmi wfmi-cardiology",
    type: "BP reading",
    alert: "minor"
},{
    summary: "BP reading 122/79",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T04:25:00",
    icon: "wfmi wfmi-cardiology",
    type: "BP reading",
    alert: "minor"
},{
    summary: "Nursing notes",
    source: "A. N. Urse",
    timestamp: "2017-12-28T08:10:00",
    detail: true,
    icon: "fa fa-file-text-o",
    type: "notes",
    tags: [ "NTR", "patient asleep" ]
},{   
    summary: "Scheduled rapidevlol dosage (200mg) - final dosage",
    timestamp: "2017-12-28T05:10:00",
    icon: "wfmi wfmi-pharmacy",
    type: "medication",
    alert: "minor"
},{   
    summary: "Patient admitted to Gollop ward",
    timestamp: "2017-12-27T23:30:00",
    type: "admission/discharge",
    icon: "fa fa-hospital-o"
},{   
    summary: "Clinical Notes",
    source: "Dr Sam",
    timestamp: "2017-12-27T20:04:00",
    icon: "fa fa-file-text-o",
    detail: "This man is somewhat poorly",
    type: "notes",
    tags: [ "triage assessment" ]
},{   
    summary: "Patient enters A&E",    
    timestamp: "2017-12-27T16:04:00",
    type: "admission/discharge",
    icon: "fa fa-hospital-o"
}]));

function byTimeDescending( a, b ) {
    return moment( b.timestamp ).diff( moment( a.timestamp ), "milliseconds" );
}

function toUnixTimestamp( iso8601timestamp ) {
    return moment( iso8601timestamp ).valueOf();
}

function withIds( timeline ) {
    return timeline.map( entry => Object.assign( {} , entry, { id: getNextUniqueId() }));
}

function ff( timeline ) {
    const now = moment();    
    const mostRecentUnixTime = timeline.map( entry => entry.timestamp ).map( toUnixTimestamp ).sort().reverse()[0];
    const dayDiff = now.diff( moment( mostRecentUnixTime ), "day" );
    return timeline.map( entry => {
        const updatedTimestamp = moment( entry.timestamp ).add( dayDiff, "days" ).format();
        return Object.assign( {}, entry, {
            timestamp: updatedTimestamp
        });
    }).sort( byTimeDescending );
}

const storeReducer = combineReducers({
    iconStyle( state = "small", { type, iconStyle } ) {
        if ( type === "UPDATE_ICON_STYLE" ) return iconStyle;
        return state;
    },
    timeline( state = INITIAL_TIMELINE_DATA, { type, clinicalNote } ) {
        if ( type === "ADD_CLINICAL_NOTE" ) {
            const { text, tags = [] } = clinicalNote;
            const newTimelineEntry = {
                timestamp: moment().utc().format(),
                source: "Dr Sam",
                summary: "Clinical Notes",
                detail: text,
                tags,
                icon: "fa fa-file-text-o",
                id: moment().valueOf()
            };
            return [ newTimelineEntry, ...state ];
        }
        return state;
    },
    clinicalNoteEntry( state = {}, { type, clinicalNoteEntry }) {
        if ( type === "UPDATE_CLINICAL_NOTE_ENTRY" ) return clinicalNoteEntry;
        if ( type === "ADD_CLINICAL_NOTE" ) return {};
        return state;
    },
    timelineFilters( state = {}, { type, filters }) {
        if ( type === "UPDATE_TIMELINE_FILTERS" ) return Object.assign( {}, state, filters );
        return state;
    }
});

const store = createStore(storeReducer);

const appElementToRender = (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(appElementToRender, document.getElementById('root'));
registerServiceWorker();
