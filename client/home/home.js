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

  $(function(){
    $(document).scroll(function(){
      //console.log($(this).scrollTop());

      // TODO: make it a proper function with can input 1). element, 2). css property, 3). value, 4). value condition function
      // for the range the css property should have a set value.
      // get the current value.
      // match with the expected value
      // if no match, change
      /*
      {
        ele : $('#qbila-forGovernment .d-bgImage'),
        cssProp : 'background-attachment',
        conditionalValue : {

        }
      }
      */
      var govBg = $('#qbila-forGovernment .d-bgImage').css('background-attachment')
//console.log('asdf');
      if ( $(this).scrollTop() > $('#qbila-forGovernment').offset().top && govBg != 'fixed' ) {
        // fixed
        $('#qbila-forGovernment .d-bgImage2').css('background-image', 'none');
        //$('#qbila-forGovernment .d-bgImage').css('background-attachment', 'fixed');
        //$('#qbila-forGovernment .d-bgImage').css({ '-webkit-transform' : 'translate3d(0,0,0);' });
        //console.log('switched to fixed');
      }
      //console.log('zxvc');
     if ( $(this).scrollTop() <= $('#qbila-forGovernment').offset().top  && govBg != 'scroll' ) {
        // scroll
        //$('#qbila-forGovernment .d-bgImage').css({'background-attachment' : 'scroll'});
        //console.log('switched to scroll');
      }

      // $('#qbila-forGovernment .d-bgImage').css({'background-attachment' : $(this).scrollTop() > $('#qbila-forGovernment').offset().top ? "fixed":"scroll"});
      // console.log($('#qbila-forGovernment .d-bgImage').css('background-attachment'));
      // change when is not as desired
    });
  });
};
