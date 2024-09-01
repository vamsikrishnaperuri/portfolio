$(document).ready(function(){
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height>100) {
            $("#navBar").addClass("shadow navbar-blur");
        } else {
            $("#navBar").removeClass("shadow navbar-blur");
        }
    });
    $("#navBar").on("show.bs.collapse",function(){
        $(this).addClass("shadow navbar-blur");
        $("#navIcon").html('<i class="fa-solid fa-xmark"></i>');
    });
    $(window).on("load",function(){
        $("#preLoader").fadeOut();
    });
    $("#navBar").on("hide.bs.collapse",function(){
        var height = $(window).scrollTop();
        if(height<250) $(this).removeClass("shadow navbar-blur")
        $("#navIcon").html('<i class="fa-solid fa-bars-staggered"></i>');
    });
    $('#contact_form').on('submit',function(e){
        e.preventDefault();
        var form = $(this);
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcE02wjAAAAAD0K2lsdu5hq0KmsfUhGuzQKKrRO', {action: 'submit'}).then(function(token) {
                $("#contact_form_submit").addClass("disabled");
                $("#contact_form_submit").html("Sending...");
                var url = form.attr('action');
                $.ajax({
                    method: 'POST',
                    url: url,
                    data: form.serialize()+"&rctoken="+token,
                    dataType: 'json',
                    success: function(data) {
                        if (data.status=="success") {var class_name = "success"}
                        else if (data.status=="error") {var class_name = "danger"}
                        else {var class_name = "warning"}
                        $("#contact_form_status").html("<p class='alert alert-"+class_name+"'>"+data.message+"</p>");
                        $("#contact_form_submit").removeClass("disabled");
                        $("#contact_form_submit").html("Send");
                    },
                    error: function() {
                        $("#contact_form_status").html("<p class='alert alert-danger'>There was an error! Please try again!</p>");
                        $("#contact_form_submit").removeClass("disabled");
                        $("#contact_form_submit").html("Send");
                    }
                });
            });
        });
    });
    
});
