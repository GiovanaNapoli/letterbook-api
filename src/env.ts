import { z } from 'zod';
import 'dotenv/config';

const schema = z.object({
  SERVER_PORT: z.preprocess((a) => parseInt(z.string().parse(a)), z.number()),
  TYPEORM_CONNECTION: z.string(),
  TYPEORM_HOST: z.string(),
  TYPEORM_USERNAME: z.string(),
  TYPEORM_PASSWORD: z.string(),
  TYPEORM_DATABASE: z.string(),
  TYPEORM_PORT: z.preprocess((a) => parseInt(z.string().parse(a)), z.number()),
});

export const env = schema.parse(process.env);
