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


// before adding zero if less then 10 === start
function minTwoDigits(n) 
{
  return (n < 10 ? '0' : '') + n;
}
// before adding zero if less then 10 === end */


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



/* header fixed on scroll === start */
$(document).scroll(function() 
{
    var heightlocation = $(this).scrollTop();
        if (heightlocation > 120) 
        {
          $('#pageheader').addClass("headerfixed");
        } 
        else 
        {
            $('#pageheader').removeClass("headerfixed");
        }
});
/* header fixed on scroll === end */



/* show/hide menu === start */
$("#menubar").click(function()
{
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
    if(window.innerWidth <= 1255)
    {
        $("#menubar").removeClass("active");
        $("#menucontainer").slideUp(300);
        $('body').css('overflow','auto');
    }
}
/* show/hide menu === end */




/* search bar in header === start */
function showHideSearchBar(val)
{
    menuMobileClose();
    if(val == 'show')
    {
        $("#searchinheader").fadeIn(300);
        $('body').css('overflow','hidden');  
    }
    else if(val == 'hide')
    {
        $("#searchinheader").fadeOut(300);
        $('body').css('overflow','auto');
        $("#searchInput").val('');
    }
    else 
    {
        alert("Condition false");
    }
}
/* search bar in header === end */

 

/* Enquire Now popup === start */
function showHideEnquireNow(val)
{
    menuMobileClose();
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


/* search validation === start */
function searchvalidation()
{
    if($("#searchInput").val() == '')
    {
        $("#searchError").show().html('Please enter keywords');
        return false;
    }
    else 
    {
        showHideSearchBar('hide'); // hide search box
        $("#searchError").show().html(' ');
        return true;
    }
}
/* search validation === start */


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
        showHideErrorCase('show'); // error
       // showHideSuccessCase('show'); // success 

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
        
       // showHideErrorCase('show'); // error
        showHideSuccessCase('show'); // success 

        showHideEnquireNow('hide');
        $(".enquirenowError").hide().html('');
        return true;
    }
}
/* enquirenow validation === end */
 

// watchVideoPlay === start
function watchVideoPlay(val, src)
{
    var setSrc = "https://www.youtube.com/embed/"+src+"?rel=0&autoplay=1&mute=0&loop=0&showinfo=0&controls=0&modestbranding=1&playsinline=1";
    if(val == 'show')
    {
        $("#manufacturevideoIframe").attr('src',setSrc);
        $("#manufacturevideoWrap").fadeIn(500);
    }
    else if(val == 'hide')
    {
        $("#manufacturevideoIframe").attr('src', src);
        $("#manufacturevideoWrap").fadeOut(500);
    }
    else 
    {
        // nothing
    }
}
// watchVideoPlay === end





// success cass popup === start
function showHideSuccessCase(val)
{
    if(val == 'hide')
    {
        $("#case_success").fadeOut(300);
        $("body").css("overflow","auto");
    }
    else if(val == 'show')
    {
        $("#case_success").fadeIn(300);
        $("body").css("overflow","hidden");
    }
    else 
    {
        // nothing
    }
}
// success cass popup === end


// error cass popup === start
function showHideErrorCase(val)
{
    if(val == 'hide')
    {
        $("#case_error").fadeOut(300);
        $("body").css("overflow","auto");
    }
    else if(val == 'show')
    {
        $("#case_error").fadeIn(300);
        $("body").css("overflow","hidden");
    }
    else 
    {
        // nothing
    }
}
// error cass popup === end
 



 
$(function($) 
{
    // home banner slider   === start
    if($(".homebannerslider").length > 0)
    {
        $('.homebannerslider').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0
        }).on("afterChange", function(event, slick, currentSlide){
            $("#homebannercurrentslide").html(minTwoDigits(currentSlide+1));
            $("#homebannertotalslide").html(minTwoDigits(slick.slideCount));
        });
    }   
    // home banner slider   === end  
    


    // home product slider   === start 
    if($(".homeproductslider").length > 0 && $(".homeproductnav").length > 0)
    {
        $('.homeproductslider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            fade: true,
            infinite: true,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            asNavFor: '.homeproductnav'
          });
          $('.homeproductnav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.homeproductslider',
            dots: false,
            arrows: false,
            infinite: false,
            centerMode: false,
            focusOnSelect: true,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0'
          });
    }   
    // home product slider  === end  


    // home advantages slider   === start
    if($(".homeadvantageslider").length > 0)
    {
        $('.homeadvantageslider').slick({
            slidesToShow:4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 599,
                     settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 479,
                     settings: { slidesToShow:1 }
                }
            ]
        });
    }   
    // home advantages slider   === end  


    
    // product info slider   === start
    if($(".productinfoslider").length > 0)
    {
        $('.productinfoslider').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots:true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '0',
            initialSlide:0
        });
    }   
    // product info slider   === end  

    // product  slider   === start
    if($(".pro_slider").length > 0)
    {
        $('.pro_slider').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots:false,
            arrows: true,
            fade: true,
            autoplay: false,
            autoplaySpeed: 5000,
            infinite: true,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '0',
            initialSlide:0
        });
    }   
    // product slider   === end

});



