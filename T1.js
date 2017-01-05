//loading vars
var status;
var secondary;
var divDefault = "defaultStatus";
var colors = ["white", "turquoise", "green", "yellow", "orange", "red", "pink", "purple", "blue", "custom"];

function loadState(){
  xhr = new XMLHttpRequest();
  xhr.open('GET', 'testfile.txt', true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status == 200){
          status = xhr.responseText;
          showStatus();
        }
    }
  }
  xhr.send();
}

function showStatus(){
  status = status.toLowerCase();
  var statusArray = status.split("|");
  secondary = statusArray[1];
  alert(secondary);
  switch(statusArray[0]){
    case "illuminated":
      var pos = colors.indexOf(secondary);
      //selectMode(0);
      alert("about to write");
      writeIllumHTML(pos);
      break;
  /*  case "ambient":
      selectMode(1);
      break;
    case "sweep":
      selectMode(2);
      break;
    case "preset":
      selectMode(3);
      break;
    case "off":
      selectMode(4);
      break;
    default:
      document.getElementById(divDefault).innerHTML = "Accessing the current mode failed, please make new selection";
      */
  }
}

function writeIllumHTML(N){
  alert("writing");
  var common = '<input type="radio" name="mode" value=';
  var color = ["white", "turquoise", "green", "yellow", "orange", "red", "pink", "purple", "blue", "custom"];
  var word = color;
  for(i=0;i<10;i++){
    var content = document.createElement("content");
    var checkedStatus = "";
    if(i == N){
      checkedStatus = "checked";
    }
    word[i] = common +'"' + color[i] + '" ' + checkedStatus + '> ' + color[i].toUpperCase() + '<br>';
    content.innerHTML = word[i];
    document.getElementById("demo").appendChild(content);
  }
}
