function ProjectCard({project}) {
  return (
    <div className="card"> 
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} width="250"/>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;