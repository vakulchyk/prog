$(function() {
    // cashing DOM
    var $name = $('#name-input');
    var $surname = $('#surname-input');
    var $email = $('#email-input');
    var $phone = $('#phone-input');

    var $usersTable = $('#users-table');
    var $winnersList = $('#winners-list');

    var users = new Array();
    
    // addinng new user to the users[] and to #users-table
    $('#add-user').on("click", function() {
        if (isFormValid()) {
            var newUser = {
                name: $name.val(),
                surname: $surname.val(),
                email: $email.val(),
                phone: $phone.val()
            }
            users.push(newUser);
            $usersTable.append('<tr><td>'+ newUser.name + '</td><td>'+ newUser.surname + '</td><td>'+ newUser.email + '</td><td>'+ newUser.phone + '</td></tr>');
            
            // cleaning input fields
            $name.val('');
            $surname.val('');
            $email.val('');
            $phone.val('');
        }

        function isFormValid() {
            if ($name.val().trim() && $surname.val().trim() && $email.val().trim()) {
                return true;
            }
            else {return false;}
        }
    })

    // checking that name field !=empty
    $('#name-input').on('focusout keydown', function() {
        if(!$(this).val().trim()) {
            $(this).parent().addClass('has-error');
        }
        else {
            $(this).parent().removeClass('has-error');
        }
    });
    // checking that surname fields !=empty
    $('#surname-input').on('focusout keydown', function() {
        if(!$(this).val().trim()) {
            $(this).parent().addClass('has-error');
        }
        else {
            $(this).parent().removeClass('has-error');
        }
    });
    // checking that email fields !=empty && email is valid
    $('#email-input').on('focusout keydown', function() {
        if(!$(this).val().trim() || !validateEmail($email.val())) {
            $(this).parent().addClass('has-error');
        }
        else {
            $(this).parent().removeClass('has-error');
        }
    });

    //email validation function
    function validateEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log(regex.test(email));
        return regex.test(email);
    }

    // add random winner 
    $('#new-winner').on('click', function() {
        if(users.length) {
            var winner = users[Math.floor(Math.random()*users.length)];
            $winnersList.val($($winnersList).val() + winner.surname + ', ');
        }
    })


})