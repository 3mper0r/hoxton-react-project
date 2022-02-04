import { Link, Navigate, useNavigate } from "react-router-dom"

export function Gradient() {

    let navigate = useNavigate()

    return <>
        <h1 className="gradient-title">What is a Gradient?</h1>

        <h2 className="taste-it">Wanna taste it?</h2>

        <Link to={'/gradient/canada'}> <h3 className="canada"><button>Let's go to Canada!</button></h3></Link>
        <Link to={'/gradient/norway'}> <h3 className="norway"><button>Let's go to Norway!</button></h3></Link>
        <Link to={'/gradient/kosova'}> <h3 className="kosova"><button>Let's go to Kosova!</button></h3></Link>
    </>
}