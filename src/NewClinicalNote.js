import React from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import TextEditorWithTags from './TextEditorWithTags';

function getTagsFrom( text ) {
    return [ "booyah "].filter( tag => text.includes( tag ) );
}

function NewClinicalNote({ isUserEnteringData, editorState, handleUpdateEditor, handleStart, handleDiscard, handleDone }) {
    const enteredText = editorState ? editorState.getCurrentContent().getPlainText() : "";
    return (
        <div style={ {  backgroundColor: "#224499", color: "#fff" } }>
            <button disabled={ isUserEnteringData } onClick={ handleStart } className="btn-plain" style={ { textAlign: "left", display: "block", width: "100%", padding: "12px", fontSize: "18px", fontWeight: "bold" } }>
                <i style={ { marginRight: "8px" } } className="fa fa-plus-square" />            
                New clinical note            
            </button>
            <Collapse isOpened={ Boolean( isUserEnteringData ) }>
                <TextEditorWithTags editorState={ editorState } onChange={ handleUpdateEditor } placeholder="Enter clinical note text" />
                <div style={ { display: "flex", justifyContent: "flex-end", fontSize: "16px", fontWeight: "bold", padding: "8px" } }>
                    <button onClick={ handleDiscard } className="btn-plain">discard</button>
                    <button disabled={ enteredText.length === 0 } onClick={ () => handleDone(enteredText) } className="btn-cta">Add to timeline</button>
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
                isUserEnteringData: true                
            }
        };
    },
    handleUpdateEditor( editorState ) {
        return {
            type: "UPDATE_CLINICAL_NOTE_ENTRY",
            clinicalNoteEntry: {
                isUserEnteringData: true,
                editorState
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
                text,
                tags: getTagsFrom( text )
            }
        };
    }
};

export default connect( mapStateToProps, actions )( NewClinicalNote );