export default async function globalTeardown() {
    const server = (globalThis as any).__viteServer;
    if (server) await server.close();
}
