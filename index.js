import express, { urlencoded } from "express";
import { dirname } from "path";
import expressEjsLayouts from "express-ejs-layouts";
import userControllers from "./controllers/user.controller.js";
import multer from "multer";
import { uploadFile } from "./middlewares/file-upload.js";
import formValidationMiddleware from "./middlewares/validation.js";
import { userAuth } from "./middlewares/userAuthentication.js";
import session from "express-session";


const userController=new userControllers();
export const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))
app.use("/css",express.static(dirname + "public/css"))
app.set("view engine","ejs")
app.use(expressEjsLayouts)
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
    }))



app.get("/",userController.getAll);

app.get("/jobs",userController.getJobs)


app.get("/viewDetails/:id",userController.getView)
app.get("/form",userController.getForm)


app.post('/test', (req, res) => {
    console.log(req.body);
    res.send('Received');
});
app.post("/form",uploadFile.single("resume"),userController.getInfo)
app.get("/login",userController.getLogin)
app.post("/login",userController.userCheck)
app.get("/register",userController.getRegister)
app.post("/register",formValidationMiddleware,userController.getNewUserInfo);
app.post("/",userController.userCheck);
app.get("/updatelist", userAuth,userController.addjobs)
app.post("/updatelist",userAuth,userController.updateList)
app.get("/logout",userController.logOut);
app.get("/updateDetails/:id",userController.updatejob)
app.post("/updateDetails/:id",userAuth,userController.update)
app.get("/deleteJob/:id",userAuth,userController.delete)
