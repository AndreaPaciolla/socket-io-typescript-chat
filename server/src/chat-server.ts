import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';

import { Message } from './model';

export class ChatServer {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;

    private rooms = [
        {
            id: 1,
            label: 'Gianni',
            url: '/chat/1',
            users: [
                {
                    id: 1,
                    username: 'apacho',
                    name: 'Andrea'
                },
                {
                    id: 2,
                    name: 'Gianni',
                    username: 'fgianni'
                }
            ]
        },
        {
            id: 2,
            label: 'Luca, Battista',
            url: '/chat/2',
            users: [
                {
                    id: 1,
                    username: 'apacho',
                    name: 'Andrea'
                },
                {
                    id: 3,
                    username: 'lsciuti',
                    name: 'Luca'
                },
                {
                    id: 4,
                    username: 'battuo',
                    name: 'Battista'
                }
            ]
        }
    ];

    private connectedUsers = [];

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s', this.port);

            socket.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.in(m.room.toString()).emit('message', m);
                //this.io.emit('message', m);
            });

            socket.on('room', (room: number) => {
                console.log('[server](room): %s', JSON.stringify(room));
                socket.join(room);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}
