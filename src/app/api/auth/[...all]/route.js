
import { toNextJsHandler } from "better-auth/next-js";

export const GET = async (req, res) => {
    const { auth } = await import("@/lib/auth");
    const handlers = toNextJsHandler(auth);
    return handlers.GET(req, res);
}

export const POST = async (req, res) => {
    const { auth } = await import("@/lib/auth");
    const handlers = toNextJsHandler(auth);
    return handlers.POST(req, res);
}