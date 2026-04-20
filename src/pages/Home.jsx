import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import RecentWork from "../components/RecentWork"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"

function Home() {
    return (
        <>
            <Helmet>
                <title>4NP | Front-end web developer</title>
            </Helmet>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <RecentWork />
                <Services />
                <Contact />
            </main>
            <Footer page="home"/>
        </>
    )
}

export default Home