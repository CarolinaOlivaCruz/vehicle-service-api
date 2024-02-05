import { z } from "zod";

const customerSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    gender: z.string(),
    birth: z.date(),
    cpf: z.string(),
    address: z.string(),
    created_at: z.date(),
  });