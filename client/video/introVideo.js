$(function() {
    var iframe = $('#modalVideo')[0];
    var player = $f(iframe);

    $(document).on('click', '.a-qbilaVideo .a-openVideoInModal', function(){
      player.api('play');
    });

    $(document).on('click', '.a-videoModal .glyphicon-remove', function(){
      player.api('pause');
    });
});
