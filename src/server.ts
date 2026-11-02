import cors from "@fastify/cors";
import Fastify from "fastify";
import { appRoutes } from "./routes.js";

const app = Fastify();

// @fastify/cors >= 9 only allows GET,HEAD,POST by default; the web app needs PATCH.
app.register(cors, {
  methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
});
app.register(appRoutes);

app
  .listen({
    host: "0.0.0.0",
    port: Number(process.env.PORT ?? 3333),
  })
  .then(() => {
    console.log("HTTP Server running!");
  });
