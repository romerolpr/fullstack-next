import { errorHandler } from "./";

function apiHandler(handler) {
    return async (res, req) => {
        const method = req.method
        if (!handler[method]) {
            // caso o método não for aceito
            return res.status(401).end(`${method} is not allowed in this context.`)
        }

        try {
            await handler[method](res, req)
        } catch (err) {
            // retorna o erro já tratado
            errorHandler(err, res)
        }
    }
}

export { apiHandler }