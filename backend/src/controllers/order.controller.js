import Order from "../models/order.model.js";

export async function addOrderItems(req, res) {
  try {
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No order items provided" });
    }

    const order = new Order({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod,
      totalAmount,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error("Error in addOrderItems:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "firstName email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Allow only the order owner or admins
    if (
      order.user._id.toString() !== req.user._id.toString() &&
      !req.user.isAdmin
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this order" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error in getOrderById:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateOrderToPaid(req, res) {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
    };

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error in updateOrderToPaid:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyOrders(req, res) {
  try {
    const orders = await Order.find({ user: req.user._id });
    console.log(orders)
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error in getMyOrders:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await Order.find({}).populate("user", "firstName email");
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error in getOrders:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateOrderToDelivered(req, res) {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.isDelivered = true;
    order.deliveredAt = Date.now();
    order.orderStatus = "DELIVERED";

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error in updateOrderToDelivered:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
