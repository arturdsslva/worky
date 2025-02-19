-> MIGRATIONS
❯ npm run typeorm migration:create src/data/migrations/CreateUser
❯ npm run typeorm -- -d ./src/data/datasources/ormconfig.ts migration:run
