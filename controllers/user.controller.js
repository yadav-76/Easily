import userModels from "../models/user.model.js"

const usermodels=new userModels();
export default class userControllers{
    getAll(req,res){
        res.render("main",{userEmail:req.session.userEmail})
        

    }

    getJobs(req,res){
        let jobs=usermodels.getDetails();
        res.render("jobList",{jobs:jobs,userEmail:req.session.userEmail})

    }
    getView(req,res){
        let jobs=usermodels.getOnedetail(req.params.id);
        console.log(req.params.id)
        console.log(req.session.userEmail);
        res.render("viewDetails",{jobs:jobs,userEmail:req.session.userEmail})
        
    }
    getForm(req,res){
        res.render("applyForm")

    }
    getInfo(req, res){
        const fileurl="resume/"+ req.file.filename;
        const{name,email,contact}=req.body;
        console.log(contact);
        res.redirect('Received');
}
    getLogin(req,res){
        res.render("login");
}
getRegister(req,res){
    res.render("register");

}
getNewUserInfo(req,res){
    usermodels.registerUser(req.body);
    res.redirect("login");
}
addjobs(req,res){

    res.render("updatelist",{userEmail:req.session.userEmail})
}
updateList(req,res){
    console.log(req.body);
    usermodels.updatejobs(req.body);
    let jobs=usermodels.getDetails();
    res.render("jobList",{jobs:jobs,userEmail:req.session.userEmail})

}
userCheck(req,res){
    const{email,password}=req.body;
    console.log(req.body)
    const result=usermodels.isValidUser(email,password);
    console.log(result)
    if(result){
        req.session.userEmail=email;
        let jobs=usermodels.getDetails();
        res.render("jobList",{jobs:jobs,userEmail:req.session.userEmail})
    }else{
        res.send("invalid user or password");
        }
        

}
logOut(req,res){
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/login")
        }
    })
}
updatejob(req,res){
    res.render("updateDetails")

}
update(req,res){
    const id=req.params.id;
    console.log(id)
    let details=req.body;
    const jobs=usermodels.updateDetails(3,details);
    console.log(jobs);
    res.render("jobList",{jobs:jobs,userEmail:req.session.userEmail})
}
delete(req,res){
    const id=req.params.id;
    usermodels.deleteJob(id);
    let jobs=usermodels.getDetails();
    res.render("jobList",{jobs:jobs,userEmail:req.session.userEmail})
}
}
