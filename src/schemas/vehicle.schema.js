import { z } from "zod";

const vehicleSchema = z.object({
    id: z.number(),
    customer_id: z.number(),
    type: z.string(),
    plate: z.string(),
    brand: z.string(),
    model: z.string(),
    year_of_manufacture: z.number(),
    color: z.string(),
    current_mileage: z.number(),
    last_revision: z.date(),
    created_at: z.date(),
  });