require('dotenv').config()

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  NODE_PORT: process.env.NODE_PORT || 9000,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_DIALECT: process.env.DB_DIALECT,
  PASSPHRASE: process.env.PASSPHRASE || '',
}
