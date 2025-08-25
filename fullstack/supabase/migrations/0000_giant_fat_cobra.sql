CREATE TABLE "fullstacktodos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text DEFAULT 'todo',
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"userEmail" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
