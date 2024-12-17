import { Elysia } from 'elysia';

const usersController = new Elysia().group('/users', (app) =>
	app
		.get('/', ({ query }) => {
			return query;
		})
		.post('/', ({ body }) => {
			return body;
		}),
);

export default usersController;
