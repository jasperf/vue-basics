webpackJsonp([1],{102:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{color:"teal lighten-4"}},[s("v-card-text",[s("div",{staticClass:"headline mb-2"},[t._v("Инструкция по использованию калькулятора")]),s("p",[t._v("Мы разработали для Вас удобный калькулятор стоимости работ и материалов. С его помощью Вы сможете самостоятельно оценить, какую сумму Вы потратите на выбранные Вами работы и необходимые для этого материалы.")]),t._l(t.items,function(e,i){return s("component-description",{key:i,attrs:{item:e,itemIndex:i,itemDividerShow:t.items.length}})})],2)],1)},staticRenderFns:[]}},16:function(t,e,s){s(92);var i=s(4)(s(47),s(102),"data-v-ad5c8158",null);t.exports=i.exports},47:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(93),n=s.n(i);e.default={name:"PageDescription",computed:{items:function(){return this.$store.getters.getDescription}},components:{ComponentDescription:n.a}}},53:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DescriptionItem",props:{item:{type:Object,default:function(){return{}}},itemIndex:{type:Number,default:function(){return null}},itemDividerShow:{type:Number,default:function(){return null}}},computed:{itemNumber:function(){return this.itemIndex+1}}}},85:function(t,e,s){e=t.exports=s(14)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"DescriptionItem.vue",sourceRoot:""}])},88:function(t,e,s){e=t.exports=s(14)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"PageDescription.vue",sourceRoot:""}])},89:function(t,e,s){var i=s(85);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(15)("75ab2f5e",i,!0)},92:function(t,e,s){var i=s(88);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(15)("21724e68",i,!0)},93:function(t,e,s){s(89);var i=s(4)(s(53),s(98),"data-v-75921afa",null);t.exports=i.exports},98:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mb-2",attrs:{color:"teal lighten-2"}},[s("v-container",{attrs:{fluid:"fluid"}},[s("v-layout",{attrs:{row:"row"}},[s("v-flex",{staticClass:"pr-2",attrs:{xs1:"xs1"}},[s("div",{staticClass:"display-2 white--text"},[t._v(t._s(t.itemNumber))])]),s("v-flex",{staticClass:"pl-2",attrs:{xs11:"xs11"}},[s("div",{staticClass:"headline white--text"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"body-1"},[t._v(t._s(t.item.subtitle))])])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.86033ad47d9b35889a49.js.map