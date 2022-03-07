import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient()


app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({ include: { hobby: true } })
    res.send(users)
})

app.get('/hobbies', async (req, res) => {
    const hobbies = await prisma.hobby.findMany({ include: { user: true } })
    res.send(hobbies)
})

app.get('/users/:id', async (req, res) => {
    const id = Number(req.params.id)
    const user = await prisma.user.findFirst({ where: { id: id }, include: { hobby: true } })
    if (user) {
        res.send(user)
    }
    else {
        res.status(404).send({ error: 'User not found' })
    }
})


app.get('/hobbies/:id', async (req, res) => {
    const id = Number(req.params.id)
    const hobby = await prisma.hobby.findFirst({ where: { id: id }, include: { user: true } })
    if (hobby) {
        res.send(hobby)
    }
    else {
        res.status(404).send({ error: 'Hobby not found' })
    }
})



app.post('/users', async (req, res) => {
    const { name, photo, email } = req.body

    const result = await prisma.user.create({
        data: {
            name,
            photo,
            email
        }
    })
    res.send(result)

})

app.post('/hobbies', async (req, res) => {
    const { name, photo, active, email } = req.body

    const result = await prisma.hobby.create({
        data: {
            name,
            photo,
            active,
            user: { connect: { email: email } }
        }
    })
    res.send(result)

})

app.delete('/users/:id', async (req, res) => {
    const id = Number(req.params.id)
    const user = await prisma.user.delete({ where: { id: id } })
    res.send(user)
})

app.delete('/hobbies/:id', async (req, res) => {
    const id = Number(req.params.id)
    const hobby = await prisma.hobby.delete({ where: { id: id } })
    res.send(hobby)
})

app.listen(4000, () => {
    console.log('Server running: http://localhost:4000')
})