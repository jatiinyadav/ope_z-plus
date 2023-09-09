# Prisma Learning
Steps:
1. npm init -y
2. npm install nodemon typescript ts-node @types/node --save-dev
3. npx tsc --init
4. npm install prisma --save-dev
5. npx prisma init --datasource-provider sqlite

6. Create Schema

7. npx prisma migrate dev --name init

8. For safe side: npm i @prisma/client
Create script.ts
In Package.json add "devStart": "nodemon script.ts"

npx prisma format to build relations in Models
