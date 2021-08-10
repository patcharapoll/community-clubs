import { Sequelize } from 'sequelize'
import vars from '../../config/var'

const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} = vars

// const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
//   host: DB_HOST,
//   port: DB_PORT,
//   dialect: DB_DIALECT,
//   logging: false,
//   operatorsAliases: false,
// })

const sequelize = new Sequelize('arv-club', 'arvdev', '1qazxsw2', {
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false || undefined,
  })
  

export default sequelize
