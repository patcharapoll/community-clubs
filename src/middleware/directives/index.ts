import { AuthenticationError } from 'apollo-server-express'
import jwt from 'jsonwebtoken'

const directiveResolvers = {
  isAuthenticated: (next: any, source: any, args: any, context: any) => {
    const token = context.req.get('Authorization');
    if (!token) {
      return new AuthenticationError('You must supply a JWT for authorization!');
    }

    try {
      const decoded = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.JWT_SECRET || 'secretKey'
      );
      context.user = decoded;

      return next();
    } catch (err) {
      return new AuthenticationError(`You are not authorized...`);
    }
  },
  hasScope: (next: any, source: any, args: any, context: any) => {
    const token = context.headers.authorization;
    const expectedScopes = args.scope;
    if (!token) {
      return new AuthenticationError('You must supply a JWT for authorization!');
    }
    const JWT_SECRET = ''

    try {
      const decoded: any = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.JWT_SECRET || JWT_SECRET
      );
      const scopes = decoded.scope.split(' ');
      if (expectedScopes.some((scope: any) => scopes.indexOf(scope) !== -1)) {
        return next();
      }
    } catch (err) {
      return new AuthenticationError(`You are not authorized. Expected scopes: ${expectedScopes.join(', ')}`)
    }
  }
};

export default directiveResolvers