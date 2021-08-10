import { userController } from '../../containers'

const checkDupUser = async (resolve: any, parent: any, args: any, ctx: any, info: any) => {
  try {
    // const isDup = await User.isUserDuplication(req.body.username, req.body.client_id)
    const idDuplicate = await userController.findOne({
        username: '', 
        client_id: '',
    });
    if (idDuplicate) {
      throw new Error('User has already exist.')
    } else {
      return await resolve()
    }
  } catch (err) {
      console.log(err);
    // res.json({ ok: false, message: err.message })
    // return
  }
}

export default checkDupUser
