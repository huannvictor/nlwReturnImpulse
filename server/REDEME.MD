# IMPORTANT!
Sempre que começar o novo projeto, re iniciar o prisma
- apaga a pasta prisma e .env
- $ npx prisma init
- configura o schema.prisma para o sqlite: https://www.prisma.io/docs/concepts/database-connectors/sqlite
- $ npx prisma migrate dev para criar a tabela

## modelo usado: 
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Feedback {
  id String @id @default(uuid())
  type String
  comment String
  screenshot String?

  @@map("feedbacks")
}