$(function() {
  var b = $("#button");
  var w = $("#wrapper_compromisso");
  var l = $("#list");
  
  w.height(l.outerHeight(true));

  b.click(function() {
  
    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }
  
  });
});