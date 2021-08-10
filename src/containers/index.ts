import 'reflect-metadata';
import Container from 'typedi';
import UserController from '../modules/user/controllers/user';
import AuthController from '../modules/auth/controllers/auth';
import ClientController from '../modules/user/controllers/client';

export const userController = Container.get(UserController);
export const authController = Container.get(AuthController);
export const clientController = Container.get(ClientController);
