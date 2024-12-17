import { Elysia } from "elysia";

const healthController = new Elysia().get("/health", () => "Server is alive!");

export default healthController;
