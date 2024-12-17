import { Elysia } from 'elysia';
import { jwt } from '@elysiajs/jwt';

export const AuthService = new Elysia({ name: 'AuthService' })
	.use(
		jwt({
			name: 'jwt',
			secret: 'dingus',
		}),
	)
	.macro(({ onBeforeHandle }) => ({
		requiresAuth: async (required) => {
			onBeforeHandle(async ({ jwt, headers }) => {
				if (!required) return { valid: true };
				const auth = headers['authorization'];
				if (!auth) throw new Error('No authorization header');
				/* Verify shape of header */
				const [type, token] = auth.split(' ');
				if (type !== 'Bearer') throw new Error('Invalid authorization header');
				console.log(`token: ${token}`);
				/* Verify token */
				console.log(jwt);
				let verify = await jwt.verify(token);
				/*  Return token */
				return {
					valid: verify,
					token: token,
				};
			});
		},
	}));
