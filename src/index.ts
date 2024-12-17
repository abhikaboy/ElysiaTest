import { Elysia } from 'elysia';
import swagger from '@elysiajs/swagger';
import { run, users, db } from './database/database';
import userController from './controllers/users';
import healthController from './controllers/health';
import { AuthService } from './services/auth';

run();

const store = new Elysia();

const router = new Elysia().use(store).get('/meow', () => 'Hello Meow ', {
	requiresAuth: true,
});

const app = new Elysia()
	.use(AuthService)
	.use(userController)
	.use(healthController)
	.use(router)
	.use(swagger())
	.listen(3000);
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
