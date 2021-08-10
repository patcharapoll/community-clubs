import Sequelize from 'sequelize'
import { Model, Optional } from 'sequelize';
import postgres from '../../../database/postgresdb/connect'

export interface ClientAttributes {
  id: number;
  client_id: string;
  client_secret: string;
  name: string;
  description: string;
}

export interface IClient {
  id?: number;
  client_id?: string;
  client_secret?: string;
  name?: string;
  description?: string;
}

interface ClientCreationAttributes
  extends Optional<ClientAttributes, 'id'> {}

interface ClientInstance
  extends Model<ClientAttributes, ClientCreationAttributes>,
  ClientAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

const ClientModel = postgres.define<ClientInstance>(
  'client',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      unique: true,
    },
    client_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    client_secret: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
);

export default ClientModel;