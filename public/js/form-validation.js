$(document).ready( function() {
    $("#data-form").on('submit', function(event){     
        var valid = true; // valid flag
        var errorBorder = '#CC0000'; // error border color
        // loop through input elements
        $("#name, #email").each(function(){
            $(this).css('border-color','');
            // if value is empty
            if(!containText($(this).val())){
                $(this).css('border-color', errorBorder);
                valid = false;
            }
            var emailValid = validateEmail($(this).val());
            // if emial is not valid
            if($(this).attr("type")=="email" && !emailValid) {
                $(this).css('border-color', errorBorder); 
                valid = false;          
            }   
        });
        // data is good, return true
        if(valid){
            return true;
        }
        event.preventDefault(); 
    });
    // remove border on key up
    $("#name, #email").keyup(function() { 
        $(this).css('border-color',''); 
    });
});

// check email
function validateEmail (email){  
   var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailReg.test(email); 
}

// check input text
function containText (input){  
   return $.trim(input);
}