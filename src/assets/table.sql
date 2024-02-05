CREATE TABLE "customer" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "phone" varchar,
  "gender" varchar,
  "birth" date,
  "cpf" varchar,
  "address" varchar,
  "created_at" timestamp
);

CREATE TABLE "vehicle" (
  "id" integer PRIMARY KEY,
  "customer_id" integer,
  "type" varchar,
  "plate" varchar,
  "brand" varchar,
  "model" varchar,
  "year_of_manufacture" integer,
  "color" varchar,
  "current_mileage" integer,
  "last_revision" date,
  "created_at" timestamp
);

CREATE TABLE "revision_to_do" (
  "id" integer PRIMARY KEY,
  "vehicle_id" integer,
  "type" varchar,
  "concluded" boolean,
  "created_at" timestamp
);

ALTER TABLE "vehicle" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "revision_to_do" ADD FOREIGN KEY ("vehicle_id") REFERENCES "vehicle" ("id");
