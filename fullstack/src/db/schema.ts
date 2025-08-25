import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id:       serial('id').primaryKey(),
  email:    text('email').notNull().unique(),
  password: text('password').notNull(),
});
export type User = typeof users.$inferSelect;

export const todos = pgTable('fullstacktodos', {
  id:        serial('id').primaryKey(),
  title:     text('title').default('todo'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  completed: boolean('completed').default(false).notNull(),
  userEmail: text('userEmail').notNull(),
});
export type Todo = typeof todos.$inferSelect;

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}));

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(users, {
    fields:     [todos.userEmail],
    references: [users.email],
  }),
}));
