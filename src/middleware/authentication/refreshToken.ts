
import { userController } from '../../containers'
import { generateAccessToken } from '../../utils/tokenGenerator'
import { UserAttributes } from '../../modules/user/models/user'

const refreshToken = async (resolve: any, parent: any, args: any, ctx: any, info: any) => {
  try {
    // const grantType = req.body.grant_type
    const grantType = null

    if (grantType === 'password') {
      return
    } else if (grantType === 'refresh_token') {
      const findUser: UserAttributes | null = await userController.findOne({
        //   refresh_token: req.body.refresh_token,
        refresh_token: '',
      })
      if (findUser) {
        const expired: any = findUser.refresh_token_expire
        const current: any = new Date()
        const isExpire: boolean = (expired - current) < 0
        if (isExpire) {
          throw new Error('refresh_token had expired, please log in again.')
        } else {
          const result = resolve({
            ok: true,
            access_token: generateAccessToken({ username: findUser.username, role: findUser.role }),
            expires_in: '5m',
            refresh_token: findUser.refresh_token,
            tokenType: 'Bearer' 
          })
          return result
        }
      } else {
        throw new Error('Invalid refresh_token, please try again.')
      }
    } else {
      throw new Error('Invalid input.')
    }
  } catch (err) {
    console.log(err);
    // return
  }
}

export default refreshToken
