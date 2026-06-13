import { pgTable, serial, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const applicationsTable = pgTable("applications", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  data: jsonb("data").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const insertApplicationSchema = createInsertSchema(applicationsTable).omit({
  id: true,
  submittedAt: true,
});
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type Application = typeof applicationsTable.$inferSelect;
