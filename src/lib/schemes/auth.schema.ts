import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(), // You should display feedback messages
  password: z.string(),
});

export type LoginFields = z.infer<typeof LoginSchema>;
