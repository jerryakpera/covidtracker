(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{a9c3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-black",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[a("q-btn",{attrs:{to:"/"}},[t._v("COVID-19 Tracker")])],1)],1)],1),a("q-drawer",{attrs:{"content-class":"bg-grey-1",width:250,overlay:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{staticClass:"menu-list",attrs:{padding:""}},t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",to:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=a("2877"),p=a("66e5"),u=a("4074"),f=a("0016"),m=a("0170"),b=a("eebe"),d=a.n(b),k=Object(c["a"])(s,l,r,!1,null,null,null),w=k.exports;d()(k,"components",{QItem:p["a"],QItemSection:u["a"],QIcon:f["a"],QItemLabel:m["a"]});var q={name:"MainLayout",components:{EssentialLink:w},data(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Home",caption:"All countries",icon:"home",link:"/"},{title:"Global",caption:"Worldwide stats",icon:"bar_chart",link:"/stats"},{title:"Information",caption:"How it spreads, prevention & symptoms ",icon:"info",link:"/info"}]}}},v=q,Q=a("4d5a"),_=a("e359"),g=a("65c6"),y=a("9c40"),L=a("6ac5"),h=a("9404"),O=a("4983"),D=a("1c1c"),E=a("09e3"),I=Object(c["a"])(v,n,i,!1,null,null,null);e["default"]=I.exports;d()(I,"components",{QLayout:Q["a"],QHeader:_["a"],QToolbar:g["a"],QBtn:y["a"],QToolbarTitle:L["a"],QDrawer:h["a"],QScrollArea:O["a"],QList:D["a"],QPageContainer:E["a"]})}}]);