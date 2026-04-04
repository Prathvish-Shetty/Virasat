import express from "express"
import "dotenv/config"
import { connectDB } from "./db/db.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import orderRoutes from "./routes/order.route.js"
import reviewRoutes from "./routes/review.route.js"
import chatRoutes from "./routes/chat.route.js"
import mediaRoutes from "./routes/media.route.js"
import videoRoutes from "./routes/video.route.js";
import postRoutes from "./routes/post.route.js"
import communityRoutes from "./routes/community.route.js"
import discussionRoutes from "./routes/discussion.route.js"
import path from "path"

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}))
app.use(express.json())
app.use(cookieParser())

// app.get("/", (req, res) => {
//   res.send("check")
//   console.log("check")
// })

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/reviews", reviewRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/media", mediaRoutes)
app.use("/api/videos", videoRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/communities", communityRoutes);
app.use("/api/discussions", discussionRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")))
  app.get("/{*splat}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
  connectDB()
})