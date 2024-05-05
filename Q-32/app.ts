let current_users: string[] = ['zain', 'Ali', 'farhan', 'kaleem', 'faisal']
let new_users: string[] = ['zain']

new_users.forEach((new_users) => {
if(
    current_users.some(
        (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    )

    ){
        console.log(`${new_users} will need to enter new user name`);
        
    }


    else {
        console.log(`${new_users} is available`);
        
    }
});