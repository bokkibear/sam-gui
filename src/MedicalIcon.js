import 'webfont-medical-icons/css/webfont-medical-icons.css';
import React from 'react';

export default function MedicalIcon({ icon }) {
    if ( icon ) {
        const className = "wfmi wfmi-i-" + icon;
        return <span className={ className }/>;
    }
    return false;
}