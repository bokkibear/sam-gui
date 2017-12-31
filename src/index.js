import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import moment from 'moment';

const INITIAL_TIMELINE_DATA = [{
    id: 12349,
    summary: "BP reading 70/50 (dropped 45% in 20 hours)",
    timestamp: "2017-12-30T10:10:00",
    icon: "wfmi wfmi-cardiology",
    alert: "warning"
},{
    id: 12345,
    summary: "Clinical Notes",
    source: "Dr Sam",
    timestamp: "2017-12-29T14:04:00",
    icon: "fa fa-file-text-o",
    detail: true,
    tags: [ "urgent action", "close monitoring", "deteriorating condition" ]
},{
    id: 12346,
    summary: "BP reading 120/80",
    source: "Blood Pressure machine 12aa312",
    timestamp: "2017-12-29T12:25:00",
    icon: "wfmi wfmi-cardiology",
    alert: "minor"
},{
    id: 12347,
    summary: "Nursing notes",
    source: "A. N. Urse",
    timestamp: "2017-12-28T08:10:00",
    detail: true,
    icon: "fa fa-file-text-o",
    tags: [ "NTR", "patient asleep" ]
},{
    id: 12348,
    summary: "Scheduled rapidevlol dosage (200mg) - final dosage",
    timestamp: "2017-12-28T05:10:00",
    icon: "wfmi wfmi-pharmacy",
    alert: "minor"
}];

const storeReducer = combineReducers({
    iconStyle( state = "small", { type, iconStyle } ) {
        if ( type === "UPDATE_ICON_STYLE" ) return iconStyle;
        return state;
    },
    timeline( state = INITIAL_TIMELINE_DATA, { type, clinicalNote } ) {
        if ( type === "ADD_CLINICAL_NOTE" ) {
            const { text } = clinicalNote;
            const newTimelineEntry = {
                timestamp: moment().utc().format(),
                source: "Dr Sam",
                summary: "Clinical Notes",
                detail: text,
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
