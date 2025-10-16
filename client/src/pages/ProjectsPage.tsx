import './pages.css'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Investment Banking Platform",
      description: "A full-stack financial platform to manage equity derivatives and trading workflows. Built with Spring Boot microservices and Angular frontend with interactive dashboards.",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Java", "Spring Boot", "Angular", "TypeScript", "Oracle"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/vishalkolekar-45/banking-platform"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, TypeScript, and Java backend. Features dark mode, responsive design, and interactive UI components.",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "TypeScript", "Java", "CSS", "Vite"],
      demoLink: "https://vishalkolekar.com",
      codeLink: "https://github.com/vishalkolekar-45/MyPortfolio"
    },
    {
      title: "Task Management System",
      description: "A comprehensive task management application with real-time updates, team collaboration features, and analytics dashboard.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Spring Boot", "React", "PostgreSQL", "WebSocket", "Docker"],
      demoLink: "https://tasks.example.com",
      codeLink: "https://github.com/vishalkolekar-45/task-manager"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with product management, cart functionality, payment integration, and order tracking.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Java", "Spring Boot", "React", "MySQL", "Redis"],
      demoLink: "https://shop.example.com",
      codeLink: "https://github.com/vishalkolekar-45/ecommerce"
    },
    {
      title: "AI-Powered ChatBot",
      description: "An intelligent chatbot system using natural language processing and machine learning. Features context awareness, multi-language support, and integration with various messaging platforms.",
      imageUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["Python", "TensorFlow", "Flask", "MongoDB", "Docker", "AWS"],
      demoLink: "https://chatbot.example.com",
      codeLink: "https://github.com/vishalkolekar-45/ai-chatbot"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A dynamic analytics dashboard providing real-time insights and data visualization. Features customizable widgets, data filtering, and automated reporting.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "D3.js", "Node.js", "Socket.io", "GraphQL", "Elasticsearch"],
      demoLink: "https://analytics.example.com",
      codeLink: "https://github.com/vishalkolekar-45/analytics-dashboard"
    }
  ];

  return (
    <section>
      <h2>Featured Projects</h2>
      <p className="section-description">
        Here are some of my notable projects that showcase my skills in full-stack development,
        from responsive frontend interfaces to scalable backend systems.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  )
}

