import React from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';
import 'draft-js/dist/Draft.css';

const STYLE = { border: "none", padding: "12px", resize: "none", width: "100%", fontFamily: "inherit", fontSize: "16px", color: "#444", backgroundColor: "#fff" };

const NOT_FOUND = -1;

function findTags(contentBlock, callback) {
    const text = contentBlock.getText();
    let startIndex = -1;
    while ( true ) {
        startIndex = text.indexOf( "booyah", startIndex + 1 );
        if ( startIndex === NOT_FOUND ) break;
        callback( startIndex, startIndex + "booyah".length );
    }
}

function Tag( { children } ) {    
    return <span style={ { backgroundColor: "#abf" } }>{ children }</span>;
}

const tagDecorator = new CompositeDecorator([{
    strategy: findTags,
    component: Tag
}]);

function newEmptyState() {
    return EditorState.createEmpty( tagDecorator );
}

export default function TextEditorWithTags( { editorState = newEmptyState(), onChange, placeholder } ) {
    return (
        <div style={ STYLE }>
            <Editor editorState={ editorState } onChange={ onChange } placeholder={ placeholder } />
        </div>
    );
}