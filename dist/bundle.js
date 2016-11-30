/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Hello_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(4);
	var office_ui_fabric_react_1 = __webpack_require__(17);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        var previewProps = {
	            previewImages: [
	                {
	                    name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
	                    url: 'http://bing.com',
	                    previewImageSrc: './dist/images/document-preview.png',
	                    iconSrc: './dist/images/icon-ppt.png',
	                    imageFit: office_ui_fabric_react_1.ImageFit.cover,
	                    width: 318,
	                    height: 196,
	                    accentColor: '#ce4b1f'
	                }
	            ],
	        };
	        return React.createElement("div", null, 
	            React.createElement("h1", null, 
	                "Hello from ", 
	                this.props.compiler, 
	                " and ", 
	                this.props.framework, 
	                "!"), 
	            React.createElement("div", null, 
	                React.createElement(Button_1.Button, null, "I am a button.")
	            ), 
	            React.createElement(office_ui_fabric_react_1.DocumentCard, {onClickHref: 'http://bing.com'}, 
	                React.createElement(office_ui_fabric_react_1.DocumentCardPreview, __assign({}, previewProps)), 
	                React.createElement(office_ui_fabric_react_1.DocumentCardTitle, {title: 'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx', shouldTruncate: true}), 
	                React.createElement(office_ui_fabric_react_1.DocumentCardActivity, {activity: 'Created a few minutes ago', people: [
	                    { name: 'Annie Lindqvist', profileImageSrc: './dist/images/avatar-kat.png' }
	                ]})));
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));
	


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(6));
	__export(__webpack_require__(10));
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var object_1 = __webpack_require__(8);
	var Button_Props_1 = __webpack_require__(10);
	var object_2 = __webpack_require__(8);
	var properties_1 = __webpack_require__(11);
	var BaseComponent_1 = __webpack_require__(12);
	__webpack_require__(15);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(props) {
	        _super.call(this, props, { 'rootProps': null });
	        this.state = {
	            labelId: object_2.getId('Button'),
	            descriptionId: object_2.getId('Button'),
	            ariaDescriptionId: object_2.getId('Button')
	        };
	    }
	    Button.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, buttonType = _a.buttonType, children = _a.children, icon = _a.icon, description = _a.description, ariaLabel = _a.ariaLabel, ariaDescription = _a.ariaDescription, href = _a.href, disabled = _a.disabled, onClick = _a.onClick;
	        var _b = this.state, labelId = _b.labelId, descriptionId = _b.descriptionId, ariaDescriptionId = _b.ariaDescriptionId;
	        var renderAsAnchor = !!href;
	        var tag = renderAsAnchor ? 'a' : 'button';
	        var nativeProps = properties_1.getNativeProps(this.props.rootProps || this.props, renderAsAnchor ? properties_1.anchorProperties : properties_1.buttonProperties);
	        var className = css_1.css((this.props.className), 'ms-Button', {
	            'ms-Button--primary': buttonType === Button_Props_1.ButtonType.primary,
	            'ms-Button--hero': buttonType === Button_Props_1.ButtonType.hero,
	            'ms-Button--compound': buttonType === Button_Props_1.ButtonType.compound,
	            'ms-Button--command': buttonType === Button_Props_1.ButtonType.command,
	            'ms-Button--icon': buttonType === Button_Props_1.ButtonType.icon,
	            'disabled': (renderAsAnchor && disabled) // add disable styling if it is an anchor
	        });
	        var iconSpan = icon && (buttonType === Button_Props_1.ButtonType.command || buttonType === Button_Props_1.ButtonType.hero || buttonType === Button_Props_1.ButtonType.icon)
	            ? React.createElement("span", {className: 'ms-Button-icon'}, 
	                React.createElement("i", {className: "ms-Icon ms-Icon--" + icon})
	            )
	            : null;
	        // ms-Button-description is only shown when the button type is compound.
	        // In other cases it will not be displayed.
	        var descriptionSpan = description
	            ? React.createElement("span", {className: 'ms-Button-description', id: descriptionId}, description)
	            : null;
	        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
	        // otherwise it will be assigned to descriptionSpan.
	        var ariaDescriptionSpan = ariaDescription
	            ? React.createElement("span", {className: 'ms-u-screenReaderOnly', id: ariaDescriptionId}, ariaDescription)
	            : null;
	        // Check for ariaDescription, description or aria-describedby in the native props to determine source of aria-describedby
	        // otherwise default to null.
	        var ariaDescribedBy;
	        if (ariaDescription) {
	            ariaDescribedBy = ariaDescriptionId;
	        }
	        else if (description) {
	            ariaDescribedBy = descriptionId;
	        }
	        else if (nativeProps['aria-describedby']) {
	            ariaDescribedBy = nativeProps['aria-describedby'];
	        }
	        else {
	            ariaDescribedBy = null;
	        }
	        return React.createElement(tag, object_1.assign({}, nativeProps, href ? { href: href } : null, {
	            'aria-label': ariaLabel,
	            'aria-labelledby': ariaLabel ? null : labelId,
	            'aria-describedby': ariaDescribedBy,
	            'ref': function (c) { return _this._buttonElement = c; }
	        }, onClick && { 'onClick': onClick }, disabled && { 'disabled': disabled }, { className: className }), iconSpan, React.createElement("span", {className: 'ms-Button-label', id: labelId}, children), descriptionSpan, ariaDescriptionSpan);
	    };
	    Button.prototype.focus = function () {
	        if (this._buttonElement) {
	            this._buttonElement.focus();
	        }
	    };
	    Button.defaultProps = {
	        buttonType: Button_Props_1.ButtonType.normal
	    };
	    return Button;
	}(BaseComponent_1.BaseComponent));
	exports.Button = Button;
	


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	function css() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var classes = [];
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var arg = args_1[_a];
	        if (arg) {
	            if (typeof arg === 'string') {
	                classes.push(arg);
	            }
	            else {
	                for (var key in arg) {
	                    if (arg[key]) {
	                        classes.push(key);
	                    }
	                }
	            }
	        }
	    }
	    return classes.join(' ');
	}
	exports.css = css;
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	// Initialize global window id.
	var CURRENT_ID_PROPERTY = '__currentId__';
	var _global = (typeof window !== 'undefined' && window) || process;
	if (_global[CURRENT_ID_PROPERTY] === undefined) {
	    _global[CURRENT_ID_PROPERTY] = 0;
	}
	function checkProperties(a, b) {
	    for (var propName in a) {
	        if (a.hasOwnProperty(propName)) {
	            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
	                return false;
	            }
	        }
	    }
	    return true;
	}
	// Compare a to b and b to a
	function shallowCompare(a, b) {
	    return checkProperties(a, b) && checkProperties(b, a);
	}
	exports.shallowCompare = shallowCompare;
	/**
	 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
	 * objects as arguments and they will be merged sequentially into the target. Note that this will
	 * shallow merge; it will not create new cloned values for target members.
	 *
	 * @params target {Object} Target object to merge following object arguments into.
	 * @params args {Object} One or more objects that will be mixed into the target in the order they are provided.
	 * @returns Resulting merged target.
	 */
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    return filteredAssign.apply(this, [null, target].concat(args));
	}
	exports.assign = assign;
	/**
	 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
	 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
	 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
	 * values for target members.
	 *
	 * @params filteredAssign {Function} A callback function that tests if the property should be assigned.
	 * @params target {Object} Target object to merge following object arguments into.
	 * @params args {Object} One or more objects that will be mixed into the target in the order they are provided.
	 * @returns Resulting merged target.
	 */
	function filteredAssign(isAllowed, target) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    target = target || {};
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var sourceObject = args_1[_a];
	        if (sourceObject) {
	            for (var propName in sourceObject) {
	                if (sourceObject.hasOwnProperty(propName) &&
	                    !isAllowed || isAllowed(propName)) {
	                    target[propName] = sourceObject[propName];
	                }
	            }
	        }
	    }
	    return target;
	}
	exports.filteredAssign = filteredAssign;
	/** Generates a unique id in the global scope (this spans across duplicate copies of the same library.) */
	function getId(prefix) {
	    var index = _global[CURRENT_ID_PROPERTY]++;
	    return (prefix || '') + index;
	}
	exports.getId = getId;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	(function (ElementType) {
	    /** <button> element. */
	    ElementType[ElementType["button"] = 0] = "button";
	    /** <a> element. */
	    ElementType[ElementType["anchor"] = 1] = "anchor";
	})(exports.ElementType || (exports.ElementType = {}));
	var ElementType = exports.ElementType;
	(function (ButtonType) {
	    ButtonType[ButtonType["normal"] = 0] = "normal";
	    ButtonType[ButtonType["primary"] = 1] = "primary";
	    ButtonType[ButtonType["hero"] = 2] = "hero";
	    ButtonType[ButtonType["compound"] = 3] = "compound";
	    ButtonType[ButtonType["command"] = 4] = "command";
	    ButtonType[ButtonType["icon"] = 5] = "icon";
	})(exports.ButtonType || (exports.ButtonType = {}));
	var ButtonType = exports.ButtonType;
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(8);
	exports.baseElementEvents = [
	    'onCopy',
	    'onCut',
	    'onPaste',
	    'onCompositionEnd',
	    'onCompositionStart',
	    'onCompositionUpdate',
	    'onFocus',
	    'onFocusCapture',
	    'onBlur',
	    'onBlurCapture',
	    'onChange',
	    'onInput',
	    'onSubmit',
	    'onLoad',
	    'onError',
	    'onKeyDown',
	    'onKeyDownCapture',
	    'onKeyPress',
	    'onKeyUp',
	    'onAbort',
	    'onCanPlay',
	    'onCanPlayThrough',
	    'onDurationChange',
	    'onEmptied',
	    'onEncrypted',
	    'onEnded',
	    'onLoadedData',
	    'onLoadedMetadata',
	    'onLoadStart',
	    'onPause',
	    'onPlay',
	    'onPlaying',
	    'onProgress',
	    'onRateChange',
	    'onSeeked',
	    'onSeeking',
	    'onStalled',
	    'onSuspend',
	    'onTimeUpdate',
	    'onVolumeChange',
	    'onWaiting',
	    'onClick',
	    'onClickCapture',
	    'onContextMenu',
	    'onDoubleClick',
	    'onDrag',
	    'onDragEnd',
	    'onDragEnter',
	    'onDragExit',
	    'onDragLeave',
	    'onDragOver',
	    'onDragStart',
	    'onDrop',
	    'onMouseDown',
	    'onMouseDownCapture',
	    'onMouseEnter',
	    'onMouseLeave',
	    'onMouseMove',
	    'onMouseOut',
	    'onMouseOver',
	    'onMouseUp',
	    'onMouseUpCapture',
	    'onSelect',
	    'onTouchCancel',
	    'onTouchEnd',
	    'onTouchMove',
	    'onTouchStart',
	    'onScroll',
	    'onWheel'
	];
	exports.baseElementProperties = [
	    'defaultChecked',
	    'defaultValue',
	    'accept',
	    'acceptCharset',
	    'accessKey',
	    'action',
	    'allowFullScreen',
	    'allowTransparency',
	    'alt',
	    'async',
	    'autoComplete',
	    'autoFocus',
	    'autoPlay',
	    'capture',
	    'cellPadding',
	    'cellSpacing',
	    'charSet',
	    'challenge',
	    'checked',
	    'children',
	    'classID',
	    'className',
	    'cols',
	    'colSpan',
	    'content',
	    'contentEditable',
	    'contextMenu',
	    'controls',
	    'coords',
	    'crossOrigin',
	    'data',
	    'dateTime',
	    'default',
	    'defer',
	    'dir',
	    'download',
	    'draggable',
	    'encType',
	    'form',
	    'formAction',
	    'formEncType',
	    'formMethod',
	    'formNoValidate',
	    'formTarget',
	    'frameBorder',
	    'headers',
	    'height',
	    'hidden',
	    'high',
	    'hrefLang',
	    'htmlFor',
	    'httpEquiv',
	    'icon',
	    'id',
	    'inputMode',
	    'integrity',
	    'is',
	    'keyParams',
	    'keyType',
	    'kind',
	    'label',
	    'lang',
	    'list',
	    'loop',
	    'low',
	    'manifest',
	    'marginHeight',
	    'marginWidth',
	    'max',
	    'maxLength',
	    'media',
	    'mediaGroup',
	    'method',
	    'min',
	    'minLength',
	    'multiple',
	    'muted',
	    'name',
	    'noValidate',
	    'open',
	    'optimum',
	    'pattern',
	    'placeholder',
	    'poster',
	    'preload',
	    'radioGroup',
	    'readOnly',
	    'rel',
	    'required',
	    'role',
	    'rows',
	    'rowSpan',
	    'sandbox',
	    'scope',
	    'scoped',
	    'scrolling',
	    'seamless',
	    'selected',
	    'shape',
	    'size',
	    'sizes',
	    'span',
	    'spellCheck',
	    'src',
	    'srcDoc',
	    'srcLang',
	    'srcSet',
	    'start',
	    'step',
	    'style',
	    'summary',
	    'tabIndex',
	    'title',
	    'type',
	    'useMap',
	    'value',
	    'width',
	    'wmode',
	    'wrap'
	];
	exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
	exports.anchorProperties = exports.htmlElementProperties.concat([
	    'href',
	    'target'
	]);
	exports.buttonProperties = exports.htmlElementProperties.concat([
	    'disabled'
	]);
	exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
	exports.inputProperties = exports.buttonProperties;
	exports.textAreaProperties = exports.buttonProperties;
	exports.imageProperties = exports.divProperties;
	/**
	 * Gets native supported props for an html element provided the allowance set. Use one of the property
	 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
	 * props set. Note that all data- and aria- prefixed attributes will be allowed.
	 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
	 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
	 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
	 * the component after an onClick function is added, then the getNativeProps onClick will override it.
	 * @param props The unfiltered input props
	 * @param allowedPropsNames The array of allowed propnames.
	 * @returns The filtered props
	 */
	function getNativeProps(props, allowedPropNames, excludedPropNames) {
	    return object_1.filteredAssign(function (propName) {
	        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
	            (propName.indexOf('aria-') === 0) ||
	            (allowedPropNames.indexOf(propName) >= 0)));
	    }, {}, props);
	}
	exports.getNativeProps = getNativeProps;
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Async_1 = __webpack_require__(13);
	var EventGroup_1 = __webpack_require__(14);
	var BaseComponent = (function (_super) {
	    __extends(BaseComponent, _super);
	    /**
	     * BaseComponent constructor
	     * @param {P} props The props for the component.
	     * @param {Object} deprecatedProps The map of deprecated prop names to new names, where the key is the old name and the
	     * value is the new name. If a prop is removed rather than renamed, leave the value undefined.
	     */
	    function BaseComponent(props, deprecatedProps) {
	        _super.call(this, props);
	        if (deprecatedProps) {
	            for (var propName in deprecatedProps) {
	                if (propName in props) {
	                    _warnDeprecation(this, propName, deprecatedProps[propName]);
	                }
	            }
	        }
	        _makeAllSafe(this, BaseComponent.prototype, [
	            'componentWillMount',
	            'componentDidMount',
	            'shouldComponentUpdate',
	            'componentWillUpdate',
	            'componentWillReceiveProps',
	            'render',
	            'componentDidUpdate',
	            'componentWillUnmount'
	        ]);
	    }
	    /** If we have disposables, dispose them automatically on unmount. */
	    BaseComponent.prototype.componentWillUnmount = function () {
	        if (this.__disposables) {
	            for (var i = 0, len = this._disposables.length; i < len; i++) {
	                var disposable = this.__disposables[i];
	                if (disposable.dispose) {
	                    disposable.dispose();
	                }
	            }
	            this.__disposables = null;
	        }
	    };
	    Object.defineProperty(BaseComponent.prototype, "className", {
	        /** Gets the object's class name. */
	        get: function () {
	            var funcNameRegex = /function (.{1,})\(/;
	            var results = (funcNameRegex).exec((this).constructor.toString());
	            return (results && results.length > 1) ? results[1] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_disposables", {
	        /** Allows subclasses to push things to this._disposables to be auto disposed. */
	        get: function () {
	            if (!this.__disposables) {
	                this.__disposables = [];
	            }
	            return this.__disposables;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_async", {
	        /**
	         * Gets the async instance associated with the component, created on demand. The async instance gives
	         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
	         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
	         * preserve the this pointer so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__async) {
	                this.__async = new Async_1.Async(this);
	                this._disposables.push(this.__async);
	            }
	            return this.__async;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_events", {
	        /**
	         * Gets the event group instance assocaited with the component, created on demand. The event instance
	         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
	         * will be automatically disconnected after unmounting. The helpers within the events object also
	         * preserve the this reference so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__events) {
	                this.__events = new EventGroup_1.EventGroup(this);
	                this._disposables.push(this.__events);
	            }
	            return this.__events;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Helper to return a memoized ref resolver function.
	     * @params refName Name of the member to assign the ref to.
	     *
	     * @examples
	     * class Foo extends BaseComponent<...> {
	     *   private _root: HTMLElement;
	     *
	     *   public render() {
	     *     return <div ref={ this._resolveRef('_root') } />
	     *   }
	     * }
	     */
	    BaseComponent.prototype._resolveRef = function (refName) {
	        var _this = this;
	        if (!this.__resolves) {
	            this.__resolves = {};
	        }
	        if (!this.__resolves[refName]) {
	            this.__resolves[refName] = function (ref) { return _this[refName] = ref; };
	        }
	        return this.__resolves[refName];
	    };
	    return BaseComponent;
	}(React.Component));
	exports.BaseComponent = BaseComponent;
	/**
	 * Helper to override a given method with a wrapper method that can try/catch the original, but also
	 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
	 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
	 */
	function _makeAllSafe(obj, prototype, methodNames) {
	    for (var i = 0, len = methodNames.length; i < len; i++) {
	        _makeSafe(obj, prototype, methodNames[i]);
	    }
	}
	function _makeSafe(obj, prototype, methodName) {
	    var classMethod = obj[methodName];
	    var prototypeMethod = prototype[methodName];
	    if (classMethod || prototypeMethod) {
	        obj[methodName] = function () {
	            var retVal;
	            try {
	                if (prototypeMethod) {
	                    retVal = prototypeMethod.apply(this, arguments);
	                }
	                if (classMethod) {
	                    retVal = classMethod.apply(this, arguments);
	                }
	            }
	            catch (e) {
	                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
	                if (BaseComponent.onError) {
	                    BaseComponent.onError(errorMessage, e);
	                }
	            }
	            return retVal;
	        };
	    }
	}
	function _warnDeprecation(obj, propertyName, newPropertyName) {
	    if (console && console.warn) {
	        var deprecationMessage = obj.className + " property '" + propertyName + "' was used but has been deprecated.";
	        if (newPropertyName) {
	            deprecationMessage += " Use '" + newPropertyName + "' instead.";
	        }
	        console.warn(deprecationMessage);
	    }
	}
	BaseComponent.onError = function (errorMessage) {
	    console.error(errorMessage);
	    throw errorMessage;
	};
	


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
	 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
	 *
	 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
	 * new instance of the class and remember to call dispose() during your code's dispose handler.
	 */
	"use strict";
	var Async = (function () {
	    function Async(parent, onError) {
	        this._timeoutIds = null;
	        this._immediateIds = null;
	        this._intervalIds = null;
	        this._animationFrameIds = null;
	        this._isDisposed = false;
	        this._parent = parent || null;
	        this._onErrorHandler = onError;
	        this._noop = function () { };
	    }
	    /**
	     * Dispose function, clears all async operations.
	     */
	    Async.prototype.dispose = function () {
	        var id;
	        this._isDisposed = true;
	        this._parent = null;
	        // Clear timeouts.
	        if (this._timeoutIds) {
	            for (id in this._timeoutIds) {
	                if (this._timeoutIds.hasOwnProperty(id)) {
	                    this.clearTimeout(id);
	                }
	            }
	            this._timeoutIds = null;
	        }
	        // Clear immediates.
	        if (this._immediateIds) {
	            for (id in this._immediateIds) {
	                if (this._immediateIds.hasOwnProperty(id)) {
	                    this.clearImmediate(id);
	                }
	            }
	            this._immediateIds = null;
	        }
	        // Clear intervals.
	        if (this._intervalIds) {
	            for (id in this._intervalIds) {
	                if (this._intervalIds.hasOwnProperty(id)) {
	                    this.clearInterval(id);
	                }
	            }
	            this._intervalIds = null;
	        }
	        // Clear animation frames.
	        if (this._animationFrameIds) {
	            for (id in this._animationFrameIds) {
	                if (this._animationFrameIds.hasOwnProperty(id)) {
	                    this.cancelAnimationFrame(id);
	                }
	            }
	            this._animationFrameIds = null;
	        }
	    };
	    /**
	     * SetTimeout override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setTimeout = function (callback, duration) {
	        var _this = this;
	        var timeoutId = 0;
	        if (!this._isDisposed) {
	            if (!this._timeoutIds) {
	                this._timeoutIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            timeoutId = setTimeout(function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._timeoutIds[timeoutId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    if (_this._onErrorHandler) {
	                        _this._onErrorHandler(e);
	                    }
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._timeoutIds[timeoutId] = true;
	        }
	        return timeoutId;
	    };
	    /**
	     * Clears the timeout.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearTimeout = function (id) {
	        if (this._timeoutIds && this._timeoutIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearTimeout(id);
	            delete this._timeoutIds[id];
	        }
	    };
	    /**
	     * SetImmediate override, which will auto cancel the immediate during dispose.
	     * @param callback Callback to execute.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setImmediate = function (callback) {
	        var _this = this;
	        var immediateId = 0;
	        if (!this._isDisposed) {
	            if (!this._immediateIds) {
	                this._immediateIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var setImmediateCallback = function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._immediateIds[immediateId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._immediateIds[immediateId] = true;
	        }
	        return immediateId;
	    };
	    /**
	     * Clears the immediate.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearImmediate = function (id) {
	        if (this._immediateIds && this._immediateIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
	            delete this._immediateIds[id];
	        }
	    };
	    /**
	     * SetInterval override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setInterval = function (callback, duration) {
	        var _this = this;
	        var intervalId = 0;
	        if (!this._isDisposed) {
	            if (!this._intervalIds) {
	                this._intervalIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            intervalId = setInterval(function () {
	                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
	                try {
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._intervalIds[intervalId] = true;
	        }
	        return intervalId;
	    };
	    /**
	     * Clears the interval.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearInterval = function (id) {
	        if (this._intervalIds && this._intervalIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearInterval(id);
	            delete this._intervalIds[id];
	        }
	    };
	    /**
	     * Creates a function that, when executed, will only call the func function at most once per
	     * every wait milliseconds. Provide an options object to indicate that func should be invoked
	     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
	     * function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
	     *
	     * @param func The function to throttle.
	     * @param wait The number of milliseconds to throttle executions to. Defaults to 0.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new throttled function.
	     */
	    Async.prototype.throttle = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = true;
	        var trailing = true;
	        var lastExecuteTime = 0;
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var delta = now - lastExecuteTime;
	            var waitLength = leading ? waitMS - delta : waitMS;
	            if (delta >= waitMS && (!userCall || leading)) {
	                lastExecuteTime = now;
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if (timeoutId === null && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    /**
	     * Creates a function that will delay the execution of func until after wait milliseconds have
	     * elapsed since the last time it was invoked. Provide an options object to indicate that func
	     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
	     * to the debounced function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the debounced function is invoked more than once during the wait
	     * timeout.
	     *
	     * @param func The function to debounce.
	     * @param wait The number of milliseconds to delay.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new debounced function.
	     */
	    Async.prototype.debounce = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = false;
	        var trailing = true;
	        var maxWait = null;
	        var lastCallTime = 0;
	        var lastExecuteTime = (new Date).getTime();
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
	            maxWait = options.maxWait;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var executeImmediately = false;
	            if (userCall) {
	                if (leading && now - lastCallTime >= waitMS) {
	                    executeImmediately = true;
	                }
	                lastCallTime = now;
	            }
	            var delta = now - lastCallTime;
	            var waitLength = waitMS - delta;
	            var maxWaitDelta = now - lastExecuteTime;
	            var maxWaitExpired = false;
	            if (maxWait !== null) {
	                // maxWait only matters when there is a pending callback
	                if (maxWaitDelta >= maxWait && timeoutId) {
	                    maxWaitExpired = true;
	                }
	                else {
	                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
	                }
	            }
	            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastExecuteTime = now;
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if ((timeoutId === null || !userCall) && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    Async.prototype.requestAnimationFrame = function (callback) {
	        var _this = this;
	        var animationFrameId = 0;
	        if (!this._isDisposed) {
	            if (!this._animationFrameIds) {
	                this._animationFrameIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var animationFrameCallback = function () {
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._animationFrameIds[animationFrameId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            animationFrameId = window.requestAnimationFrame ?
	                window.requestAnimationFrame(animationFrameCallback) :
	                window.setTimeout(animationFrameCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._animationFrameIds[animationFrameId] = true;
	        }
	        return animationFrameId;
	    };
	    Async.prototype.cancelAnimationFrame = function (id) {
	        if (this._animationFrameIds && this._animationFrameIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
	            /* tslint:enable:ban-native-functions */
	            delete this._animationFrameIds[id];
	        }
	    };
	    Async.prototype._logError = function (e) {
	        if (this._onErrorHandler) {
	            this._onErrorHandler(e);
	        }
	    };
	    return Async;
	}());
	exports.Async = Async;
	


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* tslint:disable:no-string-literal */
	"use strict";
	/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
	 *  If the target is an HTMLElement, the event will be attached to the element and can be
	 *  triggered as usual (like clicking for onclick).
	 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
	 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
	 *  handled here in EventGroup, and the handler is called in the context of the parent
	 *  (which is passed in in the constructor).
	 */
	var EventGroup = (function () {
	    /** parent: the context in which events attached to non-HTMLElements are called */
	    function EventGroup(parent) {
	        this._id = EventGroup._uniqueId++;
	        this._parent = parent;
	        this._eventRecords = [];
	    }
	    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
	     *  Events raised here by default have bubbling set to false and cancelable set to true.
	     *  This applies also to built-in events being raised manually here on HTMLElements,
	     *  which may lead to unexpected behavior if it differs from the defaults.
	     */
	    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
	        var retVal;
	        if (EventGroup._isElement(target)) {
	            if (document.createEvent) {
	                var ev = document.createEvent('HTMLEvents');
	                ev.initEvent(eventName, bubbleEvent, true);
	                ev['args'] = eventArgs;
	                retVal = target.dispatchEvent(ev);
	            }
	            else if (document['createEventObject']) {
	                var evObj = document['createEventObject'](eventArgs);
	                // cannot set cancelBubble on evObj, fireEvent will overwrite it
	                target.fireEvent('on' + eventName, evObj);
	            }
	        }
	        else {
	            while (target && retVal !== false) {
	                var events = target.__events__;
	                var eventRecords = events ? events[eventName] : null;
	                for (var id in eventRecords) {
	                    if (eventRecords.hasOwnProperty(id)) {
	                        var eventRecordList = eventRecords[id];
	                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
	                            var record = eventRecordList[listIndex];
	                            if (record.objectCallback) {
	                                retVal = record.objectCallback.call(record.parent, eventArgs);
	                            }
	                        }
	                    }
	                }
	                // If the target has a parent, bubble the event up.
	                target = bubbleEvent ? target.parent : null;
	            }
	        }
	        return retVal;
	    };
	    EventGroup.isObserved = function (target, eventName) {
	        var events = target && target.__events__;
	        return !!events && !!events[eventName];
	    };
	    /** Check to see if the target has declared support of the given event. */
	    EventGroup.isDeclared = function (target, eventName) {
	        var declaredEvents = target && target.__declaredEvents;
	        return !!declaredEvents && !!declaredEvents[eventName];
	    };
	    EventGroup.stopPropagation = function (event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        else {
	            event.cancelBubble = true;
	        }
	    };
	    EventGroup._isElement = function (target) {
	        return !!target && (target.addEventListener || target instanceof HTMLElement);
	    };
	    EventGroup.prototype.dispose = function () {
	        if (!this._isDisposed) {
	            this._isDisposed = true;
	            this.off();
	            this._parent = null;
	        }
	    };
	    /** On the target, attach a set of events, where the events object is a name to function mapping. */
	    EventGroup.prototype.onAll = function (target, events, useCapture) {
	        for (var eventName in events) {
	            if (events.hasOwnProperty(eventName)) {
	                this.on(target, eventName, events[eventName], useCapture);
	            }
	        }
	    };
	    /** On the target, attach an event whose handler will be called in the context of the parent
	     * of this instance of EventGroup.
	     */
	    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
	        var _this = this;
	        if (eventName.indexOf(',') > -1) {
	            var events = eventName.split(/[ ,]+/);
	            for (var i = 0; i < events.length; i++) {
	                this.on(target, events[i], callback, useCapture);
	            }
	        }
	        else {
	            var parent_1 = this._parent;
	            var eventRecord = {
	                target: target,
	                eventName: eventName,
	                parent: parent_1,
	                callback: callback,
	                objectCallback: null,
	                elementCallback: null,
	                useCapture: useCapture
	            };
	            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
	            var events = (target.__events__ = target.__events__ || {});
	            events[eventName] = events[eventName] || {
	                count: 0
	            };
	            events[eventName][this._id] = events[eventName][this._id] || [];
	            events[eventName][this._id].push(eventRecord);
	            events[eventName].count++;
	            if (EventGroup._isElement(target)) {
	                var processElementEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    var result;
	                    try {
	                        result = callback.apply(parent_1, args);
	                        if (result === false && args[0]) {
	                            var e = args[0];
	                            if (e.preventDefault) {
	                                e.preventDefault();
	                            }
	                            if (e.stopPropagation) {
	                                e.stopPropagation();
	                            }
	                            e.cancelBubble = true;
	                        }
	                    }
	                    catch (e) {
	                    }
	                    return result;
	                };
	                eventRecord.elementCallback = processElementEvent;
	                if (target.addEventListener) {
	                    /* tslint:disable:ban-native-functions */
	                    target.addEventListener(eventName, processElementEvent, useCapture);
	                }
	                else if (target.attachEvent) {
	                    target.attachEvent('on' + eventName, processElementEvent);
	                }
	            }
	            else {
	                var processObjectEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    return callback.apply(parent_1, args);
	                };
	                eventRecord.objectCallback = processObjectEvent;
	            }
	            // Remember the record locally, so that it can be removed.
	            this._eventRecords.push(eventRecord);
	        }
	    };
	    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
	        for (var i = 0; i < this._eventRecords.length; i++) {
	            var eventRecord = this._eventRecords[i];
	            if ((!target || target === eventRecord.target) &&
	                (!eventName || eventName === eventRecord.eventName) &&
	                (!callback || callback === eventRecord.callback) &&
	                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
	                var events = eventRecord.target.__events__;
	                var targetArrayLookup = events[eventRecord.eventName];
	                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
	                // We may have already target's entries, so check for null.
	                if (targetArray) {
	                    if (targetArray.length === 1 || !callback) {
	                        targetArrayLookup.count -= targetArray.length;
	                        delete events[eventRecord.eventName][this._id];
	                    }
	                    else {
	                        targetArrayLookup.count--;
	                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
	                    }
	                    if (!targetArrayLookup.count) {
	                        delete events[eventRecord.eventName];
	                    }
	                }
	                if (eventRecord.elementCallback) {
	                    if (eventRecord.target.removeEventListener) {
	                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
	                    }
	                    else if (eventRecord.target.detachEvent) {
	                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
	                    }
	                }
	                this._eventRecords.splice(i--, 1);
	            }
	        }
	    };
	    /** Trigger the given event in the context of this instance of EventGroup. */
	    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
	        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
	    };
	    /** Declare an event as being supported by this instance of EventGroup. */
	    EventGroup.prototype.declare = function (event) {
	        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
	        if (typeof event === 'string') {
	            declaredEvents[event] = true;
	        }
	        else {
	            for (var i = 0; i < event.length; i++) {
	                declaredEvents[event[i]] = true;
	            }
	        }
	    };
	    EventGroup._uniqueId = 0;
	    return EventGroup;
	}());
	exports.EventGroup = EventGroup;
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Button{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px}.ms-Button::-moz-focus-inner{border:0}.ms-Button{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Button:hover .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Button:hover{color:#1AEBFF;border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button:hover{color:#37006E;border-color:#37006E}}.ms-Button:focus{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";outline:1px solid transparent}.ms-Button:focus .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Button:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.is-disabled,.ms-Button:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:default}.ms-Button.is-disabled .ms-Button-label,.ms-Button:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button.is-disabled:focus,.ms-Button.is-disabled:hover,.ms-Button:disabled:focus,.ms-Button:disabled:hover{outline:0}.ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600;font-size:14px}.ms-Button-description,.ms-Button-icon{display:none}.ms-Fabric.is-focusVisible .ms-Button:focus{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button:focus:before{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:hover{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--primary:focus{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary.is-disabled,.ms-Button--primary:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--primary.is-disabled .ms-Button-label,.ms-Button--primary:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus:before{border-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero{background-color:transparent;border:0;height:auto}.ms-Button--hero .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;padding-top:5px;font-size:20px;line-height:1}html[dir=ltr] .ms-Button--hero .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--hero .ms-Button-icon{margin-left:8px}.ms-Button--hero .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";font-size:21px;font-weight:100;vertical-align:top}.ms-Button--hero:focus .ms-Button-icon,.ms-Button--hero:hover .ms-Button-icon{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--hero:focus .ms-Button-label,.ms-Button--hero:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero:active .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-icon,.ms-Button--hero:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-label,.ms-Button--hero:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound{display:block;height:auto;max-width:280px;min-height:72px;padding:20px}.ms-Button--compound .ms-Button-label{display:block;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";margin-top:-5px}html[dir=ltr] .ms-Button--compound .ms-Button-label{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-label{text-align:right}.ms-Button--compound .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";display:block;font-size:12px;position:relative;top:3px}html[dir=ltr] .ms-Button--compound .ms-Button-description{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-description{text-align:right}.ms-Button--compound:hover .ms-Button-description{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Button--compound:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--compound:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--compound:active .ms-Button-description,.ms-Button--compound:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--compound.is-disabled .ms-Button-description,.ms-Button--compound.is-disabled .ms-Button-label,.ms-Button--compound:disabled .ms-Button-description,.ms-Button--compound:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound.is-disabled:active,.ms-Button--compound.is-disabled:focus,.ms-Button--compound:disabled:active,.ms-Button--compound:disabled:focus{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound.is-disabled:active .ms-Button-description,.ms-Button--compound.is-disabled:active .ms-Button-label,.ms-Button--compound.is-disabled:focus .ms-Button-description,.ms-Button--compound.is-disabled:focus .ms-Button-label,.ms-Button--compound:disabled:active .ms-Button-description,.ms-Button--compound:disabled:active .ms-Button-label,.ms-Button--compound:disabled:focus .ms-Button-description,.ms-Button--compound:disabled:focus .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--command{background-color:transparent;border:none;height:40px;min-width:0;padding:0 8px}html[dir=ltr] .ms-Button--command{text-align:left}html[dir=rtl] .ms-Button--command{text-align:right}.ms-Button--command .ms-Icon{line-height:40px}.ms-Button--command .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";line-height:40px}.ms-Button--command .ms-Button-icon{vertical-align:top;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;position:relative;font-size:16px}html[dir=ltr] .ms-Button--command .ms-Button-icon{text-align:left}html[dir=rtl] .ms-Button--command .ms-Button-icon{text-align:right}html[dir=ltr] .ms-Button--command .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--command .ms-Button-icon{margin-left:8px}.ms-Button--command .ms-Button-label{font-weight:400}.ms-Button--command:focus .ms-Button-icon,.ms-Button--command:focus .ms-Button-label,.ms-Button--command:hover .ms-Button-icon,.ms-Button--command:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--command:active .ms-Button-icon,.ms-Button--command:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-icon,.ms-Button--command:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-label,.ms-Button--command:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--icon{background-color:transparent;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";padding:0;min-width:auto;height:auto;border:0}.ms-Button--icon::-moz-focus-inner{border:0}.ms-Button--icon{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button--icon:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--icon:active,.ms-Button--icon:hover{background-color:transparent;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--icon:focus{background-color:transparent}.ms-Button--icon .ms-Icon{font-size:16px;padding:8px}.ms-Button--icon .ms-Button-icon{display:inline}.ms-Button--icon.is-disabled,.ms-Button--icon:disabled{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-Button--icon{color:" }, { "theme": "yellowLight", "defaultValue": "#fff100" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button--icon{color:" }, { "theme": "blueMid", "defaultValue": "#00188f" }, { "rawString": "}}.ms-Button--primary.disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-Button--primary.disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}html[dir=ltr] .ms-Button+.ms-Button{margin-left:6px}html[dir=rtl] .ms-Button+.ms-Button{margin-right:6px}html[dir=ltr] .ms-Button--command+.ms-Button--command{margin-left:14px}html[dir=rtl] .ms-Button--command+.ms-Button--command{margin-right:14px}a.ms-Button{text-decoration:none;text-align:center}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	"use strict";
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: undefined,
	    lastStyleElement: undefined,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(styles: string) => void} a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(callback) {
	    _themeState.loadStyles = callback;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        var styles = resolveThemableArray(stylesArray);
	        _themeState.loadStyles(styles);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray, styleRecord);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : undefined;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be undefined to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * WARNING: This entry should NOT be imported for production purposes. This entry forces every control to be
	 * parsed and available at load time, which is not necessary for most cases.
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(18));
	__export(__webpack_require__(4));
	__export(__webpack_require__(65));
	__export(__webpack_require__(37));
	__export(__webpack_require__(73));
	__export(__webpack_require__(77));
	__export(__webpack_require__(86));
	__export(__webpack_require__(109));
	__export(__webpack_require__(33));
	__export(__webpack_require__(113));
	__export(__webpack_require__(117));
	__export(__webpack_require__(163));
	__export(__webpack_require__(176));
	__export(__webpack_require__(197));
	__export(__webpack_require__(52));
	__export(__webpack_require__(201));
	__export(__webpack_require__(206));
	__export(__webpack_require__(21));
	__export(__webpack_require__(138));
	__export(__webpack_require__(58));
	__export(__webpack_require__(80));
	__export(__webpack_require__(92));
	__export(__webpack_require__(48));
	__export(__webpack_require__(143));
	__export(__webpack_require__(155));
	__export(__webpack_require__(207));
	__export(__webpack_require__(212));
	__export(__webpack_require__(217));
	__export(__webpack_require__(169));
	__export(__webpack_require__(221));
	__export(__webpack_require__(226));
	__export(__webpack_require__(184));
	__export(__webpack_require__(243));
	__export(__webpack_require__(249));
	__export(__webpack_require__(253));
	__export(__webpack_require__(257));
	__export(__webpack_require__(149));
	__export(__webpack_require__(261));
	__export(__webpack_require__(89));
	__export(__webpack_require__(266));
	__export(__webpack_require__(270));
	__export(__webpack_require__(25));
	/* Special cases that will be removed once we've moved utilities out into a common location. */
	__export(__webpack_require__(7));
	__export(__webpack_require__(26));
	__export(__webpack_require__(14));
	__export(__webpack_require__(13));
	__export(__webpack_require__(31));
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(19));
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(20));
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var FocusZone_1 = __webpack_require__(21);
	var ContextualMenu_1 = __webpack_require__(33);
	var DirectionalHint_1 = __webpack_require__(36);
	var rtl_1 = __webpack_require__(31);
	var object_1 = __webpack_require__(8);
	var css_1 = __webpack_require__(7);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(64);
	var OVERFLOW_KEY = 'overflow';
	var OVERFLOW_WIDTH = 44;
	var Breadcrumb = (function (_super) {
	    __extends(Breadcrumb, _super);
	    function Breadcrumb(props) {
	        _super.call(this, props);
	        this._id = object_1.getId('Breadcrumb');
	        this.state = this._getStateFromProps(props);
	    }
	    Breadcrumb.prototype.componentDidMount = function () {
	        this._updateItemMeasurements();
	        this._updateRenderedItems();
	        this._events.on(window, 'resize', this._updateRenderedItems);
	    };
	    Breadcrumb.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState(this._getStateFromProps(nextProps));
	        this._breadcrumbItemWidths = null;
	    };
	    Breadcrumb.prototype.componentDidUpdate = function (prevProps, prevStates) {
	        if (!this._breadcrumbItemWidths) {
	            this._updateItemMeasurements();
	            this._updateRenderedItems();
	        }
	    };
	    Breadcrumb.prototype.render = function () {
	        var _this = this;
	        var className = this.props.className;
	        var _a = this.state, isOverflowOpen = _a.isOverflowOpen, overflowAnchor = _a.overflowAnchor, renderedItems = _a.renderedItems, renderedOverflowItems = _a.renderedOverflowItems;
	        var overflowMenuId = this._id + '-overflow';
	        return (React.createElement("div", {className: css_1.css('ms-Breadcrumb', className), ref: 'renderingArea'}, 
	            React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, 
	                React.createElement("ul", {className: 'ms-Breadcrumb-list'}, 
	                    renderedOverflowItems && renderedOverflowItems.length ? (React.createElement("li", {className: 'ms-Breadcrumb-overflow', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, 
	                        React.createElement("div", {className: 'ms-Breadcrumb-overflowButton ms-Icon ms-Icon--More', onClick: this._onOverflowClicked, "data-is-focusable": true, role: 'button', "aria-haspopup": 'true', "aria-owns": isOverflowOpen ? overflowMenuId : null}), 
	                        React.createElement("i", {className: css_1.css('ms-Breadcrumb-chevron ms-Icon', rtl_1.getRTL() ? 'ms-Icon--ChevronLeft' : 'ms-Icon--ChevronRight')}))) : (null), 
	                    renderedItems.map(function (item, index) { return (React.createElement("li", {className: 'ms-Breadcrumb-listItem', key: item.key || String(index), ref: item.key || String(index)}, 
	                        React.createElement("a", {className: 'ms-Breadcrumb-itemLink', onClick: item.onClick ? _this._onBreadcrumbClicked.bind(_this, item) : null, href: item.href, role: item.onClick ? 'button' : 'link'}, item.text), 
	                        React.createElement("i", {className: css_1.css('ms-Breadcrumb-chevron ms-Icon', rtl_1.getRTL() ? 'ms-Icon--ChevronLeft' : 'ms-Icon--ChevronRight')}))); }))
	            ), 
	            isOverflowOpen ? (React.createElement(ContextualMenu_1.ContextualMenu, {targetElement: overflowAnchor, isBeakVisible: true, items: renderedOverflowItems.map(function (item, index) { return ({
	                name: item.text,
	                key: item.key,
	                onClick: _this._onBreadcrumbClicked.bind(_this, item),
	                href: item.href
	            }); }), id: overflowMenuId, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onOverflowDismissed})) : (null)));
	    };
	    Breadcrumb.prototype._onOverflowClicked = function (ev) {
	        this.setState({
	            'isOverflowOpen': !this.state.isOverflowOpen,
	            'overflowAnchor': ev.currentTarget
	        });
	    };
	    Breadcrumb.prototype._onOverflowDismissed = function (ev) {
	        this.setState({
	            'isOverflowOpen': false,
	            'overflowAnchor': null
	        });
	    };
	    Breadcrumb.prototype._onBreadcrumbClicked = function (item, ev) {
	        if (item.onClick) {
	            item.onClick(ev, item);
	        }
	        this.setState({
	            'isOverflowOpen': false
	        });
	    };
	    Breadcrumb.prototype._updateItemMeasurements = function () {
	        var items = this.props.items;
	        if (!this._breadcrumbItemWidths) {
	            this._breadcrumbItemWidths = {};
	        }
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (!this._breadcrumbItemWidths[item.key]) {
	                var el = this.refs[item.key];
	                this._breadcrumbItemWidths[item.key] = el.getBoundingClientRect().width;
	            }
	        }
	    };
	    Breadcrumb.prototype._updateRenderedItems = function () {
	        var _a = this.props, items = _a.items, maxDisplayedItems = _a.maxDisplayedItems;
	        var renderingArea = this.refs.renderingArea;
	        var renderedItems = [];
	        var renderedOverflowItems = [].concat(items);
	        var consumedWidth = 0;
	        var style = window.getComputedStyle(renderingArea);
	        var availableWidth = renderingArea.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
	        availableWidth -= OVERFLOW_WIDTH;
	        var i;
	        var minIndex = Math.max(0, renderedOverflowItems.length - maxDisplayedItems);
	        for (i = renderedOverflowItems.length - 1; i >= minIndex; i--) {
	            var item = renderedOverflowItems[i];
	            var itemWidth = this._breadcrumbItemWidths[item.key];
	            if ((consumedWidth + itemWidth) >= availableWidth) {
	                break;
	            }
	            else {
	                consumedWidth += itemWidth;
	            }
	        }
	        renderedItems = renderedOverflowItems.splice(i + 1);
	        this.setState({
	            isOverflowOpen: this.state.isOverflowOpen,
	            overflowAnchor: this.state.overflowAnchor,
	            renderedItems: renderedItems,
	            renderedOverflowItems: renderedOverflowItems,
	        });
	    };
	    Breadcrumb.prototype._getStateFromProps = function (nextProps) {
	        return {
	            isOverflowOpen: false,
	            overflowAnchor: null,
	            renderedItems: nextProps.items || [],
	            renderedOverflowItems: null
	        };
	    };
	    Breadcrumb.defaultProps = {
	        items: [],
	        maxDisplayedItems: 999
	    };
	    __decorate([
	        autobind_1.autobind
	    ], Breadcrumb.prototype, "_onOverflowClicked", null);
	    __decorate([
	        autobind_1.autobind
	    ], Breadcrumb.prototype, "_onOverflowDismissed", null);
	    __decorate([
	        autobind_1.autobind
	    ], Breadcrumb.prototype, "_onBreadcrumbClicked", null);
	    return Breadcrumb;
	}(BaseComponent_1.BaseComponent));
	exports.Breadcrumb = Breadcrumb;
	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(22));
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var FocusZone_Props_1 = __webpack_require__(24);
	var Utilities_1 = __webpack_require__(25);
	var focus_1 = __webpack_require__(32);
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	var TABINDEX = 'tabindex';
	var _allInstances = {};
	var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
	var FocusZone = (function (_super) {
	    __extends(FocusZone, _super);
	    function FocusZone(props) {
	        _super.call(this, props);
	        this._id = Utilities_1.getId('FocusZone');
	        _allInstances[this._id] = this;
	        this._focusAlignment = {
	            left: 0,
	            top: 0
	        };
	    }
	    FocusZone.prototype.componentDidMount = function () {
	        var windowElement = this.refs.root.ownerDocument.defaultView;
	        var parentElement = Utilities_1.getParent(this.refs.root);
	        while (parentElement &&
	            parentElement !== document.body &&
	            parentElement.nodeType === 1) {
	            if (focus_1.isElementFocusZone(parentElement)) {
	                this._isInnerZone = true;
	                break;
	            }
	            parentElement = Utilities_1.getParent(parentElement);
	        }
	        this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
	        // Assign initial tab indexes so that we can set initial focus as appropriate.
	        this._updateTabIndexes();
	        if (this.props.defaultActiveElement) {
	            this._activeElement = Utilities_1.getDocument().querySelector(this.props.defaultActiveElement);
	        }
	    };
	    FocusZone.prototype.componentWillUnmount = function () {
	        delete _allInstances[this._id];
	    };
	    FocusZone.prototype.render = function () {
	        var _a = this.props, rootProps = _a.rootProps, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
	        return (React.createElement("div", __assign({}, rootProps, {className: Utilities_1.css('ms-FocusZone', className), ref: 'root', "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus}, { onMouseDownCapture: this._onMouseDown }), this.props.children));
	    };
	    /**
	     * Sets focus to the first tabbable item in the zone.
	     * @returns True if focus could be set to an active element, false if no operation was taken.
	     */
	    FocusZone.prototype.focus = function () {
	        if (this._activeElement && Utilities_1.elementContains(this.refs.root, this._activeElement)) {
	            this._activeElement.focus();
	            return true;
	        }
	        else {
	            var firstChild = this.refs.root.firstChild;
	            return this.focusElement(focus_1.getNextElement(this.refs.root, firstChild, true));
	        }
	    };
	    /**
	     * Sets focus to a specific child element within the zone. This can be used in conjunction with
	     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
	     * location and then focus.)
	     * @param {HTMLElement} element The child element within the zone to focus.
	     * @returns True if focus could be set to an active element, false if no operation was taken.
	     */
	    FocusZone.prototype.focusElement = function (element) {
	        var onBeforeFocus = this.props.onBeforeFocus;
	        if (onBeforeFocus && !onBeforeFocus(element)) {
	            return false;
	        }
	        if (element) {
	            if (this._activeElement) {
	                this._activeElement.tabIndex = -1;
	            }
	            this._activeElement = element;
	            if (element) {
	                if (!this._focusAlignment) {
	                    this._setFocusAlignment(element, true, true);
	                }
	                this._activeElement.tabIndex = 0;
	                element.focus();
	                return true;
	            }
	        }
	        return false;
	    };
	    FocusZone.prototype._onFocus = function (ev) {
	        var onActiveElementChanged = this.props.onActiveElementChanged;
	        if (this._isImmediateDescendantOfZone(ev.target)) {
	            this._activeElement = ev.target;
	            this._setFocusAlignment(this._activeElement);
	        }
	        else {
	            var parentElement = ev.target;
	            while (parentElement && parentElement !== this.refs.root) {
	                if (focus_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
	                    this._activeElement = parentElement;
	                    break;
	                }
	                parentElement = Utilities_1.getParent(parentElement);
	            }
	        }
	        if (onActiveElementChanged) {
	            onActiveElementChanged(this._activeElement, ev);
	        }
	    };
	    /**
	     * Handle global tab presses so that we can patch tabindexes on the fly.
	     */
	    FocusZone.prototype._onKeyDownCapture = function (ev) {
	        if (ev.which === Utilities_1.KeyCodes.tab) {
	            this._updateTabIndexes();
	        }
	    };
	    FocusZone.prototype._onMouseDown = function (ev) {
	        var disabled = this.props.disabled;
	        if (disabled) {
	            return;
	        }
	        var target = ev.target;
	        var path = [];
	        while (target && target !== this.refs.root) {
	            path.push(target);
	            target = Utilities_1.getParent(target);
	        }
	        while (path.length) {
	            target = path.pop();
	            if (focus_1.isElementFocusZone(target)) {
	                break;
	            }
	            else if (target && focus_1.isElementTabbable(target)) {
	                target.tabIndex = 0;
	                this._setFocusAlignment(target, true, true);
	            }
	        }
	    };
	    /**
	     * Handle the keystrokes.
	     */
	    FocusZone.prototype._onKeyDown = function (ev) {
	        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
	        if (disabled) {
	            return;
	        }
	        if (isInnerZoneKeystroke &&
	            this._isImmediateDescendantOfZone(ev.target) &&
	            isInnerZoneKeystroke(ev)) {
	            // Try to focus
	            var innerZone = this._getFirstInnerZone();
	            if (!innerZone || !innerZone.focus()) {
	                return;
	            }
	        }
	        else {
	            switch (ev.which) {
	                case Utilities_1.KeyCodes.left:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.right:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.up:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.down:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.home:
	                    var firstChild = this.refs.root.firstChild;
	                    if (this.focusElement(focus_1.getNextElement(this.refs.root, firstChild, true))) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.end:
	                    var lastChild = this.refs.root.lastChild;
	                    if (this.focusElement(focus_1.getPreviousElement(this.refs.root, lastChild, true, true, true))) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.enter:
	                    if (this._tryInvokeClickForFocusable(ev.target)) {
	                        break;
	                    }
	                    return;
	                default:
	                    return;
	            }
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    /**
	     * Walk up the dom try to find a focusable element.
	     */
	    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
	        do {
	            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
	                return false;
	            }
	            if (this._isImmediateDescendantOfZone(target) &&
	                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
	                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
	                Utilities_1.EventGroup.raise(target, 'click', null, true);
	                return true;
	            }
	            target = Utilities_1.getParent(target);
	        } while (target !== this.refs.root);
	        return false;
	    };
	    /**
	     * Traverse to find first child zone.
	     */
	    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
	        rootElement = rootElement || this._activeElement || this.refs.root;
	        var child = rootElement.firstElementChild;
	        while (child) {
	            if (focus_1.isElementFocusZone(child)) {
	                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
	            }
	            var match = this._getFirstInnerZone(child);
	            if (match) {
	                return match;
	            }
	            child = child.nextElementSibling;
	        }
	        return null;
	    };
	    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
	        var element = this._activeElement;
	        var candidateDistance = -1;
	        var candidateElement;
	        var changedFocus = false;
	        var isBidirectional = this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional;
	        if (!element) {
	            return false;
	        }
	        if (this._isElementInput(element)) {
	            if (!this._shouldInputLoseFocus(element, isForward)) {
	                return false;
	            }
	        }
	        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
	        do {
	            element = isForward ?
	                focus_1.getNextElement(this.refs.root, element) :
	                focus_1.getPreviousElement(this.refs.root, element);
	            if (isBidirectional) {
	                if (element) {
	                    var targetRect = element.getBoundingClientRect();
	                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
	                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
	                        candidateDistance = elementDistance;
	                        candidateElement = element;
	                    }
	                    if (candidateDistance >= 0 && elementDistance < 0) {
	                        break;
	                    }
	                }
	            }
	            else {
	                candidateElement = element;
	                break;
	            }
	        } while (element);
	        // Focus the closest candidate
	        if (candidateElement && candidateElement !== this._activeElement) {
	            changedFocus = true;
	            this.focusElement(candidateElement);
	        }
	        else if (this.props.isCircularNavigation) {
	            if (isForward) {
	                return this.focusElement(focus_1.getNextElement(this.refs.root, this.refs.root.firstElementChild, true));
	            }
	            else {
	                return this.focusElement(focus_1.getPreviousElement(this.refs.root, this.refs.root.lastElementChild, true, true, true));
	            }
	        }
	        return changedFocus;
	    };
	    FocusZone.prototype._moveFocusDown = function () {
	        var targetTop = -1;
	        var leftAlignment = this._focusAlignment.left;
	        if (this._moveFocus(true, function (activeRect, targetRect) {
	            var distance = -1;
	            // ClientRect values can be floats that differ by very small fractions of a decimal.
	            // If the difference between top and bottom are within a pixel then we should treat
	            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
	            // but without Math.Floor they will be handled incorrectly.
	            var targetRectTop = Math.floor(targetRect.top);
	            var activeRectBottom = Math.floor(activeRect.bottom);
	            if ((targetTop === -1 && targetRectTop >= activeRectBottom) ||
	                (targetRectTop === targetTop)) {
	                targetTop = targetRectTop;
	                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
	                    distance = 0;
	                }
	                else {
	                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
	                }
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, false, true);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusUp = function () {
	        var targetTop = -1;
	        var leftAlignment = this._focusAlignment.left;
	        if (this._moveFocus(false, function (activeRect, targetRect) {
	            var distance = -1;
	            // ClientRect values can be floats that differ by very small fractions of a decimal.
	            // If the difference between top and bottom are within a pixel then we should treat
	            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
	            // but without Math.Floor they will be handled incorrectly.
	            var targetRectBottom = Math.floor(targetRect.bottom);
	            var targetRectTop = Math.floor(targetRect.top);
	            var activeRectTop = Math.floor(activeRect.top);
	            if ((targetTop === -1 && targetRectBottom <= activeRectTop) ||
	                (targetRectTop === targetTop)) {
	                targetTop = targetRectTop;
	                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
	                    distance = 0;
	                }
	                else {
	                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
	                }
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, false, true);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusLeft = function () {
	        var _this = this;
	        var targetTop = -1;
	        var topAlignment = this._focusAlignment.top;
	        if (this._moveFocus(Utilities_1.getRTL(), function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 &&
	                targetRect.right <= activeRect.right &&
	                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, true, false);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusRight = function () {
	        var _this = this;
	        var targetTop = -1;
	        var topAlignment = this._focusAlignment.top;
	        if (this._moveFocus(!Utilities_1.getRTL(), function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 &&
	                targetRect.left >= activeRect.left &&
	                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, true, false);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
	        if (this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional &&
	            (!this._focusAlignment || isHorizontal || isVertical)) {
	            var rect = element.getBoundingClientRect();
	            var left = rect.left + (rect.width / 2);
	            var top_1 = rect.top + (rect.height / 2);
	            if (!this._focusAlignment) {
	                this._focusAlignment = { left: left, top: top_1 };
	            }
	            if (isHorizontal) {
	                this._focusAlignment.left = left;
	            }
	            if (isVertical) {
	                this._focusAlignment.top = top_1;
	            }
	        }
	    };
	    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
	        var parentElement = Utilities_1.getParent(element);
	        while (parentElement && parentElement !== this.refs.root && parentElement !== document.body) {
	            if (focus_1.isElementFocusZone(parentElement)) {
	                return false;
	            }
	            parentElement = Utilities_1.getParent(parentElement);
	        }
	        return true;
	    };
	    FocusZone.prototype._updateTabIndexes = function (element) {
	        if (!element) {
	            element = this.refs.root;
	            if (this._activeElement && !Utilities_1.elementContains(element, this._activeElement)) {
	                this._activeElement = null;
	            }
	        }
	        var childNodes = element.children;
	        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
	            var child = childNodes[childIndex];
	            if (!focus_1.isElementFocusZone(child)) {
	                if (focus_1.isElementTabbable(child)) {
	                    if (this.props.disabled) {
	                        child.setAttribute(TABINDEX, '-1');
	                    }
	                    else if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
	                        this._activeElement = child;
	                        if (child.getAttribute(TABINDEX) !== '0') {
	                            child.setAttribute(TABINDEX, '0');
	                        }
	                    }
	                    else if (child.getAttribute(TABINDEX) !== '-1') {
	                        child.setAttribute(TABINDEX, '-1');
	                    }
	                }
	                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
	                    // Disgusting IE hack. Sad face.
	                    child.setAttribute('focusable', 'false');
	                }
	                this._updateTabIndexes(child);
	            }
	        }
	    };
	    FocusZone.prototype._isElementInput = function (element) {
	        if (element && element.tagName && element.tagName.toLowerCase() === 'input') {
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
	        if (element &&
	            element.type &&
	            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
	            var selectionStart = element.selectionStart;
	            var selectionEnd = element.selectionEnd;
	            var isRangeSelected = selectionStart !== selectionEnd;
	            var inputValue = element.value;
	            // We shouldn't lose focus in the following cases:
	            // 1. There is range selected.
	            // 2. When selection start is larger than 0 and it is backward.
	            // 3. when selection start is not the end of lenght and it is forward.
	            if (isRangeSelected ||
	                (selectionStart > 0 && !isForward) ||
	                (selectionStart !== inputValue.length && isForward)) {
	                return false;
	            }
	        }
	        return true;
	    };
	    FocusZone.defaultProps = {
	        isCircularNavigation: false,
	        direction: FocusZone_Props_1.FocusZoneDirection.bidirectional
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], FocusZone.prototype, "_onFocus", null);
	    __decorate([
	        Utilities_1.autobind
	    ], FocusZone.prototype, "_onMouseDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], FocusZone.prototype, "_onKeyDown", null);
	    return FocusZone;
	}(Utilities_1.BaseComponent));
	exports.FocusZone = FocusZone;
	


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	(function (FocusZoneDirection) {
	    /** Only react to up/down arrows. */
	    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
	    /** Only react to left/right arrows. */
	    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
	    /** React to all arrows. */
	    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
	})(exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));
	var FocusZoneDirection = exports.FocusZoneDirection;
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));
	__export(__webpack_require__(28));
	__export(__webpack_require__(7));
	__export(__webpack_require__(29));
	__export(__webpack_require__(14));
	__export(__webpack_require__(30));
	__export(__webpack_require__(8));
	__export(__webpack_require__(31));
	__export(__webpack_require__(11));
	


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	(function (KeyCodes) {
	    KeyCodes[KeyCodes["a"] = 65] = "a";
	    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
	    KeyCodes[KeyCodes["comma"] = 188] = "comma";
	    KeyCodes[KeyCodes["del"] = 46] = "del";
	    KeyCodes[KeyCodes["down"] = 40] = "down";
	    KeyCodes[KeyCodes["end"] = 35] = "end";
	    KeyCodes[KeyCodes["enter"] = 13] = "enter";
	    KeyCodes[KeyCodes["escape"] = 27] = "escape";
	    KeyCodes[KeyCodes["home"] = 36] = "home";
	    KeyCodes[KeyCodes["left"] = 37] = "left";
	    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
	    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
	    KeyCodes[KeyCodes["right"] = 39] = "right";
	    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
	    KeyCodes[KeyCodes["space"] = 32] = "space";
	    KeyCodes[KeyCodes["tab"] = 9] = "tab";
	    KeyCodes[KeyCodes["up"] = 38] = "up";
	})(exports.KeyCodes || (exports.KeyCodes = {}));
	var KeyCodes = exports.KeyCodes;
	


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	function findIndex(array, cb) {
	    var index = -1;
	    for (var i = 0; array && i < array.length; i++) {
	        if (cb(array[i], i)) {
	            index = i;
	            break;
	        }
	    }
	    return index;
	}
	exports.findIndex = findIndex;
	function createArray(size, getItem) {
	    var array = [];
	    for (var i = 0; i < size; i++) {
	        array.push(getItem(i));
	    }
	    return array;
	}
	exports.createArray = createArray;
	


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
	 * so that they can be used in scenarios that simply require a function callback.
	 *
	 * @example
	 * import { autobind } from '../utilities/autobind';
	 *
	 * public class Foo {
	 *   @autobind
	 *   method() {
	 *   }
	 * }
	 */
	function autobind(target, key, descriptor) {
	    var fn = descriptor.value;
	    return {
	        configurable: true,
	        get: function () {
	            if (this === fn.prototype) {
	                return fn;
	            }
	            return fn.bind(this);
	        },
	        set: function (newValue) {
	            Object.defineProperty(this, key, {
	                configurable: true,
	                writable: true,
	                enumerable: true,
	                value: newValue
	            });
	        }
	    };
	}
	exports.autobind = autobind;
	


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Sets the virtual parent of an element.
	 * Pass `undefined` as the `parent` to clear the virtual parent.
	 *
	 * @export
	 * @param {HTMLElement} child
	 * @param {HTMLElement} parent
	 */
	function setVirtualParent(child, parent) {
	    var virtualChild = child;
	    var virtualParent = parent;
	    if (!virtualChild._virtual) {
	        virtualChild._virtual = {
	            children: []
	        };
	    }
	    var oldParent = virtualChild._virtual.parent;
	    if (oldParent && oldParent !== parent) {
	        // Remove the child from its old parent.
	        var index = oldParent._virtual.children.indexOf(virtualChild);
	        if (index > -1) {
	            oldParent._virtual.children.splice(index, 1);
	        }
	    }
	    virtualChild._virtual.parent = virtualParent || undefined;
	    if (virtualParent) {
	        if (!virtualParent._virtual) {
	            virtualParent._virtual = {
	                children: []
	            };
	        }
	        virtualParent._virtual.children.push(virtualChild);
	    }
	}
	exports.setVirtualParent = setVirtualParent;
	function getVirtualParent(child) {
	    var parent;
	    if (child && isVirtualElement(child)) {
	        parent = child._virtual.parent;
	    }
	    return parent;
	}
	exports.getVirtualParent = getVirtualParent;
	/**
	 * Gets the element which is the parent of a given element.
	 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
	 * real DOM parent when present.
	 *
	 * @export
	 * @param {HTMLElement} child
	 * @param {boolean} [allowVirtualParents=true]
	 * @returns {HTMLElement}
	 */
	function getParent(child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
	    return child && (allowVirtualParents && getVirtualParent(child) ||
	        child.parentNode && child.parentNode);
	}
	exports.getParent = getParent;
	/**
	 * Determines whether or not a parent element contains a given child element.
	 * If `allowVirtualParents` is true, this method may return `true` if the child
	 * has the parent in its virtual element hierarchy.
	 *
	 * @export
	 * @param {HTMLElement} parent
	 * @param {HTMLElement} child
	 * @param {boolean} [allowVirtualParents=true]
	 * @returns {boolean}
	 */
	function elementContains(parent, child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
	    var isContained = false;
	    if (parent && child) {
	        if (allowVirtualParents) {
	            isContained = false;
	            while (child) {
	                var nextParent = getParent(child);
	                if (nextParent === parent) {
	                    isContained = true;
	                    break;
	                }
	                child = nextParent;
	            }
	        }
	        else if (parent.contains) {
	            isContained = parent.contains(child);
	        }
	    }
	    return isContained;
	}
	exports.elementContains = elementContains;
	var _isSSR = false;
	/** Helper to set ssr mode to simulate no window object returned from getWindow helper. */
	function setSSR(isEnabled) {
	    _isSSR = isEnabled;
	}
	exports.setSSR = setSSR;
	/** Helper to get the window object. */
	function getWindow(rootElement) {
	    if (_isSSR) {
	        return undefined;
	    }
	    else {
	        return (rootElement &&
	            rootElement.ownerDocument &&
	            rootElement.ownerDocument.defaultView ?
	            rootElement.ownerDocument.defaultView :
	            window);
	    }
	}
	exports.getWindow = getWindow;
	/** Helper to get the document object. */
	function getDocument(rootElement) {
	    if (_isSSR) {
	        return undefined;
	    }
	    else {
	        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
	    }
	}
	exports.getDocument = getDocument;
	/** Helper to get bounding client rect, works with window. */
	function getRect(element) {
	    var rect;
	    if (element) {
	        if (element === window) {
	            rect = {
	                left: 0,
	                top: 0,
	                width: window.innerWidth,
	                height: window.innerHeight,
	                right: window.innerWidth,
	                bottom: window.innerHeight
	            };
	        }
	        else if (element.getBoundingClientRect) {
	            rect = element.getBoundingClientRect();
	        }
	    }
	    return rect;
	}
	exports.getRect = getRect;
	/**
	 * Determines whether or not an element has the virtual hierarchy extension.
	 *
	 * @param {(HTMLElement | IVirtualElement)} element
	 * @returns {element is IVirtualElement}
	 */
	function isVirtualElement(element) {
	    return element && !!element._virtual;
	}
	


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	var REACT_LIFECYCLE_EXCLUSIONS = [
	    'setState',
	    'render',
	    'componentWillMount',
	    'componentDidMount',
	    'componentWillReceiveProps',
	    'shouldComponentUpdate',
	    'componentWillUpdate',
	    'componentDidUpdate',
	    'componentWillUnmount'
	];
	/**
	 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
	 * @param destination The instance of the object to hoist the methods onto.
	 * @param source The instance of the object where the methods are hoisted from.
	 * @param exclusions (Optional) What methods to exclude from being hoisted.
	 * @returns {string[]} An array of names of methods that were hoisted.
	 */
	function hoistMethods(destination, source, exclusions) {
	    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
	    var hoisted = [];
	    var _loop_1 = function(methodName) {
	        if (typeof source[methodName] === 'function' &&
	            destination[methodName] === undefined &&
	            (!exclusions || exclusions.indexOf(methodName) === -1)) {
	            hoisted.push(methodName);
	            /* tslint:disable:no-function-expression */
	            destination[methodName] = function () { source[methodName].apply(source, arguments); };
	        }
	    };
	    for (var methodName in source) {
	        _loop_1(methodName);
	    }
	    return hoisted;
	}
	exports.hoistMethods = hoistMethods;
	/**
	 * Provides a method for convenience to unhoist hoisted methods.
	 * @param {any} source The source object upon which methods were hoisted.
	 * @param {string[]} methodNames An array of method names to unhoist.
	 */
	function unhoistMethods(source, methodNames) {
	    methodNames
	        .forEach(function (methodName) { return delete source[methodName]; });
	}
	exports.unhoistMethods = unhoistMethods;
	


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var KeyCodes_1 = __webpack_require__(26);
	var dom_1 = __webpack_require__(29);
	var _isRTL = false;
	/**
	 * Gets the rtl state of the page (returns true if in rtl.)
	 */
	function getRTL() {
	    if (_isRTL === undefined) {
	        var doc = dom_1.getDocument();
	        if (doc) {
	            _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
	        }
	        else {
	            throw new Error('getRTL was called in a server environment without setRTL being called first. ' +
	                'Call setRTL to set the correct direction first.');
	        }
	    }
	    return _isRTL;
	}
	exports.getRTL = getRTL;
	/**
	 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
	 */
	function setRTL(isRTL) {
	    var doc = dom_1.getDocument();
	    if (doc) {
	        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
	    }
	    _isRTL = isRTL;
	}
	exports.setRTL = setRTL;
	/**
	 * Returns the given key, but flips right/left arrows if necessary.
	 */
	function getRTLSafeKeyCode(key) {
	    if (getRTL()) {
	        if (key === KeyCodes_1.KeyCodes.left) {
	            key = KeyCodes_1.KeyCodes.right;
	        }
	        else if (key === KeyCodes_1.KeyCodes.right) {
	            key = KeyCodes_1.KeyCodes.left;
	        }
	    }
	    return key;
	}
	exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* tslint:disable:no-string-literal */
	"use strict";
	var dom_1 = __webpack_require__(29);
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
	    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
	}
	exports.getFirstFocusable = getFirstFocusable;
	function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
	    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
	}
	exports.getLastFocusable = getLastFocusable;
	/**
	 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
	 * @return True if focus was set, false if it was not.
	 * @param {HTMLElement} rootElement - element to start the search for a focusable child.
	 */
	function focusFirstChild(rootElement) {
	    var element = getNextElement(rootElement, rootElement, true, false, false, true);
	    if (element) {
	        element.focus();
	        return true;
	    }
	    return false;
	}
	exports.focusFirstChild = focusFirstChild;
	/** Traverse to find the previous element. */
	function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones) {
	    if (!currentElement ||
	        currentElement === rootElement) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    // Check its children.
	    if (traverseChildren && (includeElementsInFocusZones || !isElementFocusZone(currentElement)) && isCurrentElementVisible) {
	        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    // Check the current node, if it's not the first traversal.
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    // Check its previous sibling.
	    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    // Check its parent.
	    if (!suppressParentTraversal) {
	        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getPreviousElement = getPreviousElement;
	/** Traverse to find the next focusable element. */
	function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones) {
	    if (!currentElement ||
	        (currentElement === rootElement && suppressChildTraversal)) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    // Check the current node, if it's not the first traversal.
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    // Check its children.
	    if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !isElementFocusZone(currentElement))) {
	        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    if (currentElement === rootElement) {
	        return null;
	    }
	    // Check its sibling.
	    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    if (!suppressParentTraversal) {
	        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getNextElement = getNextElement;
	function isElementVisible(element) {
	    // If the element is not valid, return false.
	    if (!element || !element.getAttribute) {
	        return false;
	    }
	    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
	    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
	    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
	        return visibilityAttribute === 'true';
	    }
	    // Fallback to other methods of determining actual visibility.
	    return (element.offsetHeight !== 0 ||
	        element.offsetParent !== null ||
	        element.isVisible === true); // used as a workaround for testing.
	}
	exports.isElementVisible = isElementVisible;
	function isElementTabbable(element) {
	    return (!!element &&
	        (element.tagName === 'A' ||
	            (element.tagName === 'BUTTON' && !element.disabled) ||
	            (element.tagName === 'INPUT' && !element.disabled) ||
	            (element.tagName === 'TEXTAREA' && !element.disabled) ||
	            (element.getAttribute && element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true')));
	}
	exports.isElementTabbable = isElementTabbable;
	function isElementFocusZone(element) {
	    return element && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
	}
	exports.isElementFocusZone = isElementFocusZone;
	function doesElementContainFocus(element) {
	    var currentActiveElement = dom_1.getDocument(element).activeElement;
	    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
	        return true;
	    }
	    return false;
	}
	exports.doesElementContainFocus = doesElementContainFocus;
	


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(34));
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(35));
	__export(__webpack_require__(63));
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var DirectionalHint_1 = __webpack_require__(36);
	var FocusZone_1 = __webpack_require__(21);
	var Utilities_1 = __webpack_require__(25);
	var Callout_1 = __webpack_require__(37);
	var BaseComponent_1 = __webpack_require__(12);
	var Icon_1 = __webpack_require__(58);
	__webpack_require__(62);
	var ContextualMenuType;
	(function (ContextualMenuType) {
	    ContextualMenuType[ContextualMenuType["vertical"] = 0] = "vertical";
	    ContextualMenuType[ContextualMenuType["horizontal"] = 1] = "horizontal";
	})(ContextualMenuType || (ContextualMenuType = {}));
	var HorizontalAlignmentHint;
	(function (HorizontalAlignmentHint) {
	    HorizontalAlignmentHint[HorizontalAlignmentHint["auto"] = 0] = "auto";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["left"] = 1] = "left";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["center"] = 2] = "center";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["right"] = 3] = "right";
	})(HorizontalAlignmentHint || (HorizontalAlignmentHint = {}));
	var VerticalAlignmentHint;
	(function (VerticalAlignmentHint) {
	    VerticalAlignmentHint[VerticalAlignmentHint["top"] = 0] = "top";
	    VerticalAlignmentHint[VerticalAlignmentHint["center"] = 1] = "center";
	    VerticalAlignmentHint[VerticalAlignmentHint["bottom"] = 2] = "bottom";
	})(VerticalAlignmentHint || (VerticalAlignmentHint = {}));
	var ContextualMenu = (function (_super) {
	    __extends(ContextualMenu, _super);
	    function ContextualMenu(props) {
	        _super.call(this, props);
	        this.state = {
	            contextualMenuItems: null,
	            subMenuId: Utilities_1.getId('ContextualMenu')
	        };
	        this._isFocusingPreviousElement = false;
	        this._enterTimerId = 0;
	    }
	    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss(ev, dismissAll);
	        }
	    };
	    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
	        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
	            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
	            this._setTargetWindowAndElement(newTarget);
	        }
	    };
	    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
	    ContextualMenu.prototype.componentWillMount = function () {
	        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
	        this._setTargetWindowAndElement(target);
	        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
	    };
	    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
	    ContextualMenu.prototype.componentDidMount = function () {
	        this._events.on(this._targetWindow, 'resize', this.dismiss);
	    };
	    // Invoked immediately before a component is unmounted from the DOM.
	    ContextualMenu.prototype.componentWillUnmount = function () {
	        var _this = this;
	        if (this._isFocusingPreviousElement && this._previousActiveElement) {
	            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
	            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
	            // to reset the focus back to the thing it thinks should have been focused.
	            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
	        }
	        this._events.dispose();
	        this._async.dispose();
	    };
	    ContextualMenu.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, targetElement = _a.targetElement, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, target = _a.target;
	        var submenuProps = this.state.submenuProps;
	        var hasIcons = !!(items && items.some(function (item) { return !!item.icon || !!item.iconProps; }));
	        var hasCheckmarks = !!(items && items.some(function (item) { return !!item.canCheck; }));
	        return (React.createElement(Callout_1.Callout, {target: target, targetElement: targetElement, targetPoint: targetPoint, useTargetPoint: useTargetPoint, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'ms-ContextualMenu-Callout', setInitialFocus: true, onDismiss: this.props.onDismiss}, 
	            React.createElement("div", {ref: function (host) { return _this._host = host; }, id: id, className: Utilities_1.css('ms-ContextualMenu-container', className)}, 
	                (items && items.length) ? (React.createElement(FocusZone_1.FocusZone, {className: 'ms-ContextualMenu is-open', direction: FocusZone_1.FocusZoneDirection.vertical, ariaLabelledBy: labelElementId, ref: function (focusZone) { return _this._focusZone = focusZone; }, rootProps: { role: 'menu' }}, 
	                    React.createElement("ul", {className: 'ms-ContextualMenu-list is-open', onKeyDown: this._onKeyDown, "aria-label": ariaLabel}, items.map(function (item, index) { return (
	                    // If the item name is equal to '-', a divider will be generated.
	                    item.name === '-' ? (React.createElement("li", {role: 'separator', key: item.key || index, className: Utilities_1.css('ms-ContextualMenu-divider', item.className)})) : (React.createElement("li", {role: 'menuitem', title: item.title, key: item.key || index, className: Utilities_1.css('ms-ContextualMenu-item', item.className)}, _this._renderMenuItem(item, index, hasCheckmarks, hasIcons)))); }))
	                )) : (null), 
	                submenuProps ? (React.createElement(ContextualMenu, __assign({}, submenuProps))) : (null))
	        ));
	    };
	    ContextualMenu.prototype._renderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        if (item.onRender) {
	            return item.onRender(item);
	        }
	        // If the item is disabled then it should render as the button for proper styling.
	        if (item.href) {
	            return this._renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
	        }
	        return this._renderButtonItem(item, index, hasCheckmarks, hasIcons);
	    };
	    ContextualMenu.prototype._renderAnchorMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        return (React.createElement("div", null, 
	            React.createElement("a", __assign({}, Utilities_1.getNativeProps(item, Utilities_1.anchorProperties), {href: item.href, className: Utilities_1.css('ms-ContextualMenu-link', item.isDisabled || item.disabled ? 'is-disabled' : ''), role: 'menuitem', onClick: this._onAnchorClick.bind(this, item)}), 
	                (hasIcons) ? (this._renderIcon(item)) : (null), 
	                React.createElement("span", {className: 'ms-ContextualMenu-linkText ms-fontWeight-regular'}, 
	                    " ", 
	                    item.name, 
	                    " "))
	        ));
	    };
	    ContextualMenu.prototype._renderButtonItem = function (item, index, hasCheckmarks, hasIcons) {
	        var _this = this;
	        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
	        var ariaLabel = '';
	        if (item.ariaLabel) {
	            ariaLabel = item.ariaLabel;
	        }
	        else if (item.name) {
	            ariaLabel = item.name;
	        }
	        var itemButtonProperties = {
	            className: Utilities_1.css('ms-ContextualMenu-link', { 'is-expanded': (expandedMenuItemKey === item.key) }),
	            onClick: this._onItemClick.bind(this, item),
	            onKeyDown: item.items && item.items.length ? this._onItemKeyDown.bind(this, item) : null,
	            onMouseEnter: this._onItemMouseEnter.bind(this, item),
	            onMouseLeave: this._onMouseLeave,
	            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
	            disabled: item.isDisabled || item.disabled,
	            role: 'menuitem',
	            href: item.href,
	            title: item.title,
	            'aria-label': ariaLabel,
	            'aria-haspopup': item.items && item.items.length ? true : null,
	            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null
	        };
	        return React.createElement('button', Utilities_1.assign({}, Utilities_1.getNativeProps(item, Utilities_1.buttonProperties), itemButtonProperties), this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons));
	    };
	    ContextualMenu.prototype._renderMenuItemChildren = function (item, index, hasCheckmarks, hasIcons) {
	        var isItemChecked = item.isChecked || item.checked;
	        return (React.createElement("div", {className: 'ms-ContextualMenu-linkContent'}, 
	            (hasCheckmarks) ? (React.createElement(Icon_1.Icon, {iconName: isItemChecked ? Icon_1.IconName.CheckMark : Icon_1.IconName.CustomIcon, className: 'ms-ContextualMenu-icon', onClick: this._onItemClick.bind(this, item)})) : (null), 
	            (hasIcons) ? (this._renderIcon(item)) : (null), 
	            React.createElement("span", {className: 'ms-ContextualMenu-itemText ms-fontWeight-regular'}, item.name), 
	            (item.items && item.items.length) ? (React.createElement(Icon_1.Icon, {className: 'ms-ContextualMenu-submenuChevron ms-Icon', iconName: Utilities_1.getRTL() ? Icon_1.IconName.ChevronLeft : Icon_1.IconName.ChevronRight})) : (null)));
	    };
	    ContextualMenu.prototype._renderIcon = function (item) {
	        // Only present to allow continued use of item.icon which is deprecated.
	        var iconProps = item.iconProps ? item.iconProps : {
	            iconName: Icon_1.IconName[item.icon]
	        };
	        // Use the default icon color for the known icon names
	        var iconColorClassName = iconProps.iconName === Icon_1.IconName.None ? '' : 'ms-ContextualMenu-iconColor';
	        var iconClassName = Utilities_1.css('ms-ContextualMenu-icon', iconColorClassName, iconProps.className);
	        return React.createElement(Icon_1.Icon, __assign({}, iconProps, {className: iconClassName}));
	    };
	    ContextualMenu.prototype._onKeyDown = function (ev) {
	        var submenuCloseKey = Utilities_1.getRTL() ? Utilities_1.KeyCodes.right : Utilities_1.KeyCodes.left;
	        if (ev.which === Utilities_1.KeyCodes.escape
	            || ev.which === Utilities_1.KeyCodes.tab
	            || (ev.which === submenuCloseKey && this.props.isSubMenu)) {
	            // When a user presses escape, we will try to refocus the previous focused element.
	            this._isFocusingPreviousElement = true;
	            ev.preventDefault();
	            ev.stopPropagation();
	            this.dismiss(ev);
	        }
	    };
	    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
	        var _this = this;
	        var targetElement = ev.currentTarget;
	        if (item.key !== this.state.expandedMenuItemKey) {
	            if (item.items && item.items.length) {
	                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
	            }
	            else {
	                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
	            }
	        }
	    };
	    ContextualMenu.prototype._onMouseLeave = function (ev) {
	        this._async.clearTimeout(this._enterTimerId);
	    };
	    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
	        if (item.onMouseDown) {
	            item.onMouseDown(item, ev);
	        }
	    };
	    ContextualMenu.prototype._onItemClick = function (item, ev) {
	        if (!item.items || !item.items.length) {
	            this._executeItemClick(item, ev);
	        }
	        else {
	            if (item.key === this.state.expandedMenuItemKey) {
	                this._onSubMenuDismiss(ev);
	            }
	            else {
	                this._onItemSubMenuExpand(item, ev.currentTarget);
	            }
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
	        this._executeItemClick(item, ev);
	        ev.stopPropagation();
	    };
	    ContextualMenu.prototype._executeItemClick = function (item, ev) {
	        if (item.onClick) {
	            item.onClick(ev, item);
	        }
	        this.dismiss(ev, true);
	    };
	    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
	        var openKey = Utilities_1.getRTL() ? Utilities_1.KeyCodes.left : Utilities_1.KeyCodes.right;
	        if (ev.which === openKey) {
	            this._onItemSubMenuExpand(item, ev.currentTarget);
	        }
	    };
	    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
	        if (this.state.expandedMenuItemKey !== item.key) {
	            if (this.state.submenuProps) {
	                this._onSubMenuDismiss();
	            }
	            this.setState({
	                expandedMenuItemKey: item.key,
	                submenuProps: {
	                    items: item.items,
	                    target: target,
	                    onDismiss: this._onSubMenuDismiss,
	                    isSubMenu: true,
	                    id: this.state.subMenuId,
	                    shouldFocusOnMount: true,
	                    directionalHint: Utilities_1.getRTL() ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
	                    className: this.props.className,
	                    gapSpace: 0
	                }
	            });
	        }
	    };
	    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
	        if (dismissAll) {
	            this.dismiss(ev, dismissAll);
	        }
	        else {
	            this.setState({
	                dismissedMenuItemKey: this.state.expandedMenuItemKey,
	                expandedMenuItemKey: null,
	                submenuProps: null
	            });
	        }
	    };
	    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
	        if (target) {
	            if (typeof target === 'string') {
	                var currentDoc = Utilities_1.getDocument();
	                this._target = currentDoc ? currentDoc.querySelector(target) : null;
	                this._targetWindow = Utilities_1.getWindow();
	            }
	            else if (target.stopPropagation) {
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(target.toElement);
	            }
	            else {
	                var targetElement = target;
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(targetElement);
	            }
	        }
	        else {
	            this._targetWindow = Utilities_1.getWindow();
	        }
	    };
	    // The default ContextualMenu properities have no items and beak, the default submenu direction is right and top.
	    ContextualMenu.defaultProps = {
	        items: [],
	        shouldFocusOnMount: true,
	        isBeakVisible: false,
	        gapSpace: 0,
	        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
	        beakWidth: 16
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], ContextualMenu.prototype, "dismiss", null);
	    __decorate([
	        Utilities_1.autobind
	    ], ContextualMenu.prototype, "_onKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], ContextualMenu.prototype, "_onMouseLeave", null);
	    __decorate([
	        Utilities_1.autobind
	    ], ContextualMenu.prototype, "_onSubMenuDismiss", null);
	    return ContextualMenu;
	}(BaseComponent_1.BaseComponent));
	exports.ContextualMenu = ContextualMenu;
	


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	(function (DirectionalHint) {
	    /**
	     * Appear above the target element, with the left edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
	    /**
	     * Appear above the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
	    /**
	     * Appear above the target element, with the right edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
	    /**
	     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
	     */
	    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
	    /**
	     * Appear below the target element, with the left edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
	    /**
	     * Appear below the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
	    /**
	     * Appear below the target element, with the right edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
	    /**
	     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
	     */
	    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
	    /**
	     * Appear to the left of the target element, with the top edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
	    /**
	     * Appear to the left of the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
	    /**
	     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
	    /**
	     * Appear to the right of the target element, with the top edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
	    /**
	     * Appear to the right of the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
	    /**
	     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
	})(exports.DirectionalHint || (exports.DirectionalHint = {}));
	var DirectionalHint = exports.DirectionalHint;
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(38));
	


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(39));
	__export(__webpack_require__(36));
	


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var CalloutContent_1 = __webpack_require__(40);
	var Layer_1 = __webpack_require__(48);
	var Callout = (function (_super) {
	    __extends(Callout, _super);
	    function Callout(props) {
	        _super.call(this, props);
	    }
	    Callout.prototype.render = function () {
	        var content = (React.createElement(CalloutContent_1.CalloutContent, __assign({}, this.props)));
	        return this.props.doNotLayer ? content : (React.createElement(Layer_1.Layer, null, content));
	    };
	    return Callout;
	}(React.Component));
	exports.Callout = Callout;
	


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	var DirectionalHint_1 = __webpack_require__(36);
	var Utilities_1 = __webpack_require__(25);
	var positioning_1 = __webpack_require__(41);
	var focus_1 = __webpack_require__(32);
	var Utilities_2 = __webpack_require__(25);
	var Popup_1 = __webpack_require__(44);
	var BaseComponent_1 = __webpack_require__(12);
	__webpack_require__(47);
	var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
	var OFF_SCREEN_POSITION = { top: -9999, left: 0 };
	var BORDER_WIDTH = 1;
	var SPACE_FROM_EDGE = 8;
	var CalloutContent = (function (_super) {
	    __extends(CalloutContent, _super);
	    function CalloutContent(props) {
	        _super.call(this, props, { 'beakStyle': 'beakWidth' });
	        this._didSetInitialFocus = false;
	        this.state = {
	            positions: null,
	            slideDirectionalClassName: null,
	            calloutElementRect: null
	        };
	        this._positionAttempts = 0;
	    }
	    CalloutContent.prototype.componentDidUpdate = function () {
	        this._setInitialFocus();
	        this._updatePosition();
	    };
	    CalloutContent.prototype.componentWillMount = function () {
	        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
	        this._setTargetWindowAndElement(target);
	    };
	    CalloutContent.prototype.componentWillUpdate = function (newProps) {
	        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
	            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
	            this._setTargetWindowAndElement(newTarget);
	        }
	    };
	    CalloutContent.prototype.componentDidMount = function () {
	        this._onComponentDidMount();
	    };
	    CalloutContent.prototype.render = function () {
	        // If there is no target window then we are likely in server side rendering and we should not render anything.
	        if (!this._targetWindow) {
	            return null;
	        }
	        var _a = this.props, className = _a.className, target = _a.target, targetElement = _a.targetElement, isBeakVisible = _a.isBeakVisible, beakStyle = _a.beakStyle, children = _a.children, beakWidth = _a.beakWidth;
	        var _b = this.state, positions = _b.positions, slideDirectionalClassName = _b.slideDirectionalClassName;
	        var beakStyleWidth = beakWidth;
	        // This is here to support the old way of setting the beak size until version 1.0.0.
	        // beakStyle is now deprecated and will be be removed at version 1.0.0
	        if (beakStyle === 'ms-Callout-smallbeak') {
	            beakStyleWidth = 16;
	        }
	        var beakReactStyle = {
	            top: positions && positions.beak ? positions.beak.top : BEAK_ORIGIN_POSITION.top,
	            left: positions && positions.beak ? positions.beak.left : BEAK_ORIGIN_POSITION.left,
	            height: beakStyleWidth,
	            width: beakStyleWidth
	        };
	        var contentMaxHeight = this._getMaxHeight();
	        var beakVisible = isBeakVisible && (!!targetElement || !!target);
	        var content = (React.createElement("div", {ref: this._resolveRef('_hostElement'), className: 'ms-Callout-container'}, 
	            React.createElement("div", {className: Utilities_1.css('ms-Callout', className, slideDirectionalClassName ? "ms-u-" + slideDirectionalClassName : ''), style: positions ? positions.callout : OFF_SCREEN_POSITION, ref: this._resolveRef('_calloutElement')}, 
	                beakVisible ? (React.createElement("div", {className: 'ms-Callout-beak', style: beakReactStyle})) : (null), 
	                beakVisible ?
	                    (React.createElement("div", {className: 'ms-Callout-beakCurtain'})) :
	                    (null), 
	                React.createElement(Popup_1.Popup, {className: 'ms-Callout-main', onDismiss: this.dismiss, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight }}, children))
	        ));
	        return content;
	    };
	    CalloutContent.prototype.dismiss = function (ev) {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss(ev);
	        }
	    };
	    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
	        var target = ev.target;
	        if (ev.target !== this._targetWindow &&
	            this._hostElement &&
	            !Utilities_1.elementContains(this._hostElement, target) &&
	            (this._target.stopPropagation ||
	                (!this._target || (target !== this._target && !Utilities_1.elementContains(this._target, target))))) {
	            this.dismiss(ev);
	        }
	    };
	    CalloutContent.prototype._setInitialFocus = function () {
	        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
	            this._didSetInitialFocus = true;
	            focus_1.focusFirstChild(this._calloutElement);
	        }
	    };
	    CalloutContent.prototype._onComponentDidMount = function () {
	        // This is added so the callout will dismiss when the window is scrolled
	        // but not when something inside the callout is scrolled.
	        this._events.on(this._targetWindow, 'scroll', this._dismissOnLostFocus, true);
	        this._events.on(this._targetWindow, 'resize', this.dismiss, true);
	        this._events.on(this._targetWindow, 'focus', this._dismissOnLostFocus, true);
	        this._events.on(this._targetWindow, 'click', this._dismissOnLostFocus, true);
	        if (this.props.onLayerMounted) {
	            this.props.onLayerMounted();
	        }
	        this._updatePosition();
	    };
	    CalloutContent.prototype._updatePosition = function () {
	        var positions = this.state.positions;
	        var hostElement = this._hostElement;
	        var calloutElement = this._calloutElement;
	        if (hostElement && calloutElement) {
	            var currentProps = void 0;
	            currentProps = Utilities_2.assign(currentProps, this.props);
	            currentProps.bounds = this._getBounds();
	            // Temporary to be removed when targetElement is removed. Currently deprecated.
	            if (this.props.targetElement) {
	                currentProps.targetElement = this._target;
	            }
	            else {
	                currentProps.target = this._target;
	            }
	            var positionInfo = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
	            // Set the new position only when the positions are not exists or one of the new callout positions are different.
	            // The position should not change if the position is within 2 decimal places.
	            if ((!positions && positionInfo) ||
	                (positions && positionInfo &&
	                    (positions.callout.top.toFixed(2) !== positionInfo.calloutPosition.top.toFixed(2) ||
	                        positions.callout.left.toFixed(2) !== positionInfo.calloutPosition.left.toFixed(2))
	                    && this._positionAttempts < 5)) {
	                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
	                // and we should stop trying to reposition to prevent a stack overflow.
	                this._positionAttempts++;
	                this.setState({
	                    positions: {
	                        callout: positionInfo.calloutPosition,
	                        beak: positionInfo.beakPosition,
	                    },
	                    slideDirectionalClassName: positionInfo.directionalClassName
	                });
	            }
	            else {
	                this._positionAttempts = 0;
	            }
	        }
	    };
	    CalloutContent.prototype._getBounds = function () {
	        if (!this._bounds) {
	            var currentBounds = this.props.bounds;
	            if (!currentBounds) {
	                currentBounds = {
	                    top: 0 + SPACE_FROM_EDGE,
	                    left: 0 + SPACE_FROM_EDGE,
	                    right: this._targetWindow.innerWidth - SPACE_FROM_EDGE,
	                    bottom: this._targetWindow.innerHeight - SPACE_FROM_EDGE,
	                    width: this._targetWindow.innerWidth - SPACE_FROM_EDGE * 2,
	                    height: this._targetWindow.innerHeight - SPACE_FROM_EDGE * 2
	                };
	            }
	            this._bounds = currentBounds;
	        }
	        return this._bounds;
	    };
	    CalloutContent.prototype._getMaxHeight = function () {
	        if (!this._maxHeight) {
	            this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
	        }
	        return this._maxHeight;
	    };
	    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
	        if (target) {
	            if (typeof target === 'string') {
	                var currentDoc = Utilities_1.getDocument();
	                this._target = currentDoc ? currentDoc.querySelector(target) : null;
	                this._targetWindow = Utilities_1.getWindow();
	            }
	            else if (target.stopPropagation) {
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(target.toElement);
	            }
	            else {
	                var targetElement = target;
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(targetElement);
	            }
	        }
	        else {
	            this._targetWindow = Utilities_1.getWindow();
	        }
	    };
	    CalloutContent.defaultProps = {
	        isBeakVisible: true,
	        beakWidth: 16,
	        gapSpace: 16,
	        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], CalloutContent.prototype, "dismiss", null);
	    __decorate([
	        Utilities_1.autobind
	    ], CalloutContent.prototype, "_setInitialFocus", null);
	    __decorate([
	        Utilities_1.autobind
	    ], CalloutContent.prototype, "_onComponentDidMount", null);
	    return CalloutContent;
	}(BaseComponent_1.BaseComponent));
	exports.CalloutContent = CalloutContent;
	


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DirectionalHint_1 = __webpack_require__(36);
	var Rectangle_1 = __webpack_require__(42);
	var scroll_1 = __webpack_require__(43);
	var object_1 = __webpack_require__(8);
	(function (RectangleEdge) {
	    RectangleEdge[RectangleEdge["top"] = 0] = "top";
	    RectangleEdge[RectangleEdge["bottom"] = 1] = "bottom";
	    RectangleEdge[RectangleEdge["left"] = 2] = "left";
	    RectangleEdge[RectangleEdge["right"] = 3] = "right";
	})(exports.RectangleEdge || (exports.RectangleEdge = {}));
	var RectangleEdge = exports.RectangleEdge;
	var SLIDE_ANIMATIONS = (_a = {},
	    _a[RectangleEdge.top] = 'slideUpIn20',
	    _a[RectangleEdge.bottom] = 'slideDownIn20',
	    _a[RectangleEdge.left] = 'slideLeftIn20',
	    _a[RectangleEdge.right] = 'slideRightIn20',
	    _a
	);
	var PositionData = (function () {
	    function PositionData(calloutDirection, targetDirection, calloutPercent, targetPercent, beakPercent, isAuto) {
	        this.calloutDirection = calloutDirection;
	        this.targetDirection = targetDirection;
	        this.calloutPercent = calloutPercent;
	        this.targetPercent = targetPercent;
	        this.beakPercent = beakPercent;
	        this.isAuto = isAuto;
	    }
	    return PositionData;
	}());
	exports.PositionData = PositionData;
	// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
	var DirectionalDictionary = (_b = {},
	    _b[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, true),
	    _b[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, true),
	    _b[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.right, RectangleEdge.left, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.left, RectangleEdge.right, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 100, 100, 50, false),
	    _b
	);
	var CoverDictionary = (_c = {},
	    _c[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.top, RectangleEdge.top, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, true),
	    _c[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, true),
	    _c[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.left, RectangleEdge.left, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.right, RectangleEdge.right, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 100, 100, 50, false),
	    _c
	);
	var OppositeEdgeDictionary = (_d = {},
	    _d[RectangleEdge.top] = RectangleEdge.bottom,
	    _d[RectangleEdge.bottom] = RectangleEdge.top,
	    _d[RectangleEdge.right] = RectangleEdge.left,
	    _d[RectangleEdge.left] = RectangleEdge.right,
	    _d
	);
	function getRelativePositions(props, hostElement, calloutElement) {
	    var beakWidth = !props.isBeakVisible ? 0 : props.beakWidth;
	    var borderWidth = positioningFunctions._getBorderSize(calloutElement);
	    var gap = positioningFunctions._calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
	    var boundingRect = props.bounds ?
	        positioningFunctions._getRectangleFromIRect(props.bounds) :
	        new Rectangle_1.default(0, window.innerWidth - scroll_1.getScrollbarWidth(), 0, window.innerHeight);
	    var targetRect = props.target ? positioningFunctions._getTargetRect(boundingRect, props.target) : positioningFunctions._getTargetRectDEPRECATED(boundingRect, props.targetElement, props.creationEvent, props.targetPoint, props.useTargetPoint);
	    var positionData = positioningFunctions._getPositionData(props.directionalHint, targetRect, boundingRect, props.coverTarget);
	    var positionedCallout = positioningFunctions._positionCalloutWithinBounds(positioningFunctions._getRectangleFromHTMLElement(calloutElement), targetRect, boundingRect, positionData, gap, props.coverTarget);
	    var beakPositioned = positioningFunctions._positionBeak(beakWidth, positionedCallout, targetRect, borderWidth);
	    var finalizedCallout = positioningFunctions._finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement);
	    return {
	        calloutPosition: { top: finalizedCallout.top, left: finalizedCallout.left },
	        beakPosition: { top: beakPositioned.top, left: beakPositioned.left, display: 'block' },
	        directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
	        submenuDirection: positionedCallout.calloutEdge === RectangleEdge.right ? DirectionalHint_1.DirectionalHint.leftBottomEdge : DirectionalHint_1.DirectionalHint.rightBottomEdge
	    };
	}
	exports.getRelativePositions = getRelativePositions;
	var positioningFunctions;
	(function (positioningFunctions) {
	    function _getTargetRect(bounds, target) {
	        var targetRectangle;
	        if (target.preventDefault) {
	            var ev = target;
	            targetRectangle = new Rectangle_1.default(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	        }
	        else {
	            targetRectangle = _getRectangleFromHTMLElement(target);
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
	                var direction = outOfBounds_1[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRect = _getTargetRect;
	    function _getTargetRectDEPRECATED(bounds, targetElement, ev, targetPoint, isTargetPoint) {
	        var targetRectangle;
	        if (isTargetPoint) {
	            if (targetPoint) {
	                targetRectangle = new Rectangle_1.default(targetPoint.x, targetPoint.x, targetPoint.y, targetPoint.y);
	            }
	            else {
	                targetRectangle = new Rectangle_1.default(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	            }
	        }
	        else {
	            if (!targetElement) {
	                if (ev && ev.target) {
	                    targetRectangle = _getRectangleFromHTMLElement(ev.target);
	                }
	                targetRectangle = new Rectangle_1.default();
	            }
	            else {
	                targetRectangle = _getRectangleFromHTMLElement(targetElement);
	            }
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
	                var direction = outOfBounds_2[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRectDEPRECATED = _getTargetRectDEPRECATED;
	    function _getRectangleFromHTMLElement(element) {
	        var clientRect = element.getBoundingClientRect();
	        return new Rectangle_1.default(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
	    }
	    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
	    function _positionCalloutWithinBounds(calloutRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        if (gap === void 0) { gap = 0; }
	        var estimatedRectangle = _moveRectangleToAnchorRectangle(calloutRectangle, directionalInfo.calloutDirection, directionalInfo.calloutPercent, targetRectangle, directionalInfo.targetDirection, directionalInfo.targetPercent, gap);
	        if (_isRectangleWithinBounds(estimatedRectangle, boundingRectangle)) {
	            return { calloutRectangle: estimatedRectangle, calloutEdge: directionalInfo.calloutDirection, targetEdge: directionalInfo.targetDirection, alignPercent: directionalInfo.calloutPercent, beakPercent: directionalInfo.beakPercent };
	        }
	        else {
	            return _getBestRectangleFitWithinBounds(estimatedRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget);
	        }
	    }
	    positioningFunctions._positionCalloutWithinBounds = _positionCalloutWithinBounds;
	    function _getBestRectangleFitWithinBounds(estimatedPosition, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        var callout = {
	            calloutRectangle: estimatedPosition,
	            calloutEdge: directionalInfo.calloutDirection,
	            targetEdge: directionalInfo.targetDirection,
	            alignPercent: directionalInfo.calloutPercent,
	            beakPercent: directionalInfo.beakPercent
	        };
	        // If it can't possibly fit within the bounds just put it into it's initial position.
	        if (!_canRectangleFitWithinBounds(estimatedPosition, boundingRectangle)) {
	            return callout;
	        }
	        if (!coverTarget) {
	            callout = _flipRectangleToFit(callout, targetRectangle, directionalInfo.targetPercent, boundingRectangle, gap);
	        }
	        var outOfBounds = _getOutOfBoundsEdges(callout.calloutRectangle, boundingRectangle);
	        for (var _i = 0, outOfBounds_3 = outOfBounds; _i < outOfBounds_3.length; _i++) {
	            var direction = outOfBounds_3[_i];
	            callout.calloutRectangle = _alignEdgeToCoordinate(callout.calloutRectangle, boundingRectangle[RectangleEdge[direction]], direction);
	            var adjustedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.targetEdge, targetRectangle, callout.targetEdge, directionalInfo.targetPercent);
	            callout.alignPercent = adjustedPercent;
	        }
	        return callout;
	    }
	    positioningFunctions._getBestRectangleFitWithinBounds = _getBestRectangleFitWithinBounds;
	    function _positionBeak(beakWidth, callout, targetRectangle, border) {
	        var calloutRect = new Rectangle_1.default(0, callout.calloutRectangle.width - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        var beakRectangle = new Rectangle_1.default(0, beakWidth, 0, beakWidth);
	        var recalculatedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.calloutEdge, targetRectangle, callout.targetEdge, callout.beakPercent);
	        var estimatedTargetPoint = _getPointOnEdgeFromPercent(calloutRect, callout.calloutEdge, recalculatedPercent);
	        return _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border);
	    }
	    positioningFunctions._positionBeak = _positionBeak;
	    function _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border) {
	        var beakPixelSize = _calculateActualBeakWidthInPixels(beakRectangle.width) / 2;
	        var innerRect = null;
	        var beakPoint = { x: beakRectangle.width / 2, y: beakRectangle.width / 2 };
	        if (callout.calloutEdge === RectangleEdge.bottom || callout.calloutEdge === RectangleEdge.top) {
	            innerRect = new Rectangle_1.default(beakPixelSize, callout.calloutRectangle.width - beakPixelSize - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        }
	        else {
	            innerRect = new Rectangle_1.default(0, callout.calloutRectangle.width - border * 2, beakPixelSize, callout.calloutRectangle.height - beakPixelSize - border * 2);
	        }
	        var finalPoint = _getClosestPointOnEdgeToPoint(innerRect, callout.calloutEdge, estimatedTargetPoint);
	        return _movePointOnRectangleToPoint(beakRectangle, beakPoint, finalPoint);
	    }
	    positioningFunctions._finalizeBeakPosition = _finalizeBeakPosition;
	    function _getRectangleFromIRect(rect) {
	        return new Rectangle_1.default(rect.left, rect.right, rect.top, rect.bottom);
	    }
	    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
	    function _finalizeCalloutPosition(calloutRectangle, hostElement) {
	        var hostRect = _getRectangleFromHTMLElement(hostElement);
	        var topPosition = calloutRectangle.top - hostRect.top;
	        var leftPosition = calloutRectangle.left - hostRect.left;
	        return new Rectangle_1.default(leftPosition, leftPosition + calloutRectangle.width, topPosition, topPosition + calloutRectangle.height);
	    }
	    positioningFunctions._finalizeCalloutPosition = _finalizeCalloutPosition;
	    /**
	     * Finds the percent on the recalculateRect that matches the percent on the target rect based on position.
	     */
	    function _recalculateMatchingPercents(recalculateRect, rectangleEdge, targetRect, targetEdge, targetPercent) {
	        var targetPoint = _getPointOnEdgeFromPercent(targetRect, targetEdge, targetPercent);
	        var adjustedPoint = _getClosestPointOnEdgeToPoint(recalculateRect, rectangleEdge, targetPoint);
	        var adjustedPercent = _getPercentOfEdgeFromPoint(recalculateRect, rectangleEdge, adjustedPoint);
	        if (adjustedPercent > 100) {
	            adjustedPercent = 100;
	        }
	        else if (adjustedPercent < 0) {
	            adjustedPercent = 0;
	        }
	        return adjustedPercent;
	    }
	    positioningFunctions._recalculateMatchingPercents = _recalculateMatchingPercents;
	    function _canRectangleFitWithinBounds(rect, boundingRect) {
	        if (rect.width > boundingRect.width || rect.height > boundingRect.height) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._canRectangleFitWithinBounds = _canRectangleFitWithinBounds;
	    function _isRectangleWithinBounds(rect, boundingRect) {
	        if (rect.top < boundingRect.top) {
	            return false;
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            return false;
	        }
	        if (rect.left < boundingRect.left) {
	            return false;
	        }
	        if (rect.right > boundingRect.right) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._isRectangleWithinBounds = _isRectangleWithinBounds;
	    /**
	     * Gets all of the edges of a rectangle that are outside of the given bounds.
	     * If there are no out of bounds edges it returns an empty array.
	     */
	    function _getOutOfBoundsEdges(rect, boundingRect) {
	        var outOfBounds = new Array();
	        if (rect.top < boundingRect.top) {
	            outOfBounds.push(RectangleEdge.top);
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            outOfBounds.push(RectangleEdge.bottom);
	        }
	        if (rect.left < boundingRect.left) {
	            outOfBounds.push(RectangleEdge.left);
	        }
	        if (rect.right > boundingRect.right) {
	            outOfBounds.push(RectangleEdge.right);
	        }
	        return outOfBounds;
	    }
	    positioningFunctions._getOutOfBoundsEdges = _getOutOfBoundsEdges;
	    /**
	     * Returns a point on a edge that is x% of the way down it.
	     */
	    function _getPointOnEdgeFromPercent(rect, direction, percentOfRect) {
	        var startPoint;
	        var endPoint;
	        switch (direction) {
	            case RectangleEdge.top:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.right, y: rect.top };
	                break;
	            case RectangleEdge.left:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.left, y: rect.bottom };
	                break;
	            case RectangleEdge.right:
	                startPoint = { x: rect.right, y: rect.top };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            case RectangleEdge.bottom:
	                startPoint = { x: rect.left, y: rect.bottom };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            default:
	                startPoint = { x: 0, y: 0 };
	                endPoint = { x: 0, y: 0 };
	                break;
	        }
	        return _calculatePointPercentAlongLine(startPoint, endPoint, percentOfRect);
	    }
	    positioningFunctions._getPointOnEdgeFromPercent = _getPointOnEdgeFromPercent;
	    /**
	     * Gets the percent down an edge that a point appears.
	     */
	    function _getPercentOfEdgeFromPoint(rect, direction, valueOnEdge) {
	        switch (direction) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                return rect.width !== 0 ? (valueOnEdge.x - rect.left) / rect.width * 100 : 100;
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                return rect.height !== 0 ? (valueOnEdge.y - rect.top) / rect.height * 100 : 100;
	        }
	    }
	    positioningFunctions._getPercentOfEdgeFromPoint = _getPercentOfEdgeFromPoint;
	    /**
	     * Percent is based on distance from left to right or up to down. 0% would be left most, 100% would be right most.
	     */
	    function _calculatePointPercentAlongLine(startPoint, endPoint, percent) {
	        var x = startPoint.x + ((endPoint.x - startPoint.x) * percent / 100);
	        var y = startPoint.y + ((endPoint.y - startPoint.y) * percent / 100);
	        return { x: x, y: y };
	    }
	    positioningFunctions._calculatePointPercentAlongLine = _calculatePointPercentAlongLine;
	    function _moveTopLeftOfRectangleToPoint(rect, destination) {
	        return new Rectangle_1.default(destination.x, destination.x + rect.width, destination.y, destination.y + rect.height);
	    }
	    positioningFunctions._moveTopLeftOfRectangleToPoint = _moveTopLeftOfRectangleToPoint;
	    /**
	     * Aligns the given edge to the target coordinate.
	     */
	    function _alignEdgeToCoordinate(rect, coordinate, direction) {
	        switch (direction) {
	            case RectangleEdge.top:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate });
	            case RectangleEdge.bottom:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate - rect.height });
	            case RectangleEdge.left:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate, y: rect.top });
	            case RectangleEdge.right:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate - rect.width, y: rect.top });
	        }
	        return new Rectangle_1.default();
	    }
	    positioningFunctions._alignEdgeToCoordinate = _alignEdgeToCoordinate;
	    /**
	     * Moves a point on a given rectangle to the target point. Does not change the rectangles orientation.
	     */
	    function _movePointOnRectangleToPoint(rect, rectanglePoint, targetPoint) {
	        var leftCornerXDifference = rectanglePoint.x - rect.left;
	        var leftCornerYDifference = rectanglePoint.y - rect.top;
	        return _moveTopLeftOfRectangleToPoint(rect, { x: targetPoint.x - leftCornerXDifference, y: targetPoint.y - leftCornerYDifference });
	    }
	    positioningFunctions._movePointOnRectangleToPoint = _movePointOnRectangleToPoint;
	    /**
	     * Moves the given rectangle a certain number of pixels in the given direction;
	     */
	    function _moveRectangleInDirection(rect, moveDistance, direction) {
	        var xModifier = 0;
	        var yModifier = 0;
	        switch (direction) {
	            case RectangleEdge.top:
	                yModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.left:
	                xModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.right:
	                xModifier = moveDistance;
	                break;
	            case RectangleEdge.bottom:
	                yModifier = moveDistance;
	                break;
	        }
	        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left + xModifier, y: rect.top + yModifier });
	    }
	    positioningFunctions._moveRectangleInDirection = _moveRectangleInDirection;
	    /**
	     * Moves the given rectangle to an anchor rectangle.
	     */
	    function _moveRectangleToAnchorRectangle(rect, rectSide, rectPercent, anchorRect, anchorSide, anchorPercent, gap) {
	        if (gap === void 0) { gap = 0; }
	        var rectTargetPoint = _getPointOnEdgeFromPercent(rect, rectSide, rectPercent);
	        var anchorTargetPoint = _getPointOnEdgeFromPercent(anchorRect, anchorSide, anchorPercent);
	        var positionedRect = _movePointOnRectangleToPoint(rect, rectTargetPoint, anchorTargetPoint);
	        return _moveRectangleInDirection(positionedRect, gap, anchorSide);
	    }
	    positioningFunctions._moveRectangleToAnchorRectangle = _moveRectangleToAnchorRectangle;
	    /**
	     * Gets the closet point on an edge to the given point.
	     */
	    function _getClosestPointOnEdgeToPoint(rect, edge, point) {
	        switch (edge) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                var x = void 0;
	                if (point.x > rect.right) {
	                    x = rect.right;
	                }
	                else if (point.x < rect.left) {
	                    x = rect.left;
	                }
	                else {
	                    x = point.x;
	                }
	                return { x: x, y: rect[RectangleEdge[edge]] };
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                var y = void 0;
	                if (point.y > rect.bottom) {
	                    y = rect.bottom;
	                }
	                else if (point.y < rect.top) {
	                    y = rect.top;
	                }
	                else {
	                    y = point.y;
	                }
	                return { x: rect[RectangleEdge[edge]], y: y };
	        }
	    }
	    positioningFunctions._getClosestPointOnEdgeToPoint = _getClosestPointOnEdgeToPoint;
	    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
	    // We still want to position the beak based on it's midpoint which does not change. It will
	    // be at (beakwidth / 2, beakwidth / 2)
	    function _calculateActualBeakWidthInPixels(beakWidth) {
	        return Math.sqrt(beakWidth * beakWidth * 2);
	    }
	    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
	    function _getBorderSize(element) {
	        var styles = getComputedStyle(element, null);
	        var topBorder = parseFloat(styles.borderTopWidth);
	        var bottomBorder = parseFloat(styles.borderBottomWidth);
	        var leftBorder = parseFloat(styles.borderLeftWidth);
	        var rightBorder = parseFloat(styles.borderRightWidth);
	        // If any of the borders are NaN default to 0
	        if (isNaN(topBorder) || isNaN(bottomBorder) || isNaN(leftBorder) || isNaN(rightBorder)) {
	            return 0;
	        }
	        // If all of the borders are the same size, any value;
	        if (topBorder === bottomBorder && bottomBorder === leftBorder && leftBorder === rightBorder) {
	            return topBorder;
	        }
	        // If the borders do not agree, return 0
	        return 0;
	    }
	    positioningFunctions._getBorderSize = _getBorderSize;
	    function _getPositionData(direction, target, boundingRect, coverTarget) {
	        var directionalInfo = coverTarget ? CoverDictionary[direction] : DirectionalDictionary[direction];
	        if (directionalInfo.isAuto) {
	            var center = _getPointOnEdgeFromPercent(target, directionalInfo.targetDirection, 50);
	            if (center.x <= boundingRect.width / 2) {
	                directionalInfo.calloutPercent = 0;
	                directionalInfo.targetPercent = 0;
	            }
	            else {
	                directionalInfo.calloutPercent = 100;
	                directionalInfo.targetPercent = 100;
	            }
	        }
	        return directionalInfo;
	    }
	    positioningFunctions._getPositionData = _getPositionData;
	    function _flipRectangleToFit(callout, targetRect, targetPercent, boundingRect, gap) {
	        var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.top, RectangleEdge.bottom];
	        var currentEdge = callout.targetEdge;
	        // Make a copy to presever the original positioning.
	        var positionedCallout = object_1.assign({}, callout);
	        // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified callout.
	        for (var i = 0; i < 4; i++) {
	            var outOfBounds = _getOutOfBoundsEdges(positionedCallout.calloutRectangle, boundingRect);
	            var index = outOfBounds.indexOf(currentEdge);
	            var oppositeEdge = OppositeEdgeDictionary[currentEdge];
	            if (index > -1) {
	                directions.splice(directions.indexOf(currentEdge), 1);
	                currentEdge = directions.indexOf(oppositeEdge) > -1 ? oppositeEdge : directions.slice(-1)[0];
	                positionedCallout.calloutEdge = OppositeEdgeDictionary[currentEdge];
	                positionedCallout.targetEdge = currentEdge;
	                positionedCallout.calloutRectangle = _moveRectangleToAnchorRectangle(positionedCallout.calloutRectangle, positionedCallout.calloutEdge, positionedCallout.alignPercent, targetRect, positionedCallout.targetEdge, targetPercent, gap);
	            }
	            else {
	                return positionedCallout;
	            }
	        }
	        return callout;
	    }
	    positioningFunctions._flipRectangleToFit = _flipRectangleToFit;
	})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
	var _a, _b, _c, _d;



/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	var Rectangle = (function () {
	    function Rectangle(left, right, top, bottom) {
	        if (left === void 0) { left = 0; }
	        if (right === void 0) { right = 0; }
	        if (top === void 0) { top = 0; }
	        if (bottom === void 0) { bottom = 0; }
	        this.top = top;
	        this.bottom = bottom;
	        this.left = left;
	        this.right = right;
	    }
	    Object.defineProperty(Rectangle.prototype, "width", {
	        /**
	         * Calculated automatically by subtracting the right from left
	         */
	        get: function () {
	            return this.right - this.left;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "height", {
	        /**
	         * Calculated automatically by subtracting the bottom from top.
	         */
	        get: function () {
	            return this.bottom - this.top;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Rectangle;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Rectangle;
	


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	var _scrollbarWidth;
	exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
	/** Calculates the width of a scrollbar for the browser/os. */
	function getScrollbarWidth() {
	    if (_scrollbarWidth === undefined) {
	        var scrollDiv = document.createElement('div');
	        scrollDiv.style.setProperty('width', '100px');
	        scrollDiv.style.setProperty('height', '100px');
	        scrollDiv.style.setProperty('overflow', 'scroll');
	        scrollDiv.style.setProperty('position', 'absolute');
	        scrollDiv.style.setProperty('top', '-9999px');
	        document.body.appendChild(scrollDiv);
	        // Get the scrollbar width
	        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        // Delete the DIV
	        document.body.removeChild(scrollDiv);
	    }
	    return _scrollbarWidth;
	}
	exports.getScrollbarWidth = getScrollbarWidth;
	/**
	 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
	 * document.body.
	 */
	function findScrollableParent(startingElement) {
	    var el = startingElement;
	    // First do a quick scan for the scrollable attribute.
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
	            return el;
	        }
	        el = el.parentElement;
	    }
	    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
	    el = startingElement;
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
	            var styles = getComputedStyle(el);
	            var overflowY = styles ? styles.getPropertyValue('overflow-y') : '';
	            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
	                return el;
	            }
	        }
	        el = el.parentElement;
	    }
	    // Fall back to window scroll.
	    if (!el || el === document.body) {
	        el = window;
	    }
	    return el;
	}
	exports.findScrollableParent = findScrollableParent;
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(45));
	


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(46));
	


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var KeyCodes_1 = __webpack_require__(26);
	var BaseComponent_1 = __webpack_require__(12);
	var Utilities_1 = __webpack_require__(25);
	var focus_1 = __webpack_require__(32);
	var dom_1 = __webpack_require__(29);
	/**
	 * This adds accessibility to Dialog and Panel controls
	 */
	var Popup = (function (_super) {
	    __extends(Popup, _super);
	    function Popup() {
	        _super.apply(this, arguments);
	    }
	    Popup.prototype.componentWillMount = function () {
	        this._originalFocusedElement = dom_1.getDocument().activeElement;
	    };
	    Popup.prototype.componentDidMount = function () {
	        var _this = this;
	        this._events.on(this.refs.root, 'keydown', this._onKeyDown);
	        this._events.on(this.refs.root, 'focus', function () { return _this._containsFocus = true; }, true);
	        this._events.on(this.refs.root, 'blur', function () { return _this._containsFocus = false; }, true);
	        if (focus_1.doesElementContainFocus(this.refs.root)) {
	            this._containsFocus = true;
	        }
	    };
	    Popup.prototype.componentWillUnmount = function () {
	        var _this = this;
	        if (this.props.shouldRestoreFocus &&
	            this._originalFocusedElement &&
	            this._containsFocus &&
	            this._originalFocusedElement !== window) {
	            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
	            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
	            // to reset the focus back to the thing it thinks should have been focused.
	            setTimeout(function () {
	                if (_this._originalFocusedElement) {
	                    _this._originalFocusedElement.focus();
	                }
	            }, 0);
	        }
	    };
	    Popup.prototype.render = function () {
	        var _a = this.props, role = _a.role, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
	        return (React.createElement("div", __assign({ref: 'root'}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), {className: className, role: role, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy}), this.props.children));
	    };
	    Popup.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.escape:
	                if (this.props.onDismiss) {
	                    this.props.onDismiss();
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                }
	                break;
	        }
	    };
	    Popup.defaultProps = {
	        shouldRestoreFocus: true
	    };
	    return Popup;
	}(BaseComponent_1.BaseComponent));
	exports.Popup = Popup;
	


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Callout{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-shadow:0 0 15px -5px rgba(0,0,0,.4);position:absolute;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box}@media screen and (-ms-high-contrast:active){.ms-Callout{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Callout{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Callout-container{position:relative}.ms-Callout-main{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";overflow-y:auto;position:relative}.ms-Callout-beak{position:absolute;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:inherit;border:inherit;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ms-Callout-beakCurtain{position:absolute;top:0;right:0;bottom:0;left:0;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(49));
	


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(50));
	__export(__webpack_require__(51));
	


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var LayerHost_1 = __webpack_require__(51);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(56);
	var Layer = (function (_super) {
	    __extends(Layer, _super);
	    function Layer(props) {
	        _super.call(this, props);
	        this._id = Utilities_1.getId();
	    }
	    Layer.prototype.componentDidMount = function () {
	        var _this = this;
	        var layerHost = this.context.layerHost || LayerHost_1.LayerHost.getDefault(this._rootElement);
	        this._layerHost = layerHost;
	        layerHost.addLayer(this._id, this._rootElement, this.props, function (projectedLayer) {
	            _this._projectedLayer = projectedLayer;
	            if (_this.props.onLayerMounted) {
	                _this.props.onLayerMounted();
	            }
	        });
	    };
	    Layer.prototype.componentWillUnmount = function () {
	        this._layerHost.removeLayer(this._id);
	    };
	    Layer.prototype.componentWillReceiveProps = function (newProps) {
	        if (this._projectedLayer) {
	            this._projectedLayer.projectProps(newProps);
	        }
	    };
	    Layer.prototype.forceUpdate = function () {
	        if (this._projectedLayer) {
	            this._projectedLayer.forceUpdate();
	        }
	    };
	    Layer.prototype.render = function () {
	        return (React.createElement("span", {className: 'ms-Layer', ref: this._resolveRef('_rootElement')}));
	    };
	    Layer.contextTypes = {
	        layerHost: React.PropTypes.object
	    };
	    return Layer;
	}(Utilities_1.BaseComponent));
	exports.Layer = Layer;
	


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Fabric_1 = __webpack_require__(52);
	var Utilities_1 = __webpack_require__(25);
	var ProjectedLayer_1 = __webpack_require__(55);
	__webpack_require__(57);
	var DEFAULT_HOST_ID = '__layerHost';
	/**
	 * LayerHost provides a wrapper that acts as a passthrough, rendering the given children within it, but also
	 * appending a div at the end, which projects all content wrapped in the Layer components within. Projecting
	 * DOM to the end of the document allows for overlaying and stacking scenarios.
	 *
	 * Normally you do not need to interact directly with LayerHost. If you render Layers within content that isn't
	 * wrapped within a LayerHost, a LayerHost will be created and appended to the end of the document body, where
	 * layer content will then be projected. However in some circumstances you want Layered content to be rendered
	 * in a specific place rather than document body (for example in a popup window or contained within a scrollable
	 * region.) In those cases, wrap the content wihtin a LayerHost.
	 *
	 * @example
	 * <LayerHost>
	 *   <Layer>I will at the end of LayerHost.</Layer>
	 *   <div>I will render normally.</div>
	 * </LayerHost>
	 **/
	var LayerHost = (function (_super) {
	    __extends(LayerHost, _super);
	    function LayerHost(props) {
	        _super.call(this, props);
	        this.state = {
	            layers: []
	        };
	        this._layers = [];
	        this._layerRefs = {};
	    }
	    LayerHost.getDefault = function (layerElement) {
	        var doc = layerElement.ownerDocument;
	        var hostElement = doc.getElementById(DEFAULT_HOST_ID);
	        if (hostElement) {
	            return hostElement[DEFAULT_HOST_ID];
	        }
	        else {
	            hostElement = doc.createElement('div');
	            hostElement.id = DEFAULT_HOST_ID;
	            doc.body.appendChild(hostElement);
	            var defaultHost = ReactDOM.render(React.createElement(LayerHost, {isDefault: true}), hostElement);
	            hostElement[DEFAULT_HOST_ID] = defaultHost;
	            return defaultHost;
	        }
	    };
	    LayerHost.prototype.getChildContext = function () {
	        return {
	            layerHost: this
	        };
	    };
	    LayerHost.prototype.render = function () {
	        var _this = this;
	        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
	        return (React.createElement("div", __assign({}, divProps, {className: Utilities_1.css('ms-LayerHost', this.props.className, { 'ms-LayerHost--default': this.props.isDefault })}), 
	            React.createElement(Fabric_1.Fabric, null, 
	                this.props.children, 
	                React.createElement("div", {className: 'ms-LayerHost-overlay'}, this._layers.map(function (layer) { return (React.createElement(ProjectedLayer_1.ProjectedLayer, {key: layer.id, layerId: layer.id, parentElement: layer.parentElement, defaultRemoteProps: layer.props, ref: _this._resolveLayer})); })))
	        ));
	    };
	    LayerHost.prototype.addLayer = function (id, parentElement, props, onMounted) {
	        this._layers.push({
	            id: id,
	            parentElement: parentElement,
	            props: props,
	            onMounted: onMounted
	        });
	        this.forceUpdate();
	    };
	    LayerHost.prototype.removeLayer = function (id) {
	        var index = Utilities_1.findIndex(this._layers, function (layer) { return layer.id === id; });
	        if (index >= 0) {
	            this._layers.splice(index, 1);
	            delete this._layerRefs[id];
	            this.forceUpdate();
	        }
	    };
	    LayerHost.prototype._resolveLayer = function (projectedLayer) {
	        if (projectedLayer) {
	            var layerId_1 = projectedLayer.getId();
	            var index = Utilities_1.findIndex(this._layers, function (layer) { return layer.id === layerId_1; });
	            if (index >= 0 && this._layerRefs[layerId_1] !== projectedLayer) {
	                this._layerRefs[layerId_1] = projectedLayer;
	                this._layers[index].onMounted(projectedLayer);
	            }
	        }
	    };
	    LayerHost.childContextTypes = {
	        layerHost: React.PropTypes.object
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], LayerHost.prototype, "_resolveLayer", null);
	    return LayerHost;
	}(Utilities_1.BaseComponent));
	exports.LayerHost = LayerHost;
	


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(53));
	


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(54));
	


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var EventGroup_1 = __webpack_require__(14);
	var KeyCodes_1 = __webpack_require__(26);
	var DIRECTIONAL_KEY_CODES = [
	    KeyCodes_1.KeyCodes.up,
	    KeyCodes_1.KeyCodes.down,
	    KeyCodes_1.KeyCodes.left,
	    KeyCodes_1.KeyCodes.right,
	    KeyCodes_1.KeyCodes.home,
	    KeyCodes_1.KeyCodes.end,
	    KeyCodes_1.KeyCodes.tab,
	    KeyCodes_1.KeyCodes.pageUp,
	    KeyCodes_1.KeyCodes.pageDown
	];
	// We will track the last focus visibility state so that if we tear down and recreate
	// the Fabric component, we will use the last known value as the default.
	var _lastIsFocusVisible = false;
	// Ensure that the HTML element has a dir specified. This helps to ensure RTL/LTR macros in css for all components will work.
	if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
	    document.documentElement.setAttribute('dir', 'ltr');
	}
	var Fabric = (function (_super) {
	    __extends(Fabric, _super);
	    function Fabric() {
	        _super.call(this);
	        this.state = {
	            isFocusVisible: _lastIsFocusVisible
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    Fabric.prototype.componentDidMount = function () {
	        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
	        this._events.on(document.body, 'keydown', this._onKeyDown, true);
	    };
	    Fabric.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Fabric.prototype.render = function () {
	        var isFocusVisible = this.state.isFocusVisible;
	        var rootClass = css_1.css('ms-Fabric ms-font-m', this.props.className, {
	            'is-focusVisible': isFocusVisible
	        });
	        return (React.createElement("div", __assign({}, this.props, {className: rootClass, ref: 'root'})));
	    };
	    Fabric.prototype._onMouseDown = function () {
	        if (this.state.isFocusVisible) {
	            this.setState({
	                isFocusVisible: false
	            });
	            _lastIsFocusVisible = false;
	        }
	    };
	    Fabric.prototype._onKeyDown = function (ev) {
	        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
	            this.setState({
	                isFocusVisible: true
	            });
	            _lastIsFocusVisible = true;
	        }
	    };
	    return Fabric;
	}(React.Component));
	exports.Fabric = Fabric;
	


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(56);
	/**
	 * ProjectedLayer is an internal helper component that projects the contents rendered within a Layer. It is created
	 * by the corresponding LayerHost that the originating Layer communicates with.
	 */
	var ProjectedLayer = (function (_super) {
	    __extends(ProjectedLayer, _super);
	    function ProjectedLayer(props) {
	        _super.call(this, props);
	        this.state = {
	            isMounted: false
	        };
	        this._remoteProps = props.defaultRemoteProps;
	    }
	    ProjectedLayer.prototype.shouldComponentUpdate = function () {
	        return !this.state.isMounted;
	    };
	    ProjectedLayer.prototype.componentDidMount = function () {
	        Utilities_1.setVirtualParent(this._rootElement, this.props.parentElement);
	        this.setState({ isMounted: true });
	    };
	    ProjectedLayer.prototype.render = function () {
	        var remoteProps = Utilities_1.getNativeProps(this._remoteProps, Utilities_1.divProperties);
	        // If this is the first render, let's avoid rendering children until we're certain that we've set
	        // the virtual parent. After that, we can safely render the children, which in turn can safely call
	        // dom utilities like elementContains, which respects the virtual parent.
	        if (!this.state.isMounted) {
	            delete remoteProps.children;
	        }
	        return (React.createElement("div", __assign({}, remoteProps, {className: Utilities_1.css('ms-ProjectedLayer', remoteProps.className), ref: this._resolveRef('_rootElement')})));
	    };
	    ProjectedLayer.prototype.getId = function () {
	        return this.props.layerId;
	    };
	    ProjectedLayer.prototype.projectProps = function (remoteProps) {
	        this._remoteProps = remoteProps;
	        this.forceUpdate();
	    };
	    return ProjectedLayer;
	}(Utilities_1.BaseComponent));
	exports.ProjectedLayer = ProjectedLayer;
	


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-LayerHost-overlay{position:absolute;visibility:hidden;top:0;left:0;bottom:0;right:0}.ms-ProjectedLayer{visibility:visible}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-LayerHost--default .ms-LayerHost-overlay{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(59));
	


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));
	


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	var IconName_1 = __webpack_require__(61);
	var Utilities_1 = __webpack_require__(25);
	exports.Icon = function (props) {
	    var customIcon = props.iconName === IconName_1.IconName.None;
	    var className = Utilities_1.css('ms-Icon', customIcon ? '' : ('ms-Icon--' + IconName_1.IconName[props.iconName]), props.className);
	    return React.createElement("i", __assign({}, Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), {className: className}));
	};
	


/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";
	// Please keep alphabetized
	(function (IconName) {
	    IconName[IconName["AccessLogo"] = 0] = "AccessLogo";
	    IconName[IconName["Add"] = 1] = "Add";
	    IconName[IconName["AppForOfficeLogo"] = 2] = "AppForOfficeLogo";
	    IconName[IconName["AppIconDefault"] = 3] = "AppIconDefault";
	    IconName[IconName["apps"] = 4] = "apps";
	    IconName[IconName["ArrowDownRight8"] = 5] = "ArrowDownRight8";
	    IconName[IconName["ArrowUpRight8"] = 6] = "ArrowUpRight8";
	    IconName[IconName["Attach"] = 7] = "Attach";
	    IconName[IconName["Back"] = 8] = "Back";
	    IconName[IconName["BackToWindow"] = 9] = "BackToWindow";
	    IconName[IconName["Blocked2"] = 10] = "Blocked2";
	    IconName[IconName["Breadcrumb"] = 11] = "Breadcrumb";
	    IconName[IconName["Broom"] = 12] = "Broom";
	    IconName[IconName["Calendar"] = 13] = "Calendar";
	    IconName[IconName["Cancel"] = 14] = "Cancel";
	    IconName[IconName["CaretDownSolid8"] = 15] = "CaretDownSolid8";
	    IconName[IconName["Chart"] = 16] = "Chart";
	    IconName[IconName["CheckboxComposite"] = 17] = "CheckboxComposite";
	    IconName[IconName["CheckMark"] = 18] = "CheckMark";
	    IconName[IconName["ChevronDown"] = 19] = "ChevronDown";
	    IconName[IconName["ChevronLeft"] = 20] = "ChevronLeft";
	    IconName[IconName["ChevronRight"] = 21] = "ChevronRight";
	    IconName[IconName["ChevronUp"] = 22] = "ChevronUp";
	    IconName[IconName["CirclePlus"] = 23] = "CirclePlus";
	    IconName[IconName["CircleRing"] = 24] = "CircleRing";
	    IconName[IconName["ClearFilter"] = 25] = "ClearFilter";
	    IconName[IconName["Clock"] = 26] = "Clock";
	    IconName[IconName["Contact"] = 27] = "Contact";
	    IconName[IconName["Copy"] = 28] = "Copy";
	    IconName[IconName["CustomIcon"] = 29] = "CustomIcon";
	    IconName[IconName["Delete"] = 30] = "Delete";
	    IconName[IconName["Documentation"] = 31] = "Documentation";
	    IconName[IconName["DocumentSet"] = 32] = "DocumentSet";
	    IconName[IconName["DoubleChevronDown"] = 33] = "DoubleChevronDown";
	    IconName[IconName["DoubleChevronLeft"] = 34] = "DoubleChevronLeft";
	    IconName[IconName["DoubleChevronUp"] = 35] = "DoubleChevronUp";
	    IconName[IconName["Down"] = 36] = "Down";
	    IconName[IconName["Download"] = 37] = "Download";
	    IconName[IconName["DRM"] = 38] = "DRM";
	    IconName[IconName["Edit"] = 39] = "Edit";
	    IconName[IconName["EditNote"] = 40] = "EditNote";
	    IconName[IconName["Embed"] = 41] = "Embed";
	    IconName[IconName["ErrorBadge"] = 42] = "ErrorBadge";
	    IconName[IconName["Event"] = 43] = "Event";
	    IconName[IconName["ExcelLogo"] = 44] = "ExcelLogo";
	    IconName[IconName["FabricAssetLibrary"] = 45] = "FabricAssetLibrary";
	    IconName[IconName["FabricDataConnectionLibrary"] = 46] = "FabricDataConnectionLibrary";
	    IconName[IconName["FabricDocLibrary"] = 47] = "FabricDocLibrary";
	    IconName[IconName["FabricFolder"] = 48] = "FabricFolder";
	    IconName[IconName["FabricFolderFill"] = 49] = "FabricFolderFill";
	    IconName[IconName["FabricFolderSearch"] = 50] = "FabricFolderSearch";
	    IconName[IconName["FabricFormLibrary"] = 51] = "FabricFormLibrary";
	    IconName[IconName["FabricFormLibraryMirrored"] = 52] = "FabricFormLibraryMirrored";
	    IconName[IconName["FabricMovetoFolder"] = 53] = "FabricMovetoFolder";
	    IconName[IconName["FabricNewFolder"] = 54] = "FabricNewFolder";
	    IconName[IconName["FabricOpenFolderHorizontal"] = 55] = "FabricOpenFolderHorizontal";
	    IconName[IconName["FabricPictureLibrary"] = 56] = "FabricPictureLibrary";
	    IconName[IconName["FabricPublicFolder"] = 57] = "FabricPublicFolder";
	    IconName[IconName["FabricReportLibrary"] = 58] = "FabricReportLibrary";
	    IconName[IconName["FabricReportLibraryMirrored"] = 59] = "FabricReportLibraryMirrored";
	    IconName[IconName["FabricSyncFolder"] = 60] = "FabricSyncFolder";
	    IconName[IconName["FabricUnsyncFolder"] = 61] = "FabricUnsyncFolder";
	    IconName[IconName["FavoriteStar"] = 62] = "FavoriteStar";
	    IconName[IconName["FavoriteStarFill"] = 63] = "FavoriteStarFill";
	    IconName[IconName["Filter"] = 64] = "Filter";
	    IconName[IconName["FlickLeft"] = 65] = "FlickLeft";
	    IconName[IconName["Flow"] = 66] = "Flow";
	    IconName[IconName["Folder"] = 67] = "Folder";
	    IconName[IconName["Forward"] = 68] = "Forward";
	    IconName[IconName["FullCircleMask"] = 69] = "FullCircleMask";
	    IconName[IconName["FullScreen"] = 70] = "FullScreen";
	    IconName[IconName["Glimmer"] = 71] = "Glimmer";
	    IconName[IconName["GlobalNavButton"] = 72] = "GlobalNavButton";
	    IconName[IconName["Globe"] = 73] = "Globe";
	    IconName[IconName["GripperTool"] = 74] = "GripperTool";
	    IconName[IconName["Group"] = 75] = "Group";
	    IconName[IconName["GroupedAscending"] = 76] = "GroupedAscending";
	    IconName[IconName["GroupedDescending"] = 77] = "GroupedDescending";
	    IconName[IconName["GroupedList"] = 78] = "GroupedList";
	    IconName[IconName["Heart"] = 79] = "Heart";
	    IconName[IconName["HeartFill"] = 80] = "HeartFill";
	    IconName[IconName["Home"] = 81] = "Home";
	    IconName[IconName["IncidentTriangle"] = 82] = "IncidentTriangle";
	    IconName[IconName["Info"] = 83] = "Info";
	    IconName[IconName["Info2"] = 84] = "Info2";
	    IconName[IconName["LargeGrid"] = 85] = "LargeGrid";
	    IconName[IconName["Lightbulb"] = 86] = "Lightbulb";
	    IconName[IconName["LightningBolt"] = 87] = "LightningBolt";
	    IconName[IconName["Link"] = 88] = "Link";
	    IconName[IconName["List"] = 89] = "List";
	    IconName[IconName["Lock"] = 90] = "Lock";
	    IconName[IconName["Mail"] = 91] = "Mail";
	    IconName[IconName["Message"] = 92] = "Message";
	    IconName[IconName["MiniContract"] = 93] = "MiniContract";
	    IconName[IconName["MiniExpand"] = 94] = "MiniExpand";
	    IconName[IconName["More"] = 95] = "More";
	    IconName[IconName["move"] = 96] = "move";
	    IconName[IconName["MoveToFolder"] = 97] = "MoveToFolder";
	    IconName[IconName["MusicInCollection"] = 98] = "MusicInCollection";
	    IconName[IconName["MusicInCollectionFill"] = 99] = "MusicInCollectionFill";
	    IconName[IconName["Mute"] = 100] = "Mute";
	    IconName[IconName["new"] = 101] = "new";
	    IconName[IconName["NewFolder"] = 102] = "NewFolder";
	    IconName[IconName["None"] = 103] = "None";
	    IconName[IconName["OfficeLogo"] = 104] = "OfficeLogo";
	    IconName[IconName["OfficeVideoLogo"] = 105] = "OfficeVideoLogo";
	    IconName[IconName["OneDrive"] = 106] = "OneDrive";
	    IconName[IconName["OneDriveAdd"] = 107] = "OneDriveAdd";
	    IconName[IconName["OneNoteLogo"] = 108] = "OneNoteLogo";
	    IconName[IconName["Org"] = 109] = "Org";
	    IconName[IconName["OutlookLogo"] = 110] = "OutlookLogo";
	    IconName[IconName["Page"] = 111] = "Page";
	    IconName[IconName["Pause"] = 112] = "Pause";
	    IconName[IconName["PDF"] = 113] = "PDF";
	    IconName[IconName["People"] = 114] = "People";
	    IconName[IconName["PeopleAdd"] = 115] = "PeopleAdd";
	    IconName[IconName["Phone"] = 116] = "Phone";
	    IconName[IconName["Photo2Add"] = 117] = "Photo2Add";
	    IconName[IconName["Photo2Remove"] = 118] = "Photo2Remove";
	    IconName[IconName["Picture"] = 119] = "Picture";
	    IconName[IconName["Pin"] = 120] = "Pin";
	    IconName[IconName["Pinned"] = 121] = "Pinned";
	    IconName[IconName["Play"] = 122] = "Play";
	    IconName[IconName["PowerApps2Logo"] = 123] = "PowerApps2Logo";
	    IconName[IconName["PowerPointLogo"] = 124] = "PowerPointLogo";
	    IconName[IconName["Print"] = 125] = "Print";
	    IconName[IconName["progress"] = 126] = "progress";
	    IconName[IconName["QuickNote"] = 127] = "QuickNote";
	    IconName[IconName["ReadingMode"] = 128] = "ReadingMode";
	    IconName[IconName["Refresh"] = 129] = "Refresh";
	    IconName[IconName["RemoveFilter"] = 130] = "RemoveFilter";
	    IconName[IconName["RemoveLink"] = 131] = "RemoveLink";
	    IconName[IconName["RevToggleKey"] = 132] = "RevToggleKey";
	    IconName[IconName["Ringer"] = 133] = "Ringer";
	    IconName[IconName["RingerSilent"] = 134] = "RingerSilent";
	    IconName[IconName["rotate"] = 135] = "rotate";
	    IconName[IconName["Save"] = 136] = "Save";
	    IconName[IconName["Search"] = 137] = "Search";
	    IconName[IconName["Settings"] = 138] = "Settings";
	    IconName[IconName["Share"] = 139] = "Share";
	    IconName[IconName["SharepointLogo"] = 140] = "SharepointLogo";
	    IconName[IconName["SkypeCheck"] = 141] = "SkypeCheck";
	    IconName[IconName["SkypeClock"] = 142] = "SkypeClock";
	    IconName[IconName["SkypeMinus"] = 143] = "SkypeMinus";
	    IconName[IconName["SortDown"] = 144] = "SortDown";
	    IconName[IconName["SortLines"] = 145] = "SortLines";
	    IconName[IconName["SortUp"] = 146] = "SortUp";
	    IconName[IconName["StatusErrorFull"] = 147] = "StatusErrorFull";
	    IconName[IconName["SwayLogo"] = 148] = "SwayLogo";
	    IconName[IconName["Sync"] = 149] = "Sync";
	    IconName[IconName["SyncToPC"] = 150] = "SyncToPC";
	    IconName[IconName["Tag"] = 151] = "Tag";
	    IconName[IconName["Tasks"] = 152] = "Tasks";
	    IconName[IconName["textBox"] = 153] = "textBox";
	    IconName[IconName["Tiles"] = 154] = "Tiles";
	    IconName[IconName["Undo"] = 155] = "Undo";
	    IconName[IconName["Unpin"] = 156] = "Unpin";
	    IconName[IconName["Up"] = 157] = "Up";
	    IconName[IconName["Upload"] = 158] = "Upload";
	    IconName[IconName["View"] = 159] = "View";
	    IconName[IconName["ViewAll"] = 160] = "ViewAll";
	    IconName[IconName["VisioLogo"] = 161] = "VisioLogo";
	    IconName[IconName["Volume1"] = 162] = "Volume1";
	    IconName[IconName["Volume2"] = 163] = "Volume2";
	    IconName[IconName["Volume3"] = 164] = "Volume3";
	    IconName[IconName["VolumeDisabled"] = 165] = "VolumeDisabled";
	    IconName[IconName["Waffle"] = 166] = "Waffle";
	    IconName[IconName["Warning"] = 167] = "Warning";
	    IconName[IconName["WordLogo"] = 168] = "WordLogo";
	    IconName[IconName["WorkFlow"] = 169] = "WorkFlow";
	    IconName[IconName["ZoomIn"] = 170] = "ZoomIn";
	})(exports.IconName || (exports.IconName = {}));
	var IconName = exports.IconName;
	


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-ContextualMenu{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";min-width:180px}.ms-ContextualMenu-list{list-style-type:none;margin:0;padding:0;line-height:0}.ms-ContextualMenu-item{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:36px;position:relative;box-sizing:border-box}.ms-ContextualMenu-link{font:inherit;color:inherit;background:0 0;border:none;min-width:100%;height:36px;line-height:36px;display:block;cursor:pointer;padding:0 6px}.ms-ContextualMenu-link::-moz-focus-inner{border:0}.ms-ContextualMenu-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-ContextualMenu-link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-ContextualMenu-link{text-align:left}html[dir=rtl] .ms-ContextualMenu-link{text-align:right}.ms-ContextualMenu-link:hover:not([disabled]){background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-ContextualMenu-link.is-disabled,.ms-ContextualMenu-link[disabled]{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:default;pointer-events:none}.ms-ContextualMenu-link.is-disabled .ms-ContextualMenu-icon,.ms-ContextualMenu-link[disabled] .ms-ContextualMenu-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.is-focusVisible .ms-ContextualMenu-link:focus{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-ContextualMenu-link.is-expanded,.ms-ContextualMenu-link.is-expanded:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";font-weight:600}a.ms-ContextualMenu-link{padding:0 6px;text-rendering:auto;color:inherit;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;box-sizing:border-box}.ms-ContextualMenu-linkContent{white-space:nowrap;height:inherit}.ms-ContextualMenu-divider{display:block;height:1px;background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";position:relative}.ms-ContextualMenu-icon{display:inline-block;min-height:1px;max-height:36px;width:14px;text-align:center;vertical-align:top;margin:0 4px}.ms-ContextualMenu-iconColor{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-ContextualMenu-itemText{padding:0 12px 0 4px}html[dir=rtl] .ms-ContextualMenu-itemText{padding:0 4px 0 12px}.ms-ContextualMenu-linkText{margin:0 4px;display:inline-block;vertical-align:top;white-space:nowrap}.ms-Icon.ms-ContextualMenu-submenuChevron{position:absolute;height:36px;line-height:36px;vertical-align:middle;text-align:center;font-size:10px}html[dir=ltr] .ms-Icon.ms-ContextualMenu-submenuChevron{right:8px}html[dir=rtl] .ms-Icon.ms-ContextualMenu-submenuChevron{left:8px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DirectionalHint_1 = __webpack_require__(36);
	exports.DirectionalHint = DirectionalHint_1.DirectionalHint;
	


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Breadcrumb{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;margin:23px 0 1px}.ms-Breadcrumb-list{white-space:nowrap;padding:0;margin:0}.ms-Breadcrumb-chevron{font-size:12px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";vertical-align:top;margin:11px 7px;line-height:1}.ms-Breadcrumb-listItem{list-style-type:none;vertical-align:top;margin:0;padding:0;display:inline-block;position:relative}.ms-Breadcrumb-listItem:last-of-type .ms-Breadcrumb-chevron{display:none}.ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:inline-block;padding:0 4px;max-width:160px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;vertical-align:top}.ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink::-moz-focus-inner{border:0}.ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Breadcrumb-overflow{display:inline-block;position:relative}.ms-Breadcrumb-overflowButton{font-size:16px;display:inline-block;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";padding:8px;cursor:pointer;vertical-align:top}.ms-Breadcrumb-itemLink,.ms-Breadcrumb-overflowButton{text-decoration:none;outline:transparent}.ms-Breadcrumb-itemLink:hover,.ms-Breadcrumb-overflowButton:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";cursor:pointer}.ms-Breadcrumb-itemLink:focus,.ms-Breadcrumb-overflowButton:focus{outline:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": " solid 1px;color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Breadcrumb-itemLink:active,.ms-Breadcrumb-overflowButton:active{outline:transparent;background-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}@media screen and (max-width:639px){margin: 11px 0 1px; .ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink{font-size:17px}.ms-Breadcrumb-chevron{font-size:10px;margin:8px 5px}.ms-Breadcrumb-overflowButton{font-size:15px;padding:5px 4px}}@media screen and (max-width:479px){.ms-Breadcrumb-listItem .ms-Breadcrumb-itemLink{font-size:14px;max-width:116px}.ms-Breadcrumb-chevron{margin:5px 4px}.ms-Breadcrumb-overflowButton{padding:2px 4px}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(66));
	


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(67));
	__export(__webpack_require__(68));
	


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Calendar_Props_1 = __webpack_require__(68);
	var CalendarDay_1 = __webpack_require__(69);
	var CalendarMonth_1 = __webpack_require__(71);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(72);
	var Calendar = (function (_super) {
	    __extends(Calendar, _super);
	    function Calendar(props) {
	        _super.call(this);
	        var currentDate = props.value || new Date();
	        this.state = {
	            selectedDate: currentDate,
	            navigatedDate: currentDate
	        };
	        this._focusOnUpdate = false;
	    }
	    Calendar.prototype.componentWillReceiveProps = function (nextProps) {
	        var value = nextProps.value;
	        this.setState({
	            selectedDate: value || new Date()
	        });
	    };
	    Calendar.prototype.componentDidMount = function () {
	        if (this.props.shouldFocusOnMount) {
	            this.refs.dayPicker.focus();
	        }
	    };
	    Calendar.prototype.componentDidUpdate = function () {
	        if (this._focusOnUpdate) {
	            this.refs.dayPicker.focus();
	            this._focusOnUpdate = false;
	        }
	    };
	    Calendar.prototype.render = function () {
	        var rootClass = 'ms-DatePicker';
	        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, strings = _a.strings;
	        var _b = this.state, selectedDate = _b.selectedDate, navigatedDate = _b.navigatedDate;
	        return (React.createElement("div", {className: rootClass, ref: 'root'}, 
	            React.createElement("div", {className: 'ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused ' + (this.props.isMonthPickerVisible ? 'is-monthPickerVisible' : '')}, 
	                React.createElement("div", {className: 'ms-DatePicker-holder', onKeyDown: this._onDatePickerPopupKeyDown}, 
	                    React.createElement("div", {className: 'ms-DatePicker-frame'}, 
	                        React.createElement("div", {className: 'ms-DatePicker-wrap'}, 
	                            React.createElement(CalendarDay_1.CalendarDay, {selectedDate: selectedDate, navigatedDate: navigatedDate, onSelectDate: this._onSelectDate, onNavigateDate: this._onNavigateDate, firstDayOfWeek: firstDayOfWeek, strings: strings, ref: 'dayPicker'}), 
	                            React.createElement(CalendarMonth_1.CalendarMonth, {navigatedDate: navigatedDate, strings: strings, onNavigateDate: this._onNavigateDate}), 
	                            React.createElement("span", {className: 'ms-DatePicker-goToday js-goToday', onClick: this._onGotoToday, onKeyDown: this._onGotoTodayKeyDown, tabIndex: 0}, strings.goToToday))
	                    )
	                )
	            )
	        ));
	    };
	    Calendar.prototype._navigateDay = function (date) {
	        this.setState({
	            navigatedDate: date
	        });
	    };
	    Calendar.prototype._onNavigateDate = function (date, focusOnNavigatedDay) {
	        this._navigateDay(date);
	        this._focusOnUpdate = focusOnNavigatedDay;
	    };
	    Calendar.prototype._onSelectDate = function (date) {
	        var onSelectDate = this.props.onSelectDate;
	        this.setState({
	            selectedDate: date
	        });
	        if (onSelectDate) {
	            onSelectDate(date);
	        }
	    };
	    ;
	    Calendar.prototype._onGotoToday = function () {
	        this._navigateDay(new Date());
	        this._focusOnUpdate = true;
	    };
	    ;
	    Calendar.prototype._onGotoTodayKeyDown = function (ev) {
	        if (ev.which === Utilities_1.KeyCodes.enter) {
	            ev.preventDefault();
	            this._onGotoToday();
	        }
	    };
	    ;
	    Calendar.prototype._onDatePickerPopupKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.enter:
	                ev.preventDefault();
	                break;
	            case Utilities_1.KeyCodes.backspace:
	                ev.preventDefault();
	                break;
	            case Utilities_1.KeyCodes.escape:
	                this._handleEscKey(ev);
	                break;
	            default:
	                break;
	        }
	    };
	    Calendar.prototype._handleEscKey = function (ev) {
	        if (this.props.onDismiss() != null) {
	            this.props.onDismiss();
	        }
	    };
	    Calendar.defaultProps = {
	        onSelectDate: null,
	        onDismiss: null,
	        isMonthPickerVisible: true,
	        value: null,
	        firstDayOfWeek: Calendar_Props_1.DayOfWeek.Sunday,
	        shouldFocusOnMount: true,
	        strings: null
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_navigateDay", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_onNavigateDate", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_onSelectDate", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_onGotoToday", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_onGotoTodayKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_onDatePickerPopupKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Calendar.prototype, "_handleEscKey", null);
	    return Calendar;
	}(Utilities_1.BaseComponent));
	exports.Calendar = Calendar;
	


/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	(function (DayOfWeek) {
	    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
	    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
	    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
	    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
	    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
	    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
	    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
	})(exports.DayOfWeek || (exports.DayOfWeek = {}));
	var DayOfWeek = exports.DayOfWeek;
	


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var FocusZone_1 = __webpack_require__(21);
	var KeyCodes_1 = __webpack_require__(26);
	var DateMath_1 = __webpack_require__(70);
	var rtl_1 = __webpack_require__(31);
	var object_1 = __webpack_require__(8);
	var DAYS_IN_WEEK = 7;
	var CalendarDay = (function (_super) {
	    __extends(CalendarDay, _super);
	    function CalendarDay(props) {
	        _super.call(this, props);
	        this.state = {
	            activeDescendantId: object_1.getId('DatePickerDay-active'),
	            weeks: this._getWeeks(props.navigatedDate, props.selectedDate)
	        };
	        this._onSelectNextMonth = this._onSelectNextMonth.bind(this);
	        this._onSelectPrevMonth = this._onSelectPrevMonth.bind(this);
	    }
	    CalendarDay.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState({
	            weeks: this._getWeeks(nextProps.navigatedDate, nextProps.selectedDate)
	        });
	    };
	    CalendarDay.prototype.render = function () {
	        var _this = this;
	        var _a = this.state, activeDescendantId = _a.activeDescendantId, weeks = _a.weeks;
	        var _b = this.props, firstDayOfWeek = _b.firstDayOfWeek, strings = _b.strings, navigatedDate = _b.navigatedDate, onSelectDate = _b.onSelectDate;
	        var selectDayCallbacks = {};
	        weeks.map(function (week, index) { return week.map(function (day) { return selectDayCallbacks[day.key] = onSelectDate.bind(_this, day.originalDate); }); });
	        return (React.createElement("div", {className: 'ms-DatePicker-dayPicker'}, 
	            React.createElement("div", {className: 'ms-DatePicker-header'}, 
	                React.createElement("div", {className: 'ms-DatePicker-month'}, strings.months[navigatedDate.getMonth()]), 
	                React.createElement("div", {className: 'ms-DatePicker-year'}, navigatedDate.getFullYear())), 
	            React.createElement("div", {className: 'ms-DatePicker-monthComponents'}, 
	                React.createElement("div", {className: 'ms-DatePicker-navContainer'}, 
	                    React.createElement("span", {className: 'ms-DatePicker-prevMonth js-prevMonth', onClick: this._onSelectPrevMonth, onKeyDown: this._onKeyDown.bind(this, this._onSelectPrevMonth), tabIndex: 0}, 
	                        React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': !rtl_1.getRTL(), 'ms-Icon--ChevronRight': rtl_1.getRTL() })})
	                    ), 
	                    React.createElement("span", {className: 'ms-DatePicker-nextMonth js-nextMonth', onClick: this._onSelectNextMonth, onKeyDown: this._onKeyDown.bind(this, this._onSelectNextMonth), tabIndex: 0}, 
	                        React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': rtl_1.getRTL(), 'ms-Icon--ChevronRight': !rtl_1.getRTL() })})
	                    )), 
	                React.createElement("div", {className: 'ms-DatePicker-headerToggleView js-showMonthPicker'})), 
	            React.createElement(FocusZone_1.FocusZone, null, 
	                React.createElement("table", {className: 'ms-DatePicker-table', role: 'grid', "aria-readonly": 'true', "aria-multiselectable": 'false', "aria-activedescendant": activeDescendantId}, 
	                    React.createElement("thead", null, 
	                        React.createElement("tr", null, strings.shortDays.map(function (val, index) {
	                            return React.createElement("th", {className: 'ms-DatePicker-weekday', scope: 'col', key: index, title: strings.days[(index + firstDayOfWeek) % DAYS_IN_WEEK]}, strings.shortDays[(index + firstDayOfWeek) % DAYS_IN_WEEK]);
	                        }))
	                    ), 
	                    React.createElement("tbody", null, weeks.map(function (week, weekIndex) {
	                        return React.createElement("tr", {key: weekIndex}, week.map(function (day, dayIndex) {
	                            return React.createElement("td", {role: 'presentation', key: day.key}, 
	                                React.createElement("div", {className: css_1.css('ms-DatePicker-day', {
	                                    'ms-DatePicker-day--infocus': day.isInMonth,
	                                    'ms-DatePicker-day--outfocus': !day.isInMonth,
	                                    'ms-DatePicker-day--today': day.isToday,
	                                    'ms-DatePicker-day--highlighted': day.isSelected
	                                }), role: 'gridcell', onClick: selectDayCallbacks[day.key], onKeyDown: function (ev) {
	                                    return _this._navigateMonthEdge(ev, day.originalDate, weekIndex, dayIndex);
	                                }, "aria-selected": day.isSelected, id: DateMath_1.compareDates(navigatedDate, day.originalDate) ? activeDescendantId : null, "data-is-focusable": true, ref: DateMath_1.compareDates(navigatedDate, day.originalDate) ? 'navigatedDay' : null, key: DateMath_1.compareDates(navigatedDate, day.originalDate) ? 'navigatedDay' : null}, day.date)
	                            );
	                        }));
	                    })))
	            )));
	    };
	    CalendarDay.prototype.focus = function () {
	        if (this.refs.navigatedDay) {
	            this.refs.navigatedDay.tabIndex = 0;
	            this.refs.navigatedDay.focus();
	        }
	    };
	    CalendarDay.prototype._navigateMonthEdge = function (ev, date, weekIndex, dayIndex) {
	        if (weekIndex === 0 && ev.which === KeyCodes_1.KeyCodes.up) {
	            this.props.onNavigateDate(DateMath_1.addWeeks(date, -1), true);
	            ev.preventDefault();
	        }
	        else if (weekIndex === (this.state.weeks.length - 1) && ev.which === KeyCodes_1.KeyCodes.down) {
	            this.props.onNavigateDate(DateMath_1.addWeeks(date, 1), true);
	            ev.preventDefault();
	        }
	        else if (dayIndex === 0 && ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.left)) {
	            this.props.onNavigateDate(DateMath_1.addDays(date, -1), true);
	            ev.preventDefault();
	        }
	        else if (dayIndex === (DAYS_IN_WEEK - 1) && ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)) {
	            this.props.onNavigateDate(DateMath_1.addDays(date, 1), true);
	            ev.preventDefault();
	        }
	    };
	    CalendarDay.prototype._onKeyDown = function (callback, ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            callback();
	        }
	    };
	    CalendarDay.prototype._onSelectNextMonth = function () {
	        this.props.onNavigateDate(DateMath_1.addMonths(this.props.navigatedDate, 1), false);
	    };
	    CalendarDay.prototype._onSelectPrevMonth = function () {
	        this.props.onNavigateDate(DateMath_1.addMonths(this.props.navigatedDate, -1), false);
	    };
	    CalendarDay.prototype._getWeeks = function (navigatedDate, selectedDate) {
	        var firstDayOfWeek = this.props.firstDayOfWeek;
	        var date = new Date(navigatedDate.getFullYear(), navigatedDate.getMonth(), 1);
	        var today = new Date();
	        var weeks = [];
	        var week;
	        // Cycle the date backwards to get to the first day of the week.
	        while (date.getDay() !== firstDayOfWeek) {
	            date.setDate(date.getDate() - 1);
	        }
	        // a flag to indicate whether all days of the week are in the month
	        var isAllDaysOfWeekOutOfMonth = false;
	        for (var weekIndex = 0; !isAllDaysOfWeekOutOfMonth; weekIndex++) {
	            week = [];
	            isAllDaysOfWeekOutOfMonth = true;
	            for (var dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
	                var dayInfo = {
	                    key: date.toString(),
	                    date: date.getDate(),
	                    originalDate: new Date(date.toString()),
	                    isInMonth: date.getMonth() === navigatedDate.getMonth(),
	                    isToday: DateMath_1.compareDates(today, date),
	                    isSelected: DateMath_1.compareDates(selectedDate, date)
	                };
	                week.push(dayInfo);
	                if (dayInfo.isInMonth) {
	                    isAllDaysOfWeekOutOfMonth = false;
	                }
	                date.setDate(date.getDate() + 1);
	            }
	            if (!isAllDaysOfWeekOutOfMonth) {
	                weeks.push(week);
	            }
	        }
	        return weeks;
	    };
	    return CalendarDay;
	}(React.Component));
	exports.CalendarDay = CalendarDay;
	


/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	var DAYS_IN_WEEK = 7;
	var MONTHS_IN_YEAR = 12;
	/**
	 * Returns a date offset from the given date by the specified number of days.
	 * @param {Date} date - The origin date
	 * @param {number} days - The number of days to offset. 'days' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of days
	 */
	function addDays(date, days) {
	    var result = new Date(date.getTime());
	    result.setDate(result.getDate() + days);
	    return result;
	}
	exports.addDays = addDays;
	/**
	 * Returns a date offset from the given date by the specified number of weeks.
	 * @param {Date} date - The origin date
	 * @param {number} weeks - The number of weeks to offset. 'weeks' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of weeks
	 */
	function addWeeks(date, weeks) {
	    return addDays(date, weeks * DAYS_IN_WEEK);
	}
	exports.addWeeks = addWeeks;
	/**
	 * Returns a date offset from the given date by the specified number of months.
	 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} months - The number of months to offset. 'months' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of months
	 */
	function addMonths(date, months) {
	    var result = new Date(date.getTime());
	    var newMonth = result.getMonth() + months;
	    result.setMonth(newMonth);
	    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
	    // Loop until we back up to a day the new month has.
	    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
	    if (result.getMonth() !== ((newMonth % MONTHS_IN_YEAR) + MONTHS_IN_YEAR) % MONTHS_IN_YEAR) {
	        result = addDays(result, -result.getDate());
	    }
	    return result;
	}
	exports.addMonths = addMonths;
	/**
	 * Returns a date offset from the given date by the specified number of years.
	 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} years - The number of years to offset. 'years' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of years
	 */
	function addYears(date, years) {
	    var result = new Date(date.getTime());
	    result.setFullYear(date.getFullYear() + years);
	    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
	    // Loop until we back up to a day the new month has.
	    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
	    if (result.getMonth() !== ((date.getMonth() % MONTHS_IN_YEAR) + MONTHS_IN_YEAR) % MONTHS_IN_YEAR) {
	        result = addDays(result, -result.getDate());
	    }
	    return result;
	}
	exports.addYears = addYears;
	/**
	 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
	 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} month - The 0-based index of the month to set on the date.
	 * @return {Date} A new Date object with the given month set.
	 */
	function setMonth(date, month) {
	    return addMonths(date, month - date.getMonth());
	}
	exports.setMonth = setMonth;
	/**
	 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
	 * @return {boolean} True if the two dates represent the same date (regardless of time-of-day), false otherwise.
	 */
	function compareDates(date1, date2) {
	    return (date1.getFullYear() === date2.getFullYear()
	        && date1.getMonth() === date2.getMonth()
	        && date1.getDate() === date2.getDate());
	}
	exports.compareDates = compareDates;
	


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(21);
	var KeyCodes_1 = __webpack_require__(26);
	var DateMath_1 = __webpack_require__(70);
	var rtl_1 = __webpack_require__(31);
	var css_1 = __webpack_require__(7);
	var CalendarMonth = (function (_super) {
	    __extends(CalendarMonth, _super);
	    function CalendarMonth(props) {
	        var _this = this;
	        _super.call(this, props);
	        this._selectMonthCallbacks = [];
	        props.strings.shortMonths.map(function (month, index) {
	            _this._selectMonthCallbacks[index] = _this._onSelectMonth.bind(_this, index);
	        });
	        this._onSelectNextYear = this._onSelectNextYear.bind(this);
	        this._onSelectPrevYear = this._onSelectPrevYear.bind(this);
	        this._onSelectMonth = this._onSelectMonth.bind(this);
	    }
	    CalendarMonth.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, navigatedDate = _a.navigatedDate, strings = _a.strings;
	        return (React.createElement("div", {className: 'ms-DatePicker-monthPicker'}, 
	            React.createElement("div", {className: 'ms-DatePicker-header'}, 
	                React.createElement("div", {className: 'ms-DatePicker-yearComponents ms-DatePicker-navContainer'}, 
	                    React.createElement("span", {className: 'ms-DatePicker-prevYear js-prevYear', onClick: this._onSelectPrevYear, onKeyDown: this._onKeyDown.bind(this, this._onSelectPrevYear), tabIndex: 0}, 
	                        React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': !rtl_1.getRTL(), 'ms-Icon--ChevronRight': rtl_1.getRTL() })})
	                    ), 
	                    React.createElement("span", {className: 'ms-DatePicker-nextYear js-nextYear', onClick: this._onSelectNextYear, onKeyDown: this._onKeyDown.bind(this, this._onSelectNextYear), tabIndex: 0}, 
	                        React.createElement("i", {className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': rtl_1.getRTL(), 'ms-Icon--ChevronRight': !rtl_1.getRTL() })})
	                    )), 
	                React.createElement("div", {className: 'ms-DatePicker-currentYear js-showYearPicker'}, navigatedDate.getFullYear())), 
	            React.createElement(FocusZone_1.FocusZone, null, 
	                React.createElement("div", {className: 'ms-DatePicker-optionGrid'}, strings.shortMonths.map(function (month, index) {
	                    return (React.createElement("span", {className: 'ms-DatePicker-monthOption', key: index, onClick: _this._selectMonthCallbacks[index], "data-is-focusable": true}, month));
	                }))
	            )));
	    };
	    CalendarMonth.prototype._onKeyDown = function (callback, ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            callback();
	        }
	    };
	    CalendarMonth.prototype._onSelectNextYear = function () {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.addYears(navigatedDate, 1), false);
	    };
	    ;
	    CalendarMonth.prototype._onSelectPrevYear = function () {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.addYears(navigatedDate, -1), false);
	    };
	    ;
	    CalendarMonth.prototype._onSelectMonth = function (newMonth) {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.setMonth(navigatedDate, newMonth), true);
	    };
	    return CalendarMonth;
	}(React.Component));
	exports.CalendarMonth = CalendarMonth;
	


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DatePicker{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:17px}.ms-DatePicker-picker{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";font-size:14px;position:relative}html[dir=ltr] .ms-DatePicker-picker{text-align:left}html[dir=rtl] .ms-DatePicker-picker{text-align:right}.ms-DatePicker-holder{-webkit-overflow-scrolling:touch;box-sizing:border-box;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";min-width:300px;display:none}.ms-DatePicker-picker.ms-DatePicker-picker--opened .ms-DatePicker-holder{-webkit-animation-name:fadeIn,slideDownIn10;animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both;box-sizing:border-box;display:block}.ms-DatePicker-picker--opened{position:relative}.ms-DatePicker-frame{padding:1px}.ms-DatePicker-wrap{margin:-1px;padding:9px}.ms-DatePicker-dayPicker{display:block;margin-bottom:30px}.ms-DatePicker-header{height:40px;line-height:44px}.ms-DatePicker-month,.ms-DatePicker-year{display:inline-block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";margin-top:-1px}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";cursor:pointer}html[dir=ltr] .ms-DatePicker-month{margin-left:15px}html[dir=rtl] .ms-DatePicker-month{margin-right:15px}html[dir=ltr] .ms-DatePicker-year{margin-left:15px}html[dir=rtl] .ms-DatePicker-year{margin-right:15px}.ms-DatePicker-table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:inherit}.ms-DatePicker-table td{margin:0;padding:0}.ms-DatePicker-table td:hover{outline:1px solid transparent}.ms-DatePicker-day,.ms-DatePicker-weekday{width:40px;height:40px;padding:0;line-height:40px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:15px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-DatePicker-day--today{position:relative;background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-DatePicker-day--disabled:before{border-top-color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-DatePicker-day--outfocus{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";font-weight:400}.ms-DatePicker-day--infocus:hover,.ms-DatePicker-day--outfocus:hover{cursor:pointer;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-DatePicker-day--highlighted:hover,.ms-DatePicker-picker--focused .ms-DatePicker-day--highlighted{cursor:pointer;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled,.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled:hover{background:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-DatePicker-monthPicker,.ms-DatePicker-yearPicker{display:none}.ms-DatePicker-monthComponents{position:absolute;top:9px}html[dir=ltr] .ms-DatePicker-monthComponents{right:9px}html[dir=rtl] .ms-DatePicker-monthComponents{left:9px}html[dir=ltr] .ms-DatePicker-monthComponents{left:9px}html[dir=rtl] .ms-DatePicker-monthComponents{right:9px}.ms-DatePicker-decadeComponents,.ms-DatePicker-yearComponents{position:absolute;top:-2px}html[dir=ltr] .ms-DatePicker-decadeComponents,html[dir=ltr] .ms-DatePicker-yearComponents{right:10px}html[dir=rtl] .ms-DatePicker-decadeComponents,html[dir=rtl] .ms-DatePicker-yearComponents{left:10px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{width:40px;height:40px;display:block;text-align:center;line-height:40px;text-align:center;font-size:16px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";position:relative;top:2px}html[dir=ltr] .ms-DatePicker-nextDecade,html[dir=ltr] .ms-DatePicker-nextMonth,html[dir=ltr] .ms-DatePicker-nextYear,html[dir=ltr] .ms-DatePicker-prevDecade,html[dir=ltr] .ms-DatePicker-prevMonth,html[dir=ltr] .ms-DatePicker-prevYear{margin-left:10px}html[dir=rtl] .ms-DatePicker-nextDecade,html[dir=rtl] .ms-DatePicker-nextMonth,html[dir=rtl] .ms-DatePicker-nextYear,html[dir=rtl] .ms-DatePicker-prevDecade,html[dir=rtl] .ms-DatePicker-prevMonth,html[dir=rtl] .ms-DatePicker-prevYear{margin-right:10px}.ms-DatePicker-nextDecade:hover,.ms-DatePicker-nextMonth:hover,.ms-DatePicker-nextYear:hover,.ms-DatePicker-prevDecade:hover,.ms-DatePicker-prevMonth:hover,.ms-DatePicker-prevYear:hover{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";cursor:pointer;outline:1px solid transparent}.ms-DatePicker-headerToggleView{height:40px;position:absolute;top:0;width:140px;cursor:pointer}html[dir=ltr] .ms-DatePicker-headerToggleView{left:0}html[dir=rtl] .ms-DatePicker-headerToggleView{right:0}.ms-DatePicker-currentDecade,.ms-DatePicker-currentYear{display:block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:40px;line-height:42px}html[dir=ltr] .ms-DatePicker-currentDecade,html[dir=ltr] .ms-DatePicker-currentYear{margin-left:15px}html[dir=rtl] .ms-DatePicker-currentDecade,html[dir=rtl] .ms-DatePicker-currentYear{margin-right:15px}.ms-DatePicker-currentYear{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DatePicker-currentYear:hover{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";cursor:pointer}.ms-DatePicker-optionGrid{position:relative;height:210px;width:280px;margin:10px 0 30px 5px}html[dir=rtl] .ms-DatePicker-optionGrid{margin:10px 5px 30px 0}.ms-DatePicker-monthOption,.ms-DatePicker-yearOption{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";width:60px;height:60px;line-height:60px;cursor:pointer;margin:0 10px 10px 0;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:13px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";text-align:center}html[dir=ltr] .ms-DatePicker-monthOption,html[dir=ltr] .ms-DatePicker-yearOption{float:left}html[dir=rtl] .ms-DatePicker-monthOption,html[dir=rtl] .ms-DatePicker-yearOption{float:right}html[dir=rtl] .ms-DatePicker-monthOption,html[dir=rtl] .ms-DatePicker-yearOption{margin:0 0 10px 10px}.ms-DatePicker-monthOption:hover,.ms-DatePicker-yearOption:hover{background-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";outline:1px solid transparent}.ms-DatePicker-monthOption.is-highlighted,.ms-DatePicker-yearOption.is-highlighted{background-color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-DatePicker-goToday{bottom:9px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";cursor:pointer;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:13px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:30px;line-height:30px;padding:0 10px;position:absolute}html[dir=ltr] .ms-DatePicker-goToday{right:9px}html[dir=rtl] .ms-DatePicker-goToday{left:9px}.ms-DatePicker-goToday:hover{outline:1px solid transparent}.ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}@media (min-width:460px){.ms-DatePicker-header{height:30px;line-height:28px}.ms-DatePicker-day,.ms-DatePicker-weekday{width:30px;height:30px;line-height:28px;font-weight:600;font-size:12px}.ms-DatePicker-monthComponents{width:210px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{font-size:12px;width:24px;height:24px;line-height:24px}.ms-DatePicker-holder{min-width:240px}.ms-DatePicker-month,.ms-DatePicker-year{font-weight:300}.ms-DatePicker-month,.ms-DatePicker-year{font-size:17px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";cursor:default}.is-monthPickerVisible .ms-DatePicker-dayPicker{margin:-10px 0;padding:10px 0}.is-monthPickerVisible .ms-DatePicker-dayPicker{box-sizing:border-box;width:220px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-dayPicker{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-dayPicker{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.is-monthPickerVisible .ms-DatePicker-holder{width:440px}.is-monthPickerVisible .ms-DatePicker-monthPicker{display:block}.is-monthPickerVisible .ms-DatePicker-monthPicker,.is-monthPickerVisible .ms-DatePicker-yearPicker{top:9px;position:absolute}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-monthPicker,html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-yearPicker{left:238px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-monthPicker,html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-yearPicker{right:238px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-month{margin-left:12px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-month{margin-right:12px}.is-monthPickerVisible .ms-DatePicker-optionGrid{width:200px;height:auto;margin:10px 0 0 0}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-optionGrid{margin:10px 0 0 0}.is-monthPickerVisible .ms-DatePicker-toggleMonthView{display:none}.is-monthPickerVisible .ms-DatePicker-currentDecade,.is-monthPickerVisible .ms-DatePicker-currentYear{font-size:17px;margin:0;height:30px;line-height:26px;padding:0 10px;display:inline-block}.is-monthPickerVisible .ms-DatePicker-monthOption,.is-monthPickerVisible .ms-DatePicker-yearOption{width:40px;height:40px;line-height:38px;font-size:12px;margin:0 10px 10px 0}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-monthOption,html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-yearOption{margin:0 0 10px 10px}.is-monthPickerVisible .ms-DatePicker-monthOption:hover,.is-monthPickerVisible .ms-DatePicker-yearOption:hover{outline:1px solid transparent}.is-monthPickerVisible .ms-DatePicker-goToday{box-sizing:border-box;font-size:12px;height:30px;line-height:30px;padding:0 10px;top:199px;width:210px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-goToday{right:10px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-goToday{left:10px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-goToday{text-align:right}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-goToday{text-align:left}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:block}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}}@media (max-width:459px){.ms-DatePicker.is-pickingMonths .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthPicker{display:block}}.ms-DatePicker-wrap div:focus,.ms-DatePicker-wrap span:focus{outline:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DatePicker-goToday{width:auto}.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{display:inline-block}html[dir=ltr] .ms-DatePicker-navContainer{float:right}html[dir=rtl] .ms-DatePicker-navContainer{float:left}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(74));
	


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(75));
	


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var autobind_1 = __webpack_require__(28);
	var css_1 = __webpack_require__(7);
	var object_1 = __webpack_require__(8);
	__webpack_require__(76);
	var Checkbox = (function (_super) {
	    __extends(Checkbox, _super);
	    function Checkbox(props) {
	        _super.call(this, props);
	        this._id = object_1.getId('checkbox-');
	        this.state = {
	            isFocused: false,
	            isChecked: props.defaultChecked || false
	        };
	    }
	    Checkbox.prototype.render = function () {
	        var _a = this.props, checked = _a.checked, className = _a.className, defaultChecked = _a.defaultChecked, disabled = _a.disabled, inputProps = _a.inputProps, label = _a.label;
	        var isFocused = this.state.isFocused;
	        var isChecked = checked === undefined ? this.state.isChecked : checked;
	        return (React.createElement("div", {className: css_1.css('ms-Checkbox', className, { 'is-inFocus': isFocused })}, 
	            React.createElement("input", __assign({}, inputProps, (checked !== undefined && { checked: checked }), (defaultChecked !== undefined && { defaultChecked: defaultChecked }), {disabled: disabled, ref: this._resolveRef('_checkBox'), id: this._id, name: this._id, className: 'ms-Checkbox-input', type: 'checkbox', onChange: this._onChange, onFocus: this._onFocus, onBlur: this._onBlur, "aria-checked": isChecked})), 
	            this.props.children, 
	            React.createElement("label", {htmlFor: this._id, className: css_1.css('ms-Checkbox-label', {
	                'is-checked': isChecked,
	                'is-disabled': disabled
	            })}, label && React.createElement("span", {className: 'ms-Label'}, label))));
	    };
	    Object.defineProperty(Checkbox.prototype, "checked", {
	        get: function () {
	            return this._checkBox ? this._checkBox.checked : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Checkbox.prototype.focus = function () {
	        if (this._checkBox) {
	            this._checkBox.focus();
	        }
	    };
	    Checkbox.prototype._onFocus = function (ev) {
	        var inputProps = this.props.inputProps;
	        if (inputProps && inputProps.onFocus) {
	            inputProps.onFocus(ev);
	        }
	        this.setState({ isFocused: true });
	    };
	    Checkbox.prototype._onBlur = function (ev) {
	        var inputProps = this.props.inputProps;
	        if (inputProps && inputProps.onBlur) {
	            inputProps.onBlur(ev);
	        }
	        this.setState({ isFocused: false });
	    };
	    Checkbox.prototype._onChange = function (ev) {
	        var onChange = this.props.onChange;
	        var isChecked = ev.target.checked;
	        if (onChange) {
	            onChange(ev, isChecked);
	        }
	        if (this.props.checked === undefined) {
	            this.setState({ isChecked: isChecked });
	        }
	    };
	    Checkbox.defaultProps = {};
	    __decorate([
	        autobind_1.autobind
	    ], Checkbox.prototype, "_onFocus", null);
	    __decorate([
	        autobind_1.autobind
	    ], Checkbox.prototype, "_onBlur", null);
	    __decorate([
	        autobind_1.autobind
	    ], Checkbox.prototype, "_onChange", null);
	    return Checkbox;
	}(BaseComponent_1.BaseComponent));
	exports.Checkbox = Checkbox;
	


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Checkbox{box-sizing:border-box;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400;min-height:36px;position:relative}.ms-Checkbox .ms-Label{font-size:14px;padding:0 0 0 26px;display:inline-block}html[dir=rtl] .ms-Checkbox .ms-Label{padding:0 26px 0 0}.ms-Checkbox-input{position:absolute;opacity:0;top:8px}.ms-Checkbox-label::before{content:'';display:inline-block;border:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";width:20px;height:20px;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1)}.ms-Checkbox-label::after{content:\"\\E73E\";font-family:FabricMDL2Icons;display:none;position:absolute;font-weight:900;background-color:transparent;font-size:13px;top:0;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";line-height:20px;width:20px;text-align:center}.ms-Checkbox-label{display:inline-block;cursor:pointer;margin-top:8px;position:relative;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-width:20px;min-height:20px;line-height:20px}.ms-Checkbox-label:hover::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-Checkbox-label:hover .ms-Label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Checkbox-label:focus::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-Checkbox-label:focus.is-disabled::before{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Checkbox-label:focus.is-checked::before{border-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-Checkbox-label:active::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-Checkbox-label:active .ms-Label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Checkbox-label.is-checked::before{border:10px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:black-on-white){.ms-Checkbox-label.is-checked::before{display:none}}.ms-Checkbox-label.is-checked::after{display:block}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:black-on-white){.ms-Checkbox-label.is-checked::after{height:16px;width:16px;line-height:16px}}@media screen and (-ms-high-contrast:active){.ms-Checkbox-label.is-checked::after{border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Checkbox-label.is-checked::after{border:2px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Checkbox-label.is-checked:focus::before,.ms-Checkbox-label.is-checked:hover::before{border-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-Checkbox-label.is-disabled{cursor:default}.ms-Checkbox-label.is-disabled:focus::before,.ms-Checkbox-label.is-disabled:hover::before{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Checkbox-label.is-disabled::before{background-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Checkbox-label.is-disabled::after{border:2px solid #0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Checkbox-label.is-disabled::after{border:2px solid #600000}}@media screen and (-ms-high-contrast:active){.ms-Checkbox-label.is-disabled::after{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Checkbox-label.is-disabled::after{color:#600000}}.ms-Checkbox-label.is-disabled .ms-Label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Checkbox-label.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Checkbox-label.is-disabled .ms-Label{color:#600000}}.ms-Checkbox-label.is-inFocus::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-Checkbox-label.is-inFocus.is-disabled::before{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Checkbox-label.is-inFocus.is-checked::before{border-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.is-focusVisible .ms-Checkbox.is-inFocus::before{content:'';position:absolute;top:0;bottom:0;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .is-focusVisible .ms-Checkbox.is-inFocus::before{right:0}html[dir=rtl] .is-focusVisible .ms-Checkbox.is-inFocus::before{left:0}html[dir=ltr] .is-focusVisible .ms-Checkbox.is-inFocus::before{left:-8px}html[dir=rtl] .is-focusVisible .ms-Checkbox.is-inFocus::before{right:-8px}@media screen and (-ms-high-contrast:active){.is-focusVisible .ms-Checkbox.is-inFocus::before{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.is-focusVisible .ms-Checkbox.is-inFocus::before{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(78));
	


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(79));
	


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(80);
	var css_1 = __webpack_require__(7);
	var object_1 = __webpack_require__(8);
	__webpack_require__(85);
	var ChoiceGroup = (function (_super) {
	    __extends(ChoiceGroup, _super);
	    function ChoiceGroup(props) {
	        _super.call(this);
	        this.state = {
	            keyChecked: this._getKeyChecked(props.options),
	            keyFocused: undefined
	        };
	        this._id = object_1.getId('ChoiceGroup');
	        this._descriptionId = object_1.getId('ChoiceGroupDescription');
	    }
	    ChoiceGroup.prototype.componentWillReceiveProps = function (newProps) {
	        var newKeyChecked = this._getKeyChecked(newProps.options);
	        var oldKeyCheched = this._getKeyChecked(this.props.options);
	        if (newKeyChecked !== oldKeyCheched) {
	            this.setState({
	                keyChecked: newKeyChecked,
	            });
	        }
	    };
	    ChoiceGroup.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, label = _a.label, options = _a.options, className = _a.className, required = _a.required;
	        var _b = this.state, keyChecked = _b.keyChecked, keyFocused = _b.keyFocused;
	        var titleClassName = css_1.css('ms-Label', className, {
	            'is-required': required
	        });
	        return (
	        // Need to assign role application on containing div because JAWS doesnt call OnKeyDown without this role
	        React.createElement("div", {role: 'application', className: className}, 
	            React.createElement("div", {className: 'ms-ChoiceFieldGroup', role: 'radiogroup', "aria-labelledby": this.props.label ? this._id + '-label' : ''}, 
	                React.createElement("div", {className: 'ms-ChoiceFieldGroup-title'}, this.props.label ? React.createElement("label", {className: titleClassName, id: this._id + '-label'}, label) : null), 
	                options.map(function (option) { return (React.createElement("div", {key: option.key, className: css_1.css('ms-ChoiceField', {
	                    'ms-ChoiceField--image': !!option.imageSrc,
	                    'is-inFocus': option.key === keyFocused
	                })}, 
	                    React.createElement("input", {ref: function (c) { return _this._inputElement = c; }, id: _this._id + "-" + option.key, className: 'ms-ChoiceField-input', type: 'radio', name: _this._id, disabled: option.isDisabled || option.disabled || _this.props.disabled, checked: option.key === keyChecked, onChange: _this._onChange.bind(_this, option), onFocus: _this._onFocus.bind(_this, option), onBlur: _this._onBlur.bind(_this, option), "aria-describedby": _this._descriptionId + "-" + option.key}), 
	                    _this._renderField(option))); }))
	        ));
	    };
	    ChoiceGroup.prototype.focus = function () {
	        if (this._inputElement) {
	            this._inputElement.focus();
	        }
	    };
	    ChoiceGroup.prototype._onFocus = function (option, ev) {
	        this.setState({
	            keyFocused: option.key,
	            keyChecked: this.state.keyChecked
	        });
	    };
	    ChoiceGroup.prototype._onBlur = function (option, ev) {
	        this.setState({
	            keyFocused: undefined,
	            keyChecked: this.state.keyChecked
	        });
	    };
	    ChoiceGroup.prototype._renderField = function (option) {
	        var keyChecked = this.state.keyChecked;
	        var isDisabled = option.isDisabled || option.disabled || this.props.disabled;
	        return (React.createElement("label", {htmlFor: this._id + '-' + option.key, className: css_1.css({
	            'ms-ChoiceField-field--image': !!option.imageSrc,
	            'ms-ChoiceField-field': !option.imageSrc,
	            'is-checked': option.key === keyChecked,
	            'is-disabled': isDisabled
	        })}, 
	            option.imageSrc
	                ? React.createElement("div", {className: 'ms-ChoiceField-innerField'}, 
	                    React.createElement("div", {className: css_1.css('ms-ChoiceField-imageWrapper', { 'is-hidden': option.key === keyChecked })}, 
	                        React.createElement(Image_1.Image, {src: option.imageSrc, width: option.imageSize.width, height: option.imageSize.height})
	                    ), 
	                    React.createElement("div", {className: css_1.css('ms-ChoiceField-imageWrapper', { 'is-hidden': option.key !== keyChecked })}, 
	                        React.createElement(Image_1.Image, {src: option.selectedImageSrc, width: option.imageSize.width, height: option.imageSize.height})
	                    ))
	                : null, 
	            option.imageSrc
	                ? React.createElement("div", {className: 'ms-ChoiceField-labelWrapper'}, 
	                    React.createElement("i", {className: 'ms-ChoiceField-icon ms-Icon ms-Icon--CheckMark'}), 
	                    React.createElement("span", {id: this._descriptionId + "-" + option.key, className: 'ms-Label'}, option.text))
	                : React.createElement("span", {id: this._descriptionId + "-" + option.key, className: 'ms-Label'}, option.text)));
	    };
	    ChoiceGroup.prototype._onChange = function (option, evt) {
	        var onChanged = this.props.onChanged;
	        this.setState({
	            keyChecked: option.key
	        });
	        if (onChanged) {
	            onChanged(option);
	        }
	    };
	    /**
	     * If all the isChecked property of options are falsy values, return undefined;
	     * Else return the key of the first option with the truthy isChecked property.
	     */
	    ChoiceGroup.prototype._getKeyChecked = function (options) {
	        var optionsChecked = options.filter(function (option) {
	            return option.isChecked || option.checked;
	        });
	        if (optionsChecked.length === 0) {
	            return undefined;
	        }
	        else {
	            return optionsChecked[0].key;
	        }
	    };
	    ChoiceGroup.defaultProps = {
	        options: []
	    };
	    return ChoiceGroup;
	}(React.Component));
	exports.ChoiceGroup = ChoiceGroup;
	


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(81));
	


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(82));
	__export(__webpack_require__(84));
	


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var properties_1 = __webpack_require__(11);
	var EventGroup_1 = __webpack_require__(14);
	__webpack_require__(83);
	var Image_Props_1 = __webpack_require__(84);
	(function (CoverStyle) {
	    CoverStyle[CoverStyle["landscape"] = 0] = "landscape";
	    CoverStyle[CoverStyle["portrait"] = 1] = "portrait";
	})(exports.CoverStyle || (exports.CoverStyle = {}));
	var CoverStyle = exports.CoverStyle;
	exports.CoverStyleMap = (_a = {},
	    _a[CoverStyle.landscape] = 'ms-Image-image--landscape',
	    _a[CoverStyle.portrait] = 'ms-Image-image--portrait',
	    _a
	);
	exports.ImageFitMap = (_b = {},
	    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center',
	    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain',
	    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover',
	    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none',
	    _b
	);
	(function (ImageLoadState) {
	    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
	    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
	    ImageLoadState[ImageLoadState["error"] = 2] = "error";
	    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
	})(exports.ImageLoadState || (exports.ImageLoadState = {}));
	var ImageLoadState = exports.ImageLoadState;
	var Image = (function (_super) {
	    __extends(Image, _super);
	    function Image(props) {
	        _super.call(this, props);
	        this.state = {
	            loadState: ImageLoadState.notLoaded
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    Image.prototype.componentDidMount = function () {
	        var image = this.refs.image;
	        if (!this._evaluateImage()) {
	            this._events.on(image, 'load', this._evaluateImage);
	            this._events.on(image, 'error', this._setError);
	        }
	    };
	    Image.prototype.componentWillReceiveProps = function (nextProps) {
	        if (this.state.loadState === ImageLoadState.loaded) {
	            var nextHeight = nextProps.height, nextWidth = nextProps.width;
	            var _a = this.props, height = _a.height, width = _a.width;
	            if (height !== nextHeight || width !== nextWidth) {
	                this._computeCoverStyle(nextProps);
	            }
	        }
	    };
	    Image.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Image.prototype.render = function () {
	        var imageProps = properties_1.getNativeProps(this.props, properties_1.imageProperties, ['width', 'height']);
	        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, className = _a.className, imageFit = _a.imageFit, errorSrc = _a.errorSrc, role = _a.role;
	        var loadState = this.state.loadState;
	        var coverStyle = this._coverStyle;
	        var loaded = loadState === ImageLoadState.loaded || loadState === ImageLoadState.errorLoaded;
	        var srcToDisplay = (loadState === ImageLoadState.error || loadState === ImageLoadState.errorLoaded) ? errorSrc : src;
	        // If image dimensions aren't specified, the natural size of the image is used.
	        return (React.createElement("div", {className: css_1.css('ms-Image', className), style: { width: width, height: height }}, 
	            React.createElement("img", __assign({}, imageProps, {className: css_1.css('ms-Image-image', (coverStyle !== undefined) && exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], {
	                'is-fadeIn': shouldFadeIn,
	                'is-notLoaded': !loaded,
	                'is-loaded': loaded,
	                'ms-u-fadeIn400': loaded && shouldFadeIn,
	                'is-error': loadState === ImageLoadState.error,
	                'ms-Image-image--scaleWidth': (imageFit === undefined && !!width && !height),
	                'ms-Image-image--scaleHeight': (imageFit === undefined && !width && !!height),
	                'ms-Image-image--scaleWidthHeight': (imageFit === undefined && !!width && !!height),
	            }), ref: 'image', src: srcToDisplay, alt: alt, role: role}))
	        ));
	    };
	    Image.prototype._evaluateImage = function () {
	        var src = this.props.src;
	        var loadState = this.state.loadState;
	        var image = this.refs.image;
	        var isLoaded = (src && image.naturalWidth > 0 && image.naturalHeight > 0);
	        this._computeCoverStyle(this.props);
	        if (isLoaded && loadState !== ImageLoadState.loaded && loadState !== ImageLoadState.errorLoaded) {
	            this._events.off();
	            this.setState({
	                loadState: loadState === ImageLoadState.error ? ImageLoadState.errorLoaded : ImageLoadState.loaded
	            });
	        }
	        return isLoaded;
	    };
	    Image.prototype._computeCoverStyle = function (props) {
	        var imageFit = props.imageFit;
	        if (imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) {
	            var image = this.refs.image;
	            if (image) {
	                var width = props.width, height = props.height;
	                var desiredRatio = width / height;
	                var naturalRatio = image.naturalWidth / image.naturalHeight;
	                if (naturalRatio > desiredRatio) {
	                    this._coverStyle = CoverStyle.landscape;
	                }
	                else {
	                    this._coverStyle = CoverStyle.portrait;
	                }
	            }
	        }
	    };
	    Image.prototype._setError = function () {
	        if (this.state.loadState !== ImageLoadState.error && this.state.loadState !== ImageLoadState.errorLoaded) {
	            this.setState({
	                loadState: ImageLoadState.error
	            });
	        }
	    };
	    Image.defaultProps = {
	        shouldFadeIn: true
	    };
	    return Image;
	}(React.Component));
	exports.Image = Image;
	var _a, _b;



/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Image{overflow:hidden}.ms-Image-image{display:block;opacity:0}.ms-Image-image.is-loaded{opacity:1}.ms-Image-image--center,.ms-Image-image--contain,.ms-Image-image--cover{position:relative;top:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{left:50%}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{right:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.ms-Image-image--contain.ms-Image-image--landscape{width:100%;height:auto}.ms-Image-image--contain.ms-Image-image--portrait{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--landscape{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--portrait{width:100%;height:auto}.ms-Image-image--none{height:auto;width:auto}.ms-Image-image--scaleWidthHeight{height:100%;width:100%}.ms-Image-image--scaleWidth{height:auto;width:100%}.ms-Image-image--scaleHeight{height:100%;width:auto}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * The possible methods that can be used to fit the image.
	 */
	(function (ImageFit) {
	    /**
	     * The image is not scaled. The image is centered and cropped within the content box.
	     */
	    ImageFit[ImageFit["center"] = 0] = "center";
	    /**
	     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
	     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
	     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
	     */
	    ImageFit[ImageFit["contain"] = 1] = "contain";
	    /**
	     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
	     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
	     */
	    ImageFit[ImageFit["cover"] = 2] = "cover";
	    /**
	     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
	     * frame will have empty space.
	     */
	    ImageFit[ImageFit["none"] = 3] = "none";
	})(exports.ImageFit || (exports.ImageFit = {}));
	var ImageFit = exports.ImageFit;
	


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-ChoiceFieldGroup{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;margin-bottom:4px}.ms-ChoiceFieldGroup .ms-ChoiceFieldGroup-list{padding:0;margin:0}.ms-ChoiceField{box-sizing:border-box;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400;min-height:36px;border:1px solid transparent;position:relative;line-height:20px}html[dir=ltr] .ms-ChoiceField{padding-left:8px}html[dir=rtl] .ms-ChoiceField{padding-right:8px}.ms-ChoiceField .ms-Label{font-size:14px;padding:0 0 0 26px;display:inline-block}html[dir=rtl] .ms-ChoiceField .ms-Label{padding:0 26px 0 0}.ms-ChoiceField-input{position:absolute;opacity:0;top:8px}.ms-ChoiceField-field::before{content:'';display:inline-block;border:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";width:20px;height:20px;font-weight:400;position:absolute;box-sizing:border-box;-webkit-transition-property:background,border,border-color;transition-property:background,border,border-color;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1);border-radius:50%}.ms-ChoiceField-field::after{content:'';width:0;height:0;border-radius:50%;position:absolute;top:10px;bottom:0;-webkit-transition-property:top,left,right,width,height;transition-property:top,left,right,width,height;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(.4,0,.23,1);transition-timing-function:cubic-bezier(.4,0,.23,1);box-sizing:border-box}html[dir=ltr] .ms-ChoiceField-field::after{left:10px}html[dir=rtl] .ms-ChoiceField-field::after{right:10px}html[dir=ltr] .ms-ChoiceField-field::after{right:0}html[dir=rtl] .ms-ChoiceField-field::after{left:0}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-field::after{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-field::after{color:#600000}}.ms-ChoiceField-field{display:inline-block;cursor:pointer;margin-top:8px;position:relative;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-ChoiceField-field:hover::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-ChoiceField-field:hover .ms-Label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-ChoiceField-field:focus::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-ChoiceField-field:focus.is-disabled::before{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-ChoiceField-field:focus.is-checked::before{border-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-ChoiceField-field:active::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-ChoiceField-field:active .ms-Label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-ChoiceField-field.is-checked::before{border:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-field.is-checked::before{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-field.is-checked::before{border-color:#37006E}}.ms-ChoiceField-field.is-checked::after{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";top:5px;width:10px;height:10px}html[dir=ltr] .ms-ChoiceField-field.is-checked::after{left:5px}html[dir=rtl] .ms-ChoiceField-field.is-checked::after{right:5px}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-field.is-checked::after{background-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-field.is-checked::after{background-color:#37006E}}.ms-ChoiceField-field.is-checked:focus::before,.ms-ChoiceField-field.is-checked:hover::before{border-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-ChoiceField-field.is-disabled{cursor:default}.ms-ChoiceField-field.is-disabled:focus::before,.ms-ChoiceField-field.is-disabled:hover::before{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-ChoiceField-field.is-disabled::before{background-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-field.is-disabled::before{border-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-field.is-disabled::before{border-color:#600000}}.ms-ChoiceField-field.is-disabled .ms-Label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-ChoiceField-field.is-disabled .ms-Label{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-ChoiceField-field.is-disabled .ms-Label{color:#600000}}.ms-ChoiceField-field.is-inFocus::before{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-ChoiceField-field.is-inFocus.is-disabled::before{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-ChoiceField-field.is-inFocus.is-checked::before{border-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-ChoiceField--image{display:inline-block;font-size:0;background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}html[dir=ltr] .ms-ChoiceField--image{margin-right:6px}html[dir=rtl] .ms-ChoiceField--image{margin-left:6px}html[dir=ltr] .ms-ChoiceField--image{padding-left:0}html[dir=rtl] .ms-ChoiceField--image{padding-right:0}.ms-ChoiceField--image .ms-ChoiceField-field--image{display:inline-block;box-sizing:border-box;min-width:164px;cursor:pointer;padding:20px 20px 12px 20px;text-align:center;-webkit-transition:all .2s ease;transition:all .2s ease}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField{position:relative}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper{-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper.is-hidden{position:absolute;top:0;width:100%;height:100%;overflow:hidden;opacity:0}html[dir=ltr] .ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper.is-hidden{left:0}html[dir=rtl] .ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper.is-hidden{right:0}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-innerField .ms-ChoiceField-imageWrapper .ms-Image{display:inline-block}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper{display:inline-block;position:relative;margin:10px 0 0 0;padding:0 24px}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-ChoiceField-icon{display:none;position:absolute;line-height:12px;font-size:17px;color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}html[dir=ltr] .ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-ChoiceField-icon{left:0}html[dir=rtl] .ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-ChoiceField-icon{right:0}.ms-ChoiceField--image .ms-ChoiceField-field--image .ms-ChoiceField-labelWrapper .ms-Label{display:inline-block;padding:0;line-height:12px;font-weight:600;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-ChoiceField--image .ms-ChoiceField-field--image.is-checked{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": "}.ms-ChoiceField--image .ms-ChoiceField-field--image.is-checked .ms-ChoiceField-labelWrapper .ms-ChoiceField-icon{display:inline-block}.is-focusVisible .ms-ChoiceField.is-inFocus{border:1px solid " }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(87));
	


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(88));
	


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var TextField_1 = __webpack_require__(89);
	var ColorRectangle_1 = __webpack_require__(97);
	var ColorSlider_1 = __webpack_require__(107);
	var autobind_1 = __webpack_require__(28);
	var colors_1 = __webpack_require__(98);
	__webpack_require__(108);
	var ColorPicker = (function (_super) {
	    __extends(ColorPicker, _super);
	    function ColorPicker(props) {
	        _super.call(this, props);
	        this.state = {
	            color: colors_1.getColorFromString(props.color)
	        };
	    }
	    ColorPicker.prototype.render = function () {
	        var color = this.state.color;
	        return (React.createElement("div", {className: 'ms-ColorPicker'}, 
	            React.createElement("div", {className: 'ms-ColorPicker-panel'}, 
	                React.createElement(ColorRectangle_1.ColorRectangle, {color: color, onSVChanged: this._onSVChanged}), 
	                React.createElement(ColorSlider_1.ColorSlider, {className: 'is-hue', minValue: 0, maxValue: colors_1.MAX_COLOR_HUE, initialValue: color.h, onChanged: this._onHChanged}), 
	                React.createElement(ColorSlider_1.ColorSlider, {className: 'is-alpha', overlayStyle: { background: "linear-gradient(to right, transparent 0, " + color.str + " 100%)" }, minValue: 0, maxValue: 100, initialValue: color.a, onChanged: this._onAChanged}), 
	                React.createElement("table", {className: 'ms-ColorPicker-table', cellPadding: '0', cellSpacing: '0'}, 
	                    React.createElement("thead", null, 
	                        React.createElement("tr", {className: 'ms-font-s'}, 
	                            React.createElement("td", null, "Hex"), 
	                            React.createElement("td", null, "Red"), 
	                            React.createElement("td", null, "Green"), 
	                            React.createElement("td", null, "Blue"), 
	                            React.createElement("td", null, "Alpha"))
	                    ), 
	                    React.createElement("tbody", null, 
	                        React.createElement("tr", null, 
	                            React.createElement("td", null, 
	                                React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.hex})
	                            ), 
	                            React.createElement("td", {style: { width: '18%' }}, 
	                                React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.r})
	                            ), 
	                            React.createElement("td", {style: { width: '18%' }}, 
	                                React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.g})
	                            ), 
	                            React.createElement("td", {style: { width: '18%' }}, 
	                                React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.b})
	                            ), 
	                            React.createElement("td", {style: { width: '18%' }}, 
	                                React.createElement(TextField_1.TextField, {className: 'ms-ColorPicker-input', value: color.a})
	                            ))
	                    )))
	        ));
	    };
	    ColorPicker.prototype._onSVChanged = function (s, v) {
	        this._updateColor(colors_1.updateSV(this.state.color, s, v));
	    };
	    ColorPicker.prototype._onHChanged = function (h) {
	        this._updateColor(colors_1.updateH(this.state.color, h));
	    };
	    ColorPicker.prototype._onAChanged = function (a) {
	        this._updateColor(colors_1.updateA(this.state.color, a));
	    };
	    ColorPicker.prototype._updateColor = function (newColor) {
	        var onColorChanged = this.props.onColorChanged;
	        if (newColor.str !== this.state.color.str) {
	            this.setState({
	                color: newColor
	            });
	            if (onColorChanged) {
	                onColorChanged(newColor.str);
	            }
	        }
	    };
	    __decorate([
	        autobind_1.autobind
	    ], ColorPicker.prototype, "_onSVChanged", null);
	    __decorate([
	        autobind_1.autobind
	    ], ColorPicker.prototype, "_onHChanged", null);
	    __decorate([
	        autobind_1.autobind
	    ], ColorPicker.prototype, "_onAChanged", null);
	    return ColorPicker;
	}(React.Component));
	exports.ColorPicker = ColorPicker;
	


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(90));
	


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(91));
	


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Label_1 = __webpack_require__(92);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(96);
	var TextField = (function (_super) {
	    __extends(TextField, _super);
	    function TextField(props) {
	        _super.call(this, props);
	        this._id = Utilities_1.getId('TextField');
	        this._descriptionId = Utilities_1.getId('TextFieldDescription');
	        this._async = new Utilities_1.Async(this);
	        this.state = {
	            value: props.value || props.defaultValue || '',
	            isFocused: false,
	            errorMessage: ''
	        };
	        this._onInputChange = this._onInputChange.bind(this);
	        this._onFocus = this._onFocus.bind(this);
	        this._onBlur = this._onBlur.bind(this);
	        this._delayedValidate = this._async.debounce(this._validate, this.props.deferredValidationTime);
	        this._lastValidation = 0;
	        this._willMountTriggerValidation = false;
	    }
	    Object.defineProperty(TextField.prototype, "value", {
	        /**
	         * Gets the current value of the text field.
	         */
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype.componentWillMount = function () {
	        this._willMountTriggerValidation = true;
	        this._validate(this.state.value);
	    };
	    TextField.prototype.componentDidMount = function () {
	        this._isMounted = true;
	    };
	    TextField.prototype.componentWillReceiveProps = function (newProps) {
	        var onBeforeChange = this.props.onBeforeChange;
	        if (newProps.value !== undefined && newProps.value !== this.state.value) {
	            if (onBeforeChange) {
	                onBeforeChange(newProps.value);
	            }
	            this.setState({
	                value: newProps.value,
	                errorMessage: ''
	            });
	            this._delayedValidate(newProps.value);
	        }
	    };
	    TextField.prototype.componentWillUnmount = function () {
	        this._async.dispose();
	        this._isMounted = false;
	    };
	    TextField.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, required = _a.required, multiline = _a.multiline, underlined = _a.underlined, label = _a.label, description = _a.description, iconClass = _a.iconClass, className = _a.className;
	        var isFocused = this.state.isFocused;
	        var errorMessage = this._errorMessage;
	        var textFieldClassName = Utilities_1.css('ms-TextField', className, {
	            'is-required': required,
	            'is-disabled': disabled,
	            'is-active': isFocused,
	            'ms-TextField--multiline': multiline,
	            'ms-TextField--underlined': underlined
	        });
	        return (React.createElement("div", {className: textFieldClassName}, 
	            label && React.createElement(Label_1.Label, {htmlFor: this._id}, label), 
	            iconClass && React.createElement("i", {className: iconClass}), 
	            multiline ? this._renderTextArea() : this._renderInput(), 
	            errorMessage && React.createElement("div", {"aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message'}, errorMessage), 
	            (description || errorMessage) &&
	                React.createElement("span", {id: this._descriptionId}, 
	                    description && React.createElement("span", {className: 'ms-TextField-description'}, description), 
	                    errorMessage && React.createElement("p", {className: 'ms-TextField-errorMessage ms-u-slideDownIn20'}, errorMessage))));
	    };
	    /**
	     * Sets focus on the text field
	     */
	    TextField.prototype.focus = function () {
	        if (this._field) {
	            this._field.focus();
	        }
	    };
	    /**
	     * Selects the text field
	     */
	    TextField.prototype.select = function () {
	        if (this._field) {
	            this._field.select();
	        }
	    };
	    /**
	     * Sets the selection start of the text field to a specified value
	     */
	    TextField.prototype.setSelectionStart = function (value) {
	        if (this._field) {
	            this._field.selectionStart = value;
	        }
	    };
	    /**
	     * Sets the selection end of the text field to a specified value
	     */
	    TextField.prototype.setSelectionEnd = function (value) {
	        if (this._field) {
	            this._field.selectionEnd = value;
	        }
	    };
	    TextField.prototype._onFocus = function (ev) {
	        if (this.props.onFocus) {
	            this.props.onFocus(ev);
	        }
	        this.setState({ isFocused: true });
	    };
	    TextField.prototype._onBlur = function (ev) {
	        if (this.props.onBlur) {
	            this.props.onBlur(ev);
	        }
	        this.setState({ isFocused: false });
	    };
	    Object.defineProperty(TextField.prototype, "_fieldClassName", {
	        get: function () {
	            var errorMessage = this._errorMessage;
	            var textFieldClassName;
	            if (this.props.multiline && !this.props.resizable) {
	                textFieldClassName = 'ms-TextField-field ms-TextField-field--unresizable';
	            }
	            else {
	                textFieldClassName = 'ms-TextField-field';
	            }
	            return Utilities_1.css(textFieldClassName, this.props.inputClassName, {
	                'ms-TextField-invalid': !!errorMessage
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "_errorMessage", {
	        get: function () {
	            var errorMessage = this.state.errorMessage;
	            if (!errorMessage) {
	                errorMessage = this.props.errorMessage;
	            }
	            return errorMessage;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype._renderTextArea = function () {
	        var _this = this;
	        var textAreaProps = Utilities_1.getNativeProps(this.props, Utilities_1.textAreaProperties, ['defaultValue']);
	        return (React.createElement("textarea", __assign({}, textAreaProps, {id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, "aria-label": this.props.ariaLabel, "aria-describedby": this._descriptionId, "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur})));
	    };
	    TextField.prototype._renderInput = function () {
	        var _this = this;
	        var inputProps = Utilities_1.getNativeProps(this.props, Utilities_1.inputProperties, ['defaultValue']);
	        return (React.createElement("input", __assign({type: 'text'}, inputProps, {id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, "aria-label": this.props.ariaLabel, "aria-describedby": this._descriptionId, "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur})));
	    };
	    TextField.prototype._onInputChange = function (event) {
	        var element = event.target;
	        var value = element.value;
	        this.setState({
	            value: value,
	            errorMessage: ''
	        });
	        this._willMountTriggerValidation = false;
	        this._delayedValidate(value);
	        var onBeforeChange = this.props.onBeforeChange;
	        onBeforeChange(value);
	    };
	    TextField.prototype._validate = function (value) {
	        var _this = this;
	        // In case of _validate called multi-times during executing validate logic with promise return.
	        if (this._latestValidateValue === value) {
	            return;
	        }
	        this._latestValidateValue = value;
	        var onGetErrorMessage = this.props.onGetErrorMessage;
	        var result = onGetErrorMessage(value || '');
	        if (result !== undefined) {
	            if (typeof result === 'string') {
	                this.setState({
	                    errorMessage: result
	                });
	                this._notifyAfterValidate(value, result);
	            }
	            else {
	                var currentValidation_1 = ++this._lastValidation;
	                result.then(function (errorMessage) {
	                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
	                        _this.setState({ errorMessage: errorMessage });
	                    }
	                    _this._notifyAfterValidate(value, errorMessage);
	                });
	            }
	        }
	        else {
	            this._notifyAfterValidate(value, '');
	        }
	    };
	    TextField.prototype._notifyAfterValidate = function (value, errorMessage) {
	        if (!this._willMountTriggerValidation && value === this.state.value) {
	            var onNotifyValidationResult = this.props.onNotifyValidationResult;
	            onNotifyValidationResult(errorMessage, value);
	            if (!errorMessage) {
	                var onChanged = this.props.onChanged;
	                onChanged(value);
	            }
	        }
	        else {
	            this._willMountTriggerValidation = false;
	        }
	    };
	    TextField.defaultProps = {
	        multiline: false,
	        resizable: true,
	        underlined: false,
	        onChanged: function () { },
	        onBeforeChange: function () { },
	        onNotifyValidationResult: function () { },
	        onGetErrorMessage: function () { return undefined; },
	        deferredValidationTime: 200,
	        errorMessage: ''
	    };
	    return TextField;
	}(React.Component));
	exports.TextField = TextField;
	


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(93));
	


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(94));
	


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(95);
	var Label = (function (_super) {
	    __extends(Label, _super);
	    function Label() {
	        _super.apply(this, arguments);
	    }
	    Label.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, required = _a.required, children = _a.children, className = _a.className;
	        return (React.createElement("label", __assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), {className: Utilities_1.css('ms-Label', className, {
	            'is-disabled': disabled,
	            'is-required': required
	        })}), children));
	    };
	    return Label;
	}(React.Component));
	exports.Label = Label;
	


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-Label.is-disabled{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-Label.is-disabled{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;font-weight:400;margin-bottom:8px}.ms-TextField .ms-Label{font-size:14px;font-weight:400}.ms-TextField.is-disabled .ms-TextField-field{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-TextField.is-disabled::-webkit-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-disabled::-moz-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-disabled:-moz-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-disabled:-ms-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-required .ms-Label::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required::-webkit-input-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required::-moz-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required:-moz-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required:-ms-input-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-active{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-TextField-field{box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";border-radius:0;font-weight:400;font-size:14px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:32px;padding:6px 12px 7px 12px;width:100%;outline:0;text-overflow:ellipsis}html[dir=rtl] .ms-TextField-field{padding:6px 12px 7px 12px}.ms-TextField-field:hover{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-TextField-field:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#37006E}}.ms-TextField-field[disabled]{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-TextField-field::-webkit-input-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-field::-moz-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-field:-moz-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-field:-ms-input-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-description{color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";font-size:11px}.ms-TextField.ms-TextField--underlined{border-bottom:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";display:table;width:100%}.ms-TextField.ms-TextField--underlined:hover{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined:hover{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined:hover{border-color:#37006E}}.ms-TextField.ms-TextField--underlined:active,.ms-TextField.ms-TextField--underlined:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-TextField.ms-TextField--underlined .ms-Label{font-size:14px;display:table-cell;vertical-align:top;padding-top:9px;height:32px;width:1%;white-space:nowrap}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{margin-right:8px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{margin-left:8px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:12px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:12px}.ms-TextField.ms-TextField--underlined .ms-TextField-field{border:0;display:table-cell;padding-top:8px;padding-bottom:3px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{float:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{float:right}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:right}.ms-TextField.ms-TextField--underlined .ms-TextField-field:active,.ms-TextField.ms-TextField--underlined .ms-TextField-field:focus,.ms-TextField.ms-TextField--underlined .ms-TextField-field:hover{outline:0}.ms-TextField.ms-TextField--underlined.is-disabled{border-bottom-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field{background-color:transparent;color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.ms-TextField--underlined.is-active{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined.is-active{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined.is-active{border-color:#37006E}}.ms-TextField.ms-TextField--multiline .ms-TextField-field{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400;line-height:17px;min-height:60px;padding-top:6px;overflow:auto}.ms-TextField-errorMessage{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": ";margin:0;padding-top:5px}.ms-TextField-invalid,.ms-TextField-invalid:focus,.ms-TextField-invalid:hover{border-color:" }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": "}.ms-u-screenReaderOnly{position:absolute;text-indent:-9999px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:12px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:12px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:0}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:0}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:right}.ms-TextField.ms-TextField--multiline .ms-TextField-field.ms-TextField-field--unresizable{resize:none}.ms-TextField-hidden{display:none}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var colors_1 = __webpack_require__(98);
	var object_1 = __webpack_require__(8);
	var autobind_1 = __webpack_require__(28);
	var EventGroup_1 = __webpack_require__(14);
	var hsv2hex = __webpack_require__(105);
	var ColorRectangle = (function (_super) {
	    __extends(ColorRectangle, _super);
	    function ColorRectangle(props) {
	        _super.call(this, props);
	        var color = this.props.color;
	        this._events = new EventGroup_1.EventGroup(this);
	        this.state = {
	            isAdjusting: false,
	            origin: null,
	            color: color,
	            fullColorString: colors_1.getFullColorString(color)
	        };
	    }
	    ColorRectangle.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    ColorRectangle.prototype.componentWillReceiveProps = function (newProps) {
	        var color = newProps.color;
	        this.setState({
	            color: color,
	            fullColorString: colors_1.getFullColorString(color)
	        });
	    };
	    ColorRectangle.prototype.render = function () {
	        var minSize = this.props.minSize;
	        var _a = this.state, color = _a.color, fullColorString = _a.fullColorString;
	        return (React.createElement("div", {ref: 'root', className: 'ms-ColorPicker-colorRect', style: { minWidth: minSize, minHeight: minSize, backgroundColor: fullColorString }, onMouseDown: this._onMouseDown}, 
	            React.createElement("div", {className: 'ms-ColorPicker-light'}), 
	            React.createElement("div", {className: 'ms-ColorPicker-dark'}), 
	            React.createElement("div", {className: 'ms-ColorPicker-thumb', style: { left: color.s + '%', top: (colors_1.MAX_COLOR_VALUE - color.v) + '%', backgroundColor: color.str }})));
	    };
	    ColorRectangle.prototype._onMouseDown = function (ev) {
	        this._events.on(window, 'mousemove', this._onMouseMove, true);
	        this._events.on(window, 'mouseup', this._onMouseUp, true);
	        this._onMouseMove(ev);
	    };
	    ColorRectangle.prototype._onMouseMove = function (ev) {
	        var _a = this.props, color = _a.color, onSVChanged = _a.onSVChanged;
	        var rectSize = this.refs.root.getBoundingClientRect();
	        var sPercentage = (ev.clientX - rectSize.left) / rectSize.width;
	        var vPercentage = (ev.clientY - rectSize.top) / rectSize.height;
	        var newColor = object_1.assign({}, color, {
	            s: Math.min(colors_1.MAX_COLOR_SATURATION, Math.max(0, sPercentage * colors_1.MAX_COLOR_SATURATION)),
	            v: Math.min(colors_1.MAX_COLOR_VALUE, Math.max(0, colors_1.MAX_COLOR_VALUE - (vPercentage * colors_1.MAX_COLOR_VALUE))),
	        });
	        newColor.hex = hsv2hex(newColor.h, newColor.s, newColor.v);
	        newColor.str = newColor.a === 100 ? '#' + newColor.hex : "rgba(" + newColor.r + ", " + newColor.g + ", " + newColor.b + ", " + newColor.a / 100 + ")";
	        this.setState({
	            isAdjusting: true,
	            color: newColor
	        });
	        if (onSVChanged) {
	            onSVChanged(newColor.s, newColor.v);
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    ColorRectangle.prototype._onMouseUp = function (ev) {
	        this._events.off();
	        this.setState({
	            isAdjusting: false,
	            origin: null
	        });
	    };
	    ColorRectangle.defaultProps = {
	        minSize: 220
	    };
	    __decorate([
	        autobind_1.autobind
	    ], ColorRectangle.prototype, "_onMouseDown", null);
	    __decorate([
	        autobind_1.autobind
	    ], ColorRectangle.prototype, "_onMouseMove", null);
	    __decorate([
	        autobind_1.autobind
	    ], ColorRectangle.prototype, "_onMouseUp", null);
	    return ColorRectangle;
	}(React.Component));
	exports.ColorRectangle = ColorRectangle;
	


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(8);
	var cssColor = __webpack_require__(99);
	var rgb2hex = __webpack_require__(104);
	var hsv2hex = __webpack_require__(105);
	var rgb2hsv = __webpack_require__(106);
	var hsv2rgb = __webpack_require__(102);
	exports.MAX_COLOR_SATURATION = 100;
	exports.MAX_COLOR_HUE = 359;
	exports.MAX_COLOR_VALUE = 100;
	function getColorFromString(color) {
	    var _a = cssColor(color), a = _a.a, b = _a.b, g = _a.g, r = _a.r;
	    var _b = rgb2hsv(r, g, b), h = _b.h, s = _b.s, v = _b.v;
	    return {
	        a: a,
	        b: b,
	        g: g,
	        h: h,
	        hex: rgb2hex(r, g, b),
	        r: r,
	        s: s,
	        str: color,
	        v: v
	    };
	}
	exports.getColorFromString = getColorFromString;
	function getFullColorString(color) {
	    return "#" + hsv2hex(color.h, exports.MAX_COLOR_SATURATION, exports.MAX_COLOR_VALUE);
	}
	exports.getFullColorString = getFullColorString;
	function updateSV(color, s, v) {
	    var _a = hsv2rgb(color.h, s, v), r = _a.r, g = _a.g, b = _a.b;
	    var hex = rgb2hex(r, g, b);
	    return {
	        a: color.a,
	        b: b,
	        g: g,
	        h: color.h,
	        hex: hex,
	        r: r,
	        s: s,
	        str: (color.a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + color.a / 100 + ")",
	        v: v
	    };
	}
	exports.updateSV = updateSV;
	function updateH(color, h) {
	    var _a = hsv2rgb(h, color.s, color.v), r = _a.r, g = _a.g, b = _a.b;
	    var hex = rgb2hex(r, g, b);
	    return {
	        a: color.a,
	        b: b,
	        g: g,
	        h: h,
	        hex: hex,
	        r: r,
	        s: color.s,
	        str: (color.a === 100) ? "#" + hex : "rgba(" + r + ", " + g + ", " + b + ", " + color.a / 100 + ")",
	        v: color.v
	    };
	}
	exports.updateH = updateH;
	function updateA(color, a) {
	    return object_1.assign({}, color, {
	        a: a,
	        str: (a === 100) ? "#" + color.hex : "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + a / 100 + ")"
	    });
	}
	exports.updateA = updateA;
	


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// based on component/color-parser
	
	var hsl2rgb = __webpack_require__(100);
	var colors = __webpack_require__(103);
	
	function parse(str) {
	  return named(str)
	    || hex3(str)
	    || hex6(str)
	    || rgb(str)
	    || rgba(str)
	    || hsl(str)
	    || hsla(str);
	}
	
	function named(str) {
	  var c = colors[str.toLowerCase()];
	  if(!c) return;
	  return {
	    r: c[0],
	    g: c[1],
	    b: c[2],
	    a: 100
	  };
	}
	
	function rgb(str) {
	  if (0 == str.indexOf('rgb(')) {
	    str = str.match(/rgb\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */).map(Number);
	    return {
	      r: parts[0],
	      g: parts[1],
	      b: parts[2],
	      a: 100
	    };
	  }
	}
	
	function rgba(str) {
	  if(str.indexOf('rgba(') === 0) {
	    str = str.match(/rgba\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */).map(Number);
	
	    return {
	      r: parts[0],
	      g: parts[1],
	      b: parts[2],
	      a: parts[3] * 100
	    };
	  }
	}
	
	function hex6(str) {
	  if('#' === str[0] && 7 === str.length) {
	    return {
	      r: parseInt(str.slice(1, 3), 16),
	      g: parseInt(str.slice(3, 5), 16),
	      b: parseInt(str.slice(5, 7), 16),
	      a: 100
	    };
	  }
	}
	
	function hex3(str) {
	  if('#' === str[0] && 4 === str.length) {
	    return {
	      r: parseInt(str[1] + str[1], 16),
	      g: parseInt(str[2] + str[2], 16),
	      b: parseInt(str[3] + str[3], 16),
	      a: 100
	    };
	  }
	}
	
	function hsl(str) {
	  if(str.indexOf('hsl(') === 0) {
	    str = str.match(/hsl\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */);
	
	    var h = parseInt(parts[0], 10);
	    var s = parseInt(parts[1], 10);
	    var l = parseInt(parts[2], 10);
	
	    var rgba = hsl2rgb(h, s, l);
	    rgba.a = 100;
	
	    return rgba;
	  }
	}
	
	function hsla(str) {
	  if(str.indexOf('hsla(') === 0) {
	    str = str.match(/hsla\(([^)]+)\)/)[1];
	    var parts = str.split(/ *, */);
	
	    var h = parseInt(parts[0], 10);
	    var s = parseInt(parts[1], 10);
	    var l = parseInt(parts[2], 10);
	    var a = parseInt(parts[3] * 100, 10);
	
	    var rgba = hsl2rgb(h, s, l);
	    rgba.a = a;
	
	    return rgba;
	  }
	}
	
	module.exports = parse;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var hsl2hsv = __webpack_require__(101);
	var hsv2rgb = __webpack_require__(102);
	
	module.exports = function(h, s, l) {
	  var hsv = hsl2hsv(h, s, l);
	  return hsv2rgb(hsv.h, hsv.s, hsv.v);
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(h, s, l) {
	  s *= ((l < 50) ? l : (100 - l)) / 100;
	
	  console.log('s', s);
	
	  return {
	    h: h,
	    s: 2 * s / (l+s) * 100,
	    v: l + s
	  };
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	// http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
	module.exports = function(h, s, v) {
	  var s = s/100, v = v/100;
	  var rgb = [];
	
	  var c = v * s;
	  var hh = h/60;
	  var x = c * (1 - Math.abs(hh%2-1));
	  var m = v - c;
	
	  switch(parseInt(hh, 10)) {
	    case 0:
	      rgb = [c, x, 0];
	    break;
	
	    case 1:
	      rgb = [x, c, 0];
	    break;
	
	    case 2:
	      rgb = [0, c, x];
	    break;
	
	    case 3:
	      rgb = [0, x, c];
	    break;
	
	    case 4:
	      rgb = [x, 0, c];
	    break;
	
	    case 5:
	      rgb = [c, 0, x];
	    break;
	  }
	
	  return {
	    r: Math.round(255*(rgb[0]+m)),
	    g: Math.round(255*(rgb[1]+m)),
	    b: Math.round(255*(rgb[2]+m))
	  };
	};


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  aliceblue: [240, 248, 255],
	  antiquewhite: [250, 235, 215],
	  aqua: [0, 255, 255],
	  aquamarine: [127, 255, 212],
	  azure: [240, 255, 255],
	  beige: [245, 245, 220],
	  bisque: [255, 228, 196],
	  black: [0, 0, 0],
	  blanchedalmond: [255, 235, 205],
	  blue: [0, 0, 255],
	  blueviolet: [138, 43, 226],
	  brown: [165, 42, 42],
	  burlywood: [222, 184, 135],
	  cadetblue: [95, 158, 160],
	  chartreuse: [127, 255, 0],
	  chocolate: [210, 105, 30],
	  coral: [255, 127, 80],
	  cornflowerblue: [100, 149, 237],
	  cornsilk: [255, 248, 220],
	  crimson: [220, 20, 60],
	  cyan: [0, 255, 255],
	  darkblue: [0, 0, 139],
	  darkcyan: [0, 139, 139],
	  darkgoldenrod: [184, 132, 11],
	  darkgray: [169, 169, 169],
	  darkgreen: [0, 100, 0],
	  darkgrey: [169, 169, 169],
	  darkkhaki: [189, 183, 107],
	  darkmagenta: [139, 0, 139],
	  darkolivegreen: [85, 107, 47],
	  darkorange: [255, 140, 0],
	  darkorchid: [153, 50, 204],
	  darkred: [139, 0, 0],
	  darksalmon: [233, 150, 122],
	  darkseagreen: [143, 188, 143],
	  darkslateblue: [72, 61, 139],
	  darkslategray: [47, 79, 79],
	  darkslategrey: [47, 79, 79],
	  darkturquoise: [0, 206, 209],
	  darkviolet: [148, 0, 211],
	  deeppink: [255, 20, 147],
	  deepskyblue: [0, 191, 255],
	  dimgray: [105, 105, 105],
	  dimgrey: [105, 105, 105],
	  dodgerblue: [30, 144, 255],
	  firebrick: [178, 34, 34],
	  floralwhite: [255, 255, 240],
	  forestgreen: [34, 139, 34],
	  fuchsia: [255, 0, 255],
	  gainsboro: [220, 220, 220],
	  ghostwhite: [248, 248, 255],
	  gold: [255, 215, 0],
	  goldenrod: [218, 165, 32],
	  gray: [128, 128, 128],
	  green: [0, 128, 0],
	  greenyellow: [173, 255, 47],
	  grey: [128, 128, 128],
	  honeydew: [240, 255, 240],
	  hotpink: [255, 105, 180],
	  indianred: [205, 92, 92],
	  indigo: [75, 0, 130],
	  ivory: [255, 255, 240],
	  khaki: [240, 230, 140],
	  lavender: [230, 230, 250],
	  lavenderblush: [255, 240, 245],
	  lawngreen: [124, 252, 0],
	  lemonchiffon: [255, 250, 205],
	  lightblue: [173, 216, 230],
	  lightcoral: [240, 128, 128],
	  lightcyan: [224, 255, 255],
	  lightgoldenrodyellow: [250, 250, 210],
	  lightgray: [211, 211, 211],
	  lightgreen: [144, 238, 144],
	  lightgrey: [211, 211, 211],
	  lightpink: [255, 182, 193],
	  lightsalmon: [255, 160, 122],
	  lightseagreen: [32, 178, 170],
	  lightskyblue: [135, 206, 250],
	  lightslategray: [119, 136, 153],
	  lightslategrey: [119, 136, 153],
	  lightsteelblue: [176, 196, 222],
	  lightyellow: [255, 255, 224],
	  lime: [0, 255, 0],
	  limegreen: [50, 205, 50],
	  linen: [250, 240, 230],
	  magenta: [255, 0, 255],
	  maroon: [128, 0, 0],
	  mediumaquamarine: [102, 205, 170],
	  mediumblue: [0, 0, 205],
	  mediumorchid: [186, 85, 211],
	  mediumpurple: [147, 112, 219],
	  mediumseagreen: [60, 179, 113],
	  mediumslateblue: [123, 104, 238],
	  mediumspringgreen: [0, 250, 154],
	  mediumturquoise: [72, 209, 204],
	  mediumvioletred: [199, 21, 133],
	  midnightblue: [25, 25, 112],
	  mintcream: [245, 255, 250],
	  mistyrose: [255, 228, 225],
	  moccasin: [255, 228, 181],
	  navajowhite: [255, 222, 173],
	  navy: [0, 0, 128],
	  oldlace: [253, 245, 230],
	  olive: [128, 128, 0],
	  olivedrab: [107, 142, 35],
	  orange: [255, 165, 0],
	  orangered: [255, 69, 0],
	  orchid: [218, 112, 214],
	  palegoldenrod: [238, 232, 170],
	  palegreen: [152, 251, 152],
	  paleturquoise: [175, 238, 238],
	  palevioletred: [219, 112, 147],
	  papayawhip: [255, 239, 213],
	  peachpuff: [255, 218, 185],
	  peru: [205, 133, 63],
	  pink: [255, 192, 203],
	  plum: [221, 160, 203],
	  powderblue: [176, 224, 230],
	  purple: [128, 0, 128],
	  rebeccapurple: [102, 51, 153],
	  red: [255, 0, 0],
	  rosybrown: [188, 143, 143],
	  royalblue: [65, 105, 225],
	  saddlebrown: [139, 69, 19],
	  salmon: [250, 128, 114],
	  sandybrown: [244, 164, 96],
	  seagreen: [46, 139, 87],
	  seashell: [255, 245, 238],
	  sienna: [160, 82, 45],
	  silver: [192, 192, 192],
	  skyblue: [135, 206, 235],
	  slateblue: [106, 90, 205],
	  slategray: [119, 128, 144],
	  slategrey: [119, 128, 144],
	  snow: [255, 255, 250],
	  springgreen: [0, 255, 127],
	  steelblue: [70, 130, 180],
	  tan: [210, 180, 140],
	  teal: [0, 128, 128],
	  thistle: [216, 191, 216],
	  tomato: [255, 99, 71],
	  turquoise: [64, 224, 208],
	  violet: [238, 130, 238],
	  wheat: [245, 222, 179],
	  white: [255, 255, 255],
	  whitesmoke: [245, 245, 245],
	  yellow: [255, 255, 0],
	  yellowgreen: [154, 205, 5]
	};


/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = function(r, g, b) {
	  return [
	    _convert(r),
	    _convert(g),
	    _convert(b)
	  ].join('');
	
	  function _convert(num) {
	    var hex = num.toString(16);
	    return hex.length===1 ? '0'+hex : hex;
	  }
	};


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var hsv2rgb = __webpack_require__(102);
	var rgb2hex = __webpack_require__(104);
	
	module.exports = function(h, s, v) {
	  var rgb = hsv2rgb(h, s, v);
	  return rgb2hex(rgb.r, rgb.g, rgb.b);
	};


/***/ },
/* 106 */
/***/ function(module, exports) {

	// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
	module.exports = function(r, g, b) {
	  var h, s, v;
	  var max = Math.max(r, g, b);
	  var min = Math.min(r, g, b);
	  var delta = max - min;
	
	  // hue
	  if(delta === 0) {
	    h = 0;
	  } else if(r === max) {
	    h = ((g-b)/delta) % 6;
	  } else if(g === max) {
	    h = (b-r)/delta + 2;
	  } else if(b === max) {
	    h = (r-g)/delta + 4;
	  }
	
	  h = Math.round(h*60);
	  if(h < 0) h += 360;
	
	  // saturation
	  s = Math.round((max === 0 ? 0 : (delta/max)) * 100);
	
	  // value
	  v = Math.round(max/255*100);
	
	  return {
	    h: h,
	    s: s,
	    v: v
	  };
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var autobind_1 = __webpack_require__(28);
	var css_1 = __webpack_require__(7);
	var EventGroup_1 = __webpack_require__(14);
	var ColorSlider = (function (_super) {
	    __extends(ColorSlider, _super);
	    function ColorSlider(props) {
	        _super.call(this, props);
	        var initialValue = this.props.initialValue;
	        this._events = new EventGroup_1.EventGroup(this);
	        this.state = {
	            isAdjusting: false,
	            origin: null,
	            currentValue: initialValue
	        };
	    }
	    ColorSlider.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    ColorSlider.prototype.render = function () {
	        var _a = this.props, className = _a.className, minValue = _a.minValue, maxValue = _a.maxValue, overlayStyle = _a.overlayStyle;
	        var _b = this.state, currentValue = _b.currentValue, isAdjusting = _b.isAdjusting;
	        var currentPercentage = 100 * (currentValue - minValue) / (maxValue - minValue);
	        return (React.createElement("div", {ref: 'root', className: css_1.css('ms-ColorPicker-slider', className, {
	            'is-adjusting': isAdjusting
	        }), onMouseDown: this._onMouseDown}, 
	            React.createElement("div", {className: 'ms-ColorPicker-sliderOverlay', style: overlayStyle}), 
	            React.createElement("div", {className: 'ms-ColorPicker-thumb is-slider', style: { left: currentPercentage + '%' }})));
	    };
	    ColorSlider.prototype._onMouseDown = function (ev) {
	        this._events.on(window, 'mousemove', this._onMouseMove, true);
	        this._events.on(window, 'mouseup', this._onMouseUp, true);
	        this._onMouseMove(ev);
	    };
	    ColorSlider.prototype._onMouseMove = function (ev) {
	        var _a = this.props, onChanged = _a.onChanged, minValue = _a.minValue, maxValue = _a.maxValue;
	        var rectSize = this.refs.root.getBoundingClientRect();
	        var currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
	        var newValue = Math.min(maxValue, Math.max(minValue, currentPercentage * maxValue));
	        this.setState({
	            isAdjusting: true,
	            currentValue: newValue
	        });
	        if (onChanged) {
	            onChanged(newValue);
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    ColorSlider.prototype._onMouseUp = function (ev) {
	        this._events.off();
	        this.setState({
	            isAdjusting: false,
	            origin: null
	        });
	    };
	    ColorSlider.defaultProps = {
	        minValue: 0,
	        maxValue: 100,
	        thumbColor: 'inherit',
	        initialValue: 0
	    };
	    __decorate([
	        autobind_1.autobind
	    ], ColorSlider.prototype, "_onMouseDown", null);
	    __decorate([
	        autobind_1.autobind
	    ], ColorSlider.prototype, "_onMouseMove", null);
	    __decorate([
	        autobind_1.autobind
	    ], ColorSlider.prototype, "_onMouseUp", null);
	    return ColorSlider;
	}(React.Component));
	exports.ColorSlider = ColorSlider;
	


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-ColorPicker{position:relative;max-width:300px}.ms-ColorPicker-panel{padding:16px}.ms-ColorPicker-colorRect{position:relative;margin-bottom:10px}.ms-ColorPicker-rectContainer{position:relative}.ms-ColorPicker-capture{position:absolute;left:0;top:0;bottom:0;right:0;background:rgba(255,0,0,.1)}.ms-ColorPicker-rectContainer.is-adjusting .ms-ColorPicker-capture{position:fixed}.ms-ColorPicker-thumb{position:absolute;width:20px;height:20px;background:#fff;border:1px solid rgba(255,255,255,.8);border-radius:50%;box-shadow:0 0 15px -5px #000;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ms-ColorPicker-thumb.is-slider{top:50%}.ms-ColorPicker-light{position:absolute;left:0;right:0;top:0;bottom:0;background:-webkit-linear-gradient(left,#fff 0,transparent 100%);background:linear-gradient(to right,#fff 0,transparent 100%)}.ms-ColorPicker-dark{position:absolute;left:0;right:0;top:0;bottom:0;background:-webkit-linear-gradient(top,transparent 0,#000 100%);background:linear-gradient(to bottom,transparent 0,#000 100%)}.ms-ColorPicker-slider{position:relative;height:20px;margin-bottom:5px;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box}.ms-ColorPicker-slider.is-hue{background:-webkit-linear-gradient(right,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%);background:linear-gradient(to left,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%)}.ms-ColorPicker-slider.is-alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)}.ms-ColorPicker-sliderOverlay{content:'';position:absolute;left:0;right:0;top:0;bottom:0}.ms-ColorPicker-input{width:100%;border:none;box-sizing:border-box;height:30px}.ms-ColorPicker-input.ms-TextField{padding-right:2px}.ms-ColorPicker-input .ms-TextField-field{min-width:auto;padding:5px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(110));
	


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(111));
	


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(21);
	var ContextualMenu_1 = __webpack_require__(33);
	var EventGroup_1 = __webpack_require__(14);
	var DirectionalHint_1 = __webpack_require__(36);
	var autobind_1 = __webpack_require__(28);
	var css_1 = __webpack_require__(7);
	var object_1 = __webpack_require__(8);
	var properties_1 = __webpack_require__(11);
	var Icon_1 = __webpack_require__(58);
	__webpack_require__(112);
	var OVERFLOW_KEY = 'overflow';
	var OVERFLOW_WIDTH = 41.5;
	var CommandBar = (function (_super) {
	    __extends(CommandBar, _super);
	    function CommandBar(props) {
	        _super.call(this, props);
	        this.state = this._getStateFromProps(props);
	        this._id = object_1.getId('CommandBar');
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    CommandBar.prototype.componentDidMount = function () {
	        this._updateItemMeasurements();
	        this._updateRenderedItems();
	        this._events.on(window, 'resize', this._updateRenderedItems);
	    };
	    CommandBar.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    CommandBar.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState(this._getStateFromProps(nextProps));
	        this._commandItemWidths = null;
	    };
	    CommandBar.prototype.componentDidUpdate = function (prevProps, prevStates) {
	        if (!this._commandItemWidths) {
	            this._updateItemMeasurements();
	            this._updateRenderedItems();
	        }
	    };
	    CommandBar.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, isSearchBoxVisible = _a.isSearchBoxVisible, searchPlaceholderText = _a.searchPlaceholderText, className = _a.className;
	        var _b = this.state, renderedItems = _b.renderedItems, contextualMenuItems = _b.contextualMenuItems, expandedMenuItemKey = _b.expandedMenuItemKey, expandedMenuId = _b.expandedMenuId, renderedOverflowItems = _b.renderedOverflowItems, contextualMenuTarget = _b.contextualMenuTarget, renderedFarItems = _b.renderedFarItems;
	        var searchBox;
	        if (isSearchBoxVisible) {
	            searchBox = (React.createElement("div", {className: 'ms-CommandBarSearch', ref: 'searchSurface'}, 
	                React.createElement("input", {className: 'ms-CommandBarSearch-input', type: 'text', placeholder: searchPlaceholderText}), 
	                React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'}, 
	                    React.createElement("i", {className: 'ms-Icon ms-Icon--Search'})
	                ), 
	                React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'}, 
	                    React.createElement("i", {className: 'ms-Icon ms-Icon--Cancel'})
	                )));
	        }
	        return (React.createElement("div", {className: css_1.css('ms-CommandBar', className), ref: 'commandBarRegion'}, 
	            searchBox, 
	            React.createElement(FocusZone_1.FocusZone, {ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.horizontal, rootProps: { role: 'menubar' }}, 
	                React.createElement("div", {className: 'ms-CommandBar-primaryCommands', ref: 'commandSurface'}, renderedItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey)); }).concat((renderedOverflowItems && renderedOverflowItems.length) ? [
	                    React.createElement("div", {className: 'ms-CommandBarItem', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, 
	                        React.createElement("button", {id: this._id + OVERFLOW_KEY, className: css_1.css('ms-CommandBarItem-link', { 'is-expanded': (expandedMenuItemKey === OVERFLOW_KEY) }), onClick: this._onOverflowClick, role: 'menuitem', "aria-label": this.props.elipisisAriaLabel || '', "aria-haspopup": true, "data-automation-id": 'commandBarOverflow'}, 
	                            React.createElement("i", {className: 'ms-CommandBarItem-overflow ms-Icon ms-Icon--More'})
	                        )
	                    )
	                ] : [])), 
	                React.createElement("div", {className: 'ms-CommandBar-sideCommands', ref: 'farCommandSurface'}, renderedFarItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey, true)); }))), 
	            (contextualMenuItems) ?
	                (React.createElement(ContextualMenu_1.ContextualMenu, {labelElementId: expandedMenuId, className: 'ms-CommandBar-menuHost', items: contextualMenuItems, targetElement: contextualMenuTarget, onDismiss: this._onContextMenuDismiss, isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge})) : (null)));
	    };
	    CommandBar.prototype.focus = function () {
	        this.refs.focusZone.focus();
	    };
	    CommandBar.prototype._renderItemInCommandBar = function (item, index, expandedMenuItemKey, isFarItem) {
	        var _this = this;
	        var itemKey = item.key || String(index);
	        var className = css_1.css(item.onClick ? 'ms-CommandBarItem-link' : 'ms-CommandBarItem-text', !item.name && 'ms-CommandBarItem--noName');
	        var classNameValue = css_1.css(className, { 'is-expanded': (expandedMenuItemKey === item.key) });
	        var hasIcon = !!item.icon || !!item.iconProps;
	        return React.createElement("div", {className: css_1.css('ms-CommandBarItem', item.className), key: itemKey, ref: itemKey}, (function () {
	            if (item.onClick || item.items) {
	                return React.createElement("button", __assign({}, properties_1.getNativeProps(item, properties_1.buttonProperties), {id: _this._id + item.key, className: classNameValue, onClick: function (ev) { return _this._onItemClick(ev, item); }, "data-command-key": index, "aria-haspopup": !!(item.items && item.items.length), role: 'menuitem', "aria-label": item.ariaLabel || item.name}), 
	                    (hasIcon) ? _this._renderIcon(item) : (null), 
	                    (!!item.name) && React.createElement("span", {className: 'ms-CommandBarItem-commandText'}, item.name), 
	                    (item.items && item.items.length) ? (React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--ChevronDown'})) : (null));
	            }
	            else {
	                return React.createElement("div", __assign({}, properties_1.getNativeProps(item, properties_1.divProperties), {id: _this._id + item.key, className: classNameValue, "data-command-key": index, "aria-haspopup": !!(item.items && item.items.length)}), 
	                    (hasIcon) ? _this._renderIcon(item) : (null), 
	                    React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular', "aria-hidden": 'true', role: 'presentation'}, item.name));
	            }
	        })());
	    };
	    CommandBar.prototype._renderIcon = function (item) {
	        // Only present to allow continued use of item.icon which is deprecated.
	        var iconProps = item.iconProps ? item.iconProps : {
	            iconName: Icon_1.IconName[item.icon]
	        };
	        // Use the default icon color for the known icon names
	        var iconColorClassName = iconProps.iconName === Icon_1.IconName.None ? '' : 'ms-CommandBarItem-iconColor';
	        var iconClassName = css_1.css('ms-CommandBarItem-icon', iconColorClassName, iconProps.className);
	        return React.createElement(Icon_1.Icon, __assign({}, iconProps, {className: iconClassName}));
	    };
	    CommandBar.prototype._updateItemMeasurements = function () {
	        // the generated width for overflow is 35 in chrome, 38 in IE, but the actual value is 41.5
	        if (this.refs[OVERFLOW_KEY] || (this.props.overflowItems && this.props.overflowItems.length)) {
	            this._overflowWidth = OVERFLOW_WIDTH;
	        }
	        else {
	            this._overflowWidth = 0;
	        }
	        if (!this._commandItemWidths) {
	            this._commandItemWidths = {};
	        }
	        for (var i = 0; i < this.props.items.length; i++) {
	            var item = this.props.items[i];
	            if (!this._commandItemWidths[item.key]) {
	                var el = this.refs[item.key];
	                if (el) {
	                    this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
	                }
	            }
	        }
	    };
	    CommandBar.prototype._updateRenderedItems = function () {
	        var _a = this.props, items = _a.items, overflowItems = _a.overflowItems;
	        var commandSurface = this.refs.commandSurface;
	        var farCommandSurface = this.refs.farCommandSurface;
	        var commandBarRegion = this.refs.commandBarRegion;
	        var searchSurface = this.refs.searchSurface;
	        var renderedItems = [].concat(items);
	        var renderedOverflowItems = overflowItems;
	        var consumedWidth = 0;
	        var isOverflowVisible = overflowItems && overflowItems.length;
	        var style = window.getComputedStyle(commandSurface);
	        var availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
	        if (searchSurface) {
	            availableWidth -= searchSurface.getBoundingClientRect().width;
	        }
	        if (farCommandSurface) {
	            availableWidth -= farCommandSurface.getBoundingClientRect().width;
	        }
	        if (isOverflowVisible) {
	            availableWidth -= this._overflowWidth;
	        }
	        for (var i = 0; i < renderedItems.length; i++) {
	            var item = renderedItems[i];
	            var itemWidth = this._commandItemWidths[item.key];
	            if ((consumedWidth + itemWidth) >= availableWidth) {
	                if (i > 0 && !isOverflowVisible && (availableWidth - consumedWidth) < OVERFLOW_WIDTH) {
	                    i--;
	                }
	                renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
	                break;
	            }
	            else {
	                consumedWidth += itemWidth;
	            }
	        }
	        this.setState({
	            renderedItems: renderedItems,
	            renderedOverflowItems: renderedOverflowItems,
	            expandedMenuItemKey: null,
	            contextualMenuItems: null,
	            contextualMenuTarget: null
	        });
	    };
	    CommandBar.prototype._onItemClick = function (ev, item) {
	        if (item.key === this.state.expandedMenuItemKey || !item.items || !item.items.length) {
	            this._onContextMenuDismiss();
	        }
	        else {
	            this.setState({
	                expandedMenuId: ev.currentTarget.id,
	                expandedMenuItemKey: item.key,
	                contextualMenuItems: item.items,
	                contextualMenuTarget: ev.currentTarget
	            });
	        }
	        if (item.onClick) {
	            item.onClick(ev, item);
	        }
	    };
	    CommandBar.prototype._onOverflowClick = function (ev) {
	        if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
	            this._onContextMenuDismiss();
	        }
	        else {
	            this.setState({
	                expandedMenuId: ev.currentTarget.id,
	                expandedMenuItemKey: OVERFLOW_KEY,
	                contextualMenuItems: this.state.renderedOverflowItems,
	                contextualMenuTarget: ev.currentTarget
	            });
	        }
	    };
	    CommandBar.prototype._onContextMenuDismiss = function (ev) {
	        if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget)) {
	            this.setState({
	                expandedMenuItemKey: null,
	                contextualMenuItems: null,
	                contextualMenuTarget: null
	            });
	        }
	        else {
	            ev.stopPropagation();
	            ev.preventDefault();
	        }
	    };
	    CommandBar.prototype._getStateFromProps = function (nextProps) {
	        return {
	            renderedItems: nextProps.items || [],
	            renderedOverflowItems: null,
	            contextualMenuItems: null,
	            renderedFarItems: nextProps.farItems || null
	        };
	    };
	    CommandBar.defaultProps = {
	        items: [],
	        overflowItems: [],
	        farItems: []
	    };
	    __decorate([
	        autobind_1.autobind
	    ], CommandBar.prototype, "_onOverflowClick", null);
	    __decorate([
	        autobind_1.autobind
	    ], CommandBar.prototype, "_onContextMenuDismiss", null);
	    return CommandBar;
	}(React.Component));
	exports.CommandBar = CommandBar;
	


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-CommandBar{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";height:40px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-CommandBar-primaryCommands{position:absolute;overflow:hidden;display:inline;vertical-align:top;line-height:40px;margin:0 20px}.ms-CommandBar-sideCommands{position:absolute}html[dir=ltr] .ms-CommandBar-sideCommands{right:0}html[dir=rtl] .ms-CommandBar-sideCommands{left:0}html[dir=ltr] .ms-CommandBar-sideCommands{text-align:right}html[dir=rtl] .ms-CommandBar-sideCommands{text-align:left}html[dir=ltr] .ms-CommandBar-sideCommands{padding-right:20px}html[dir=rtl] .ms-CommandBar-sideCommands{padding-left:20px}.ms-CommandBarItem{display:inline-block;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";height:40px;outline:transparent;vertical-align:top;padding:0 4px}@media screen and (-ms-high-contrast:active){.ms-CommandBarItem{height:38px;outline:0}html[dir=ltr] .ms-CommandBarItem{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=ltr] .ms-CommandBarItem{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-CommandBarItem{height:38px;outline:0}html[dir=ltr] .ms-CommandBarItem{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=ltr] .ms-CommandBarItem{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-CommandBarItem-chevronDown,.ms-CommandBarItem-commandText{display:inline-block;padding:0 4px;vertical-align:top}.ms-CommandBarItem-text{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;background:0 0;border:none;line-height:40px;min-width:20px;text-align:center;padding:0 4px;display:block;height:100%}.ms-CommandBarItem-text::-moz-focus-inner{border:0}.ms-CommandBarItem-text{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-CommandBarItem-text:focus:after{content:'';position:absolute;top:2px;right:2px;bottom:2px;left:2px;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-CommandBarItem-text.ms-CommandBarItem--noName{padding:0 8px}.ms-CommandBarItem-link{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;background:0 0;border:none;line-height:40px;min-width:20px;text-align:center;padding:0 4px;display:block;height:100%;cursor:pointer}.ms-CommandBarItem-link::-moz-focus-inner{border:0}.ms-CommandBarItem-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-CommandBarItem-link:focus:after{content:'';position:absolute;top:2px;right:2px;bottom:2px;left:2px;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-CommandBarItem-link.ms-CommandBarItem--noName{padding:0 8px}@media screen and (-ms-high-contrast:active){html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=ltr] .ms-CommandBarItem-link.is-expanded,html[dir=ltr] .ms-CommandBarItem-link:hover{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarItem-link.is-expanded,html[dir=rtl] .ms-CommandBarItem-link:hover{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-CommandBarItem-link:hover:not[disabled]{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-CommandBarItem-link:hover:not[disabled] .ms-CommandBarItem-icon{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-CommandBarItem-link:hover:not[disabled] .ms-CommandBarItem-chevronDown{color:" }, { "theme": "neutralPrimaryAlt", "defaultValue": "#3c3c3c" }, { "rawString": "}.ms-CommandBarItem-link:hover:not[disabled] .ms-CommandBarItem-overflow{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-CommandBarItem-link.is-expanded{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-CommandBarItem-link.is-expanded .ms-CommandBarItem-icon{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-CommandBarItem-link.is-expanded .ms-CommandBarItem-chevronDown{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-CommandBarItem-link.is-expanded .ms-CommandBarItem-overflow{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-CommandBarItem-link.is-expanded:hover{background-color:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-CommandBarItem-link[disabled]{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:default;pointer-events:none}.ms-CommandBarItem-link[disabled] .ms-CommandBarItem-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-CommandBarItem-icon{font-size:16px;padding:0 4px}.ms-CommandBarItem-iconColor{color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-CommandBarItem-chevronDown{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:12px}.ms-CommandBarItem-overflow{font-size:18px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";padding:0 7px}.ms-CommandBarSearch{width:208px;max-width:208px;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:40px;position:relative;box-sizing:border-box;border-color:transparent}html[dir=ltr] .ms-CommandBarSearch{float:left}html[dir=rtl] .ms-CommandBarSearch{float:right}html[dir=ltr] .ms-CommandBarSearch{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-CommandBarSearch{z-index:10}html[dir=ltr] .ms-CommandBarSearch{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarSearch{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-CommandBarSearch:before{position:absolute;content:' ';right:0;bottom:0;left:0;margin:0 8px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-CommandBarSearch:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){html[dir=ltr] .ms-CommandBarSearch:hover{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch:hover{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=ltr] .ms-CommandBarSearch:hover{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch:hover{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarSearch:hover{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch:hover{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=ltr] .ms-CommandBarSearch:hover{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch:hover{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-CommandBarSearch-input{height:40px;padding:8px 8px 8px 0;border:none;background-color:transparent;width:100%;box-sizing:border-box;outline:0;cursor:pointer;font-size:14px;-webkit-appearance:none;-webkit-border-radius:0}html[dir=ltr] .ms-CommandBarSearch-input{border-left:42px solid transparent}html[dir=rtl] .ms-CommandBarSearch-input{border-right:42px solid transparent}@media screen and (-ms-high-contrast:active){html[dir=ltr] .ms-CommandBarSearch-input{border-left:40px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch-input{border-right:40px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .ms-CommandBarSearch-input{border-left:40px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .ms-CommandBarSearch-input{border-right:40px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-CommandBarSearch-input::-ms-clear{display:none}.ms-CommandBarSearch-iconSearchWrapper{display:block}.ms-CommandBarSearch-iconArrowWrapper{display:none}.ms-CommandBarSearch-iconArrowWrapper,.ms-CommandBarSearch-iconSearchWrapper{top:0}html[dir=ltr] .ms-CommandBarSearch-iconArrowWrapper,html[dir=ltr] .ms-CommandBarSearch-iconSearchWrapper{padding-left:17px}html[dir=rtl] .ms-CommandBarSearch-iconArrowWrapper,html[dir=rtl] .ms-CommandBarSearch-iconSearchWrapper{padding-right:17px}html[dir=ltr] .ms-CommandBarSearch-iconArrowWrapper,html[dir=ltr] .ms-CommandBarSearch-iconSearchWrapper{padding-right:8px}html[dir=rtl] .ms-CommandBarSearch-iconArrowWrapper,html[dir=rtl] .ms-CommandBarSearch-iconSearchWrapper{padding-left:8px}.ms-CommandBarSearch-iconClearWrapper{display:none;top:1px;z-index:10}html[dir=ltr] .ms-CommandBarSearch-iconClearWrapper{right:0}html[dir=rtl] .ms-CommandBarSearch-iconClearWrapper{left:0}.ms-CommandBarSearch.is-active{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-CommandBarSearch.is-active:hover{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{cursor:text}html[dir=ltr] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-right:40px}html[dir=rtl] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-left:40px}html[dir=ltr] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{border-left-width:8px}html[dir=rtl] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{border-right-width:8px}html[dir=ltr] .ms-CommandBarSearch.is-active.ms-CommandBarSearch--hasBack .ms-CommandBarSearch-input{border-left-width:40px}html[dir=rtl] .ms-CommandBarSearch.is-active.ms-CommandBarSearch--hasBack .ms-CommandBarSearch-input{border-right-width:40px}.ms-CommandBarSearch.is-active .ms-CommandBarSearch-iconSearchWrapper{display:none}.ms-CommandBarSearch.is-active.ms-CommandBarSearch--hasBack .ms-CommandBarSearch-iconArrowWrapper{display:block}html[dir=ltr] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-right:40px}html[dir=rtl] .ms-CommandBarSearch.is-active .ms-CommandBarSearch-input{padding-left:40px}.ms-CommandBarSearch.is-active .ms-CommandBarSearch-iconClearWrapper{display:block}.ms-CommandBarSearch-iconWrapper{height:40px;line-height:40px;cursor:pointer;position:absolute;text-align:center}.ms-CommandBarSearch .ms-Icon:before{font-size:16px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-CommandBarSearch-input,.ms-CommandBarSearch-input::-webkit-input-placeholder{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(114));
	


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(115));
	


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Calendar_1 = __webpack_require__(65);
	var Callout_1 = __webpack_require__(37);
	var DirectionalHint_1 = __webpack_require__(36);
	var TextField_1 = __webpack_require__(89);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(116);
	var DatePicker = (function (_super) {
	    __extends(DatePicker, _super);
	    function DatePicker(props) {
	        _super.call(this);
	        var formatDate = props.formatDate, value = props.value;
	        this.state = {
	            selectedDate: value || new Date(),
	            formattedDate: (formatDate && value) ? formatDate(value) : '',
	            isDatePickerShown: false,
	            errorMessage: null
	        };
	        this._preventFocusOpeningPicker = false;
	    }
	    DatePicker.prototype.componentWillReceiveProps = function (nextProps) {
	        var formatDate = nextProps.formatDate, isRequired = nextProps.isRequired, strings = nextProps.strings, value = nextProps.value;
	        var errorMessage = (isRequired && !value) ? (strings.isRequiredErrorMessage || '*') : null;
	        this.setState({
	            selectedDate: value || new Date(),
	            formattedDate: (formatDate && value) ? formatDate(value) : '',
	            errorMessage: errorMessage
	        });
	    };
	    DatePicker.prototype.render = function () {
	        var _this = this;
	        var rootClass = 'ms-DatePicker';
	        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, strings = _a.strings, label = _a.label, isRequired = _a.isRequired, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, allowTextInput = _a.allowTextInput;
	        var _b = this.state, isDatePickerShown = _b.isDatePickerShown, formattedDate = _b.formattedDate, selectedDate = _b.selectedDate, errorMessage = _b.errorMessage;
	        return (React.createElement("div", {className: rootClass, ref: 'root'}, 
	            React.createElement("div", {ref: function (c) { return _this._datepicker = c; }}, 
	                React.createElement(TextField_1.TextField, {ariaLabel: ariaLabel, "aria-haspopup": 'true', required: isRequired, onKeyDown: this._onTextFieldKeyDown, onFocus: this._onTextFieldFocus, onBlur: this._onTextFieldBlur, onClick: this._onTextFieldClick, onChanged: this._onTextFieldChanged, errorMessage: errorMessage, label: label, placeholder: placeholder, iconClass: Utilities_1.css('ms-Icon ms-Icon--Calendar', label ? 'ms-DatePicker-event--with-label' : 'ms-DatePicker-event--without-label'), readOnly: !allowTextInput, value: formattedDate, ref: 'textField'})
	            ), 
	            isDatePickerShown && (React.createElement(Callout_1.Callout, {isBeakVisible: false, className: 'ms-DatePicker-callout', gapSpace: 0, doNotLayer: false, targetElement: this._datepicker, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._calendarDismissed, setInitialFocus: false}, 
	                React.createElement(Calendar_1.Calendar, {onSelectDate: this._onSelectDate, onDismiss: this._calendarDismissed, isMonthPickerVisible: this.props.isMonthPickerVisible, value: selectedDate, firstDayOfWeek: firstDayOfWeek, strings: strings, shouldFocusOnMount: true})
	            ))));
	    };
	    DatePicker.prototype._onSelectDate = function (date) {
	        var _a = this.props, formatDate = _a.formatDate, onSelectDate = _a.onSelectDate;
	        this.setState({
	            selectedDate: date,
	            isDatePickerShown: false,
	            formattedDate: formatDate && date ? formatDate(date) : '',
	        });
	        if (onSelectDate) {
	            onSelectDate(date);
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldFocus = function (ev) {
	        if (!this.props.allowTextInput) {
	            if (!this._preventFocusOpeningPicker) {
	                this._showDatePickerPopup();
	            }
	            else {
	                this._preventFocusOpeningPicker = false;
	            }
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldBlur = function (ev) {
	        this._validateTextInput();
	    };
	    ;
	    DatePicker.prototype._onTextFieldChanged = function (newValue) {
	        if (this.props.allowTextInput) {
	            if (this.state.isDatePickerShown) {
	                this._dismissDatePickerPopup();
	            }
	            var _a = this.props, isRequired = _a.isRequired, value = _a.value, strings = _a.strings;
	            this.setState({
	                errorMessage: (isRequired && !value) ? (strings.isRequiredErrorMessage || '*') : null,
	                formattedDate: newValue
	            });
	        }
	    };
	    DatePicker.prototype._onTextFieldKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.enter:
	                ev.preventDefault();
	                ev.stopPropagation();
	                if (!this.state.isDatePickerShown) {
	                    this._showDatePickerPopup();
	                }
	                else {
	                    // When DatePicker allows input date string directly,
	                    // it is expected to hit another enter to close the popup
	                    if (this.props.allowTextInput) {
	                        this._dismissDatePickerPopup();
	                    }
	                }
	                break;
	            case Utilities_1.KeyCodes.escape:
	                this._handleEscKey(ev);
	                break;
	            default:
	                break;
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldClick = function (ev) {
	        if (!this.state.isDatePickerShown) {
	            this._showDatePickerPopup();
	        }
	        else {
	            if (this.props.allowTextInput) {
	                this.setState({
	                    isDatePickerShown: false
	                });
	            }
	        }
	    };
	    DatePicker.prototype._showDatePickerPopup = function () {
	        if (!this.state.isDatePickerShown) {
	            this._preventFocusOpeningPicker = true;
	            this._focusOnSelectedDateOnUpdate = true;
	            this.setState({
	                isDatePickerShown: true,
	                navigatedDate: this.state.selectedDate,
	                errorMessage: ''
	            });
	        }
	    };
	    DatePicker.prototype._dismissDatePickerPopup = function () {
	        if (this.state.isDatePickerShown) {
	            this.setState({
	                isDatePickerShown: false
	            });
	            this._validateTextInput();
	        }
	    };
	    /**
	     * Callback for closing the calendar callout
	     */
	    DatePicker.prototype._calendarDismissed = function () {
	        this._preventFocusOpeningPicker = true;
	        this._dismissDatePickerPopup();
	    };
	    DatePicker.prototype._handleEscKey = function (ev) {
	        this._calendarDismissed();
	    };
	    DatePicker.prototype._validateTextInput = function () {
	        var _a = this.props, isRequired = _a.isRequired, allowTextInput = _a.allowTextInput, strings = _a.strings, formatDate = _a.formatDate, parseDateFromString = _a.parseDateFromString, onSelectDate = _a.onSelectDate;
	        var inputValue = this.state.formattedDate;
	        // Do validation only if DatePicker's popup is dismissed
	        if (this.state.isDatePickerShown) {
	            return;
	        }
	        // Check when DatePicker is a required field but has NO input value
	        if (isRequired && !inputValue) {
	            this.setState({
	                // Since fabic react doesn't have loc support yet
	                // use the symbol '*' to represent error message
	                errorMessage: strings.isRequiredErrorMessage || '*'
	            });
	            return;
	        }
	        if (allowTextInput) {
	            var date = null;
	            if (inputValue) {
	                date = parseDateFromString(inputValue);
	                if (!date) {
	                    this.setState({
	                        errorMessage: strings.invalidInputErrorMessage || '*'
	                    });
	                }
	                else {
	                    this.setState({
	                        selectedDate: date,
	                        formattedDate: formatDate && date ? formatDate(date) : '',
	                        errorMessage: ''
	                    });
	                }
	            }
	            else {
	                // No input date string shouldn't be an error if field is not required
	                this.setState({
	                    errorMessage: ''
	                });
	            }
	            // Execute onSelectDate callback
	            if (onSelectDate) {
	                // If no input date string or input date string is invalid
	                // date variable will be null, callback should expect null value for this case
	                onSelectDate(date);
	            }
	        }
	    };
	    DatePicker.defaultProps = {
	        allowTextInput: false,
	        formatDate: function (date) {
	            if (date) {
	                return date.toDateString();
	            }
	            return '';
	        },
	        parseDateFromString: function (dateStr) {
	            var date = Date.parse(dateStr);
	            if (date) {
	                return new Date(date);
	            }
	            return null;
	        },
	        firstDayOfWeek: Calendar_1.DayOfWeek.Sunday,
	        isRequired: false,
	        isMonthPickerVisible: true,
	        strings: null
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_onSelectDate", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_onTextFieldFocus", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_onTextFieldBlur", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_onTextFieldChanged", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_onTextFieldKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_onTextFieldClick", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_dismissDatePickerPopup", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_calendarDismissed", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_handleEscKey", null);
	    __decorate([
	        Utilities_1.autobind
	    ], DatePicker.prototype, "_validateTextInput", null);
	    return DatePicker;
	}(Utilities_1.BaseComponent));
	exports.DatePicker = DatePicker;
	


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DatePicker{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:17px}.ms-DatePicker .ms-TextField{position:relative}.ms-DatePicker .ms-TextField input::-ms-clear{display:none}.ms-DatePicker .ms-TextField input[readonly]{cursor:pointer}.ms-DatePicker-event--with-label{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:20px;line-height:20px;pointer-events:none;position:absolute;top:35px}html[dir=ltr] .ms-DatePicker-event--with-label{right:9px}html[dir=rtl] .ms-DatePicker-event--with-label{left:9px}.ms-DatePicker-event--without-label{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:20px;line-height:20px;pointer-events:none;position:absolute;top:7px}html[dir=ltr] .ms-DatePicker-event--without-label{right:9px}html[dir=rtl] .ms-DatePicker-event--without-label{left:9px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(118));
	


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(119));
	__export(__webpack_require__(124));
	__export(__webpack_require__(125));
	__export(__webpack_require__(132));
	__export(__webpack_require__(133));
	


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(120));
	__export(__webpack_require__(121));
	__export(__webpack_require__(122));
	__export(__webpack_require__(123));
	


/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	exports.SELECTION_CHANGE = 'change';
	(function (SelectionMode) {
	    SelectionMode[SelectionMode["none"] = 0] = "none";
	    SelectionMode[SelectionMode["single"] = 1] = "single";
	    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
	})(exports.SelectionMode || (exports.SelectionMode = {}));
	var SelectionMode = exports.SelectionMode;
	(function (SelectionDirection) {
	    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
	    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
	})(exports.SelectionDirection || (exports.SelectionDirection = {}));
	var SelectionDirection = exports.SelectionDirection;
	


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interfaces_1 = __webpack_require__(120);
	var EventGroup_1 = __webpack_require__(14);
	var Selection = (function () {
	    function Selection(options) {
	        if (options === void 0) { options = {}; }
	        var onSelectionChanged = options.onSelectionChanged, getKey = options.getKey, _a = options.canSelectItem, canSelectItem = _a === void 0 ? function (item) { return true; } : _a;
	        this.getKey = getKey || (function (item, index) { return (item ? item.key : String(index)); });
	        this._changeEventSuppressionCount = 0;
	        this._exemptedCount = 0;
	        this._anchoredIndex = 0;
	        this._unselectableCount = 0;
	        this.setItems([], true);
	        this._onSelectionChanged = onSelectionChanged;
	        this.canSelectItem = canSelectItem;
	    }
	    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
	        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
	        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
	            this._hasChanged = false;
	            if (!suppressChange) {
	                this._change();
	            }
	        }
	    };
	    /**
	     * Selection needs the items, call this method to set them. If the set
	     * of items is the same, this will re-evaluate selection and index maps.
	     * Otherwise, shouldClear should be set to true, so that selection is
	     * cleared.
	     */
	    Selection.prototype.setItems = function (items, shouldClear) {
	        if (shouldClear === void 0) { shouldClear = true; }
	        var newKeyToIndexMap = {};
	        var newUnselectableIndices = {};
	        var hasSelectionChanged = false;
	        this.setChangeEvents(false);
	        // Reset the unselectable count.
	        this._unselectableCount = 0;
	        // Build lookup table for quick selection evaluation.
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item) {
	                newKeyToIndexMap[this.getKey(item, i)] = i;
	            }
	            newUnselectableIndices[i] = item && !this.canSelectItem(item);
	            if (newUnselectableIndices[i]) {
	                this._unselectableCount++;
	            }
	        }
	        if (shouldClear) {
	            this.setAllSelected(false);
	        }
	        // Check the exemption list for discrepencies.
	        var newExemptedIndicies = {};
	        for (var indexProperty in this._exemptedIndices) {
	            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
	                var index = Number(indexProperty);
	                var item = this._items[index];
	                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
	                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
	                if (newIndex === undefined) {
	                    // We don't know the index of the item any more so it's either moved or removed.
	                    // In this case we reset the entire selection.
	                    this.setAllSelected(false);
	                    break;
	                }
	                else {
	                    // We know the new index of the item. update the existing exemption table.
	                    newExemptedIndicies[newIndex] = true;
	                    hasSelectionChanged = hasSelectionChanged || (newIndex !== index);
	                }
	            }
	        }
	        this._exemptedIndices = newExemptedIndicies;
	        this._keyToIndexMap = newKeyToIndexMap;
	        this._unselectableIndices = newUnselectableIndices;
	        this._items = items || [];
	        if (hasSelectionChanged) {
	            this._change();
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype.getItems = function () {
	        return this._items;
	    };
	    Selection.prototype.getSelection = function () {
	        if (!this._selectedItems) {
	            this._selectedItems = [];
	            for (var i = 0; i < this._items.length; i++) {
	                if (this.isIndexSelected(i)) {
	                    this._selectedItems.push(this._items[i]);
	                }
	            }
	        }
	        return this._selectedItems;
	    };
	    Selection.prototype.getSelectedCount = function () {
	        return this._isAllSelected ? (this._items.length - this._exemptedCount - this._unselectableCount) : (this._exemptedCount);
	    };
	    Selection.prototype.isRangeSelected = function (fromIndex, count) {
	        var endIndex = fromIndex + count;
	        for (var i = fromIndex; i < endIndex; i++) {
	            if (!this.isIndexSelected(i)) {
	                return false;
	            }
	        }
	        return true;
	    };
	    Selection.prototype.isAllSelected = function () {
	        var selectableCount = this._items.length - this._unselectableCount;
	        return ((this.count > 0) &&
	            (this._isAllSelected && this._exemptedCount === 0) ||
	            (!this._isAllSelected && (this._exemptedCount === selectableCount) && selectableCount > 0));
	    };
	    Selection.prototype.isKeySelected = function (key) {
	        var index = this._keyToIndexMap[key];
	        return this.isIndexSelected(index);
	    };
	    Selection.prototype.isIndexSelected = function (index) {
	        return !!((this.count > 0) &&
	            (this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
	            (!this._isAllSelected && this._exemptedIndices[index]));
	    };
	    Selection.prototype.setAllSelected = function (isAllSelected) {
	        var selectableCount = this._items ? (this._items.length - this._unselectableCount) : 0;
	        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
	            this._exemptedIndices = {};
	            this._exemptedCount = 0;
	            this._isAllSelected = isAllSelected;
	            this._updateCount();
	        }
	    };
	    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
	        var index = this._keyToIndexMap[key];
	        if (index >= 0) {
	            this.setIndexSelected(index, isSelected, shouldAnchor);
	        }
	    };
	    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
	        // Clamp the index.
	        index = Math.min(Math.max(0, index), this._items.length - 1);
	        // No-op on out of bounds selections.
	        if (index < 0 || index >= this._items.length) {
	            return;
	        }
	        var isExempt = this._exemptedIndices[index];
	        var hasChanged = false;
	        var canSelect = !this._unselectableIndices[index];
	        if (canSelect) {
	            // Determine if we need to remove the exemption.
	            if (isExempt && ((isSelected && this._isAllSelected) ||
	                (!isSelected && !this._isAllSelected))) {
	                hasChanged = true;
	                delete this._exemptedIndices[index];
	                this._exemptedCount--;
	            }
	            // Determine if we need to add the exemption.
	            if (!isExempt && ((isSelected && !this._isAllSelected) ||
	                (!isSelected && this._isAllSelected))) {
	                hasChanged = true;
	                this._exemptedIndices[index] = true;
	                this._exemptedCount++;
	            }
	            if (shouldAnchor) {
	                this._anchoredIndex = index;
	            }
	        }
	        if (hasChanged) {
	            this._updateCount();
	        }
	    };
	    Selection.prototype.selectToKey = function (key, clearSelection) {
	        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
	    };
	    Selection.prototype.selectToIndex = function (index, clearSelection) {
	        var anchorIndex = this._anchoredIndex || 0;
	        var startIndex = Math.min(index, anchorIndex);
	        var endIndex = Math.max(index, anchorIndex);
	        this.setChangeEvents(false);
	        if (clearSelection) {
	            this.setAllSelected(false);
	        }
	        for (; startIndex <= endIndex; startIndex++) {
	            this.setIndexSelected(startIndex, true, false);
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype.toggleAllSelected = function () {
	        this.setAllSelected(!this.isAllSelected());
	    };
	    Selection.prototype.toggleKeySelected = function (key) {
	        this.setKeySelected(key, !this.isKeySelected(key), true);
	    };
	    Selection.prototype.toggleIndexSelected = function (index) {
	        this.setIndexSelected(index, !this.isIndexSelected(index), true);
	    };
	    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
	        var isRangeSelected = this.isRangeSelected(fromIndex, count);
	        var endIndex = fromIndex + count;
	        this.setChangeEvents(false);
	        for (var i = fromIndex; i < endIndex; i++) {
	            this.setIndexSelected(i, !isRangeSelected, false);
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype._updateCount = function () {
	        this.count = this.getSelectedCount();
	        this._change();
	    };
	    Selection.prototype._change = function () {
	        if (this._changeEventSuppressionCount === 0) {
	            this._selectedItems = null;
	            EventGroup_1.EventGroup.raise(this, interfaces_1.SELECTION_CHANGE);
	            if (this._onSelectionChanged) {
	                this._onSelectionChanged();
	            }
	        }
	        else {
	            this._hasChanged = true;
	        }
	    };
	    return Selection;
	}());
	exports.Selection = Selection;
	


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interfaces_1 = __webpack_require__(120);
	var SelectionLayout = (function () {
	    function SelectionLayout(direction) {
	        this._direction = direction;
	    }
	    SelectionLayout.prototype.getItemIndexAbove = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.max(0, focusIndex - 1) : focusIndex;
	    };
	    SelectionLayout.prototype.getItemIndexBelow = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.min(items.length - 1, focusIndex + 1) : focusIndex;
	    };
	    SelectionLayout.prototype.getItemIndexLeft = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.max(0, focusIndex - 1);
	    };
	    SelectionLayout.prototype.getItemIndexRight = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.min(items.length - 1, focusIndex + 1);
	    };
	    return SelectionLayout;
	}());
	exports.SelectionLayout = SelectionLayout;
	


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	var SelectionLayout_1 = __webpack_require__(122);
	var interfaces_1 = __webpack_require__(120);
	var focus_1 = __webpack_require__(32);
	// Selection definitions:
	//
	// Anchor index: the point from which a range selection starts.
	// Focus index: the point from which layout movement originates from.
	//
	// These two can differ. Tests:
	//
	// If you start at index 5
	// Shift click to index 10
	//    The focus is 10, the anchor is 5.
	// If you shift click at index 0
	//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
	// If you click index 8
	//    The anchor and focus are set to 8.
	var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
	var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
	var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
	var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
	var SelectionZone = (function (_super) {
	    __extends(SelectionZone, _super);
	    function SelectionZone() {
	        _super.apply(this, arguments);
	    }
	    SelectionZone.prototype.componentDidMount = function () {
	        var win = Utilities_1.getWindow(this.refs.root);
	        // Track the latest modifier keys globally.
	        this._events.on(win, 'keydown keyup', this._updateModifiers);
	        this._events.on(win, 'click', this._tryClearOnEmptyClick);
	    };
	    SelectionZone.prototype.render = function () {
	        return (React.createElement("div", __assign({className: 'ms-SelectionZone', ref: 'root', onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onClick: this._onClick, onDoubleClick: this._onDoubleClick}, {
	            onMouseDownCapture: this.ignoreNextFocus,
	            onFocusCapture: this._onFocus
	        }), this.props.children));
	    };
	    /**
	     * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
	     * react to the event. Note that focus events in IE <= 11 will occur asynchronously after .focus() has
	     * been called on an element, so we need a flag to store the idea that we will bypass the "next"
	     * focus event that occurs. This method does that.
	     */
	    SelectionZone.prototype.ignoreNextFocus = function () {
	        this._shouldIgnoreFocus = true;
	    };
	    /**
	     * When we focus an item, for single/multi select scenarios, we should try to select it immediately
	     * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
	     * specially.
	     */
	    SelectionZone.prototype._onFocus = function (ev) {
	        var target = ev.target;
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
	        if (this._shouldIgnoreFocus || selectionMode === interfaces_1.SelectionMode.none) {
	            this._shouldIgnoreFocus = false;
	            return;
	        }
	        var isToggle = this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
	        var itemRoot = this._findItemRoot(target);
	        if (!isToggle && itemRoot) {
	            var index = this._getItemIndex(itemRoot);
	            if (isToggleModifierPressed) {
	                // set anchor only.
	                selection.setIndexSelected(index, selection.isIndexSelected(index), true);
	            }
	            else {
	                this._onItemSurfaceClick(ev, index);
	            }
	        }
	    };
	    SelectionZone.prototype._onMouseDown = function (ev) {
	        this._updateModifiers(ev);
	        var target = ev.target;
	        var itemRoot = this._findItemRoot(target);
	        while (target !== this.refs.root) {
	            if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
	                break;
	            }
	            else if (itemRoot) {
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
	                    break;
	                }
	                else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
	                    this._onInvokeMouseDown(ev, this._getItemIndex(itemRoot));
	                    break;
	                }
	                else if (target === itemRoot) {
	                    break;
	                }
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    SelectionZone.prototype._onClick = function (ev) {
	        this._updateModifiers(ev);
	        var target = ev.target;
	        var itemRoot = this._findItemRoot(target);
	        while (target !== this.refs.root) {
	            if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
	                this._onToggleAllClick(ev);
	                break;
	            }
	            else if (itemRoot) {
	                var index = this._getItemIndex(itemRoot);
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
	                    if (this._isShiftPressed) {
	                        this._onItemSurfaceClick(ev, index);
	                    }
	                    else {
	                        this._onToggleClick(ev, index);
	                    }
	                    break;
	                }
	                else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
	                    this._onInvokeClick(ev, index);
	                    break;
	                }
	                else if (target === itemRoot) {
	                    this._onItemSurfaceClick(ev, index);
	                    break;
	                }
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    /**
	     * In multi selection, if you double click within an item's root (but not within the invoke element or input elements),
	     * we should execute the invoke handler.
	     */
	    SelectionZone.prototype._onDoubleClick = function (ev) {
	        var target = ev.target;
	        var _a = this.props, selectionMode = _a.selectionMode, onItemInvoked = _a.onItemInvoked;
	        var itemRoot = this._findItemRoot(target);
	        if (itemRoot && onItemInvoked && selectionMode !== interfaces_1.SelectionMode.none && !this._isInputElement(target)) {
	            var index = this._getItemIndex(itemRoot);
	            while (target !== this.refs.root) {
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
	                    this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
	                    break;
	                }
	                else if (target === itemRoot) {
	                    this._onInvokeClick(ev, index);
	                    break;
	                }
	                target = Utilities_1.getParent(target);
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    SelectionZone.prototype._onKeyDown = function (ev) {
	        this._updateModifiers(ev);
	        var target = ev.target;
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var isSelectAllKey = ev.which === Utilities_1.KeyCodes.a && (this._isCtrlPressed || this._isMetaPressed);
	        var isClearSelectionKey = ev.which === Utilities_1.KeyCodes.escape;
	        // Ignore key downs from input elements.
	        if (this._isInputElement(target)) {
	            return;
	        }
	        // If ctrl-a is pressed, select all (if all are not already selected.)
	        if (isSelectAllKey && selectionMode === interfaces_1.SelectionMode.multiple && !selection.isAllSelected()) {
	            selection.setAllSelected(true);
	            ev.stopPropagation();
	            ev.preventDefault();
	            return;
	        }
	        // If escape is pressed, clear selection (if any are selected.)
	        if (isClearSelectionKey && selection.getSelectedCount() > 0) {
	            selection.setAllSelected(false);
	            ev.stopPropagation();
	            ev.preventDefault();
	            return;
	        }
	        var itemRoot = this._findItemRoot(target);
	        // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
	        if (itemRoot) {
	            var index = this._getItemIndex(itemRoot);
	            while (target !== this.refs.root) {
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
	                    // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
	                    // so we can no-op for any keydowns in this case.
	                    break;
	                }
	                else if (target === itemRoot) {
	                    if (ev.which === Utilities_1.KeyCodes.enter) {
	                        this._onInvokeClick(ev, index);
	                    }
	                    else if (ev.which === Utilities_1.KeyCodes.space) {
	                        this._onToggleClick(ev, index);
	                    }
	                    break;
	                }
	                target = Utilities_1.getParent(target);
	            }
	        }
	    };
	    SelectionZone.prototype._onToggleAllClick = function (ev) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        if (selectionMode === interfaces_1.SelectionMode.multiple) {
	            selection.toggleAllSelected();
	            ev.stopPropagation();
	            ev.preventDefault();
	        }
	    };
	    SelectionZone.prototype._onToggleClick = function (ev, index) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        if (selectionMode === interfaces_1.SelectionMode.multiple) {
	            selection.toggleIndexSelected(index);
	        }
	        else if (selectionMode === interfaces_1.SelectionMode.single) {
	            var isSelected = selection.isIndexSelected(index);
	            selection.setChangeEvents(false);
	            selection.setAllSelected(false);
	            selection.setIndexSelected(index, !isSelected, true);
	            selection.setChangeEvents(true);
	        }
	        else {
	            return;
	        }
	        ev.stopPropagation();
	        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
	        // for checkboxes if you use a checkbox for the toggle.
	    };
	    SelectionZone.prototype._onInvokeClick = function (ev, index) {
	        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
	        if (onItemInvoked) {
	            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
	        if (selectionMode === interfaces_1.SelectionMode.multiple) {
	            if (this._isShiftPressed) {
	                selection.selectToIndex(index, !isToggleModifierPressed);
	            }
	            else if (isToggleModifierPressed) {
	                selection.toggleIndexSelected(index);
	            }
	            else {
	                this._clearAndSelectIndex(index);
	            }
	        }
	        else if (selectionMode === interfaces_1.SelectionMode.single) {
	            this._clearAndSelectIndex(index);
	        }
	    };
	    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
	        var selection = this.props.selection;
	        // Only do work if item is not selected.
	        if (selection.isIndexSelected(index)) {
	            return;
	        }
	        this._clearAndSelectIndex(index);
	    };
	    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
	        if (this._isNonHandledClick(ev.target)) {
	            this.props.selection.setAllSelected(false);
	        }
	    };
	    SelectionZone.prototype._clearAndSelectIndex = function (index) {
	        var selection = this.props.selection;
	        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
	        if (!isAlreadySingleSelected) {
	            selection.setChangeEvents(false);
	            selection.setAllSelected(false);
	            selection.setIndexSelected(index, true, true);
	            selection.setChangeEvents(true);
	        }
	    };
	    /**
	     * We need to track the modifier key states so that when focus events occur, which do not contain
	     * modifier states in the Event object, we know how to behave.
	     */
	    SelectionZone.prototype._updateModifiers = function (ev) {
	        this._isShiftPressed = ev.shiftKey;
	        this._isCtrlPressed = ev.ctrlKey;
	        this._isMetaPressed = ev.metaKey;
	    };
	    SelectionZone.prototype._findItemRoot = function (target) {
	        var selection = this.props.selection;
	        while (target !== this.refs.root) {
	            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
	            var index = Number(indexValue);
	            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
	                break;
	            }
	            target = Utilities_1.getParent(target);
	        }
	        if (target === this.refs.root) {
	            return undefined;
	        }
	        return target;
	    };
	    SelectionZone.prototype._getItemIndex = function (itemRoot) {
	        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
	    };
	    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
	        var isToggle = false;
	        while (!isToggle && element !== this.refs.root) {
	            isToggle = element.getAttribute(attributeName) === 'true';
	            element = Utilities_1.getParent(element);
	        }
	        return isToggle;
	    };
	    SelectionZone.prototype._isInputElement = function (element) {
	        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
	    };
	    SelectionZone.prototype._isNonHandledClick = function (element) {
	        var doc = Utilities_1.getDocument();
	        if (doc && element) {
	            while (element !== doc.body) {
	                if (focus_1.isElementTabbable(element)) {
	                    return false;
	                }
	                element = Utilities_1.getParent(element);
	            }
	        }
	        return true;
	    };
	    SelectionZone.defaultProps = {
	        layout: new SelectionLayout_1.SelectionLayout(interfaces_1.SelectionDirection.vertical),
	        isMultiSelectEnabled: true,
	        isSelectedOnFocus: true,
	        selectionMode: interfaces_1.SelectionMode.multiple
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], SelectionZone.prototype, "ignoreNextFocus", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SelectionZone.prototype, "_onFocus", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SelectionZone.prototype, "_onMouseDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SelectionZone.prototype, "_onClick", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SelectionZone.prototype, "_onDoubleClick", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SelectionZone.prototype, "_onKeyDown", null);
	    return SelectionZone;
	}(Utilities_1.BaseComponent));
	exports.SelectionZone = SelectionZone;
	


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var DetailsList_Props_1 = __webpack_require__(125);
	var DetailsHeader_1 = __webpack_require__(126);
	var DetailsRow_1 = __webpack_require__(132);
	var FocusZone_1 = __webpack_require__(21);
	var GroupedList_1 = __webpack_require__(138);
	var List_1 = __webpack_require__(155);
	var withViewport_1 = __webpack_require__(159);
	var object_1 = __webpack_require__(8);
	var css_1 = __webpack_require__(7);
	var autobind_1 = __webpack_require__(28);
	var index_1 = __webpack_require__(119);
	var EventGroup_1 = __webpack_require__(14);
	var rtl_1 = __webpack_require__(31);
	var KeyCodes_1 = __webpack_require__(26);
	var DragDropHelper_1 = __webpack_require__(161);
	__webpack_require__(162);
	var MIN_COLUMN_WIDTH = 100; // this is the global min width
	var CHECKBOX_WIDTH = 36;
	var GROUP_EXPAND_WIDTH = 36;
	var DEFAULT_INNER_PADDING = 16;
	var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
	var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
	var DetailsList = (function (_super) {
	    __extends(DetailsList, _super);
	    function DetailsList(props) {
	        _super.call(this, props);
	        this._activeRows = {};
	        this._columnOverrides = {};
	        this._onColumnIsSizingChanged = this._onColumnIsSizingChanged.bind(this);
	        this._onColumnResized = this._onColumnResized.bind(this);
	        this._onColumnAutoResized = this._onColumnAutoResized.bind(this);
	        this._onRowDidMount = this._onRowDidMount.bind(this);
	        this._onRowWillUnmount = this._onRowWillUnmount.bind(this);
	        this._onToggleCollapse = this._onToggleCollapse.bind(this);
	        this._onActiveRowChanged = this._onActiveRowChanged.bind(this);
	        this._onHeaderKeyDown = this._onHeaderKeyDown.bind(this);
	        this._onContentKeyDown = this._onContentKeyDown.bind(this);
	        this._onRenderCell = this._onRenderCell.bind(this);
	        this._onGroupExpandStateChanged = this._onGroupExpandStateChanged.bind(this);
	        this.state = {
	            lastWidth: 0,
	            adjustedColumns: this._getAdjustedColumns(props),
	            layoutMode: props.layoutMode,
	            isSizing: false,
	            isDropping: false,
	            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
	            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	        this._selection = props.selection || new index_1.Selection({ onSelectionChanged: null, getKey: props.getKey });
	        this._selection.setItems(props.items, false);
	        this._dragDropHelper = props.dragDropEvents ? new DragDropHelper_1.DragDropHelper({ selection: this._selection }) : null;
	        this._initialFocusedIndex = props.initialFocusedIndex;
	    }
	    DetailsList.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	        if (this._dragDropHelper) {
	            this._dragDropHelper.dispose();
	        }
	    };
	    DetailsList.prototype.componentDidUpdate = function (prevProps, prevState) {
	        if (this.props.onDidUpdate) {
	            this.props.onDidUpdate(this);
	        }
	    };
	    DetailsList.prototype.componentWillReceiveProps = function (newProps) {
	        var _a = this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, selectionMode = _a.selectionMode, columns = _a.columns, viewport = _a.viewport;
	        var layoutMode = this.state.layoutMode;
	        var shouldResetSelection = (newProps.setKey !== setKey) || newProps.setKey === undefined;
	        var shouldForceUpdates = false;
	        if (newProps.layoutMode !== this.props.layoutMode) {
	            layoutMode = newProps.layoutMode;
	            this.setState({ layoutMode: layoutMode });
	            shouldForceUpdates = true;
	        }
	        if (shouldResetSelection) {
	            this._initialFocusedIndex = newProps.initialFocusedIndex;
	        }
	        if (newProps.items !== items) {
	            this._selection.setItems(newProps.items, shouldResetSelection);
	        }
	        if (newProps.checkboxVisibility !== checkboxVisibility ||
	            newProps.columns !== columns ||
	            newProps.viewport.width !== viewport.width) {
	            shouldForceUpdates = true;
	        }
	        this._adjustColumns(newProps, true, layoutMode);
	        if (newProps.selectionMode !== selectionMode) {
	            shouldForceUpdates = true;
	        }
	        if (shouldForceUpdates) {
	            this._forceListUpdates();
	        }
	    };
	    DetailsList.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, ariaLabelForListHeader = _a.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, className = _a.className, checkboxVisibility = _a.checkboxVisibility, constrainMode = _a.constrainMode, dragDropEvents = _a.dragDropEvents, groups = _a.groups, groupProps = _a.groupProps, items = _a.items, isHeaderVisible = _a.isHeaderVisible, onItemInvoked = _a.onItemInvoked, onColumnHeaderClick = _a.onColumnHeaderClick, onColumnHeaderContextMenu = _a.onColumnHeaderContextMenu, selectionMode = _a.selectionMode, ariaLabel = _a.ariaLabel, ariaLabelForGrid = _a.ariaLabelForGrid, rowElementEventMap = _a.rowElementEventMap, _b = _a.shouldApplyApplicationRole, shouldApplyApplicationRole = _b === void 0 ? false : _b;
	        var _c = this.state, adjustedColumns = _c.adjustedColumns, isCollapsed = _c.isCollapsed, layoutMode = _c.layoutMode, isSizing = _c.isSizing, isSomeGroupExpanded = _c.isSomeGroupExpanded;
	        var _d = this, selection = _d._selection, dragDropHelper = _d._dragDropHelper;
	        var groupNestingDepth = this._getGroupNestingDepth();
	        var additionalListProps = {
	            renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD,
	            renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND
	        };
	        var selectAllVisibility = DetailsHeader_1.SelectAllVisibility.none; // for SelectionMode.none
	        if (selectionMode === index_1.SelectionMode.single) {
	            selectAllVisibility = DetailsHeader_1.SelectAllVisibility.hidden;
	        }
	        if (selectionMode === index_1.SelectionMode.multiple) {
	            // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
	            var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
	            if (isCollapsedGroupSelectVisible === undefined) {
	                isCollapsedGroupSelectVisible = true;
	            }
	            var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
	            selectAllVisibility = isSelectAllVisible ? DetailsHeader_1.SelectAllVisibility.visible : DetailsHeader_1.SelectAllVisibility.hidden;
	        }
	        if (checkboxVisibility === DetailsList_Props_1.CheckboxVisibility.hidden) {
	            selectAllVisibility = DetailsHeader_1.SelectAllVisibility.none;
	        }
	        return (
	        // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
	        // with JAWS.
	        React.createElement("div", {ref: 'root', className: css_1.css('ms-DetailsList', className, {
	            'is-fixed': layoutMode === DetailsList_Props_1.DetailsListLayoutMode.fixedColumns,
	            'is-horizontalConstrained': constrainMode === DetailsList_Props_1.ConstrainMode.horizontalConstrained
	        }), "data-automationid": 'DetailsList', "data-is-scrollable": 'false', "aria-label": ariaLabel, role: shouldApplyApplicationRole ? 'application' : ''}, 
	            React.createElement("div", {role: 'grid', "aria-label": ariaLabelForGrid}, 
	                React.createElement("div", {onKeyDown: this._onHeaderKeyDown, role: 'presentation'}, isHeaderVisible && (React.createElement(DetailsHeader_1.DetailsHeader, {ref: 'header', selectionMode: selectionMode, layoutMode: layoutMode, selection: selection, columns: adjustedColumns, onColumnClick: onColumnHeaderClick, onColumnContextMenu: onColumnHeaderContextMenu, onColumnResized: this._onColumnResized, onColumnIsSizingChanged: this._onColumnIsSizingChanged, onColumnAutoResized: this._onColumnAutoResized, groupNestingDepth: groupNestingDepth, isAllCollapsed: isCollapsed, onToggleCollapseAll: this._onToggleCollapse, ariaLabel: ariaLabelForListHeader, ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox, selectAllVisibility: selectAllVisibility}))), 
	                React.createElement("div", {ref: 'contentContainer', onKeyDown: this._onContentKeyDown, role: 'presentation'}, 
	                    React.createElement(FocusZone_1.FocusZone, {ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.vertical, isInnerZoneKeystroke: function (ev) { return (ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)); }, onActiveElementChanged: this._onActiveRowChanged}, 
	                        React.createElement(index_1.SelectionZone, {ref: 'selectionZone', selection: selection, selectionMode: selectionMode, onItemInvoked: onItemInvoked}, groups ? (React.createElement(GroupedList_1.GroupedList, {groups: groups, groupProps: groupProps, items: items, onRenderCell: this._onRenderCell, selection: selection, selectionMode: selectionMode, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: this._onGroupExpandStateChanged, ref: 'groupedList'})) : (React.createElement(List_1.List, __assign({items: items, onRenderCell: function (item, itemIndex) { return _this._onRenderCell(0, item, itemIndex); }}, additionalListProps, {ref: 'list'}))))
	                    )
	                ))
	        ));
	    };
	    DetailsList.prototype.forceUpdate = function () {
	        _super.prototype.forceUpdate.call(this);
	        this._forceListUpdates();
	    };
	    DetailsList.prototype._onRenderRow = function (props) {
	        return React.createElement(DetailsRow_1.DetailsRow, __assign({}, props));
	    };
	    DetailsList.prototype._onRenderCell = function (nestingDepth, item, index) {
	        var _a = this.props, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.rowElementEventMap, onRenderMissingItem = _a.onRenderMissingItem, onRenderItemColumn = _a.onRenderItemColumn, _b = _a.onRenderRow, onRenderRow = _b === void 0 ? this._onRenderRow : _b, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, checkButtonAriaLabel = _a.checkButtonAriaLabel;
	        var selection = this._selection;
	        var dragDropHelper = this._dragDropHelper;
	        var columns = this.state.adjustedColumns;
	        if (!item) {
	            if (onRenderMissingItem) {
	                onRenderMissingItem(index);
	            }
	            return null;
	        }
	        return onRenderRow({
	            item: item,
	            itemIndex: index,
	            columns: columns,
	            groupNestingDepth: nestingDepth,
	            selectionMode: selectionMode,
	            selection: selection,
	            onDidMount: this._onRowDidMount,
	            onWillUnmount: this._onRowWillUnmount,
	            onRenderItemColumn: onRenderItemColumn,
	            eventsToRegister: eventsToRegister,
	            dragDropEvents: dragDropEvents,
	            dragDropHelper: dragDropHelper,
	            viewport: viewport,
	            checkboxVisibility: checkboxVisibility,
	            getRowAriaLabel: getRowAriaLabel,
	            checkButtonAriaLabel: checkButtonAriaLabel
	        });
	    };
	    DetailsList.prototype._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
	        this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
	    };
	    DetailsList.prototype._onColumnIsSizingChanged = function (column, isSizing) {
	        this.setState({ isSizing: isSizing });
	    };
	    DetailsList.prototype._onHeaderKeyDown = function (ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.down) {
	            if (this.refs.focusZone && this.refs.focusZone.focus()) {
	                ev.preventDefault();
	                ev.stopPropagation();
	            }
	        }
	    };
	    DetailsList.prototype._onContentKeyDown = function (ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.up) {
	            if (this.refs.header && this.refs.header.focus()) {
	                ev.preventDefault();
	                ev.stopPropagation();
	            }
	        }
	    };
	    DetailsList.prototype._getGroupNestingDepth = function () {
	        var groups = this.props.groups;
	        var level = 0;
	        var groupsInLevel = groups;
	        while (groupsInLevel && groupsInLevel.length > 0) {
	            level++;
	            groupsInLevel = groupsInLevel[0].children;
	        }
	        return level;
	    };
	    DetailsList.prototype._onRowDidMount = function (row) {
	        var onRowDidMount = this.props.onRowDidMount;
	        var index = row.props.itemIndex;
	        this._activeRows[index] = row; // this is used for column auto resize
	        // Set focus to the row if it should receive focus.
	        if (this._initialFocusedIndex !== undefined && index === this._initialFocusedIndex) {
	            if (this.refs.selectionZone) {
	                this.refs.selectionZone.ignoreNextFocus();
	            }
	            row.focus();
	            delete this._initialFocusedIndex;
	        }
	        if (onRowDidMount) {
	            onRowDidMount(row.props.item, index);
	        }
	    };
	    DetailsList.prototype._onRowWillUnmount = function (row) {
	        var onRowWillUnmount = this.props.onRowWillUnmount;
	        var index = row.props.itemIndex;
	        delete this._activeRows[index];
	        this._events.off(row.refs.root);
	        if (onRowWillUnmount) {
	            onRowWillUnmount(row.props.item, index);
	        }
	    };
	    DetailsList.prototype._onToggleCollapse = function (collapsed) {
	        this.setState({
	            isCollapsed: collapsed
	        });
	        if (this.refs.groupedList) {
	            this.refs.groupedList.toggleCollapseAll(collapsed);
	        }
	    };
	    DetailsList.prototype._forceListUpdates = function () {
	        if (this.refs.groupedList) {
	            this.refs.groupedList.forceUpdate();
	        }
	        if (this.refs.list) {
	            this.refs.list.forceUpdate();
	        }
	    };
	    DetailsList.prototype._adjustColumns = function (newProps, forceUpdate, layoutMode) {
	        var adjustedColumns = this._getAdjustedColumns(newProps, forceUpdate, layoutMode);
	        var viewportWidth = this.props.viewport.width;
	        if (adjustedColumns) {
	            this.setState({
	                adjustedColumns: adjustedColumns,
	                lastWidth: viewportWidth,
	                layoutMode: layoutMode
	            });
	        }
	    };
	    /** Returns adjusted columns, given the viewport size and layout mode. */
	    DetailsList.prototype._getAdjustedColumns = function (newProps, forceUpdate, layoutMode) {
	        var _this = this;
	        var newColumns = newProps.columns, newItems = newProps.items, viewportWidth = newProps.viewport.width, selectionMode = newProps.selectionMode;
	        if (layoutMode === undefined) {
	            layoutMode = newProps.layoutMode;
	        }
	        var columns = this.props ? this.props.columns : [];
	        var lastWidth = this.state ? this.state.lastWidth : -1;
	        var lastSelectionMode = this.state ? this.state.lastSelectionMode : undefined;
	        if (viewportWidth !== undefined) {
	            if (!forceUpdate &&
	                lastWidth === viewportWidth &&
	                lastSelectionMode === selectionMode &&
	                (!columns || newColumns === columns)) {
	                return;
	            }
	        }
	        else {
	            viewportWidth = this.props.viewport.width;
	        }
	        newColumns = newColumns || buildColumns(newItems, true);
	        var adjustedColumns;
	        if (layoutMode === DetailsList_Props_1.DetailsListLayoutMode.fixedColumns) {
	            adjustedColumns = this._getFixedColumns(newColumns);
	        }
	        else {
	            adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth);
	        }
	        // Preserve adjusted column calculated widths.
	        adjustedColumns.forEach(function (column) {
	            var overrides = _this._columnOverrides[column.key] = _this._columnOverrides[column.key] || {};
	            overrides.calculatedWidth = column.calculatedWidth;
	        });
	        return adjustedColumns;
	    };
	    /** Builds a set of columns based on the given columns mixed with the current overrides. */
	    DetailsList.prototype._getFixedColumns = function (newColumns) {
	        var _this = this;
	        return newColumns.map(function (column) {
	            var newColumn = object_1.assign({}, column, _this._columnOverrides[column.key]);
	            if (!newColumn.calculatedWidth) {
	                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
	            }
	            return newColumn;
	        });
	    };
	    /** Builds a set of columns to fix within the viewport width. */
	    DetailsList.prototype._getJustifiedColumns = function (newColumns, viewportWidth) {
	        var _a = this.props, selectionMode = _a.selectionMode, groups = _a.groups;
	        var outerPadding = DEFAULT_INNER_PADDING;
	        var rowCheckWidth = (selectionMode !== index_1.SelectionMode.none) ? CHECKBOX_WIDTH : 0;
	        var groupExpandWidth = groups ? GROUP_EXPAND_WIDTH : 0;
	        var totalWidth = 0; // offset because we have one less inner padding.
	        var availableWidth = viewportWidth - outerPadding - rowCheckWidth - groupExpandWidth;
	        var adjustedColumns = newColumns.map(function (column, i) {
	            var newColumn = object_1.assign({}, column, {
	                calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH
	            });
	            totalWidth += newColumn.calculatedWidth + (i > 0 ? DEFAULT_INNER_PADDING : 0);
	            return newColumn;
	        });
	        var lastIndex = adjustedColumns.length - 1;
	        // Remove collapsable columns.
	        while (lastIndex > 1 && totalWidth > availableWidth) {
	            var column = adjustedColumns[lastIndex];
	            if (column.isCollapsable) {
	                totalWidth -= column.calculatedWidth + DEFAULT_INNER_PADDING;
	                adjustedColumns.splice(lastIndex, 1);
	            }
	            lastIndex--;
	        }
	        // Then expand columns starting at the beginning, until we've filled the width.
	        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
	            var column = adjustedColumns[i];
	            var maxWidth = column.maxWidth;
	            var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
	            var spaceLeft = availableWidth - totalWidth;
	            var increment = Math.min(spaceLeft, maxWidth - minWidth);
	            // Add remaining space to the last column.
	            if (i === (adjustedColumns.length - 1)) {
	                increment = spaceLeft;
	            }
	            column.calculatedWidth += increment;
	            totalWidth += increment;
	        }
	        // Mark the last column as not resizable to avoid extra scrolling issues.
	        if (adjustedColumns.length) {
	            adjustedColumns[adjustedColumns.length - 1].isResizable = false;
	        }
	        return adjustedColumns;
	    };
	    DetailsList.prototype._onColumnResized = function (resizingColumn, newWidth) {
	        this._columnOverrides[resizingColumn.key].calculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
	        this._adjustColumns(this.props, true, DetailsList_Props_1.DetailsListLayoutMode.fixedColumns);
	        this._forceListUpdates();
	    };
	    /**
	     * Callback function when double clicked on the details header column resizer
	     * which will measure the column cells of all the active rows and resize the
	     * column to the max cell width.
	     *
	     * @private
	     * @param {IColumn} column (double clicked column definition)
	     * @param {number} columnIndex (double clicked column index)
	     * @todo min width 100 should be changed to const value and should be consistent with the value used on _onSizerMove method in DetailsHeader
	     */
	    DetailsList.prototype._onColumnAutoResized = function (column, columnIndex) {
	        var _this = this;
	        var max = 0;
	        var count = 0;
	        var totalCount = Object.keys(this._activeRows).length;
	        for (var key in this._activeRows) {
	            if (this._activeRows.hasOwnProperty(key)) {
	                var currentRow = this._activeRows[key];
	                currentRow.measureCell(columnIndex, function (width) {
	                    max = Math.max(max, width);
	                    count++;
	                    if (count === totalCount) {
	                        _this._onColumnResized(column, max);
	                    }
	                });
	            }
	        }
	    };
	    /**
	     * Call back function when an element in FocusZone becomes active. It will transalate it into item
	     * and call onActiveItemChanged callback if specified.
	     *
	     * @private
	     * @param {el} row element that became active in Focus Zone
	     * @param {ev} focus event from Focus Zone
	     */
	    DetailsList.prototype._onActiveRowChanged = function (el, ev) {
	        var _a = this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
	        if (!onActiveItemChanged || !el) {
	            return;
	        }
	        var index = Number(el.getAttribute('data-item-index'));
	        if (index >= 0) {
	            onActiveItemChanged(items[index], index, ev);
	        }
	    };
	    ;
	    DetailsList.defaultProps = {
	        layoutMode: DetailsList_Props_1.DetailsListLayoutMode.justified,
	        selectionMode: index_1.SelectionMode.multiple,
	        constrainMode: DetailsList_Props_1.ConstrainMode.horizontalConstrained,
	        checkboxVisibility: DetailsList_Props_1.CheckboxVisibility.onHover,
	        isHeaderVisible: true
	    };
	    __decorate([
	        autobind_1.autobind
	    ], DetailsList.prototype, "_onRenderRow", null);
	    DetailsList = __decorate([
	        withViewport_1.withViewport
	    ], DetailsList);
	    return DetailsList;
	}(React.Component));
	exports.DetailsList = DetailsList;
	function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
	    var columns = [];
	    if (items && items.length) {
	        var firstItem = items[0];
	        var isFirstColumn = true;
	        for (var propName in firstItem) {
	            if (firstItem.hasOwnProperty(propName)) {
	                columns.push({
	                    key: propName,
	                    name: propName,
	                    fieldName: propName,
	                    minWidth: MIN_COLUMN_WIDTH,
	                    maxWidth: 300,
	                    isCollapsable: !!columns.length,
	                    isMultiline: (isMultiline === undefined) ? false : isMultiline,
	                    isSorted: sortedColumnKey === propName,
	                    isSortedDescending: !!isSortedDescending,
	                    isRowHeader: false,
	                    columnActionsMode: DetailsList_Props_1.ColumnActionsMode.clickable,
	                    isResizable: canResizeColumns,
	                    onColumnClick: onColumnClick,
	                    isGrouped: groupedColumnKey === propName
	                });
	                isFirstColumn = false;
	            }
	        }
	    }
	    return columns;
	}
	exports.buildColumns = buildColumns;
	


/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Enum to describe how a particular column header behaves.... This enum is used to
	 * to specify the property IColumn:columnActionsMode.
	 * If IColumn:columnActionsMode is undefined, then it's equivalent to ColumnActionsMode.clickable
	 */
	(function (ColumnActionsMode) {
	    /**
	     * Renders the column header as disabled.
	     */
	    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
	    /**
	     * Renders the column header is clickable.
	     */
	    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
	    /**
	     * Renders the column header ias clickable and displays the dropdown cheveron.
	     */
	    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
	})(exports.ColumnActionsMode || (exports.ColumnActionsMode = {}));
	var ColumnActionsMode = exports.ColumnActionsMode;
	(function (ConstrainMode) {
	    /** If specified, lets the content grow which allows the page to manage scrolling. */
	    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
	    /**
	     * If specified, constrains the list to the given layout space.
	     */
	    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
	})(exports.ConstrainMode || (exports.ConstrainMode = {}));
	var ConstrainMode = exports.ConstrainMode;
	(function (DetailsListLayoutMode) {
	    /**
	     * Lets the user resize columns and makes not attempt to fit them.
	     */
	    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
	    /**
	     * Manages which columns are visible, tries to size them according to their min/max rules and drops
	     * off columns that can't fit and have isCollapsable set.
	     */
	    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
	})(exports.DetailsListLayoutMode || (exports.DetailsListLayoutMode = {}));
	var DetailsListLayoutMode = exports.DetailsListLayoutMode;
	(function (CheckboxVisibility) {
	    /**
	     * Visible on hover.
	     */
	    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
	    /**
	     * Visible always.
	     */
	    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
	    /**
	     * Hide checkboxes.
	     */
	    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
	})(exports.CheckboxVisibility || (exports.CheckboxVisibility = {}));
	var CheckboxVisibility = exports.CheckboxVisibility;
	


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var DetailsList_Props_1 = __webpack_require__(125);
	var FocusZone_1 = __webpack_require__(21);
	var Check_1 = __webpack_require__(127);
	var GroupSpacer_1 = __webpack_require__(129);
	var css_1 = __webpack_require__(7);
	var interfaces_1 = __webpack_require__(120);
	var rtl_1 = __webpack_require__(31);
	__webpack_require__(131);
	var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
	var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
	var INNER_PADDING = 16;
	(function (SelectAllVisibility) {
	    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
	    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
	    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
	})(exports.SelectAllVisibility || (exports.SelectAllVisibility = {}));
	var SelectAllVisibility = exports.SelectAllVisibility;
	var DetailsHeader = (function (_super) {
	    __extends(DetailsHeader, _super);
	    function DetailsHeader(props) {
	        _super.call(this, props);
	        this.state = {
	            columnResizeDetails: null,
	            groupNestingDepth: this.props.groupNestingDepth,
	            isAllCollapsed: this.props.isAllCollapsed
	        };
	        this._onToggleCollapseAll = this._onToggleCollapseAll.bind(this);
	        this._onSelectAllClicked = this._onSelectAllClicked.bind(this);
	    }
	    DetailsHeader.prototype.componentDidMount = function () {
	        var selection = this.props.selection;
	        this._events.on(selection, interfaces_1.SELECTION_CHANGE, this._onSelectionChanged);
	        this._events.on(this.refs.root, 'mousedown', this._onSizerDown);
	    };
	    DetailsHeader.prototype.componentWillReceiveProps = function (newProps) {
	        var groupNestingDepth = this.state.groupNestingDepth;
	        if (newProps.groupNestingDepth !== groupNestingDepth) {
	            this.setState({ groupNestingDepth: newProps.groupNestingDepth });
	        }
	    };
	    DetailsHeader.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, columns = _a.columns, ariaLabel = _a.ariaLabel, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility;
	        var _b = this.state, isAllSelected = _b.isAllSelected, columnResizeDetails = _b.columnResizeDetails, isSizing = _b.isSizing, groupNestingDepth = _b.groupNestingDepth, isAllCollapsed = _b.isAllCollapsed;
	        return (React.createElement("div", {role: 'row', "aria-label": ariaLabel, className: css_1.css('ms-DetailsHeader', {
	            'is-allSelected': isAllSelected,
	            'is-selectAllHidden': selectAllVisibility === SelectAllVisibility.hidden,
	            'is-resizingColumn': !!columnResizeDetails && isSizing
	        }), onMouseMove: this._onMove.bind(this), onMouseUp: this._onUp.bind(this), ref: 'root', "data-automationid": 'DetailsHeader'}, 
	            React.createElement(FocusZone_1.FocusZone, {ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.horizontal}, 
	                React.createElement("div", {className: 'ms-DetailsHeader-cellWrapper', role: 'columnheader'}, (selectAllVisibility === SelectAllVisibility.visible) ? (React.createElement("button", {className: 'ms-DetailsHeader-cell is-check', onClick: this._onSelectAllClicked, "aria-label": ariaLabelForSelectAllCheckbox, "aria-pressed": isAllSelected}, 
	                    React.createElement(Check_1.Check, {checked: isAllSelected})
	                )) : null), 
	                groupNestingDepth > 0 ? (React.createElement("button", {className: 'ms-DetailsHeader-cell', onClick: this._onToggleCollapseAll}, 
	                    React.createElement("i", {className: css_1.css('ms-DetailsHeader-collapseButton ms-Icon ms-Icon--ChevronDown', {
	                        'is-collapsed': isAllCollapsed
	                    })})
	                )) : (null), 
	                GroupSpacer_1.GroupSpacer({ count: groupNestingDepth - 1 }), 
	                columns.map(function (column, columnIndex) { return (React.createElement("div", {key: column.key, className: 'ms-DetailsHeader-cellSizeWrapper'}, 
	                    React.createElement("div", {className: 'ms-DetailsHeader-cellWrapper', role: 'columnheader'}, 
	                        React.createElement("button", {key: column.fieldName, disabled: column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.disabled, className: css_1.css('ms-DetailsHeader-cell', column.headerClassName, {
	                            'is-actionable': column.columnActionsMode !== DetailsList_Props_1.ColumnActionsMode.disabled,
	                            'is-empty': !column.name,
	                            'is-icon-visible': column.isSorted || column.isGrouped || column.isFiltered
	                        }), style: { width: column.calculatedWidth + INNER_PADDING }, onClick: _this._onColumnClick.bind(_this, column), onContextMenu: _this._onColumnContextMenu.bind(_this, column), "aria-haspopup": column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.hasDropdown, "aria-label": column.ariaLabel || column.name, "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key}, 
	                            column.isFiltered && (React.createElement("i", {className: 'ms-Icon ms-Icon--filter'})), 
	                            column.isSorted && (React.createElement("i", {className: css_1.css('ms-Icon', {
	                                'ms-Icon--SortUp': !column.isSortedDescending,
	                                'ms-Icon--SortDown': column.isSortedDescending
	                            })})), 
	                            column.isGrouped && (React.createElement("i", {className: 'ms-Icon ms-Icon--GroupedDescending'})), 
	                            column.iconClassName && (React.createElement("i", {className: 'ms-Icon ' + column.iconClassName})), 
	                            column.name, 
	                            column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.hasDropdown && (React.createElement("i", {className: 'ms-DetailsHeader-filterChevron ms-Icon ms-Icon--ChevronDown'})))
	                    ), 
	                    (column.isResizable) ? (React.createElement("div", {"data-sizer-index": columnIndex, className: css_1.css('ms-DetailsHeader-cell is-sizer', {
	                        'is-resizing': columnResizeDetails && columnResizeDetails.columnIndex === columnIndex && isSizing
	                    }), onDoubleClick: _this._onSizerDoubleClick.bind(_this, columnIndex)})) : (null))); }))
	        ));
	    };
	    /** Set focus to the active thing in the focus area. */
	    DetailsHeader.prototype.focus = function () {
	        return this.refs.focusZone.focus();
	    };
	    /**
	     * double click on the column sizer will auto ajust column width
	     * to fit the longest content among current rendered rows.
	     *
	     * @private
	     * @param {number} columnIndex (index of the column user double clicked)
	     * @param {React.MouseEvent} ev (mouse double click event)
	     */
	    DetailsHeader.prototype._onSizerDoubleClick = function (columnIndex, ev) {
	        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, columns = _a.columns;
	        if (onColumnAutoResized) {
	            onColumnAutoResized(columns[columnIndex], columnIndex);
	        }
	    };
	    /**
	     * Called when the select all toggle is clicked.
	     */
	    DetailsHeader.prototype._onSelectAllClicked = function () {
	        var selection = this.props.selection;
	        selection.toggleAllSelected();
	    };
	    /**
	     * mouse move event handler in the header
	     * it will set isSizing state to true when user clicked on the sizer and move the mouse.
	     *
	     * @private
	     * @param {React.MouseEvent} ev (mouse move event)
	     */
	    DetailsHeader.prototype._onMove = function (ev) {
	        var _a = ev.buttons, buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
	        var _b = this.props, onColumnIsSizingChanged = _b.onColumnIsSizingChanged, columns = _b.columns;
	        var _c = this.state, columnResizeDetails = _c.columnResizeDetails, isSizing = _c.isSizing;
	        if (columnResizeDetails) {
	            if (buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
	                // cancel mouse down event and return early when the primary button is not pressed
	                this._onUp(ev);
	                return;
	            }
	            if (!isSizing && ev.clientX !== columnResizeDetails.originX) {
	                isSizing = true;
	                this._events.on(window, 'mousemove', this._onSizerMove, true);
	                this._events.on(window, 'mouseup', this._onSizerUp, true);
	                this.setState({ isSizing: isSizing });
	                if (onColumnIsSizingChanged) {
	                    onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
	                }
	            }
	        }
	    };
	    /**
	     * mouse up event handler in the header
	     * clear the resize related state.
	     * This is to ensure we can catch double click event
	     *
	     * @private
	     * @param {React.MouseEvent} ev (mouse up event)
	     */
	    DetailsHeader.prototype._onUp = function (ev) {
	        this.setState({
	            columnResizeDetails: null,
	            isSizing: false
	        });
	    };
	    DetailsHeader.prototype._onSizerDown = function (ev) {
	        var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
	        var columnIndex = Number(columnIndexAttr);
	        var columns = this.props.columns;
	        if (columnIndexAttr === null || ev.button !== MOUSEDOWN_PRIMARY_BUTTON) {
	            // Ignore anything except the primary button.
	            return;
	        }
	        this.setState({
	            columnResizeDetails: {
	                columnIndex: columnIndex,
	                columnMinWidth: columns[columnIndex].calculatedWidth,
	                originX: ev.clientX
	            }
	        });
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    DetailsHeader.prototype._onSelectionChanged = function () {
	        var isAllSelected = this.props.selection.isAllSelected();
	        if (this.state.isAllSelected !== isAllSelected) {
	            this.setState({
	                isAllSelected: isAllSelected
	            });
	        }
	    };
	    DetailsHeader.prototype._onSizerMove = function (ev) {
	        var _a = ev.buttons, buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
	        var columnResizeDetails = this.state.columnResizeDetails;
	        if (columnResizeDetails) {
	            if (buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
	                // cancel mouse down event and return early when the primary button is not pressed
	                this._onSizerUp();
	                return;
	            }
	            var _b = this.props, onColumnResized = _b.onColumnResized, columns = _b.columns;
	            if (onColumnResized) {
	                var movement = ev.clientX - columnResizeDetails.originX;
	                if (rtl_1.getRTL()) {
	                    movement = -movement;
	                }
	                onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement);
	            }
	        }
	    };
	    DetailsHeader.prototype._onSizerUp = function () {
	        var _a = this.props, columns = _a.columns, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
	        var columnResizeDetails = this.state.columnResizeDetails;
	        this._events.off(window);
	        this.setState({
	            columnResizeDetails: null,
	            isSizing: false
	        });
	        if (onColumnIsSizingChanged) {
	            onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
	        }
	    };
	    DetailsHeader.prototype._onColumnClick = function (column, ev) {
	        var onColumnClick = this.props.onColumnClick;
	        if (column.onColumnClick) {
	            column.onColumnClick(ev, column);
	        }
	        if (onColumnClick) {
	            onColumnClick(ev, column);
	        }
	    };
	    DetailsHeader.prototype._onColumnContextMenu = function (column, ev) {
	        var onColumnContextMenu = this.props.onColumnContextMenu;
	        if (column.onContextMenu) {
	            column.onColumnContextMenu(column, ev);
	        }
	        if (onColumnContextMenu) {
	            onColumnContextMenu(column, ev);
	        }
	    };
	    DetailsHeader.prototype._onToggleCollapseAll = function () {
	        var onToggleCollapseAll = this.props.onToggleCollapseAll;
	        var newCollapsed = !this.state.isAllCollapsed;
	        this.setState({
	            isAllCollapsed: newCollapsed
	        });
	        if (onToggleCollapseAll) {
	            onToggleCollapseAll(newCollapsed);
	        }
	    };
	    DetailsHeader.defaultProps = {
	        isSelectAllVisible: SelectAllVisibility.visible
	    };
	    return DetailsHeader;
	}(BaseComponent_1.BaseComponent));
	exports.DetailsHeader = DetailsHeader;
	


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	__webpack_require__(128);
	var Check = (function (_super) {
	    __extends(Check, _super);
	    function Check() {
	        _super.apply(this, arguments);
	    }
	    Check.prototype.shouldComponentUpdate = function (newProps) {
	        return this.props.isChecked !== newProps.isChecked || this.props.checked !== newProps.checked;
	    };
	    Check.prototype.render = function () {
	        var _a = this.props, isChecked = _a.isChecked, checked = _a.checked;
	        return (React.createElement("div", {className: css_1.css('ms-Check', {
	            'is-checked': isChecked || checked
	        })}, 
	            React.createElement("div", {className: 'ms-Icon ms-Check-background'}), 
	            React.createElement("i", {className: 'ms-Check-check ms-Icon ms-Icon--CheckMark'})));
	    };
	    Check.defaultProps = {
	        isChecked: false
	    };
	    return Check;
	}(React.Component));
	exports.Check = Check;
	


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Check{line-height:1;width:24px;height:24px;vertical-align:top;position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Check.is-checked .ms-Check-background:before{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Check.is-checked .ms-Check-background:after{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Check.is-checked .ms-Check-check{opacity:1;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:900;font-size:12px}.ms-Check:hover .ms-Check-check{opacity:1}.ms-Check-check{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";opacity:0}.ms-Check-background{position:relative;height:24px;width:24px}.ms-Check-background:before{content:'\\E91F';color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Check-background:after{content:'\\EA3A';color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Check-background:after,.ms-Check-background:before{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;height:24px;width:24px;position:absolute}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	__webpack_require__(130);
	var SPACER_WIDTH = 36;
	exports.GroupSpacer = function (props) {
	    return props.count > 0 && React.createElement("span", {className: 'ms-GroupSpacer', style: { width: props.count * SPACER_WIDTH }});
	};
	


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-GroupSpacer{display:inline-block}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DetailsHeader{display:inline-block;min-width:100%;height:36px;line-height:36px;white-space:nowrap;padding-bottom:1px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html[dir=ltr] .ms-DetailsHeader.is-selectAllHidden{padding-left:36px}html[dir=rtl] .ms-DetailsHeader.is-selectAllHidden{padding-right:36px}.ms-DetailsHeader-cell.is-check .ms-Check-background{visibility:hidden}.ms-DetailsHeader-cell.is-check:hover .ms-Check-background,.ms-DetailsHeader.is-allSelected .ms-Check-background{visibility:visible}.ms-DetailsHeader-cellWrapper{display:inline-block;position:relative}.ms-DetailsHeader-cellSizeWrapper{display:inline-block;vertical-align:top}.ms-DetailsHeader-cell{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";font-weight:400;position:relative;display:inline-block;box-sizing:border-box;padding:0 8px;border:none;line-height:inherit;margin:0;height:36px;vertical-align:top;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ms-DetailsHeader-cell::-moz-focus-inner{border:0}.ms-DetailsHeader-cell{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-DetailsHeader-cell:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-DetailsHeader-cell{text-align:left}html[dir=rtl] .ms-DetailsHeader-cell{text-align:right}html[dir=ltr] .ms-DetailsHeader-cell{text-align:left}html[dir=rtl] .ms-DetailsHeader-cell{text-align:right}.ms-DetailsHeader-cell.is-check{position:relative;padding:6px;margin:0}.ms-DetailsHeader-cell.is-actionable{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-DetailsHeader-cell.is-actionable:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": "}.ms-DetailsHeader-cell.is-actionable:active{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-DetailsHeader-cell.is-sizer{position:absolute;width:16px;cursor:ew-resize;bottom:0;top:0;height:inherit;background:0 0}html[dir=ltr] .ms-DetailsHeader-cell.is-sizer{margin-left:-10px}html[dir=rtl] .ms-DetailsHeader-cell.is-sizer{margin-right:-10px}.ms-DetailsHeader-cell.is-empty{text-overflow:clip}.ms-DetailsHeader-cell.is-sizer:after{content:'';position:absolute;left:50%;top:0;bottom:0;width:1px;background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";opacity:0}.ms-DetailsHeader-cell.is-sizer.is-resizing:after,.ms-DetailsHeader-cell.is-sizer:hover:after{opacity:1;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.ms-DetailsHeader-collapseButton{text-align:center;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;width:20px;outline:0}.ms-DetailsHeader-collapseButton.is-collapsed{-webkit-transform:rotate(0);transform:rotate(0)}.ms-DetailsHeader-isSortedDescending{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.ms-DetailsHeader-cell .ms-Icon{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";opacity:1}.ms-DetailsHeader-cell .ms-DetailsHeader-filterChevron.ms-Icon{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";vertical-align:middle}html[dir=ltr] .ms-DetailsHeader-cell .ms-DetailsHeader-filterChevron.ms-Icon{padding-left:4px}html[dir=rtl] .ms-DetailsHeader-cell .ms-DetailsHeader-filterChevron.ms-Icon{padding-right:4px}html[dir=ltr] .ms-DetailsHeader-cell .ms-DetailsHeader-collapseButton.ms-Icon{padding-right:0}html[dir=rtl] .ms-DetailsHeader-cell .ms-DetailsHeader-collapseButton.ms-Icon{padding-left:0}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var DetailsList_Props_1 = __webpack_require__(125);
	var DetailsRowCheck_1 = __webpack_require__(133);
	var GroupSpacer_1 = __webpack_require__(129);
	var DetailsRowFields_1 = __webpack_require__(136);
	var FocusZone_1 = __webpack_require__(21);
	var interfaces_1 = __webpack_require__(120);
	var EventGroup_1 = __webpack_require__(14);
	var object_1 = __webpack_require__(8);
	var css_1 = __webpack_require__(7);
	__webpack_require__(137);
	var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
	var DetailsRow = (function (_super) {
	    __extends(DetailsRow, _super);
	    function DetailsRow(props) {
	        _super.call(this, props);
	        this.state = {
	            selectionState: this._getSelectionState(props),
	            columnMeasureInfo: null,
	            isDropping: false,
	            groupNestingDepth: props.groupNestingDepth
	        };
	        this._hasSetFocus = false;
	        this._events = new EventGroup_1.EventGroup(this);
	        this._droppingClassNames = '';
	        this._updateDroppingState = this._updateDroppingState.bind(this);
	    }
	    DetailsRow.prototype.componentDidMount = function () {
	        var dragDropHelper = this.props.dragDropHelper;
	        if (dragDropHelper) {
	            dragDropHelper.subscribe(this.refs.root, this._events, this._getRowDragDropOptions());
	        }
	        this._events.on(this.props.selection, interfaces_1.SELECTION_CHANGE, this._onSelectionChanged);
	        if (this.props.onDidMount && this.props.item) {
	            // If the item appears later, we should wait for it before calling this method.
	            this._hasMounted = true;
	            this.props.onDidMount(this);
	        }
	    };
	    DetailsRow.prototype.componentDidUpdate = function () {
	        var state = this.state;
	        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
	        var columnMeasureInfo = state.columnMeasureInfo;
	        if (columnMeasureInfo && columnMeasureInfo.index >= 0) {
	            var newWidth = this.refs.cellMeasurer.getBoundingClientRect().width;
	            columnMeasureInfo.onMeasureDone(newWidth);
	            this.setState({
	                columnMeasureInfo: null
	            });
	        }
	        if (item && onDidMount && !this._hasMounted) {
	            this._hasMounted = true;
	            onDidMount(this);
	        }
	    };
	    DetailsRow.prototype.componentWillUnmount = function () {
	        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount, dragDropHelper = _a.dragDropHelper;
	        this._events.dispose();
	        // Only call the onWillUnmount callback if we have an item.
	        if (onWillUnmount && item) {
	            onWillUnmount(this);
	        }
	        if (dragDropHelper) {
	            dragDropHelper.unsubscribe(this.refs.root, this._dragDropKey);
	        }
	    };
	    DetailsRow.prototype.componentWillReceiveProps = function (newProps) {
	        this.setState({
	            selectionState: this._getSelectionState(newProps),
	            groupNestingDepth: newProps.groupNestingDepth
	        });
	    };
	    DetailsRow.prototype.render = function () {
	        var _a = this.props, columns = _a.columns, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, _b = _a.onRenderCheck, onRenderCheck = _b === void 0 ? this._onRenderCheck : _b, onRenderItemColumn = _a.onRenderItemColumn, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, checkButtonAriaLabel = _a.checkButtonAriaLabel, selection = _a.selection;
	        var _c = this.state, _d = _c.selectionState, isSelected = _d.isSelected, anySelected = _d.anySelected, columnMeasureInfo = _c.columnMeasureInfo, isDropping = _c.isDropping, groupNestingDepth = _c.groupNestingDepth;
	        var isDraggable = Boolean(dragDropEvents && dragDropEvents.canDrag && dragDropEvents.canDrag(item));
	        var droppingClassName = isDropping ? (this._droppingClassNames ? this._droppingClassNames : DEFAULT_DROPPING_CSS_CLASS) : '';
	        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : null;
	        var canSelect = selection.canSelectItem(item);
	        return (React.createElement("div", {ref: 'root', role: 'row', "aria-label": ariaLabel, className: css_1.css('ms-DetailsRow ms-u-fadeIn400', droppingClassName, {
	            'is-selected': isSelected,
	            'is-check-visible': checkboxVisibility === DetailsList_Props_1.CheckboxVisibility.always
	        }), "data-is-focusable": true, "data-selection-index": itemIndex, "data-item-index": itemIndex, "data-is-draggable": isDraggable, "data-automationid": 'DetailsRow', style: { minWidth: viewport ? viewport.width : 0 }, "aria-selected": isSelected}, 
	            React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, 
	                (selectionMode !== interfaces_1.SelectionMode.none && checkboxVisibility !== DetailsList_Props_1.CheckboxVisibility.hidden) && (React.createElement("span", {role: 'gridcell'}, onRenderCheck({
	                    isSelected: isSelected,
	                    anySelected: anySelected,
	                    ariaLabel: checkButtonAriaLabel,
	                    canSelect: canSelect
	                }))), 
	                GroupSpacer_1.GroupSpacer({ count: groupNestingDepth }), 
	                item && (React.createElement(DetailsRowFields_1.DetailsRowFields, {columns: columns, item: item, itemIndex: itemIndex, onRenderItemColumn: onRenderItemColumn})), 
	                columnMeasureInfo && (React.createElement("span", {className: 'ms-DetailsRow-cellMeasurer ms-DetailsRow-cell', ref: 'cellMeasurer'}, 
	                    React.createElement(DetailsRowFields_1.DetailsRowFields, {columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, onRenderItemColumn: onRenderItemColumn})
	                )))
	        ));
	    };
	    /**
	     * measure cell at index. and call the call back with the measured cell width when finish measure
	     *
	     * @param {number} index (the cell index)
	     * @param {(width: number) => void} onMeasureDone (the call back function when finish measure)
	     */
	    DetailsRow.prototype.measureCell = function (index, onMeasureDone) {
	        var column = object_1.assign({}, this.props.columns[index]);
	        column.minWidth = 0;
	        column.maxWidth = 999999;
	        delete column.calculatedWidth;
	        this.setState({
	            columnMeasureInfo: {
	                index: index,
	                column: column,
	                onMeasureDone: onMeasureDone
	            }
	        });
	    };
	    DetailsRow.prototype.focus = function () {
	        if (this.refs && this.refs.root) {
	            this.refs.root.tabIndex = 0;
	            this.refs.root.focus();
	        }
	    };
	    DetailsRow.prototype._onRenderCheck = function (props) {
	        return React.createElement(DetailsRowCheck_1.DetailsRowCheck, __assign({}, props));
	    };
	    DetailsRow.prototype._getSelectionState = function (props) {
	        var itemIndex = props.itemIndex, selection = props.selection;
	        return {
	            isSelected: selection.isIndexSelected(itemIndex),
	            anySelected: selection.getSelectedCount() > 0
	        };
	    };
	    DetailsRow.prototype._onSelectionChanged = function () {
	        var selectionState = this._getSelectionState(this.props);
	        if (!object_1.shallowCompare(selectionState, this.state.selectionState)) {
	            this.setState({
	                selectionState: selectionState
	            });
	        }
	    };
	    DetailsRow.prototype._getRowDragDropOptions = function () {
	        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
	        this._dragDropKey = 'row-' + itemIndex;
	        var options = {
	            key: this._dragDropKey,
	            eventMap: eventsToRegister,
	            selectionIndex: itemIndex,
	            context: { data: item, index: itemIndex },
	            canDrag: dragDropEvents.canDrag,
	            canDrop: dragDropEvents.canDrop,
	            onDragStart: dragDropEvents.onDragStart,
	            updateDropState: this._updateDroppingState
	        };
	        return options;
	    };
	    /**
	     * update isDropping state based on the input value, which is used to change style during drag and drop
	     *
	     * when change to true, that means drag enter. we will add default dropping class name
	     * or the custom dropping class name (return result from onDragEnter) to the root elemet.
	     *
	     * when change to false, that means drag leave. we will remove the dropping class name from root element.
	     *
	     * @private
	     * @param {boolean} newValue (new isDropping state value)
	     * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
	     */
	    DetailsRow.prototype._updateDroppingState = function (newValue, event) {
	        var _a = this.state, selectionState = _a.selectionState, isDropping = _a.isDropping;
	        var _b = this.props, dragDropEvents = _b.dragDropEvents, item = _b.item;
	        if (!newValue) {
	            if (dragDropEvents.onDragLeave) {
	                dragDropEvents.onDragLeave(item, event);
	            }
	        }
	        else {
	            if (dragDropEvents.onDragEnter) {
	                this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
	            }
	        }
	        if (isDropping !== newValue) {
	            this.setState({ selectionState: selectionState, isDropping: newValue });
	        }
	    };
	    return DetailsRow;
	}(React.Component));
	exports.DetailsRow = DetailsRow;
	


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var Check_1 = __webpack_require__(134);
	exports.DetailsRowCheck = function (props) {
	    var selected = props.isSelected || props.selected;
	    return (React.createElement("button", {type: 'button', className: 'ms-DetailsRow-check', role: 'button', "aria-pressed": selected, "data-selection-toggle": true, "data-automationid": 'DetailsRowCheck', "aria-label": props.ariaLabel}, props.canSelect ?
	        React.createElement(Check_1.Check, {checked: selected}) :
	        React.createElement("div", {className: 'ms-DetailsRow-checkSpacer'})));
	};
	


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(135));
	


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(127));
	


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var DetailsRowFields = (function (_super) {
	    __extends(DetailsRowFields, _super);
	    function DetailsRowFields(props) {
	        _super.call(this);
	        this.state = this._getState(props);
	    }
	    DetailsRowFields.prototype.componentWillReceiveProps = function (newProps) {
	        this.setState(this._getState(newProps));
	    };
	    DetailsRowFields.prototype.render = function () {
	        var columns = this.props.columns;
	        var cellContent = this.state.cellContent;
	        return (React.createElement("div", {className: 'ms-DetailsRow-fields', "data-automationid": 'DetailsRowFields'}, columns.map(function (column, columnIndex) { return (React.createElement("div", {key: columnIndex, role: column.isRowHeader ? 'rowheader' : 'gridcell', className: css_1.css('ms-DetailsRow-cell', column.className, {
	            'is-multiline': column.isMultiline
	        }), style: { width: column.calculatedWidth }, "data-automationid": 'DetailsRowCell', "data-automation-key": column.key}, cellContent[columnIndex])); })));
	    };
	    DetailsRowFields.prototype._getState = function (props) {
	        var _this = this;
	        var item = props.item, itemIndex = props.itemIndex, onRenderItemColumn = props.onRenderItemColumn;
	        return {
	            cellContent: props.columns.map(function (column) {
	                var cellContent;
	                try {
	                    var render = column.onRender || onRenderItemColumn;
	                    cellContent = render ? render(item, itemIndex, column) : _this._getCellText(item, column);
	                }
	                catch (e) { }
	                return cellContent;
	            })
	        };
	    };
	    DetailsRowFields.prototype._getCellText = function (item, column) {
	        var value = (item && column && column.fieldName) ? item[column.fieldName] : '';
	        if (value === null || value === undefined) {
	            value = '';
	        }
	        return value;
	    };
	    return DetailsRowFields;
	}(React.Component));
	exports.DetailsRowFields = DetailsRowFields;
	


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DetailsRow{display:inline-block;min-width:100%;min-height:36px;margin:1px 0;vertical-align:top;white-space:nowrap;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;box-sizing:border-box;background:0 0;border:none;vertical-align:top;line-height:16px}.ms-DetailsRow::-moz-focus-inner{border:0}.ms-DetailsRow{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-DetailsRow:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-DetailsRow{text-align:left}html[dir=rtl] .ms-DetailsRow{text-align:right}.ms-DetailsRow.ms-DetailsRow.is-selected{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-DetailsRow:hover{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-DetailsRow.is-selected:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-DetailsRow-cell{display:inline-block;position:relative;box-sizing:border-box;padding:10px 0;margin:0 8px;min-height:36px;vertical-align:top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ms-DetailsRow-cell.is-multiline{white-space:normal;word-break:break-word;text-overflow:clip}.ms-DetailsRow-fields{display:inline-block}.ms-DetailsRow-check{display:inline-block;cursor:default;padding:6px;box-sizing:border-box;vertical-align:top;background:0 0;border:none}.ms-DetailsRow-check::-moz-focus-inner{border:0}.ms-DetailsRow-check{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-DetailsRow-check:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-DetailsRow-check{opacity:0}.ms-DetailsRow.is-check-visible .ms-DetailsRow-check,.ms-DetailsRow.is-selected .ms-DetailsRow-check,.ms-DetailsRow:hover .ms-DetailsRow-check{opacity:1}.aFileTypeIconRenderer{height:36px;line-height:36px;vertical-align:top}.FileTypeIconRenderer>img{width:16px;height:16px;vertical-align:middle}.ms-DetailsRow-cellMeasurer .ms-DetailsRow-cell{overflow:visible;white-space:nowrap}.ms-DetailsRow-checkSpacer{display:inline-block;height:20px;width:20px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(139));
	


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(140));
	


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var GroupedListSection_1 = __webpack_require__(141);
	var css_1 = __webpack_require__(7);
	var List_1 = __webpack_require__(155);
	var index_1 = __webpack_require__(119);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(158);
	var GroupedList = (function (_super) {
	    __extends(GroupedList, _super);
	    function GroupedList(props) {
	        _super.call(this, props);
	        this._isSomeGroupExpanded = this._computeIsSomeGroupExpanded(props.groups);
	        this.state = {
	            lastWidth: 0,
	            groups: props.groups
	        };
	    }
	    GroupedList.prototype.componentWillReceiveProps = function (newProps) {
	        var _a = this.props, groups = _a.groups, selectionMode = _a.selectionMode;
	        var shouldForceUpdates = false;
	        if (newProps.groups !== groups) {
	            this.setState({ groups: newProps.groups });
	            shouldForceUpdates = true;
	        }
	        if (newProps.selectionMode !== selectionMode) {
	            shouldForceUpdates = true;
	        }
	        if (shouldForceUpdates) {
	            this._forceListUpdates();
	        }
	    };
	    GroupedList.prototype.render = function () {
	        var className = this.props.className;
	        var groups = this.state.groups;
	        return (React.createElement("div", {ref: 'root', className: css_1.css('ms-GroupedList', className), "data-automationid": 'GroupedList', "data-is-scrollable": 'false', role: 'grid'}, !groups ?
	            this._renderGroup(null, 0) : (React.createElement(List_1.List, {ref: 'list', items: groups, onRenderCell: this._renderGroup, getItemCountForPage: function () { return 1; }}))));
	    };
	    GroupedList.prototype.forceUpdate = function () {
	        _super.prototype.forceUpdate.call(this);
	        this._forceListUpdates();
	    };
	    GroupedList.prototype.toggleCollapseAll = function (allCollapsed) {
	        var groups = this.state.groups;
	        var groupProps = this.props.groupProps;
	        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
	        if (groups) {
	            if (onToggleCollapseAll) {
	                onToggleCollapseAll(allCollapsed);
	            }
	            for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
	                groups[groupIndex].isCollapsed = allCollapsed;
	            }
	            this._updateIsSomeGroupExpanded();
	            this.forceUpdate();
	        }
	    };
	    GroupedList.prototype._renderGroup = function (group, groupIndex) {
	        var _a = this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport;
	        // override group header/footer props as needed
	        var dividerProps = {
	            onToggleSelectGroup: this._onToggleSelectGroup,
	            onToggleCollapse: this._onToggleCollapse,
	            onToggleSummarize: this._onToggleSummarize
	        };
	        var headerProps = Utilities_1.assign({}, groupProps.headerProps, dividerProps);
	        var footerProps = Utilities_1.assign({}, groupProps.footerProps, dividerProps);
	        var groupNestingDepth = this._getGroupNestingDepth();
	        return (!group || group.count > 0) ? (React.createElement(GroupedListSection_1.GroupedListSection, {ref: 'group_' + groupIndex, key: this._getGroupKey(group), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, headerProps: headerProps, listProps: listProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, viewport: viewport})) : null;
	    };
	    GroupedList.prototype._getGroupKey = function (group) {
	        return 'group-' + (group ?
	            group.key + '-' + group.count :
	            '');
	    };
	    GroupedList.prototype._getGroupNestingDepth = function () {
	        var groups = this.state.groups;
	        var level = 0;
	        var groupsInLevel = groups;
	        while (groupsInLevel && groupsInLevel.length > 0) {
	            level++;
	            groupsInLevel = groupsInLevel[0].children;
	        }
	        return level;
	    };
	    GroupedList.prototype._onToggleCollapse = function (group) {
	        var groupProps = this.props.groupProps;
	        var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
	        if (group) {
	            if (onToggleCollapse) {
	                onToggleCollapse(group);
	            }
	            group.isCollapsed = !group.isCollapsed;
	            this._updateIsSomeGroupExpanded();
	            this.setState({}, this.forceUpdate);
	        }
	    };
	    GroupedList.prototype._onToggleSelectGroup = function (group) {
	        if (group) {
	            this.props.selection.toggleRangeSelected(group.startIndex, group.count);
	        }
	    };
	    GroupedList.prototype._forceListUpdates = function (groups) {
	        groups = groups || this.state.groups;
	        var groupCount = groups ? groups.length : 1;
	        if (this.refs.list) {
	            this.refs.list.forceUpdate();
	            for (var i = 0; i < groupCount; i++) {
	                var group = this.refs.list.refs['group_' + String(i)];
	                if (group) {
	                    group.forceListUpdate();
	                }
	            }
	        }
	        else {
	            var group = this.refs['group_' + String(0)];
	            if (group) {
	                group.forceListUpdate();
	            }
	        }
	    };
	    GroupedList.prototype._onToggleSummarize = function (group) {
	        var groupProps = this.props.groupProps;
	        var onToggleSummarize = groupProps && groupProps.footerProps && groupProps.footerProps.onToggleSummarize;
	        if (onToggleSummarize) {
	            onToggleSummarize(group);
	        }
	        else {
	            if (group) {
	                group.isShowingAll = !group.isShowingAll;
	            }
	            this.forceUpdate();
	        }
	    };
	    GroupedList.prototype._computeIsSomeGroupExpanded = function (groups) {
	        var _this = this;
	        return groups && groups.some(function (group) { return group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed; });
	    };
	    GroupedList.prototype._updateIsSomeGroupExpanded = function () {
	        var groups = this.state.groups;
	        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
	        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
	        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
	            if (onGroupExpandStateChanged) {
	                onGroupExpandStateChanged(newIsSomeGroupExpanded);
	            }
	            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
	        }
	    };
	    GroupedList.defaultProps = {
	        selectionMode: index_1.SelectionMode.multiple,
	        isHeaderVisible: true,
	        groupProps: {}
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedList.prototype, "_renderGroup", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedList.prototype, "_getGroupKey", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedList.prototype, "_onToggleCollapse", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedList.prototype, "_onToggleSelectGroup", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedList.prototype, "_onToggleSummarize", null);
	    return GroupedList;
	}(Utilities_1.BaseComponent));
	exports.GroupedList = GroupedList;
	


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	var index_1 = __webpack_require__(119);
	var GroupFooter_1 = __webpack_require__(142);
	var GroupHeader_1 = __webpack_require__(148);
	var List_1 = __webpack_require__(155);
	var Utilities_2 = __webpack_require__(25);
	var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
	var GroupedListSection = (function (_super) {
	    __extends(GroupedListSection, _super);
	    function GroupedListSection(props) {
	        _super.call(this, props);
	        var selection = props.selection, group = props.group;
	        this._subGroups = {};
	        this.state = {
	            isDropping: false,
	            isSelected: (selection && group) ? selection.isRangeSelected(group.startIndex, group.count) : false
	        };
	    }
	    GroupedListSection.prototype.componentDidMount = function () {
	        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
	        if (dragDropHelper) {
	            dragDropHelper.subscribe(this.refs.root, this._events, this._getGroupDragDropOptions());
	        }
	        if (selection) {
	            this._events.on(selection, index_1.SELECTION_CHANGE, this._onSelectionChange);
	        }
	    };
	    GroupedListSection.prototype.componentWillUnmount = function () {
	        var dragDropHelper = this.props.dragDropHelper;
	        if (dragDropHelper) {
	            dragDropHelper.unsubscribe(this.refs.root, this._dragDropKey);
	        }
	    };
	    GroupedListSection.prototype.render = function () {
	        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupFooter, onRenderGroupFooter = _c === void 0 ? this._onRenderGroupFooter : _c;
	        var isSelected = this.state.isSelected;
	        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
	        var isFooterVisible = group && !group.children && !group.isCollapsed && !group.isShowingAll && group.count > renderCount;
	        var hasNestedGroups = group && group.children && group.children.length > 0;
	        var dividerProps = {
	            group: group,
	            groupIndex: groupIndex,
	            groupLevel: group ? group.level : 0,
	            isSelected: isSelected,
	            viewport: viewport,
	            selectionMode: selectionMode
	        };
	        var groupHeaderProps = Utilities_2.assign({}, headerProps, dividerProps);
	        var groupFooterProps = Utilities_2.assign({}, footerProps, dividerProps);
	        return (React.createElement("div", {ref: 'root', className: Utilities_2.css('ms-GroupedList-group', this._getDroppingClassName())}, 
	            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader), 
	            group && group.isCollapsed ?
	                null :
	                (hasNestedGroups ?
	                    (React.createElement(List_1.List, {ref: 'list', items: group.children, onRenderCell: this._renderSubGroup, getItemCountForPage: function () { return 1; }})) :
	                    this._onRenderGroup(renderCount)), 
	            isFooterVisible && onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
	    };
	    GroupedListSection.prototype.forceUpdate = function () {
	        _super.prototype.forceUpdate.call(this);
	        this.forceListUpdate();
	    };
	    GroupedListSection.prototype.forceListUpdate = function () {
	        var group = this.props.group;
	        if (this.refs.list) {
	            this.refs.list.forceUpdate();
	            if (group && group.children && group.children.length > 0) {
	                var subGroupCount = group.children.length;
	                for (var i = 0; i < subGroupCount; i++) {
	                    var subGroup = this.refs.list.refs['subGroup_' + String(i)];
	                    if (subGroup) {
	                        subGroup.forceListUpdate();
	                    }
	                }
	            }
	        }
	        else {
	            var subGroup = this.refs['subGroup_' + String(0)];
	            if (subGroup) {
	                subGroup.forceListUpdate();
	            }
	        }
	    };
	    GroupedListSection.prototype._onRenderGroupHeader = function (props) {
	        return React.createElement(GroupHeader_1.GroupHeader, __assign({}, props));
	    };
	    GroupedListSection.prototype._onRenderGroupFooter = function (props) {
	        return React.createElement(GroupFooter_1.GroupFooter, __assign({}, props));
	    };
	    GroupedListSection.prototype._onSelectionChange = function () {
	        var _a = this.props, group = _a.group, selection = _a.selection;
	        var isSelected = selection.isRangeSelected(group.startIndex, group.count);
	        if (isSelected !== this.state.isSelected) {
	            this.setState({ isSelected: isSelected });
	        }
	    };
	    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
	        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth;
	        var count = group ? group.count : items.length;
	        var startIndex = group ? group.startIndex : 0;
	        return (React.createElement(List_1.List, __assign({items: items, onRenderCell: function (item, itemIndex) { return onRenderCell(groupNestingDepth, item, itemIndex); }, ref: 'list', renderCount: Math.min(count, renderCount), startIndex: startIndex}, listProps)));
	    };
	    GroupedListSection.prototype._renderSubGroup = function (subGroup, subGroupIndex) {
	        var _a = this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, items = _a.items, headerProps = _a.headerProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport;
	        return (!subGroup || subGroup.count > 0) ? (React.createElement(GroupedListSection, {ref: 'subGroup_' + subGroupIndex, key: this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: groupNestingDepth, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, viewport: viewport})) : null;
	    };
	    GroupedListSection.prototype._getGroupKey = function (group, groupIndex) {
	        return 'group-' + (group ?
	            group.key + '-' + group.count :
	            '');
	    };
	    /**
	     * collect all the data we need to enable drag/drop for a group
	     */
	    GroupedListSection.prototype._getGroupDragDropOptions = function () {
	        var _a = this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
	        this._dragDropKey = 'group-' + (group ? group.key : String(groupIndex));
	        var options = {
	            key: this._dragDropKey,
	            eventMap: eventsToRegister,
	            selectionIndex: -1,
	            context: { data: group, index: groupIndex, isGroup: true },
	            canDrag: function () { return false; },
	            canDrop: dragDropEvents.canDrop,
	            onDragStart: null,
	            updateDropState: this._updateDroppingState
	        };
	        return options;
	    };
	    /**
	     * update groupIsDropping state based on the input value, which is used to change style during drag and drop
	     *
	     * @private
	     * @param {boolean} newValue (new isDropping state value)
	     * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
	     */
	    GroupedListSection.prototype._updateDroppingState = function (newIsDropping, event) {
	        var isDropping = this.state.isDropping;
	        var dragDropEvents = this.props.dragDropEvents;
	        if (!isDropping) {
	            if (dragDropEvents.onDragLeave) {
	                dragDropEvents.onDragLeave(event, null);
	            }
	        }
	        else {
	            if (dragDropEvents.onDragEnter) {
	                dragDropEvents.onDragEnter(event, null);
	            }
	        }
	        if (isDropping !== newIsDropping) {
	            this.setState({ isDropping: newIsDropping });
	        }
	    };
	    /**
	     * get the correct css class to reflect the dropping state for a given group
	     *
	     * If the group is the current drop target, return the default dropping class name
	     * Otherwise, return '';
	     *
	     */
	    GroupedListSection.prototype._getDroppingClassName = function () {
	        var isDropping = this.state.isDropping;
	        var group = this.props.group;
	        var droppingClass = group && isDropping ? DEFAULT_DROPPING_CSS_CLASS : '';
	        return droppingClass;
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedListSection.prototype, "_onRenderGroupHeader", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedListSection.prototype, "_onRenderGroupFooter", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedListSection.prototype, "_renderSubGroup", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedListSection.prototype, "_getGroupDragDropOptions", null);
	    __decorate([
	        Utilities_1.autobind
	    ], GroupedListSection.prototype, "_updateDroppingState", null);
	    return GroupedListSection;
	}(Utilities_1.BaseComponent));
	exports.GroupedListSection = GroupedListSection;
	


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Link_1 = __webpack_require__(143);
	var GroupSpacer_1 = __webpack_require__(129);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(147);
	var GroupFooter = (function (_super) {
	    __extends(GroupFooter, _super);
	    function GroupFooter() {
	        _super.apply(this, arguments);
	    }
	    GroupFooter.prototype.render = function () {
	        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, showAllLinkText = _a.showAllLinkText;
	        return group && (React.createElement("div", {className: 'ms-groupFooter'}, 
	            GroupSpacer_1.GroupSpacer({ count: groupLevel }), 
	            React.createElement(Link_1.Link, {onClick: this._onSummarizeClick}, showAllLinkText)));
	    };
	    GroupFooter.prototype._onSummarizeClick = function (ev) {
	        this.props.onToggleSummarize(this.props.group);
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    __decorate([
	        autobind_1.autobind
	    ], GroupFooter.prototype, "_onSummarizeClick", null);
	    return GroupFooter;
	}(React.Component));
	exports.GroupFooter = GroupFooter;
	


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(144));
	


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(145));
	


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(146);
	var Link = (function (_super) {
	    __extends(Link, _super);
	    function Link() {
	        _super.apply(this, arguments);
	    }
	    Link.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, children = _a.children, className = _a.className, href = _a.href;
	        return (href ? (React.createElement("a", __assign({role: 'link'}, Utilities_1.getNativeProps(this.props, Utilities_1.anchorProperties), {className: Utilities_1.css('ms-Link', className, {
	            'is-disabled': disabled
	        }), onClick: this._onClick, ref: this._resolveRef('_link')}), children)) : (React.createElement("button", __assign({role: 'button'}, Utilities_1.getNativeProps(this.props, Utilities_1.buttonProperties), {className: Utilities_1.css('ms-Link', className, {
	            'is-disabled': disabled
	        }), onClick: this._onClick, ref: this._resolveRef('_link')}), children)));
	    };
	    Link.prototype.focus = function () {
	        if (this._link) {
	            this._link.focus();
	        }
	    };
	    Link.prototype._onClick = function (ev) {
	        var onClick = this.props.onClick;
	        if (onClick) {
	            onClick(ev);
	        }
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], Link.prototype, "_onClick", null);
	    return Link;
	}(BaseComponent_1.BaseComponent));
	exports.Link = Link;
	


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Link{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";text-decoration:none;cursor:pointer;padding:0;margin:0;background:0 0;display:inline;border:none;width:auto;max-width:100%;overflow:inherit;text-overflow:inherit}.ms-Link::-moz-focus-inner{border:0}.ms-Link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-Link{text-align:left}html[dir=rtl] .ms-Link{text-align:right}.ms-Link.is-disabled{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";pointer-events:none;cursor:default}.ms-Link:focus,.ms-Link:hover{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Link:active{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}button.ms-Link{font-size:inherit}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-groupFooter{position:relative;padding:10px 84px;cursor:pointer}.ms-groupFooter .ms-Link{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var index_1 = __webpack_require__(119);
	var Check_1 = __webpack_require__(127);
	var GroupSpacer_1 = __webpack_require__(129);
	var Spinner_1 = __webpack_require__(149);
	var FocusZone_1 = __webpack_require__(21);
	var css_1 = __webpack_require__(7);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(154);
	var GroupHeader = (function (_super) {
	    __extends(GroupHeader, _super);
	    function GroupHeader(props) {
	        _super.call(this, props);
	        this.state = {
	            isCollapsed: this.props.group && this.props.group.isCollapsed,
	            isLoadingVisible: false
	        };
	    }
	    GroupHeader.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.group) {
	            var newCollapsed = newProps.group.isCollapsed;
	            var isGroupLoading = newProps.headerProps && newProps.headerProps.isGroupLoading;
	            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);
	            this.setState({
	                isCollapsed: newCollapsed,
	                isLoadingVisible: newLoadingVisible
	            });
	        }
	    };
	    GroupHeader.prototype.render = function () {
	        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, isSelected = _a.isSelected, selected = _a.selected, isCollapsedGroupSelectVisible = _a.isCollapsedGroupSelectVisible;
	        var _b = this.state, isCollapsed = _b.isCollapsed, isLoadingVisible = _b.isLoadingVisible;
	        if (isCollapsedGroupSelectVisible === undefined) {
	            isCollapsedGroupSelectVisible = true;
	        }
	        var canSelectGroup = selectionMode === index_1.SelectionMode.multiple;
	        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
	        var currentlySelected = isSelected || selected;
	        return group && (React.createElement("div", {className: css_1.css('ms-GroupHeader', {
	            'is-selected': currentlySelected
	        }), style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, "aria-label": group.ariaLabel || group.name, "data-is-focusable": true}, 
	            React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, 
	                isSelectionCheckVisible ? (React.createElement("button", {className: 'ms-GroupHeader-check', "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick}, 
	                    React.createElement(Check_1.Check, {checked: currentlySelected})
	                )) : (selectionMode !== index_1.SelectionMode.none ? GroupSpacer_1.GroupSpacer({ count: 1 }) : null), 
	                GroupSpacer_1.GroupSpacer({ count: groupLevel }), 
	                React.createElement("div", {className: 'ms-GroupHeader-dropIcon'}, 
	                    React.createElement("i", {className: 'ms-Icon ms-Icon--Tag'})
	                ), 
	                React.createElement("button", {className: 'ms-GroupHeader-expand', onClick: this._onToggleCollapse}, 
	                    React.createElement("i", {className: css_1.css('ms-Icon ms-Icon--ChevronDown', {
	                        'is-collapsed': isCollapsed
	                    })})
	                ), 
	                React.createElement("div", {className: 'ms-GroupHeader-title ms-font-xl'}, 
	                    React.createElement("span", null, 
	                        group.name, 
	                        " "), 
	                    React.createElement("span", null, 
	                        "(", 
	                        group.count, 
	                        ") ")), 
	                React.createElement("div", {className: css_1.css('ms-GroupHeader-loading', { 'is-loading': isLoadingVisible })}, 
	                    React.createElement(Spinner_1.Spinner, {label: loadingText})
	                ))
	        ));
	    };
	    GroupHeader.prototype._onToggleCollapse = function (ev) {
	        var _a = this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
	        var isCollapsed = this.state.isCollapsed;
	        var newCollapsed = !isCollapsed;
	        var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
	        this.setState({
	            isCollapsed: newCollapsed,
	            isLoadingVisible: newLoadingVisible
	        });
	        if (onToggleCollapse) {
	            onToggleCollapse(group);
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    GroupHeader.prototype._onToggleSelectGroupClick = function (ev) {
	        var _a = this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
	        if (onToggleSelectGroup) {
	            onToggleSelectGroup(group);
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    GroupHeader.prototype._onHeaderClick = function () {
	        var _a = this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
	        if (onGroupHeaderClick) {
	            onGroupHeaderClick(group);
	        }
	        else if (onToggleSelectGroup) {
	            onToggleSelectGroup(group);
	        }
	    };
	    __decorate([
	        autobind_1.autobind
	    ], GroupHeader.prototype, "_onToggleCollapse", null);
	    __decorate([
	        autobind_1.autobind
	    ], GroupHeader.prototype, "_onToggleSelectGroupClick", null);
	    __decorate([
	        autobind_1.autobind
	    ], GroupHeader.prototype, "_onHeaderClick", null);
	    return GroupHeader;
	}(React.Component));
	exports.GroupHeader = GroupHeader;
	


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(150));
	


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(151));
	__export(__webpack_require__(152));
	


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Spinner_Props_1 = __webpack_require__(152);
	var css_1 = __webpack_require__(7);
	__webpack_require__(153);
	var Spinner = (function (_super) {
	    __extends(Spinner, _super);
	    function Spinner() {
	        _super.apply(this, arguments);
	    }
	    Spinner.prototype.render = function () {
	        var _a = this.props, type = _a.type, label = _a.label, className = _a.className;
	        return (React.createElement("div", {className: css_1.css('ms-Spinner', className)}, 
	            React.createElement("div", {className: css_1.css('ms-Spinner-circle', { 'ms-Spinner--normal': type === Spinner_Props_1.SpinnerType.normal }, { 'ms-Spinner--large': type === Spinner_Props_1.SpinnerType.large })}), 
	            label && (React.createElement("div", {className: 'ms-Spinner-label'}, label))));
	    };
	    Spinner.defaultProps = {
	        type: Spinner_Props_1.SpinnerType.normal
	    };
	    return Spinner;
	}(React.Component));
	exports.Spinner = Spinner;
	


/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";
	(function (SpinnerType) {
	    SpinnerType[SpinnerType["normal"] = 0] = "normal";
	    SpinnerType[SpinnerType["large"] = 1] = "large";
	})(exports.SpinnerType || (exports.SpinnerType = {}));
	var SpinnerType = exports.SpinnerType;
	


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": "@-webkit-keyframes ms-Spinner-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ms-Spinner-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ms-Spinner>.ms-Spinner-circle{margin:auto;box-sizing:border-box;border-radius:50%;width:100%;height:100%;border:1.5px solid " }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";border-top-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";-webkit-animation:ms-Spinner-spin 1.3s infinite cubic-bezier(.53,.21,.29,.67);animation:ms-Spinner-spin 1.3s infinite cubic-bezier(.53,.21,.29,.67)}.ms-Spinner>.ms-Spinner-circle.ms-Spinner--normal{width:20px;height:20px}.ms-Spinner>.ms-Spinner-circle.ms-Spinner--large{width:28px;height:28px}.ms-Spinner>.ms-Spinner-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";margin-top:10px;text-align:center}@media screen and (-ms-high-contrast:active){.ms-Spinner>.ms-Spinner-circle{border-top-style:none}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-GroupHeader{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-GroupHeader::-moz-focus-inner{border:0}.ms-GroupHeader{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-GroupHeader:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-GroupHeader:hover{background:" }, { "theme": "themeLighterAlt", "defaultValue": "#eff6fc" }, { "rawString": "}.ms-GroupHeader.is-selected{background:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": "}.ms-GroupHeader.is-selected:hover{background:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-GroupHeader-check,.ms-GroupHeader-expand{display:inline-block;cursor:default;padding:8px;-webkit-transform:translateY(50%);transform:translateY(50%);margin-top:-12px;box-sizing:border-box;vertical-align:top;background:0 0;border:none;font-size:12px;top:4px}.ms-GroupHeader-check::-moz-focus-inner,.ms-GroupHeader-expand::-moz-focus-inner{border:0}.ms-GroupHeader-check,.ms-GroupHeader-expand{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-GroupHeader-check:focus:after,.ms-Fabric.is-focusVisible .ms-GroupHeader-expand:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-GroupHeader-check{opacity:0;margin-top:-10px}.ms-GroupHeader-check:focus{opacity:1}.ms-GroupHeader.is-selected .ms-GroupHeader-check,.ms-GroupHeader:hover .ms-GroupHeader-check{opacity:1}.ms-GroupHeader-title{padding:14px 6px;display:inline-block;cursor:pointer;outline:0}.ms-GroupHeader-expand{width:36px;height:40px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-GroupHeader-expand .ms-Icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.ms-GroupHeader-expand .ms-Icon.is-collapsed{-webkit-transform:rotate(0);transform:rotate(0)}.ms-GroupHeader-loading{display:inline-block;visibility:hidden;opacity:0;padding:0 16px;vertical-align:middle;-webkit-transition:visibility 367ms,opacity 367ms;transition:visibility 367ms,opacity 367ms}.ms-GroupHeader-loading.is-loading{visibility:visible;opacity:1}.ms-GroupHeader-dropIcon{display:inline-block;position:relative;top:-16px;font-size:20px;color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";-webkit-transition:opacity 467ms cubic-bezier(.39,.575,.565,1),-webkit-transform 267ms cubic-bezier(.6,-.28,.735,.045);transition:opacity 467ms cubic-bezier(.39,.575,.565,1),-webkit-transform 267ms cubic-bezier(.6,-.28,.735,.045);transition:transform 267ms cubic-bezier(.6,-.28,.735,.045),opacity 467ms cubic-bezier(.39,.575,.565,1);transition:transform 267ms cubic-bezier(.6,-.28,.735,.045),opacity 467ms cubic-bezier(.39,.575,.565,1),-webkit-transform 267ms cubic-bezier(.6,-.28,.735,.045);opacity:0;-webkit-transform:rotate(.2deg) scale(.65);transform:rotate(.2deg) scale(.65);-webkit-transform-origin:10px 10px;transform-origin:10px 10px}html[dir=ltr] .ms-GroupHeader-dropIcon{left:-26px}html[dir=rtl] .ms-GroupHeader-dropIcon{right:-26px}.ms-GroupHeader-dropIcon .ms-Icon--Tag{position:absolute}.ms-GroupedList-group.is-dropping>.ms-GroupHeader .ms-GroupHeader-dropIcon{-webkit-transition:opacity 167ms cubic-bezier(.39,.575,.565,1),-webkit-transform 467ms cubic-bezier(.075,.82,.165,1);transition:opacity 167ms cubic-bezier(.39,.575,.565,1),-webkit-transform 467ms cubic-bezier(.075,.82,.165,1);transition:transform 467ms cubic-bezier(.075,.82,.165,1),opacity 167ms cubic-bezier(.39,.575,.565,1);transition:transform 467ms cubic-bezier(.075,.82,.165,1),opacity 167ms cubic-bezier(.39,.575,.565,1),-webkit-transform 467ms cubic-bezier(.075,.82,.165,1);-webkit-transition-delay:367ms;transition-delay:367ms;opacity:1;-webkit-transform:rotate(.2deg) scale(1);transform:rotate(.2deg) scale(1)}.ms-GroupedList-group.is-dropping .ms-GroupHeader-check{opacity:0}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(156));
	


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(157));
	


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	var scroll_1 = __webpack_require__(43);
	var RESIZE_DELAY = 16;
	var MIN_SCROLL_UPDATE_DELAY = 100;
	var MAX_SCROLL_UPDATE_DELAY = 500;
	var IDLE_DEBOUNCE_DELAY = 200;
	var DEFAULT_ITEMS_PER_PAGE = 10;
	var DEFAULT_PAGE_HEIGHT = 30;
	var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
	var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
	var EMPTY_RECT = {
	    top: -1,
	    bottom: -1,
	    left: -1,
	    right: -1,
	    width: 0,
	    height: 0
	};
	// Naming expensive measures so that they're named in profiles.
	var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
	var _measureSurfaceRect = _measurePageRect;
	/**
	 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback if
	 * provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if provided by
	 * the caller, or by cached measurements if available, or by a running average, or a default fallback.
	 *
	 * The algorithm for rendering pages works like this:
	 *
	 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
	 * 2. If changes are necessary, apply changes (add/remove pages)
	 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
	 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
	 *
	 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
	 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
	 *
	 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
	 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
	 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
	 */
	var List = (function (_super) {
	    __extends(List, _super);
	    function List(props) {
	        _super.call(this, props);
	        this.state = {
	            pages: []
	        };
	        this._estimatedPageHeight = 0;
	        this._totalEstimates = 0;
	        this._requiredWindowsAhead = 0;
	        this._requiredWindowsBehind = 0;
	        // Track the measure version for everything.
	        this._measureVersion = 0;
	        // Ensure that scrolls are lazy updated.
	        this._onAsyncScroll = this._async.debounce(this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
	            leading: false,
	            maxWait: MAX_SCROLL_UPDATE_DELAY
	        });
	        this._onAsyncIdle = this._async.debounce(this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
	            leading: false
	        });
	        this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
	            leading: false
	        });
	        this._cachedPageHeights = {};
	        this._estimatedPageHeight = 0;
	        this._focusedIndex = -1;
	        this._scrollingToIndex = -1;
	    }
	    List.prototype.componentDidMount = function () {
	        this._updatePages();
	        this._measureVersion++;
	        this._scrollElement = scroll_1.findScrollableParent(this.refs.root);
	        this._events.on(window, 'resize', this._onAsyncResize);
	        this._events.on(this.refs.root, 'focus', this._onFocus, true);
	        if (this._scrollElement) {
	            this._events.on(this._scrollElement, 'scroll', this._onScroll);
	            this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
	        }
	    };
	    List.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.items !== this.props.items ||
	            newProps.renderCount !== this.props.renderCount ||
	            newProps.startIndex !== this.props.startIndex) {
	            this._measureVersion++;
	            this._updatePages(newProps);
	        }
	    };
	    List.prototype.shouldComponentUpdate = function (newProps, newState) {
	        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var oldPages = this.state.pages;
	        var newPages = newState.pages, measureVersion = newState.measureVersion;
	        var shouldComponentUpdate = false;
	        if (this._measureVersion === measureVersion &&
	            newProps.renderedWindowsAhead === renderedWindowsAhead,
	            newProps.renderedWindowsBehind === renderedWindowsBehind,
	            newProps.items === this.props.items &&
	                oldPages.length === newPages.length) {
	            for (var i = 0; i < oldPages.length; i++) {
	                var oldPage = oldPages[i];
	                var newPage = newPages[i];
	                if ((oldPage.key !== newPage.key ||
	                    oldPage.itemCount !== newPage.itemCount)) {
	                    shouldComponentUpdate = true;
	                    break;
	                }
	            }
	        }
	        else {
	            shouldComponentUpdate = true;
	        }
	        return shouldComponentUpdate;
	    };
	    List.prototype.forceUpdate = function () {
	        // Ensure that when the list is force updated we update the pages first before render.
	        this._updateRenderRects(this.props, true);
	        this._updatePages();
	        this._measureVersion++;
	        _super.prototype.forceUpdate.call(this);
	    };
	    List.prototype.render = function () {
	        var className = this.props.className;
	        var pages = this.state.pages;
	        var pageElements = [];
	        for (var i = 0; i < pages.length; i++) {
	            pageElements.push(this._renderPage(pages[i]));
	        }
	        return (React.createElement("div", {ref: 'root', className: Utilities_1.css('ms-List', className)}, 
	            React.createElement("div", {ref: 'surface', className: 'ms-List-surface'}, pageElements)
	        ));
	    };
	    List.prototype._renderPage = function (page) {
	        var onRenderCell = this.props.onRenderCell;
	        var cells = [];
	        var pageStyle = this._getPageStyle(page);
	        for (var i = 0; page.items && i < page.items.length; i++) {
	            var item = page.items[i];
	            var itemKey = (item ? item.key : null);
	            if (itemKey === null || itemKey === undefined) {
	                itemKey = page.startIndex + i;
	            }
	            cells.push(React.createElement("div", {className: 'ms-List-cell', key: itemKey, "data-list-index": i + page.startIndex, "data-automationid": 'ListCell'}, onRenderCell(item, page.startIndex + i)));
	        }
	        return (React.createElement("div", {className: 'ms-List-page', key: page.key, ref: page.key, style: pageStyle}, cells));
	    };
	    /** Generate the style object for the page. */
	    List.prototype._getPageStyle = function (page) {
	        var style;
	        var getPageStyle = this.props.getPageStyle;
	        if (getPageStyle) {
	            style = getPageStyle(page);
	        }
	        if (!page.items) {
	            style = style || {};
	            style.height = page.height;
	        }
	        return style;
	    };
	    /** Track the last item index focused so that we ensure we keep it rendered. */
	    List.prototype._onFocus = function (ev) {
	        var target = ev.target;
	        while (target !== this.refs.surface) {
	            var indexString = target.getAttribute('data-list-index');
	            if (indexString) {
	                this._focusedIndex = Number(indexString);
	                break;
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    /**
	     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
	     * we will call onAsyncIdle which will reset it back to it's correct value.
	     */
	    List.prototype._onScroll = function () {
	        this._requiredWindowsAhead = 0;
	        this._requiredWindowsBehind = 0;
	    };
	    /**
	     * Debounced method to asynchronously update the visible region on a scroll event.
	     */
	    List.prototype._onAsyncScroll = function () {
	        this._updateRenderRects();
	        // Only update pages when the visible rect falls outside of the materialized rect.
	        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
	            this._updatePages();
	        }
	        else {
	        }
	    };
	    /**
	     * This is an async debounced method that will try and increment the windows we render. If we can increment
	     * either, we increase the amount we render and re-evaluate.
	     */
	    List.prototype._onAsyncIdle = function () {
	        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var _b = this, requiredWindowsAhead = _b._requiredWindowsAhead, requiredWindowsBehind = _b._requiredWindowsBehind;
	        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
	        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
	        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
	            // console.log('idling', windowsBehind, windowsAhead);
	            this._requiredWindowsAhead = windowsAhead;
	            this._requiredWindowsBehind = windowsBehind;
	            this._updateRenderRects();
	            this._updatePages();
	        }
	        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
	            // Async increment on next tick.
	            this._onAsyncIdle();
	        }
	    };
	    List.prototype._onAsyncResize = function () {
	        this.forceUpdate();
	    };
	    List.prototype._updatePages = function (props) {
	        var _this = this;
	        var _a = (props || this.props), items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
	        renderCount = this._getRenderCount(props);
	        // console.log('updating pages');
	        if (!this._requiredRect) {
	            this._updateRenderRects(props);
	        }
	        var newListState = this._buildPages(items, startIndex, renderCount);
	        var oldListPages = this.state.pages;
	        this.setState(newListState, function () {
	            // If measured version is invalid since we've updated the DOM
	            var heightsChanged = _this._updatePageMeasurements(oldListPages, newListState.pages);
	            // On first render, we should re-measure so that we don't get a visual glitch.
	            if (heightsChanged) {
	                _this._materializedRect = null;
	                if (!_this._hasCompletedFirstRender) {
	                    _this._hasCompletedFirstRender = true;
	                    _this._updatePages();
	                }
	                else {
	                    _this._onAsyncScroll();
	                }
	            }
	            else {
	                // Enqueue an idle bump.
	                _this._onAsyncIdle();
	            }
	        });
	    };
	    List.prototype._updatePageMeasurements = function (oldPages, newPages) {
	        var renderedIndexes = {};
	        var heightChanged = false;
	        var renderCount = this._getRenderCount();
	        for (var i = 0; i < oldPages.length; i++) {
	            var page = oldPages[i];
	            if (page.items) {
	                renderedIndexes[page.startIndex] = page;
	            }
	        }
	        for (var i = 0; i < newPages.length; i++) {
	            var page = newPages[i];
	            if (page.items) {
	                // Only evaluate page height if the page contains less items than total.
	                if (page.items.length < renderCount) {
	                    heightChanged = this._measurePage(page) || heightChanged;
	                }
	                if (!renderedIndexes[page.startIndex]) {
	                    this._onPageAdded(page);
	                }
	                else {
	                    delete renderedIndexes[page.startIndex];
	                }
	            }
	        }
	        for (var index in renderedIndexes) {
	            if (renderedIndexes.hasOwnProperty(index)) {
	                this._onPageRemoved(renderedIndexes[index]);
	            }
	        }
	        return heightChanged;
	    };
	    /**
	     * Given a page, measure its dimensions, update cache.
	     * @returns True if the height has changed.
	     */
	    List.prototype._measurePage = function (page) {
	        var hasChangedHeight = false;
	        var pageElement = this.refs[page.key];
	        var cachedHeight = this._cachedPageHeights[page.startIndex];
	        // console.log('   * measure attempt', page.startIndex, cachedHeight);
	        if (pageElement && (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
	            var newClientRect = _measurePageRect(pageElement);
	            hasChangedHeight = page.height !== newClientRect.height;
	            // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
	            page.height = newClientRect.height;
	            this._cachedPageHeights[page.startIndex] = {
	                height: newClientRect.height,
	                measureVersion: this._measureVersion
	            };
	            this._estimatedPageHeight = Math.round(((this._estimatedPageHeight * this._totalEstimates) + newClientRect.height) /
	                (this._totalEstimates + 1));
	            this._totalEstimates++;
	        }
	        return hasChangedHeight;
	    };
	    /** Called when a page has been added to the DOM. */
	    List.prototype._onPageAdded = function (page) {
	        var onPageAdded = this.props.onPageAdded;
	        // console.log('page added', page.startIndex, this.state.pages.map(page=>page.key).join(', '));
	        if (onPageAdded) {
	            onPageAdded(page);
	        }
	    };
	    /** Called when a page has been removed from the DOM. */
	    List.prototype._onPageRemoved = function (page) {
	        var onPageRemoved = this.props.onPageRemoved;
	        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page=>page.key).join(', '));
	        if (onPageRemoved) {
	            onPageRemoved(page);
	        }
	    };
	    /** Build up the pages that should be rendered. */
	    List.prototype._buildPages = function (items, startIndex, renderCount) {
	        var materializedRect = Utilities_1.assign({}, EMPTY_RECT);
	        var itemsPerPage = 1;
	        var pages = [];
	        var pageTop = 0;
	        var currentSpacer = null;
	        var focusedIndex = this._focusedIndex;
	        var endIndex = startIndex + renderCount;
	        // First render is very important to track; when we render cells, we have no idea of estimated page height.
	        // So we should default to rendering only the first page so that we can get information.
	        // However if the user provides a measure function, let's just assume they know the right heights.
	        var isFirstRender = this._estimatedPageHeight === 0 && !this.props.getPageHeight;
	        var _loop_1 = function(itemIndex) {
	            itemsPerPage = this_1._getItemCountForPage(itemIndex, this_1._allowedRect);
	            var pageHeight = this_1._getPageHeight(itemIndex, itemsPerPage, this_1._surfaceRect);
	            var pageBottom = pageTop + pageHeight - 1;
	            var isPageRendered = Utilities_1.findIndex(this_1.state.pages, function (page) { return page.items && page.startIndex === itemIndex; }) > -1;
	            var isPageInAllowedRange = pageBottom >= this_1._allowedRect.top && pageTop <= this_1._allowedRect.bottom;
	            var isPageInRequiredRange = pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom;
	            var isPageVisible = !isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered));
	            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < (itemIndex + itemsPerPage);
	            var isFirstPage = itemIndex === startIndex;
	            // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' + isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
	            // Only render whats visible, focused, or first page.
	            if (isPageVisible || isPageFocused || isFirstPage) {
	                if (currentSpacer) {
	                    pages.push(currentSpacer);
	                    currentSpacer = null;
	                }
	                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
	                var newPage = this_1._createPage(null, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex);
	                newPage.top = pageTop;
	                newPage.height = pageHeight;
	                pages.push(newPage);
	                if (isPageInRequiredRange) {
	                    _mergeRect(materializedRect, {
	                        top: pageTop,
	                        bottom: pageBottom,
	                        height: pageHeight,
	                        left: this_1._allowedRect.left,
	                        right: this_1._allowedRect.right,
	                        width: this_1._allowedRect.width
	                    });
	                }
	            }
	            else {
	                if (!currentSpacer) {
	                    currentSpacer = this_1._createPage('spacer-' + itemIndex, null, itemIndex, 0);
	                }
	                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
	                currentSpacer.itemCount += itemsPerPage;
	            }
	            pageTop += (pageBottom - pageTop + 1);
	            if (isFirstRender) {
	                return "break";
	            }
	        };
	        var this_1 = this;
	        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
	            var state_1 = _loop_1(itemIndex);
	            if (state_1 === "break") break;
	        }
	        if (currentSpacer) {
	            currentSpacer.key = 'spacer-end';
	            pages.push(currentSpacer);
	        }
	        this._materializedRect = materializedRect;
	        // console.log('materialized: ', materializedRect);
	        return {
	            pages: pages,
	            measureVersion: this._measureVersion
	        };
	    };
	    /**
	     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
	     * cached height, or estimated page height, or default page height.
	     */
	    List.prototype._getPageHeight = function (itemIndex, itemsPerPage, visibleRect) {
	        if (this.props.getPageHeight) {
	            return this.props.getPageHeight(itemIndex, visibleRect);
	        }
	        else {
	            var cachedHeight = (this._cachedPageHeights[itemIndex]);
	            return cachedHeight ? cachedHeight.height : (this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT);
	        }
	    };
	    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
	        var itemsPerPage = this.props.getItemCountForPage ? this.props.getItemCountForPage(itemIndex, visibileRect) : DEFAULT_ITEMS_PER_PAGE;
	        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
	    };
	    List.prototype._createPage = function (pageKey, items, startIndex, count, style) {
	        pageKey = pageKey || ('page-' + startIndex);
	        // Fill undefined cells because array.map will ignore undefined cells.
	        if (items) {
	            for (var i = 0; i < items.length; i++) {
	                items[i] = items[i] || null;
	            }
	        }
	        return {
	            key: pageKey,
	            startIndex: startIndex === undefined ? -1 : startIndex,
	            itemCount: (count === undefined) ? (items ? items.length : 0) : count,
	            items: items,
	            style: style || {},
	            top: 0,
	            height: 0
	        };
	    };
	    List.prototype._getRenderCount = function (props) {
	        var _a = props || this.props, items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
	        return (renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount);
	    };
	    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
	    List.prototype._updateRenderRects = function (props, forceUpdate) {
	        var _a = (props || this.props), renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var pages = this.state.pages;
	        var renderCount = this._getRenderCount(props);
	        var surfaceRect = this._surfaceRect;
	        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
	        if (forceUpdate ||
	            !pages ||
	            !this._surfaceRect ||
	            (pages.length > 0 && pages[0].items && pages[0].items.length < renderCount)) {
	            surfaceRect = this._surfaceRect = _measureSurfaceRect(this.refs.surface);
	        }
	        // If the surface is above the container top or below the container bottom, or if this is not the first
	        // render return empty rect.
	        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
	        // used to calculate the width of the list items.
	        var visibleTop = Math.max(0, -surfaceRect.top);
	        var visibleRect = {
	            top: visibleTop,
	            left: surfaceRect.left,
	            bottom: visibleTop + window.innerHeight,
	            right: surfaceRect.right,
	            width: surfaceRect.width,
	            height: window.innerHeight
	        };
	        // The required/allowed rects are adjusted versions of the visible rect.
	        this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
	        this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
	    };
	    List.defaultProps = {
	        startIndex: 0,
	        onRenderCell: function (item, index, containsFocus) { return (React.createElement("div", null, (item && item.name) || '')); },
	        renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
	        renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND
	    };
	    return List;
	}(Utilities_1.BaseComponent));
	exports.List = List;
	function _expandRect(rect, pagesBefore, pagesAfter) {
	    var top = rect.top - (pagesBefore * rect.height);
	    var height = rect.height + ((pagesBefore + pagesAfter) * rect.height);
	    return {
	        top: top,
	        bottom: top + height,
	        height: height,
	        left: rect.left,
	        right: rect.right,
	        width: rect.width
	    };
	}
	function _isContainedWithin(innerRect, outerRect) {
	    return (innerRect.top >= outerRect.top &&
	        innerRect.left >= outerRect.left &&
	        innerRect.bottom <= outerRect.bottom &&
	        innerRect.right <= outerRect.right);
	}
	function _mergeRect(targetRect, newRect) {
	    targetRect.top = (newRect.top < targetRect.top || targetRect.top === -1) ? newRect.top : targetRect.top;
	    targetRect.left = (newRect.left < targetRect.left || targetRect.left === -1) ? newRect.left : targetRect.left;
	    targetRect.bottom = (newRect.bottom > targetRect.bottom || targetRect.bottom === -1) ? newRect.bottom : targetRect.bottom;
	    targetRect.right = (newRect.right > targetRect.right || targetRect.right === -1) ? newRect.right : targetRect.right;
	    targetRect.width = targetRect.right - targetRect.left + 1;
	    targetRect.height = targetRect.bottom - targetRect.top + 1;
	    return targetRect;
	}
	


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-GroupedList{position:relative;font-size:12px}.ms-GroupedList BUTTON{font-family:inherit;background-color:transparent}.ms-GroupedList>.ms-FocusZone{display:inline-block;vertical-align:top;min-width:1px;min-height:1px}.ms-GroupedList.is-horizontalConstrained{overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}.ms-GroupedList-cell{word-break:break-word}.ms-GroupedList-group{-webkit-transition:background-color 267ms cubic-bezier(.445,.05,.55,.95);transition:background-color 267ms cubic-bezier(.445,.05,.55,.95)}.ms-GroupedList-group.is-dropping{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-GroupedList .ms-List-cell{min-height:38px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var BaseDecorator_1 = __webpack_require__(160);
	var scroll_1 = __webpack_require__(43);
	var dom_1 = __webpack_require__(29);
	var RESIZE_DELAY = 500;
	function withViewport(ComposedComponent) {
	    return (function (_super) {
	        __extends(WithViewportComponent, _super);
	        function WithViewportComponent() {
	            _super.call(this);
	            this.state = {
	                viewport: {
	                    width: 0,
	                    height: 0
	                }
	            };
	        }
	        WithViewportComponent.prototype.componentDidMount = function () {
	            this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
	                leading: false
	            });
	            this._events.on(window, 'resize', this._onAsyncResize);
	            this._updateViewport();
	        };
	        WithViewportComponent.prototype.componentWillUnmount = function () {
	            this._events.dispose();
	        };
	        WithViewportComponent.prototype.render = function () {
	            var viewport = this.state.viewport;
	            var isViewportVisible = viewport.width > 0 && viewport.height > 0;
	            return (React.createElement("div", {className: 'ms-Viewport', ref: 'root', style: { minWidth: 1, minHeight: 1 }}, isViewportVisible && (React.createElement(ComposedComponent, __assign({ref: this._updateComposedComponentRef, viewport: viewport}, this.props)))));
	        };
	        WithViewportComponent.prototype.forceUpdate = function () {
	            this._updateViewport(true);
	        };
	        WithViewportComponent.prototype._onAsyncResize = function () {
	            this._updateViewport();
	        };
	        WithViewportComponent.prototype._updateViewport = function (withForceUpdate) {
	            var _this = this;
	            var viewport = this.state.viewport;
	            var viewportElement = this.refs.root;
	            var scrollElement = scroll_1.findScrollableParent(viewportElement);
	            var scrollRect = dom_1.getRect(scrollElement);
	            var clientRect = dom_1.getRect(viewportElement);
	            var updateComponent = function () {
	                if (withForceUpdate && _this._composedComponentInstance) {
	                    _this._composedComponentInstance.forceUpdate();
	                }
	            };
	            var isSizeChanged = (clientRect.width !== viewport.width ||
	                scrollRect.height !== viewport.height);
	            if (isSizeChanged) {
	                this.setState({
	                    viewport: {
	                        width: clientRect.width,
	                        height: scrollRect.height
	                    }
	                }, updateComponent);
	            }
	            else {
	                updateComponent();
	            }
	        };
	        return WithViewportComponent;
	    }(BaseDecorator_1.BaseDecorator));
	}
	exports.withViewport = withViewport;
	


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var hoist_1 = __webpack_require__(30);
	var BaseComponent_1 = __webpack_require__(12);
	var BaseDecorator = (function (_super) {
	    __extends(BaseDecorator, _super);
	    function BaseDecorator() {
	        _super.call(this);
	        this._updateComposedComponentRef = this._updateComposedComponentRef.bind(this);
	    }
	    /**
	     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
	     * (and unhoisting as appropriate) methods from said component.
	     *
	     * Pass this method as the argument to the 'ref' property of the composed component.
	     */
	    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
	        this._composedComponentInstance = composedComponentInstance;
	        if (composedComponentInstance) {
	            this._hoisted = hoist_1.hoistMethods(this, composedComponentInstance);
	        }
	        else if (this._hoisted) {
	            hoist_1.unhoistMethods(this, this._hoisted);
	        }
	    };
	    return BaseDecorator;
	}(BaseComponent_1.BaseComponent));
	exports.BaseDecorator = BaseDecorator;
	


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReactDOM = __webpack_require__(2);
	var EventGroup_1 = __webpack_require__(14);
	var DISTANCE_FOR_DRAG_SQUARED = 25; // the minimum mouse move distance to treat it as drag event
	var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
	var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
	var DragDropHelper = (function () {
	    function DragDropHelper(params) {
	        this._selection = params.selection;
	        this._dragEnterCounts = {};
	        this._activeTargets = {};
	        this._events = new EventGroup_1.EventGroup(this);
	        // clear drag data when mouse up, use capture event to ensure it will be run
	        this._events.on(document.body, 'mouseup', this._onMouseUp.bind(this), true);
	        this._events.on(document, 'mouseup', this._onDocumentMouseUp.bind(this), true);
	    }
	    DragDropHelper.prototype.dispose = function () {
	        this._events.dispose();
	    };
	    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
	        var _this = this;
	        if (dragDropOptions && root) {
	            var key_1 = dragDropOptions.key, eventMap = dragDropOptions.eventMap, context_1 = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
	            var dragDropTarget = { root: root, options: dragDropOptions };
	            var isDraggable = this._isDraggable(dragDropTarget);
	            var isDroppable = this._isDroppable(dragDropTarget);
	            if (isDraggable || isDroppable) {
	                this._activeTargets[key_1] = dragDropTarget;
	                if (eventMap) {
	                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
	                        var event_1 = eventMap_1[_i];
	                        this._events.on(root, event_1.eventName, event_1.callback.bind(null, context_1));
	                    }
	                }
	            }
	            if (isDroppable) {
	                this._dragEnterCounts[key_1] = 0;
	                // dragenter and dragleave will be fired when hover to the child element
	                // but we only want to change state when enter or leave the current element
	                // use the count to ensure it.
	                events.onAll(root, {
	                    'dragenter': function (event) {
	                        event.preventDefault(); // needed for IE
	                        if (!event.isHandled) {
	                            event.isHandled = true;
	                            _this._dragEnterCounts[key_1]++;
	                            if (_this._dragEnterCounts[key_1] === 1) {
	                                updateDropState_1(true /* isDropping */, event);
	                            }
	                        }
	                    },
	                    'dragleave': function (event) {
	                        if (!event.isHandled) {
	                            event.isHandled = true;
	                            _this._dragEnterCounts[key_1]--;
	                            if (_this._dragEnterCounts[key_1] === 0) {
	                                updateDropState_1(false /* isDropping */, event);
	                            }
	                        }
	                    },
	                    'dragend': function (event) {
	                        _this._dragEnterCounts[key_1] = 0;
	                        updateDropState_1(false /* isDropping */, event);
	                    },
	                    'drop': function (event) {
	                        _this._dragEnterCounts[key_1] = 0;
	                        updateDropState_1(false /* isDropping */, event);
	                    }
	                });
	            }
	            if (isDraggable) {
	                events.on(root, 'mousedown', this._onMouseDown.bind(this, dragDropTarget));
	            }
	        }
	    };
	    DragDropHelper.prototype.unsubscribe = function (root, key) {
	        delete this._activeTargets[key];
	        this._events.off(root);
	    };
	    /**
	     * clear drag data when mouse up on body
	     */
	    DragDropHelper.prototype._onMouseUp = function (event) {
	        this._isDragging = false;
	        if (this._dragData) {
	            for (var key in this._activeTargets) {
	                if (this._activeTargets.hasOwnProperty(key)) {
	                    var target = this._activeTargets[key];
	                    if (target && target.root) {
	                        this._events.off(target.root, 'mousemove');
	                        this._events.off(target.root, 'mouseleave');
	                    }
	                }
	            }
	            if (this._dragData.dropTarget) {
	                // raise dargleave event to let dropTarget know it need to remove dropping style
	                EventGroup_1.EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
	            }
	        }
	        this._dragData = null;
	    };
	    /**
	     * clear drag data when mouse up outside of the document
	     */
	    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
	        if (event.target === document.documentElement) {
	            this._onMouseUp(event);
	        }
	    };
	    /**
	     * when mouse move over a new drop target while dragging some items,
	     * fire dragleave on the old target and fire dragenter to the new target
	     * The target will handle style change on dragenter and dragleave events.
	     */
	    DragDropHelper.prototype._onMouseMove = function (target, event) {
	        var _a = event.buttons, buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
	        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
	            // cancel mouse down event and return early when the primary button is not pressed
	            this._onMouseUp(event);
	            return;
	        }
	        var root = target.root, options = target.options;
	        if (this._isDragging) {
	            if (this._isDroppable(target)) {
	                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
	                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
	                // outer target too, and we need to prevent the outer one from taking over.
	                // So, check if the last dropTarget is not a child of the current.
	                if (this._dragData.dropTarget &&
	                    this._dragData.dropTarget.options.key !== options.key &&
	                    !this._isChild(root, this._dragData.dropTarget.root)) {
	                    EventGroup_1.EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
	                    this._dragData.dropTarget = null;
	                }
	                if (!this._dragData.dropTarget) {
	                    EventGroup_1.EventGroup.raise(root, 'dragenter');
	                    this._dragData.dropTarget = target;
	                }
	            }
	        }
	        else if (this._dragData) {
	            if (this._isDraggable(target)) {
	                var xDiff = this._dragData.clientX - event.clientX;
	                var yDiff = this._dragData.clientY - event.clientY;
	                if (xDiff * xDiff + yDiff * yDiff >= DISTANCE_FOR_DRAG_SQUARED) {
	                    if (this._dragData.dragTarget &&
	                        this._selection.isIndexSelected(options.selectionIndex)) {
	                        this._isDragging = true;
	                        if (options.onDragStart) {
	                            options.onDragStart(options.context.data, options.context.index, this._selection.getSelection(), event);
	                        }
	                    }
	                }
	            }
	        }
	    };
	    /**
	     * when mouse leave a target while dragging some items, fire dragleave to the target
	     */
	    DragDropHelper.prototype._onMouseLeave = function (target, event) {
	        if (this._isDragging) {
	            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.options.key === target.options.key) {
	                EventGroup_1.EventGroup.raise(target.root, 'dragleave');
	                this._dragData.dropTarget = null;
	            }
	        }
	    };
	    /**
	     * when mouse down on a draggable item, we start to track dragdata.
	     */
	    DragDropHelper.prototype._onMouseDown = function (target, event) {
	        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
	            // Ignore anything except the primary button.
	            return;
	        }
	        if (this._isDraggable(target)) {
	            this._dragData = {
	                clientX: event.clientX,
	                clientY: event.clientY,
	                eventTarget: event.target,
	                dragTarget: target
	            };
	            for (var key in this._activeTargets) {
	                if (this._activeTargets.hasOwnProperty(key)) {
	                    var activeTarget = this._activeTargets[key];
	                    if (activeTarget && activeTarget.root) {
	                        this._events.on(activeTarget.root, 'mousemove', this._onMouseMove.bind(this, activeTarget));
	                        this._events.on(activeTarget.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget));
	                    }
	                }
	            }
	        }
	        else {
	            this._dragData = null;
	        }
	    };
	    /**
	     * determine whether the child target is a descendant of the parent
	     */
	    DragDropHelper.prototype._isChild = function (parent, child) {
	        var parentElement = ReactDOM.findDOMNode(parent);
	        var childElement = ReactDOM.findDOMNode(child);
	        while (childElement && childElement.parentElement) {
	            if (childElement.parentElement === parentElement) {
	                return true;
	            }
	            childElement = childElement.parentElement;
	        }
	        return false;
	    };
	    DragDropHelper.prototype._isDraggable = function (target) {
	        var options = target.options;
	        return options.canDrag && options.canDrag(options.context.data);
	    };
	    DragDropHelper.prototype._isDroppable = function (target) {
	        // TODO: take the drag item into consideration to prevent dragging an item into the same group
	        var options = target.options;
	        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : null;
	        return options.canDrop && options.canDrop(options.context, dragContext);
	    };
	    return DragDropHelper;
	}());
	exports.DragDropHelper = DragDropHelper;
	


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DetailsList{position:relative;font-size:12px}.ms-DetailsList BUTTON{font-family:inherit;background-color:transparent}.ms-DetailsList>.ms-FocusZone{display:inline-block;vertical-align:top;min-width:1px;min-height:1px}.ms-DetailsList.is-horizontalConstrained{overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch}.ms-DetailsList-cell{word-break:break-word}.ms-DetailsList .ms-List-cell{min-height:38px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(164));
	var index_2 = __webpack_require__(164);
	exports.default = index_2.Dialog;
	


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(165));
	__export(__webpack_require__(173));
	__export(__webpack_require__(168));
	


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var index_1 = __webpack_require__(166);
	var Dialog_Props_1 = __webpack_require__(168);
	var Overlay_1 = __webpack_require__(169);
	var Layer_1 = __webpack_require__(48);
	var Button_1 = __webpack_require__(4);
	var DialogFooter_1 = __webpack_require__(173);
	var css_1 = __webpack_require__(7);
	var index_2 = __webpack_require__(45);
	var withResponsiveMode_1 = __webpack_require__(175);
	var object_1 = __webpack_require__(8);
	var BaseComponent_1 = __webpack_require__(12);
	__webpack_require__(174);
	var Dialog = (function (_super) {
	    __extends(Dialog, _super);
	    function Dialog(props) {
	        _super.call(this, props);
	        this._onDialogRef = this._onDialogRef.bind(this);
	        this.state = {
	            id: object_1.getId('Dialog'),
	            isOpen: props.isOpen,
	            isAnimatingOpen: props.isOpen,
	            isAnimatingClose: false
	        };
	    }
	    Dialog.prototype.componentWillReceiveProps = function (newProps) {
	        // Opening the dialog
	        if (newProps.isOpen && !this.state.isOpen) {
	            this.setState({
	                isOpen: true,
	                isAnimatingOpen: true,
	                isAnimatingClose: false
	            });
	        }
	        // Closing the dialog
	        if (!newProps.isOpen && this.state.isOpen) {
	            this.setState({
	                isAnimatingOpen: false,
	                isAnimatingClose: true
	            });
	        }
	    };
	    Dialog.prototype.render = function () {
	        var _a = this.props, type = _a.type, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, title = _a.title, subText = _a.subText, isBlocking = _a.isBlocking, responsiveMode = _a.responsiveMode, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, ignoreExternalFocusing = _a.ignoreExternalFocusing, forceFocusInsideTrap = _a.forceFocusInsideTrap, firstFocusableSelector = _a.firstFocusableSelector, closeButtonAriaLabel = _a.closeButtonAriaLabel, onLayerMounted = _a.onLayerMounted, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap;
	        var _b = this.state, id = _b.id, isOpen = _b.isOpen, isAnimatingOpen = _b.isAnimatingOpen, isAnimatingClose = _b.isAnimatingClose;
	        // @TODO - the discussion on whether the Dialog contain a property for rendering itself is still being discussed
	        if (!isOpen) {
	            return null;
	        }
	        var subTextContent;
	        var dialogClassName = css_1.css('ms-Dialog', this.props.className, {
	            'ms-Dialog--lgHeader': type === Dialog_Props_1.DialogType.largeHeader,
	            'ms-Dialog--close': type === Dialog_Props_1.DialogType.close,
	            'is-open': isOpen,
	            'is-animatingOpen': isAnimatingOpen,
	            'is-animatingClose': isAnimatingClose
	        });
	        var groupings = this._groupChildren();
	        if (subText) {
	            subTextContent = React.createElement("p", {className: 'ms-Dialog-subText', id: id + '-subText'}, subText);
	        }
	        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
	        if (responsiveMode >= withResponsiveMode_1.ResponsiveMode.small) {
	            return (React.createElement(Layer_1.Layer, {onLayerMounted: onLayerMounted}, 
	                React.createElement(index_2.Popup, {role: 'dialog', ariaLabelledBy: title ? id + '-title' : '', ariaDescribedBy: subText ? id + '-subText' : '', onDismiss: onDismiss}, 
	                    React.createElement("div", {className: dialogClassName, ref: this._onDialogRef}, 
	                        React.createElement(Overlay_1.Overlay, {isDarkThemed: isDarkOverlay, onClick: isBlocking ? null : onDismiss}), 
	                        React.createElement(index_1.FocusTrapZone, {className: css_1.css('ms-Dialog-main', this.props.containerClassName), elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap ? isClickableOutsideFocusTrap : !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector}, 
	                            React.createElement("div", {className: 'ms-Dialog-header'}, 
	                                React.createElement("p", {className: 'ms-Dialog-title', id: id + '-title'}, title), 
	                                React.createElement("div", {className: 'ms-Dialog-topButton'}, 
	                                    React.createElement(Button_1.Button, {className: 'ms-Dialog-button ms-Dialog-button--close', buttonType: Button_1.ButtonType.icon, icon: 'Cancel', rootProps: { title: closeButtonAriaLabel }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss})
	                                )), 
	                            React.createElement("div", {className: 'ms-Dialog-inner'}, 
	                                React.createElement("div", {className: css_1.css('ms-Dialog-content', this.props.contentClassName)}, 
	                                    subTextContent, 
	                                    groupings.contents), 
	                                groupings.footers)))
	                )
	            ));
	        }
	    };
	    // @TODO - typing the footers as an array of DialogFooter is difficult because
	    // casing "child as DialogFooter" causes a problem because
	    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
	    Dialog.prototype._groupChildren = function () {
	        var groupings = {
	            footers: [],
	            contents: []
	        };
	        React.Children.map(this.props.children, function (child) {
	            if (typeof child === 'object' && child !== null && child.type === DialogFooter_1.DialogFooter) {
	                groupings.footers.push(child);
	            }
	            else {
	                groupings.contents.push(child);
	            }
	        });
	        return groupings;
	    };
	    Dialog.prototype._onDialogRef = function (ref) {
	        if (ref) {
	            this._events.on(ref, 'animationend', this._onAnimationEnd);
	        }
	        else {
	            this._events.off();
	        }
	    };
	    // Watch for completed animations and set the state
	    Dialog.prototype._onAnimationEnd = function (ev) {
	        // The dialog has just opened (faded in)
	        if (ev.animationName.indexOf('fadeIn') > -1) {
	            this.setState({
	                isOpen: true,
	                isAnimatingOpen: false
	            });
	        }
	        // The dialog has just closed (faded out)
	        if (ev.animationName.indexOf('fadeOut') > -1) {
	            this.setState({
	                isOpen: false,
	                isAnimatingClose: false
	            });
	            // Call the onDismiss callback
	            if (this.props.onDismiss) {
	                this.props.onDismiss();
	            }
	        }
	    };
	    Dialog.defaultProps = {
	        isOpen: false,
	        type: Dialog_Props_1.DialogType.normal,
	        isDarkOverlay: true,
	        isBlocking: false,
	        className: '',
	        containerClassName: '',
	        contentClassName: ''
	    };
	    Dialog = __decorate([
	        withResponsiveMode_1.withResponsiveMode
	    ], Dialog);
	    return Dialog;
	}(BaseComponent_1.BaseComponent));
	exports.Dialog = Dialog;
	


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(167));
	


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	var focus_1 = __webpack_require__(32);
	var FocusTrapZone = (function (_super) {
	    __extends(FocusTrapZone, _super);
	    function FocusTrapZone() {
	        _super.apply(this, arguments);
	    }
	    FocusTrapZone.prototype.componentDidMount = function () {
	        var _a = this.props, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c;
	        this._previouslyFocusedElement = elementToFocusOnDismiss ? elementToFocusOnDismiss : document.activeElement;
	        this.focus();
	        if (forceFocusInsideTrap) {
	            this._events.on(window, 'focus', this._forceFocusInTrap, true);
	        }
	        if (!isClickableOutsideFocusTrap) {
	            this._events.on(window, 'click', this._forceClickInTrap, true);
	        }
	    };
	    FocusTrapZone.prototype.componentWillUnmount = function () {
	        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
	        if (!ignoreExternalFocusing && this._previouslyFocusedElement) {
	            this._previouslyFocusedElement.focus();
	        }
	    };
	    FocusTrapZone.prototype.render = function () {
	        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
	        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
	        return (React.createElement("div", __assign({}, divProps, {className: className, ref: 'root', "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler}), this.props.children));
	    };
	    /**
	     * Need to expose this method in case of popups since focus needs to be set when popup is opened
	     */
	    FocusTrapZone.prototype.focus = function () {
	        var firstFocusableSelector = this.props.firstFocusableSelector;
	        var _firstFocusableChild;
	        var root = this.refs.root;
	        if (firstFocusableSelector) {
	            _firstFocusableChild = root.querySelector('.' + firstFocusableSelector);
	        }
	        else {
	            _firstFocusableChild = focus_1.getNextElement(root, root.firstChild, true, false, false, true);
	        }
	        if (_firstFocusableChild) {
	            _firstFocusableChild.focus();
	        }
	    };
	    FocusTrapZone.prototype._onKeyboardHandler = function (ev) {
	        if (ev.which !== Utilities_1.KeyCodes.tab) {
	            return;
	        }
	        var root = this.refs.root;
	        var _firstFocusableChild = focus_1.getFirstFocusable(root, root.firstChild, true);
	        var _lastFocusableChild = focus_1.getLastFocusable(root, root.lastChild, true);
	        if (ev.shiftKey && _firstFocusableChild === ev.target) {
	            _lastFocusableChild.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	        else if (!ev.shiftKey && _lastFocusableChild === ev.target) {
	            _firstFocusableChild.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
	        var focusedElement = document.activeElement;
	        if (!Utilities_1.elementContains(this.refs.root, focusedElement)) {
	            this.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
	        var clickedElement = ev.target;
	        if (clickedElement && !Utilities_1.elementContains(this.refs.root, clickedElement)) {
	            this.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], FocusTrapZone.prototype, "_onKeyboardHandler", null);
	    return FocusTrapZone;
	}(Utilities_1.BaseComponent));
	exports.FocusTrapZone = FocusTrapZone;
	


/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";
	(function (DialogType) {
	    /** Standard dialog */
	    DialogType[DialogType["normal"] = 0] = "normal";
	    /** Dialog with large header banner */
	    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
	    /** Dialog with an 'x' close button in the upper-right corner */
	    DialogType[DialogType["close"] = 2] = "close";
	})(exports.DialogType || (exports.DialogType = {}));
	var DialogType = exports.DialogType;
	


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(170));
	


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(171));
	


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var properties_1 = __webpack_require__(11);
	__webpack_require__(172);
	var Overlay = (function (_super) {
	    __extends(Overlay, _super);
	    function Overlay() {
	        _super.apply(this, arguments);
	    }
	    Overlay.prototype.render = function () {
	        var _a = this.props, isDarkThemed = _a.isDarkThemed, className = _a.className;
	        var divProps = properties_1.getNativeProps(this.props, properties_1.divProperties);
	        var modifiedClassName = css_1.css('ms-Overlay', className, {
	            'ms-Overlay--dark': isDarkThemed
	        });
	        return (React.createElement("div", __assign({}, divProps, {className: modifiedClassName})));
	    };
	    return Overlay;
	}(React.Component));
	exports.Overlay = Overlay;
	


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Overlay{background-color:" }, { "theme": "whiteTranslucent40", "defaultValue": "rgba(255,255,255,.4)" }, { "rawString": ";position:absolute;bottom:0;left:0;right:0;top:0}.ms-Overlay.ms-Overlay--none{visibility:hidden}.ms-Overlay.ms-Overlay--dark{background-color:" }, { "theme": "blackTranslucent40", "defaultValue": "rgba(0,0,0,.4)" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(174);
	var DialogFooter = (function (_super) {
	    __extends(DialogFooter, _super);
	    function DialogFooter() {
	        _super.apply(this, arguments);
	    }
	    DialogFooter.prototype.render = function () {
	        return (React.createElement("div", {className: 'ms-Dialog-actions'}, 
	            React.createElement("div", {className: 'ms-Dialog-actionsRight'}, this._renderChildrenAsActions())
	        ));
	    };
	    DialogFooter.prototype._renderChildrenAsActions = function () {
	        return React.Children.map(this.props.children, function (child) {
	            return React.createElement("span", {className: 'ms-Dialog-action'}, child);
	        });
	    };
	    return DialogFooter;
	}(React.Component));
	exports.DialogFooter = DialogFooter;
	


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Dialog{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;background-color:transparent;position:fixed;height:100%;width:100%;top:0;display:none}html[dir=ltr] .ms-Dialog{left:0}html[dir=rtl] .ms-Dialog{right:0}.ms-Dialog .ms-Button.ms-Button--compound{display:block}html[dir=ltr] .ms-Dialog .ms-Button.ms-Button--compound{margin-left:0}html[dir=rtl] .ms-Dialog .ms-Button.ms-Button--compound{margin-right:0}@media screen and (-ms-high-contrast:active){.ms-Dialog .ms-Overlay{opacity:0}}.ms-Dialog.is-open{display:block}.ms-Dialog.is-open{display:block;line-height:100vh;text-align:center}.ms-Dialog.is-open::before{vertical-align:middle;display:inline-block;content:\"\";height:100%;width:0}.ms-Dialog.is-animatingOpen{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Dialog.is-animatingClose{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Dialog-main{vertical-align:middle;display:inline-block;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-sizing:border-box;line-height:1.35;margin:auto;width:288px;position:relative;outline:3px solid transparent;max-height:100%;overflow-y:auto}html[dir=ltr] .ms-Dialog-main{text-align:left}html[dir=rtl] .ms-Dialog-main{text-align:right}.ms-Dialog-button.ms-Dialog-button--close{display:none}.ms-Dialog-button.ms-Dialog-button--close .ms-Icon.ms-Icon--Cancel{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:16px}.ms-Dialog-inner{padding:0 28px 20px}.ms-Dialog-header{position:relative;width:100%;box-sizing:border-box}.ms-Dialog-title{margin:0;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";padding:20px 36px 20px 28px}html[dir=rtl] .ms-Dialog-title{padding:20px 28px 20px 36px}.ms-Dialog-topButton{position:absolute;top:0;padding:12px 12px 0 0}html[dir=ltr] .ms-Dialog-topButton{right:0}html[dir=rtl] .ms-Dialog-topButton{left:0}html[dir=rtl] .ms-Dialog-topButton{padding:12px 0 0 12px}.ms-Dialog-content{position:relative;width:100%}.ms-Dialog-content .ms-Button.ms-Button--compound{margin-bottom:20px}.ms-Dialog-content .ms-Button.ms-Button--compound:last-child{margin-bottom:0}.ms-Dialog-subText{margin:0 0 20px 0;padding-top:8px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:300;line-height:1.5}.ms-Dialog-actions{position:relative;width:100%;min-height:24px;line-height:24px;margin:20px 0 0;font-size:0}.ms-Dialog-actions .ms-Button{line-height:normal}.ms-Dialog-actionsRight{font-size:0}html[dir=ltr] .ms-Dialog-actionsRight{text-align:right}html[dir=rtl] .ms-Dialog-actionsRight{text-align:left}html[dir=ltr] .ms-Dialog-actionsRight{margin-right:-4px}html[dir=rtl] .ms-Dialog-actionsRight{margin-left:-4px}.ms-Dialog-actionsRight .ms-Dialog-action{margin:0 4px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-button--close{display:block}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-title{font-size:28px}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-inner{padding:0 20px 20px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-header{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:28px;font-weight:100;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";padding:26px 28px 28px;margin-bottom:8px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-subText{font-size:14px}@media (min-width:480px){.ms-Dialog-main{width:auto;min-width:288px;max-width:340px}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var BaseDecorator_1 = __webpack_require__(160);
	var dom_1 = __webpack_require__(29);
	(function (ResponsiveMode) {
	    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
	    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
	    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
	    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
	    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
	    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
	})(exports.ResponsiveMode || (exports.ResponsiveMode = {}));
	var ResponsiveMode = exports.ResponsiveMode;
	var RESPONSIVE_MAX_CONSTRAINT = [
	    479,
	    639,
	    1023,
	    1365,
	    1919,
	    99999999
	];
	var _defaultMode;
	/**
	 * Allows a server rendered scenario to provide a default responsive mode.
	 */
	function setResponsiveMode(responsiveMode) {
	    _defaultMode = responsiveMode;
	}
	exports.setResponsiveMode = setResponsiveMode;
	function withResponsiveMode(ComposedComponent) {
	    return (function (_super) {
	        __extends(WithResponsiveMode, _super);
	        function WithResponsiveMode() {
	            _super.call(this);
	            this._updateComposedComponentRef = this._updateComposedComponentRef.bind(this);
	            this.state = {
	                responsiveMode: this._getResponsiveMode()
	            };
	        }
	        WithResponsiveMode.prototype.componentDidMount = function () {
	            var _this = this;
	            this._events.on(window, 'resize', function () {
	                var responsiveMode = _this._getResponsiveMode();
	                if (responsiveMode !== _this.state.responsiveMode) {
	                    _this.setState({
	                        responsiveMode: responsiveMode
	                    });
	                }
	            });
	        };
	        WithResponsiveMode.prototype.componentWillUnmount = function () {
	            this._events.dispose();
	        };
	        WithResponsiveMode.prototype.render = function () {
	            var responsiveMode = this.state.responsiveMode;
	            return (React.createElement(ComposedComponent, __assign({ref: this._updateComposedComponentRef, responsiveMode: responsiveMode}, this.props)));
	        };
	        WithResponsiveMode.prototype._getResponsiveMode = function () {
	            var responsiveMode = ResponsiveMode.small;
	            var win = dom_1.getWindow();
	            if (typeof win !== 'undefined') {
	                while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
	                    responsiveMode++;
	                }
	            }
	            else {
	                if (_defaultMode !== undefined) {
	                    responsiveMode = _defaultMode;
	                }
	                else {
	                    throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
	                        'Call setResponsiveMode to define what the responsive mode is.');
	                }
	            }
	            return responsiveMode;
	        };
	        return WithResponsiveMode;
	    }(BaseDecorator_1.BaseDecorator));
	}
	exports.withResponsiveMode = withResponsiveMode;
	


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(177));
	


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(178));
	__export(__webpack_require__(179));
	__export(__webpack_require__(181));
	__export(__webpack_require__(183));
	__export(__webpack_require__(191));
	__export(__webpack_require__(193));
	__export(__webpack_require__(195));
	


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var DocumentCard_Props_1 = __webpack_require__(179);
	var css_1 = __webpack_require__(7);
	__webpack_require__(180);
	var autobind_1 = __webpack_require__(28);
	var DocumentCard = (function (_super) {
	    __extends(DocumentCard, _super);
	    function DocumentCard() {
	        _super.apply(this, arguments);
	    }
	    DocumentCard.prototype.render = function () {
	        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref, children = _a.children, className = _a.className, type = _a.type, accentColor = _a.accentColor;
	        var actionable = (onClick || onClickHref) ? true : false;
	        // Override the border color if an accent color was provided (compact card only)
	        var style;
	        if (type === DocumentCard_Props_1.DocumentCardType.compact && accentColor) {
	            style = {
	                borderBottomColor: accentColor
	            };
	        }
	        return (React.createElement("div", {className: css_1.css('ms-DocumentCard', {
	            'ms-DocumentCard--actionable': actionable,
	            'ms-DocumentCard--compact': type === DocumentCard_Props_1.DocumentCardType.compact ? true : false
	        }, className), onClick: actionable ? this._onClick : null, style: style}, children));
	    };
	    DocumentCard.prototype._onClick = function (ev) {
	        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref;
	        if (onClick) {
	            onClick(ev);
	        }
	        else if (!onClick && onClickHref) {
	            // If no onClick Function was provided and we do have an onClickHref, redirect to the onClickHref
	            window.location.href = onClickHref;
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    DocumentCard.defaultProps = {
	        type: DocumentCard_Props_1.DocumentCardType.normal
	    };
	    __decorate([
	        autobind_1.autobind
	    ], DocumentCard.prototype, "_onClick", null);
	    return DocumentCard;
	}(React.Component));
	exports.DocumentCard = DocumentCard;
	


/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";
	(function (DocumentCardType) {
	    /**
	     * Standard DocumentCard.
	     */
	    DocumentCardType[DocumentCardType["normal"] = 0] = "normal";
	    /**
	     * Compact layout. Displays the preview beside the details, rather than above.
	     */
	    DocumentCardType[DocumentCardType["compact"] = 1] = "compact";
	})(exports.DocumentCardType || (exports.DocumentCardType = {}));
	var DocumentCardType = exports.DocumentCardType;
	


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCard{-webkit-font-smoothing:antialiased;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box;max-width:320px;min-width:206px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.ms-DocumentCard--actionable:hover{cursor:pointer;border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-DocumentCard--actionable:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";pointer-events:none}.ms-DocumentCardLocation+.ms-DocumentCardTitle{padding-top:4px}.ms-DocumentCard--compact{border-bottom:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;max-width:480px;height:109px}.ms-DocumentCard--compact .ms-DocumentCardPreview{border-bottom:none;max-height:106px;max-width:144px}.ms-DocumentCard--compact .ms-DocumentCardPreview .ms-DocumentCardPreview-icon .ms-Image-image{max-height:32px;max-width:32px}html[dir=ltr] .ms-DocumentCard--compact .ms-DocumentCardPreview{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .ms-DocumentCard--compact .ms-DocumentCardPreview{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-DocumentCard--compact .ms-DocumentCard-details{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.ms-DocumentCard--compact .ms-DocumentCardTitle{padding:12px 16px 8px 16px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;line-height:16px}.ms-DocumentCard--compact .ms-DocumentCardActivity{padding-bottom:12px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(4);
	__webpack_require__(182);
	var DocumentCardActions = (function (_super) {
	    __extends(DocumentCardActions, _super);
	    function DocumentCardActions() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardActions.prototype.render = function () {
	        var _a = this.props, actions = _a.actions, views = _a.views;
	        return (React.createElement("div", {className: 'ms-DocumentCardActions'}, 
	            actions && actions.map(function (action, index) {
	                action.buttonType = Button_1.ButtonType.icon;
	                return (React.createElement("div", {className: 'ms-DocumentCardActions-action', key: index}, 
	                    React.createElement(Button_1.Button, __assign({}, action))
	                ));
	            }), 
	            views > 0 && (React.createElement("div", {className: 'ms-DocumentCardActions-views'}, 
	                React.createElement("i", {className: 'ms-Icon ms-Icon--View'}), 
	                views))));
	    };
	    return DocumentCardActions;
	}(React.Component));
	exports.DocumentCardActions = DocumentCardActions;
	


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardActions{height:34px;padding:4px 12px;position:relative}.ms-DocumentCardActions-actions{position:absolute;top:4px}html[dir=ltr] .ms-DocumentCardActions-actions{left:12px}html[dir=rtl] .ms-DocumentCardActions-actions{right:12px}.ms-DocumentCardActions-action{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";cursor:pointer}html[dir=ltr] .ms-DocumentCardActions-action{float:left}html[dir=rtl] .ms-DocumentCardActions-action{float:right}html[dir=ltr] .ms-DocumentCardActions-action{margin-right:4px}html[dir=rtl] .ms-DocumentCardActions-action{margin-left:4px}.ms-DocumentCardActions-action .ms-Button{font-size:16px;height:34px;width:34px}.ms-DocumentCardActions-action .ms-Button:hover .ms-Button-icon{color:#1174c3;cursor:pointer}.ms-DocumentCardActions-views{line-height:34px}html[dir=ltr] .ms-DocumentCardActions-views{text-align:right}html[dir=rtl] .ms-DocumentCardActions-views{text-align:left}.ms-DocumentCardActions-views .ms-Icon{font-size:16px;vertical-align:top}html[dir=ltr] .ms-DocumentCardActions-views .ms-Icon{margin-right:4px}html[dir=rtl] .ms-DocumentCardActions-views .ms-Icon{margin-left:4px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(80);
	var Persona_1 = __webpack_require__(184);
	var css_1 = __webpack_require__(7);
	__webpack_require__(190);
	var DocumentCardActivity = (function (_super) {
	    __extends(DocumentCardActivity, _super);
	    function DocumentCardActivity() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardActivity.prototype.render = function () {
	        var _a = this.props, activity = _a.activity, people = _a.people;
	        return (people && people.length > 0 &&
	            React.createElement("div", {className: css_1.css('ms-DocumentCardActivity', {
	                'ms-DocumentCardActivity--multiplePeople': people.length > 1
	            })}, 
	                this._renderAvatars(people), 
	                React.createElement("div", {className: 'ms-DocumentCardActivity-details'}, 
	                    React.createElement("span", {className: 'ms-DocumentCardActivity-name'}, this._getNameString(people)), 
	                    React.createElement("span", {className: 'ms-DocumentCardActivity-activity'}, activity))));
	    };
	    DocumentCardActivity.prototype._renderAvatars = function (people) {
	        return (React.createElement("div", {className: 'ms-DocumentCardActivity-avatars'}, 
	            people.length > 1 ? this._renderAvatar(people[1]) : null, 
	            this._renderAvatar(people[0])));
	    };
	    DocumentCardActivity.prototype._renderAvatar = function (person) {
	        var initialsColor = person.initialsColor ? person.initialsColor : Persona_1.PersonaInitialsColor.blue;
	        return (React.createElement("div", {className: 'ms-DocumentCardActivity-avatar'}, 
	            person.initials && (React.createElement("div", {className: css_1.css('ms-Persona-initials', Persona_1.PERSONA_INITIALS_COLOR[initialsColor]), role: 'presentation'}, person.initials)), 
	            person.profileImageSrc && (React.createElement(Image_1.Image, {src: person.profileImageSrc, role: 'presentation', alt: ''}))));
	    };
	    DocumentCardActivity.prototype._getNameString = function (people) {
	        var nameString = people[0].name;
	        if (people.length >= 2) {
	            nameString += ' +' + (people.length - 1);
	        }
	        return nameString;
	    };
	    return DocumentCardActivity;
	}(React.Component));
	exports.DocumentCardActivity = DocumentCardActivity;
	


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(185));
	


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(186));
	__export(__webpack_require__(187));
	__export(__webpack_require__(188));
	


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var Image_1 = __webpack_require__(80);
	var Persona_Props_1 = __webpack_require__(187);
	var PersonaConsts_1 = __webpack_require__(188);
	var properties_1 = __webpack_require__(11);
	__webpack_require__(189);
	var Persona = (function (_super) {
	    __extends(Persona, _super);
	    function Persona() {
	        _super.apply(this, arguments);
	    }
	    Persona.prototype.render = function () {
	        var _a = this.props, className = _a.className, size = _a.size, imageUrl = _a.imageUrl, imageInitials = _a.imageInitials, initialsColor = _a.initialsColor, presence = _a.presence, primaryText = _a.primaryText, secondaryText = _a.secondaryText, tertiaryText = _a.tertiaryText, optionalText = _a.optionalText, hidePersonaDetails = _a.hidePersonaDetails, imageShouldFadeIn = _a.imageShouldFadeIn;
	        var presenceElement = null;
	        if (presence !== Persona_Props_1.PersonaPresence.none) {
	            var userPresence = Persona_Props_1.PersonaPresence[presence], statusIcon = null;
	            switch (userPresence) {
	                case 'online':
	                    userPresence = 'SkypeCheck';
	                    break;
	                case 'away':
	                    userPresence = 'SkypeClock';
	                    break;
	                case 'dnd':
	                    userPresence = 'SkypeMinus';
	                    break;
	                default:
	                    userPresence = '';
	            }
	            if (userPresence) {
	                var iconClass = "ms-Persona-presenceIcon ms-Icon ms-Icon--" + userPresence;
	                statusIcon = React.createElement("i", {className: iconClass});
	            }
	            presenceElement = React.createElement("div", {className: 'ms-Persona-presence'}, statusIcon);
	        }
	        var divProps = properties_1.getNativeProps(this.props, properties_1.divProperties);
	        var personaDetails = React.createElement("div", {className: 'ms-Persona-details'}, 
	            React.createElement("div", {className: 'ms-Persona-primaryText'}, primaryText), 
	            secondaryText ? (React.createElement("div", {className: 'ms-Persona-secondaryText'}, secondaryText)) : (null), 
	            React.createElement("div", {className: 'ms-Persona-tertiaryText'}, tertiaryText), 
	            React.createElement("div", {className: 'ms-Persona-optionalText'}, optionalText), 
	            this.props.children);
	        return (React.createElement("div", __assign({}, divProps, {className: css_1.css('ms-Persona', className, PersonaConsts_1.PERSONA_SIZE[size], PersonaConsts_1.PERSONA_PRESENCE[presence])}), 
	            size !== Persona_Props_1.PersonaSize.tiny && (React.createElement("div", {className: 'ms-Persona-imageArea'}, 
	                React.createElement("div", {className: css_1.css('ms-Persona-initials', PersonaConsts_1.PERSONA_INITIALS_COLOR[initialsColor])}, imageInitials), 
	                React.createElement(Image_1.Image, {className: 'ms-Persona-image', imageFit: Image_1.ImageFit.cover, src: imageUrl, shouldFadeIn: imageShouldFadeIn}))), 
	            presenceElement, 
	            (!hidePersonaDetails || (size === Persona_Props_1.PersonaSize.tiny)) && personaDetails));
	    };
	    Persona.defaultProps = {
	        primaryText: '',
	        size: Persona_Props_1.PersonaSize.regular,
	        initialsColor: Persona_Props_1.PersonaInitialsColor.blue,
	        presence: Persona_Props_1.PersonaPresence.none
	    };
	    return Persona;
	}(React.Component));
	exports.Persona = Persona;
	


/***/ },
/* 187 */
/***/ function(module, exports) {

	"use strict";
	(function (PersonaSize) {
	    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
	    PersonaSize[PersonaSize["extraSmall"] = 1] = "extraSmall";
	    PersonaSize[PersonaSize["small"] = 2] = "small";
	    PersonaSize[PersonaSize["regular"] = 3] = "regular";
	    PersonaSize[PersonaSize["large"] = 4] = "large";
	    PersonaSize[PersonaSize["extraLarge"] = 5] = "extraLarge";
	})(exports.PersonaSize || (exports.PersonaSize = {}));
	var PersonaSize = exports.PersonaSize;
	(function (PersonaPresence) {
	    PersonaPresence[PersonaPresence["none"] = 0] = "none";
	    PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
	    PersonaPresence[PersonaPresence["online"] = 2] = "online";
	    PersonaPresence[PersonaPresence["away"] = 3] = "away";
	    PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
	    PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
	    PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
	})(exports.PersonaPresence || (exports.PersonaPresence = {}));
	var PersonaPresence = exports.PersonaPresence;
	(function (PersonaInitialsColor) {
	    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
	    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
	    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
	    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
	    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
	    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
	    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
	    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
	    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
	    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
	    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
	    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
	    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
	    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
	    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
	})(exports.PersonaInitialsColor || (exports.PersonaInitialsColor = {}));
	var PersonaInitialsColor = exports.PersonaInitialsColor;
	


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Persona_Props_1 = __webpack_require__(187);
	exports.PERSONA_SIZE = (_a = {},
	    _a[Persona_Props_1.PersonaSize.tiny] = 'ms-Persona--tiny',
	    _a[Persona_Props_1.PersonaSize.extraSmall] = 'ms-Persona--xs',
	    _a[Persona_Props_1.PersonaSize.small] = 'ms-Persona--sm',
	    _a[Persona_Props_1.PersonaSize.regular] = '',
	    _a[Persona_Props_1.PersonaSize.large] = 'ms-Persona--lg',
	    _a[Persona_Props_1.PersonaSize.extraLarge] = 'ms-Persona--xl',
	    _a
	);
	exports.PERSONA_PRESENCE = (_b = {},
	    _b[Persona_Props_1.PersonaPresence.offline] = 'ms-Persona--offline',
	    _b[Persona_Props_1.PersonaPresence.online] = 'ms-Persona--online',
	    _b[Persona_Props_1.PersonaPresence.away] = 'ms-Persona--away',
	    _b[Persona_Props_1.PersonaPresence.dnd] = 'ms-Persona--dnd',
	    _b[Persona_Props_1.PersonaPresence.blocked] = 'ms-Persona--blocked',
	    _b[Persona_Props_1.PersonaPresence.busy] = 'ms-Persona--busy',
	    _b
	);
	exports.PERSONA_INITIALS_COLOR = (_c = {},
	    _c[Persona_Props_1.PersonaInitialsColor.lightBlue] = 'ms-Persona-initials--lightBlue',
	    _c[Persona_Props_1.PersonaInitialsColor.blue] = 'ms-Persona-initials--blue',
	    _c[Persona_Props_1.PersonaInitialsColor.darkBlue] = 'ms-Persona-initials--darkBlue',
	    _c[Persona_Props_1.PersonaInitialsColor.teal] = 'ms-Persona-initials--teal',
	    _c[Persona_Props_1.PersonaInitialsColor.lightGreen] = 'ms-Persona-initials--lightGreen',
	    _c[Persona_Props_1.PersonaInitialsColor.green] = 'ms-Persona-initials--green',
	    _c[Persona_Props_1.PersonaInitialsColor.darkGreen] = 'ms-Persona-initials--darkGreen',
	    _c[Persona_Props_1.PersonaInitialsColor.lightPink] = 'ms-Persona-initials--lightPink',
	    _c[Persona_Props_1.PersonaInitialsColor.pink] = 'ms-Persona-initials--pink',
	    _c[Persona_Props_1.PersonaInitialsColor.magenta] = 'ms-Persona-initials--magenta',
	    _c[Persona_Props_1.PersonaInitialsColor.purple] = 'ms-Persona-initials--purple',
	    _c[Persona_Props_1.PersonaInitialsColor.black] = 'ms-Persona-initials--black',
	    _c[Persona_Props_1.PersonaInitialsColor.orange] = 'ms-Persona-initials--orange',
	    _c[Persona_Props_1.PersonaInitialsColor.red] = 'ms-Persona-initials--red',
	    _c[Persona_Props_1.PersonaInitialsColor.darkRed] = 'ms-Persona-initials--darkRed',
	    _c
	);
	var _a, _b, _c;



/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Persona{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;font-weight:400;line-height:1;position:relative;height:48px;display:table;table-layout:fixed;border-collapse:separate}.ms-Persona .ms-ContextualHost{display:none}.ms-Persona-imageArea{position:absolute;overflow:hidden;text-align:center;max-width:48px;height:48px;border-radius:50%;z-index:0;width:48px;top:0}html[dir=ltr] .ms-Persona-imageArea{left:0}html[dir=rtl] .ms-Persona-imageArea{right:0}@media screen and (-ms-high-contrast:active){.ms-Persona-imageArea{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-imageArea{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Persona-imageArea .ms-Image{border:0}.ms-Persona-placeholder{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:absolute;right:0;left:0;font-size:47px;top:9px;z-index:5}.ms-Persona-initials{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:17px;font-weight:100;line-height:48px}.ms-Persona-initials.ms-Persona-initials--lightBlue{background-color:#6BA5E7}.ms-Persona-initials.ms-Persona-initials--blue{background-color:#2D89EF}.ms-Persona-initials.ms-Persona-initials--darkBlue{background-color:#2B5797}.ms-Persona-initials.ms-Persona-initials--teal{background-color:#00ABA9}.ms-Persona-initials.ms-Persona-initials--lightGreen{background-color:#99B433}.ms-Persona-initials.ms-Persona-initials--green{background-color:#00A300}.ms-Persona-initials.ms-Persona-initials--darkGreen{background-color:#1E7145}.ms-Persona-initials.ms-Persona-initials--lightPink{background-color:#E773BD}.ms-Persona-initials.ms-Persona-initials--pink{background-color:#FF0097}.ms-Persona-initials.ms-Persona-initials--magenta{background-color:#7E3878}.ms-Persona-initials.ms-Persona-initials--purple{background-color:#603CBA}.ms-Persona-initials.ms-Persona-initials--black{background-color:#1D1D1D}.ms-Persona-initials.ms-Persona-initials--orange{background-color:#DA532C}.ms-Persona-initials.ms-Persona-initials--red{background-color:#E11}.ms-Persona-initials.ms-Persona-initials--darkRed{background-color:#B91D47}.ms-Persona-image{display:table-cell;position:absolute;top:0;width:100%;height:100%;border-radius:50%;-webkit-perspective:1px;perspective:1px}html[dir=ltr] .ms-Persona-image{margin-right:10px}html[dir=rtl] .ms-Persona-image{margin-left:10px}html[dir=ltr] .ms-Persona-image{left:0}html[dir=rtl] .ms-Persona-image{right:0}.ms-Persona-image[src=\"\"]{display:none}.ms-Persona-presence{background-color:#7FBA00;position:absolute;height:12px;width:12px;border-radius:50%;top:auto;bottom:-1px;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";text-align:center;box-sizing:content-box}html[dir=ltr] .ms-Persona-presence{left:34px}html[dir=rtl] .ms-Persona-presence{right:34px}@media screen and (-ms-high-contrast:active){.ms-Persona-presence{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";box-shadow:0 0 0 1px #1AEBFF inset;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-presence{border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px #37006E inset;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Persona-presence .ms-Persona-presenceIcon{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:8px;line-height:12px;vertical-align:top}.ms-Persona-details{padding:0 12px;vertical-align:middle;display:table-cell;width:100%}html[dir=ltr] .ms-Persona-details{text-align:left}html[dir=rtl] .ms-Persona-details{text-align:right}html[dir=ltr] .ms-Persona-details{padding-left:60px}html[dir=rtl] .ms-Persona-details{padding-right:60px}.ms-Persona-optionalText,.ms-Persona-primaryText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.ms-Persona-primaryText{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:400;font-size:17px;margin-top:-3px;line-height:1.4}.ms-Persona-optionalText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-weight:400;font-size:12px;white-space:nowrap;line-height:1.3}.ms-Persona-secondaryText{padding-top:3px}.ms-Persona-optionalText,.ms-Persona-tertiaryText{padding-top:5px;display:none}.ms-Persona.ms-Persona--tiny{height:30px;display:inline-block}.ms-Persona.ms-Persona--tiny .ms-Persona-imageArea{overflow:visible;background:0 0;height:0;width:0}.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:10px;border:0}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:auto}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{left:auto}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{left:0}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:0}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:9px;border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-left:20px}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-right:20px}.ms-Persona.ms-Persona--tiny .ms-Persona-primaryText{font-size:14px;padding-top:9px}.ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly{padding:0;background-color:transparent}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText:after{content:';'}.ms-Persona.ms-Persona--xs{height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-image,.ms-Persona.ms-Persona--xs .ms-Persona-imageArea{max-width:32px;width:32px;height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-placeholder{font-size:28px;top:6px}.ms-Persona.ms-Persona--xs .ms-Persona-initials{font-size:12px;line-height:32px}html[dir=ltr] .ms-Persona.ms-Persona--xs .ms-Persona-presence{left:19px}html[dir=rtl] .ms-Persona.ms-Persona--xs .ms-Persona-presence{right:19px}html[dir=ltr] .ms-Persona.ms-Persona--xs .ms-Persona-details{padding-left:40px}html[dir=rtl] .ms-Persona.ms-Persona--xs .ms-Persona-details{padding-right:40px}.ms-Persona.ms-Persona--xs .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-Persona.ms-Persona--xs .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--sm{height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-image,.ms-Persona.ms-Persona--sm .ms-Persona-imageArea{max-width:40px;width:40px;height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-placeholder{font-size:38px;top:5px}.ms-Persona.ms-Persona--sm .ms-Persona-initials{font-size:14px;line-height:40px}html[dir=ltr] .ms-Persona.ms-Persona--sm .ms-Persona-presence{left:27px}html[dir=rtl] .ms-Persona.ms-Persona--sm .ms-Persona-presence{right:27px}html[dir=ltr] .ms-Persona.ms-Persona--sm .ms-Persona-details{padding-left:48px}html[dir=rtl] .ms-Persona.ms-Persona--sm .ms-Persona-details{padding-right:48px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText{font-size:14px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText,.ms-Persona.ms-Persona--sm .ms-Persona-secondaryText{padding-top:1px}.ms-Persona.ms-Persona--lg{height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-image,.ms-Persona.ms-Persona--lg .ms-Persona-imageArea{max-width:72px;width:72px;height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-placeholder{font-size:67px;top:10px}.ms-Persona.ms-Persona--lg .ms-Persona-initials{font-size:28px;line-height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-presence{height:20px;width:20px;border-width:3px}html[dir=ltr] .ms-Persona.ms-Persona--lg .ms-Persona-presence{left:49px}html[dir=rtl] .ms-Persona.ms-Persona--lg .ms-Persona-presence{right:49px}.ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon{line-height:20px;font-size:14px}html[dir=ltr] .ms-Persona.ms-Persona--lg .ms-Persona-details{padding-left:84px}html[dir=rtl] .ms-Persona.ms-Persona--lg .ms-Persona-details{padding-right:84px}.ms-Persona.ms-Persona--lg .ms-Persona-secondaryText{padding-top:3px}.ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--xl{height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-image,.ms-Persona.ms-Persona--xl .ms-Persona-imageArea{max-width:100px;width:100px;height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-placeholder{font-size:95px;top:12px}.ms-Persona.ms-Persona--xl .ms-Persona-initials{font-size:42px;line-height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-presence{height:28px;width:28px;border-width:4px}html[dir=ltr] .ms-Persona.ms-Persona--xl .ms-Persona-presence{left:71px}html[dir=rtl] .ms-Persona.ms-Persona--xl .ms-Persona-presence{right:71px}.ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon{line-height:28px;font-size:21px;position:relative;top:1px}html[dir=ltr] .ms-Persona.ms-Persona--xl .ms-Persona-details{padding-left:120px}html[dir=rtl] .ms-Persona.ms-Persona--xl .ms-Persona-details{padding-right:120px}.ms-Persona.ms-Persona--xl .ms-Persona-primaryText{font-size:21px;font-weight:300;margin-top:0}.ms-Persona.ms-Persona--xl .ms-Persona-secondaryText{padding-top:2px}.ms-Persona.ms-Persona--xl .ms-Persona-optionalText,.ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--darkText .ms-Persona-primaryText{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Persona.ms-Persona--darkText .ms-Persona-optionalText,.ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Persona.ms-Persona--selectable{cursor:pointer;padding:0 10px}.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):focus,.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):hover{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";outline:1px solid transparent}.ms-Persona.ms-Persona--available .ms-Persona-presence{background-color:#7FBA00}.ms-Persona.ms-Persona--away .ms-Persona-presence{background-color:#FCD116}.ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{position:relative}html[dir=ltr] .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{left:1px}html[dir=rtl] .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{right:1px}.ms-Persona.ms-Persona--blocked .ms-Persona-presence{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{content:'';width:100%;height:100%;position:absolute;top:0;box-shadow:0 0 0 2px #D93B3B inset;border-radius:50%}html[dir=ltr] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{left:0}html[dir=rtl] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{right:0}.ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{content:'';width:100%;height:2px;background-color:#D93B3B;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:5px}html[dir=ltr] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{left:0}html[dir=rtl] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{right:0}.ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence::after{top:9px}.ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence::after{top:13px}.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#D93B3B}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#37006E}}.ms-Persona.ms-Persona--dnd .ms-Persona-presence{background-color:#E81123}.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#93ABBD}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": " inset}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": " inset}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardActivity{padding:8px 16px;position:relative}html[dir=ltr] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-avatar:nth-of-type(2){margin-left:-16px}html[dir=rtl] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-avatar:nth-of-type(2){margin-right:-16px}html[dir=ltr] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-details{left:61.5px}html[dir=rtl] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-details{right:61.5px}html[dir=ltr] .ms-DocumentCardActivity-avatars{margin-left:-2px}html[dir=rtl] .ms-DocumentCardActivity-avatars{margin-right:-2px}.ms-DocumentCardActivity-avatar{border:2px solid #fafafa;border-radius:50%;height:25px;width:25px;display:inline-block;position:relative;overflow:hidden;text-align:center}.ms-DocumentCardActivity-avatar .ms-Persona-initials{height:25px;line-height:25px;font-size:12px}.ms-DocumentCardActivity-avatar img{width:100%;height:100%;border-radius:50%}.ms-DocumentCardActivity-details{height:25px;position:absolute;top:8px;width:calc(100% - 65px)}html[dir=ltr] .ms-DocumentCardActivity-details{left:49px}html[dir=rtl] .ms-DocumentCardActivity-details{right:49px}.ms-DocumentCardActivity-activity,.ms-DocumentCardActivity-name{display:block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";line-height:15px;height:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-DocumentCardActivity-name{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(192);
	var DocumentCardLocation = (function (_super) {
	    __extends(DocumentCardLocation, _super);
	    function DocumentCardLocation() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardLocation.prototype.render = function () {
	        var _a = this.props, location = _a.location, locationHref = _a.locationHref, ariaLabel = _a.ariaLabel, onClick = _a.onClick;
	        return (React.createElement("a", {className: 'ms-DocumentCardLocation', href: locationHref, onClick: onClick, "aria-label": ariaLabel}, location));
	    };
	    return DocumentCardLocation;
	}(React.Component));
	exports.DocumentCardLocation = DocumentCardLocation;
	


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardLocation{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:block;padding:8px 16px;position:relative;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-DocumentCardLocation:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";cursor:pointer}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(80);
	var css_1 = __webpack_require__(7);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(194);
	var LIST_ITEM_COUNT = 3;
	var DocumentCardPreview = (function (_super) {
	    __extends(DocumentCardPreview, _super);
	    function DocumentCardPreview() {
	        _super.apply(this, arguments);
	    }
	    DocumentCardPreview.prototype.render = function () {
	        var previewImages = this.props.previewImages;
	        var style, preview;
	        var isFileList = false;
	        if (previewImages.length > 1) {
	            // Render a list of files
	            preview = this._renderPreviewList(previewImages);
	            isFileList = true;
	        }
	        else if (previewImages.length === 1) {
	            // Render a single preview
	            preview = this._renderPreviewImage(previewImages[0]);
	            // Override the border color if an accent color was provided
	            if (previewImages[0].accentColor) {
	                style = {
	                    borderBottomColor: previewImages[0].accentColor
	                };
	            }
	        }
	        return (React.createElement("div", {className: css_1.css('ms-DocumentCardPreview', isFileList && 'is-fileList'), style: style}, preview));
	    };
	    DocumentCardPreview.prototype._renderPreviewImage = function (previewImage) {
	        var width = previewImage.width, height = previewImage.height, imageFit = previewImage.imageFit;
	        var image = (React.createElement(Image_1.Image, {width: width, height: height, imageFit: imageFit, src: previewImage.previewImageSrc, errorSrc: previewImage.errorImageSrc, role: 'presentation', alt: ''}));
	        var icon;
	        if (previewImage.iconSrc) {
	            icon = React.createElement(Image_1.Image, {className: 'ms-DocumentCardPreview-icon', src: previewImage.iconSrc, role: 'presentation', alt: ''});
	        }
	        return (React.createElement("div", null, 
	            image, 
	            icon));
	    };
	    DocumentCardPreview.prototype._renderPreviewList = function (previewImages) {
	        var getOverflowDocumentCountText = this.props.getOverflowDocumentCountText;
	        // Determine how many documents we won't be showing
	        var overflowDocumentCount = previewImages.length - LIST_ITEM_COUNT;
	        // Determine the overflow text that will be rendered after the preview list.
	        var overflowText = overflowDocumentCount ?
	            (getOverflowDocumentCountText ?
	                getOverflowDocumentCountText(overflowDocumentCount) :
	                '+' + overflowDocumentCount) : null;
	        // Create list items for the documents to be shown
	        var fileListItems = previewImages.slice(0, LIST_ITEM_COUNT).map(function (file, fileIndex) { return (React.createElement("li", {key: fileIndex}, 
	            React.createElement(Image_1.Image, {className: 'ms-DocumentCardPreview-fileListIcon', src: file.iconSrc, role: 'presentation', alt: '', width: '16px', height: '16px'}), 
	            React.createElement("a", {href: file.url}, file.name))); });
	        return (React.createElement("div", null, 
	            React.createElement("ul", {className: 'ms-DocumentCardPreview-fileList'}, fileListItems), 
	            overflowText &&
	                React.createElement("span", {className: 'ms-DocumentCardPreview-fileListMore'}, overflowText)));
	    };
	    __decorate([
	        autobind_1.autobind
	    ], DocumentCardPreview.prototype, "_renderPreviewList", null);
	    return DocumentCardPreview;
	}(React.Component));
	exports.DocumentCardPreview = DocumentCardPreview;
	


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardPreview{border-bottom:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";position:relative;background-color:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": ";overflow:hidden}.ms-DocumentCardPreview.is-fileList{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-DocumentCardPreview-icon{bottom:10px;position:absolute}html[dir=ltr] .ms-DocumentCardPreview-icon{left:10px}html[dir=rtl] .ms-DocumentCardPreview-icon{right:10px}.ms-DocumentCardPreview-fileList{padding:16px 16px 0 16px;list-style-type:none;margin:0}html[dir=rtl] .ms-DocumentCardPreview-fileList{padding:16px 16px 0 16px}.ms-DocumentCardPreview-fileList li{height:16px;line-height:16px;margin-bottom:8px;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}html[dir=ltr] .ms-DocumentCardPreview-fileList li{padding-left:24px}html[dir=rtl] .ms-DocumentCardPreview-fileList li{padding-right:24px}.ms-DocumentCardPreview-fileList a{font-size:12px;text-decoration:none;color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-DocumentCardPreview-fileList a:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DocumentCardPreview-fileListIcon{position:absolute;top:0}html[dir=ltr] .ms-DocumentCardPreview-fileListIcon{left:0}html[dir=rtl] .ms-DocumentCardPreview-fileListIcon{right:0}.ms-DocumentCardPreview-fileListMore{padding:0 16px 8px 16px;display:block;font-size:12px}html[dir=rtl] .ms-DocumentCardPreview-fileListMore{padding:0 16px 8px 16px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(196);
	var TRUNCATION_SEPARATOR = '&hellip;';
	var TRUNCATION_MINIMUM_LENGTH = 40; // This is the length we know can fit into the min width of DocumentCard.
	var TRUNCATION_MAXIMUM_LENGTH = 90 - TRUNCATION_SEPARATOR.length;
	var TRUNCATION_FIRST_PIECE_LONGER_BY = 10;
	var TRUNCATION_VERTICAL_OVERFLOW_THRESHOLD = 5;
	var DocumentCardTitle = (function (_super) {
	    __extends(DocumentCardTitle, _super);
	    function DocumentCardTitle(props) {
	        _super.call(this, props);
	        this.state = {
	            truncatedTitleFirstPiece: '',
	            truncatedTitleSecondPiece: ''
	        };
	    }
	    DocumentCardTitle.prototype.componentDidMount = function () {
	        var _a = this.props, title = _a.title, shouldTruncate = _a.shouldTruncate;
	        if (shouldTruncate && title && title.length > TRUNCATION_MINIMUM_LENGTH) {
	            if (this._doesTitleOverflow()) {
	                this._startTruncation(this.props);
	            }
	            this._events.on(window, 'resize', this._updateTruncation);
	        }
	    };
	    DocumentCardTitle.prototype.componentWillReceiveProps = function (newProps) {
	        this._events.off(window, 'resize');
	        this._isTruncated = false;
	        if (newProps.shouldTruncate && newProps.title && newProps.title.length > TRUNCATION_MINIMUM_LENGTH) {
	            this._startTruncation(newProps);
	            this._events.on(window, 'resize', this._updateTruncation);
	        }
	    };
	    DocumentCardTitle.prototype.componentDidUpdate = function () {
	        // If we're truncating, make sure the title fits
	        if (this.props.shouldTruncate) {
	            this._shrinkTitle();
	        }
	    };
	    DocumentCardTitle.prototype.render = function () {
	        var _a = this.props, title = _a.title, shouldTruncate = _a.shouldTruncate;
	        var _b = this.state, truncatedTitleFirstPiece = _b.truncatedTitleFirstPiece, truncatedTitleSecondPiece = _b.truncatedTitleSecondPiece;
	        var documentCardTitle;
	        if (shouldTruncate && this._isTruncated) {
	            documentCardTitle = (React.createElement("div", {className: 'ms-DocumentCardTitle', ref: this._resolveRef('_titleElement'), title: title}, 
	                truncatedTitleFirstPiece, 
	                "…", 
	                truncatedTitleSecondPiece));
	        }
	        else {
	            documentCardTitle = (React.createElement("div", {className: 'ms-DocumentCardTitle', ref: this._resolveRef('_titleElement'), title: title}, title));
	        }
	        return documentCardTitle;
	    };
	    DocumentCardTitle.prototype._startTruncation = function (props) {
	        var originalTitle = props.title;
	        this._isTruncated = false;
	        // If the title is really short, there's no need to truncate it
	        if (originalTitle && originalTitle.length >= TRUNCATION_MINIMUM_LENGTH) {
	            // Break the text into two pieces for assembly later
	            if (originalTitle.length > TRUNCATION_MAXIMUM_LENGTH) {
	                // The text is really long, so we can take a chunk out of the middle so the two pieces combine for the maximum length
	                this._isTruncated = true;
	                this.setState({
	                    truncatedTitleFirstPiece: originalTitle.slice(0, TRUNCATION_MAXIMUM_LENGTH / 2 + TRUNCATION_FIRST_PIECE_LONGER_BY),
	                    truncatedTitleSecondPiece: originalTitle.slice(originalTitle.length - (TRUNCATION_MAXIMUM_LENGTH / 2 - TRUNCATION_FIRST_PIECE_LONGER_BY))
	                });
	            }
	            else {
	                // The text is not so long, so we'll just break it into two pieces
	                this.setState({
	                    truncatedTitleFirstPiece: originalTitle.slice(0, Math.ceil(originalTitle.length / 2) + TRUNCATION_FIRST_PIECE_LONGER_BY),
	                    truncatedTitleSecondPiece: originalTitle.slice(originalTitle.length - Math.floor(originalTitle.length / 2) + TRUNCATION_FIRST_PIECE_LONGER_BY)
	                });
	            }
	        }
	        // Save the width we just started truncation at, so that later we will only update truncation if necessary
	        this._truncatedTitleAtWidth = this._titleElement.clientWidth;
	    };
	    DocumentCardTitle.prototype._shrinkTitle = function () {
	        if (this._doesTitleOverflow()) {
	            var _a = this.state, truncatedTitleFirstPiece = _a.truncatedTitleFirstPiece, truncatedTitleSecondPiece = _a.truncatedTitleSecondPiece;
	            this._isTruncated = true;
	            if (!truncatedTitleFirstPiece && !truncatedTitleSecondPiece) {
	                this._startTruncation(this.props);
	            }
	            this.setState({
	                truncatedTitleFirstPiece: truncatedTitleFirstPiece.slice(0, truncatedTitleFirstPiece.length - 1),
	                truncatedTitleSecondPiece: truncatedTitleSecondPiece.slice(1)
	            });
	        }
	    };
	    DocumentCardTitle.prototype._doesTitleOverflow = function () {
	        var titleElement = this._titleElement;
	        return titleElement.scrollHeight > titleElement.clientHeight + TRUNCATION_VERTICAL_OVERFLOW_THRESHOLD || titleElement.scrollWidth > titleElement.clientWidth;
	    };
	    DocumentCardTitle.prototype._updateTruncation = function () {
	        // Only update truncation if the title's size has changed since the last time we truncated
	        if (this._titleElement.clientWidth !== this._truncatedTitleAtWidth) {
	            // Throttle truncation so that it doesn't happen during a window resize
	            clearTimeout(this._scrollTimerId);
	            this._scrollTimerId = this._async.setTimeout(this._startTruncation.bind(this, this.props), 250);
	        }
	    };
	    __decorate([
	        autobind_1.autobind
	    ], DocumentCardTitle.prototype, "_startTruncation", null);
	    return DocumentCardTitle;
	}(BaseComponent_1.BaseComponent));
	exports.DocumentCardTitle = DocumentCardTitle;
	


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardTitle{padding:8px 16px;display:block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:17px;font-weight:300;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:38px;line-height:21px;overflow:hidden;word-wrap:break-word}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(198));
	


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(199));
	


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var DirectionalHint_1 = __webpack_require__(36);
	var Callout_1 = __webpack_require__(37);
	var FocusZone_1 = __webpack_require__(21);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(200);
	var Dropdown = (function (_super) {
	    __extends(Dropdown, _super);
	    function Dropdown(props) {
	        _super.call(this, props, {
	            'isDisabled': 'disabled'
	        });
	        this._id = Utilities_1.getId('Dropdown');
	        var selectedKey = props.defaultSelectedKey !== undefined ? props.defaultSelectedKey : props.selectedKey;
	        this.state = {
	            isOpen: false,
	            selectedIndex: this._getSelectedIndex(props.options, selectedKey)
	        };
	    }
	    Dropdown.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.selectedKey !== this.props.selectedKey) {
	            this.setState({
	                selectedIndex: this._getSelectedIndex(newProps.options, newProps.selectedKey)
	            });
	        }
	    };
	    Dropdown.prototype.render = function () {
	        var _this = this;
	        var id = this._id;
	        var _a = this.props, label = _a.label, options = _a.options, disabled = _a.disabled, isDisabled = _a.isDisabled, _b = _a.onRenderItem, onRenderItem = _b === void 0 ? this._onRenderItem : _b;
	        var _c = this.state, isOpen = _c.isOpen, selectedIndex = _c.selectedIndex;
	        var selectedOption = options[selectedIndex];
	        // Remove this deprecation workaround at 1.0.0
	        if (isDisabled !== undefined) {
	            disabled = isDisabled;
	        }
	        return (React.createElement("div", {ref: 'root'}, 
	            label && (React.createElement("label", {id: id + '-label', className: 'ms-Label', ref: function (dropdownLabel) { return _this._dropdownLabel = dropdownLabel; }}, label)), 
	            React.createElement("div", {"data-is-focusable": disabled, ref: function (c) { return _this._dropDown = c; }, id: id, className: Utilities_1.css('ms-Dropdown', {
	                'is-open': isOpen, 'is-disabled': disabled
	            }), tabIndex: disabled ? -1 : 0, onKeyDown: this._onDropdownKeyDown, onClick: this._onDropdownClick, "aria-expanded": isOpen ? 'true' : 'false', role: 'combobox', "aria-label": label, "aria-activedescendant": selectedIndex >= 0 ? (this._id + '-list' + selectedIndex) : (this._id + '-list'), "aria-controls": this._id + '-list'}, 
	                React.createElement("span", {className: 'ms-Dropdown-title'}, selectedOption ? onRenderItem(selectedOption, this._onRenderItem) : ''), 
	                React.createElement("i", {className: 'ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown'})), 
	            isOpen && (React.createElement(Callout_1.Callout, {isBeakVisible: false, className: 'ms-Dropdown-callout', gapSpace: 0, doNotLayer: false, targetElement: this._dropDown, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onDismiss}, 
	                React.createElement(FocusZone_1.FocusZone, {ref: function (fz) { return fz && fz.focus(); }, direction: FocusZone_1.FocusZoneDirection.vertical, defaultActiveElement: '#' + id + '-list' + selectedIndex}, 
	                    React.createElement("ul", {ref: function (c) { return _this._optionList = c; }, id: id + '-list', style: { width: this._dropDown.clientWidth - 2 }, className: 'ms-Dropdown-items', role: 'listbox', "aria-labelledby": id + '-label'}, options.map(function (option, index) { return (React.createElement("li", {id: id + '-list' + index.toString(), ref: Dropdown.Option + index.toString(), key: option.key, "data-index": index, "data-is-focusable": true, className: Utilities_1.css('ms-Dropdown-item', { 'is-selected': selectedIndex === index }), onClick: function () { return _this._onItemClick(index); }, onFocus: function () { return _this.setSelectedIndex(index); }, role: 'option', "aria-selected": selectedIndex === index ? 'true' : 'false', "aria-label": option.text}, option.text)); }))
	                )
	            ))));
	    };
	    Dropdown.prototype.focus = function () {
	        if (this._dropDown && this._dropDown.tabIndex !== -1) {
	            this._dropDown.focus();
	        }
	    };
	    Dropdown.prototype.setSelectedIndex = function (index) {
	        var _a = this.props, onChanged = _a.onChanged, options = _a.options;
	        var selectedIndex = this.state.selectedIndex;
	        index = Math.max(0, Math.min(options.length - 1, index));
	        if (index !== selectedIndex) {
	            // Set the selected option.
	            this.setState({
	                selectedIndex: index
	            });
	            if (onChanged) {
	                onChanged(options[index], index);
	            }
	        }
	    };
	    Dropdown.prototype._onRenderItem = function (item) {
	        return React.createElement("span", null, item.text);
	    };
	    Dropdown.prototype._onItemClick = function (index) {
	        this.setSelectedIndex(index);
	        this.setState({
	            isOpen: false
	        });
	    };
	    Dropdown.prototype._onDismiss = function () {
	        this.setState({ isOpen: false });
	    };
	    Dropdown.prototype._getSelectedIndex = function (options, selectedKey) {
	        return Utilities_1.findIndex(options, (function (option) { return (option.isSelected || option.selected || (selectedKey != null) && option.key === selectedKey); }));
	    };
	    Dropdown.prototype._onDropdownKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.enter:
	                this.setState({
	                    isOpen: !this.state.isOpen
	                });
	                break;
	            case Utilities_1.KeyCodes.escape:
	                this.setState({
	                    isOpen: false
	                });
	                break;
	            case Utilities_1.KeyCodes.up:
	                this.setSelectedIndex(this.state.selectedIndex - 1);
	                break;
	            case Utilities_1.KeyCodes.down:
	                this.setSelectedIndex(this.state.selectedIndex + 1);
	                break;
	            case Utilities_1.KeyCodes.home:
	                this.setSelectedIndex(0);
	                break;
	            case Utilities_1.KeyCodes.end:
	                this.setSelectedIndex(this.props.options.length - 1);
	                break;
	            default:
	                return;
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    Dropdown.prototype._onDropdownClick = function () {
	        var _a = this.props, disabled = _a.disabled, isDisabled = _a.isDisabled;
	        var isOpen = this.state.isOpen;
	        // Remove this deprecation workaround at 1.0.0
	        if (isDisabled !== undefined) {
	            disabled = isDisabled;
	        }
	        if (!disabled) {
	            this.setState({
	                isOpen: !isOpen
	            });
	        }
	    };
	    Dropdown.defaultProps = {
	        options: []
	    };
	    Dropdown.Option = 'option';
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onRenderItem", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onDismiss", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onDropdownKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], Dropdown.prototype, "_onDropdownClick", null);
	    return Dropdown;
	}(Utilities_1.BaseComponent));
	exports.Dropdown = Dropdown;
	


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Dropdown{box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";margin-bottom:10px;position:relative;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown:active .ms-Dropdown-caretDown,.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:focus .ms-Dropdown-caretDown,.ms-Dropdown:focus .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-caretDown,.ms-Dropdown:hover .ms-Dropdown-title{color:#37006E}}.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown:active .ms-Dropdown-title,.ms-Dropdown:hover .ms-Dropdown-title{border-color:#37006E}}.ms-Dropdown:focus .ms-Dropdown-title{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown:focus .ms-Dropdown-title{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown:focus .ms-Dropdown-title{border-color:#37006E}}.ms-Dropdown .ms-Label{display:inline-block;margin-bottom:8px}.ms-Dropdown.is-disabled .ms-Dropdown-title{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";cursor:default}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#0f0;color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-title{border-color:#600000;color:#600000}}.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown.is-disabled .ms-Dropdown-caretDown{color:#600000}}.ms-Dropdown-caretDown{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";font-size:12px;position:absolute;top:0;pointer-events:none;line-height:32px}html[dir=ltr] .ms-Dropdown-caretDown{right:12px}html[dir=rtl] .ms-Dropdown-caretDown{left:12px}.ms-Dropdown-title{box-sizing:border-box;margin:0;padding:0;box-shadow:none;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:pointer;display:block;height:32px;line-height:30px;padding:0 32px 0 12px;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}html[dir=rtl] .ms-Dropdown-title{padding:0 12px 0 32px}.ms-Dropdown-items{box-sizing:border-box;margin:0;padding:0;box-shadow:none;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";list-style-type:none;width:100%;top:auto;right:auto;bottom:auto;left:auto;max-width:100%;box-shadow:0 0 15px -5px rgba(0,0,0,.4);border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Dropdown-items::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border:none}@media screen and (-ms-high-contrast:active){.ms-Dropdown-items{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-items{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Dropdown-item{box-sizing:border-box;cursor:pointer;display:block;min-height:36px;line-height:20px;padding:6px 12px;position:relative;border:1px solid transparent;word-wrap:break-word}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item{border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-Dropdown-item:hover{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item:hover{background-color:#1AEBFF;border-color:#1AEBFF;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item:hover:focus{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item:hover{background-color:#37006E;border-color:#37006E;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-Dropdown-item::-moz-focus-inner{border:0}.ms-Dropdown-item{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Dropdown-item:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Dropdown-item:focus{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Dropdown-item:active{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item.is-disabled{background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";cursor:default}.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item.is-selected:hover,.ms-Dropdown-item.ms-Dropdown-item--selected:hover{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-Dropdown-item.is-selected::-moz-focus-inner,.ms-Dropdown-item.ms-Dropdown-item--selected::-moz-focus-inner{border:0}.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Dropdown-item.is-selected:focus:after,.ms-Fabric.is-focusVisible .ms-Dropdown-item.ms-Dropdown-item--selected:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#1AEBFF;border-color:#1AEBFF;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Dropdown-item.is-selected:focus,.ms-Dropdown-item.ms-Dropdown-item--selected:focus{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Dropdown-item.is-selected,.ms-Dropdown-item.ms-Dropdown-item--selected{background-color:#37006E;border-color:#37006E;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(202));
	


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(203));
	__export(__webpack_require__(204));
	


/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";
	(function (OverflowButtonType) {
	    /** No overflow */
	    OverflowButtonType[OverflowButtonType["none"] = 0] = "none";
	    /** +1 overflow icon */
	    OverflowButtonType[OverflowButtonType["descriptive"] = 1] = "descriptive";
	    /** More overflow icon */
	    OverflowButtonType[OverflowButtonType["more"] = 2] = "more";
	    /** Chevron overflow icon */
	    OverflowButtonType[OverflowButtonType["downArrow"] = 3] = "downArrow";
	})(exports.OverflowButtonType || (exports.OverflowButtonType = {}));
	var OverflowButtonType = exports.OverflowButtonType;
	


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var Facepile_Props_1 = __webpack_require__(203);
	var Persona_1 = __webpack_require__(184);
	__webpack_require__(205);
	var properties_1 = __webpack_require__(11);
	var Facepile = (function (_super) {
	    __extends(Facepile, _super);
	    function Facepile() {
	        _super.apply(this, arguments);
	    }
	    Facepile.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, chevronButtonProps = _a.chevronButtonProps, maxDisplayablePersonas = _a.maxDisplayablePersonas, overflowButtonProps = _a.overflowButtonProps, overflowButtonType = _a.overflowButtonType, personas = _a.personas, showAddButton = _a.showAddButton;
	        var numPersonasToShow = Math.min(personas.length, maxDisplayablePersonas);
	        // Added for deprecating chevronButtonProps.  Can remove after v1.0
	        if (chevronButtonProps && !overflowButtonProps) {
	            overflowButtonProps = chevronButtonProps;
	            overflowButtonType = Facepile_Props_1.OverflowButtonType.downArrow;
	        }
	        return (React.createElement("div", {className: 'ms-Facepile'}, 
	            React.createElement("div", {className: 'ms-Facepile-members'}, 
	                showAddButton ? this._getAddNewElement() : null, 
	                personas.slice(0, numPersonasToShow).map(function (persona, index) {
	                    var personaControl = _this._getPersonaControl(persona);
	                    return persona.onClick ?
	                        _this._getElementWithOnClickEvent(personaControl, persona, index) :
	                        _this._getElementWithoutOnClickEvent(personaControl, persona, index);
	                }), 
	                overflowButtonProps ? this._getOverflowElement(numPersonasToShow) : null), 
	            React.createElement("div", {className: 'ms-Facepile-clear'})));
	    };
	    Facepile.prototype._getPersonaControl = function (persona) {
	        var getPersonaProps = this.props.getPersonaProps;
	        return React.createElement(Persona_1.Persona, __assign({imageInitials: persona.imageInitials, imageUrl: persona.imageUrl, initialsColor: persona.initialsColor, primaryText: persona.personaName, size: Persona_1.PersonaSize.extraSmall, hidePersonaDetails: true}, (getPersonaProps ? getPersonaProps(persona) : null)));
	    };
	    Facepile.prototype._getElementWithOnClickEvent = function (personaControl, persona, index) {
	        return React.createElement("button", __assign({}, properties_1.getNativeProps(persona, properties_1.buttonProperties), {className: 'ms-Facepile-itemButton', title: persona.personaName, key: (!!persona.imageUrl ? 'i' : '') + index, onClick: this._onPersonaClick.bind(this, persona), onMouseMove: this._onPersonaMouseMove.bind(this, persona), onMouseOut: this._onPersonaMouseOut.bind(this, persona)}), personaControl);
	    };
	    Facepile.prototype._getElementWithoutOnClickEvent = function (personaControl, persona, index) {
	        return React.createElement("div", __assign({}, properties_1.getNativeProps(persona, properties_1.divProperties), {className: 'ms-Facepile-itemButton', title: persona.personaName, key: (!!persona.imageUrl ? 'i' : '') + index, onMouseMove: this._onPersonaMouseMove.bind(this, persona), onMouseOut: this._onPersonaMouseOut.bind(this, persona)}), personaControl);
	    };
	    Facepile.prototype._getOverflowElement = function (numPersonasToShow) {
	        switch (this.props.overflowButtonType) {
	            case Facepile_Props_1.OverflowButtonType.descriptive:
	                return this._getDescriptiveOverflowElement(numPersonasToShow);
	            case Facepile_Props_1.OverflowButtonType.downArrow:
	                return this._getIconElement('ChevronDown');
	            case Facepile_Props_1.OverflowButtonType.more:
	                return this._getIconElement('More');
	            default:
	                return null;
	        }
	    };
	    Facepile.prototype._getDescriptiveOverflowElement = function (numPersonasToShow) {
	        var numPersonasNotPictured = this.props.personas.length - numPersonasToShow;
	        if (!this.props.overflowButtonProps || numPersonasNotPictured < 1) {
	            return null;
	        }
	        var personaNames = this.props.personas.slice(numPersonasToShow).map(function (p) { return p.personaName; }).join(', ');
	        return React.createElement("button", __assign({}, properties_1.getNativeProps(this.props.overflowButtonProps, properties_1.buttonProperties), {className: css_1.css('ms-Facepile-descriptiveOverflowButton', 'ms-Facepile-itemButton'), title: personaNames}), '+' + numPersonasNotPictured);
	    };
	    Facepile.prototype._getIconElement = function (icon) {
	        return React.createElement("button", __assign({}, properties_1.getNativeProps(this.props.overflowButtonProps, properties_1.buttonProperties), {className: css_1.css('ms-Facepile-overflowButton', 'ms-Facepile-itemButton')}), 
	            React.createElement("i", {className: css_1.css('ms-Icon', 'msIcon', "ms-Icon ms-Icon--" + icon), "aria-hidden": 'true'})
	        );
	    };
	    Facepile.prototype._getAddNewElement = function () {
	        return React.createElement("button", __assign({}, properties_1.getNativeProps(this.props.addButtonProps, properties_1.buttonProperties), {className: css_1.css('ms-Facepile-addButton', 'ms-Facepile-itemButton')}), 
	            React.createElement("i", {className: 'ms-Icon msIcon ms-Icon--AddFriend', "aria-hidden": 'true'})
	        );
	    };
	    Facepile.prototype._onPersonaClick = function (persona, ev) {
	        persona.onClick(ev, persona);
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    Facepile.prototype._onPersonaMouseMove = function (persona, ev) {
	        if (!!persona.onMouseMove) {
	            persona.onMouseMove(ev, persona);
	        }
	    };
	    Facepile.prototype._onPersonaMouseOut = function (persona, ev) {
	        if (!!persona.onMouseOut) {
	            persona.onMouseOut(ev, persona);
	        }
	    };
	    Facepile.defaultProps = {
	        maxDisplayablePersonas: 5,
	        personas: []
	    };
	    return Facepile;
	}(React.Component));
	exports.Facepile = Facepile;
	


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Facepile{position:relative;min-height:32px;width:auto}.ms-Facepile-clear{clear:both}.ms-Facepile-itemButton{position:relative;height:32px;min-width:32px;line-height:32px;text-align:center;padding:0;margin-bottom:4px;outline:transparent;border-radius:50%;vertical-align:top}html[dir=ltr] .ms-Facepile-itemButton{float:left}html[dir=rtl] .ms-Facepile-itemButton{float:right}html[dir=ltr] .ms-Facepile-itemButton{margin-right:4px}html[dir=rtl] .ms-Facepile-itemButton{margin-left:4px}button.ms-Facepile-itemButton{display:inline;background:0 0;padding:0;cursor:pointer;border:none}button.ms-Facepile-addButton{font-size:14px;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}button.ms-Facepile-addButton:focus,button.ms-Facepile-addButton:hover{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}button.ms-Facepile-addButton:active{background-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}button.ms-Facepile-addButton.is-disabled,button.ms-Facepile-addButton:disabled{background-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}button.ms-Facepile-overflowButton{font-size:14px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}button.ms-Facepile-descriptiveOverflowButton{font-size:12px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(166));
	


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(208));
	


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(209));
	__export(__webpack_require__(211));
	


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(4);
	__webpack_require__(210);
	var css_1 = __webpack_require__(7);
	var MessageBar_Props_1 = __webpack_require__(211);
	var object_1 = __webpack_require__(8);
	var MessageBar = (function (_super) {
	    __extends(MessageBar, _super);
	    function MessageBar(props) {
	        _super.call(this, props);
	        this.ICON_MAP = (_a = {},
	            _a[MessageBar_Props_1.MessageBarType.info] = 'Info',
	            _a[MessageBar_Props_1.MessageBarType.warning] = 'Info',
	            _a[MessageBar_Props_1.MessageBarType.error] = 'ErrorBadge',
	            _a[MessageBar_Props_1.MessageBarType.blocked] = 'Blocked',
	            _a[MessageBar_Props_1.MessageBarType.remove] = 'Blocked',
	            _a[MessageBar_Props_1.MessageBarType.severeWarning] = 'Warning',
	            _a[MessageBar_Props_1.MessageBarType.success] = 'Completed',
	            _a
	        );
	        this.state = {
	            labelId: object_1.getId('MessageBar')
	        };
	        var _a;
	    }
	    MessageBar.prototype.render = function () {
	        var isMultiline = this.props.isMultiline;
	        return isMultiline ? this._renderMultiLine() : this._renderSingleLine();
	    };
	    MessageBar.prototype._getActionsDiv = function () {
	        if (this.props.actions) {
	            return this.props.isMultiline ?
	                React.createElement("div", {className: 'ms-MessageBar-actions'}, 
	                    " ", 
	                    this.props.actions, 
	                    " ") :
	                React.createElement("div", {className: 'ms-MessageBar-actionsOneline'}, 
	                    this._getDismissDiv(), 
	                    this.props.actions);
	        }
	        return null;
	    };
	    MessageBar.prototype._getClassName = function () {
	        return css_1.css(this.props.className, 'ms-MessageBar', {
	            'ms-MessageBar': this.props.messageBarType === MessageBar_Props_1.MessageBarType.info,
	            'ms-MessageBar--error': this.props.messageBarType === MessageBar_Props_1.MessageBarType.error,
	            'ms-MessageBar--blocked': (this.props.messageBarType === MessageBar_Props_1.MessageBarType.blocked) || (this.props.messageBarType === MessageBar_Props_1.MessageBarType.remove),
	            'ms-MessageBar--severeWarning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.severeWarning,
	            'ms-MessageBar--success': this.props.messageBarType === MessageBar_Props_1.MessageBarType.success,
	            'ms-MessageBar--warning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.warning
	        });
	    };
	    MessageBar.prototype._getDismissDiv = function () {
	        if (this.props.onDismiss != null) {
	            return React.createElement(Button_1.Button, {disabled: false, className: 'ms-MessageBar-dismissal', buttonType: Button_1.ButtonType.icon, onClick: this.props.onDismiss, icon: 'Cancel', ariaLabel: this.props.dismissButtonAriaLabel});
	        }
	        return null;
	    };
	    MessageBar.prototype._getIconSpan = function () {
	        return React.createElement("div", {className: 'ms-MessageBar-icon'}, 
	            React.createElement("i", {className: "ms-Icon ms-Icon--" + this.ICON_MAP[this.props.messageBarType]})
	        );
	    };
	    MessageBar.prototype._getInnerTextClassName = function () {
	        return this.props.onDismiss || this.props.actions ? 'ms-MessageBar-innerTextPadding' : 'ms-MessageBar-innerText';
	    };
	    MessageBar.prototype._renderMultiLine = function () {
	        return (React.createElement("div", {className: this._getClassName() + ' ms-MessageBar-multiline', role: 'status', "aria-live": 'polite', "aria-controls": 'ms-MessageBar-text'}, 
	            React.createElement("div", {className: 'ms-MessageBar-content'}, 
	                this._getIconSpan(), 
	                React.createElement("div", {className: 'ms-MessageBar-actionables'}, 
	                    this._getDismissDiv(), 
	                    React.createElement("div", {className: 'ms-MessageBar-text', id: this.state.labelId}, 
	                        React.createElement("span", {className: this._getInnerTextClassName()}, this.props.children)
	                    ), 
	                    this._getActionsDiv()))
	        ));
	    };
	    MessageBar.prototype._renderSingleLine = function () {
	        return (React.createElement("div", {className: this._getClassName() + ' ms-MessageBar-singleline', role: 'status', "aria-live": 'polite', "aria-controls": 'ms-MessageBar-text'}, 
	            React.createElement("div", {className: 'ms-MessageBar-content'}, 
	                this._getIconSpan(), 
	                React.createElement("div", {className: 'ms-MessageBar-actionables'}, 
	                    React.createElement("div", {className: 'ms-MessageBar-text', id: this.state.labelId}, 
	                        React.createElement("span", {className: this._getInnerTextClassName()}, this.props.children)
	                    )
	                ), 
	                this._getActionsDiv())
	        ));
	    };
	    MessageBar.defaultProps = {
	        messageBarType: MessageBar_Props_1.MessageBarType.info,
	        onDismiss: null,
	        isMultiline: true,
	    };
	    return MessageBar;
	}(React.Component));
	exports.MessageBar = MessageBar;
	


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-MessageBar{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;background-color:" }, { "theme": "infoBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "infoText", "defaultValue": "#333333" }, { "rawString": ";width:100%;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.ms-MessageBar .ms-MessageBar-icon{color:" }, { "theme": "info", "defaultValue": "#767676" }, { "rawString": "}html[dir=ltr] .ms-MessageBar .ms-MessageBar-icon{padding-right:8px}html[dir=rtl] .ms-MessageBar .ms-MessageBar-icon{padding-left:8px}.ms-MessageBar .ms-Link{font-size:12px}.ms-MessageBar-icon,.ms-MessageBar-text{display:table-cell;vertical-align:top}.ms-MessageBar-icon{font-size:16px;min-width:16px;min-height:16px;display:-webkit-box;display:-ms-flexbox;display:flex}.ms-MessageBar-text{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;min-width:0;display:-webkit-box;display:-ms-flexbox;display:flex}.ms-MessageBar.ms-MessageBar--warning{background-color:" }, { "theme": "warningBackground", "defaultValue": "#fff4ce" }, { "rawString": ";color:" }, { "theme": "warningText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--severeWarning{background-color:" }, { "theme": "severeWarningBackground", "defaultValue": "#fed9cc" }, { "rawString": ";color:" }, { "theme": "severeWarningText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon{color:" }, { "theme": "severeWarning", "defaultValue": "#d83b01" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--error{background-color:" }, { "theme": "errorBackground", "defaultValue": "#fde7e9" }, { "rawString": ";color:" }, { "theme": "errorText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon{color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--blocked{background-color:" }, { "theme": "errorBackground", "defaultValue": "#fde7e9" }, { "rawString": ";color:" }, { "theme": "errorText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon{color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--success{background-color:" }, { "theme": "successBackground", "defaultValue": "#dff6dd" }, { "rawString": ";color:" }, { "theme": "successText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon{color:" }, { "theme": "green", "defaultValue": "#107c10" }, { "rawString": "}.ms-MessageBar-content{padding:16px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;box-sizing:border-box}.ms-MessageBar-actionables{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;min-width:0}.ms-MessageBar-actionables>.ms-MessageBar-dismissal{right:0;top:0;position:absolute!important}.ms-MessageBar-actions,.ms-MessageBar-actionsOneline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms-MessageBar-actionsOneline{position:relative}.ms-MessageBar-dismissal{min-width:0}.ms-MessageBar-dismissal::-moz-focus-inner{border:0}.ms-MessageBar-dismissal{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-MessageBar-dismissal:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-MessageBar-actionsOneline .ms-MessageBar-dismissal{margin-right:-8px}html[dir=rtl] .ms-MessageBar-actionsOneline .ms-MessageBar-dismissal{margin-left:-8px}.ms-MessageBar+.ms-MessageBar{margin-bottom:6px}html[dir=ltr] .ms-MessageBar-innerTextPadding{padding-right:24px}html[dir=rtl] .ms-MessageBar-innerTextPadding{padding-left:24px}html[dir=ltr] .ms-MessageBar-innerTextPadding .ms-MessageBar-innerText>span,html[dir=ltr] .ms-MessageBar-innerTextPadding span{padding-right:4px}html[dir=rtl] .ms-MessageBar-innerTextPadding .ms-MessageBar-innerText>span,html[dir=rtl] .ms-MessageBar-innerTextPadding span{padding-left:4px}.ms-MessageBar-multiline>.ms-MessageBar-content>.ms-MessageBar-actionables{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-icon{-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text .ms-MessageBar-innerText,.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text .ms-MessageBar-innerTextPadding{max-height:1.3em;line-height:1.3em;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-MessageBar-singleline .ms-MessageBar-content>.ms-MessageBar-actionables{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ms-MessageBar .ms-Icon--Cancel{font-size:14px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 211 */
/***/ function(module, exports) {

	"use strict";
	(function (MessageBarType) {
	    /** Info styled MessageBar */
	    MessageBarType[MessageBarType["info"] = 0] = "info";
	    /** Error styled MessageBar */
	    MessageBarType[MessageBarType["error"] = 1] = "error";
	    /** Blocked styled MessageBar */
	    MessageBarType[MessageBarType["blocked"] = 2] = "blocked";
	    /** SevereWarning styled MessageBar */
	    MessageBarType[MessageBarType["severeWarning"] = 3] = "severeWarning";
	    /** Success styled MessageBar */
	    MessageBarType[MessageBarType["success"] = 4] = "success";
	    /** Warning styled MessageBar */
	    MessageBarType[MessageBarType["warning"] = 5] = "warning";
	    /**
	     * @deprecated
	     * Deprecated at v0.48.0, to be removed at >= v1.0.0. Use 'blocked' instead.
	     */
	    MessageBarType[MessageBarType["remove"] = 6] = "remove";
	})(exports.MessageBarType || (exports.MessageBarType = {}));
	var MessageBarType = exports.MessageBarType;
	


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(213));
	__export(__webpack_require__(119));
	


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var AutoScroll_1 = __webpack_require__(214);
	var BaseComponent_1 = __webpack_require__(12);
	var css_1 = __webpack_require__(7);
	var scroll_1 = __webpack_require__(43);
	var math_1 = __webpack_require__(215);
	var rtl_1 = __webpack_require__(31);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(216);
	// We want to make the marquee selection start when the user drags a minimum distance. Otherwise we'd start
	// the drag even if they just click an item without moving.
	var MIN_DRAG_DISTANCE = 5;
	/**
	 * MarqueeSelection component abstracts managing a draggable rectangle which sets items selected/not selected.
	 * Elements which have data-selectable-index attributes are queried and measured once to determine if they
	 * fall within the bounds of the rectangle. The measure is memoized during the drag as a performance optimization
	 * so if the items change sizes while dragging, that could cause incorrect results.
	 */
	var MarqueeSelection = (function (_super) {
	    __extends(MarqueeSelection, _super);
	    function MarqueeSelection(props) {
	        _super.call(this, props);
	        this.state = {
	            dragRect: undefined
	        };
	    }
	    MarqueeSelection.prototype.componentDidMount = function () {
	        this._scrollableParent = scroll_1.findScrollableParent(this.refs.root);
	        this._scrollableSurface = this._scrollableParent === window ? document.body : this._scrollableParent;
	        // When scroll events come from window, we need to read scrollTop values from the body.
	        this._events.on(this.props.isDraggingConstrainedToRoot ? this.refs.root : this._scrollableSurface, 'mousedown', this._onMouseDown);
	    };
	    MarqueeSelection.prototype.componentWillUnmount = function () {
	        if (this._autoScroll) {
	            this._autoScroll.dispose();
	        }
	    };
	    MarqueeSelection.prototype.render = function () {
	        var _a = this.props, rootProps = _a.rootProps, children = _a.children;
	        var dragRect = this.state.dragRect;
	        return (React.createElement("div", __assign({}, rootProps, {className: css_1.css('ms-MarqueeSelection', rootProps.className), ref: 'root'}), 
	            children, 
	            dragRect && (React.createElement("div", {className: 'ms-MarqueeSelection-dragMask'})), 
	            dragRect && (React.createElement("div", {className: 'ms-MarqueeSelection-box', style: dragRect}, 
	                React.createElement("div", {className: 'ms-MarqueeSelection-boxFill'})
	            ))));
	    };
	    /** Determine if the mouse event occured on a scrollbar of the target element. */
	    MarqueeSelection.prototype._isMouseEventOnScrollbar = function (ev) {
	        var targetElement = ev.target;
	        var targetScrollbarWidth = (targetElement.offsetWidth - targetElement.clientWidth);
	        if (targetScrollbarWidth) {
	            var targetRect = targetElement.getBoundingClientRect();
	            // Check vertical scroll
	            if (rtl_1.getRTL()) {
	                if (ev.clientX < (targetRect.left + targetScrollbarWidth)) {
	                    return true;
	                }
	            }
	            else {
	                if (ev.clientX > (targetRect.left + targetElement.clientWidth)) {
	                    return true;
	                }
	            }
	            // Check horizontal scroll
	            if (ev.clientY > (targetRect.top + targetElement.clientHeight)) {
	                return true;
	            }
	        }
	        return false;
	    };
	    MarqueeSelection.prototype._onMouseDown = function (ev) {
	        var _a = this.props, isEnabled = _a.isEnabled, onShouldStartSelection = _a.onShouldStartSelection;
	        // Ensure the mousedown is within the boundaries of the target. If not, it may have been a click on a scrollbar.
	        if (this._isMouseEventOnScrollbar(ev)) {
	            return;
	        }
	        if (isEnabled && (!onShouldStartSelection || onShouldStartSelection(ev))) {
	            if (this._scrollableSurface && ev.button === 0) {
	                this._selectedIndicies = {};
	                this._events.on(window, 'mousemove', this._onMouseMove);
	                this._events.on(this._scrollableParent, 'scroll', this._onMouseMove);
	                this._events.on(window, 'mouseup', this._onMouseUp, true);
	                this._autoScroll = new AutoScroll_1.AutoScroll(this.refs.root);
	                this._scrollTop = this._scrollableSurface.scrollTop;
	                this._rootRect = this.refs.root.getBoundingClientRect();
	            }
	        }
	    };
	    MarqueeSelection.prototype._getRootRect = function () {
	        return {
	            left: this._rootRect.left,
	            top: this._rootRect.top + (this._scrollTop - this._scrollableSurface.scrollTop),
	            width: this._rootRect.width,
	            height: this._rootRect.height
	        };
	    };
	    MarqueeSelection.prototype._onMouseMove = function (ev) {
	        if (ev.clientX !== undefined) {
	            this._lastMouseEvent = ev;
	        }
	        var rootRect = this._getRootRect();
	        var currentPoint = { x: ev.clientX - rootRect.left, y: ev.clientY - rootRect.top };
	        if (!this._dragOrigin) {
	            this._dragOrigin = currentPoint;
	        }
	        if (ev.buttons !== undefined && ev.buttons === 0) {
	            this._onMouseUp(ev);
	        }
	        else {
	            if (this.state.dragRect || math_1.getDistanceBetweenPoints(this._dragOrigin, currentPoint) > MIN_DRAG_DISTANCE) {
	                // We need to constrain the current point to the rootRect boundaries.
	                var constrainedPoint = this.props.isDraggingConstrainedToRoot ? {
	                    x: Math.max(0, Math.min(rootRect.width, this._lastMouseEvent.clientX - rootRect.left)),
	                    y: Math.max(0, Math.min(rootRect.height, this._lastMouseEvent.clientY - rootRect.top))
	                } : {
	                    x: this._lastMouseEvent.clientX - rootRect.left,
	                    y: this._lastMouseEvent.clientY - rootRect.top
	                };
	                var dragRect = {
	                    left: Math.min(this._dragOrigin.x, constrainedPoint.x),
	                    top: Math.min(this._dragOrigin.y, constrainedPoint.y),
	                    width: Math.abs(constrainedPoint.x - this._dragOrigin.x),
	                    height: Math.abs(constrainedPoint.y - this._dragOrigin.y)
	                };
	                this.setState({ dragRect: dragRect });
	                this._evaluateSelection(dragRect);
	            }
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	        return false;
	    };
	    MarqueeSelection.prototype._onMouseUp = function (ev) {
	        var _this = this;
	        this._events.off(window);
	        this._events.off(this._scrollableParent, 'scroll');
	        this._autoScroll.dispose();
	        this._autoScroll = this._dragOrigin = this._lastMouseEvent = this._selectedIndicies = this._itemRectCache = undefined;
	        if (this.state.dragRect) {
	            // When we've moused up from selection, make sure the click doesn't get executed.
	            var clickRemovalCallback_1 = function (clickEvent) {
	                _this._events.off(ev.target, 'click', clickRemovalCallback_1);
	                clickEvent.preventDefault();
	                clickEvent.stopPropagation();
	            };
	            this._events.on(ev.target, 'click', clickRemovalCallback_1, true);
	            this.setState({
	                dragRect: undefined
	            });
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    MarqueeSelection.prototype._evaluateSelection = function (dragRect) {
	        // Break early if we don't need to evaluate.
	        if (!dragRect) {
	            return;
	        }
	        var selection = this.props.selection;
	        var rootRect = this._getRootRect();
	        var allElements = this.refs.root.querySelectorAll('[data-selection-index]');
	        if (!this._itemRectCache) {
	            this._itemRectCache = {};
	        }
	        // Stop change events, clear selection to re-populate.
	        selection.setChangeEvents(false);
	        selection.setAllSelected(false);
	        for (var i = 0; i < allElements.length; i++) {
	            var element = allElements[i];
	            var index = element.getAttribute('data-selection-index');
	            // Pull the memoized rectangle for the item, or the get the rect and memoize.
	            var itemRect = this._itemRectCache[index];
	            if (!itemRect) {
	                itemRect = element.getBoundingClientRect();
	                // Normalize the item rect to the dragRect coordinates.
	                itemRect = {
	                    left: itemRect.left - rootRect.left,
	                    top: itemRect.top - rootRect.top,
	                    width: itemRect.width,
	                    height: itemRect.height,
	                    right: (itemRect.left - rootRect.left) + itemRect.width,
	                    bottom: (itemRect.top - rootRect.top) + itemRect.height
	                };
	                if (itemRect.width > 0 && itemRect.height > 0) {
	                    this._itemRectCache[index] = itemRect;
	                }
	            }
	            if (itemRect.top < (dragRect.top + dragRect.height) &&
	                itemRect.bottom > dragRect.top &&
	                itemRect.left < (dragRect.left + dragRect.width) &&
	                itemRect.right > dragRect.left) {
	                this._selectedIndicies[index] = true;
	            }
	            else {
	                delete this._selectedIndicies[index];
	            }
	        }
	        for (var index in this._selectedIndicies) {
	            if (this._selectedIndicies.hasOwnProperty(index)) {
	                selection.setIndexSelected(Number(index), true, false);
	            }
	        }
	        selection.setChangeEvents(true);
	    };
	    MarqueeSelection.defaultProps = {
	        rootTagName: 'div',
	        rootProps: {},
	        isEnabled: true
	    };
	    __decorate([
	        autobind_1.autobind
	    ], MarqueeSelection.prototype, "_onMouseDown", null);
	    return MarqueeSelection;
	}(BaseComponent_1.BaseComponent));
	exports.MarqueeSelection = MarqueeSelection;
	


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var EventGroup_1 = __webpack_require__(14);
	var scroll_1 = __webpack_require__(43);
	var dom_1 = __webpack_require__(29);
	var SCROLL_ITERATION_DELAY = 16;
	var SCROLL_GUTTER_HEIGHT = 100;
	var MAX_SCROLL_VELOCITY = 15;
	/**
	 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
	 * up/down depending on how close the mouse is to the top/bottom of the container.
	 *
	 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
	 */
	var AutoScroll = (function () {
	    function AutoScroll(element) {
	        this._events = new EventGroup_1.EventGroup(this);
	        this._scrollableParent = scroll_1.findScrollableParent(element);
	        this._incrementScroll = this._incrementScroll.bind(this);
	        this._scrollRect = dom_1.getRect(this._scrollableParent);
	        if (this._scrollableParent === window) {
	            this._scrollableParent = document.body;
	        }
	        if (this._scrollableParent) {
	            this._events.on(window, 'mousemove', this._onMouseMove, true);
	        }
	    }
	    AutoScroll.prototype.dispose = function () {
	        this._events.dispose();
	        this._stopScroll();
	    };
	    AutoScroll.prototype._onMouseMove = function (ev) {
	        var scrollRectTop = this._scrollRect.top;
	        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
	        if (ev.clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
	            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (ev.clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
	        }
	        else if (ev.clientY > scrollClientBottom) {
	            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((ev.clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
	        }
	        else {
	            this._scrollVelocity = 0;
	        }
	        if (this._scrollVelocity) {
	            this._startScroll();
	        }
	        else {
	            this._stopScroll();
	        }
	    };
	    AutoScroll.prototype._startScroll = function () {
	        if (!this._timeoutId) {
	            this._incrementScroll();
	        }
	    };
	    AutoScroll.prototype._incrementScroll = function () {
	        this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
	        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
	    };
	    AutoScroll.prototype._stopScroll = function () {
	        if (this._timeoutId) {
	            clearTimeout(this._timeoutId);
	            delete this._timeoutId;
	        }
	    };
	    return AutoScroll;
	}());
	exports.AutoScroll = AutoScroll;
	


/***/ },
/* 215 */
/***/ function(module, exports) {

	"use strict";
	function getDistanceBetweenPoints(point1, point2) {
	    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
	    return distance;
	}
	exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
	


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-MarqueeSelection{position:relative;cursor:default}.ms-MarqueeSelection-dragMask{position:absolute;background:rgba(255,0,0,0);left:0;top:0;right:0;bottom:0}.ms-MarqueeSelection-box{position:absolute;box-sizing:border-box;border:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";pointer-events:none}.ms-MarqueeSelection-boxFill{position:absolute;box-sizing:border-box;background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";opacity:.1;left:0;top:0;right:0;bottom:0}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(218));
	


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(219));
	


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(21);
	var css_1 = __webpack_require__(7);
	var rtl_1 = __webpack_require__(31);
	var Button_1 = __webpack_require__(4);
	__webpack_require__(220);
	// The number pixels per indentation level for Nav links.
	var _indentationSize = 14;
	// Tne number of pixels of left margin when there is expand/collaps button
	var _indentWithExpandButton = 28;
	// Tne number of pixels of left margin when there is expand/collaps button
	var _indentNoExpandButton = 20;
	// global var used in _isLinkSelectedKey
	var _urlResolver;
	var Nav = (function (_super) {
	    __extends(Nav, _super);
	    function Nav(props) {
	        _super.call(this, props);
	        this.state = {
	            isGroupExpanded: [],
	            isLinkExpandStateChanged: false,
	            selectedKey: props.initialSelectedKey || props.selectedKey,
	        };
	        this._hasExpandButton = false;
	    }
	    Nav.prototype.render = function () {
	        var _this = this;
	        if (!this.props.groups) {
	            return null;
	        }
	        // when this.props.groups[x].name is specified or Any of the link has child link, chevorn Expand/collaps button is shown,
	        // different padding is needed. _hasExpandButton marks this condition.
	        this._hasExpandButton = this.props.groups.some(function (group, groupIndex) {
	            return !!group && !!group.name || group.links && group.links.some(function (link, linkIndex) {
	                return !!link && !!link.links && link.links.length > 0;
	            });
	        });
	        var groupElements = this.props.groups.map(function (group, groupIndex) { return _this._renderGroup(group, groupIndex); });
	        return (React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.vertical}, 
	            React.createElement("nav", {role: 'navigation', className: css_1.css('ms-Nav', { 'is-onTop ms-u-slideRightIn40': this.props.isOnTop })}, groupElements)
	        ));
	    };
	    Object.defineProperty(Nav.prototype, "selectedKey", {
	        get: function () {
	            return this.state.selectedKey;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Nav.prototype._renderAnchorLink = function (link, linkIndex, nestingLevel) {
	        // Determine the appropriate padding to add before this link.
	        // In RTL, the "before" padding will go on the right instead of the left.
	        var isRtl = rtl_1.getRTL();
	        var paddingBefore = (_indentationSize * nestingLevel +
	            (this._hasExpandButton ? _indentWithExpandButton : _indentNoExpandButton)).toString(10) + 'px';
	        return (React.createElement("a", {className: css_1.css('ms-Nav-link'), style: (_a = {}, _a[isRtl ? 'paddingRight' : 'paddingLeft'] = paddingBefore, _a), href: link.url || 'javascript:', onClick: this._onNavAnchorLinkClicked.bind(this, link), "aria-label": link.ariaLabel, title: link.title || link.name, target: link.target}, 
	            link.iconClassName && React.createElement("i", {className: css_1.css('ms-Icon', 'ms-Nav-IconLink', link.iconClassName)}), 
	            this.props.onRenderLink(link)));
	        var _a;
	    };
	    Nav.prototype._renderButtonLink = function (link, linkIndex) {
	        return (React.createElement(Button_1.Button, {className: css_1.css('ms-Nav-link ms-Nav-linkButton', { 'isOnExpanded': this._hasExpandButton }), buttonType: Button_1.ButtonType.command, href: link.url, icon: link.icon, description: link.title || link.name, onClick: this._onNavButtonLinkClicked.bind(this, link)}, link.name));
	    };
	    Nav.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
	        var isLinkSelected = this._isLinkSelected(link);
	        return (React.createElement("div", {key: link.key || linkIndex, className: css_1.css('ms-Nav-compositeLink', { ' is-expanded': link.isExpanded, 'is-selected': isLinkSelected })}, 
	            (nestingLevel === 0 && link.links && link.links.length > 0 ?
	                React.createElement("button", {className: 'ms-Nav-chevronButton ms-Nav-chevronButton--link', onClick: this._onLinkExpandClicked.bind(this, link), "aria-label": this.props.expandButtonAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false'}, 
	                    React.createElement("i", {className: 'ms-Nav-chevron ms-Icon ms-Icon--ChevronDown'})
	                ) : null), 
	            !!link.onClick ? this._renderButtonLink(link, linkIndex) : this._renderAnchorLink(link, linkIndex, nestingLevel)));
	    };
	    Nav.prototype._renderLink = function (link, linkIndex, nestingLevel) {
	        return (React.createElement("li", {key: link.key || linkIndex, role: 'listitem'}, 
	            this._renderCompositeLink(link, linkIndex, nestingLevel), 
	            (link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null)));
	    };
	    Nav.prototype._renderLinks = function (links, nestingLevel) {
	        var _this = this;
	        if (!links || !links.length) {
	            return null;
	        }
	        var linkElements = links.map(function (link, linkIndex) { return _this._renderLink(link, linkIndex, nestingLevel); });
	        return (React.createElement("ul", {role: 'list', "aria-label": this.props.ariaLabel}, linkElements));
	    };
	    Nav.prototype._renderGroup = function (group, groupIndex) {
	        var isGroupExpanded = this.state.isGroupExpanded[groupIndex] !== false;
	        return (React.createElement("div", {key: groupIndex, className: css_1.css('ms-Nav-group', { 'is-expanded': isGroupExpanded })}, 
	            (group.name ?
	                React.createElement("button", {className: 'ms-Nav-chevronButton ms-Nav-chevronButton--group ms-Nav-groupHeaderFontSize', onClick: this._onGroupHeaderClicked.bind(this, groupIndex)}, 
	                    React.createElement("i", {className: css_1.css('ms-Nav-chevron', 'ms-Icon', 'ms-Icon--ChevronDown')}), 
	                    group.name) : null), 
	            React.createElement("div", {className: css_1.css('ms-Nav-groupContent', 'ms-u-slideDownIn20')}, this._renderLinks(group.links, 0 /* nestingLevel */))));
	    };
	    Nav.prototype._onGroupHeaderClicked = function (groupIndex, ev) {
	        var isGroupExpanded = this.state.isGroupExpanded;
	        isGroupExpanded[groupIndex] = !isGroupExpanded[groupIndex];
	        this.setState({ isGroupExpanded: isGroupExpanded });
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    Nav.prototype._onLinkExpandClicked = function (link, ev) {
	        link.isExpanded = !link.isExpanded;
	        this.setState({ isLinkExpandStateChanged: true });
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    Nav.prototype._onNavAnchorLinkClicked = function (link, ev) {
	        if (this.props.onLinkClick) {
	            this.props.onLinkClick(ev, link);
	        }
	        this.setState({ selectedKey: link.key });
	    };
	    Nav.prototype._onNavButtonLinkClicked = function (link, ev) {
	        if (link.onClick) {
	            link.onClick(ev, link);
	        }
	        this.setState({ selectedKey: link.key });
	    };
	    Nav.prototype._isLinkSelected = function (link) {
	        // if caller passes in selectedKey, use it as first choice or
	        // if current state.selectedKey (from addressbar) is match to the link
	        if (this.props.selectedKey !== undefined) {
	            return link.key === this.props.selectedKey;
	        }
	        else if (this.state.selectedKey !== undefined && link.key === this.state.selectedKey) {
	            return true;
	        }
	        // resolve is not supported for ssr
	        if (typeof (window) === 'undefined') {
	            return false;
	        }
	        if (!link.url) {
	            return false;
	        }
	        _urlResolver = _urlResolver || document.createElement('a');
	        _urlResolver.href = link.url || '';
	        var target = _urlResolver.href;
	        if (location.href === target) {
	            return true;
	        }
	        if (location.protocol + '//' + location.host + location.pathname === target) {
	            return true;
	        }
	        if (location.hash) {
	            // Match the hash to the url.
	            if (location.hash === link.url) {
	                return true;
	            }
	            // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
	            _urlResolver.href = location.hash.substring(1);
	            return _urlResolver.href === target;
	        }
	        return false;
	    };
	    Nav.defaultProps = {
	        groups: null,
	        onRenderLink: function (link) { return (React.createElement("span", {className: 'ms-Nav-linkText'}, link.name)); }
	    };
	    return Nav;
	}(React.Component));
	exports.Nav = Nav;
	


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Nav{overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Nav.is-onTop{position:absolute}.ms-Nav ul{list-style-type:none}.ms-Nav ul,.ms-Nav ul>li{padding:0}.ms-Nav-groupContent{display:none;margin-bottom:40px}.ms-Nav-group.is-expanded .ms-Nav-groupContent{display:block}.ms-Nav-Icon{padding:0;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}html[dir=ltr] .ms-Nav-IconLink{margin-right:4px}html[dir=rtl] .ms-Nav-IconLink{margin-left:4px}.ms-Nav-chevronButton{display:block;font-weight:400;font-size:12px;line-height:36px;margin:5px 0;padding:0 20px 0 28px;background:0 0;border:none;text-transform:uppercase;cursor:pointer;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=ltr] .ms-Nav-chevronButton{text-align:left}html[dir=rtl] .ms-Nav-chevronButton{text-align:right}html[dir=rtl] .ms-Nav-chevronButton{padding:0 28px 0 20px}.ms-Nav-chevronButton:visited{color:inherit}.ms-Nav-chevronButton:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": "}.ms-Nav-chevronButton.ms-Nav-chevronButton--group{width:100%;height:36px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Nav-chevron.ms-Icon{position:absolute;height:36px;line-height:36px;font-size:12px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}html[dir=ltr] .ms-Nav-chevron.ms-Icon{left:8px}html[dir=rtl] .ms-Nav-chevron.ms-Icon{right:8px}.ms-Nav-group.is-expanded .ms-Nav-chevronButton--group .ms-Nav-chevron{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.ms-Nav-linkText{vertical-align:middle}.ms-Nav-compositeLink{display:block;position:relative;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Nav-compositeLink .ms-Nav-chevronButton.ms-Nav-chevronButton--link{display:block;width:28px;height:36px;position:absolute;top:0;z-index:1;padding:0;margin:0}html[dir=ltr] .ms-Nav-compositeLink .ms-Nav-chevronButton.ms-Nav-chevronButton--link{left:0}html[dir=rtl] .ms-Nav-compositeLink .ms-Nav-chevronButton.ms-Nav-chevronButton--link{right:0}.ms-Nav-compositeLink .ms-Nav-chevronButton.ms-Nav-chevronButton--link .ms-Nav-chevron{position:relative}.ms-Nav-compositeLink a{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Nav-compositeLink:hover .ms-Nav-chevronButton,.ms-Nav-compositeLink:hover a{background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Nav-compositeLink.is-expanded .ms-Nav-chevron{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton,.ms-Nav-compositeLink.is-selected a{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,.ms-Nav-compositeLink.is-selected a:after{content:'';position:absolute;top:0;bottom:0}html[dir=ltr] .ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,html[dir=ltr] .ms-Nav-compositeLink.is-selected a:after{border-left:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}html[dir=rtl] .ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,html[dir=rtl] .ms-Nav-compositeLink.is-selected a:after{border-right:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}html[dir=ltr] .ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,html[dir=ltr] .ms-Nav-compositeLink.is-selected a:after{right:0}html[dir=rtl] .ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,html[dir=rtl] .ms-Nav-compositeLink.is-selected a:after{left:0}html[dir=ltr] .ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,html[dir=ltr] .ms-Nav-compositeLink.is-selected a:after{left:0}html[dir=rtl] .ms-Nav-compositeLink.is-selected .ms-Nav-chevronButton:after,html[dir=rtl] .ms-Nav-compositeLink.is-selected a:after{right:0}.ms-Nav-link{display:block;position:relative;height:36px;line-height:36px;text-decoration:none;padding:0 20px;cursor:pointer;text-overflow:ellipsis;text-decoration:none;white-space:nowrap;overflow:hidden}.ms-Nav-groupHeaderFontSize{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:17px;font-weight:300}.ms-Nav-chevronButton--group::-moz-focus-inner,.ms-Nav-chevronButton--link::-moz-focus-inner,.ms-Nav-chevronButton::-moz-focus-inner,.ms-Nav-link::-moz-focus-inner{border:0}.ms-Nav-chevronButton,.ms-Nav-chevronButton--group,.ms-Nav-chevronButton--link,.ms-Nav-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Nav-chevronButton--group:focus:after,.ms-Fabric.is-focusVisible .ms-Nav-chevronButton--link:focus:after,.ms-Fabric.is-focusVisible .ms-Nav-chevronButton:focus:after,.ms-Fabric.is-focusVisible .ms-Nav-link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-Nav-linkButton.ms-Button--command{padding-left:20px}html[dir=rtl] .ms-Nav-linkButton.ms-Button--command{padding-right:20px}.ms-Nav-linkButton.ms-Button--command .ms-Button-label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}html[dir=ltr] .ms-Nav-linkButton.ms-Button--command.isOnExpanded{padding-left:28px}html[dir=rtl] .ms-Nav-linkButton.ms-Button--command.isOnExpanded{padding-right:28px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(222));
	


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(223));
	__export(__webpack_require__(224));
	


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var BaseComponent_1 = __webpack_require__(12);
	var index_1 = __webpack_require__(166);
	var Panel_Props_1 = __webpack_require__(224);
	var Layer_1 = __webpack_require__(50);
	var Overlay_1 = __webpack_require__(169);
	var index_2 = __webpack_require__(45);
	var css_1 = __webpack_require__(7);
	var object_1 = __webpack_require__(8);
	var rtl_1 = __webpack_require__(31);
	__webpack_require__(225);
	var Panel = (function (_super) {
	    __extends(Panel, _super);
	    function Panel(props) {
	        _super.call(this, props);
	        this._onPanelClick = this._onPanelClick.bind(this);
	        this._onPanelRef = this._onPanelRef.bind(this);
	        this.state = {
	            isOpen: !!props.isOpen,
	            isAnimatingOpen: props.isOpen,
	            isAnimatingClose: false,
	            id: object_1.getId('Panel')
	        };
	    }
	    Panel.prototype.componentDidMount = function () {
	        var _this = this;
	        if (this.state.isOpen) {
	            this._async.setTimeout(function () {
	                _this.setState({
	                    isAnimatingOpen: false
	                });
	            }, 2000);
	        }
	    };
	    Panel.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.isOpen !== this.state.isOpen) {
	            this.setState({
	                isOpen: newProps.isOpen,
	                isAnimatingOpen: newProps.isOpen ? true : false,
	                isAnimatingClose: newProps.isOpen ? false : true
	            });
	        }
	    };
	    Panel.prototype.render = function () {
	        var _a = this.props, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, type = _a.type, hasCloseButton = _a.hasCloseButton, isLightDismiss = _a.isLightDismiss, isBlocking = _a.isBlocking, headerText = _a.headerText, closeButtonAriaLabel = _a.closeButtonAriaLabel, _c = _a.headerClassName, headerClassName = _c === void 0 ? '' : _c, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, ignoreExternalFocusing = _a.ignoreExternalFocusing, forceFocusInsideTrap = _a.forceFocusInsideTrap, firstFocusableSelector = _a.firstFocusableSelector;
	        var _d = this.state, isOpen = _d.isOpen, isAnimatingOpen = _d.isAnimatingOpen, isAnimatingClose = _d.isAnimatingClose, id = _d.id;
	        var isLeft = type === Panel_Props_1.PanelType.smallFixedNear ? true : false;
	        var isRTL = rtl_1.getRTL();
	        var isOnRightSide = isRTL ? isLeft : !isLeft;
	        var headerTextId = id + '-headerText';
	        var pendingCommandBarContent = '';
	        if (!isOpen) {
	            return null;
	        }
	        var header;
	        if (headerText) {
	            header = React.createElement("p", {className: css_1.css('ms-Panel-headerText', headerClassName), id: headerTextId}, headerText);
	        }
	        var closeButton;
	        if (hasCloseButton) {
	            closeButton = React.createElement("button", {className: 'ms-Panel-closeButton ms-PanelAction-close', onClick: this._onPanelClick, "aria-label": closeButtonAriaLabel, "data-is-visible": true}, 
	                React.createElement("i", {className: 'ms-Panel-closeIcon ms-Icon ms-Icon--Cancel'})
	            );
	        }
	        var overlay;
	        if (isBlocking) {
	            overlay = React.createElement(Overlay_1.Overlay, {isDarkThemed: false, onClick: isLightDismiss ? this._onPanelClick : null});
	        }
	        return (React.createElement(Layer_1.Layer, null, 
	            React.createElement(index_2.Popup, {role: 'dialog', ariaLabelledBy: headerText ? headerTextId : undefined, onDismiss: this.props.onDismiss}, 
	                React.createElement("div", {ref: this._onPanelRef, className: css_1.css('ms-Panel', className, {
	                    'ms-Panel--openLeft': !isOnRightSide,
	                    'ms-Panel--openRight': isOnRightSide,
	                    'is-open': isOpen,
	                    'ms-Panel-animateIn': isAnimatingOpen,
	                    'ms-Panel-animateOut': isAnimatingClose,
	                    'ms-Panel--smFluid': type === Panel_Props_1.PanelType.smallFluid,
	                    'ms-Panel--smLeft': type === Panel_Props_1.PanelType.smallFixedNear,
	                    'ms-Panel--sm': type === Panel_Props_1.PanelType.smallFixedFar,
	                    'ms-Panel--md': type === Panel_Props_1.PanelType.medium,
	                    'ms-Panel--lg': type === Panel_Props_1.PanelType.large || type === Panel_Props_1.PanelType.largeFixed,
	                    'ms-Panel--fixed': type === Panel_Props_1.PanelType.largeFixed,
	                    'ms-Panel--xl': type === Panel_Props_1.PanelType.extraLarge,
	                })}, 
	                    overlay, 
	                    React.createElement(index_1.FocusTrapZone, {className: 'ms-Panel-main', elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isLightDismiss, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector}, 
	                        React.createElement("div", {className: 'ms-Panel-commands', "data-is-visible": true}, 
	                            pendingCommandBarContent, 
	                            closeButton), 
	                        React.createElement("div", {className: 'ms-Panel-contentInner'}, 
	                            header, 
	                            React.createElement("div", {className: 'ms-Panel-content'}, children))))
	            )
	        ));
	    };
	    Panel.prototype.dismiss = function () {
	        if (this.state.isOpen) {
	            this.setState({
	                isAnimatingOpen: false,
	                isAnimatingClose: true
	            });
	        }
	    };
	    Panel.prototype._onPanelClick = function () {
	        this.dismiss();
	    };
	    Panel.prototype._onPanelRef = function (ref) {
	        if (ref) {
	            this._events.on(ref, 'animationend', this._onAnimationEnd);
	        }
	        else {
	            this._events.off();
	        }
	    };
	    Panel.prototype._onAnimationEnd = function (ev) {
	        if (ev.animationName.indexOf('In') > -1) {
	            this.setState({
	                isOpen: true,
	                isAnimatingOpen: false
	            });
	        }
	        if (ev.animationName.indexOf('Out') > -1) {
	            this.setState({
	                isOpen: false,
	                isAnimatingClose: false
	            });
	            if (this.props.onDismiss) {
	                this.props.onDismiss();
	            }
	        }
	    };
	    Panel.defaultProps = {
	        isOpen: false,
	        isBlocking: true,
	        hasCloseButton: true,
	        type: Panel_Props_1.PanelType.smallFixedFar,
	    };
	    return Panel;
	}(BaseComponent_1.BaseComponent));
	exports.Panel = Panel;
	


/***/ },
/* 224 */
/***/ function(module, exports) {

	"use strict";
	(function (PanelType) {
	    /**
	     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fluid width.
	     * Only used on Small screen breakpoints.
	     * Small: 320-479px width (full screen), 16px Left/Right padding
	     * Medium: <unused>
	     * Large: <unused>
	     * XLarge: <unused>
	     * XXLarge: <unused>
	     */
	    PanelType[PanelType["smallFluid"] = 0] = "smallFluid";
	    /**
	     * Renders the panel in 'small' mode, anchored to the far side (right in LTR mode), and has a fixed width.
	     * Small: 272px width, 16px Left/Right padding
	     * Medium: 340px width, 16px Left/Right padding
	     * Large: 340px width, 32px Left/Right padding
	     * XLarge: 340px width, 32px Left/Right padding
	     * XXLarge: 340px width, 40px Left/Right padding
	     */
	    PanelType[PanelType["smallFixedFar"] = 1] = "smallFixedFar";
	    /**
	     * Renders the panel in 'small' mode, anchored to the near side (left in LTR mode), and has a fixed width.
	     * Small: 272px width, 16px Left/Right padding
	     * Medium: 272px width, 16px Left/Right padding
	     * Large: 272px width, 32px Left/Right padding
	     * XLarge: 272px width, 32px Left/Right padding
	     * XXLarge: 272px width, 32px Left/Right padding
	     */
	    PanelType[PanelType["smallFixedNear"] = 2] = "smallFixedNear";
	    /**
	     * Renders the panel in 'medium' mode, anchored to the far side (right in LTR mode).
	     * Small: <adapts to smallFluid>
	     * Medium: <adapts to smallFixedFar>
	     * Large: 48px fixed left margin, 32px Left/Right padding
	     * XLarge: 644px width, 32px Left/Right padding
	     * XXLarge: 643px width, 40px Left/Right padding
	     */
	    PanelType[PanelType["medium"] = 3] = "medium";
	    /**
	     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fluid at XXX-Large breakpoint.
	     * Small: <adapts to smallFluid>
	     * Medium:  <adapts to smallFixedFar>
	     * Large: <adapts to medium>
	     * XLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXXLarge: 48px fixed left margin, (no redlines for padding, assuming previous breakpoint)
	     */
	    PanelType[PanelType["large"] = 4] = "large";
	    /**
	     * Renders the panel in 'large' mode, anchored to the far side (right in LTR mode), and is fixed at XXX-Large breakpoint.
	     * Small: <adapts to smallFluid>
	     * Medium:  <adapts to smallFixedFar>
	     * Large: <adapts to medium>
	     * XLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXLarge: 48px fixed left margin, 32px Left/Right padding
	     * XXXLarge: 940px width, (no redlines for padding, assuming previous breakpoint)
	     */
	    PanelType[PanelType["largeFixed"] = 5] = "largeFixed";
	    /**
	     * Renders the panel in 'extra large' mode, anchored to the far side (right in LTR mode).
	     * Small: <adapts to smallFluid>
	     * Medium: <adapts to smallFixedFar>
	     * Large: <adapts to medium>
	     * XLarge: <adapts to large>
	     * XXLarge: 176px fixed left margin, 40px Left/Right padding
	     * XXXLarge: 176px fixed left margin, 40px Left/Right padding
	     */
	    PanelType[PanelType["extraLarge"] = 6] = "extraLarge";
	})(exports.PanelType || (exports.PanelType = {}));
	var PanelType = exports.PanelType;
	


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Panel{pointer-events:inherit;overflow:hidden}.ms-Panel .ms-Panel-main{position:absolute;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.ms-Panel{bottom:0;left:0;position:fixed;right:0;top:0;display:none;pointer-events:none}.ms-Panel .ms-Overlay{display:none;pointer-events:none;opacity:1;cursor:pointer;-webkit-transition:opacity 367ms cubic-bezier(.1,.9,.2,1);transition:opacity 367ms cubic-bezier(.1,.9,.2,1)}.ms-Panel-main{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";bottom:0;position:fixed;top:0;display:none;width:100%}html[dir=ltr] .ms-Panel-main{right:0}html[dir=rtl] .ms-Panel-main{left:0}@media (min-width:480px){.ms-Panel-main{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";pointer-events:auto;width:340px;box-shadow:-30px 0 30px -30px rgba(0,0,0,.2)}html[dir=ltr] .ms-Panel-main{left:auto}html[dir=rtl] .ms-Panel-main{right:auto}}.ms-Panel.ms-Panel--sm .ms-Panel-main{width:272px}@media (min-width:480px){.ms-Panel.ms-Panel--sm .ms-Panel-main{width:340px}}.ms-Panel.ms-Panel--smLeft .ms-Panel-main{width:272px}html[dir=ltr] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{right:auto}html[dir=rtl] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{left:auto}html[dir=ltr] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{left:0}html[dir=rtl] .ms-Panel.ms-Panel--smLeft .ms-Panel-main{right:0}.ms-Panel.ms-Panel--smFluid .ms-Panel-main{width:100%}@media (min-width:640px){.ms-Panel.ms-Panel--lg .ms-Panel-main,.ms-Panel.ms-Panel--md .ms-Panel-main,.ms-Panel.ms-Panel--xl .ms-Panel-main{width:auto}html[dir=ltr] .ms-Panel.ms-Panel--lg .ms-Panel-main,html[dir=ltr] .ms-Panel.ms-Panel--md .ms-Panel-main,html[dir=ltr] .ms-Panel.ms-Panel--xl .ms-Panel-main{left:48px}html[dir=rtl] .ms-Panel.ms-Panel--lg .ms-Panel-main,html[dir=rtl] .ms-Panel.ms-Panel--md .ms-Panel-main,html[dir=rtl] .ms-Panel.ms-Panel--xl .ms-Panel-main{right:48px}}@media (min-width:1024px){.ms-Panel.ms-Panel--md .ms-Panel-main{width:643px}html[dir=ltr] .ms-Panel.ms-Panel--md .ms-Panel-main{left:auto}html[dir=rtl] .ms-Panel.ms-Panel--md .ms-Panel-main{right:auto}}@media (min-width:1366px){html[dir=ltr] .ms-Panel.ms-Panel--lg .ms-Panel-main{left:428px}html[dir=rtl] .ms-Panel.ms-Panel--lg .ms-Panel-main{right:428px}}@media (min-width:1366px){.ms-Panel.ms-Panel--lg.ms-Panel--fixed .ms-Panel-main{width:940px}html[dir=ltr] .ms-Panel.ms-Panel--lg.ms-Panel--fixed .ms-Panel-main{left:auto}html[dir=rtl] .ms-Panel.ms-Panel--lg.ms-Panel--fixed .ms-Panel-main{right:auto}}@media (min-width:1366px){html[dir=ltr] .ms-Panel.ms-Panel--xl .ms-Panel-main{left:176px}html[dir=rtl] .ms-Panel.ms-Panel--xl .ms-Panel-main{right:176px}}.ms-Panel.is-open{display:block}.ms-Panel.is-open .ms-Panel-main{opacity:1;pointer-events:auto;display:block}.ms-Panel.is-open .ms-Overlay{display:block;pointer-events:auto}@media screen and (-ms-high-contrast:active){.ms-Panel.is-open .ms-Overlay{opacity:0}}.ms-Panel.is-open.ms-Panel-animateIn .ms-Panel-main{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Panel.is-open.ms-Panel-animateOut .ms-Panel-main{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:.1s;animation-duration:.1s}.ms-Panel.is-open.ms-Panel-animateOut .ms-Overlay{display:none}@media (min-width:480px){.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateIn .ms-Panel-main{-webkit-animation-name:fadeIn,slideLeftIn40;animation-name:fadeIn,slideLeftIn40;-webkit-animation-duration:367ms;-moz-animation-duration:367ms;-ms-animation-duration:367ms;-o-animation-duration:367ms;-webkit-animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-timing-function:cubic-bezier(.1,.9,.2,1);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateIn .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateOut .ms-Panel-main{-webkit-animation-name:fadeOut,slideRightOut40;animation-name:fadeOut,slideRightOut40;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateOut .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateIn .ms-Panel-main{-webkit-animation-name:fadeIn,slideRightIn40;animation-name:fadeIn,slideRightIn40;-webkit-animation-duration:367ms;-moz-animation-duration:367ms;-ms-animation-duration:367ms;-o-animation-duration:367ms;-webkit-animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-timing-function:cubic-bezier(.1,.9,.2,1);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateIn .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateOut .ms-Panel-main{-webkit-animation-name:fadeOut,slideLeftOut40;animation-name:fadeOut,slideLeftOut40;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateOut .ms-Overlay{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Panel.is-open .ms-Overlay{cursor:pointer;opacity:1;pointer-events:auto}}@media screen and (min-width:480px) and (-ms-high-contrast:active){.ms-Panel.is-open.ms-Panel--openLeft.ms-Panel-animateIn .ms-Overlay,.ms-Panel.is-open.ms-Panel--openRight.ms-Panel-animateIn .ms-Overlay{opacity:0;-webkit-animation-name:none;animation-name:none}}.ms-Panel-closeButton{background:0 0;border:0;cursor:pointer;position:absolute;top:0;height:40px;width:40px;line-height:40px;padding:0;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:16px}html[dir=ltr] .ms-Panel-closeButton{right:8px}html[dir=rtl] .ms-Panel-closeButton{left:8px}.ms-Panel-closeButton:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Panel-contentInner{position:absolute;top:40px;bottom:0;left:0;right:0;padding:0 16px 20px;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(0);transform:translateZ(0)}@media (min-width:640px){.ms-Panel-contentInner{padding:0 32px 20px}}@media (min-width:1366px){.ms-Panel-contentInner{padding:0 40px 20px}}.ms-Panel-headerText{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";margin:10px 0;padding:4px 0;line-height:1;text-overflow:ellipsis;overflow:hidden}@media (min-width:1024px){.ms-Panel-headerText{margin-top:30px}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(227));
	


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(228));
	__export(__webpack_require__(230));
	__export(__webpack_require__(231));
	__export(__webpack_require__(232));
	__export(__webpack_require__(234));
	__export(__webpack_require__(240));
	__export(__webpack_require__(241));
	


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(4);
	var css_1 = __webpack_require__(7);
	var BaseComponent_1 = __webpack_require__(12);
	var Spinner_1 = __webpack_require__(149);
	__webpack_require__(229);
	var SuggestionsItem = (function (_super) {
	    __extends(SuggestionsItem, _super);
	    function SuggestionsItem() {
	        _super.apply(this, arguments);
	    }
	    SuggestionsItem.prototype.render = function () {
	        var _a = this.props, suggestionModel = _a.suggestionModel, RenderSuggestion = _a.RenderSuggestion, onClick = _a.onClick, className = _a.className;
	        return (React.createElement(Button_1.Button, {onClick: onClick, className: css_1.css('ms-Suggestions-item', { 'is-suggested': suggestionModel.selected }, className)}, 
	            React.createElement(RenderSuggestion, __assign({}, suggestionModel.item))
	        ));
	    };
	    return SuggestionsItem;
	}(React.Component));
	exports.SuggestionsItem = SuggestionsItem;
	var Suggestions = (function (_super) {
	    __extends(Suggestions, _super);
	    function Suggestions(suggestionsProps) {
	        _super.call(this, suggestionsProps);
	        this.SuggestionsItemOfProperType = SuggestionsItem;
	        this._getMoreResults = this._getMoreResults.bind(this);
	    }
	    Suggestions.prototype.componentDidUpdate = function () {
	        this.scrollSelected();
	    };
	    Suggestions.prototype.render = function () {
	        var _a = this.props, suggestionsHeaderText = _a.suggestionsHeaderText, searchForMoreText = _a.searchForMoreText, className = _a.className, moreSuggestionsAvailable = _a.moreSuggestionsAvailable, noResultsFoundText = _a.noResultsFoundText, suggestions = _a.suggestions, isLoading = _a.isLoading, loadingText = _a.loadingText;
	        var noResults = noResultsFoundText ? React.createElement("div", {className: 'ms-Suggestions-none'}, noResultsFoundText) : null;
	        return (React.createElement("div", {className: css_1.css('ms-Suggestions', className ? className : '')}, 
	            suggestionsHeaderText ?
	                (React.createElement("div", {className: 'ms-Suggestions-title'}, suggestionsHeaderText)) : (null), 
	            isLoading && (React.createElement(Spinner_1.Spinner, {className: 'ms-Suggestions-spinner', label: loadingText})), 
	            (!suggestions || !suggestions.length) && !isLoading ?
	                noResults :
	                this._renderSuggestions(), 
	            searchForMoreText && moreSuggestionsAvailable ?
	                (React.createElement(Button_1.Button, {onClick: this._getMoreResults.bind(this), className: 'ms-SearchMore-button', buttonType: Button_1.ButtonType.icon, icon: 'Search', ref: this._resolveRef('_searchForMoreButton')}, searchForMoreText)) : (null)));
	    };
	    Suggestions.prototype.focusSearchForMoreButton = function () {
	        if (this._searchForMoreButton) {
	            this._searchForMoreButton.focus();
	        }
	    };
	    // TODO get the element to scroll into view properly regardless of direction.
	    Suggestions.prototype.scrollSelected = function () {
	        if (this._selectedElement) {
	            this._selectedElement.scrollIntoView(false);
	        }
	    };
	    Suggestions.prototype._renderSuggestions = function () {
	        var _this = this;
	        var _a = this.props, suggestions = _a.suggestions, onRenderSuggestion = _a.onRenderSuggestion, suggestionsItemClassName = _a.suggestionsItemClassName;
	        var TypedSuggestionsItem = this.SuggestionsItemOfProperType;
	        return (React.createElement("div", {className: 'ms-Suggestions-container', id: 'suggestion-list', role: 'menu'}, suggestions.map(function (suggestion, index) {
	            return React.createElement("div", {ref: _this._resolveRef(suggestion.selected ? '_selectedElement' : ''), key: index, id: 'sug-' + index, role: 'menuitem'}, 
	                React.createElement(TypedSuggestionsItem, {suggestionModel: suggestion, RenderSuggestion: onRenderSuggestion, onClick: function (ev) { return _this.props.onSuggestionClick(ev, suggestion.item, index); }, className: suggestionsItemClassName})
	            );
	        })));
	    };
	    Suggestions.prototype._getMoreResults = function () {
	        if (this.props.onGetMoreResults) {
	            this.props.onGetMoreResults();
	        }
	    };
	    return Suggestions;
	}(BaseComponent_1.BaseComponent));
	exports.Suggestions = Suggestions;
	


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-SearchMore-button{background:0 0;border:0;cursor:pointer;height:auto;text-align:center;margin:0;width:100%}.ms-SearchMore-button:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";cursor:pointer}.ms-SearchMore-button:active,.ms-SearchMore-button:focus{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-Suggestions{min-width:180px}.ms-Suggestions .ms-Suggestions-item{height:auto;width:100%;border:none}html[dir=ltr] .ms-Suggestions .ms-Suggestions-item{text-align:left}html[dir=rtl] .ms-Suggestions .ms-Suggestions-item{text-align:right}.ms-Suggestions .ms-Suggestions-item:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-item.is-suggested{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-item.is-suggested:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-title{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";font-size:12px;text-align:center;text-transform:uppercase;line-height:40px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-container{overflow-y:auto;overflow-x:hidden;max-height:300px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-none{text-align:center;color:" }, { "theme": "info", "defaultValue": "#767676" }, { "rawString": ";font-size:12px;line-height:30px}.ms-Suggestions-spinner{margin:5px;text-align:center;white-space:nowrap;line-height:20px}.ms-Suggestions-spinner .ms-Spinner-circle{display:inline-block;vertical-align:middle}.ms-Suggestions-spinner .ms-Spinner-label{display:inline-block;margin:0 10px;vertical-align:middle}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 230 */
/***/ function(module, exports) {

	"use strict";
	var SuggestionsController = (function () {
	    function SuggestionsController() {
	        this.suggestions = [];
	        this.currentIndex = -1;
	    }
	    SuggestionsController.prototype.updateSuggestions = function (newSuggestions) {
	        if (newSuggestions && newSuggestions.length > 0) {
	            this.suggestions = this._convertSuggestionsToSuggestionItems(newSuggestions);
	            this.currentIndex = 0;
	            this.suggestions[0].selected = true;
	            this.currentSuggestion = this.suggestions[0];
	        }
	        else {
	            this.suggestions = [];
	            this.currentIndex = -1;
	            this.currentSuggestion = undefined;
	        }
	    };
	    /**
	     * Increments the suggestion index and gets the next suggestion in the list.
	     */
	    SuggestionsController.prototype.nextSuggestion = function () {
	        if (this.suggestions && this.suggestions.length) {
	            if (this.currentIndex < (this.suggestions.length - 1)) {
	                this._setSelectedSuggestion(this.currentIndex + 1);
	                return true;
	            }
	            else if (this.currentIndex === (this.suggestions.length - 1)) {
	                this._setSelectedSuggestion(0);
	                return true;
	            }
	        }
	        return false;
	    };
	    /**
	     * Decrements the suggestion index and gets the previous suggestion in the list.
	     */
	    SuggestionsController.prototype.previousSuggestion = function () {
	        if (this.suggestions && this.suggestions.length) {
	            if (this.currentIndex > 0) {
	                this._setSelectedSuggestion(this.currentIndex - 1);
	                return true;
	            }
	            else if (this.currentIndex === 0) {
	                this._setSelectedSuggestion(this.suggestions.length - 1);
	                return true;
	            }
	        }
	        return false;
	    };
	    SuggestionsController.prototype.getSuggestions = function () {
	        return this.suggestions;
	    };
	    SuggestionsController.prototype.getCurrentItem = function () {
	        return this.currentSuggestion;
	    };
	    SuggestionsController.prototype.getSuggestionAtIndex = function (index) {
	        return this.suggestions[index];
	    };
	    SuggestionsController.prototype.hasSelectedSuggestion = function () {
	        return this.currentSuggestion ? true : false;
	    };
	    SuggestionsController.prototype._convertSuggestionsToSuggestionItems = function (suggestions) {
	        var converted = [];
	        suggestions.forEach(function (suggestion) { return converted.push({ item: suggestion, selected: false }); });
	        return converted;
	    };
	    SuggestionsController.prototype._setSelectedSuggestion = function (index) {
	        if (index > this.suggestions.length - 1 || index < 0) {
	            this.currentIndex = 0;
	            this.currentSuggestion.selected = false;
	            this.currentSuggestion = this.suggestions[0];
	            this.currentSuggestion.selected = true;
	        }
	        else {
	            if (this.currentIndex > -1) {
	                this.suggestions[this.currentIndex].selected = false;
	            }
	            this.suggestions[index].selected = true;
	            this.currentIndex = index;
	            this.currentSuggestion = this.suggestions[index];
	        }
	    };
	    return SuggestionsController;
	}());
	exports.SuggestionsController = SuggestionsController;
	


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var properties_1 = __webpack_require__(11);
	var autobind_1 = __webpack_require__(28);
	var KeyCodes_1 = __webpack_require__(26);
	var SELECTION_FORWARD = 'forward';
	var SELECTION_BACKWARD = 'backward';
	var BaseAutoFill = (function (_super) {
	    __extends(BaseAutoFill, _super);
	    function BaseAutoFill(props) {
	        _super.call(this, props);
	        this.state = {
	            value: ''
	        };
	    }
	    Object.defineProperty(BaseAutoFill.prototype, "cursorLocation", {
	        get: function () {
	            if (this._inputElement) {
	                var inputElement = this._inputElement;
	                if (inputElement.selectionDirection !== SELECTION_FORWARD) {
	                    return inputElement.selectionEnd;
	                }
	                else {
	                    return inputElement.selectionStart;
	                }
	            }
	            else {
	                return -1;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "isValueSelected", {
	        get: function () {
	            return this.inputElement.selectionStart !== this.inputElement.selectionEnd;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "value", {
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "selectionStart", {
	        get: function () {
	            return this._inputElement ? this._inputElement.selectionStart : -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "selectionEnd", {
	        get: function () {
	            return this._inputElement ? this._inputElement.selectionEnd : -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "inputElement", {
	        get: function () {
	            return this._inputElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BaseAutoFill.prototype.componentDidUpdate = function () {
	        var value = this.state.value;
	        var suggestedDisplayValue = this.props.suggestedDisplayValue;
	        var differenceIndex = 0;
	        if (value && suggestedDisplayValue && this._doesTextStartWith(suggestedDisplayValue, value)) {
	            while (differenceIndex < value.length && value[differenceIndex].toLocaleLowerCase() === suggestedDisplayValue[differenceIndex].toLocaleLowerCase()) {
	                differenceIndex++;
	            }
	            if (differenceIndex > 0) {
	                this._inputElement.setSelectionRange(differenceIndex, suggestedDisplayValue.length, SELECTION_BACKWARD);
	            }
	        }
	    };
	    BaseAutoFill.prototype.render = function () {
	        var value = this.state.value;
	        var suggestedDisplayValue = this.props.suggestedDisplayValue;
	        var displayValue = value;
	        if (this._doesTextStartWith(suggestedDisplayValue, value)) {
	            displayValue = suggestedDisplayValue;
	        }
	        var nativeProps = properties_1.getNativeProps(this.props, properties_1.inputProperties);
	        return React.createElement("input", __assign({}, nativeProps, {ref: this._resolveRef('_inputElement'), value: displayValue, autoCapitalize: 'off', autoComplete: 'off', onChange: this._onChange, onKeyDown: this._onKeyDown}));
	    };
	    BaseAutoFill.prototype.focus = function () {
	        this._inputElement.focus();
	    };
	    BaseAutoFill.prototype.clear = function () {
	        this._updateValue('');
	    };
	    BaseAutoFill.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.backspace:
	                this._handleBackspace(ev);
	                break;
	        }
	    };
	    BaseAutoFill.prototype._handleBackspace = function (ev) {
	        var value = this.state.value;
	        if (value && value.length > 0) {
	            this._updateValue(value.substring(0, value.length - 1));
	            // Since this effectively deletes a letter from the string we need to preventDefault so that
	            // the backspace doesn't try to delete a letter that's already been deleted. If a letter is deleted
	            // it can trigger the onChange event again which can have unintended consequences.
	            ev.preventDefault();
	        }
	    };
	    BaseAutoFill.prototype._onChange = function (ev) {
	        var value = ev.target.value;
	        this._updateValue(value);
	    };
	    BaseAutoFill.prototype._notifyInputChange = function (newValue) {
	        if (this.props.onInputValueChange) {
	            this.props.onInputValueChange(newValue);
	        }
	    };
	    BaseAutoFill.prototype._updateValue = function (newValue) {
	        var _this = this;
	        this.setState({
	            value: newValue
	        }, function () { return _this._notifyInputChange(newValue); });
	    };
	    BaseAutoFill.prototype._doesTextStartWith = function (text, startWith) {
	        if (!text || !startWith) {
	            return false;
	        }
	        return text.toLocaleLowerCase().indexOf(startWith.toLocaleLowerCase()) === 0;
	    };
	    __decorate([
	        autobind_1.autobind
	    ], BaseAutoFill.prototype, "_onKeyDown", null);
	    __decorate([
	        autobind_1.autobind
	    ], BaseAutoFill.prototype, "_onChange", null);
	    return BaseAutoFill;
	}(BaseComponent_1.BaseComponent));
	exports.BaseAutoFill = BaseAutoFill;
	


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(21);
	var Callout_1 = __webpack_require__(37);
	var index_1 = __webpack_require__(119);
	var Suggestions_1 = __webpack_require__(228);
	var SuggestionsController_1 = __webpack_require__(230);
	var BaseAutoFill_1 = __webpack_require__(231);
	var BaseComponent_1 = __webpack_require__(12);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(233);
	var BasePicker = (function (_super) {
	    __extends(BasePicker, _super);
	    function BasePicker(basePickerProps) {
	        var _this = this;
	        _super.call(this, basePickerProps);
	        this.SuggestionOfProperType = Suggestions_1.Suggestions;
	        var items = basePickerProps.defaultSelectedItems || [];
	        this.suggestionStore = new SuggestionsController_1.SuggestionsController();
	        this.selection = new index_1.Selection({ onSelectionChanged: function () { return _this.onSelectionChange(); } });
	        this.selection.setItems(items);
	        this.state = {
	            items: items,
	            suggestedDisplayValue: '',
	            moreSuggestionsAvailable: false
	        };
	    }
	    BasePicker.prototype.componentWillReceiveProps = function (newProps, newState) {
	        if (newState.items && newState.items !== this.state.items) {
	            this.selection.setItems(newState.items);
	        }
	    };
	    BasePicker.prototype.componentDidMount = function () {
	        this.selection.setItems(this.state.items);
	    };
	    BasePicker.prototype.focus = function () {
	        this.focusZone.focus();
	    };
	    BasePicker.prototype.dismissSuggestions = function () {
	        this.setState({ suggestionsVisible: false });
	    };
	    BasePicker.prototype.completeSuggestion = function () {
	        if (this.suggestionStore.hasSelectedSuggestion()) {
	            this.addItem(this.suggestionStore.currentSuggestion.item);
	            this.updateValue('');
	            this.input.clear();
	        }
	    };
	    BasePicker.prototype.render = function () {
	        var suggestedDisplayValue = this.state.suggestedDisplayValue;
	        var _a = this.props, className = _a.className, inputProps = _a.inputProps;
	        return (React.createElement("div", {ref: this._resolveRef('root'), className: Utilities_1.css('ms-BasePicker', className ? className : ''), onKeyDown: this.onKeyDown}, 
	            React.createElement(index_1.SelectionZone, {selection: this.selection, selectionMode: index_1.SelectionMode.multiple}, 
	                React.createElement(FocusZone_1.FocusZone, {ref: this._resolveRef('focusZone'), className: 'ms-BasePicker-text'}, 
	                    this.renderItems(), 
	                    React.createElement(BaseAutoFill_1.BaseAutoFill, __assign({}, inputProps, {className: 'ms-BasePicker-input', ref: this._resolveRef('input'), onFocus: this.onInputFocus, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": 'sug-' + this.suggestionStore.currentIndex, "aria-owns": 'suggestion-list', "aria-expanded": 'true', "aria-haspopup": 'true', autoCapitalize: 'off', autoComplete: 'off', role: 'combobox'})))
	            ), 
	            this.renderSuggestions()));
	    };
	    BasePicker.prototype.renderSuggestions = function () {
	        var TypedSuggestion = this.SuggestionOfProperType;
	        return this.state.suggestionsVisible ? (React.createElement(Callout_1.Callout, {isBeakVisible: false, gapSpace: 0, targetElement: this.root, onDismiss: this.dismissSuggestions, directionalHint: Utilities_1.getRTL() ? Callout_1.DirectionalHint.bottomRightEdge : Callout_1.DirectionalHint.bottomLeftEdge}, 
	            React.createElement(TypedSuggestion, __assign({onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, suggestions: this.suggestionStore.getSuggestions(), ref: this._resolveRef('suggestionElement'), onGetMoreResults: this.onGetMoreResults, moreSuggestionsAvailable: this.state.moreSuggestionsAvailable, isLoading: this.state.suggestionsLoading}, this.props.pickerSuggestionsProps))
	        )) : (null);
	    };
	    BasePicker.prototype.renderItems = function () {
	        var _this = this;
	        var onRenderItem = this.props.onRenderItem;
	        var items = this.state.items;
	        return items.map(function (item, index) { return onRenderItem({
	            item: item,
	            index: index,
	            key: index + _this._getTextFromItem(item),
	            selected: _this.selection.isIndexSelected(index),
	            onRemoveItem: function () { return _this.removeItem(item); }
	        }); });
	    };
	    BasePicker.prototype.resetFocus = function (index) {
	        var items = this.state.items;
	        if (items.length) {
	            var newEl = this.root.querySelectorAll('[data-selection-index]')[Math.min(index, items.length - 1)];
	            if (newEl) {
	                this.focusZone.focusElement(newEl);
	            }
	        }
	        else {
	            this.input.focus();
	        }
	    };
	    BasePicker.prototype.onSuggestionSelect = function () {
	        if (this.suggestionStore.currentSuggestion) {
	            var currentValue = this.input.value;
	            var itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, currentValue);
	            this.setState({ suggestedDisplayValue: itemValue });
	        }
	    };
	    BasePicker.prototype.onSelectionChange = function () {
	        this.forceUpdate();
	    };
	    BasePicker.prototype.updateSuggestions = function (suggestions) {
	        this.suggestionStore.updateSuggestions(suggestions);
	        this.forceUpdate();
	    };
	    BasePicker.prototype.updateValue = function (updatedValue) {
	        var _this = this;
	        var suggestions = this.props.onResolveSuggestions(updatedValue, this.state.items);
	        var suggestionsArray = suggestions;
	        var suggestionsPromiseLike = suggestions;
	        // Check to see if the returned value is an array, if it is then just pass it into the next function.
	        // If the returned value is not an array then check to see if it's a promise or PromiseLike. If it is then resolve it asynchronously.
	        if (Array.isArray(suggestionsArray)) {
	            this.resolveNewValue(updatedValue, suggestionsArray);
	        }
	        else if (suggestionsPromiseLike.then) {
	            if (!this.loadingTimer) {
	                this.loadingTimer = this._async.setTimeout(function () { return _this.setState({
	                    suggestionsLoading: true
	                }); }, 500);
	            }
	            this.setState({
	                suggestionsVisible: this.input.value !== '' && this.input.inputElement === document.activeElement
	            });
	            // Ensure that the promise will only use the callback if it was the most recent one.
	            var promise_1 = this.currentPromise = suggestionsPromiseLike;
	            promise_1.then(function (newSuggestions) {
	                if (promise_1 === _this.currentPromise) {
	                    _this.resolveNewValue(updatedValue, newSuggestions);
	                    if (_this.loadingTimer) {
	                        _this._async.clearTimeout(_this.loadingTimer);
	                        _this.loadingTimer = undefined;
	                    }
	                }
	            });
	        }
	    };
	    BasePicker.prototype.resolveNewValue = function (updatedValue, suggestions) {
	        this.suggestionStore.updateSuggestions(suggestions);
	        var itemValue = undefined;
	        if (this.suggestionStore.currentSuggestion) {
	            itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, updatedValue);
	        }
	        this.setState({
	            suggestionsLoading: false,
	            suggestedDisplayValue: itemValue,
	            suggestionsVisible: this.input.value !== '' && this.input.inputElement === document.activeElement
	        });
	    };
	    BasePicker.prototype.onChange = function () {
	        if (this.props.onChange) {
	            this.props.onChange(this.state.items);
	        }
	    };
	    BasePicker.prototype.onInputChange = function (value) {
	        this.updateValue(value);
	        this.setState({ moreSuggestionsAvailable: true });
	    };
	    BasePicker.prototype.onSuggestionClick = function (ev, item, index) {
	        this.addItemByIndex(index);
	    };
	    BasePicker.prototype.onInputFocus = function (ev) {
	        this.selection.setAllSelected(false);
	        if (this.input.value) {
	            this.setState({ suggestionsVisible: true });
	        }
	    };
	    BasePicker.prototype.onKeyDown = function (ev) {
	        var value = this.input.value;
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.escape:
	                this.dismissSuggestions();
	                break;
	            case Utilities_1.KeyCodes.tab:
	            case Utilities_1.KeyCodes.enter:
	                if (value && this.suggestionStore.hasSelectedSuggestion()) {
	                    this.completeSuggestion();
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                }
	                break;
	            case Utilities_1.KeyCodes.backspace:
	                this.onBackspace(ev);
	                break;
	            case Utilities_1.KeyCodes.up:
	                if (ev.target === this.input.inputElement && this.suggestionStore.previousSuggestion()) {
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                    this.onSuggestionSelect();
	                }
	                break;
	            case Utilities_1.KeyCodes.down:
	                if (ev.target === this.input.inputElement) {
	                    if (this.suggestionStore.nextSuggestion()) {
	                        ev.preventDefault();
	                        ev.stopPropagation();
	                        this.onSuggestionSelect();
	                    }
	                }
	                break;
	        }
	    };
	    BasePicker.prototype.onGetMoreResults = function () {
	        var _this = this;
	        if (this.props.onGetMoreResults) {
	            var suggestions = this.props.onGetMoreResults(this.input.value, this.state.items);
	            var suggestionsArray = suggestions;
	            var suggestionsPromiseLike = suggestions;
	            if (Array.isArray(suggestionsArray)) {
	                this.updateSuggestions(suggestionsArray);
	            }
	            else if (suggestionsPromiseLike.then) {
	                suggestionsPromiseLike.then(function (newSuggestions) { return _this.updateSuggestions(newSuggestions); });
	            }
	        }
	        this.input.focus();
	        this.setState({ moreSuggestionsAvailable: false });
	    };
	    BasePicker.prototype.addItemByIndex = function (index) {
	        this.addItem(this.suggestionStore.getSuggestionAtIndex(index).item);
	        this.input.clear();
	        this.updateValue('');
	    };
	    BasePicker.prototype.addItem = function (item) {
	        var _this = this;
	        var newItems = this.state.items.concat([item]);
	        this.selection.setItems(newItems);
	        this.setState({ items: newItems }, function () { return _this.onChange(); });
	    };
	    BasePicker.prototype.removeItem = function (item) {
	        var _this = this;
	        var items = this.state.items;
	        var index = items.indexOf(item);
	        if (index >= 0) {
	            var newItems = items.slice(0, index).concat(items.slice(index + 1));
	            this.selection.setItems(newItems);
	            this.setState({ items: newItems }, function () { return _this.onChange(); });
	        }
	    };
	    BasePicker.prototype.removeItems = function (itemsToRemove) {
	        var _this = this;
	        var items = this.state.items;
	        var newItems = items.filter(function (item) { return itemsToRemove.indexOf(item) === -1; });
	        var firstItemToRemove = this.selection.getSelection()[0];
	        var index = items.indexOf(firstItemToRemove);
	        this.selection.setItems(newItems);
	        this.setState({ items: newItems }, function () { return _this.resetFocus(index); });
	    };
	    // This is protected because we may expect the backspace key to work differently in a different kind of picker.
	    // This lets the subclass override it and provide it's own onBackspace. For an example see the BasePickerListBelow
	    BasePicker.prototype.onBackspace = function (ev) {
	        if (this.state.items.length && !this.input.isValueSelected && this.input.cursorLocation === 0) {
	            this.removeItem(this.state.items[this.state.items.length - 1]);
	        }
	        else if (this.selection.getSelectedCount() > 0) {
	            this.removeItems(this.selection.getSelection());
	        }
	    };
	    BasePicker.prototype._getTextFromItem = function (item, currentValue) {
	        if (this.props.getTextFromItem) {
	            return this.props.getTextFromItem(item, currentValue);
	        }
	        else {
	            return '';
	        }
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "dismissSuggestions", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "onInputChange", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "onSuggestionClick", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "onInputFocus", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "onKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "onGetMoreResults", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "addItemByIndex", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "addItem", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "removeItem", null);
	    __decorate([
	        Utilities_1.autobind
	    ], BasePicker.prototype, "removeItems", null);
	    return BasePicker;
	}(BaseComponent_1.BaseComponent));
	exports.BasePicker = BasePicker;
	var BasePickerListBelow = (function (_super) {
	    __extends(BasePickerListBelow, _super);
	    function BasePickerListBelow() {
	        _super.apply(this, arguments);
	    }
	    BasePickerListBelow.prototype.render = function () {
	        var suggestedDisplayValue = this.state.suggestedDisplayValue;
	        var _a = this.props, className = _a.className, inputProps = _a.inputProps;
	        return (React.createElement("div", null, 
	            React.createElement("div", {ref: this._resolveRef('root'), className: Utilities_1.css('ms-BasePicker', className ? className : ''), onKeyDown: this.onKeyDown}, 
	                React.createElement(index_1.SelectionZone, {selection: this.selection, selectionMode: index_1.SelectionMode.multiple}, 
	                    React.createElement("div", {className: 'ms-BasePicker-text'}, 
	                        React.createElement(BaseAutoFill_1.BaseAutoFill, __assign({}, inputProps, {className: 'ms-BasePicker-input', ref: this._resolveRef('input'), onFocus: this.onInputFocus, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": 'sug-' + this.suggestionStore.currentIndex, "aria-owns": 'suggestion-list', "aria-expanded": 'true', "aria-haspopup": 'true', autoCapitalize: 'off', autoComplete: 'off', role: 'combobox'}))
	                    )
	                )
	            ), 
	            this.renderSuggestions(), 
	            React.createElement(FocusZone_1.FocusZone, {ref: this._resolveRef('focusZone'), className: 'ms-BasePicker-selectedItems'}, this.renderItems())));
	    };
	    BasePickerListBelow.prototype.onBackspace = function (ev) {
	        // override the existing backspace method to not do anything because the list items appear below.
	    };
	    return BasePickerListBelow;
	}(BasePicker));
	exports.BasePickerListBelow = BasePickerListBelow;
	


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-BasePicker-text{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;box-sizing:border-box;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";min-width:180px;padding:1px}.ms-BasePicker-text:hover{border-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-BasePicker-text.inputFocused{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-BasePicker-input{border:none;min-height:28px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:0;padding:0 6px;margin:1px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var BasePicker_1 = __webpack_require__(232);
	var SelectedItemDefault_1 = __webpack_require__(235);
	var SuggestionItemDefault_1 = __webpack_require__(237);
	var SelectedItemWithMenu_1 = __webpack_require__(238);
	__webpack_require__(239);
	var BasePeoplePicker = (function (_super) {
	    __extends(BasePeoplePicker, _super);
	    function BasePeoplePicker() {
	        _super.apply(this, arguments);
	    }
	    return BasePeoplePicker;
	}(BasePicker_1.BasePicker));
	exports.BasePeoplePicker = BasePeoplePicker;
	var MemberListPeoplePicker = (function (_super) {
	    __extends(MemberListPeoplePicker, _super);
	    function MemberListPeoplePicker() {
	        _super.apply(this, arguments);
	    }
	    return MemberListPeoplePicker;
	}(BasePicker_1.BasePickerListBelow));
	exports.MemberListPeoplePicker = MemberListPeoplePicker;
	/**
	 * Standard People Picker.
	 */
	var NormalPeoplePicker = (function (_super) {
	    __extends(NormalPeoplePicker, _super);
	    function NormalPeoplePicker() {
	        _super.apply(this, arguments);
	    }
	    NormalPeoplePicker.defaultProps = {
	        onRenderItem: function (props) { return React.createElement(SelectedItemDefault_1.SelectedItemDefault, __assign({}, props)); },
	        onRenderSuggestionsItem: function (props) { return React.createElement(SuggestionItemDefault_1.SuggestionItemNormal, __assign({}, props)); }
	    };
	    return NormalPeoplePicker;
	}(BasePeoplePicker));
	exports.NormalPeoplePicker = NormalPeoplePicker;
	/**
	* Compact layout. It uses small personas when displaying search results.
	*/
	var CompactPeoplePicker = (function (_super) {
	    __extends(CompactPeoplePicker, _super);
	    function CompactPeoplePicker() {
	        _super.apply(this, arguments);
	    }
	    CompactPeoplePicker.defaultProps = {
	        onRenderItem: function (props) { return React.createElement(SelectedItemDefault_1.SelectedItemDefault, __assign({}, props)); },
	        onRenderSuggestionsItem: function (props) { return React.createElement(SuggestionItemDefault_1.SuggestionItemSmall, __assign({}, props)); }
	    };
	    return CompactPeoplePicker;
	}(BasePeoplePicker));
	exports.CompactPeoplePicker = CompactPeoplePicker;
	/**
	 * MemberList layout. The selected people show up below the search box.
	 */
	var ListPeoplePicker = (function (_super) {
	    __extends(ListPeoplePicker, _super);
	    function ListPeoplePicker() {
	        _super.apply(this, arguments);
	    }
	    ListPeoplePicker.defaultProps = {
	        onRenderItem: function (props) { return React.createElement(SelectedItemWithMenu_1.SelectedItemWithMenu, __assign({}, props)); },
	        onRenderSuggestionsItem: function (props) { return React.createElement(SuggestionItemDefault_1.SuggestionItemNormal, __assign({}, props)); }
	    };
	    return ListPeoplePicker;
	}(MemberListPeoplePicker));
	exports.ListPeoplePicker = ListPeoplePicker;
	


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var Persona_1 = __webpack_require__(184);
	var Button_1 = __webpack_require__(4);
	var css_1 = __webpack_require__(7);
	__webpack_require__(236);
	exports.SelectedItemDefault = function (peoplePickerItemProps) {
	    var item = peoplePickerItemProps.item, onRemoveItem = peoplePickerItemProps.onRemoveItem, index = peoplePickerItemProps.index, selected = peoplePickerItemProps.selected;
	    return (React.createElement("div", {className: css_1.css('ms-PickerPersona-container', {
	        'is-selected': selected
	    }), "data-is-focusable": true, "data-selection-index": index}, 
	        React.createElement("div", {className: 'ms-PickerItem-content'}, 
	            React.createElement(Persona_1.Persona, __assign({}, item, {presence: item.presence !== undefined ? item.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.extraSmall}))
	        ), 
	        React.createElement(Button_1.Button, {onClick: function () { if (onRemoveItem) {
	            onRemoveItem();
	        } }, icon: 'Cancel', buttonType: Button_1.ButtonType.icon, className: 'ms-PickerItem-content', "data-is-focusable": false})));
	};
	


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-PickerPersona-container{display:inline-block;vertical-align:top;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";margin:1px;vertical-align:top;white-space:nowrap;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-PickerPersona-container::-moz-focus-inner{border:0}.ms-PickerPersona-container{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-PickerPersona-container:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-PickerPersona-container:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-PickerPersona-container.is-selected{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-PickerPersona-container.is-selected:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-PickerPersona-container .ms-PickerItem-content{display:inline-block;vertical-align:middle}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var Persona_1 = __webpack_require__(184);
	exports.SuggestionItemNormal = function (personaProps) {
	    return (React.createElement("div", {className: 'ms-PeoplePicker-personaContent'}, 
	        React.createElement(Persona_1.Persona, __assign({}, personaProps, {presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.small, className: 'ms-PeoplePicker-Persona'}))
	    ));
	};
	exports.SuggestionItemSmall = function (personaProps) {
	    return (React.createElement("div", {className: 'ms-PeoplePicker-personaContent'}, 
	        React.createElement(Persona_1.Persona, __assign({}, personaProps, {presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.extraSmall, className: 'ms-PeoplePicker-Persona'}))
	    ));
	};
	


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	var Persona_1 = __webpack_require__(184);
	var ContextualMenu_1 = __webpack_require__(33);
	var Button_1 = __webpack_require__(4);
	var SelectedItemWithMenu = (function (_super) {
	    __extends(SelectedItemWithMenu, _super);
	    function SelectedItemWithMenu(props) {
	        _super.call(this, props);
	        this.onContextualMenu = this.onContextualMenu.bind(this);
	        this._onCloseContextualMenu = this._onCloseContextualMenu.bind(this);
	        this.state = { contextualMenuVisible: false };
	    }
	    SelectedItemWithMenu.prototype.render = function () {
	        var _a = this.props, item = _a.item, onRemoveItem = _a.onRemoveItem;
	        return (React.createElement("div", {className: 'ms-PickerPersona-container'}, 
	            React.createElement("div", {className: 'ms-PickerItem-content'}, 
	                React.createElement(Persona_1.Persona, __assign({}, item, {presence: item.presence !== undefined ? item.presence : Persona_1.PersonaPresence.none}))
	            ), 
	            React.createElement("div", {ref: 'ellipsisRef', className: 'ms-PickerItem-content'}, 
	                React.createElement(Button_1.Button, {icon: 'More', buttonType: Button_1.ButtonType.icon, onClick: this.onContextualMenu})
	            ), 
	            React.createElement("div", {className: 'ms-PickerItem-content'}, 
	                React.createElement(Button_1.Button, {icon: 'Cancel', buttonType: Button_1.ButtonType.icon, onClick: onRemoveItem})
	            ), 
	            this.state.contextualMenuVisible ? (React.createElement(ContextualMenu_1.ContextualMenu, {items: item.menuItems, shouldFocusOnMount: true, targetElement: this.refs.ellipsisRef, onDismiss: this._onCloseContextualMenu, directionalHint: ContextualMenu_1.DirectionalHint.bottomAutoEdge}))
	                : null));
	    };
	    SelectedItemWithMenu.prototype.onContextualMenu = function (ev) {
	        this.setState({ contextualMenuVisible: true });
	    };
	    SelectedItemWithMenu.prototype._onCloseContextualMenu = function (ev) {
	        this.setState({ contextualMenuVisible: false });
	    };
	    return SelectedItemWithMenu;
	}(React.Component));
	exports.SelectedItemWithMenu = SelectedItemWithMenu;
	


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-PickerPersona-Container{display:inline-block}.ms-Picker-MenuItem.ms-result-content{display:table-row}.ms-Picker-MenuItem.ms-result-content .ms-result-item{display:table-cell;vertical-align:bottom}.ms-PeoplePicker-Persona{width:180px}.ms-PeoplePicker .ms-BasePicker-text{min-height:40px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var BasePicker_1 = __webpack_require__(232);
	var TagItem_1 = __webpack_require__(241);
	var TagPicker = (function (_super) {
	    __extends(TagPicker, _super);
	    function TagPicker() {
	        _super.apply(this, arguments);
	    }
	    TagPicker.defaultProps = {
	        onRenderItem: function (props) { return React.createElement(TagItem_1.TagItem, __assign({}, props), props.item.name); },
	        onRenderSuggestionsItem: function (props) { return React.createElement("div", null, 
	            " ", 
	            props.name, 
	            " "); }
	    };
	    return TagPicker;
	}(BasePicker_1.BasePicker));
	exports.TagPicker = TagPicker;
	


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	__webpack_require__(242);
	exports.TagItem = function (props) { return (React.createElement("div", {className: css_1.css('ms-TagItem', {
	    'is-selected': props.selected
	}), key: props.index, "data-selection-index": props.index, "data-is-focusable": true}, 
	    React.createElement("span", {className: 'ms-TagItem-text'}, props.children), 
	    React.createElement("span", {className: 'ms-TagItem-close', onClick: props.onRemoveItem}, 
	        React.createElement("i", {className: ' ms-Icon ms-Icon--Cancel'})
	    ))); };
	


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-TagItem{-ms-flex-negative:0;flex-shrink:0;vertical-align:top;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";margin:1px;height:28px;line-height:28px;vertical-align:top;white-space:nowrap;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-TagItem::-moz-focus-inner{border:0}.ms-TagItem{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-TagItem:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TagItem:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-TagItem.is-selected{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-TagItem.is-selected:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-TagItem-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;min-width:100px;margin:0 8px}.ms-TagItem-close{cursor:pointer;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:12px;display:inline-block;text-align:center;vertical-align:top;width:30px;height:100%}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(244));
	


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(245));
	var PivotItem_1 = __webpack_require__(246);
	exports.PivotItem = PivotItem_1.PivotItem;
	__export(__webpack_require__(247));
	


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(21);
	var KeyCodes_1 = __webpack_require__(26);
	var PivotItem_1 = __webpack_require__(246);
	var Pivot_Props_1 = __webpack_require__(247);
	var Pivot_Props_2 = __webpack_require__(247);
	var object_1 = __webpack_require__(8);
	__webpack_require__(248);
	var css_1 = __webpack_require__(7);
	var Pivot = (function (_super) {
	    __extends(Pivot, _super);
	    function Pivot(props) {
	        _super.call(this, props);
	        var links = this._getPivotLinks(this.props);
	        var selectedKey;
	        if (props.initialSelectedKey) {
	            selectedKey = props.initialSelectedKey;
	        }
	        else if (props.initialSelectedIndex) {
	            selectedKey = links[props.initialSelectedIndex].itemKey;
	        }
	        else {
	            selectedKey = links[0].itemKey;
	        }
	        this.state = {
	            links: links,
	            selectedKey: selectedKey,
	            id: object_1.getId('Pivot')
	        };
	        this._renderLink = this._renderLink.bind(this);
	    }
	    Pivot.prototype.componentWillReceiveProps = function (nextProps) {
	        var links = this._getPivotLinks(nextProps);
	        var selectedKey = this._isKeyValid(this.state.selectedKey)
	            ? this.state.selectedKey
	            : links[0].itemKey;
	        this.setState({
	            links: links,
	            selectedKey: selectedKey
	        });
	    };
	    Pivot.prototype.render = function () {
	        return (React.createElement("div", null, 
	            this._renderPivotLinks(), 
	            this._renderPivotItem()));
	    };
	    /**
	     * Renders the set of links to route between pivots
	     */
	    Pivot.prototype._renderPivotLinks = function () {
	        return (React.createElement(FocusZone_1.FocusZone, {direction: FocusZone_1.FocusZoneDirection.horizontal}, 
	            React.createElement("ul", {className: css_1.css('ms-Pivot', { 'ms-Pivot--large': this.props.linkSize === Pivot_Props_2.PivotLinkSize.large }, { 'ms-Pivot--tabs': this.props.linkFormat === Pivot_Props_1.PivotLinkFormat.tabs }), role: 'tablist'}, this.state.links.map(this._renderLink))
	        ));
	    };
	    /**
	     * Renders a pivot link
	     */
	    Pivot.prototype._renderLink = function (link) {
	        var itemKey = link.itemKey, itemCount = link.itemCount;
	        var id = this.state.id;
	        var countText;
	        if (itemCount !== undefined && this.props.linkFormat !== Pivot_Props_1.PivotLinkFormat.tabs) {
	            countText = React.createElement("span", {className: 'ms-Pivot-count'}, 
	                "(", 
	                itemCount, 
	                ")");
	        }
	        return (React.createElement("a", {id: id + '-tab', key: itemKey, className: css_1.css('ms-Pivot-link', { 'is-selected': this.state.selectedKey === itemKey }), onClick: this._onLinkClick.bind(this, itemKey), onKeyPress: this._onKeyPress.bind(this, itemKey), "aria-label": link.ariaLabel, role: 'tab', "aria-controls": id + '-panel', "aria-selected": this.state.selectedKey === itemKey}, 
	            link.linkText, 
	            countText));
	    };
	    /**
	     * Renders the current Pivot Item
	     */
	    Pivot.prototype._renderPivotItem = function () {
	        var itemKey = this.state.selectedKey;
	        var index = this._keyToIndexMapping[itemKey];
	        var id = this.state.id;
	        return (React.createElement("div", {className: 'pivotItem', role: 'tabpanel', id: id + '-panel', "aria-labelledby": id + '-tab'}, React.Children.toArray(this.props.children)[index]));
	    };
	    /**
	     * Gets the set of PivotLinks as arrary of IPivotItemProps
	     * The set of Links is determined by child components of type PivotItem
	     */
	    Pivot.prototype._getPivotLinks = function (props) {
	        var _this = this;
	        var links = [];
	        this._keyToIndexMapping = {};
	        React.Children.map(props.children, function (child, index) {
	            if (typeof child === 'object' && child.type === PivotItem_1.PivotItem) {
	                var pivotItem = child;
	                var itemKey = pivotItem.props.itemKey || index.toString();
	                links.push({
	                    linkText: pivotItem.props.linkText,
	                    ariaLabel: pivotItem.props.ariaLabel,
	                    itemKey: itemKey,
	                    itemCount: pivotItem.props.itemCount
	                });
	                _this._keyToIndexMapping[itemKey] = index;
	            }
	        });
	        return links;
	    };
	    /**
	     * whether the key exists in the pivot items.
	     */
	    Pivot.prototype._isKeyValid = function (itemKey) {
	        return itemKey !== undefined && this._keyToIndexMapping[itemKey] !== undefined;
	    };
	    /**
	     * Handles the onClick event on PivotLinks
	     */
	    Pivot.prototype._onLinkClick = function (itemKey, ev) {
	        ev.preventDefault();
	        this._updateSelectedItem(itemKey, ev);
	    };
	    /**
	     * Handle the onKeyPress eventon the PivotLinks
	     */
	    Pivot.prototype._onKeyPress = function (itemKey, ev) {
	        ev.preventDefault();
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            this._updateSelectedItem(itemKey);
	        }
	    };
	    /**
	     * Updates the state with the new selected index
	     */
	    Pivot.prototype._updateSelectedItem = function (itemKey, ev) {
	        this.setState({
	            selectedKey: itemKey
	        });
	        if (this.props.onLinkClick && this._keyToIndexMapping[itemKey] >= 0) {
	            var index = this._keyToIndexMapping[itemKey];
	            // React.Element<any> cannot directly convert to PivotItem.
	            var item = React.Children.toArray(this.props.children)[index];
	            if (typeof item === 'object' && item.type === PivotItem_1.PivotItem) {
	                this.props.onLinkClick(item, ev);
	            }
	        }
	    };
	    return Pivot;
	}(React.Component));
	exports.Pivot = Pivot;
	


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PivotItem = (function (_super) {
	    __extends(PivotItem, _super);
	    function PivotItem() {
	        _super.apply(this, arguments);
	    }
	    PivotItem.prototype.render = function () {
	        return (React.createElement("div", null, this.props.children));
	    };
	    return PivotItem;
	}(React.Component));
	exports.PivotItem = PivotItem;
	


/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";
	(function (PivotLinkFormat) {
	    /**
	     * Display Pivot Links as links
	     */
	    PivotLinkFormat[PivotLinkFormat["links"] = 0] = "links";
	    /**
	     * Display Pivot Links as Tabs
	     */
	    PivotLinkFormat[PivotLinkFormat["tabs"] = 1] = "tabs";
	})(exports.PivotLinkFormat || (exports.PivotLinkFormat = {}));
	var PivotLinkFormat = exports.PivotLinkFormat;
	(function (PivotLinkSize) {
	    /**
	     * Display Link using normal font size
	     */
	    PivotLinkSize[PivotLinkSize["normal"] = 0] = "normal";
	    /**
	     * Display links using large font size
	     */
	    PivotLinkSize[PivotLinkSize["large"] = 1] = "large";
	})(exports.PivotLinkSize || (exports.PivotLinkSize = {}));
	var PivotLinkSize = exports.PivotLinkSize;
	


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Pivot{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-size:14px;font-weight:400;position:relative;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";white-space:nowrap}.ms-Pivot-links{font-size:0;height:40px;list-style-type:none;padding:0;white-space:nowrap}.ms-Pivot-link{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:inline-block;font-size:14px;font-weight:400;line-height:40px;padding:0 8px;text-align:center;position:relative}html[dir=ltr] .ms-Pivot-link{margin-right:8px}html[dir=rtl] .ms-Pivot-link{margin-left:8px}.ms-Pivot-link:hover{cursor:pointer}.ms-Pivot-link:focus{outline:0}.ms-Pivot-link::before{background-color:transparent;bottom:0;content:'';height:2px;left:8px;position:absolute;right:8px;-webkit-transition:background-color 267ms cubic-bezier(.1,.25,.75,.9);transition:background-color 267ms cubic-bezier(.1,.25,.75,.9)}.ms-Pivot-link::after{color:transparent;content:attr(title);display:block;font-weight:700;height:1px;overflow:hidden;visibility:hidden}.ms-Pivot-link.is-selected{font-weight:600}.ms-Pivot-link.is-selected::before{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Pivot-link.is-disabled{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Pivot-link:focus{outline:1px solid " }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-Pivot-link.ms-Pivot-link--overflow{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Pivot-link.ms-Pivot-link--overflow.is-selected{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Pivot-link.ms-Pivot-link--overflow:focus:not(.is-selected),.ms-Pivot-link.ms-Pivot-link--overflow:hover:not(.is-selected){color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Pivot-link.ms-Pivot-link--overflow:active{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Pivot-ellipsis{font-size:15px;position:relative;top:0}.ms-Pivot-content{display:none;margin-top:20px}.ms-Pivot.ms-Pivot--large .ms-Pivot-link{font-size:17px}html[dir=ltr] .ms-Pivot.ms-Pivot--large .ms-Pivot-link .ms-Pivot-count{margin-left:4px}html[dir=rtl] .ms-Pivot.ms-Pivot--large .ms-Pivot-link .ms-Pivot-count{margin-right:4px}.ms-Pivot.ms-Pivot--large .ms-Pivot-link.ms-Pivot-link--overflow::after{font-size:17px}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link{height:40px;line-height:40px;background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";padding:0 10px;vertical-align:top}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link::-moz-focus-inner{border:0}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link{margin-right:0}html[dir=rtl] .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link{margin-left:0}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:focus:not(.is-selected):not(.ms-Pivot-link--overflow),.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:hover:not(.is-selected):not(.ms-Pivot-link--overflow){color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:300}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected::before{background-color:transparent;-webkit-transition:none;transition:none}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:focus:not(.is-selected),.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:hover:not(.is-selected){background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:focus:before{height:auto;background:0 0;-webkit-transition:none;transition:none}@media screen and (-ms-high-contrast:active){.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected{font-weight:600}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(250));
	


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(251));
	


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	var BaseComponent_1 = __webpack_require__(12);
	var css_1 = __webpack_require__(7);
	__webpack_require__(252);
	// if the percentComplete is near 0, don't animate it.
	// This prevents animations on reset to 0 scenarios
	var ZERO_THRESHOLD = 0.01;
	var ProgressIndicator = (function (_super) {
	    __extends(ProgressIndicator, _super);
	    function ProgressIndicator(props) {
	        _super.call(this, props, {
	            'title': 'label'
	        });
	    }
	    ProgressIndicator.prototype.render = function () {
	        var _a = this.props, title = _a.title, label = _a.label, description = _a.description, percentComplete = _a.percentComplete, className = _a.className;
	        // Handle deprecated value.
	        if (title) {
	            label = title;
	        }
	        percentComplete = Math.min(100, Math.max(0, percentComplete * 100));
	        return (React.createElement("div", {className: css_1.css('ms-ProgressIndicator', className)}, 
	            React.createElement("div", {className: 'ms-ProgressIndicator-itemName'}, label), 
	            React.createElement("div", {className: 'ms-ProgressIndicator-itemProgress'}, 
	                React.createElement("div", {className: 'ms-ProgressIndicator-progressTrack'}), 
	                React.createElement("div", {className: css_1.css('ms-ProgressIndicator-progressBar', {
	                    'smoothTransition': percentComplete > ZERO_THRESHOLD
	                }), style: { width: percentComplete + '%' }, role: 'progressbar', "aria-valuemin": '0', "aria-valuemax": '100', "aria-valuenow": percentComplete.toFixed().toString()})), 
	            React.createElement("div", {className: 'ms-ProgressIndicator-itemDescription'}, description)));
	    };
	    ProgressIndicator.defaultProps = {
	        label: '',
	        description: '',
	        percentComplete: 0,
	        width: 180
	    };
	    return ProgressIndicator;
	}(BaseComponent_1.BaseComponent));
	exports.ProgressIndicator = ProgressIndicator;
	


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-ProgressIndicator{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-ProgressIndicator-itemName{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-top:4px;line-height:20px}.ms-ProgressIndicator-itemDescription{color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";font-size:11px;line-height:18px}.ms-ProgressIndicator-itemProgress{position:relative;height:2px;padding:8px 0}.ms-ProgressIndicator-progressTrack{position:absolute;width:100%;height:2px;background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";outline:1px solid transparent}.ms-ProgressIndicator-progressBar{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";height:2px;position:absolute;-webkit-transition:width .3s ease;transition:width .3s ease;width:0}@media screen and (-ms-high-contrast:active){.ms-ProgressIndicator-progressBar{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-ProgressIndicator-progressBar{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-ProgressIndicator-progressBar.smoothTransition{-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:150ms;transition-duration:150ms}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(254));
	


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(255));
	


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(256);
	var SearchBox = (function (_super) {
	    __extends(SearchBox, _super);
	    function SearchBox(props) {
	        _super.call(this, props);
	        // Handle deprecated prop
	        if (this.props.onChanged) {
	            this.props.onChange = this.props.onChanged;
	        }
	        this.state = {
	            value: props.value || '',
	            hasFocus: false,
	            id: Utilities_1.getId('SearchBox')
	        };
	    }
	    SearchBox.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.value !== undefined) {
	            this.setState({
	                value: newProps.value
	            });
	        }
	    };
	    SearchBox.prototype.render = function () {
	        var _a = this.props, labelText = _a.labelText, className = _a.className;
	        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
	        return (React.createElement("div", __assign({ref: this._resolveRef('_rootElement'), className: Utilities_1.css('ms-SearchBox', className, {
	            'is-active': hasFocus,
	            'can-clear': value.length > 0
	        })}, { onFocusCapture: this._onFocusCapture }), 
	            React.createElement("i", {className: 'ms-SearchBox-icon ms-Icon ms-Icon--Search'}), 
	            React.createElement("input", {id: id, className: 'ms-SearchBox-field', placeholder: labelText, onChange: this._onInputChange, onKeyDown: this._onKeyDown, value: value, ref: this._resolveRef('_inputElement')}), 
	            React.createElement("div", {className: 'ms-SearchBox-clearButton', onClick: this._onClearClick}, 
	                React.createElement("i", {className: 'ms-Icon ms-Icon--Clear'})
	            )));
	    };
	    SearchBox.prototype._onClearClick = function (ev) {
	        this.setState({
	            value: ''
	        });
	        this._callOnChange('');
	        ev.stopPropagation();
	        ev.preventDefault();
	        this._inputElement.focus();
	    };
	    SearchBox.prototype._onFocusCapture = function (ev) {
	        this.setState({
	            hasFocus: true
	        });
	        this._events.on(Utilities_1.getDocument().body, 'focus', this._handleDocumentFocus, true);
	    };
	    SearchBox.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.escape:
	                this._onClearClick(ev);
	                break;
	            case Utilities_1.KeyCodes.enter:
	                if (this.props.onSearch && this.state.value.length > 0) {
	                    this.props.onSearch(this.state.value);
	                }
	                break;
	            default:
	                return;
	        }
	        // We only get here if the keypress has been handled.
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    SearchBox.prototype._onInputChange = function (ev) {
	        this.setState({
	            value: this._inputElement.value
	        });
	        this._callOnChange(this._inputElement.value);
	    };
	    SearchBox.prototype._handleDocumentFocus = function (ev) {
	        if (!Utilities_1.elementContains(this._rootElement, ev.target)) {
	            this._events.off(Utilities_1.getDocument().body, 'focus');
	            this.setState({
	                hasFocus: false
	            });
	        }
	    };
	    SearchBox.prototype._callOnChange = function (newValue) {
	        var onChange = this.props.onChange;
	        if (onChange) {
	            onChange(newValue);
	        }
	    };
	    SearchBox.defaultProps = {
	        labelText: 'Search',
	    };
	    __decorate([
	        Utilities_1.autobind
	    ], SearchBox.prototype, "_onClearClick", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SearchBox.prototype, "_onFocusCapture", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SearchBox.prototype, "_onKeyDown", null);
	    __decorate([
	        Utilities_1.autobind
	    ], SearchBox.prototype, "_onInputChange", null);
	    return SearchBox;
	}(Utilities_1.BaseComponent));
	exports.SearchBox = SearchBox;
	


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-SearchBox{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;margin-bottom:10px;border:1px solid " }, { "theme": "themeTertiary", "defaultValue": "#71afe5" }, { "rawString": "}.ms-SearchBox.is-active{border-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}html[dir=ltr] .ms-SearchBox.is-active .ms-SearchBox-field{padding-left:8px}html[dir=rtl] .ms-SearchBox.is-active .ms-SearchBox-field{padding-right:8px}.ms-SearchBox.is-active .ms-SearchBox-icon{display:none}.ms-SearchBox.is-disabled{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-SearchBox.is-disabled .ms-SearchBox-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-SearchBox.is-disabled .ms-SearchBox-field{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-SearchBox.can-clear .ms-SearchBox-clearButton{display:block}.ms-SearchBox:hover .ms-SearchBox-field{border-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-SearchBox:hover .ms-SearchBox-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-SearchBox:hover .ms-SearchBox-label .ms-SearchBox-icon{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}input.ms-SearchBox-field{position:relative;box-sizing:border-box;margin:0;padding:0;box-shadow:none;border:none;outline:transparent 1px solid;font-weight:inherit;font-family:inherit;font-size:inherit;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";height:34px;line-height:34px;padding:6px 38px 7px 31px;width:100%;background-color:transparent;-webkit-transition:padding-left 167ms;transition:padding-left 167ms}html[dir=rtl] input.ms-SearchBox-field{padding:6px 31px 7px 38px}html[dir=ltr] input.ms-SearchBox-field:focus{padding-right:32px}html[dir=rtl] input.ms-SearchBox-field:focus{padding-left:32px}input.ms-SearchBox-field::-ms-clear{display:none}.ms-SearchBox-clearButton{display:none;border:none;cursor:pointer;position:absolute;top:0;width:40px;height:36px;line-height:36px;vertical-align:top;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";text-align:center;font-size:16px}html[dir=ltr] .ms-SearchBox-clearButton{right:0}html[dir=rtl] .ms-SearchBox-clearButton{left:0}.ms-SearchBox-icon{font-size:17px;color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";position:absolute;top:0;height:36px;line-height:36px;vertical-align:top;font-size:16px;width:16px;color:#0078d7}html[dir=ltr] .ms-SearchBox-icon{left:8px}html[dir=rtl] .ms-SearchBox-icon{right:8px}html[dir=ltr] .ms-SearchBox-icon{margin-right:6px}html[dir=rtl] .ms-SearchBox-icon{margin-left:6px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(258));
	


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(259));
	


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	__webpack_require__(260);
	var BaseComponent_1 = __webpack_require__(12);
	var KeyCodes_1 = __webpack_require__(26);
	var Label_1 = __webpack_require__(92);
	var css_1 = __webpack_require__(7);
	var rtl_1 = __webpack_require__(31);
	var object_1 = __webpack_require__(8);
	var autobind_1 = __webpack_require__(28);
	(function (ValuePosition) {
	    ValuePosition[ValuePosition["Previous"] = 0] = "Previous";
	    ValuePosition[ValuePosition["Next"] = 1] = "Next";
	})(exports.ValuePosition || (exports.ValuePosition = {}));
	var ValuePosition = exports.ValuePosition;
	var Slider = (function (_super) {
	    __extends(Slider, _super);
	    function Slider(props) {
	        _super.call(this, props);
	        this._id = object_1.getId('Slider');
	        var value = props.value || props.defaultValue || props.min;
	        this.state = {
	            value: value,
	            renderedValue: value
	        };
	    }
	    /**
	     * Invoked when a component is receiving new props. This method is not called for the initial render.
	     */
	    Slider.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.value !== undefined) {
	            var value = Math.max(newProps.min, Math.min(newProps.max, newProps.value));
	            this.setState({
	                value: value,
	                renderedValue: value
	            });
	        }
	    };
	    Slider.prototype.render = function () {
	        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, disabled = _a.disabled, label = _a.label, max = _a.max, min = _a.min, showValue = _a.showValue, buttonProps = _a.buttonProps;
	        var _b = this.state, value = _b.value, renderedValue = _b.renderedValue;
	        var thumbOffsetPercent = (renderedValue - min) / (max - min) * 100;
	        var onMouseDownProp = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
	        var onTouchStartProp = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
	        var onKeyDownProp = disabled ? {} : { onKeyDown: this._onKeyDown };
	        return (React.createElement("div", {className: css_1.css('ms-Slider', className, {
	            'ms-Slider-enabled': !disabled,
	            'ms-Slider-disabled': disabled
	        }), ref: 'root'}, 
	            label && (React.createElement(Label_1.Label, __assign({}, ariaLabel ? {} : { 'htmlFor': this._id }), label)), 
	            React.createElement("div", {className: 'ms-Slider-container'}, 
	                React.createElement("button", __assign({"aria-valuenow": value, "aria-valuemin": min, "aria-valuemax": max}, onMouseDownProp, onTouchStartProp, onKeyDownProp, buttonProps, {className: css_1.css('ms-Slider-slideBox', buttonProps.className, {
	                    'ms-Slider-showValue': showValue,
	                    'ms-Slider-showTransitions': (renderedValue === value)
	                }), id: this._id, disabled: disabled, type: 'button', role: 'slider'}), 
	                    React.createElement("div", {ref: 'sliderLine', className: 'ms-Slider-line'}, 
	                        React.createElement("span", __assign({ref: 'thumb', className: 'ms-Slider-thumb'}, ariaLabel ? { 'aria-label': ariaLabel } : {}, {style: rtl_1.getRTL() ?
	                            { 'right': thumbOffsetPercent + '%' } :
	                            { 'left': thumbOffsetPercent + '%' }})), 
	                        React.createElement("span", {className: 'ms-Slider-active', style: { 'width': thumbOffsetPercent + '%' }}), 
	                        React.createElement("span", {className: 'ms-Slider-inactive', style: { 'width': (100 - thumbOffsetPercent) + '%' }}))
	                ), 
	                showValue && React.createElement("label", {className: 'ms-Label ms-Slider-value'}, value))));
	    };
	    Slider.prototype.focus = function () {
	        if (this.refs.thumb) {
	            this.refs.thumb.focus();
	        }
	    };
	    Object.defineProperty(Slider.prototype, "value", {
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Slider.prototype._onMouseDownOrTouchStart = function (event) {
	        if (event.type === 'mousedown') {
	            this._events.on(window, 'mousemove', this._onMouseMoveOrTouchMove, true);
	            this._events.on(window, 'mouseup', this._onMouseUpOrTouchEnd, true);
	        }
	        else if (event.type === 'touchstart') {
	            this._events.on(window, 'touchmove', this._onMouseMoveOrTouchMove, true);
	            this._events.on(window, 'touchend', this._onMouseUpOrTouchEnd, true);
	        }
	        this._onMouseMoveOrTouchMove(event, true);
	    };
	    Slider.prototype._onMouseMoveOrTouchMove = function (event, suppressEventCancelation) {
	        var _a = this.props, max = _a.max, min = _a.min, step = _a.step;
	        var steps = (max - min) / step;
	        var sliderPositionRect = this.refs.sliderLine.getBoundingClientRect();
	        var sliderLength = sliderPositionRect.width;
	        var stepLength = sliderLength / steps;
	        var currentSteps;
	        if (event.type === 'mousedown' || event.type === 'mousemove') {
	            currentSteps = rtl_1.getRTL() ?
	                (sliderPositionRect.right - event.clientX) / stepLength :
	                (event.clientX - sliderPositionRect.left) / stepLength;
	        }
	        else if (event.type === 'touchstart' || event.type === 'touchmove') {
	            currentSteps = rtl_1.getRTL() ?
	                (sliderPositionRect.right - event.touches[0].clientX) / stepLength :
	                (event.touches[0].clientX - sliderPositionRect.left) / stepLength;
	        }
	        var currentValue;
	        var renderedValue;
	        // The value shouldn't be bigger than max or be smaller than min.
	        if (currentSteps > Math.floor(steps)) {
	            renderedValue = currentValue = max;
	        }
	        else if (currentSteps < 0) {
	            renderedValue = currentValue = min;
	        }
	        else {
	            renderedValue = min + step * currentSteps;
	            currentValue = min + step * Math.round(currentSteps);
	        }
	        this._updateValue(currentValue, renderedValue);
	        if (!suppressEventCancelation) {
	            event.preventDefault();
	            event.stopPropagation();
	        }
	    };
	    Slider.prototype._updateValue = function (value, renderedValue) {
	        var _this = this;
	        var valueChanged = value !== this.state.value;
	        this.setState({
	            value: value,
	            renderedValue: renderedValue
	        }, function () {
	            if (valueChanged && _this.props.onChange) {
	                _this.props.onChange(_this.state.value);
	            }
	        });
	    };
	    Slider.prototype._onMouseUpOrTouchEnd = function () {
	        // Synchronize the renderedValue to the actual value.
	        this.setState({
	            renderedValue: this.state.value
	        });
	        this._events.off();
	    };
	    Slider.prototype._onKeyDown = function (event) {
	        var value = this.state.value;
	        var _a = this.props, max = _a.max, min = _a.min, step = _a.step;
	        var diff = 0;
	        if (event.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.left)) {
	            diff = -step;
	        }
	        else if (event.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)) {
	            diff = step;
	        }
	        else {
	            return;
	        }
	        var newValue = Math.min(max, Math.max(min, value + diff));
	        this._updateValue(newValue, newValue);
	        event.preventDefault();
	        event.stopPropagation();
	    };
	    Slider.defaultProps = {
	        step: 1,
	        min: 0,
	        max: 10,
	        showValue: true,
	        disabled: false,
	        buttonProps: {}
	    };
	    __decorate([
	        autobind_1.autobind
	    ], Slider.prototype, "_onMouseDownOrTouchStart", null);
	    __decorate([
	        autobind_1.autobind
	    ], Slider.prototype, "_onMouseMoveOrTouchMove", null);
	    __decorate([
	        autobind_1.autobind
	    ], Slider.prototype, "_onMouseUpOrTouchEnd", null);
	    __decorate([
	        autobind_1.autobind
	    ], Slider.prototype, "_onKeyDown", null);
	    return Slider;
	}(BaseComponent_1.BaseComponent));
	exports.Slider = Slider;
	


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Slider{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-bottom:8px}.ms-Slider>.ms-Label{padding:0}.ms-Slider-line{position:relative;width:100%}.ms-Slider-line span{height:4px;border-radius:4px}html[dir=ltr] .ms-Slider-line span{float:left}html[dir=rtl] .ms-Slider-line span{float:right}.ms-Slider-active{background:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Slider-inactive{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Slider-showTransitions .ms-Slider-thumb{-webkit-transition:left 367ms cubic-bezier(.1,.9,.2,1);transition:left 367ms cubic-bezier(.1,.9,.2,1)}.ms-Slider-showTransitions .ms-Slider-active,.ms-Slider-showTransitions .ms-Slider-inactive{-webkit-transition:width 367ms cubic-bezier(.1,.9,.2,1);transition:width 367ms cubic-bezier(.1,.9,.2,1)}.ms-Slider-slideBox{background:0 0;border:none;padding:0;margin:0}.ms-Slider-slideBox .ms-Slider-thumb{border:2px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";display:block;width:12px;height:12px;position:absolute;top:-6px;border-radius:10px}html[dir=ltr] .ms-Slider-slideBox .ms-Slider-thumb{-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir=rtl] .ms-Slider-slideBox .ms-Slider-thumb{-webkit-transform:translateX(50%);transform:translateX(50%)}.ms-Slider-container{display:-webkit-box;display:-ms-flexbox;display:flex}.ms-Slider-container .ms-Slider-slideBox{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:28px;line-height:28px;padding:0 8px}.ms-Slider-container .ms-Slider-slideBox::-moz-focus-inner{border:0}.ms-Slider-container .ms-Slider-slideBox{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Slider-container .ms-Slider-slideBox:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Slider-container .ms-Label{-ms-flex-negative:1;flex-shrink:1;width:30px}html[dir=ltr] .ms-Slider-container .ms-Label{margin-left:8px}html[dir=rtl] .ms-Slider-container .ms-Label{margin-right:8px}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-thumb,.ms-Slider-enabled .ms-Slider-slideBox:hover .ms-Slider-thumb{border:2px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-active,.ms-Slider-enabled .ms-Slider-slideBox:hover .ms-Slider-active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-inactive,.ms-Slider-enabled .ms-Slider-slideBox:hover .ms-Slider-inactive{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-thumb{border:2px solid " }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-Slider-enabled .ms-Slider-slideBox:active .ms-Slider-active{background-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.ms-Slider-disabled .ms-Slider-thumb{border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Slider-disabled .ms-Slider-active{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Slider-disabled .ms-Slider-inactive{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(262));
	


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(263));
	__export(__webpack_require__(264));
	


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var BaseComponent_1 = __webpack_require__(12);
	var TeachingBubbleContent_1 = __webpack_require__(264);
	var Callout_1 = __webpack_require__(37);
	var DirectionalHint_1 = __webpack_require__(36);
	__webpack_require__(265);
	var TeachingBubble = (function (_super) {
	    __extends(TeachingBubble, _super);
	    // Constructor
	    function TeachingBubble(props) {
	        _super.call(this, props);
	        this.state = {};
	    }
	    TeachingBubble.prototype.render = function () {
	        var _a = this.props, calloutProps = _a.calloutProps, targetElement = _a.targetElement;
	        return (React.createElement(Callout_1.Callout, __assign({className: 'ms-TeachingBubble', ref: this._resolveRef('_callout'), targetElement: targetElement}, calloutProps), 
	            React.createElement(TeachingBubbleContent_1.TeachingBubbleContent, __assign({}, this.props))
	        ));
	    };
	    // Specify default props values
	    TeachingBubble.defaultProps = {
	        calloutProps: {
	            beakWidth: 16,
	            gapSpace: 0,
	            setInitialFocus: true,
	            doNotLayer: false,
	            directionalHint: DirectionalHint_1.DirectionalHint.rightCenter
	        }
	    };
	    return TeachingBubble;
	}(BaseComponent_1.BaseComponent));
	exports.TeachingBubble = TeachingBubble;
	


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var BaseComponent_1 = __webpack_require__(12);
	var Button_1 = __webpack_require__(4);
	var Image_1 = __webpack_require__(80);
	var Utilities_1 = __webpack_require__(25);
	__webpack_require__(265);
	var TeachingBubbleContent = (function (_super) {
	    __extends(TeachingBubbleContent, _super);
	    // Constructor
	    function TeachingBubbleContent(props) {
	        _super.call(this, props);
	        this._id = Utilities_1.getId('TeachingBubble');
	        this.state = {};
	    }
	    TeachingBubbleContent.prototype.render = function () {
	        var _a = this.props, illustrationImage = _a.illustrationImage, primaryButtonProps = _a.primaryButtonProps, secondaryButtonProps = _a.secondaryButtonProps, headline = _a.headline, hasCondensedHeadline = _a.hasCondensedHeadline, hasCloseIcon = _a.hasCloseIcon, onDismiss = _a.onDismiss, closeButtonAriaLabel = _a.closeButtonAriaLabel;
	        var imageContent;
	        var headerContent;
	        var bodyContent;
	        var footerContent;
	        var closeButton;
	        if (illustrationImage && illustrationImage.src) {
	            imageContent = (React.createElement("div", {className: 'ms-TeachingBubble-header'}, 
	                React.createElement(Image_1.Image, __assign({}, illustrationImage))
	            ));
	        }
	        if (headline) {
	            headerContent = (React.createElement("div", {className: Utilities_1.css('ms-TeachingBubble-header', hasCondensedHeadline ? 'ms-TeachingBubble-header--small' : 'ms-TeachingBubble-header--large')}, 
	                React.createElement("p", {className: 'ms-TeachingBubble-headline'}, headline)
	            ));
	        }
	        if (this.props.children) {
	            bodyContent = (React.createElement("div", {className: 'ms-TeachingBubble-body'}, 
	                React.createElement("p", {className: 'ms-TeachingBubble-subText'}, this.props.children)
	            ));
	        }
	        if (primaryButtonProps || secondaryButtonProps) {
	            footerContent = (React.createElement("div", {className: 'ms-TeachingBubble-footer'}, 
	                primaryButtonProps ? React.createElement(Button_1.Button, __assign({className: 'ms-TeachingBubble-primaryButton'}, primaryButtonProps)) : null, 
	                secondaryButtonProps ? React.createElement(Button_1.Button, __assign({className: 'ms-TeachingBubble-secondaryButton'}, secondaryButtonProps)) : null));
	        }
	        if (hasCloseIcon) {
	            closeButton = (React.createElement(Button_1.Button, {className: 'ms-TeachingBubble-closebutton', buttonType: Button_1.ButtonType.icon, icon: 'Cancel', title: closeButtonAriaLabel, ariaLabel: closeButtonAriaLabel, onClick: onDismiss}));
	        }
	        return (React.createElement("div", {className: 'ms-TeachingBubble-content'}, 
	            imageContent, 
	            closeButton, 
	            React.createElement("div", {className: 'ms-TeachingBubble-bodycontent'}, 
	                headerContent, 
	                bodyContent, 
	                footerContent)));
	    };
	    // Specify default props values
	    TeachingBubbleContent.defaultProps = {
	        hasCondensedHeadline: false,
	        imageProps: {
	            imageFit: Image_1.ImageFit.cover,
	            width: 364,
	            height: 130
	        }
	    };
	    return TeachingBubbleContent;
	}(BaseComponent_1.BaseComponent));
	exports.TeachingBubbleContent = TeachingBubbleContent;
	


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-TeachingBubble{display:block;max-width:364px}.ms-TeachingBubble-bodycontent{padding:20px}.ms-TeachingBubble-header--large:not(:last-child){margin-bottom:14px}.ms-TeachingBubble-headline{margin:0;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-TeachingBubble-header--large .ms-TeachingBubble-headline{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:28px;font-weight:100;font-weight:100}.ms-TeachingBubble-header--small .ms-TeachingBubble-headline{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;font-weight:600}html[dir=ltr] .ms-TeachingBubble-header--small .ms-TeachingBubble-headline{margin-right:10px}html[dir=rtl] .ms-TeachingBubble-header--small .ms-TeachingBubble-headline{margin-left:10px}.ms-TeachingBubble-body:not(:last-child){margin-bottom:20px}.ms-TeachingBubble-subText{margin:0;font-size:14px;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:300}.ms-Button.ms-TeachingBubble-closebutton{position:absolute;top:0}html[dir=ltr] .ms-Button.ms-TeachingBubble-closebutton{right:2px}html[dir=rtl] .ms-Button.ms-TeachingBubble-closebutton{left:2px}.ms-Button.ms-TeachingBubble-closebutton.ms-Button--icon .ms-Icon{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:12px;padding:10px}html[dir=ltr] .ms-TeachingBubble-footer .ms-Button:not(:first-child){margin-left:20px}html[dir=rtl] .ms-TeachingBubble-footer .ms-Button:not(:first-child){margin-right:20px}.ms-TeachingBubble .ms-Callout-beak,.ms-TeachingBubble .ms-Callout-main,.ms-TeachingBubble .ms-Callout-smallbeak{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button.ms-TeachingBubble-primaryButton{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-primaryButton .ms-Button-label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button.ms-TeachingBubble-primaryButton:hover{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";border-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": "}.ms-Button.ms-TeachingBubble-primaryButton:focus{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-primaryButton:active{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-secondaryButton{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-secondaryButton .ms-Button-label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-secondaryButton:hover{background-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-secondaryButton:focus{background-color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.ms-TeachingBubble-secondaryButton:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(267));
	


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(268));
	


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var Label_1 = __webpack_require__(92);
	var object_1 = __webpack_require__(8);
	var autobind_1 = __webpack_require__(28);
	__webpack_require__(269);
	var Toggle = (function (_super) {
	    __extends(Toggle, _super);
	    function Toggle(props) {
	        _super.call(this);
	        this.state = {
	            isChecked: !!(props.checked || props.defaultChecked)
	        };
	        this._id = object_1.getId('Toggle');
	    }
	    Object.defineProperty(Toggle.prototype, "checked", {
	        /**
	         * Gets the current checked state of the toggle.
	         */
	        get: function () {
	            return this.state.isChecked;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Toggle.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.checked !== undefined) {
	            this.setState({
	                isChecked: newProps.checked
	            });
	        }
	    };
	    Toggle.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, label = _a.label, onText = _a.onText, offText = _a.offText, className = _a.className, disabled = _a.disabled;
	        var isChecked = this.state.isChecked;
	        var stateText = isChecked ? onText : offText;
	        return (React.createElement("div", {className: css_1.css('ms-Toggle', className, {
	            'is-checked': isChecked,
	            'is-enabled': !disabled,
	            'is-disabled': disabled
	        })}, 
	            React.createElement("div", {className: 'ms-Toggle-innerContainer'}, 
	                label && (React.createElement(Label_1.Label, {className: 'ms-Toggle-label', htmlFor: this._id}, label)), 
	                React.createElement("div", {className: 'ms-Toggle-slider'}, 
	                    React.createElement("button", {ref: function (c) { return _this._toggleButton = c; }, type: 'button', id: this._id, name: this._id, className: 'ms-Toggle-button', disabled: disabled, role: 'checkbox', "aria-checked": isChecked, onClick: this._onClick}), 
	                    React.createElement("div", {className: 'ms-Toggle-background'}, 
	                        React.createElement("div", {className: 'ms-Toggle-focus'}), 
	                        React.createElement("div", {className: 'ms-Toggle-thumb'})), 
	                    stateText && (React.createElement(Label_1.Label, {className: 'ms-Toggle-stateText'}, stateText))))
	        ));
	    };
	    Toggle.prototype.focus = function () {
	        if (this._toggleButton) {
	            this._toggleButton.focus();
	        }
	    };
	    Toggle.prototype._onClick = function () {
	        var _a = this.props, checked = _a.checked, onChanged = _a.onChanged;
	        var isChecked = this.state.isChecked;
	        // Only update the state if the user hasn't provided it.
	        if (checked === undefined) {
	            this.setState({
	                isChecked: !isChecked
	            });
	        }
	        if (onChanged) {
	            onChanged(!isChecked);
	        }
	    };
	    Toggle.initialProps = {
	        label: '',
	        onText: 'On',
	        offText: 'Off'
	    };
	    __decorate([
	        autobind_1.autobind
	    ], Toggle.prototype, "_onClick", null);
	    return Toggle;
	}(React.Component));
	exports.Toggle = Toggle;
	


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Toggle{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;display:block;margin-bottom:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle.is-enabled .ms-Toggle-button{cursor:pointer}.ms-Toggle.is-enabled .ms-Toggle-background{border:1px solid " }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-enabled .ms-Toggle-thumb{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-enabled .ms-Toggle-thumb{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Toggle.is-enabled .ms-Toggle-slider:hover .ms-Toggle-background{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Toggle.is-enabled .ms-Toggle-slider:hover .ms-Toggle-thumb{background:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Toggle.is-enabled.is-checked .ms-Toggle-background{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-enabled.is-checked .ms-Toggle-background{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-enabled.is-checked .ms-Toggle-background{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=ltr] .ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{left:28px}html[dir=rtl] .ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{right:28px}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-enabled.is-checked .ms-Toggle-thumb{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-Toggle.is-enabled.is-checked .ms-Toggle-slider:hover .ms-Toggle-background{border:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background:" }, { "theme": "themeSecondary", "defaultValue": "#2b88d8" }, { "rawString": "}.ms-Toggle.is-enabled.is-checked .ms-Toggle-slider:hover .ms-Toggle-thumb{background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Toggle.is-disabled .ms-Toggle-thumb{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-disabled .ms-Toggle-thumb{background-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-disabled .ms-Toggle-thumb{background-color:#600000}}.ms-Toggle.is-disabled .ms-Toggle-background{border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-disabled .ms-Toggle-background{border-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-disabled .ms-Toggle-background{border-color:#600000}}.ms-Toggle.is-disabled.is-checked .ms-Toggle-background{background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";border:1px solid transparent}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-disabled.is-checked .ms-Toggle-background{background-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-disabled.is-checked .ms-Toggle-background{background-color:#600000}}.ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=ltr] .ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{left:28px}html[dir=rtl] .ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{right:28px}@media screen and (-ms-high-contrast:active){.ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Toggle.is-disabled.is-checked .ms-Toggle-thumb{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.ms-Toggle-innerContainer{display:inline-block}.ms-Fabric.is-focusVisible .ms-Toggle.is-enabled .ms-Toggle-button:focus+.ms-Toggle-background .ms-Toggle-focus{border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Toggle-button{position:absolute;opacity:0;left:0;top:0;width:100%;height:100%;margin:0;padding:0}.ms-Toggle-slider{position:relative}.ms-Toggle-background{display:inline-block;position:absolute;width:44px;height:20px;box-sizing:border-box;vertical-align:middle;border-radius:20px;cursor:pointer;-webkit-transition:all .1s ease;transition:all .1s ease;pointer-events:none}.ms-Toggle-thumb{position:absolute;width:10px;height:10px;border-radius:10px;top:4px;background:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";-webkit-transition:all .1s ease;transition:all .1s ease}html[dir=ltr] .ms-Toggle-thumb{left:4px}html[dir=rtl] .ms-Toggle-thumb{right:4px}.ms-Toggle-stateText.ms-Label{display:inline-block;vertical-align:top;line-height:20px;padding:0}html[dir=ltr] .ms-Toggle-stateText.ms-Label{margin-left:54px}html[dir=rtl] .ms-Toggle-stateText.ms-Label{margin-right:54px}.ms-Toggle-focus{position:absolute;left:-3px;top:-3px;right:-3px;bottom:-3px;box-sizing:border-box;outline:transparent}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(271));
	


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(272));
	__export(__webpack_require__(273));
	__export(__webpack_require__(275));
	


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var BaseComponent_1 = __webpack_require__(12);
	var Tooltip_Props_1 = __webpack_require__(273);
	var Callout_1 = __webpack_require__(37);
	var css_1 = __webpack_require__(7);
	var DirectionalHint_1 = __webpack_require__(36);
	var properties_1 = __webpack_require__(11);
	__webpack_require__(274);
	var Tooltip = (function (_super) {
	    __extends(Tooltip, _super);
	    function Tooltip() {
	        _super.apply(this, arguments);
	    }
	    Tooltip.prototype.render = function () {
	        var _a = this.props, targetElement = _a.targetElement, content = _a.content, calloutProps = _a.calloutProps, directionalHint = _a.directionalHint, delay = _a.delay;
	        return (React.createElement(Callout_1.Callout, __assign({className: css_1.css('ms-Tooltip', "has-" + Tooltip_Props_1.TooltipDelay[delay] + "Delay"), targetElement: targetElement, directionalHint: directionalHint}, calloutProps, properties_1.getNativeProps(this.props, properties_1.divProperties)), 
	            React.createElement("div", {className: 'ms-Tooltip-content'}, 
	                React.createElement("p", {className: 'ms-Tooltip-subText'}, content)
	            )
	        ));
	    };
	    // Specify default props values
	    Tooltip.defaultProps = {
	        directionalHint: DirectionalHint_1.DirectionalHint.topCenter,
	        delay: Tooltip_Props_1.TooltipDelay.medium,
	        calloutProps: {
	            isBeakVisible: true,
	            beakWidth: 16,
	            gapSpace: 8,
	            setInitialFocus: true,
	            doNotLayer: false
	        }
	    };
	    return Tooltip;
	}(BaseComponent_1.BaseComponent));
	exports.Tooltip = Tooltip;
	


/***/ },
/* 273 */
/***/ function(module, exports) {

	"use strict";
	(function (TooltipDelay) {
	    TooltipDelay[TooltipDelay["zero"] = 0] = "zero";
	    TooltipDelay[TooltipDelay["medium"] = 1] = "medium";
	})(exports.TooltipDelay || (exports.TooltipDelay = {}));
	var TooltipDelay = exports.TooltipDelay;
	


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Tooltip{max-width:364px;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";padding:8px}.ms-Tooltip.has-mediumDelay{-webkit-animation-delay:.3s;animation-delay:.3s}.ms-Tooltip-subText{margin:0;font-size:12px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-TooltipHost{display:inline}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var BaseComponent_1 = __webpack_require__(12);
	var properties_1 = __webpack_require__(11);
	var autobind_1 = __webpack_require__(28);
	var Tooltip_1 = __webpack_require__(272);
	var Tooltip_Props_1 = __webpack_require__(273);
	var TooltipHost = (function (_super) {
	    __extends(TooltipHost, _super);
	    // Constructor
	    function TooltipHost(props) {
	        _super.call(this, props);
	        this.state = {
	            isTooltipVisible: false,
	        };
	    }
	    // Render
	    TooltipHost.prototype.render = function () {
	        var _a = this.props, content = _a.content, children = _a.children, directionalHint = _a.directionalHint, delay = _a.delay;
	        var isTooltipVisible = this.state.isTooltipVisible;
	        return (React.createElement("div", __assign({className: 'ms-TooltipHost', ref: this._resolveRef('_tooltipHost')}, { onFocusCapture: this._onTooltipMouseEnter }, { onBlurCapture: this._onTooltipMouseLeave }, {onMouseEnter: this._onTooltipMouseEnter, onMouseLeave: this._onTooltipMouseLeave}), 
	            children, 
	            isTooltipVisible ? (React.createElement(Tooltip_1.Tooltip, __assign({delay: delay, content: content, targetElement: this._tooltipHost, directionalHint: directionalHint}, properties_1.getNativeProps(this.props, properties_1.divProperties)))) : (null)));
	    };
	    // Show Tooltip
	    TooltipHost.prototype._onTooltipMouseEnter = function (ev) {
	        this.setState({
	            isTooltipVisible: true
	        });
	    };
	    // Hide Tooltip
	    TooltipHost.prototype._onTooltipMouseLeave = function (ev) {
	        this.setState({
	            isTooltipVisible: false
	        });
	    };
	    TooltipHost.defaultProps = {
	        delay: Tooltip_Props_1.TooltipDelay.medium
	    };
	    __decorate([
	        autobind_1.autobind
	    ], TooltipHost.prototype, "_onTooltipMouseEnter", null);
	    __decorate([
	        autobind_1.autobind
	    ], TooltipHost.prototype, "_onTooltipMouseLeave", null);
	    return TooltipHost;
	}(BaseComponent_1.BaseComponent));
	exports.TooltipHost = TooltipHost;
	


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map