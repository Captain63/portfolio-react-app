const Project = props => {
    return props.project.map((project, index) => (
        <div className="card" key={index}>
            <h3>{project.name}</h3>
        </div>
    ));
}

export default Project;