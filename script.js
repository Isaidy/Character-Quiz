$("button").click(function(){
var question= $(".ques1").val();
var question2= $(".ques2").val();

if ( question2==="No" && question >= parseInt(50)) {
    $(".two").hide();
    $(".three").hide();
    $(".four").hide();
    $(".me").show();
    $(".me2").show();
    $(".me3").show();

}

else if ( question2==="Yes" && question >=parseInt(50)) {
    $(".mi").show();
    $(".mi2").show();
    $(".mi3").show();
    $(".one").hide();
    $(".three").hide();
    $(".four").hide();
    
}
else if ( question2==="Yes" && question<parseInt(50)) {
    $(".al").show();
    $(".al2").show();
    $(".al3").show();
    $(".one").hide();
    $(".two").hide();
    $(".four").hide();
}
    
    
else if ( question2==="No" && question<parseInt(50)) {
    $(".am").html("You are Amelia Shepherd");
    $(".am2").html("You are brave and strong");
    $(".am3").show();
    $(".one").hide();
    $(".two").hide();
    $(".three").hide();
    
}


    });