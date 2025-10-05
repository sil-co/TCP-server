import { Client } from "./client";
import { Server } from "./server";

class Main {

    constructor() { }

    startServer() {
        const server = new Server();
        server.runServer();
    }

    startClient() {
        const client = new Client();
        client.runClient();
    }
}

const main = new Main();
main.startServer();
main.startClient();
