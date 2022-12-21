"use strict";(self["webpackChunkfront_end_revis"]=self["webpackChunkfront_end_revis"]||[]).push([[984],{7984:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("v-main",{staticClass:"list"},[e("v-card",[e("v-list-item",[e("v-list-item-avatar",[e("img",{attrs:{src:"https://thumbs.dreamstime.com/b/cute-panda-bear-cartoon-chef-vector-cooking-cookie-sweet-bakery-cute-panda-bear-cartoon-chef-vector-cooking-cookie-sweet-bakery-216614619.jpg",alt:"John"}})]),e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline"},[t._v(" Paket ")]),e("v-list-item-subtitle",[t._v("By Ngurir")])],1)],1),e("v-card-title",[e("v-text-field",{staticStyle:{"margin-top":"30px"},attrs:{"append-icon":"mdi-magnify",label:"Search",outlined:"",hide:"",details:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("v-spacer"),e("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.openDialog("Tambah Paket",0)}}},[t._v(" Tambah Paket ")])],1)],1),e("v-card",[e("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.dataPaket,search:t.search,"item-key":"noResi","show-expand":"",loading:t.loadingState},scopedSlots:t._u([{key:"item.actions",fn:function({item:a}){return[e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"primary"},on:{click:function(e){return t.getPDF(a)}}},[e("v-icon",[t._v("mdi-printer")])],1),e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"success",disabled:1!=a.idStatus},on:{click:function(e){return t.getDataDialog(a)}}},[e("v-icon",[t._v("mdi-pencil")])],1),e("v-btn",{staticClass:"ma-2",attrs:{outlined:"",small:"",color:"error",disabled:1!=a.idStatus},on:{click:function(e){return t.deleteItem(a.noResi)}}},[e("v-icon",[t._v(" mdi-trash-can-outline")])],1)]}},{key:"item.status_paket.status",fn:function({item:a}){return[e("v-card",{class:t.getColorClass(a.idStatus),attrs:{large:"",label:"",width:"100px"}},[t._v(" "+t._s(a.status_paket.status)+" ")])]}},{key:"expanded-item",fn:function({headers:a,item:i}){return[e("td",{staticClass:"pb-5 mb-5",attrs:{colspan:a.length}},[e("div",{staticClass:"row mb-0 mt-0"},[e("div",{staticClass:"col-12 my-0 py-0 d-flex justify-center",attrs:{width:"100%"}},[e("v-card",{staticClass:"col-3 my-4 mx-4 pt-0 float-left",attrs:{elevation:"2",height:"90px",color:"#BBDEFB"}},[e("v-card-text",{staticClass:"mb-0 pb-0 black--text"},[t._v(" Nama Penerima ")]),e("v-card-title",{staticClass:"mt-0 pt-1"},[t._v(" "+t._s(i.namaPenerima)+" ")])],1),e("v-card",{staticClass:"col-3 my-4 mx-4 pt-0 float-left",attrs:{elevation:"2",height:"90px",color:"#BBDEFB"}},[e("v-card-text",{staticClass:"mb-0 pb-0 black--text"},[t._v(" Nomor Telepon Penerima ")]),e("v-card-title",{staticClass:"mt-0 pt-1"},[t._v(" "+t._s(i.noTelpPenerima)+" ")])],1),e("v-card",{staticClass:"col-3 my-4 mx-4 pt-0 float-left",attrs:{elevation:"2",height:"90px",color:"#BBDEFB"}},[e("v-card-text",{staticClass:"mb-0 pb-0 black--text"},[t._v(" Alamat Penerima ")]),e("v-card-title",{staticClass:"mt-0 pt-1"},[t._v(" "+t._s(i.alamatTujuan)+" ")])],1)],1)]),e("div",{staticClass:"row mt-0 py-0"},[e("div",{staticClass:"col-12 my-0 py-0"},[e("v-simple-table",{attrs:{"fixed-header":"",height:"200px"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Kurir")]),e("th",{staticClass:"text-left"},[t._v("Drop Point")]),e("th",{staticClass:"text-left"},[t._v("Keterangan")]),e("th",{staticClass:"text-left"},[t._v("Status")])])]),e("tbody",t._l(i.pengantaran,(function(a){return e("tr",{key:a.noResi},[e("td",[t._v(t._s(a.kurir.nama))]),e("td",[t._v(t._s(a.drop_point.namaDropPoint))]),e("td",[t._v(t._s(a.keterangan))]),e("td",[e("v-card",{class:t.getColorStatus(a.idStatus),attrs:{large:"",label:"",width:"100px"}},[t._v(" "+t._s(t.getPengantaranStatus(a.idStatus))+" ")])],1)])})),0)]},proxy:!0}],null,!0)})],1)])])]}}],null,!0)})],1),e("v-dialog",{attrs:{transition:"dialog-top-transition",persistent:"","max-width":"600px"},model:{value:t.dialogPDF,callback:function(e){t.dialogPDF=e},expression:"dialogPDF"}},[e("v-card",[e("v-toolbar",{staticClass:"headline",attrs:{color:"brown darken-1",dark:""}},[t._v(" Print Nomor Resi ")]),e("v-card-text",[t._v(" "+t._s(t.linkPDF)+" ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v(" Ok ")])],1)],1)],1),e("v-dialog",{attrs:{transition:"dialog-top-transition",persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-toolbar",{staticClass:"headline",attrs:{color:"brown darken-1",dark:""}},[t._v(" "+t._s(t.dialogMessage)+" ")]),e("v-card-text",[e("v-container",[e("v-select",{attrs:{items:t.dataJenisPaket,"item-text":"namaJenisPaket","item-value":"id",label:"Jenis Paket"},model:{value:t.formInput.jenisPaket,callback:function(e){t.$set(t.formInput,"jenisPaket",e)},expression:"formInput.jenisPaket"}}),e("v-select",{attrs:{items:t.dataService,"item-text":"nama","item-value":"id",label:"Service"},model:{value:t.formInput.idService,callback:function(e){t.$set(t.formInput,"idService",e)},expression:"formInput.idService"}}),e("v-text-field",{attrs:{label:"Berat",type:"number",required:"",suffix:"Kg"},model:{value:t.formInput.berat,callback:function(e){t.$set(t.formInput,"berat",e)},expression:"formInput.berat"}}),e("v-text-field",{attrs:{label:"Volume",type:"number",required:"",suffix:"cm³"},model:{value:t.formInput.volume,callback:function(e){t.$set(t.formInput,"volume",e)},expression:"formInput.volume"}}),e("v-text-field",{attrs:{label:"Nama Penerima",required:""},model:{value:t.formInput.namaPenerima,callback:function(e){t.$set(t.formInput,"namaPenerima",e)},expression:"formInput.namaPenerima"}}),e("v-text-field",{attrs:{label:"Nomor Telepon Penerima",required:""},model:{value:t.formInput.noTelpPenerima,callback:function(e){t.$set(t.formInput,"noTelpPenerima",e)},expression:"formInput.noTelpPenerima"}}),e("v-textarea",{attrs:{label:"Alamat Tujuan",required:""},model:{value:t.formInput.alamatTujuan,callback:function(e){t.$set(t.formInput,"alamatTujuan",e)},expression:"formInput.alamatTujuan"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){0==t.dialogMode?t.save():t.saveUpdate()}}},[t._v(" Save ")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(" Apakah Yakin Ingin Menghapus Paket? ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancelConfirmation()}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){return t.confirmDelete()}}},[t._v(" Delete ")])],1)],1)],1),e("v-snackbar",{attrs:{timeout:t.snackbarTimeout,"auto-height":"","multi-line":"",top:"",right:"",color:t.snackbarOption.color},model:{value:t.snackbarState,callback:function(e){t.snackbarState=e},expression:"snackbarState"}},[e("v-layout",{attrs:{"align-center":"","pr-4":""}},[e("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[t._v(t._s(t.snackbarOption.icon))]),e("v-layout",{attrs:{column:""}},[e("div",[e("strong",[t._v(t._s(t.snackbarOption.title))])]),e("div",t._l(t.snackbarOption.text,(function(a,i){return e("span",{key:i},[t._v(" "+t._s(a)+" "),e("br")])})),0)])],1)],1)],1)},n=[],s=(a(7658),a(4311)),r=a(9895),l=a(2179);let o=l.$1("token"),c={headers:{Authorization:"Bearer "+o}};var u={name:"PaketList",data(){return{dataPaket:[],dataJenisPaket:[],dataService:[],formInput:{},indexData:null,loadingState:!0,dialog:!1,dialogMessage:"",dialogMode:null,dialogDelete:!1,dialogPDF:!1,linkPDF:null,snackbarState:!1,snackbarTimeout:3e3,snackbarOption:{color:null,icon:null,title:null,text:[]},search:null,headers:[{text:"Nomor Resi",sortable:!0,value:"noResi"},{text:"Jenis Paket",sortable:!0,value:"jenis_paket.namaJenisPaket"},{text:"Service",sortable:!0,value:"service.nama"},{text:"Pengirim",sortable:!0,value:"pengirim.nama"},{text:"Berat (Kg)",value:"berat"},{text:"Volume (cm³)",value:"volume"},{text:"Status",value:"status_paket.status"},{text:"Actions",value:"actions",align:"center",sortable:!1}]}},mounted(){this.getDataJenisPaket(),this.getDataService(),this.getDataPaket()},methods:{getDataPaket(){this.setLoading(!0),s.Z.get(r.N+"paketbyuser",c).then((t=>{this.dataPaket=t.data.data,this.setLoading(!1)})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengambil Data Paket!",`Code Error : ${t.request.status}`]};this.openSnackbar(e),this.setLoading(!1)}))},getDataService(){this.setLoading(!0),s.Z.get(r.N+"service",c).then((t=>{this.dataService=t.data.data,this.setLoadingState(!1)})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengambil Data Service!",`Code Error : ${t.response.status}`]};this.openSnackbar(e),this.setLoading(!1)}))},getDataJenisPaket(){this.setLoading(!0),s.Z.get(r.N+"jenispaket",c).then((t=>{this.dataJenisPaket=t.data.data,this.setLoading(!1)})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengambil Data Jenis Paket!",`Code Error : ${t.response.status}`]};this.openSnackbar(e),this.setLoading(!1)}))},setLoading(t){this.loadingState=t},openDialog(t,e){this.dialog=!0,this.dialogMessage=t,this.dialogMode=e},closeDialog(){this.dialog=!1,this.resetForm()},resetForm(){this.formInput={}},openSnackbar(t=null){this.snackbarState=!0,this.snackbarOption=t},save(){this.formInput.idStatus=1,s.Z.post(r.N+"paket",this.formInput,c).then((()=>{let t={color:"success",icon:"mdi-check-circle",title:"Success",text:["Berhasil Menambahkan Data Paket!"]};this.getDataPaket(),this.openSnackbar(t),this.closeDialog()})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Menambahkan Data Paket!"]};for(let a in t.response.data.message)e.text.push(t.response.data.message[a][0]);this.openSnackbar(e)}))},getDataDialog(t){this.formInput=Object.assign({},t),this.formInput.jenisPaket=parseInt(this.formInput.jenisPaket),this.formInput.idService=parseInt(this.formInput.idService),console.log(this.formInput),this.openDialog("Edit Data Paket",1)},saveUpdate(){this.formInput.idStatus=1,s.Z.put(r.N+`paket/${this.formInput.noResi}`,this.formInput,c).then((()=>{let t={color:"success",icon:"mdi-check-circle",title:"Success",text:["Berhasil Mengubah Data Paket!"]};this.getDataPaket(),this.openSnackbar(t),this.closeDialog()})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Mengubah Data Paket!"]};for(let a in t.response.data.message)e.text.push(t.response.data.message[a][0]);this.openSnackbar(e)}))},deleteItem(t){this.indexData=t,this.dialogDelete=!0},confirmDelete(){s.Z["delete"](r.N+`paket/${this.indexData}`,c).then((()=>{let t={color:"success",icon:"mdi-check-circle",title:"Success",text:["Berhasil Menghapus Data Paket!"]};this.openSnackbar(t),this.getDataPaket()})).catch((t=>{let e={color:"error",icon:"mdi-alert-circle",title:"Error",text:["Gagal Menghapus Data Paket!",`Code Error : ${t.response.status}`]};this.openSnackbar(e)})),this.dialogDelete=!1},cancelConfirmation(){this.dialogPDF=!1,this.dialogDelete=!1,this.closeDialog()},getColorClass(t){switch(t=parseInt(t),t){case 1:return"amber lighten-1 text-center pa-1";case 2:case 4:return"blue lighten-1 text-center pa-1";case 3:case 5:return"light-green accent-3 text-center pa-1";case 6:return"red lighten-1 text-center pa-1"}},getColorStatus(t){switch(t){case"0":return"red lighten-1 text-center pa-1";case"1":return"green lighten-1 text-center pa-1";case"2":return"blue lighten-1 text-center pa-1"}},getPengantaranStatus(t){switch(t){case"0":return"Gagal";case"1":return"Berhasil";case"2":return"Diproses"}},getPDF(t){s.Z.get(r.N+`printresi/${t.noResi}`,c).then((t=>{t.blob()})).then((t=>{let e=window.URL.createObjectURL(t);window.open(e,"_blank")})).catch((t=>{console.log(t)}))}}},d=u,m=a(1001),p=(0,m.Z)(d,i,n,!1,null,null,null),h=p.exports},2179:function(t,e,a){a.d(e,{$1:function(){return n},Bt:function(){return s},lE:function(){return i}});const i=(t,e,a)=>{let i="";if(a){let t=new Date;t.setTime(t.getTime()+24*a*60*60*1e3),i="; expires="+t.toUTCString()}document.cookie=t+"="+(e||"")+i+"; path=/"},n=t=>{let e=t+"=",a=document.cookie.split(";");for(let i=0;i<a.length;i++){let t=a[i];while(" "==t.charAt(0))t=t.substring(1,t.length);if(0==t.indexOf(e))return t.substring(e.length,t.length)}return null},s=()=>{let t=document.cookie.split(";");for(let e=0;e<t.length;e++){let a=t[e],i=a.indexOf("="),n=i>-1?a.substr(0,i):a;document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}}}]);
//# sourceMappingURL=984.174b61dd.js.map