(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./Magnifier.stories.tsx":"./stories/Magnifier.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Magnifier.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Magnifier_stories_Basic})),__webpack_require__.d(__webpack_exports__,"AsyncImageSizes",(function(){return Magnifier_stories_AsyncImageSizes})),__webpack_require__.d(__webpack_exports__,"AsyncImages",(function(){return Magnifier_stories_AsyncImages})),__webpack_require__.d(__webpack_exports__,"BasicWithContentAround",(function(){return Magnifier_stories_BasicWithContentAround}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react-dom/index.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var src_MagnifierPortal=function MagnifierPortal(_ref){var children=_ref.children,container=Object(react.useRef)(document.createElement("div"));return Object(react.useEffect)((function(){var currentContainer=container.current;return window.document.body.appendChild(currentContainer),function(){window.document.body.removeChild(currentContainer)}}),[]),Object(react_dom.createPortal)(children,container.current)};var calcLensPosition=function calcLensPosition(lensLength){var mousePosition=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,domRectValue=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,domRectPos=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,position=mousePosition-domRectPos-lensLength/2;return mousePosition-domRectPos+lensLength/2>domRectValue?domRectValue-lensLength:position<0?0:position},src=function Magnifier(_ref2){var _imageHolderRef$curre2,_window3,_window4,_window5,_window6,zoomImg=_ref2.zoomImg,offsetLeft=_ref2.offsetLeft,offsetTop=_ref2.offsetTop,zoomImgWidth=_ref2.zoomImgWidth,zoomImgHeight=_ref2.zoomImgHeight,children=_ref2.children,_useState2=_slicedToArray(Object(react.useState)(!1),2),showPortal=_useState2[0],setShowPortal=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(),2),domRect=_useState4[0],setDomRect=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(null),2),mousePosition=_useState6[0],setMousePosition=_useState6[1],imageHolderRef=Object(react.useRef)(null);Object(react.useEffect)((function(){if(imageHolderRef&&imageHolderRef.current){var _imageHolderRef$curre,_imageElement=null===(_imageHolderRef$curre=imageHolderRef.current)||void 0===_imageHolderRef$curre?void 0:_imageHolderRef$curre.querySelector("img"),newDomRect=null==_imageElement?void 0:_imageElement.getBoundingClientRect();(null==domRect?void 0:domRect.top)===(null==newDomRect?void 0:newDomRect.top)&&(null==domRect?void 0:domRect.left)===(null==newDomRect?void 0:newDomRect.left)&&(null==domRect?void 0:domRect.width)===(null==newDomRect?void 0:newDomRect.width)&&(null==domRect?void 0:domRect.height)===(null==newDomRect?void 0:newDomRect.height)||setDomRect(newDomRect)}}));var imageElement=null===(_imageHolderRef$curre2=imageHolderRef.current)||void 0===_imageHolderRef$curre2?void 0:_imageHolderRef$curre2.querySelector("img"),lensHeight=((null==domRect?void 0:domRect.height)||0)/zoomImgHeight*((null==domRect?void 0:domRect.height)||0),lensWidth=((null==domRect?void 0:domRect.width)||0)/zoomImgWidth*((null==domRect?void 0:domRect.width)||0),backgroundPosition=function calcImagePosition(mousePosition,domRect,lens,zoomImgHeight,zoomImgWidth){var _window,_window2,lensPositionTop=calcLensPosition(lens.height,null==mousePosition?void 0:mousePosition.pageY,null==domRect?void 0:domRect.height,((null==domRect?void 0:domRect.top)||0)+((null===(_window=window)||void 0===_window?void 0:_window.pageYOffset)||0)),lensPositionLeft=calcLensPosition(lens.width,null==mousePosition?void 0:mousePosition.pageX,null==domRect?void 0:domRect.width,((null==domRect?void 0:domRect.left)||0)+((null===(_window2=window)||void 0===_window2?void 0:_window2.pageXOffset)||0)),y=lensPositionTop/((null==domRect?void 0:domRect.height)||1)*zoomImgHeight;return{x:lensPositionLeft/((null==domRect?void 0:domRect.width)||1)*zoomImgWidth,y:y}}(mousePosition,domRect,{height:lensHeight,width:lensWidth},zoomImgHeight,zoomImgWidth),lensPositionTop=calcLensPosition(lensHeight,null==mousePosition?void 0:mousePosition.pageY,null==domRect?void 0:domRect.height,((null==domRect?void 0:domRect.top)||0)+((null===(_window3=window)||void 0===_window3?void 0:_window3.pageYOffset)||0)),lensPositionLeft=calcLensPosition(lensWidth,null==mousePosition?void 0:mousePosition.pageX,null==domRect?void 0:domRect.width,((null==domRect?void 0:domRect.left)||0)+((null===(_window4=window)||void 0===_window4?void 0:_window4.pageXOffset)||0));return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("span",{ref:imageHolderRef,style:{display:"inline-block",position:"relative"},onMouseEnter:function onMouseEnter(){setShowPortal(!0)},onMouseLeave:function onMouseLeave(){setShowPortal(!1)},onMouseMove:function onMouseMove(e){setMousePosition({pageX:e.pageX,pageY:e.pageY})},children:[Object(jsx_runtime.jsx)("div",{style:{opacity:showPortal?"0.5":"1"},children:children}),showPortal&&Object(jsx_runtime.jsx)("div",{style:{position:"absolute",border:"1px solid grey",background:"scroll",backgroundImage:"url("+(null==imageElement?void 0:imageElement.src)+")",backgroundRepeat:"no-repeat",backgroundPosition:"-"+lensPositionLeft+"px -"+lensPositionTop+"px",height:lensHeight,width:lensWidth,top:lensPositionTop,left:lensPositionLeft}})]}),showPortal&&Object(jsx_runtime.jsx)(src_MagnifierPortal,{children:Object(jsx_runtime.jsx)("div",{style:{position:"absolute",border:"1px solid black",backgroundImage:"url("+zoomImg+")",backgroundRepeat:"no-repeat",backgroundPosition:"-"+backgroundPosition.x+"px -"+backgroundPosition.y+"px",height:null==domRect?void 0:domRect.height,width:null==domRect?void 0:domRect.width,top:((null===(_window5=window)||void 0===_window5?void 0:_window5.pageYOffset)||0)+((null==domRect?void 0:domRect.top)||0)+(offsetTop||0),left:((null===(_window6=window)||void 0===_window6?void 0:_window6.pageXOffset)||0)+((null==domRect?void 0:domRect.left)||0)+((null==domRect?void 0:domRect.width)||0)+(offsetLeft||0)}})})]})},Magnifier_stories_Basic=(__webpack_exports__.default={title:"Magnifier",component:src},function Basic(){return Object(jsx_runtime.jsx)(src,{zoomImg:"https://picsum.photos/id/190/1000/1000",zoomImgHeight:1e3,zoomImgWidth:1e3,offsetLeft:10,children:Object(jsx_runtime.jsx)("img",{src:"https://picsum.photos/id/190/400/400",height:400,width:400,alt:"Lorem picsum "})})});Magnifier_stories_Basic.displayName="Basic";var Magnifier_stories_AsyncImageSizes=function AsyncImageSizes(){return Object(jsx_runtime.jsx)(src,{zoomImg:"https://picsum.photos/id/234/800/1234",zoomImgHeight:1234,zoomImgWidth:800,offsetLeft:10,children:Object(jsx_runtime.jsx)("img",{src:"https://picsum.photos/id/234/500/300",height:300,width:500,alt:"Lorem picsum"})})};Magnifier_stories_AsyncImageSizes.displayName="AsyncImageSizes";var Magnifier_stories_AsyncImages=function AsyncImages(){return Object(jsx_runtime.jsx)(src,{zoomImg:"https://picsum.photos/id/555/1000/1000",zoomImgHeight:1e3,zoomImgWidth:1e3,offsetLeft:10,children:Object(jsx_runtime.jsx)("img",{src:"https://picsum.photos/id/111/500/300",height:300,width:500,alt:"Lorem picsum"})})};Magnifier_stories_AsyncImages.displayName="AsyncImages";var Magnifier_stories_BasicWithContentAround=function BasicWithContentAround(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("header",{style:{paddingTop:"200px"},children:" i'm a header"}),Object(jsx_runtime.jsx)(src,{zoomImg:"https://picsum.photos/id/190/1000/1000",zoomImgHeight:1e3,zoomImgWidth:1e3,offsetLeft:10,children:Object(jsx_runtime.jsx)("img",{src:"https://picsum.photos/id/190/400/400",height:400,width:400,alt:"Lorem picsum "})})]})};Magnifier_stories_Basic.parameters=Object.assign({storySource:{source:"() => {\n    return (\n        <Magnifier\n            zoomImg={'https://picsum.photos/id/190/1000/1000'}\n            zoomImgHeight={1000}\n            zoomImgWidth={1000}\n            offsetLeft={10}\n        >\n            <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt=\"Lorem picsum \" />\n        </Magnifier>\n    );\n}"}},Magnifier_stories_Basic.parameters),Magnifier_stories_AsyncImageSizes.parameters=Object.assign({storySource:{source:"() => {\n    return (\n        <Magnifier\n            zoomImg={'https://picsum.photos/id/234/800/1234'}\n            zoomImgHeight={1234}\n            zoomImgWidth={800}\n            offsetLeft={10}\n        >\n            <img src={'https://picsum.photos/id/234/500/300'} height={300} width={500} alt=\"Lorem picsum\" />\n        </Magnifier>\n    );\n}"}},Magnifier_stories_AsyncImageSizes.parameters),Magnifier_stories_AsyncImages.parameters=Object.assign({storySource:{source:"() => {\n    return (\n        <Magnifier\n            zoomImg={'https://picsum.photos/id/555/1000/1000'}\n            zoomImgHeight={1000}\n            zoomImgWidth={1000}\n            offsetLeft={10}\n        >\n            <img src={'https://picsum.photos/id/111/500/300'} height={300} width={500} alt=\"Lorem picsum\" />\n        </Magnifier>\n    );\n}"}},Magnifier_stories_AsyncImages.parameters),Magnifier_stories_BasicWithContentAround.parameters=Object.assign({storySource:{source:"() => {\n    return (\n        <>\n            <header style={{ paddingTop: '200px' }}> i'm a header</header>\n            <Magnifier\n                zoomImg={'https://picsum.photos/id/190/1000/1000'}\n                zoomImgHeight={1000}\n                zoomImgWidth={1000}\n                offsetLeft={10}\n            >\n                <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt=\"Lorem picsum \" />\n            </Magnifier>\n        </>\n    );\n}"}},Magnifier_stories_BasicWithContentAround.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);