export const logMiddleware = async (resolve: any, parent: any, args: any, ctx: any, info: any) => {
    try {
      const res = await resolve()
      return res
    } catch (e) {
      console.log(e)
    }
  }

export const logInput = async (resolve: any, root: any, args: any, context: any, info: any) => {
  try {
    console.log(`1. logInput: ${JSON.stringify(args)}`)
    const result = await resolve(root, args, context, info)
    console.log(`5. logInput`)
    return result
  } catch (e) {
    console.log(e)
  }
}

export const logResult = async (resolve: any, root: any, args: any, context: any, info: any) => {
  try {
    console.log(`2. logResult`)
    const result = await resolve(root, args, context, info)
    console.log(`4. logResult: ${JSON.stringify(result)}`)
    return result
  } catch (e) {
    console.log(e)
  }
}