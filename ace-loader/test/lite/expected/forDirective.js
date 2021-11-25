/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

{"render": "function (vm) { var _vm = vm || this; return _c('div', [_l((function () {return _vm.list}),function($item,$idx){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test($item,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return ($idx) + decodeURI('.') + ($item.name)}}} )] )}),_c('div', [_l((function () {return _vm.list}),function(personItem,$idx){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test($idx,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return ($idx) + decodeURI('-') + (personItem.name) + decodeURI('--') + (personItem.age)}}} )] )}),_c('image', {'attrs' : {'src' : function () {return _vm.personItem}}} )] ),_c('div', [_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return (personIndex) + decodeURI('.') + (personItem.name)}}} )] )}),_c('swiper', {'attrs' : {'index' : function () {return _vm.personIndex},'loop' : function () {return _vm.personItem}}} )] ),_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_l((function () {return _vm.menu}),function(item,index){return _c('div', [_c('text', {'attrs' : {'value' : function () {return (personItem.id) + decodeURI('--') + (item.name)}}} )] )})] )}),_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_l((function () {return personItem}),function(item,index){return _c('div', [_c('text', {'attrs' : {'value' : function () {return (index) + decodeURI('--') + (item.name)}}} )] )})] )}),_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_c('div', {'attrs' : {'value' : function () {return (personIndex) + decodeURI('.') + (personItem.name)}},'onBubbleEvents' : {'click' : personItem.click}} )] )}),_l((function () {return value.list}),function(index,value){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(value,evt)}}} , [_c('div', {'attrs' : {'value' : function () {return value.info}},'onBubbleEvents' : {'click' : value.click}} )] )})] ) }"}
