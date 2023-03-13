#!/bin/zsh

createdb prisma
cat > .env <<EOF
# Timestamp `date --iso-8601=seconds`
#
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings
DATABASE_URL=postgresql://$PGUSER:$PGPASSWORD@$PGHOST:$PGPORT/prisma
EOF

npx prisma migrate dev --name init
npx prisma db seed

echo You can now run \"npm run dev\"
zsh
