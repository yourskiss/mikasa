/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
     
});
/* onLoad === end */


/* show/hide menu === start */
$("#menubar").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    if($(this).hasClass("active"))
    {
        $("#menubar").removeClass("active");
        $("#menucontainer").slideUp(300);
    }
    else 
    {
        $("#menubar").addClass("active");
        $("#menucontainer").slideDown(300);
    }
});
$('body').click(function(e) // close on click body
{    
    if($(window).width() < 499)
    {
        if (e.target != $('#menubar') || e.target != $('#menucontainer')) 
        {
            $("#menubar").removeClass("active");
            $("#menucontainer").slideUp(300);
        }
    }
});
/* show/hide menu === end */


 

// only number validation === start
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
// only number validation === end

// only Letter validation === start
function isLetter(e) 
{
    var regex = new RegExp("^[a-zA-Z ]+$");
    var strigChar = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(strigChar)) {
        return true;
    }
    return false
}
// only Letter validation === end



/* validation === start */
function getInTouchValidation()
{
    // debugger;
    var emailReg = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    $(".hm_getintouchError").hide().html('');
    if($("#fullname").val() == '')
    {
        $("#name_error").show().html('Please enter your name');
        return false;
    }
    else if($("#contactno").val() == '')
    {
        $("#contactno_error").show().html('Please enter your mobile number');
        return false;
    }
    else if($("#contactno").val().length != 10)
    {
        $("#contactno_error").show().html('Invalid mobile number');
        return false;
    }
    else if (($("#contactno").val().indexOf('9')) != 0 && ($("#contactno").val().indexOf('8')) != 0 && ($("#contactno").val().indexOf('7')) != 0 && ($("#contactno").val().indexOf('6')) != 0) 
    {
        $("#contactno_error").show().html('Mobile number start with digits like 9, 8, 7, 6');
        return false;
    }
    else if($("#emailid").val() == '')
    {
        $("#emailid_error").show().html('Please enter your email id');
        return false;
    }
    else if (!emailReg.test($("#emailid").val())) 
    {
        $("#emailid_error").show().html('Please enter valid email id');
        return false;
    }
    else if($("#typeofquery").val() == null || $("#typeofquery").val() == '' || $("#typeofquery").val() == 0)
    {
        $("#typeofquery_error").show().html('Please select entery type');
        return false;
    }
    else if($("#message").val() == '')
    {
        $("#message_error").show().html('Please enter your message');
        return false;
    }
    else 
    {
        $(".hm_getintouchError").hide().html('');
        return true;
    }
}
/* validation === end */
  

 

/* show/hide msg === start */
function showhidemsg(val)
{
     if(val == 'show')
     {
        $("#msgpopup").fadeIn(500);
        $("body").css("overflow","hidden");
     }
     else if(val == 'hide')
     {
        $("#msgpopup").fadeOut(500);
        $("body").css("overflow","auto");
     }
     else 
     {
        // nothing
     }
}
/* show/hide msg === end */

var homejump = 0;
if($(window).width() > 1255)  homejump = 110;
if($("#donwscrollhome").length == 1 && $("#productrang").length == 1)
{
    $("#donwscrollhome").click(function()
    {
        $('html, body').animate({ scrollTop: $("#productrang").offset().top - homejump }, 500);
    });
}

    


// slider   === start 
$(function($) 
{
    if($(".bannerSlider").length > 0)
    {
        $('.bannerSlider').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0
        });
    }
});
//  slider   === end  

