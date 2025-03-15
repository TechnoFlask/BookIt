import {
  date,
  pgEnum,
  pgTable,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core"

export const organizationTable = pgTable(
  "organization",
  {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar().notNull(),
    address: varchar().notNull(),
  },
  (t) => [unique().on(t.name, t.address)]
)

export const doctorTable = pgTable("doctor", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar().notNull(),
  organization: uuid().references(() => organizationTable.id),
  department: varchar().notNull(),
  certifications: varchar().notNull(),
})

export const slotEnum = pgEnum("slot", [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
])

export const appointmentTable = pgTable("appointment", {
  id: uuid().primaryKey().defaultRandom(),
  user_id: varchar().notNull(),
  doctor_id: uuid()
    .references(() => doctorTable.id)
    .notNull(),
  booking_slot: slotEnum(),
  booking_date: date("date").defaultNow(),
})
