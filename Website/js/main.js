function sendEmail() {
    var form = $("#emailForm").val();
    var name = $("#inputName").val();
    var email = $("#inputEmail").val();
    var subject = $("#inputSubject").val();
    var message = $("#inputMessage").val();

    // $.post("submit.php", { name: name, email: email, subject: subject, message: message },
    //     function(data) {
    //         $('#results').html(data);
    //         $('#submitForm')[0].reset();
    //     });


    $("#emailForm")[0].reset();
}