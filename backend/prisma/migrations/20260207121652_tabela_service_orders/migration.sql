-- CreateTable
CREATE TABLE "service_orders" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_orders_pkey" PRIMARY KEY ("id")
);
