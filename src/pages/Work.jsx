import Footer from "../components/Footer"
import WorkHeader from "../components/WorkHeader"
import WorkProjects from "../components/WorkProjects"
import { Helmet } from "react-helmet-async"

function Work() {
    return (
        <>
            <Helmet>
                <title>4NP | Work</title>
            </Helmet>
            <WorkHeader />
            
            <main>
                <WorkProjects />
            </main>

            <Footer page="work"/>
        </>
    )
}

export default Work