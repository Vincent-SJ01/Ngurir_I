"use strict";(self["webpackChunkfront_end_revis"]=self["webpackChunkfront_end_revis"]||[]).push([[597],{6597:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard"},[e("v-navigation-drawer",{staticClass:"fullheight",attrs:{widht:"256",absolute:"",temporary:"",color:"grey lighten-5",position:"fixed"},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"pa-2"},[e("v-btn",{attrs:{block:"",color:"red lighten-3",dark:""},on:{click:function(e){t.dialogLogout=!0}}},[t._v(" Logout")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v("Ngurir")]),e("v-list-item-subtitle",[t._v("Admin Page")])],1)],1),e("v-divider"),e("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(n){return e("v-list-item",{key:n.title,attrs:{color:"light-blue darken-4",link:"",tag:"router-link",to:{name:n.name}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.title))])],1)],1)})),1)],1),e("v-app-bar",{attrs:{color:"red lighten-3",dark:""}},[e("v-app-bar-nav-icon",{attrs:{color:"white"},on:{click:function(e){t.drawer=!0}}}),e("v-spacer")],1),e("div",{staticClass:"pa-5",attrs:{height:"100vh"}},[e("router-view",{attrs:{height:"90vh"}})],1),e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogLogout,callback:function(e){t.dialogLogout=e},expression:"dialogLogout"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Apakah Yakin Ingin Logout?")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.confirmLogout()}}},[t._v("Logout")])],1)],1)],1)],1)},i=[],a=(n(7658),n(4311)),r=n(9895),l=n(2179);let s=l.$1("token"),c={headers:{Authorization:"Bearer "+s}};var u={name:"DashboardIndex",data(){return{dialogLogout:!1,drawer:!1,group:null,items:[{title:"Home",name:"Beranda"},{title:"Pengantaran",name:"Kurir.Pengantaran"}]}},methods:{confirmLogout(){console.log("object kirim"),console.log(c),a.Z.post(r.N+"logout",c).then((t=>{console.log("suskes"),console.log(t)})).catch((t=>{console.log("gagal segagalgagalnya lalalalal"),console.log(t),console.log("dilapisi berlapis2")})),l.Bt(),this.$router.push({name:"Beranda"})},cancelConfirmation(){this.dialogLogout=!1}}},d=u,g=n(1001),v=(0,g.Z)(d,o,i,!1,null,"09bbf29a",null),h=v.exports},2179:function(t,e,n){n.d(e,{$1:function(){return i},Bt:function(){return a},lE:function(){return o}});const o=(t,e,n)=>{let o="";if(n){let t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3),o="; expires="+t.toUTCString()}document.cookie=t+"="+(e||"")+o+"; path=/"},i=t=>{let e=t+"=",n=document.cookie.split(";");for(let o=0;o<n.length;o++){let t=n[o];while(" "==t.charAt(0))t=t.substring(1,t.length);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return null},a=()=>{let t=document.cookie.split(";");for(let e=0;e<t.length;e++){let n=t[e],o=n.indexOf("="),i=o>-1?n.substr(0,o):n;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}}]);
//# sourceMappingURL=597.2cd8b779.js.map