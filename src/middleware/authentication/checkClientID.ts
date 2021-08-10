import { clientController } from '../../containers'

const checkClientID = async (resolve: any, parent: any, args: any, ctx: any, info: any) => {
    try {
        // 1. Find client exist by req.body.client_id and req.body.client_secret
        // 2. If found client exist next() else throw new Error('Client ID is invalid.')
        // const findClientExist = await Client.findOne({
        //     where: {
        //       client_id: req.body.client_id,
        //       client_secret: req.body.client_secret,
        //     }
        //   })
        const condition = {
            client_id: '',
            client_secret: '',
        }
        const findClientExist = await clientController.findOne(condition);
        if (findClientExist) {
            return resolve(findClientExist)
          } else {
            throw new Error('Client ID is invalid.')
          }
    } catch (err) {
        console.log(err);
        // resolve.json({ ok: false, message: err.message })
        // return
    }
}

export default checkClientID