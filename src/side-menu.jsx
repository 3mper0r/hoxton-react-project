import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

export function SideMenu() {


    const Aside = styled.aside`
    display:grid;
    font-size: 2rem;
    color: orange;
    background-color: #1c6ea4;
    width: 15vw;
    height: 100vh;
    padding: 1rem;
    text-align: center; 
    `
    const styledLinks = {
        textDecoration: "none",
        color: "orange"
    }


    return (
        <Aside>
            <div>
                <Link to={'/buttons'} style={styledLinks}>Button</Link>
            </div>
            <div>
                <Link to={'/inputs'} style={styledLinks}>Input</Link>
            </div>
            <div>
                <Link to={'/font'} style={styledLinks}>Font</Link>
            </div>
            <div>
                <Link to={'/box-shadow'} style={styledLinks}>Box Shadow</Link>
            </div>
            <div>
                <Link to={'/gradient'} style={styledLinks}>Gradient</Link>
            </div>
        </Aside>
    )
}