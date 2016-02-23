function gradText(element, colorOne, colorTwo) {

  if (element.jquery) {
    element = element[0];
  }
  var string = element.innerHTML;
  var whiteSpace = string.match(/\x20/g) ? string.match(/\x20/g).length : 0; 
  element.innerHTML = '';
  for (i = 0, skip = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      skip += 1;
      element.innerHTML += string[i];
    } else {
      gradColor = createColor(colorOne, colorTwo, ((i - skip) / ((string.length - whiteSpace ) - 1)));
      element.innerHTML += '<span style="color:' + gradColor + '">' + string[i] + "</span>";
    }
  }
}

function createColor(color, colorAlt, ratio) {
  var endColor = '';
  color = color.substring(1);
  colorAlt = colorAlt.substring(1);
  var toHex = function(x) {
    x = x.toString(16);
    return (x.length == 1) ? '0' + x : x;
  };
  for (var i = 0; i < color.length; i += 2) {
    var calculated = Math.ceil(parseInt(color.substring(i, i + 2), 16) * ratio + parseInt(colorAlt.substring(i, i + 2), 16) * (1 - ratio));
    endColor += toHex(calculated > 255 ? 255 : calculated);
  }
  return '#' + endColor;
};