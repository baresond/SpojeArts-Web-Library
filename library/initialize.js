(function() {
    console.log('Funguje');
    const locationOfLibrary = "https://raw.githubusercontent.com/baresond/SpojeArts-Web-Library/master/";
    
    //Social Buttons - Script
    var socialBTScript = document.createElement('script');
    socialBTScript.type = 'text/javascript';
    socialBTScript.src = locationOfLibrary + 'library/Modern-Social-Button/script.js';
    document.body.append(socialBTScript);

    //Social Buttons - Script
    var socialBTCSS = document.createElement("link");
    socialBTCSS.rel = "stylesheet";
    socialBTCSS.href = locationOfLibrary + 'library/Modern-Social-Button/style.css';
    document.head.append(socialBTCSS);


    var fontawesomeScript = document.createElement('script');
    fontawesomeScript.setAttribute("data-search-pseudo-elements", "");
    fontawesomeScript.defer = true;
    fontawesomeScript.src = "https://kit.fontawesome.com/ed36c71505.js";
    fontawesomeScript.crossOrigin = "anonymous";
    document.head.append(fontawesomeScript);
})();