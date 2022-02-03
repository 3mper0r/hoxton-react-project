import { useState } from "react"

export function InputPage() {


    const [style, setStyle] = useState({})

    const setPadding = (padding) => {
        const userPreference = Number(padding.target.value);
        const updatedPadding = { ...style, padding: userPreference }
        setStyle(updatedPadding)
    }

    const setTextAlign = (talign) => {
        setStyle({
            ...style, textAlign: String(talign.target.value)
        })
    }

    const setBorderWidth = (bwidth) => {
        setStyle({
            ...style, borderWidth: Number(bwidth.target.value)
        })
    }

    const setRadius = (radius) =>
        setStyle({
            ...style, borderRadius: Number(radius.target.value)

        })

    const setBorderStyle = (bstyle) =>
        setStyle({
            ...style, borderStyle: String(bstyle.target.value)
        })

    return <>
        <h1 className="input-title">Style your input</h1>
        <input type="search" className="style-me" placeholder="style me" style={style} />
        <section className="input-config">
            <label htmlFor="padding">Padding:</label>
            <input type="range" name="padding" min={0} max={40} defaultValue={0} step={2} onChange={setPadding} />
            <label htmlFor="text-align">Text Align:</label>
            <select name="text-align" id="text-align" onChange={setTextAlign} >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
            </select>
            <label htmlFor="border-width">Border Width:</label>
            <input type="range" name="border-width" min={0} max={6} defaultValue={0} step={1} onChange={setBorderWidth} />

            <label htmlFor="border-radius">Border Radius:</label>
            <input type="range" name="border-radius" min={0} max={48} defaultValue={0} step={3} onChange={setRadius} />

            <label htmlFor="border-style">Border Style:</label>
            <select name="border-style" id="border-style" onChange={setBorderStyle}>
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
                <option value="ridge">Ridge</option>
                <option value="hidden">Hidden</option>
            </select>

        </section>
    </>
}
