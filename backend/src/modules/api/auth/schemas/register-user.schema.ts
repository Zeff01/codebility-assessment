import { FromSchema } from 'json-schema-to-ts';
import { asJsonSchema } from '../../../../common/typings';

export type RegisterUserSchema = FromSchema<typeof registerUserSchema>;
export const registerUserSchema = asJsonSchema({
  type: 'object',
  additionalProperties: false,
  required: ['username', 'password'],
  properties: {
    username: { type: 'string', minLength: 4 },
    password: { type: 'string', minLength: 6 },
  },
});
