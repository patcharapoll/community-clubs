const code = 'supersecret'

export const isLoggedIn = async (resolve: any, parent: any, args: any, ctx: any, info: any) => {
    // Include your agent code as Authorization: <token> header.
    const permit = ctx.req.get('Authorization') === code
  
    if (!permit) {
      throw new Error(`Not authorised!`)
    }
  
    return resolve()
}
