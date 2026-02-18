
import awsLambdaFastify from '@fastify/aws-lambda'
import { app } from "./app";

export const handler = awsLambdaFastify(app)

export const authTriggerHandler = async (event: any) => {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
    return event;
};
