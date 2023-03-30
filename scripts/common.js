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
function formvalidation()
{
    // debugger;
    var emailReg = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    $(".participate-errormsg").hide().html('');
    $(".participate-input, .participate-select").removeClass('participate-border');
    if($("#fullname").val() == '')
    {
        $("#fullname_errormsg").show().html('Please enter your name');
        $("#fullname").addClass('participate-border');
        return false;
    }
    else if($("#contactnumber").val() == '')
    {
        $("#contactnumber_errormsg").show().html('Please enter your mobile number');
        $("#contactnumber").addClass('participate-border');
        return false;
    }
    else if($("#contactnumber").val().length != 10)
    {
        $("#contactnumber_errormsg").show().html('Invalid mobile number');
        $("#contactnumber").addClass('participate-border');
        return false;
    }
    else if (($("#contactnumber").val().indexOf('9')) != 0 && ($("#contactnumber").val().indexOf('8')) != 0 && ($("#contactnumber").val().indexOf('7')) != 0 && ($("#contactnumber").val().indexOf('6')) != 0) 
    {
        $("#contactnumber_errormsg").show().html('Mobile number start with digits like 9, 8, 7, 6');
        $("#contactnumber").addClass('participate-border');
        return false;
    }
    else if($("#emailaddress").val() == '')
    {
        $("#emailaddress_errormsg").show().html('Please enter your email id');
        $("#emailaddress").addClass('participate-border');
        return false;
    }
    else if ($("#emailaddress").val() != "" && !emailReg.test($("#emailaddress").val())) 
    {
        $("#emailaddress_errormsg").show().html('Please enter valid email id');
        $("#emailaddress").addClass('participate-border');
        return false;
    }
    else if($("#address").val() == '')
    {
        $("#address_errormsg").show().html('Please enter your address');
        $("#address").addClass('participate-border');
        return false;
    }
    else if($("#entrytype").length == 1 && $("#entrytype").val() == null || $("#entrytype").val() == '' || $("#entrytype").val() == 0)
    {
        $("#entrytype_errormsg").show().html('Please select entery type');
        $("#entrytype").addClass('participate-border');
        return false;
    }
    else if($("#fearconquered").val() == '')
    {
        $("#fearconquered_errormsg").show().html('Please enter a fear conquered');
        $("#fearconquered").addClass('participate-border');
        return false;
    }
    else if($("#uploadphoto").length == 1 && $("#entrytype").val() == 'photo' && $("#uploadphoto").val() == '')
    {
        $("#uploadphoto_errormsg").show().html('Please select photo');
        $("#uploadphoto").addClass('participate-border');
        return false;
    }
    else if($("#uploadvideo").length == 1 && $("#entrytype").val() == 'video' && $("#uploadvideo").val() == '')
    {
        $("#uploadvideo_errormsg").show().html('Please select video');
        $("#uploadvideo").addClass('participate-border');
        return false;
    }
    else if($("#agreeterm").prop("checked") == false)
    {
        $("#agreeterm_errormsg").show().html('Please agree tearm and condition');
        return false;
    }
    else 
    {
        otppopupscreen(1);
        $(".participate-errormsg").hide().html('');
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
$("#donwscrollhome").click(function()
{
    $('html, body').animate({scrollTop: $(".rangewrap").offset().top - homejump }, 300);
});

    


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

