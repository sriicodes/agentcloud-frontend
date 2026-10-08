export type ProjectStatus = "Deployed" | "Processing" | "Failed";

export type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  updated: string;
  frontendRepo: string;
  backendRepo: string;
};

export const projects: Project[] = [
  {
    id: "1",
    name: "My Portfolio",
    description: "Personal portfolio application",
    status: "Deployed",
    updated: "2 hours ago",
    frontendRepo: "github.com/example/frontend",
    backendRepo: "github.com/example/backend",
  },
  {
    id: "2",
    name: "E-Commerce App",
    description: "Full-stack shopping application",
    status: "Processing",
    updated: "5 hours ago",
    frontendRepo: "github.com/example/ecommerce-frontend",
    backendRepo: "github.com/example/ecommerce-backend",
  },
  {
    id: "3",
    name: "Chat Application",
    description: "Real-time messaging application",
    status: "Failed",
    updated: "Yesterday",
    frontendRepo: "github.com/example/chat-frontend",
    backendRepo: "github.com/example/chat-backend",
  },
];