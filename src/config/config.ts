export const config = {
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    env: import.meta.env.VITE_ENV || 'development',
    version: import.meta.env.VITE_VERSION || '1.0.0',
};
