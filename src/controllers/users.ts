import { Elysia } from "elysia";
import { users } from "../database/database";

const usersController = new Elysia().group("/users", (app) =>
  app
    .get("/", ({ query }) => {
      return users.find(query).toArray();
    })
    .post("/", ({ body }) => {
      return users.insertOne({ body: body });
    }),
);

export default usersController;
