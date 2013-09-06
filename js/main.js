var colorNames = (function(window, document, undefined) {
  'use strict';

  var colors = {
    AliceBlue: "#F0F8FF",
    AntiqueWhite: "#FAEBD7",
    Aqua: "#00FFFF",
    Aquamarine: "#7FFFD4",
    Azure: "#F0FFFF",
    Beige: "#F5F5DC",
    Bisque: "#FFE4C4",
    Black: "#000000",
    BlanchedAlmond: "#FFEBCD",
    Blue: "#0000FF",
    BlueViolet: "#8A2BE2",
    Brown: "#A52A2A",
    BurlyWood: "#DEB887",
    CadetBlue: "#5F9EA0",
    Chartreuse: "#7FFF00",
    Chocolate: "#D2691E",
    Coral: "#FF7F50",
    CornflowerBlue: "#6495ED",
    Cornsilk: "#FFF8DC",
    Crimson: "#DC143C",
    Cyan: "#00FFFF",
    DarkBlue: "#00008B",
    DarkCyan: "#008B8B",
    DarkGoldenRod: "#B8860B",
    DarkGray:  "#A9A9A9",
    DarkGreen: "#006400",
    DarkKhaki: "#BDB76B",
    DarkMagenta: "#8B008B",
    DarkOliveGreen: "#556B2F",
    Darkorange: "#FF8C00",
    DarkOrchid: "#9932CC",
    DarkRed: "#8B0000",
    DarkSalmon: "#E9967A",
    DarkSeaGreen: "#8FBC8F",
    DarkSlateBlue: "#483D8B",
    DarkSlateGray: "#2F4F4F",
    DarkTurquoise: "#00CED1",
    DarkViolet: "#9400D3",
    DeepPink: "#FF1493",
    DeepSkyBlue: "#00BFFF",
    DimGray: "#696969",
    DodgerBlue: "#1E90FF",
    FireBrick: "#B22222",
    FloralWhite: "#FFFAF0",
    ForestGreen: "#228B22",
    Fuchsia: "#FF00FF",
    Gainsboro: "#DCDCDC",
    GhostWhite: "#F8F8FF",
    Gold: "#FFD700",
    GoldenRod: "#DAA520",
    Gray: "#808080",
    Grey: "#808080",
    Green: "#008000",
    GreenYellow: "#ADFF2F",
    HoneyDew: "#F0FFF0",
    HotPink: "#FF69B4",
    IndianRed: "#CD5C5C",
    Indigo : "#4B0082",
    Ivory: "#FFFFF0",
    Khaki: "#F0E68C",
    Lavender: "#E6E6FA",
    LavenderBlush: "#FFF0F5",
    LawnGreen: "#7CFC00",
    LemonChiffon: "#FFFACD",
    LightBlue: "#ADD8E6",
    LightCoral: "#F08080",
    LightCyan: "#E0FFFF",
    LightGoldenRodYellow: "#FAFAD2",
    LightGray: "#D3D3D3",
    LightGreen: "#90EE90",
    LightPink: "#FFB6C1",
    LightSalmon: "#FFA07A",
    LightSeaGreen: "#20B2AA",
    LightSkyBlue: "#87CEFA",
    LightSlateGray: "#778899",
    LightSteelBlue: "#B0C4DE",
    LightYellow: "#FFFFE0",
    Lime: "#00FF00",
    LimeGreen: "#32CD32",
    Linen: "#FAF0E6",
    Magenta: "#FF00FF",
    Maroon: "#800000",
    MediumAquaMarine: "#66CDAA",
    MediumBlue: "#0000CD",
    MediumOrchid: "#BA55D3",
    MediumPurple: "#9370DB",
    MediumSeaGreen: "#3CB371",
    MediumSlateBlue: "#7B68EE",
    MediumSpringGreen: "#00FA9A",
    MediumTurquoise: "#48D1CC",
    MediumVioletRed: "#C71585",
    MidnightBlue: "#191970",
    MintCream: "#F5FFFA",
    MistyRose: "#FFE4E1",
    Moccasin: "#FFE4B5",
    NavajoWhite: "#FFDEAD",
    Navy: "#000080",
    OldLace: "#FDF5E6",
    Olive: "#808000",
    OliveDrab: "#6B8E23",
    Orange: "#FFA500",
    OrangeRed: "#FF4500",
    Orchid: "#DA70D6",
    PaleGoldenRod: "#EEE8AA",
    PaleGreen: "#98FB98",
    PaleTurquoise: "#AFEEEE",
    PaleVioletRed: "#DB7093",
    PapayaWhip: "#FFEFD5",
    PeachPuff: "#FFDAB9",
    Peru: "#CD853F",
    Pink: "#FFC0CB",
    Plum: "#DDA0DD",
    PowderBlue: "#B0E0E6",
    Purple: "#800080",
    Red: "#FF0000",
    RosyBrown: "#BC8F8F",
    RoyalBlue: "#4169E1",
    SaddleBrown: "#8B4513",
    Salmon: "#FA8072",
    SandyBrown: "#F4A460",
    SeaGreen: "#2E8B57",
    SeaShell: "#FFF5EE",
    Sienna: "#A0522D",
    Silver: "#C0C0C0",
    SkyBlue: "#87CEEB",
    SlateBlue: "#6A5ACD",
    SlateGray: "#708090",
    Snow: "#FFFAFA",
    SpringGreen: "#00FF7F",
    SteelBlue: "#4682B4",
    Tan: "#D2B48C",
    Teal: "#008080",
    Thistle: "#D8BFD8",
    Tomato: "#FF6347",
    Turquoise: "#40E0D0",
    Violet: "#EE82EE",
    Wheat: "#F5DEB3",
    White: "#FFFFFF",
    WhiteSmoke: "#F5F5F5",
    Yellow: "#FFFF00",
    YellowGreen: "#9ACD32"
  },
      doc                  = document,
      container            = doc.querySelector(".container"),
      modal                = doc.querySelector(".modal"),
      colorModal           = doc.querySelector(".modal-color"),
      sortMenu             = doc.querySelector(".sort"),
      aboutBtn             = doc.querySelector(".about"),
      aboutModal           = doc.querySelector(".modal-about"),
      closeAboutBtn        = doc.querySelector(".close-about"),
      sortingArray         = [],
      isSortNameOrderAsc   = false,
      isBrightnessOrderAsc = false;

  // Add eventListeners
  container.addEventListener("click", showColor, false);
  sortMenu.addEventListener("click", changeSorting, false);
  aboutBtn.addEventListener("click", showAbout, false);
  closeAboutBtn.addEventListener("click", closeAbout, false);
  
  function init() {
    createStylesheet();
    drawColors();
  }

  // Create stylesheet in the head section of the DOM. 
  // .colorname{#HEX}
  function createStylesheet() {
    var key, styleText,
        styleSheet = "",
        styleNode = doc.createElement('style');

    styleNode.type = "text/css";
   
    for(key in colors) {
      sortingArray.push({'color': key, 'brightness': getbrightnessInfo(colors[key])});
      styleSheet += "." + key + "{background-color:" + key + "}";
    }

    // browser detection (based on prototype.js)
    if(!!(window.attachEvent && !window.opera)) {
      styleNode.styleSheet.cssText = styleSheet;
    } else {
      styleText = doc.createTextNode(styleSheet);
      styleNode.appendChild(styleText);
    }
    doc.getElementsByTagName("head")[0].appendChild(styleNode);
  }

  function createContainer() {
    var wrapper;

    container = doc.createElement("div");
    container.setAttribute("class", "container");
    container.addEventListener("click", showColor, false);

    wrapper = doc.querySelector(".wrapper");
    wrapper.appendChild(container);
  }

  function drawColors() {
    var i, color, colorDivClass,
        colorsHTML = "",
        len = sortingArray.length;

    // Cleaning container for sorting purposes
    while(container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }

    for (i = 0; i < len; i++) {
      color = sortingArray[i].color;

      if (getbrightnessInfo(colors[color]) < 150 ) {
        colorDivClass = "text text-light";
      } else {
        colorDivClass = "text text-dark";
      }

      colorsHTML += "<div class='color " + color + "'><div class='" + colorDivClass + "'><p>" + color + "</p></div></div>";
    }

    container.innerHTML = colorsHTML;
  }
  
  function changeSorting(e) {
    e.preventDefault();
    e.stopPropagation();

    // Do nothing if a button's element was clicked
    if (e.target.nodeName === "UL") return;

    var i, sortOrder,
        activeEl = e.target,
        menuElements = doc.querySelectorAll(".sort > li"),
        menuElementsLen = menuElements.length;

    // Remove active class from all menu items
    for (i = 0; i < menuElementsLen; i++) {
      removeClass(menuElements[i], "active");
    }

    // Add active class to the active menu item
    activeEl.className = "active";
    sortOrder = activeEl.getAttribute("data-sort");
    arrangeColorsInOrder(sortOrder, activeEl);
    drawColors();
  }

  // Sort sortingArray in different ways
  function arrangeColorsInOrder(order, element) {
    switch(order) {

      // Sort by colorName. Alphabetically.
      case "name":
        if (isSortNameOrderAsc) {
          updateSortArrow(element, "sort-arrow-up");
          sortingArray = sortArray(sortingArray, "color");
          isSortNameOrderAsc = false;
        } else {
          updateSortArrow(element, "sort-arrow-down");
          sortingArray = sortArray(sortingArray, "color").reverse();
          isSortNameOrderAsc = true;
        }
        break;

      // Sort in random order.
      case "random":
        sortingArray = shuffle(sortingArray);
        break;

      // Sort by brightness.
      case "brightness":
        if (isBrightnessOrderAsc) {
          updateSortArrow(element, "sort-arrow-down");
          sortingArray = sortArray(sortingArray, "brightness");
          isBrightnessOrderAsc = false;
        } else {
          updateSortArrow(element, "sort-arrow-up");
          sortingArray = sortArray(sortingArray, "brightness").reverse();
          isBrightnessOrderAsc = true;
        }
        break;
    }
  }

  // Change element's arrow in sorting menu
  function updateSortArrow(element, direction) {
    element.className = element.className + " " + direction;
  }

  function showColor(e) {
    e.preventDefault();
    e.stopPropagation();

    var choosedColor, modalColorName,
        modalColorHex, modalColorRGB, closeBtn, rgb,
        target = e.target;

    closeBtn = doc.querySelector(".close");
    closeBtn.addEventListener("click", showGrid, true);

    // Check which node was clicked
    if(target.nodeName === "DIV") {
      choosedColor = target.parentNode.className.split(" ")[1];
    } else if(target.nodeName === "P") {
      choosedColor = target.parentNode.parentNode.className.split(" ")[1];
    }

    rgb = convertHexToRGB(colors[choosedColor]);
    
    modalColorName = doc.querySelector(".modal-color-name");
    modalColorHex = doc.querySelector(".modal-color-hex");
    modalColorRGB = doc.querySelector(".modal-color-rgb");

    if (getbrightnessInfo(colors[choosedColor]) < 150 ) {
      colorModal.className = "modal-color text-light";
    } else {
      colorModal.className = "modal-color text-dark";
    }

    modalColorName.innerHTML = choosedColor;
    modalColorHex.innerHTML = colors[choosedColor];
    modalColorRGB.innerHTML = "rgb(" + rgb["red"]+ ", " +
        rgb["green"] + ", " + rgb["blue"] + ")";

    colorModal.className += " visible " + choosedColor;
    modal.className += " visible";
  }

  function showGrid() {
    removeClass(modal, "visible");
    removeClass(colorModal, "visible");
  }

  function showAbout() {
    aboutModal.style.opacity = "1";
    aboutModal.style.visibility = "visible";
  }

  function closeAbout() {
    aboutModal.style.opacity = "0";
    aboutModal.style.visibility = "hidden";
  }


  // HELPERS

  // Remove class from DOM element
  function removeClass(element, className) {
    var i, classNames,
        newClassNames = "";

    classNames = element.className.split(" ");

    for(i = 0; i < classNames.length; i++) {
      if(classNames[i] !== className) {
        newClassNames += classNames[i] + " ";
      }
    }
    element.className = newClassNames.trim();
  }

  // Shuffle an array
  function shuffle(array) {
    var counter = array.length,
        temp, index;

    // While there are elements in the array
    while (counter--) {

      // Pick a random index
      // Use bitwise OR operator for rounding: 1.2 | 0 = 1
      index = (Math.random() * counter) | 0;

      // Swap the last element
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  // Get color's btightness from hex
  function getbrightnessInfo(hexColor) {
    var brightness,
        rgb = convertHexToRGB(hexColor);

    // http://www.w3.org/TR/AERT#color-contrast
    brightness = ((rgb["red"] * 299) + (rgb["green"] * 587) +
                  (rgb["blue"] * 114)) / 1000;
    return brightness;
  }

  // Convert HEX color to RGB
  function convertHexToRGB(hexColor) {
    var hex,
        rgb = [];

    // Remove hash sign
    hex = hexColor.substr(1);

    rgb["red"]   = parseInt(hex.slice(0,2), 16);
    rgb["green"] = parseInt(hex.slice(2,4), 16);
    rgb["blue"]  = parseInt(hex.slice(4,6), 16);
    return rgb;
  }

  function sortArray(unsortedArray, sortParam) {
    return unsortedArray.sort(function(a, b) {
      if (a[sortParam] > b[sortParam])
        return 1;
      if (a[sortParam] < b[sortParam])
        return -1;
      return 0;
    });
  }

  return {
    init: init,
  };
})(window, document);

colorNames.init();