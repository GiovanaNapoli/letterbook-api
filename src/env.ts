import { z } from 'zod';
import 'dotenv/config';

const schema = z.object({
  SERVER_PORT: z.string(),
});

export const env = schema.parse(process.env);
