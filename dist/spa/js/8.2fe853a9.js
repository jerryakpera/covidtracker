(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"008c":function(t,s,e){},"3ea3":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-card",{staticClass:"my-card q-pa-xs",attrs:{square:"",flat:"",bordered:""}},[e("q-card-section",{staticClass:"q-pa-xs"},[e("div",{staticClass:"row items-center no-wrap q-pa-none"},[e("div",{staticClass:"col"},[t.countriesLength<=25?e("span",{staticClass:"flag-icon big",class:"flag-icon-"+t.country.CountryCode.toLowerCase()}):e("span",{staticClass:"flag-icon",class:"flag-icon-"+t.country.CountryCode.toLowerCase()}),e("div",{staticClass:"text-h5 text-weight-medium"},[t._v(t._s(t.country.Country))])]),e("div",{staticClass:"col-auto"},[e("q-btn",{attrs:{to:"/country/"+t.country.Slug,size:"sm",flat:"",round:"",color:"primary",icon:"visibility"},on:{click:function(s){return t.setCountryObj(t.country)}}})],1)])]),e("q-card-section",{attrs:{horizontal:""}},[e("q-card-section",{staticClass:"col-4 bg-primary text-white text-center"},[e("div",{staticClass:"text-subtitle2"},[t._v("CASES")]),e("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.numberWithCommas(t.country.TotalConfirmed)))]),e("div",{staticClass:"text-body2"},[t._v("+ "+t._s(t.numberWithCommas(t.country.NewConfirmed))+" new")])]),e("q-card-section",{staticClass:"col-4 bg-positive text-white text-center"},[e("div",{staticClass:"text-subtitle2"},[t._v("RECOVERED")]),e("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.numberWithCommas(t.country.TotalRecovered)))]),e("div",{staticClass:"text-body2"},[t._v("+ "+t._s(t.numberWithCommas(t.country.NewRecovered))+" new")])]),e("q-card-section",{staticClass:"col-4 bg-negative text-white text-center"},[e("div",{staticClass:"text-subtitle2"},[t._v("DEATHS")]),e("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.numberWithCommas(t.country.TotalDeaths)))]),e("div",{staticClass:"text-body2"},[t._v("+ "+t._s(t.numberWithCommas(t.country.NewDeaths))+" new")])])],1)],1)},i=[],o=(e("5319"),e("ded3")),c=e.n(o),n=e("2f62"),r={props:{country:{type:Object,required:!0},countriesLength:{type:Number}},methods:c()(c()({},Object(n["b"])("countries",["setCountry"])),{},{numberWithCommas(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},setCountryObj(t){this.setCountry(t)}})},l=r,u=(e("945b"),e("2877")),d=e("f09f"),C=e("a370"),b=e("9c40"),m=e("eebe"),v=e.n(m),y=Object(u["a"])(l,a,i,!1,null,"a24926dc",null);s["default"]=y.exports;v()(y,"components",{QCard:d["a"],QCardSection:C["a"],QBtn:b["a"]})},"945b":function(t,s,e){"use strict";var a=e("008c"),i=e.n(a);i.a}}]);