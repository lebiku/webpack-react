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
	var DocumentCard_1 = __webpack_require__(4);
	var React = __webpack_require__(1);
	//import { css } from 'office-ui-fabric-react';
	__webpack_require__(44);
	var MockHttpClient_1 = __webpack_require__(48);
	var SharepointListClient_1 = __webpack_require__(251);
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
	                    previewImageSrc: './images/document-preview.png',
	                    iconSrc: './images/icon-ppt.png',
	                    width: 318,
	                    height: 196,
	                    accentColor: '#ce4b1f'
	                }
	            ],
	        };
	        this._renderListAsync();
	        return React.createElement("div", null, 
	            React.createElement("h1", null, 
	                "Hi from ", 
	                this.props.compiler, 
	                " and ", 
	                this.props.framework, 
	                "!"), 
	            React.createElement("h1", null, 
	                "drive kusi drive!", 
	                React.createElement("i", {className: "ms-Icon ms-Icon--Car", "aria-hidden": "true"})), 
	            React.createElement("div", null, 
	                React.createElement(DocumentCard_1.DocumentCard, {onClickHref: 'http://bing.com'}, 
	                    React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)), 
	                    React.createElement(DocumentCard_1.DocumentCardTitle, {title: 'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx', shouldTruncate: true}), 
	                    React.createElement(DocumentCard_1.DocumentCardActivity, {activity: 'Created a few minutes ago', people: [
	                        { name: 'Annie Lindqvist', profileImageSrc: './images/avatar-kat.png' }
	                    ]}))
	            ), 
	            React.createElement("div", {id: "spListContainer"}));
	    };
	    Hello.prototype._renderListAsync = function () {
	        var _this = this;
	        // Local environment
	        if (typeof _spBodyOnLoadFunctionNames === 'undefined') {
	            // no SharePoint
	            this._getMockListData().then(function (response) {
	                _this._renderList(response.value);
	            });
	        }
	        else {
	            // SharePoint
	            SharepointListClient_1.default.get("").then(function (response) {
	                _this._renderList(response.value);
	            });
	        }
	    };
	    Hello.prototype._getMockListData = function () {
	        return MockHttpClient_1.default.get("mockUrl")
	            .then(function (data) {
	            var listData = { value: data };
	            return listData;
	        });
	    };
	    Hello.prototype._renderList = function (items) {
	        var html = '';
	        items.forEach(function (item) {
	            html += "\n            <ul class=\"\">\n                <li class=\"\">\n                    <span class=\"ms-font-l\">" + item.Title + "</span>\n                </li>\n            </ul>";
	        });
	        var listContainer = document.getElementById('spListContainer');
	        listContainer.innerHTML = html;
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
	__export(__webpack_require__(7));
	__export(__webpack_require__(12));
	__export(__webpack_require__(25));
	__export(__webpack_require__(38));
	__export(__webpack_require__(40));
	__export(__webpack_require__(42));
	


/***/ },
/* 6 */
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
	var DocumentCard_Props_1 = __webpack_require__(7);
	var css_1 = __webpack_require__(8);
	__webpack_require__(9);
	var autobind_1 = __webpack_require__(11);
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCard{-webkit-font-smoothing:antialiased;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box;max-width:320px;min-width:206px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.ms-DocumentCard--actionable:hover{cursor:pointer;border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-DocumentCard--actionable:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";pointer-events:none}.ms-DocumentCardLocation+.ms-DocumentCardTitle{padding-top:4px}.ms-DocumentCard--compact{border-bottom:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;max-width:480px;height:109px}.ms-DocumentCard--compact .ms-DocumentCardPreview{border-bottom:none;max-height:106px;max-width:144px}.ms-DocumentCard--compact .ms-DocumentCardPreview .ms-DocumentCardPreview-icon .ms-Image-image{max-height:32px;max-width:32px}html[dir=ltr] .ms-DocumentCard--compact .ms-DocumentCardPreview{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .ms-DocumentCard--compact .ms-DocumentCardPreview{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-DocumentCard--compact .ms-DocumentCard-details{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.ms-DocumentCard--compact .ms-DocumentCardTitle{padding:12px 16px 8px 16px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;line-height:16px}.ms-DocumentCard--compact .ms-DocumentCardActivity{padding-bottom:12px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
	var Button_1 = __webpack_require__(13);
	__webpack_require__(24);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(14));
	


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(15));
	__export(__webpack_require__(18));
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(8);
	var object_1 = __webpack_require__(16);
	var Button_Props_1 = __webpack_require__(18);
	var object_2 = __webpack_require__(16);
	var properties_1 = __webpack_require__(19);
	var BaseComponent_1 = __webpack_require__(20);
	__webpack_require__(23);
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
/* 16 */
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
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(16);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Async_1 = __webpack_require__(21);
	var EventGroup_1 = __webpack_require__(22);
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Button{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px}.ms-Button::-moz-focus-inner{border:0}.ms-Button{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Button:hover .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Button:hover{color:#1AEBFF;border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button:hover{color:#37006E;border-color:#37006E}}.ms-Button:focus{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";outline:1px solid transparent}.ms-Button:focus .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Button:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.is-disabled,.ms-Button:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:default}.ms-Button.is-disabled .ms-Button-label,.ms-Button:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button.is-disabled:focus,.ms-Button.is-disabled:hover,.ms-Button:disabled:focus,.ms-Button:disabled:hover{outline:0}.ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600;font-size:14px}.ms-Button-description,.ms-Button-icon{display:none}.ms-Fabric.is-focusVisible .ms-Button:focus{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button:focus:before{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:hover{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--primary:focus{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary.is-disabled,.ms-Button--primary:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--primary.is-disabled .ms-Button-label,.ms-Button--primary:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus:before{border-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero{background-color:transparent;border:0;height:auto}.ms-Button--hero .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;padding-top:5px;font-size:20px;line-height:1}html[dir=ltr] .ms-Button--hero .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--hero .ms-Button-icon{margin-left:8px}.ms-Button--hero .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";font-size:21px;font-weight:100;vertical-align:top}.ms-Button--hero:focus .ms-Button-icon,.ms-Button--hero:hover .ms-Button-icon{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--hero:focus .ms-Button-label,.ms-Button--hero:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero:active .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-icon,.ms-Button--hero:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-label,.ms-Button--hero:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound{display:block;height:auto;max-width:280px;min-height:72px;padding:20px}.ms-Button--compound .ms-Button-label{display:block;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";margin-top:-5px}html[dir=ltr] .ms-Button--compound .ms-Button-label{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-label{text-align:right}.ms-Button--compound .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";display:block;font-size:12px;position:relative;top:3px}html[dir=ltr] .ms-Button--compound .ms-Button-description{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-description{text-align:right}.ms-Button--compound:hover .ms-Button-description{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Button--compound:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--compound:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--compound:active .ms-Button-description,.ms-Button--compound:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--compound.is-disabled .ms-Button-description,.ms-Button--compound.is-disabled .ms-Button-label,.ms-Button--compound:disabled .ms-Button-description,.ms-Button--compound:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound.is-disabled:active,.ms-Button--compound.is-disabled:focus,.ms-Button--compound:disabled:active,.ms-Button--compound:disabled:focus{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound.is-disabled:active .ms-Button-description,.ms-Button--compound.is-disabled:active .ms-Button-label,.ms-Button--compound.is-disabled:focus .ms-Button-description,.ms-Button--compound.is-disabled:focus .ms-Button-label,.ms-Button--compound:disabled:active .ms-Button-description,.ms-Button--compound:disabled:active .ms-Button-label,.ms-Button--compound:disabled:focus .ms-Button-description,.ms-Button--compound:disabled:focus .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--command{background-color:transparent;border:none;height:40px;min-width:0;padding:0 8px}html[dir=ltr] .ms-Button--command{text-align:left}html[dir=rtl] .ms-Button--command{text-align:right}.ms-Button--command .ms-Icon{line-height:40px}.ms-Button--command .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";line-height:40px}.ms-Button--command .ms-Button-icon{vertical-align:top;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;position:relative;font-size:16px}html[dir=ltr] .ms-Button--command .ms-Button-icon{text-align:left}html[dir=rtl] .ms-Button--command .ms-Button-icon{text-align:right}html[dir=ltr] .ms-Button--command .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--command .ms-Button-icon{margin-left:8px}.ms-Button--command .ms-Button-label{font-weight:400}.ms-Button--command:focus .ms-Button-icon,.ms-Button--command:focus .ms-Button-label,.ms-Button--command:hover .ms-Button-icon,.ms-Button--command:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--command:active .ms-Button-icon,.ms-Button--command:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-icon,.ms-Button--command:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-label,.ms-Button--command:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--icon{background-color:transparent;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";padding:0;min-width:auto;height:auto;border:0}.ms-Button--icon::-moz-focus-inner{border:0}.ms-Button--icon{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button--icon:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--icon:active,.ms-Button--icon:hover{background-color:transparent;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--icon:focus{background-color:transparent}.ms-Button--icon .ms-Icon{font-size:16px;padding:8px}.ms-Button--icon .ms-Button-icon{display:inline}.ms-Button--icon.is-disabled,.ms-Button--icon:disabled{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-Button--icon{color:" }, { "theme": "yellowLight", "defaultValue": "#fff100" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button--icon{color:" }, { "theme": "blueMid", "defaultValue": "#00188f" }, { "rawString": "}}.ms-Button--primary.disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-Button--primary.disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}html[dir=ltr] .ms-Button+.ms-Button{margin-left:6px}html[dir=rtl] .ms-Button+.ms-Button{margin-right:6px}html[dir=ltr] .ms-Button--command+.ms-Button--command{margin-left:14px}html[dir=rtl] .ms-Button--command+.ms-Button--command{margin-right:14px}a.ms-Button{text-decoration:none;text-align:center}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardActions{height:34px;padding:4px 12px;position:relative}.ms-DocumentCardActions-actions{position:absolute;top:4px}html[dir=ltr] .ms-DocumentCardActions-actions{left:12px}html[dir=rtl] .ms-DocumentCardActions-actions{right:12px}.ms-DocumentCardActions-action{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";cursor:pointer}html[dir=ltr] .ms-DocumentCardActions-action{float:left}html[dir=rtl] .ms-DocumentCardActions-action{float:right}html[dir=ltr] .ms-DocumentCardActions-action{margin-right:4px}html[dir=rtl] .ms-DocumentCardActions-action{margin-left:4px}.ms-DocumentCardActions-action .ms-Button{font-size:16px;height:34px;width:34px}.ms-DocumentCardActions-action .ms-Button:hover .ms-Button-icon{color:#1174c3;cursor:pointer}.ms-DocumentCardActions-views{line-height:34px}html[dir=ltr] .ms-DocumentCardActions-views{text-align:right}html[dir=rtl] .ms-DocumentCardActions-views{text-align:left}.ms-DocumentCardActions-views .ms-Icon{font-size:16px;vertical-align:top}html[dir=ltr] .ms-DocumentCardActions-views .ms-Icon{margin-right:4px}html[dir=rtl] .ms-DocumentCardActions-views .ms-Icon{margin-left:4px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(26);
	var Persona_1 = __webpack_require__(31);
	var css_1 = __webpack_require__(8);
	__webpack_require__(37);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(27));
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(28));
	__export(__webpack_require__(30));
	


/***/ },
/* 28 */
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
	var css_1 = __webpack_require__(8);
	var properties_1 = __webpack_require__(19);
	var EventGroup_1 = __webpack_require__(22);
	__webpack_require__(29);
	var Image_Props_1 = __webpack_require__(30);
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Image{overflow:hidden}.ms-Image-image{display:block;opacity:0}.ms-Image-image.is-loaded{opacity:1}.ms-Image-image--center,.ms-Image-image--contain,.ms-Image-image--cover{position:relative;top:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{left:50%}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{right:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.ms-Image-image--contain.ms-Image-image--landscape{width:100%;height:auto}.ms-Image-image--contain.ms-Image-image--portrait{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--landscape{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--portrait{width:100%;height:auto}.ms-Image-image--none{height:auto;width:auto}.ms-Image-image--scaleWidthHeight{height:100%;width:100%}.ms-Image-image--scaleWidth{height:auto;width:100%}.ms-Image-image--scaleHeight{height:100%;width:auto}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(32));
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	


/***/ },
/* 33 */
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
	var css_1 = __webpack_require__(8);
	var Image_1 = __webpack_require__(26);
	var Persona_Props_1 = __webpack_require__(34);
	var PersonaConsts_1 = __webpack_require__(35);
	var properties_1 = __webpack_require__(19);
	__webpack_require__(36);
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Persona_Props_1 = __webpack_require__(34);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Persona{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;font-weight:400;line-height:1;position:relative;height:48px;display:table;table-layout:fixed;border-collapse:separate}.ms-Persona .ms-ContextualHost{display:none}.ms-Persona-imageArea{position:absolute;overflow:hidden;text-align:center;max-width:48px;height:48px;border-radius:50%;z-index:0;width:48px;top:0}html[dir=ltr] .ms-Persona-imageArea{left:0}html[dir=rtl] .ms-Persona-imageArea{right:0}@media screen and (-ms-high-contrast:active){.ms-Persona-imageArea{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-imageArea{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Persona-imageArea .ms-Image{border:0}.ms-Persona-placeholder{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:absolute;right:0;left:0;font-size:47px;top:9px;z-index:5}.ms-Persona-initials{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:17px;font-weight:100;line-height:48px}.ms-Persona-initials.ms-Persona-initials--lightBlue{background-color:#6BA5E7}.ms-Persona-initials.ms-Persona-initials--blue{background-color:#2D89EF}.ms-Persona-initials.ms-Persona-initials--darkBlue{background-color:#2B5797}.ms-Persona-initials.ms-Persona-initials--teal{background-color:#00ABA9}.ms-Persona-initials.ms-Persona-initials--lightGreen{background-color:#99B433}.ms-Persona-initials.ms-Persona-initials--green{background-color:#00A300}.ms-Persona-initials.ms-Persona-initials--darkGreen{background-color:#1E7145}.ms-Persona-initials.ms-Persona-initials--lightPink{background-color:#E773BD}.ms-Persona-initials.ms-Persona-initials--pink{background-color:#FF0097}.ms-Persona-initials.ms-Persona-initials--magenta{background-color:#7E3878}.ms-Persona-initials.ms-Persona-initials--purple{background-color:#603CBA}.ms-Persona-initials.ms-Persona-initials--black{background-color:#1D1D1D}.ms-Persona-initials.ms-Persona-initials--orange{background-color:#DA532C}.ms-Persona-initials.ms-Persona-initials--red{background-color:#E11}.ms-Persona-initials.ms-Persona-initials--darkRed{background-color:#B91D47}.ms-Persona-image{display:table-cell;position:absolute;top:0;width:100%;height:100%;border-radius:50%;-webkit-perspective:1px;perspective:1px}html[dir=ltr] .ms-Persona-image{margin-right:10px}html[dir=rtl] .ms-Persona-image{margin-left:10px}html[dir=ltr] .ms-Persona-image{left:0}html[dir=rtl] .ms-Persona-image{right:0}.ms-Persona-image[src=\"\"]{display:none}.ms-Persona-presence{background-color:#7FBA00;position:absolute;height:12px;width:12px;border-radius:50%;top:auto;bottom:-1px;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";text-align:center;box-sizing:content-box}html[dir=ltr] .ms-Persona-presence{left:34px}html[dir=rtl] .ms-Persona-presence{right:34px}@media screen and (-ms-high-contrast:active){.ms-Persona-presence{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";box-shadow:0 0 0 1px #1AEBFF inset;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-presence{border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px #37006E inset;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Persona-presence .ms-Persona-presenceIcon{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:8px;line-height:12px;vertical-align:top}.ms-Persona-details{padding:0 12px;vertical-align:middle;display:table-cell;width:100%}html[dir=ltr] .ms-Persona-details{text-align:left}html[dir=rtl] .ms-Persona-details{text-align:right}html[dir=ltr] .ms-Persona-details{padding-left:60px}html[dir=rtl] .ms-Persona-details{padding-right:60px}.ms-Persona-optionalText,.ms-Persona-primaryText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.ms-Persona-primaryText{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:400;font-size:17px;margin-top:-3px;line-height:1.4}.ms-Persona-optionalText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-weight:400;font-size:12px;white-space:nowrap;line-height:1.3}.ms-Persona-secondaryText{padding-top:3px}.ms-Persona-optionalText,.ms-Persona-tertiaryText{padding-top:5px;display:none}.ms-Persona.ms-Persona--tiny{height:30px;display:inline-block}.ms-Persona.ms-Persona--tiny .ms-Persona-imageArea{overflow:visible;background:0 0;height:0;width:0}.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:10px;border:0}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:auto}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{left:auto}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{left:0}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:0}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:9px;border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-left:20px}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-right:20px}.ms-Persona.ms-Persona--tiny .ms-Persona-primaryText{font-size:14px;padding-top:9px}.ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly{padding:0;background-color:transparent}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText:after{content:';'}.ms-Persona.ms-Persona--xs{height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-image,.ms-Persona.ms-Persona--xs .ms-Persona-imageArea{max-width:32px;width:32px;height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-placeholder{font-size:28px;top:6px}.ms-Persona.ms-Persona--xs .ms-Persona-initials{font-size:12px;line-height:32px}html[dir=ltr] .ms-Persona.ms-Persona--xs .ms-Persona-presence{left:19px}html[dir=rtl] .ms-Persona.ms-Persona--xs .ms-Persona-presence{right:19px}html[dir=ltr] .ms-Persona.ms-Persona--xs .ms-Persona-details{padding-left:40px}html[dir=rtl] .ms-Persona.ms-Persona--xs .ms-Persona-details{padding-right:40px}.ms-Persona.ms-Persona--xs .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-Persona.ms-Persona--xs .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--sm{height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-image,.ms-Persona.ms-Persona--sm .ms-Persona-imageArea{max-width:40px;width:40px;height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-placeholder{font-size:38px;top:5px}.ms-Persona.ms-Persona--sm .ms-Persona-initials{font-size:14px;line-height:40px}html[dir=ltr] .ms-Persona.ms-Persona--sm .ms-Persona-presence{left:27px}html[dir=rtl] .ms-Persona.ms-Persona--sm .ms-Persona-presence{right:27px}html[dir=ltr] .ms-Persona.ms-Persona--sm .ms-Persona-details{padding-left:48px}html[dir=rtl] .ms-Persona.ms-Persona--sm .ms-Persona-details{padding-right:48px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText{font-size:14px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText,.ms-Persona.ms-Persona--sm .ms-Persona-secondaryText{padding-top:1px}.ms-Persona.ms-Persona--lg{height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-image,.ms-Persona.ms-Persona--lg .ms-Persona-imageArea{max-width:72px;width:72px;height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-placeholder{font-size:67px;top:10px}.ms-Persona.ms-Persona--lg .ms-Persona-initials{font-size:28px;line-height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-presence{height:20px;width:20px;border-width:3px}html[dir=ltr] .ms-Persona.ms-Persona--lg .ms-Persona-presence{left:49px}html[dir=rtl] .ms-Persona.ms-Persona--lg .ms-Persona-presence{right:49px}.ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon{line-height:20px;font-size:14px}html[dir=ltr] .ms-Persona.ms-Persona--lg .ms-Persona-details{padding-left:84px}html[dir=rtl] .ms-Persona.ms-Persona--lg .ms-Persona-details{padding-right:84px}.ms-Persona.ms-Persona--lg .ms-Persona-secondaryText{padding-top:3px}.ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--xl{height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-image,.ms-Persona.ms-Persona--xl .ms-Persona-imageArea{max-width:100px;width:100px;height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-placeholder{font-size:95px;top:12px}.ms-Persona.ms-Persona--xl .ms-Persona-initials{font-size:42px;line-height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-presence{height:28px;width:28px;border-width:4px}html[dir=ltr] .ms-Persona.ms-Persona--xl .ms-Persona-presence{left:71px}html[dir=rtl] .ms-Persona.ms-Persona--xl .ms-Persona-presence{right:71px}.ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon{line-height:28px;font-size:21px;position:relative;top:1px}html[dir=ltr] .ms-Persona.ms-Persona--xl .ms-Persona-details{padding-left:120px}html[dir=rtl] .ms-Persona.ms-Persona--xl .ms-Persona-details{padding-right:120px}.ms-Persona.ms-Persona--xl .ms-Persona-primaryText{font-size:21px;font-weight:300;margin-top:0}.ms-Persona.ms-Persona--xl .ms-Persona-secondaryText{padding-top:2px}.ms-Persona.ms-Persona--xl .ms-Persona-optionalText,.ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--darkText .ms-Persona-primaryText{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Persona.ms-Persona--darkText .ms-Persona-optionalText,.ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Persona.ms-Persona--selectable{cursor:pointer;padding:0 10px}.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):focus,.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):hover{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";outline:1px solid transparent}.ms-Persona.ms-Persona--available .ms-Persona-presence{background-color:#7FBA00}.ms-Persona.ms-Persona--away .ms-Persona-presence{background-color:#FCD116}.ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{position:relative}html[dir=ltr] .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{left:1px}html[dir=rtl] .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{right:1px}.ms-Persona.ms-Persona--blocked .ms-Persona-presence{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{content:'';width:100%;height:100%;position:absolute;top:0;box-shadow:0 0 0 2px #D93B3B inset;border-radius:50%}html[dir=ltr] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{left:0}html[dir=rtl] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{right:0}.ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{content:'';width:100%;height:2px;background-color:#D93B3B;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:5px}html[dir=ltr] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{left:0}html[dir=rtl] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{right:0}.ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence::after{top:9px}.ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence::after{top:13px}.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#D93B3B}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#37006E}}.ms-Persona.ms-Persona--dnd .ms-Persona-presence{background-color:#E81123}.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#93ABBD}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": " inset}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": " inset}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardActivity{padding:8px 16px;position:relative}html[dir=ltr] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-avatar:nth-of-type(2){margin-left:-16px}html[dir=rtl] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-avatar:nth-of-type(2){margin-right:-16px}html[dir=ltr] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-details{left:61.5px}html[dir=rtl] .ms-DocumentCardActivity--multiplePeople .ms-DocumentCardActivity-details{right:61.5px}html[dir=ltr] .ms-DocumentCardActivity-avatars{margin-left:-2px}html[dir=rtl] .ms-DocumentCardActivity-avatars{margin-right:-2px}.ms-DocumentCardActivity-avatar{border:2px solid #fafafa;border-radius:50%;height:25px;width:25px;display:inline-block;position:relative;overflow:hidden;text-align:center}.ms-DocumentCardActivity-avatar .ms-Persona-initials{height:25px;line-height:25px;font-size:12px}.ms-DocumentCardActivity-avatar img{width:100%;height:100%;border-radius:50%}.ms-DocumentCardActivity-details{height:25px;position:absolute;top:8px;width:calc(100% - 65px)}html[dir=ltr] .ms-DocumentCardActivity-details{left:49px}html[dir=rtl] .ms-DocumentCardActivity-details{right:49px}.ms-DocumentCardActivity-activity,.ms-DocumentCardActivity-name{display:block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";line-height:15px;height:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-DocumentCardActivity-name{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(39);
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardLocation{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:block;padding:8px 16px;position:relative;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-DocumentCardLocation:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";cursor:pointer}" }]);
	/* tslint:enable */ 
	


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
	var React = __webpack_require__(1);
	var Image_1 = __webpack_require__(26);
	var css_1 = __webpack_require__(8);
	var autobind_1 = __webpack_require__(11);
	__webpack_require__(41);
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardPreview{border-bottom:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";position:relative;background-color:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": ";overflow:hidden}.ms-DocumentCardPreview.is-fileList{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-DocumentCardPreview-icon{bottom:10px;position:absolute}html[dir=ltr] .ms-DocumentCardPreview-icon{left:10px}html[dir=rtl] .ms-DocumentCardPreview-icon{right:10px}.ms-DocumentCardPreview-fileList{padding:16px 16px 0 16px;list-style-type:none;margin:0}html[dir=rtl] .ms-DocumentCardPreview-fileList{padding:16px 16px 0 16px}.ms-DocumentCardPreview-fileList li{height:16px;line-height:16px;margin-bottom:8px;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}html[dir=ltr] .ms-DocumentCardPreview-fileList li{padding-left:24px}html[dir=rtl] .ms-DocumentCardPreview-fileList li{padding-right:24px}.ms-DocumentCardPreview-fileList a{font-size:12px;text-decoration:none;color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-DocumentCardPreview-fileList a:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DocumentCardPreview-fileListIcon{position:absolute;top:0}html[dir=ltr] .ms-DocumentCardPreview-fileListIcon{left:0}html[dir=rtl] .ms-DocumentCardPreview-fileListIcon{right:0}.ms-DocumentCardPreview-fileListMore{padding:0 16px 8px 16px;display:block;font-size:12px}html[dir=rtl] .ms-DocumentCardPreview-fileListMore{padding:0 16px 8px 16px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 42 */
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
	var BaseComponent_1 = __webpack_require__(20);
	var autobind_1 = __webpack_require__(11);
	__webpack_require__(43);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(10);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DocumentCardTitle{padding:8px 16px;display:block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:17px;font-weight:300;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:38px;line-height:21px;overflow:hidden;word-wrap:break-word}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(47)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./fabric.min.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./fabric.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(46)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */\r\n/**\n * Office UI Fabric Core 5.0.1\n * The front-end framework for building experiences for Office 365.\n **/\n.ms-u-borderBox,.ms-u-borderBox:after,.ms-u-borderBox:before{box-sizing:border-box}.ms-u-borderBase{border:1px solid}.ms-u-clearfix{*zoom:1}.ms-u-clearfix:after,.ms-u-clearfix:before{display:table;content:'';line-height:0}.ms-u-clearfix:after{clear:both}.ms-u-normalize{box-sizing:border-box;margin:0;padding:0;box-shadow:none}.ms-u-textAlignLeft{text-align:left}.ms-u-textAlignCenter{text-align:center}.ms-u-textAlignRight{text-align:right}.ms-u-screenReaderOnly{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ms-u-textTruncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.ms-u-noWrap{white-space:nowrap}.ms-bgColor-themeDark,.ms-bgColor-themeDark--hover:hover{background-color:#005a9e}.ms-bgColor-themeDarkAlt,.ms-bgColor-themeDarkAlt--hover:hover{background-color:#106ebe}.ms-bgColor-themeDarker,.ms-bgColor-themeDarker--hover:hover{background-color:#004578}.ms-bgColor-themePrimary,.ms-bgColor-themePrimary--hover:hover{background-color:#0078d7}.ms-bgColor-themeSecondary,.ms-bgColor-themeSecondary--hover:hover{background-color:#2488d8}.ms-bgColor-themeTertiary,.ms-bgColor-themeTertiary--hover:hover{background-color:#69afe5}.ms-bgColor-themeLight,.ms-bgColor-themeLight--hover:hover{background-color:#b3d6f2}.ms-bgColor-themeLighter,.ms-bgColor-themeLighter--hover:hover{background-color:#deecf9}.ms-bgColor-themeLighterAlt,.ms-bgColor-themeLighterAlt--hover:hover{background-color:#eff6fc}.ms-bgColor-black,.ms-bgColor-black--hover:hover{background-color:#000}.ms-bgColor-neutralDark,.ms-bgColor-neutralDark--hover:hover{background-color:#212121}.ms-bgColor-neutralPrimary,.ms-bgColor-neutralPrimary--hover:hover{background-color:#333}.ms-bgColor-neutralPrimaryAlt,.ms-bgColor-neutralPrimaryAlt--hover:hover{background-color:#3c3c3c}.ms-bgColor-neutralSecondary,.ms-bgColor-neutralSecondary--hover:hover{background-color:#666}.ms-bgColor-neutralSecondaryAlt,.ms-bgColor-neutralSecondaryAlt--hover:hover{background-color:#767676}.ms-bgColor-neutralTertiary,.ms-bgColor-neutralTertiary--hover:hover{background-color:#a6a6a6}.ms-bgColor-neutralTertiaryAlt,.ms-bgColor-neutralTertiaryAlt--hover:hover{background-color:#c8c8c8}.ms-bgColor-neutralLight,.ms-bgColor-neutralLight--hover:hover{background-color:#eaeaea}.ms-bgColor-neutralLighter,.ms-bgColor-neutralLighter--hover:hover{background-color:#f4f4f4}.ms-bgColor-neutralLighterAlt,.ms-bgColor-neutralLighterAlt--hover:hover{background-color:#f8f8f8}.ms-bgColor-white,.ms-bgColor-white--hover:hover{background-color:#fff}.ms-bgColor-yellow{background-color:#ffb900}.ms-bgColor-yellowLight{background-color:#fff100}.ms-bgColor-orange{background-color:#d83b01}.ms-bgColor-orangeLight{background-color:#ea4300}.ms-bgColor-orangeLighter{background-color:#ff8c00}.ms-bgColor-redDark{background-color:#a80000}.ms-bgColor-red{background-color:#e81123}.ms-bgColor-magentaDark{background-color:#5c005c}.ms-bgColor-magenta{background-color:#b4009e}.ms-bgColor-magentaLight{background-color:#e3008c}.ms-bgColor-purpleDark{background-color:#32145a}.ms-bgColor-purple{background-color:#5c2d91}.ms-bgColor-purpleLight{background-color:#b4a0ff}.ms-bgColor-blueDark{background-color:#002050}.ms-bgColor-blueMid{background-color:#00188f}.ms-bgColor-blue{background-color:#0078d7}.ms-bgColor-blueLight{background-color:#00bcf2}.ms-bgColor-tealDark{background-color:#004b50}.ms-bgColor-teal{background-color:#008272}.ms-bgColor-tealLight{background-color:#00b294}.ms-bgColor-greenDark{background-color:#004b1c}.ms-bgColor-green{background-color:#107c10}.ms-bgColor-greenLight{background-color:#bad80a}.ms-bgColor-info{background-color:#f4f4f4}.ms-bgColor-success{background-color:#dff6dd}.ms-bgColor-severeWarning{background-color:#fed9cc}.ms-bgColor-warning{background-color:#fff4ce}.ms-bgColor-error{background-color:#fde7e9}.ms-borderColor-themeDark,.ms-borderColor-themeDark--hover:hover{border-color:#005a9e}.ms-borderColor-themeDarkAlt,.ms-borderColor-themeDarkAlt--hover:hover{border-color:#106ebe}.ms-borderColor-themeDarker,.ms-borderColor-themeDarker--hover:hover{border-color:#004578}.ms-borderColor-themePrimary,.ms-borderColor-themePrimary--hover:hover{border-color:#0078d7}.ms-borderColor-themeSecondary,.ms-borderColor-themeSecondary--hover:hover{border-color:#2488d8}.ms-borderColor-themeTertiary,.ms-borderColor-themeTertiary--hover:hover{border-color:#69afe5}.ms-borderColor-themeLight,.ms-borderColor-themeLight--hover:hover{border-color:#b3d6f2}.ms-borderColor-themeLighter,.ms-borderColor-themeLighter--hover:hover{border-color:#deecf9}.ms-borderColor-themeLighterAlt,.ms-borderColor-themeLighterAlt--hover:hover{border-color:#eff6fc}.ms-borderColor-black,.ms-borderColor-black--hover:hover{border-color:#000}.ms-borderColor-neutralDark,.ms-borderColor-neutralDark--hover:hover{border-color:#212121}.ms-borderColor-neutralPrimary,.ms-borderColor-neutralPrimary--hover:hover{border-color:#333}.ms-borderColor-neutralPrimaryAlt,.ms-borderColor-neutralPrimaryAlt--hover:hover{border-color:#3c3c3c}.ms-borderColor-neutralSecondary,.ms-borderColor-neutralSecondary--hover:hover{border-color:#666}.ms-borderColor-neutralSecondaryAlt,.ms-borderColor-neutralSecondaryAlt--hover:hover{border-color:#767676}.ms-borderColor-neutralTertiary,.ms-borderColor-neutralTertiary--hover:hover{border-color:#a6a6a6}.ms-borderColor-neutralTertiaryAlt,.ms-borderColor-neutralTertiaryAlt--hover:hover{border-color:#c8c8c8}.ms-borderColor-neutralLight,.ms-borderColor-neutralLight--hover:hover{border-color:#eaeaea}.ms-borderColor-neutralLighter,.ms-borderColor-neutralLighter--hover:hover{border-color:#f4f4f4}.ms-borderColor-neutralLighterAlt,.ms-borderColor-neutralLighterAlt--hover:hover{border-color:#f8f8f8}.ms-borderColor-white,.ms-borderColor-white--hover:hover{border-color:#fff}.ms-borderColor-yellow{border-color:#ffb900}.ms-borderColor-yellowLight{border-color:#fff100}.ms-borderColor-orange{border-color:#d83b01}.ms-borderColor-orangeLight{border-color:#ea4300}.ms-borderColor-orangeLighter{border-color:#ff8c00}.ms-borderColor-redDark{border-color:#a80000}.ms-borderColor-red{border-color:#e81123}.ms-borderColor-magentaDark{border-color:#5c005c}.ms-borderColor-magenta{border-color:#b4009e}.ms-borderColor-magentaLight{border-color:#e3008c}.ms-borderColor-purpleDark{border-color:#32145a}.ms-borderColor-purple{border-color:#5c2d91}.ms-borderColor-purpleLight{border-color:#b4a0ff}.ms-borderColor-blueDark{border-color:#002050}.ms-borderColor-blueMid{border-color:#00188f}.ms-borderColor-blue{border-color:#0078d7}.ms-borderColor-blueLight{border-color:#00bcf2}.ms-borderColor-tealDark{border-color:#004b50}.ms-borderColor-teal{border-color:#008272}.ms-borderColor-tealLight{border-color:#00b294}.ms-borderColor-greenDark{border-color:#004b1c}.ms-borderColor-green{border-color:#107c10}.ms-borderColor-greenLight{border-color:#bad80a}.ms-borderColorTop-themePrimary,.ms-borderColorTop-themePrimary--hover:hover{border-top-color:#0078d7}.ms-font-su{font-size:42px}.ms-font-su,.ms-font-xxl{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:100}.ms-font-xxl{font-size:28px}.ms-font-xl{font-size:21px;font-weight:100}.ms-font-l,.ms-font-xl{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-font-l{font-size:17px;font-weight:300}.ms-font-m-plus{font-size:15px}.ms-font-m,.ms-font-m-plus{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-font-m{font-size:14px}.ms-font-s-plus{font-size:13px}.ms-font-s,.ms-font-s-plus{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-font-s{font-size:12px}.ms-font-xs{font-size:11px;font-weight:400}.ms-font-mi,.ms-font-xs{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-font-mi{font-size:10px;font-weight:600}.ms-fontWeight-light,.ms-fontWeight-light--hover:hover{font-weight:100}.ms-fontWeight-semilight,.ms-fontWeight-semilight--hover:hover{font-weight:300}.ms-fontWeight-regular,.ms-fontWeight-regular--hover:hover{font-weight:400}.ms-fontWeight-semibold,.ms-fontWeight-semibold--hover:hover{font-weight:600}.ms-fontSize-su{font-size:42px}.ms-fontSize-xxl{font-size:28px}.ms-fontSize-xl{font-size:21px}.ms-fontSize-l{font-size:17px}.ms-fontSize-mPlus{font-size:15px}.ms-fontSize-m{font-size:14px}.ms-fontSize-sPlus{font-size:13px}.ms-fontSize-s{font-size:12px}.ms-fontSize-xs{font-size:11px}.ms-fontSize-mi{font-size:10px}.ms-fontColor-themeDarker,.ms-fontColor-themeDarker--hover:hover{color:#004578}.ms-fontColor-themeDark,.ms-fontColor-themeDark--hover:hover{color:#005a9e}.ms-fontColor-themeDarkAlt,.ms-fontColor-themeDarkAlt--hover:hover{color:#106ebe}.ms-fontColor-themePrimary,.ms-fontColor-themePrimary--hover:hover{color:#0078d7}.ms-fontColor-themeSecondary,.ms-fontColor-themeSecondary--hover:hover{color:#2488d8}.ms-fontColor-themeTertiary,.ms-fontColor-themeTertiary--hover:hover{color:#69afe5}.ms-fontColor-themeLight,.ms-fontColor-themeLight--hover:hover{color:#b3d6f2}.ms-fontColor-themeLighter,.ms-fontColor-themeLighter--hover:hover{color:#deecf9}.ms-fontColor-themeLighterAlt,.ms-fontColor-themeLighterAlt--hover:hover{color:#eff6fc}.ms-fontColor-black,.ms-fontColor-black--hover:hover{color:#000}.ms-fontColor-neutralDark,.ms-fontColor-neutralDark--hover:hover{color:#212121}.ms-fontColor-neutralPrimary,.ms-fontColor-neutralPrimary--hover:hover{color:#333}.ms-fontColor-neutralPrimaryAlt,.ms-fontColor-neutralPrimaryAlt--hover:hover{color:#3c3c3c}.ms-fontColor-neutralSecondary,.ms-fontColor-neutralSecondary--hover:hover{color:#666}.ms-fontColor-neutralSecondaryAlt,.ms-fontColor-neutralSecondaryAlt--hover:hover{color:#767676}.ms-fontColor-neutralTertiary,.ms-fontColor-neutralTertiary--hover:hover{color:#a6a6a6}.ms-fontColor-neutralTertiaryAlt,.ms-fontColor-neutralTertiaryAlt--hover:hover{color:#c8c8c8}.ms-fontColor-neutralLight,.ms-fontColor-neutralLight--hover:hover{color:#eaeaea}.ms-fontColor-neutralLighter,.ms-fontColor-neutralLighter--hover:hover{color:#f4f4f4}.ms-fontColor-neutralLighterAlt,.ms-fontColor-neutralLighterAlt--hover:hover{color:#f8f8f8}.ms-fontColor-white,.ms-fontColor-white--hover:hover{color:#fff}.ms-fontColor-yellow,.ms-fontColor-yellow--hover:hover{color:#ffb900}.ms-fontColor-yellowLight,.ms-fontColor-yellowLight--hover:hover{color:#fff100}.ms-fontColor-orange,.ms-fontColor-orange--hover:hover{color:#d83b01}.ms-fontColor-orangeLight,.ms-fontColor-orangeLight--hover:hover{color:#ea4300}.ms-fontColor-orangeLighter,.ms-fontColor-orangeLighter--hover:hover{color:#ff8c00}.ms-fontColor-redDark,.ms-fontColor-redDark--hover:hover{color:#a80000}.ms-fontColor-red,.ms-fontColor-red--hover:hover{color:#e81123}.ms-fontColor-magentaDark,.ms-fontColor-magentaDark--hover:hover{color:#5c005c}.ms-fontColor-magenta,.ms-fontColor-magenta--hover:hover{color:#b4009e}.ms-fontColor-magentaLight,.ms-fontColor-magentaLight--hover:hover{color:#e3008c}.ms-fontColor-purpleDark,.ms-fontColor-purpleDark--hover:hover{color:#32145a}.ms-fontColor-purple,.ms-fontColor-purple--hover:hover{color:#5c2d91}.ms-fontColor-purpleLight,.ms-fontColor-purpleLight--hover:hover{color:#b4a0ff}.ms-fontColor-blueDark,.ms-fontColor-blueDark--hover:hover{color:#002050}.ms-fontColor-blueMid,.ms-fontColor-blueMid--hover:hover{color:#00188f}.ms-fontColor-blue,.ms-fontColor-blue--hover:hover{color:#0078d7}.ms-fontColor-blueLight,.ms-fontColor-blueLight--hover:hover{color:#00bcf2}.ms-fontColor-tealDark,.ms-fontColor-tealDark--hover:hover{color:#004b50}.ms-fontColor-teal,.ms-fontColor-teal--hover:hover{color:#008272}.ms-fontColor-tealLight,.ms-fontColor-tealLight--hover:hover{color:#00b294}.ms-fontColor-greenDark,.ms-fontColor-greenDark--hover:hover{color:#004b1c}.ms-fontColor-green,.ms-fontColor-green--hover:hover{color:#107c10}.ms-fontColor-greenLight,.ms-fontColor-greenLight--hover:hover{color:#bad80a}.ms-fontColor-info,.ms-fontColor-info--hover:hover{color:#767676}.ms-fontColor-success,.ms-fontColor-success--hover:hover{color:#107c10}.ms-fontColor-alert,.ms-fontColor-alert--hover:hover{color:#d83b01}.ms-fontColor-warning,.ms-fontColor-warning--hover:hover{color:#767676}.ms-fontColor-severeWarning,.ms-fontColor-severeWarning--hover:hover{color:#d83b01}.ms-fontColor-error,.ms-fontColor-error--hover:hover{color:#a80000}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Light'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.ttf) format('truetype');font-weight:100;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Semibold'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.ttf) format('truetype');font-weight:600;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Semilight'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.ttf) format('truetype');font-weight:200;font-style:normal}@font-face{font-family:FabricMDL2Icons;src:url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.ttf) format('truetype');font-weight:400;font-style:normal}.ms-Icon{-moz-osx-font-smoothing:grayscale;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none}.ms-Icon,.ms-Icon--circle{-webkit-font-smoothing:antialiased;display:inline-block}.ms-Icon--circle{position:relative;font-size:1rem;width:1em;height:1em;margin:0 .5em 0 0;padding:0;text-align:left}.ms-Icon--circle:after,.ms-Icon--circle:before{line-height:1;font-size:inherit}.ms-Icon--circle:before{display:block;width:100%;height:100%;margin:0;padding:0;vertical-align:top;position:absolute}.ms-Icon--circle:after{content:'\\E000';position:absolute;top:0;left:0;transform:scale(2);transform-origin:50% 50%;z-index:0}.ms-Icon--xs{font-size:10px}.ms-Icon--s{font-size:12px}.ms-Icon--m{font-size:16px}.ms-Icon--l{font-size:20px}.ms-Icon--DecreaseIndentLegacy:before{content:'\\E290'}.ms-Icon--IncreaseIndentLegacy:before{content:'\\E291'}.ms-Icon--GlobalNavButton:before{content:'\\E700'}.ms-Icon--InternetSharing:before{content:'\\E704'}.ms-Icon--Brightness:before{content:'\\E706'}.ms-Icon--MapPin:before{content:'\\E707'}.ms-Icon--Airplane:before{content:'\\E709'}.ms-Icon--Tablet:before{content:'\\E70A'}.ms-Icon--QuickNote:before{content:'\\E70B'}.ms-Icon--ChevronDown:before{content:'\\E70D'}.ms-Icon--ChevronUp:before{content:'\\E70E'}.ms-Icon--Edit:before{content:'\\E70F'}.ms-Icon--Add:before{content:'\\E710'}.ms-Icon--Cancel:before{content:'\\E711'}.ms-Icon--More:before{content:'\\E712'}.ms-Icon--Settings:before{content:'\\E713'}.ms-Icon--Video:before{content:'\\E714'}.ms-Icon--Mail:before{content:'\\E715'}.ms-Icon--People:before{content:'\\E716'}.ms-Icon--Phone:before{content:'\\E717'}.ms-Icon--Pin:before{content:'\\E718'}.ms-Icon--Shop:before{content:'\\E719'}.ms-Icon--Link:before{content:'\\E71B'}.ms-Icon--Filter:before{content:'\\E71C'}.ms-Icon--Zoom:before{content:'\\E71E'}.ms-Icon--ZoomOut:before{content:'\\E71F'}.ms-Icon--Microphone:before{content:'\\E720'}.ms-Icon--Search:before{content:'\\E721'}.ms-Icon--Camera:before{content:'\\E722'}.ms-Icon--Attach:before{content:'\\E723'}.ms-Icon--Send:before{content:'\\E724'}.ms-Icon--FavoriteList:before{content:'\\E728'}.ms-Icon--PageSolid:before{content:'\\E729'}.ms-Icon--Forward:before{content:'\\E72A'}.ms-Icon--Back:before{content:'\\E72B'}.ms-Icon--Refresh:before{content:'\\E72C'}.ms-Icon--Share:before{content:'\\E72D'}.ms-Icon--Lock:before{content:'\\E72E'}.ms-Icon--EMI:before{content:'\\E731'}.ms-Icon--MiniLink:before{content:'\\E732'}.ms-Icon--Blocked:before{content:'\\E733'}.ms-Icon--FavoriteStar:before{content:'\\E734'}.ms-Icon--FavoriteStarFill:before{content:'\\E735'}.ms-Icon--ReadingMode:before{content:'\\E736'}.ms-Icon--Remove:before{content:'\\E738'}.ms-Icon--Checkbox:before{content:'\\E739'}.ms-Icon--CheckboxComposite:before{content:'\\E73A'}.ms-Icon--CheckboxIndeterminate:before{content:'\\E73C'}.ms-Icon--CheckMark:before{content:'\\E73E'}.ms-Icon--BackToWindow:before{content:'\\E73F'}.ms-Icon--FullScreen:before{content:'\\E740'}.ms-Icon--Print:before{content:'\\E749'}.ms-Icon--Up:before{content:'\\E74A'}.ms-Icon--Down:before{content:'\\E74B'}.ms-Icon--Delete:before{content:'\\E74D'}.ms-Icon--Save:before{content:'\\E74E'}.ms-Icon--Sad:before{content:'\\E757'}.ms-Icon--SIPMove:before{content:'\\E759'}.ms-Icon--EraseTool:before{content:'\\E75C'}.ms-Icon--GripperTool:before{content:'\\E75E'}.ms-Icon--Dialpad:before{content:'\\E75F'}.ms-Icon--PageLeft:before{content:'\\E760'}.ms-Icon--PageRight:before{content:'\\E761'}.ms-Icon--MultiSelect:before{content:'\\E762'}.ms-Icon--Play:before{content:'\\E768'}.ms-Icon--Pause:before{content:'\\E769'}.ms-Icon--ChevronLeft:before{content:'\\E76B'}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Icon--Emoji2:before{content:'\\E76E'}.ms-Icon--System:before{content:'\\E770'}.ms-Icon--Globe:before{content:'\\E774'}.ms-Icon--ContactInfo:before{content:'\\E779'}.ms-Icon--Unpin:before{content:'\\E77A'}.ms-Icon--Contact:before{content:'\\E77B'}.ms-Icon--Memo:before{content:'\\E77C'}.ms-Icon--WindowsLogo:before{content:'\\E782'}.ms-Icon--Error:before{content:'\\E783'}.ms-Icon--Unlock:before{content:'\\E785'}.ms-Icon--Calendar:before{content:'\\E787'}.ms-Icon--Megaphone:before{content:'\\E789'}.ms-Icon--AutoEnhanceOn:before{content:'\\E78D'}.ms-Icon--AutoEnhanceOff:before{content:'\\E78E'}.ms-Icon--Color:before{content:'\\E790'}.ms-Icon--SaveAs:before{content:'\\E792'}.ms-Icon--Light:before{content:'\\E793'}.ms-Icon--Filters:before{content:'\\E795'}.ms-Icon--Contrast:before{content:'\\E7A1'}.ms-Icon--Redo:before{content:'\\E7A6'}.ms-Icon--Undo:before{content:'\\E7A7'}.ms-Icon--PhotoCollection:before{content:'\\E7AA'}.ms-Icon--Album:before{content:'\\E7AB'}.ms-Icon--Rotate:before{content:'\\E7AD'}.ms-Icon--PanoIndicator:before{content:'\\E7B0'}.ms-Icon--ThumbnailView:before{content:'\\E7B6'}.ms-Icon--Package:before{content:'\\E7B8'}.ms-Icon--Warning:before{content:'\\E7BA'}.ms-Icon--Financial:before{content:'\\E7BB'}.ms-Icon--ShoppingCart:before{content:'\\E7BF'}.ms-Icon--Train:before{content:'\\E7C0'}.ms-Icon--Flag:before{content:'\\E7C1'}.ms-Icon--Move:before{content:'\\E7C2'}.ms-Icon--Page:before{content:'\\E7C3'}.ms-Icon--TouchPointer:before{content:'\\E7C9'}.ms-Icon--Merge:before{content:'\\E7D5'}.ms-Icon--TurnRight:before{content:'\\E7DB'}.ms-Icon--Ferry:before{content:'\\E7E3'}.ms-Icon--Tab:before{content:'\\E7E9'}.ms-Icon--Admin:before{content:'\\E7EF'}.ms-Icon--TVMonitor:before{content:'\\E7F4'}.ms-Icon--Speakers:before{content:'\\E7F5'}.ms-Icon--Nav2DMapView:before{content:'\\E800'}.ms-Icon--Car:before{content:'\\E804'}.ms-Icon--EatDrink:before{content:'\\E807'}.ms-Icon--LocationCircle:before{content:'\\E80E'}.ms-Icon--Home:before{content:'\\E80F'}.ms-Icon--SwitcherStartEnd:before{content:'\\E810'}.ms-Icon--IncidentTriangle:before{content:'\\E814'}.ms-Icon--Touch:before{content:'\\E815'}.ms-Icon--MapDirections:before{content:'\\E816'}.ms-Icon--History:before{content:'\\E81C'}.ms-Icon--Location:before{content:'\\E81D'}.ms-Icon--Work:before{content:'\\E821'}.ms-Icon--Recent:before{content:'\\E823'}.ms-Icon--Hotel:before{content:'\\E824'}.ms-Icon--LocationDot:before{content:'\\E827'}.ms-Icon--News:before{content:'\\E900'}.ms-Icon--Chat:before{content:'\\E901'}.ms-Icon--Group:before{content:'\\E902'}.ms-Icon--View:before{content:'\\E890'}.ms-Icon--Clear:before{content:'\\E894'}.ms-Icon--Sync:before{content:'\\E895'}.ms-Icon--Download:before{content:'\\E896'}.ms-Icon--Help:before{content:'\\E897'}.ms-Icon--Upload:before{content:'\\E898'}.ms-Icon--Emoji:before{content:'\\E899'}.ms-Icon--MailForward:before{content:'\\E89C'}.ms-Icon--ClosePane:before{content:'\\E89F'}.ms-Icon--OpenPane:before{content:'\\E8A0'}.ms-Icon--PreviewLink:before{content:'\\E8A1'}.ms-Icon--ZoomIn:before{content:'\\E8A3'}.ms-Icon--Bookmarks:before{content:'\\E8A4'}.ms-Icon--Document:before{content:'\\E8A5'}.ms-Icon--ProtectedDocument:before{content:'\\E8A6'}.ms-Icon--OpenInNewWindow:before{content:'\\E8A7'}.ms-Icon--MailFill:before{content:'\\E8A8'}.ms-Icon--ViewAll:before{content:'\\E8A9'}.ms-Icon--Switch:before{content:'\\E8AB'}.ms-Icon--Rename:before{content:'\\E8AC'}.ms-Icon--Folder:before{content:'\\E8B7'}.ms-Icon--Picture:before{content:'\\E8B9'}.ms-Icon--ShowResults:before{content:'\\E8BC'}.ms-Icon--Message:before{content:'\\E8BD'}.ms-Icon--CalendarDay:before{content:'\\E8BF'}.ms-Icon--CalendarWeek:before{content:'\\E8C0'}.ms-Icon--MailReplyAll:before{content:'\\E8C2'}.ms-Icon--Read:before{content:'\\E8C3'}.ms-Icon--PaymentCard:before{content:'\\E8C7'}.ms-Icon--Copy:before{content:'\\E8C8'}.ms-Icon--Important:before{content:'\\E8C9'}.ms-Icon--MailReply:before{content:'\\E8CA'}.ms-Icon--Sort:before{content:'\\E8CB'}.ms-Icon--GotoToday:before{content:'\\E8D1'}.ms-Icon--Font:before{content:'\\E8D2'}.ms-Icon--FontColor:before{content:'\\E8D3'}.ms-Icon--FolderFill:before{content:'\\E8D5'}.ms-Icon--Permissions:before{content:'\\E8D7'}.ms-Icon--DisableUpdates:before{content:'\\E8D8'}.ms-Icon--Unfavorite:before{content:'\\E8D9'}.ms-Icon--Italic:before{content:'\\E8DB'}.ms-Icon--Underline:before{content:'\\E8DC'}.ms-Icon--Bold:before{content:'\\E8DD'}.ms-Icon--MoveToFolder:before{content:'\\E8DE'}.ms-Icon--Dislike:before{content:'\\E8E0'}.ms-Icon--Like:before{content:'\\E8E1'}.ms-Icon--AlignRight:before{content:'\\E8E2'}.ms-Icon--AlignCenter:before{content:'\\E8E3'}.ms-Icon--AlignLeft:before{content:'\\E8E4'}.ms-Icon--OpenFile:before{content:'\\E8E5'}.ms-Icon--FontDecrease:before{content:'\\E8E7'}.ms-Icon--FontIncrease:before{content:'\\E8E8'}.ms-Icon--FontSize:before{content:'\\E8E9'}.ms-Icon--CellPhone:before{content:'\\E8EA'}.ms-Icon--Tag:before{content:'\\E8EC'}.ms-Icon--Library:before{content:'\\E8F1'}.ms-Icon--PostUpdate:before{content:'\\E8F3'}.ms-Icon--NewFolder:before{content:'\\E8F4'}.ms-Icon--CalendarReply:before{content:'\\E8F5'}.ms-Icon--UnsyncFolder:before{content:'\\E8F6'}.ms-Icon--SyncFolder:before{content:'\\E8F7'}.ms-Icon--BlockContact:before{content:'\\E8F8'}.ms-Icon--AddFriend:before{content:'\\E8FA'}.ms-Icon--BulletedList:before{content:'\\E8FD'}.ms-Icon--Preview:before{content:'\\E8FF'}.ms-Icon--DockLeft:before{content:'\\E90C'}.ms-Icon--DockRight:before{content:'\\E90D'}.ms-Icon--Repair:before{content:'\\E90F'}.ms-Icon--Accounts:before{content:'\\E910'}.ms-Icon--RadioBullet:before{content:'\\E915'}.ms-Icon--Stopwatch:before{content:'\\E916'}.ms-Icon--Clock:before{content:'\\E917'}.ms-Icon--WorldClock:before{content:'\\E918'}.ms-Icon--AlarmClock:before{content:'\\E919'}.ms-Icon--Hospital:before{content:'\\E91D'}.ms-Icon--Timer:before{content:'\\E91E'}.ms-Icon--FullCircleMask:before{content:'\\E91F'}.ms-Icon--LocationFill:before{content:'\\E920'}.ms-Icon--ChromeMinimize:before{content:'\\E921'}.ms-Icon--Annotation:before{content:'\\E924'}.ms-Icon--ChromeClose:before{content:'\\E8BB'}.ms-Icon--Accept:before{content:'\\E8FB'}.ms-Icon--Fingerprint:before{content:'\\E928'}.ms-Icon--Handwriting:before{content:'\\E929'}.ms-Icon--StackIndicator:before{content:'\\E7FF'}.ms-Icon--Completed:before{content:'\\E930'}.ms-Icon--Label:before{content:'\\E932'}.ms-Icon--FlickDown:before{content:'\\E935'}.ms-Icon--FlickUp:before{content:'\\E936'}.ms-Icon--FlickLeft:before{content:'\\E937'}.ms-Icon--FlickRight:before{content:'\\E938'}.ms-Icon--MusicInCollection:before{content:'\\E940'}.ms-Icon--OneDrive:before{content:'\\E941'}.ms-Icon--CompassNW:before{content:'\\E942'}.ms-Icon--Code:before{content:'\\E943'}.ms-Icon--LightningBolt:before{content:'\\E945'}.ms-Icon--Info:before{content:'\\E946'}.ms-Icon--CalculatorAddition:before{content:'\\E948'}.ms-Icon--CalculatorSubtract:before{content:'\\E949'}.ms-Icon--PrintfaxPrinterFile:before{content:'\\E956'}.ms-Icon--Health:before{content:'\\E95E'}.ms-Icon--ChevronUpSmall:before{content:'\\E96D'}.ms-Icon--ChevronDownSmall:before{content:'\\E96E'}.ms-Icon--ChevronLeftSmall:before{content:'\\E96F'}.ms-Icon--ChevronRightSmall:before{content:'\\E970'}.ms-Icon--ChevronUpMed:before{content:'\\E971'}.ms-Icon--ChevronDownMed:before{content:'\\E972'}.ms-Icon--ChevronLeftMed:before{content:'\\E973'}.ms-Icon--ChevronRightMed:before{content:'\\E974'}.ms-Icon--Dictionary:before{content:'\\E82D'}.ms-Icon--ChromeBack:before{content:'\\E830'}.ms-Icon--PC1:before{content:'\\E977'}.ms-Icon--PresenceChickletVideo:before{content:'\\E979'}.ms-Icon--Reply:before{content:'\\E97A'}.ms-Icon--DoubleChevronLeftMed:before{content:'\\E991'}.ms-Icon--Volume0:before{content:'\\E992'}.ms-Icon--Volume1:before{content:'\\E993'}.ms-Icon--Volume2:before{content:'\\E994'}.ms-Icon--Volume3:before{content:'\\E995'}.ms-Icon--CaretHollow:before{content:'\\E817'}.ms-Icon--CaretSolid:before{content:'\\E818'}.ms-Icon--FolderOpen:before{content:'\\E838'}.ms-Icon--Pinned:before{content:'\\E840'}.ms-Icon--PinnedFill:before{content:'\\E842'}.ms-Icon--Chart:before{content:'\\E999'}.ms-Icon--BidiLtr:before{content:'\\E9AA'}.ms-Icon--BidiRtl:before{content:'\\E9AB'}.ms-Icon--RevToggleKey:before{content:'\\E845'}.ms-Icon--RightDoubleQuote:before{content:'\\E9B1'}.ms-Icon--Sunny:before{content:'\\E9BD'}.ms-Icon--CloudWeather:before{content:'\\E9BE'}.ms-Icon--Cloudy:before{content:'\\E9BF'}.ms-Icon--PartlyCloudyDay:before{content:'\\E9C0'}.ms-Icon--PartlyCloudyNight:before{content:'\\E9C1'}.ms-Icon--ClearNight:before{content:'\\E9C2'}.ms-Icon--RainShowersDay:before{content:'\\E9C3'}.ms-Icon--Rain:before{content:'\\E9C4'}.ms-Icon--Thunderstorms:before{content:'\\E9C6'}.ms-Icon--RainSnow:before{content:'\\E9C7'}.ms-Icon--BlowingSnow:before{content:'\\E9C9'}.ms-Icon--Frigid:before{content:'\\E9CA'}.ms-Icon--Fog:before{content:'\\E9CB'}.ms-Icon--Squalls:before{content:'\\E9CC'}.ms-Icon--Duststorm:before{content:'\\E9CD'}.ms-Icon--Precipitation:before{content:'\\E9CF'}.ms-Icon--Ringer:before{content:'\\EA8F'}.ms-Icon--PDF:before{content:'\\EA90'}.ms-Icon--SortLines:before{content:'\\E9D0'}.ms-Icon--Ribbon:before{content:'\\E9D1'}.ms-Icon--CheckList:before{content:'\\E9D5'}.ms-Icon--Generate:before{content:'\\E9DA'}.ms-Icon--Equalizer:before{content:'\\E9E9'}.ms-Icon--BarChartHorizontal:before{content:'\\E9EB'}.ms-Icon--Freezing:before{content:'\\E9EF'}.ms-Icon--SnowShowerDay:before{content:'\\E9FD'}.ms-Icon--HailDay:before{content:'\\EA00'}.ms-Icon--WorkFlow:before{content:'\\EA01'}.ms-Icon--StoreLogoMed:before{content:'\\EA04'}.ms-Icon--RainShowersNight:before{content:'\\EA0F'}.ms-Icon--SnowShowerNight:before{content:'\\EA11'}.ms-Icon--HailNight:before{content:'\\EA13'}.ms-Icon--Info2:before{content:'\\EA1F'}.ms-Icon--StoreLogo:before{content:'\\EA96'}.ms-Icon--MultiSelectMirrored:before{content:'\\EA98'}.ms-Icon--Broom:before{content:'\\EA99'}.ms-Icon--MusicInCollectionFill:before{content:'\\EA36'}.ms-Icon--List:before{content:'\\EA37'}.ms-Icon--Asterisk:before{content:'\\EA38'}.ms-Icon--ErrorBadge:before{content:'\\EA39'}.ms-Icon--CircleRing:before{content:'\\EA3A'}.ms-Icon--CircleFill:before{content:'\\EA3B'}.ms-Icon--BookmarksMirrored:before{content:'\\EA41'}.ms-Icon--BulletedListMirrored:before{content:'\\EA42'}.ms-Icon--CaretHollowMirrored:before{content:'\\EA45'}.ms-Icon--CaretSolidMirrored:before{content:'\\EA46'}.ms-Icon--ChromeBackMirrored:before{content:'\\EA47'}.ms-Icon--ClosePaneMirrored:before{content:'\\EA49'}.ms-Icon--DockLeftMirrored:before{content:'\\EA4C'}.ms-Icon--DoubleChevronLeftMedMirrored:before{content:'\\EA4D'}.ms-Icon--HelpMirrored:before{content:'\\EA51'}.ms-Icon--ListMirrored:before{content:'\\EA55'}.ms-Icon--MailForwardMirrored:before{content:'\\EA56'}.ms-Icon--MailReplyMirrored:before{content:'\\EA57'}.ms-Icon--MailReplyAllMirrored:before{content:'\\EA58'}.ms-Icon--OpenPaneMirrored:before{content:'\\EA5B'}.ms-Icon--SendMirrored:before{content:'\\EA63'}.ms-Icon--ShowResultsMirrored:before{content:'\\EA65'}.ms-Icon--ThumbnailViewMirrored:before{content:'\\EA67'}.ms-Icon--Lightbulb:before{content:'\\EA80'}.ms-Icon--StatusTriangle:before{content:'\\EA82'}.ms-Icon--VolumeDisabled:before{content:'\\EA85'}.ms-Icon--Puzzle:before{content:'\\EA86'}.ms-Icon--EmojiNeutral:before{content:'\\EA87'}.ms-Icon--EmojiDisappointed:before{content:'\\EA88'}.ms-Icon--HomeSolid:before{content:'\\EA8A'}.ms-Icon--Cocktails:before{content:'\\EA9D'}.ms-Icon--Articles:before{content:'\\EAC1'}.ms-Icon--Cycling:before{content:'\\EAC7'}.ms-Icon--DietPlanNotebook:before{content:'\\EAC8'}.ms-Icon--Pill:before{content:'\\EACB'}.ms-Icon--Running:before{content:'\\EADA'}.ms-Icon--Weights:before{content:'\\EADB'}.ms-Icon--BarChart4:before{content:'\\EAE7'}.ms-Icon--CirclePlus:before{content:'\\EAEE'}.ms-Icon--Coffee:before{content:'\\EAEF'}.ms-Icon--Cotton:before{content:'\\EAF3'}.ms-Icon--Market:before{content:'\\EAFC'}.ms-Icon--Money:before{content:'\\EAFD'}.ms-Icon--PieDouble:before{content:'\\EB04'}.ms-Icon--RemoveFilter:before{content:'\\EB08'}.ms-Icon--StockDown:before{content:'\\EB0F'}.ms-Icon--StockUp:before{content:'\\EB11'}.ms-Icon--Cricket:before{content:'\\EB1E'}.ms-Icon--Golf:before{content:'\\EB1F'}.ms-Icon--Baseball:before{content:'\\EB20'}.ms-Icon--Soccer:before{content:'\\EB21'}.ms-Icon--MoreSports:before{content:'\\EB22'}.ms-Icon--AutoRacing:before{content:'\\EB24'}.ms-Icon--CollegeHoops:before{content:'\\EB25'}.ms-Icon--CollegeFootball:before{content:'\\EB26'}.ms-Icon--ProFootball:before{content:'\\EB27'}.ms-Icon--ProHockey:before{content:'\\EB28'}.ms-Icon--Rugby:before{content:'\\EB2D'}.ms-Icon--Tennis:before{content:'\\EB33'}.ms-Icon--Arrivals:before{content:'\\EB34'}.ms-Icon--Design:before{content:'\\EB3C'}.ms-Icon--Website:before{content:'\\EB41'}.ms-Icon--Drop:before{content:'\\EB42'}.ms-Icon--Snow:before{content:'\\EB46'}.ms-Icon--BusSolid:before{content:'\\EB47'}.ms-Icon--FerrySolid:before{content:'\\EB48'}.ms-Icon--TrainSolid:before{content:'\\EB4D'}.ms-Icon--Heart:before{content:'\\EB51'}.ms-Icon--HeartFill:before{content:'\\EB52'}.ms-Icon--Ticket:before{content:'\\EB54'}.ms-Icon--AzureLogo:before{content:'\\EB6A'}.ms-Icon--BingLogo:before{content:'\\EB6B'}.ms-Icon--MSNLogo:before{content:'\\EB6C'}.ms-Icon--OutlookLogo:before{content:'\\EB6D'}.ms-Icon--OfficeLogo:before{content:'\\EB6E'}.ms-Icon--SkypeLogo:before{content:'\\EB6F'}.ms-Icon--Door:before{content:'\\EB75'}.ms-Icon--EditMirrored:before{content:'\\EB7E'}.ms-Icon--GiftCard:before{content:'\\EB8E'}.ms-Icon--DoubleBookmark:before{content:'\\EB8F'}.ms-Icon--StatusErrorFull:before{content:'\\EB90'}.ms-Icon--Certificate:before{content:'\\EB95'}.ms-Icon--Photo2:before{content:'\\EB9F'}.ms-Icon--CloudDownload:before{content:'\\EBD3'}.ms-Icon--WindDirection:before{content:'\\EBE6'}.ms-Icon--Family:before{content:'\\EBDA'}.ms-Icon--CSS:before{content:'\\EBEF'}.ms-Icon--JS:before{content:'\\EBF0'}.ms-Icon--ReminderGroup:before{content:'\\EBF8'}.ms-Icon--Section:before{content:'\\EC0C'}.ms-Icon--OneNoteLogo:before{content:'\\EC0D'}.ms-Icon--ToggleFilled:before{content:'\\EC11'}.ms-Icon--ToggleBorder:before{content:'\\EC12'}.ms-Icon--SliderThumb:before{content:'\\EC13'}.ms-Icon--ToggleThumb:before{content:'\\EC14'}.ms-Icon--Documentation:before{content:'\\EC17'}.ms-Icon--Badge:before{content:'\\EC1B'}.ms-Icon--Giftbox:before{content:'\\EC1F'}.ms-Icon--ExcelLogo:before{content:'\\EC28'}.ms-Icon--WordLogo:before{content:'\\EC29'}.ms-Icon--PowerPointLogo:before{content:'\\EC2A'}.ms-Icon--Cafe:before{content:'\\EC32'}.ms-Icon--SpeedHigh:before{content:'\\EC4A'}.ms-Icon--MusicNote:before{content:'\\EC4F'}.ms-Icon--EdgeLogo:before{content:'\\EC60'}.ms-Icon--CompletedSolid:before{content:'\\EC61'}.ms-Icon--AlbumRemove:before{content:'\\EC62'}.ms-Icon--MessageFill:before{content:'\\EC70'}.ms-Icon--TabletSelected:before{content:'\\EC74'}.ms-Icon--MobileSelected:before{content:'\\EC75'}.ms-Icon--LaptopSelected:before{content:'\\EC76'}.ms-Icon--TVMonitorSelected:before{content:'\\EC77'}.ms-Icon--DeveloperTools:before{content:'\\EC7A'}.ms-Icon--InsertTextBox:before{content:'\\EC7D'}.ms-Icon--LowerBrightness:before{content:'\\EC8A'}.ms-Icon--CloudUpload:before{content:'\\EC8E'}.ms-Icon--DateTime:before{content:'\\EC92'}.ms-Icon--Event:before{content:'\\ECA3'}.ms-Icon--Cake:before{content:'\\ECA4'}.ms-Icon--Tiles:before{content:'\\ECA5'}.ms-Icon--Org:before{content:'\\ECA6'}.ms-Icon--PartyLeader:before{content:'\\ECA7'}.ms-Icon--DRM:before{content:'\\ECA8'}.ms-Icon--CloudAdd:before{content:'\\ECA9'}.ms-Icon--AppIconDefault:before{content:'\\ECAA'}.ms-Icon--Photo2Add:before{content:'\\ECAB'}.ms-Icon--Photo2Remove:before{content:'\\ECAC'}.ms-Icon--POI:before{content:'\\ECAF'}.ms-Icon--FacebookLogo:before{content:'\\ECB3'}.ms-Icon--AddTo:before{content:'\\ECC8'}.ms-Icon--RadioBtnOn:before{content:'\\ECCB'}.ms-Icon--Embed:before{content:'\\ECCE'}.ms-Icon--VideoSolid:before{content:'\\EA0C'}.ms-Icon--Teamwork:before{content:'\\EA12'}.ms-Icon--PeopleAdd:before{content:'\\EA15'}.ms-Icon--Glasses:before{content:'\\EA16'}.ms-Icon--DateTime2:before{content:'\\EA17'}.ms-Icon--Shield:before{content:'\\EA18'}.ms-Icon--Header1:before{content:'\\EA19'}.ms-Icon--PageAdd:before{content:'\\EA1A'}.ms-Icon--NumberedList:before{content:'\\EA1C'}.ms-Icon--PowerBILogo:before{content:'\\EA1E'}.ms-Icon--Product:before{content:'\\ECDC'}.ms-Icon--Blocked2:before{content:'\\ECE4'}.ms-Icon--FangBody:before{content:'\\ECEB'}.ms-Icon--Glimmer:before{content:'\\ECF4'}.ms-Icon--ChatInviteFriend:before{content:'\\ECFE'}.ms-Icon--SharepointLogo:before{content:'\\ED18'}.ms-Icon--YammerLogo:before{content:'\\ED19'}.ms-Icon--ReturnToSession:before{content:'\\ED24'}.ms-Icon--OpenFolderHorizontal:before{content:'\\ED25'}.ms-Icon--CalendarMirrored:before{content:'\\ED28'}.ms-Icon--SwayLogo:before{content:'\\ED29'}.ms-Icon--OutOfOffice:before{content:'\\ED34'}.ms-Icon--Trophy:before{content:'\\ED3F'}.ms-Icon--ReopenPages:before{content:'\\ED50'}.ms-Icon--AADLogo:before{content:'\\ED68'}.ms-Icon--AccessLogo:before{content:'\\ED69'}.ms-Icon--AdminALogo:before{content:'\\ED6A'}.ms-Icon--AdminCLogo:before{content:'\\ED6B'}.ms-Icon--AdminDLogo:before{content:'\\ED6C'}.ms-Icon--AdminELogo:before{content:'\\ED6D'}.ms-Icon--AdminLLogo:before{content:'\\ED6E'}.ms-Icon--AdminMLogo:before{content:'\\ED6F'}.ms-Icon--AdminOLogo:before{content:'\\ED70'}.ms-Icon--AdminPLogo:before{content:'\\ED71'}.ms-Icon--AdminSLogo:before{content:'\\ED72'}.ms-Icon--AdminYLogo:before{content:'\\ED73'}.ms-Icon--AlchemyLogo:before{content:'\\ED74'}.ms-Icon--BoxLogo:before{content:'\\ED75'}.ms-Icon--DelveLogo:before{content:'\\ED76'}.ms-Icon--DropboxLogo:before{content:'\\ED77'}.ms-Icon--ExchangeLogo:before{content:'\\ED78'}.ms-Icon--LyncLogo:before{content:'\\ED79'}.ms-Icon--OfficeVideoLogo:before{content:'\\ED7A'}.ms-Icon--ParatureLogo:before{content:'\\ED7B'}.ms-Icon--SocialListeningLogo:before{content:'\\ED7C'}.ms-Icon--VisioLogo:before{content:'\\ED7D'}.ms-Icon--Balloons:before{content:'\\ED7E'}.ms-Icon--Cat:before{content:'\\ED7F'}.ms-Icon--MailAlert:before{content:'\\ED80'}.ms-Icon--MailCheck:before{content:'\\ED81'}.ms-Icon--MailLowImportance:before{content:'\\ED82'}.ms-Icon--MailPause:before{content:'\\ED83'}.ms-Icon--MailRepeat:before{content:'\\ED84'}.ms-Icon--SecurityGroup:before{content:'\\ED85'}.ms-Icon--Table:before{content:'\\ED86'}.ms-Icon--VoicemailForward:before{content:'\\ED87'}.ms-Icon--VoicemailReply:before{content:'\\ED88'}.ms-Icon--Waffle:before{content:'\\ED89'}.ms-Icon--RemoveEvent:before{content:'\\ED8A'}.ms-Icon--EventInfo:before{content:'\\ED8B'}.ms-Icon--ForwardEvent:before{content:'\\ED8C'}.ms-Icon--WipePhone:before{content:'\\ED8D'}.ms-Icon--AddOnlineMeeting:before{content:'\\ED8E'}.ms-Icon--JoinOnlineMeeting:before{content:'\\ED8F'}.ms-Icon--RemoveLink:before{content:'\\ED90'}.ms-Icon--PeopleBlock:before{content:'\\ED91'}.ms-Icon--PeopleRepeat:before{content:'\\ED92'}.ms-Icon--PeopleAlert:before{content:'\\ED93'}.ms-Icon--PeoplePause:before{content:'\\ED94'}.ms-Icon--TransferCall:before{content:'\\ED95'}.ms-Icon--AddPhone:before{content:'\\ED96'}.ms-Icon--UnknownCall:before{content:'\\ED97'}.ms-Icon--NoteReply:before{content:'\\ED98'}.ms-Icon--NoteForward:before{content:'\\ED99'}.ms-Icon--NotePinned:before{content:'\\ED9A'}.ms-Icon--RemoveOccurrence:before{content:'\\ED9B'}.ms-Icon--Timeline:before{content:'\\ED9C'}.ms-Icon--EditNote:before{content:'\\ED9D'}.ms-Icon--CircleHalfFull:before{content:'\\ED9E'}.ms-Icon--Room:before{content:'\\ED9F'}.ms-Icon--Unsubscribe:before{content:'\\EDA0'}.ms-Icon--Subscribe:before{content:'\\EDA1'}.ms-Icon--RecurringTask:before{content:'\\EDB2'}.ms-Icon--TaskManager:before{content:'\\EDB7'}.ms-Icon--TaskManagerMirrored:before{content:'\\EDB8'}.ms-Icon--Combine:before{content:'\\EDBB'}.ms-Icon--Split:before{content:'\\EDBC'}.ms-Icon--DoubleChevronUp:before{content:'\\EDBD'}.ms-Icon--DoubleChevronLeft:before{content:'\\EDBE'}.ms-Icon--DoubleChevronRight:before{content:'\\EDBF'}.ms-Icon--Ascending:before{content:'\\EDC0'}.ms-Icon--Descending:before{content:'\\EDC1'}.ms-Icon--TextBox:before{content:'\\EDC2'}.ms-Icon--TextField:before{content:'\\EDC3'}.ms-Icon--NumberField:before{content:'\\EDC4'}.ms-Icon--Dropdown:before{content:'\\EDC5'}.ms-Icon--BookingsLogo:before{content:'\\EDC7'}.ms-Icon--ClassNotebookLogo:before{content:'\\EDC8'}.ms-Icon--CollabsDBLogo:before{content:'\\EDC9'}.ms-Icon--DelveAnalyticsLogo:before{content:'\\EDCA'}.ms-Icon--DocsLogo:before{content:'\\EDCB'}.ms-Icon--Dynamics365Logo:before,.ms-Icon--DynamicsCRMLogo:before{content:'\\EDCC'}.ms-Icon--DynamicSMBLogo:before{content:'\\EDCD'}.ms-Icon--OfficeAssistantLogo:before{content:'\\EDCE'}.ms-Icon--OfficeStoreLogo:before{content:'\\EDCF'}.ms-Icon--OneNoteEduLogo:before{content:'\\EDD0'}.ms-Icon--Planner:before{content:'\\EDD1'}.ms-Icon--PowerApps:before{content:'\\EDD2'}.ms-Icon--Suitcase:before{content:'\\EDD3'}.ms-Icon--ProjectLogo:before{content:'\\EDD4'}.ms-Icon--CaretLeft8:before{content:'\\EDD5'}.ms-Icon--CaretRight8:before{content:'\\EDD6'}.ms-Icon--CaretUp8:before{content:'\\EDD7'}.ms-Icon--CaretDown8:before{content:'\\EDD8'}.ms-Icon--CaretLeftSolid8:before{content:'\\EDD9'}.ms-Icon--CaretRightSolid8:before,.ms-Icon--CarotRightSolid8:before{content:'\\EDDA'}.ms-Icon--CaretUpSolid8:before{content:'\\EDDB'}.ms-Icon--CaretDownSolid8:before{content:'\\EDDC'}.ms-Icon--ClearFormatting:before{content:'\\EDDD'}.ms-Icon--Superscript:before{content:'\\EDDE'}.ms-Icon--Subscript:before{content:'\\EDDF'}.ms-Icon--Strikethrough:before{content:'\\EDE0'}.ms-Icon--SingleBookmark:before{content:'\\EDFF'}.ms-Icon--DoubleChevronDown:before{content:'\\EE04'}.ms-Icon--ReplyAll:before{content:'\\EE0A'}.ms-Icon--GoogleDriveLogo:before{content:'\\EE0B'}.ms-Icon--Questionnaire:before{content:'\\EE19'}.ms-Icon--ReplyMirrored:before{content:'\\EE35'}.ms-Icon--ReplyAllMirrored:before{content:'\\EE36'}.ms-Icon--AddGroup:before{content:'\\EE3D'}.ms-Icon--QuestionnaireMirrored:before{content:'\\EE4B'}.ms-Icon--TemporaryUser:before{content:'\\EE58'}.ms-Icon--GroupedDescending:before{content:'\\EE66'}.ms-Icon--GroupedAscending:before{content:'\\EE67'}.ms-Icon--SortUp:before{content:'\\EE68'}.ms-Icon--SortDown:before{content:'\\EE69'}.ms-Icon--AwayStatus:before{content:'\\EE6A'}.ms-Icon--SyncToPC:before{content:'\\EE6E'}.ms-Icon--AustralianRules:before{content:'\\EE70'}.ms-Icon--DateTimeMirrored:before{content:'\\EE93'}.ms-Icon--DoubleChevronUp12:before{content:'\\EE96'}.ms-Icon--DoubleChevronDown12:before{content:'\\EE97'}.ms-Icon--DoubleChevronLeft12:before{content:'\\EE98'}.ms-Icon--DoubleChevronRight12:before{content:'\\EE99'}.ms-Icon--CalendarAgenda:before{content:'\\EE9A'}.ms-Icon--AddEvent:before{content:'\\EEB5'}.ms-Icon--AssetLibrary:before{content:'\\EEB6'}.ms-Icon--DataConnectionLibrary:before{content:'\\EEB7'}.ms-Icon--DocLibrary:before{content:'\\EEB8'}.ms-Icon--FormLibrary:before{content:'\\EEB9'}.ms-Icon--FormLibraryMirrored:before{content:'\\EEBA'}.ms-Icon--ReportLibrary:before{content:'\\EEBB'}.ms-Icon--ReportLibraryMirrored:before{content:'\\EEBC'}.ms-Icon--ContactCard:before{content:'\\EEBD'}.ms-Icon--CustomList:before{content:'\\EEBE'}.ms-Icon--CustomListMirrored:before{content:'\\EEBF'}.ms-Icon--IssueTracking:before{content:'\\EEC0'}.ms-Icon--IssueTrackingMirrored:before{content:'\\EEC1'}.ms-Icon--PictureLibrary:before{content:'\\EEC2'}.ms-Icon--AppForOfficeLogo:before{content:'\\EEC7'}.ms-Icon--OfflineOneDriveParachute:before{content:'\\EEC8'}.ms-Icon--OfflineOneDriveParachuteDisabled:before{content:'\\EEC9'}.ms-Icon--LargeGrid:before{content:'\\EECB'}.ms-Icon--TriangleSolidUp12:before{content:'\\EECC'}.ms-Icon--TriangleSolidDown12:before{content:'\\EECD'}.ms-Icon--TriangleSolidLeft12:before{content:'\\EECE'}.ms-Icon--TriangleSolidRight12:before{content:'\\EECF'}.ms-Icon--TriangleUp12:before{content:'\\EED0'}.ms-Icon--TriangleDown12:before{content:'\\EED1'}.ms-Icon--TriangleLeft12:before{content:'\\EED2'}.ms-Icon--TriangleRight12:before{content:'\\EED3'}.ms-Icon--ArrowUpRight8:before{content:'\\EED4'}.ms-Icon--ArrowDownRight8:before{content:'\\EED5'}.ms-Icon--DocumentSet:before{content:'\\EED6'}.ms-Icon--DelveAnalytics:before{content:'\\EEEE'}.ms-Icon--ArrowUpRightMirrored8:before{content:'\\EEEF'}.ms-Icon--ArrowDownRightMirrored8:before{content:'\\EEF0'}.ms-Icon--OneDriveAdd:before{content:'\\EF32'}.ms-Icon--Header2:before{content:'\\EF36'}.ms-Icon--Header3:before{content:'\\EF37'}.ms-Icon--Header4:before{content:'\\EF38'}.ms-Icon--MarketDown:before{content:'\\EF42'}.ms-Icon--CalendarWorkWeek:before{content:'\\EF51'}.ms-Icon--SidePanel:before{content:'\\EF52'}.ms-Icon--GlobeFavorite:before{content:'\\EF53'}.ms-Icon--CaretTopLeftSolid8:before{content:'\\EF54'}.ms-Icon--CaretTopRightSolid8:before{content:'\\EF55'}.ms-Icon--ViewAll2:before{content:'\\EF56'}.ms-Icon--DocumentReply:before{content:'\\EF57'}.ms-Icon--PlayerSettings:before{content:'\\EF58'}.ms-Icon--ReceiptForward:before{content:'\\EF59'}.ms-Icon--ReceiptReply:before{content:'\\EF5A'}.ms-Icon--ReceiptCheck:before{content:'\\EF5B'}.ms-Icon--Fax:before{content:'\\EF5C'}.ms-Icon--RecurringEvent:before{content:'\\EF5D'}.ms-Icon--ReplyAlt:before{content:'\\EF5E'}.ms-Icon--ReplyAllAlt:before{content:'\\EF5F'}.ms-Icon--EditStyle:before{content:'\\EF60'}.ms-Icon--EditMail:before{content:'\\EF61'}.ms-Icon--Lifesaver:before{content:'\\EF62'}.ms-Icon--LifesaverLock:before{content:'\\EF63'}.ms-Icon--InboxCheck:before{content:'\\EF64'}.ms-Icon--FolderSearch:before{content:'\\EF65'}.ms-Icon--CollapseMenu:before{content:'\\EF66'}.ms-Icon--ExpandMenu:before{content:'\\EF67'}.ms-Icon--Boards:before{content:'\\EF68'}.ms-Icon--SunAdd:before{content:'\\EF69'}.ms-Icon--SunQuestionMark:before{content:'\\EF6A'}.ms-Icon--LandscapeOrientation:before{content:'\\EF6B'}.ms-Icon--DocumentSearch:before{content:'\\EF6C'}.ms-Icon--PublicCalendar:before{content:'\\EF6D'}.ms-Icon--PublicContactCard:before{content:'\\EF6E'}.ms-Icon--PublicEmail:before{content:'\\EF6F'}.ms-Icon--PublicFolder:before{content:'\\EF70'}.ms-Icon--WordDocument:before{content:'\\EF71'}.ms-Icon--PowerPointDocument:before{content:'\\EF72'}.ms-Icon--ExcelDocument:before{content:'\\EF73'}.ms-Icon--GroupedList:before{content:'\\EF74'}.ms-Icon--ClassroomLogo:before{content:'\\EF75'}.ms-Icon--Sections:before{content:'\\EF76'}.ms-Icon--EditPhoto:before{content:'\\EF77'}.ms-Icon--Starburst:before{content:'\\EF78'}.ms-Icon--ShareiOS:before{content:'\\EF79'}.ms-Icon--AirTickets:before{content:'\\EF7A'}.ms-Icon--PencilReply:before{content:'\\EF7B'}.ms-Icon--Tiles2:before{content:'\\EF7C'}.ms-Icon--SkypeCircleCheck:before{content:'\\EF7D'}.ms-Icon--SkypeCircleClock:before{content:'\\EF7E'}.ms-Icon--SkypeCircleMinus:before{content:'\\EF7F'}.ms-Icon--SkypeCheck:before{content:'\\EF80'}.ms-Icon--SkypeClock:before{content:'\\EF81'}.ms-Icon--SkypeMinus:before{content:'\\EF82'}.ms-Icon--SkypeMessage:before{content:'\\EF83'}.ms-Icon--ClosedCaption:before{content:'\\EF84'}.ms-Icon--ATPLogo:before{content:'\\EF85'}.ms-Icon--OfficeFormLogo:before{content:'\\EF86'}.ms-Icon--RecycleBin:before{content:'\\EF87'}.ms-Icon--EmptyRecycleBin:before{content:'\\EF88'}.ms-Icon--Hide2:before{content:'\\EF89'}.ms-Icon--iOSAppStoreLogo:before{content:'\\EF8A'}.ms-Icon--AndroidLogo:before{content:'\\EF8B'}.ms-Icon--Breadcrumb:before{content:'\\EF8C'}.ms-Icon--ClearFilter:before{content:'\\EF8F'}.ms-Icon--Flow:before{content:'\\EF90'}.ms-Icon--PageCheckedOut:before{content:'\\F02C'}.ms-Icon--SetAction:before{content:'\\F071'}.ms-Icon--PowerAppsLogo:before{content:'\\F091'}.ms-Icon--PowerApps2Logo:before{content:'\\F092'}.ms-Icon--FabricAssetLibrary:before{content:'\\F09C'}.ms-Icon--FabricDataConnectionLibrary:before{content:'\\F09D'}.ms-Icon--FabricDocLibrary:before{content:'\\F09E'}.ms-Icon--FabricFormLibrary:before{content:'\\F09F'}.ms-Icon--FabricFormLibraryMirrored:before{content:'\\F0A0'}.ms-Icon--FabricReportLibrary:before{content:'\\F0A1'}.ms-Icon--FabricReportLibraryMirrored:before{content:'\\F0A2'}.ms-Icon--FabricPublicFolder:before{content:'\\F0A3'}.ms-Icon--FabricFolderSearch:before{content:'\\F0A4'}.ms-Icon--FabricMovetoFolder:before{content:'\\F0A5'}.ms-Icon--FabricUnsyncFolder:before{content:'\\F0A6'}.ms-Icon--FabricSyncFolder:before{content:'\\F0A7'}.ms-Icon--FabricOpenFolderHorizontal:before{content:'\\F0A8'}.ms-Icon--FabricFolder:before{content:'\\F0A9'}.ms-Icon--FabricFolderFill:before{content:'\\F0AA'}.ms-Icon--FabricNewFolder:before{content:'\\F0AB'}.ms-Icon--FabricPictureLibrary:before{content:'\\F0AC'}.ms-Icon--AddFavorite:before{content:'\\F0C8'}.ms-Icon--AddFavoriteFill:before{content:'\\F0C9'}.ms-Icon--BufferTimeBefore:before{content:'\\F0CF'}.ms-Icon--BufferTimeAfter:before{content:'\\F0D0'}.ms-Icon--BufferTimeBoth:before{content:'\\F0D1'}.ms-Icon--PageCheckedin:before{content:'\\F104'}.ms-Icon--CaretBottomLeftSolid8:before{content:'\\F121'}.ms-Icon--CaretBottomRightSolid8:before{content:'\\F122'}.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1.png)}.ms-BrandIcon--Icon16{background-size:100% 100%;width:16px;height:16px}.ms-BrandIcon--Icon48{background-size:100% 100%;width:48px;height:48px}.ms-BrandIcon--Icon96{background-size:100% 100%;width:96px;height:96px}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min-resolution:144dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1_5.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1_5.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1_5.png)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x2.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x2.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x2.png)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min-resolution:288dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x3.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x3.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x3.png)}}.ms-u-slideRightIn10{animation-name:fadeIn,slideRightIn10;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn10{0%{transform:translate3d(-10px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn20{animation-name:fadeIn,slideRightIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn20{0%{transform:translate3d(-20px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn40{animation-name:fadeIn,slideRightIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn40{0%{transform:translate3d(-40px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn10{animation-name:fadeIn,slideLeftIn10;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn10{0%{transform:translate3d(10px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn20{animation-name:fadeIn,slideLeftIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn20{0%{transform:translate3d(20px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn40{animation-name:fadeIn,slideLeftIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn40{0%{transform:translate3d(40px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn400{animation-name:fadeIn,slideRightIn400;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn400{0%{transform:translate3d(-400px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn400{animation-name:fadeIn,slideLeft400;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeft400{0%{transform:translate3d(400px,0,0)}to{transform:translateZ(0)}}.ms-u-slideUpIn20{animation-name:fadeIn,slideUpIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideUpIn20{0%{transform:translate3d(0,20px,0)}to{transform:translateZ(0)}}.ms-u-slideUpIn10{animation-name:fadeIn,slideUpIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpIn10{0%{transform:translate3d(0,10px,0)}to{transform:translateZ(0)}}.ms-u-slideDownIn20{animation-name:fadeIn,slideDownIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideDownIn20{0%{transform:translate3d(0,-20px,0)}to{transform:translateZ(0)}}.ms-u-slideDownIn10{animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownIn10{0%{transform:translate3d(0,-10px,0)}to{transform:translateZ(0)}}.ms-u-slideRightOut40{animation-name:fadeOut,slideRightOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideRightOut40{0%{transform:translateZ(0)}to{transform:translate3d(40px,0,0)}}.ms-u-slideLeftOut40{animation-name:fadeOut,slideLeftOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideLeftOut40{0%{transform:translateZ(0)}to{transform:translate3d(-40px,0,0)}}.ms-u-slideRightOut400{animation-name:fadeOut,slideRightOut400;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideRightOut400{0%{transform:translateZ(0)}to{transform:translate3d(400px,0,0)}}.ms-u-slideLeftOut400{animation-name:fadeOut,slideLeftOut400;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideLeftOut400{0%{transform:translateZ(0)}to{transform:translate3d(-400px,0,0)}}.ms-u-slideUpOut20{animation-name:fadeOut,slideUpOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpOut20{0%{transform:translateZ(0)}to{transform:translate3d(0,-20px,0)}}.ms-u-slideUpOut10{animation-name:fadeOut,slideUpOut10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpOut10{0%{transform:translateZ(0)}to{transform:translate3d(0,-10px,0)}}.ms-u-slideDownOut20{animation-name:fadeOut,slideDownOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownOut20{0%{transform:translateZ(0)}to{transform:translate3d(0,20px,0)}}.ms-u-slideDownOut10{animation-name:fadeOut,slideDownOut10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownOut10{0%{transform:translateZ(0)}to{transform:translate3d(0,10px,0)}}.ms-u-scaleUpIn100{animation-name:fadeIn,scaleUp100;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleUp100{0%{transform:scale3d(.98,.98,1)}to{transform:scaleX(1)}}.ms-u-scaleDownIn100{animation-name:fadeIn,scaleDown100;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleDown100{0%{transform:scale3d(1.03,1.03,1)}to{transform:scaleX(1)}}.ms-u-scaleUpOut103{animation-name:fadeOut,scaleUp103;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes scaleUp103{0%{transform:scaleX(1)}to{transform:scale3d(1.03,1.03,1)}}.ms-u-scaleDownOut98{animation-name:fadeOut,scaleDown98;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes scaleDown98{0%{transform:scaleX(1)}to{transform:scale3d(.98,.98,1)}}.ms-u-fadeIn100,.ms-u-fadeIn400{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both}.ms-u-fadeIn100{animation-duration:.167s}.ms-u-fadeIn200{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both;animation-duration:.267s}.ms-u-fadeIn500{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both;animation-duration:.467s}@keyframes fadeIn{0%{opacity:0;animation-timing-function:cubic-bezier(.1,.25,.75,.9)}to{opacity:1}}.ms-u-fadeOut100,.ms-u-fadeOut400{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both}.ms-u-fadeOut100{animation-duration:.1s}.ms-u-fadeOut200{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both;animation-duration:.167s}.ms-u-fadeOut500{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both;animation-duration:.467s}@keyframes fadeOut{0%{opacity:1;animation-timing-function:cubic-bezier(.1,.25,.75,.9)}to{opacity:0}}.ms-u-rotate90deg{animation-name:rotate90;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;-ms-animation-duration:.1s;-o-animation-duration:.1s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes rotate90{0%{transform:rotate(0deg)}to{transform:rotate(90deg)}}.ms-u-rotateN90deg{animation-name:rotateN90;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;-ms-animation-duration:.1s;-o-animation-duration:.1s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes rotateN90{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}.ms-u-expandCollapse400{transition:height .367s cubic-bezier(.1,.25,.75,.9)}.ms-u-expandCollapse200{transition:height .167s cubic-bezier(.1,.25,.75,.9)}.ms-u-expandCollapse100{transition:height .1s cubic-bezier(.1,.25,.75,.9)}.ms-u-delay100{animation-delay:.167s}.ms-u-delay200{animation-delay:.267s}@media (max-width:479px){.ms-u-hiddenLgDown,.ms-u-hiddenMdDown,.ms-u-hiddenSm,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:480px) and (max-width:639px){.ms-u-hiddenLgDown,.ms-u-hiddenMd,.ms-u-hiddenMdDown,.ms-u-hiddenMdUp,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:640px) and (max-width:1023px){.ms-u-hiddenLg,.ms-u-hiddenLgDown,.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:1024px) and (max-width:1365px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXl,.ms-u-hiddenXlDown,.ms-u-hiddenXlUp,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:1366px) and (max-width:1919px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlUp,.ms-u-hiddenXxl,.ms-u-hiddenXxlDown,.ms-u-hiddenXxlUp{display:none!important}}@media (min-width:1920px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlUp,.ms-u-hiddenXxlUp,.ms-u-hiddenXxxl{display:none!important}}.ms-u-sm12{width:100%}.ms-u-sm11{width:91.66666666666666%}.ms-u-sm10{width:83.33333333333334%}.ms-u-sm9{width:75%}.ms-u-sm8{width:66.66666666666666%}.ms-u-sm7{width:58.333333333333336%}.ms-u-sm6{width:50%}.ms-u-sm5{width:41.66666666666667%}.ms-u-sm4{width:33.33333333333333%}.ms-u-sm3{width:25%}.ms-u-sm2{width:16.666666666666664%}.ms-u-sm1{width:8.333333333333332%}.ms-u-smPull12{right:100%}.ms-u-smPull11{right:91.66666666666666%}.ms-u-smPull10{right:83.33333333333334%}.ms-u-smPull9{right:75%}.ms-u-smPull8{right:66.66666666666666%}.ms-u-smPull7{right:58.333333333333336%}.ms-u-smPull6{right:50%}.ms-u-smPull5{right:41.66666666666667%}.ms-u-smPull4{right:33.33333333333333%}.ms-u-smPull3{right:25%}.ms-u-smPull2{right:16.666666666666664%}.ms-u-smPull1{right:8.333333333333332%}.ms-u-smPull0{right:auto}.ms-u-smPush12{left:100%}.ms-u-smPush11{left:91.66666666666666%}.ms-u-smPush10{left:83.33333333333334%}.ms-u-smPush9{left:75%}.ms-u-smPush8{left:66.66666666666666%}.ms-u-smPush7{left:58.333333333333336%}.ms-u-smPush6{left:50%}.ms-u-smPush5{left:41.66666666666667%}.ms-u-smPush4{left:33.33333333333333%}.ms-u-smPush3{left:25%}.ms-u-smPush2{left:16.666666666666664%}.ms-u-smPush1{left:8.333333333333332%}.ms-u-smPush0{left:auto}.ms-u-smOffset11{margin-left:91.66666666666666%}.ms-u-smOffset10{margin-left:83.33333333333334%}.ms-u-smOffset9{margin-left:75%}.ms-u-smOffset8{margin-left:66.66666666666666%}.ms-u-smOffset7{margin-left:58.333333333333336%}.ms-u-smOffset6{margin-left:50%}.ms-u-smOffset5{margin-left:41.66666666666667%}.ms-u-smOffset4{margin-left:33.33333333333333%}.ms-u-smOffset3{margin-left:25%}.ms-u-smOffset2{margin-left:16.666666666666664%}.ms-u-smOffset1{margin-left:8.333333333333332%}.ms-u-smOffset0{margin-left:0}@media (min-width:480px){.ms-u-md12{width:100%}}@media (min-width:480px){.ms-u-md11{width:91.66666666666666%}}@media (min-width:480px){.ms-u-md10{width:83.33333333333334%}}@media (min-width:480px){.ms-u-md9{width:75%}}@media (min-width:480px){.ms-u-md8{width:66.66666666666666%}}@media (min-width:480px){.ms-u-md7{width:58.333333333333336%}}@media (min-width:480px){.ms-u-md6{width:50%}}@media (min-width:480px){.ms-u-md5{width:41.66666666666667%}}@media (min-width:480px){.ms-u-md4{width:33.33333333333333%}}@media (min-width:480px){.ms-u-md3{width:25%}}@media (min-width:480px){.ms-u-md2{width:16.666666666666664%}}@media (min-width:480px){.ms-u-md1{width:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPull12{right:100%}}@media (min-width:480px){.ms-u-mdPull11{right:91.66666666666666%}}@media (min-width:480px){.ms-u-mdPull10{right:83.33333333333334%}}@media (min-width:480px){.ms-u-mdPull9{right:75%}}@media (min-width:480px){.ms-u-mdPull8{right:66.66666666666666%}}@media (min-width:480px){.ms-u-mdPull7{right:58.333333333333336%}}@media (min-width:480px){.ms-u-mdPull6{right:50%}}@media (min-width:480px){.ms-u-mdPull5{right:41.66666666666667%}}@media (min-width:480px){.ms-u-mdPull4{right:33.33333333333333%}}@media (min-width:480px){.ms-u-mdPull3{right:25%}}@media (min-width:480px){.ms-u-mdPull2{right:16.666666666666664%}}@media (min-width:480px){.ms-u-mdPull1{right:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPull0{right:auto}}@media (min-width:480px){.ms-u-mdPush12{left:100%}}@media (min-width:480px){.ms-u-mdPush11{left:91.66666666666666%}}@media (min-width:480px){.ms-u-mdPush10{left:83.33333333333334%}}@media (min-width:480px){.ms-u-mdPush9{left:75%}}@media (min-width:480px){.ms-u-mdPush8{left:66.66666666666666%}}@media (min-width:480px){.ms-u-mdPush7{left:58.333333333333336%}}@media (min-width:480px){.ms-u-mdPush6{left:50%}}@media (min-width:480px){.ms-u-mdPush5{left:41.66666666666667%}}@media (min-width:480px){.ms-u-mdPush4{left:33.33333333333333%}}@media (min-width:480px){.ms-u-mdPush3{left:25%}}@media (min-width:480px){.ms-u-mdPush2{left:16.666666666666664%}}@media (min-width:480px){.ms-u-mdPush1{left:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPush0{left:auto}}@media (min-width:480px){.ms-u-mdOffset11{margin-left:91.66666666666666%}}@media (min-width:480px){.ms-u-mdOffset10{margin-left:83.33333333333334%}}@media (min-width:480px){.ms-u-mdOffset9{margin-left:75%}}@media (min-width:480px){.ms-u-mdOffset8{margin-left:66.66666666666666%}}@media (min-width:480px){.ms-u-mdOffset7{margin-left:58.333333333333336%}}@media (min-width:480px){.ms-u-mdOffset6{margin-left:50%}}@media (min-width:480px){.ms-u-mdOffset5{margin-left:41.66666666666667%}}@media (min-width:480px){.ms-u-mdOffset4{margin-left:33.33333333333333%}}@media (min-width:480px){.ms-u-mdOffset3{margin-left:25%}}@media (min-width:480px){.ms-u-mdOffset2{margin-left:16.666666666666664%}}@media (min-width:480px){.ms-u-mdOffset1{margin-left:8.333333333333332%}}@media (min-width:480px){.ms-u-mdOffset0{margin-left:0}}@media (min-width:640px){.ms-u-lg12{width:100%}}@media (min-width:640px){.ms-u-lg11{width:91.66666666666666%}}@media (min-width:640px){.ms-u-lg10{width:83.33333333333334%}}@media (min-width:640px){.ms-u-lg9{width:75%}}@media (min-width:640px){.ms-u-lg8{width:66.66666666666666%}}@media (min-width:640px){.ms-u-lg7{width:58.333333333333336%}}@media (min-width:640px){.ms-u-lg6{width:50%}}@media (min-width:640px){.ms-u-lg5{width:41.66666666666667%}}@media (min-width:640px){.ms-u-lg4{width:33.33333333333333%}}@media (min-width:640px){.ms-u-lg3{width:25%}}@media (min-width:640px){.ms-u-lg2{width:16.666666666666664%}}@media (min-width:640px){.ms-u-lg1{width:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPull12{right:100%}}@media (min-width:640px){.ms-u-lgPull11{right:91.66666666666666%}}@media (min-width:640px){.ms-u-lgPull10{right:83.33333333333334%}}@media (min-width:640px){.ms-u-lgPull9{right:75%}}@media (min-width:640px){.ms-u-lgPull8{right:66.66666666666666%}}@media (min-width:640px){.ms-u-lgPull7{right:58.333333333333336%}}@media (min-width:640px){.ms-u-lgPull6{right:50%}}@media (min-width:640px){.ms-u-lgPull5{right:41.66666666666667%}}@media (min-width:640px){.ms-u-lgPull4{right:33.33333333333333%}}@media (min-width:640px){.ms-u-lgPull3{right:25%}}@media (min-width:640px){.ms-u-lgPull2{right:16.666666666666664%}}@media (min-width:640px){.ms-u-lgPull1{right:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPull0{right:auto}}@media (min-width:640px){.ms-u-lgPush12{left:100%}}@media (min-width:640px){.ms-u-lgPush11{left:91.66666666666666%}}@media (min-width:640px){.ms-u-lgPush10{left:83.33333333333334%}}@media (min-width:640px){.ms-u-lgPush9{left:75%}}@media (min-width:640px){.ms-u-lgPush8{left:66.66666666666666%}}@media (min-width:640px){.ms-u-lgPush7{left:58.333333333333336%}}@media (min-width:640px){.ms-u-lgPush6{left:50%}}@media (min-width:640px){.ms-u-lgPush5{left:41.66666666666667%}}@media (min-width:640px){.ms-u-lgPush4{left:33.33333333333333%}}@media (min-width:640px){.ms-u-lgPush3{left:25%}}@media (min-width:640px){.ms-u-lgPush2{left:16.666666666666664%}}@media (min-width:640px){.ms-u-lgPush1{left:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPush0{left:auto}}@media (min-width:640px){.ms-u-lgOffset11{margin-left:91.66666666666666%}}@media (min-width:640px){.ms-u-lgOffset10{margin-left:83.33333333333334%}}@media (min-width:640px){.ms-u-lgOffset9{margin-left:75%}}@media (min-width:640px){.ms-u-lgOffset8{margin-left:66.66666666666666%}}@media (min-width:640px){.ms-u-lgOffset7{margin-left:58.333333333333336%}}@media (min-width:640px){.ms-u-lgOffset6{margin-left:50%}}@media (min-width:640px){.ms-u-lgOffset5{margin-left:41.66666666666667%}}@media (min-width:640px){.ms-u-lgOffset4{margin-left:33.33333333333333%}}@media (min-width:640px){.ms-u-lgOffset3{margin-left:25%}}@media (min-width:640px){.ms-u-lgOffset2{margin-left:16.666666666666664%}}@media (min-width:640px){.ms-u-lgOffset1{margin-left:8.333333333333332%}}@media (min-width:640px){.ms-u-lgOffset0{margin-left:0}}@media (min-width:1024px){.ms-u-xl12{width:100%}}@media (min-width:1024px){.ms-u-xl11{width:91.66666666666666%}}@media (min-width:1024px){.ms-u-xl10{width:83.33333333333334%}}@media (min-width:1024px){.ms-u-xl9{width:75%}}@media (min-width:1024px){.ms-u-xl8{width:66.66666666666666%}}@media (min-width:1024px){.ms-u-xl7{width:58.333333333333336%}}@media (min-width:1024px){.ms-u-xl6{width:50%}}@media (min-width:1024px){.ms-u-xl5{width:41.66666666666667%}}@media (min-width:1024px){.ms-u-xl4{width:33.33333333333333%}}@media (min-width:1024px){.ms-u-xl3{width:25%}}@media (min-width:1024px){.ms-u-xl2{width:16.666666666666664%}}@media (min-width:1024px){.ms-u-xl1{width:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPull12{right:100%}}@media (min-width:1024px){.ms-u-xlPull11{right:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlPull10{right:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlPull9{right:75%}}@media (min-width:1024px){.ms-u-xlPull8{right:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlPull7{right:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlPull6{right:50%}}@media (min-width:1024px){.ms-u-xlPull5{right:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlPull4{right:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlPull3{right:25%}}@media (min-width:1024px){.ms-u-xlPull2{right:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlPull1{right:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPull0{right:auto}}@media (min-width:1024px){.ms-u-xlPush12{left:100%}}@media (min-width:1024px){.ms-u-xlPush11{left:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlPush10{left:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlPush9{left:75%}}@media (min-width:1024px){.ms-u-xlPush8{left:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlPush7{left:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlPush6{left:50%}}@media (min-width:1024px){.ms-u-xlPush5{left:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlPush4{left:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlPush3{left:25%}}@media (min-width:1024px){.ms-u-xlPush2{left:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlPush1{left:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPush0{left:auto}}@media (min-width:1024px){.ms-u-xlOffset11{margin-left:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlOffset10{margin-left:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlOffset9{margin-left:75%}}@media (min-width:1024px){.ms-u-xlOffset8{margin-left:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlOffset7{margin-left:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlOffset6{margin-left:50%}}@media (min-width:1024px){.ms-u-xlOffset5{margin-left:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlOffset4{margin-left:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlOffset3{margin-left:25%}}@media (min-width:1024px){.ms-u-xlOffset2{margin-left:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlOffset1{margin-left:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlOffset0{margin-left:0}}@media (min-width:1366px){.ms-u-xxl12{width:100%}}@media (min-width:1366px){.ms-u-xxl11{width:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxl10{width:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxl9{width:75%}}@media (min-width:1366px){.ms-u-xxl8{width:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxl7{width:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxl6{width:50%}}@media (min-width:1366px){.ms-u-xxl5{width:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxl4{width:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxl3{width:25%}}@media (min-width:1366px){.ms-u-xxl2{width:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxl1{width:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPull12{right:100%}}@media (min-width:1366px){.ms-u-xxlPull11{right:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPull10{right:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlPull9{right:75%}}@media (min-width:1366px){.ms-u-xxlPull8{right:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPull7{right:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlPull6{right:50%}}@media (min-width:1366px){.ms-u-xxlPull5{right:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlPull4{right:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlPull3{right:25%}}@media (min-width:1366px){.ms-u-xxlPull2{right:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlPull1{right:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPull0{right:auto}}@media (min-width:1366px){.ms-u-xxlPush12{left:100%}}@media (min-width:1366px){.ms-u-xxlPush11{left:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPush10{left:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlPush9{left:75%}}@media (min-width:1366px){.ms-u-xxlPush8{left:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPush7{left:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlPush6{left:50%}}@media (min-width:1366px){.ms-u-xxlPush5{left:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlPush4{left:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlPush3{left:25%}}@media (min-width:1366px){.ms-u-xxlPush2{left:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlPush1{left:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPush0{left:auto}}@media (min-width:1366px){.ms-u-xxlOffset11{margin-left:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlOffset10{margin-left:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlOffset9{margin-left:75%}}@media (min-width:1366px){.ms-u-xxlOffset8{margin-left:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlOffset7{margin-left:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlOffset6{margin-left:50%}}@media (min-width:1366px){.ms-u-xxlOffset5{margin-left:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlOffset4{margin-left:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlOffset3{margin-left:25%}}@media (min-width:1366px){.ms-u-xxlOffset2{margin-left:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlOffset1{margin-left:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlOffset0{margin-left:0}}@media (min-width:1920px){.ms-u-xxxl12{width:100%}}@media (min-width:1920px){.ms-u-xxxl11{width:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxl10{width:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxl9{width:75%}}@media (min-width:1920px){.ms-u-xxxl8{width:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxl7{width:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxl6{width:50%}}@media (min-width:1920px){.ms-u-xxxl5{width:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxl4{width:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxl3{width:25%}}@media (min-width:1920px){.ms-u-xxxl2{width:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxl1{width:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPull12{right:100%}}@media (min-width:1920px){.ms-u-xxxlPull11{right:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPull10{right:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlPull9{right:75%}}@media (min-width:1920px){.ms-u-xxxlPull8{right:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPull7{right:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlPull6{right:50%}}@media (min-width:1920px){.ms-u-xxxlPull5{right:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlPull4{right:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlPull3{right:25%}}@media (min-width:1920px){.ms-u-xxxlPull2{right:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlPull1{right:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPull0{right:auto}}@media (min-width:1920px){.ms-u-xxxlPush12{left:100%}}@media (min-width:1920px){.ms-u-xxxlPush11{left:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPush10{left:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlPush9{left:75%}}@media (min-width:1920px){.ms-u-xxxlPush8{left:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPush7{left:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlPush6{left:50%}}@media (min-width:1920px){.ms-u-xxxlPush5{left:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlPush4{left:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlPush3{left:25%}}@media (min-width:1920px){.ms-u-xxxlPush2{left:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlPush1{left:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPush0{left:auto}}@media (min-width:1920px){.ms-u-xxxlOffset11{margin-left:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlOffset10{margin-left:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlOffset9{margin-left:75%}}@media (min-width:1920px){.ms-u-xxxlOffset8{margin-left:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlOffset7{margin-left:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlOffset6{margin-left:50%}}@media (min-width:1920px){.ms-u-xxxlOffset5{margin-left:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlOffset4{margin-left:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlOffset3{margin-left:25%}}@media (min-width:1920px){.ms-u-xxxlOffset2{margin-left:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlOffset1{margin-left:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlOffset0{margin-left:0}}.ms-Grid{box-sizing:border-box;*zoom:1;padding:0 8px}.ms-Grid:after,.ms-Grid:before{display:table;content:'';line-height:0}.ms-Grid:after{clear:both}.ms-Grid-row{margin:0 -8px;box-sizing:border-box;*zoom:1}.ms-Grid-row:after,.ms-Grid-row:before{display:table;content:'';line-height:0}.ms-Grid-row:after{clear:both}.ms-Grid-col{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box;float:left}.ms-Grid-col .ms-Grid{padding:0}.ms-Fabric{color:#333}", ""]);
	
	// exports


/***/ },
/* 46 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_js_1 = __webpack_require__(49);
	var MockHttpClient = (function () {
	    function MockHttpClient() {
	    }
	    MockHttpClient.get = function (restUrl, options) {
	        return new core_js_1.Promise(function (resolve) {
	            resolve(MockHttpClient._items);
	        });
	    };
	    MockHttpClient._items = [{ Title: 'Mock List', Id: '1' }, { Title: 'Mock List 2', Id: '2' }];
	    return MockHttpClient;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = MockHttpClient;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(237);
	__webpack_require__(164);
	__webpack_require__(239);
	__webpack_require__(238);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	module.exports = __webpack_require__(55);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	__webpack_require__(84);
	__webpack_require__(90);
	__webpack_require__(92);
	__webpack_require__(94);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(170);
	__webpack_require__(172);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(193);
	__webpack_require__(196);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(210);
	__webpack_require__(212);
	__webpack_require__(213);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(235);
	__webpack_require__(236);
	module.exports = __webpack_require__(55);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(52)
	  , $export           = __webpack_require__(53)
	  , DESCRIPTORS       = __webpack_require__(58)
	  , createDesc        = __webpack_require__(57)
	  , html              = __webpack_require__(64)
	  , cel               = __webpack_require__(65)
	  , has               = __webpack_require__(67)
	  , cof               = __webpack_require__(68)
	  , invoke            = __webpack_require__(69)
	  , fails             = __webpack_require__(59)
	  , anObject          = __webpack_require__(70)
	  , aFunction         = __webpack_require__(63)
	  , isObject          = __webpack_require__(66)
	  , toObject          = __webpack_require__(71)
	  , toIObject         = __webpack_require__(73)
	  , toInteger         = __webpack_require__(75)
	  , toIndex           = __webpack_require__(76)
	  , toLength          = __webpack_require__(77)
	  , IObject           = __webpack_require__(74)
	  , IE_PROTO          = __webpack_require__(61)('__proto__')
	  , createArrayMethod = __webpack_require__(78)
	  , arrayIndexOf      = __webpack_require__(83)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(80)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(54)
	  , core      = __webpack_require__(55)
	  , hide      = __webpack_require__(56)
	  , redefine  = __webpack_require__(60)
	  , ctx       = __webpack_require__(62)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 54 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 55 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(52)
	  , createDesc = __webpack_require__(57);
	module.exports = __webpack_require__(58) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(59)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(54)
	  , hide      = __webpack_require__(56)
	  , SRC       = __webpack_require__(61)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(55).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 61 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(63);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54).document && document.documentElement;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(66)
	  , document = __webpack_require__(54).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(66);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(72);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(74)
	  , defined = __webpack_require__(72);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(68);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(75)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(75)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(62)
	  , IObject  = __webpack_require__(74)
	  , toObject = __webpack_require__(71)
	  , toLength = __webpack_require__(77)
	  , asc      = __webpack_require__(79);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(66)
	  , isArray  = __webpack_require__(80)
	  , SPECIES  = __webpack_require__(81)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(68);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(82)('wks')
	  , uid    = __webpack_require__(61)
	  , Symbol = __webpack_require__(54).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(54)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(73)
	  , toLength  = __webpack_require__(77)
	  , toIndex   = __webpack_require__(76);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(52)
	  , global         = __webpack_require__(54)
	  , has            = __webpack_require__(67)
	  , DESCRIPTORS    = __webpack_require__(58)
	  , $export        = __webpack_require__(53)
	  , redefine       = __webpack_require__(60)
	  , $fails         = __webpack_require__(59)
	  , shared         = __webpack_require__(82)
	  , setToStringTag = __webpack_require__(85)
	  , uid            = __webpack_require__(61)
	  , wks            = __webpack_require__(81)
	  , keyOf          = __webpack_require__(86)
	  , $names         = __webpack_require__(87)
	  , enumKeys       = __webpack_require__(88)
	  , isArray        = __webpack_require__(80)
	  , anObject       = __webpack_require__(70)
	  , toIObject      = __webpack_require__(73)
	  , createDesc     = __webpack_require__(57)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(89)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(52).setDesc
	  , has = __webpack_require__(67)
	  , TAG = __webpack_require__(81)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(52)
	  , toIObject = __webpack_require__(73);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(73)
	  , getNames  = __webpack_require__(52).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(52);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(53);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(91)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(52)
	  , toObject = __webpack_require__(71)
	  , IObject  = __webpack_require__(74);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(59)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(53);
	$export($export.S, 'Object', {is: __webpack_require__(93)});

/***/ },
/* 93 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(53);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(95).set});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(52).getDesc
	  , isObject = __webpack_require__(66)
	  , anObject = __webpack_require__(70);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(62)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(97)
	  , test    = {};
	test[__webpack_require__(81)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(60)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(68)
	  , TAG = __webpack_require__(81)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(66);
	
	__webpack_require__(99)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(53)
	  , core    = __webpack_require__(55)
	  , fails   = __webpack_require__(59);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(66);
	
	__webpack_require__(99)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(66);
	
	__webpack_require__(99)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(66);
	
	__webpack_require__(99)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(66);
	
	__webpack_require__(99)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(66);
	
	__webpack_require__(99)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(73);
	
	__webpack_require__(99)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(71);
	
	__webpack_require__(99)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(71);
	
	__webpack_require__(99)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(99)('getOwnPropertyNames', function(){
	  return __webpack_require__(87).get;
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(52).setDesc
	  , createDesc = __webpack_require__(57)
	  , has        = __webpack_require__(67)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(58) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(52)
	  , isObject      = __webpack_require__(66)
	  , HAS_INSTANCE  = __webpack_require__(81)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(52)
	  , global      = __webpack_require__(54)
	  , has         = __webpack_require__(67)
	  , cof         = __webpack_require__(68)
	  , toPrimitive = __webpack_require__(112)
	  , fails       = __webpack_require__(59)
	  , $trim       = __webpack_require__(113).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(58) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(60)(global, NUMBER, $Number);
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(66);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53)
	  , defined = __webpack_require__(72)
	  , fails   = __webpack_require__(59)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(53)
	  , _isFinite = __webpack_require__(54).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(117)});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(66)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(53)
	  , isInteger = __webpack_require__(117)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(53)
	  , log1p   = __webpack_require__(125)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(53);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(53)
	  , sign    = __webpack_require__(129);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 129 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(53)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(133)});

/***/ },
/* 133 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(53)
	  , sign      = __webpack_require__(129)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(53)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(53)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(125)});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {sign: __webpack_require__(129)});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(53)
	  , expm1   = __webpack_require__(133)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(53)
	  , expm1   = __webpack_require__(133)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(53)
	  , toIndex        = __webpack_require__(76)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(53)
	  , toIObject = __webpack_require__(73)
	  , toLength  = __webpack_require__(77);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(113)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(148)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(149)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(75)
	  , defined   = __webpack_require__(72);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(89)
	  , $export        = __webpack_require__(53)
	  , redefine       = __webpack_require__(60)
	  , hide           = __webpack_require__(56)
	  , has            = __webpack_require__(67)
	  , Iterators      = __webpack_require__(150)
	  , $iterCreate    = __webpack_require__(151)
	  , setToStringTag = __webpack_require__(85)
	  , getProto       = __webpack_require__(52).getProto
	  , ITERATOR       = __webpack_require__(81)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(52)
	  , descriptor     = __webpack_require__(57)
	  , setToStringTag = __webpack_require__(85)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(56)(IteratorPrototype, __webpack_require__(81)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(53)
	  , $at     = __webpack_require__(148)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(53)
	  , toLength  = __webpack_require__(77)
	  , context   = __webpack_require__(154)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(156)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(155)
	  , defined  = __webpack_require__(72);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(66)
	  , cof      = __webpack_require__(68)
	  , MATCH    = __webpack_require__(81)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(81)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(53)
	  , context  = __webpack_require__(154)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(156)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(159)
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(75)
	  , defined   = __webpack_require__(72);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(53)
	  , toLength    = __webpack_require__(77)
	  , context     = __webpack_require__(154)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(156)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(62)
	  , $export     = __webpack_require__(53)
	  , toObject    = __webpack_require__(71)
	  , call        = __webpack_require__(162)
	  , isArrayIter = __webpack_require__(163)
	  , toLength    = __webpack_require__(77)
	  , getIterFn   = __webpack_require__(164);
	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(70);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(150)
	  , ITERATOR   = __webpack_require__(81)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(97)
	  , ITERATOR  = __webpack_require__(81)('iterator')
	  , Iterators = __webpack_require__(150);
	module.exports = __webpack_require__(55).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(81)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(53);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(168)
	  , step             = __webpack_require__(169)
	  , Iterators        = __webpack_require__(150)
	  , toIObject        = __webpack_require__(73);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(149)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(81)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(56)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(171)('Array');

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(54)
	  , $           = __webpack_require__(52)
	  , DESCRIPTORS = __webpack_require__(58)
	  , SPECIES     = __webpack_require__(81)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(53);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(173)});
	
	__webpack_require__(168)('copyWithin');

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(71)
	  , toIndex  = __webpack_require__(76)
	  , toLength = __webpack_require__(77);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(53);
	
	$export($export.P, 'Array', {fill: __webpack_require__(175)});
	
	__webpack_require__(168)('fill');

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(71)
	  , toIndex  = __webpack_require__(76)
	  , toLength = __webpack_require__(77);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(53)
	  , $find   = __webpack_require__(78)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(168)(KEY);

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(53)
	  , $find   = __webpack_require__(78)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(168)(KEY);

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(52)
	  , global   = __webpack_require__(54)
	  , isRegExp = __webpack_require__(155)
	  , $flags   = __webpack_require__(179)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(58) && (!CORRECT_NEW || __webpack_require__(59)(function(){
	  re2[__webpack_require__(81)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(60)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(171)('RegExp');

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(70);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(52);
	if(__webpack_require__(58) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(179)
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(182)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(56)
	  , redefine = __webpack_require__(60)
	  , fails    = __webpack_require__(59)
	  , defined  = __webpack_require__(72)
	  , wks      = __webpack_require__(81);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(182)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(182)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(182)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(52)
	  , LIBRARY    = __webpack_require__(89)
	  , global     = __webpack_require__(54)
	  , ctx        = __webpack_require__(62)
	  , classof    = __webpack_require__(97)
	  , $export    = __webpack_require__(53)
	  , isObject   = __webpack_require__(66)
	  , anObject   = __webpack_require__(70)
	  , aFunction  = __webpack_require__(63)
	  , strictNew  = __webpack_require__(187)
	  , forOf      = __webpack_require__(188)
	  , setProto   = __webpack_require__(95).set
	  , same       = __webpack_require__(93)
	  , SPECIES    = __webpack_require__(81)('species')
	  , speciesConstructor = __webpack_require__(189)
	  , asap       = __webpack_require__(190)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , empty      = function(){ /* empty */ }
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(empty), promise;
	  if(sub)test.constructor = function(exec){
	    exec(empty, empty);
	  };
	  (promise = P.resolve(test))['catch'](empty);
	  return promise === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(58)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(192)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(85)(P, PROMISE);
	__webpack_require__(171)(PROMISE);
	Wrapper = __webpack_require__(55)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(165)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(62)
	  , call        = __webpack_require__(162)
	  , isArrayIter = __webpack_require__(163)
	  , anObject    = __webpack_require__(70)
	  , toLength    = __webpack_require__(77)
	  , getIterFn   = __webpack_require__(164);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(70)
	  , aFunction = __webpack_require__(63)
	  , SPECIES   = __webpack_require__(81)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(54)
	  , macrotask = __webpack_require__(191).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(68)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(62)
	  , invoke             = __webpack_require__(69)
	  , html               = __webpack_require__(64)
	  , cel                = __webpack_require__(65)
	  , global             = __webpack_require__(54)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(68)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(60);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(194);
	
	// 23.1 Map Objects
	__webpack_require__(195)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(52)
	  , hide         = __webpack_require__(56)
	  , redefineAll  = __webpack_require__(192)
	  , ctx          = __webpack_require__(62)
	  , strictNew    = __webpack_require__(187)
	  , defined      = __webpack_require__(72)
	  , forOf        = __webpack_require__(188)
	  , $iterDefine  = __webpack_require__(149)
	  , step         = __webpack_require__(169)
	  , ID           = __webpack_require__(61)('id')
	  , $has         = __webpack_require__(67)
	  , isObject     = __webpack_require__(66)
	  , setSpecies   = __webpack_require__(171)
	  , DESCRIPTORS  = __webpack_require__(58)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(54)
	  , $export        = __webpack_require__(53)
	  , redefine       = __webpack_require__(60)
	  , redefineAll    = __webpack_require__(192)
	  , forOf          = __webpack_require__(188)
	  , strictNew      = __webpack_require__(187)
	  , isObject       = __webpack_require__(66)
	  , fails          = __webpack_require__(59)
	  , $iterDetect    = __webpack_require__(165)
	  , setToStringTag = __webpack_require__(85);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(194);
	
	// 23.2 Set Objects
	__webpack_require__(195)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(52)
	  , redefine     = __webpack_require__(60)
	  , weak         = __webpack_require__(198)
	  , isObject     = __webpack_require__(66)
	  , has          = __webpack_require__(67)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(195)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(56)
	  , redefineAll       = __webpack_require__(192)
	  , anObject          = __webpack_require__(70)
	  , isObject          = __webpack_require__(66)
	  , strictNew         = __webpack_require__(187)
	  , forOf             = __webpack_require__(188)
	  , createArrayMethod = __webpack_require__(78)
	  , $has              = __webpack_require__(67)
	  , WEAK              = __webpack_require__(61)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(198);
	
	// 23.4 WeakSet Objects
	__webpack_require__(195)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export  = __webpack_require__(53)
	  , _apply   = Function.apply
	  , anObject = __webpack_require__(70);
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, anObject(argumentsList));
	  }
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(52)
	  , $export   = __webpack_require__(53)
	  , aFunction = __webpack_require__(63)
	  , anObject  = __webpack_require__(70)
	  , isObject  = __webpack_require__(66)
	  , bind      = Function.bind || __webpack_require__(55).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(52)
	  , $export  = __webpack_require__(53)
	  , anObject = __webpack_require__(70);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(59)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(53)
	  , getDesc  = __webpack_require__(52).getDesc
	  , anObject = __webpack_require__(70);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(53)
	  , anObject = __webpack_require__(70);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(151)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(52)
	  , has      = __webpack_require__(67)
	  , $export  = __webpack_require__(53)
	  , isObject = __webpack_require__(66)
	  , anObject = __webpack_require__(70);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(52)
	  , $export  = __webpack_require__(53)
	  , anObject = __webpack_require__(70);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(53)
	  , getProto = __webpack_require__(52).getProto
	  , anObject = __webpack_require__(70);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(53)
	  , anObject      = __webpack_require__(70)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(53);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(211)});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(52)
	  , anObject = __webpack_require__(70)
	  , Reflect  = __webpack_require__(54).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(53)
	  , anObject           = __webpack_require__(70)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(52)
	  , has        = __webpack_require__(67)
	  , $export    = __webpack_require__(53)
	  , createDesc = __webpack_require__(57)
	  , anObject   = __webpack_require__(70)
	  , isObject   = __webpack_require__(66);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(53)
	  , setProto = __webpack_require__(95);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(53)
	  , $includes = __webpack_require__(83)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(168)('includes');

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(53)
	  , $at     = __webpack_require__(148)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(53)
	  , $pad    = __webpack_require__(218);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(77)
	  , repeat   = __webpack_require__(159)
	  , defined  = __webpack_require__(72);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(53)
	  , $pad    = __webpack_require__(218);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(113)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(113)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(53)
	  , $re     = __webpack_require__(223)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(52)
	  , $export    = __webpack_require__(53)
	  , ownKeys    = __webpack_require__(211)
	  , toIObject  = __webpack_require__(73)
	  , createDesc = __webpack_require__(57);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(53)
	  , $values = __webpack_require__(226)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(52)
	  , toIObject = __webpack_require__(73)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(53)
	  , $entries = __webpack_require__(226)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(53);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(229)('Map')});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(188)
	  , classof = __webpack_require__(97);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(53);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(229)('Set')});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(52)
	  , $export = __webpack_require__(53)
	  , $ctx    = __webpack_require__(62)
	  , $Array  = __webpack_require__(55).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(54)
	  , $export    = __webpack_require__(53)
	  , invoke     = __webpack_require__(69)
	  , partial    = __webpack_require__(233)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(234)
	  , invoke    = __webpack_require__(69)
	  , aFunction = __webpack_require__(63);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54);

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53)
	  , $task   = __webpack_require__(191);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(167);
	var global      = __webpack_require__(54)
	  , hide        = __webpack_require__(56)
	  , Iterators   = __webpack_require__(150)
	  , ITERATOR    = __webpack_require__(81)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(52)
	  , ctx         = __webpack_require__(62)
	  , $export     = __webpack_require__(53)
	  , createDesc  = __webpack_require__(57)
	  , assign      = __webpack_require__(91)
	  , keyOf       = __webpack_require__(86)
	  , aFunction   = __webpack_require__(63)
	  , forOf       = __webpack_require__(188)
	  , isIterable  = __webpack_require__(238)
	  , $iterCreate = __webpack_require__(151)
	  , step        = __webpack_require__(169)
	  , isObject    = __webpack_require__(66)
	  , toIObject   = __webpack_require__(73)
	  , DESCRIPTORS = __webpack_require__(58)
	  , has         = __webpack_require__(67)
	  , getKeys     = $.getKeys;
	
	// 0 -> Dict.forEach
	// 1 -> Dict.map
	// 2 -> Dict.filter
	// 3 -> Dict.some
	// 4 -> Dict.every
	// 5 -> Dict.find
	// 6 -> Dict.findKey
	// 7 -> Dict.mapPairs
	var createDictMethod = function(TYPE){
	  var IS_MAP   = TYPE == 1
	    , IS_EVERY = TYPE == 4;
	  return function(object, callbackfn, that /* = undefined */){
	    var f      = ctx(callbackfn, that, 3)
	      , O      = toIObject(object)
	      , result = IS_MAP || TYPE == 7 || TYPE == 2
	          ? new (typeof this == 'function' ? this : Dict) : undefined
	      , key, val, res;
	    for(key in O)if(has(O, key)){
	      val = O[key];
	      res = f(val, key, object);
	      if(TYPE){
	        if(IS_MAP)result[key] = res;            // map
	        else if(res)switch(TYPE){
	          case 2: result[key] = val; break;     // filter
	          case 3: return true;                  // some
	          case 5: return val;                   // find
	          case 6: return key;                   // findKey
	          case 7: result[res[0]] = res[1];      // mapPairs
	        } else if(IS_EVERY)return false;        // every
	      }
	    }
	    return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
	  };
	};
	var findKey = createDictMethod(6);
	
	var createDictIter = function(kind){
	  return function(it){
	    return new DictIterator(it, kind);
	  };
	};
	var DictIterator = function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._a = getKeys(iterated);   // keys
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	};
	$iterCreate(DictIterator, 'Dict', function(){
	  var that = this
	    , O    = that._t
	    , keys = that._a
	    , kind = that._k
	    , key;
	  do {
	    if(that._i >= keys.length){
	      that._t = undefined;
	      return step(1);
	    }
	  } while(!has(O, key = keys[that._i++]));
	  if(kind == 'keys'  )return step(0, key);
	  if(kind == 'values')return step(0, O[key]);
	  return step(0, [key, O[key]]);
	});
	
	function Dict(iterable){
	  var dict = $.create(null);
	  if(iterable != undefined){
	    if(isIterable(iterable)){
	      forOf(iterable, true, function(key, value){
	        dict[key] = value;
	      });
	    } else assign(dict, iterable);
	  }
	  return dict;
	}
	Dict.prototype = null;
	
	function reduce(object, mapfn, init){
	  aFunction(mapfn);
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , i      = 0
	    , memo, key;
	  if(arguments.length < 3){
	    if(!length)throw TypeError('Reduce of empty object with no initial value');
	    memo = O[keys[i++]];
	  } else memo = Object(init);
	  while(length > i)if(has(O, key = keys[i++])){
	    memo = mapfn(memo, O[key], key, object);
	  }
	  return memo;
	}
	
	function includes(object, el){
	  return (el == el ? keyOf(object, el) : findKey(object, function(it){
	    return it != it;
	  })) !== undefined;
	}
	
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function set(object, key, value){
	  if(DESCRIPTORS && key in Object)$.setDesc(object, key, createDesc(0, value));
	  else object[key] = value;
	  return object;
	}
	
	function isDict(it){
	  return isObject(it) && $.getProto(it) === Dict.prototype;
	}
	
	$export($export.G + $export.F, {Dict: Dict});
	
	$export($export.S, 'Dict', {
	  keys:     createDictIter('keys'),
	  values:   createDictIter('values'),
	  entries:  createDictIter('entries'),
	  forEach:  createDictMethod(0),
	  map:      createDictMethod(1),
	  filter:   createDictMethod(2),
	  some:     createDictMethod(3),
	  every:    createDictMethod(4),
	  find:     createDictMethod(5),
	  findKey:  findKey,
	  mapPairs: createDictMethod(7),
	  reduce:   reduce,
	  keyOf:    keyOf,
	  includes: includes,
	  has:      has,
	  get:      get,
	  set:      set,
	  isDict:   isDict
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(97)
	  , ITERATOR  = __webpack_require__(81)('iterator')
	  , Iterators = __webpack_require__(150);
	module.exports = __webpack_require__(55).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(70)
	  , get      = __webpack_require__(164);
	module.exports = __webpack_require__(55).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var global  = __webpack_require__(54)
	  , core    = __webpack_require__(55)
	  , $export = __webpack_require__(53)
	  , partial = __webpack_require__(233);
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$export($export.G + $export.F, {
	  delay: function delay(time){
	    return new (core.Promise || global.Promise)(function(resolve){
	      setTimeout(partial.call(resolve, true), time);
	    });
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var path    = __webpack_require__(234)
	  , $export = __webpack_require__(53);
	
	// Placeholder
	__webpack_require__(55)._ = path._ = path._ || {};
	
	$export($export.P + $export.F, 'Function', {part: __webpack_require__(233)});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53);
	
	$export($export.S + $export.F, 'Object', {isObject: __webpack_require__(66)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53);
	
	$export($export.S + $export.F, 'Object', {classof: __webpack_require__(97)});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53)
	  , define  = __webpack_require__(245);
	
	$export($export.S + $export.F, 'Object', {define: define});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(52)
	  , ownKeys   = __webpack_require__(211)
	  , toIObject = __webpack_require__(73);
	
	module.exports = function define(target, mixin){
	  var keys   = ownKeys(toIObject(mixin))
	    , length = keys.length
	    , i = 0, key;
	  while(length > i)$.setDesc(target, key = keys[i++], $.getDesc(mixin, key));
	  return target;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(53)
	  , define  = __webpack_require__(245)
	  , create  = __webpack_require__(52).create;
	
	$export($export.S + $export.F, 'Object', {
	  make: function(proto, mixin){
	    return define(create(proto), mixin);
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(149)(Number, 'Number', function(iterated){
	  this._l = +iterated;
	  this._i = 0;
	}, function(){
	  var i    = this._i++
	    , done = !(i < this._l);
	  return {done: done, value: done ? undefined : i};
	});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(53);
	var $re = __webpack_require__(223)(/[&<>"']/g, {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&apos;'
	});
	
	$export($export.P + $export.F, 'String', {escapeHTML: function escapeHTML(){ return $re(this); }});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(53);
	var $re = __webpack_require__(223)(/&(?:amp|lt|gt|quot|apos);/g, {
	  '&amp;':  '&',
	  '&lt;':   '<',
	  '&gt;':   '>',
	  '&quot;': '"',
	  '&apos;': "'"
	});
	
	$export($export.P + $export.F, 'String', {unescapeHTML:  function unescapeHTML(){ return $re(this); }});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(52)
	  , global  = __webpack_require__(54)
	  , $export = __webpack_require__(53)
	  , log     = {}
	  , enabled = true;
	// Methods from https://github.com/DeveloperToolsWG/console-object/blob/master/api.md
	$.each.call((
	  'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,' +
	  'info,isIndependentlyComposed,log,markTimeline,profile,profileEnd,table,' +
	  'time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'
	).split(','), function(key){
	  log[key] = function(){
	    var $console = global.console;
	    if(enabled && $console && $console[key]){
	      return Function.apply.call($console[key], $console, arguments);
	    }
	  };
	});
	$export($export.G + $export.F, {log: __webpack_require__(91)(log.log, log, {
	  enable: function(){
	    enabled = true;
	  },
	  disable: function(){
	    enabled = false;
	  }
	})});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var sp_pnp_js_1 = __webpack_require__(252);
	var SharepointListClient = (function () {
	    function SharepointListClient() {
	    }
	    SharepointListClient.get = function (restUrl, options) {
	        return sp_pnp_js_1.default.sp.web.lists.filter("Hidden eq false").get().then(function (response) {
	            return response.json();
	        });
	    };
	    return SharepointListClient;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SharepointListClient;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var util_1 = __webpack_require__(253);
	var storage_1 = __webpack_require__(254);
	var configuration_1 = __webpack_require__(255);
	var logging_1 = __webpack_require__(260);
	var rest_1 = __webpack_require__(261);
	var pnplibconfig_1 = __webpack_require__(268);
	/**
	 * Root class of the Patterns and Practices namespace, provides an entry point to the library
	 */
	/**
	 * Utility methods
	 */
	exports.util = util_1.Util;
	/**
	 * Provides access to the REST interface
	 */
	exports.sp = new rest_1.Rest();
	/**
	 * Provides access to local and session storage
	 */
	exports.storage = new storage_1.PnPClientStorage();
	/**
	 * Global configuration instance to which providers can be added
	 */
	exports.config = new configuration_1.Settings();
	/**
	 * Global logging instance to which subscribers can be registered and messages written
	 */
	exports.log = logging_1.Logger;
	/**
	 * Allows for the configuration of the library
	 */
	exports.setup = pnplibconfig_1.setRuntimeConfig;
	/**
	 * Expose a subset of classes from the library for public consumption
	 */
	__export(__webpack_require__(295));
	// creating this class instead of directly assigning to default fixes issue #116
	var Def = {
	    /**
	     * Global configuration instance to which providers can be added
	     */
	    config: exports.config,
	    /**
	     * Global logging instance to which subscribers can be registered and messages written
	     */
	    log: exports.log,
	    /**
	     * Provides access to local and session storage
	     */
	    setup: exports.setup,
	    /**
	     * Provides access to the REST interface
	     */
	    sp: exports.sp,
	    /**
	     * Provides access to local and session storage
	     */
	    storage: exports.storage,
	    /**
	     * Utility methods
	     */
	    util: exports.util,
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Def;


/***/ },
/* 253 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var Util = (function () {
	    function Util() {
	    }
	    /**
	     * Gets a callback function which will maintain context across async calls.
	     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
	     *
	     * @param context The object that will be the 'this' value in the callback
	     * @param method The method to which we will apply the context and parameters
	     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
	     */
	    Util.getCtxCallback = function (context, method) {
	        var params = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            params[_i - 2] = arguments[_i];
	        }
	        return function () {
	            method.apply(context, params);
	        };
	    };
	    /**
	     * Tests if a url param exists
	     *
	     * @param name The name of the url paramter to check
	     */
	    Util.urlParamExists = function (name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	        return regex.test(location.search);
	    };
	    /**
	     * Gets a url param value by name
	     *
	     * @param name The name of the paramter for which we want the value
	     */
	    Util.getUrlParamByName = function (name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	        var results = regex.exec(location.search);
	        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	    };
	    /**
	     * Gets a url param by name and attempts to parse a bool value
	     *
	     * @param name The name of the paramter for which we want the boolean value
	     */
	    Util.getUrlParamBoolByName = function (name) {
	        var p = this.getUrlParamByName(name);
	        var isFalse = (p === "" || /false|0/i.test(p));
	        return !isFalse;
	    };
	    /**
	     * Inserts the string s into the string target as the index specified by index
	     *
	     * @param target The string into which we will insert s
	     * @param index The location in target to insert s (zero based)
	     * @param s The string to insert into target at position index
	     */
	    Util.stringInsert = function (target, index, s) {
	        if (index > 0) {
	            return target.substring(0, index) + s + target.substring(index, target.length);
	        }
	        return s + target;
	    };
	    /**
	     * Adds a value to a date
	     *
	     * @param date The date to which we will add units, done in local time
	     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
	     * @param units The amount to add to date of the given interval
	     *
	     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
	     */
	    Util.dateAdd = function (date, interval, units) {
	        var ret = new Date(date.toLocaleString()); // don't change original date
	        switch (interval.toLowerCase()) {
	            case "year":
	                ret.setFullYear(ret.getFullYear() + units);
	                break;
	            case "quarter":
	                ret.setMonth(ret.getMonth() + 3 * units);
	                break;
	            case "month":
	                ret.setMonth(ret.getMonth() + units);
	                break;
	            case "week":
	                ret.setDate(ret.getDate() + 7 * units);
	                break;
	            case "day":
	                ret.setDate(ret.getDate() + units);
	                break;
	            case "hour":
	                ret.setTime(ret.getTime() + units * 3600000);
	                break;
	            case "minute":
	                ret.setTime(ret.getTime() + units * 60000);
	                break;
	            case "second":
	                ret.setTime(ret.getTime() + units * 1000);
	                break;
	            default:
	                ret = undefined;
	                break;
	        }
	        return ret;
	    };
	    /**
	     * Loads a stylesheet into the current page
	     *
	     * @param path The url to the stylesheet
	     * @param avoidCache If true a value will be appended as a query string to avoid browser caching issues
	     */
	    Util.loadStylesheet = function (path, avoidCache) {
	        if (avoidCache) {
	            path += "?" + encodeURIComponent((new Date()).getTime().toString());
	        }
	        var head = document.getElementsByTagName("head");
	        if (head.length > 0) {
	            var e = document.createElement("link");
	            head[0].appendChild(e);
	            e.setAttribute("type", "text/css");
	            e.setAttribute("rel", "stylesheet");
	            e.setAttribute("href", path);
	        }
	    };
	    /**
	     * Combines an arbitrary set of paths ensuring that the slashes are normalized
	     *
	     * @param paths 0 to n path parts to combine
	     */
	    Util.combinePaths = function () {
	        var paths = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            paths[_i - 0] = arguments[_i];
	        }
	        var parts = [];
	        for (var i = 0; i < paths.length; i++) {
	            if (typeof paths[i] !== "undefined" && paths[i] !== null) {
	                parts.push(paths[i].replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""));
	            }
	        }
	        return parts.join("/").replace(/\\/, "/");
	    };
	    /**
	     * Gets a random string of chars length
	     *
	     * @param chars The length of the random string to generate
	     */
	    Util.getRandomString = function (chars) {
	        var text = "";
	        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	        for (var i = 0; i < chars; i++) {
	            text += possible.charAt(Math.floor(Math.random() * possible.length));
	        }
	        return text;
	    };
	    /**
	     * Gets a random GUID value
	     *
	     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	     */
	    /* tslint:disable no-bitwise */
	    Util.getGUID = function () {
	        var d = new Date().getTime();
	        var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	            var r = (d + Math.random() * 16) % 16 | 0;
	            d = Math.floor(d / 16);
	            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
	        });
	        return guid;
	    };
	    /* tslint:enable */
	    /**
	     * Determines if a given value is a function
	     *
	     * @param candidateFunction The thing to test for being a function
	     */
	    Util.isFunction = function (candidateFunction) {
	        return typeof candidateFunction === "function";
	    };
	    /**
	     * @returns whether the provided parameter is a JavaScript Array or not.
	    */
	    Util.isArray = function (array) {
	        if (Array.isArray) {
	            return Array.isArray(array);
	        }
	        return array && typeof array.length === "number" && array.constructor === Array;
	    };
	    /**
	     * Determines if a string is null or empty or undefined
	     *
	     * @param s The string to test
	     */
	    Util.stringIsNullOrEmpty = function (s) {
	        return typeof s === "undefined" || s === null || s === "";
	    };
	    /**
	     * Provides functionality to extend the given object by doing a shallow copy
	     *
	     * @param target The object to which properties will be copied
	     * @param source The source object from which properties will be copied
	     * @param noOverwrite If true existing properties on the target are not overwritten from the source
	     *
	     */
	    /* tslint:disable:forin */
	    Util.extend = function (target, source, noOverwrite) {
	        if (noOverwrite === void 0) { noOverwrite = false; }
	        var result = {};
	        for (var id in target) {
	            result[id] = target[id];
	        }
	        // ensure we don't overwrite things we don't want overwritten
	        var check = noOverwrite ? function (o, i) { return !o.hasOwnProperty(i); } : function (o, i) { return true; };
	        for (var id in source) {
	            if (check(result, id)) {
	                result[id] = source[id];
	            }
	        }
	        return result;
	    };
	    /* tslint:enable */
	    /**
	     * Applies one or more mixins to the supplied target
	     *
	     * @param derivedCtor The classto which we will apply the mixins
	     * @param baseCtors One or more mixin classes to apply
	     */
	    Util.applyMixins = function (derivedCtor) {
	        var baseCtors = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            baseCtors[_i - 1] = arguments[_i];
	        }
	        baseCtors.forEach(function (baseCtor) {
	            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
	                derivedCtor.prototype[name] = baseCtor.prototype[name];
	            });
	        });
	    };
	    /**
	     * Determines if a given url is absolute
	     *
	     * @param url The url to check to see if it is absolute
	     */
	    Util.isUrlAbsolute = function (url) {
	        return /^https?:\/\/|^\/\//i.test(url);
	    };
	    /**
	     * Attempts to make the supplied relative url absolute based on the _spPageContextInfo object, if available
	     *
	     * @param url The relative url to make absolute
	     */
	    Util.makeUrlAbsolute = function (url) {
	        if (Util.isUrlAbsolute(url)) {
	            return url;
	        }
	        if (typeof global._spPageContextInfo !== "undefined") {
	            if (global._spPageContextInfo.hasOwnProperty("webAbsoluteUrl")) {
	                return Util.combinePaths(global._spPageContextInfo.webAbsoluteUrl, url);
	            }
	            else if (global._spPageContextInfo.hasOwnProperty("webServerRelativeUrl")) {
	                return Util.combinePaths(global._spPageContextInfo.webServerRelativeUrl, url);
	            }
	        }
	        else {
	            return url;
	        }
	    };
	    return Util;
	}());
	exports.Util = Util;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(253);
	/**
	 * A wrapper class to provide a consistent interface to browser based storage
	 *
	 */
	var PnPClientStorageWrapper = (function () {
	    /**
	     * Creates a new instance of the PnPClientStorageWrapper class
	     *
	     * @constructor
	     */
	    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
	        this.store = store;
	        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
	        this.defaultTimeoutMinutes = (defaultTimeoutMinutes === void 0) ? 5 : defaultTimeoutMinutes;
	        this.enabled = this.test();
	    }
	    /**
	     * Get a value from storage, or null if that value does not exist
	     *
	     * @param key The key whose value we want to retrieve
	     */
	    PnPClientStorageWrapper.prototype.get = function (key) {
	        if (!this.enabled) {
	            return null;
	        }
	        var o = this.store.getItem(key);
	        if (o == null) {
	            return null;
	        }
	        var persistable = JSON.parse(o);
	        if (new Date(persistable.expiration) <= new Date()) {
	            this.delete(key);
	            return null;
	        }
	        else {
	            return persistable.value;
	        }
	    };
	    /**
	     * Adds a value to the underlying storage
	     *
	     * @param key The key to use when storing the provided value
	     * @param o The value to store
	     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
	     */
	    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
	        if (this.enabled) {
	            this.store.setItem(key, this.createPersistable(o, expire));
	        }
	    };
	    /**
	     * Deletes a value from the underlying storage
	     *
	     * @param key The key of the pair we want to remove from storage
	     */
	    PnPClientStorageWrapper.prototype.delete = function (key) {
	        if (this.enabled) {
	            this.store.removeItem(key);
	        }
	    };
	    /**
	     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
	     *
	     * @param key The key to use when storing the provided value
	     * @param getter A function which will upon execution provide the desired value
	     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
	     */
	    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
	        var _this = this;
	        if (!this.enabled) {
	            return getter();
	        }
	        if (!util_1.Util.isFunction(getter)) {
	            throw "Function expected for parameter 'getter'.";
	        }
	        return new Promise(function (resolve, reject) {
	            var o = _this.get(key);
	            if (o == null) {
	                getter().then(function (d) {
	                    _this.put(key, d, expire);
	                    resolve(d);
	                });
	            }
	            else {
	                resolve(o);
	            }
	        });
	    };
	    /**
	     * Used to determine if the wrapped storage is available currently
	     */
	    PnPClientStorageWrapper.prototype.test = function () {
	        var str = "test";
	        try {
	            this.store.setItem(str, str);
	            this.store.removeItem(str);
	            return true;
	        }
	        catch (e) {
	            return false;
	        }
	    };
	    /**
	     * Creates the persistable to store
	     */
	    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
	        if (typeof expire === "undefined") {
	            expire = util_1.Util.dateAdd(new Date(), "minute", this.defaultTimeoutMinutes);
	        }
	        return JSON.stringify({ expiration: expire, value: o });
	    };
	    return PnPClientStorageWrapper;
	}());
	exports.PnPClientStorageWrapper = PnPClientStorageWrapper;
	/**
	 * A class that will establish wrappers for both local and session storage
	 */
	var PnPClientStorage = (function () {
	    /**
	     * Creates a new instance of the PnPClientStorage class
	     *
	     * @constructor
	     */
	    function PnPClientStorage() {
	        this.local = typeof localStorage !== "undefined" ? new PnPClientStorageWrapper(localStorage) : null;
	        this.session = typeof sessionStorage !== "undefined" ? new PnPClientStorageWrapper(sessionStorage) : null;
	    }
	    return PnPClientStorage;
	}());
	exports.PnPClientStorage = PnPClientStorage;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(256);
	var providers = __webpack_require__(257);
	/**
	 * Class used to manage the current application settings
	 *
	 */
	var Settings = (function () {
	    /**
	     * Creates a new instance of the settings class
	     *
	     * @constructor
	     */
	    function Settings() {
	        /**
	         * Set of pre-defined providers which are available from this library
	         */
	        this.Providers = providers;
	        this._settings = new Collections.Dictionary();
	    }
	    /**
	     * Adds a new single setting, or overwrites a previous setting with the same key
	     *
	     * @param {string} key The key used to store this setting
	     * @param {string} value The setting value to store
	     */
	    Settings.prototype.add = function (key, value) {
	        this._settings.add(key, value);
	    };
	    /**
	     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
	     *
	     * @param {string} key The key used to store this setting
	     * @param {any} value The setting value to store
	     */
	    Settings.prototype.addJSON = function (key, value) {
	        this._settings.add(key, JSON.stringify(value));
	    };
	    /**
	     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
	     *
	     * @param {Collections.TypedHash<any>} hash The set of values to add
	     */
	    Settings.prototype.apply = function (hash) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            try {
	                _this._settings.merge(hash);
	                resolve();
	            }
	            catch (e) {
	                reject(e);
	            }
	        });
	    };
	    /**
	     * Loads configuration settings into the collection from the supplied provider and returns a Promise
	     *
	     * @param {IConfigurationProvider} provider The provider from which we will load the settings
	     */
	    Settings.prototype.load = function (provider) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            provider.getConfiguration().then(function (value) {
	                _this._settings.merge(value);
	                resolve();
	            }).catch(function (reason) {
	                reject(reason);
	            });
	        });
	    };
	    /**
	     * Gets a value from the configuration
	     *
	     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
	     * @return {string} string value from the configuration
	     */
	    Settings.prototype.get = function (key) {
	        return this._settings.get(key);
	    };
	    /**
	     * Gets a JSON value, rehydrating the stored string to the original object
	     *
	     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
	     * @return {any} object from the configuration
	     */
	    Settings.prototype.getJSON = function (key) {
	        var o = this.get(key);
	        if (typeof o === "undefined" || o === null) {
	            return o;
	        }
	        return JSON.parse(o);
	    };
	    return Settings;
	}());
	exports.Settings = Settings;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(253);
	/**
	 * Generic dictionary
	 */
	var Dictionary = (function () {
	    /**
	     * Creates a new instance of the Dictionary<T> class
	     *
	     * @constructor
	     */
	    function Dictionary() {
	        this.keys = [];
	        this.values = [];
	    }
	    /**
	     * Gets a value from the collection using the specified key
	     *
	     * @param key The key whose value we want to return, returns null if the key does not exist
	     */
	    Dictionary.prototype.get = function (key) {
	        var index = this.keys.indexOf(key);
	        if (index < 0) {
	            return null;
	        }
	        return this.values[index];
	    };
	    /**
	     * Adds the supplied key and value to the dictionary
	     *
	     * @param key The key to add
	     * @param o The value to add
	     */
	    Dictionary.prototype.add = function (key, o) {
	        var index = this.keys.indexOf(key);
	        if (index > -1) {
	            this.values[index] = o;
	        }
	        else {
	            this.keys.push(key);
	            this.values.push(o);
	        }
	    };
	    /**
	     * Merges the supplied typed hash into this dictionary instance. Existing values are updated and new ones are created as appropriate.
	     */
	    /* tslint:disable no-string-literal */
	    Dictionary.prototype.merge = function (source) {
	        if (util_1.Util.isFunction(source["getKeys"])) {
	            var sourceAsDictionary = source;
	            var keys = sourceAsDictionary.getKeys();
	            var l = keys.length;
	            for (var i = 0; i < l; i++) {
	                this.add(keys[i], sourceAsDictionary.get(keys[i]));
	            }
	        }
	        else {
	            var sourceAsHash = source;
	            for (var key in sourceAsHash) {
	                if (sourceAsHash.hasOwnProperty(key)) {
	                    this.add(key, source[key]);
	                }
	            }
	        }
	    };
	    /* tslint:enable */
	    /**
	     * Removes a value from the dictionary
	     *
	     * @param key The key of the key/value pair to remove. Returns null if the key was not found.
	     */
	    Dictionary.prototype.remove = function (key) {
	        var index = this.keys.indexOf(key);
	        if (index < 0) {
	            // could throw an exception here
	            return null;
	        }
	        var val = this.values[index];
	        this.keys.splice(index, 1);
	        this.values.splice(index, 1);
	        return val;
	    };
	    /**
	     * Returns all the keys currently in the dictionary as an array
	     */
	    Dictionary.prototype.getKeys = function () {
	        return this.keys;
	    };
	    /**
	     * Returns all the values currently in the dictionary as an array
	     */
	    Dictionary.prototype.getValues = function () {
	        return this.values;
	    };
	    /**
	     * Clears the current dictionary
	     */
	    Dictionary.prototype.clear = function () {
	        this.keys = [];
	        this.values = [];
	    };
	    /**
	     * Gets a count of the items currently in the dictionary
	     */
	    Dictionary.prototype.count = function () {
	        return this.keys.length;
	    };
	    return Dictionary;
	}());
	exports.Dictionary = Dictionary;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cachingConfigurationProvider_1 = __webpack_require__(258);
	var spListConfigurationProvider_1 = __webpack_require__(259);
	exports.CachingConfigurationProvider = cachingConfigurationProvider_1.default;
	exports.SPListConfigurationProvider = spListConfigurationProvider_1.default;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storage = __webpack_require__(254);
	/**
	 * A caching provider which can wrap other non-caching providers
	 *
	 */
	var CachingConfigurationProvider = (function () {
	    /**
	     * Creates a new caching configuration provider
	     * @constructor
	     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
	     * @param {string} cacheKey Key that will be used to store cached items to the cache
	     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
	     */
	    function CachingConfigurationProvider(wrappedProvider, cacheKey, cacheStore) {
	        this.wrappedProvider = wrappedProvider;
	        this.store = (cacheStore) ? cacheStore : this.selectPnPCache();
	        this.cacheKey = "_configcache_" + cacheKey;
	    }
	    /**
	     * Gets the wrapped configuration providers
	     *
	     * @return {IConfigurationProvider} Wrapped configuration provider
	     */
	    CachingConfigurationProvider.prototype.getWrappedProvider = function () {
	        return this.wrappedProvider;
	    };
	    /**
	     * Loads the configuration values either from the cache or from the wrapped provider
	     *
	     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
	     */
	    CachingConfigurationProvider.prototype.getConfiguration = function () {
	        var _this = this;
	        // Cache not available, pass control to  the wrapped provider
	        if ((!this.store) || (!this.store.enabled)) {
	            return this.wrappedProvider.getConfiguration();
	        }
	        // Value is found in cache, return it directly
	        var cachedConfig = this.store.get(this.cacheKey);
	        if (cachedConfig) {
	            return new Promise(function (resolve, reject) {
	                resolve(cachedConfig);
	            });
	        }
	        // Get and cache value from the wrapped provider
	        var providerPromise = this.wrappedProvider.getConfiguration();
	        providerPromise.then(function (providedConfig) {
	            _this.store.put(_this.cacheKey, providedConfig);
	        });
	        return providerPromise;
	    };
	    CachingConfigurationProvider.prototype.selectPnPCache = function () {
	        var pnpCache = new storage.PnPClientStorage();
	        if ((pnpCache.local) && (pnpCache.local.enabled)) {
	            return pnpCache.local;
	        }
	        if ((pnpCache.session) && (pnpCache.session.enabled)) {
	            return pnpCache.session;
	        }
	        throw new Error("Cannot create a caching configuration provider since cache is not available.");
	    };
	    return CachingConfigurationProvider;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CachingConfigurationProvider;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cachingConfigurationProvider_1 = __webpack_require__(258);
	/**
	 * A configuration provider which loads configuration values from a SharePoint list
	 *
	 */
	var SPListConfigurationProvider = (function () {
	    /**
	     * Creates a new SharePoint list based configuration provider
	     * @constructor
	     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
	     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default = "config")
	     */
	    function SPListConfigurationProvider(sourceWeb, sourceListTitle) {
	        if (sourceListTitle === void 0) { sourceListTitle = "config"; }
	        this.sourceWeb = sourceWeb;
	        this.sourceListTitle = sourceListTitle;
	    }
	    Object.defineProperty(SPListConfigurationProvider.prototype, "web", {
	        /**
	         * Gets the url of the SharePoint site, where the configuration list is located
	         *
	         * @return {string} Url address of the site
	         */
	        get: function () {
	            return this.sourceWeb;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SPListConfigurationProvider.prototype, "listTitle", {
	        /**
	         * Gets the title of the SharePoint list, which contains the configuration settings
	         *
	         * @return {string} List title
	         */
	        get: function () {
	            return this.sourceListTitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Loads the configuration values from the SharePoint list
	     *
	     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
	     */
	    SPListConfigurationProvider.prototype.getConfiguration = function () {
	        return this.web.lists.getByTitle(this.listTitle).items.select("Title", "Value")
	            .getAs().then(function (data) {
	            var configuration = {};
	            data.forEach(function (i) {
	                configuration[i.Title] = i.Value;
	            });
	            return configuration;
	        });
	    };
	    /**
	     * Wraps the current provider in a cache enabled provider
	     *
	     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
	     */
	    SPListConfigurationProvider.prototype.asCaching = function () {
	        var cacheKey = "splist_" + this.web.toUrl() + "+" + this.listTitle;
	        return new cachingConfigurationProvider_1.default(this, cacheKey);
	    };
	    return SPListConfigurationProvider;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SPListConfigurationProvider;


/***/ },
/* 260 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * A set of logging levels
	 *
	 */
	(function (LogLevel) {
	    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
	    LogLevel[LogLevel["Info"] = 1] = "Info";
	    LogLevel[LogLevel["Warning"] = 2] = "Warning";
	    LogLevel[LogLevel["Error"] = 3] = "Error";
	    LogLevel[LogLevel["Off"] = 99] = "Off";
	})(exports.LogLevel || (exports.LogLevel = {}));
	var LogLevel = exports.LogLevel;
	/**
	 * Class used to subscribe ILogListener and log messages throughout an application
	 *
	 */
	var Logger = (function () {
	    function Logger() {
	    }
	    Object.defineProperty(Logger, "activeLogLevel", {
	        get: function () {
	            return Logger.instance.activeLogLevel;
	        },
	        set: function (value) {
	            Logger.instance.activeLogLevel = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Logger, "instance", {
	        get: function () {
	            if (typeof Logger._instance === "undefined" || Logger._instance === null) {
	                Logger._instance = new LoggerImpl();
	            }
	            return Logger._instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds an ILogListener instance to the set of subscribed listeners
	     *
	     * @param listeners One or more listeners to subscribe to this log
	     */
	    Logger.subscribe = function () {
	        var listeners = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            listeners[_i - 0] = arguments[_i];
	        }
	        for (var i = 0; i < listeners.length; i++) {
	            Logger.instance.subscribe(listeners[i]);
	        }
	    };
	    /**
	     * Clears the subscribers collection, returning the collection before modifiction
	     */
	    Logger.clearSubscribers = function () {
	        return Logger.instance.clearSubscribers();
	    };
	    Object.defineProperty(Logger, "count", {
	        /**
	         * Gets the current subscriber count
	         */
	        get: function () {
	            return Logger.instance.count;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Writes the supplied string to the subscribed listeners
	     *
	     * @param message The message to write
	     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
	     */
	    Logger.write = function (message, level) {
	        if (level === void 0) { level = LogLevel.Verbose; }
	        Logger.instance.log({ level: level, message: message });
	    };
	    /**
	     * Logs the supplied entry to the subscribed listeners
	     *
	     * @param entry The message to log
	     */
	    Logger.log = function (entry) {
	        Logger.instance.log(entry);
	    };
	    /**
	     * Logs performance tracking data for the the execution duration of the supplied function using console.profile
	     *
	     * @param name The name of this profile boundary
	     * @param f The function to execute and track within this performance boundary
	     */
	    Logger.measure = function (name, f) {
	        return Logger.instance.measure(name, f);
	    };
	    return Logger;
	}());
	exports.Logger = Logger;
	var LoggerImpl = (function () {
	    function LoggerImpl(activeLogLevel, subscribers) {
	        if (activeLogLevel === void 0) { activeLogLevel = LogLevel.Warning; }
	        if (subscribers === void 0) { subscribers = []; }
	        this.activeLogLevel = activeLogLevel;
	        this.subscribers = subscribers;
	    }
	    LoggerImpl.prototype.subscribe = function (listener) {
	        this.subscribers.push(listener);
	    };
	    LoggerImpl.prototype.clearSubscribers = function () {
	        var s = this.subscribers.slice(0);
	        this.subscribers.length = 0;
	        return s;
	    };
	    Object.defineProperty(LoggerImpl.prototype, "count", {
	        get: function () {
	            return this.subscribers.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LoggerImpl.prototype.write = function (message, level) {
	        if (level === void 0) { level = LogLevel.Verbose; }
	        this.log({ level: level, message: message });
	    };
	    LoggerImpl.prototype.log = function (entry) {
	        if (typeof entry === "undefined" || entry.level < this.activeLogLevel) {
	            return;
	        }
	        for (var i = 0; i < this.subscribers.length; i++) {
	            this.subscribers[i].log(entry);
	        }
	    };
	    LoggerImpl.prototype.measure = function (name, f) {
	        console.profile(name);
	        try {
	            return f();
	        }
	        finally {
	            console.profileEnd();
	        }
	    };
	    return LoggerImpl;
	}());
	/**
	 * Implementation of ILogListener which logs to the browser console
	 *
	 */
	var ConsoleListener = (function () {
	    function ConsoleListener() {
	    }
	    /**
	     * Any associated data that a given logging listener may choose to log or ignore
	     *
	     * @param entry The information to be logged
	     */
	    ConsoleListener.prototype.log = function (entry) {
	        var msg = this.format(entry);
	        switch (entry.level) {
	            case LogLevel.Verbose:
	            case LogLevel.Info:
	                console.log(msg);
	                break;
	            case LogLevel.Warning:
	                console.warn(msg);
	                break;
	            case LogLevel.Error:
	                console.error(msg);
	                break;
	        }
	    };
	    /**
	     * Formats the message
	     *
	     * @param entry The information to format into a string
	     */
	    ConsoleListener.prototype.format = function (entry) {
	        return "Message: " + entry.message + ". Data: " + JSON.stringify(entry.data);
	    };
	    return ConsoleListener;
	}());
	exports.ConsoleListener = ConsoleListener;
	/* tslint:disable */
	/**
	 * Implementation of ILogListener which logs to Azure Insights
	 *
	 */
	var AzureInsightsListener = (function () {
	    /**
	     * Creats a new instance of the AzureInsightsListener class
	     *
	     * @constructor
	     * @param azureInsightsInstrumentationKey The instrumentation key created when the Azure Insights instance was created
	     */
	    function AzureInsightsListener(azureInsightsInstrumentationKey) {
	        this.azureInsightsInstrumentationKey = azureInsightsInstrumentationKey;
	        var appInsights = window["appInsights"] || function (config) {
	            function r(config) {
	                t[config] = function () {
	                    var i = arguments;
	                    t.queue.push(function () { t[config].apply(t, i); });
	                };
	            }
	            var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f;
	            for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) {
	                r("track" + i.pop());
	            }
	            return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) {
	                var s = f && f(config, r, u, e, o);
	                return s !== !0 && t["_" + i](config, r, u, e, o), s;
	            }), t;
	        }({
	            instrumentationKey: this.azureInsightsInstrumentationKey
	        });
	        window["appInsights"] = appInsights;
	    }
	    /**
	     * Any associated data that a given logging listener may choose to log or ignore
	     *
	     * @param entry The information to be logged
	     */
	    AzureInsightsListener.prototype.log = function (entry) {
	        var ai = window["appInsights"];
	        var msg = this.format(entry);
	        if (entry.level === LogLevel.Error) {
	            ai.trackException(msg);
	        }
	        else {
	            ai.trackEvent(msg);
	        }
	    };
	    /**
	     * Formats the message
	     *
	     * @param entry The information to format into a string
	     */
	    AzureInsightsListener.prototype.format = function (entry) {
	        return "Message: " + entry.message + ". Data: " + JSON.stringify(entry.data);
	    };
	    return AzureInsightsListener;
	}());
	exports.AzureInsightsListener = AzureInsightsListener;
	/* tslint:enable */
	/**
	 * Implementation of ILogListener which logs to the supplied function
	 *
	 */
	var FunctionListener = (function () {
	    /**
	     * Creates a new instance of the FunctionListener class
	     *
	     * @constructor
	     * @param  method The method to which any logging data will be passed
	     */
	    function FunctionListener(method) {
	        this.method = method;
	    }
	    /**
	     * Any associated data that a given logging listener may choose to log or ignore
	     *
	     * @param entry The information to be logged
	     */
	    FunctionListener.prototype.log = function (entry) {
	        this.method(entry);
	    };
	    return FunctionListener;
	}());
	exports.FunctionListener = FunctionListener;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var search_1 = __webpack_require__(262);
	var searchsuggest_1 = __webpack_require__(272);
	var site_1 = __webpack_require__(273);
	var webs_1 = __webpack_require__(274);
	var util_1 = __webpack_require__(253);
	var userprofiles_1 = __webpack_require__(293);
	/**
	 * Root of the SharePoint REST module
	 */
	var Rest = (function () {
	    function Rest() {
	    }
	    /**
	     * Executes a search against this web context
	     *
	     * @param query The SearchQuery definition
	     */
	    Rest.prototype.searchSuggest = function (query) {
	        var finalQuery;
	        if (typeof query === "string") {
	            finalQuery = { querytext: query };
	        }
	        else {
	            finalQuery = query;
	        }
	        return new searchsuggest_1.SearchSuggest("").execute(finalQuery);
	    };
	    /**
	     * Executes a search against this web context
	     *
	     * @param query The SearchQuery definition
	     */
	    Rest.prototype.search = function (query) {
	        var finalQuery;
	        if (typeof query === "string") {
	            finalQuery = { Querytext: query };
	        }
	        else {
	            finalQuery = query;
	        }
	        return new search_1.Search("").execute(finalQuery);
	    };
	    Object.defineProperty(Rest.prototype, "site", {
	        /**
	         * Begins a site collection scoped REST request
	         *
	         */
	        get: function () {
	            return new site_1.Site("");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rest.prototype, "web", {
	        /**
	         * Begins a web scoped REST request
	         *
	         */
	        get: function () {
	            return new webs_1.Web("");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rest.prototype, "profiles", {
	        /**
	         * Access to user profile methods
	         *
	         */
	        get: function () {
	            return new userprofiles_1.UserProfileQuery("");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a new batch object for use with the Queryable.addToBatch method
	     *
	     */
	    Rest.prototype.createBatch = function () {
	        return this.web.createBatch();
	    };
	    /**
	     * Begins a cross-domain, host site scoped REST request, for use in add-in webs
	     *
	     * @param addInWebUrl The absolute url of the add-in web
	     * @param hostWebUrl The absolute url of the host web
	     */
	    Rest.prototype.crossDomainSite = function (addInWebUrl, hostWebUrl) {
	        return this._cdImpl(site_1.Site, addInWebUrl, hostWebUrl, "site");
	    };
	    /**
	     * Begins a cross-domain, host web scoped REST request, for use in add-in webs
	     *
	     * @param addInWebUrl The absolute url of the add-in web
	     * @param hostWebUrl The absolute url of the host web
	     */
	    Rest.prototype.crossDomainWeb = function (addInWebUrl, hostWebUrl) {
	        return this._cdImpl(webs_1.Web, addInWebUrl, hostWebUrl, "web");
	    };
	    /**
	     * Implements the creation of cross domain REST urls
	     *
	     * @param factory The constructor of the object to create Site | Web
	     * @param addInWebUrl The absolute url of the add-in web
	     * @param hostWebUrl The absolute url of the host web
	     * @param urlPart String part to append to the url "site" | "web"
	     */
	    Rest.prototype._cdImpl = function (factory, addInWebUrl, hostWebUrl, urlPart) {
	        if (!util_1.Util.isUrlAbsolute(addInWebUrl)) {
	            throw "The addInWebUrl parameter must be an absolute url.";
	        }
	        if (!util_1.Util.isUrlAbsolute(hostWebUrl)) {
	            throw "The hostWebUrl parameter must be an absolute url.";
	        }
	        var url = util_1.Util.combinePaths(addInWebUrl, "_api/SP.AppContextSite(@target)");
	        var instance = new factory(url, urlPart);
	        instance.query.add("@target", "'" + encodeURIComponent(hostWebUrl) + "'");
	        return instance;
	    };
	    return Rest;
	}());
	exports.Rest = Rest;


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var util_1 = __webpack_require__(253);
	/**
	 * Describes the search API
	 *
	 */
	var Search = (function (_super) {
	    __extends(Search, _super);
	    /**
	     * Creates a new instance of the Search class
	     *
	     * @param baseUrl The url for the search context
	     * @param query The SearchQuery object to execute
	     */
	    function Search(baseUrl, path) {
	        if (path === void 0) { path = "_api/search/postquery"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * .......
	     * @returns Promise
	     */
	    Search.prototype.execute = function (query) {
	        var formattedBody;
	        formattedBody = query;
	        if (formattedBody.SelectProperties) {
	            formattedBody.SelectProperties = { results: query.SelectProperties };
	        }
	        if (formattedBody.RefinementFilters) {
	            formattedBody.RefinementFilters = { results: query.RefinementFilters };
	        }
	        if (formattedBody.SortList) {
	            formattedBody.SortList = { results: query.SortList };
	        }
	        if (formattedBody.HithighlightedProperties) {
	            formattedBody.HithighlightedProperties = { results: query.HithighlightedProperties };
	        }
	        if (formattedBody.ReorderingRules) {
	            formattedBody.ReorderingRules = { results: query.ReorderingRules };
	        }
	        if (formattedBody.Properties) {
	            formattedBody.Properties = { results: query.Properties };
	        }
	        var postBody = JSON.stringify({
	            request: util_1.Util.extend({
	                "__metadata": { "type": "Microsoft.Office.Server.Search.REST.SearchRequest" },
	            }, formattedBody),
	        });
	        return this.post({ body: postBody }).then(function (data) { return new SearchResults(data); });
	    };
	    return Search;
	}(queryable_1.QueryableInstance));
	exports.Search = Search;
	/**
	 * Describes the SearchResults class, which returns the formatted and raw version of the query response
	 */
	var SearchResults = (function () {
	    /**
	     * Creates a new instance of the SearchResult class
	     *
	     */
	    function SearchResults(rawResponse) {
	        var response = rawResponse.postquery ? rawResponse.postquery : rawResponse;
	        this.PrimarySearchResults = this.formatSearchResults(response.PrimaryQueryResult.RelevantResults.Table.Rows);
	        this.RawSearchResults = response;
	        this.ElapsedTime = response.ElapsedTime;
	        this.RowCount = response.PrimaryQueryResult.RelevantResults.RowCount;
	        this.TotalRows = response.PrimaryQueryResult.RelevantResults.TotalRows;
	        this.TotalRowsIncludingDuplicates = response.PrimaryQueryResult.RelevantResults.TotalRowsIncludingDuplicates;
	    }
	    /**
	     * Formats a search results array
	     *
	     * @param rawResults The array to process
	     */
	    SearchResults.prototype.formatSearchResults = function (rawResults) {
	        var results = new Array(), tempResults = rawResults.results ? rawResults.results : rawResults;
	        for (var _i = 0, tempResults_1 = tempResults; _i < tempResults_1.length; _i++) {
	            var i = tempResults_1[_i];
	            results.push(new SearchResult(i.Cells));
	        }
	        return results;
	    };
	    return SearchResults;
	}());
	exports.SearchResults = SearchResults;
	/**
	 * Describes the SearchResult class
	 */
	var SearchResult = (function () {
	    /**
	     * Creates a new instance of the SearchResult class
	     *
	     */
	    function SearchResult(rawItem) {
	        var item = rawItem.results ? rawItem.results : rawItem;
	        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
	            var i = item_1[_i];
	            this[i.Key] = i.Value;
	        }
	    }
	    return SearchResult;
	}());
	exports.SearchResult = SearchResult;
	/**
	 * defines the SortDirection enum
	 */
	(function (SortDirection) {
	    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
	    SortDirection[SortDirection["Descending"] = 1] = "Descending";
	    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
	})(exports.SortDirection || (exports.SortDirection = {}));
	var SortDirection = exports.SortDirection;
	/**
	 * defines the ReorderingRuleMatchType  enum
	 */
	(function (ReorderingRuleMatchType) {
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
	})(exports.ReorderingRuleMatchType || (exports.ReorderingRuleMatchType = {}));
	var ReorderingRuleMatchType = exports.ReorderingRuleMatchType;
	/**
	 * Specifies the type value for the property
	 */
	(function (QueryPropertyValueType) {
	    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
	    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
	    QueryPropertyValueType[QueryPropertyValueType["Int32TYpe"] = 2] = "Int32TYpe";
	    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
	    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
	    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
	})(exports.QueryPropertyValueType || (exports.QueryPropertyValueType = {}));
	var QueryPropertyValueType = exports.QueryPropertyValueType;


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(253);
	var logging_1 = __webpack_require__(260);
	var collections_1 = __webpack_require__(256);
	var httpclient_1 = __webpack_require__(264);
	var odata_1 = __webpack_require__(267);
	var caching_1 = __webpack_require__(271);
	var pnplibconfig_1 = __webpack_require__(268);
	/**
	 * Queryable Base Class
	 *
	 */
	var Queryable = (function () {
	    /**
	     * Creates a new instance of the Queryable class
	     *
	     * @constructor
	     * @param baseUrl A string or Queryable that should form the base part of the url
	     *
	     */
	    function Queryable(baseUrl, path) {
	        this._query = new collections_1.Dictionary();
	        this._batch = null;
	        if (typeof baseUrl === "string") {
	            // we need to do some extra parsing to get the parent url correct if we are
	            // being created from just a string.
	            var urlStr = baseUrl;
	            if (util_1.Util.isUrlAbsolute(urlStr) || urlStr.lastIndexOf("/") < 0) {
	                this._parentUrl = urlStr;
	                this._url = util_1.Util.combinePaths(urlStr, path);
	            }
	            else if (urlStr.lastIndexOf("/") > urlStr.lastIndexOf("(")) {
	                // .../items(19)/fields
	                var index = urlStr.lastIndexOf("/");
	                this._parentUrl = urlStr.slice(0, index);
	                path = util_1.Util.combinePaths(urlStr.slice(index), path);
	                this._url = util_1.Util.combinePaths(this._parentUrl, path);
	            }
	            else {
	                // .../items(19)
	                var index = urlStr.lastIndexOf("(");
	                this._parentUrl = urlStr.slice(0, index);
	                this._url = util_1.Util.combinePaths(urlStr, path);
	            }
	        }
	        else {
	            var q = baseUrl;
	            this._parentUrl = q._url;
	            var target = q._query.get("@target");
	            if (target !== null) {
	                this._query.add("@target", target);
	            }
	            this._url = util_1.Util.combinePaths(this._parentUrl, path);
	        }
	    }
	    /**
	     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
	     *
	     * @param pathPart The string to concatonate to the url
	     */
	    Queryable.prototype.concat = function (pathPart) {
	        this._url += pathPart;
	    };
	    /**
	     * Appends the given string and normalizes "/" chars
	     *
	     * @param pathPart The string to append
	     */
	    Queryable.prototype.append = function (pathPart) {
	        this._url = util_1.Util.combinePaths(this._url, pathPart);
	    };
	    /**
	     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
	     */
	    Queryable.prototype.addBatchDependency = function () {
	        if (this.hasBatch) {
	            return this._batch.addBatchDependency();
	        }
	        return function () { return null; };
	    };
	    Object.defineProperty(Queryable.prototype, "hasBatch", {
	        /**
	         * Indicates if the current query has a batch associated
	         *
	         */
	        get: function () {
	            return this._batch !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queryable.prototype, "parentUrl", {
	        /**
	         * Gets the parent url used when creating this instance
	         *
	         */
	        get: function () {
	            return this._parentUrl;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queryable.prototype, "query", {
	        /**
	         * Provides access to the query builder for this url
	         *
	         */
	        get: function () {
	            return this._query;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds this query to the supplied batch
	     *
	     * @example
	     * ```
	     *
	     * let b = pnp.sp.createBatch();
	     * pnp.sp.web.inBatch(b).get().then(...);
	     * b.execute().then(...)
	     * ```
	     */
	    Queryable.prototype.inBatch = function (batch) {
	        if (this._batch !== null) {
	            throw new Error("This query is already part of a batch.");
	        }
	        this._batch = batch;
	        return this;
	    };
	    /**
	     * Enables caching for this request
	     *
	     * @param options Defines the options used when caching this request
	     */
	    Queryable.prototype.usingCaching = function (options) {
	        if (!pnplibconfig_1.RuntimeConfig.globalCacheDisable) {
	            this._useCaching = true;
	            this._cachingOptions = options;
	        }
	        return this;
	    };
	    /**
	     * Gets the currentl url, made absolute based on the availability of the _spPageContextInfo object
	     *
	     */
	    Queryable.prototype.toUrl = function () {
	        return util_1.Util.makeUrlAbsolute(this._url);
	    };
	    /**
	     * Gets the full url with query information
	     *
	     */
	    Queryable.prototype.toUrlAndQuery = function () {
	        var _this = this;
	        var url = this.toUrl();
	        if (this._query.count() > 0) {
	            url += "?";
	            var keys = this._query.getKeys();
	            url += keys.map(function (key, ix, arr) { return (key + "=" + _this._query.get(key)); }).join("&");
	        }
	        return url;
	    };
	    /**
	     * Executes the currently built request
	     *
	     */
	    Queryable.prototype.get = function (parser, getOptions) {
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        if (getOptions === void 0) { getOptions = {}; }
	        return this.getImpl(getOptions, parser);
	    };
	    Queryable.prototype.getAs = function (parser, getOptions) {
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        if (getOptions === void 0) { getOptions = {}; }
	        return this.getImpl(getOptions, parser);
	    };
	    Queryable.prototype.post = function (postOptions, parser) {
	        if (postOptions === void 0) { postOptions = {}; }
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        return this.postImpl(postOptions, parser);
	    };
	    Queryable.prototype.postAs = function (postOptions, parser) {
	        if (postOptions === void 0) { postOptions = {}; }
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        return this.postImpl(postOptions, parser);
	    };
	    Queryable.prototype.patch = function (patchOptions, parser) {
	        if (patchOptions === void 0) { patchOptions = {}; }
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        return this.patchImpl(patchOptions, parser);
	    };
	    Queryable.prototype.delete = function (deleteOptions, parser) {
	        if (deleteOptions === void 0) { deleteOptions = {}; }
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        return this.deleteImpl(deleteOptions, parser);
	    };
	    /**
	     * Gets a parent for this instance as specified
	     *
	     * @param factory The contructor for the class to create
	     */
	    Queryable.prototype.getParent = function (factory, baseUrl, path) {
	        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
	        var parent = new factory(baseUrl, path);
	        var target = this.query.get("@target");
	        if (target !== null) {
	            parent.query.add("@target", target);
	        }
	        return parent;
	    };
	    Queryable.prototype.getImpl = function (getOptions, parser) {
	        var _this = this;
	        if (getOptions === void 0) { getOptions = {}; }
	        if (this._useCaching) {
	            var options = new caching_1.CachingOptions(this.toUrlAndQuery().toLowerCase());
	            if (typeof this._cachingOptions !== "undefined") {
	                options = util_1.Util.extend(options, this._cachingOptions);
	            }
	            // we may not have a valid store, i.e. on node
	            if (options.store !== null) {
	                // check if we have the data in cache and if so return a resolved promise
	                var data_1 = options.store.get(options.key);
	                if (data_1 !== null) {
	                    return new Promise(function (resolve) { return resolve(data_1); });
	                }
	            }
	            // if we don't then wrap the supplied parser in the caching parser wrapper
	            // and send things on their way
	            parser = new caching_1.CachingParserWrapper(parser, options);
	        }
	        if (!this.hasBatch) {
	            // we are not part of a batch, so proceed as normal
	            var client = new httpclient_1.HttpClient();
	            return client.get(this.toUrlAndQuery(), getOptions).then(function (response) {
	                return _this.processHttpClientResponse(response, parser);
	            });
	        }
	        else {
	            return this._batch.add(this.toUrlAndQuery(), "GET", getOptions, parser);
	        }
	    };
	    Queryable.prototype.postImpl = function (postOptions, parser) {
	        var _this = this;
	        if (!this.hasBatch) {
	            // we are not part of a batch, so proceed as normal
	            var client = new httpclient_1.HttpClient();
	            return client.post(this.toUrlAndQuery(), postOptions).then(function (response) {
	                return _this.processHttpClientResponse(response, parser);
	            });
	        }
	        else {
	            return this._batch.add(this.toUrlAndQuery(), "POST", postOptions, parser);
	        }
	    };
	    Queryable.prototype.patchImpl = function (patchOptions, parser) {
	        var _this = this;
	        if (!this.hasBatch) {
	            // we are not part of a batch, so proceed as normal
	            var client = new httpclient_1.HttpClient();
	            return client.patch(this.toUrlAndQuery(), patchOptions).then(function (response) {
	                return _this.processHttpClientResponse(response, parser);
	            });
	        }
	        else {
	            return this._batch.add(this.toUrlAndQuery(), "PATCH", patchOptions, parser);
	        }
	    };
	    Queryable.prototype.deleteImpl = function (deleteOptions, parser) {
	        var _this = this;
	        if (!this.hasBatch) {
	            // we are not part of a batch, so proceed as normal
	            var client = new httpclient_1.HttpClient();
	            return client.delete(this.toUrlAndQuery(), deleteOptions).then(function (response) {
	                return _this.processHttpClientResponse(response, parser);
	            });
	        }
	        else {
	            return this._batch.add(this.toUrlAndQuery(), "DELETE", deleteOptions, parser);
	        }
	    };
	    Queryable.prototype.processHttpClientResponse = function (response, parser) {
	        // 200 = OK (get, delete)
	        // 201 = Created (create)
	        // 204 = No Content (update)
	        if (!response.ok) {
	            response.text().then(function (text) {
	                logging_1.Logger.log({
	                    data: response,
	                    level: logging_1.LogLevel.Error,
	                    message: text,
	                });
	                throw "Error making HttpClient request in queryable: " + response.statusText;
	            });
	        }
	        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0)
	            || response.status === 204) {
	            // in these cases the server has returned no content, so we create an empty object
	            // this was done because the fetch browser methods throw exceptions with no content
	            return new Promise(function (resolve, reject) { resolve({}); });
	        }
	        // pipe our parsed content
	        return parser.parse(response);
	    };
	    return Queryable;
	}());
	exports.Queryable = Queryable;
	/**
	 * Represents a REST collection which can be filtered, paged, and selected
	 *
	 */
	var QueryableCollection = (function (_super) {
	    __extends(QueryableCollection, _super);
	    function QueryableCollection() {
	        _super.apply(this, arguments);
	    }
	    /**
	     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
	     *
	     * @param filter The string representing the filter query
	     */
	    QueryableCollection.prototype.filter = function (filter) {
	        this._query.add("$filter", filter);
	        return this;
	    };
	    /**
	     * Choose which fields to return
	     *
	     * @param selects One or more fields to return
	     */
	    QueryableCollection.prototype.select = function () {
	        var selects = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            selects[_i - 0] = arguments[_i];
	        }
	        this._query.add("$select", selects.join(","));
	        return this;
	    };
	    /**
	     * Expands fields such as lookups to get additional data
	     *
	     * @param expands The Fields for which to expand the values
	     */
	    QueryableCollection.prototype.expand = function () {
	        var expands = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            expands[_i - 0] = arguments[_i];
	        }
	        this._query.add("$expand", expands.join(","));
	        return this;
	    };
	    /**
	     * Orders based on the supplied fields ascending
	     *
	     * @param orderby The name of the field to sort on
	     * @param ascending If false DESC is appended, otherwise ASC (default)
	     */
	    QueryableCollection.prototype.orderBy = function (orderBy, ascending) {
	        if (ascending === void 0) { ascending = true; }
	        var keys = this._query.getKeys();
	        var query = [];
	        var asc = ascending ? " asc" : " desc";
	        for (var i = 0; i < keys.length; i++) {
	            if (keys[i] === "$orderby") {
	                query.push(this._query.get("$orderby"));
	                break;
	            }
	        }
	        query.push("" + orderBy + asc);
	        this._query.add("$orderby", query.join(","));
	        return this;
	    };
	    /**
	     * Skips the specified number of items
	     *
	     * @param skip The number of items to skip
	     */
	    QueryableCollection.prototype.skip = function (skip) {
	        this._query.add("$skip", skip.toString());
	        return this;
	    };
	    /**
	     * Limits the query to only return the specified number of items
	     *
	     * @param top The query row limit
	     */
	    QueryableCollection.prototype.top = function (top) {
	        this._query.add("$top", top.toString());
	        return this;
	    };
	    return QueryableCollection;
	}(Queryable));
	exports.QueryableCollection = QueryableCollection;
	/**
	 * Represents an instance that can be selected
	 *
	 */
	var QueryableInstance = (function (_super) {
	    __extends(QueryableInstance, _super);
	    function QueryableInstance() {
	        _super.apply(this, arguments);
	    }
	    /**
	     * Choose which fields to return
	     *
	     * @param selects One or more fields to return
	     */
	    QueryableInstance.prototype.select = function () {
	        var selects = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            selects[_i - 0] = arguments[_i];
	        }
	        this._query.add("$select", selects.join(","));
	        return this;
	    };
	    /**
	     * Expands fields such as lookups to get additional data
	     *
	     * @param expands The Fields for which to expand the values
	     */
	    QueryableInstance.prototype.expand = function () {
	        var expands = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            expands[_i - 0] = arguments[_i];
	        }
	        this._query.add("$expand", expands.join(","));
	        return this;
	    };
	    return QueryableInstance;
	}(Queryable));
	exports.QueryableInstance = QueryableInstance;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fetchclient_1 = __webpack_require__(265);
	var digestcache_1 = __webpack_require__(266);
	var util_1 = __webpack_require__(253);
	var pnplibconfig_1 = __webpack_require__(268);
	var sprequestexecutorclient_1 = __webpack_require__(269);
	var nodefetchclient_1 = __webpack_require__(270);
	var HttpClient = (function () {
	    function HttpClient() {
	        this._impl = this.getFetchImpl();
	        this._digestCache = new digestcache_1.DigestCache(this);
	    }
	    HttpClient.prototype.fetch = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var self = this;
	        var opts = util_1.Util.extend(options, { cache: "no-cache", credentials: "same-origin" }, true);
	        var headers = new Headers();
	        // first we add the global headers so they can be overwritten by any passed in locally to this call
	        this.mergeHeaders(headers, pnplibconfig_1.RuntimeConfig.headers);
	        // second we add the local options so we can overwrite the globals
	        this.mergeHeaders(headers, options.headers);
	        // lastly we apply any default headers we need that may not exist
	        if (!headers.has("Accept")) {
	            headers.append("Accept", "application/json");
	        }
	        if (!headers.has("Content-Type")) {
	            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
	        }
	        if (!headers.has("X-ClientService-ClientTag")) {
	            headers.append("X-ClientService-ClientTag", "PnPCoreJS:1.0.6");
	        }
	        opts = util_1.Util.extend(opts, { headers: headers });
	        if (opts.method && opts.method.toUpperCase() !== "GET") {
	            if (!headers.has("X-RequestDigest")) {
	                var index = url.indexOf("_api/");
	                if (index < 0) {
	                    throw new Error("Unable to determine API url");
	                }
	                var webUrl = url.substr(0, index);
	                return this._digestCache.getDigest(webUrl)
	                    .then(function (digest) {
	                    headers.append("X-RequestDigest", digest);
	                    return self.fetchRaw(url, opts);
	                });
	            }
	        }
	        return self.fetchRaw(url, opts);
	    };
	    HttpClient.prototype.fetchRaw = function (url, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // here we need to normalize the headers
	        var rawHeaders = new Headers();
	        this.mergeHeaders(rawHeaders, options.headers);
	        options = util_1.Util.extend(options, { headers: rawHeaders });
	        var retry = function (ctx) {
	            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
	                // grab our current delay
	                var delay = ctx.delay;
	                // Check if request was throttled - http status code 429 
	                // Check is request failed due to server unavailable - http status code 503 
	                if (response.status !== 429 && response.status !== 503) {
	                    ctx.reject(response);
	                }
	                // Increment our counters.
	                ctx.delay *= 2;
	                ctx.attempts++;
	                // If we have exceeded the retry count, reject.
	                if (ctx.retryCount <= ctx.attempts) {
	                    ctx.reject(response);
	                }
	                // Set our retry timeout for {delay} milliseconds.
	                setTimeout(util_1.Util.getCtxCallback(_this, retry, ctx), delay);
	            });
	        };
	        return new Promise(function (resolve, reject) {
	            var retryContext = {
	                attempts: 0,
	                delay: 100,
	                reject: reject,
	                resolve: resolve,
	                retryCount: 7,
	            };
	            retry.call(_this, retryContext);
	        });
	    };
	    HttpClient.prototype.get = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var opts = util_1.Util.extend(options, { method: "GET" });
	        return this.fetch(url, opts);
	    };
	    HttpClient.prototype.post = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var opts = util_1.Util.extend(options, { method: "POST" });
	        return this.fetch(url, opts);
	    };
	    HttpClient.prototype.patch = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var opts = util_1.Util.extend(options, { method: "PATCH" });
	        return this.fetch(url, opts);
	    };
	    HttpClient.prototype.delete = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var opts = util_1.Util.extend(options, { method: "DELETE" });
	        return this.fetch(url, opts);
	    };
	    HttpClient.prototype.getFetchImpl = function () {
	        if (pnplibconfig_1.RuntimeConfig.useSPRequestExecutor) {
	            return new sprequestexecutorclient_1.SPRequestExecutorClient();
	        }
	        else if (pnplibconfig_1.RuntimeConfig.useNodeFetchClient) {
	            var opts = pnplibconfig_1.RuntimeConfig.nodeRequestOptions;
	            return new nodefetchclient_1.NodeFetchClient(opts.siteUrl, opts.clientId, opts.clientSecret);
	        }
	        else {
	            return new fetchclient_1.FetchClient();
	        }
	    };
	    HttpClient.prototype.mergeHeaders = function (target, source) {
	        if (typeof source !== "undefined" && source !== null) {
	            var temp = new Request("", { headers: source });
	            temp.headers.forEach(function (value, name) {
	                target.append(name, value);
	            });
	        }
	    };
	    return HttpClient;
	}());
	exports.HttpClient = HttpClient;


/***/ },
/* 265 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	/**
	 * Makes requests using the fetch API
	 */
	var FetchClient = (function () {
	    function FetchClient() {
	    }
	    FetchClient.prototype.fetch = function (url, options) {
	        return global.fetch(url, options);
	    };
	    return FetchClient;
	}());
	exports.FetchClient = FetchClient;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(256);
	var util_1 = __webpack_require__(253);
	var odata_1 = __webpack_require__(267);
	var CachedDigest = (function () {
	    function CachedDigest() {
	    }
	    return CachedDigest;
	}());
	exports.CachedDigest = CachedDigest;
	var DigestCache = (function () {
	    function DigestCache(_httpClient, _digests) {
	        if (_digests === void 0) { _digests = new collections_1.Dictionary(); }
	        this._httpClient = _httpClient;
	        this._digests = _digests;
	    }
	    DigestCache.prototype.getDigest = function (webUrl) {
	        var self = this;
	        var cachedDigest = this._digests.get(webUrl);
	        if (cachedDigest !== null) {
	            var now = new Date();
	            if (now < cachedDigest.expiration) {
	                return Promise.resolve(cachedDigest.value);
	            }
	        }
	        var url = util_1.Util.combinePaths(webUrl, "/_api/contextinfo");
	        return self._httpClient.fetchRaw(url, {
	            cache: "no-cache",
	            credentials: "same-origin",
	            headers: {
	                "Accept": "application/json;odata=verbose",
	                "Content-type": "application/json;odata=verbose;charset=utf-8",
	            },
	            method: "POST",
	        }).then(function (response) {
	            var parser = new odata_1.ODataDefaultParser();
	            return parser.parse(response).then(function (d) { return d.GetContextWebInformation; });
	        }).then(function (data) {
	            var newCachedDigest = new CachedDigest();
	            newCachedDigest.value = data.FormDigestValue;
	            var seconds = data.FormDigestTimeoutSeconds;
	            var expiration = new Date();
	            expiration.setTime(expiration.getTime() + 1000 * seconds);
	            newCachedDigest.expiration = expiration;
	            self._digests.add(webUrl, newCachedDigest);
	            return newCachedDigest.value;
	        });
	    };
	    DigestCache.prototype.clear = function () {
	        this._digests.clear();
	    };
	    return DigestCache;
	}());
	exports.DigestCache = DigestCache;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(253);
	var logging_1 = __webpack_require__(260);
	var httpclient_1 = __webpack_require__(264);
	var pnplibconfig_1 = __webpack_require__(268);
	function extractOdataId(candidate) {
	    if (candidate.hasOwnProperty("odata.id")) {
	        return candidate["odata.id"];
	    }
	    else if (candidate.hasOwnProperty("__metadata") && candidate.__metadata.hasOwnProperty("id")) {
	        return candidate.__metadata.id;
	    }
	    else {
	        logging_1.Logger.log({
	            data: candidate,
	            level: logging_1.LogLevel.Error,
	            message: "Could not extract odata id in object, you may be using nometadata. Object data logged to logger.",
	        });
	        throw new Error("Could not extract odata id in object, you may be using nometadata. Object data logged to logger.");
	    }
	}
	exports.extractOdataId = extractOdataId;
	var ODataParserBase = (function () {
	    function ODataParserBase() {
	    }
	    ODataParserBase.prototype.parse = function (r) {
	        var _this = this;
	        return r.json().then(function (json) { return _this.parseODataJSON(json); });
	    };
	    ODataParserBase.prototype.parseODataJSON = function (json) {
	        var result = json;
	        if (json.hasOwnProperty("d")) {
	            if (json.d.hasOwnProperty("results")) {
	                result = json.d.results;
	            }
	            else {
	                result = json.d;
	            }
	        }
	        else if (json.hasOwnProperty("value")) {
	            result = json.value;
	        }
	        return result;
	    };
	    return ODataParserBase;
	}());
	exports.ODataParserBase = ODataParserBase;
	var ODataDefaultParser = (function (_super) {
	    __extends(ODataDefaultParser, _super);
	    function ODataDefaultParser() {
	        _super.apply(this, arguments);
	    }
	    return ODataDefaultParser;
	}(ODataParserBase));
	exports.ODataDefaultParser = ODataDefaultParser;
	var ODataRawParserImpl = (function () {
	    function ODataRawParserImpl() {
	    }
	    ODataRawParserImpl.prototype.parse = function (r) {
	        return r.json();
	    };
	    return ODataRawParserImpl;
	}());
	exports.ODataRawParserImpl = ODataRawParserImpl;
	var ODataValueParserImpl = (function (_super) {
	    __extends(ODataValueParserImpl, _super);
	    function ODataValueParserImpl() {
	        _super.apply(this, arguments);
	    }
	    ODataValueParserImpl.prototype.parse = function (r) {
	        return _super.prototype.parse.call(this, r).then(function (d) { return d; });
	    };
	    return ODataValueParserImpl;
	}(ODataParserBase));
	var ODataEntityParserImpl = (function (_super) {
	    __extends(ODataEntityParserImpl, _super);
	    function ODataEntityParserImpl(factory) {
	        _super.call(this);
	        this.factory = factory;
	    }
	    ODataEntityParserImpl.prototype.parse = function (r) {
	        var _this = this;
	        return _super.prototype.parse.call(this, r).then(function (d) {
	            var o = new _this.factory(getEntityUrl(d), null);
	            return util_1.Util.extend(o, d);
	        });
	    };
	    return ODataEntityParserImpl;
	}(ODataParserBase));
	var ODataEntityArrayParserImpl = (function (_super) {
	    __extends(ODataEntityArrayParserImpl, _super);
	    function ODataEntityArrayParserImpl(factory) {
	        _super.call(this);
	        this.factory = factory;
	    }
	    ODataEntityArrayParserImpl.prototype.parse = function (r) {
	        var _this = this;
	        return _super.prototype.parse.call(this, r).then(function (d) {
	            return d.map(function (v) {
	                var o = new _this.factory(getEntityUrl(v), null);
	                return util_1.Util.extend(o, v);
	            });
	        });
	    };
	    return ODataEntityArrayParserImpl;
	}(ODataParserBase));
	function getEntityUrl(entity) {
	    if (entity.hasOwnProperty("__metadata")) {
	        // we are dealing with verbose, which has an absolute uri
	        return entity.__metadata.uri;
	    }
	    else if (entity.hasOwnProperty("odata.editLink")) {
	        // we are dealign with minimal metadata (default)
	        return util_1.Util.combinePaths("_api", entity["odata.editLink"]);
	    }
	    else {
	        // we are likely dealing with nometadata, so don't error but we won't be able to
	        // chain off these objects (write something to log?)
	        logging_1.Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", logging_1.LogLevel.Warning);
	        return "";
	    }
	}
	exports.ODataRaw = new ODataRawParserImpl();
	function ODataValue() {
	    return new ODataValueParserImpl();
	}
	exports.ODataValue = ODataValue;
	function ODataEntity(factory) {
	    return new ODataEntityParserImpl(factory);
	}
	exports.ODataEntity = ODataEntity;
	function ODataEntityArray(factory) {
	    return new ODataEntityArrayParserImpl(factory);
	}
	exports.ODataEntityArray = ODataEntityArray;
	/**
	 * Manages a batch of OData operations
	 */
	var ODataBatch = (function () {
	    function ODataBatch(baseUrl, _batchId) {
	        if (_batchId === void 0) { _batchId = util_1.Util.getGUID(); }
	        this.baseUrl = baseUrl;
	        this._batchId = _batchId;
	        this._requests = [];
	        this._batchDependencies = Promise.resolve();
	    }
	    /**
	     * Adds a request to a batch (not designed for public use)
	     *
	     * @param url The full url of the request
	     * @param method The http method GET, POST, etc
	     * @param options Any options to include in the request
	     * @param parser The parser that will hadle the results of the request
	     */
	    ODataBatch.prototype.add = function (url, method, options, parser) {
	        var info = {
	            method: method.toUpperCase(),
	            options: options,
	            parser: parser,
	            reject: null,
	            resolve: null,
	            url: url,
	        };
	        var p = new Promise(function (resolve, reject) {
	            info.resolve = resolve;
	            info.reject = reject;
	        });
	        this._requests.push(info);
	        return p;
	    };
	    ODataBatch.prototype.addBatchDependency = function () {
	        var resolver;
	        var promise = new Promise(function (resolve) {
	            resolver = resolve;
	        });
	        this._batchDependencies = this._batchDependencies.then(function () { return promise; });
	        return resolver;
	    };
	    /**
	     * Execute the current batch and resolve the associated promises
	     *
	     * @returns A promise which will be resolved once all of the batch's child promises have resolved
	     */
	    ODataBatch.prototype.execute = function () {
	        var _this = this;
	        return this._batchDependencies.then(function () { return _this.executeImpl(); });
	    };
	    ODataBatch.prototype.executeImpl = function () {
	        var _this = this;
	        // if we don't have any requests, don't bother sending anything
	        // this could be due to caching further upstream, or just an empty batch 
	        if (this._requests.length < 1) {
	            return Promise.resolve();
	        }
	        // build all the requests, send them, pipe results in order to parsers
	        var batchBody = [];
	        var currentChangeSetId = "";
	        this._requests.forEach(function (reqInfo, index) {
	            if (reqInfo.method === "GET") {
	                if (currentChangeSetId.length > 0) {
	                    // end an existing change set
	                    batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
	                    currentChangeSetId = "";
	                }
	                batchBody.push("--batch_" + _this._batchId + "\n");
	            }
	            else {
	                if (currentChangeSetId.length < 1) {
	                    // start new change set
	                    currentChangeSetId = util_1.Util.getGUID();
	                    batchBody.push("--batch_" + _this._batchId + "\n");
	                    batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
	                }
	                batchBody.push("--changeset_" + currentChangeSetId + "\n");
	            }
	            // common batch part prefix
	            batchBody.push("Content-Type: application/http\n");
	            batchBody.push("Content-Transfer-Encoding: binary\n\n");
	            var headers = {
	                "Accept": "application/json;",
	            };
	            if (reqInfo.method !== "GET") {
	                var method = reqInfo.method;
	                if (reqInfo.options && reqInfo.options.headers && reqInfo.options.headers["X-HTTP-Method"] !== typeof undefined) {
	                    method = reqInfo.options.headers["X-HTTP-Method"];
	                    delete reqInfo.options.headers["X-HTTP-Method"];
	                }
	                batchBody.push(method + " " + reqInfo.url + " HTTP/1.1\n");
	                headers = util_1.Util.extend(headers, { "Content-Type": "application/json;odata=verbose;charset=utf-8" });
	            }
	            else {
	                batchBody.push(reqInfo.method + " " + reqInfo.url + " HTTP/1.1\n");
	            }
	            if (typeof pnplibconfig_1.RuntimeConfig.headers !== "undefined") {
	                headers = util_1.Util.extend(headers, pnplibconfig_1.RuntimeConfig.headers);
	            }
	            if (reqInfo.options && reqInfo.options.headers) {
	                headers = util_1.Util.extend(headers, reqInfo.options.headers);
	            }
	            for (var name_1 in headers) {
	                if (headers.hasOwnProperty(name_1)) {
	                    batchBody.push(name_1 + ": " + headers[name_1] + "\n");
	                }
	            }
	            batchBody.push("\n");
	            if (reqInfo.options.body) {
	                batchBody.push(reqInfo.options.body + "\n\n");
	            }
	        });
	        if (currentChangeSetId.length > 0) {
	            // Close the changeset
	            batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
	            currentChangeSetId = "";
	        }
	        batchBody.push("--batch_" + this._batchId + "--\n");
	        var batchHeaders = {
	            "Content-Type": "multipart/mixed; boundary=batch_" + this._batchId,
	        };
	        var batchOptions = {
	            "body": batchBody.join(""),
	            "headers": batchHeaders,
	        };
	        var client = new httpclient_1.HttpClient();
	        var requestUrl = util_1.Util.makeUrlAbsolute(util_1.Util.combinePaths(this.baseUrl, "/_api/$batch"));
	        return client.post(requestUrl, batchOptions)
	            .then(function (r) { return r.text(); })
	            .then(this._parseResponse)
	            .then(function (responses) {
	            if (responses.length !== _this._requests.length) {
	                // this is unfortunate
	                throw new Error("Could not properly parse responses to match requests in batch.");
	            }
	            var chain = Promise.resolve();
	            var _loop_1 = function(i) {
	                var request = _this._requests[i];
	                var response = responses[i];
	                if (!response.ok) {
	                    request.reject(new Error(response.statusText));
	                }
	                chain = chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
	            };
	            for (var i = 0; i < responses.length; i++) {
	                _loop_1(i);
	            }
	            return chain;
	        });
	    };
	    /**
	     * Parses the response from a batch request into an array of Response instances
	     *
	     * @param body Text body of the response from the batch request
	     */
	    ODataBatch.prototype._parseResponse = function (body) {
	        return new Promise(function (resolve, reject) {
	            var responses = [];
	            var header = "--batchresponse_";
	            // Ex. "HTTP/1.1 500 Internal Server Error"
	            var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
	            var lines = body.split("\n");
	            var state = "batch";
	            var status;
	            var statusText;
	            for (var i = 0; i < lines.length; ++i) {
	                var line = lines[i];
	                switch (state) {
	                    case "batch":
	                        if (line.substr(0, header.length) === header) {
	                            state = "batchHeaders";
	                        }
	                        else {
	                            if (line.trim() !== "") {
	                                throw new Error("Invalid response, line " + i);
	                            }
	                        }
	                        break;
	                    case "batchHeaders":
	                        if (line.trim() === "") {
	                            state = "status";
	                        }
	                        break;
	                    case "status":
	                        var parts = statusRegExp.exec(line);
	                        if (parts.length !== 3) {
	                            throw new Error("Invalid status, line " + i);
	                        }
	                        status = parseInt(parts[1], 10);
	                        statusText = parts[2];
	                        state = "statusHeaders";
	                        break;
	                    case "statusHeaders":
	                        if (line.trim() === "") {
	                            state = "body";
	                        }
	                        break;
	                    case "body":
	                        var response = void 0;
	                        if (status === 204) {
	                            // https://github.com/whatwg/fetch/issues/178
	                            response = new Response();
	                        }
	                        else {
	                            response = new Response(line, { status: status, statusText: statusText });
	                        }
	                        responses.push(response);
	                        state = "batch";
	                        break;
	                }
	            }
	            if (state !== "status") {
	                reject(new Error("Unexpected end of input"));
	            }
	            resolve(responses);
	        });
	    };
	    return ODataBatch;
	}());
	exports.ODataBatch = ODataBatch;


/***/ },
/* 268 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var RuntimeConfigImpl = (function () {
	    function RuntimeConfigImpl() {
	        // these are our default values for the library
	        this._headers = null;
	        this._defaultCachingStore = "session";
	        this._defaultCachingTimeoutSeconds = 30;
	        this._globalCacheDisable = false;
	        this._useSPRequestExecutor = false;
	    }
	    RuntimeConfigImpl.prototype.set = function (config) {
	        if (config.hasOwnProperty("headers")) {
	            this._headers = config.headers;
	        }
	        if (config.hasOwnProperty("globalCacheDisable")) {
	            this._globalCacheDisable = config.globalCacheDisable;
	        }
	        if (config.hasOwnProperty("defaultCachingStore")) {
	            this._defaultCachingStore = config.defaultCachingStore;
	        }
	        if (config.hasOwnProperty("defaultCachingTimeoutSeconds")) {
	            this._defaultCachingTimeoutSeconds = config.defaultCachingTimeoutSeconds;
	        }
	        if (config.hasOwnProperty("useSPRequestExecutor")) {
	            this._useSPRequestExecutor = config.useSPRequestExecutor;
	        }
	        if (config.hasOwnProperty("nodeClientOptions")) {
	            this._useNodeClient = true;
	            this._useSPRequestExecutor = false; // just don't allow this conflict
	            this._nodeClientData = config.nodeClientOptions;
	            // this is to help things work when running in node.js, specifically batching
	            // we shim the _spPageContextInfo object
	            global._spPageContextInfo = {
	                webAbsoluteUrl: config.nodeClientOptions.siteUrl,
	            };
	        }
	    };
	    Object.defineProperty(RuntimeConfigImpl.prototype, "headers", {
	        get: function () {
	            return this._headers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
	        get: function () {
	            return this._defaultCachingStore;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
	        get: function () {
	            return this._defaultCachingTimeoutSeconds;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
	        get: function () {
	            return this._globalCacheDisable;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "useSPRequestExecutor", {
	        get: function () {
	            return this._useSPRequestExecutor;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "useNodeFetchClient", {
	        get: function () {
	            return this._useNodeClient;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "nodeRequestOptions", {
	        get: function () {
	            return this._nodeClientData;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return RuntimeConfigImpl;
	}());
	exports.RuntimeConfigImpl = RuntimeConfigImpl;
	var _runtimeConfig = new RuntimeConfigImpl();
	exports.RuntimeConfig = _runtimeConfig;
	function setRuntimeConfig(config) {
	    _runtimeConfig.set(config);
	}
	exports.setRuntimeConfig = setRuntimeConfig;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(253);
	/**
	 * Makes requests using the SP.RequestExecutor library.
	 */
	var SPRequestExecutorClient = (function () {
	    function SPRequestExecutorClient() {
	        /**
	         * Converts a SharePoint REST API response to a fetch API response.
	         */
	        this.convertToResponse = function (spResponse) {
	            var responseHeaders = new Headers();
	            for (var h in spResponse.headers) {
	                if (spResponse.headers[h]) {
	                    responseHeaders.append(h, spResponse.headers[h]);
	                }
	            }
	            return new Response(spResponse.body, {
	                headers: responseHeaders,
	                status: spResponse.statusCode,
	                statusText: spResponse.statusText,
	            });
	        };
	    }
	    /**
	     * Fetches a URL using the SP.RequestExecutor library.
	     */
	    SPRequestExecutorClient.prototype.fetch = function (url, options) {
	        var _this = this;
	        if (typeof SP === "undefined" || typeof SP.RequestExecutor === "undefined") {
	            throw new Error("SP.RequestExecutor is undefined. " +
	                "Load the SP.RequestExecutor.js library (/_layouts/15/SP.RequestExecutor.js) before loading the PnP JS Core library.");
	        }
	        var addinWebUrl = url.substring(0, url.indexOf("/_api")), executor = new SP.RequestExecutor(addinWebUrl), headers = {}, iterator, temp;
	        if (options.headers && options.headers instanceof Headers) {
	            iterator = options.headers.entries();
	            temp = iterator.next();
	            while (!temp.done) {
	                headers[temp.value[0]] = temp.value[1];
	                temp = iterator.next();
	            }
	        }
	        else {
	            headers = options.headers;
	        }
	        return new Promise(function (resolve, reject) {
	            var requestOptions = {
	                error: function (error) {
	                    reject(_this.convertToResponse(error));
	                },
	                headers: headers,
	                method: options.method,
	                success: function (response) {
	                    resolve(_this.convertToResponse(response));
	                },
	                url: url,
	            };
	            if (options.body) {
	                util_1.Util.extend(requestOptions, { body: options.body });
	            }
	            else {
	                util_1.Util.extend(requestOptions, { binaryStringRequestBody: true });
	            }
	            executor.executeAsync(requestOptions);
	        });
	    };
	    return SPRequestExecutorClient;
	}());
	exports.SPRequestExecutorClient = SPRequestExecutorClient;


/***/ },
/* 270 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * This module is substituted for the NodeFetchClient.ts during the packaging process. This helps to reduce the pnp.js file size by
	 * not including all of the node dependencies
	 */
	var NodeFetchClient = (function () {
	    function NodeFetchClient(siteUrl, _clientId, _clientSecret, _realm) {
	        if (_realm === void 0) { _realm = ""; }
	        this.siteUrl = siteUrl;
	        this._clientId = _clientId;
	        this._clientSecret = _clientSecret;
	        this._realm = _realm;
	    }
	    /**
	     * Always throws an error that NodeFetchClient is not supported for use in the browser
	     */
	    NodeFetchClient.prototype.fetch = function (url, options) {
	        throw new Error("Using NodeFetchClient in the browser is not supported.");
	    };
	    return NodeFetchClient;
	}());
	exports.NodeFetchClient = NodeFetchClient;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storage_1 = __webpack_require__(254);
	var util_1 = __webpack_require__(253);
	var pnplibconfig_1 = __webpack_require__(268);
	var CachingOptions = (function () {
	    function CachingOptions(key) {
	        this.key = key;
	        this.expiration = util_1.Util.dateAdd(new Date(), "second", pnplibconfig_1.RuntimeConfig.defaultCachingTimeoutSeconds);
	        this.storeName = pnplibconfig_1.RuntimeConfig.defaultCachingStore;
	    }
	    Object.defineProperty(CachingOptions.prototype, "store", {
	        get: function () {
	            if (this.storeName === "local") {
	                return CachingOptions.storage.local;
	            }
	            else {
	                return CachingOptions.storage.session;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CachingOptions.storage = new storage_1.PnPClientStorage();
	    return CachingOptions;
	}());
	exports.CachingOptions = CachingOptions;
	var CachingParserWrapper = (function () {
	    function CachingParserWrapper(_parser, _cacheOptions) {
	        this._parser = _parser;
	        this._cacheOptions = _cacheOptions;
	    }
	    CachingParserWrapper.prototype.parse = function (response) {
	        var _this = this;
	        // add this to the cache based on the options
	        return this._parser.parse(response).then(function (data) {
	            if (_this._cacheOptions.store !== null) {
	                _this._cacheOptions.store.put(_this._cacheOptions.key, data, _this._cacheOptions.expiration);
	            }
	            return data;
	        });
	    };
	    return CachingParserWrapper;
	}());
	exports.CachingParserWrapper = CachingParserWrapper;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var SearchSuggest = (function (_super) {
	    __extends(SearchSuggest, _super);
	    function SearchSuggest(baseUrl, path) {
	        if (path === void 0) { path = "_api/search/suggest"; }
	        _super.call(this, baseUrl, path);
	    }
	    SearchSuggest.prototype.execute = function (query) {
	        this.mapQueryToQueryString(query);
	        return this.get().then(function (response) { return new SearchSuggestResult(response); });
	    };
	    SearchSuggest.prototype.mapQueryToQueryString = function (query) {
	        this.query.add("querytext", "'" + query.querytext + "'");
	        if (query.hasOwnProperty("count")) {
	            this.query.add("inumberofquerysuggestions", query.count.toString());
	        }
	        if (query.hasOwnProperty("personalCount")) {
	            this.query.add("inumberofresultsuggestions", query.personalCount.toString());
	        }
	        if (query.hasOwnProperty("preQuery")) {
	            this.query.add("fprequerysuggestions", query.preQuery.toString());
	        }
	        if (query.hasOwnProperty("hitHighlighting")) {
	            this.query.add("fhithighlighting", query.hitHighlighting.toString());
	        }
	        if (query.hasOwnProperty("capitalize")) {
	            this.query.add("fcapitalizefirstletters", query.capitalize.toString());
	        }
	        if (query.hasOwnProperty("culture")) {
	            this.query.add("culture", query.culture.toString());
	        }
	        if (query.hasOwnProperty("stemming")) {
	            this.query.add("enablestemming", query.stemming.toString());
	        }
	        if (query.hasOwnProperty("includePeople")) {
	            this.query.add("showpeoplenamesuggestions", query.includePeople.toString());
	        }
	        if (query.hasOwnProperty("queryRules")) {
	            this.query.add("enablequeryrules", query.queryRules.toString());
	        }
	        if (query.hasOwnProperty("prefixMatch")) {
	            this.query.add("fprefixmatchallterms", query.prefixMatch.toString());
	        }
	    };
	    return SearchSuggest;
	}(queryable_1.QueryableInstance));
	exports.SearchSuggest = SearchSuggest;
	var SearchSuggestResult = (function () {
	    function SearchSuggestResult(json) {
	        if (json.hasOwnProperty("suggest")) {
	            // verbose
	            this.PeopleNames = json.suggest.PeopleNames.results;
	            this.PersonalResults = json.suggest.PersonalResults.results;
	            this.Queries = json.suggest.Queries.results;
	        }
	        else {
	            this.PeopleNames = json.PeopleNames;
	            this.PersonalResults = json.PersonalResults;
	            this.Queries = json.Queries;
	        }
	    }
	    return SearchSuggestResult;
	}());
	exports.SearchSuggestResult = SearchSuggestResult;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var webs_1 = __webpack_require__(274);
	var usercustomactions_1 = __webpack_require__(289);
	var odata_1 = __webpack_require__(267);
	/**
	 * Describes a site collection
	 *
	 */
	var Site = (function (_super) {
	    __extends(Site, _super);
	    /**
	     * Creates a new instance of the RoleAssignments class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Site(baseUrl, path) {
	        if (path === void 0) { path = "_api/site"; }
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Site.prototype, "rootWeb", {
	        /**
	         * Gets the root web of the site collection
	         *
	         */
	        get: function () {
	            return new webs_1.Web(this, "rootweb");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Site.prototype, "userCustomActions", {
	        /**
	         * Get all custom actions on a site collection
	         *
	         */
	        get: function () {
	            return new usercustomactions_1.UserCustomActions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the context information for the site.
	     */
	    Site.prototype.getContextInfo = function () {
	        var q = new Site("", "_api/contextinfo");
	        return q.post().then(function (data) {
	            if (data.hasOwnProperty("GetContextWebInformation")) {
	                var info = data.GetContextWebInformation;
	                info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
	                return info;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Gets the document libraries on a site. Static method. (SharePoint Online only)
	     *
	     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
	     */
	    Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
	        var q = new queryable_1.Queryable("", "_api/sp.web.getdocumentlibraries(@v)");
	        q.query.add("@v", "'" + absoluteWebUrl + "'");
	        return q.get().then(function (data) {
	            if (data.hasOwnProperty("GetDocumentLibraries")) {
	                return data.GetDocumentLibraries;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Gets the site URL from a page URL.
	     *
	     * @param absolutePageUrl The absolute url of the page
	     */
	    Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
	        var q = new queryable_1.Queryable("", "_api/sp.web.getweburlfrompageurl(@v)");
	        q.query.add("@v", "'" + absolutePageUrl + "'");
	        return q.get().then(function (data) {
	            if (data.hasOwnProperty("GetWebUrlFromPageUrl")) {
	                return data.GetWebUrlFromPageUrl;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Creates a new batch for requests within the context of context this site
	     *
	     */
	    Site.prototype.createBatch = function () {
	        return new odata_1.ODataBatch(this.parentUrl);
	    };
	    return Site;
	}(queryable_1.QueryableInstance));
	exports.Site = Site;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var queryablesecurable_1 = __webpack_require__(275);
	var lists_1 = __webpack_require__(279);
	var fields_1 = __webpack_require__(285);
	var navigation_1 = __webpack_require__(290);
	var sitegroups_1 = __webpack_require__(277);
	var contenttypes_1 = __webpack_require__(283);
	var folders_1 = __webpack_require__(281);
	var roles_1 = __webpack_require__(276);
	var files_1 = __webpack_require__(282);
	var util_1 = __webpack_require__(253);
	var lists_2 = __webpack_require__(279);
	var siteusers_1 = __webpack_require__(278);
	var usercustomactions_1 = __webpack_require__(289);
	var odata_1 = __webpack_require__(267);
	var Webs = (function (_super) {
	    __extends(Webs, _super);
	    function Webs(baseUrl, webPath) {
	        if (webPath === void 0) { webPath = "webs"; }
	        _super.call(this, baseUrl, webPath);
	    }
	    /**
	     * Adds a new web to the collection
	     *
	     * @param title The new web's title
	     * @param url The new web's relative url
	     * @param description The web web's description
	     * @param template The web's template
	     * @param language The language code to use for this web
	     * @param inheritPermissions If true permissions will be inherited from the partent web
	     * @param additionalSettings Will be passed as part of the web creation body
	     */
	    Webs.prototype.add = function (title, url, description, template, language, inheritPermissions, additionalSettings) {
	        if (description === void 0) { description = ""; }
	        if (template === void 0) { template = "STS"; }
	        if (language === void 0) { language = 1033; }
	        if (inheritPermissions === void 0) { inheritPermissions = true; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var props = util_1.Util.extend({
	            Description: description,
	            Language: language,
	            Title: title,
	            Url: url,
	            UseSamePermissionsAsParentSite: inheritPermissions,
	            WebTemplate: template,
	        }, additionalSettings);
	        var postBody = JSON.stringify({
	            "parameters": util_1.Util.extend({
	                "__metadata": { "type": "SP.WebCreationInformation" },
	            }, props),
	        });
	        var q = new Webs(this, "add");
	        return q.post({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                web: new Web(odata_1.extractOdataId(data), ""),
	            };
	        });
	    };
	    return Webs;
	}(queryable_1.QueryableCollection));
	exports.Webs = Webs;
	/**
	 * Describes a web
	 *
	 */
	var Web = (function (_super) {
	    __extends(Web, _super);
	    function Web(baseUrl, path) {
	        if (path === void 0) { path = "_api/web"; }
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Web.prototype, "webs", {
	        get: function () {
	            return new Webs(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "contentTypes", {
	        /**
	         * Get the content types available in this web
	         *
	         */
	        get: function () {
	            return new contenttypes_1.ContentTypes(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "lists", {
	        /**
	         * Get the lists in this web
	         *
	         */
	        get: function () {
	            return new lists_1.Lists(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "fields", {
	        /**
	         * Gets the fields in this web
	         *
	         */
	        get: function () {
	            return new fields_1.Fields(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "availablefields", {
	        /**
	         * Gets the available fields in this web
	         *
	         */
	        get: function () {
	            return new fields_1.Fields(this, "availablefields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "navigation", {
	        /**
	         * Get the navigation options in this web
	         *
	         */
	        get: function () {
	            return new navigation_1.Navigation(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "siteUsers", {
	        /**
	         * Gets the site users
	         *
	         */
	        get: function () {
	            return new siteusers_1.SiteUsers(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "siteGroups", {
	        /**
	         * Gets the site groups
	         *
	         */
	        get: function () {
	            return new sitegroups_1.SiteGroups(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "folders", {
	        /**
	         * Get the folders in this web
	         *
	         */
	        get: function () {
	            return new folders_1.Folders(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "userCustomActions", {
	        /**
	         * Get all custom actions on a site
	         *
	         */
	        get: function () {
	            return new usercustomactions_1.UserCustomActions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "roleDefinitions", {
	        /**
	         * Gets the collection of RoleDefinition resources.
	         *
	         */
	        get: function () {
	            return new roles_1.RoleDefinitions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a new batch for requests within the context of context this web
	     *
	     */
	    Web.prototype.createBatch = function () {
	        return new odata_1.ODataBatch(this.parentUrl);
	    };
	    /**
	     * Get a folder by server relative url
	     *
	     * @param folderRelativeUrl the server relative path to the folder (including /sites/ if applicable)
	     */
	    Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
	        return new folders_1.Folder(this, "getFolderByServerRelativeUrl('" + folderRelativeUrl + "')");
	    };
	    /**
	     * Get a file by server relative url
	     *
	     * @param fileRelativeUrl the server relative path to the file (including /sites/ if applicable)
	     */
	    Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
	        return new files_1.File(this, "getFileByServerRelativeUrl('" + fileRelativeUrl + "')");
	    };
	    /**
	     * Get a list by server relative url (list's root folder)
	     *
	     * @param listRelativeUrl the server relative path to the list's root folder (including /sites/ if applicable)
	     */
	    Web.prototype.getList = function (listRelativeUrl) {
	        return new lists_2.List(this, "getList('" + listRelativeUrl + "')");
	    };
	    /**
	     * Updates this web intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the web
	     */
	    Web.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.Web" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                web: _this,
	            };
	        });
	    };
	    /**
	     * Delete this web
	     *
	     */
	    Web.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
	     *
	     * @param colorPaletteUrl Server-relative URL of the color palette file.
	     * @param fontSchemeUrl Server-relative URL of the font scheme.
	     * @param backgroundImageUrl Server-relative URL of the background image.
	     * @param shareGenerated true to store the generated theme files in the root site, or false to store them in this site.
	     */
	    Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
	        var postBody = JSON.stringify({
	            backgroundImageUrl: backgroundImageUrl,
	            colorPaletteUrl: colorPaletteUrl,
	            fontSchemeUrl: fontSchemeUrl,
	            shareGenerated: shareGenerated,
	        });
	        var q = new Web(this, "applytheme");
	        return q.post({ body: postBody });
	    };
	    /**
	     * Applies the specified site definition or site template to the Web site that has no template applied to it.
	     *
	     * @param template Name of the site definition or the name of the site template
	     */
	    Web.prototype.applyWebTemplate = function (template) {
	        var q = new Web(this, "applywebtemplate");
	        q.concat("(@t)");
	        q.query.add("@t", template);
	        return q.post();
	    };
	    /**
	     * Returns whether the current user has the given set of permissions.
	     *
	     * @param perms The high and low permission range.
	     */
	    Web.prototype.doesUserHavePermissions = function (perms) {
	        var q = new Web(this, "doesuserhavepermissions");
	        q.concat("(@p)");
	        q.query.add("@p", JSON.stringify(perms));
	        return q.get();
	    };
	    /**
	     * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
	     *
	     * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
	     */
	    Web.prototype.ensureUser = function (loginName) {
	        // TODO:: this should resolve to a User
	        var postBody = JSON.stringify({
	            logonName: loginName,
	        });
	        var q = new Web(this, "ensureuser");
	        return q.post({ body: postBody });
	    };
	    /**
	     * Returns a collection of site templates available for the site.
	     *
	     * @param language The LCID of the site templates to get.
	     * @param true to include language-neutral site templates; otherwise false
	     */
	    Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
	        if (language === void 0) { language = 1033; }
	        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
	        return new queryable_1.QueryableCollection(this, "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")");
	    };
	    /**
	     * Returns the list gallery on the site.
	     *
	     * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
	     * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
	     */
	    /* tslint:disable member-access */
	    Web.prototype.getCatalog = function (type) {
	        var q = new Web(this, "getcatalog(" + type + ")");
	        q.select("Id");
	        return q.get().then(function (data) {
	            return new lists_2.List(odata_1.extractOdataId(data));
	        });
	    };
	    /* tslint:enable */
	    /**
	     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
	     */
	    Web.prototype.getChanges = function (query) {
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeQuery" } }, query) });
	        // don't change "this" instance, make a new one
	        var q = new Web(this, "getchanges");
	        return q.post({ body: postBody });
	    };
	    Object.defineProperty(Web.prototype, "customListTemplate", {
	        /**
	         * Gets the custom list templates for the site.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "getcustomlisttemplates");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns the user corresponding to the specified member identifier for the current site.
	     *
	     * @param id The ID of the user.
	     */
	    Web.prototype.getUserById = function (id) {
	        return new siteusers_1.SiteUser(this, "getUserById(" + id + ")");
	    };
	    /**
	     * Returns the name of the image file for the icon that is used to represent the specified file.
	     *
	     * @param filename The file name. If this parameter is empty, the server returns an empty string.
	     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
	     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
	     */
	    Web.prototype.mapToIcon = function (filename, size, progId) {
	        if (size === void 0) { size = 0; }
	        if (progId === void 0) { progId = ""; }
	        var q = new Web(this, "maptoicon(filename='" + filename + "', progid='" + progId + "', size=" + size + ")");
	        return q.get();
	    };
	    return Web;
	}(queryablesecurable_1.QueryableSecurable));
	exports.Web = Web;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var roles_1 = __webpack_require__(276);
	var queryable_1 = __webpack_require__(263);
	var QueryableSecurable = (function (_super) {
	    __extends(QueryableSecurable, _super);
	    function QueryableSecurable() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(QueryableSecurable.prototype, "roleAssignments", {
	        /**
	         * Gets the set of role assignments for this item
	         *
	         */
	        get: function () {
	            return new roles_1.RoleAssignments(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryableSecurable.prototype, "firstUniqueAncestorSecurableObject", {
	        /**
	         * Gets the closest securable up the security hierarchy whose permissions are applied to this list item
	         *
	         */
	        get: function () {
	            this.append("FirstUniqueAncestorSecurableObject");
	            return new queryable_1.QueryableInstance(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the effective permissions for the user supplied
	     *
	     * @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
	     */
	    QueryableSecurable.prototype.getUserEffectivePermissions = function (loginName) {
	        this.append("getUserEffectivePermissions(@user)");
	        this._query.add("@user", "'" + encodeURIComponent(loginName) + "'");
	        return new queryable_1.Queryable(this);
	    };
	    /**
	     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
	     *
	     * @param copyRoleAssignments If true the permissions are copied from the current parent scope
	     * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
	     */
	    QueryableSecurable.prototype.breakRoleInheritance = function (copyRoleAssignments, clearSubscopes) {
	        if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
	        if (clearSubscopes === void 0) { clearSubscopes = false; }
	        var Breaker = (function (_super) {
	            __extends(Breaker, _super);
	            function Breaker(baseUrl, copy, clear) {
	                _super.call(this, baseUrl, "breakroleinheritance(copyroleassignments=" + copy + ", clearsubscopes=" + clear + ")");
	            }
	            Breaker.prototype.break = function () {
	                return this.post();
	            };
	            return Breaker;
	        }(queryable_1.Queryable));
	        var b = new Breaker(this, copyRoleAssignments, clearSubscopes);
	        return b.break();
	    };
	    /**
	     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
	     *
	     */
	    QueryableSecurable.prototype.resetRoleInheritance = function () {
	        var Resetter = (function (_super) {
	            __extends(Resetter, _super);
	            function Resetter(baseUrl) {
	                _super.call(this, baseUrl, "resetroleinheritance");
	            }
	            Resetter.prototype.reset = function () {
	                return this.post();
	            };
	            return Resetter;
	        }(queryable_1.Queryable));
	        var r = new Resetter(this);
	        return r.reset();
	    };
	    return QueryableSecurable;
	}(queryable_1.QueryableInstance));
	exports.QueryableSecurable = QueryableSecurable;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var sitegroups_1 = __webpack_require__(277);
	var util_1 = __webpack_require__(253);
	/**
	 * Describes a set of role assignments for the current scope
	 *
	 */
	var RoleAssignments = (function (_super) {
	    __extends(RoleAssignments, _super);
	    /**
	     * Creates a new instance of the RoleAssignments class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function RoleAssignments(baseUrl, path) {
	        if (path === void 0) { path = "roleassignments"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Adds a new role assignment with the specified principal and role definitions to the collection.
	     *
	     * @param principalId The ID of the user or group to assign permissions to
	     * @param roleDefId The ID of the role definition that defines the permissions to assign
	     *
	     */
	    RoleAssignments.prototype.add = function (principalId, roleDefId) {
	        var a = new RoleAssignments(this, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")");
	        return a.post();
	    };
	    /**
	     * Removes the role assignment with the specified principal and role definition from the collection
	     *
	     * @param principalId The ID of the user or group in the role assignment.
	     * @param roleDefId The ID of the role definition in the role assignment
	     *
	     */
	    RoleAssignments.prototype.remove = function (principalId, roleDefId) {
	        var a = new RoleAssignments(this, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")");
	        return a.post();
	    };
	    /**
	     * Gets the role assignment associated with the specified principal ID from the collection.
	     *
	     * @param id The id of the role assignment
	     */
	    RoleAssignments.prototype.getById = function (id) {
	        var ra = new RoleAssignment(this);
	        ra.concat("(" + id + ")");
	        return ra;
	    };
	    return RoleAssignments;
	}(queryable_1.QueryableCollection));
	exports.RoleAssignments = RoleAssignments;
	var RoleAssignment = (function (_super) {
	    __extends(RoleAssignment, _super);
	    /**
	 * Creates a new instance of the RoleAssignment class
	 *
	 * @param baseUrl The url or Queryable which forms the parent of this fields collection
	 */
	    function RoleAssignment(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(RoleAssignment.prototype, "groups", {
	        get: function () {
	            return new sitegroups_1.SiteGroups(this, "groups");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RoleAssignment.prototype, "bindings", {
	        /**
	         * Get the role definition bindings for this role assignment
	         *
	         */
	        get: function () {
	            return new RoleDefinitionBindings(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Delete this role assignment
	     *
	     */
	    RoleAssignment.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return RoleAssignment;
	}(queryable_1.QueryableInstance));
	exports.RoleAssignment = RoleAssignment;
	var RoleDefinitions = (function (_super) {
	    __extends(RoleDefinitions, _super);
	    /**
	     * Creates a new instance of the RoleDefinitions class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path
	     *
	     */
	    function RoleDefinitions(baseUrl, path) {
	        if (path === void 0) { path = "roledefinitions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets the role definition with the specified ID from the collection.
	     *
	     * @param id The ID of the role definition.
	     *
	     */
	    RoleDefinitions.prototype.getById = function (id) {
	        return new RoleDefinition(this, "getById(" + id + ")");
	    };
	    /**
	     * Gets the role definition with the specified name.
	     *
	     * @param name The name of the role definition.
	     *
	     */
	    RoleDefinitions.prototype.getByName = function (name) {
	        return new RoleDefinition(this, "getbyname('" + name + "')");
	    };
	    /**
	     * Gets the role definition with the specified type.
	     *
	     * @param name The name of the role definition.
	     *
	     */
	    RoleDefinitions.prototype.getByType = function (roleTypeKind) {
	        return new RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
	    };
	    /**
	     * Create a role definition
	     *
	     * @param name The new role definition's name
	     * @param description The new role definition's description
	     * @param order The order in which the role definition appears
	     * @param basePermissions The permissions mask for this role definition
	     *
	     */
	    RoleDefinitions.prototype.add = function (name, description, order, basePermissions) {
	        var _this = this;
	        var postBody = JSON.stringify({
	            BasePermissions: util_1.Util.extend({ __metadata: { type: "SP.BasePermissions" } }, basePermissions),
	            Description: description,
	            Name: name,
	            Order: order,
	            __metadata: { "type": "SP.RoleDefinition" },
	        });
	        return this.post({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                definition: _this.getById(data.Id),
	            };
	        });
	    };
	    return RoleDefinitions;
	}(queryable_1.QueryableCollection));
	exports.RoleDefinitions = RoleDefinitions;
	var RoleDefinition = (function (_super) {
	    __extends(RoleDefinition, _super);
	    function RoleDefinition(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Updates this web intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the web
	     */
	    /* tslint:disable no-string-literal */
	    RoleDefinition.prototype.update = function (properties) {
	        var _this = this;
	        if (typeof properties.hasOwnProperty("BasePermissions") !== "undefined") {
	            properties["BasePermissions"] = util_1.Util.extend({ __metadata: { type: "SP.BasePermissions" } }, properties["BasePermissions"]);
	        }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.RoleDefinition" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            var retDef = _this;
	            if (properties.hasOwnProperty("Name")) {
	                var parent_1 = _this.getParent(RoleDefinitions, _this.parentUrl, "");
	                retDef = parent_1.getByName(properties["Name"]);
	            }
	            return {
	                data: data,
	                definition: retDef,
	            };
	        });
	    };
	    /* tslint:enable */
	    /**
	     * Delete this role definition
	     *
	     */
	    RoleDefinition.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return RoleDefinition;
	}(queryable_1.QueryableInstance));
	exports.RoleDefinition = RoleDefinition;
	var RoleDefinitionBindings = (function (_super) {
	    __extends(RoleDefinitionBindings, _super);
	    function RoleDefinitionBindings(baseUrl, path) {
	        if (path === void 0) { path = "roledefinitionbindings"; }
	        _super.call(this, baseUrl, path);
	    }
	    return RoleDefinitionBindings;
	}(queryable_1.QueryableCollection));
	exports.RoleDefinitionBindings = RoleDefinitionBindings;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var siteusers_1 = __webpack_require__(278);
	var util_1 = __webpack_require__(253);
	/**
	 * Principal Type enum
	 *
	 */
	(function (PrincipalType) {
	    PrincipalType[PrincipalType["None"] = 0] = "None";
	    PrincipalType[PrincipalType["User"] = 1] = "User";
	    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
	    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
	    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
	    PrincipalType[PrincipalType["All"] = 15] = "All";
	})(exports.PrincipalType || (exports.PrincipalType = {}));
	var PrincipalType = exports.PrincipalType;
	/**
	 * Describes a collection of site users
	 *
	 */
	var SiteGroups = (function (_super) {
	    __extends(SiteGroups, _super);
	    /**
	     * Creates a new instance of the SiteUsers class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this user collection
	     */
	    function SiteGroups(baseUrl, path) {
	        if (path === void 0) { path = "sitegroups"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Adds a new group to the site collection
	     *
	     * @param props The properties to be updated
	     */
	    SiteGroups.prototype.add = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({ "__metadata": { "type": "SP.Group" } }, properties));
	        return this.post({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                group: _this.getById(data.Id),
	            };
	        });
	    };
	    /**
	     * Gets a group from the collection by name
	     *
	     * @param email The name of the group
	     */
	    SiteGroups.prototype.getByName = function (groupName) {
	        return new SiteGroup(this, "getByName('" + groupName + "')");
	    };
	    /**
	     * Gets a group from the collection by id
	     *
	     * @param id The id of the group
	     */
	    SiteGroups.prototype.getById = function (id) {
	        var sg = new SiteGroup(this);
	        sg.concat("(" + id + ")");
	        return sg;
	    };
	    /**
	     * Removes the group with the specified member ID from the collection.
	     *
	     * @param id The id of the group to remove
	     */
	    SiteGroups.prototype.removeById = function (id) {
	        var g = new SiteGroups(this, "removeById('" + id + "')");
	        return g.post();
	    };
	    /**
	     * Removes a user from the collection by login name
	     *
	     * @param loginName The login name of the user
	     */
	    SiteGroups.prototype.removeByLoginName = function (loginName) {
	        var g = new SiteGroups(this, "removeByLoginName('" + loginName + "')");
	        return g.post();
	    };
	    return SiteGroups;
	}(queryable_1.QueryableCollection));
	exports.SiteGroups = SiteGroups;
	/**
	 * Describes a single group
	 *
	 */
	var SiteGroup = (function (_super) {
	    __extends(SiteGroup, _super);
	    /**
	     * Creates a new instance of the Group class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this site group
	     * @param path Optional, passes the path to the group
	     */
	    function SiteGroup(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(SiteGroup.prototype, "users", {
	        /**
	         * Get's the users for this group
	         *
	         */
	        get: function () {
	            return new siteusers_1.SiteUsers(this, "users");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Updates this group instance with the supplied properties
	    *
	    * @param properties A GroupWriteableProperties object of property names and values to update for the user
	    */
	    /* tslint:disable no-string-literal */
	    SiteGroup.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = util_1.Util.extend({ "__metadata": { "type": "SP.Group" } }, properties);
	        return this.post({
	            body: JSON.stringify(postBody),
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            var retGroup = _this;
	            if (properties.hasOwnProperty("Title")) {
	                retGroup = _this.getParent(SiteGroup, _this.parentUrl, "getByName('" + properties["Title"] + "')");
	            }
	            return {
	                data: data,
	                group: retGroup,
	            };
	        });
	    };
	    return SiteGroup;
	}(queryable_1.QueryableInstance));
	exports.SiteGroup = SiteGroup;


/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var sitegroups_1 = __webpack_require__(277);
	var util_1 = __webpack_require__(253);
	/**
	 * Describes a collection of all site collection users
	 *
	 */
	var SiteUsers = (function (_super) {
	    __extends(SiteUsers, _super);
	    /**
	     * Creates a new instance of the Users class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this user collection
	     */
	    function SiteUsers(baseUrl, path) {
	        if (path === void 0) { path = "siteusers"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a user from the collection by email
	     *
	     * @param email The email of the user
	     */
	    SiteUsers.prototype.getByEmail = function (email) {
	        return new SiteUser(this, "getByEmail('" + email + "')");
	    };
	    /**
	     * Gets a user from the collection by id
	     *
	     * @param id The id of the user
	     */
	    SiteUsers.prototype.getById = function (id) {
	        return new SiteUser(this, "getById(" + id + ")");
	    };
	    /**
	     * Gets a user from the collection by login name
	     *
	     * @param loginName The email address of the user
	     */
	    SiteUsers.prototype.getByLoginName = function (loginName) {
	        var su = new SiteUser(this);
	        su.concat("(@v)");
	        su.query.add("@v", encodeURIComponent(loginName));
	        return su;
	    };
	    /**
	     * Removes a user from the collection by id
	     *
	     * @param id The id of the user
	     */
	    SiteUsers.prototype.removeById = function (id) {
	        var o = new SiteUsers(this, "removeById(" + id + ")");
	        return o.post();
	    };
	    /**
	     * Removes a user from the collection by login name
	     *
	     * @param loginName The login name of the user
	     */
	    SiteUsers.prototype.removeByLoginName = function (loginName) {
	        var o = new SiteUsers(this, "removeByLoginName(@v)");
	        o.query.add("@v", encodeURIComponent(loginName));
	        return o.post();
	    };
	    /**
	     * Add a user to a group
	     *
	     * @param loginName The login name of the user to add to the group
	     *
	     */
	    SiteUsers.prototype.add = function (loginName) {
	        var _this = this;
	        var postBody = JSON.stringify({ "__metadata": { "type": "SP.User" }, LoginName: loginName });
	        return this.post({ body: postBody }).then(function (data) { return _this.getByLoginName(loginName); });
	    };
	    return SiteUsers;
	}(queryable_1.QueryableCollection));
	exports.SiteUsers = SiteUsers;
	/**
	 * Describes a single user
	 *
	 */
	var SiteUser = (function (_super) {
	    __extends(SiteUser, _super);
	    /**
	     * Creates a new instance of the User class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, passes the path to the user
	     */
	    function SiteUser(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(SiteUser.prototype, "groups", {
	        /**
	         * Get's the groups for this user.
	         *
	         */
	        get: function () {
	            return new sitegroups_1.SiteGroups(this, "groups");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Updates this user instance with the supplied properties
	    *
	    * @param properties A plain object of property names and values to update for the user
	    */
	    SiteUser.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = util_1.Util.extend({ "__metadata": { "type": "SP.User" } }, properties);
	        return this.post({
	            body: JSON.stringify(postBody),
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                user: _this,
	            };
	        });
	    };
	    /**
	     * Delete this user
	     *
	     */
	    SiteUser.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return SiteUser;
	}(queryable_1.QueryableInstance));
	exports.SiteUser = SiteUser;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var items_1 = __webpack_require__(280);
	var views_1 = __webpack_require__(284);
	var contenttypes_1 = __webpack_require__(283);
	var fields_1 = __webpack_require__(285);
	var forms_1 = __webpack_require__(287);
	var subscriptions_1 = __webpack_require__(288);
	var queryable_1 = __webpack_require__(263);
	var queryablesecurable_1 = __webpack_require__(275);
	var util_1 = __webpack_require__(253);
	var usercustomactions_1 = __webpack_require__(289);
	var odata_1 = __webpack_require__(267);
	/**
	 * Describes a collection of List objects
	 *
	 */
	var Lists = (function (_super) {
	    __extends(Lists, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Lists(baseUrl, path) {
	        if (path === void 0) { path = "lists"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a list from the collection by title
	     *
	     * @param title The title of the list
	     */
	    Lists.prototype.getByTitle = function (title) {
	        return new List(this, "getByTitle('" + title + "')");
	    };
	    /**
	     * Gets a list from the collection by guid id
	     *
	     * @param title The Id of the list
	     */
	    Lists.prototype.getById = function (id) {
	        var list = new List(this);
	        list.concat("('" + id + "')");
	        return list;
	    };
	    /**
	     * Adds a new list to the collection
	     *
	     * @param title The new list's title
	     * @param description The new list's description
	     * @param template The list template value
	     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
	     * @param additionalSettings Will be passed as part of the list creation body
	     */
	    /*tslint:disable max-line-length */
	    Lists.prototype.add = function (title, description, template, enableContentTypes, additionalSettings) {
	        var _this = this;
	        if (description === void 0) { description = ""; }
	        if (template === void 0) { template = 100; }
	        if (enableContentTypes === void 0) { enableContentTypes = false; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.List" },
	            "AllowContentTypes": enableContentTypes,
	            "BaseTemplate": template,
	            "ContentTypesEnabled": enableContentTypes,
	            "Description": description,
	            "Title": title,
	        }, additionalSettings));
	        return this.post({ body: postBody }).then(function (data) {
	            return { data: data, list: _this.getByTitle(title) };
	        });
	    };
	    /*tslint:enable */
	    /**
	     * Ensures that the specified list exists in the collection (note: settings are not updated if the list exists,
	     * not supported for batching)
	     *
	     * @param title The new list's title
	     * @param description The new list's description
	     * @param template The list template value
	     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
	     * @param additionalSettings Will be passed as part of the list creation body
	     */
	    /*tslint:disable max-line-length */
	    Lists.prototype.ensure = function (title, description, template, enableContentTypes, additionalSettings) {
	        var _this = this;
	        if (description === void 0) { description = ""; }
	        if (template === void 0) { template = 100; }
	        if (enableContentTypes === void 0) { enableContentTypes = false; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        if (this.hasBatch) {
	            throw new Error("The ensure method is not supported as part of a batch.");
	        }
	        return new Promise(function (resolve, reject) {
	            var list = _this.getByTitle(title);
	            list.get().then(function (d) { return resolve({ created: false, data: d, list: list }); }).catch(function () {
	                _this.add(title, description, template, enableContentTypes, additionalSettings).then(function (r) {
	                    resolve({ created: true, data: r.data, list: _this.getByTitle(title) });
	                });
	            }).catch(function (e) { return reject(e); });
	        });
	    };
	    /*tslint:enable */
	    /**
	     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
	     */
	    /*tslint:disable member-access */
	    Lists.prototype.ensureSiteAssetsLibrary = function () {
	        var q = new Lists(this, "ensuresiteassetslibrary");
	        return q.post().then(function (json) {
	            return new List(odata_1.extractOdataId(json));
	        });
	    };
	    /*tslint:enable */
	    /**
	     * Gets a list that is the default location for wiki pages.
	     */
	    /*tslint:disable member-access */
	    Lists.prototype.ensureSitePagesLibrary = function () {
	        var q = new Lists(this, "ensuresitepageslibrary");
	        return q.post().then(function (json) {
	            return new List(odata_1.extractOdataId(json));
	        });
	    };
	    return Lists;
	}(queryable_1.QueryableCollection));
	exports.Lists = Lists;
	/**
	 * Describes a single List instance
	 *
	 */
	var List = (function (_super) {
	    __extends(List, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function List(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(List.prototype, "contentTypes", {
	        /**
	         * Gets the content types in this list
	         *
	         */
	        get: function () {
	            return new contenttypes_1.ContentTypes(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "items", {
	        /**
	         * Gets the items in this list
	         *
	         */
	        get: function () {
	            return new items_1.Items(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "views", {
	        /**
	         * Gets the views in this list
	         *
	         */
	        get: function () {
	            return new views_1.Views(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "fields", {
	        /**
	         * Gets the fields in this list
	         *
	         */
	        get: function () {
	            return new fields_1.Fields(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "forms", {
	        /**
	         * Gets the forms in this list
	         *
	         */
	        get: function () {
	            return new forms_1.Forms(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "defaultView", {
	        /**
	         * Gets the default view of this list
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "DefaultView");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "userCustomActions", {
	        /**
	         * Get all custom actions on a site collection
	         *
	         */
	        get: function () {
	            return new usercustomactions_1.UserCustomActions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "effectiveBasePermissions", {
	        /**
	         * Gets the effective base permissions of this list
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "EffectiveBasePermissions");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "eventReceivers", {
	        /**
	         * Gets the event receivers attached to this list
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "EventReceivers");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "relatedFields", {
	        /**
	         * Gets the related fields of this list
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "getRelatedFields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "informationRightsManagementSettings", {
	        /**
	         * Gets the IRM settings for this list
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "InformationRightsManagementSettings");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "subscriptions", {
	        /**
	         * Gets the webhook subscriptions of this list
	         *
	         */
	        get: function () {
	            return new subscriptions_1.Subscriptions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets a view by view guid id
	     *
	     */
	    List.prototype.getView = function (viewId) {
	        return new views_1.View(this, "getView('" + viewId + "')");
	    };
	    /**
	     * Updates this list intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the list
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    /* tslint:disable no-string-literal */
	    List.prototype.update = function (properties, eTag) {
	        var _this = this;
	        if (eTag === void 0) { eTag = "*"; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.List" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            var retList = _this;
	            if (properties.hasOwnProperty("Title")) {
	                retList = _this.getParent(List, _this.parentUrl, "getByTitle('" + properties["Title"] + "')");
	            }
	            return {
	                data: data,
	                list: retList,
	            };
	        });
	    };
	    /* tslint:enable */
	    /**
	     * Delete this list
	     *
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    List.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return this.post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
	     */
	    List.prototype.getChanges = function (query) {
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeQuery" } }, query) });
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "getchanges");
	        return q.post({ body: postBody });
	    };
	    /**
	     * Returns a collection of items from the list based on the specified query.
	     *
	     * @param CamlQuery The Query schema of Collaborative Application Markup
	     * Language (CAML) is used in various ways within the context of Microsoft SharePoint Foundation
	     * to define queries against list data.
	     * see:
	     *
	     * https://msdn.microsoft.com/en-us/library/office/ms467521.aspx
	     *
	     * @param expands A URI with a $expand System Query Option indicates that Entries associated with
	     * the Entry or Collection of Entries identified by the Resource Path
	     * section of the URI must be represented inline (i.e. eagerly loaded).
	     * see:
	     *
	     * https://msdn.microsoft.com/en-us/library/office/fp142385.aspx
	     *
	     * http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#ExpandSystemQueryOption
	     */
	    List.prototype.getItemsByCAMLQuery = function (query) {
	        var expands = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            expands[_i - 1] = arguments[_i];
	        }
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.CamlQuery" } }, query) });
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "getitems");
	        q = q.expand.apply(q, expands);
	        return q.post({ body: postBody });
	    };
	    /**
	     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
	     */
	    List.prototype.getListItemChangesSinceToken = function (query) {
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeLogItemQuery" } }, query) });
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "getlistitemchangessincetoken");
	        // note we are using a custom parser to return text as the response is an xml doc
	        return q.post({ body: postBody }, { parse: function (r) { return r.text(); } });
	    };
	    /**
	     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     */
	    List.prototype.recycle = function () {
	        this.append("recycle");
	        return this.post().then(function (data) {
	            if (data.hasOwnProperty("Recycle")) {
	                return data.Recycle;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Renders list data based on the view xml provided
	     */
	    List.prototype.renderListData = function (viewXml) {
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "renderlistdata(@viewXml)");
	        q.query.add("@viewXml", "'" + viewXml + "'");
	        return q.post().then(function (data) {
	            // data will be a string, so we parse it again
	            data = JSON.parse(data);
	            if (data.hasOwnProperty("RenderListData")) {
	                return data.RenderListData;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Gets the field values and field schema attributes for a list item.
	     */
	    List.prototype.renderListFormData = function (itemId, formId, mode) {
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode=" + mode + ")");
	        return q.post().then(function (data) {
	            // data will be a string, so we parse it again
	            data = JSON.parse(data);
	            if (data.hasOwnProperty("ListData")) {
	                return data.ListData;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Reserves a list item ID for idempotent list item creation.
	     */
	    List.prototype.reserveListItemId = function () {
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "reservelistitemid");
	        return q.post().then(function (data) {
	            if (data.hasOwnProperty("ReserveListItemId")) {
	                return data.ReserveListItemId;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    return List;
	}(queryablesecurable_1.QueryableSecurable));
	exports.List = List;


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var queryablesecurable_1 = __webpack_require__(275);
	var folders_1 = __webpack_require__(281);
	var contenttypes_1 = __webpack_require__(283);
	var util_1 = __webpack_require__(253);
	var odata_1 = __webpack_require__(267);
	/**
	 * Describes a collection of Item objects
	 *
	 */
	var Items = (function (_super) {
	    __extends(Items, _super);
	    /**
	     * Creates a new instance of the Items class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Items(baseUrl, path) {
	        if (path === void 0) { path = "items"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets an Item by id
	     *
	     * @param id The integer id of the item to retrieve
	     */
	    Items.prototype.getById = function (id) {
	        var i = new Item(this);
	        i.concat("(" + id + ")");
	        return i;
	    };
	    /**
	     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
	     *
	     * @param skip The starting id where the page should start, use with top to specify pages
	     */
	    Items.prototype.skip = function (skip) {
	        this._query.add("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
	        return this;
	    };
	    /**
	     * Gets a collection designed to aid in paging through data
	     *
	     */
	    Items.prototype.getPaged = function () {
	        return this.getAs(new PagedItemCollectionParser());
	    };
	    /**
	     * Adds a new item to the collection
	     *
	     * @param properties The new items's properties
	     */
	    Items.prototype.add = function (properties) {
	        var _this = this;
	        if (properties === void 0) { properties = {}; }
	        var removeDependency = this.addBatchDependency();
	        var parentList = this.getParent(queryable_1.QueryableInstance);
	        return parentList.select("ListItemEntityTypeFullName").getAs().then(function (d) {
	            var postBody = JSON.stringify(util_1.Util.extend({
	                "__metadata": { "type": d.ListItemEntityTypeFullName },
	            }, properties));
	            var promise = _this.postAs({ body: postBody }).then(function (data) {
	                return {
	                    data: data,
	                    item: _this.getById(data.Id),
	                };
	            });
	            removeDependency();
	            return promise;
	        });
	    };
	    return Items;
	}(queryable_1.QueryableCollection));
	exports.Items = Items;
	/**
	 * Descrines a single Item instance
	 *
	 */
	var Item = (function (_super) {
	    __extends(Item, _super);
	    /**
	     * Creates a new instance of the Items class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Item(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Item.prototype, "attachmentFiles", {
	        /**
	         * Gets the set of attachments for this item
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "AttachmentFiles");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "contentType", {
	        /**
	         * Gets the content type for this item
	         *
	         */
	        get: function () {
	            return new contenttypes_1.ContentType(this, "ContentType");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "effectiveBasePermissions", {
	        /**
	         * Gets the effective base permissions for the item
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "EffectiveBasePermissions");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "effectiveBasePermissionsForUI", {
	        /**
	         * Gets the effective base permissions for the item in a UI context
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "EffectiveBasePermissionsForUI");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "fieldValuesAsHTML", {
	        /**
	         * Gets the field values for this list item in their HTML representation
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "FieldValuesAsHTML");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "fieldValuesAsText", {
	        /**
	         * Gets the field values for this list item in their text representation
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "FieldValuesAsText");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "fieldValuesForEdit", {
	        /**
	         * Gets the field values for this list item for use in editing controls
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "FieldValuesForEdit");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "folder", {
	        /**
	         * Gets the folder associated with this list item (if this item represents a folder)
	         *
	         */
	        get: function () {
	            return new folders_1.Folder(this, "Folder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Updates this list intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the list
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    Item.prototype.update = function (properties, eTag) {
	        var _this = this;
	        if (eTag === void 0) { eTag = "*"; }
	        var removeDependency = this.addBatchDependency();
	        var parentList = this.getParent(queryable_1.QueryableInstance, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
	        return parentList.select("ListItemEntityTypeFullName").getAs().then(function (d) {
	            var postBody = JSON.stringify(util_1.Util.extend({
	                "__metadata": { "type": d.ListItemEntityTypeFullName },
	            }, properties));
	            var promise = _this.post({
	                body: postBody,
	                headers: {
	                    "IF-Match": eTag,
	                    "X-HTTP-Method": "MERGE",
	                },
	            }).then(function (data) {
	                return {
	                    data: data,
	                    item: _this,
	                };
	            });
	            removeDependency();
	            return promise;
	        });
	    };
	    /**
	     * Delete this item
	     *
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    Item.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return this.post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     */
	    Item.prototype.recycle = function () {
	        var i = new Item(this, "recycle");
	        return i.post();
	    };
	    /**
	     * Gets a string representation of the full URL to the WOPI frame.
	     * If there is no associated WOPI application, or no associated action, an empty string is returned.
	     *
	     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
	     */
	    Item.prototype.getWopiFrameUrl = function (action) {
	        if (action === void 0) { action = 0; }
	        var i = new Item(this, "getWOPIFrameUrl(@action)");
	        i._query.add("@action", action);
	        return i.post().then(function (data) {
	            return data.GetWOPIFrameUrl;
	        });
	    };
	    /**
	     * Validates and sets the values of the specified collection of fields for the list item.
	     *
	     * @param formValues The fields to change and their new values.
	     * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
	     */
	    /* tslint:disable max-line-length */
	    Item.prototype.validateUpdateListItem = function (formValues, newDocumentUpdate) {
	        if (newDocumentUpdate === void 0) { newDocumentUpdate = false; }
	        var postBody = JSON.stringify({ "formValues": formValues, bNewDocumentUpdate: newDocumentUpdate });
	        var item = new Item(this, "validateupdatelistitem");
	        return item.post({ body: postBody });
	    };
	    return Item;
	}(queryablesecurable_1.QueryableSecurable));
	exports.Item = Item;
	/**
	 * Provides paging functionality for list items
	 */
	var PagedItemCollection = (function () {
	    function PagedItemCollection(nextUrl, results) {
	        this.nextUrl = nextUrl;
	        this.results = results;
	    }
	    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
	        /**
	         * If true there are more results available in the set, otherwise there are not
	         */
	        get: function () {
	            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the next set of results, or resolves to null if no results are available
	     */
	    PagedItemCollection.prototype.getNext = function () {
	        if (this.hasNext) {
	            var items = new Items(this.nextUrl, null);
	            return items.getPaged();
	        }
	        return new Promise(function (r) { return r(null); });
	    };
	    return PagedItemCollection;
	}());
	exports.PagedItemCollection = PagedItemCollection;
	var PagedItemCollectionParser = (function (_super) {
	    __extends(PagedItemCollectionParser, _super);
	    function PagedItemCollectionParser() {
	        _super.apply(this, arguments);
	    }
	    PagedItemCollectionParser.prototype.parse = function (r) {
	        var _this = this;
	        return r.json().then(function (json) {
	            var nextUrl = json.hasOwnProperty("d") && json.d.hasOwnProperty("__next") ? json.d.__next : json["odata.nextLink"];
	            return new PagedItemCollection(nextUrl, _this.parseODataJSON(json));
	        });
	    };
	    return PagedItemCollectionParser;
	}(odata_1.ODataParserBase));


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var files_1 = __webpack_require__(282);
	var items_1 = __webpack_require__(280);
	/**
	 * Describes a collection of Folder objects
	 *
	 */
	var Folders = (function (_super) {
	    __extends(Folders, _super);
	    /**
	     * Creates a new instance of the Folders class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Folders(baseUrl, path) {
	        if (path === void 0) { path = "folders"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a folder by folder name
	     *
	     */
	    Folders.prototype.getByName = function (name) {
	        var f = new Folder(this);
	        f.concat("('" + name + "')");
	        return f;
	    };
	    /**
	     * Adds a new folder to the current folder (relative) or any folder (absolute)
	     *
	     * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
	     * @returns The new Folder and the raw response.
	     */
	    Folders.prototype.add = function (url) {
	        var _this = this;
	        return new Folders(this, "add('" + url + "')").post().then(function (response) {
	            return {
	                data: response,
	                folder: _this.getByName(url),
	            };
	        });
	    };
	    return Folders;
	}(queryable_1.QueryableCollection));
	exports.Folders = Folders;
	/**
	 * Describes a single Folder instance
	 *
	 */
	var Folder = (function (_super) {
	    __extends(Folder, _super);
	    //
	    // TODO:
	    //      Properties (https://msdn.microsoft.com/en-us/library/office/dn450841.aspx#bk_FolderProperties)
	    //          UniqueContentTypeOrder (setter)
	    //          WelcomePage (setter)
	    //
	    /**
	     * Creates a new instance of the Folder class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function Folder(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Folder.prototype, "contentTypeOrder", {
	        /**
	         * Specifies the sequence in which content types are displayed.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "contentTypeOrder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "files", {
	        /**
	         * Gets this folder's files
	         *
	         */
	        get: function () {
	            return new files_1.Files(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "folders", {
	        /**
	         * Gets this folder's sub folders
	         *
	         */
	        get: function () {
	            return new Folders(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "listItemAllFields", {
	        /**
	         * Gets this folder's list item
	         *
	         */
	        get: function () {
	            return new items_1.Item(this, "listItemAllFields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "parentFolder", {
	        /**
	         * Gets the parent folder, if available
	         *
	         */
	        get: function () {
	            return new Folder(this, "parentFolder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "properties", {
	        /**
	         * Gets this folder's properties
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "properties");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "serverRelativeUrl", {
	        /**
	         * Gets this folder's server relative url
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "serverRelativeUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "uniqueContentTypeOrder", {
	        /**
	         * Gets a value that specifies the content type order.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "uniqueContentTypeOrder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Delete this folder
	    *
	    * @param eTag Value used in the IF-Match header, by default "*"
	    */
	    Folder.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return new Folder(this).post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     */
	    Folder.prototype.recycle = function () {
	        return new Folder(this, "recycle").post();
	    };
	    return Folder;
	}(queryable_1.QueryableInstance));
	exports.Folder = Folder;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var items_1 = __webpack_require__(280);
	var util_1 = __webpack_require__(253);
	/**
	 * Describes a collection of File objects
	 *
	 */
	var Files = (function (_super) {
	    __extends(Files, _super);
	    /**
	     * Creates a new instance of the Files class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Files(baseUrl, path) {
	        if (path === void 0) { path = "files"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a File by filename
	     *
	     * @param name The name of the file, including extension.
	     */
	    Files.prototype.getByName = function (name) {
	        var f = new File(this);
	        f.concat("('" + name + "')");
	        return f;
	    };
	    /**
	     * Uploads a file.
	     *
	     * @param url The folder-relative url of the file.
	     * @param content The file contents blob.
	     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
	     * @returns The new File and the raw response.
	     */
	    Files.prototype.add = function (url, content, shouldOverWrite) {
	        var _this = this;
	        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
	        return new Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')")
	            .post({
	            body: content,
	        }).then(function (response) {
	            return {
	                data: response,
	                file: _this.getByName(url),
	            };
	        });
	    };
	    /**
	     * Uploads a file.
	     *
	     * @param url The folder-relative url of the file.
	     * @param content The Blob file content to add
	     * @param progress A callback function which can be used to track the progress of the upload
	     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
	     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
	     * @returns The new File and the raw response.
	     */
	    Files.prototype.addChunked = function (url, content, progress, shouldOverWrite, chunkSize) {
	        var _this = this;
	        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
	        if (chunkSize === void 0) { chunkSize = 10485760; }
	        var adder = new Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')");
	        return adder.post().then(function () { return _this.getByName(url); }).then(function (file) { return file.setContentChunked(content, progress, chunkSize); }).then(function (response) {
	            return {
	                data: response,
	                file: _this.getByName(url),
	            };
	        });
	    };
	    /**
	     * Adds a ghosted file to an existing list or document library.
	     *
	     * @param fileUrl The server-relative url where you want to save the file.
	     * @param templateFileType The type of use to create the file.
	     * @returns The template file that was added and the raw response.
	     */
	    Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
	        var _this = this;
	        return new Files(this, "addTemplateFile(urloffile='" + fileUrl + "',templatefiletype=" + templateFileType + ")")
	            .post().then(function (response) {
	            return {
	                data: response,
	                file: _this.getByName(fileUrl),
	            };
	        });
	    };
	    return Files;
	}(queryable_1.QueryableCollection));
	exports.Files = Files;
	/**
	 * Describes a single File instance
	 *
	 */
	var File = (function (_super) {
	    __extends(File, _super);
	    /**
	     * Creates a new instance of the File class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function File(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(File.prototype, "listItemAllFields", {
	        /**
	         * Gets a value that specifies the list item field values for the list item corresponding to the file.
	         *
	         */
	        get: function () {
	            return new items_1.Item(this, "listItemAllFields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "versions", {
	        /**
	         * Gets a collection of versions
	         *
	         */
	        get: function () {
	            return new Versions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Approves the file submitted for content approval with the specified comment.
	     * Only documents in lists that are enabled for content approval can be approved.
	     *
	     * @param comment The comment for the approval.
	     */
	    File.prototype.approve = function (comment) {
	        return new File(this, "approve(comment='" + comment + "')").post();
	    };
	    /**
	     * Stops the chunk upload session without saving the uploaded data.
	     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
	     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
	     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     */
	    File.prototype.cancelUpload = function (uploadId) {
	        return new File(this, "cancelUpload(uploadId=guid'" + uploadId + "')").post();
	    };
	    /**
	     * Checks the file in to a document library based on the check-in type.
	     *
	     * @param comment A comment for the check-in. Its length must be <= 1023.
	     * @param checkinType The check-in type for the file.
	     */
	    File.prototype.checkin = function (comment, checkinType) {
	        if (comment === void 0) { comment = ""; }
	        if (checkinType === void 0) { checkinType = CheckinType.Major; }
	        // TODO: Enforce comment length <= 1023
	        return new File(this, "checkin(comment='" + comment + "',checkintype=" + checkinType + ")").post();
	    };
	    /**
	     * Checks out the file from a document library.
	     */
	    File.prototype.checkout = function () {
	        return new File(this, "checkout").post();
	    };
	    /**
	     * Copies the file to the destination url.
	     *
	     * @param url The absolute url or server relative url of the destination file path to copy to.
	     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
	     */
	    File.prototype.copyTo = function (url, shouldOverWrite) {
	        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
	        return new File(this, "copyTo(strnewurl='" + url + "',boverwrite=" + shouldOverWrite + ")").post();
	    };
	    /**
	     * Delete this file.
	     *
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    File.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return new File(this).post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Denies approval for a file that was submitted for content approval.
	     * Only documents in lists that are enabled for content approval can be denied.
	     *
	     * @param comment The comment for the denial.
	     */
	    File.prototype.deny = function (comment) {
	        if (comment === void 0) { comment = ""; }
	        return new File(this, "deny(comment='" + comment + "')").post();
	    };
	    /**
	     * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
	     * An exception is thrown if the file is not an ASPX page.
	     *
	     * @param scope The WebPartsPersonalizationScope view on the Web Parts page.
	     */
	    File.prototype.getLimitedWebPartManager = function (scope) {
	        if (scope === void 0) { scope = WebPartsPersonalizationScope.User; }
	        return new queryable_1.Queryable(this, "getLimitedWebPartManager(scope=" + scope + ")");
	    };
	    /**
	     * Moves the file to the specified destination url.
	     *
	     * @param url The absolute url or server relative url of the destination file path to move to.
	     * @param moveOperations The bitwise MoveOperations value for how to move the file.
	     */
	    File.prototype.moveTo = function (url, moveOperations) {
	        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
	        return new File(this, "moveTo(newurl='" + url + "',flags=" + moveOperations + ")").post();
	    };
	    /**
	     * Submits the file for content approval with the specified comment.
	     *
	     * @param comment The comment for the published file. Its length must be <= 1023.
	     */
	    File.prototype.publish = function (comment) {
	        if (comment === void 0) { comment = ""; }
	        return new File(this, "publish(comment='" + comment + "')").post();
	    };
	    /**
	     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     *
	     * @returns The GUID of the recycled file.
	     */
	    File.prototype.recycle = function () {
	        return new File(this, "recycle").post();
	    };
	    /**
	     * Reverts an existing checkout for the file.
	     *
	     */
	    File.prototype.undoCheckout = function () {
	        return new File(this, "undoCheckout").post();
	    };
	    /**
	     * Removes the file from content approval or unpublish a major version.
	     *
	     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
	     */
	    File.prototype.unpublish = function (comment) {
	        if (comment === void 0) { comment = ""; }
	        if (comment.length > 1023) {
	            throw new Error("The maximum comment length is 1023 characters.");
	        }
	        return new File(this, "unpublish(comment='" + comment + "')").post();
	    };
	    /**
	     * Gets the contents of the file as text
	     *
	     */
	    File.prototype.getText = function () {
	        return new File(this, "$value").get(new TextFileParser(), { headers: { "binaryStringResponseBody": "true" } });
	    };
	    /**
	     * Gets the contents of the file as a blob, does not work in Node.js
	     *
	     */
	    File.prototype.getBlob = function () {
	        return new File(this, "$value").get(new BlobFileParser(), { headers: { "binaryStringResponseBody": "true" } });
	    };
	    /**
	     * Gets the contents of a file as an ArrayBuffer, works in Node.js
	     */
	    File.prototype.getBuffer = function () {
	        return new File(this, "$value").get(new BufferFileParser(), { headers: { "binaryStringResponseBody": "true" } });
	    };
	    /**
	     * Sets the content of a file, for large files use setContentChunked
	     *
	     * @param content The file content
	     *
	     */
	    File.prototype.setContent = function (content) {
	        var _this = this;
	        var setter = new File(this, "$value");
	        return setter.post({
	            body: content,
	            headers: {
	                "X-HTTP-Method": "PUT",
	            },
	        }).then(function (_) { return new File(_this); });
	    };
	    /**
	     * Sets the contents of a file using a chunked upload approach
	     *
	     * @param file The file to upload
	     * @param progress A callback function which can be used to track the progress of the upload
	     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
	     */
	    File.prototype.setContentChunked = function (file, progress, chunkSize) {
	        if (chunkSize === void 0) { chunkSize = 10485760; }
	        if (typeof progress === "undefined") {
	            progress = function (data) { return null; };
	        }
	        var self = this;
	        var fileSize = file.size;
	        var blockCount = parseInt((file.size / chunkSize).toString(), 10) + ((file.size % chunkSize === 0) ? 1 : 0);
	        console.log("blockCount: " + blockCount);
	        var uploadId = util_1.Util.getGUID();
	        // start the chain with the first fragment
	        progress({ blockNumber: 1, chunkSize: chunkSize, currentPointer: 0, fileSize: fileSize, stage: "starting", totalBlocks: blockCount });
	        var chain = self.startUpload(uploadId, file.slice(0, chunkSize));
	        // skip the first and last blocks
	        var _loop_1 = function(i) {
	            chain = chain.then(function (pointer) {
	                progress({ blockNumber: i, chunkSize: chunkSize, currentPointer: pointer, fileSize: fileSize, stage: "continue", totalBlocks: blockCount });
	                return self.continueUpload(uploadId, pointer, file.slice(pointer, pointer + chunkSize));
	            });
	        };
	        for (var i = 2; i < blockCount; i++) {
	            _loop_1(i);
	        }
	        return chain.then(function (pointer) {
	            progress({ blockNumber: blockCount, chunkSize: chunkSize, currentPointer: pointer, fileSize: fileSize, stage: "finishing", totalBlocks: blockCount });
	            return self.finishUpload(uploadId, pointer, file.slice(pointer));
	        }).then(function (_) {
	            return self;
	        });
	    };
	    /**
	     * Starts a new chunk upload session and uploads the first fragment.
	     * The current file content is not changed when this method completes.
	     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
	     * The upload session ends either when you use the CancelUpload method or when you successfully
	     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
	     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
	     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     * @param fragment The file contents.
	     * @returns The size of the total uploaded data in bytes.
	     */
	    File.prototype.startUpload = function (uploadId, fragment) {
	        return new File(this, "startUpload(uploadId=guid'" + uploadId + "')").postAs({ body: fragment }).then(function (n) { return parseFloat(n); });
	    };
	    /**
	     * Continues the chunk upload session with an additional fragment.
	     * The current file content is not changed.
	     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     * @param fileOffset The size of the offset into the file where the fragment starts.
	     * @param fragment The file contents.
	     * @returns The size of the total uploaded data in bytes.
	     */
	    File.prototype.continueUpload = function (uploadId, fileOffset, fragment) {
	        return new File(this, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")").postAs({ body: fragment }).then(function (n) { return parseFloat(n); });
	    };
	    /**
	     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
	     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     * @param fileOffset The size of the offset into the file where the fragment starts.
	     * @param fragment The file contents.
	     * @returns The newly uploaded file.
	     */
	    File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
	        return new File(this, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")")
	            .postAs({ body: fragment }).then(function (response) {
	            return {
	                data: response,
	                file: new File(response.ServerRelativeUrl),
	            };
	        });
	    };
	    return File;
	}(queryable_1.QueryableInstance));
	exports.File = File;
	var TextFileParser = (function () {
	    function TextFileParser() {
	    }
	    TextFileParser.prototype.parse = function (r) {
	        return r.text();
	    };
	    return TextFileParser;
	}());
	exports.TextFileParser = TextFileParser;
	var BlobFileParser = (function () {
	    function BlobFileParser() {
	    }
	    BlobFileParser.prototype.parse = function (r) {
	        return r.blob();
	    };
	    return BlobFileParser;
	}());
	exports.BlobFileParser = BlobFileParser;
	var BufferFileParser = (function () {
	    function BufferFileParser() {
	    }
	    BufferFileParser.prototype.parse = function (r) {
	        if (util_1.Util.isFunction(r.arrayBuffer)) {
	            return r.arrayBuffer();
	        }
	        return r.buffer();
	    };
	    return BufferFileParser;
	}());
	exports.BufferFileParser = BufferFileParser;
	/**
	 * Describes a collection of Version objects
	 *
	 */
	var Versions = (function (_super) {
	    __extends(Versions, _super);
	    /**
	     * Creates a new instance of the File class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Versions(baseUrl, path) {
	        if (path === void 0) { path = "versions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a version by id
	     *
	     * @param versionId The id of the version to retrieve
	     */
	    Versions.prototype.getById = function (versionId) {
	        var v = new Version(this);
	        v.concat("(" + versionId + ")");
	        return v;
	    };
	    /**
	     * Deletes all the file version objects in the collection.
	     *
	     */
	    Versions.prototype.deleteAll = function () {
	        return new Versions(this, "deleteAll").post();
	    };
	    /**
	     * Deletes the specified version of the file.
	     *
	     * @param versionId The ID of the file version to delete.
	     */
	    Versions.prototype.deleteById = function (versionId) {
	        return new Versions(this, "deleteById(vid=" + versionId + ")").post();
	    };
	    /**
	     * Deletes the file version object with the specified version label.
	     *
	     * @param label The version label of the file version to delete, for example: 1.2
	     */
	    Versions.prototype.deleteByLabel = function (label) {
	        return new Versions(this, "deleteByLabel(versionlabel='" + label + "')").post();
	    };
	    /**
	     * Creates a new file version from the file specified by the version label.
	     *
	     * @param label The version label of the file version to restore, for example: 1.2
	     */
	    Versions.prototype.restoreByLabel = function (label) {
	        return new Versions(this, "restoreByLabel(versionlabel='" + label + "')").post();
	    };
	    return Versions;
	}(queryable_1.QueryableCollection));
	exports.Versions = Versions;
	/**
	 * Describes a single Version instance
	 *
	 */
	var Version = (function (_super) {
	    __extends(Version, _super);
	    /**
	     * Creates a new instance of the Version class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function Version(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    /**
	    * Delete a specific version of a file.
	    *
	    * @param eTag Value used in the IF-Match header, by default "*"
	    */
	    Version.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return this.post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return Version;
	}(queryable_1.QueryableInstance));
	exports.Version = Version;
	(function (CheckinType) {
	    CheckinType[CheckinType["Minor"] = 0] = "Minor";
	    CheckinType[CheckinType["Major"] = 1] = "Major";
	    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
	})(exports.CheckinType || (exports.CheckinType = {}));
	var CheckinType = exports.CheckinType;
	(function (WebPartsPersonalizationScope) {
	    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
	    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
	})(exports.WebPartsPersonalizationScope || (exports.WebPartsPersonalizationScope = {}));
	var WebPartsPersonalizationScope = exports.WebPartsPersonalizationScope;
	(function (MoveOperations) {
	    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
	    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
	})(exports.MoveOperations || (exports.MoveOperations = {}));
	var MoveOperations = exports.MoveOperations;
	(function (TemplateFileType) {
	    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
	    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
	    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
	})(exports.TemplateFileType || (exports.TemplateFileType = {}));
	var TemplateFileType = exports.TemplateFileType;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(253);
	var queryable_1 = __webpack_require__(263);
	/**
	 * Describes a collection of content types
	 *
	 */
	var ContentTypes = (function (_super) {
	    __extends(ContentTypes, _super);
	    /**
	     * Creates a new instance of the ContentTypes class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this content types collection
	     */
	    function ContentTypes(baseUrl, path) {
	        if (path === void 0) { path = "contenttypes"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a ContentType by content type id
	     */
	    ContentTypes.prototype.getById = function (id) {
	        var ct = new ContentType(this);
	        ct.concat("('" + id + "')");
	        return ct;
	    };
	    /**
	     * Adds an existing contenttype to a content type collection
	     *
	     * @param contentTypeId in the following format, for example: 0x010102
	     */
	    ContentTypes.prototype.addAvailableContentType = function (contentTypeId) {
	        var _this = this;
	        var postBody = JSON.stringify({
	            "contentTypeId": contentTypeId,
	        });
	        return new ContentTypes(this, "addAvailableContentType").postAs({ body: postBody }).then(function (data) {
	            return {
	                contentType: _this.getById(data.id),
	                data: data,
	            };
	        });
	    };
	    /**
	     * Adds a new content type to the collection
	     *
	     * @param id The desired content type id for the new content type (also determines the parent content type)
	     * @param name The name of the content type
	     * @param description The description of the content type
	     * @param group The group in which to add the content type
	     * @param additionalSettings Any additional settings to provide when creating the content type
	     *
	     */
	    ContentTypes.prototype.add = function (id, name, description, group, additionalSettings) {
	        var _this = this;
	        if (description === void 0) { description = ""; }
	        if (group === void 0) { group = "Custom Content Types"; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.ContentType" },
	            "Id": { "StringValue": id },
	            "Name": name,
	            "Group": group,
	            "Description": description,
	        }, additionalSettings));
	        return this.post({ body: postBody }).then(function (data) {
	            return { contentType: _this.getById(data.id), data: data };
	        });
	    };
	    return ContentTypes;
	}(queryable_1.QueryableCollection));
	exports.ContentTypes = ContentTypes;
	/**
	 * Describes a single ContentType instance
	 *
	 */
	var ContentType = (function (_super) {
	    __extends(ContentType, _super);
	    /**
	     * Creates a new instance of the ContentType class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this content type instance
	     */
	    function ContentType(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(ContentType.prototype, "fieldLinks", {
	        /**
	         * Gets the column (also known as field) references in the content type.
	        */
	        get: function () {
	            return new queryable_1.Queryable(this, "fieldLinks");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "fields", {
	        /**
	         * Gets a value that specifies the collection of fields for the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "fields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "parent", {
	        /**
	         * Gets the parent content type of the content type.
	         */
	        get: function () {
	            return new ContentType(this, "parent");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "workflowAssociations", {
	        /**
	         * Gets a value that specifies the collection of workflow associations for the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "workflowAssociations");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ContentType;
	}(queryable_1.QueryableInstance));
	exports.ContentType = ContentType;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var util_1 = __webpack_require__(253);
	/**
	 * Describes the views available in the current context
	 *
	 */
	var Views = (function (_super) {
	    __extends(Views, _super);
	    /**
	     * Creates a new instance of the Views class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Views(baseUrl) {
	        _super.call(this, baseUrl, "views");
	    }
	    /**
	     * Gets a view by guid id
	     *
	     * @param id The GUID id of the view
	     */
	    Views.prototype.getById = function (id) {
	        var v = new View(this);
	        v.concat("('" + id + "')");
	        return v;
	    };
	    /**
	     * Gets a view by title (case-sensitive)
	     *
	     * @param title The case-sensitive title of the view
	     */
	    Views.prototype.getByTitle = function (title) {
	        return new View(this, "getByTitle('" + title + "')");
	    };
	    /**
	     * Adds a new view to the collection
	     *
	     * @param title The new views's title
	     * @param personalView True if this is a personal view, otherwise false, default = false
	     * @param additionalSettings Will be passed as part of the view creation body
	     */
	    /*tslint:disable max-line-length */
	    Views.prototype.add = function (title, personalView, additionalSettings) {
	        var _this = this;
	        if (personalView === void 0) { personalView = false; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.View" },
	            "Title": title,
	            "PersonalView": personalView,
	        }, additionalSettings));
	        return this.postAs({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                view: _this.getById(data.Id),
	            };
	        });
	    };
	    return Views;
	}(queryable_1.QueryableCollection));
	exports.Views = Views;
	/**
	 * Describes a single View instance
	 *
	 */
	var View = (function (_super) {
	    __extends(View, _super);
	    /**
	     * Creates a new instance of the View class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function View(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(View.prototype, "fields", {
	        get: function () {
	            return new ViewFields(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Updates this view intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the view
	     */
	    View.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.View" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                view: _this,
	            };
	        });
	    };
	    /**
	     * Delete this view
	     *
	     */
	    View.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Returns the list view as HTML.
	     *
	     */
	    View.prototype.renderAsHtml = function () {
	        var q = new queryable_1.Queryable(this, "renderashtml");
	        return q.get();
	    };
	    return View;
	}(queryable_1.QueryableInstance));
	exports.View = View;
	var ViewFields = (function (_super) {
	    __extends(ViewFields, _super);
	    function ViewFields(baseUrl, path) {
	        if (path === void 0) { path = "viewfields"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a value that specifies the XML schema that represents the collection.
	     */
	    ViewFields.prototype.getSchemaXml = function () {
	        var q = new queryable_1.Queryable(this, "schemaxml");
	        return q.get();
	    };
	    /**
	     * Adds the field with the specified field internal name or display name to the collection.
	     *
	     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
	     */
	    ViewFields.prototype.add = function (fieldTitleOrInternalName) {
	        var q = new ViewFields(this, "addviewfield('" + fieldTitleOrInternalName + "')");
	        return q.post();
	    };
	    /**
	     * Moves the field with the specified field internal name to the specified position in the collection.
	     *
	     * @param fieldInternalName The case-sensitive internal name of the field to move.
	     * @param index The zero-based index of the new position for the field.
	     */
	    ViewFields.prototype.move = function (fieldInternalName, index) {
	        var q = new ViewFields(this, "moveviewfieldto");
	        var postBody = JSON.stringify({ "field": fieldInternalName, "index": index });
	        return q.post({ body: postBody });
	    };
	    /**
	     * Removes all the fields from the collection.
	     */
	    ViewFields.prototype.removeAll = function () {
	        var q = new ViewFields(this, "removeallviewfields");
	        return q.post();
	    };
	    /**
	     * Removes the field with the specified field internal name from the collection.
	     *
	     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
	     */
	    ViewFields.prototype.remove = function (fieldInternalName) {
	        var q = new ViewFields(this, "removeviewfield('" + fieldInternalName + "')");
	        return q.post();
	    };
	    return ViewFields;
	}(queryable_1.QueryableCollection));
	exports.ViewFields = ViewFields;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var util_1 = __webpack_require__(253);
	var Types = __webpack_require__(286);
	/**
	 * Describes a collection of Field objects
	 *
	 */
	var Fields = (function (_super) {
	    __extends(Fields, _super);
	    /**
	     * Creates a new instance of the Fields class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Fields(baseUrl, path) {
	        if (path === void 0) { path = "fields"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a field from the collection by title
	     *
	     * @param title The case-sensitive title of the field
	     */
	    Fields.prototype.getByTitle = function (title) {
	        return new Field(this, "getByTitle('" + title + "')");
	    };
	    /**
	     * Gets a field from the collection by using internal name or title
	     *
	     * @param name The case-sensitive internal name or title of the field
	     */
	    Fields.prototype.getByInternalNameOrTitle = function (name) {
	        return new Field(this, "getByInternalNameOrTitle('" + name + "')");
	    };
	    /**
	     * Gets a list from the collection by guid id
	     *
	     * @param title The Id of the list
	     */
	    Fields.prototype.getById = function (id) {
	        var f = new Field(this);
	        f.concat("('" + id + "')");
	        return f;
	    };
	    /**
	     * Creates a field based on the specified schema
	     */
	    Fields.prototype.createFieldAsXml = function (xml) {
	        var _this = this;
	        var info;
	        if (typeof xml === "string") {
	            info = { SchemaXml: xml };
	        }
	        else {
	            info = xml;
	        }
	        var postBody = JSON.stringify({
	            "parameters": util_1.Util.extend({
	                "__metadata": {
	                    "type": "SP.XmlSchemaFieldCreationInformation",
	                },
	            }, info),
	        });
	        var q = new Fields(this, "createfieldasxml");
	        return q.postAs({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                field: _this.getById(data.Id),
	            };
	        });
	    };
	    /**
	     * Adds a new list to the collection
	     *
	     * @param title The new field's title
	     * @param fieldType The new field's type (ex: SP.FieldText)
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.add = function (title, fieldType, properties) {
	        var _this = this;
	        if (properties === void 0) { properties = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": fieldType },
	            "Title": title,
	        }, properties));
	        return this.postAs({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                field: _this.getById(data.Id),
	            };
	        });
	    };
	    /**
	     * Adds a new SP.FieldText to the collection
	     *
	     * @param title The field title
	     * @param maxLength The maximum number of characters allowed in the value of the field.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addText = function (title, maxLength, properties) {
	        if (maxLength === void 0) { maxLength = 255; }
	        var props = {
	            FieldTypeKind: 2,
	        };
	        return this.add(title, "SP.FieldText", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldCalculated to the collection
	     *
	     * @param title The field title.
	     * @param formula The formula for the field.
	     * @param dateFormat The date and time format that is displayed in the field.
	     * @param outputType Specifies the output format for the field. Represents a FieldType value.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addCalculated = function (title, formula, dateFormat, outputType, properties) {
	        if (outputType === void 0) { outputType = Types.FieldTypes.Text; }
	        var props = {
	            DateFormat: dateFormat,
	            FieldTypeKind: 17,
	            Formula: formula,
	            OutputType: outputType,
	        };
	        return this.add(title, "SP.FieldCalculated", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldDateTime to the collection
	     *
	     * @param title The field title
	     * @param displayFormat The format of the date and time that is displayed in the field.
	     * @param calendarType Specifies the calendar type of the field.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addDateTime = function (title, displayFormat, calendarType, friendlyDisplayFormat, properties) {
	        if (displayFormat === void 0) { displayFormat = Types.DateTimeFieldFormatType.DateOnly; }
	        if (calendarType === void 0) { calendarType = Types.CalendarType.Gregorian; }
	        if (friendlyDisplayFormat === void 0) { friendlyDisplayFormat = 0; }
	        var props = {
	            DateTimeCalendarType: calendarType,
	            DisplayFormat: displayFormat,
	            FieldTypeKind: 4,
	            FriendlyDisplayFormat: friendlyDisplayFormat,
	        };
	        return this.add(title, "SP.FieldDateTime", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldNumber to the collection
	     *
	     * @param title The field title
	     * @param minValue The field's minimum value
	     * @param maxValue The field's maximum value
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addNumber = function (title, minValue, maxValue, properties) {
	        var props = { FieldTypeKind: 9 };
	        if (typeof minValue !== "undefined") {
	            props = util_1.Util.extend({ MinimumValue: minValue }, props);
	        }
	        if (typeof maxValue !== "undefined") {
	            props = util_1.Util.extend({ MaximumValue: maxValue }, props);
	        }
	        return this.add(title, "SP.FieldNumber", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldCurrency to the collection
	     *
	     * @param title The field title
	     * @param minValue The field's minimum value
	     * @param maxValue The field's maximum value
	     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addCurrency = function (title, minValue, maxValue, currencyLocalId, properties) {
	        if (currencyLocalId === void 0) { currencyLocalId = 1033; }
	        var props = {
	            CurrencyLocaleId: currencyLocalId,
	            FieldTypeKind: 10,
	        };
	        if (typeof minValue !== "undefined") {
	            props = util_1.Util.extend({ MinimumValue: minValue }, props);
	        }
	        if (typeof maxValue !== "undefined") {
	            props = util_1.Util.extend({ MaximumValue: maxValue }, props);
	        }
	        return this.add(title, "SP.FieldCurrency", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldMultiLineText to the collection
	     *
	     * @param title The field title
	     * @param numberOfLines Specifies the number of lines of text to display for the field.
	     * @param richText Specifies whether the field supports rich formatting.
	     * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
	     * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
	     * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     *
	     */
	    Fields.prototype.addMultilineText = function (title, numberOfLines, richText, restrictedMode, appendOnly, allowHyperlink, properties) {
	        if (numberOfLines === void 0) { numberOfLines = 6; }
	        if (richText === void 0) { richText = true; }
	        if (restrictedMode === void 0) { restrictedMode = false; }
	        if (appendOnly === void 0) { appendOnly = false; }
	        if (allowHyperlink === void 0) { allowHyperlink = true; }
	        var props = {
	            AllowHyperlink: allowHyperlink,
	            AppendOnly: appendOnly,
	            FieldTypeKind: 3,
	            NumberOfLines: numberOfLines,
	            RestrictedMode: restrictedMode,
	            RichText: richText,
	        };
	        return this.add(title, "SP.FieldMultiLineText", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldUrl to the collection
	     *
	     * @param title The field title
	     */
	    Fields.prototype.addUrl = function (title, displayFormat, properties) {
	        if (displayFormat === void 0) { displayFormat = Types.UrlFieldFormatType.Hyperlink; }
	        var props = {
	            DisplayFormat: displayFormat,
	            FieldTypeKind: 11,
	        };
	        return this.add(title, "SP.FieldUrl", util_1.Util.extend(props, properties));
	    };
	    return Fields;
	}(queryable_1.QueryableCollection));
	exports.Fields = Fields;
	/**
	 * Describes a single of Field instance
	 *
	 */
	var Field = (function (_super) {
	    __extends(Field, _super);
	    /**
	     * Creates a new instance of the Field class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this field instance
	     */
	    function Field(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Updates this field intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the list
	     * @param fieldType The type value, required to update child field type properties
	     */
	    Field.prototype.update = function (properties, fieldType) {
	        var _this = this;
	        if (fieldType === void 0) { fieldType = "SP.Field"; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": fieldType },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                field: _this,
	            };
	        });
	    };
	    /**
	     * Delete this fields
	     *
	     */
	    Field.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Sets the value of the ShowInDisplayForm property for this field.
	     */
	    Field.prototype.setShowInDisplayForm = function (show) {
	        var q = new Field(this, "setshowindisplayform(" + show + ")");
	        return q.post();
	    };
	    /**
	     * Sets the value of the ShowInEditForm property for this field.
	     */
	    Field.prototype.setShowInEditForm = function (show) {
	        var q = new Field(this, "setshowineditform(" + show + ")");
	        return q.post();
	    };
	    /**
	     * Sets the value of the ShowInNewForm property for this field.
	     */
	    Field.prototype.setShowInNewForm = function (show) {
	        var q = new Field(this, "setshowinnewform(" + show + ")");
	        return q.post();
	    };
	    return Field;
	}(queryable_1.QueryableInstance));
	exports.Field = Field;


/***/ },
/* 286 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Determines the display mode of the given control or view
	 */
	(function (ControlMode) {
	    ControlMode[ControlMode["Display"] = 1] = "Display";
	    ControlMode[ControlMode["Edit"] = 2] = "Edit";
	    ControlMode[ControlMode["New"] = 3] = "New";
	})(exports.ControlMode || (exports.ControlMode = {}));
	var ControlMode = exports.ControlMode;
	/**
	 * Specifies the type of the field.
	 */
	(function (FieldTypes) {
	    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
	    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
	    FieldTypes[FieldTypes["Text"] = 2] = "Text";
	    FieldTypes[FieldTypes["Note"] = 3] = "Note";
	    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
	    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
	    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
	    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
	    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
	    FieldTypes[FieldTypes["Number"] = 9] = "Number";
	    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
	    FieldTypes[FieldTypes["URL"] = 11] = "URL";
	    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
	    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
	    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
	    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
	    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
	    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
	    FieldTypes[FieldTypes["File"] = 18] = "File";
	    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
	    FieldTypes[FieldTypes["User"] = 20] = "User";
	    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
	    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
	    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
	    FieldTypes[FieldTypes["Error"] = 24] = "Error";
	    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
	    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
	    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
	    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
	    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
	    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
	})(exports.FieldTypes || (exports.FieldTypes = {}));
	var FieldTypes = exports.FieldTypes;
	(function (DateTimeFieldFormatType) {
	    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
	    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
	})(exports.DateTimeFieldFormatType || (exports.DateTimeFieldFormatType = {}));
	var DateTimeFieldFormatType = exports.DateTimeFieldFormatType;
	/**
	 * Specifies the control settings while adding a field.
	 */
	(function (AddFieldOptions) {
	    /**
	     *  Specify that a new field added to the list must also be added to the default content type in the site collection
	     */
	    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
	    /**
	     * Specify that a new field added to the list must also be added to the default content type in the site collection.
	     */
	    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
	    /**
	     * Specify that a new field must not be added to any other content type
	     */
	    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
	    /**
	     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
	     */
	    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
	    /**
	     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
	     */
	    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
	    /**
	     * Specify that a new field that is added to the specified list must also be added to the default list view
	     */
	    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
	    /**
	     * Specify to confirm that no other field has the same display name
	     */
	    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
	})(exports.AddFieldOptions || (exports.AddFieldOptions = {}));
	var AddFieldOptions = exports.AddFieldOptions;
	(function (CalendarType) {
	    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
	    CalendarType[CalendarType["Japan"] = 3] = "Japan";
	    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
	    CalendarType[CalendarType["Korea"] = 5] = "Korea";
	    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
	    CalendarType[CalendarType["Thai"] = 7] = "Thai";
	    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
	    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
	    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
	    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
	    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
	    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
	    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
	    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
	    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
	})(exports.CalendarType || (exports.CalendarType = {}));
	var CalendarType = exports.CalendarType;
	(function (UrlFieldFormatType) {
	    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
	    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
	})(exports.UrlFieldFormatType || (exports.UrlFieldFormatType = {}));
	var UrlFieldFormatType = exports.UrlFieldFormatType;
	(function (PrincipalType) {
	    PrincipalType[PrincipalType["None"] = 0] = "None";
	    PrincipalType[PrincipalType["User"] = 1] = "User";
	    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
	    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
	    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
	    PrincipalType[PrincipalType["All"] = 15] = "All";
	})(exports.PrincipalType || (exports.PrincipalType = {}));
	var PrincipalType = exports.PrincipalType;
	(function (PageType) {
	    PageType[PageType["Invalid"] = -1] = "Invalid";
	    PageType[PageType["DefaultView"] = 0] = "DefaultView";
	    PageType[PageType["NormalView"] = 1] = "NormalView";
	    PageType[PageType["DialogView"] = 2] = "DialogView";
	    PageType[PageType["View"] = 3] = "View";
	    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
	    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
	    PageType[PageType["EditForm"] = 6] = "EditForm";
	    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
	    PageType[PageType["NewForm"] = 8] = "NewForm";
	    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
	    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
	    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
	})(exports.PageType || (exports.PageType = {}));
	var PageType = exports.PageType;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	/**
	 * Describes a collection of Field objects
	 *
	 */
	var Forms = (function (_super) {
	    __extends(Forms, _super);
	    /**
	     * Creates a new instance of the Fields class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Forms(baseUrl, path) {
	        if (path === void 0) { path = "forms"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a form by id
	     *
	     * @param id The guid id of the item to retrieve
	     */
	    Forms.prototype.getById = function (id) {
	        var i = new Form(this);
	        i.concat("('" + id + "')");
	        return i;
	    };
	    return Forms;
	}(queryable_1.QueryableCollection));
	exports.Forms = Forms;
	/**
	 * Describes a single of Form instance
	 *
	 */
	var Form = (function (_super) {
	    __extends(Form, _super);
	    /**
	     * Creates a new instance of the Form class
	     *
	     * @param baseUrl The url or Queryable which is the parent of this form instance
	     */
	    function Form(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    return Form;
	}(queryable_1.QueryableInstance));
	exports.Form = Form;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	/**
	 * Describes a collection of webhook subscriptions
	 *
	 */
	var Subscriptions = (function (_super) {
	    __extends(Subscriptions, _super);
	    /**
	     * Creates a new instance of the Subscriptions class
	     *
	     * @param baseUrl - The url or Queryable which forms the parent of this webhook subscriptions collection
	     */
	    function Subscriptions(baseUrl, path) {
	        if (path === void 0) { path = "subscriptions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Returns all the webhook subscriptions or the specified webhook subscription
	     *
	     */
	    Subscriptions.prototype.getById = function (subscriptionId) {
	        var subscription = new Subscription(this);
	        subscription.concat("('" + subscriptionId + "')");
	        return subscription;
	    };
	    /**
	     * Create a new webhook subscription
	     *
	     */
	    Subscriptions.prototype.add = function (notificationUrl, expirationDate, clientState) {
	        var _this = this;
	        var postBody = JSON.stringify({
	            "resource": this.toUrl(),
	            "notificationUrl": notificationUrl,
	            "expirationDateTime": expirationDate,
	            "clientState": clientState || "pnp-js-core-subscription",
	        });
	        return this.post({ body: postBody, headers: { "Content-Type": "application/json" } }).then(function (result) {
	            return { data: result, subscription: _this.getById(result.id) };
	        });
	    };
	    return Subscriptions;
	}(queryable_1.QueryableCollection));
	exports.Subscriptions = Subscriptions;
	/**
	 * Describes a single webhook subscription instance
	 *
	 */
	var Subscription = (function (_super) {
	    __extends(Subscription, _super);
	    /**
	     * Creates a new instance of the Subscription class
	     *
	     * @param baseUrl - The url or Queryable which forms the parent of this webhook subscription instance
	     */
	    function Subscription(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Update a webhook subscription
	     *
	     */
	    Subscription.prototype.update = function (expirationDate) {
	        var _this = this;
	        var postBody = JSON.stringify({
	            "expirationDateTime": expirationDate,
	        });
	        return this.patch({ body: postBody, headers: { "Content-Type": "application/json" } }).then(function (data) {
	            return { data: data, subscription: _this };
	        });
	    };
	    /**
	     * Remove a webhook subscription
	     *
	     */
	    Subscription.prototype.delete = function () {
	        return _super.prototype.delete.call(this);
	    };
	    return Subscription;
	}(queryable_1.QueryableInstance));
	exports.Subscription = Subscription;


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var util_1 = __webpack_require__(253);
	var UserCustomActions = (function (_super) {
	    __extends(UserCustomActions, _super);
	    function UserCustomActions(baseUrl, path) {
	        if (path === void 0) { path = "usercustomactions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Returns the custom action with the specified identifier.
	     *
	     * @param id The GUID ID of the user custom action to get.
	     */
	    UserCustomActions.prototype.getById = function (id) {
	        return new UserCustomAction(this, "(" + id + ")");
	    };
	    /**
	     * Create a custom action
	     *
	     * @param creationInfo The information which defines the new custom action
	     *
	     */
	    UserCustomActions.prototype.add = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({ __metadata: { "type": "SP.UserCustomAction" } }, properties));
	        return this.post({ body: postBody }).then(function (data) {
	            return {
	                action: _this.getById(data.Id),
	                data: data,
	            };
	        });
	    };
	    /**
	     * Deletes all custom actions in the collection.
	     *
	     */
	    UserCustomActions.prototype.clear = function () {
	        var a = new UserCustomActions(this, "clear");
	        return a.post();
	    };
	    return UserCustomActions;
	}(queryable_1.QueryableCollection));
	exports.UserCustomActions = UserCustomActions;
	var UserCustomAction = (function (_super) {
	    __extends(UserCustomAction, _super);
	    function UserCustomAction(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    UserCustomAction.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.UserCustomAction" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                action: _this,
	                data: data,
	            };
	        });
	    };
	    return UserCustomAction;
	}(queryable_1.QueryableInstance));
	exports.UserCustomAction = UserCustomAction;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var quicklaunch_1 = __webpack_require__(291);
	var topnavigationbar_1 = __webpack_require__(292);
	/**
	 * Exposes the navigation components
	 *
	 */
	var Navigation = (function (_super) {
	    __extends(Navigation, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Navigation(baseUrl) {
	        _super.call(this, baseUrl, "navigation");
	    }
	    Object.defineProperty(Navigation.prototype, "quicklaunch", {
	        /**
	         * Gets the quicklaunch navigation for the current context
	         *
	         */
	        get: function () {
	            return new quicklaunch_1.QuickLaunch(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Navigation.prototype, "topNavigationBar", {
	        /**
	         * Gets the top bar navigation navigation for the current context
	         *
	         */
	        get: function () {
	            return new topnavigationbar_1.TopNavigationBar(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Navigation;
	}(queryable_1.Queryable));
	exports.Navigation = Navigation;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	/**
	 * Describes the quick launch navigation
	 *
	 */
	var QuickLaunch = (function (_super) {
	    __extends(QuickLaunch, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function QuickLaunch(baseUrl) {
	        _super.call(this, baseUrl, "QuickLaunch");
	    }
	    return QuickLaunch;
	}(queryable_1.Queryable));
	exports.QuickLaunch = QuickLaunch;


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	/**
	 * Describes the top navigation on the site
	 *
	 */
	var TopNavigationBar = (function (_super) {
	    __extends(TopNavigationBar, _super);
	    /**
	     * Creates a new instance of the SiteUsers class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function TopNavigationBar(baseUrl) {
	        _super.call(this, baseUrl, "TopNavigationBar");
	    }
	    return TopNavigationBar;
	}(queryable_1.QueryableInstance));
	exports.TopNavigationBar = TopNavigationBar;


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(263);
	var FileUtil = __webpack_require__(294);
	var odata_1 = __webpack_require__(267);
	var UserProfileQuery = (function (_super) {
	    __extends(UserProfileQuery, _super);
	    function UserProfileQuery(baseUrl, path) {
	        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
	        _super.call(this, baseUrl, path);
	        this.profileLoader = new ProfileLoader(baseUrl);
	    }
	    Object.defineProperty(UserProfileQuery.prototype, "editProfileLink", {
	        /**
	         * The URL of the edit profile page for the current user.
	         */
	        get: function () {
	            var q = new UserProfileQuery(this, "EditProfileLink");
	            return q.getAs(odata_1.ODataValue());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UserProfileQuery.prototype, "isMyPeopleListPublic", {
	        /**
	         * A Boolean value that indicates whether the current user's People I'm Following list is public.
	         */
	        get: function () {
	            var q = new UserProfileQuery(this, "IsMyPeopleListPublic");
	            return q.getAs(odata_1.ODataValue());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * A Boolean value that indicates whether the current user's People I'm Following list is public.
	     *
	     * @param loginName The account name of the user
	     */
	    UserProfileQuery.prototype.amIFollowedBy = function (loginName) {
	        var q = new UserProfileQuery(this, "amifollowedby(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Checks whether the current user is following the specified user.
	     *
	     * @param loginName The account name of the user
	     */
	    UserProfileQuery.prototype.amIFollowing = function (loginName) {
	        var q = new UserProfileQuery(this, "amifollowing(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Gets tags that the user is following.
	     *
	     * @param maxCount The maximum number of tags to get.
	     */
	    UserProfileQuery.prototype.getFollowedTags = function (maxCount) {
	        if (maxCount === void 0) { maxCount = 20; }
	        var q = new UserProfileQuery(this, "getfollowedtags(" + maxCount + ")");
	        return q.get();
	    };
	    /**
	     * Gets the people who are following the specified user.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.getFollowersFor = function (loginName) {
	        var q = new UserProfileQuery(this, "getfollowersfor(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    Object.defineProperty(UserProfileQuery.prototype, "myFollowers", {
	        /**
	         * Gets the people who are following the current user.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "getmyfollowers");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UserProfileQuery.prototype, "myProperties", {
	        /**
	         * Gets user properties for the current user.
	         *
	         */
	        get: function () {
	            return new UserProfileQuery(this, "getmyproperties");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the people who the specified user is following.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.getPeopleFollowedBy = function (loginName) {
	        var q = new UserProfileQuery(this, "getpeoplefollowedby(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Gets user properties for the specified user.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.getPropertiesFor = function (loginName) {
	        var q = new UserProfileQuery(this, "getpropertiesfor(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    Object.defineProperty(UserProfileQuery.prototype, "trendingTags", {
	        /**
	         * Gets the most popular tags.
	         *
	         */
	        get: function () {
	            var q = new UserProfileQuery(this, null);
	            q.concat(".gettrendingtags");
	            return q.get();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the specified user profile property for the specified user.
	     *
	     * @param loginName The account name of the user.
	     * @param propertyName The case-sensitive name of the property to get.
	     */
	    UserProfileQuery.prototype.getUserProfilePropertyFor = function (loginName, propertyName) {
	        var q = new UserProfileQuery(this, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Removes the specified user from the user's list of suggested people to follow.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.hideSuggestion = function (loginName) {
	        var q = new UserProfileQuery(this, "hidesuggestion(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.post();
	    };
	    /**
	     * Checks whether the first user is following the second user.
	     *
	     * @param follower The account name of the user who might be following followee.
	     * @param followee The account name of the user who might be followed.
	     */
	    UserProfileQuery.prototype.isFollowing = function (follower, followee) {
	        var q = new UserProfileQuery(this, null);
	        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
	        q.query.add("@v", "'" + encodeURIComponent(follower) + "'");
	        q.query.add("@y", "'" + encodeURIComponent(followee) + "'");
	        return q.get();
	    };
	    /**
	     * Uploads and sets the user profile picture
	     *
	     * @param profilePicSource Blob data representing the user's picture
	     */
	    UserProfileQuery.prototype.setMyProfilePic = function (profilePicSource) {
	        var _this = this;
	        return FileUtil.readBlobAsArrayBuffer(profilePicSource).then(function (buffer) {
	            var request = new UserProfileQuery(_this, "setmyprofilepicture");
	            return request.post({
	                body: String.fromCharCode.apply(null, new Uint16Array(buffer)),
	            });
	        });
	    };
	    /**
	     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
	     *
	     * @param emails The email addresses of the users to provision sites for
	     */
	    UserProfileQuery.prototype.createPersonalSiteEnqueueBulk = function () {
	        var emails = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            emails[_i - 0] = arguments[_i];
	        }
	        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
	    };
	    Object.defineProperty(UserProfileQuery.prototype, "ownerUserProfile", {
	        /**
	         * Gets the user profile of the site owner.
	         *
	         */
	        get: function () {
	            return this.profileLoader.ownerUserProfile;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UserProfileQuery.prototype, "userProfile", {
	        /**
	         * Gets the user profile that corresponds to the current user.
	         */
	        get: function () {
	            return this.profileLoader.userProfile;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
	     *
	     * @param interactiveRequest true if interactively (web) initiated request, or false if non-interactively (client) initiated request
	     */
	    UserProfileQuery.prototype.createPersonalSite = function (interactiveRequest) {
	        if (interactiveRequest === void 0) { interactiveRequest = false; }
	        return this.profileLoader.createPersonalSite(interactiveRequest);
	    };
	    /**
	     * Sets the privacy settings for this profile.
	     *
	     * @param share true to make all social data public; false to make all social data private.
	     */
	    UserProfileQuery.prototype.shareAllSocialData = function (share) {
	        return this.profileLoader.shareAllSocialData(share);
	    };
	    return UserProfileQuery;
	}(queryable_1.QueryableInstance));
	exports.UserProfileQuery = UserProfileQuery;
	var ProfileLoader = (function (_super) {
	    __extends(ProfileLoader, _super);
	    function ProfileLoader(baseUrl, path) {
	        if (path === void 0) { path = "_api/sp.userprofiles.profileloader.getprofileloader"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
	     *
	     * @param emails The email addresses of the users to provision sites for
	     */
	    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
	        var q = new ProfileLoader(this, "createpersonalsiteenqueuebulk");
	        var postBody = JSON.stringify({ "emailIDs": emails });
	        return q.post({
	            body: postBody,
	        });
	    };
	    Object.defineProperty(ProfileLoader.prototype, "ownerUserProfile", {
	        /**
	         * Gets the user profile of the site owner.
	         *
	         */
	        get: function () {
	            var q = this.getParent(ProfileLoader, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
	            return q.postAs();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ProfileLoader.prototype, "userProfile", {
	        /**
	         * Gets the user profile that corresponds to the current user.
	         *
	         */
	        get: function () {
	            var q = new ProfileLoader(this, "getuserprofile");
	            return q.postAs();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
	     *
	     * @param interactiveRequest true if interactively (web) initiated request, or false if non-interactively (client) initiated request
	     */
	    ProfileLoader.prototype.createPersonalSite = function (interactiveRequest) {
	        if (interactiveRequest === void 0) { interactiveRequest = false; }
	        var q = new ProfileLoader(this, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")\",");
	        return q.post();
	    };
	    /**
	     * Sets the privacy settings for this profile.
	     *
	     * @param share true to make all social data public; false to make all social data private.
	     */
	    ProfileLoader.prototype.shareAllSocialData = function (share) {
	        var q = new ProfileLoader(this, "getuserprofile/shareallsocialdata(" + share + ")\",");
	        return q.post();
	    };
	    return ProfileLoader;
	}(queryable_1.Queryable));


/***/ },
/* 294 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Reads a blob as text
	 *
	 * @param blob The data to read
	 */
	function readBlobAsText(blob) {
	    return readBlobAs(blob, "string");
	}
	exports.readBlobAsText = readBlobAsText;
	/**
	 * Reads a blob into an array buffer
	 *
	 * @param blob The data to read
	 */
	function readBlobAsArrayBuffer(blob) {
	    return readBlobAs(blob, "buffer");
	}
	exports.readBlobAsArrayBuffer = readBlobAsArrayBuffer;
	/**
	 * Generic method to read blob's content
	 *
	 * @param blob The data to read
	 * @param mode The read mode
	 */
	function readBlobAs(blob, mode) {
	    return new Promise(function (resolve, reject) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            resolve(e.target.result);
	        };
	        switch (mode) {
	            case "string":
	                reader.readAsText(blob);
	                break;
	            case "buffer":
	                reader.readAsArrayBuffer(blob);
	                break;
	        }
	    });
	}


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(296));
	var httpclient_1 = __webpack_require__(264);
	exports.HttpClient = httpclient_1.HttpClient;
	var collections_1 = __webpack_require__(256);
	exports.Dictionary = collections_1.Dictionary;
	var util_1 = __webpack_require__(253);
	exports.Util = util_1.Util;
	__export(__webpack_require__(260));


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(271));
	var files_1 = __webpack_require__(282);
	exports.CheckinType = files_1.CheckinType;
	exports.WebPartsPersonalizationScope = files_1.WebPartsPersonalizationScope;
	exports.MoveOperations = files_1.MoveOperations;
	exports.TemplateFileType = files_1.TemplateFileType;
	exports.TextFileParser = files_1.TextFileParser;
	exports.BlobFileParser = files_1.BlobFileParser;
	exports.BufferFileParser = files_1.BufferFileParser;
	var items_1 = __webpack_require__(280);
	exports.PagedItemCollection = items_1.PagedItemCollection;
	var odata_1 = __webpack_require__(267);
	exports.extractOdataId = odata_1.extractOdataId;
	exports.ODataParserBase = odata_1.ODataParserBase;
	exports.ODataDefaultParser = odata_1.ODataDefaultParser;
	exports.ODataRaw = odata_1.ODataRaw;
	exports.ODataValue = odata_1.ODataValue;
	exports.ODataEntity = odata_1.ODataEntity;
	exports.ODataEntityArray = odata_1.ODataEntityArray;
	var roles_1 = __webpack_require__(276);
	exports.RoleDefinitionBindings = roles_1.RoleDefinitionBindings;
	var search_1 = __webpack_require__(262);
	exports.Search = search_1.Search;
	exports.SearchResult = search_1.SearchResult;
	exports.SearchResults = search_1.SearchResults;
	exports.SortDirection = search_1.SortDirection;
	exports.ReorderingRuleMatchType = search_1.ReorderingRuleMatchType;
	exports.QueryPropertyValueType = search_1.QueryPropertyValueType;
	var searchsuggest_1 = __webpack_require__(272);
	exports.SearchSuggest = searchsuggest_1.SearchSuggest;
	exports.SearchSuggestResult = searchsuggest_1.SearchSuggestResult;
	var site_1 = __webpack_require__(273);
	exports.Site = site_1.Site;
	__export(__webpack_require__(286));
	var webs_1 = __webpack_require__(274);
	exports.Web = webs_1.Web;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map