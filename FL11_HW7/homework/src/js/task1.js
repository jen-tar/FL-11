let password;
let password_second;
let new_pass;
let new_pass_second;
let answer;
let email;

let user = {
    email: 'user@gmail.com',
    pass: 'UserPass'
};
let admin = {
    email: 'admin@gmail.com',
    pass: 'AdminPass'
};
let min_email = 6;
let min_pass = 5;


email = prompt('Please enter your email');
if (!email) {
    alert('Canceled');
} else if (email.length < min_email) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (email === admin.email || email === user.email) {
    password = prompt('Enter your password');
    if (password === '' || password === 'null') {
        alert('Canceled');
    } else if (email === admin.email && password === admin.pass || email === user.email && password === user.pass) {
        answer = confirm('Do you want to change your password?');
        if (answer === false) {
            alert('You have failed the change');
        } else {
            password_second = prompt('Please write the old password');
            if (password_second !== password) {
                alert('Wrong password');
            } else {
                new_pass = prompt('Please enter new password');
                if (new_pass.length < min_pass) {
                    alert('It’s too short password. Sorry.');
                } else {
                    new_pass_second = prompt('Enter new password one more time');
                    if (new_pass_second !== new_pass) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }

                }
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
