import React from 'react';

const NAVBAR_STYLE = {
    backgroundColor: "#224499",
    color: "#fff",
    height: "32px",
    padding: "8px",
    fontSize: "16px"
};

const BRAND_STYLE = {
    fontSize: "20px",
    fontWeight: "bold"
};

export default function NavBar() {
    return (
        <div style={ NAVBAR_STYLE }>
            <div style={ BRAND_STYLE }>Paradox</div>
        </div>
    );
}