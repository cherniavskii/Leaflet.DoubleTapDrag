function Console(containerId) {
  this._consoleContainer = document.getElementById(containerId);
  this._lastText = null;
  this._lastItem = null;
  this._lastTextCount = 0;

  this.addItem = function(text) {
    if (text === this._lastText) {
      this._lastTextCount++;
      this._lastItem.innerText = this._lastTextCount + ' ' + this._lastText;
    } else {
      var li = document.createElement('pre');
      li.innerText = text;
      this._consoleContainer.appendChild(li);
      this._consoleContainer.scrollTop = li.offsetTop;
      this._lastText = text;
      this._lastItem = li;
      this._lastTextCount = 0;
    }
  };

  this.clear = function() {
    while (this._consoleContainer.firstChild) {
      this._consoleContainer.removeChild(this._consoleContainer.firstChild);
    }
  };
}