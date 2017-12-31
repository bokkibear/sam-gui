import 'webfont-medical-icons/css/webfont-medical-icons.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';

export default function MedicalIcon({ icon, style = {} }) {    
    return <span style={ style } className={ icon }/>;
}