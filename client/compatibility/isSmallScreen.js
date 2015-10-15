// qbila global variable
var _QG = {};

$( document ).ready(function() {

    // detect for whether modern browser with support for window.matchMedia
    // if not dected, set as small screen, only basic static information site.
    if(!!window.matchMedia){
      _QG.isSmallScreen = window.matchMedia("only screen and (max-width: 760px)");
    } else {
      _QG.isSmallScreen = true;
    }


    if (_QG.isSmallScreen.matches) {
        //Conditional script here
        console.log('is small screen');
        // particle.js not to be loaded. if loaded, with less number of particles.
        // background image is to be loaded ??
        // non animated version of htmls, if we are going for that
        // load landscape view css as well.
        // video not in modal
        return;
    }

    console.log('is large screen');
 });
