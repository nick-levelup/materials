var FunctionUtilities = {
  debounce: function(callback, threshold) {
    var timeout;
    return function() {
      var context = this,
        params = arguments;
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function() {
        callback.apply(context, params);
      }, threshold);
    };
  },

  throttle: function(callback, threshold) {
    var suppress = false;
    var clear = function() {
      suppress = false;
    };
    return function() {
      if (!suppress) {
        callback.apply(this, arguments);
        window.setTimeout(clear, threshold);
        suppress = true;
      };
    }
  }
};
