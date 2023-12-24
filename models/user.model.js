let viewModel=[]

viewModel=[{ id:1,company:"Coding Ninjas",Designation:"Software Developer",location:"bangalore",CTC:100000,deadline:"15/12/12",
openings:3,applicants:1,skills:["Html","CSS","JavaScript","Nodejs"]},
{ id:2 ,company:"Apple",Designation:"FullStack Developer",location:"bangalore",CTC:100000,deadline:"30/12/12",
openings:4,applicants:3,skills:["Html","CSS","JavaScript","Nodejs","Express","React"]},
{ id:3,company:"Apple",Designation:"FullStack Developer",location:"bangalore",CTC:100000,deadline:"30/12/12",
openings:4,applicants:3,skills:["Html","CSS","JavaScript","Nodejs","Express","React"]}
]

export default class userModels{
    getDetails(){
        return viewModel;
    }
    updatejobs(jobDetails){
        const applicants=0;
        let l=viewModel.length;
        let id= l+1;
        jobDetails.applicants=applicants;
        jobDetails.id=id;
        viewModel.push(jobDetails);
        
    }
    getOnedetail(id){
        for(let i=0;i<viewModel.length;i++){
        let job=viewModel[i];
        if(job.id==id){
            return job
        }

        }
    }
    registerUser(user){
        users.push(user);
        console.log(users);
    }
    isValidUser(email,password){
        let result;
        users.forEach((u)=>{
            if(u.email===email && u.password===password){
                result=true;
            }else{
                result=false;
            }
        })
        return result
    }
    updateDetails(id,details){
        for(let i=0;i<viewModel.length;i++){
            if(viewModel[i].id==id){
                viewModel[i].company=details.company
                viewModel[i].Designation=details.Designation
                viewModel[i].CTC=details.CTC
                viewModel[i].location=details.location
                viewModel[i].deadline=details.deadline
                viewModel[i].openings=details.openings
            }
        }
        return viewModel
    }
    deleteJob(id){
        for(let i=0;i<viewModel.length;i++){
            if(viewModel[i].id==id){
                viewModel.splice(i,1);
            }
        }

    }    
}
var users=[ {
    name: 'likith',
    email: 'likithyadav123ab@gmail.com',
    contact: '141443143141',
    password: 'passwordchecking'
    }];
