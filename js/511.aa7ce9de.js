"use strict";(self["webpackChunkfront_end_revis"]=self["webpackChunkfront_end_revis"]||[]).push([[511],{5511:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard"},[e("v-navigation-drawer",{staticClass:"fullheight",attrs:{widht:"256",absolute:"",temporary:"",color:"grey lighten-5",position:"fixed"},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"pa-2"},[e("v-btn",{attrs:{block:"",color:"red lighten-3",dark:""},on:{click:function(e){t.dialogLogout=!0}}},[t._v(" Logout")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v("Ngurir")]),e("v-list-item-subtitle",[t._v("Admin Page")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(o){return e("v-list-item",{key:o.title,attrs:{color:"light-blue darken-4",link:"",tag:"router-link",to:{name:o.name}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(o.title))])],1)],1)})),1)],1),e("v-app-bar",{attrs:{color:"red lighten-3",dark:""}},[e("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!0}}}),e("v-spacer")],1),e("div",{staticClass:"pa-5",attrs:{height:"100vh"}},[e("router-view",{attrs:{height:"90vh"}})],1),e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogLogout,callback:function(e){t.dialogLogout=e},expression:"dialogLogout"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Apakah Yakin Ingin Logout?")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.confirmLogout()}}},[t._v("Logout")])],1)],1)],1)],1)},i=[],r=(o(7658),o(4311)),a=o(9895),l=o(2179);let s=l.$1("token"),c={headers:{Authorization:"Bearer "+s}};var u={name:"DashboardIndex",data(){return{dialogLogout:!1,drawer:!1,group:null,items:[{title:"Kota",name:"Admin.Kota"},{title:"Drop Point",name:"Admin.DropPoint"},{title:"Kurir",name:"Admin.Kurir"},{title:"Paket",name:"Admin.Paket"}]}},methods:{confirmLogout(){console.log("ini object yang dikirim"),console.log(c),r.Z.post(a.N+"logout",c).then((t=>{console.log("suskes"),console.log(t)})).catch((t=>{console.log("gagal"),console.log(t)})),console.log("ini object yang dikirim after"),console.log(c),l.Bt(),this.$router.push({name:"Beranda"})},cancelConfirmation(){this.dialogLogout=!1}}},d=u,g=o(1001),v=(0,g.Z)(d,n,i,!1,null,"7a57caf3",null),h=v.exports},2179:function(t,e,o){o.d(e,{$1:function(){return i},Bt:function(){return r},lE:function(){return n}});const n=(t,e,o)=>{let n="";if(o){let t=new Date;t.setTime(t.getTime()+24*o*60*60*1e3),n="; expires="+t.toUTCString()}document.cookie=t+"="+(e||"")+n+"; path=/"},i=t=>{let e=t+"=",o=document.cookie.split(";");for(let n=0;n<o.length;n++){let t=o[n];while(" "==t.charAt(0))t=t.substring(1,t.length);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return null},r=()=>{let t=document.cookie.split(";");for(let e=0;e<t.length;e++){let o=t[e],n=o.indexOf("="),i=n>-1?o.substr(0,n):o;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}}]);
//# sourceMappingURL=511.aa7ce9de.js.map