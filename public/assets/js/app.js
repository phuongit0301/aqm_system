$(document).ready(function() {
    $('.sidebar-menu li').hover(
      function() {
      var isCollapse = $('body').hasClass('sidebar-collapse');

      if(isCollapse) {
        var posTop = $(this).offset().top;
        var position = $(this).position();
        var dataHtml = $(this).html();

        $('.sidebar-hover').empty();
        $('.sidebar-hover').html(dataHtml);
        $('.sidebar-hover .fa').remove();
        $('.sidebar-hover img').remove();
        $('.sidebar-hover').css({'top': position.top});
        // if($('.sidebar').hasVerticalScrollBar()) {
        //   var posTop = $(this).offset().top;
        //   $('.sidebar-hover').css({'top': posTop - 100});
        // }

        $('.sidebar-hover').mouseleave(function() {
          $('.sidebar-hover').empty();
        });
      }
    }
  );

  //check sidebar is collapse
  changeIcon();

  //change icon menu when click
  $(document).on('click', '.icon-custom', function(e) {
    e.preventDefault();

    if($(this).hasClass('fa-arrow-left')) {
      $(this).addClass('fa-navicon').removeClass('fa-arrow-left');
    } else {
      $(this).addClass('fa-arrow-left').removeClass('fa-navicon');
    }
  });

  $(document).on('click', '.sidebar-menu li.treeview', function(e) {
      e.preventDefault();

      var _this = $(this);

      if(_this.find('.fa-angle-right').length > 0) {
        $('.sidebar-menu li.treeview .fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
        _this.find('.fa-angle-right').addClass('fa-angle-down').removeClass('fa-angle-right');
        _this.find('.treeview-menu li').first().addClass('active-link');
      } else {
        $('.sidebar-menu li.treeview .fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
        _this.find('.fa-angle-down').addClass('fa-angle-right').removeClass('fa-angle-down');
        _this.find('.treeview-menu li').first().removeClass('active-link');
      }
  });

  function changeIcon() {

    if($(window).width() > 375) {
      if($('body').hasClass('sidebar-collapse')) {
        $('.mainnav-toggle a.icon-custom').addClass('fa-navicon').removeClass('fa-arrow-left');
      } else {
        $('.mainnav-toggle a.icon-custom').addClass('fa-arrow-left').removeClass('fa-navicon');
      }
    } else {
        $('.mainnav-toggle a.icon-custom').addClass('fa-navicon').removeClass('fa-arrow-left');
    }

  }
});
