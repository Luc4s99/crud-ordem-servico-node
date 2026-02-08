import { prisma } from "./lib/prisma.js"
import express from 'express'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get("/service-orders", async (req, res) => {

    const orders = await prisma.service_orders.findMany()
    res.json(orders)
})

app.get("/service-orders/:id", async (req, res) => {

    const orderId = parseInt(req.params.id)

    const order = await prisma.service_orders.findUnique(
        {
            where: {
                id: orderId
            }
        }
    )

    res.json(order)
})

app.post("/service-orders", async (req, res) => {

    const {code, client, description, date, status} = req.body

    const order = await prisma.service_orders.create(
        {
            data: {
                code: code,
                client: client,
                description: description,
                date: new Date(date),
                status: status,
                createdAt: new Date()
            }
        }
    )

    res.json(order)
})

app.put("/service-orders/:id", async (req, res) => {

    const orderId = parseInt(req.params.id)
    const {code, client, description, date, status} = req.body
    
    const order = await prisma.service_orders.update(
        {
            where: {
                id: orderId
            },

            data: {
                code: code,
                client: client,
                description: description,
                date: new Date(date),
                status: status,
                createdAt: new Date()
            }
        }
    )

    res.json(order)
})

app.delete("/service-orders/:id", async (req, res) => {

    const orderId = parseInt(req.params.id)

    const order = await prisma.service_orders.delete(
        {
            where: {
                id: orderId
            }
        }
    )

    res.json(order)
})

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000!")
})