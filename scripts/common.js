/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
     
});
/* onLoad === end */

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



/* show/hide menu === start */
$("#menubar").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    hideSearchBar();
    if($(this).hasClass("active"))
    {
        $("#menubar").removeClass("active");
        $("#menucontainer").slideUp(300);
        $('body').css('overflow','auto');
    }
    else 
    {
        $("#menubar").addClass("active");
        $("#menucontainer").slideDown(300);
        $('body').css('overflow','hidden');
    }
});
function menuMobileClose()
{
    if($(window).width() < 1256)
    {
        $("#menucontainer").slideUp(300);
        $("#menubar").removeClass("active");
    }
}
/* show/hide menu === end */




/* search bar in header === start */
function showSearchBar()
{
    $("#searchinheader").slideDown(300);
    $('body').css('overflow','hidden');
    menuMobileClose();
}
function hideSearchBar()
{
    $("#searchinheader").slideUp(300);
    $("#searchInput").val('');
    $('body').css('overflow','auto');
}
/* search bar in header === end */

 

/* Enquire Now popup === start */
function showHideEnquireNow(val)
{
    menuMobileClose();
    hideSearchBar();
    if(val == 'show')
    {
        $("#EnquireNowPopup").fadeIn(500);
        $("body").css("overflow","hidden");
    }
    else if(val == 'hide')
    {
        $("#EnquireNowPopup").fadeOut(500);
        $("body").css("overflow","auto");
    }
    else 
     {
        // nothing
     }
}
/* Enquire Now popup  === end */

/* getInTouch validation === start */
function getInTouchValidation()
{
    // debugger;
    var emailReg = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    $(".getintouchError").hide().html('');
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
        $(".getintouchError").hide().html('');
        return true;
    }
}
/* getInTouch validation === end */
  

 
/* enquirenow validation === start */
function enquirenowValidation()
{
    // debugger;
    var emailRegex = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    $(".enquirenowError").hide().html('');
    if($("#enq_fullname").val() == '')
    {
        $("#enq_name_error").show().html('Please enter your name');
        return false;
    }
    else if($("#enq_contactno").val() == '')
    {
        $("#enq_contactno_error").show().html('Please enter your mobile number');
        return false;
    }
    else if($("#enq_contactno").val().length != 10)
    {
        $("#enq_contactno_error").show().html('Invalid mobile number');
        return false;
    }
    else if (($("#enq_contactno").val().indexOf('9')) != 0 && ($("#enq_contactno").val().indexOf('8')) != 0 && ($("#enq_contactno").val().indexOf('7')) != 0 && ($("#enq_contactno").val().indexOf('6')) != 0) 
    {
        $("#enq_contactno_error").show().html('Mobile number start with digits like 9, 8, 7, 6');
        return false;
    }
    else if($("#enq_emailid").val() == '')
    {
        $("#enq_emailid_error").show().html('Please enter your email id');
        return false;
    }
    else if (!emailRegex.test($("#enq_emailid").val())) 
    {
        $("#enq_emailid_error").show().html('Please enter valid email id');
        return false;
    }
    else if($("#enq_typeofquery").val() == null || $("#enq_typeofquery").val() == '' || $("#enq_typeofquery").val() == 0)
    {
        $("#enq_typeofquery_error").show().html('Please select entery type');
        return false;
    }
    else if($("#enq_message").val() == '')
    {
        $("#enq_message_error").show().html('Please enter your message');
        return false;
    }
    else 
    {
        $(".enquirenowError").hide().html('');
        return true;
    }
}
/* enquirenow validation === end */
 





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
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0
        });
    }
 
});
//  slider   === end  

