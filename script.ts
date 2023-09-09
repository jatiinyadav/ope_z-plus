import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()  // To view queries BTS working in Prisma PrismaClient({log: ["query"]})

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: "Jatin Yadav",
            email: "yadav@gmail.com",
            favPosts: {
                create: {
                    rating: 2
                }
            },
            author: {
                create: {
                    rating: 3
                }
            }
        },
        select: {
            name: true,
            author: {
                select: {
                    rating: true
                }
            }
        }
    })
    console.log(user);
}

main()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })