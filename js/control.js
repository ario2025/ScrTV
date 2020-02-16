var screens = document.getElementsByClassName("screen");
document.addEventListener('keydown',function(evt){
  switch (evt.code) {
    case "Numpad0":
      evt.preventDefault();
      for ( i=0; i<screens.length;i++ ) {
        screens[i].style.opacity="0";
      }
      break;  
    case 'Digit2':
      evt.preventDefault();
      break;
    case 'F10':
      evt.preventDefault();
      break;
    default:
      break;
  };

  if(evt.key=="1"){
    evt.preventDefault();
    for ( i=0; i<screens.length;i++ ) {
      if( i==0 ){
        screens[0].style.opacity="1";
      } else {
        screens[i].style.opacity="0";
      }
    }
  }

  if(evt.key=="2"){
    evt.preventDefault();
    for ( i=0; i<screens.length;i++ ) {
      if( i==1 ){
        screens[1].style.opacity="1";
      } else {
        screens[i].style.opacity="0";
      }
    }
  }

  if(evt.key=="3"){
    evt.preventDefault();
    for ( i=0; i<screens.length;i++ ) {
      if( i==2 ){
        screens[2].style.opacity="1";
      } else {
        screens[i].style.opacity="0";
      }
    }
  }
});

screens[0].style.opacity="1";
