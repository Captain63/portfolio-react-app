const Project = props => {
    return props.project.map((project, index) => (
        project.liveLink ? (
        <div className="card project my-4 ml-2 p-0 col-sm-12 col-md-6" key={index}>
            <div className="card-header">
                <h3>{project.name}</h3>
            </div>
            <a href={project.liveLink} target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + project.screenshotPath} alt={project.name + " screenshot"} />
            </a>
            <ul>
                <li>
                    <a href={project.gitLink} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </li>
                <li>
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                        <i className="far fa-file"></i> Live Application
                    </a>
                </li>
            </ul>
        </div>
        ) : (
        <div className="card project my-4 p-0 col-sm-12 col-md-6" key={index}>
            <div className="card-header">
                <h3>{project.name}</h3>
            </div>
            <a href={project.gitLink} target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + project.screenshotPath} alt={project.name + " screenshot"} />
            </a>
            <ul>
                <li>
                    <a href={project.gitLink} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </li>
            </ul>
        </div> 
        )
    ));
}

export default Project;