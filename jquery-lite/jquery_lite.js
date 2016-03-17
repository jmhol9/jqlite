( function (root) {

  var DOMNodeCollection = function(array) {
    this.array = array;
  };

  root.$l = function(selector) {
    var nodeArray;
    if (selector instanceof Function) {
      this.document.addEventListener("DOMContentLoaded", selector);
    } else if (selector instanceof HTMLElement) {
      nodeArray = [selector];
    } else {
      var node = this.document.querySelectorAll(selector);
      nodeArray = [].slice.call(node);
    }
    return new DOMNodeCollection(nodeArray);
  };


  root.$l.extend = function() {
    var varArgs = [].slice.call(arguments).reverse();
    var merged = {};
    varArgs.forEach(function(el) {
      Object.keys(el).forEach(function(attr) {
        merged[attr] = merged[attr] || el[attr];
        el[attr]= merged[attr];
      });
    });

    return merged;
  };

  var ajaxDefaults = {
      type: 'GET',
      url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
      success: function(data) {
        $l("div").html(data);
        console.log(data);
      },
      error: function() {
        console.error("An error occured.");
      }
    };

  root.$l.ajax = function (options) {
    if (options !== undefined) {
      root.$l.extend(ajaxDefaults, options);
    } else {
      return root.$l.ajax(ajaxDefaults);
    }
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
       if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
          if(xmlhttp.status == 200){
              options.success(xmlhttp.responseText);
          }
          else {
              options.error();
          }
       }
     };

     xmlhttp.open(options.type, options.url, true);
     xmlhttp.send();
  };


  DOMNodeCollection.prototype.html = function (innerHTML) {
    if (innerHTML === undefined) {
      return this.array[0].innerHTML;
    } else {
      this.array.forEach( function (el){
        el.innerHTML = innerHTML;
      });
    }
  };

  DOMNodeCollection.prototype.empty = function () {
    this.array.forEach(function(el) {
      el.innerHTML = "";
    });
  };

  DOMNodeCollection.prototype.append = function(arg) {
    if (typeof arg === "string") {
      this.array.forEach(function(el) {
        el.innerHTML += arg;
      });
    } else if (arg instanceof HTMLElement) {
      this.array.forEach(function(el) {
        el.innerHTML += arg.outerHTML;
      });
    } else {
      var string = arg.array.map(function (el) { return el.outerHTML;} ).join();
      this.append(string);
    }
  };

  // Get attr only from first matched element
  // Set for ALL matched elements
  DOMNodeCollection.prototype.attr = function (name, val) {
    if (val === undefined) {
      return this.array[0].getAttribute(name);
    } else {
      this.array.forEach(function (el) {
        el.setAttribute(name, val);
      });
    }
  };

  DOMNodeCollection.prototype.addClass = function (cName) {
    this.array.forEach(function(el) {
      el.className += el.className === "" ? (cName) : (" " + cName);
    });
  };

  DOMNodeCollection.prototype.removeClass = function (cName) {
    this.array.forEach(function(el) {
      var classTable = el.className.split(" ");
      el.className = classTable.map(function(el) {
        return el === cName ? "" : el;
      }).join(" ").trim();
    });
  };

  DOMNodeCollection.prototype.children = function () {
    var childrenArr = [];
    this.array.forEach( function (el) {
      var childArray = [].slice.call(el.children);
      childrenArr = childrenArr.concat(childArray);
    });

    return new DOMNodeCollection(childrenArr);
  };

  DOMNodeCollection.prototype.parent = function() {
    var parentArr = [];
    this.array.forEach( function (el) {
      if (parentArr.indexOf(el.parentNode) === -1) {
        parentArr.push(el.parentNode);
      }
    });

    return new DOMNodeCollection(parentArr);
  };

  DOMNodeCollection.prototype.find = function (selector) {
    var matchArr = [];
    this.array.forEach( function (el) {
      var elMatchArr = [].slice.call(el.querySelectorAll(selector));
      matchArr = matchArr.concat(elMatchArr);
    });

    return new DOMNodeCollection(matchArr);
  };

  DOMNodeCollection.prototype.remove = function () {
    this.array.forEach ( function (el) {
      el.outerHTML = null;
    });

    this.array = [];
  };

  DOMNodeCollection.prototype.on = function(type, callback) {
    this.array.forEach( function (el) {
      el.addEventListener(type, callback);
    });
  };

  DOMNodeCollection.prototype.off = function(type, callback) {
    this.array.forEach( function (el) {
      el.removeEventListener(type, callback);
    });
  };


})(this);
