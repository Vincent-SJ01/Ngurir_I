"use strict";(self["webpackChunkfront_end_revis"]=self["webpackChunkfront_end_revis"]||[]).push([[268],{6543:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var r=function(){var t=this,e=t._self._c;return e("v-main",{staticClass:"list"},[e("v-card",[e("v-list-item",[e("v-list-item-avatar",[e("img",{attrs:{src:"https://thumbs.dreamstime.com/b/cute-panda-bear-cartoon-chef-vector-cooking-cookie-sweet-bakery-cute-panda-bear-cartoon-chef-vector-cooking-cookie-sweet-bakery-216614619.jpg",alt:"John"}})]),e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline"},[t._v(" Kurir ")]),e("v-list-item-subtitle",[t._v("By Ngurir")])],1)],1),e("v-card-title",[e("v-text-field",{staticStyle:{"margin-top":"30px"},attrs:{"append-icon":"mdi-magnify",label:"Search",outlined:"",hide:"",details:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("v-spacer")],1)],1),e("v-card",[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.dataKurir,search:t.search,"item-key":"nama","show-expand":"",loading:t.loadingState},scopedSlots:t._u([{key:"expanded-item",fn:function({headers:a,item:r}){return[e("td",{staticClass:"pb-5 mb-5",attrs:{colspan:a.length}},[e("div",{staticClass:"row mb-0 mt-0"},[e("div",{staticClass:"col-12 my-0 py-0 d-flex justify-center",attrs:{width:"100%"}},[e("v-card",{staticClass:"col-3 my-4 mx-1 pt-0 float-left",attrs:{elevation:"2",height:"90px",color:"#BBDEFB"}},[e("v-card-text",{staticClass:"mb-0 pb-0 black--text"},[t._v(" Nomor Identitas Pendduk ")]),e("v-card-title",{staticClass:"mt-0 pt-1"},[t._v(" "+t._s(r.nik)+" ")])],1),e("v-card",{staticClass:"col-3 my-4 mx-1 pt-0 float-left",attrs:{elevation:"2",height:"90px",color:"#BBDEFB"}},[e("v-card-text",{staticClass:"mb-0 pb-0 black--text"},[t._v(" Email Kurir ")]),e("v-card-title",{staticClass:"mt-0 pt-1"},[t._v(" "+t._s(r.email)+" ")])],1),e("v-card",{staticClass:"col-3 my-4 mx-1 pt-0 float-left",attrs:{elevation:"2",height:"90px",color:"#BBDEFB"}},[e("v-card-text",{staticClass:"mb-0 pb-0 black--text"},[t._v(" username ")]),e("v-card-title",{staticClass:"mt-0 pt-1"},[t._v(" "+t._s(r.username)+" ")])],1)],1)])])]}},{key:"item.actions",fn:function({item:a}){return[e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"primary"},on:{click:function(e){return t.getDataDialog(a)}}},[e("v-icon",[t._v("mdi-pencil")])],1),e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"error"},on:{click:function(e){return t.deleteItem(a.id)}}},[e("v-icon",[t._v(" mdi-trash-can-outline")])],1)]}}],null,!0)})],1),e("v-dialog",{attrs:{transition:"dialog-top-transition",persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-toolbar",{staticClass:"headline",attrs:{color:"brown darken-1",dark:""}},[t._v(" Edit Kurir ")]),e("v-card-text",[e("v-container",[e("v-text-field",{attrs:{label:"Nama Kurir",required:""},model:{value:t.formInput.nama,callback:function(e){t.$set(t.formInput,"nama",e)},expression:"formInput.nama"}}),e("v-text-field",{attrs:{label:"Nomor Telp",required:""},model:{value:t.formInput.noTelp,callback:function(e){t.$set(t.formInput,"noTelp",e)},expression:"formInput.noTelp"}}),e("v-textarea",{attrs:{label:"Alamat",required:""},model:{value:t.formInput.alamat,callback:function(e){t.$set(t.formInput,"alamat",e)},expression:"formInput.alamat"}}),e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e("v-text-field",t._g(t._b({attrs:{label:"Tanggal Lahir",readonly:""},model:{value:t.formInput.tanggalLahir,callback:function(e){t.$set(t.formInput,"tanggalLahir",e)},expression:"formInput.tanggalLahir"}},"v-text-field",r,!1),a))]}}]),model:{value:t.showDatePicker,callback:function(e){t.showDatePicker=e},expression:"showDatePicker"}},[e("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.showDatePicker=!1}},model:{value:t.formInput.tanggalLahir,callback:function(e){t.$set(t.formInput,"tanggalLahir",e)},expression:"formInput.tanggalLahir"}})],1),e("v-select",{attrs:{items:t.dataGender,"item-text":"namaGender","item-value":"id",label:"Jenis Kelamin",required:""},model:{value:t.formInput.gender,callback:function(e){t.$set(t.formInput,"gender",e)},expression:"formInput.gender"}}),e("v-select",{attrs:{items:t.dataStatus,"item-text":"namaStatus","item-value":"id",label:"Status",required:""},model:{value:t.formInput.idStatus,callback:function(e){t.$set(t.formInput,"idStatus",e)},expression:"formInput.idStatus"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.saveUpdate()}}},[t._v(" Save ")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Apakah Yakin Ingin Menghapus Kurir")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.confirmDelete()}}},[t._v("Delete")])],1)],1)],1),e("v-snackbar",{attrs:{timeout:t.snackbarTimeout,"auto-height":"","multi-line":"",top:"",right:"",color:t.snackbarOption.color},model:{value:t.snackbarState,callback:function(e){t.snackbarState=e},expression:"snackbarState"}},[e("v-layout",{attrs:{"align-center":"","pr-4":""}},[e("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[t._v(t._s(t.snackbarOption.icon))]),e("v-layout",{attrs:{column:""}},[e("div",[e("strong",[t._v(t._s(t.snackbarOption.title))])]),e("div",t._l(t.snackbarOption.text,(function(a,r){return e("span",{key:r},[t._v(" "+t._s(a)+" "),e("br")])})),0)])],1)],1)],1)},i=[],n=(a(7658),a(4311)),s=a(9895),l=a(2179);let o=l.$1("token"),c={headers:{Authorization:"Bearer "+o}};var u={name:"KotaList",data(){return{dataKurir:[],dataGender:[],dataStatus:[],formInput:{},indexData:null,loadingState:!0,dialog:!1,dialogMessage:"",dialogDelete:!1,showDatePicker:!1,snackbarState:!1,snackbarTimeout:3e3,snackbarOption:{color:null,icon:null,title:null,text:[]},search:null,headers:[{text:"Nama Kurir",sortable:!0,value:"nama"},{text:"No Telp",sortable:!1,value:"noTelp"},{text:"Alamat",sortable:!1,value:"alamat"},{text:"Tanggal Lahir",sortable:!0,value:"tanggalLahir"},{text:"Gender",sortable:!0,value:"gender.namaGender"},{text:"Status",sortable:!0,value:"status.namaStatus"},{text:"Actions",value:"actions",sortable:!1}]}},mounted(){this.getData(),this.getGender(),this.getStatus()},methods:{getGender(){n.Z.get(s.N+"gender",c).then((t=>{this.dataGender=t.data.data})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengambil Data Gender",`Code Error : ${t.response.status}`]};this.openSnackbar(e)}))},getStatus(){n.Z.get(s.N+"status",c).then((t=>{this.dataStatus=t.data.data})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengambil Data Status",`Code Error : ${t.response.status}`]};this.openSnackbar(e)}))},getData(){this.setLoading(!0),n.Z.get(s.N+"kurir",c).then((t=>{this.dataKurir=t.data.data,this.setLoading(!1),console.log(this.dataKurir)})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengambil Data Kurir",`Code Error : ${t.response.status}`]};console.log(t),this.openSnackbar(e),this.setLoading(!1)}))},setLoading(t){this.loadingState=t},openDialog(t){this.dialog=!0,this.dialogMessage=t},closeDialog(){this.dialog=!1,this.resetForm()},resetForm(){this.formInput={}},openSnackbar(t=null){this.snackbarState=!0,this.snackbarOption=t},getDataDialog(t){this.formInput=Object.assign({},t),this.formInput.idStatus=parseInt(this.formInput.idStatus),this.openDialog("Edit Kurir")},saveUpdate(){n.Z.put(s.N+`kurir/${this.formInput.id}`,this.formInput,c).then((()=>{let t={color:"success",icon:"mdi-check",title:"Success",text:["Kurir Berhasil Diupdate!"]};this.openSnackbar(t),this.closeDialog(),this.getData()})).catch((t=>{let e={color:"warning",icon:"mdi-alert-circle",title:"warning",text:["Gagal Mengubah Data Kurir"]};for(let a in t.response.data.message)e.text.push(`${t.response.data.message[a]}`);this.openSnackbar(e)}))},deleteItem(t){this.indexData=t,this.dialogDelete=!0},confirmDelete(){n.Z["delete"](s.N+`kurir/${this.indexData}`,c).then((()=>{let t={color:"success",icon:"mdi-check",title:"Success",text:["Kurir Berhasil Dihapus!"]};this.openSnackbar(t),this.getData()})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Menghapus Data Kurir",`Code Error : ${t.response.status}`]};this.openSnackbar(e)})),this.dialogDelete=!1},cancelConfirmation(){this.dialogDelete=!1,this.closeDialog()}}},d=u,m=a(1001),p=(0,m.Z)(d,r,i,!1,null,null,null),h=p.exports},2179:function(t,e,a){a.d(e,{$1:function(){return i},Bt:function(){return n},lE:function(){return r}});const r=(t,e,a)=>{let r="";if(a){let t=new Date;t.setTime(t.getTime()+24*a*60*60*1e3),r="; expires="+t.toUTCString()}document.cookie=t+"="+(e||"")+r+"; path=/"},i=t=>{let e=t+"=",a=document.cookie.split(";");for(let r=0;r<a.length;r++){let t=a[r];while(" "==t.charAt(0))t=t.substring(1,t.length);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return null},n=()=>{let t=document.cookie.split(";");for(let e=0;e<t.length;e++){let a=t[e],r=a.indexOf("="),i=r>-1?a.substr(0,r):a;document.cookie=i+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}}]);
//# sourceMappingURL=268.3b0e6bad.js.map