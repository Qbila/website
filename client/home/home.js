Template.home.rendered = function() {

  $(function(){
    var particleJSJson = 'js/particles.json';

    if(_QG.isSmallScreen.matches){
      particleJSJson = 'js/particlesSmallScreen.json';
    }

    particlesJS.load(
      'qbila-background',
      particleJSJson,
      function(){}
    );
  })

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
};
