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
        window.location.href = "search-result.html"; // page redirection
      //  showHideSearchBar('hide'); // hide search box
      //  $("#searchError").show().html(' '); // hide error msg
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
    $("#typeofvisitor").val() == 'Others' ? $("#visitorother").show() : $("#visitorother").hide();
    if($("#fullname").val() == '')
    {
        $("#name_error").show().html('Please enter your name');
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
    else if($("#firmname").val() == '')
    {
        $("#firmname_error").show().html('Please enter firm name');
        return false;
    }
    else if($("#typeofquery").val() == null || $("#typeofquery").val() == 0)
    {
        $("#typeofquery_error").show().html('Please select entery type');
        return false;
    }
    else if($("#typeofvisitor").val() == null || $("#typeofvisitor").val() == 0)
    {
        $("#typeofvisitor_error").show().html('Please select type of visitor');
        return false;
    }
    else if($("#typeofvisitor").val() == 'Others' && $("#othervisitor").val() == '')
    {
        $("#othervisitor_error").show().html('Please Enter other visitor information');
        return false;
    }
    else if($("#countryname").val() == null || $("#countryname").val() == 0)
    {
        $("#countryname_error").show().html('Please select country');
        return false;
    }
    else if($("#statename").val() == null || $("#statename").val() == 0)
    {
        $("#statename_error").show().html('Please select  state');
        return false;
    }
    else if($("#cityname").val() == null || $("#cityname").val() == 0)
    {
        $("#cityname_error").show().html('Please select city');
        return false;
    }
    else if($("#message").val() == '')
    {
        $("#message_error").show().html('Please enter your message');
        return false;
    }
    else 
    {
        var get_fullname = $("#fullname").val();
        var get_emailid = $("#emailid").val();
        var get_contactno = $("#contactno").val();
        var get_firmname = $("#firmname").val();
        var get_typeofquery = $("#typeofquery").val();
        var get_typeofvisitor = $("#typeofvisitor").val();
        var get_othervisitor = $("#othervisitor").val();
        var get_countryname = $("#countryname").val();
        var get_statename = $("#statename").val();
        var get_cityname = $("#cityname").val();
        var get_message = $("#message").val();

        SubmitUserQuery(get_fullname, get_emailid, get_contactno, get_firmname, get_typeofquery, get_typeofvisitor, get_othervisitor, get_countryname, get_statename, get_cityname, get_message);
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
    $("#enq_typeofvisitor").val() == 'Others' ? $("#enq_visitorother").show() : $("#enq_visitorother").hide();
    if($("#enq_fullname").val() == '')
    {
        $("#enq_name_error").show().html('Please enter your name');
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
    if($("#enq_firmname").val() == '')
    {
        $("#enq_firmname_error").show().html('Please enter firm name');
        return false;
    }
    else if($("#enq_typeofquery").val() == null || $("#enq_typeofquery").val() == 0)
    {
        $("#enq_typeofquery_error").show().html('Please select entery type');
        return false;
    }
    else if($("#enq_typeofvisitor").val() == null || $("#enq_typeofvisitor").val() == 0)
    {
        $("#enq_typeofvisitor_error").show().html('Please select type of visitor');
        return false;
    }
    else if($("#enq_typeofvisitor").val() == 'Others' && $("#enq_othervisitor").val() == '')
    {
        $("#enq_othervisitor_error").show().html('Please Enter other visitor information');
        return false;
    }
    else if($("#enq_countryname").val() == null || $("#enq_countryname").val() == 0)
    {
        $("#enq_countryname_error").show().html('Please select country');
        return false;
    }
    else if($("#enq_statename").val() == null || $("#enq_statename").val() == 0)
    {
        $("#enq_statename_error").show().html('Please select  state');
        return false;
    }
    else if($("#enq_cityname").val() == null || $("#enq_cityname").val() == 0)
    {
        $("#enq_cityname_error").show().html('Please select city');
        return false;
    }
    else if($("#enq_message").val() == '')
    {
        $("#enq_message_error").show().html('Please enter your message');
        return false;
    }
    else 
    {
        var enq_fullname = $("#enq_fullname").val();
        var enq_emailid = $("#enq_emailid").val();
        var enq_contactno = $("#enq_contactno").val();
        var enq_firmname = $("#enq_firmname").val();
        var enq_typeofquery = $("#enq_typeofquery").val();
        var enq_typeofvisitor = $("#enq_typeofvisitor").val();
        var enq_othervisitor = $("#enq_othervisitor").val();
        var enq_countryname = $("#enq_countryname").val();
        var enq_statename = $("#enq_statename").val();
        var enq_cityname = $("#enq_cityname").val();
        var enq_message = $("#message").val();

        SubmitUserQuery(enq_fullname, enq_emailid, enq_contactno, enq_firmname, enq_typeofquery, enq_typeofvisitor, enq_othervisitor, enq_countryname, enq_statename, enq_cityname, enq_message);
  
        showHideEnquireNow('hide');
        $(".enquirenowError").hide().html('');
        return true;
    }
}
/* enquirenow validation === end */



/* getintouch === onchange show other visitor  === start */
$("#typeofvisitor").change(function()
{
    var getintouchValue = $(this).val();
   // var getintouchValue = event.value || event.options[event.selectedIndex].value;
    if(getintouchValue == 'Others')
    {
        $("#visitorother").slideDown(300);
    }
    else 
    {
        $("#visitorother").slideUp(300);
    }
});
/* getintouch === onchange show other visitor  === end */


/* enquirynow === onchange show other visitor  === start */
$("#enq_typeofvisitor").change(function()
{
    var enquiryValue = $(this).val();
    // var enquiryValue = event.value || event.options[event.selectedIndex].value;
    if(enquiryValue == 'Others')
    {
        $("#enq_visitorother").slideDown(300);
    }
    else 
    {
        $("#enq_visitorother").slideUp(300);
    }
});
/* enquirynow === onchange show other visitor  === end */



// watchVideoPlay === start
function watchVideoPlay(val, src)
{
    var setSrc = "https://www.youtube.com/embed/"+src+"?rel=0&autoplay=1&mute=0&loop=0&showinfo=0&controls=0&modestbranding=1&playsinline=1";
    if(val == 'show')
    {
        $("#manufacturevideoIframe").attr('src',setSrc);
        $("#manufacturevideoWrap").fadeIn(500);
        $('body').css('overflow','hidden');  
    }
    else if(val == 'hide')
    {
        $("#manufacturevideoIframe").attr('src', src);
        $("#manufacturevideoWrap").fadeOut(500);
        $('body').css('overflow','auto');  
    }
    else 
    {
        alert('error');
    }
}
// watchVideoPlay === end





// success/failure popup === start
function showHideSuccessFailure(val, status)
{
    if(val == 'hide')
    {
        $("#success_failure_container").fadeOut(300);
        $("body").css("overflow","auto");

        $(".getintouchInput, .getintouchTextarea, .enquirenowInput, .enquirenowTextarea").val('');
        $('.getintouchSelect , .enquirenowSelect').each( function() {
            $(this).val($(this).find("option[selected]").val() );
        });

    }
    else if(val == 'show')
    {
        $("#success_failure_msg").html(status);
        $("#success_failure_container").fadeIn(300);
        $("body").css("overflow","hidden");
    }
    else 
    {
        // nothing
    }
}
// success/failure popup === end





// DecaEdge popup === start
function showHideDecaEdge(val)
{
    if(val == 'hide')
    {
        $("#decaedgetechnology").fadeOut(300);
        $("body").css("overflow","auto");
    }
    else if(val == 'show')
    {
        $("#decaedgetechnology").fadeIn(300);
        $("body").css("overflow","hidden");
    }
    else 
    {
        alert('error');
    }
}
// DecaEdge popup === end



 
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
        });
        var totalcount= $('.homebannerslider').slick('getSlick').slideCount;
        $("#homebannertotalslide").html(minTwoDigits(totalcount));
        $("#homebannercurrentslide").html(minTwoDigits(1));
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
            autoplay: true,
            autoplaySpeed: 8000,
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
            infinite: true,
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


    
    // product banner slider   === start
    if($(".product_banner_slider").length > 0)
    {
        $('.product_banner_slider').slick({
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
            $("#productcurrentslide").html(minTwoDigits(currentSlide+1));
        });
        var totalcount= $('.product_banner_slider').slick('getSlick').slideCount;
        $("#producttotalslide").html(minTwoDigits(totalcount));
        $("#productcurrentslide").html(minTwoDigits(1));
    }   
    // product banner slider   === end 
    
    
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




// query summit   === start
function SubmitUserQuery(name, mobile, email, contact_type, message) 
{
    $("#pageloader").show();
    jQuery.ajax(
           {
               type: "POST",
               contentType: "application/json; charset=utf-8",
               dataType: "json",
               data: "{'name':'" + name + "','mobile':'" + mobile + "','email':'" + email + "','contact_type':'" + contact_type + "','message':'" + message + "'}",
               url: "leadsubmit.aspx/SaveUserData",
               error: function (xhr, status, error) {
                    showHideSuccessFailure('show', "Oops, something wasn't right");  
                    $("#pageloader").hide();
               },
               success: function (response) {
                   //   debugger;
                   if (response.d == "success") {
                        showHideSuccessFailure('show', "Thank you for getting in touch!"); 
                   }
                   $("#pageloader").hide();
               }
           });
}
// query summit   === end



// state list   === start
function fnState(type) 
{
            jQuery.ajax(
           {
               type: "POST",
               contentType: "application/json; charset=utf-8",
               dataType: "json",
               data: "",
               url: "leadsubmit.aspx/StateAPI",
               error: function (xhr, status, error) {
               },
               success: function (response) {
                   console.log(response.d);
                   if(type == 'enquirenow')
                   {
                        $("#enq_statename").find('option').remove().end().append("<option value='0' selected disabled>SELECT STATE</option>").val(0);
                        $("#enq_statename").append(response.d);
                   }
                   if(type == 'getintouch')
                   {
                        $("#statename").find('option').remove().end().append("<option value='0' selected disabled>SELECT STATE</option>").val(0);
                        $("#statename").append(response.d);
                   }
               }
           });
}
$("#countryname").change(function()
{
    fnState('getintouch'); 
});
$("#enq_countryname").change(function()
{
    fnState('enquirenow'); 
});
// state list   === end




// city list   === start
function fnCity(type, state) 
{
            jQuery.ajax(
           {
               type: "POST",
               contentType: "application/json; charset=utf-8",
               dataType: "json",
               data: "{'state':'" + state + "'}",
               url: "leadsubmit.aspx/CityAPI",
               error: function (xhr, status, error) {
               },
               success: function (response) {
                   console.log(response.d);
                   if(type == 'enquirenow')
                   {
                        $("#enq_cityname").find('option').remove().end().append("<option value='0' selected>SELECT CITY</option>").val(0);
                        $("#enq_cityname").append(response.d);
                   }
                   if(type == 'getintouch')
                   {
                        $("#cityname").find('option').remove().end().append("<option value='0' selected>SELECT CITY</option>").val(0);
                        $("#cityname").append(response.d);
                   }
               }
            });
}
$("#statename").change(function()
{
    var statename = $(this).val();
    fnCity('getintouch', statename); 
});
$("#enq_statename").change(function()
{
    var statename = $(this).val();
    fnCity('enquirenow', statename); 
});
// city list   === end