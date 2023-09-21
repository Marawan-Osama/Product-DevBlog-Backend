import express from "express"
import router from "./routes"

const app = express()

app.use(express.json())
app.use('/api/v1', router)

app.get("/", (req, res) => {
  res.status(200).json({"msg": "This is a test"})
})

app.listen( 3000, () => {
  console.log("Server is running on port 3000")
})
