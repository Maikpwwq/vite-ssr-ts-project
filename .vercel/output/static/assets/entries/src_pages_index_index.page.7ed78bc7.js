import{j as i}from"../chunks/chunk-4d04ce61.js";import{r as p,g as b}from"../chunks/chunk-b9ac931a.js";function v(){const[t,o]=p.useState(0);return i.jsxs("button",{type:"button",onClick:()=>o(e=>e+1),children:["Counter ",t]})}var m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var o={}.hasOwnProperty;function e(){for(var s=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var u=typeof n;if(u==="string"||u==="number")s.push(n);else if(Array.isArray(n)){if(n.length){var l=e.apply(null,n);l&&s.push(l)}}else if(u==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){s.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&s.push(a)}}}return s.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e})()})(m);var y=m.exports;const C=b(y),B=["as","disabled"];function P(t,o){if(t==null)return{};var e={},s=Object.keys(t),r,n;for(n=0;n<s.length;n++)r=s[n],!(o.indexOf(r)>=0)&&(e[r]=t[r]);return e}function O(t){return!t||t.trim()==="#"}function j({tagName:t,disabled:o,href:e,target:s,rel:r,role:n,onClick:u,tabIndex:l=0,type:a}){t||(e!=null||s!=null||r!=null?t="a":t="button");const f={tagName:t};if(t==="button")return[{type:a||"button",disabled:o},f];const x=c=>{if((o||t==="a"&&O(e))&&c.preventDefault(),o){c.stopPropagation();return}u==null||u(c)},d=c=>{c.key===" "&&(c.preventDefault(),x(c))};return t==="a"&&(e||(e="#"),o&&(e=void 0)),[{role:n??"button",disabled:void 0,tabIndex:o?void 0:l,href:e,target:t==="a"?s:void 0,"aria-disabled":o||void 0,rel:t==="a"?r:void 0,onClick:x,onKeyDown:d},f]}const k=p.forwardRef((t,o)=>{let{as:e,disabled:s}=t,r=P(t,B);const[n,{tagName:u}]=j(Object.assign({tagName:e,disabled:s},r));return i.jsx(u,Object.assign({},r,n,{ref:o}))});k.displayName="Button";const w=["xxl","xl","lg","md","sm","xs"],E="xs",D=p.createContext({prefixes:{},breakpoints:w,minBreakpoint:E});function S(t,o){const{prefixes:e}=p.useContext(D);return t||e[o]||o}const h=p.forwardRef(({as:t,bsPrefix:o,variant:e="primary",size:s,active:r=!1,disabled:n=!1,className:u,...l},a)=>{const f=S(o,"btn"),[x,{tagName:d}]=j({tagName:t,disabled:n,...l}),c=d;return i.jsx(c,{...x,...l,ref:a,disabled:n,className:C(u,f,r&&"active",e&&`${f}-${e}`,s&&`${f}-${s}`,l.href&&n&&"disabled")})});h.displayName="Button";const g=h;function R(){const t=()=>{console.log("click")};return i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"Welcome"}),"This page is:",i.jsxs("ul",{children:[i.jsx("li",{children:"Rendered to HTML."}),i.jsxs("li",{children:["Interactive. ",i.jsx(v,{})]})]}),i.jsx(g,{onClick:t,children:"Navigate"})]})}export{R as Page};