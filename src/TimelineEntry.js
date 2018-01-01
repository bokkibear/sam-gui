import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Collapse } from 'react-collapse';
import MedicalIcon from './MedicalIcon';

const TIMELINE_ENTRY_STYLE = {
    padding: "8px",
    display: "flex"
};

const LIGHT_STYLE = {
    fontWeight: 400,
    color: "#777"    
};

const LIGHT_STYLE_MARGIN = {
    fontWeight: 400,
    color: "#777",
    margin: "0px 16px"
};

const BUTTON_STYLE = { 
    padding: "8px", 
    height: "38px",         
    fontSize: "120%",
    fontWeight: "bold"    
};

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function TimelineEntry( { timestamp, summary, source, id, onClick, isOpened, detail, icon, tags = [], alert, iconStyle } ) {
    if ( alert === "minor" ) {
        return (
            <li className="timeline-entry" data-alert={ alert } style={ TIMELINE_ENTRY_STYLE } >
                { 
                    iconStyle === "big" ?
                        <div style={ { width: "64px", fontSize: "32px", textAlign: "center" } }>
                            <MedicalIcon icon={ icon } />
                        </div> : false
                }
                <div style={ { flex: "1 1 0", display: "flex" } }>                                
                    <h3 style={ { padding: 0, flex: "1 1 0" } }>
                        { 
                            iconStyle === "small" ? <MedicalIcon style={ { marginRight: "6px", display: "inline-block", width: "24px" } } icon={ icon } /> : false
                        }
                        { summary }
                        <span style={ LIGHT_STYLE_MARGIN }>{ source }</span>                    
                    </h3>
                    <div style={ { fontSize: "80%" } } title={ moment( timestamp ).format("HH:mm DD/MM/YYYY") }>
                        { moment( timestamp ).fromNow() }                        
                    </div>                    
                </div>            
            </li>
        );
    }
    return (
        <li className="timeline-entry" data-alert={ alert } style={ TIMELINE_ENTRY_STYLE } >
            { 
                iconStyle === "big" ?
                    <div style={ { width: "64px", fontSize: "32px", textAlign: "center" } }>
                        <MedicalIcon icon={ icon } />
                    </div> : false
            }
            <div style={ { flex: "1 1 0" } }>
                <div style={ { display: "flex", justifyContent: "space-between" } }>                                      
                    <h3 style={ { padding: 0 } }>
                        { 
                            iconStyle === "small" ? <MedicalIcon style={ { marginRight: "6px", display: "inline-block", width: "24px" } } icon={ icon } /> : false
                        }
                        { summary }
                        <ul style={ { listStyleType: "none", display: "inline-block" } }>
                            {
                                tags.map( tag => <li style={ { display: "inline-block", backgroundColor: "#568", color: "#fff", borderRadius: "4px", padding: "2px 5px", fontSize: "70%", fontWeight: "bold", margin: "2px" } } key={ tag }>{ tag }</li> )
                            }
                        </ul>
                    </h3>
                    { 
                        detail ? 
                            <button className="btn-plain" style={ BUTTON_STYLE } onClick={ () => onClick( id ) }>{ isOpened ? "▲" : "▼" }</button> : 
                            false 
                    }
                </div>
                <Collapse isOpened={ isOpened }>
                    { typeof detail === "string" ? detail : LOREM_IPSUM }
                </Collapse>
                <div style={ { fontSize: "80%", display: "flex", justifyContent: "space-between" } } title={ moment( timestamp ).format("HH:mm DD/MM/YYYY") }>
                    <span style={ LIGHT_STYLE }>{ source }</span>
                    { moment( timestamp ).fromNow() }                                        
                </div>                
            </div>            
           
        </li>
    );
}

function mapStateToProps( { iconStyle } ) {
    return { iconStyle };
}

export default connect( mapStateToProps )( TimelineEntry );