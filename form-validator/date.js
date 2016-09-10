/** File generated by Grunt -- do not modify
 *  JQUERY-FORM-VALIDATOR
 *
 *  @version 2.3.44
 *  @website http://formvalidator.net/
 *  @author Victor Jonsson, http://victorjonsson.se
 *  @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(a){a.formUtils.addValidator({name:"time",validatorFunction:function(a){if(null===a.match(/^(\d{2}):(\d{2})$/))return!1;var b=parseInt(a.split(":")[0],10),c=parseInt(a.split(":")[1],10);return!(b>23||c>59)},errorMessage:"",errorMessageKey:"badTime"}),a.formUtils.addValidator({name:"birthdate",validatorFunction:function(b,c,d){var e="yyyy-mm-dd";c.valAttr("format")?e=c.valAttr("format"):"undefined"!=typeof d.dateFormat&&(e=d.dateFormat);var f=a.formUtils.parseDate(b,e);if(!f)return!1;var g=new Date,h=g.getFullYear(),i=f[0],j=f[1],k=f[2];if(i===h){var l=g.getMonth()+1;if(j===l){var m=g.getDate();return k<=m}return j<l}return i<h&&i>h-124},errorMessage:"",errorMessageKey:"badDate"})}(a)});