// import Sequelize from 'sequelize'
// import postgres from '../../../database/postgresdb/connect'
// interface User {
//     name: string;
//   }

// export const UserModel = postgres.define('user', {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER
//   },
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   client_id: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   role: {
//     type: Sequelize.ENUM('operator_admin', 'operator_viewer', 'operator_editor', 'customer'),
//     defaultValue: 'customer',
//     allowNull: false,
//   },
//   refresh_token: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   refresh_token_expire: {
//     type: Sequelize.DATE,
//     allowNull: true,
//   },
// }, {
//   timestamps: true,
//   paranoid: true,
//   tableName: 'user',
// })

// // export default userModel
// export default User;


import Sequelize from 'sequelize'
import { Model, Optional } from 'sequelize';
import postgres from '../../../database/postgresdb/connect'

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  client_id: string;
  role: string;
  refresh_token: string;
  refresh_token_expire: Date
}

export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  client_id?: string;
  role?: string;
  refresh_token?: string;
  refresh_token_expire?: Date
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
  UserAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

const UserModel = postgres.define<UserInstance>(
  'user',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      unique: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    client_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM('operator_admin', 'operator_viewer', 'operator_editor', 'customer'),
      defaultValue: 'customer',
      allowNull: false,
    },
    refresh_token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    refresh_token_expire: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }
);

export default UserModel;