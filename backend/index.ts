import { prisma } from "./lib/prisma.js"

async function getOrders() {

    const orders = await prisma.service_orders.findMany();

    console.log(orders)
}

getOrders()
