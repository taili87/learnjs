const users = [
    {id:1, name:'Ablaye'},
    {id:2, name:'Susan'},
    {id:3, name:'Anna'}
];

const articles = [
    {userId:1, articles:['one', 'two', 'three']},
    {userId:2, articles:['four', 'five']},
    {userId:3, articles:['six', 'seven', 'eight', 'nine']}
];

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user= users.find((user)=>{
            return user.name === name;
        })

        if(user){
            return resolve(user);
        }else{
            reject(`No such user with name: ${name}`);
        }
    })
    

    
}