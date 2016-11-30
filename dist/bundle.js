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
	__webpack_require__(48);
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
	                    width: 318,
	                    height: 196,
	                    accentColor: '#ce4b1f'
	                }
	            ],
	        };
	        return React.createElement("div", null, 
	            React.createElement("h1", null, 
	                "Hi from ", 
	                this.props.compiler, 
	                " and ", 
	                this.props.framework, 
	                "!"), 
	            React.createElement("h1", null, 
	                "Fly kusilee fly! :-) ", 
	                React.createElement("i", {className: "ms-Icon ms-Icon--Airplane", "aria-hidden": "true"})), 
	            React.createElement("div", null, 
	                React.createElement(DocumentCard_1.DocumentCard, {onClickHref: 'http://bing.com'}, 
	                    React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)), 
	                    React.createElement(DocumentCard_1.DocumentCardTitle, {title: 'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_it_needs_truncating.pptx', shouldTruncate: true}), 
	                    React.createElement(DocumentCard_1.DocumentCardActivity, {activity: 'Created a few minutes ago', people: [
	                        { name: 'Annie Lindqvist', profileImageSrc: './dist/images/avatar-kat.png' }
	                    ]}))
	            ));
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
			module.hot.accept("!!./../../../css-loader/index.js!./fabric.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./fabric.css");
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
	exports.push([module.id, "/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */\n/**\n * Office UI Fabric Core 5.0.1\n * The front-end framework for building experiences for Office 365.\n **/\n.ms-u-borderBox,\n.ms-u-borderBox::before,\n.ms-u-borderBox::after {\n  box-sizing: border-box;\n}\n\n.ms-u-borderBase {\n  border: 1px solid;\n}\n\n.ms-u-clearfix {\n  *zoom: 1;\n}\n\n.ms-u-clearfix::before,\n.ms-u-clearfix::after {\n  display: table;\n  content: '';\n  line-height: 0;\n}\n\n.ms-u-clearfix::after {\n  clear: both;\n}\n\n.ms-u-normalize {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n}\n\n.ms-u-textAlignLeft {\n  text-align: left;\n}\n\n.ms-u-textAlignCenter {\n  text-align: center;\n}\n\n.ms-u-textAlignRight {\n  text-align: right;\n}\n\n.ms-u-screenReaderOnly {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.ms-u-textTruncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n\n.ms-u-noWrap {\n  white-space: nowrap;\n}\n\n.ms-bgColor-themeDark,\n.ms-bgColor-themeDark--hover:hover {\n  background-color: #005a9e;\n}\n\n.ms-bgColor-themeDarkAlt,\n.ms-bgColor-themeDarkAlt--hover:hover {\n  background-color: #106ebe;\n}\n\n.ms-bgColor-themeDarker,\n.ms-bgColor-themeDarker--hover:hover {\n  background-color: #004578;\n}\n\n.ms-bgColor-themePrimary,\n.ms-bgColor-themePrimary--hover:hover {\n  background-color: #0078d7;\n}\n\n.ms-bgColor-themeSecondary,\n.ms-bgColor-themeSecondary--hover:hover {\n  background-color: #2488d8;\n}\n\n.ms-bgColor-themeTertiary,\n.ms-bgColor-themeTertiary--hover:hover {\n  background-color: #69afe5;\n}\n\n.ms-bgColor-themeLight,\n.ms-bgColor-themeLight--hover:hover {\n  background-color: #b3d6f2;\n}\n\n.ms-bgColor-themeLighter,\n.ms-bgColor-themeLighter--hover:hover {\n  background-color: #deecf9;\n}\n\n.ms-bgColor-themeLighterAlt,\n.ms-bgColor-themeLighterAlt--hover:hover {\n  background-color: #eff6fc;\n}\n\n.ms-bgColor-black,\n.ms-bgColor-black--hover:hover {\n  background-color: #000000;\n}\n\n.ms-bgColor-neutralDark,\n.ms-bgColor-neutralDark--hover:hover {\n  background-color: #212121;\n}\n\n.ms-bgColor-neutralPrimary,\n.ms-bgColor-neutralPrimary--hover:hover {\n  background-color: #333333;\n}\n\n.ms-bgColor-neutralPrimaryAlt,\n.ms-bgColor-neutralPrimaryAlt--hover:hover {\n  background-color: #3c3c3c;\n}\n\n.ms-bgColor-neutralSecondary,\n.ms-bgColor-neutralSecondary--hover:hover {\n  background-color: #666666;\n}\n\n.ms-bgColor-neutralSecondaryAlt,\n.ms-bgColor-neutralSecondaryAlt--hover:hover {\n  background-color: #767676;\n}\n\n.ms-bgColor-neutralTertiary,\n.ms-bgColor-neutralTertiary--hover:hover {\n  background-color: #a6a6a6;\n}\n\n.ms-bgColor-neutralTertiaryAlt,\n.ms-bgColor-neutralTertiaryAlt--hover:hover {\n  background-color: #c8c8c8;\n}\n\n.ms-bgColor-neutralLight,\n.ms-bgColor-neutralLight--hover:hover {\n  background-color: #eaeaea;\n}\n\n.ms-bgColor-neutralLighter,\n.ms-bgColor-neutralLighter--hover:hover {\n  background-color: #f4f4f4;\n}\n\n.ms-bgColor-neutralLighterAlt,\n.ms-bgColor-neutralLighterAlt--hover:hover {\n  background-color: #f8f8f8;\n}\n\n.ms-bgColor-white,\n.ms-bgColor-white--hover:hover {\n  background-color: #ffffff;\n}\n\n.ms-bgColor-yellow {\n  background-color: #ffb900;\n}\n\n.ms-bgColor-yellowLight {\n  background-color: #fff100;\n}\n\n.ms-bgColor-orange {\n  background-color: #d83b01;\n}\n\n.ms-bgColor-orangeLight {\n  background-color: #ea4300;\n}\n\n.ms-bgColor-orangeLighter {\n  background-color: #ff8c00;\n}\n\n.ms-bgColor-redDark {\n  background-color: #a80000;\n}\n\n.ms-bgColor-red {\n  background-color: #e81123;\n}\n\n.ms-bgColor-magentaDark {\n  background-color: #5c005c;\n}\n\n.ms-bgColor-magenta {\n  background-color: #b4009e;\n}\n\n.ms-bgColor-magentaLight {\n  background-color: #e3008c;\n}\n\n.ms-bgColor-purpleDark {\n  background-color: #32145a;\n}\n\n.ms-bgColor-purple {\n  background-color: #5c2d91;\n}\n\n.ms-bgColor-purpleLight {\n  background-color: #b4a0ff;\n}\n\n.ms-bgColor-blueDark {\n  background-color: #002050;\n}\n\n.ms-bgColor-blueMid {\n  background-color: #00188f;\n}\n\n.ms-bgColor-blue {\n  background-color: #0078d7;\n}\n\n.ms-bgColor-blueLight {\n  background-color: #00bcf2;\n}\n\n.ms-bgColor-tealDark {\n  background-color: #004b50;\n}\n\n.ms-bgColor-teal {\n  background-color: #008272;\n}\n\n.ms-bgColor-tealLight {\n  background-color: #00b294;\n}\n\n.ms-bgColor-greenDark {\n  background-color: #004b1c;\n}\n\n.ms-bgColor-green {\n  background-color: #107c10;\n}\n\n.ms-bgColor-greenLight {\n  background-color: #bad80a;\n}\n\n.ms-bgColor-info {\n  background-color: #f4f4f4;\n}\n\n.ms-bgColor-success {\n  background-color: #dff6dd;\n}\n\n.ms-bgColor-severeWarning {\n  background-color: #fed9cc;\n}\n\n.ms-bgColor-warning {\n  background-color: #fff4ce;\n}\n\n.ms-bgColor-error {\n  background-color: #fde7e9;\n}\n\n.ms-borderColor-themeDark,\n.ms-borderColor-themeDark--hover:hover {\n  border-color: #005a9e;\n}\n\n.ms-borderColor-themeDarkAlt,\n.ms-borderColor-themeDarkAlt--hover:hover {\n  border-color: #106ebe;\n}\n\n.ms-borderColor-themeDarker,\n.ms-borderColor-themeDarker--hover:hover {\n  border-color: #004578;\n}\n\n.ms-borderColor-themePrimary,\n.ms-borderColor-themePrimary--hover:hover {\n  border-color: #0078d7;\n}\n\n.ms-borderColor-themeSecondary,\n.ms-borderColor-themeSecondary--hover:hover {\n  border-color: #2488d8;\n}\n\n.ms-borderColor-themeTertiary,\n.ms-borderColor-themeTertiary--hover:hover {\n  border-color: #69afe5;\n}\n\n.ms-borderColor-themeLight,\n.ms-borderColor-themeLight--hover:hover {\n  border-color: #b3d6f2;\n}\n\n.ms-borderColor-themeLighter,\n.ms-borderColor-themeLighter--hover:hover {\n  border-color: #deecf9;\n}\n\n.ms-borderColor-themeLighterAlt,\n.ms-borderColor-themeLighterAlt--hover:hover {\n  border-color: #eff6fc;\n}\n\n.ms-borderColor-black,\n.ms-borderColor-black--hover:hover {\n  border-color: #000000;\n}\n\n.ms-borderColor-neutralDark,\n.ms-borderColor-neutralDark--hover:hover {\n  border-color: #212121;\n}\n\n.ms-borderColor-neutralPrimary,\n.ms-borderColor-neutralPrimary--hover:hover {\n  border-color: #333333;\n}\n\n.ms-borderColor-neutralPrimaryAlt,\n.ms-borderColor-neutralPrimaryAlt--hover:hover {\n  border-color: #3c3c3c;\n}\n\n.ms-borderColor-neutralSecondary,\n.ms-borderColor-neutralSecondary--hover:hover {\n  border-color: #666666;\n}\n\n.ms-borderColor-neutralSecondaryAlt,\n.ms-borderColor-neutralSecondaryAlt--hover:hover {\n  border-color: #767676;\n}\n\n.ms-borderColor-neutralTertiary,\n.ms-borderColor-neutralTertiary--hover:hover {\n  border-color: #a6a6a6;\n}\n\n.ms-borderColor-neutralTertiaryAlt,\n.ms-borderColor-neutralTertiaryAlt--hover:hover {\n  border-color: #c8c8c8;\n}\n\n.ms-borderColor-neutralLight,\n.ms-borderColor-neutralLight--hover:hover {\n  border-color: #eaeaea;\n}\n\n.ms-borderColor-neutralLighter,\n.ms-borderColor-neutralLighter--hover:hover {\n  border-color: #f4f4f4;\n}\n\n.ms-borderColor-neutralLighterAlt,\n.ms-borderColor-neutralLighterAlt--hover:hover {\n  border-color: #f8f8f8;\n}\n\n.ms-borderColor-white,\n.ms-borderColor-white--hover:hover {\n  border-color: #ffffff;\n}\n\n.ms-borderColor-yellow {\n  border-color: #ffb900;\n}\n\n.ms-borderColor-yellowLight {\n  border-color: #fff100;\n}\n\n.ms-borderColor-orange {\n  border-color: #d83b01;\n}\n\n.ms-borderColor-orangeLight {\n  border-color: #ea4300;\n}\n\n.ms-borderColor-orangeLighter {\n  border-color: #ff8c00;\n}\n\n.ms-borderColor-redDark {\n  border-color: #a80000;\n}\n\n.ms-borderColor-red {\n  border-color: #e81123;\n}\n\n.ms-borderColor-magentaDark {\n  border-color: #5c005c;\n}\n\n.ms-borderColor-magenta {\n  border-color: #b4009e;\n}\n\n.ms-borderColor-magentaLight {\n  border-color: #e3008c;\n}\n\n.ms-borderColor-purpleDark {\n  border-color: #32145a;\n}\n\n.ms-borderColor-purple {\n  border-color: #5c2d91;\n}\n\n.ms-borderColor-purpleLight {\n  border-color: #b4a0ff;\n}\n\n.ms-borderColor-blueDark {\n  border-color: #002050;\n}\n\n.ms-borderColor-blueMid {\n  border-color: #00188f;\n}\n\n.ms-borderColor-blue {\n  border-color: #0078d7;\n}\n\n.ms-borderColor-blueLight {\n  border-color: #00bcf2;\n}\n\n.ms-borderColor-tealDark {\n  border-color: #004b50;\n}\n\n.ms-borderColor-teal {\n  border-color: #008272;\n}\n\n.ms-borderColor-tealLight {\n  border-color: #00b294;\n}\n\n.ms-borderColor-greenDark {\n  border-color: #004b1c;\n}\n\n.ms-borderColor-green {\n  border-color: #107c10;\n}\n\n.ms-borderColor-greenLight {\n  border-color: #bad80a;\n}\n\n.ms-borderColorTop-themePrimary,\n.ms-borderColorTop-themePrimary--hover:hover {\n  border-top-color: #0078d7;\n}\n\n.ms-font-su {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 42px;\n  font-weight: 100;\n}\n\n.ms-font-xxl {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 28px;\n  font-weight: 100;\n}\n\n.ms-font-xl {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 21px;\n  font-weight: 100;\n}\n\n.ms-font-l {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 17px;\n  font-weight: 300;\n}\n\n.ms-font-m-plus {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.ms-font-m {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.ms-font-s-plus {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.ms-font-s {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.ms-font-xs {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.ms-font-mi {\n  font-family: 'Segoe UI WestEuropean', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 10px;\n  font-weight: 600;\n}\n\n.ms-fontWeight-light,\n.ms-fontWeight-light--hover:hover {\n  font-weight: 100;\n}\n\n.ms-fontWeight-semilight,\n.ms-fontWeight-semilight--hover:hover {\n  font-weight: 300;\n}\n\n.ms-fontWeight-regular,\n.ms-fontWeight-regular--hover:hover {\n  font-weight: 400;\n}\n\n.ms-fontWeight-semibold,\n.ms-fontWeight-semibold--hover:hover {\n  font-weight: 600;\n}\n\n.ms-fontSize-su {\n  font-size: 42px;\n}\n\n.ms-fontSize-xxl {\n  font-size: 28px;\n}\n\n.ms-fontSize-xl {\n  font-size: 21px;\n}\n\n.ms-fontSize-l {\n  font-size: 17px;\n}\n\n.ms-fontSize-mPlus {\n  font-size: 15px;\n}\n\n.ms-fontSize-m {\n  font-size: 14px;\n}\n\n.ms-fontSize-sPlus {\n  font-size: 13px;\n}\n\n.ms-fontSize-s {\n  font-size: 12px;\n}\n\n.ms-fontSize-xs {\n  font-size: 11px;\n}\n\n.ms-fontSize-mi {\n  font-size: 10px;\n}\n\n.ms-fontColor-themeDarker,\n.ms-fontColor-themeDarker--hover:hover {\n  color: #004578;\n}\n\n.ms-fontColor-themeDark,\n.ms-fontColor-themeDark--hover:hover {\n  color: #005a9e;\n}\n\n.ms-fontColor-themeDarkAlt,\n.ms-fontColor-themeDarkAlt--hover:hover {\n  color: #106ebe;\n}\n\n.ms-fontColor-themePrimary,\n.ms-fontColor-themePrimary--hover:hover {\n  color: #0078d7;\n}\n\n.ms-fontColor-themeSecondary,\n.ms-fontColor-themeSecondary--hover:hover {\n  color: #2488d8;\n}\n\n.ms-fontColor-themeTertiary,\n.ms-fontColor-themeTertiary--hover:hover {\n  color: #69afe5;\n}\n\n.ms-fontColor-themeLight,\n.ms-fontColor-themeLight--hover:hover {\n  color: #b3d6f2;\n}\n\n.ms-fontColor-themeLighter,\n.ms-fontColor-themeLighter--hover:hover {\n  color: #deecf9;\n}\n\n.ms-fontColor-themeLighterAlt,\n.ms-fontColor-themeLighterAlt--hover:hover {\n  color: #eff6fc;\n}\n\n.ms-fontColor-black,\n.ms-fontColor-black--hover:hover {\n  color: #000000;\n}\n\n.ms-fontColor-neutralDark,\n.ms-fontColor-neutralDark--hover:hover {\n  color: #212121;\n}\n\n.ms-fontColor-neutralPrimary,\n.ms-fontColor-neutralPrimary--hover:hover {\n  color: #333333;\n}\n\n.ms-fontColor-neutralPrimaryAlt,\n.ms-fontColor-neutralPrimaryAlt--hover:hover {\n  color: #3c3c3c;\n}\n\n.ms-fontColor-neutralSecondary,\n.ms-fontColor-neutralSecondary--hover:hover {\n  color: #666666;\n}\n\n.ms-fontColor-neutralSecondaryAlt,\n.ms-fontColor-neutralSecondaryAlt--hover:hover {\n  color: #767676;\n}\n\n.ms-fontColor-neutralTertiary,\n.ms-fontColor-neutralTertiary--hover:hover {\n  color: #a6a6a6;\n}\n\n.ms-fontColor-neutralTertiaryAlt,\n.ms-fontColor-neutralTertiaryAlt--hover:hover {\n  color: #c8c8c8;\n}\n\n.ms-fontColor-neutralLight,\n.ms-fontColor-neutralLight--hover:hover {\n  color: #eaeaea;\n}\n\n.ms-fontColor-neutralLighter,\n.ms-fontColor-neutralLighter--hover:hover {\n  color: #f4f4f4;\n}\n\n.ms-fontColor-neutralLighterAlt,\n.ms-fontColor-neutralLighterAlt--hover:hover {\n  color: #f8f8f8;\n}\n\n.ms-fontColor-white,\n.ms-fontColor-white--hover:hover {\n  color: #ffffff;\n}\n\n.ms-fontColor-yellow,\n.ms-fontColor-yellow--hover:hover {\n  color: #ffb900;\n}\n\n.ms-fontColor-yellowLight,\n.ms-fontColor-yellowLight--hover:hover {\n  color: #fff100;\n}\n\n.ms-fontColor-orange,\n.ms-fontColor-orange--hover:hover {\n  color: #d83b01;\n}\n\n.ms-fontColor-orangeLight,\n.ms-fontColor-orangeLight--hover:hover {\n  color: #ea4300;\n}\n\n.ms-fontColor-orangeLighter,\n.ms-fontColor-orangeLighter--hover:hover {\n  color: #ff8c00;\n}\n\n.ms-fontColor-redDark,\n.ms-fontColor-redDark--hover:hover {\n  color: #a80000;\n}\n\n.ms-fontColor-red,\n.ms-fontColor-red--hover:hover {\n  color: #e81123;\n}\n\n.ms-fontColor-magentaDark,\n.ms-fontColor-magentaDark--hover:hover {\n  color: #5c005c;\n}\n\n.ms-fontColor-magenta,\n.ms-fontColor-magenta--hover:hover {\n  color: #b4009e;\n}\n\n.ms-fontColor-magentaLight,\n.ms-fontColor-magentaLight--hover:hover {\n  color: #e3008c;\n}\n\n.ms-fontColor-purpleDark,\n.ms-fontColor-purpleDark--hover:hover {\n  color: #32145a;\n}\n\n.ms-fontColor-purple,\n.ms-fontColor-purple--hover:hover {\n  color: #5c2d91;\n}\n\n.ms-fontColor-purpleLight,\n.ms-fontColor-purpleLight--hover:hover {\n  color: #b4a0ff;\n}\n\n.ms-fontColor-blueDark,\n.ms-fontColor-blueDark--hover:hover {\n  color: #002050;\n}\n\n.ms-fontColor-blueMid,\n.ms-fontColor-blueMid--hover:hover {\n  color: #00188f;\n}\n\n.ms-fontColor-blue,\n.ms-fontColor-blue--hover:hover {\n  color: #0078d7;\n}\n\n.ms-fontColor-blueLight,\n.ms-fontColor-blueLight--hover:hover {\n  color: #00bcf2;\n}\n\n.ms-fontColor-tealDark,\n.ms-fontColor-tealDark--hover:hover {\n  color: #004b50;\n}\n\n.ms-fontColor-teal,\n.ms-fontColor-teal--hover:hover {\n  color: #008272;\n}\n\n.ms-fontColor-tealLight,\n.ms-fontColor-tealLight--hover:hover {\n  color: #00b294;\n}\n\n.ms-fontColor-greenDark,\n.ms-fontColor-greenDark--hover:hover {\n  color: #004b1c;\n}\n\n.ms-fontColor-green,\n.ms-fontColor-green--hover:hover {\n  color: #107c10;\n}\n\n.ms-fontColor-greenLight,\n.ms-fontColor-greenLight--hover:hover {\n  color: #bad80a;\n}\n\n.ms-fontColor-info,\n.ms-fontColor-info--hover:hover {\n  color: #767676;\n}\n\n.ms-fontColor-success,\n.ms-fontColor-success--hover:hover {\n  color: #107c10;\n}\n\n.ms-fontColor-alert,\n.ms-fontColor-alert--hover:hover {\n  color: #d83b01;\n}\n\n.ms-fontColor-warning,\n.ms-fontColor-warning--hover:hover {\n  color: #767676;\n}\n\n.ms-fontColor-severeWarning,\n.ms-fontColor-severeWarning--hover:hover {\n  color: #d83b01;\n}\n\n.ms-fontColor-error,\n.ms-fontColor-error--hover:hover {\n  color: #a80000;\n}\n\n/*\n  Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license\n*/\n@font-face {\n  font-family: 'Segoe UI WestEuropean';\n  src: local('Segoe UI Light'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-light.woff2') format('woff2'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-light.woff') format('woff'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-light.ttf') format('truetype');\n  font-weight: 100;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Segoe UI WestEuropean';\n  src: local('Segoe UI'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-regular.woff2') format('woff2'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-regular.woff') format('woff'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Segoe UI WestEuropean';\n  src: local('Segoe UI Semibold'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-semibold.woff2') format('woff2'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-semibold.woff') format('woff'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-semibold.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Segoe UI WestEuropean';\n  src: local('Segoe UI Semilight'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-semilight.woff2') format('woff2'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-semilight.woff') format('woff'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/fonts//segoeui-westeuropean/segoeui-semilight.ttf') format('truetype');\n  font-weight: 200;\n  font-style: normal;\n}\n\n/*\n  Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license\n*/\n/*\n  Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license\n*/\n@font-face {\n  font-family: 'FabricMDL2Icons';\n  src: url('https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.woff') format('woff'), url('https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.ms-Icon {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-family: 'FabricMDL2Icons';\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n}\n\n.ms-Icon--circle {\n  position: relative;\n  display: inline-block;\n  font-size: 1rem;\n  width: 1em;\n  height: 1em;\n  margin: 0 0.5em 0 0;\n  padding: 0;\n  text-align: left;\n  -webkit-font-smoothing: antialiased;\n}\n\n.ms-Icon--circle::before,\n.ms-Icon--circle::after {\n  line-height: 1;\n  font-size: inherit;\n}\n\n.ms-Icon--circle::before {\n  display: block;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: top;\n  position: absolute;\n}\n\n.ms-Icon--circle::after {\n  content: '\\E000';\n  position: absolute;\n  top: 0;\n  left: 0;\n  -ms-transform: scale(2);\n      transform: scale(2);\n  -ms-transform-origin: 50% 50%;\n      transform-origin: 50% 50%;\n  z-index: 0;\n}\n\n.ms-Icon--xs {\n  font-size: 10px;\n}\n\n.ms-Icon--s {\n  font-size: 12px;\n}\n\n.ms-Icon--m {\n  font-size: 16px;\n}\n\n.ms-Icon--l {\n  font-size: 20px;\n}\n\n.ms-Icon--DecreaseIndentLegacy::before {\n  content: '\\E290';\n}\n\n.ms-Icon--IncreaseIndentLegacy::before {\n  content: '\\E291';\n}\n\n.ms-Icon--GlobalNavButton::before {\n  content: '\\E700';\n}\n\n.ms-Icon--InternetSharing::before {\n  content: '\\E704';\n}\n\n.ms-Icon--Brightness::before {\n  content: '\\E706';\n}\n\n.ms-Icon--MapPin::before {\n  content: '\\E707';\n}\n\n.ms-Icon--Airplane::before {\n  content: '\\E709';\n}\n\n.ms-Icon--Tablet::before {\n  content: '\\E70A';\n}\n\n.ms-Icon--QuickNote::before {\n  content: '\\E70B';\n}\n\n.ms-Icon--ChevronDown::before {\n  content: '\\E70D';\n}\n\n.ms-Icon--ChevronUp::before {\n  content: '\\E70E';\n}\n\n.ms-Icon--Edit::before {\n  content: '\\E70F';\n}\n\n.ms-Icon--Add::before {\n  content: '\\E710';\n}\n\n.ms-Icon--Cancel::before {\n  content: '\\E711';\n}\n\n.ms-Icon--More::before {\n  content: '\\E712';\n}\n\n.ms-Icon--Settings::before {\n  content: '\\E713';\n}\n\n.ms-Icon--Video::before {\n  content: '\\E714';\n}\n\n.ms-Icon--Mail::before {\n  content: '\\E715';\n}\n\n.ms-Icon--People::before {\n  content: '\\E716';\n}\n\n.ms-Icon--Phone::before {\n  content: '\\E717';\n}\n\n.ms-Icon--Pin::before {\n  content: '\\E718';\n}\n\n.ms-Icon--Shop::before {\n  content: '\\E719';\n}\n\n.ms-Icon--Link::before {\n  content: '\\E71B';\n}\n\n.ms-Icon--Filter::before {\n  content: '\\E71C';\n}\n\n.ms-Icon--Zoom::before {\n  content: '\\E71E';\n}\n\n.ms-Icon--ZoomOut::before {\n  content: '\\E71F';\n}\n\n.ms-Icon--Microphone::before {\n  content: '\\E720';\n}\n\n.ms-Icon--Search::before {\n  content: '\\E721';\n}\n\n.ms-Icon--Camera::before {\n  content: '\\E722';\n}\n\n.ms-Icon--Attach::before {\n  content: '\\E723';\n}\n\n.ms-Icon--Send::before {\n  content: '\\E724';\n}\n\n.ms-Icon--FavoriteList::before {\n  content: '\\E728';\n}\n\n.ms-Icon--PageSolid::before {\n  content: '\\E729';\n}\n\n.ms-Icon--Forward::before {\n  content: '\\E72A';\n}\n\n.ms-Icon--Back::before {\n  content: '\\E72B';\n}\n\n.ms-Icon--Refresh::before {\n  content: '\\E72C';\n}\n\n.ms-Icon--Share::before {\n  content: '\\E72D';\n}\n\n.ms-Icon--Lock::before {\n  content: '\\E72E';\n}\n\n.ms-Icon--EMI::before {\n  content: '\\E731';\n}\n\n.ms-Icon--MiniLink::before {\n  content: '\\E732';\n}\n\n.ms-Icon--Blocked::before {\n  content: '\\E733';\n}\n\n.ms-Icon--FavoriteStar::before {\n  content: '\\E734';\n}\n\n.ms-Icon--FavoriteStarFill::before {\n  content: '\\E735';\n}\n\n.ms-Icon--ReadingMode::before {\n  content: '\\E736';\n}\n\n.ms-Icon--Remove::before {\n  content: '\\E738';\n}\n\n.ms-Icon--Checkbox::before {\n  content: '\\E739';\n}\n\n.ms-Icon--CheckboxComposite::before {\n  content: '\\E73A';\n}\n\n.ms-Icon--CheckboxIndeterminate::before {\n  content: '\\E73C';\n}\n\n.ms-Icon--CheckMark::before {\n  content: '\\E73E';\n}\n\n.ms-Icon--BackToWindow::before {\n  content: '\\E73F';\n}\n\n.ms-Icon--FullScreen::before {\n  content: '\\E740';\n}\n\n.ms-Icon--Print::before {\n  content: '\\E749';\n}\n\n.ms-Icon--Up::before {\n  content: '\\E74A';\n}\n\n.ms-Icon--Down::before {\n  content: '\\E74B';\n}\n\n.ms-Icon--Delete::before {\n  content: '\\E74D';\n}\n\n.ms-Icon--Save::before {\n  content: '\\E74E';\n}\n\n.ms-Icon--Sad::before {\n  content: '\\E757';\n}\n\n.ms-Icon--SIPMove::before {\n  content: '\\E759';\n}\n\n.ms-Icon--EraseTool::before {\n  content: '\\E75C';\n}\n\n.ms-Icon--GripperTool::before {\n  content: '\\E75E';\n}\n\n.ms-Icon--Dialpad::before {\n  content: '\\E75F';\n}\n\n.ms-Icon--PageLeft::before {\n  content: '\\E760';\n}\n\n.ms-Icon--PageRight::before {\n  content: '\\E761';\n}\n\n.ms-Icon--MultiSelect::before {\n  content: '\\E762';\n}\n\n.ms-Icon--Play::before {\n  content: '\\E768';\n}\n\n.ms-Icon--Pause::before {\n  content: '\\E769';\n}\n\n.ms-Icon--ChevronLeft::before {\n  content: '\\E76B';\n}\n\n.ms-Icon--ChevronRight::before {\n  content: '\\E76C';\n}\n\n.ms-Icon--Emoji2::before {\n  content: '\\E76E';\n}\n\n.ms-Icon--System::before {\n  content: '\\E770';\n}\n\n.ms-Icon--Globe::before {\n  content: '\\E774';\n}\n\n.ms-Icon--ContactInfo::before {\n  content: '\\E779';\n}\n\n.ms-Icon--Unpin::before {\n  content: '\\E77A';\n}\n\n.ms-Icon--Contact::before {\n  content: '\\E77B';\n}\n\n.ms-Icon--Memo::before {\n  content: '\\E77C';\n}\n\n.ms-Icon--WindowsLogo::before {\n  content: '\\E782';\n}\n\n.ms-Icon--Error::before {\n  content: '\\E783';\n}\n\n.ms-Icon--Unlock::before {\n  content: '\\E785';\n}\n\n.ms-Icon--Calendar::before {\n  content: '\\E787';\n}\n\n.ms-Icon--Megaphone::before {\n  content: '\\E789';\n}\n\n.ms-Icon--AutoEnhanceOn::before {\n  content: '\\E78D';\n}\n\n.ms-Icon--AutoEnhanceOff::before {\n  content: '\\E78E';\n}\n\n.ms-Icon--Color::before {\n  content: '\\E790';\n}\n\n.ms-Icon--SaveAs::before {\n  content: '\\E792';\n}\n\n.ms-Icon--Light::before {\n  content: '\\E793';\n}\n\n.ms-Icon--Filters::before {\n  content: '\\E795';\n}\n\n.ms-Icon--Contrast::before {\n  content: '\\E7A1';\n}\n\n.ms-Icon--Redo::before {\n  content: '\\E7A6';\n}\n\n.ms-Icon--Undo::before {\n  content: '\\E7A7';\n}\n\n.ms-Icon--PhotoCollection::before {\n  content: '\\E7AA';\n}\n\n.ms-Icon--Album::before {\n  content: '\\E7AB';\n}\n\n.ms-Icon--Rotate::before {\n  content: '\\E7AD';\n}\n\n.ms-Icon--PanoIndicator::before {\n  content: '\\E7B0';\n}\n\n.ms-Icon--ThumbnailView::before {\n  content: '\\E7B6';\n}\n\n.ms-Icon--Package::before {\n  content: '\\E7B8';\n}\n\n.ms-Icon--Warning::before {\n  content: '\\E7BA';\n}\n\n.ms-Icon--Financial::before {\n  content: '\\E7BB';\n}\n\n.ms-Icon--ShoppingCart::before {\n  content: '\\E7BF';\n}\n\n.ms-Icon--Train::before {\n  content: '\\E7C0';\n}\n\n.ms-Icon--Flag::before {\n  content: '\\E7C1';\n}\n\n.ms-Icon--Move::before {\n  content: '\\E7C2';\n}\n\n.ms-Icon--Page::before {\n  content: '\\E7C3';\n}\n\n.ms-Icon--TouchPointer::before {\n  content: '\\E7C9';\n}\n\n.ms-Icon--Merge::before {\n  content: '\\E7D5';\n}\n\n.ms-Icon--TurnRight::before {\n  content: '\\E7DB';\n}\n\n.ms-Icon--Ferry::before {\n  content: '\\E7E3';\n}\n\n.ms-Icon--Tab::before {\n  content: '\\E7E9';\n}\n\n.ms-Icon--Admin::before {\n  content: '\\E7EF';\n}\n\n.ms-Icon--TVMonitor::before {\n  content: '\\E7F4';\n}\n\n.ms-Icon--Speakers::before {\n  content: '\\E7F5';\n}\n\n.ms-Icon--Nav2DMapView::before {\n  content: '\\E800';\n}\n\n.ms-Icon--Car::before {\n  content: '\\E804';\n}\n\n.ms-Icon--EatDrink::before {\n  content: '\\E807';\n}\n\n.ms-Icon--LocationCircle::before {\n  content: '\\E80E';\n}\n\n.ms-Icon--Home::before {\n  content: '\\E80F';\n}\n\n.ms-Icon--SwitcherStartEnd::before {\n  content: '\\E810';\n}\n\n.ms-Icon--IncidentTriangle::before {\n  content: '\\E814';\n}\n\n.ms-Icon--Touch::before {\n  content: '\\E815';\n}\n\n.ms-Icon--MapDirections::before {\n  content: '\\E816';\n}\n\n.ms-Icon--History::before {\n  content: '\\E81C';\n}\n\n.ms-Icon--Location::before {\n  content: '\\E81D';\n}\n\n.ms-Icon--Work::before {\n  content: '\\E821';\n}\n\n.ms-Icon--Recent::before {\n  content: '\\E823';\n}\n\n.ms-Icon--Hotel::before {\n  content: '\\E824';\n}\n\n.ms-Icon--LocationDot::before {\n  content: '\\E827';\n}\n\n.ms-Icon--News::before {\n  content: '\\E900';\n}\n\n.ms-Icon--Chat::before {\n  content: '\\E901';\n}\n\n.ms-Icon--Group::before {\n  content: '\\E902';\n}\n\n.ms-Icon--View::before {\n  content: '\\E890';\n}\n\n.ms-Icon--Clear::before {\n  content: '\\E894';\n}\n\n.ms-Icon--Sync::before {\n  content: '\\E895';\n}\n\n.ms-Icon--Download::before {\n  content: '\\E896';\n}\n\n.ms-Icon--Help::before {\n  content: '\\E897';\n}\n\n.ms-Icon--Upload::before {\n  content: '\\E898';\n}\n\n.ms-Icon--Emoji::before {\n  content: '\\E899';\n}\n\n.ms-Icon--MailForward::before {\n  content: '\\E89C';\n}\n\n.ms-Icon--ClosePane::before {\n  content: '\\E89F';\n}\n\n.ms-Icon--OpenPane::before {\n  content: '\\E8A0';\n}\n\n.ms-Icon--PreviewLink::before {\n  content: '\\E8A1';\n}\n\n.ms-Icon--ZoomIn::before {\n  content: '\\E8A3';\n}\n\n.ms-Icon--Bookmarks::before {\n  content: '\\E8A4';\n}\n\n.ms-Icon--Document::before {\n  content: '\\E8A5';\n}\n\n.ms-Icon--ProtectedDocument::before {\n  content: '\\E8A6';\n}\n\n.ms-Icon--OpenInNewWindow::before {\n  content: '\\E8A7';\n}\n\n.ms-Icon--MailFill::before {\n  content: '\\E8A8';\n}\n\n.ms-Icon--ViewAll::before {\n  content: '\\E8A9';\n}\n\n.ms-Icon--Switch::before {\n  content: '\\E8AB';\n}\n\n.ms-Icon--Rename::before {\n  content: '\\E8AC';\n}\n\n.ms-Icon--Folder::before {\n  content: '\\E8B7';\n}\n\n.ms-Icon--Picture::before {\n  content: '\\E8B9';\n}\n\n.ms-Icon--ShowResults::before {\n  content: '\\E8BC';\n}\n\n.ms-Icon--Message::before {\n  content: '\\E8BD';\n}\n\n.ms-Icon--CalendarDay::before {\n  content: '\\E8BF';\n}\n\n.ms-Icon--CalendarWeek::before {\n  content: '\\E8C0';\n}\n\n.ms-Icon--MailReplyAll::before {\n  content: '\\E8C2';\n}\n\n.ms-Icon--Read::before {\n  content: '\\E8C3';\n}\n\n.ms-Icon--PaymentCard::before {\n  content: '\\E8C7';\n}\n\n.ms-Icon--Copy::before {\n  content: '\\E8C8';\n}\n\n.ms-Icon--Important::before {\n  content: '\\E8C9';\n}\n\n.ms-Icon--MailReply::before {\n  content: '\\E8CA';\n}\n\n.ms-Icon--Sort::before {\n  content: '\\E8CB';\n}\n\n.ms-Icon--GotoToday::before {\n  content: '\\E8D1';\n}\n\n.ms-Icon--Font::before {\n  content: '\\E8D2';\n}\n\n.ms-Icon--FontColor::before {\n  content: '\\E8D3';\n}\n\n.ms-Icon--FolderFill::before {\n  content: '\\E8D5';\n}\n\n.ms-Icon--Permissions::before {\n  content: '\\E8D7';\n}\n\n.ms-Icon--DisableUpdates::before {\n  content: '\\E8D8';\n}\n\n.ms-Icon--Unfavorite::before {\n  content: '\\E8D9';\n}\n\n.ms-Icon--Italic::before {\n  content: '\\E8DB';\n}\n\n.ms-Icon--Underline::before {\n  content: '\\E8DC';\n}\n\n.ms-Icon--Bold::before {\n  content: '\\E8DD';\n}\n\n.ms-Icon--MoveToFolder::before {\n  content: '\\E8DE';\n}\n\n.ms-Icon--Dislike::before {\n  content: '\\E8E0';\n}\n\n.ms-Icon--Like::before {\n  content: '\\E8E1';\n}\n\n.ms-Icon--AlignRight::before {\n  content: '\\E8E2';\n}\n\n.ms-Icon--AlignCenter::before {\n  content: '\\E8E3';\n}\n\n.ms-Icon--AlignLeft::before {\n  content: '\\E8E4';\n}\n\n.ms-Icon--OpenFile::before {\n  content: '\\E8E5';\n}\n\n.ms-Icon--FontDecrease::before {\n  content: '\\E8E7';\n}\n\n.ms-Icon--FontIncrease::before {\n  content: '\\E8E8';\n}\n\n.ms-Icon--FontSize::before {\n  content: '\\E8E9';\n}\n\n.ms-Icon--CellPhone::before {\n  content: '\\E8EA';\n}\n\n.ms-Icon--Tag::before {\n  content: '\\E8EC';\n}\n\n.ms-Icon--Library::before {\n  content: '\\E8F1';\n}\n\n.ms-Icon--PostUpdate::before {\n  content: '\\E8F3';\n}\n\n.ms-Icon--NewFolder::before {\n  content: '\\E8F4';\n}\n\n.ms-Icon--CalendarReply::before {\n  content: '\\E8F5';\n}\n\n.ms-Icon--UnsyncFolder::before {\n  content: '\\E8F6';\n}\n\n.ms-Icon--SyncFolder::before {\n  content: '\\E8F7';\n}\n\n.ms-Icon--BlockContact::before {\n  content: '\\E8F8';\n}\n\n.ms-Icon--AddFriend::before {\n  content: '\\E8FA';\n}\n\n.ms-Icon--BulletedList::before {\n  content: '\\E8FD';\n}\n\n.ms-Icon--Preview::before {\n  content: '\\E8FF';\n}\n\n.ms-Icon--DockLeft::before {\n  content: '\\E90C';\n}\n\n.ms-Icon--DockRight::before {\n  content: '\\E90D';\n}\n\n.ms-Icon--Repair::before {\n  content: '\\E90F';\n}\n\n.ms-Icon--Accounts::before {\n  content: '\\E910';\n}\n\n.ms-Icon--RadioBullet::before {\n  content: '\\E915';\n}\n\n.ms-Icon--Stopwatch::before {\n  content: '\\E916';\n}\n\n.ms-Icon--Clock::before {\n  content: '\\E917';\n}\n\n.ms-Icon--WorldClock::before {\n  content: '\\E918';\n}\n\n.ms-Icon--AlarmClock::before {\n  content: '\\E919';\n}\n\n.ms-Icon--Hospital::before {\n  content: '\\E91D';\n}\n\n.ms-Icon--Timer::before {\n  content: '\\E91E';\n}\n\n.ms-Icon--FullCircleMask::before {\n  content: '\\E91F';\n}\n\n.ms-Icon--LocationFill::before {\n  content: '\\E920';\n}\n\n.ms-Icon--ChromeMinimize::before {\n  content: '\\E921';\n}\n\n.ms-Icon--Annotation::before {\n  content: '\\E924';\n}\n\n.ms-Icon--ChromeClose::before {\n  content: '\\E8BB';\n}\n\n.ms-Icon--Accept::before {\n  content: '\\E8FB';\n}\n\n.ms-Icon--Fingerprint::before {\n  content: '\\E928';\n}\n\n.ms-Icon--Handwriting::before {\n  content: '\\E929';\n}\n\n.ms-Icon--StackIndicator::before {\n  content: '\\E7FF';\n}\n\n.ms-Icon--Completed::before {\n  content: '\\E930';\n}\n\n.ms-Icon--Label::before {\n  content: '\\E932';\n}\n\n.ms-Icon--FlickDown::before {\n  content: '\\E935';\n}\n\n.ms-Icon--FlickUp::before {\n  content: '\\E936';\n}\n\n.ms-Icon--FlickLeft::before {\n  content: '\\E937';\n}\n\n.ms-Icon--FlickRight::before {\n  content: '\\E938';\n}\n\n.ms-Icon--MusicInCollection::before {\n  content: '\\E940';\n}\n\n.ms-Icon--OneDrive::before {\n  content: '\\E941';\n}\n\n.ms-Icon--CompassNW::before {\n  content: '\\E942';\n}\n\n.ms-Icon--Code::before {\n  content: '\\E943';\n}\n\n.ms-Icon--LightningBolt::before {\n  content: '\\E945';\n}\n\n.ms-Icon--Info::before {\n  content: '\\E946';\n}\n\n.ms-Icon--CalculatorAddition::before {\n  content: '\\E948';\n}\n\n.ms-Icon--CalculatorSubtract::before {\n  content: '\\E949';\n}\n\n.ms-Icon--PrintfaxPrinterFile::before {\n  content: '\\E956';\n}\n\n.ms-Icon--Health::before {\n  content: '\\E95E';\n}\n\n.ms-Icon--ChevronUpSmall::before {\n  content: '\\E96D';\n}\n\n.ms-Icon--ChevronDownSmall::before {\n  content: '\\E96E';\n}\n\n.ms-Icon--ChevronLeftSmall::before {\n  content: '\\E96F';\n}\n\n.ms-Icon--ChevronRightSmall::before {\n  content: '\\E970';\n}\n\n.ms-Icon--ChevronUpMed::before {\n  content: '\\E971';\n}\n\n.ms-Icon--ChevronDownMed::before {\n  content: '\\E972';\n}\n\n.ms-Icon--ChevronLeftMed::before {\n  content: '\\E973';\n}\n\n.ms-Icon--ChevronRightMed::before {\n  content: '\\E974';\n}\n\n.ms-Icon--Dictionary::before {\n  content: '\\E82D';\n}\n\n.ms-Icon--ChromeBack::before {\n  content: '\\E830';\n}\n\n.ms-Icon--PC1::before {\n  content: '\\E977';\n}\n\n.ms-Icon--PresenceChickletVideo::before {\n  content: '\\E979';\n}\n\n.ms-Icon--Reply::before {\n  content: '\\E97A';\n}\n\n.ms-Icon--DoubleChevronLeftMed::before {\n  content: '\\E991';\n}\n\n.ms-Icon--Volume0::before {\n  content: '\\E992';\n}\n\n.ms-Icon--Volume1::before {\n  content: '\\E993';\n}\n\n.ms-Icon--Volume2::before {\n  content: '\\E994';\n}\n\n.ms-Icon--Volume3::before {\n  content: '\\E995';\n}\n\n.ms-Icon--CaretHollow::before {\n  content: '\\E817';\n}\n\n.ms-Icon--CaretSolid::before {\n  content: '\\E818';\n}\n\n.ms-Icon--FolderOpen::before {\n  content: '\\E838';\n}\n\n.ms-Icon--Pinned::before {\n  content: '\\E840';\n}\n\n.ms-Icon--PinnedFill::before {\n  content: '\\E842';\n}\n\n.ms-Icon--Chart::before {\n  content: '\\E999';\n}\n\n.ms-Icon--BidiLtr::before {\n  content: '\\E9AA';\n}\n\n.ms-Icon--BidiRtl::before {\n  content: '\\E9AB';\n}\n\n.ms-Icon--RevToggleKey::before {\n  content: '\\E845';\n}\n\n.ms-Icon--RightDoubleQuote::before {\n  content: '\\E9B1';\n}\n\n.ms-Icon--Sunny::before {\n  content: '\\E9BD';\n}\n\n.ms-Icon--CloudWeather::before {\n  content: '\\E9BE';\n}\n\n.ms-Icon--Cloudy::before {\n  content: '\\E9BF';\n}\n\n.ms-Icon--PartlyCloudyDay::before {\n  content: '\\E9C0';\n}\n\n.ms-Icon--PartlyCloudyNight::before {\n  content: '\\E9C1';\n}\n\n.ms-Icon--ClearNight::before {\n  content: '\\E9C2';\n}\n\n.ms-Icon--RainShowersDay::before {\n  content: '\\E9C3';\n}\n\n.ms-Icon--Rain::before {\n  content: '\\E9C4';\n}\n\n.ms-Icon--Thunderstorms::before {\n  content: '\\E9C6';\n}\n\n.ms-Icon--RainSnow::before {\n  content: '\\E9C7';\n}\n\n.ms-Icon--Snow::before {\n  content: '\\EB46';\n}\n\n.ms-Icon--BlowingSnow::before {\n  content: '\\E9C9';\n}\n\n.ms-Icon--Frigid::before {\n  content: '\\E9CA';\n}\n\n.ms-Icon--Fog::before {\n  content: '\\E9CB';\n}\n\n.ms-Icon--Squalls::before {\n  content: '\\E9CC';\n}\n\n.ms-Icon--Duststorm::before {\n  content: '\\E9CD';\n}\n\n.ms-Icon--Precipitation::before {\n  content: '\\E9CF';\n}\n\n.ms-Icon--Ringer::before {\n  content: '\\EA8F';\n}\n\n.ms-Icon--PDF::before {\n  content: '\\EA90';\n}\n\n.ms-Icon--SortLines::before {\n  content: '\\E9D0';\n}\n\n.ms-Icon--Ribbon::before {\n  content: '\\E9D1';\n}\n\n.ms-Icon--CheckList::before {\n  content: '\\E9D5';\n}\n\n.ms-Icon--Generate::before {\n  content: '\\E9DA';\n}\n\n.ms-Icon--Equalizer::before {\n  content: '\\E9E9';\n}\n\n.ms-Icon--BarChartHorizontal::before {\n  content: '\\E9EB';\n}\n\n.ms-Icon--Freezing::before {\n  content: '\\E9EF';\n}\n\n.ms-Icon--SnowShowerDay::before {\n  content: '\\E9FD';\n}\n\n.ms-Icon--HailDay::before {\n  content: '\\EA00';\n}\n\n.ms-Icon--WorkFlow::before {\n  content: '\\EA01';\n}\n\n.ms-Icon--StoreLogoMed::before {\n  content: '\\EA04';\n}\n\n.ms-Icon--RainShowersNight::before {\n  content: '\\EA0F';\n}\n\n.ms-Icon--SnowShowerNight::before {\n  content: '\\EA11';\n}\n\n.ms-Icon--HailNight::before {\n  content: '\\EA13';\n}\n\n.ms-Icon--Info2::before {\n  content: '\\EA1F';\n}\n\n.ms-Icon--StoreLogo::before {\n  content: '\\EA96';\n}\n\n.ms-Icon--MultiSelectMirrored::before {\n  content: '\\EA98';\n}\n\n.ms-Icon--Broom::before {\n  content: '\\EA99';\n}\n\n.ms-Icon--MusicInCollectionFill::before {\n  content: '\\EA36';\n}\n\n.ms-Icon--List::before {\n  content: '\\EA37';\n}\n\n.ms-Icon--Asterisk::before {\n  content: '\\EA38';\n}\n\n.ms-Icon--ErrorBadge::before {\n  content: '\\EA39';\n}\n\n.ms-Icon--CircleRing::before {\n  content: '\\EA3A';\n}\n\n.ms-Icon--CircleFill::before {\n  content: '\\EA3B';\n}\n\n.ms-Icon--BookmarksMirrored::before {\n  content: '\\EA41';\n}\n\n.ms-Icon--BulletedListMirrored::before {\n  content: '\\EA42';\n}\n\n.ms-Icon--CaretHollowMirrored::before {\n  content: '\\EA45';\n}\n\n.ms-Icon--CaretSolidMirrored::before {\n  content: '\\EA46';\n}\n\n.ms-Icon--ChromeBackMirrored::before {\n  content: '\\EA47';\n}\n\n.ms-Icon--ClosePaneMirrored::before {\n  content: '\\EA49';\n}\n\n.ms-Icon--DockLeftMirrored::before {\n  content: '\\EA4C';\n}\n\n.ms-Icon--DoubleChevronLeftMedMirrored::before {\n  content: '\\EA4D';\n}\n\n.ms-Icon--HelpMirrored::before {\n  content: '\\EA51';\n}\n\n.ms-Icon--ListMirrored::before {\n  content: '\\EA55';\n}\n\n.ms-Icon--MailForwardMirrored::before {\n  content: '\\EA56';\n}\n\n.ms-Icon--MailReplyMirrored::before {\n  content: '\\EA57';\n}\n\n.ms-Icon--MailReplyAllMirrored::before {\n  content: '\\EA58';\n}\n\n.ms-Icon--OpenPaneMirrored::before {\n  content: '\\EA5B';\n}\n\n.ms-Icon--SendMirrored::before {\n  content: '\\EA63';\n}\n\n.ms-Icon--ShowResultsMirrored::before {\n  content: '\\EA65';\n}\n\n.ms-Icon--ThumbnailViewMirrored::before {\n  content: '\\EA67';\n}\n\n.ms-Icon--Lightbulb::before {\n  content: '\\EA80';\n}\n\n.ms-Icon--StatusTriangle::before {\n  content: '\\EA82';\n}\n\n.ms-Icon--VolumeDisabled::before {\n  content: '\\EA85';\n}\n\n.ms-Icon--Puzzle::before {\n  content: '\\EA86';\n}\n\n.ms-Icon--EmojiNeutral::before {\n  content: '\\EA87';\n}\n\n.ms-Icon--EmojiDisappointed::before {\n  content: '\\EA88';\n}\n\n.ms-Icon--HomeSolid::before {\n  content: '\\EA8A';\n}\n\n.ms-Icon--Cocktails::before {\n  content: '\\EA9D';\n}\n\n.ms-Icon--Articles::before {\n  content: '\\EAC1';\n}\n\n.ms-Icon--Cycling::before {\n  content: '\\EAC7';\n}\n\n.ms-Icon--DietPlanNotebook::before {\n  content: '\\EAC8';\n}\n\n.ms-Icon--Pill::before {\n  content: '\\EACB';\n}\n\n.ms-Icon--Running::before {\n  content: '\\EADA';\n}\n\n.ms-Icon--Weights::before {\n  content: '\\EADB';\n}\n\n.ms-Icon--BarChart4::before {\n  content: '\\EAE7';\n}\n\n.ms-Icon--CirclePlus::before {\n  content: '\\EAEE';\n}\n\n.ms-Icon--Coffee::before {\n  content: '\\EAEF';\n}\n\n.ms-Icon--Cotton::before {\n  content: '\\EAF3';\n}\n\n.ms-Icon--Market::before {\n  content: '\\EAFC';\n}\n\n.ms-Icon--Money::before {\n  content: '\\EAFD';\n}\n\n.ms-Icon--PieDouble::before {\n  content: '\\EB04';\n}\n\n.ms-Icon--RemoveFilter::before {\n  content: '\\EB08';\n}\n\n.ms-Icon--StockDown::before {\n  content: '\\EB0F';\n}\n\n.ms-Icon--StockUp::before {\n  content: '\\EB11';\n}\n\n.ms-Icon--Cricket::before {\n  content: '\\EB1E';\n}\n\n.ms-Icon--Golf::before {\n  content: '\\EB1F';\n}\n\n.ms-Icon--Baseball::before {\n  content: '\\EB20';\n}\n\n.ms-Icon--Soccer::before {\n  content: '\\EB21';\n}\n\n.ms-Icon--MoreSports::before {\n  content: '\\EB22';\n}\n\n.ms-Icon--AutoRacing::before {\n  content: '\\EB24';\n}\n\n.ms-Icon--CollegeHoops::before {\n  content: '\\EB25';\n}\n\n.ms-Icon--CollegeFootball::before {\n  content: '\\EB26';\n}\n\n.ms-Icon--ProFootball::before {\n  content: '\\EB27';\n}\n\n.ms-Icon--ProHockey::before {\n  content: '\\EB28';\n}\n\n.ms-Icon--Rugby::before {\n  content: '\\EB2D';\n}\n\n.ms-Icon--Tennis::before {\n  content: '\\EB33';\n}\n\n.ms-Icon--Arrivals::before {\n  content: '\\EB34';\n}\n\n.ms-Icon--Design::before {\n  content: '\\EB3C';\n}\n\n.ms-Icon--Website::before {\n  content: '\\EB41';\n}\n\n.ms-Icon--Drop::before {\n  content: '\\EB42';\n}\n\n.ms-Icon--Snow::before {\n  content: '\\EB46';\n}\n\n.ms-Icon--BusSolid::before {\n  content: '\\EB47';\n}\n\n.ms-Icon--FerrySolid::before {\n  content: '\\EB48';\n}\n\n.ms-Icon--TrainSolid::before {\n  content: '\\EB4D';\n}\n\n.ms-Icon--Heart::before {\n  content: '\\EB51';\n}\n\n.ms-Icon--HeartFill::before {\n  content: '\\EB52';\n}\n\n.ms-Icon--Ticket::before {\n  content: '\\EB54';\n}\n\n.ms-Icon--AzureLogo::before {\n  content: '\\EB6A';\n}\n\n.ms-Icon--BingLogo::before {\n  content: '\\EB6B';\n}\n\n.ms-Icon--MSNLogo::before {\n  content: '\\EB6C';\n}\n\n.ms-Icon--OutlookLogo::before {\n  content: '\\EB6D';\n}\n\n.ms-Icon--OfficeLogo::before {\n  content: '\\EB6E';\n}\n\n.ms-Icon--SkypeLogo::before {\n  content: '\\EB6F';\n}\n\n.ms-Icon--Door::before {\n  content: '\\EB75';\n}\n\n.ms-Icon--EditMirrored::before {\n  content: '\\EB7E';\n}\n\n.ms-Icon--GiftCard::before {\n  content: '\\EB8E';\n}\n\n.ms-Icon--DoubleBookmark::before {\n  content: '\\EB8F';\n}\n\n.ms-Icon--StatusErrorFull::before {\n  content: '\\EB90';\n}\n\n.ms-Icon--Certificate::before {\n  content: '\\EB95';\n}\n\n.ms-Icon--Photo2::before {\n  content: '\\EB9F';\n}\n\n.ms-Icon--CloudDownload::before {\n  content: '\\EBD3';\n}\n\n.ms-Icon--WindDirection::before {\n  content: '\\EBE6';\n}\n\n.ms-Icon--Family::before {\n  content: '\\EBDA';\n}\n\n.ms-Icon--CSS::before {\n  content: '\\EBEF';\n}\n\n.ms-Icon--JS::before {\n  content: '\\EBF0';\n}\n\n.ms-Icon--ReminderGroup::before {\n  content: '\\EBF8';\n}\n\n.ms-Icon--Section::before {\n  content: '\\EC0C';\n}\n\n.ms-Icon--OneNoteLogo::before {\n  content: '\\EC0D';\n}\n\n.ms-Icon--ToggleFilled::before {\n  content: '\\EC11';\n}\n\n.ms-Icon--ToggleBorder::before {\n  content: '\\EC12';\n}\n\n.ms-Icon--SliderThumb::before {\n  content: '\\EC13';\n}\n\n.ms-Icon--ToggleThumb::before {\n  content: '\\EC14';\n}\n\n.ms-Icon--Documentation::before {\n  content: '\\EC17';\n}\n\n.ms-Icon--Badge::before {\n  content: '\\EC1B';\n}\n\n.ms-Icon--Giftbox::before {\n  content: '\\EC1F';\n}\n\n.ms-Icon--ExcelLogo::before {\n  content: '\\EC28';\n}\n\n.ms-Icon--WordLogo::before {\n  content: '\\EC29';\n}\n\n.ms-Icon--PowerPointLogo::before {\n  content: '\\EC2A';\n}\n\n.ms-Icon--Cafe::before {\n  content: '\\EC32';\n}\n\n.ms-Icon--SpeedHigh::before {\n  content: '\\EC4A';\n}\n\n.ms-Icon--MusicNote::before {\n  content: '\\EC4F';\n}\n\n.ms-Icon--EdgeLogo::before {\n  content: '\\EC60';\n}\n\n.ms-Icon--CompletedSolid::before {\n  content: '\\EC61';\n}\n\n.ms-Icon--AlbumRemove::before {\n  content: '\\EC62';\n}\n\n.ms-Icon--MessageFill::before {\n  content: '\\EC70';\n}\n\n.ms-Icon--TabletSelected::before {\n  content: '\\EC74';\n}\n\n.ms-Icon--MobileSelected::before {\n  content: '\\EC75';\n}\n\n.ms-Icon--LaptopSelected::before {\n  content: '\\EC76';\n}\n\n.ms-Icon--TVMonitorSelected::before {\n  content: '\\EC77';\n}\n\n.ms-Icon--DeveloperTools::before {\n  content: '\\EC7A';\n}\n\n.ms-Icon--InsertTextBox::before {\n  content: '\\EC7D';\n}\n\n.ms-Icon--LowerBrightness::before {\n  content: '\\EC8A';\n}\n\n.ms-Icon--CloudUpload::before {\n  content: '\\EC8E';\n}\n\n.ms-Icon--DateTime::before {\n  content: '\\EC92';\n}\n\n.ms-Icon--Event::before {\n  content: '\\ECA3';\n}\n\n.ms-Icon--Cake::before {\n  content: '\\ECA4';\n}\n\n.ms-Icon--Tiles::before {\n  content: '\\ECA5';\n}\n\n.ms-Icon--Org::before {\n  content: '\\ECA6';\n}\n\n.ms-Icon--PartyLeader::before {\n  content: '\\ECA7';\n}\n\n.ms-Icon--DRM::before {\n  content: '\\ECA8';\n}\n\n.ms-Icon--CloudAdd::before {\n  content: '\\ECA9';\n}\n\n.ms-Icon--AppIconDefault::before {\n  content: '\\ECAA';\n}\n\n.ms-Icon--Photo2Add::before {\n  content: '\\ECAB';\n}\n\n.ms-Icon--Photo2Remove::before {\n  content: '\\ECAC';\n}\n\n.ms-Icon--POI::before {\n  content: '\\ECAF';\n}\n\n.ms-Icon--FacebookLogo::before {\n  content: '\\ECB3';\n}\n\n.ms-Icon--AddTo::before {\n  content: '\\ECC8';\n}\n\n.ms-Icon--RadioBtnOn::before {\n  content: '\\ECCB';\n}\n\n.ms-Icon--Embed::before {\n  content: '\\ECCE';\n}\n\n.ms-Icon--VideoSolid::before {\n  content: '\\EA0C';\n}\n\n.ms-Icon--Teamwork::before {\n  content: '\\EA12';\n}\n\n.ms-Icon--PeopleAdd::before {\n  content: '\\EA15';\n}\n\n.ms-Icon--Glasses::before {\n  content: '\\EA16';\n}\n\n.ms-Icon--DateTime2::before {\n  content: '\\EA17';\n}\n\n.ms-Icon--Shield::before {\n  content: '\\EA18';\n}\n\n.ms-Icon--Header1::before {\n  content: '\\EA19';\n}\n\n.ms-Icon--PageAdd::before {\n  content: '\\EA1A';\n}\n\n.ms-Icon--NumberedList::before {\n  content: '\\EA1C';\n}\n\n.ms-Icon--PowerBILogo::before {\n  content: '\\EA1E';\n}\n\n.ms-Icon--Product::before {\n  content: '\\ECDC';\n}\n\n.ms-Icon--Blocked2::before {\n  content: '\\ECE4';\n}\n\n.ms-Icon--FangBody::before {\n  content: '\\ECEB';\n}\n\n.ms-Icon--Glimmer::before {\n  content: '\\ECF4';\n}\n\n.ms-Icon--ChatInviteFriend::before {\n  content: '\\ECFE';\n}\n\n.ms-Icon--SharepointLogo::before {\n  content: '\\ED18';\n}\n\n.ms-Icon--YammerLogo::before {\n  content: '\\ED19';\n}\n\n.ms-Icon--ReturnToSession::before {\n  content: '\\ED24';\n}\n\n.ms-Icon--OpenFolderHorizontal::before {\n  content: '\\ED25';\n}\n\n.ms-Icon--CalendarMirrored::before {\n  content: '\\ED28';\n}\n\n.ms-Icon--SwayLogo::before {\n  content: '\\ED29';\n}\n\n.ms-Icon--OutOfOffice::before {\n  content: '\\ED34';\n}\n\n.ms-Icon--Trophy::before {\n  content: '\\ED3F';\n}\n\n.ms-Icon--ReopenPages::before {\n  content: '\\ED50';\n}\n\n.ms-Icon--AADLogo::before {\n  content: '\\ED68';\n}\n\n.ms-Icon--AccessLogo::before {\n  content: '\\ED69';\n}\n\n.ms-Icon--AdminALogo::before {\n  content: '\\ED6A';\n}\n\n.ms-Icon--AdminCLogo::before {\n  content: '\\ED6B';\n}\n\n.ms-Icon--AdminDLogo::before {\n  content: '\\ED6C';\n}\n\n.ms-Icon--AdminELogo::before {\n  content: '\\ED6D';\n}\n\n.ms-Icon--AdminLLogo::before {\n  content: '\\ED6E';\n}\n\n.ms-Icon--AdminMLogo::before {\n  content: '\\ED6F';\n}\n\n.ms-Icon--AdminOLogo::before {\n  content: '\\ED70';\n}\n\n.ms-Icon--AdminPLogo::before {\n  content: '\\ED71';\n}\n\n.ms-Icon--AdminSLogo::before {\n  content: '\\ED72';\n}\n\n.ms-Icon--AdminYLogo::before {\n  content: '\\ED73';\n}\n\n.ms-Icon--AlchemyLogo::before {\n  content: '\\ED74';\n}\n\n.ms-Icon--BoxLogo::before {\n  content: '\\ED75';\n}\n\n.ms-Icon--DelveLogo::before {\n  content: '\\ED76';\n}\n\n.ms-Icon--DropboxLogo::before {\n  content: '\\ED77';\n}\n\n.ms-Icon--ExchangeLogo::before {\n  content: '\\ED78';\n}\n\n.ms-Icon--LyncLogo::before {\n  content: '\\ED79';\n}\n\n.ms-Icon--OfficeVideoLogo::before {\n  content: '\\ED7A';\n}\n\n.ms-Icon--ParatureLogo::before {\n  content: '\\ED7B';\n}\n\n.ms-Icon--SocialListeningLogo::before {\n  content: '\\ED7C';\n}\n\n.ms-Icon--VisioLogo::before {\n  content: '\\ED7D';\n}\n\n.ms-Icon--Balloons::before {\n  content: '\\ED7E';\n}\n\n.ms-Icon--Cat::before {\n  content: '\\ED7F';\n}\n\n.ms-Icon--MailAlert::before {\n  content: '\\ED80';\n}\n\n.ms-Icon--MailCheck::before {\n  content: '\\ED81';\n}\n\n.ms-Icon--MailLowImportance::before {\n  content: '\\ED82';\n}\n\n.ms-Icon--MailPause::before {\n  content: '\\ED83';\n}\n\n.ms-Icon--MailRepeat::before {\n  content: '\\ED84';\n}\n\n.ms-Icon--SecurityGroup::before {\n  content: '\\ED85';\n}\n\n.ms-Icon--Table::before {\n  content: '\\ED86';\n}\n\n.ms-Icon--VoicemailForward::before {\n  content: '\\ED87';\n}\n\n.ms-Icon--VoicemailReply::before {\n  content: '\\ED88';\n}\n\n.ms-Icon--Waffle::before {\n  content: '\\ED89';\n}\n\n.ms-Icon--RemoveEvent::before {\n  content: '\\ED8A';\n}\n\n.ms-Icon--EventInfo::before {\n  content: '\\ED8B';\n}\n\n.ms-Icon--ForwardEvent::before {\n  content: '\\ED8C';\n}\n\n.ms-Icon--WipePhone::before {\n  content: '\\ED8D';\n}\n\n.ms-Icon--AddOnlineMeeting::before {\n  content: '\\ED8E';\n}\n\n.ms-Icon--JoinOnlineMeeting::before {\n  content: '\\ED8F';\n}\n\n.ms-Icon--RemoveLink::before {\n  content: '\\ED90';\n}\n\n.ms-Icon--PeopleBlock::before {\n  content: '\\ED91';\n}\n\n.ms-Icon--PeopleRepeat::before {\n  content: '\\ED92';\n}\n\n.ms-Icon--PeopleAlert::before {\n  content: '\\ED93';\n}\n\n.ms-Icon--PeoplePause::before {\n  content: '\\ED94';\n}\n\n.ms-Icon--TransferCall::before {\n  content: '\\ED95';\n}\n\n.ms-Icon--AddPhone::before {\n  content: '\\ED96';\n}\n\n.ms-Icon--UnknownCall::before {\n  content: '\\ED97';\n}\n\n.ms-Icon--NoteReply::before {\n  content: '\\ED98';\n}\n\n.ms-Icon--NoteForward::before {\n  content: '\\ED99';\n}\n\n.ms-Icon--NotePinned::before {\n  content: '\\ED9A';\n}\n\n.ms-Icon--RemoveOccurrence::before {\n  content: '\\ED9B';\n}\n\n.ms-Icon--Timeline::before {\n  content: '\\ED9C';\n}\n\n.ms-Icon--EditNote::before {\n  content: '\\ED9D';\n}\n\n.ms-Icon--CircleHalfFull::before {\n  content: '\\ED9E';\n}\n\n.ms-Icon--Room::before {\n  content: '\\ED9F';\n}\n\n.ms-Icon--Unsubscribe::before {\n  content: '\\EDA0';\n}\n\n.ms-Icon--Subscribe::before {\n  content: '\\EDA1';\n}\n\n.ms-Icon--RecurringTask::before {\n  content: '\\EDB2';\n}\n\n.ms-Icon--TaskManager::before {\n  content: '\\EDB7';\n}\n\n.ms-Icon--TaskManagerMirrored::before {\n  content: '\\EDB8';\n}\n\n.ms-Icon--Combine::before {\n  content: '\\EDBB';\n}\n\n.ms-Icon--Split::before {\n  content: '\\EDBC';\n}\n\n.ms-Icon--DoubleChevronUp::before {\n  content: '\\EDBD';\n}\n\n.ms-Icon--DoubleChevronLeft::before {\n  content: '\\EDBE';\n}\n\n.ms-Icon--DoubleChevronRight::before {\n  content: '\\EDBF';\n}\n\n.ms-Icon--Ascending::before {\n  content: '\\EDC0';\n}\n\n.ms-Icon--Descending::before {\n  content: '\\EDC1';\n}\n\n.ms-Icon--TextBox::before {\n  content: '\\EDC2';\n}\n\n.ms-Icon--TextField::before {\n  content: '\\EDC3';\n}\n\n.ms-Icon--NumberField::before {\n  content: '\\EDC4';\n}\n\n.ms-Icon--Dropdown::before {\n  content: '\\EDC5';\n}\n\n.ms-Icon--BookingsLogo::before {\n  content: '\\EDC7';\n}\n\n.ms-Icon--ClassNotebookLogo::before {\n  content: '\\EDC8';\n}\n\n.ms-Icon--CollabsDBLogo::before {\n  content: '\\EDC9';\n}\n\n.ms-Icon--DelveAnalyticsLogo::before {\n  content: '\\EDCA';\n}\n\n.ms-Icon--DocsLogo::before {\n  content: '\\EDCB';\n}\n\n.ms-Icon--DynamicsCRMLogo::before,\n.ms-Icon--Dynamics365Logo::before {\n  content: '\\EDCC';\n}\n\n.ms-Icon--DynamicSMBLogo::before {\n  content: '\\EDCD';\n}\n\n.ms-Icon--OfficeAssistantLogo::before {\n  content: '\\EDCE';\n}\n\n.ms-Icon--OfficeStoreLogo::before {\n  content: '\\EDCF';\n}\n\n.ms-Icon--OneNoteEduLogo::before {\n  content: '\\EDD0';\n}\n\n.ms-Icon--Planner::before {\n  content: '\\EDD1';\n}\n\n.ms-Icon--PowerApps::before {\n  content: '\\EDD2';\n}\n\n.ms-Icon--Suitcase::before {\n  content: '\\EDD3';\n}\n\n.ms-Icon--ProjectLogo::before {\n  content: '\\EDD4';\n}\n\n.ms-Icon--CaretLeft8::before {\n  content: '\\EDD5';\n}\n\n.ms-Icon--CaretRight8::before {\n  content: '\\EDD6';\n}\n\n.ms-Icon--CaretUp8::before {\n  content: '\\EDD7';\n}\n\n.ms-Icon--CaretDown8::before {\n  content: '\\EDD8';\n}\n\n.ms-Icon--CaretLeftSolid8::before {\n  content: '\\EDD9';\n}\n\n.ms-Icon--CarotRightSolid8::before,\n.ms-Icon--CaretRightSolid8::before {\n  content: '\\EDDA';\n}\n\n.ms-Icon--CaretUpSolid8::before {\n  content: '\\EDDB';\n}\n\n.ms-Icon--CaretDownSolid8::before {\n  content: '\\EDDC';\n}\n\n.ms-Icon--ClearFormatting::before {\n  content: '\\EDDD';\n}\n\n.ms-Icon--Superscript::before {\n  content: '\\EDDE';\n}\n\n.ms-Icon--Subscript::before {\n  content: '\\EDDF';\n}\n\n.ms-Icon--Strikethrough::before {\n  content: '\\EDE0';\n}\n\n.ms-Icon--SingleBookmark::before {\n  content: '\\EDFF';\n}\n\n.ms-Icon--DoubleChevronDown::before {\n  content: '\\EE04';\n}\n\n.ms-Icon--ReplyAll::before {\n  content: '\\EE0A';\n}\n\n.ms-Icon--GoogleDriveLogo::before {\n  content: '\\EE0B';\n}\n\n.ms-Icon--Questionnaire::before {\n  content: '\\EE19';\n}\n\n.ms-Icon--ReplyMirrored::before {\n  content: '\\EE35';\n}\n\n.ms-Icon--ReplyAllMirrored::before {\n  content: '\\EE36';\n}\n\n.ms-Icon--AddGroup::before {\n  content: '\\EE3D';\n}\n\n.ms-Icon--QuestionnaireMirrored::before {\n  content: '\\EE4B';\n}\n\n.ms-Icon--TemporaryUser::before {\n  content: '\\EE58';\n}\n\n.ms-Icon--GroupedDescending::before {\n  content: '\\EE66';\n}\n\n.ms-Icon--GroupedAscending::before {\n  content: '\\EE67';\n}\n\n.ms-Icon--SortUp::before {\n  content: '\\EE68';\n}\n\n.ms-Icon--SortDown::before {\n  content: '\\EE69';\n}\n\n.ms-Icon--AwayStatus::before {\n  content: '\\EE6A';\n}\n\n.ms-Icon--SyncToPC::before {\n  content: '\\EE6E';\n}\n\n.ms-Icon--AustralianRules::before {\n  content: '\\EE70';\n}\n\n.ms-Icon--DateTimeMirrored::before {\n  content: '\\EE93';\n}\n\n.ms-Icon--DoubleChevronUp12::before {\n  content: '\\EE96';\n}\n\n.ms-Icon--DoubleChevronDown12::before {\n  content: '\\EE97';\n}\n\n.ms-Icon--DoubleChevronLeft12::before {\n  content: '\\EE98';\n}\n\n.ms-Icon--DoubleChevronRight12::before {\n  content: '\\EE99';\n}\n\n.ms-Icon--CalendarAgenda::before {\n  content: '\\EE9A';\n}\n\n.ms-Icon--AddEvent::before {\n  content: '\\EEB5';\n}\n\n.ms-Icon--AssetLibrary::before {\n  content: '\\EEB6';\n}\n\n.ms-Icon--DataConnectionLibrary::before {\n  content: '\\EEB7';\n}\n\n.ms-Icon--DocLibrary::before {\n  content: '\\EEB8';\n}\n\n.ms-Icon--FormLibrary::before {\n  content: '\\EEB9';\n}\n\n.ms-Icon--FormLibraryMirrored::before {\n  content: '\\EEBA';\n}\n\n.ms-Icon--ReportLibrary::before {\n  content: '\\EEBB';\n}\n\n.ms-Icon--ReportLibraryMirrored::before {\n  content: '\\EEBC';\n}\n\n.ms-Icon--ContactCard::before {\n  content: '\\EEBD';\n}\n\n.ms-Icon--CustomList::before {\n  content: '\\EEBE';\n}\n\n.ms-Icon--CustomListMirrored::before {\n  content: '\\EEBF';\n}\n\n.ms-Icon--IssueTracking::before {\n  content: '\\EEC0';\n}\n\n.ms-Icon--IssueTrackingMirrored::before {\n  content: '\\EEC1';\n}\n\n.ms-Icon--PictureLibrary::before {\n  content: '\\EEC2';\n}\n\n.ms-Icon--AppForOfficeLogo::before {\n  content: '\\EEC7';\n}\n\n.ms-Icon--OfflineOneDriveParachute::before {\n  content: '\\EEC8';\n}\n\n.ms-Icon--OfflineOneDriveParachuteDisabled::before {\n  content: '\\EEC9';\n}\n\n.ms-Icon--LargeGrid::before {\n  content: '\\EECB';\n}\n\n.ms-Icon--TriangleSolidUp12::before {\n  content: '\\EECC';\n}\n\n.ms-Icon--TriangleSolidDown12::before {\n  content: '\\EECD';\n}\n\n.ms-Icon--TriangleSolidLeft12::before {\n  content: '\\EECE';\n}\n\n.ms-Icon--TriangleSolidRight12::before {\n  content: '\\EECF';\n}\n\n.ms-Icon--TriangleUp12::before {\n  content: '\\EED0';\n}\n\n.ms-Icon--TriangleDown12::before {\n  content: '\\EED1';\n}\n\n.ms-Icon--TriangleLeft12::before {\n  content: '\\EED2';\n}\n\n.ms-Icon--TriangleRight12::before {\n  content: '\\EED3';\n}\n\n.ms-Icon--ArrowUpRight8::before {\n  content: '\\EED4';\n}\n\n.ms-Icon--ArrowDownRight8::before {\n  content: '\\EED5';\n}\n\n.ms-Icon--DocumentSet::before {\n  content: '\\EED6';\n}\n\n.ms-Icon--DelveAnalytics::before {\n  content: '\\EEEE';\n}\n\n.ms-Icon--ArrowUpRightMirrored8::before {\n  content: '\\EEEF';\n}\n\n.ms-Icon--ArrowDownRightMirrored8::before {\n  content: '\\EEF0';\n}\n\n.ms-Icon--OneDriveAdd::before {\n  content: '\\EF32';\n}\n\n.ms-Icon--Header2::before {\n  content: '\\EF36';\n}\n\n.ms-Icon--Header3::before {\n  content: '\\EF37';\n}\n\n.ms-Icon--Header4::before {\n  content: '\\EF38';\n}\n\n.ms-Icon--MarketDown::before {\n  content: '\\EF42';\n}\n\n.ms-Icon--CalendarWorkWeek::before {\n  content: '\\EF51';\n}\n\n.ms-Icon--SidePanel::before {\n  content: '\\EF52';\n}\n\n.ms-Icon--GlobeFavorite::before {\n  content: '\\EF53';\n}\n\n.ms-Icon--CaretTopLeftSolid8::before {\n  content: '\\EF54';\n}\n\n.ms-Icon--CaretTopRightSolid8::before {\n  content: '\\EF55';\n}\n\n.ms-Icon--ViewAll2::before {\n  content: '\\EF56';\n}\n\n.ms-Icon--DocumentReply::before {\n  content: '\\EF57';\n}\n\n.ms-Icon--PlayerSettings::before {\n  content: '\\EF58';\n}\n\n.ms-Icon--ReceiptForward::before {\n  content: '\\EF59';\n}\n\n.ms-Icon--ReceiptReply::before {\n  content: '\\EF5A';\n}\n\n.ms-Icon--ReceiptCheck::before {\n  content: '\\EF5B';\n}\n\n.ms-Icon--Fax::before {\n  content: '\\EF5C';\n}\n\n.ms-Icon--RecurringEvent::before {\n  content: '\\EF5D';\n}\n\n.ms-Icon--ReplyAlt::before {\n  content: '\\EF5E';\n}\n\n.ms-Icon--ReplyAllAlt::before {\n  content: '\\EF5F';\n}\n\n.ms-Icon--EditStyle::before {\n  content: '\\EF60';\n}\n\n.ms-Icon--EditMail::before {\n  content: '\\EF61';\n}\n\n.ms-Icon--Lifesaver::before {\n  content: '\\EF62';\n}\n\n.ms-Icon--LifesaverLock::before {\n  content: '\\EF63';\n}\n\n.ms-Icon--InboxCheck::before {\n  content: '\\EF64';\n}\n\n.ms-Icon--FolderSearch::before {\n  content: '\\EF65';\n}\n\n.ms-Icon--CollapseMenu::before {\n  content: '\\EF66';\n}\n\n.ms-Icon--ExpandMenu::before {\n  content: '\\EF67';\n}\n\n.ms-Icon--Boards::before {\n  content: '\\EF68';\n}\n\n.ms-Icon--SunAdd::before {\n  content: '\\EF69';\n}\n\n.ms-Icon--SunQuestionMark::before {\n  content: '\\EF6A';\n}\n\n.ms-Icon--LandscapeOrientation::before {\n  content: '\\EF6B';\n}\n\n.ms-Icon--DocumentSearch::before {\n  content: '\\EF6C';\n}\n\n.ms-Icon--PublicCalendar::before {\n  content: '\\EF6D';\n}\n\n.ms-Icon--PublicContactCard::before {\n  content: '\\EF6E';\n}\n\n.ms-Icon--PublicEmail::before {\n  content: '\\EF6F';\n}\n\n.ms-Icon--PublicFolder::before {\n  content: '\\EF70';\n}\n\n.ms-Icon--WordDocument::before {\n  content: '\\EF71';\n}\n\n.ms-Icon--PowerPointDocument::before {\n  content: '\\EF72';\n}\n\n.ms-Icon--ExcelDocument::before {\n  content: '\\EF73';\n}\n\n.ms-Icon--GroupedList::before {\n  content: '\\EF74';\n}\n\n.ms-Icon--ClassroomLogo::before {\n  content: '\\EF75';\n}\n\n.ms-Icon--Sections::before {\n  content: '\\EF76';\n}\n\n.ms-Icon--EditPhoto::before {\n  content: '\\EF77';\n}\n\n.ms-Icon--Starburst::before {\n  content: '\\EF78';\n}\n\n.ms-Icon--ShareiOS::before {\n  content: '\\EF79';\n}\n\n.ms-Icon--AirTickets::before {\n  content: '\\EF7A';\n}\n\n.ms-Icon--PencilReply::before {\n  content: '\\EF7B';\n}\n\n.ms-Icon--Tiles2::before {\n  content: '\\EF7C';\n}\n\n.ms-Icon--SkypeCircleCheck::before {\n  content: '\\EF7D';\n}\n\n.ms-Icon--SkypeCircleClock::before {\n  content: '\\EF7E';\n}\n\n.ms-Icon--SkypeCircleMinus::before {\n  content: '\\EF7F';\n}\n\n.ms-Icon--SkypeCheck::before {\n  content: '\\EF80';\n}\n\n.ms-Icon--SkypeClock::before {\n  content: '\\EF81';\n}\n\n.ms-Icon--SkypeMinus::before {\n  content: '\\EF82';\n}\n\n.ms-Icon--SkypeMessage::before {\n  content: '\\EF83';\n}\n\n.ms-Icon--ClosedCaption::before {\n  content: '\\EF84';\n}\n\n.ms-Icon--ATPLogo::before {\n  content: '\\EF85';\n}\n\n.ms-Icon--OfficeFormLogo::before {\n  content: '\\EF86';\n}\n\n.ms-Icon--RecycleBin::before {\n  content: '\\EF87';\n}\n\n.ms-Icon--EmptyRecycleBin::before {\n  content: '\\EF88';\n}\n\n.ms-Icon--Hide2::before {\n  content: '\\EF89';\n}\n\n.ms-Icon--iOSAppStoreLogo::before {\n  content: '\\EF8A';\n}\n\n.ms-Icon--AndroidLogo::before {\n  content: '\\EF8B';\n}\n\n.ms-Icon--Breadcrumb::before {\n  content: '\\EF8C';\n}\n\n.ms-Icon--ClearFilter::before {\n  content: '\\EF8F';\n}\n\n.ms-Icon--Flow::before {\n  content: '\\EF90';\n}\n\n.ms-Icon--PageCheckedOut::before {\n  content: '\\F02C';\n}\n\n.ms-Icon--SetAction::before {\n  content: '\\F071';\n}\n\n.ms-Icon--PowerAppsLogo::before {\n  content: '\\F091';\n}\n\n.ms-Icon--PowerApps2Logo::before {\n  content: '\\F092';\n}\n\n.ms-Icon--FabricAssetLibrary::before {\n  content: '\\F09C';\n}\n\n.ms-Icon--FabricDataConnectionLibrary::before {\n  content: '\\F09D';\n}\n\n.ms-Icon--FabricDocLibrary::before {\n  content: '\\F09E';\n}\n\n.ms-Icon--FabricFormLibrary::before {\n  content: '\\F09F';\n}\n\n.ms-Icon--FabricFormLibraryMirrored::before {\n  content: '\\F0A0';\n}\n\n.ms-Icon--FabricReportLibrary::before {\n  content: '\\F0A1';\n}\n\n.ms-Icon--FabricReportLibraryMirrored::before {\n  content: '\\F0A2';\n}\n\n.ms-Icon--FabricPublicFolder::before {\n  content: '\\F0A3';\n}\n\n.ms-Icon--FabricFolderSearch::before {\n  content: '\\F0A4';\n}\n\n.ms-Icon--FabricMovetoFolder::before {\n  content: '\\F0A5';\n}\n\n.ms-Icon--FabricUnsyncFolder::before {\n  content: '\\F0A6';\n}\n\n.ms-Icon--FabricSyncFolder::before {\n  content: '\\F0A7';\n}\n\n.ms-Icon--FabricOpenFolderHorizontal::before {\n  content: '\\F0A8';\n}\n\n.ms-Icon--FabricFolder::before {\n  content: '\\F0A9';\n}\n\n.ms-Icon--FabricFolderFill::before {\n  content: '\\F0AA';\n}\n\n.ms-Icon--FabricNewFolder::before {\n  content: '\\F0AB';\n}\n\n.ms-Icon--FabricPictureLibrary::before {\n  content: '\\F0AC';\n}\n\n.ms-Icon--AddFavorite::before {\n  content: '\\F0C8';\n}\n\n.ms-Icon--AddFavoriteFill::before {\n  content: '\\F0C9';\n}\n\n.ms-Icon--BufferTimeBefore::before {\n  content: '\\F0CF';\n}\n\n.ms-Icon--BufferTimeAfter::before {\n  content: '\\F0D0';\n}\n\n.ms-Icon--BufferTimeBoth::before {\n  content: '\\F0D1';\n}\n\n.ms-Icon--PageCheckedin::before {\n  content: '\\F104';\n}\n\n.ms-Icon--CaretBottomLeftSolid8::before {\n  content: '\\F121';\n}\n\n.ms-Icon--CaretBottomRightSolid8::before {\n  content: '\\F122';\n}\n\n.ms-BrandIcon--access.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1.png);\n}\n\n.ms-BrandIcon--access.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1.png);\n}\n\n.ms-BrandIcon--access.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1.png);\n}\n\n.ms-BrandIcon--excel.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1.png);\n}\n\n.ms-BrandIcon--excel.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1.png);\n}\n\n.ms-BrandIcon--excel.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1.png);\n}\n\n.ms-BrandIcon--infopath.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1.png);\n}\n\n.ms-BrandIcon--infopath.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1.png);\n}\n\n.ms-BrandIcon--infopath.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1.png);\n}\n\n.ms-BrandIcon--office.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1.png);\n}\n\n.ms-BrandIcon--office.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1.png);\n}\n\n.ms-BrandIcon--office.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1.png);\n}\n\n.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1.png);\n}\n\n.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1.png);\n}\n\n.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1.png);\n}\n\n.ms-BrandIcon--onenote.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1.png);\n}\n\n.ms-BrandIcon--onenote.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1.png);\n}\n\n.ms-BrandIcon--onenote.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1.png);\n}\n\n.ms-BrandIcon--outlook.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1.png);\n}\n\n.ms-BrandIcon--outlook.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1.png);\n}\n\n.ms-BrandIcon--outlook.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1.png);\n}\n\n.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1.png);\n}\n\n.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1.png);\n}\n\n.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1.png);\n}\n\n.ms-BrandIcon--project.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1.png);\n}\n\n.ms-BrandIcon--project.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1.png);\n}\n\n.ms-BrandIcon--project.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1.png);\n}\n\n.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1.png);\n}\n\n.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1.png);\n}\n\n.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1.png);\n}\n\n.ms-BrandIcon--visio.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1.png);\n}\n\n.ms-BrandIcon--visio.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1.png);\n}\n\n.ms-BrandIcon--visio.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1.png);\n}\n\n.ms-BrandIcon--word.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1.png);\n}\n\n.ms-BrandIcon--word.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1.png);\n}\n\n.ms-BrandIcon--word.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1.png);\n}\n\n.ms-BrandIcon--accdb.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1.png);\n}\n\n.ms-BrandIcon--accdb.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1.png);\n}\n\n.ms-BrandIcon--accdb.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1.png);\n}\n\n.ms-BrandIcon--csv.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1.png);\n}\n\n.ms-BrandIcon--csv.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1.png);\n}\n\n.ms-BrandIcon--csv.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1.png);\n}\n\n.ms-BrandIcon--docx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1.png);\n}\n\n.ms-BrandIcon--docx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1.png);\n}\n\n.ms-BrandIcon--docx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1.png);\n}\n\n.ms-BrandIcon--dotx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1.png);\n}\n\n.ms-BrandIcon--dotx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1.png);\n}\n\n.ms-BrandIcon--dotx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1.png);\n}\n\n.ms-BrandIcon--mpp.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1.png);\n}\n\n.ms-BrandIcon--mpp.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1.png);\n}\n\n.ms-BrandIcon--mpp.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1.png);\n}\n\n.ms-BrandIcon--mpt.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1.png);\n}\n\n.ms-BrandIcon--mpt.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1.png);\n}\n\n.ms-BrandIcon--mpt.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1.png);\n}\n\n.ms-BrandIcon--odp.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1.png);\n}\n\n.ms-BrandIcon--odp.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1.png);\n}\n\n.ms-BrandIcon--odp.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1.png);\n}\n\n.ms-BrandIcon--ods.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1.png);\n}\n\n.ms-BrandIcon--ods.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1.png);\n}\n\n.ms-BrandIcon--ods.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1.png);\n}\n\n.ms-BrandIcon--odt.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1.png);\n}\n\n.ms-BrandIcon--odt.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1.png);\n}\n\n.ms-BrandIcon--odt.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1.png);\n}\n\n.ms-BrandIcon--one.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1.png);\n}\n\n.ms-BrandIcon--one.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1.png);\n}\n\n.ms-BrandIcon--one.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1.png);\n}\n\n.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1.png);\n}\n\n.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1.png);\n}\n\n.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1.png);\n}\n\n.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1.png);\n}\n\n.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1.png);\n}\n\n.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1.png);\n}\n\n.ms-BrandIcon--potx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1.png);\n}\n\n.ms-BrandIcon--potx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1.png);\n}\n\n.ms-BrandIcon--potx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1.png);\n}\n\n.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1.png);\n}\n\n.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1.png);\n}\n\n.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1.png);\n}\n\n.ms-BrandIcon--pptx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1.png);\n}\n\n.ms-BrandIcon--pptx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1.png);\n}\n\n.ms-BrandIcon--pptx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1.png);\n}\n\n.ms-BrandIcon--pub.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1.png);\n}\n\n.ms-BrandIcon--pub.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1.png);\n}\n\n.ms-BrandIcon--pub.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1.png);\n}\n\n.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1.png);\n}\n\n.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1.png);\n}\n\n.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1.png);\n}\n\n.ms-BrandIcon--vssx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1.png);\n}\n\n.ms-BrandIcon--vssx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1.png);\n}\n\n.ms-BrandIcon--vssx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1.png);\n}\n\n.ms-BrandIcon--vstx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1.png);\n}\n\n.ms-BrandIcon--vstx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1.png);\n}\n\n.ms-BrandIcon--vstx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1.png);\n}\n\n.ms-BrandIcon--xls.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1.png);\n}\n\n.ms-BrandIcon--xls.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1.png);\n}\n\n.ms-BrandIcon--xls.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1.png);\n}\n\n.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1.png);\n}\n\n.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1.png);\n}\n\n.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1.png);\n}\n\n.ms-BrandIcon--xltx.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1.png);\n}\n\n.ms-BrandIcon--xltx.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1.png);\n}\n\n.ms-BrandIcon--xltx.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1.png);\n}\n\n.ms-BrandIcon--xsn.ms-BrandIcon--Icon16 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1.png);\n}\n\n.ms-BrandIcon--xsn.ms-BrandIcon--Icon48 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1.png);\n}\n\n.ms-BrandIcon--xsn.ms-BrandIcon--Icon96 {\n  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1.png);\n}\n\n.ms-BrandIcon--Icon16 {\n  background-size: 100% 100%;\n  width: 16px;\n  height: 16px;\n}\n\n.ms-BrandIcon--Icon48 {\n  background-size: 100% 100%;\n  width: 48px;\n  height: 48px;\n}\n\n.ms-BrandIcon--Icon96 {\n  background-size: 100% 100%;\n  width: 96px;\n  height: 96px;\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 144dpi) {\n  .ms-BrandIcon--access.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1_5.png);\n  }\n\n  .ms-BrandIcon--access.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1_5.png);\n  }\n\n  .ms-BrandIcon--access.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1_5.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1_5.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1_5.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1_5.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1_5.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1_5.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1_5.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1_5.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1_5.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1_5.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1_5.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1_5.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1_5.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1_5.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1_5.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1_5.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1_5.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1_5.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1_5.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1_5.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1_5.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1_5.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1_5.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1_5.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1_5.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1_5.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1_5.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1_5.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1_5.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1_5.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1_5.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1_5.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1_5.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1_5.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1_5.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1_5.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1_5.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1_5.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1_5.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1_5.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1_5.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1_5.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1_5.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1_5.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1_5.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1_5.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1_5.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1_5.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1_5.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1_5.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1_5.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1_5.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1_5.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1_5.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1_5.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1_5.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1_5.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1_5.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1_5.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1_5.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1_5.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1_5.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1_5.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1_5.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1_5.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1_5.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1_5.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1_5.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1_5.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1_5.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1_5.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1_5.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1_5.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1_5.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1_5.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1_5.png);\n  }\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {\n  .ms-BrandIcon--access.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x2.png);\n  }\n\n  .ms-BrandIcon--access.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x2.png);\n  }\n\n  .ms-BrandIcon--access.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x2.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x2.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x2.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x2.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x2.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x2.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x2.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x2.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x2.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x2.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x2.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x2.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x2.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x2.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x2.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x2.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x2.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x2.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x2.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x2.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x2.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x2.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x2.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x2.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x2.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x2.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x2.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x2.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x2.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x2.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x2.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x2.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x2.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x2.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x2.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x2.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x2.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x2.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x2.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x2.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x2.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x2.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x2.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x2.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x2.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x2.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x2.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x2.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x2.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x2.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x2.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x2.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x2.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x2.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x2.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x2.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x2.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x2.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x2.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x2.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x2.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x2.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x2.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x2.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x2.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x2.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x2.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x2.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x2.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x2.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x2.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x2.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x2.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x2.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x2.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x2.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x2.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x2.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x2.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x2.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x2.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x2.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x2.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x2.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x2.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x2.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x2.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x2.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x2.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x2.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x2.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x2.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x2.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x2.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x2.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x2.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x2.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x2.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x2.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x2.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x2.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x2.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x2.png);\n  }\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min-resolution: 288dpi) {\n  .ms-BrandIcon--access.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x3.png);\n  }\n\n  .ms-BrandIcon--access.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x3.png);\n  }\n\n  .ms-BrandIcon--access.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x3.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x3.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x3.png);\n  }\n\n  .ms-BrandIcon--excel.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x3.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x3.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x3.png);\n  }\n\n  .ms-BrandIcon--infopath.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x3.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x3.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x3.png);\n  }\n\n  .ms-BrandIcon--office.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x3.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x3.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x3.png);\n  }\n\n  .ms-BrandIcon--onedrive.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x3.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x3.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x3.png);\n  }\n\n  .ms-BrandIcon--onenote.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x3.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x3.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x3.png);\n  }\n\n  .ms-BrandIcon--outlook.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x3.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x3.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x3.png);\n  }\n\n  .ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x3.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x3.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x3.png);\n  }\n\n  .ms-BrandIcon--project.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x3.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x3.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x3.png);\n  }\n\n  .ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x3.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x3.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x3.png);\n  }\n\n  .ms-BrandIcon--visio.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x3.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x3.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x3.png);\n  }\n\n  .ms-BrandIcon--word.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x3.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x3.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x3.png);\n  }\n\n  .ms-BrandIcon--accdb.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x3.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x3.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x3.png);\n  }\n\n  .ms-BrandIcon--csv.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x3.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x3.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x3.png);\n  }\n\n  .ms-BrandIcon--docx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x3.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x3.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x3.png);\n  }\n\n  .ms-BrandIcon--dotx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x3.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x3.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x3.png);\n  }\n\n  .ms-BrandIcon--mpp.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x3.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x3.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x3.png);\n  }\n\n  .ms-BrandIcon--mpt.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x3.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x3.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x3.png);\n  }\n\n  .ms-BrandIcon--odp.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x3.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x3.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x3.png);\n  }\n\n  .ms-BrandIcon--ods.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x3.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x3.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x3.png);\n  }\n\n  .ms-BrandIcon--odt.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x3.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x3.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x3.png);\n  }\n\n  .ms-BrandIcon--one.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x3.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x3.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x3.png);\n  }\n\n  .ms-BrandIcon--onepkg.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x3.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x3.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x3.png);\n  }\n\n  .ms-BrandIcon--onetoc.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x3.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x3.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x3.png);\n  }\n\n  .ms-BrandIcon--potx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x3.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x3.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x3.png);\n  }\n\n  .ms-BrandIcon--ppsx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x3.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x3.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x3.png);\n  }\n\n  .ms-BrandIcon--pptx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x3.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x3.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x3.png);\n  }\n\n  .ms-BrandIcon--pub.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x3.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x3.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x3.png);\n  }\n\n  .ms-BrandIcon--vsdx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x3.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x3.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x3.png);\n  }\n\n  .ms-BrandIcon--vssx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x3.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x3.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x3.png);\n  }\n\n  .ms-BrandIcon--vstx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x3.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x3.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x3.png);\n  }\n\n  .ms-BrandIcon--xls.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x3.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x3.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x3.png);\n  }\n\n  .ms-BrandIcon--xlsx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x3.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x3.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x3.png);\n  }\n\n  .ms-BrandIcon--xltx.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x3.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon16 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x3.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon48 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x3.png);\n  }\n\n  .ms-BrandIcon--xsn.ms-BrandIcon--Icon96 {\n    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x3.png);\n  }\n}\n\n.ms-u-slideRightIn10 {\n  animation-name: fadeIn, slideRightIn10;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideRightIn10 {\n  from {\n    transform: translate3d(-10px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideRightIn20 {\n  animation-name: fadeIn, slideRightIn20;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideRightIn20 {\n  from {\n    transform: translate3d(-20px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideRightIn40 {\n  animation-name: fadeIn, slideRightIn40;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideRightIn40 {\n  from {\n    transform: translate3d(-40px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideLeftIn10 {\n  animation-name: fadeIn, slideLeftIn10;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideLeftIn10 {\n  from {\n    transform: translate3d(10px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideLeftIn20 {\n  animation-name: fadeIn, slideLeftIn20;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideLeftIn20 {\n  from {\n    transform: translate3d(20px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideLeftIn40 {\n  animation-name: fadeIn, slideLeftIn40;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideLeftIn40 {\n  from {\n    transform: translate3d(40px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideRightIn400 {\n  animation-name: fadeIn, slideRightIn400;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideRightIn400 {\n  from {\n    transform: translate3d(-400px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideLeftIn400 {\n  animation-name: fadeIn, slideLeft400;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideLeft400 {\n  from {\n    transform: translate3d(400px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideUpIn20 {\n  animation-name: fadeIn, slideUpIn20;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideUpIn20 {\n  from {\n    transform: translate3d(0px, 20px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideUpIn10 {\n  animation-name: fadeIn, slideUpIn10;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideUpIn10 {\n  from {\n    transform: translate3d(0px, 10px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideDownIn20 {\n  animation-name: fadeIn, slideDownIn20;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes slideDownIn20 {\n  from {\n    transform: translate3d(0px, -20px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideDownIn10 {\n  animation-name: fadeIn, slideDownIn10;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideDownIn10 {\n  from {\n    transform: translate3d(0px, -10px, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 0px, 0px);\n  }\n}\n\n.ms-u-slideRightOut40 {\n  animation-name: fadeOut, slideRightOut40;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideRightOut40 {\n  from {\n    transform: translate3d(0px, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(40px, 0px, 0px);\n  }\n}\n\n.ms-u-slideLeftOut40 {\n  animation-name: fadeOut, slideLeftOut40;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideLeftOut40 {\n  from {\n    transform: translate3d(0, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(-40px, 0px, 0px);\n  }\n}\n\n.ms-u-slideRightOut400 {\n  animation-name: fadeOut, slideRightOut400;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideRightOut400 {\n  from {\n    transform: translate3d(0, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(400px, 0px, 0px);\n  }\n}\n\n.ms-u-slideLeftOut400 {\n  animation-name: fadeOut, slideLeftOut400;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideLeftOut400 {\n  from {\n    transform: translate3d(0, 0px, 0px);\n  }\n\n  to {\n    transform: translate3d(-400px, 0px, 0px);\n  }\n}\n\n.ms-u-slideUpOut20 {\n  animation-name: fadeOut, slideUpOut20;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideUpOut20 {\n  from {\n    transform: translate3d(0px, 0, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, -20px, 0px);\n  }\n}\n\n.ms-u-slideUpOut10 {\n  animation-name: fadeOut, slideUpOut10;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideUpOut10 {\n  from {\n    transform: translate3d(0px, 0, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, -10px, 0px);\n  }\n}\n\n.ms-u-slideDownOut20 {\n  animation-name: fadeOut, slideDownOut20;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideDownOut20 {\n  from {\n    transform: translate3d(0px, 0, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 20px, 0px);\n  }\n}\n\n.ms-u-slideDownOut10 {\n  animation-name: fadeOut, slideDownOut10;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes slideDownOut10 {\n  from {\n    transform: translate3d(0px, 0, 0px);\n  }\n\n  to {\n    transform: translate3d(0px, 10px, 0px);\n  }\n}\n\n.ms-u-scaleUpIn100 {\n  animation-name: fadeIn, scaleUp100;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes scaleUp100 {\n  from {\n    transform: scale3d(0.98, 0.98, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.ms-u-scaleDownIn100 {\n  animation-name: fadeIn, scaleDown100;\n  -webkit-animation-duration: 0.367s;\n     -moz-animation-duration: 0.367s;\n      -ms-animation-duration: 0.367s;\n       -o-animation-duration: 0.367s;\n  animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);\n  animation-fill-mode: both;\n}\n\n@keyframes scaleDown100 {\n  from {\n    transform: scale3d(1.03, 1.03, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.ms-u-scaleUpOut103 {\n  animation-name: fadeOut, scaleUp103;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes scaleUp103 {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    transform: scale3d(1.03, 1.03, 1);\n  }\n}\n\n.ms-u-scaleDownOut98 {\n  animation-name: fadeOut, scaleDown98;\n  -webkit-animation-duration: 0.167s;\n     -moz-animation-duration: 0.167s;\n      -ms-animation-duration: 0.167s;\n       -o-animation-duration: 0.167s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes scaleDown98 {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  to {\n    transform: scale3d(0.98, 0.98, 1);\n  }\n}\n\n.ms-u-fadeIn400 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeIn;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeIn;\n          animation-fill-mode: both;\n}\n\n.ms-u-fadeIn100 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeIn;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeIn;\n          animation-fill-mode: both;\n          animation-duration: 0.167s;\n}\n\n.ms-u-fadeIn200 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeIn;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeIn;\n          animation-fill-mode: both;\n          animation-duration: 0.267s;\n}\n\n.ms-u-fadeIn500 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeIn;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeIn;\n          animation-fill-mode: both;\n          animation-duration: 0.467s;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.ms-u-fadeOut400 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeOut;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeOut;\n          animation-fill-mode: both;\n}\n\n.ms-u-fadeOut100 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeOut;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeOut;\n          animation-fill-mode: both;\n          animation-duration: 0.1s;\n}\n\n.ms-u-fadeOut200 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeOut;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeOut;\n          animation-fill-mode: both;\n          animation-duration: 0.167s;\n}\n\n.ms-u-fadeOut500 {\n  -webkit-animation-duration: 0.367s;\n  -webkit-animation-name: fadeOut;\n  -webkit-animation-fill-mode: both;\n          animation-duration: 0.367s;\n          animation-name: fadeOut;\n          animation-fill-mode: both;\n          animation-duration: 0.467s;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.ms-u-rotate90deg {\n  animation-name: rotate90;\n  -webkit-animation-duration: 0.1s;\n     -moz-animation-duration: 0.1s;\n      -ms-animation-duration: 0.1s;\n       -o-animation-duration: 0.1s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes rotate90 {\n  from {\n    transform: rotateZ(0deg);\n  }\n\n  to {\n    transform: rotateZ(90deg);\n  }\n}\n\n.ms-u-rotateN90deg {\n  animation-name: rotateN90;\n  -webkit-animation-duration: 0.1s;\n     -moz-animation-duration: 0.1s;\n      -ms-animation-duration: 0.1s;\n       -o-animation-duration: 0.1s;\n  animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);\n  animation-fill-mode: both;\n}\n\n@keyframes rotateN90 {\n  from {\n    transform: rotateZ(90deg);\n  }\n\n  to {\n    transform: rotateZ(0deg);\n  }\n}\n\n.ms-u-expandCollapse400 {\n  transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9);\n}\n\n.ms-u-expandCollapse200 {\n  transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9);\n}\n\n.ms-u-expandCollapse100 {\n  transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9);\n}\n\n.ms-u-delay100 {\n  animation-delay: 0.167s;\n}\n\n.ms-u-delay200 {\n  animation-delay: 0.267s;\n}\n\n@media (max-width: 479px) {\n  .ms-u-hiddenSm,\n  .ms-u-hiddenMdDown,\n  .ms-u-hiddenLgDown,\n  .ms-u-hiddenXlDown,\n  .ms-u-hiddenXxlDown {\n    display: none !important;\n  }\n}\n\n@media (min-width: 480px) and (max-width: 639px) {\n  .ms-u-hiddenMd,\n  .ms-u-hiddenMdUp,\n  .ms-u-hiddenMdDown,\n  .ms-u-hiddenLgDown,\n  .ms-u-hiddenXlDown,\n  .ms-u-hiddenXxlDown {\n    display: none !important;\n  }\n}\n\n@media (min-width: 640px) and (max-width: 1023px) {\n  .ms-u-hiddenMdUp,\n  .ms-u-hiddenLg,\n  .ms-u-hiddenLgUp,\n  .ms-u-hiddenLgDown,\n  .ms-u-hiddenXlDown,\n  .ms-u-hiddenXxlDown {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1024px) and (max-width: 1365px) {\n  .ms-u-hiddenMdUp,\n  .ms-u-hiddenLgUp,\n  .ms-u-hiddenXl,\n  .ms-u-hiddenXlUp,\n  .ms-u-hiddenXlDown,\n  .ms-u-hiddenXxlDown {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1366px) and (max-width: 1919px) {\n  .ms-u-hiddenMdUp,\n  .ms-u-hiddenLgUp,\n  .ms-u-hiddenXlUp,\n  .ms-u-hiddenXxl,\n  .ms-u-hiddenXxlUp,\n  .ms-u-hiddenXxlDown {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-hiddenMdUp,\n  .ms-u-hiddenLgUp,\n  .ms-u-hiddenXlUp,\n  .ms-u-hiddenXxlUp,\n  .ms-u-hiddenXxxl {\n    display: none !important;\n  }\n}\n\n.ms-u-sm12 {\n  width: 100%;\n}\n\n.ms-u-sm11 {\n  width: 91.66666666666666%;\n}\n\n.ms-u-sm10 {\n  width: 83.33333333333334%;\n}\n\n.ms-u-sm9 {\n  width: 75%;\n}\n\n.ms-u-sm8 {\n  width: 66.66666666666666%;\n}\n\n.ms-u-sm7 {\n  width: 58.333333333333336%;\n}\n\n.ms-u-sm6 {\n  width: 50%;\n}\n\n.ms-u-sm5 {\n  width: 41.66666666666667%;\n}\n\n.ms-u-sm4 {\n  width: 33.33333333333333%;\n}\n\n.ms-u-sm3 {\n  width: 25%;\n}\n\n.ms-u-sm2 {\n  width: 16.666666666666664%;\n}\n\n.ms-u-sm1 {\n  width: 8.333333333333332%;\n}\n\n.ms-u-smPull12 {\n  right: 100%;\n}\n\n.ms-u-smPull11 {\n  right: 91.66666666666666%;\n}\n\n.ms-u-smPull10 {\n  right: 83.33333333333334%;\n}\n\n.ms-u-smPull9 {\n  right: 75%;\n}\n\n.ms-u-smPull8 {\n  right: 66.66666666666666%;\n}\n\n.ms-u-smPull7 {\n  right: 58.333333333333336%;\n}\n\n.ms-u-smPull6 {\n  right: 50%;\n}\n\n.ms-u-smPull5 {\n  right: 41.66666666666667%;\n}\n\n.ms-u-smPull4 {\n  right: 33.33333333333333%;\n}\n\n.ms-u-smPull3 {\n  right: 25%;\n}\n\n.ms-u-smPull2 {\n  right: 16.666666666666664%;\n}\n\n.ms-u-smPull1 {\n  right: 8.333333333333332%;\n}\n\n.ms-u-smPull0 {\n  right: auto;\n}\n\n.ms-u-smPush12 {\n  left: 100%;\n}\n\n.ms-u-smPush11 {\n  left: 91.66666666666666%;\n}\n\n.ms-u-smPush10 {\n  left: 83.33333333333334%;\n}\n\n.ms-u-smPush9 {\n  left: 75%;\n}\n\n.ms-u-smPush8 {\n  left: 66.66666666666666%;\n}\n\n.ms-u-smPush7 {\n  left: 58.333333333333336%;\n}\n\n.ms-u-smPush6 {\n  left: 50%;\n}\n\n.ms-u-smPush5 {\n  left: 41.66666666666667%;\n}\n\n.ms-u-smPush4 {\n  left: 33.33333333333333%;\n}\n\n.ms-u-smPush3 {\n  left: 25%;\n}\n\n.ms-u-smPush2 {\n  left: 16.666666666666664%;\n}\n\n.ms-u-smPush1 {\n  left: 8.333333333333332%;\n}\n\n.ms-u-smPush0 {\n  left: auto;\n}\n\n.ms-u-smOffset11 {\n  margin-left: 91.66666666666666%;\n}\n\n.ms-u-smOffset10 {\n  margin-left: 83.33333333333334%;\n}\n\n.ms-u-smOffset9 {\n  margin-left: 75%;\n}\n\n.ms-u-smOffset8 {\n  margin-left: 66.66666666666666%;\n}\n\n.ms-u-smOffset7 {\n  margin-left: 58.333333333333336%;\n}\n\n.ms-u-smOffset6 {\n  margin-left: 50%;\n}\n\n.ms-u-smOffset5 {\n  margin-left: 41.66666666666667%;\n}\n\n.ms-u-smOffset4 {\n  margin-left: 33.33333333333333%;\n}\n\n.ms-u-smOffset3 {\n  margin-left: 25%;\n}\n\n.ms-u-smOffset2 {\n  margin-left: 16.666666666666664%;\n}\n\n.ms-u-smOffset1 {\n  margin-left: 8.333333333333332%;\n}\n\n.ms-u-smOffset0 {\n  margin-left: 0;\n}\n\n@media (min-width: 480px) {\n  .ms-u-md12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md11 {\n    width: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md10 {\n    width: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md9 {\n    width: 75%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md8 {\n    width: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md7 {\n    width: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md6 {\n    width: 50%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md5 {\n    width: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md4 {\n    width: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md3 {\n    width: 25%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md2 {\n    width: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-md1 {\n    width: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull12 {\n    right: 100%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull11 {\n    right: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull10 {\n    right: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull9 {\n    right: 75%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull8 {\n    right: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull7 {\n    right: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull6 {\n    right: 50%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull5 {\n    right: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull4 {\n    right: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull3 {\n    right: 25%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull2 {\n    right: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull1 {\n    right: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPull0 {\n    right: auto;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush12 {\n    left: 100%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush11 {\n    left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush10 {\n    left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush9 {\n    left: 75%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush8 {\n    left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush7 {\n    left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush6 {\n    left: 50%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush5 {\n    left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush4 {\n    left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush3 {\n    left: 25%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush2 {\n    left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush1 {\n    left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdPush0 {\n    left: auto;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset11 {\n    margin-left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset10 {\n    margin-left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset9 {\n    margin-left: 75%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset8 {\n    margin-left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset7 {\n    margin-left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset6 {\n    margin-left: 50%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset5 {\n    margin-left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset4 {\n    margin-left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset3 {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset2 {\n    margin-left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset1 {\n    margin-left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 480px) {\n  .ms-u-mdOffset0 {\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg11 {\n    width: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg10 {\n    width: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg9 {\n    width: 75%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg8 {\n    width: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg7 {\n    width: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg6 {\n    width: 50%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg5 {\n    width: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg4 {\n    width: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg3 {\n    width: 25%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg2 {\n    width: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lg1 {\n    width: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull12 {\n    right: 100%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull11 {\n    right: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull10 {\n    right: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull9 {\n    right: 75%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull8 {\n    right: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull7 {\n    right: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull6 {\n    right: 50%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull5 {\n    right: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull4 {\n    right: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull3 {\n    right: 25%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull2 {\n    right: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull1 {\n    right: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPull0 {\n    right: auto;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush12 {\n    left: 100%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush11 {\n    left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush10 {\n    left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush9 {\n    left: 75%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush8 {\n    left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush7 {\n    left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush6 {\n    left: 50%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush5 {\n    left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush4 {\n    left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush3 {\n    left: 25%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush2 {\n    left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush1 {\n    left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgPush0 {\n    left: auto;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset11 {\n    margin-left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset10 {\n    margin-left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset9 {\n    margin-left: 75%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset8 {\n    margin-left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset7 {\n    margin-left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset6 {\n    margin-left: 50%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset5 {\n    margin-left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset4 {\n    margin-left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset3 {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset2 {\n    margin-left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset1 {\n    margin-left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 640px) {\n  .ms-u-lgOffset0 {\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl11 {\n    width: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl10 {\n    width: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl9 {\n    width: 75%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl8 {\n    width: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl7 {\n    width: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl6 {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl5 {\n    width: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl4 {\n    width: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl3 {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl2 {\n    width: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xl1 {\n    width: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull12 {\n    right: 100%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull11 {\n    right: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull10 {\n    right: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull9 {\n    right: 75%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull8 {\n    right: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull7 {\n    right: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull6 {\n    right: 50%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull5 {\n    right: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull4 {\n    right: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull3 {\n    right: 25%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull2 {\n    right: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull1 {\n    right: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPull0 {\n    right: auto;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush12 {\n    left: 100%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush11 {\n    left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush10 {\n    left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush9 {\n    left: 75%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush8 {\n    left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush7 {\n    left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush6 {\n    left: 50%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush5 {\n    left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush4 {\n    left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush3 {\n    left: 25%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush2 {\n    left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush1 {\n    left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlPush0 {\n    left: auto;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset11 {\n    margin-left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset10 {\n    margin-left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset9 {\n    margin-left: 75%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset8 {\n    margin-left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset7 {\n    margin-left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset6 {\n    margin-left: 50%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset5 {\n    margin-left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset4 {\n    margin-left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset3 {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset2 {\n    margin-left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset1 {\n    margin-left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ms-u-xlOffset0 {\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl11 {\n    width: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl10 {\n    width: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl9 {\n    width: 75%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl8 {\n    width: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl7 {\n    width: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl6 {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl5 {\n    width: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl4 {\n    width: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl3 {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl2 {\n    width: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxl1 {\n    width: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull12 {\n    right: 100%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull11 {\n    right: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull10 {\n    right: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull9 {\n    right: 75%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull8 {\n    right: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull7 {\n    right: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull6 {\n    right: 50%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull5 {\n    right: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull4 {\n    right: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull3 {\n    right: 25%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull2 {\n    right: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull1 {\n    right: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPull0 {\n    right: auto;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush12 {\n    left: 100%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush11 {\n    left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush10 {\n    left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush9 {\n    left: 75%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush8 {\n    left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush7 {\n    left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush6 {\n    left: 50%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush5 {\n    left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush4 {\n    left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush3 {\n    left: 25%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush2 {\n    left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush1 {\n    left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlPush0 {\n    left: auto;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset11 {\n    margin-left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset10 {\n    margin-left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset9 {\n    margin-left: 75%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset8 {\n    margin-left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset7 {\n    margin-left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset6 {\n    margin-left: 50%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset5 {\n    margin-left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset4 {\n    margin-left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset3 {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset2 {\n    margin-left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset1 {\n    margin-left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1366px) {\n  .ms-u-xxlOffset0 {\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl11 {\n    width: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl10 {\n    width: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl9 {\n    width: 75%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl8 {\n    width: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl7 {\n    width: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl6 {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl5 {\n    width: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl4 {\n    width: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl3 {\n    width: 25%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl2 {\n    width: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxl1 {\n    width: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull12 {\n    right: 100%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull11 {\n    right: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull10 {\n    right: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull9 {\n    right: 75%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull8 {\n    right: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull7 {\n    right: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull6 {\n    right: 50%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull5 {\n    right: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull4 {\n    right: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull3 {\n    right: 25%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull2 {\n    right: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull1 {\n    right: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPull0 {\n    right: auto;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush12 {\n    left: 100%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush11 {\n    left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush10 {\n    left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush9 {\n    left: 75%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush8 {\n    left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush7 {\n    left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush6 {\n    left: 50%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush5 {\n    left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush4 {\n    left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush3 {\n    left: 25%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush2 {\n    left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush1 {\n    left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlPush0 {\n    left: auto;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset11 {\n    margin-left: 91.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset10 {\n    margin-left: 83.33333333333334%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset9 {\n    margin-left: 75%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset8 {\n    margin-left: 66.66666666666666%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset7 {\n    margin-left: 58.333333333333336%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset6 {\n    margin-left: 50%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset5 {\n    margin-left: 41.66666666666667%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset4 {\n    margin-left: 33.33333333333333%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset3 {\n    margin-left: 25%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset2 {\n    margin-left: 16.666666666666664%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset1 {\n    margin-left: 8.333333333333332%;\n  }\n}\n\n@media (min-width: 1920px) {\n  .ms-u-xxxlOffset0 {\n    margin-left: 0;\n  }\n}\n\n.ms-Grid {\n  box-sizing: border-box;\n  *zoom: 1;\n  padding: 0 8px;\n}\n\n.ms-Grid::before,\n.ms-Grid::after {\n  display: table;\n  content: '';\n  line-height: 0;\n}\n\n.ms-Grid::after {\n  clear: both;\n}\n\n.ms-Grid-row {\n  margin: 0 -8px;\n  box-sizing: border-box;\n  *zoom: 1;\n}\n\n.ms-Grid-row::before,\n.ms-Grid-row::after {\n  display: table;\n  content: '';\n  line-height: 0;\n}\n\n.ms-Grid-row::after {\n  clear: both;\n}\n\n.ms-Grid-col {\n  position: relative;\n  min-height: 1px;\n  padding-left: 8px;\n  padding-right: 8px;\n  box-sizing: border-box;\n  float: left;\n}\n\n.ms-Grid-col .ms-Grid {\n  padding: 0;\n}\n\n.ms-Fabric {\n  color: #333333;\n}\n", ""]);
	
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

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(46)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */\r\n/**\n * Office UI Fabric Core 5.0.1\n * The front-end framework for building experiences for Office 365.\n **/\n.ms-u-borderBox,.ms-u-borderBox:after,.ms-u-borderBox:before{box-sizing:border-box}.ms-u-borderBase{border:1px solid}.ms-u-clearfix{*zoom:1}.ms-u-clearfix:after,.ms-u-clearfix:before{display:table;content:'';line-height:0}.ms-u-clearfix:after{clear:both}.ms-u-normalize{box-sizing:border-box;margin:0;padding:0;box-shadow:none}.ms-u-textAlignLeft{text-align:left}.ms-u-textAlignCenter{text-align:center}.ms-u-textAlignRight{text-align:right}.ms-u-screenReaderOnly{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ms-u-textTruncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.ms-u-noWrap{white-space:nowrap}.ms-bgColor-themeDark,.ms-bgColor-themeDark--hover:hover{background-color:#005a9e}.ms-bgColor-themeDarkAlt,.ms-bgColor-themeDarkAlt--hover:hover{background-color:#106ebe}.ms-bgColor-themeDarker,.ms-bgColor-themeDarker--hover:hover{background-color:#004578}.ms-bgColor-themePrimary,.ms-bgColor-themePrimary--hover:hover{background-color:#0078d7}.ms-bgColor-themeSecondary,.ms-bgColor-themeSecondary--hover:hover{background-color:#2488d8}.ms-bgColor-themeTertiary,.ms-bgColor-themeTertiary--hover:hover{background-color:#69afe5}.ms-bgColor-themeLight,.ms-bgColor-themeLight--hover:hover{background-color:#b3d6f2}.ms-bgColor-themeLighter,.ms-bgColor-themeLighter--hover:hover{background-color:#deecf9}.ms-bgColor-themeLighterAlt,.ms-bgColor-themeLighterAlt--hover:hover{background-color:#eff6fc}.ms-bgColor-black,.ms-bgColor-black--hover:hover{background-color:#000}.ms-bgColor-neutralDark,.ms-bgColor-neutralDark--hover:hover{background-color:#212121}.ms-bgColor-neutralPrimary,.ms-bgColor-neutralPrimary--hover:hover{background-color:#333}.ms-bgColor-neutralPrimaryAlt,.ms-bgColor-neutralPrimaryAlt--hover:hover{background-color:#3c3c3c}.ms-bgColor-neutralSecondary,.ms-bgColor-neutralSecondary--hover:hover{background-color:#666}.ms-bgColor-neutralSecondaryAlt,.ms-bgColor-neutralSecondaryAlt--hover:hover{background-color:#767676}.ms-bgColor-neutralTertiary,.ms-bgColor-neutralTertiary--hover:hover{background-color:#a6a6a6}.ms-bgColor-neutralTertiaryAlt,.ms-bgColor-neutralTertiaryAlt--hover:hover{background-color:#c8c8c8}.ms-bgColor-neutralLight,.ms-bgColor-neutralLight--hover:hover{background-color:#eaeaea}.ms-bgColor-neutralLighter,.ms-bgColor-neutralLighter--hover:hover{background-color:#f4f4f4}.ms-bgColor-neutralLighterAlt,.ms-bgColor-neutralLighterAlt--hover:hover{background-color:#f8f8f8}.ms-bgColor-white,.ms-bgColor-white--hover:hover{background-color:#fff}.ms-bgColor-yellow{background-color:#ffb900}.ms-bgColor-yellowLight{background-color:#fff100}.ms-bgColor-orange{background-color:#d83b01}.ms-bgColor-orangeLight{background-color:#ea4300}.ms-bgColor-orangeLighter{background-color:#ff8c00}.ms-bgColor-redDark{background-color:#a80000}.ms-bgColor-red{background-color:#e81123}.ms-bgColor-magentaDark{background-color:#5c005c}.ms-bgColor-magenta{background-color:#b4009e}.ms-bgColor-magentaLight{background-color:#e3008c}.ms-bgColor-purpleDark{background-color:#32145a}.ms-bgColor-purple{background-color:#5c2d91}.ms-bgColor-purpleLight{background-color:#b4a0ff}.ms-bgColor-blueDark{background-color:#002050}.ms-bgColor-blueMid{background-color:#00188f}.ms-bgColor-blue{background-color:#0078d7}.ms-bgColor-blueLight{background-color:#00bcf2}.ms-bgColor-tealDark{background-color:#004b50}.ms-bgColor-teal{background-color:#008272}.ms-bgColor-tealLight{background-color:#00b294}.ms-bgColor-greenDark{background-color:#004b1c}.ms-bgColor-green{background-color:#107c10}.ms-bgColor-greenLight{background-color:#bad80a}.ms-bgColor-info{background-color:#f4f4f4}.ms-bgColor-success{background-color:#dff6dd}.ms-bgColor-severeWarning{background-color:#fed9cc}.ms-bgColor-warning{background-color:#fff4ce}.ms-bgColor-error{background-color:#fde7e9}.ms-borderColor-themeDark,.ms-borderColor-themeDark--hover:hover{border-color:#005a9e}.ms-borderColor-themeDarkAlt,.ms-borderColor-themeDarkAlt--hover:hover{border-color:#106ebe}.ms-borderColor-themeDarker,.ms-borderColor-themeDarker--hover:hover{border-color:#004578}.ms-borderColor-themePrimary,.ms-borderColor-themePrimary--hover:hover{border-color:#0078d7}.ms-borderColor-themeSecondary,.ms-borderColor-themeSecondary--hover:hover{border-color:#2488d8}.ms-borderColor-themeTertiary,.ms-borderColor-themeTertiary--hover:hover{border-color:#69afe5}.ms-borderColor-themeLight,.ms-borderColor-themeLight--hover:hover{border-color:#b3d6f2}.ms-borderColor-themeLighter,.ms-borderColor-themeLighter--hover:hover{border-color:#deecf9}.ms-borderColor-themeLighterAlt,.ms-borderColor-themeLighterAlt--hover:hover{border-color:#eff6fc}.ms-borderColor-black,.ms-borderColor-black--hover:hover{border-color:#000}.ms-borderColor-neutralDark,.ms-borderColor-neutralDark--hover:hover{border-color:#212121}.ms-borderColor-neutralPrimary,.ms-borderColor-neutralPrimary--hover:hover{border-color:#333}.ms-borderColor-neutralPrimaryAlt,.ms-borderColor-neutralPrimaryAlt--hover:hover{border-color:#3c3c3c}.ms-borderColor-neutralSecondary,.ms-borderColor-neutralSecondary--hover:hover{border-color:#666}.ms-borderColor-neutralSecondaryAlt,.ms-borderColor-neutralSecondaryAlt--hover:hover{border-color:#767676}.ms-borderColor-neutralTertiary,.ms-borderColor-neutralTertiary--hover:hover{border-color:#a6a6a6}.ms-borderColor-neutralTertiaryAlt,.ms-borderColor-neutralTertiaryAlt--hover:hover{border-color:#c8c8c8}.ms-borderColor-neutralLight,.ms-borderColor-neutralLight--hover:hover{border-color:#eaeaea}.ms-borderColor-neutralLighter,.ms-borderColor-neutralLighter--hover:hover{border-color:#f4f4f4}.ms-borderColor-neutralLighterAlt,.ms-borderColor-neutralLighterAlt--hover:hover{border-color:#f8f8f8}.ms-borderColor-white,.ms-borderColor-white--hover:hover{border-color:#fff}.ms-borderColor-yellow{border-color:#ffb900}.ms-borderColor-yellowLight{border-color:#fff100}.ms-borderColor-orange{border-color:#d83b01}.ms-borderColor-orangeLight{border-color:#ea4300}.ms-borderColor-orangeLighter{border-color:#ff8c00}.ms-borderColor-redDark{border-color:#a80000}.ms-borderColor-red{border-color:#e81123}.ms-borderColor-magentaDark{border-color:#5c005c}.ms-borderColor-magenta{border-color:#b4009e}.ms-borderColor-magentaLight{border-color:#e3008c}.ms-borderColor-purpleDark{border-color:#32145a}.ms-borderColor-purple{border-color:#5c2d91}.ms-borderColor-purpleLight{border-color:#b4a0ff}.ms-borderColor-blueDark{border-color:#002050}.ms-borderColor-blueMid{border-color:#00188f}.ms-borderColor-blue{border-color:#0078d7}.ms-borderColor-blueLight{border-color:#00bcf2}.ms-borderColor-tealDark{border-color:#004b50}.ms-borderColor-teal{border-color:#008272}.ms-borderColor-tealLight{border-color:#00b294}.ms-borderColor-greenDark{border-color:#004b1c}.ms-borderColor-green{border-color:#107c10}.ms-borderColor-greenLight{border-color:#bad80a}.ms-borderColorTop-themePrimary,.ms-borderColorTop-themePrimary--hover:hover{border-top-color:#0078d7}.ms-font-su{font-size:42px}.ms-font-su,.ms-font-xxl{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:100}.ms-font-xxl{font-size:28px}.ms-font-xl{font-size:21px;font-weight:100}.ms-font-l,.ms-font-xl{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-font-l{font-size:17px;font-weight:300}.ms-font-m-plus{font-size:15px}.ms-font-m,.ms-font-m-plus{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-font-m{font-size:14px}.ms-font-s-plus{font-size:13px}.ms-font-s,.ms-font-s-plus{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400}.ms-font-s{font-size:12px}.ms-font-xs{font-size:11px;font-weight:400}.ms-font-mi,.ms-font-xs{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased}.ms-font-mi{font-size:10px;font-weight:600}.ms-fontWeight-light,.ms-fontWeight-light--hover:hover{font-weight:100}.ms-fontWeight-semilight,.ms-fontWeight-semilight--hover:hover{font-weight:300}.ms-fontWeight-regular,.ms-fontWeight-regular--hover:hover{font-weight:400}.ms-fontWeight-semibold,.ms-fontWeight-semibold--hover:hover{font-weight:600}.ms-fontSize-su{font-size:42px}.ms-fontSize-xxl{font-size:28px}.ms-fontSize-xl{font-size:21px}.ms-fontSize-l{font-size:17px}.ms-fontSize-mPlus{font-size:15px}.ms-fontSize-m{font-size:14px}.ms-fontSize-sPlus{font-size:13px}.ms-fontSize-s{font-size:12px}.ms-fontSize-xs{font-size:11px}.ms-fontSize-mi{font-size:10px}.ms-fontColor-themeDarker,.ms-fontColor-themeDarker--hover:hover{color:#004578}.ms-fontColor-themeDark,.ms-fontColor-themeDark--hover:hover{color:#005a9e}.ms-fontColor-themeDarkAlt,.ms-fontColor-themeDarkAlt--hover:hover{color:#106ebe}.ms-fontColor-themePrimary,.ms-fontColor-themePrimary--hover:hover{color:#0078d7}.ms-fontColor-themeSecondary,.ms-fontColor-themeSecondary--hover:hover{color:#2488d8}.ms-fontColor-themeTertiary,.ms-fontColor-themeTertiary--hover:hover{color:#69afe5}.ms-fontColor-themeLight,.ms-fontColor-themeLight--hover:hover{color:#b3d6f2}.ms-fontColor-themeLighter,.ms-fontColor-themeLighter--hover:hover{color:#deecf9}.ms-fontColor-themeLighterAlt,.ms-fontColor-themeLighterAlt--hover:hover{color:#eff6fc}.ms-fontColor-black,.ms-fontColor-black--hover:hover{color:#000}.ms-fontColor-neutralDark,.ms-fontColor-neutralDark--hover:hover{color:#212121}.ms-fontColor-neutralPrimary,.ms-fontColor-neutralPrimary--hover:hover{color:#333}.ms-fontColor-neutralPrimaryAlt,.ms-fontColor-neutralPrimaryAlt--hover:hover{color:#3c3c3c}.ms-fontColor-neutralSecondary,.ms-fontColor-neutralSecondary--hover:hover{color:#666}.ms-fontColor-neutralSecondaryAlt,.ms-fontColor-neutralSecondaryAlt--hover:hover{color:#767676}.ms-fontColor-neutralTertiary,.ms-fontColor-neutralTertiary--hover:hover{color:#a6a6a6}.ms-fontColor-neutralTertiaryAlt,.ms-fontColor-neutralTertiaryAlt--hover:hover{color:#c8c8c8}.ms-fontColor-neutralLight,.ms-fontColor-neutralLight--hover:hover{color:#eaeaea}.ms-fontColor-neutralLighter,.ms-fontColor-neutralLighter--hover:hover{color:#f4f4f4}.ms-fontColor-neutralLighterAlt,.ms-fontColor-neutralLighterAlt--hover:hover{color:#f8f8f8}.ms-fontColor-white,.ms-fontColor-white--hover:hover{color:#fff}.ms-fontColor-yellow,.ms-fontColor-yellow--hover:hover{color:#ffb900}.ms-fontColor-yellowLight,.ms-fontColor-yellowLight--hover:hover{color:#fff100}.ms-fontColor-orange,.ms-fontColor-orange--hover:hover{color:#d83b01}.ms-fontColor-orangeLight,.ms-fontColor-orangeLight--hover:hover{color:#ea4300}.ms-fontColor-orangeLighter,.ms-fontColor-orangeLighter--hover:hover{color:#ff8c00}.ms-fontColor-redDark,.ms-fontColor-redDark--hover:hover{color:#a80000}.ms-fontColor-red,.ms-fontColor-red--hover:hover{color:#e81123}.ms-fontColor-magentaDark,.ms-fontColor-magentaDark--hover:hover{color:#5c005c}.ms-fontColor-magenta,.ms-fontColor-magenta--hover:hover{color:#b4009e}.ms-fontColor-magentaLight,.ms-fontColor-magentaLight--hover:hover{color:#e3008c}.ms-fontColor-purpleDark,.ms-fontColor-purpleDark--hover:hover{color:#32145a}.ms-fontColor-purple,.ms-fontColor-purple--hover:hover{color:#5c2d91}.ms-fontColor-purpleLight,.ms-fontColor-purpleLight--hover:hover{color:#b4a0ff}.ms-fontColor-blueDark,.ms-fontColor-blueDark--hover:hover{color:#002050}.ms-fontColor-blueMid,.ms-fontColor-blueMid--hover:hover{color:#00188f}.ms-fontColor-blue,.ms-fontColor-blue--hover:hover{color:#0078d7}.ms-fontColor-blueLight,.ms-fontColor-blueLight--hover:hover{color:#00bcf2}.ms-fontColor-tealDark,.ms-fontColor-tealDark--hover:hover{color:#004b50}.ms-fontColor-teal,.ms-fontColor-teal--hover:hover{color:#008272}.ms-fontColor-tealLight,.ms-fontColor-tealLight--hover:hover{color:#00b294}.ms-fontColor-greenDark,.ms-fontColor-greenDark--hover:hover{color:#004b1c}.ms-fontColor-green,.ms-fontColor-green--hover:hover{color:#107c10}.ms-fontColor-greenLight,.ms-fontColor-greenLight--hover:hover{color:#bad80a}.ms-fontColor-info,.ms-fontColor-info--hover:hover{color:#767676}.ms-fontColor-success,.ms-fontColor-success--hover:hover{color:#107c10}.ms-fontColor-alert,.ms-fontColor-alert--hover:hover{color:#d83b01}.ms-fontColor-warning,.ms-fontColor-warning--hover:hover{color:#767676}.ms-fontColor-severeWarning,.ms-fontColor-severeWarning--hover:hover{color:#d83b01}.ms-fontColor-error,.ms-fontColor-error--hover:hover{color:#a80000}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Light'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.ttf) format('truetype');font-weight:100;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Semibold'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.ttf) format('truetype');font-weight:600;font-style:normal}@font-face{font-family:Segoe UI WestEuropean;src:local('Segoe UI Semilight'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2) format('woff2'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.ttf) format('truetype');font-weight:200;font-style:normal}@font-face{font-family:FabricMDL2Icons;src:url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.woff) format('woff'),url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabricmdl2icons.ttf) format('truetype');font-weight:400;font-style:normal}.ms-Icon{-moz-osx-font-smoothing:grayscale;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;speak:none}.ms-Icon,.ms-Icon--circle{-webkit-font-smoothing:antialiased;display:inline-block}.ms-Icon--circle{position:relative;font-size:1rem;width:1em;height:1em;margin:0 .5em 0 0;padding:0;text-align:left}.ms-Icon--circle:after,.ms-Icon--circle:before{line-height:1;font-size:inherit}.ms-Icon--circle:before{display:block;width:100%;height:100%;margin:0;padding:0;vertical-align:top;position:absolute}.ms-Icon--circle:after{content:'\\E000';position:absolute;top:0;left:0;transform:scale(2);transform-origin:50% 50%;z-index:0}.ms-Icon--xs{font-size:10px}.ms-Icon--s{font-size:12px}.ms-Icon--m{font-size:16px}.ms-Icon--l{font-size:20px}.ms-Icon--DecreaseIndentLegacy:before{content:'\\E290'}.ms-Icon--IncreaseIndentLegacy:before{content:'\\E291'}.ms-Icon--GlobalNavButton:before{content:'\\E700'}.ms-Icon--InternetSharing:before{content:'\\E704'}.ms-Icon--Brightness:before{content:'\\E706'}.ms-Icon--MapPin:before{content:'\\E707'}.ms-Icon--Airplane:before{content:'\\E709'}.ms-Icon--Tablet:before{content:'\\E70A'}.ms-Icon--QuickNote:before{content:'\\E70B'}.ms-Icon--ChevronDown:before{content:'\\E70D'}.ms-Icon--ChevronUp:before{content:'\\E70E'}.ms-Icon--Edit:before{content:'\\E70F'}.ms-Icon--Add:before{content:'\\E710'}.ms-Icon--Cancel:before{content:'\\E711'}.ms-Icon--More:before{content:'\\E712'}.ms-Icon--Settings:before{content:'\\E713'}.ms-Icon--Video:before{content:'\\E714'}.ms-Icon--Mail:before{content:'\\E715'}.ms-Icon--People:before{content:'\\E716'}.ms-Icon--Phone:before{content:'\\E717'}.ms-Icon--Pin:before{content:'\\E718'}.ms-Icon--Shop:before{content:'\\E719'}.ms-Icon--Link:before{content:'\\E71B'}.ms-Icon--Filter:before{content:'\\E71C'}.ms-Icon--Zoom:before{content:'\\E71E'}.ms-Icon--ZoomOut:before{content:'\\E71F'}.ms-Icon--Microphone:before{content:'\\E720'}.ms-Icon--Search:before{content:'\\E721'}.ms-Icon--Camera:before{content:'\\E722'}.ms-Icon--Attach:before{content:'\\E723'}.ms-Icon--Send:before{content:'\\E724'}.ms-Icon--FavoriteList:before{content:'\\E728'}.ms-Icon--PageSolid:before{content:'\\E729'}.ms-Icon--Forward:before{content:'\\E72A'}.ms-Icon--Back:before{content:'\\E72B'}.ms-Icon--Refresh:before{content:'\\E72C'}.ms-Icon--Share:before{content:'\\E72D'}.ms-Icon--Lock:before{content:'\\E72E'}.ms-Icon--EMI:before{content:'\\E731'}.ms-Icon--MiniLink:before{content:'\\E732'}.ms-Icon--Blocked:before{content:'\\E733'}.ms-Icon--FavoriteStar:before{content:'\\E734'}.ms-Icon--FavoriteStarFill:before{content:'\\E735'}.ms-Icon--ReadingMode:before{content:'\\E736'}.ms-Icon--Remove:before{content:'\\E738'}.ms-Icon--Checkbox:before{content:'\\E739'}.ms-Icon--CheckboxComposite:before{content:'\\E73A'}.ms-Icon--CheckboxIndeterminate:before{content:'\\E73C'}.ms-Icon--CheckMark:before{content:'\\E73E'}.ms-Icon--BackToWindow:before{content:'\\E73F'}.ms-Icon--FullScreen:before{content:'\\E740'}.ms-Icon--Print:before{content:'\\E749'}.ms-Icon--Up:before{content:'\\E74A'}.ms-Icon--Down:before{content:'\\E74B'}.ms-Icon--Delete:before{content:'\\E74D'}.ms-Icon--Save:before{content:'\\E74E'}.ms-Icon--Sad:before{content:'\\E757'}.ms-Icon--SIPMove:before{content:'\\E759'}.ms-Icon--EraseTool:before{content:'\\E75C'}.ms-Icon--GripperTool:before{content:'\\E75E'}.ms-Icon--Dialpad:before{content:'\\E75F'}.ms-Icon--PageLeft:before{content:'\\E760'}.ms-Icon--PageRight:before{content:'\\E761'}.ms-Icon--MultiSelect:before{content:'\\E762'}.ms-Icon--Play:before{content:'\\E768'}.ms-Icon--Pause:before{content:'\\E769'}.ms-Icon--ChevronLeft:before{content:'\\E76B'}.ms-Icon--ChevronRight:before{content:'\\E76C'}.ms-Icon--Emoji2:before{content:'\\E76E'}.ms-Icon--System:before{content:'\\E770'}.ms-Icon--Globe:before{content:'\\E774'}.ms-Icon--ContactInfo:before{content:'\\E779'}.ms-Icon--Unpin:before{content:'\\E77A'}.ms-Icon--Contact:before{content:'\\E77B'}.ms-Icon--Memo:before{content:'\\E77C'}.ms-Icon--WindowsLogo:before{content:'\\E782'}.ms-Icon--Error:before{content:'\\E783'}.ms-Icon--Unlock:before{content:'\\E785'}.ms-Icon--Calendar:before{content:'\\E787'}.ms-Icon--Megaphone:before{content:'\\E789'}.ms-Icon--AutoEnhanceOn:before{content:'\\E78D'}.ms-Icon--AutoEnhanceOff:before{content:'\\E78E'}.ms-Icon--Color:before{content:'\\E790'}.ms-Icon--SaveAs:before{content:'\\E792'}.ms-Icon--Light:before{content:'\\E793'}.ms-Icon--Filters:before{content:'\\E795'}.ms-Icon--Contrast:before{content:'\\E7A1'}.ms-Icon--Redo:before{content:'\\E7A6'}.ms-Icon--Undo:before{content:'\\E7A7'}.ms-Icon--PhotoCollection:before{content:'\\E7AA'}.ms-Icon--Album:before{content:'\\E7AB'}.ms-Icon--Rotate:before{content:'\\E7AD'}.ms-Icon--PanoIndicator:before{content:'\\E7B0'}.ms-Icon--ThumbnailView:before{content:'\\E7B6'}.ms-Icon--Package:before{content:'\\E7B8'}.ms-Icon--Warning:before{content:'\\E7BA'}.ms-Icon--Financial:before{content:'\\E7BB'}.ms-Icon--ShoppingCart:before{content:'\\E7BF'}.ms-Icon--Train:before{content:'\\E7C0'}.ms-Icon--Flag:before{content:'\\E7C1'}.ms-Icon--Move:before{content:'\\E7C2'}.ms-Icon--Page:before{content:'\\E7C3'}.ms-Icon--TouchPointer:before{content:'\\E7C9'}.ms-Icon--Merge:before{content:'\\E7D5'}.ms-Icon--TurnRight:before{content:'\\E7DB'}.ms-Icon--Ferry:before{content:'\\E7E3'}.ms-Icon--Tab:before{content:'\\E7E9'}.ms-Icon--Admin:before{content:'\\E7EF'}.ms-Icon--TVMonitor:before{content:'\\E7F4'}.ms-Icon--Speakers:before{content:'\\E7F5'}.ms-Icon--Nav2DMapView:before{content:'\\E800'}.ms-Icon--Car:before{content:'\\E804'}.ms-Icon--EatDrink:before{content:'\\E807'}.ms-Icon--LocationCircle:before{content:'\\E80E'}.ms-Icon--Home:before{content:'\\E80F'}.ms-Icon--SwitcherStartEnd:before{content:'\\E810'}.ms-Icon--IncidentTriangle:before{content:'\\E814'}.ms-Icon--Touch:before{content:'\\E815'}.ms-Icon--MapDirections:before{content:'\\E816'}.ms-Icon--History:before{content:'\\E81C'}.ms-Icon--Location:before{content:'\\E81D'}.ms-Icon--Work:before{content:'\\E821'}.ms-Icon--Recent:before{content:'\\E823'}.ms-Icon--Hotel:before{content:'\\E824'}.ms-Icon--LocationDot:before{content:'\\E827'}.ms-Icon--News:before{content:'\\E900'}.ms-Icon--Chat:before{content:'\\E901'}.ms-Icon--Group:before{content:'\\E902'}.ms-Icon--View:before{content:'\\E890'}.ms-Icon--Clear:before{content:'\\E894'}.ms-Icon--Sync:before{content:'\\E895'}.ms-Icon--Download:before{content:'\\E896'}.ms-Icon--Help:before{content:'\\E897'}.ms-Icon--Upload:before{content:'\\E898'}.ms-Icon--Emoji:before{content:'\\E899'}.ms-Icon--MailForward:before{content:'\\E89C'}.ms-Icon--ClosePane:before{content:'\\E89F'}.ms-Icon--OpenPane:before{content:'\\E8A0'}.ms-Icon--PreviewLink:before{content:'\\E8A1'}.ms-Icon--ZoomIn:before{content:'\\E8A3'}.ms-Icon--Bookmarks:before{content:'\\E8A4'}.ms-Icon--Document:before{content:'\\E8A5'}.ms-Icon--ProtectedDocument:before{content:'\\E8A6'}.ms-Icon--OpenInNewWindow:before{content:'\\E8A7'}.ms-Icon--MailFill:before{content:'\\E8A8'}.ms-Icon--ViewAll:before{content:'\\E8A9'}.ms-Icon--Switch:before{content:'\\E8AB'}.ms-Icon--Rename:before{content:'\\E8AC'}.ms-Icon--Folder:before{content:'\\E8B7'}.ms-Icon--Picture:before{content:'\\E8B9'}.ms-Icon--ShowResults:before{content:'\\E8BC'}.ms-Icon--Message:before{content:'\\E8BD'}.ms-Icon--CalendarDay:before{content:'\\E8BF'}.ms-Icon--CalendarWeek:before{content:'\\E8C0'}.ms-Icon--MailReplyAll:before{content:'\\E8C2'}.ms-Icon--Read:before{content:'\\E8C3'}.ms-Icon--PaymentCard:before{content:'\\E8C7'}.ms-Icon--Copy:before{content:'\\E8C8'}.ms-Icon--Important:before{content:'\\E8C9'}.ms-Icon--MailReply:before{content:'\\E8CA'}.ms-Icon--Sort:before{content:'\\E8CB'}.ms-Icon--GotoToday:before{content:'\\E8D1'}.ms-Icon--Font:before{content:'\\E8D2'}.ms-Icon--FontColor:before{content:'\\E8D3'}.ms-Icon--FolderFill:before{content:'\\E8D5'}.ms-Icon--Permissions:before{content:'\\E8D7'}.ms-Icon--DisableUpdates:before{content:'\\E8D8'}.ms-Icon--Unfavorite:before{content:'\\E8D9'}.ms-Icon--Italic:before{content:'\\E8DB'}.ms-Icon--Underline:before{content:'\\E8DC'}.ms-Icon--Bold:before{content:'\\E8DD'}.ms-Icon--MoveToFolder:before{content:'\\E8DE'}.ms-Icon--Dislike:before{content:'\\E8E0'}.ms-Icon--Like:before{content:'\\E8E1'}.ms-Icon--AlignRight:before{content:'\\E8E2'}.ms-Icon--AlignCenter:before{content:'\\E8E3'}.ms-Icon--AlignLeft:before{content:'\\E8E4'}.ms-Icon--OpenFile:before{content:'\\E8E5'}.ms-Icon--FontDecrease:before{content:'\\E8E7'}.ms-Icon--FontIncrease:before{content:'\\E8E8'}.ms-Icon--FontSize:before{content:'\\E8E9'}.ms-Icon--CellPhone:before{content:'\\E8EA'}.ms-Icon--Tag:before{content:'\\E8EC'}.ms-Icon--Library:before{content:'\\E8F1'}.ms-Icon--PostUpdate:before{content:'\\E8F3'}.ms-Icon--NewFolder:before{content:'\\E8F4'}.ms-Icon--CalendarReply:before{content:'\\E8F5'}.ms-Icon--UnsyncFolder:before{content:'\\E8F6'}.ms-Icon--SyncFolder:before{content:'\\E8F7'}.ms-Icon--BlockContact:before{content:'\\E8F8'}.ms-Icon--AddFriend:before{content:'\\E8FA'}.ms-Icon--BulletedList:before{content:'\\E8FD'}.ms-Icon--Preview:before{content:'\\E8FF'}.ms-Icon--DockLeft:before{content:'\\E90C'}.ms-Icon--DockRight:before{content:'\\E90D'}.ms-Icon--Repair:before{content:'\\E90F'}.ms-Icon--Accounts:before{content:'\\E910'}.ms-Icon--RadioBullet:before{content:'\\E915'}.ms-Icon--Stopwatch:before{content:'\\E916'}.ms-Icon--Clock:before{content:'\\E917'}.ms-Icon--WorldClock:before{content:'\\E918'}.ms-Icon--AlarmClock:before{content:'\\E919'}.ms-Icon--Hospital:before{content:'\\E91D'}.ms-Icon--Timer:before{content:'\\E91E'}.ms-Icon--FullCircleMask:before{content:'\\E91F'}.ms-Icon--LocationFill:before{content:'\\E920'}.ms-Icon--ChromeMinimize:before{content:'\\E921'}.ms-Icon--Annotation:before{content:'\\E924'}.ms-Icon--ChromeClose:before{content:'\\E8BB'}.ms-Icon--Accept:before{content:'\\E8FB'}.ms-Icon--Fingerprint:before{content:'\\E928'}.ms-Icon--Handwriting:before{content:'\\E929'}.ms-Icon--StackIndicator:before{content:'\\E7FF'}.ms-Icon--Completed:before{content:'\\E930'}.ms-Icon--Label:before{content:'\\E932'}.ms-Icon--FlickDown:before{content:'\\E935'}.ms-Icon--FlickUp:before{content:'\\E936'}.ms-Icon--FlickLeft:before{content:'\\E937'}.ms-Icon--FlickRight:before{content:'\\E938'}.ms-Icon--MusicInCollection:before{content:'\\E940'}.ms-Icon--OneDrive:before{content:'\\E941'}.ms-Icon--CompassNW:before{content:'\\E942'}.ms-Icon--Code:before{content:'\\E943'}.ms-Icon--LightningBolt:before{content:'\\E945'}.ms-Icon--Info:before{content:'\\E946'}.ms-Icon--CalculatorAddition:before{content:'\\E948'}.ms-Icon--CalculatorSubtract:before{content:'\\E949'}.ms-Icon--PrintfaxPrinterFile:before{content:'\\E956'}.ms-Icon--Health:before{content:'\\E95E'}.ms-Icon--ChevronUpSmall:before{content:'\\E96D'}.ms-Icon--ChevronDownSmall:before{content:'\\E96E'}.ms-Icon--ChevronLeftSmall:before{content:'\\E96F'}.ms-Icon--ChevronRightSmall:before{content:'\\E970'}.ms-Icon--ChevronUpMed:before{content:'\\E971'}.ms-Icon--ChevronDownMed:before{content:'\\E972'}.ms-Icon--ChevronLeftMed:before{content:'\\E973'}.ms-Icon--ChevronRightMed:before{content:'\\E974'}.ms-Icon--Dictionary:before{content:'\\E82D'}.ms-Icon--ChromeBack:before{content:'\\E830'}.ms-Icon--PC1:before{content:'\\E977'}.ms-Icon--PresenceChickletVideo:before{content:'\\E979'}.ms-Icon--Reply:before{content:'\\E97A'}.ms-Icon--DoubleChevronLeftMed:before{content:'\\E991'}.ms-Icon--Volume0:before{content:'\\E992'}.ms-Icon--Volume1:before{content:'\\E993'}.ms-Icon--Volume2:before{content:'\\E994'}.ms-Icon--Volume3:before{content:'\\E995'}.ms-Icon--CaretHollow:before{content:'\\E817'}.ms-Icon--CaretSolid:before{content:'\\E818'}.ms-Icon--FolderOpen:before{content:'\\E838'}.ms-Icon--Pinned:before{content:'\\E840'}.ms-Icon--PinnedFill:before{content:'\\E842'}.ms-Icon--Chart:before{content:'\\E999'}.ms-Icon--BidiLtr:before{content:'\\E9AA'}.ms-Icon--BidiRtl:before{content:'\\E9AB'}.ms-Icon--RevToggleKey:before{content:'\\E845'}.ms-Icon--RightDoubleQuote:before{content:'\\E9B1'}.ms-Icon--Sunny:before{content:'\\E9BD'}.ms-Icon--CloudWeather:before{content:'\\E9BE'}.ms-Icon--Cloudy:before{content:'\\E9BF'}.ms-Icon--PartlyCloudyDay:before{content:'\\E9C0'}.ms-Icon--PartlyCloudyNight:before{content:'\\E9C1'}.ms-Icon--ClearNight:before{content:'\\E9C2'}.ms-Icon--RainShowersDay:before{content:'\\E9C3'}.ms-Icon--Rain:before{content:'\\E9C4'}.ms-Icon--Thunderstorms:before{content:'\\E9C6'}.ms-Icon--RainSnow:before{content:'\\E9C7'}.ms-Icon--BlowingSnow:before{content:'\\E9C9'}.ms-Icon--Frigid:before{content:'\\E9CA'}.ms-Icon--Fog:before{content:'\\E9CB'}.ms-Icon--Squalls:before{content:'\\E9CC'}.ms-Icon--Duststorm:before{content:'\\E9CD'}.ms-Icon--Precipitation:before{content:'\\E9CF'}.ms-Icon--Ringer:before{content:'\\EA8F'}.ms-Icon--PDF:before{content:'\\EA90'}.ms-Icon--SortLines:before{content:'\\E9D0'}.ms-Icon--Ribbon:before{content:'\\E9D1'}.ms-Icon--CheckList:before{content:'\\E9D5'}.ms-Icon--Generate:before{content:'\\E9DA'}.ms-Icon--Equalizer:before{content:'\\E9E9'}.ms-Icon--BarChartHorizontal:before{content:'\\E9EB'}.ms-Icon--Freezing:before{content:'\\E9EF'}.ms-Icon--SnowShowerDay:before{content:'\\E9FD'}.ms-Icon--HailDay:before{content:'\\EA00'}.ms-Icon--WorkFlow:before{content:'\\EA01'}.ms-Icon--StoreLogoMed:before{content:'\\EA04'}.ms-Icon--RainShowersNight:before{content:'\\EA0F'}.ms-Icon--SnowShowerNight:before{content:'\\EA11'}.ms-Icon--HailNight:before{content:'\\EA13'}.ms-Icon--Info2:before{content:'\\EA1F'}.ms-Icon--StoreLogo:before{content:'\\EA96'}.ms-Icon--MultiSelectMirrored:before{content:'\\EA98'}.ms-Icon--Broom:before{content:'\\EA99'}.ms-Icon--MusicInCollectionFill:before{content:'\\EA36'}.ms-Icon--List:before{content:'\\EA37'}.ms-Icon--Asterisk:before{content:'\\EA38'}.ms-Icon--ErrorBadge:before{content:'\\EA39'}.ms-Icon--CircleRing:before{content:'\\EA3A'}.ms-Icon--CircleFill:before{content:'\\EA3B'}.ms-Icon--BookmarksMirrored:before{content:'\\EA41'}.ms-Icon--BulletedListMirrored:before{content:'\\EA42'}.ms-Icon--CaretHollowMirrored:before{content:'\\EA45'}.ms-Icon--CaretSolidMirrored:before{content:'\\EA46'}.ms-Icon--ChromeBackMirrored:before{content:'\\EA47'}.ms-Icon--ClosePaneMirrored:before{content:'\\EA49'}.ms-Icon--DockLeftMirrored:before{content:'\\EA4C'}.ms-Icon--DoubleChevronLeftMedMirrored:before{content:'\\EA4D'}.ms-Icon--HelpMirrored:before{content:'\\EA51'}.ms-Icon--ListMirrored:before{content:'\\EA55'}.ms-Icon--MailForwardMirrored:before{content:'\\EA56'}.ms-Icon--MailReplyMirrored:before{content:'\\EA57'}.ms-Icon--MailReplyAllMirrored:before{content:'\\EA58'}.ms-Icon--OpenPaneMirrored:before{content:'\\EA5B'}.ms-Icon--SendMirrored:before{content:'\\EA63'}.ms-Icon--ShowResultsMirrored:before{content:'\\EA65'}.ms-Icon--ThumbnailViewMirrored:before{content:'\\EA67'}.ms-Icon--Lightbulb:before{content:'\\EA80'}.ms-Icon--StatusTriangle:before{content:'\\EA82'}.ms-Icon--VolumeDisabled:before{content:'\\EA85'}.ms-Icon--Puzzle:before{content:'\\EA86'}.ms-Icon--EmojiNeutral:before{content:'\\EA87'}.ms-Icon--EmojiDisappointed:before{content:'\\EA88'}.ms-Icon--HomeSolid:before{content:'\\EA8A'}.ms-Icon--Cocktails:before{content:'\\EA9D'}.ms-Icon--Articles:before{content:'\\EAC1'}.ms-Icon--Cycling:before{content:'\\EAC7'}.ms-Icon--DietPlanNotebook:before{content:'\\EAC8'}.ms-Icon--Pill:before{content:'\\EACB'}.ms-Icon--Running:before{content:'\\EADA'}.ms-Icon--Weights:before{content:'\\EADB'}.ms-Icon--BarChart4:before{content:'\\EAE7'}.ms-Icon--CirclePlus:before{content:'\\EAEE'}.ms-Icon--Coffee:before{content:'\\EAEF'}.ms-Icon--Cotton:before{content:'\\EAF3'}.ms-Icon--Market:before{content:'\\EAFC'}.ms-Icon--Money:before{content:'\\EAFD'}.ms-Icon--PieDouble:before{content:'\\EB04'}.ms-Icon--RemoveFilter:before{content:'\\EB08'}.ms-Icon--StockDown:before{content:'\\EB0F'}.ms-Icon--StockUp:before{content:'\\EB11'}.ms-Icon--Cricket:before{content:'\\EB1E'}.ms-Icon--Golf:before{content:'\\EB1F'}.ms-Icon--Baseball:before{content:'\\EB20'}.ms-Icon--Soccer:before{content:'\\EB21'}.ms-Icon--MoreSports:before{content:'\\EB22'}.ms-Icon--AutoRacing:before{content:'\\EB24'}.ms-Icon--CollegeHoops:before{content:'\\EB25'}.ms-Icon--CollegeFootball:before{content:'\\EB26'}.ms-Icon--ProFootball:before{content:'\\EB27'}.ms-Icon--ProHockey:before{content:'\\EB28'}.ms-Icon--Rugby:before{content:'\\EB2D'}.ms-Icon--Tennis:before{content:'\\EB33'}.ms-Icon--Arrivals:before{content:'\\EB34'}.ms-Icon--Design:before{content:'\\EB3C'}.ms-Icon--Website:before{content:'\\EB41'}.ms-Icon--Drop:before{content:'\\EB42'}.ms-Icon--Snow:before{content:'\\EB46'}.ms-Icon--BusSolid:before{content:'\\EB47'}.ms-Icon--FerrySolid:before{content:'\\EB48'}.ms-Icon--TrainSolid:before{content:'\\EB4D'}.ms-Icon--Heart:before{content:'\\EB51'}.ms-Icon--HeartFill:before{content:'\\EB52'}.ms-Icon--Ticket:before{content:'\\EB54'}.ms-Icon--AzureLogo:before{content:'\\EB6A'}.ms-Icon--BingLogo:before{content:'\\EB6B'}.ms-Icon--MSNLogo:before{content:'\\EB6C'}.ms-Icon--OutlookLogo:before{content:'\\EB6D'}.ms-Icon--OfficeLogo:before{content:'\\EB6E'}.ms-Icon--SkypeLogo:before{content:'\\EB6F'}.ms-Icon--Door:before{content:'\\EB75'}.ms-Icon--EditMirrored:before{content:'\\EB7E'}.ms-Icon--GiftCard:before{content:'\\EB8E'}.ms-Icon--DoubleBookmark:before{content:'\\EB8F'}.ms-Icon--StatusErrorFull:before{content:'\\EB90'}.ms-Icon--Certificate:before{content:'\\EB95'}.ms-Icon--Photo2:before{content:'\\EB9F'}.ms-Icon--CloudDownload:before{content:'\\EBD3'}.ms-Icon--WindDirection:before{content:'\\EBE6'}.ms-Icon--Family:before{content:'\\EBDA'}.ms-Icon--CSS:before{content:'\\EBEF'}.ms-Icon--JS:before{content:'\\EBF0'}.ms-Icon--ReminderGroup:before{content:'\\EBF8'}.ms-Icon--Section:before{content:'\\EC0C'}.ms-Icon--OneNoteLogo:before{content:'\\EC0D'}.ms-Icon--ToggleFilled:before{content:'\\EC11'}.ms-Icon--ToggleBorder:before{content:'\\EC12'}.ms-Icon--SliderThumb:before{content:'\\EC13'}.ms-Icon--ToggleThumb:before{content:'\\EC14'}.ms-Icon--Documentation:before{content:'\\EC17'}.ms-Icon--Badge:before{content:'\\EC1B'}.ms-Icon--Giftbox:before{content:'\\EC1F'}.ms-Icon--ExcelLogo:before{content:'\\EC28'}.ms-Icon--WordLogo:before{content:'\\EC29'}.ms-Icon--PowerPointLogo:before{content:'\\EC2A'}.ms-Icon--Cafe:before{content:'\\EC32'}.ms-Icon--SpeedHigh:before{content:'\\EC4A'}.ms-Icon--MusicNote:before{content:'\\EC4F'}.ms-Icon--EdgeLogo:before{content:'\\EC60'}.ms-Icon--CompletedSolid:before{content:'\\EC61'}.ms-Icon--AlbumRemove:before{content:'\\EC62'}.ms-Icon--MessageFill:before{content:'\\EC70'}.ms-Icon--TabletSelected:before{content:'\\EC74'}.ms-Icon--MobileSelected:before{content:'\\EC75'}.ms-Icon--LaptopSelected:before{content:'\\EC76'}.ms-Icon--TVMonitorSelected:before{content:'\\EC77'}.ms-Icon--DeveloperTools:before{content:'\\EC7A'}.ms-Icon--InsertTextBox:before{content:'\\EC7D'}.ms-Icon--LowerBrightness:before{content:'\\EC8A'}.ms-Icon--CloudUpload:before{content:'\\EC8E'}.ms-Icon--DateTime:before{content:'\\EC92'}.ms-Icon--Event:before{content:'\\ECA3'}.ms-Icon--Cake:before{content:'\\ECA4'}.ms-Icon--Tiles:before{content:'\\ECA5'}.ms-Icon--Org:before{content:'\\ECA6'}.ms-Icon--PartyLeader:before{content:'\\ECA7'}.ms-Icon--DRM:before{content:'\\ECA8'}.ms-Icon--CloudAdd:before{content:'\\ECA9'}.ms-Icon--AppIconDefault:before{content:'\\ECAA'}.ms-Icon--Photo2Add:before{content:'\\ECAB'}.ms-Icon--Photo2Remove:before{content:'\\ECAC'}.ms-Icon--POI:before{content:'\\ECAF'}.ms-Icon--FacebookLogo:before{content:'\\ECB3'}.ms-Icon--AddTo:before{content:'\\ECC8'}.ms-Icon--RadioBtnOn:before{content:'\\ECCB'}.ms-Icon--Embed:before{content:'\\ECCE'}.ms-Icon--VideoSolid:before{content:'\\EA0C'}.ms-Icon--Teamwork:before{content:'\\EA12'}.ms-Icon--PeopleAdd:before{content:'\\EA15'}.ms-Icon--Glasses:before{content:'\\EA16'}.ms-Icon--DateTime2:before{content:'\\EA17'}.ms-Icon--Shield:before{content:'\\EA18'}.ms-Icon--Header1:before{content:'\\EA19'}.ms-Icon--PageAdd:before{content:'\\EA1A'}.ms-Icon--NumberedList:before{content:'\\EA1C'}.ms-Icon--PowerBILogo:before{content:'\\EA1E'}.ms-Icon--Product:before{content:'\\ECDC'}.ms-Icon--Blocked2:before{content:'\\ECE4'}.ms-Icon--FangBody:before{content:'\\ECEB'}.ms-Icon--Glimmer:before{content:'\\ECF4'}.ms-Icon--ChatInviteFriend:before{content:'\\ECFE'}.ms-Icon--SharepointLogo:before{content:'\\ED18'}.ms-Icon--YammerLogo:before{content:'\\ED19'}.ms-Icon--ReturnToSession:before{content:'\\ED24'}.ms-Icon--OpenFolderHorizontal:before{content:'\\ED25'}.ms-Icon--CalendarMirrored:before{content:'\\ED28'}.ms-Icon--SwayLogo:before{content:'\\ED29'}.ms-Icon--OutOfOffice:before{content:'\\ED34'}.ms-Icon--Trophy:before{content:'\\ED3F'}.ms-Icon--ReopenPages:before{content:'\\ED50'}.ms-Icon--AADLogo:before{content:'\\ED68'}.ms-Icon--AccessLogo:before{content:'\\ED69'}.ms-Icon--AdminALogo:before{content:'\\ED6A'}.ms-Icon--AdminCLogo:before{content:'\\ED6B'}.ms-Icon--AdminDLogo:before{content:'\\ED6C'}.ms-Icon--AdminELogo:before{content:'\\ED6D'}.ms-Icon--AdminLLogo:before{content:'\\ED6E'}.ms-Icon--AdminMLogo:before{content:'\\ED6F'}.ms-Icon--AdminOLogo:before{content:'\\ED70'}.ms-Icon--AdminPLogo:before{content:'\\ED71'}.ms-Icon--AdminSLogo:before{content:'\\ED72'}.ms-Icon--AdminYLogo:before{content:'\\ED73'}.ms-Icon--AlchemyLogo:before{content:'\\ED74'}.ms-Icon--BoxLogo:before{content:'\\ED75'}.ms-Icon--DelveLogo:before{content:'\\ED76'}.ms-Icon--DropboxLogo:before{content:'\\ED77'}.ms-Icon--ExchangeLogo:before{content:'\\ED78'}.ms-Icon--LyncLogo:before{content:'\\ED79'}.ms-Icon--OfficeVideoLogo:before{content:'\\ED7A'}.ms-Icon--ParatureLogo:before{content:'\\ED7B'}.ms-Icon--SocialListeningLogo:before{content:'\\ED7C'}.ms-Icon--VisioLogo:before{content:'\\ED7D'}.ms-Icon--Balloons:before{content:'\\ED7E'}.ms-Icon--Cat:before{content:'\\ED7F'}.ms-Icon--MailAlert:before{content:'\\ED80'}.ms-Icon--MailCheck:before{content:'\\ED81'}.ms-Icon--MailLowImportance:before{content:'\\ED82'}.ms-Icon--MailPause:before{content:'\\ED83'}.ms-Icon--MailRepeat:before{content:'\\ED84'}.ms-Icon--SecurityGroup:before{content:'\\ED85'}.ms-Icon--Table:before{content:'\\ED86'}.ms-Icon--VoicemailForward:before{content:'\\ED87'}.ms-Icon--VoicemailReply:before{content:'\\ED88'}.ms-Icon--Waffle:before{content:'\\ED89'}.ms-Icon--RemoveEvent:before{content:'\\ED8A'}.ms-Icon--EventInfo:before{content:'\\ED8B'}.ms-Icon--ForwardEvent:before{content:'\\ED8C'}.ms-Icon--WipePhone:before{content:'\\ED8D'}.ms-Icon--AddOnlineMeeting:before{content:'\\ED8E'}.ms-Icon--JoinOnlineMeeting:before{content:'\\ED8F'}.ms-Icon--RemoveLink:before{content:'\\ED90'}.ms-Icon--PeopleBlock:before{content:'\\ED91'}.ms-Icon--PeopleRepeat:before{content:'\\ED92'}.ms-Icon--PeopleAlert:before{content:'\\ED93'}.ms-Icon--PeoplePause:before{content:'\\ED94'}.ms-Icon--TransferCall:before{content:'\\ED95'}.ms-Icon--AddPhone:before{content:'\\ED96'}.ms-Icon--UnknownCall:before{content:'\\ED97'}.ms-Icon--NoteReply:before{content:'\\ED98'}.ms-Icon--NoteForward:before{content:'\\ED99'}.ms-Icon--NotePinned:before{content:'\\ED9A'}.ms-Icon--RemoveOccurrence:before{content:'\\ED9B'}.ms-Icon--Timeline:before{content:'\\ED9C'}.ms-Icon--EditNote:before{content:'\\ED9D'}.ms-Icon--CircleHalfFull:before{content:'\\ED9E'}.ms-Icon--Room:before{content:'\\ED9F'}.ms-Icon--Unsubscribe:before{content:'\\EDA0'}.ms-Icon--Subscribe:before{content:'\\EDA1'}.ms-Icon--RecurringTask:before{content:'\\EDB2'}.ms-Icon--TaskManager:before{content:'\\EDB7'}.ms-Icon--TaskManagerMirrored:before{content:'\\EDB8'}.ms-Icon--Combine:before{content:'\\EDBB'}.ms-Icon--Split:before{content:'\\EDBC'}.ms-Icon--DoubleChevronUp:before{content:'\\EDBD'}.ms-Icon--DoubleChevronLeft:before{content:'\\EDBE'}.ms-Icon--DoubleChevronRight:before{content:'\\EDBF'}.ms-Icon--Ascending:before{content:'\\EDC0'}.ms-Icon--Descending:before{content:'\\EDC1'}.ms-Icon--TextBox:before{content:'\\EDC2'}.ms-Icon--TextField:before{content:'\\EDC3'}.ms-Icon--NumberField:before{content:'\\EDC4'}.ms-Icon--Dropdown:before{content:'\\EDC5'}.ms-Icon--BookingsLogo:before{content:'\\EDC7'}.ms-Icon--ClassNotebookLogo:before{content:'\\EDC8'}.ms-Icon--CollabsDBLogo:before{content:'\\EDC9'}.ms-Icon--DelveAnalyticsLogo:before{content:'\\EDCA'}.ms-Icon--DocsLogo:before{content:'\\EDCB'}.ms-Icon--Dynamics365Logo:before,.ms-Icon--DynamicsCRMLogo:before{content:'\\EDCC'}.ms-Icon--DynamicSMBLogo:before{content:'\\EDCD'}.ms-Icon--OfficeAssistantLogo:before{content:'\\EDCE'}.ms-Icon--OfficeStoreLogo:before{content:'\\EDCF'}.ms-Icon--OneNoteEduLogo:before{content:'\\EDD0'}.ms-Icon--Planner:before{content:'\\EDD1'}.ms-Icon--PowerApps:before{content:'\\EDD2'}.ms-Icon--Suitcase:before{content:'\\EDD3'}.ms-Icon--ProjectLogo:before{content:'\\EDD4'}.ms-Icon--CaretLeft8:before{content:'\\EDD5'}.ms-Icon--CaretRight8:before{content:'\\EDD6'}.ms-Icon--CaretUp8:before{content:'\\EDD7'}.ms-Icon--CaretDown8:before{content:'\\EDD8'}.ms-Icon--CaretLeftSolid8:before{content:'\\EDD9'}.ms-Icon--CaretRightSolid8:before,.ms-Icon--CarotRightSolid8:before{content:'\\EDDA'}.ms-Icon--CaretUpSolid8:before{content:'\\EDDB'}.ms-Icon--CaretDownSolid8:before{content:'\\EDDC'}.ms-Icon--ClearFormatting:before{content:'\\EDDD'}.ms-Icon--Superscript:before{content:'\\EDDE'}.ms-Icon--Subscript:before{content:'\\EDDF'}.ms-Icon--Strikethrough:before{content:'\\EDE0'}.ms-Icon--SingleBookmark:before{content:'\\EDFF'}.ms-Icon--DoubleChevronDown:before{content:'\\EE04'}.ms-Icon--ReplyAll:before{content:'\\EE0A'}.ms-Icon--GoogleDriveLogo:before{content:'\\EE0B'}.ms-Icon--Questionnaire:before{content:'\\EE19'}.ms-Icon--ReplyMirrored:before{content:'\\EE35'}.ms-Icon--ReplyAllMirrored:before{content:'\\EE36'}.ms-Icon--AddGroup:before{content:'\\EE3D'}.ms-Icon--QuestionnaireMirrored:before{content:'\\EE4B'}.ms-Icon--TemporaryUser:before{content:'\\EE58'}.ms-Icon--GroupedDescending:before{content:'\\EE66'}.ms-Icon--GroupedAscending:before{content:'\\EE67'}.ms-Icon--SortUp:before{content:'\\EE68'}.ms-Icon--SortDown:before{content:'\\EE69'}.ms-Icon--AwayStatus:before{content:'\\EE6A'}.ms-Icon--SyncToPC:before{content:'\\EE6E'}.ms-Icon--AustralianRules:before{content:'\\EE70'}.ms-Icon--DateTimeMirrored:before{content:'\\EE93'}.ms-Icon--DoubleChevronUp12:before{content:'\\EE96'}.ms-Icon--DoubleChevronDown12:before{content:'\\EE97'}.ms-Icon--DoubleChevronLeft12:before{content:'\\EE98'}.ms-Icon--DoubleChevronRight12:before{content:'\\EE99'}.ms-Icon--CalendarAgenda:before{content:'\\EE9A'}.ms-Icon--AddEvent:before{content:'\\EEB5'}.ms-Icon--AssetLibrary:before{content:'\\EEB6'}.ms-Icon--DataConnectionLibrary:before{content:'\\EEB7'}.ms-Icon--DocLibrary:before{content:'\\EEB8'}.ms-Icon--FormLibrary:before{content:'\\EEB9'}.ms-Icon--FormLibraryMirrored:before{content:'\\EEBA'}.ms-Icon--ReportLibrary:before{content:'\\EEBB'}.ms-Icon--ReportLibraryMirrored:before{content:'\\EEBC'}.ms-Icon--ContactCard:before{content:'\\EEBD'}.ms-Icon--CustomList:before{content:'\\EEBE'}.ms-Icon--CustomListMirrored:before{content:'\\EEBF'}.ms-Icon--IssueTracking:before{content:'\\EEC0'}.ms-Icon--IssueTrackingMirrored:before{content:'\\EEC1'}.ms-Icon--PictureLibrary:before{content:'\\EEC2'}.ms-Icon--AppForOfficeLogo:before{content:'\\EEC7'}.ms-Icon--OfflineOneDriveParachute:before{content:'\\EEC8'}.ms-Icon--OfflineOneDriveParachuteDisabled:before{content:'\\EEC9'}.ms-Icon--LargeGrid:before{content:'\\EECB'}.ms-Icon--TriangleSolidUp12:before{content:'\\EECC'}.ms-Icon--TriangleSolidDown12:before{content:'\\EECD'}.ms-Icon--TriangleSolidLeft12:before{content:'\\EECE'}.ms-Icon--TriangleSolidRight12:before{content:'\\EECF'}.ms-Icon--TriangleUp12:before{content:'\\EED0'}.ms-Icon--TriangleDown12:before{content:'\\EED1'}.ms-Icon--TriangleLeft12:before{content:'\\EED2'}.ms-Icon--TriangleRight12:before{content:'\\EED3'}.ms-Icon--ArrowUpRight8:before{content:'\\EED4'}.ms-Icon--ArrowDownRight8:before{content:'\\EED5'}.ms-Icon--DocumentSet:before{content:'\\EED6'}.ms-Icon--DelveAnalytics:before{content:'\\EEEE'}.ms-Icon--ArrowUpRightMirrored8:before{content:'\\EEEF'}.ms-Icon--ArrowDownRightMirrored8:before{content:'\\EEF0'}.ms-Icon--OneDriveAdd:before{content:'\\EF32'}.ms-Icon--Header2:before{content:'\\EF36'}.ms-Icon--Header3:before{content:'\\EF37'}.ms-Icon--Header4:before{content:'\\EF38'}.ms-Icon--MarketDown:before{content:'\\EF42'}.ms-Icon--CalendarWorkWeek:before{content:'\\EF51'}.ms-Icon--SidePanel:before{content:'\\EF52'}.ms-Icon--GlobeFavorite:before{content:'\\EF53'}.ms-Icon--CaretTopLeftSolid8:before{content:'\\EF54'}.ms-Icon--CaretTopRightSolid8:before{content:'\\EF55'}.ms-Icon--ViewAll2:before{content:'\\EF56'}.ms-Icon--DocumentReply:before{content:'\\EF57'}.ms-Icon--PlayerSettings:before{content:'\\EF58'}.ms-Icon--ReceiptForward:before{content:'\\EF59'}.ms-Icon--ReceiptReply:before{content:'\\EF5A'}.ms-Icon--ReceiptCheck:before{content:'\\EF5B'}.ms-Icon--Fax:before{content:'\\EF5C'}.ms-Icon--RecurringEvent:before{content:'\\EF5D'}.ms-Icon--ReplyAlt:before{content:'\\EF5E'}.ms-Icon--ReplyAllAlt:before{content:'\\EF5F'}.ms-Icon--EditStyle:before{content:'\\EF60'}.ms-Icon--EditMail:before{content:'\\EF61'}.ms-Icon--Lifesaver:before{content:'\\EF62'}.ms-Icon--LifesaverLock:before{content:'\\EF63'}.ms-Icon--InboxCheck:before{content:'\\EF64'}.ms-Icon--FolderSearch:before{content:'\\EF65'}.ms-Icon--CollapseMenu:before{content:'\\EF66'}.ms-Icon--ExpandMenu:before{content:'\\EF67'}.ms-Icon--Boards:before{content:'\\EF68'}.ms-Icon--SunAdd:before{content:'\\EF69'}.ms-Icon--SunQuestionMark:before{content:'\\EF6A'}.ms-Icon--LandscapeOrientation:before{content:'\\EF6B'}.ms-Icon--DocumentSearch:before{content:'\\EF6C'}.ms-Icon--PublicCalendar:before{content:'\\EF6D'}.ms-Icon--PublicContactCard:before{content:'\\EF6E'}.ms-Icon--PublicEmail:before{content:'\\EF6F'}.ms-Icon--PublicFolder:before{content:'\\EF70'}.ms-Icon--WordDocument:before{content:'\\EF71'}.ms-Icon--PowerPointDocument:before{content:'\\EF72'}.ms-Icon--ExcelDocument:before{content:'\\EF73'}.ms-Icon--GroupedList:before{content:'\\EF74'}.ms-Icon--ClassroomLogo:before{content:'\\EF75'}.ms-Icon--Sections:before{content:'\\EF76'}.ms-Icon--EditPhoto:before{content:'\\EF77'}.ms-Icon--Starburst:before{content:'\\EF78'}.ms-Icon--ShareiOS:before{content:'\\EF79'}.ms-Icon--AirTickets:before{content:'\\EF7A'}.ms-Icon--PencilReply:before{content:'\\EF7B'}.ms-Icon--Tiles2:before{content:'\\EF7C'}.ms-Icon--SkypeCircleCheck:before{content:'\\EF7D'}.ms-Icon--SkypeCircleClock:before{content:'\\EF7E'}.ms-Icon--SkypeCircleMinus:before{content:'\\EF7F'}.ms-Icon--SkypeCheck:before{content:'\\EF80'}.ms-Icon--SkypeClock:before{content:'\\EF81'}.ms-Icon--SkypeMinus:before{content:'\\EF82'}.ms-Icon--SkypeMessage:before{content:'\\EF83'}.ms-Icon--ClosedCaption:before{content:'\\EF84'}.ms-Icon--ATPLogo:before{content:'\\EF85'}.ms-Icon--OfficeFormLogo:before{content:'\\EF86'}.ms-Icon--RecycleBin:before{content:'\\EF87'}.ms-Icon--EmptyRecycleBin:before{content:'\\EF88'}.ms-Icon--Hide2:before{content:'\\EF89'}.ms-Icon--iOSAppStoreLogo:before{content:'\\EF8A'}.ms-Icon--AndroidLogo:before{content:'\\EF8B'}.ms-Icon--Breadcrumb:before{content:'\\EF8C'}.ms-Icon--ClearFilter:before{content:'\\EF8F'}.ms-Icon--Flow:before{content:'\\EF90'}.ms-Icon--PageCheckedOut:before{content:'\\F02C'}.ms-Icon--SetAction:before{content:'\\F071'}.ms-Icon--PowerAppsLogo:before{content:'\\F091'}.ms-Icon--PowerApps2Logo:before{content:'\\F092'}.ms-Icon--FabricAssetLibrary:before{content:'\\F09C'}.ms-Icon--FabricDataConnectionLibrary:before{content:'\\F09D'}.ms-Icon--FabricDocLibrary:before{content:'\\F09E'}.ms-Icon--FabricFormLibrary:before{content:'\\F09F'}.ms-Icon--FabricFormLibraryMirrored:before{content:'\\F0A0'}.ms-Icon--FabricReportLibrary:before{content:'\\F0A1'}.ms-Icon--FabricReportLibraryMirrored:before{content:'\\F0A2'}.ms-Icon--FabricPublicFolder:before{content:'\\F0A3'}.ms-Icon--FabricFolderSearch:before{content:'\\F0A4'}.ms-Icon--FabricMovetoFolder:before{content:'\\F0A5'}.ms-Icon--FabricUnsyncFolder:before{content:'\\F0A6'}.ms-Icon--FabricSyncFolder:before{content:'\\F0A7'}.ms-Icon--FabricOpenFolderHorizontal:before{content:'\\F0A8'}.ms-Icon--FabricFolder:before{content:'\\F0A9'}.ms-Icon--FabricFolderFill:before{content:'\\F0AA'}.ms-Icon--FabricNewFolder:before{content:'\\F0AB'}.ms-Icon--FabricPictureLibrary:before{content:'\\F0AC'}.ms-Icon--AddFavorite:before{content:'\\F0C8'}.ms-Icon--AddFavoriteFill:before{content:'\\F0C9'}.ms-Icon--BufferTimeBefore:before{content:'\\F0CF'}.ms-Icon--BufferTimeAfter:before{content:'\\F0D0'}.ms-Icon--BufferTimeBoth:before{content:'\\F0D1'}.ms-Icon--PageCheckedin:before{content:'\\F104'}.ms-Icon--CaretBottomLeftSolid8:before{content:'\\F121'}.ms-Icon--CaretBottomRightSolid8:before{content:'\\F122'}.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1.png)}.ms-BrandIcon--Icon16{background-size:100% 100%;width:16px;height:16px}.ms-BrandIcon--Icon48{background-size:100% 100%;width:48px;height:48px}.ms-BrandIcon--Icon96{background-size:100% 100%;width:96px;height:96px}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min-resolution:144dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x1_5.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x1_5.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x1_5.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x1_5.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x1_5.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x1_5.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x1_5.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x1_5.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x1_5.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x1_5.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x1_5.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x1_5.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x1_5.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x1_5.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x1_5.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x1_5.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x1_5.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x1_5.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x1_5.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x1_5.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x1_5.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x1_5.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x1_5.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x1_5.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x1_5.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x1_5.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x1_5.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x1_5.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x1_5.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x1_5.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x1_5.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x1_5.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x1_5.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x1_5.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x1_5.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x1_5.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x1_5.png)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x2.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x2.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x2.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x2.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x2.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x2.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x2.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x2.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x2.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x2.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x2.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x2.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x2.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x2.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x2.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x2.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x2.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x2.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x2.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x2.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x2.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x2.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x2.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x2.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x2.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x2.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x2.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x2.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x2.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x2.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x2.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x2.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x2.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x2.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x2.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x2.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x2.png)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min-resolution:288dpi){.ms-BrandIcon--access.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_16x3.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_48x3.png)}.ms-BrandIcon--access.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/access_96x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_16x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_48x3.png)}.ms-BrandIcon--excel.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/excel_96x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_16x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_48x3.png)}.ms-BrandIcon--infopath.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/infopath_96x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_16x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_48x3.png)}.ms-BrandIcon--office.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/office_96x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_16x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_48x3.png)}.ms-BrandIcon--onedrive.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onedrive_96x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_16x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_48x3.png)}.ms-BrandIcon--onenote.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/onenote_96x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_16x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_48x3.png)}.ms-BrandIcon--outlook.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/outlook_96x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_16x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_48x3.png)}.ms-BrandIcon--powerpoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/powerpoint_96x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_16x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_48x3.png)}.ms-BrandIcon--project.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/project_96x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_16x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_48x3.png)}.ms-BrandIcon--sharepoint.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/sharepoint_96x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_16x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_48x3.png)}.ms-BrandIcon--visio.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/visio_96x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_16x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_48x3.png)}.ms-BrandIcon--word.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/product/png/word_96x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_16x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_48x3.png)}.ms-BrandIcon--accdb.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/accdb_96x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_16x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_48x3.png)}.ms-BrandIcon--csv.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/csv_96x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_16x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_48x3.png)}.ms-BrandIcon--docx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/docx_96x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_16x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_48x3.png)}.ms-BrandIcon--dotx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/dotx_96x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_16x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_48x3.png)}.ms-BrandIcon--mpp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpp_96x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_16x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_48x3.png)}.ms-BrandIcon--mpt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/mpt_96x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_16x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_48x3.png)}.ms-BrandIcon--odp.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odp_96x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_16x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_48x3.png)}.ms-BrandIcon--ods.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ods_96x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_16x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_48x3.png)}.ms-BrandIcon--odt.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/odt_96x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_16x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_48x3.png)}.ms-BrandIcon--one.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/one_96x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_16x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_48x3.png)}.ms-BrandIcon--onepkg.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onepkg_96x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_16x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_48x3.png)}.ms-BrandIcon--onetoc.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/onetoc_96x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_16x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_48x3.png)}.ms-BrandIcon--potx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/potx_96x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_16x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_48x3.png)}.ms-BrandIcon--ppsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/ppsx_96x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_16x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_48x3.png)}.ms-BrandIcon--pptx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pptx_96x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_16x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_48x3.png)}.ms-BrandIcon--pub.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/pub_96x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_16x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_48x3.png)}.ms-BrandIcon--vsdx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vsdx_96x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_16x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_48x3.png)}.ms-BrandIcon--vssx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vssx_96x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_16x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_48x3.png)}.ms-BrandIcon--vstx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/vstx_96x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_16x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_48x3.png)}.ms-BrandIcon--xls.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xls_96x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_16x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_48x3.png)}.ms-BrandIcon--xlsx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xlsx_96x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_16x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_48x3.png)}.ms-BrandIcon--xltx.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xltx_96x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon16{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_16x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon48{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_48x3.png)}.ms-BrandIcon--xsn.ms-BrandIcon--Icon96{background-image:url(https://spoprod-a.akamaihd.net/files/fabric/assets/brand-icons/document/png/xsn_96x3.png)}}.ms-u-slideRightIn10{animation-name:fadeIn,slideRightIn10;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn10{0%{transform:translate3d(-10px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn20{animation-name:fadeIn,slideRightIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn20{0%{transform:translate3d(-20px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn40{animation-name:fadeIn,slideRightIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn40{0%{transform:translate3d(-40px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn10{animation-name:fadeIn,slideLeftIn10;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn10{0%{transform:translate3d(10px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn20{animation-name:fadeIn,slideLeftIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn20{0%{transform:translate3d(20px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn40{animation-name:fadeIn,slideLeftIn40;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeftIn40{0%{transform:translate3d(40px,0,0)}to{transform:translateZ(0)}}.ms-u-slideRightIn400{animation-name:fadeIn,slideRightIn400;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideRightIn400{0%{transform:translate3d(-400px,0,0)}to{transform:translateZ(0)}}.ms-u-slideLeftIn400{animation-name:fadeIn,slideLeft400;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideLeft400{0%{transform:translate3d(400px,0,0)}to{transform:translateZ(0)}}.ms-u-slideUpIn20{animation-name:fadeIn,slideUpIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideUpIn20{0%{transform:translate3d(0,20px,0)}to{transform:translateZ(0)}}.ms-u-slideUpIn10{animation-name:fadeIn,slideUpIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpIn10{0%{transform:translate3d(0,10px,0)}to{transform:translateZ(0)}}.ms-u-slideDownIn20{animation-name:fadeIn,slideDownIn20;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes slideDownIn20{0%{transform:translate3d(0,-20px,0)}to{transform:translateZ(0)}}.ms-u-slideDownIn10{animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownIn10{0%{transform:translate3d(0,-10px,0)}to{transform:translateZ(0)}}.ms-u-slideRightOut40{animation-name:fadeOut,slideRightOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideRightOut40{0%{transform:translateZ(0)}to{transform:translate3d(40px,0,0)}}.ms-u-slideLeftOut40{animation-name:fadeOut,slideLeftOut40;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideLeftOut40{0%{transform:translateZ(0)}to{transform:translate3d(-40px,0,0)}}.ms-u-slideRightOut400{animation-name:fadeOut,slideRightOut400;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideRightOut400{0%{transform:translateZ(0)}to{transform:translate3d(400px,0,0)}}.ms-u-slideLeftOut400{animation-name:fadeOut,slideLeftOut400;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideLeftOut400{0%{transform:translateZ(0)}to{transform:translate3d(-400px,0,0)}}.ms-u-slideUpOut20{animation-name:fadeOut,slideUpOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpOut20{0%{transform:translateZ(0)}to{transform:translate3d(0,-20px,0)}}.ms-u-slideUpOut10{animation-name:fadeOut,slideUpOut10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideUpOut10{0%{transform:translateZ(0)}to{transform:translate3d(0,-10px,0)}}.ms-u-slideDownOut20{animation-name:fadeOut,slideDownOut20;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownOut20{0%{transform:translateZ(0)}to{transform:translate3d(0,20px,0)}}.ms-u-slideDownOut10{animation-name:fadeOut,slideDownOut10;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes slideDownOut10{0%{transform:translateZ(0)}to{transform:translate3d(0,10px,0)}}.ms-u-scaleUpIn100{animation-name:fadeIn,scaleUp100;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleUp100{0%{transform:scale3d(.98,.98,1)}to{transform:scaleX(1)}}.ms-u-scaleDownIn100{animation-name:fadeIn,scaleDown100;-webkit-animation-duration:.367s;-moz-animation-duration:.367s;-ms-animation-duration:.367s;-o-animation-duration:.367s;animation-timing-function:cubic-bezier(.1,.9,.2,1);animation-fill-mode:both}@keyframes scaleDown100{0%{transform:scale3d(1.03,1.03,1)}to{transform:scaleX(1)}}.ms-u-scaleUpOut103{animation-name:fadeOut,scaleUp103;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes scaleUp103{0%{transform:scaleX(1)}to{transform:scale3d(1.03,1.03,1)}}.ms-u-scaleDownOut98{animation-name:fadeOut,scaleDown98;-webkit-animation-duration:.167s;-moz-animation-duration:.167s;-ms-animation-duration:.167s;-o-animation-duration:.167s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes scaleDown98{0%{transform:scaleX(1)}to{transform:scale3d(.98,.98,1)}}.ms-u-fadeIn100,.ms-u-fadeIn400{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both}.ms-u-fadeIn100{animation-duration:.167s}.ms-u-fadeIn200{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both;animation-duration:.267s}.ms-u-fadeIn500{-webkit-animation-duration:.367s;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeIn;animation-fill-mode:both;animation-duration:.467s}@keyframes fadeIn{0%{opacity:0;animation-timing-function:cubic-bezier(.1,.25,.75,.9)}to{opacity:1}}.ms-u-fadeOut100,.ms-u-fadeOut400{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both}.ms-u-fadeOut100{animation-duration:.1s}.ms-u-fadeOut200{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both;animation-duration:.167s}.ms-u-fadeOut500{-webkit-animation-duration:.367s;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:.367s;animation-name:fadeOut;animation-fill-mode:both;animation-duration:.467s}@keyframes fadeOut{0%{opacity:1;animation-timing-function:cubic-bezier(.1,.25,.75,.9)}to{opacity:0}}.ms-u-rotate90deg{animation-name:rotate90;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;-ms-animation-duration:.1s;-o-animation-duration:.1s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes rotate90{0%{transform:rotate(0deg)}to{transform:rotate(90deg)}}.ms-u-rotateN90deg{animation-name:rotateN90;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;-ms-animation-duration:.1s;-o-animation-duration:.1s;animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-fill-mode:both}@keyframes rotateN90{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}.ms-u-expandCollapse400{transition:height .367s cubic-bezier(.1,.25,.75,.9)}.ms-u-expandCollapse200{transition:height .167s cubic-bezier(.1,.25,.75,.9)}.ms-u-expandCollapse100{transition:height .1s cubic-bezier(.1,.25,.75,.9)}.ms-u-delay100{animation-delay:.167s}.ms-u-delay200{animation-delay:.267s}@media (max-width:479px){.ms-u-hiddenLgDown,.ms-u-hiddenMdDown,.ms-u-hiddenSm,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:480px) and (max-width:639px){.ms-u-hiddenLgDown,.ms-u-hiddenMd,.ms-u-hiddenMdDown,.ms-u-hiddenMdUp,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:640px) and (max-width:1023px){.ms-u-hiddenLg,.ms-u-hiddenLgDown,.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlDown,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:1024px) and (max-width:1365px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXl,.ms-u-hiddenXlDown,.ms-u-hiddenXlUp,.ms-u-hiddenXxlDown{display:none!important}}@media (min-width:1366px) and (max-width:1919px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlUp,.ms-u-hiddenXxl,.ms-u-hiddenXxlDown,.ms-u-hiddenXxlUp{display:none!important}}@media (min-width:1920px){.ms-u-hiddenLgUp,.ms-u-hiddenMdUp,.ms-u-hiddenXlUp,.ms-u-hiddenXxlUp,.ms-u-hiddenXxxl{display:none!important}}.ms-u-sm12{width:100%}.ms-u-sm11{width:91.66666666666666%}.ms-u-sm10{width:83.33333333333334%}.ms-u-sm9{width:75%}.ms-u-sm8{width:66.66666666666666%}.ms-u-sm7{width:58.333333333333336%}.ms-u-sm6{width:50%}.ms-u-sm5{width:41.66666666666667%}.ms-u-sm4{width:33.33333333333333%}.ms-u-sm3{width:25%}.ms-u-sm2{width:16.666666666666664%}.ms-u-sm1{width:8.333333333333332%}.ms-u-smPull12{right:100%}.ms-u-smPull11{right:91.66666666666666%}.ms-u-smPull10{right:83.33333333333334%}.ms-u-smPull9{right:75%}.ms-u-smPull8{right:66.66666666666666%}.ms-u-smPull7{right:58.333333333333336%}.ms-u-smPull6{right:50%}.ms-u-smPull5{right:41.66666666666667%}.ms-u-smPull4{right:33.33333333333333%}.ms-u-smPull3{right:25%}.ms-u-smPull2{right:16.666666666666664%}.ms-u-smPull1{right:8.333333333333332%}.ms-u-smPull0{right:auto}.ms-u-smPush12{left:100%}.ms-u-smPush11{left:91.66666666666666%}.ms-u-smPush10{left:83.33333333333334%}.ms-u-smPush9{left:75%}.ms-u-smPush8{left:66.66666666666666%}.ms-u-smPush7{left:58.333333333333336%}.ms-u-smPush6{left:50%}.ms-u-smPush5{left:41.66666666666667%}.ms-u-smPush4{left:33.33333333333333%}.ms-u-smPush3{left:25%}.ms-u-smPush2{left:16.666666666666664%}.ms-u-smPush1{left:8.333333333333332%}.ms-u-smPush0{left:auto}.ms-u-smOffset11{margin-left:91.66666666666666%}.ms-u-smOffset10{margin-left:83.33333333333334%}.ms-u-smOffset9{margin-left:75%}.ms-u-smOffset8{margin-left:66.66666666666666%}.ms-u-smOffset7{margin-left:58.333333333333336%}.ms-u-smOffset6{margin-left:50%}.ms-u-smOffset5{margin-left:41.66666666666667%}.ms-u-smOffset4{margin-left:33.33333333333333%}.ms-u-smOffset3{margin-left:25%}.ms-u-smOffset2{margin-left:16.666666666666664%}.ms-u-smOffset1{margin-left:8.333333333333332%}.ms-u-smOffset0{margin-left:0}@media (min-width:480px){.ms-u-md12{width:100%}}@media (min-width:480px){.ms-u-md11{width:91.66666666666666%}}@media (min-width:480px){.ms-u-md10{width:83.33333333333334%}}@media (min-width:480px){.ms-u-md9{width:75%}}@media (min-width:480px){.ms-u-md8{width:66.66666666666666%}}@media (min-width:480px){.ms-u-md7{width:58.333333333333336%}}@media (min-width:480px){.ms-u-md6{width:50%}}@media (min-width:480px){.ms-u-md5{width:41.66666666666667%}}@media (min-width:480px){.ms-u-md4{width:33.33333333333333%}}@media (min-width:480px){.ms-u-md3{width:25%}}@media (min-width:480px){.ms-u-md2{width:16.666666666666664%}}@media (min-width:480px){.ms-u-md1{width:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPull12{right:100%}}@media (min-width:480px){.ms-u-mdPull11{right:91.66666666666666%}}@media (min-width:480px){.ms-u-mdPull10{right:83.33333333333334%}}@media (min-width:480px){.ms-u-mdPull9{right:75%}}@media (min-width:480px){.ms-u-mdPull8{right:66.66666666666666%}}@media (min-width:480px){.ms-u-mdPull7{right:58.333333333333336%}}@media (min-width:480px){.ms-u-mdPull6{right:50%}}@media (min-width:480px){.ms-u-mdPull5{right:41.66666666666667%}}@media (min-width:480px){.ms-u-mdPull4{right:33.33333333333333%}}@media (min-width:480px){.ms-u-mdPull3{right:25%}}@media (min-width:480px){.ms-u-mdPull2{right:16.666666666666664%}}@media (min-width:480px){.ms-u-mdPull1{right:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPull0{right:auto}}@media (min-width:480px){.ms-u-mdPush12{left:100%}}@media (min-width:480px){.ms-u-mdPush11{left:91.66666666666666%}}@media (min-width:480px){.ms-u-mdPush10{left:83.33333333333334%}}@media (min-width:480px){.ms-u-mdPush9{left:75%}}@media (min-width:480px){.ms-u-mdPush8{left:66.66666666666666%}}@media (min-width:480px){.ms-u-mdPush7{left:58.333333333333336%}}@media (min-width:480px){.ms-u-mdPush6{left:50%}}@media (min-width:480px){.ms-u-mdPush5{left:41.66666666666667%}}@media (min-width:480px){.ms-u-mdPush4{left:33.33333333333333%}}@media (min-width:480px){.ms-u-mdPush3{left:25%}}@media (min-width:480px){.ms-u-mdPush2{left:16.666666666666664%}}@media (min-width:480px){.ms-u-mdPush1{left:8.333333333333332%}}@media (min-width:480px){.ms-u-mdPush0{left:auto}}@media (min-width:480px){.ms-u-mdOffset11{margin-left:91.66666666666666%}}@media (min-width:480px){.ms-u-mdOffset10{margin-left:83.33333333333334%}}@media (min-width:480px){.ms-u-mdOffset9{margin-left:75%}}@media (min-width:480px){.ms-u-mdOffset8{margin-left:66.66666666666666%}}@media (min-width:480px){.ms-u-mdOffset7{margin-left:58.333333333333336%}}@media (min-width:480px){.ms-u-mdOffset6{margin-left:50%}}@media (min-width:480px){.ms-u-mdOffset5{margin-left:41.66666666666667%}}@media (min-width:480px){.ms-u-mdOffset4{margin-left:33.33333333333333%}}@media (min-width:480px){.ms-u-mdOffset3{margin-left:25%}}@media (min-width:480px){.ms-u-mdOffset2{margin-left:16.666666666666664%}}@media (min-width:480px){.ms-u-mdOffset1{margin-left:8.333333333333332%}}@media (min-width:480px){.ms-u-mdOffset0{margin-left:0}}@media (min-width:640px){.ms-u-lg12{width:100%}}@media (min-width:640px){.ms-u-lg11{width:91.66666666666666%}}@media (min-width:640px){.ms-u-lg10{width:83.33333333333334%}}@media (min-width:640px){.ms-u-lg9{width:75%}}@media (min-width:640px){.ms-u-lg8{width:66.66666666666666%}}@media (min-width:640px){.ms-u-lg7{width:58.333333333333336%}}@media (min-width:640px){.ms-u-lg6{width:50%}}@media (min-width:640px){.ms-u-lg5{width:41.66666666666667%}}@media (min-width:640px){.ms-u-lg4{width:33.33333333333333%}}@media (min-width:640px){.ms-u-lg3{width:25%}}@media (min-width:640px){.ms-u-lg2{width:16.666666666666664%}}@media (min-width:640px){.ms-u-lg1{width:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPull12{right:100%}}@media (min-width:640px){.ms-u-lgPull11{right:91.66666666666666%}}@media (min-width:640px){.ms-u-lgPull10{right:83.33333333333334%}}@media (min-width:640px){.ms-u-lgPull9{right:75%}}@media (min-width:640px){.ms-u-lgPull8{right:66.66666666666666%}}@media (min-width:640px){.ms-u-lgPull7{right:58.333333333333336%}}@media (min-width:640px){.ms-u-lgPull6{right:50%}}@media (min-width:640px){.ms-u-lgPull5{right:41.66666666666667%}}@media (min-width:640px){.ms-u-lgPull4{right:33.33333333333333%}}@media (min-width:640px){.ms-u-lgPull3{right:25%}}@media (min-width:640px){.ms-u-lgPull2{right:16.666666666666664%}}@media (min-width:640px){.ms-u-lgPull1{right:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPull0{right:auto}}@media (min-width:640px){.ms-u-lgPush12{left:100%}}@media (min-width:640px){.ms-u-lgPush11{left:91.66666666666666%}}@media (min-width:640px){.ms-u-lgPush10{left:83.33333333333334%}}@media (min-width:640px){.ms-u-lgPush9{left:75%}}@media (min-width:640px){.ms-u-lgPush8{left:66.66666666666666%}}@media (min-width:640px){.ms-u-lgPush7{left:58.333333333333336%}}@media (min-width:640px){.ms-u-lgPush6{left:50%}}@media (min-width:640px){.ms-u-lgPush5{left:41.66666666666667%}}@media (min-width:640px){.ms-u-lgPush4{left:33.33333333333333%}}@media (min-width:640px){.ms-u-lgPush3{left:25%}}@media (min-width:640px){.ms-u-lgPush2{left:16.666666666666664%}}@media (min-width:640px){.ms-u-lgPush1{left:8.333333333333332%}}@media (min-width:640px){.ms-u-lgPush0{left:auto}}@media (min-width:640px){.ms-u-lgOffset11{margin-left:91.66666666666666%}}@media (min-width:640px){.ms-u-lgOffset10{margin-left:83.33333333333334%}}@media (min-width:640px){.ms-u-lgOffset9{margin-left:75%}}@media (min-width:640px){.ms-u-lgOffset8{margin-left:66.66666666666666%}}@media (min-width:640px){.ms-u-lgOffset7{margin-left:58.333333333333336%}}@media (min-width:640px){.ms-u-lgOffset6{margin-left:50%}}@media (min-width:640px){.ms-u-lgOffset5{margin-left:41.66666666666667%}}@media (min-width:640px){.ms-u-lgOffset4{margin-left:33.33333333333333%}}@media (min-width:640px){.ms-u-lgOffset3{margin-left:25%}}@media (min-width:640px){.ms-u-lgOffset2{margin-left:16.666666666666664%}}@media (min-width:640px){.ms-u-lgOffset1{margin-left:8.333333333333332%}}@media (min-width:640px){.ms-u-lgOffset0{margin-left:0}}@media (min-width:1024px){.ms-u-xl12{width:100%}}@media (min-width:1024px){.ms-u-xl11{width:91.66666666666666%}}@media (min-width:1024px){.ms-u-xl10{width:83.33333333333334%}}@media (min-width:1024px){.ms-u-xl9{width:75%}}@media (min-width:1024px){.ms-u-xl8{width:66.66666666666666%}}@media (min-width:1024px){.ms-u-xl7{width:58.333333333333336%}}@media (min-width:1024px){.ms-u-xl6{width:50%}}@media (min-width:1024px){.ms-u-xl5{width:41.66666666666667%}}@media (min-width:1024px){.ms-u-xl4{width:33.33333333333333%}}@media (min-width:1024px){.ms-u-xl3{width:25%}}@media (min-width:1024px){.ms-u-xl2{width:16.666666666666664%}}@media (min-width:1024px){.ms-u-xl1{width:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPull12{right:100%}}@media (min-width:1024px){.ms-u-xlPull11{right:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlPull10{right:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlPull9{right:75%}}@media (min-width:1024px){.ms-u-xlPull8{right:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlPull7{right:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlPull6{right:50%}}@media (min-width:1024px){.ms-u-xlPull5{right:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlPull4{right:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlPull3{right:25%}}@media (min-width:1024px){.ms-u-xlPull2{right:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlPull1{right:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPull0{right:auto}}@media (min-width:1024px){.ms-u-xlPush12{left:100%}}@media (min-width:1024px){.ms-u-xlPush11{left:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlPush10{left:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlPush9{left:75%}}@media (min-width:1024px){.ms-u-xlPush8{left:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlPush7{left:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlPush6{left:50%}}@media (min-width:1024px){.ms-u-xlPush5{left:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlPush4{left:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlPush3{left:25%}}@media (min-width:1024px){.ms-u-xlPush2{left:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlPush1{left:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlPush0{left:auto}}@media (min-width:1024px){.ms-u-xlOffset11{margin-left:91.66666666666666%}}@media (min-width:1024px){.ms-u-xlOffset10{margin-left:83.33333333333334%}}@media (min-width:1024px){.ms-u-xlOffset9{margin-left:75%}}@media (min-width:1024px){.ms-u-xlOffset8{margin-left:66.66666666666666%}}@media (min-width:1024px){.ms-u-xlOffset7{margin-left:58.333333333333336%}}@media (min-width:1024px){.ms-u-xlOffset6{margin-left:50%}}@media (min-width:1024px){.ms-u-xlOffset5{margin-left:41.66666666666667%}}@media (min-width:1024px){.ms-u-xlOffset4{margin-left:33.33333333333333%}}@media (min-width:1024px){.ms-u-xlOffset3{margin-left:25%}}@media (min-width:1024px){.ms-u-xlOffset2{margin-left:16.666666666666664%}}@media (min-width:1024px){.ms-u-xlOffset1{margin-left:8.333333333333332%}}@media (min-width:1024px){.ms-u-xlOffset0{margin-left:0}}@media (min-width:1366px){.ms-u-xxl12{width:100%}}@media (min-width:1366px){.ms-u-xxl11{width:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxl10{width:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxl9{width:75%}}@media (min-width:1366px){.ms-u-xxl8{width:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxl7{width:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxl6{width:50%}}@media (min-width:1366px){.ms-u-xxl5{width:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxl4{width:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxl3{width:25%}}@media (min-width:1366px){.ms-u-xxl2{width:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxl1{width:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPull12{right:100%}}@media (min-width:1366px){.ms-u-xxlPull11{right:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPull10{right:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlPull9{right:75%}}@media (min-width:1366px){.ms-u-xxlPull8{right:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPull7{right:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlPull6{right:50%}}@media (min-width:1366px){.ms-u-xxlPull5{right:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlPull4{right:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlPull3{right:25%}}@media (min-width:1366px){.ms-u-xxlPull2{right:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlPull1{right:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPull0{right:auto}}@media (min-width:1366px){.ms-u-xxlPush12{left:100%}}@media (min-width:1366px){.ms-u-xxlPush11{left:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPush10{left:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlPush9{left:75%}}@media (min-width:1366px){.ms-u-xxlPush8{left:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlPush7{left:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlPush6{left:50%}}@media (min-width:1366px){.ms-u-xxlPush5{left:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlPush4{left:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlPush3{left:25%}}@media (min-width:1366px){.ms-u-xxlPush2{left:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlPush1{left:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlPush0{left:auto}}@media (min-width:1366px){.ms-u-xxlOffset11{margin-left:91.66666666666666%}}@media (min-width:1366px){.ms-u-xxlOffset10{margin-left:83.33333333333334%}}@media (min-width:1366px){.ms-u-xxlOffset9{margin-left:75%}}@media (min-width:1366px){.ms-u-xxlOffset8{margin-left:66.66666666666666%}}@media (min-width:1366px){.ms-u-xxlOffset7{margin-left:58.333333333333336%}}@media (min-width:1366px){.ms-u-xxlOffset6{margin-left:50%}}@media (min-width:1366px){.ms-u-xxlOffset5{margin-left:41.66666666666667%}}@media (min-width:1366px){.ms-u-xxlOffset4{margin-left:33.33333333333333%}}@media (min-width:1366px){.ms-u-xxlOffset3{margin-left:25%}}@media (min-width:1366px){.ms-u-xxlOffset2{margin-left:16.666666666666664%}}@media (min-width:1366px){.ms-u-xxlOffset1{margin-left:8.333333333333332%}}@media (min-width:1366px){.ms-u-xxlOffset0{margin-left:0}}@media (min-width:1920px){.ms-u-xxxl12{width:100%}}@media (min-width:1920px){.ms-u-xxxl11{width:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxl10{width:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxl9{width:75%}}@media (min-width:1920px){.ms-u-xxxl8{width:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxl7{width:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxl6{width:50%}}@media (min-width:1920px){.ms-u-xxxl5{width:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxl4{width:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxl3{width:25%}}@media (min-width:1920px){.ms-u-xxxl2{width:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxl1{width:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPull12{right:100%}}@media (min-width:1920px){.ms-u-xxxlPull11{right:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPull10{right:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlPull9{right:75%}}@media (min-width:1920px){.ms-u-xxxlPull8{right:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPull7{right:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlPull6{right:50%}}@media (min-width:1920px){.ms-u-xxxlPull5{right:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlPull4{right:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlPull3{right:25%}}@media (min-width:1920px){.ms-u-xxxlPull2{right:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlPull1{right:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPull0{right:auto}}@media (min-width:1920px){.ms-u-xxxlPush12{left:100%}}@media (min-width:1920px){.ms-u-xxxlPush11{left:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPush10{left:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlPush9{left:75%}}@media (min-width:1920px){.ms-u-xxxlPush8{left:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlPush7{left:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlPush6{left:50%}}@media (min-width:1920px){.ms-u-xxxlPush5{left:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlPush4{left:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlPush3{left:25%}}@media (min-width:1920px){.ms-u-xxxlPush2{left:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlPush1{left:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlPush0{left:auto}}@media (min-width:1920px){.ms-u-xxxlOffset11{margin-left:91.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlOffset10{margin-left:83.33333333333334%}}@media (min-width:1920px){.ms-u-xxxlOffset9{margin-left:75%}}@media (min-width:1920px){.ms-u-xxxlOffset8{margin-left:66.66666666666666%}}@media (min-width:1920px){.ms-u-xxxlOffset7{margin-left:58.333333333333336%}}@media (min-width:1920px){.ms-u-xxxlOffset6{margin-left:50%}}@media (min-width:1920px){.ms-u-xxxlOffset5{margin-left:41.66666666666667%}}@media (min-width:1920px){.ms-u-xxxlOffset4{margin-left:33.33333333333333%}}@media (min-width:1920px){.ms-u-xxxlOffset3{margin-left:25%}}@media (min-width:1920px){.ms-u-xxxlOffset2{margin-left:16.666666666666664%}}@media (min-width:1920px){.ms-u-xxxlOffset1{margin-left:8.333333333333332%}}@media (min-width:1920px){.ms-u-xxxlOffset0{margin-left:0}}.ms-Grid{box-sizing:border-box;*zoom:1;padding:0 8px}.ms-Grid:after,.ms-Grid:before{display:table;content:'';line-height:0}.ms-Grid:after{clear:both}.ms-Grid-row{margin:0 -8px;box-sizing:border-box;*zoom:1}.ms-Grid-row:after,.ms-Grid-row:before{display:table;content:'';line-height:0}.ms-Grid-row:after{clear:both}.ms-Grid-col{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box;float:left}.ms-Grid-col .ms-Grid{padding:0}.ms-Fabric{color:#333}", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map