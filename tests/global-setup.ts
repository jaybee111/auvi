import net from 'net';
import { createServer, ViteDevServer } from 'vite';
import type { AddressInfo } from 'net';

const CANDIDATE_PORTS = [5173, 5174, 5175, 5176, 5177];

function isPortOpen(port: number): Promise<boolean> {
    return new Promise(resolve => {
        const socket = net.createConnection(port, 'localhost');
        socket.once('connect', () => { socket.destroy(); resolve(true); });
        socket.once('error', () => resolve(false));
    });
}

export default async function globalSetup() {
    for (const port of CANDIDATE_PORTS) {
        if (await isPortOpen(port)) {
            process.env.BASE_URL = `http://localhost:${port}`;
            return;
        }
    }
    // None running → start Vite programmatically
    const server: ViteDevServer = await createServer({ server: { port: 5173 } });
    await server.listen();
    const port = (server.httpServer!.address() as AddressInfo).port;
    process.env.BASE_URL = `http://localhost:${port}`;
    (globalThis as any).__viteServer = server;
}
