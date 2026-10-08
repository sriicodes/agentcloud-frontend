import { Project, ProjectStatus } from "./projects";

const STORAGE_KEY = "agentcloud-projects";

export function getProjects(): Project[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data) as Project[];
  } catch {
    return [];
  }
}

export function saveProjects(projects: Project[]) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(projects)
  );
}

export function initializeProjects(
  defaultProjects: Project[]
) {
  if (typeof window === "undefined") {
    return;
  }

  const existing = localStorage.getItem(STORAGE_KEY);

  if (!existing) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultProjects)
    );
  }
}

export function updateProjectStatus(
  projectId: string,
  status: ProjectStatus
) {
  const projects = getProjects();

  const updatedProjects = projects.map((project) => {
    if (project.id === projectId) {
      return {
        ...project,
        status,
        updated: "Just now",
      };
    }

    return project;
  });

  saveProjects(updatedProjects);

  return updatedProjects;
}