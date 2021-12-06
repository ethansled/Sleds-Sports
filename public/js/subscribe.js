$(function(){
    $('.one form .btn').on('click',function(){ 
       $(this).parents('.one').animate({
            top : '-550px'
          },550);
      
    $(this).parents('.one').siblings('.two').
       animate({
            top : '0px'
          },550);
      return false;
    });
  
  $('.two .close').on('click',function(){
    $(this).parent().animate({
     top : '-550px'
    },550);
    
    $(this).parent().siblings('.one').animate({
     top : '0px'
    },550);
    return false;
   });
  });