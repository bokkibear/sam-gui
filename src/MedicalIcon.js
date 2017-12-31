import 'webfont-medical-icons/css/webfont-medical-icons.css';
import React from 'react';

export default function MedicalIcon({ icon, style = {} }) {
    if ( icon ) {
        const className = "wfmi wfmi-i-" + icon;
        return <span style={ style } className={ className }/>;
    }
    return false;
}