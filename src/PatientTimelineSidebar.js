import React from 'react';
import MedicalIcon from './MedicalIcon';
import { connect } from 'react-redux';

function getEventSummaries( timeline ) {
    return timeline.reduce( ( accumulator, value ) => {
        const { type, icon } = value;
        if ( type ) {
            let existingSummary = accumulator.find( summary => summary.type === type );
            if ( !existingSummary ) {
                existingSummary = {
                    type,
                    count: 0,
                    icon
                };
                accumulator.push( existingSummary );
            }
            existingSummary.count++;
            if ( icon ) existingSummary.icon = icon;
        }
        return accumulator;
    }, []);
}

const SIDEBAR_STYLE = {
    width: "400px",
    backgroundColor: "#ccc",
    padding: "8px"
};

function FilterControl( { filterState, onChange, style } ) {
    return (
        <span style={ style }>
            <button onClick={ () => onChange( false ) } className={ !filterState ? "btn-selected" : "btn-unselected" }>None</button>
            <button onClick={ () => onChange( "hide" ) } className={ filterState === "hide" ? "btn-selected" : "btn-unselected" }>Hide</button>
            <button onClick={ () => onChange( "focus" ) } className={ filterState === "focus" ? "btn-selected" : "btn-unselected" }>Focus</button>
        </span>
    );
}

function PatientTimelineSidebar( { timeline = [], timelineFilters, handleFilterChange } ) {
    return (
        <div style={ SIDEBAR_STYLE }>
            <h3>Filters</h3>
            <ul>
                {
                    getEventSummaries( timeline ).map( eventTypeSummary => {
                        const { type, count, icon } = eventTypeSummary;
                        const filterState = timelineFilters[ type ];
                        return (
                            <li style={ { display: "flex", alignItems: "center" } } key={ type }>
                                <MedicalIcon icon={ icon } />
                                { type } ({ count })
                                <FilterControl style={ { marginLeft: "auto" } } filterState={ filterState } onChange={ newFilterState => handleFilterChange( type, newFilterState ) } />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

function mapStateToProps( { timeline, timelineFilters } ) {
    return { timeline, timelineFilters };
}

const actions = {
    handleFilterChange( type, newState ) {        
        return {
            type: "UPDATE_TIMELINE_FILTERS",
            filters: {
                [type]: newState
            }
        };
    }
};

export default connect( mapStateToProps, actions )( PatientTimelineSidebar );