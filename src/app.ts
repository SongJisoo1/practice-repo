import "reflect-metadata";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
import { AppDataSource } from "./helper";

export class App {
    public app: express.Application;
    private apiRoutes = {
        users: "/api/users",
        posts: "/api/posts",
    };

    constructor() {
        this.app = express();
        this.setMiddlewares();
        this.setCustomMiddlewares();
        this.routes();
    }

    private setMiddlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(cookieParser());
    }

    private setCustomMiddlewares() {
        // this.app.use(exceptionFilter);
    }

    private routes() {
        // this.app.use(this.apiRoutes.users, /* userRouter */);
        // this.app.use(this.apiRoutes.posts, /* postRouter */);
    }

    public async start(port: number, environment: string) {
        try {
            // await AppDataSource.initialize();
            this.app.listen(port, () => {
                console.log(`🚀 App running on port ${port}`);
                console.log(`Running in ${environment}`);
            });
        } catch (error) {
            console.error(error);
        }
    }
}
