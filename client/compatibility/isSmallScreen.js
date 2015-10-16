// qbila global variable
var _QG = {};

(function() {
  // detect for whether modern browser with support for window.matchMedia
  // if not dected, set as small screen, only basic static information site.
  if(!!window.matchMedia){
    _QG.isSmallScreen = window.matchMedia("only screen and (max-width: 760px)");
  } else {
    _QG.isSmallScreen.matches = true;
  }

  if (_QG.isSmallScreen.matches) {
    // is small screen
  }
})();
