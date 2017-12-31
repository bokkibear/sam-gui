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
    color: "#777",
    margin: "0px 16px"
};

const BUTTON_STYLE = { 
    padding: "8px", 
    height: "38px", 
    border: "none", 
    background: "transparent", 
    cursor: "pointer",
    fontSize: "120%",
    fontWeight: "bold",
    color: "inherit"
};

function TimelineEntry( { timestamp, summary, source, id, onClick, isOpened, detail, icon, tags = [], alert, iconStyle } ) {
    return (
        <li className="timeline-entry" data-alert={ alert } style={ TIMELINE_ENTRY_STYLE } >
            { 
                iconStyle === "big" ?
                    <div style={ { width: "64px", fontSize: "32px", textAlign: "center" } }>
                        <MedicalIcon icon={ icon } />
                    </div> : false
            }
            <div style={ { flex: "1 1 0" } }>                                
                <h3 style={ { padding: 0, margin: "4px 0px", fontWeight: 500 } }>
                    { 
                        iconStyle === "small" ? <MedicalIcon style={ { marginRight: "6px", display: "inline-block", width: "24px" } } icon={ icon } /> : false
                    }
                    { summary }
                    <ul style={ { listStyleType: "none", display: "inline-block" } }>
                        {
                            tags.map( tag => <li style={ { display: "inline-block", backgroundColor: "#444", color: "#fff", borderRadius: "4px", padding: "2px 5px", fontSize: "70%", fontWeight: "bold", margin: "2px" } } key={ tag }>{ tag }</li> )
                        }
                    </ul>
                </h3>
                <div style={ { fontSize: "80%" } }>
                    { moment( timestamp ).fromNow() }                    
                    <span style={ LIGHT_STYLE }>{ source }</span>
                </div>
                <Collapse isOpened={ isOpened }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Collapse>
            </div>
            { 
                detail ? 
                    <button style={ BUTTON_STYLE } onClick={ () => onClick( id ) }>{ isOpened ? "▲" : "▼" }</button> : 
                    false 
            }
           
        </li>
    );
}

function mapStateToProps( { iconStyle } ) {
    return { iconStyle };
}

export default connect( mapStateToProps )( TimelineEntry );