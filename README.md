# Prisma Learning
Steps:
1. npm init -y
2. npm install nodemon typescript ts-node @types/node --save-dev
3. npx tsc --init
4. npm install prisma --save-dev
5. npm i @prisma/client
6. npx prisma init --datasource-provider sqlite
8. Create Schema

9. npx prisma migrate dev --name init

10. Create script.ts
In Package.json add "devStart": "nodemon script.ts"

npx prisma format to build relations in Models
