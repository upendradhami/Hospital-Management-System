import express from "express";
import  authRoute from "./modules/auth/Route/auth.route.js"

const app  = express();
const PORT = process.env.PORT || '4000';
app.use(express.json());

app.use('/api/auth',authRoute);


app.get("/",(req,res) => {
  res.send("app is successfully sending responses");
});

app.listen(PORT,()=> {
  console.log("Backend is successfully running" + "http://localhost:"+PORT);
})