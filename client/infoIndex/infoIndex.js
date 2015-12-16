Template.infoIndex.rendered = function() {

  $(function(){
    $(document).scroll(function(){

      var govBg = $('#qbila-forGovernment .d-bgImage').css('background-attachment')

      if ( $(this).scrollTop() > $('#qbila-forGovernment').offset().top && govBg != 'fixed' ) {
        // fixed
        $('#qbila-forGovernment .d-bgImage2').css('background-image', 'none');
      }

      if ( $(this).scrollTop() <= $('#qbila-forGovernment').offset().top  && govBg != 'scroll' ) {
        
      }
    });
  });

};
