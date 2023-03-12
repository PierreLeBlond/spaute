# Spaute

To schedule brass band gigs

## Development

### Environment variable

A `DATABASE_URL` environment variable must point to your database url as `postgresql://USER:PASSWORD@HOST:PORT/DATABASE`

### Command

Install dependencies :

`npm run install`

Generate prisma declarations and zod definitions :

`npx prisma generate`

Seed the database :

`npx prisma db seed`

Migrate the db, will also run the above two commands :

`npx prisma migrate dev`

Drop all the tables and rebuild the db :

`npx prisma migrate reset`

Watch and launch dev server :

`npm run dev`
