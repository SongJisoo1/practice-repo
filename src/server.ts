import { App } from "./app";
import { env } from "./helper";

const app = new App();
const port: number = env.app.port;
const enviroment: string = env.app.enviroment;

app.start(port, enviroment);
