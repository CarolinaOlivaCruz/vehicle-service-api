import { z } from "zod";

const revisionToDoSchema = z.object({
  id: z.number(),
  vehicle_id: z.number(),
  type: z.string(),
  concluded: z.boolean(),
  created_at: z.date(),
});
