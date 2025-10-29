import { FromSchema } from 'json-schema-to-ts';
import { asJsonSchema } from '../../../../common/typings';

export type LoginUserSchema = FromSchema<typeof loginUserSchema>;
export const loginUserSchema = asJsonSchema({
  type: 'object',
  additionalProperties: false,
  required: ['username', 'password'],
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
});
