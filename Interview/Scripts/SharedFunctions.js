
$(document).ready(function () {
    $("#login").click(function () {
        var obj = {
            Email: $('input[name="Email"]').val(),
            Password: $('input[name="Password"]').val()
        }
        Login(obj);
    });
});


function Login(model) {
    $.ajax({
        url: "/Home/Login",
        type: "POST",
        data: model,
        success: function (data) {
            if (data === 'True') {
                $('#loginsuccess').show();
            } else {
                alert("Your password is wrong.");
            }
        },
        error: function () {
            alert("Your password is wrong.");
        }
    });
  
}

