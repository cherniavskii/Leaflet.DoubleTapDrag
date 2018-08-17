function DoubleTapDragInitHook() {
  var timer = null;
  var fired = false;
  var lastTimestamp = null;

  this._container.addEventListener('touchstart', L.Util.bind(function (e) {
    if (e.touches.length !== 1) {
      return;
    }
    var now = Date.now();
    if (lastTimestamp) {
      if (now - lastTimestamp < 200) {
        timer = setTimeout(L.Util.bind(function () {
          this.fire('doubletapdragstart', e);
          timer = null;
          fired = true;
        }, this), 200);
      }
      lastTimestamp = null;
    } else {
      lastTimestamp = Date.now();
      setTimeout(L.Util.bind(function () {
        lastTimestamp = null;
      }, this), 200);
    }
  }, this));

  this._container.addEventListener('touchend', L.Util.bind(function (e) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (fired) {
      this.fire('doubletapdragend', e);
      fired = null;
    }
  }, this));

  this._container.addEventListener('touchmove', L.Util.bind(function (e) {
    if (!fired) {
      return;
    }

    this.fire('doubletapdrag', e);
  }, this));
}

L.Map.addInitHook(DoubleTapDragInitHook);
