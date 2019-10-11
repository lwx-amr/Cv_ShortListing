$(document).ready(function(){

  // Show Password button
  $(".js-ShowPass").on('click',function() {
    let passInput = $(this).parent().find('input'),
        newValue;
    newVal = passInput.attr('type') === 'password' ? 'text' : 'password';
    passInput.attr('type',newVal);

  })

  // Adjust DateField
  $('.js-DateField').on('keydown',function(){
    if( event.code != 'Backspace' ){
      let currentVal = $(this).val(),
      fieldLen = currentVal.length;
      if( fieldLen == 2 || fieldLen == 5){
        let newVal = currentVal + '-';
        $(this).val(newVal);
      }
    }
  })
  $(document).on("change", ".file_uploader", function(evt) {
    var $source = $('#viewer-element');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
    $('.uploaded-element').addClass('done');
  });
  $('.js-RestVideo').on('click',function(){
    $(this).hide();
    $('.file_multi_video').val('');
    $('.uploaded-element').removeClass('done');
  })

  // Adjust Delete player Button
  $('.js-DeletePlayer').on('click',function(){
    $(this).parentsUntil('.list-unstyled').remove();
  })

  // Adjust Show Filters Menu
  $('.js-ToggleMenu').on('click',function(){
    $(this).toggleClass('active').next().slideToggle(200);
  })

  // To Add Scroll Class to navbar
  navbar_checker();
  $(window).on('scroll',function(){
    navbar_checker();
  });


  // Adjust Carousel
  if($('body').hasClass('explore')){
    $('.carousel').carousel('pause');
    $('.carousel').on('slid.bs.carousel', function () {
      arrows_checker();
    })
  }

  // Adjust Scrollin Down when click navbar links
  $('.navbar-nav li').on('click',function(e) {
    e.preventDefault();
    var sectionID=$(this).data('section');
    console.log(sectionID);
    $('body,html').animate({
      scrollTop: $('#'+sectionID).offset().top - 65
    },800)
    $(this).addClass('active').siblings().removeClass('active');
  })
  // Adjust Scrooling sync with navbar links
  $(window).on('scroll',function(){
    $('section').each(function(){
      let offTOp = $(this).offset().top - 75;
      if($(window).scrollTop()>= offTOp){
        var secID=$(this).attr('id');
        $('.navbar-nav li').each(function() {
          if($(this).data('section')==secID){
            $(".navbar-nav li").removeClass('active');
            $(this).addClass("active");
          }
        })
      }
    })
  })

  //----------------------------Start Functions--------------------------------

  // Links Active Changer
  function active_checker(element){
    $('.' + element).on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  }

  // Function To Add Scroll to navbar
  function navbar_checker(){
   var scrollTop = $(window).scrollTop();
   if(scrollTop>=120){
     $('.navbar').addClass('scroll');
   }else{
     $('.navbar').removeClass('scroll');
   }
  }

  //Arrows Checker
  function arrows_checker(){
    if($('.carousel-item:first').hasClass('active')){
      $('.left-one').hide();
      $('.right-one').show();
    }else if($('.carousel-item:last').hasClass('active')){
      $('.right-one').hide();
      $('.left-one').show();
    }else{
      $('.right-one').show();
      $('.left-one').show();
    }
  }
});

// validation Function
function validateForm(formID) {
  // This function deals with validation of the form fields
  var y,email,eNotice,i,password,password1,password2,valid = true;
  y = document.getElementsByClassName("req-input");
  email = document.getElementById("email");
  eNotice = document.getElementById("error-notice");
  password = document.getElementById("password");
  password1 = document.getElementById("password1");
  password2 = document.getElementById("password2");
  // Password Verify part
  if(typeof(password1) != 'undefined' && password1 != null && typeof(password2) != 'undefined' && password2 != null){
    if(password1.value!==password2.value){
      password2.className += " error-field";
      eNotice.innerHTML = "كلمة السر يجب ان تكون متطابقه فى المرتين";
      valid = false;
    }
  }
  // Email Part
  if(!validateEmail(email.value)){
    email.className += " error-field";
    if(password == null){
        eNotice.innerHTML = "برجاء ادخال بريد الكتروني صالح";
    }
    valid = false;
  }else{
    email.className = email.className.replace(" error-field", "");
  }
  // Empty Fields Parts
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " error-field";
      // and set the current valid status to false:
      valid = false;
      if(typeof(password2) != 'undefined' && password2 != null){
        eNotice.innerHTML = "برجاء ادخال جميع الحقول";
      }
    }else{
      y[i].className = y[i].className.replace(" error-field", "");
    }
  }
  if(valid){
    formID.submit();
  }else{
    eNotice.style.display ="block";
  }
}
// Email validation
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    return (true);
  return (false);
}
