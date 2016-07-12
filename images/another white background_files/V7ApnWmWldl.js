if (self.CavalryLogger) { CavalryLogger.start_js(["1GdNQ"]); }

__d('ReactComposerFocusHandleScrollAway',['Event','getActiveElement','throttle'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=-400,i=300,j={handler:function(k,l){var m=c('Event').listen(window,'scroll',c('throttle')(function(){var n=k.getBoundingClientRect().bottom;if(n<h){l();c('getActiveElement')().blur();m.remove();}},i));}};f.exports=j;},null);
__d('ReactComposerFocusWrapperCore.react',['cssVar','cx','fbt','ix','ReactComposerEvents','Arbiter','Event','Image.react','Keys','React','ReactDOM','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes,m=parseInt("10px",10),n=c('React').createClass({displayName:'ReactComposerFocusWrapperCore',_composerID:'',_fixedHeight:0,_initialized:false,_subscriptions:c('SubscriptionsHandler'),propTypes:{composerID:l.string.isRequired,onDismiss:l.func.isRequired,onFocus:l.func.isRequired,focused:l.bool.isRequired,onFirstFocus:l.func,fixHeight:l.bool},getDefaultProps:function(){return {focused:false,fixHeight:false};},componentWillMount:function(){this._composerID=this.props.composerID;},componentWillReceiveProps:function(o){if(this.props.fixHeight&&!this.props.focused&&o.focused){var p=c('ReactDOM').findDOMNode(this.refs.container);this._fixedHeight=p.offsetHeight+m;}},componentDidUpdate:function(o){if(!o.focused&&this.props.focused){var p=document.createEvent('HTMLEvents');if(p.initEvent){p.initEvent('resize',true,false);window.dispatchEvent(new (c('Event'))('resize'));}}},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();},render:function(){var o=this.props.fixHeight&&this.props.focused?{height:this._fixedHeight}:null,p=this.props.focused?this._renderDismissButton():null;return (c('React').createElement('div',{className:"_3u13"+(this.props.focused?' '+"_3u14":''),style:o},c('React').createElement('div',{className:"_3u15",onClick:this._onDismiss}),c('React').createElement('div',{className:"_3u16",ref:'container',onClick:this._onFocus},this.props.children,p)));},getComposerID:function(){return this._composerID;},getComposer:function(){return this.refs.container;},_renderDismissButton:function(){return (c('React').createElement('div',{className:"_3u17",onClick:this._onDismiss},c('React').createElement(c('Image.react'),{alt:j._("Close"),src:k('/images/moments_app/dialog-xout.png')})));},_initialize:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(c('Event').listen(document.body,'keydown',function(o){if(o.keyCode===c('Keys').ESC)this._onDismiss();}.bind(this)));this._subscribeComposerEvents();this.props.onFirstFocus&&this.props.onFirstFocus();},_subscribeComposerEvents:function(){var o=c('Arbiter').subscribe(c('ReactComposerEvents').POST_SUCCEEDED+this._composerID,function(){return this.props.onDismiss(true);}.bind(this)),p=c('Arbiter').subscribe(c('ReactComposerEvents').COMPOSER_RESET+this._composerID,function(q,r){if(r&&r.newComposerID){this._composerID=r.newComposerID;this._subscribeComposerEvents();o.remove&&o.remove();p.remove&&p.remove();}}.bind(this));this._subscriptions.addSubscriptions(o,p);},_onFocus:function(){if(this.props.focused)return;!this._initialized&&this._initialize();this.props.onFocus();},_onDismiss:function(){this.props.onDismiss();}});f.exports=n;},null);
__d('ReactComposerFocusInline.react',['ReactComposerFocusHandleScrollAway','ReactComposerFocusWrapperCore.react','React','ReactDOM'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'ReactComposerFocusInline',propTypes:{composerID:h.string.isRequired},getInitialState:function(){return {focused:false};},componentWillUnmount:function(){this._disableFocus();},render:function(){return (c('React').createElement(c('ReactComposerFocusWrapperCore.react'),{composerID:this.props.composerID,focused:this.state.focused,onFocus:this._enableFocus,onDismiss:this._disableFocus,ref:'focus'},this.props.children));},_enableFocus:function(){var j=c('ReactDOM').findDOMNode(this.refs.focus.getComposer());c('ReactComposerFocusHandleScrollAway').handler(j,this._disableFocus);this.setState({focused:true});},_disableFocus:function(){this.setState({focused:false});}});f.exports=i;},null);
__d('ReactComposerFocusScrollLockUtils',['csx','cx','CSS','DOMQuery','Style','getViewportDimensions'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=300,k=400,l={_interval:0,_pageRoot:null,enable:function(m){c('CSS').addClass(this._getPageRoot(),"_ihc");var n=function(){var o=c('getViewportDimensions')(),p=m.offsetHeight+k,q=Math.max(o.height,p)+'px';if(c('Style').get(this._getPageRoot(),'height')!==q)c('Style').set(this._getPageRoot(),'height',q);}.bind(this);this._interval=setInterval(n,j);},disable:function(){c('CSS').removeClass(this._getPageRoot(),"_ihc");c('Style').set(this._getPageRoot(),'height',null);clearInterval(this._interval);},_getPageRoot:function(){if(!this._pageRoot)this._pageRoot=c('DOMQuery').scry(document.body,"._li")[0];return this._pageRoot;}};f.exports=l;},null);
__d('ReactComposerFocusModal.react',['cx','fbt','ix','ReactComposerFocusScrollLockUtils','ReactComposerFocusWrapperCore.react','Arbiter','Bootloader','Image.react','React','ReactDOM','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=null,m=null,n=null,o=c('React').createClass({displayName:'ReactComposerFocusModal',propTypes:{composerID:k.string.isRequired},getInitialState:function(){return {focused:false,showDiscardDialog:false};},componentWillUnmount:function(){this._disableFocus();},render:function(){var p=this.state.showDiscardDialog&&m?c('React').createElement(m,{onConfirm:this._dismissAndResetComposer,onCancel:this._hideDiscardDialog}):null;return (c('React').createElement('div',null,c('React').createElement(c('ReactComposerFocusWrapperCore.react'),{composerID:this.props.composerID,focused:this.state.focused,fixHeight:true,onFirstFocus:this._onFirstFocus,onFocus:this._enableFocus,onDismiss:this._onFocusDismissed,ref:'focus'},this.props.children),p));},_onFirstFocus:function(){c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusDiscardDialog.react","ReactComposerInit"],function(p,q,r){n=p;m=q;l=r;},'ReactComposerFocusModal.react');},_onFocusDismissed:function(p){if(p)return this._disableFocus();if(m&&n&&n.hasUnsavedChanges(this._getComposerID())){this._showDiscardDialog();}else this._dismissAndResetComposer();},_dismissAndResetComposer:function(){this._hideDiscardDialog();l&&l.resetComposer(this._getComposerID());c('Arbiter').inform('ReactComposerFocus/reset/'+this._getComposerID());this._disableFocus();},_enableFocus:function(){var p=c('ReactDOM').findDOMNode(this.refs.focus.getComposer());c('ReactComposerFocusScrollLockUtils').enable(p);this.setState({focused:true});},_disableFocus:function(){c('ReactComposerFocusScrollLockUtils').disable();this.setState({focused:false});},_showDiscardDialog:function(){this.setState({showDiscardDialog:true});},_hideDiscardDialog:function(){this.setState({showDiscardDialog:false});},_getComposerID:function(){return this.refs.focus.getComposerID();}});f.exports=o;},null);