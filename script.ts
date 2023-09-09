import { PrismaClient } from '@prisma/client'
import { log } from 'console'
const prisma = new PrismaClient()

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
        }, include: {
            author: true,
            favPosts: true
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