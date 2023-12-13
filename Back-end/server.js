import  express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import articleRouter from './routes/articleRoute.js';
import userRouter from './routes/userRoute.js';
// import  './config/multer.js'
import './midleware/auth.js'

dotenv.config()
const app = express();


// app.use(express.static("upload"));

app.use("/upload", express.static("upload"));


//middleware
app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true}))


// //middlewear function//

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//testing api
app.get("/",(req, res) =>{
  res.json({message:'hello from api'})
})


app.listen (4000,()=>{
    console.log("server listening on port",process.env.PORT);
})



//routes
app.use('/articles',articleRouter);
app.use('/users',userRouter);

