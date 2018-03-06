$(document).ready(function(){
  $('.dropdown-item').click(function () {
    $(this).parent('.dropdown-menu').removeClass('show')
  })
})