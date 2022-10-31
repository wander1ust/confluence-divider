/* ToDo: Sanitize HTML, REFACTOR CODE. Reorganize project structure.
   
   Bug: Multiplier resets to default value after pattern text input
*/
var divider = document.querySelector("#divider");
var multiplier = document.querySelector("#multiplier");
var fontColorInput = document.querySelector("#text-color");
let pattern = document.querySelector("#pattern");
var repeatCount = 10;

divider.addEventListener("click", () => {
  return "Happy Halloween!";
});

divider.addEventListener("click", () => {
  console.log("divider clicked!");
});

//  ToDo: Add window DOM ready load
handlePatternStyle();
handleDividerHeight();
handleBackgroundColor();
handleTextColor();
handlePatternText(multiplier.value);
handleFontSize();

function renderBackgroundImage() {
  var file = document.getElementById("file").files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var image = document.createElement("img");
    image.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* Color Picker */
function updateColorText(colorText) {
  fontColorInput.value = colorText;
}
function updateBackgroundColor(bgColor) {
  bgColorInput.value = bgColor;
}

function handlePatternStyle() {
  var radioBtns = document.forms["form1"].elements["divider_style"];
  const patternInput = document.querySelector("#input-pattern");

  for (var i = 0, max = radioBtns.length; i < max; i++) {
    radioBtns[i].onclick = function () {
      if (document.querySelector("input[id='patterned']:checked")) {
        patternInput.style.display = "block";
      }
      if (document.querySelector("input[id='solid']:checked")) {
        patternInput.style.display = "none";
      }
    };
  }
}

function handleDividerHeight() {
  const heightInput = document.querySelector("#height");
  heightInput.addEventListener("change", function (e) {
    divider.style.height = e.target.value + "px";
  });
}

function handleFontSize() {
  const fontSizeInput = document.querySelector("#font-size");
  fontSizeInput.addEventListener("change", function (e) {
    divider.style.fontSize = e.target.value + "px";
  });
}

function handleBackgroundColor() {
  const bgColorInput = document.querySelector("#bg-color-picker");
  bgColorInput.addEventListener("input", function (e) {
    divider.style.backgroundColor = e.target.value;
    console.log(e.target.value);
  });
}
function handleTextColor() {
  const colorInput = document.querySelector("#text-color");
  colorInput.addEventListener("input", function (e) {
    divider.style.color = e.target.value;
    console.log(e.target.value);
  });
}

function handlePatternText(n) {
  pattern.addEventListener("change", function (e) {
    printPattern(e.target.value, n);
    console.log(e.target.value);
    console.log("pattern: " + multiplier.value);
  });
}
// ToDo: limit char count
function printPattern(str, n) {
  // let count = multiplier.value ? multiplier.value : 10;
  let patternStr = "";
  divider.innerHTML = patternStr;
  for (var i = 0; i < n; i++) {
    patternStr += `<span id='pattern-str'>${str} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
    console.log("n = " + n);
  }
  divider.innerHTML = patternStr;
  console.log(patternStr);
}

function handleImageUpload() {
  const uploadImgBtn = document.querySelector("#img-uploader");
  uploadImgBtn.addEventListener("click", function (e) {
    renderBackgroundImage();
    alert("Coming soon!");
  });
}

function getMultiplier() {
  return multiplier.value;
}

multiplier.addEventListener("input", function (e) {
  repeatCount.value = e.target.value;
  console.log("pattern: " + e.target.value);
  printPattern(pattern.value, e.target.value);
});

var mode = "edit";

$(document).keydown(function (e) {
  if (e.keyCode == 49 && e.ctrlKey) {
    $("#container").toggle();
  }
});
