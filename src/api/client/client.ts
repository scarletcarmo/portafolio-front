import { config } from "../../config/config";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(`${config.API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });
    if (!res.ok) throw new Error("API request failed");
    return res.json();
}