import { FromSchema } from 'json-schema-to-ts';
import { asJsonSchema } from '../../../../common/typings';

export type QueryWeather = FromSchema<typeof queryWeatherSchema>;
export const queryWeatherSchema = asJsonSchema({
  type: 'object',
  additionalProperties: false,
  required: ['location'],
  properties: {
    location: {
      type: 'string',
      examples: ['Pasig City'],
    },
    mode: {
      type: 'string',
      enum: [
        'current_conditions',
        'daily_forecast',
        'hourly_forecast',
        'history',
      ],
    },
  },
});
