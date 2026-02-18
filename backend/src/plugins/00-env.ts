import fp from "fastify-plugin";
import fastifyEnv from "@fastify/env";
import { Type, Static } from "@sinclair/typebox";

const schema = Type.Object({
  REGION: Type.String(),
  AWS_COGNITO_USER_POOL_ID: Type.String(),
  AWS_COGNITO_CLIENT_ID: Type.String(),
  WEATHER_URL: Type.String(),
});

type EnvSchema = Static<typeof schema>;

export default fp(
  async (fastify) => {
    await fastify.register(fastifyEnv, {
      confKey: "config",
      schema: schema,
      data: process.env,
    });
  },
  { name: "env" },
);

declare module "fastify" {
  interface FastifyInstance {
    config: EnvSchema;
  }
}
