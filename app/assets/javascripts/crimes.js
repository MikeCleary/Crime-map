$(document).ready(function() {

  $('#new-comment-box').on('ajax:success', function() {
    $('#new-comment').removeClass("error")
    $('#new-comment').val("")
  });

  $('#new-comment-box').on('ajax:error', function() {
    $('#new-comment').addClass("error")
  });

  // $('#add-comment').click(function() {
  //   var content = $('#comment-text').val();
  //   $.ajax({
  //       url: '/comments/create',
  //       data: { comment: {content: content} },
  //       success: function(html) {
  //         $('#comment-text').val("");
  //       },
  //       error: function() {
  //         $('#comment-text').addClass('error')
  //       }
  //     })
  // });
  // $('body').on('click', '.remove' function() {
  //   $.ajax({
  //     url: '/comments/destroy',
  //     data: {}
  //   })
  // })
});