"use strict";(self.webpackChunkslack_client=self.webpackChunkslack_client||[]).push([[962],{2219:function(e,t,n){var r=n(5692),a=n(8678),o=n(3046),l=n(3564),i=n(2861),c=n(7294),s=n(9250),u=n(6042),p=n(5591);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(e){var t,n,m=e.show,f=e.onCloseModal,h=e.setShowInviteChannelModal,b=(0,s.UO)(),g=b.workspace,v=b.channel,y=(t=(0,a.Z)(""),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=y[0],w=y[1],k=y[2],E=(0,p.ZP)("/api/users",l.Z).data,Z=(0,p.ZP)(E?"/api/workspaces/".concat(g,"/members"):null,l.Z).mutate,C=(0,c.useCallback)((function(e){e.preventDefault(),x&&x.trim()&&i.Z.post("/api/workspaces/".concat(g,"/members"),{email:x}).then((function(){Z(),h(!1),k("")})).catch((function(e){var t;console.dir(e),u.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[v,x,Z,k,h,g]);return c.createElement(r.Z,{show:m,onCloseModal:f},c.createElement("form",{onSubmit:C},c.createElement(o.__,{id:"member-label"},c.createElement("span",null,"채널 멤버 초대"),c.createElement(o.II,{id:"member",value:x,onChange:w})),c.createElement(o.zx,{type:"submit"},"초대하기")))}},5692:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9369),a=(0,r.Z)("div",{target:"e1aecfk21"})({name:"10w7pu7",styles:"position:fixed;text-align:center;left:0;bottom:0;top:0;right:0;z-index:1022;&>div{margin-top:200px;display:inline-block;width:440px;background:white;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;max-width:440px;padding:30px 40px 0;z-index:1012;position:relative;}"}),o=(0,r.Z)("button",{target:"e1aecfk20"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),l=n(7294),i=function(e){var t=e.show,n=e.children,r=e.onCloseModal,i=(0,l.useCallback)((function(e){e.stopPropagation()}),[]);return t?l.createElement(a,{onClick:r},l.createElement("div",{onClick:i},l.createElement(o,{onClick:r},"×"),n)):null}},2951:function(e,t,n){var r=n(7294),a=n(3992),o={};t.Z=function(e){var t=(0,r.useCallback)((function(){e&&o[e]&&(o[e].disconnect(),delete o[e])}),[e]);return e?(o[e]||(o[e]=(0,a.io)("".concat("http://localhost:3095","/ws-").concat(e),{transports:["websocket"]})),[o[e],t]):[void 0,t]}},3962:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(3564),a=n(2861),o=n(7294),l=n(9250),i=n(5591),c=n(9369),s=(0,c.Z)("div",{target:"e1min8t413"})({name:"tjo4qw",styles:"float:right"}),u=(0,c.Z)("header",{target:"e1min8t412"})({name:"fvf0bi",styles:"height:38px;background:#350d36;color:#ffffff;box-shadow:0 1px 0 0 rgba(255, 255, 255, 0.1);padding:5px;text-align:center"}),p=(0,c.Z)("img",{target:"e1min8t411"})({name:"1ly4jlu",styles:"width:28px;height:28px;position:absolute;top:5px;right:16px"}),d=(0,c.Z)("div",{target:"e1min8t410"})({name:"47px7v",styles:"display:flex;padding:20px;& img{display:flex;}&>div{display:flex;flex-direction:column;margin-left:10px;}& #profile-name{font-weight:bold;display:inline-flex;}& #profile-active{font-size:13px;display:inline-flex;}"}),m=(0,c.Z)("button",{target:"e1min8t49"})({name:"bl1q1k",styles:"border:none;width:100%;border-top:1px solid rgb(29, 28, 29);background:transparent;display:block;height:33px;padding:5px 20px 5px;outline:none;cursor:pointer"}),f=(0,c.Z)("div",{target:"e1min8t48"})({name:"36bnqj",styles:"display:flex;flex:1"}),h=(0,c.Z)("div",{target:"e1min8t47"})({name:"17lvj7e",styles:"width:65px;display:inline-flex;flex-direction:column;align-items:center;background:#3f0e40;border-top:1px solid rgb(82, 38, 83);border-right:1px solid rgb(82, 38, 83);vertical-align:top;text-align:center;padding:15px 0 0"}),b=(0,c.Z)("nav",{target:"e1min8t46"})({name:"2pkygn",styles:"width:260px;display:inline-flex;flex-direction:column;background:#3f0e40;color:rgb(188, 171, 188);vertical-align:top;& a{padding-left:36px;color:inherit;text-decoration:none;height:28px;line-height:28px;display:flex;align-items:center;&.selected{color:white;}}& .bold{color:white;font-weight:bold;}& .count{margin-left:auto;background:#cd2553;border-radius:16px;display:inline-block;font-size:12px;font-weight:700;height:18px;line-height:18px;padding:0 9px;color:white;margin-right:16px;}& h2{height:36px;line-height:36px;margin:0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:15px;}"}),g=(0,c.Z)("button",{target:"e1min8t45"})({name:"1rmthq7",styles:"height:64px;line-height:64px;border:none;width:100%;text-align:left;border-top:1px solid rgb(82, 38, 83);border-bottom:1px solid rgb(82, 38, 83);font-weight:900;font-size:24px;background:transparent;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:0;padding-left:16px;margin:0;color:white;cursor:pointer"}),v=(0,c.Z)("div",{target:"e1min8t44"})({name:"1146j5j",styles:"height:calc(100vh - 102px);overflow-y:auto"}),y=(0,c.Z)("div",{target:"e1min8t43"})({name:"192o1ir",styles:"padding:10px 0 0;& h2{padding-left:20px;}&>button{width:100%;height:28px;padding:4px;border:none;background:transparent;border-top:1px solid rgb(28, 29, 28);cursor:pointer;&:last-of-type{border-bottom:1px solid rgb(28, 29, 28);}}"}),x=(0,c.Z)("div",{target:"e1min8t42"})({name:"82a6rk",styles:"flex:1"}),w=(0,c.Z)("button",{target:"e1min8t41"})({name:"9tlmej",styles:"color:white;font-size:24px;display:inline-block;width:40px;height:40px;background:transparent;border:none;cursor:pointer"}),k=(0,c.Z)("button",{target:"e1min8t40"})({name:"wsqixl",styles:"display:inline-block;width:40px;height:40px;border-radius:10px;background:white;border:3px solid #3f0e40;margin-bottom:15px;font-size:18px;font-weight:700;color:black;cursor:pointer"}),E=n(6182),Z=n.n(E),C=n(2584),_=(0,c.Z)("div",{target:"e117czeg1"})({name:"3nqusf",styles:"position:fixed;top:0;right:0;left:0;bottom:0;z-index:1000;&>div{position:absolute;display:inline-block;--saf-0:rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);box-shadow:0 0 0 1px var(--saf-0),0 4px 12px 0 rgba(0, 0, 0, 0.12);background-color:rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);border-radius:6px;user-select:none;min-width:360px;z-index:512;max-height:calc(100vh - 20px);color:rgb(29, 28, 29);}"}),S=(0,c.Z)("button",{target:"e117czeg0"})({name:"19gmbxq",styles:"position:absolute;right:10px;top:6px;background:transparent;border:none;font-size:30px;cursor:pointer"}),A=function(e){var t=e.closeButton,n=e.style,r=e.show,a=e.children,l=e.onCloseModal,i=(0,o.useCallback)((function(e){e.stopPropagation()}),[]);return r?o.createElement(_,{onClick:l},o.createElement("div",{onClick:i,style:n},t&&o.createElement(S,{onClick:l},"×"),a)):null};A.defaultProps={closeButton:!0};var j=A,I=n(9655),O=n(5692),M=n(3046),P=n(8678),z=n(6042);function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=function(e){var t,n,c=e.show,s=e.onCloseModal,u=e.setShowCreateChannelModal,p=(0,l.UO)().workspace,d=(t=(0,P.Z)(""),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=d[0],f=d[1],h=d[2],b=(0,i.ZP)("/api/users",r.Z).data,g=(0,i.ZP)(b?"/api/workspaces/".concat(p,"/channels"):null,r.Z).mutate,v=(0,o.useCallback)((function(e){e.preventDefault(),m&&m.trim()&&a.Z.post("/api/workspaces/".concat(p,"/channels"),{name:m}).then((function(){g(),u(!1),h("")})).catch((function(e){var t;console.dir(e),z.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[m,g,h,u,p]);return o.createElement(O.Z,{show:c,onCloseModal:s},o.createElement("form",{onSubmit:v},o.createElement(M.__,{id:"channel-label"},o.createElement("span",null,"채널 이름"),o.createElement(M.II,{id:"channel",value:m,onChange:f})),o.createElement(M.zx,null,"생성하기")))};function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(e){var t,n,c=e.show,s=e.onCloseModal,u=e.setShowInviteWorkspaceModal,p=(0,l.UO)().workspace,d=(t=(0,P.Z)(""),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=d[0],f=d[1],h=d[2],b=(0,i.ZP)("/api/users",r.Z).data,g=(0,i.ZP)(b?"/api/workspaces/".concat(p,"/members"):null,r.Z).mutate,v=(0,o.useCallback)((function(e){e.preventDefault(),m&&m.trim()&&a.Z.post("/api/workspaces/".concat(p,"/members"),{email:m}).then((function(){g(),u(!1),h("")})).catch((function(e){var t;console.dir(e),z.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[m,p,g,u,h]);return o.createElement(O.Z,{show:c,onCloseModal:s},o.createElement("form",{onSubmit:v},o.createElement(M.__,{id:"member-label"},o.createElement("span",null,"이메일"),o.createElement(M.II,{id:"member",type:"email",value:m,onChange:f})),o.createElement(M.zx,{type:"submit"},"초대하기")))},D=n(2219),L=function(e){var t=e.member,n=e.isOnline,a=(0,l.UO)().workspace,c=(0,l.TH)(),s=(0,i.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,u=localStorage.getItem("".concat(a,"-").concat(t.id))||0,p=(0,i.ZP)(s?"/api/workspaces/".concat(a,"/dms/").concat(t.id,"/unreads?after=").concat(u):null,r.Z),d=p.data,m=p.mutate;return(0,o.useEffect)((function(){c.pathname==="/workspace/".concat(a,"/dm/").concat(t.id)&&m(0)}),[m,c.pathname,a,t]),o.createElement(I.OL,{key:t.id,className:function(e){return e.isActive?"selected":"not"},to:"/workspace/".concat(a,"/dm/").concat(t.id)},o.createElement("i",{className:"c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence ".concat(n?"c-presence--active c-icon--presence-online":"c-icon--presence-offline"),"aria-hidden":"true","data-qa":"presence_indicator","data-qa-presence-self":"false","data-qa-presence-active":"false","data-qa-presence-dnd":"false"}),o.createElement("span",{className:d&&d>0?"bold":void 0},t.nickname),t.id===(null==s?void 0:s.id)&&o.createElement("span",null," (나)"),d&&d>0&&o.createElement("span",{className:"count"},d)||null)},W=(0,c.Z)("button",{target:"e1adqhp10"})("background:transparent;border:none;width:26px;height:26px;display:inline-flex;justify-content:center;align-items:center;color:white;margin-left:10px;cursor:pointer;",(function(e){return e.collapse&&"\n    & i {\n      transform: none;\n    }\n  "}),";"),$=n(2951);function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=function(){var e=(0,l.UO)().workspace,t=(0,i.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,n=(0,i.ZP)(t?"/api/workspaces/".concat(e,"/members"):null,r.Z).data,a=F((0,$.Z)(e),1)[0],c=F((0,o.useState)(!1),2),s=c[0],u=c[1],p=F((0,o.useState)([]),2),d=p[0],m=p[1],f=(0,o.useCallback)((function(){u((function(e){return!e}))}),[]);return(0,o.useEffect)((function(){console.log("DMList: workspace 바꼈다",e),m([])}),[e]),(0,o.useEffect)((function(){return null==a||a.on("onlineList",(function(e){m(e)})),console.log("socket on dm",null==a?void 0:a.hasListeners("dm"),a),function(){null==a||a.off("onlineList")}}),[a]),o.createElement(o.Fragment,null,o.createElement("h2",null,o.createElement(W,{collapse:s,onClick:f},o.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),o.createElement("span",null,"Direct Messages")),o.createElement("div",null,!s&&(null==n?void 0:n.map((function(e){var t=d.includes(e.id);return o.createElement(L,{key:e.id,member:e,isOnline:t})})))))},G=function(e){var t=e.channel,n=(0,l.UO)().workspace,a=(0,l.TH)(),c=(0,i.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,s=localStorage.getItem("".concat(n,"-").concat(t.name))||0,u=(0,i.ZP)(c?"/api/workspaces/".concat(n,"/channels/").concat(t.name,"/unreads?after=").concat(s):null,r.Z),p=u.data,d=u.mutate;return(0,o.useEffect)((function(){a.pathname==="/workspace/".concat(n,"/channel/").concat(t.name)&&d(0)}),[d,a.pathname,n,t]),o.createElement(I.OL,{key:t.name,className:function(e){return e.isActive?"selected":"not"},to:"/workspace/".concat(n,"/channel/").concat(t.name)},o.createElement("span",{className:void 0!==p&&p>0?"bold":void 0},"# ",t.name),void 0!==p&&p>0&&o.createElement("span",{className:"count"},p))};function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=function(){var e,t,n=(0,l.UO)().workspace,a=(e=(0,o.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],s=a[1],u=(0,i.ZP)("/api/users",r.Z,{dedupingInterval:2e3}).data,p=(0,i.ZP)(u?"/api/workspaces/".concat(n,"/channels"):null,r.Z).data,d=(0,o.useCallback)((function(){s((function(e){return!e}))}),[]);return o.createElement(o.Fragment,null,o.createElement("h2",null,o.createElement(W,{collapse:c,onClick:d},o.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),o.createElement("span",null,"Channels")),o.createElement("div",null,!c&&(null==p?void 0:p.map((function(e){return o.createElement(G,{key:e.id,channel:e})})))))};function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=(0,C.ZP)((function(){return Promise.all([n.e(793),n.e(13),n.e(256)]).then(n.bind(n,5256))})),X=(0,C.ZP)((function(){return Promise.all([n.e(793),n.e(13),n.e(94)]).then(n.bind(n,3094))})),Y=function(){var e,t,n=(0,l.UO)().workspace,c=(0,i.ZP)("/api/users",r.Z),E=c.data,C=c.mutate,_=(0,i.ZP)(E?"/api/workspaces/".concat(n,"/channels"):null,r.Z).data,S=Q((0,o.useState)(!1),2),A=S[0],U=S[1],N=Q((0,o.useState)(!1),2),L=N[0],W=N[1],F=Q((0,P.Z)(""),3),B=F[0],G=F[1],J=F[2],R=Q((0,P.Z)(""),3),Y=R[0],ee=R[1],te=R[2],ne=Q((0,o.useState)(!1),2),re=ne[0],ae=ne[1],oe=Q((0,o.useState)(!1),2),le=oe[0],ie=oe[1],ce=Q((0,o.useState)(!1),2),se=ce[0],ue=ce[1],pe=Q((0,o.useState)(!1),2),de=pe[0],me=pe[1],fe=Q((0,$.Z)(n),2),he=fe[0],be=fe[1];(0,o.useEffect)((function(){_&&E&&he&&he.emit("login",{id:E.id,channels:_.map((function(e){return e.id}))})}),[he,_,E]),(0,o.useEffect)((function(){return function(){be()}}),[n,be]);var ge=(0,o.useCallback)((function(){a.Z.post("/api/users/logout",null,{withCredentials:!0}).then((function(){C(!1)}))}),[C]),ve=(0,o.useCallback)((function(e){e.stopPropagation(),U((function(e){return!e}))}),[]),ye=(0,o.useCallback)((function(){W(!0)}),[]),xe=(0,o.useCallback)((function(){W(!1),ie(!1),me(!1),ue(!1)}),[]),we=(0,o.useCallback)((function(e){e.preventDefault(),B&&B.trim()&&Y&&Y.trim()&&a.Z.post("/api/workspaces",{workspace:B,url:Y},{withCredentials:!0}).then((function(e){C(e.data),W(!1),te(""),J("")})).catch((function(e){var t;console.log(e),z.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}))}),[B,Y]),ke=(0,o.useCallback)((function(){ae((function(e){return!e}))}),[]),Ee=(0,o.useCallback)((function(){ie(!0)}),[]),Ze=(0,o.useCallback)((function(){ue(!0)}),[]);return E?o.createElement("div",null,o.createElement(u,null,"slack",o.createElement(s,null,o.createElement("span",{onClick:ve},o.createElement(p,{src:Z().url(E.email,{s:"28px",d:"retro"}),alt:E.nickname}),A&&o.createElement(j,{show:!0,onCloseModal:ve,style:{right:0,top:38}},o.createElement(d,null,o.createElement("img",{src:Z().url(E.nickname,{s:"36px",d:"retro"}),alt:E.nickname}),o.createElement("div",null,o.createElement("span",{id:"profile-name"},E.nickname),o.createElement("span",{id:"profile-active"},"Active"))),o.createElement(m,{onClick:ge},"로그아웃"))))),o.createElement(f,null,o.createElement(h,null,null===(e=E.Workspaces)||void 0===e?void 0:e.map((function(e){return o.createElement(I.rU,{key:e.id,to:"/workspace/".concat(e.url,"/channel/일반")},o.createElement(k,null,e.name.slice(0,1).toUpperCase()))})),o.createElement(w,{onClick:ye},"+")),o.createElement(b,null,o.createElement(g,{onClick:ke},null==E||null===(t=E.Workspaces.find((function(e){return e.url===n})))||void 0===t?void 0:t.name),o.createElement(v,null,o.createElement(j,{show:re,onCloseModal:ke,style:{top:95,left:80}},o.createElement(y,null,o.createElement("h2",null,"slack"),o.createElement("button",{onClick:Ze},"워크스페이스에 사용자 초대"),o.createElement("button",{onClick:Ee},"채널 만들기"),o.createElement("button",{onClick:ge},"로그아웃"))),o.createElement(K,null),o.createElement(H,null))),o.createElement(x,null,o.createElement(l.Z5,null,o.createElement(l.AW,{path:"channel/:channel",element:o.createElement(V,null)}),o.createElement(l.AW,{path:"dm/:id",element:o.createElement(X,null)})))),L&&o.createElement(O.Z,{show:L,onCloseModal:xe},o.createElement("form",{onSubmit:we},o.createElement(M.__,{id:"workspace-label"},o.createElement("span",null,"워크스페이스 이름"),o.createElement(M.II,{id:"workspace",value:B,onChange:G})),o.createElement(M.__,{id:"workspace-url-label"},o.createElement("span",null,"워크스페이스 url"),o.createElement(M.II,{id:"workspace",value:Y,onChange:ee})),o.createElement(M.zx,{type:"submit"},"생성하기"))),o.createElement(q,{show:le,onCloseModal:xe,setShowCreateChannelModal:ie}),o.createElement(T,{show:se,onCloseModal:xe,setShowInviteWorkspaceModal:ue}),o.createElement(D.Z,{show:de,onCloseModal:xe,setShowInviteChannelModal:ie})):o.createElement(l.Fg,{to:"/login"})}}}]);