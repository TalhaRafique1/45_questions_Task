var current_users = ['zain', 'Ali', 'farhan', 'kaleem', 'faisal'];
var new_users = ['zain'];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter new user name"));
    }
    else {
        console.log("".concat(new_users, " is available"));
    }
});
