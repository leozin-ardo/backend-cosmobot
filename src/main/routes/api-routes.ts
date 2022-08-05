import { Request, Response, Router } from "express";

export default (router: Router): void => {
    router.get("/health-check", (req: Request, res: Response) =>
        res.sendStatus(200)
    );
};
