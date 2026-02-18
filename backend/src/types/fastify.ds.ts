import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

declare module "fastify" {
  interface FastifyInstance {
    cognito: CognitoIdentityProviderClient;
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>;
  }
}
