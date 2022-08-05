import { Request, Response, NextFunction } from "express";

export const securityHeaders = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    res.set(
        "Content-Security-Policy",
        "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests"
    );
    res.set("Cross-Origin-Embedder-Policy", " require-corp");
    res.set("Cross-Origin-Opener-Policy", " same-origin");
    res.set("Cross-Origin-Resource-Policy", " same-origin");
    res.set("Expect-CT", " max-age=0");
    res.set("Origin-Agent-Cluster", " ?1");
    res.set("Referrer-Policy", " no-referrer");
    res.set(
        "Strict-Transport-Security",
        " max-age=15552000; includeSubDomains"
    );
    res.set("X-Content-Type-Options", " nosniff");
    res.set("X-DNS-Prefetch-Control", " off");
    res.set("X-Download-Options", " noopen");
    res.set("X-Frame-Options", " SAMEORIGIN");
    res.set("X-Permitted-Cross-Domain-Policies", " none");
    res.set("X-XSS-Protection", "0");
    next();
};
