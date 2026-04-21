import WorkNavbar from "../components-work/WorkNavbar"
import WorkBanner from "../components-work/WorkBanner"
import WorkResults from "../components-work/WorkResults"
import Footer from "../components-home/Footer"
import { Helmet } from "react-helmet-async"
import { useState } from "react"

function Work() {
    const [filter, setFilter] = useState('all')

    return (
        <>
            <Helmet>
                <title>4NP | Work</title>
            </Helmet>
            
            <WorkNavbar />

            <main>
                <WorkBanner filter={filter} setFilter={setFilter}/>
                <WorkResults filter={filter}/>
            </main>

            <Footer page="work"/>
        </>
    )
}

export default Work