import React from 'react';
import NavBar from './NavBar';
import PatientTimeline from './PatientTimeline';
import PatientTimelineSidebar from './PatientTimelineSidebar';

import './App.css';

const VERTICAL_FLEX_STYLE = {
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

const HORIZONTAL_FLEX_STYLE = {
  display: "flex",
  flexDirection: "row"
};

const FLEX_FILL_STYLE = {
  flex: "1 1 0"
};

const MAIN_SECTION_STYLE = Object.assign({}, HORIZONTAL_FLEX_STYLE, FLEX_FILL_STYLE );

export default function App() {  
  return (
    <div className="App" style={ VERTICAL_FLEX_STYLE }>
      <NavBar />
      <div style={ MAIN_SECTION_STYLE }>
        <PatientTimelineSidebar />
        <PatientTimeline style={ FLEX_FILL_STYLE } patientId="12345" />
      </div>
    </div>
  );
}
