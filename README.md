# Prisma Learning
Steps:
npm init -y
npm install nodemon typescript ts-node @types/node --save-dev
npx tsc --init
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite

Create Schema

npx prisma migrate dev --name init

For safe side: npm i @prisma/client
Create script.ts
In Package.json add "devStart": "nodemon script.ts"

npx prisma format to build relations in Models