import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import RecentWork from "../components/RecentWork"
import Services from "../components/Services"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <RecentWork />
            <Services />
        </>
    )
}

export default Home