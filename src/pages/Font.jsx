export function Font() {
    return <>
        <h1 className="font-title">I am your Font</h1>
        <span className="make-me-pretty">Make me pretty</span>
        <section className="font-config">
            <label htmlFor="font-style">Font Style:</label>
            <select name="font-style" id="font-style">
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
            </select>
            <label htmlFor="font-family">Font Family:</label>
            <select name="font-family" id="font-family">
                <option value="sans">Sans</option>
                <option value="sans-serif">Sans Serif</option>
                <option value="montserrat">Montserrat</option>
                <option value="monospace">Monospace</option>
                <option value="fantasy">Fantasy</option>
            </select>
            <label htmlFor="font-size">Font Size:</label>
            <input type="range" name="font-size" min={4} max={25} defaultValue={12} step={1} />
            <label htmlFor="font-weight">Font Weight:</label>
            <select name="font-weight" id="font-weight">
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
            </select>
            <label htmlFor="letter-space">Letter Space:</label>
            <input type="range" name="letter-space" min={0} max={5} defaultValue={0} step={1} />
        </section>
    </>
}