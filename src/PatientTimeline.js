import React from 'react';
import createClass from 'create-react-class';
import { connect } from 'react-redux';
import TimelineEntry from './TimelineEntry';
import NewClinicalNote from './NewClinicalNote';
import PatientSummary from './PatientSummary';

const PLAIN_LIST_STYLE = {
    listStyleType: "none",
    padding: 0,
    margin: 0
};

function filterTimeline( timeline, filters ) {
    const anyFocus = Object.values( filters ).some( filterState => filterState === "focus" );
    return timeline.filter( entry => {
        const filterState = filters[ entry.type ];
        if ( !filterState ) return !anyFocus;
        if ( filterState === "hide" ) return false;
        return true; //focus
    });        
}

const PatientTimeline = createClass({
    getInitialState() {
        return { openEntries: [] };
    },
    toggleEntryOpen( entryId ) {
        this.setState( ( previousState ) => {
            const { openEntries } = previousState;
            const alreadyOpen = openEntries.includes( entryId );
            return {
                openEntries: alreadyOpen ? 
                    openEntries.filter( eachEntryId => eachEntryId !== entryId ) :
                    [ ...openEntries, entryId ]
            };
        });
    },
    render() {
        const { style, timeline, timelineFilters } = this.props;
        const filteredTimeline = filterTimeline( timeline, timelineFilters );        
        return (
            <div style={ style }>
                <PatientSummary />
                <NewClinicalNote />                
                <ul style={ PLAIN_LIST_STYLE }>
                    { 
                        filteredTimeline.map( timelineItem => 
                            <TimelineEntry 
                                key={ timelineItem.id } 
                                isOpened={ this.state.openEntries.includes( timelineItem.id ) } 
                                onClick={ this.toggleEntryOpen } 
                                { ...timelineItem } 
                            /> 
                        ) 
                    }
                    {   
                        filteredTimeline.length === 0 ? 
                            <li style={ { textAlign: "center" } }>No timeline entries are visible due to filtering</li>: false}
                    <li style={ { padding: "4px 120px" } }>
                        <button onClick={ () => alert("Does nothing") } className="btn-cta" style={ { width: "100%" } }>Show 2 previous admissions</button>
                    </li>
                </ul>
            </div>
        );
    }
});

function mapStateToProps( { timeline, timelineFilters } ) {
    return { timeline, timelineFilters };
}

export default connect( mapStateToProps )( PatientTimeline );