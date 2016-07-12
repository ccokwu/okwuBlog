if (self.CavalryLogger) { CavalryLogger.start_js(["BgsVc"]); }

__d("GenderConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NOT_A_PERSON:0,FEMALE_SINGULAR:1,MALE_SINGULAR:2,FEMALE_SINGULAR_GUESS:3,MALE_SINGULAR_GUESS:4,MIXED_SINGULAR:5,MIXED_PLURAL:5,NEUTER_SINGULAR:6,UNKNOWN_SINGULAR:7,FEMALE_PLURAL:8,MALE_PLURAL:9,NEUTER_PLURAL:10,UNKNOWN_PLURAL:11,UNKNOWN:0};},null);
__d('XUIRadioList.react',['cx','Focus','InputLabel.react','Map','React','RTLKeys','XUIRadioInput.react','joinClasses','KeyStatus','VirtualCursorStatus'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('KeyStatus').isKeyDown,j=c('VirtualCursorStatus').isVirtualCursorTriggered,k=c('React').PropTypes,l=c('React').createClass({displayName:'XUIRadioList',propTypes:{name:k.string,onValueChange:k.func,selectedValue:k.any},componentWillMount:function(){this._radioRefs=new (c('Map'))();this._radioDOMRefs=new (c('Map'))();},_selectRadioInput:function(m){if(m>=this._radioRefs.size){m=0;}else if(m<0)m=this._radioRefs.size-1;var n=this._radioRefs.get(m),o=this._radioDOMRefs.get(m);if(!n.props.disabled)o.getElementsByTagName('input')[0].click();c('Focus').set(o);},_onRadioKeyDown:function(m){return function(event){switch(event.keyCode){case c('RTLKeys').UP:case c('RTLKeys').getLeft():event.preventDefault();this._selectRadioInput(m-1);break;case c('RTLKeys').DOWN:case c('RTLKeys').getRight():event.preventDefault();this._selectRadioInput(m+1);break;case c('RTLKeys').SPACE:event.preventDefault();this._selectRadioInput(m);break;}}.bind(this);},render:function(){var m=c('React').Children.map(this.props.children,function(p){return p?p.props.value:null;}).some(function(p){return p===this.props.selectedValue;}.bind(this)),n=c('React').Children.map(this.props.children,function(p,q){return p===null?null:c('React').cloneElement(p,{name:this.props.name,onKeyDown:this._onRadioKeyDown(q),onSelect:this.props.onValueChange,ref:function(r){this._radioRefs.set(q,r);}.bind(this),selectedValue:this.props.selectedValue,setupRadioRef:function(r){this._radioDOMRefs.set(q,r);}.bind(this),tabIndex:this.props.selectedValue===p.props.value||!m&&q===0?0:-1});},this),o=this.props.selectedValue!==undefined&&!this.props.onValueChange;return (c('React').createElement('ul',babelHelpers['extends']({},this.props,{'aria-readonly':o,name:null,role:'radiogroup'}),n));}});l.Item=c('React').createClass({displayName:'Item',propTypes:{disabled:k.bool,name:k.string,onKeyDown:k.func,onSelect:k.func,selectedValue:k.any,setupRadioRef:k.func,tabIndex:k.number,value:k.any},getInitialState:function(){return {showFocusRing:false};},_onBlur:function(){this.setState({showFocusRing:false});},_onFocus:function(){if(i()||j())this.setState({showFocusRing:true});},render:function(){var m=this.props.selectedValue===this.props.value,n=!!this.props.disabled;return (c('React').createElement('li',{'aria-checked':m,'aria-disabled':n,className:c('joinClasses')(this.props.className,!this.state.showFocusRing?"_1az7":''),onBlur:this._onBlur,onFocus:this._onFocus,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:'radio',tabIndex:this.props.tabIndex},c('React').createElement(c('InputLabel.react'),{'aria-label':this.props['aria-label'],'data-hover':this.props['data-hover'],'data-tooltip-content':this.props['data-tooltip-content'],'data-tooltip-position':this.props['data-tooltip-position'],display:'inline'},c('React').createElement(c('XUIRadioInput.react'),{checked:m,disabled:n,name:this.props.name,onChange:this._handleChange,tabIndex:-1,value:this.props.value}),c('React').createElement('label',null,this.props.children))));},_handleChange:function(event){this.props.onSelect&&this.props.onSelect(event.target.value);}});f.exports=l;},null);
__d('HostnameRewriter',['URI','isFacebookURI','lowerFacebookDomain'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(x){return String(x).replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1');},i=null,j=null,k=new RegExp('^(.*(?:channel-proxy|edge-chat).*)\\.(facebook\\.com)$','i'),l=new RegExp('facebook\\.com$'),m=new RegExp('^www\\.(|.*\\.)facebook\\.com$'),n=null,o='facebook.com';function p(x){i=null;var y;if(x){y='(^|\\.)';}else y='^';n=y+h(o)+'$';j=null;}function q(){if(!n)return null;if(i)return i;i=new RegExp(n,'i');return i;}function r(){if(j)return j;j=new RegExp('(^|\\.)('+h(o)+'|facebook\\.com)$','i');return j;}function s(){return function(x){x=new (c('URI'))(x);var y=k.exec(x.getDomain());if(!y||y.length<3)return x;x.setDomain('edge-chat.'+y[2]);return x;};}function t(){return function(x){x=new (c('URI'))(x);if(r().test(x.getDomain()))x.setProtocol('https');return x;};}function u(){return function(x){x=new (c('URI'))(x);var y=x.getDomain();if(r().test(y))x.setDomain(y.replace(l,o));return x;};}function v(){return function(x){x=new (c('URI'))(x);var y=x.getDomain();if(m.test(y))x.setDomain(o);return x;};}var w={registerFacebookFilters:function(x,y){o=x;p(y);c('isFacebookURI').setRegex(q());c('URI').registerFilter(s());c('URI').registerFilter(t());c('URI').registerFilter(u());c('lowerFacebookDomain').setDomain(o);},registerInternetDotOrgFilters:function(x,y){o=x;c('URI').registerFilter(v());}};f.exports=w;},null);
__d('StaticContainer.react',['React'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.shouldComponentUpdate=function(k){'use strict';return !!k.shouldUpdate;};j.prototype.render=function(){'use strict';var k=this.props.children;if(k===null||k===false)return null;return c('React').Children.only(k);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;},null);
__d('createChunkedResponseParser',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i="\r\n",j=2;function k(l,m){var n=0,o=function(p,q,r){if(m){p=m(p);!(p==null||typeof p==='string')?h(0):void 0;}if(p){var s=p.length;while(n<s){var t=p.indexOf(i,n);if(t<0)if(r){t=s;}else break;var u=p.slice(n,t);n+=u.length+j;l(u,q,r&&n>=s);}}else if(r)l('',q,true);};o.parseStreaming=true;return o;}f.exports=k;},null);
__d('ProgressBarBase',['emptyFunction','requestAnimationFrame','removeFromArray','arrayContains'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(j,k){'use strict';this._min=j||0;this._max=k||100;this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=c('emptyFunction');}i.prototype.setPosition=function(j){'use strict';j=this._normalizePosition(j);this._initialPosition=j;this._position=j;this.updateMeter(this._position);this.stop();return this;};i.prototype.setCompleteHandler=function(j){'use strict';this._onComplete=j||c('emptyFunction');return this;};i.prototype.setTarget=function(j,k){'use strict';this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=j;var l=this._normalizePosition(j);this._targetTime=k;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration){this._acceleration=2*(l-this._initialPosition-this._initialVelocity*k)/(k*k);}else{this._acceleration=0;this._velocity=this._initialVelocity=(l-this._initialPosition)/k;}if(this._position>=l){this._onComplete();}else this._start();return this;};i.prototype.setNoAcceleration=function(j){'use strict';this.useAcceleration=!j;return this;};i.prototype._clearOnCompleteTimeout=function(){'use strict';b.clearTimeout(this._onCompleteTimeout);};i.prototype.stop=function(){'use strict';this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this;};i.prototype._start=function(){'use strict';this._startTime=Date.now();this._onCompleteTimeout=b.setTimeout(function(){this.setPosition(this._targetPosition);this._onComplete();}.bind(this),this._targetTime);this._startAnimating();return this;};i.prototype._loop=function(){'use strict';var j=Date.now()-this._startTime;this._position=.5*this._acceleration*j*j+this._initialVelocity*j+this._initialPosition;var k=this._velocity;this._velocity=this._acceleration*j+this._initialVelocity;var l=k<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||l){this.setPosition(this._targetPosition);this._onComplete();}else this.updateMeter(this._position);};i.prototype.updateMeter=function(j){'use strict';throw "Unimplemented function: updateMeter";};i.prototype._normalizePosition=function(j){'use strict';return Math.min(Math.max((j-this._min)/(this._max-this._min),0),1);};i.prototype._startAnimating=function(){'use strict';if(!c('arrayContains')(h,this)){h.push(this);if(h.length===1)c('requestAnimationFrame')(i.prototype._requestAnimationFrameCallback);}};i.prototype._stopAnimating=function(){'use strict';c('removeFromArray')(h,this);};i.prototype._requestAnimationFrameCallback=function(){'use strict';h.forEach(function(j){j._loop();});if(h.length)c('requestAnimationFrame')(i.prototype._requestAnimationFrameCallback);};i.setPosition=function(j,k){'use strict';j.setPosition(k);};i.setTarget=function(j,k,l){'use strict';j.setTarget(k,l);};f.exports=i;},null);
__d('ProgressBar',['cx','csx','ProgressBarBase','CSS','Style','DOM'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('ProgressBarBase'));k=j&&j.prototype;function l(m,n,o){'use strict';k.constructor.call(this,n,o);this._root=m;this._meter=c('DOM').find(m,"div._5e4k");this._meter2=c('DOM').scry(m,"div._5e2g")[0];}l.prototype.getRoot=function(){'use strict';return this._root;};l.prototype.updateMeter=function(m){'use strict';var n=Math.min(Math.max(m,0),1);c('CSS').conditionClass(this._meter,"_5e2d",n<=0);c('CSS').conditionClass(this._meter,"_5e4j",n>=1);n=n*100+'%';c('Style').set(this._meter,'width',n);if(this._meter2){c('Style').set(this._meter2,'left',n);c('Style').set(this._meter2,'width',n);}};l.prototype.changeLabel=function(m){'use strict';var n=c('DOM').scry(this._root,"span._5e2h");n.forEach(function(o){c('DOM').setContent(o,m);});return this;};f.exports=l;},null);