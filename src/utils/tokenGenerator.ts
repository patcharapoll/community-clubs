import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import vars from '../config/var'

// const privateKey = fs.readFileSync(path.resolve(__dirname, '../../cert', 'private.key'))

const generateKey = (number: number, format: BufferEncoding | undefined) => crypto.randomBytes(number).toString(format)

export const generateClientID = (name: string) => `${name.substring(0,3)}${generateKey(20, 'hex')}`.toUpperCase()
export const generateClientSecret = () => generateKey(15, 'hex')
export const generateRefreshToken = () => generateKey(20, 'hex')
export const generateAccessToken = (payload: any) => jwt.sign(
  payload,
  process.env.JWT_SECRET || 'secretKey',
  // {
  //   key: 'secretKey',
  //   passphrase: vars.PASSPHRASE,
  // },
  {
    // algorithm: 'RS256',
    expiresIn: 300, // 5 mins
  })

export default generateAccessToken
