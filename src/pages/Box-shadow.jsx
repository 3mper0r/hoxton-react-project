import { useState } from "react"

export function BoxShadow() {
    const starterShape = {
        color: '',
        horizontalOffset: 0,
        verticalOffset: 0,
        blur: 0,
        spread: 0,
    }

    const [shadowParams, setShadowParams] = useState(starterShape);


    const setColor = (bgcolor) =>
        setShadowParams({
            ...shadowParams, color: String(bgcolor.target.value)
        })
    const setHorizontalO = (offsetx) =>
        setShadowParams({
            ...shadowParams, horizontalOffset: Number(offsetx.target.value)
        })

    const setVrticalO = (offsety) =>
        setShadowParams({
            ...shadowParams, verticalOffset: Number(offsety.target.value)
        })

    const setBlur = (blur) =>
        setShadowParams({
            ...shadowParams, blur: Number(blur.target.value)
        })

    const setSpread = (spread) =>
        setShadowParams({
            ...shadowParams, spread: Number(spread.target.value)
        })

    return <>
        <h1 className="boxshadow-title">Design your shadow</h1>
        <div className="box-shadow" style={{ boxShadow: `${shadowParams.color} ${shadowParams.horizontalOffset}px ${shadowParams.verticalOffset}px ${shadowParams.blur}px ${shadowParams.spread}px` }}><span>I</span> <span>Can</span> <span>Make</span> <span>Shadows</span></div>
        <section className="box-shadow-config" >
            <label htmlFor="shadow-color" >Color:</label>
            <input type="color" onChange={setColor} />
            <label htmlFor="horizontal-offset">Horizontal offset:</label>
            <input type="range" name="horizontal-offset" min={-100} max={100} defaultValue={10} step={2} onChange={setHorizontalO} />
            <label htmlFor="vertical-offset">Vertical offset:</label>
            <input type="range" name="vertical-offset" min={-100} max={100} defaultValue={10} step={2} onChange={setVrticalO} />
            <label htmlFor="blur">Blur:</label>
            <input type="range" name="blur" min={0} max={100} defaultValue={0} step={1} onChange={setBlur} />
            <label htmlFor="spread">Spread:</label>
            <input type="range" name="spread" min={0} max={100} defaultValue={16} step={2} onChange={setSpread} />
        </section>
    </>
}