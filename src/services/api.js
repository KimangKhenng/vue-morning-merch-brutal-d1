// src/services/api.js
const BASE = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
    let response;
    try {
        response = await fetch(BASE + path, {
            ...options,
            headers: { "Content-Type": "application/json", ...options.headers },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });
    } catch {
        // the browser could not reach the server at all
        throw new Error("Cannot reach the server. Is it running?");
    }

    // 204 means "done, nothing to send back" (for example after a delete)
    const data = response.status === 204 ? null : await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.error ?? `Request failed (${response.status})`);
    }
    return data
}

export const getProducts = (page, limit) => request(`/products?page=${page}&limit=${limit}`);
export const getProduct = (id) => request(`/products/${id}`);
export const createOrder = (items) => request("/orders", { method: "POST", body: { items } });