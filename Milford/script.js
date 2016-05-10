var main = function(){
  $('.dropdown img').click(function(){
    $('.dropdown-menu').toggle();
  })
  
 $('form').submit(function(){
     
    if($('#email').val() === ''){
        $('.email-error').text('Please enter your email');
    };

    if($('#password').val() === ''){
        $('.password-error').text('Please enter your password');
    }
    return false;
    })
};



$(document).ready(main);
