import { apiFetch } from "./client/client";

export class ProjectApi {
    async getAll() {
        const response = await apiFetch("/projects", { method: "GET" });
        return response;
    }

    async getById(id: number) {
        const response = await apiFetch(`/project/${id}`, {
            method: "GET"
        })

        return response;
    }

    async create(data: any) {
        const response = await apiFetch("/project", {
            method: "POST",
            body: JSON.stringify(data),
        });

        return response;
    }

    async update(id: number, data: any) {
        return apiFetch(`/projects/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
    }

    async delete(id: number) {
        return apiFetch(`/projects/${id}`, { method: "DELETE" });
    }
}

export const projectApi = new ProjectApi();
