if (self.CavalryLogger) { CavalryLogger.start_js(["IODQc"]); }

__d('AsyncLoader',['AsyncRequest','BaseAsyncLoader'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){this._endpoint=i;this._type=j;}Object.assign(h.prototype,c('BaseAsyncLoader').prototype);h.prototype.send=function(i,j,k,l,m){new (c('AsyncRequest'))(i).setData({ids:j}).setHandler(l).setErrorHandler(m).setAllowCrossPageTransition(true).setMethod('GET').setReadOnly(true).send();};f.exports=h;},null);
__d('ChatHovercard',['Arbiter','AsyncLoader','Bootloader','JSLogger','debounce'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=5,i=new (c('AsyncLoader'))('/ajax/chat/hovercard/sidebar.php','hover'),j=c('JSLogger').create('chat_hovercard');c('Arbiter').subscribe('Hovercard/dirty',i.reset.bind(i));function k(o,p){i.get(o,function(q){setTimeout(function(){if(!q){j.error('fetch_failure',{id:o});return;}c('Bootloader').loadModules(["Hovercard"],function(r){var s=r.getDialog(q);if(!s){j.error('no_hovercard',{id:o,endpoint:q});return;}if(o==p.getActiveID())p.showHovercard(o,s);},'ChatHovercard');},0);});}function l(o,p){var q=[];function r(u){if(u>=0&&u<o.length)q.push(o[u]);}var s=o.indexOf(p);if(s>-1){r(s);for(var t=1;t<h;t++){r(s+t);r(s-t);}}return q.filter(function(u){return u;});}function m(o,p){var q=p.getActiveID();if(q){var r=o.getShowingUsers(),s=l(r,q);i.get(s,function(){});}}function n(o){var p=o.getHoverController();p.registerDefault(k);p.subscribe('hover',c('debounce')(m.bind(null,o,p),100));}f.exports=n;},null);
__d('ChatOrderedListHover',['csx','ArbiterMixin','CSS','ErrorUtils','Event','LayerHideOnBlur','Parent','mixin','setTimeoutAcrossTransitions','shield'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();function k(n){c('CSS').addClass(n,'fetching');}function l(n){c('CSS').removeClass(n,'fetching');}i=babelHelpers.inherits(m,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function m(n){'use strict';j.constructor.call(this);this._orderedList=n;this._root=n.getRoot();c('Event').listen(this._root,'mouseover',this._mouseOver.bind(this));c('Event').listen(this._root,'mouseleave',this._mouseLeave.bind(this));n.subscribe('click',c('shield')(this._hide,this));}m.prototype._mouseOver=function(event){'use strict';if(this._paused)return;var n=event.getTarget(),o=c('Parent').bySelector(n,"._42fz")||c('Parent').bySelector(n,"._5a58");o&&this._setActiveItem(o);};m.prototype._mouseLeave=function(event){'use strict';this._setActiveItem(null);};m.prototype._clearTimeouts=function(){'use strict';this._showTimeout&&clearTimeout(this._showTimeout);this._showTimeout=null;this._hideTimeout&&clearTimeout(this._hideTimeout);this._hideTimeout=null;};m.prototype._hide=function(){'use strict';if(this._showingDialog){this._showingDialog.hide();this._showingDialog=null;this._showingID=null;}};m.prototype._show=function(){'use strict';var n=this.getActiveID(),o=false;if(this._defaultHandler){o=true;c('ErrorUtils').applyWithGuard(this._defaultHandler,{},[n,this]);}if(o&&this._showingID!=this.getActiveID())k(this._activeItem);};m.prototype._setActiveItem=function(n){'use strict';if(n!=this._activeItem){this._clearTimeouts();this._activeItem&&l(this._activeItem);if(n){this._activeItem=n;var o=this._showingDialog?0:600;this._showTimeout=c('setTimeoutAcrossTransitions')(function(){return this._show();}.bind(this),o);this.inform('hover');}else{this._activeItem=null;this._hideTimeout=c('setTimeoutAcrossTransitions')(function(){return this._hide();}.bind(this),10);this.inform('leave');}}};m.prototype.registerDefault=function(n){'use strict';this._defaultHandler=n;};m.prototype.getActiveID=function(){'use strict';var n=this._activeItem&&this._orderedList.getUserForNode(this._activeItem);return n||null;};m.prototype.showHovercard=function(n,o){'use strict';if(n==this.getActiveID()&&n!=this._showingID){this._clearTimeouts();l(this._activeItem);this._hide();this._showingDialog=o;this._showingID=n;var p=o.subscribe('mouseenter',this._setActiveItem.bind(this,this._activeItem)),q=o.subscribe('mouseleave',function(){p.unsubscribe();this._setActiveItem(null);}.bind(this)),r=o.subscribe('hide',function(){this.inform('hovercard_hide');p.unsubscribe();q.unsubscribe();r.unsubscribe();}.bind(this));o.enableBehavior(c('LayerHideOnBlur')).setContext(this._activeItem).setPosition('left').show();this.inform('hovercard_show');}};Object.assign(m.prototype,{_root:null,_activeItem:null,_hideTimeout:null,_showTimeout:null,_showingDialog:null,_showingID:null,_defaultHandler:null});f.exports=m;},null);
__d("ChatSidebarConstants",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={LITESTAND_CLASSIC_SIZE:32,IMAGE_SIZE:32};Object.assign(h,{getImageSize:function(i){if(i===false)return h.IMAGE_SIZE;return h.LITESTAND_CLASSIC_SIZE;},getItemHeight:function(){return h.IMAGE_SIZE+8;}});f.exports=h;},null);
__d('SplitImage.react',['cx','React','Image.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'SplitImage',render:function(){var j=this.props.size;return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55lt"),style:babelHelpers['extends']({},this.props.style||{},{width:j,height:j})}),this.renderImages()));},renderImages:function(){if(!this.props.srcs)return null;var j=this.props.srcs,k=Array.isArray(j);if(k){j=j.filter(function(l){return l!==null;});if(!j.length)return null;}if(!k||j.length==1)return this.renderOne(k?j[0]:j);return j.length==2?this.renderTwo(j):this.renderThree(j);},renderOne:function(j){return (c('React').createElement(c('Image.react'),{src:j,width:this.props.size,height:this.props.size,alt:''}));},renderTwo:function(j){var k=this.props.size,l=Math.floor(k/2),m=-Math.floor(l/2),n="_55lu"+(this.props.border?' '+"_57xo":'');return (c('React').createElement('div',null,c('React').createElement('div',{className:"_55lu",style:{width:l}},c('React').createElement(c('Image.react'),{src:j[0],width:k,height:k,style:{marginLeft:m},alt:''})),c('React').createElement('div',{className:n,style:{width:l}},c('React').createElement(c('Image.react'),{src:j[1],width:k,height:k,style:{marginLeft:m},alt:''}))));},renderThree:function(j){var k=this.props.size,l=Math.floor(k/3*2),m=-Math.floor((k-l)/2),n=Math.floor(k/2),o=k-l,p=-Math.floor((n-o)/2),q="_55lu"+(this.props.border?' '+"_57pl":''),r="_55lu"+(this.props.border?' '+"_57pm":'');return (c('React').createElement('div',null,c('React').createElement('div',{className:q,style:{width:l}},c('React').createElement(c('Image.react'),{src:j[0],width:k,height:k,style:{marginLeft:m},alt:''})),c('React').createElement('div',{className:r,style:{width:o,height:n}},c('React').createElement(c('Image.react'),{src:j[1],width:n,height:n,style:{marginLeft:p},alt:''})),c('React').createElement('div',{className:"_55lu",style:{width:o,height:n}},c('React').createElement(c('Image.react'),{src:j[2],width:n,height:n,style:{marginLeft:p},alt:''}))));}});f.exports=i;},null);
__d('AbstractBadge.react',['cx','invariant','React','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;function k(m){return parseInt(m,10)===m;}var l=c('React').createClass({displayName:'AbstractBadge',propTypes:{count:j.number.isRequired,maxcount:j.number},getDefaultProps:function(){return {maxcount:20};},render:function(){var m=this.props.count,n=this.props.maxcount;!k(m)?i(0):void 0;!k(n)?i(0):void 0;var o="_51lp"+(m>n?' '+"_51lr":'')+(m===0?' '+"hidden_elem":'');return (c('React').createElement('span',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,o)}),m>n?n+'+':m));}});f.exports=l;},null);
__d('XUIBadge.react',['cx','React','AbstractBadge.react','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'XUIBadge',propTypes:{type:i.oneOf(['regular','special'])},getDefaultProps:function(){return {type:'regular'};},render:function(){var k=this.props.type,l="_5ugh"+(k==='regular'?' '+"_5ugf":'')+(k==='special'?' '+"_5ugg":'');return (c('React').createElement(c('AbstractBadge.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,l),type:null})));}});f.exports=j;},null);
__d('ChatSidebarItem.react',['cx','ix','xuiglyph','AvailableListConstants','XUIBadge.react','ChatConfig','ChatSidebarConstants','Image.react','Link.react','MercuryConfig','MessengerTextWithEmoticons.react','ReactComponentWithPureRenderMixin','React','SplitImage.react','TextWithEmoticons.react'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=c('ChatConfig').get('divebar_rounded_profile',false),m=9,n=c('React').createClass({displayName:'ChatSidebarItem',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{image:k.string,images:k.array,isPlayingGame:k.bool,birthday:k.bool,context:k.node,href:k.string,imageSize:k.number,name:k.node.isRequired,nameCanHaveEmoji:k.bool,onClick:k.func,status:k.number,statusTime:k.string,unreadCount:k.number,isMessengerOnlyContact:k.bool,profileBadge:k.string},render:function(){var w="_55ln"+(this.props.context?' '+"_55lo":'')+(l?' '+"_qhr":'');return (c('React').createElement(c('Link.react'),{className:w,href:{url:this.props.href},onClick:this.props.onClick,rel:'ignore'},c('React').createElement('div',{className:"_55lp"},c('React').createElement('div',{className:"_55lq"},c('React').createElement(c('SplitImage.react'),{size:this.props.imageSize||c('ChatSidebarConstants').IMAGE_SIZE,srcs:this.props.image||this.props.images})),c('React').createElement('div',{className:"_5bon"},this.renderProfileBadge(),this.renderPlayingGame(),this.renderBirthday(),this.renderUnreadCount(),this.renderStatus()),c('React').createElement('div',{className:"_55lr"},this.renderName()),c('React').createElement('div',{className:"_55ls"},this.props.context))));},renderName:function(){if(this.props.nameCanHaveEmoji){var w=c('React').createElement(c('TextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:this.props.name});if(c('MercuryConfig').MessengerNewEmojiGK)w=c('React').createElement(c('MessengerTextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:this.props.name});return w;}else return this.props.name;},renderUnreadCount:function(){var w=this.props.unreadCount;if(!w)return null;return (c('React').createElement(c('XUIBadge.react'),{count:w,maxcount:m,type:'regular'}));},renderStatus:function(){var w=this.getStatusSrc();if(!w&&!this.props.statusTime)return null;var x=w?c('React').createElement(c('Image.react'),{className:"_568_",src:w}):null,y=true;if(this.props.unreadCount&&this.props.unreadCount>0){x=this.props.statusTime?null:x;y=false;}return (c('React').createElement('div',{className:"_568z"},y?this.renderLastActiveTime():null,x));},renderLastActiveTime:function(){return (c('React').createElement('div',{className:"_568-"},this.props.statusTime));},renderBirthday:function(){if(!this.props.birthday)return null;return (c('React').createElement(c('Image.react'),{className:"_5dv3",src:s()}));},renderPlayingGame:function(){if(this.props.statusTime||this.props.birthday||!this.props.isPlayingGame)return null;return (c('React').createElement('div',{className:"_46b2"},c('React').createElement(c('Image.react'),{className:"_46b3",src:v()})));},renderProfileBadge:function(){if(this.props.statusTime||this.props.isPlayingGame||this.props.birthday||!this.props.profileBadge)return null;return (c('React').createElement('div',{className:"_46b2"},c('React').createElement(c('Image.react'),{className:"_g7p",src:this.props.profileBadge})));},getStatusSrc:function(){if(this.props.isMessengerOnlyContact)return u();return this.props.status===c('AvailableListConstants').ACTIVE?t():null;}}),o=void 0,p=void 0,q=void 0,r=void 0;function s(){if(!o)o=i('/images/gifts/icons/cake_icon.png');return o;}function t(){if(!q)q=i('/images/chat/sidebar/buddylist_nub/greenDot.png');return q;}function u(){if(!r)r=i('/images/chat/sidebar/buddylist_nub/phone.png');return r;}function v(){if(!p)p=j({name:'games',size:'small'});return p;}f.exports=n;},null);
__d('ChatSidebarThread.react',['fbt','ChatSidebarItem.react','ChatOpenTab','MercuryParticipantListRenderer','WebMessengerPermalinkConstants','ReactComponentWithPureRenderMixin','React','TooltipData'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=10,k='\n',l=c('React').createClass({displayName:'ChatSidebarThread',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{image:i.string,imageSize:i.number,name:i.string,participants:i.array.isRequired,numOtherParticipants:i.number.isRequired,referrer:i.string,status:i.number,threadFBID:i.string,unreadCount:i.number},getDefaultProps:function(){return {numOtherParticipants:j};},render:function(){var o=this.props.name,p=m(this.props.threadFBID,this.props.participants,this.props.numOtherParticipants),q=o?p:undefined,r=this.props.image?[]:n(this.props.participants),s=o?o:p;return (c('React').createElement('div',c('TooltipData').propsFor(this._renderParticipantsTooltip()),c('React').createElement(c('ChatSidebarItem.react'),{context:q,href:c('WebMessengerPermalinkConstants').getURIPathForThreadID(this.props.threadFBID),imageSize:this.props.imageSize,image:this.props.image,images:r,name:s,nameCanHaveEmoji:true,onClick:this._handleClick,referrer:this.props.referrer,status:this.props.status,unreadCount:this.props.unreadCount})));},_renderParticipantsTooltip:function(){var o=[],p=this.props.participants.length,q=this.props.numOtherParticipants,r=Math.min(j,p);if(q-r===1)r--;for(var s=0;s<r;s++)o.push(this.props.participants[s].name);if(r<q)o.push(h._("and {num} more...",[h.param('num',q-r)]));return o.join(k);},_handleClick:function(o){o.preventDefault();c('ChatOpenTab').openThread(this.props.threadFBID,this.props.referrer);}});function m(o,p,q){return new (c('MercuryParticipantListRenderer'))().setIsNewThread(!o).setUseShortName(true).setTotalParticipantCount(q).renderParticipantList(p);}function n(o){return o.map(function(p){return p.image_src;}).filter(function(p){return p;});}f.exports=l;},null);
__d('ChatSidebarGroupThreadsGroup.react',['cx','ChatSidebarThread.react','ChatSidebarSections','ChatSidebarConstants','PresencePrivacy','PresenceStatus','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'ChatSidebarGroupThreadsGroup',propTypes:{groups:i.array.isRequired,isDisconnected:i.bool},render:function(){return (c('React').createElement('ul',null,this.props.groups.map(this._renderGroup)));},_renderGroup:function(k){var l=k.mercury_thread.participants,m=this.props.isDisconnected||c('PresencePrivacy').isUserOffline();return (c('React').createElement('li',{className:"_42fz"+(m?' '+"_570-":''),'data-id':k.uid,key:k.uid},c('React').createElement(c('ChatSidebarThread.react'),{image:k.mercury_thread.image_src,imageSize:c('ChatSidebarConstants').getImageSize(),name:k.mercury_thread.name,participants:k.participants_to_render,numOtherParticipants:l.length-1,referrer:c('ChatSidebarSections').ORDERED_LIST,status:c('PresenceStatus').getGroup(l),threadFBID:k.uid})));}});f.exports=j;},null);
__d('ChatSidebarHeader.react',['cx','ReactComponentWithPureRenderMixin','React','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').createClass({displayName:'ReactChatSidebarHeader',mixins:[c('ReactComponentWithPureRenderMixin')],render:function(){return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55ob")}),c('React').createElement('div',{className:"_55oc"},this.props.children)));}});f.exports=i;},null);
__d('ChatSidebarUser.react',['ChatOpenTab','ChatSidebarItem.react','WebMessengerPermalinkConstants','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'ChatSidebarUser',mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{birthday:h.bool,image:h.string,imageSize:h.number,isPlayingGame:h.bool,name:h.string,sectionName:h.string.isRequired,slot:h.number,status:h.number,statusTime:h.string,unreadCount:h.number,userID:h.string.isRequired,isMessengerOnlyContact:h.bool,profileBadge:h.string},render:function(){var j=c('WebMessengerPermalinkConstants').getURIPathForIDOrVanity(this.props.userID);return (c('React').createElement(c('ChatSidebarItem.react'),{onClick:this._openTab,href:j,imageSize:this.props.imageSize,image:this.props.image,isPlayingGame:this.props.isPlayingGame,name:this.props.name,nameCanHaveEmoji:false,status:this.props.status,birthday:this.props.birthday,statusTime:this.props.statusTime,context:this.props.context,unreadCount:this.props.unreadCount,isMessengerOnlyContact:this.props.isMessengerOnlyContact,profileBadge:this.props.profileBadge}));},_openTab:function(j){c('ChatOpenTab').openUserTab(this.props.userID,this.props.sectionName,{global_slot:this.props.slot});j.preventDefault();}});f.exports=i;},null);
__d('ChatUnreadCountActionTypes',['keyMirror'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({COUNT_UPDATED:null});},null);
__d('ChatUnreadCountStore',['ChatDispatcher','ChatUnreadCountActionTypes','FluxStore','ifRequired'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('ChatUnreadCountActionTypes').COUNT_UPDATED:this.__emitChange();break;default:break;}};j.prototype.get=function(k){return c('ifRequired')('ChatUnreadCount',function(l){return l.get().getUnreadCountForUID(k);},function(){return 0;});};f.exports=new j();},null);
__d('PresenceStatusStore',['ChatDispatcher','FluxStore','PresenceStatus','PresenceStatusActionTypes'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('PresenceStatusActionTypes').AVAILABILITY_CHANGED:this.__emitChange();break;default:break;}};j.prototype.get=function(k){return c('PresenceStatus').get(k);};j.prototype.getIsPlaying=function(k){return c('PresenceStatus').isPlayingCanvasGameUser(k);};f.exports=new j();},null);
__d('ShortProfilesActionTypes',['keyMirror'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({PROFILE_UPDATED:null});},null);
__d('ShortProfilesStore',['ChatDispatcher','FluxStore','ShortProfiles','ShortProfilesActionTypes'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('ShortProfilesActionTypes').PROFILE_UPDATED:this.__emitChange();break;default:break;}};j.prototype.get=function(k){var l=c('ShortProfiles').getNow(k);if(!l)c('ShortProfiles').get(k,this.$ShortProfilesStore1);return l;};j.prototype.$ShortProfilesStore1=function(k){c('ChatDispatcher').dispatch({type:c('ShortProfilesActionTypes').PROFILE_UPDATED});};f.exports=new j();},null);
__d('StoreAndPropBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function(){return this.constructor.calculateState(this.props);},componentWillMount:function(){!this.constructor.calculateState?h(0):void 0;this._recalculateStateID=null;var m=function(){if(this.isMounted())this.setState(this.constructor.calculateState(this.props));this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(m);}.bind(this));},componentWillReceiveProps:function(m){this.setState(this.constructor.calculateState(m));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;},null);
__d("XProfileBadgeAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile_badge\/async\/badges\/",{user_ids:{type:"StringVector",defaultValue:[]}});},null);
__d('ChatSidebarUserGroup.react',['cx','AsyncRequest','AvailableListConstants','ChatSidebarSections','ChatSidebarUser.react','ChatUnreadCountStore','LastActiveTimes','PresencePrivacy','PresenceStatusStore','ProfileBadgeConfig','React','ShortProfilesStore','StoreAndPropBasedStateMixin','SubscriptionsHandler','XProfileBadgeAsyncController','createCancelableFunction'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=Object.keys(c('ChatSidebarSections')).map(function(l){return c('ChatSidebarSections')[l];}),k=c('React').createClass({displayName:'ChatSidebarUserGroup',_subscriptions:null,_updateProfileBadges:null,mixins:[c('StoreAndPropBasedStateMixin')(c('ChatUnreadCountStore'),c('PresenceStatusStore'),c('ShortProfilesStore'))],propTypes:{ids:i.arrayOf(i.string).isRequired,isDisconnected:i.bool,loadExtras:i.bool,sectionName:i.oneOf(j).isRequired},statics:{calculateState:function(l){var m={},n={},o=[],p={};l.ids.forEach(function(q){var r=c('PresenceStatusStore').get(q);if(r===c('AvailableListConstants').ACTIVE)n[q]=r;var s=c('ShortProfilesStore').get(q);s&&o.push(s);p[q]=c('ChatUnreadCountStore').get(q);if(l.loadExtras)m[q]=c('PresenceStatusStore').getIsPlaying(q);});return {playingMap:m,statusMap:n,unreadCounts:p,userData:o};}},componentWillMount:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this._updateProfileBadges=c('createCancelableFunction')(function(){var l=c('XProfileBadgeAsyncController').getURIBuilder().setStringVector('user_ids',this.props.ids).getURI();new (c('AsyncRequest'))().setURI(l).setHandler(function(m){this.setState({userIDToProfileBadge:m.payload});}.bind(this)).send();}.bind(this));this._subscriptions.addSubscriptions(this._updateProfileBadges);this.componentWillReceiveProps(this.props);},shouldComponentUpdate:function(l,m){var n=this.props,o=n.ids,p=babelHelpers.objectWithoutProperties(n,['ids']);for(var q in p)if(p.hasOwnProperty(q))if(p[q]!==l[q])return true;var r=m.userData,s=this.state?this.state.userData:[];if(r.length!==s.length)return true;for(var t=0;t<s.length;t++)if(s[t].id!==r[t].id)return true;for(var u in this.state.unreadCounts)if(this.state.unreadCounts[u]!==m.unreadCounts[u])return true;var v=this.state.statusMap,w=m.statusMap;for(var x in v)if(v.hasOwnProperty(x))if(v[x]!==w[x])return true;for(var y in w)if(w.hasOwnProperty(y))if(w[y]!==v[y])return true;return false;},componentWillUnmount:function(){this._subscriptions.release();},componentWillReceiveProps:function(l){if(this.props.loadExtras&&c('ProfileBadgeConfig').show_sidebar_badge)this._updateProfileBadges&&this._updateProfileBadges();},render:function(){return (c('React').createElement('ul',this.props,this.state.userData.map(this._renderProfile)));},_renderProfile:function(l,m){if(!l.id)return null;var n=this.state.statusMap[l.id],o=n!==c('AvailableListConstants').ACTIVE?c('LastActiveTimes').getShortDisplay(l.id):undefined,p=this.props.isDisconnected||!c('PresencePrivacy').allows(l.id),q=this.state.userIDToProfileBadge?this.state.userIDToProfileBadge[l.id]:undefined;return (c('React').createElement('li',{className:"_42fz"+(p?' '+"_570-":''),'data-id':l.id,key:l.id},c('React').createElement(c('ChatSidebarUser.react'),{birthday:l.is_birthday,image:l.thumbSrc,imageSize:this.props.imageSize,isPlayingGame:!!this.state.playingMap[l.id],name:l.name,sectionName:this.props.sectionName,slot:m,status:n,statusTime:o,userID:l.id,unreadCount:this.state.unreadCounts[l.id],isMessengerOnlyContact:l.is_messenger_only,profileBadge:q})));}});f.exports=k;},null);
__d('ChatSidebarOrderedList.react',['cx','fbt','Bootloader','ChatQuietLinks','ChatReliabilityInstrumentation','ChatSidebarConstants','ChatSidebarGroupThreadsGroup.react','ChatSidebarHeader.react','ChatSidebarSections','ChatSidebarUserGroup.react','PresencePrivacy','ReactComponentWithPureRenderMixin','React','ReactDOM','Run','Scroll','SubscriptionsHandler','ifRequired'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ChatSidebarOrderedList',_subscriptions:null,mixins:[c('ReactComponentWithPureRenderMixin')],propTypes:{availableUsers:j.array.isRequired,groups:j.array.isRequired,isSidebar:j.bool.isRequired,scrollContainer:j.object,topUsers:j.array.isRequired},getInitialState:function(){return {isDisconnected:false,renderBelowFold:false};},componentDidMount:function(){c('ChatQuietLinks').nukeLinks(c('ReactDOM').findDOMNode(this));this._subscriptions=new (c('SubscriptionsHandler'))();c('Run').onAfterLoad(function(){this.setState({renderBelowFold:true});this._bootloadChannelSubscription();}.bind(this));},componentWillUnmount:function(){this._subscriptions.release();},render:function(){var l=c('PresencePrivacy').getOnlinePolicy()===c('PresencePrivacy').ONLINE_TO_WHITELIST&&c('PresencePrivacy').getVisibility()?this._renderOfflineSection():this._renderOnlineSection();return (c('React').createElement('div',null,this._renderFriendsSection(),this._renderGroupsSection(),l));},_scrollToSeparator:function(l){var m=this.props.scrollContainer;if(!m)return;var n=m.clientHeight,o=m.scrollHeight,p=c('Scroll').getTop(m),q=Math.min(l.offsetTop,o-n);if(p!==q)c('ifRequired')('Animation',function(r){var s=Math.abs(q-p)/m.clientHeight*500;new r(m).to('scrollTop',q).ease(r.ease.end).duration(s).go();},function(){c('Scroll').setTop(m,q);});},_renderOfflineSection:function(){var l=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),m=this.props.topUsers.filter(function(o){return !c('PresencePrivacy').allows(o);});m.splice(-2);var n=c('React').createElement('a',{ajaxify:'/ajax/chat/privacy/settings_dialog.php?ref=whitelist_separator',href:'#',rel:'dialog'},i._("Edit"));return [c('React').createElement(c('ChatSidebarHeader.react'),{key:'usersSeparator1'},i._("MORE FRIENDS")),c('React').createElement(c('ChatSidebarHeader.react'),{className:"_5j9-",key:'usersSeparator2'},i._("These friends can't see you on chat. {=link}",[i.param('=link',n)])),c('React').createElement(c('ChatSidebarUserGroup.react'),{ids:m,isDisconnected:this.state.isDisconnected,imageSize:l,key:c('ChatSidebarSections').OFFLINE_USERS,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').OFFLINE_USERS})];},_renderOnlineSection:function(){if(this.props.availableUsers.length===0)return null;if(!this.state.renderBelowFold){var l=c('ChatSidebarConstants').getItemHeight();return [c('React').createElement('div',{key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,style:{height:l*this.props.availableUsers.length}})];}var m=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),n=i._("{MORE ONLINE FRIENDS} ({=count})",[i.param('MORE ONLINE FRIENDS',i._("MORE FRIENDS")),i.param('=count',this.props.availableUsers.length)]),o=c('React').createElement(c('ChatSidebarUserGroup.react'),{ids:this.props.availableUsers,imageSize:m,isDisconnected:this.state.isDisconnected,key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').MORE_ONLINE_FRIENDS});return [c('React').createElement(c('ChatSidebarHeader.react'),{ref:'usersSeparator',key:'usersSeparator',onClick:function(){return this._scrollToSeparator(c('ReactDOM').findDOMNode(this.refs.usersSeparator));}.bind(this)},n),o];},_renderGroupsSection:function(){if(this.props.groups.length===0)return null;var l=this.state.isDisconnected||c('PresencePrivacy').isUserOffline();return [c('React').createElement(c('ChatSidebarHeader.react'),{ref:'groupSeparator',key:'groupSeparator',className:l?"_570-":'',onClick:function(){return this._scrollToSeparator(c('ReactDOM').findDOMNode(this.refs.groupSeparator));}.bind(this)},i._("GROUP CONVERSATIONS")),c('React').createElement(c('ChatSidebarGroupThreadsGroup.react'),{groups:this.props.groups,isDisconnected:this.state.isDisconnected,key:'group_threads_section',loadExtras:this.state.renderBelowFold})];},_renderFriendsSection:function(){var l=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),m=this.props.topUsers;if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)m=this.props.topUsers.filter(function(n){return c('PresencePrivacy').allows(n);});return (c('React').createElement(c('ChatSidebarUserGroup.react'),{key:c('ChatSidebarSections').ORDERED_LIST,ids:m,isDisconnected:this.state.isDisconnected,imageSize:l,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').ORDERED_LIST}));},_bootloadChannelSubscription:function(){c('Bootloader').loadModules(["ChannelConnection"],function(l){this._subscriptions.addSubscriptions(l.subscribe([l.CONNECTED,l.RECONNECTING,l.SHUTDOWN,l.MUTE_WARNING,l.UNMUTE_WARNING],function(){var m=l.disconnected();if(m!==this.state.isDisconnected){if(m){c('ChatReliabilityInstrumentation').logCHANNEL_DISCONNECT();}else c('ChatReliabilityInstrumentation').logCHANNEL_CONNECT();this.setState({isDisconnected:m});}}.bind(this)));}.bind(this),'ChatSidebarOrderedList.react');}});f.exports=k;},null);
__d('ChatSortUsers',['ShortProfiles','TokenizeUtil'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(k){if(h[k])return h[k];var l=(c('ShortProfiles').getNow(k)||{}).name;if(l)return h[k]=c('TokenizeUtil').flatten(l);return '~';}var j={sortAlphabetical:function(k,l){var m=i(k),n=i(l);if(m!==n)return m<n?-1:1;return 0;}};f.exports=j;},null);
__d('PresenceOrderedList',['ChatSortUsers','InitialChatFriendsList','PresencePrivacy','PresenceStatus'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';this.$PresenceOrderedList1=this.$PresenceOrderedList2();}h.prototype.getSorted=function(i){'use strict';var j=[];this.$PresenceOrderedList1.forEach(function(k){var l=k[0],m=k[1];if(j.length>=i)return false;if(c('PresencePrivacy').getFriendVisibility(l)==c('PresencePrivacy').BLACKLISTED)return true;if(m==c('PresenceStatus').get(l))j.push(l);});return j;};h.prototype.getAvailableSorted=function(i){'use strict';var j=c('PresenceStatus').getOnlineIDs();if(i)j=j.filter(function(k){return i&&i.indexOf(k)===-1;});return j.sort(c('ChatSortUsers').sortAlphabetical);};h.prototype.$PresenceOrderedList2=function(){'use strict';var i=c('InitialChatFriendsList').list||[];return i.map(function(j){var k=j.slice(0,-2),l=Number(j.slice(-1));return [k,l];});};f.exports=new h();},null);
__d('ChatOrderedList',['csx','Arbiter','ArbiterMixin','AvailableList','AvailableListConstants','CSS','ChatConfig','ChatHovercard','ChatOptions','ChatOrderedListHover','ChatSidebarConstants','ChatSidebarOrderedList.react','ChatSidebarPreloadStore','DOM','DataStore','Event','JSLogger','Parent','PresenceOrderedList','PresencePrivacy','React','ReactDOM','debounceAcrossTransitions','mixin','shield'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this._isSidebar=l;this._root=m;this._isVisible=false;this._excludedIds={};this._numTopFriends=5;this._groups=[];this._hoverController=null;this._isHovering=false;this._topUsers=[];this._orderedList=c('DOM').find(this._root,'.fbChatOrderedList');c('Event').listen(this._orderedList,'mouseover',function(){this._isHovering=true;}.bind(this));c('Event').listen(this._orderedList,'mouseout',function(){this._isHovering=false;this._render();}.bind(this));this._scrollableOrderedList=c('Parent').byClass(this._root,'scrollableOrderedList');this._scrollableArea=c('Parent').byClass(this._root,'scrollable');if(this._isSidebar)new (c('ChatHovercard'))(this);c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(n,o){o.chat_lists=o.chat_lists||{sorted_list:this.getSortedList(),available_list:c('PresenceOrderedList').getAvailableSorted(),excluded_list:this._excludedIds};}.bind(this));c('PresencePrivacy').subscribe('privacy-user-presence-changed',c('shield')(this.updateTopUsers,this));c('AvailableList').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,c('shield')(this.updateTopUsers,this));}k.prototype.getShowingUsers=function(){'use strict';return c('DOM').scry(this._root,"li._42fz,li._5a58").map(this.getUserForNode);};k.prototype.getUserForNode=function(l){'use strict';return c('DataStore').get(l,'id')||c('DataStore').get(l,'serverthreadid');};k.prototype.getHoverController=function(){'use strict';if(!this._hoverController)this._hoverController=new (c('ChatOrderedListHover'))(this);return this._hoverController;};k.prototype.getItemHeight=function(){'use strict';return c('ChatSidebarConstants').getItemHeight();};k.prototype.getRoot=function(){'use strict';return this._root;};k.prototype.getSortedList=function(){'use strict';return this._topUsers=c('PresenceOrderedList').getSorted(this._numTopFriends);};k.prototype.updateTopUsers=function(){'use strict';this.getSortedList();this._render();};k.prototype.hide=function(){'use strict';if(!this._isVisible)return;this._isVisible=false;c('CSS').hide(this._scrollableOrderedList||this._root);this.inform('hide');};k.prototype.setNumTopFriends=function(l,m){'use strict';if(c('ChatConfig').get('web_messenger_divebar_show_more_groups')){this.setNumTopFriendsMoreGroups(l,m);return;}c('ChatSidebarPreloadStore').onLoaded(function(n){var o=!c('ChatOptions').getSetting('hide_groups')?n:[],p=l-o.length;if(p>c('ChatConfig').get('min_top_friends'))l=p;l--;if(l!==this._numTopFriends||o.length!==this._groups.length){this._groups=o;this._numTopFriends=l;this.getSortedList();if(m){this._renderOrderedList();}else this._render();}}.bind(this));};k.prototype.setNumTopFriendsMoreGroups=function(l,m){'use strict';c('ChatSidebarPreloadStore').onLoaded(function(n){var o=!c('ChatOptions').getSetting('hide_groups')?n:[],p=Math.max(Math.min(Math.floor(l/5),o.length),2),q=o.length>p?p:o.length,r=Math.max(l-q,1);if(r>1)r--;o=o.slice(0,q);if(r!==this._numTopFriends||o.length!==this._groups.length){this._numTopFriends=r;this._groups=o;if(m){this._renderOrderedList();}else this._render();}}.bind(this));};k.prototype._renderOrderedList=function(){'use strict';if(!this._isVisible||this._isHovering)return;var l=c('PresenceOrderedList').getAvailableSorted(this._topUsers);c('ReactDOM').render(c('React').createElement(c('ChatSidebarOrderedList.react'),{availableUsers:l,isSidebar:this._isSidebar,scrollContainer:this._scrollContainer,topUsers:this._topUsers,groups:this._groups}),this._orderedList);this.inform('render');};k.prototype._render=function(){'use strict';this._render=c('debounceAcrossTransitions')(this._renderOrderedList.bind(this),300);this._render();};k.prototype.show=function(){'use strict';if(this._isVisible)return;this._isVisible=true;c('CSS').show(this._scrollableOrderedList||this._root);this._render();this.inform('show');};k.prototype.isVisible=function(){'use strict';return this._isVisible;};k.prototype.setScrollContainer=function(l){'use strict';if(c('DOM').contains(l,this._root))this._scrollContainer=l;};f.exports=k;},null);