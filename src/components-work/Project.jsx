import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


import projects from "../data/projects";
import WorkNavbar from "./WorkNavbar";
import Footer from "../components-home/Footer";

import "./Project.css";

function Project() {
    const { id } = useParams();

    const project = projects.find((p) => p.id === id);

    if (!project) return <h1>Not found</h1>;

    return (
        <>
            <Helmet>
                <title>4NP | Project</title>
                <meta name="description" content={project.description} />
                <link rel="canonical" href={`https://4np.dev/work/${project.id}`} />
            </Helmet>

            <WorkNavbar />

            <main>
                <div className="return-to-work">
                    <Link className="link" to="/work">
                        ← Back to projects
                    </Link>
                </div>

                <article className="project-container">
                    <div className="project-container-left">
                        <span>{project.type}</span>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>

                        <div className="project-buttons">
                            <a
                                className="project-btn-1"
                                target="_blank"
                                rel="noreferrer"
                                href={project.live}
                            >
                                Visit live
                            </a>

                            <a
                                className="project-btn-2"
                                target="_blank"
                                rel="noreferrer"
                                href={project.github}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-container-right">
                        <img
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                        />
                    </div>
                </article>

                <Footer />
            </main>
        </>
    );
}

export default Project;