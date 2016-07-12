if (self.CavalryLogger) { CavalryLogger.start_js(["86q0I"]); }

__d("ImageExtensions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};},null);
__d("PUWErrorCodes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};},null);
__d("PUWMethods",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste"};},null);
__d("VideoCreatorProductType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10,FRIENDS_DAY_2016:11,FRIENDVERSARY:12,STORYLINE_WITH_EXTERNAL_MUSIC:13,PERSONALIZED_BIRTHDAY:14};},null);
__d('FBOverlayBase.react',['React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').createClass({displayName:'FBOverlayBase',render:function(){return c('React').Children.only(this.props.children);}});f.exports=h;},null);
__d('FBOverlayElement.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j={horizontal:{left:"_32rg",right:"_32rh",fit:c('joinClasses')("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:c('joinClasses')("_32ri","_32rj")}},k=c('React').createClass({displayName:'FBOverlayElement',propTypes:{horizontal:i.oneOf(['left','right','fit']),vertical:i.oneOf(['top','bottom','fit'])},getDefaultProps:function(){return {horizontal:'fit',vertical:'fit'};},render:function(){var l=c('React').Children.only(this.props.children),m=c('joinClasses')(l.props.className,"_32rk",j.horizontal[this.props.horizontal],j.vertical[this.props.vertical]);return c('React').cloneElement(l,{className:m});}});f.exports=k;},null);
__d('FBOverlayContainer.react',['cx','invariant','FBOverlayBase.react','FBOverlayElement.react','React','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'FBOverlayContainer',propTypes:{children:function(k,l){var m=k[l],n=0;c('React').Children.forEach(m,function(o){if(o===null||o===undefined)return;switch(o.type){case c('FBOverlayBase.react'):n++;break;case c('FBOverlayElement.react'):break;default:i(0);}});!(n===1)?i(0):void 0;}},render:function(){return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_23n-")}),this.props.children));}});f.exports=j;},null);
__d('Bandicoot',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=5*1000,i=10*60*1000,j=14*24*60*60*1000,k='Bandicoot:',l={ACTIVE:'ACTIVE',INACTIVE:'INACTIVE',CLOSED:'CLOSED'};function m(){try{var q=window.localStorage;if(q){var r='__test'+Date.now();q.setItem(r,'');q.removeItem(r);}return q;}catch(p){}}var n=m();function o(p){this.$Bandicoot5=k+p;this.$Bandicoot4={};this.$Bandicoot1=this.$Bandicoot7.bind(this);this.sessionID=null;this.sessionStartTime=null;this.storage=n;}o.prototype.getCrashTimeData=function(){var p=window.performance&&window.performance.memory||{},q=this.sessionStartTime;return {duration:q?Date.now()-q:0,tabs:Object.keys(this.$Bandicoot8()).length,jsHeapSizeLimit:p.jsHeapSizeLimit,totalJSHeapSize:p.totalJSHeapSize,usedJSHeapSize:p.usedJSHeapSize,elementsInDOM:document.getElementsByTagName('*').length,uri:window.location.href};};o.prototype.getLogTimeData=function(){return {userAgent:window.navigator.userAgent};};o.prototype.logCrash=function(p,q,r){var s=Object.assign({sessionID:p},q,r);};o.prototype.logBrowserUnsupported=function(){};o.prototype.logTrackingError=function(){};o.prototype.startSession=function(){if(!this.storage){this.logBrowserUnsupported();return;}if(this.$Bandicoot2)return;if(!this.sessionID)this.sessionID=Math.random().toString(36).slice(2,9);if(!this.sessionStartTime)this.sessionStartTime=Date.now();this.$Bandicoot2=setInterval(this.$Bandicoot9.bind(this),h);this.$Bandicoot9();if(document.addEventListener)document.addEventListener('visibilitychange',this.$Bandicoot1);this.$Bandicoot10();};o.prototype.endSession=function(){if(!this.storage)return;if(!this.$Bandicoot2)return;clearInterval(this.$Bandicoot2);this.$Bandicoot2=null;if(!this.$Bandicoot3)this.$Bandicoot11({status:l.CLOSED});this.sessionID=null;this.sessionStartTime=null;if(document.removeEventListener)document.removeEventListener('visibilitychange',this.$Bandicoot1);};o.prototype.logKnownCrashes=function(){if(!this.storage)return;if(!this.$Bandicoot2)this.$Bandicoot9();};o.prototype.$Bandicoot9=function(){var p=this.$Bandicoot8(),q={};if(this.$Bandicoot2){if(!p[this.sessionID])p[this.sessionID]={};Object.assign(p[this.sessionID],this.getCrashTimeData(),{lastUpdated:Date.now(),status:this.$Bandicoot12()});}Object.keys(p).forEach(function(r){var s=p[r];if(s.status===l.CLOSED)return;if(this.$Bandicoot4[r])return;if(!s.lastUpdated)return;var t=Date.now()-s.lastUpdated;if(s.status===l.INACTIVE&&t>i)return;if(s.status===l.ACTIVE&&t>i){if(!s.loggerTabForPotentialCrash&&this.$Bandicoot2){s.loggerTabForPotentialCrash=this.sessionID;q[r]=s;}else if(s.loggerTabForPotentialCrash&&s.loggerTabForPotentialCrash!==this.sessionID){if(t>j)return;q[r]=s;}else{this.logCrash(r,s,this.getLogTimeData());this.$Bandicoot4[r]=true;}}else{delete s.loggerTabForPotentialCrash;q[r]=s;}}.bind(this));this.$Bandicoot13(q);};o.prototype.$Bandicoot8=function(p){p=p||this.$Bandicoot5;var q=this.storage.getItem(p)||'{}';try{q=JSON.parse(q);}catch(r){q={};this.storage.removeItem(p);}return q;};o.prototype.$Bandicoot11=function(p){p.lastUpdated=Date.now();var q=this.$Bandicoot8();if(!q[this.sessionID])q[this.sessionID]={};Object.assign(q[this.sessionID],p);this.$Bandicoot13(q);};o.prototype.$Bandicoot13=function(p){var q=JSON.stringify(p);try{this.storage.setItem(this.$Bandicoot5,q);}catch(r){var s=this.$Bandicoot6,t=Date.now();if(!s||t>s+h){this.logTrackingError();this.$Bandicoot6=t;}try{this.storage.removeItem(this.$Bandicoot5);}catch(u){this.$Bandicoot3=true;this.endSession();}}};o.prototype.$Bandicoot10=function(){for(var p=0;p<this.storage.length;++p){var q=this.storage.key(p);if(q.indexOf(k)===0&&q!==this.$Bandicoot5){var r=this.$Bandicoot8(q),s=Object.keys(r).every(function(t){var u=r[t];return (!u.lastUpdated||Date.now()-u.lastUpdated>j);});if(s)this.storage.removeItem(q);}}};o.prototype.$Bandicoot7=function(){this.$Bandicoot11({status:this.$Bandicoot12()});};o.prototype.$Bandicoot12=function(){return document.hidden?l.INACTIVE:l.ACTIVE;};f.exports=o;},null);
__d('PureStoreBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function(){return this.constructor.calculateState();},componentWillMount:function(){!this.constructor.calculateState?h(0):void 0;this._recalculateStateID=null;var m=function(){if(this.isMounted())this.setState(this.constructor.calculateState());this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(m);}.bind(this));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;},null);
__d("ManagedError",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;},null);
__d('Emscripten',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={isSupported:function(){return (typeof Int32Array!=='undefined'&&typeof Float64Array!=='undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set);}};},null);
__d('PooledWebWorker',['WebWorker'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('WebWorker'));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this,m);this.$PooledWebWorker1=l;this.$PooledWebWorker2=k;}j.prototype.getIndex=function(){'use strict';return this.$PooledWebWorker1;};j.prototype.getPool=function(){'use strict';return this.$PooledWebWorker2;};f.exports=j;},null);
__d('WebWorkerPool',['PooledWebWorker','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.isSupported=function(){'use strict';return c('PooledWebWorker').isSupported();};function h(i,j){'use strict';this.$WebWorkerPool1=[];for(var k=0;k<j;k++)this.$WebWorkerPool1.push(new (c('PooledWebWorker'))(this,k,i).setErrorHandler(this.$WebWorkerPool2).setMessageHandler(this.$WebWorkerPool3).execute());this.$WebWorkerPool4=0;}h.prototype.setMessageHandler=function(i){'use strict';this.$WebWorkerPool5=i||c('emptyFunction');return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this.$WebWorkerPool1.forEach(function(j){return j.setAllowCrossPageTransition(i);});return this;};h.prototype.setErrorHandler=function(i){'use strict';this.$WebWorkerPool6=i||c('emptyFunction');return this;};h.prototype.postMessage=function(){'use strict';var i=this.getWorker();for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];i.postMessage.apply(i,k);return i;};h.prototype.$WebWorkerPool3=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);this.getPool().$WebWorkerPool5.apply(this.getPool(),j);};h.prototype.$WebWorkerPool2=function(){'use strict';for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j.unshift(this);return this.getPool().$WebWorkerPool6.apply(this.getPool(),j);};h.prototype.getWorker=function(){'use strict';var i=this.$WebWorkerPool1[this.$WebWorkerPool4];this.$WebWorkerPool4=(this.$WebWorkerPool4+1)%this.$WebWorkerPool1.length;return i;};f.exports=h;},null);
__d('JpegResizer',['Emscripten','JpegResizerConfig','JpegResizeWorkerResource','WebWorker','WebWorkerPool','PUWErrorCodes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;i.isSupported=function(){'use strict';return c('WebWorkerPool').isSupported()&&c('Emscripten').isSupported()&&!c('JpegResizerConfig').isGKBlacklisted;};i.getSingleton=function(j){'use strict';if(!h)h=new i(j||i.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);return h;};i.prepareResource=function(j){'use strict';c('WebWorker').prepareResource(c('JpegResizeWorkerResource'),j);};function i(j){'use strict';j=j||i.DEFAULT_POOL_SIZE;c('WebWorker').prepareResource(c('JpegResizeWorkerResource'));this.$JpegResizer1=new (c('WebWorkerPool'))(c('JpegResizeWorkerResource'),j).setErrorHandler(this.$JpegResizer2.bind(this)).setMessageHandler(this.$JpegResizer3.bind(this));this.$JpegResizer4={};this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}i.prototype.setHighQuality=function(j){'use strict';if(j){this.$JpegResizer5=i.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer6=i.DEFAULT_RESIZE_WIDTH;}else{this.$JpegResizer5=i.LOW_QUALITY_RESIZE_HEIGHT;this.$JpegResizer6=i.LOW_QUALITY_RESIZE_WIDTH;}return this;};i.prototype.setAllowCrossPageTransition=function(j){'use strict';this.$JpegResizer1.setAllowCrossPageTransition(j);return this;};i.prototype.resizeBlob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6,this.$JpegResizer5,k,l);};i.prototype.resize360Blob=function(j,k,l){'use strict';return this.$JpegResizer7(j,this.$JpegResizer6*3,this.$JpegResizer5*3,k,l);};i.prototype.$JpegResizer7=function(j,k,l,m,n){'use strict';var o=this.$JpegResizer1.getWorker();if(o.isCurrentState('terminated')){var p=new Error('Worker terminated');p.code=c('PUWErrorCodes').WORKER_TERMINATED;m(p);return this;}var q=o.postMessage({blob:j,height:l,width:k}).getIndex();this.$JpegResizer8(q).unshift({done:m,progress:n});return this;};i.prototype.$JpegResizer8=function(j){'use strict';if(!this.$JpegResizer4.hasOwnProperty(j))this.$JpegResizer4[j]=[];return this.$JpegResizer4[j];};i.prototype.$JpegResizer2=function(j,k){'use strict';j.terminate();var l=this.$JpegResizer8(j.getIndex());this.$JpegResizer9(k);l.forEach(function(m){return m.done(k);});l.length=0;};i.prototype.$JpegResizer3=function(j,k){'use strict';if(k.error)this.$JpegResizer9(k.error);if(k.done){this.$JpegResizer8(j.getIndex()).pop().done(k.error,k.blob,k.skipped);}else{var l=this.$JpegResizer8(j.getIndex()),m=l[l.length-1].progress;if(m)m({written:k.written,total:k.total});}};i.prototype.$JpegResizer9=function(j){'use strict';var k=j.message;if(k.indexOf('Not a JPEG file')!==-1){j.code=c('PUWErrorCodes').BAD_JPEG;}else if(k.indexOf('abort()')!==-1){j.code=c('PUWErrorCodes').WORKER_ABORT;}else j.code=c('PUWErrorCodes').UNKNOWN_RESIZE_ERROR;};i.DEFAULT_POOL_SIZE=3;i.DEFAULT_RESIZE_HEIGHT=2048;i.DEFAULT_RESIZE_WIDTH=2048;i.LOW_QUALITY_RESIZE_HEIGHT=960;i.LOW_QUALITY_RESIZE_WIDTH=960;f.exports=i;},null);
__d("DOMWrapper",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j={setRoot:function(k){h=k;},getRoot:function(){return h||document.body;},setWindow:function(k){i=k;},getWindow:function(){return i||self;}};f.exports=j;},null);
__d('Flash',['DOMEventListener','DOMWrapper','QueryString','UserAgent_DEPRECATED','guid','htmlSpecialChars'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i,j=c('DOMWrapper').getWindow().document;function k(p){var q=j.getElementById(p);if(q)q.parentNode.removeChild(q);delete h[p];}function l(){for(var p in h)if(h.hasOwnProperty(p))k(p);}function m(p){return p.replace(/\d+/g,function(q){return '000'.substring(q.length)+q;});}function n(p){if(!i){if(c('UserAgent_DEPRECATED').ie()>=9)c('DOMEventListener').add(window,'unload',l);i=true;}h[p]=p;}var o={embed:function(p,q,r,s){var t=c('guid')();p=c('htmlSpecialChars')(p).replace(/&amp;/g,'&');r=babelHelpers['extends']({allowscriptaccess:'always',flashvars:s,movie:p},r);if(typeof r.flashvars=='object')r.flashvars=c('QueryString').encode(r.flashvars);var u=[];for(var v in r)if(r.hasOwnProperty(v)&&r[v])u.push('<param name="'+c('htmlSpecialChars')(v)+'" value="'+c('htmlSpecialChars')(r[v])+'">');var w=q.appendChild(j.createElement('span')),x='<object '+(c('UserAgent_DEPRECATED').ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+p+'" '+(r.height?'height="'+r.height+'" ':'')+(r.width?'width="'+r.width+'" ':'')+'id="'+t+'">'+u.join('')+'</object>';w.innerHTML=x;var y=w.firstChild;n(t);return y;},remove:k,getVersion:function(){var p='Shockwave Flash',q='application/x-shockwave-flash',r='ShockwaveFlash.ShockwaveFlash',s;if(navigator.plugins&&typeof navigator.plugins[p]=='object'){var t=navigator.plugins[p].description;if(t&&navigator.mimeTypes&&navigator.mimeTypes[q]&&navigator.mimeTypes[q].enabledPlugin)s=t.match(/\d+/g);}if(!s)try{s=new ActiveXObject(r).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);s=Array.prototype.slice.call(s,1);}catch(u){}return s;},getVersionString:function(){var p=o.getVersion();return p?p.join('.'):'';},checkMinVersion:function(p){var q=o.getVersion();if(!q)return false;return m(q.join('.'))>=m(p);},isAvailable:function(){return !!o.getVersion();}};f.exports=o;},null);
__d('ReactComposerPhotoPrefillConfig',['React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes;f.exports=h.shape({uploadID:h.string,photoID:h.string,thumbSrc:h.string,cubestripURI:h.string});},null);
__d('AssertionError',['ManagedError'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){c('ManagedError').prototype.constructor.apply(this,arguments);}h.prototype=new (c('ManagedError'))();h.prototype.constructor=h;f.exports=h;},null);
__d('Assert',['AssertionError','sprintf'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m,n){if(typeof m!=='boolean'||!m)throw new (c('AssertionError'))(n);return m;}function i(m,n,o){var p;if(n===undefined){p='undefined';}else if(n===null){p='null';}else{var q=Object.prototype.toString.call(n);p=/\s(\w*)/.exec(q)[1].toLowerCase();}h(m.indexOf(p)!==-1,o||c('sprintf')('Expression is of type %s, not %s',p,m));return n;}function j(m,n,o){h(n instanceof m,o||'Expression not instance of type');return n;}function k(m,n){l['is'+m]=n;l['maybe'+m]=function(o,p){if(o!=null)n(o,p);};}var l={isInstanceOf:j,isTrue:h,isTruthy:function(m,n){return h(!!m,n);},type:i,define:function(m,n){m=m.substring(0,1).toUpperCase()+m.substring(1).toLowerCase();k(m,function(o,p){h(n(o),p);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(m){k(m,i.bind(null,m.toLowerCase()));});f.exports=l;},null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){'use strict';this.$VideoUploadFile1=i;this.$VideoUploadFile2=j;this.$VideoUploadFile3=k;this.$VideoUploadFile4=l;}h.fromFile=function(i){'use strict';var j=h.getExtensionFromFileName(i.name);return new this(null,i,i.size,j);};h.fromFileInput=function(i){'use strict';var j=null,k=null,l=h.getExtensionFromFileInput(i);if(c('VideoUploadFeatureDetector').supportsFileAPI()&&i.files.length){j=i.files[0];k=j.size;}return new this(i,j,k,l);};h.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};h.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};h.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};h.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};h.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===c('ImageExtensions').GIF)return c('VideoCreatorProductType').ANIMATED_GIFS;return c('VideoCreatorProductType').CORE_VIDEOS;};h.prototype.getChunk=function(i,j){'use strict';return this.$VideoUploadFile2?c('fileSlice').call(this.$VideoUploadFile2,i,j):null;};h.getExtensionFromFileInput=function(i){'use strict';return this.getExtensionFromFileName(i.value);};h.getExtensionFromFileName=function(i){'use strict';return i.indexOf('.')!=-1?i.split('.').pop().toLowerCase():'';};f.exports=h;},null);