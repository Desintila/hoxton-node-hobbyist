import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const users = [
    {
        name: 'Desi Luzi',
        photo: 'https://avatars.dicebear.com/api/avataaars/desi.svg',
        email: 'desi@email.com',
        hobby: {
            create: [
                { name: 'reading', photo: 'https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/master/pass/books.jpg', active: true },
                { name: 'kayaking', photo: 'https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/master/pass/books.jpg', active: false }
            ]
        }
    },
    {
        name: 'Kleja Xha',
        photo: 'https://avatars.dicebear.com/api/avataaars/kleja.svg',
        email: 'kleja@email.com',
        hobby: {
            create: [
                { name: 'painting', photo: 'https://www.thesprucecrafts.com/thmb/4krlR_ONU4EDXKbCb8FCWFkz--Y=/2121x1414/filters:fill(auto,1)/GettyImages-922707682-5b90467bc9e77c0025931eef.jpg', active: true }
            ]
        }
    },
    {
        name: 'Pamela Mel',
        photo: 'https://avatars.dicebear.com/api/avataaars/pamela.svg',
        email: 'pamela@email.com',
        hobby: {
            create: [
                { name: 'photography', photo: 'https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg', active: true },
                { name: 'travellig', photo: 'https://travelbible.co/wp-content/uploads/2020/04/Solo-Travel-in-Nature-acbfea52bfaf.jpg', active: true }
            ]
        }
    }
]



async function createStuff() {
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
}

createStuff()