export interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string;
    github_url: string;
    demo_url: string;
    tech_stack: string;
    category?: string;
    status?: string;
    userId?: number;
}