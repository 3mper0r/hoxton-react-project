import styled from "styled-components"
import { useState } from 'react'

export function ButtonPage() {

    const [style, setStyle] = useState({})

    const setPadding = (padding) => {
        const userPreference = Number(padding.target.value);
        const updatedPadding = { ...style, padding: userPreference }
        setStyle(updatedPadding)
    }

    const setBackground = (background) =>
        setStyle({
            ...style, backgroundColor: String(background.target.value)
        })

    const setRadius = (radius) =>
        setStyle({
            ...style, borderRadius: Number(radius.target.value)

        })


    const changeToPrimary = () => {
        setStyle(
            primaryButton
        )
    }
    const changeToSecondary = () => {
        setStyle(
            secondaryButton
        )
    }
    const changeToSuccess = () => {
        setStyle(
            successButton
        )
    }
    const changeToWarning = () => {
        setStyle(
            warningButton
        )
    }
    const changeToDanger = () => {
        setStyle(
            dangerButton
        )
    }
    const changeToDark = () => {
        setStyle(
            darkButton
        )
    }



    const primaryButton = {
        backgroundColor: "#007bff",
        color: "white"
    }
    const secondaryButton = {
        backgroundColor: "#6c757d",
        color: "white"
    }
    const successButton = {
        backgroundColor: "#28a745",
        color: "white"
    }

    const warningButton = {
        backgroundColor: "#ffc107"
    }
    const dangerButton = {
        backgroundColor: "#dc3545",
        color: "white"
    }
    const darkButton = {
        backgroundColor: "#343a40",
        color: "white"
    }

    return <>
        <h1 className="button-title">Customize your button</h1>
        <button style={style} className="make-me-better-button">Make me better</button>
        <section className="button-config">
            <label htmlFor="padding">Padding:</label>
            <input type="range" name="padding" min={0} max={20} defaultValue={0} step={2} onChange={setPadding} />
            <label htmlFor="background-color">Background color:</label>
            <input type="color" name="background-color" onChange={setBackground} />
            <label htmlFor="border-radius">Border radius:</label>
            <input type="range" name="border-radius" min={0} max={48} defaultValue={0} step={3} onChange={setRadius} />

        </section>

        <div className="customized-buttons">
            <button
                onClick={changeToPrimary} className="primary-button">Primary</button>
            <button
                onClick={changeToSecondary} className="secondary-button">Secondary</button>
            <button
                onClick={changeToSuccess} className="success-button">Success</button>
            <button
                onClick={changeToWarning} className="warning-button">Warning</button>
            <button
                onClick={changeToDanger} className="danger-button">Danger</button>
            <button
                onClick={changeToDark} className="dark-button">Dark</button>
        </div>

    </>
}
