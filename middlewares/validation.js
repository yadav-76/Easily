function formValidationMiddleware(req,res,next){
    const { name, contact,password} = req.body;
    const errors = {};
    if (name == null || name.length < 5) {
    errors.name = "enter valid name of length greater than 4";
    }
    if (contact === null || contact.length < 10) {
    errors.contact = "enter valid mobile number of 10 digits";
    }
    if(password.length<10 || password==null){
        errors.password="Enter a valid password";
    }

    console.log(errors);
    if (errors.name || errors.contact || errors.password) {
    res.status(401).send(errors);
    }
    next()
}
export default formValidationMiddleware;