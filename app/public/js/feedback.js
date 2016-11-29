$(function(){
  $.getJSON('api', updateFeedback);

  $('.feedback-form').submit(function(e){
    e.preventDefault();
    $.post('api', {
      name: $('#feedback-form-name'). val(),
      title: $('#feedback-form-title'). val(),
      message: $('#feedback-form-message'). val()
    }, updateFeedback);
  });

  function updateFeedback(data){
    var output = '';
    $.each(data,function(key, item) {
      ouput += '<div class="feedback-item item-list media-list">';
      ouput +=  '<div class="feedback-item media">';
      ouput +=    '<div class ="feedback-info media-body">';
      ouput +=      '<div class ="feedback-head">';
      ouput +=        '<div class ="feedback-title"> '+ item.title + '<small class="feedback-name label label">';
      ouput +=       '</div>';
      ouput +=       '<div class="feedback-message"> '+ item.message + '</div>';
      ouput +=      '</div>';
      ouput +=     '</div>';
      ouput += '</div>';


    });
    $('.feedback-messages').html(output);
  }
});