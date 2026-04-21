import Navbar from "../components-home/Navbar"
import Hero from "../components-home/Hero"
import About from "../components-home/About"
import Skills from "../components-home/Skills"
import RecentWork from "../components-home/FeaturedWork"
import Services from "../components-home/Services"
import Contact from "../components-home/Contact"
import Footer from "../components-home/Footer"
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