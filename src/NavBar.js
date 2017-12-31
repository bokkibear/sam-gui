import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

const NAVBAR_STYLE = {
    backgroundColor: "#224499",
    color: "#fff",
    height: "32px",
    padding: "8px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center"
};

const BRAND_STYLE = {
    fontSize: "20px",
    fontWeight: "bold",
    marginRight: "30px"
};

const ICON_STYLE_OPTIONS = [
    { value: "big", label: "Big" },
    { value: "small", label: "Small" },
    { value: false, label: "None" }    
];

function NavBar({ iconStyle, onIconStyleChange }) {
    return (
        <div style={ NAVBAR_STYLE }>
            <div style={ BRAND_STYLE }>Paradox</div>      
            <label>Icon Style:</label>      
            <Select
                style={ { width: "80px" } }
                onChange={ onIconStyleChange }
                value={ iconStyle }
                options={ ICON_STYLE_OPTIONS }
                clearable={ false }
            />                            
        </div>
    );
}


function mapStateToProps( { iconStyle } ) {
    return { iconStyle };
}

const actions = {
    onIconStyleChange( option ) {
        return {
            type: "UPDATE_ICON_STYLE",
            iconStyle: option.value
        };
    }
};

export default connect( mapStateToProps, actions )( NavBar );