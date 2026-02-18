import {
  AuthFlowType,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { FastifyPluginAsync } from "fastify";
import { loginUserSchema, registerUserSchema } from "../../../schema";
import {
  AuthBody,
  AuthErrorResponse,
  LoginResponse,
  RegisterResponse,
} from "../../../types/auth.types";

const authRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post<{
    Body: AuthBody;
    Reply: RegisterResponse | AuthErrorResponse;
  }>("/register", registerUserSchema, async function (request, reply) {
    const { email, password } = request.body;

    try {
      const command = new SignUpCommand({
        ClientId: fastify.config.AWS_COGNITO_CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [{ Name: "email", Value: email }],
      });

      const result = await fastify.cognito.send(command);

      return reply.status(201).send({
        message: "User registered. Check your email to confirm your account.",
        userSub: result.UserSub,
        confirmed: result.UserConfirmed,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Registration failed";

      return reply.status(400).send({ error: message });
    }
  });

  fastify.post<{
    Body: AuthBody;
    Reply: LoginResponse | AuthErrorResponse;
  }>("/login", loginUserSchema, async (request, reply) => {
    const { email, password } = request.body;

    try {
      const command = new InitiateAuthCommand({
        AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
        ClientId: fastify.config.AWS_COGNITO_CLIENT_ID,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      });

      const result = await fastify.cognito.send(command);
      const tokens = result.AuthenticationResult;

      return reply.send({
        accessToken: tokens?.AccessToken,
        idToken: tokens?.IdToken,
        refreshToken: tokens?.RefreshToken,
        expiresIn: tokens?.ExpiresIn,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Invalid credentials";

      return reply.status(401).send({ error: message });
    }
  });
};

export default authRoutes;
