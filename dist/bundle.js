!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CaosJS=e():t.CaosJS=e()}(self,(()=>{return t={237:t=>{t.exports=class{constructor(t={}){const{selectors:e}=t;"string"==typeof e&&(t.selectors=[e]),this.config={selectors:[],maxRotation:2,minRotation:-2,allowFrequency:!1,applyFrequencyToAllElements:!1,frequency:.5,delay:0,...t},setTimeout((()=>{this.init()}),this.config.delay)}init(){this.config.allowFrequency?Math.random()<this.config.frequency&&this.applyEffect():this.applyEffect()}applyEffect(){this.config.selectors.forEach((t=>{document.querySelectorAll(t).forEach((t=>{this.config.allowFrequency&&this.config.applyFrequencyToAllElements?Math.random()<this.config.frequency&&this.caosifyElement(t):this.caosifyElement(t)}))}))}caosifyElement(t){const e=this.getRandomRotation();t.style.transform=`rotate(${e}deg)`}getRandomRotation(){const{minRotation:t,maxRotation:e}=this.config;return Math.random()*(e-t)+t}}}},e={},function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}(237);var t,e}));