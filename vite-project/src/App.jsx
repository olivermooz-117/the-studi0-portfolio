import { useState } from 'react'
import Header from './assets/components/Header'
import SearchBar from './assets/components/SearchBar'
import ProjectList from './assets/components/ProjectList'
import ProjectForm from './assets/components/ProjectForm'



function App() {
  // Main projects state
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Movie App",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      description: "A movie watchlist application",
    },
    {
      id: 2,
      title: "Music Platform",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      description: "Music streaming platform",
    },
  ]);

  // Search text state
  const [search, setSearch] = useState("");

  // Filter projects
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  // Add new project
  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <div>
      <Header />

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
