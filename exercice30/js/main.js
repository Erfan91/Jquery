$('.mb-3').keyup(function(){
    if($('.mb-3').val().length < 5){
        $('.mb-3').addClass('is-invalid');
    }else if($('.mb-3').val().length > 5){
        $('.mb-3').addClass('is-valid');
    }
})