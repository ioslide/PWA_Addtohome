
"use strict";
( function () {
  window.requestAnimationFrame( function () {
  } );

  addToHomescreen( {
    autostart: true,
    autoHide: 0,
    logging: true,
    minSessions: 2,
    onShow: function () {
      console.log( "showing" );
    },
    onInit: function () {
      console.log( "initializing" );
    },
    onAdd: function () {
      console.log( "adding" );
    },
    onInstall: function () {
      console.log( "Installing" );
    },
    onCancel: function () {
      console.log( "Cancelling" );
    },
    displayNextPrime: true,
    customCriteria: true,
    displayPace: 0,
    customPrompt: {
      src: "/icon/android-icon-48x48.png"
    }
  } );

} )();
