function errorHandler(err, res) {
    
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized by invalid token.',
            error: err.message
        })
    } else if (typeof err === 'string') {
        return res.status(404).json({
            status: 404,
            message: 'Not found.'
        })
    }

    return res.status(500).json({
        status: 500,
        message: err.message
    })

}

export { errorHandler }