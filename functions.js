var Lmode = [false, false, false, false, false]
  var Ltag = ["illMode", "ambMode", "sweMode", "preMode", "offMode"];
  function selectMode(n){
    var i = 0;
    for(i=0; i<=4; i++){
      if (i == n){
        if (Lmode[i] != true){
          document.getElementById(Ltag[i]).innerHTML = "ON";
          embedForm(n,"formFill");
        }
       Lmode[i] = true;
      }
      else {
        Lmode[i] = false;
        document.getElementById(Ltag[i]).innerHTML = "OFF";
      }
    }
  }
  function embedForm(n,idTag){
    switch(n){
      case 0: //illuminated
        document.getElementById(idTag).innerHTML =
        '<p id="colorSelection"><h3>Select illumination color</h3></p>\
          <input type="radio" name="mode" value="white"> White<br>\
          <input type="radio" name="mode" value="turqoise"> Turquoise<br>\
          <input type="radio" name="mode" value="green"> Green<br>\
          <input type="radio" name="mode" value="yellow"> Yellow<br>\
          <input type="radio" name="mode" value="orange"> Orange<br>\
          <input type="radio" name="mode" value="red"> Red<br>\
          <input type="radio" name="mode" value="pink"> Pink<br>\
          <input type="radio" name="mode" value="purple"> Purple<br>\
          <input type="radio" name="mode" value="blue"> Blue<br>\
          <input type="radio" name="mode" value="custom"> Custom';
          break;
      case 1: //ambient
        document.getElementById(idTag).innerHTML =
        '<p id="selAmbMode"><h3>In ambient mode</h3>\
          Light color will reflect current day/night cycles</p>';
          break;
      case 2: //sweep
        document.getElementById(idTag).innerHTML =
        '<a href="http://www.rapidtables.com/web/color/RGB_Color.htm">RGB Color Code<a>\
        <p id="sweColorLow"><h3>Choose lower limit color</h3></p>\
        <p id="redLow">\
          Red: <input type="Text"/></p><br>\
        <p id="greenLow">\
          Green: <input type="Text"/></p><br>\
        <p id="blueLow">\
          Blue: <input type="Text"/></p><br>\
        <p id="sweColorUp"><h3>Choose upper limit color</h3></p>\
        <p id="redUp">\
          Red: <input type="Text"/></p><br>\
        <p id="greenUp">\
          Green: <input type="Text"/></p><br>\
        <p id="blueUp">\
          Blue: <input type="Text"/></p><br>';
          break;
      case 3: //presets
        document.getElementById(idTag).innerHTML =
          '<p id="presets"><h3>Choose preset type</h3></p>\
          <input type="radio" name="mode" value="love"> Love<br>\
          <input type="radio" name="mode" value="happy"> Happy<br>\
          <input type="radio" name="mode" value="sad"> Sad<br>\
          <input type="radio" name="mode" value="blinking"> Blinking';
          break;
      case 4: //off
        document.getElementById(idTag).innerHTML =
        '<p id="selOff"><h3>Light is OFF but unit remains powered</h3></p>';
          break;
    }
  }
