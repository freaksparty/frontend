"use strict";var FICONLAN=angular.module("FICONLAN",["ui.bootstrap"]);FICONLAN.constant("API_URI_BASE",""),FICONLAN.factory("BaseAPIServ",["$http","API_URI_BASE",function(a,b){var c=function(c,d){return function(e,f,g){a[c](b+d).success(function(a,b){f(b,e)}).error(function(a,b){g(b,e)})}};return{get:function(a){return c("GET",a)},post:function(a){return c("POST",a)}}}]),FICONLAN.factory("EventServ",["$http","BaseAPIServ",function(a,b){var c,d,e,f;return c="/event",d=c+"/create",e=c+"/changeData",f+="/byName",{create:b.post(d),modify:b.post(e)}}]);