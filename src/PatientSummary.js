import React from 'react';
import LatestObservations from './LatestObservations';

export default function PatientSummary() {
    return (
        <div style={ { padding: "12px", fontSize: "16px", color: "#fff", backgroundColor: "#456", display: "flex", alignItems: "center" } }>
            <div style={ { marginRight: "20px" } }>
                <strong>Joseph Bloggington</strong> - in Gollop Ward bed 45c<br />
                67-year-old male, heart attack 4 years ago, stroke 1 year ago
            </div>
            <LatestObservations />
        </div>
    );
}