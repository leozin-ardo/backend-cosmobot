import express, { Express } from "express";
import setMiddlewares from "@/main/config/middlewares";
import setRoutes from "@/main/config/routes";

const appConfigurations = (): Express => {
    const app = express();
    setMiddlewares(app);
    setRoutes(app);
    return app;
};

export { appConfigurations };
