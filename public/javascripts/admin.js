$(document).ready(function(){
  pageHeights();
  assertionListeners();
  $('table.tablesorter').tablesorter({sortList: [[0,0], [1,0]]});
})

$(window).resize(function(){
  pageHeights();
})

var pageHeights = function(){
  $('.wrapper').css('height',  $(window).height() - $('#header').outerHeight());
  $('.type-rules .rules').css('height', $('.type-rules').outerHeight() - $('.type-rules .header').outerHeight() - $('#error_explanation').outerHeight());
  $('.message-panel .messages').css('height', $('.message-panel').outerHeight() - $('.message-panel .header').outerHeight())
  $('.message-pane .body').css('height', $('.message-pane').outerHeight() - $('.message-pane .content').outerHeight());
};

function assertionListeners (){
  $('.assertion_property').change(function(){
    var field = $(this);
    var target = field.siblings('.assertion_expression');
    if (target.val() == "") {
      switch(field.val()) {
      case '1': target.val($('#message_from_name').text()); break;
      case '2': target.val($('#message_from_address').text()); break;
      case '3': target.val($('#message_subject').text()); break;
      }
    }
  });
}

$(document).ready(function($) {
    $('a[rel*=facebox]').facebox();
    $(".input-datepicker").datepicker({ dateFormat: 'yy-mm-dd'});
})
