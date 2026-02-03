import express from "express"
import { protectRoute } from "../middlewares/auth.middleware.js"
import { addOrderItems, getMyOrders, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid } from "../controllers/order.controller.js"

const router = express.Router()

router.get("/", protectRoute, getOrders)
router.post("/", protectRoute, addOrderItems)
router.get("/myorders", protectRoute, getMyOrders)
router.get("/:id", protectRoute, getOrderById)
router.put("/:id/pay", protectRoute, updateOrderToPaid)
router.put("/:id/deliver", protectRoute, updateOrderToDelivered)


export default router