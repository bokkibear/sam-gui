import React from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';

function NewClinicalNote({ isUserEnteringData, text = "", handleUpdateText, handleStart, handleDiscard, handleDone }) {
    console.log( text );
    return (
        <div style={ {  backgroundColor: "#224499", color: "#fff" } }>
            <button disabled={ isUserEnteringData } onClick={ handleStart } className="btn-plain" style={ { textAlign: "left", display: "block", width: "100%", padding: "12px", fontSize: "18px", fontWeight: "bold" } }>
                <i style={ { marginRight: "8px" } } className="fa fa-plus-square" />            
                New clinical note            
            </button>
            <Collapse isOpened={ Boolean( isUserEnteringData ) }>
                <textarea placeholder="Enter clinical note text" value={ text } onChange={ handleUpdateText } style={ { border: "none", padding: "12px", resize: "none", width: "100%", fontFamily: "inherit", fontSize: "16px", color: "#444" } } />
                <div style={ { display: "flex", justifyContent: "flex-end", fontSize: "16px", fontWeight: "bold", padding: "8px" } }>
                    <button onClick={ handleDiscard } className="btn-plain">discard</button>
                    <button disabled={ text.length === 0 } onClick={ () => handleDone(text) } className="btn-cta">Add to timeline</button>
                </div>
            </Collapse>            
        </div>
    );
}

function mapStateToProps( { clinicalNoteEntry } ) {
    return clinicalNoteEntry;
}

const actions = {
    handleStart() {
        return {
            type: "UPDATE_CLINICAL_NOTE_ENTRY",
            clinicalNoteEntry: {
                isUserEnteringData: true,
                text: ""
            }
        };
    },
    handleUpdateText( event ) {
        return {
            type: "UPDATE_CLINICAL_NOTE_ENTRY",
            clinicalNoteEntry: {
                isUserEnteringData: true,
                text: event.target.value
            }
        };
    },
    handleDiscard() {
        return {
            type: "UPDATE_CLINICAL_NOTE_ENTRY",
            clinicalNoteEntry: {}
        };
    },
    handleDone( text ) {
        return {
            type: "ADD_CLINICAL_NOTE",
            clinicalNote: {
                text
            }
        };
    }
};

export default connect( mapStateToProps, actions )( NewClinicalNote );