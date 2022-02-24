import { errorHandler } from "./";

function apiHandler(handler) {
    
    return async (req, res) => {

        const method = req.method.toLowerCase();

        if (!handler[method])
            return res.status(401).end(`Method ${req.method} Not Allowed`);

        try {
            await handler[method](req, res);
        } catch (err) {
            errorHandler(err, res);
        }
    }
}

export { apiHandler }