export function userAuth(req,res,next){
    const{eamil,password}=req.body;
    if(req.session.userEmail){
        console.log(req.session.userEmail)
        next();
    }else{
        res.redirect("login")
    }

}