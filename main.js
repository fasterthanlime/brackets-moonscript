/*global define, $, brackets, window */
define(function (require, exports, module) {
    "use strict";
  
    require("./moonscript");
    var LanguageManager = brackets.getModule("language/LanguageManager");
  
    LanguageManager.defineLanguage("moonscript", {
        name: "MoonScript",
        mode: "moonscript",
        fileExtensions: ["moon"],
        lineComment: ["--"]
    });
});
