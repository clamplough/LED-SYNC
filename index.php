<!DOCTYPE html>
<html>
<head>
  <title>TEST</title>
  <script src = "functions.js"></script>

</head>

<body>
  <!-- MODE SELECTION -->  
  <p id="modeSelection">
    <h3>Mode Selection</h3>
    <h4>Illumination Mode <button onclick="selectMode(0)"><span id="illMode">OFF</span></button></h4>
    <h4>Ambient Mode <button onclick="selectMode(1)"><span id="ambMode">OFF</span></button></h4>
    <h4>Sweep Mode <button onclick="selectMode(2)"><span id="sweMode">OFF</span></button></h4>
    <h4>Preset Mode <button onclick="selectMode(3)"><span id="preMode">OFF</span></button></h4>
    <h4>Off <button onclick="selectMode(4)"><span id="offMode">OFF</span></button></h4>
  </p><br>
  <!-- SUBMIT BUTTON -->
  <form id="submit"><input type="submit" value="submit"></form>
  <!-- MAIN FORM -->
  <form id="subForm"><br>
    <div id="formFill"></div>
  </form>  

<!-- find menthods for:
  1) will need the time/date to autorun in the background even if page is not open -> might want to place that on the microprocessor if needed -> want to correct for timezone
  2) add in custom color option
  3) php to detect which mode is in use and validate responses to new form locations
  4) use php or some form of feedback to detect when "custom color" is selected and bring up the color sliders
  5) submit action (post) with php script
  6) pull javascript functions in from additional file
-->
</body>
</html>
