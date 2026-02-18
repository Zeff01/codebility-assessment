import fp from "fastify-plugin";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoJwtVerifier } from "aws-jwt-verify";

export default fp(
  async (fastify) => {
    const client = new CognitoIdentityProviderClient({
      region: fastify.config.REGION,
    });

    const verifier = CognitoJwtVerifier.create({
      userPoolId: fastify.config.AWS_COGNITO_USER_POOL_ID,
      tokenUse: "access",
      clientId: fastify.config.AWS_COGNITO_CLIENT_ID,
    });

    fastify.decorate("cognito", client);

    fastify.decorate("authenticate", async (request: any, reply: any) => {
      const authHeader = request.headers.authorization;

      if (!authHeader?.startsWith("Bearer ")) {
        return reply.status(401).send({ error: "Missing or invalid token" });
      }

      const token = authHeader.split(" ")[1];

      try {
        const payload = await verifier.verify(token);
        request.user = payload;
      } catch {
        return reply.status(401).send({ error: "Invalid or expired token" });
      }
    });
  },
  { name: "cognito" },
);
