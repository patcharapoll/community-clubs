const checkClientID = async (resolve: any, parent: any, args: any, ctx: any, info: any) => {
    try {
        // 1. Find client exist by req.body.client_id and req.body.client_secret
        // 2. If found client exist next() else throw new Error('Client ID is invalid.')
        
    } catch (err) {
        // resolve.json({ ok: false, message: err.message })
        return
    }
}

export default checkClientID