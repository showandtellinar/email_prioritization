var email_prioritization = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("email_prioritization-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    email_prioritization.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { email_prioritization.onLoad(); }, false);


email_prioritization.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e) {
    email_prioritization.showFirefoxContextMenu(e);
  }, false);
};

email_prioritization.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-email_prioritization").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { email_prioritization.onFirefoxLoad(); }, false);