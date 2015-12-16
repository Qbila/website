
Template.navigation.onRendered(function(){
  $('#responsive-menu-button').sidr({
    name: 'sidr-main',
    source: '#navigation'
  });

  $('.a-followedCities a').on('click', function(){
    $('.a-followedCities a').removeClass('a-active');
    $(this).addClass('a-active');
  });

  // $('.d-sidebarLogo').
});
