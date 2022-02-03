import { useState } from "react/cjs/react.development"

export function Font() {

    const [font, setFont] = useState({})

    const setFontStyle = (fstyle) => {
        const userPreference = String(fstyle.target.value)
        const updatedFontStyle = { ...font, fontStyle: userPreference }
        setFont(updatedFontStyle)
    }

    const setFontFamily = (ffamily) => {
        setFont({
            ...font, fontFamily: String(ffamily.target.value)
        })
    }

    const setFontSize = (fsize) => {
        setFont({
            ...font, fontSize: Number(fsize.target.value)
        })
    }

    const setFontWeight = (fweight) => {
        setFont({
            ...font, fontWeight: String(fweight.target.value)
        })
    }

    const setLetterSpace = (letterspace) => {
        setFont({
            ...font, letterSpacing: Number(letterspace.target.value)
        })
    }


    return <>
        <h1 className="font-title">I am your Font</h1>
        <span className="make-me-pretty" style={font}>Make me pretty</span>
        <section className="font-config">
            <label htmlFor="font-style">Font Style:</label>
            <select name="font-style" id="font-style" onChange={setFontStyle}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
            </select>
            <label htmlFor="font-family">Font Family:</label>
            <select name="font-family" id="font-family" onChange={setFontFamily}>
                <option value="sans">Sans</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="montserrat">Montserrat</option>
                <option value="monospace">Monospace</option>
                <option value="fantasy">Fantasy</option>
            </select>
            <label htmlFor="font-size">Font Size:</label>
            <input type="range" name="font-size" min={12} max={50} defaultValue={16} step={1} onChange={setFontSize} />
            <label htmlFor="font-weight">Font Weight:</label>
            <select name="font-weight" id="font-weight" onChange={setFontWeight}>
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
            </select>
            <label htmlFor="letter-space">Letter Space:</label>
            <input type="range" name="letter-space" min={0} max={8} defaultValue={0} step={1} onChange={setLetterSpace} />
        </section>
    </>
}