import net from "net";

export class Server {
    constructor() {}

    runServer() {
        const server = net.createServer((socket) => {
            console.log("TCP Server: Client connected:", socket.remoteAddress);

            // Receive data from the client
            socket.on("data", (data) => {
                console.log("TCP Server: Receive from client:", data.toString());
                // send response
                socket.write("Hello client! I got your message: " + data.toString());
                // socket.end();
            });

            socket.on("close", () => console.log("TCP Server: Client disconnected"));
        });

        server.listen(4000, "127.0.0.1", () => {
            console.log("TCP Server: Server listening on 127.0.0.1:4000");
        });
    }
}
