var J=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var P=(e,r,n)=>r in e?J(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,z=(e,r)=>{for(var n in r||(r={}))Y.call(r,n)&&P(e,n,r[n]);if(L)for(var n of L(r))Z.call(r,n)&&P(e,n,r[n]);return e},$=(e,r)=>Q(e,X(r));import{s as c,r as h,U as O,j as w,l as ee,R as T,a as te}from"./vendor.94884866.js";const re=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};re();const oe=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 10px;

  @media screen and (min-width: 768px){
    flex-direction: row;  
  }
`,C=c.div`
  text-align: center;
  flex: 1;
`,ne=c.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  
  @media screen and (min-width: 768px){
    flex-direction: column;
    ${({horizontalView:e})=>e&&`
      flex-direction: row;
    `}
  }
}
`,E="Linker",I="Duplikator",V="Tutaj WKLEJ tekst - u\u017Cyj przecinka jako separatora",B="Tutaj pojawi si\u0119 tekst bez duplikat\xF3w",_="Link",W="Rezultat",S="\xA9 2022 Linker Duplikator. All rights reserved",m={start:"start",copy:"kopiuj",reset:"reset",close:"zamknij",duplicate:"poka\u017C duplikaty"},F={completeText:"Uzupe\u0142nij tekst",wrongLink:"B\u0142\u0119dny link!"},A={startAlert:"Uzupe\u0142nij tekst",copyAlert:"Skopiowano do schowka",resetAlert:"Dane zosta\u0142y usuni\u0119te"},M="Brak duplikat\xF3w",H="Lista duplikat\xF3w";var ie={linker:E,duplikator:I,inputPlaceholder:V,inputPlaceholdertWithoutDuplicates:B,linkerInputPlaceholder:_,linkerOutputPlaceholder:W,footerText:S,buttons:m,errors:F,alerts:A,noDuplicates:M,duplicatesHeader:H},g=Object.freeze(Object.defineProperty({__proto__:null,linker:E,duplikator:I,inputPlaceholder:V,inputPlaceholdertWithoutDuplicates:B,linkerInputPlaceholder:_,linkerOutputPlaceholder:W,footerText:S,buttons:m,errors:F,alerts:A,noDuplicates:M,duplicatesHeader:H,default:ie},Symbol.toStringTag,{value:"Module"}));const N=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,K=c.div`
  line-height: 20px;
  height: 20px;
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
  color: #FFF;
  ${({infoBtn:e})=>e&&`
    color: rgba(209, 120, 0, 0.8);
  `}
  ${({errorBtn:e})=>e&&`
   color: rgba(255, 0, 0, 0.8);
  `}  
  ${({successBtn:e})=>e&&`
  color: rgba(0, 255, 0, 0.8);
 `}  
  transition: all 0.5s;
  position: relative;
  border-radius: var(--button-border-radius-size);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
    ${({infoBtn:e})=>e&&`
      background-color: rgba(209,120,0,0.1);
    `}
    ${({errorBtn:e})=>e&&`
      background-color: rgba(255,0,0,0.1);
    `}
    ${({successBtn:e})=>e&&`
    background-color: rgba(0,255,0,0.1);
  `}
    border-radius: var(--button-border-radius-size);
  }
  &:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
    border-radius: var(--button-border-radius-size);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.5);
    transform: scale(1.2,1.2);
    ${({infoBtn:e})=>e&&`
      border: 1px solid rgba(209, 120, 0, 0.8);
    `}
    ${({errorBtn:e})=>e&&`
      border: 1px solid rgba(209,0,0,0.8);
    `}
    ${({successBtn:e})=>e&&`
    border: 1px solid rgba(0,209,0,0.8);
  `}
  }
  &:hover::after {
    opacity: 1;
	  transform: scale(1,1);
    border-radius: var(--button-border-radius-size);
  }
  border-radius: var(--button-border-radius-size);
`,se=1500,G=()=>{const[e,r]=h.exports.useState(!1),n=()=>(e||r(!0),setTimeout(()=>{r(!1)},se));return h.exports.useEffect(()=>()=>clearTimeout(n()),[]),{visibleAlert:e,openAlert:n}},ae=O`
  0% { margin-right: -200px }
  100 % { margin-right: 20px }
`,le=O`
  0% { margin-top: -50px;}
  100 % { margin-top: 0px;}
`,ce=c.div`
  font-size: 13px;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  width: 100%;
  padding: 10px 0;

  ${({warning:e})=>e&&`
    background-color: rgba(209,120,0,0.1);
    color: rgba(209, 120, 0, 0.8);
  `}
  ${({error:e})=>e&&`
    background-color: rgba(255,0,0,0.1);
    color: rgba(255, 0, 0, 0.8);
  `}
  ${({success:e})=>e&&`
    background-color: rgba(0,255,0,0.1);
    color: rgba(0, 255, 0, 0.8);
  `}

  animation: 0.5s ${le};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (min-width: 768px){
    width: 200px;
    margin-top: 20px;
    padding: 10px;
    margin-right: 10px;

    border-radius: var(--text-area-border-radius-size);
    animation: 0.3s ${ae};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`,t=w.exports.jsx,f=w.exports.jsxs,D=w.exports.Fragment,U=({info:e,warning:r,error:n,success:i})=>{const{start:o,copy:s,reset:a}=m,{startAlert:l,copyAlert:u,resetAlert:p}=A,d={success:e==a||e==s,warning:e===o},b=v=>{switch(v){case a:return p;case o:return l;case s:return u;default:return!1}};return b(e)?t(ce,$(z({},d),{children:b(e)})):null},y=({text:e,fnClick:r,infoBtn:n,errorBtn:i,successBtn:o,showAlert:s})=>{const{visibleAlert:a,openAlert:l}=G();return f(D,{children:[t(N,{onClick:()=>{a||(r&&r(),s&&l())},children:t(K,{infoBtn:n,errorBtn:i,successBtn:o,children:t("span",{children:e.toUpperCase()})})}),a&&t(U,{info:e,warning:n,error:i,success:o})]})},de=({copyValue:e,text:r})=>{const{visibleAlert:n,openAlert:i}=G(),o=()=>{n||i()};return f(D,{children:[t(ee.CopyToClipboard,{text:`${e}`,children:t(N,{onClick:o,children:t(K,{children:t("span",{children:r.toUpperCase()})})})}),n&&t(U,{info:r})]})},q=({fnResetData:e,fnRemoveData:r,valuesForCopy:n,horizontalView:i,valueFromUser:o})=>{const{start:s,copy:a,reset:l}=m;return f(ne,{horizontalView:i,children:[t(y,{text:s,fnClick:r,showAlert:!(o!=null&&o.length)}),t(de,{copyValue:n,text:a}),t(y,{text:l,fnClick:e,showAlert:!0})]})};var x=(e=>(e.DARK="dark",e.LIGHT="light",e))(x||{});const k=c.textarea`
  font-size: var(--text-area-font-size);
  color: ${({theme:e})=>`var(--text-area-color-${e})`};
  height: 100%;
  border: none;
  width: var(--text-area-width);
  background: ${({theme:e})=>`var(--text-area-background-${e})`};
  border-radius: var(--text-area-border-radius-size);
  resize: none;
  padding: var(--text-area-padding);
  &:focus {
    outline: none;
    box-shadow: 0 0 5px var(--text-area-box-shadow);
  }
`,ue=e=>{const[r,n]=h.exports.useState([""]),[i,o]=h.exports.useState([""]);return{fnRemoveDuplicate:()=>{if(!e)return;const l=[],u=[];e.split(",").map(d=>d.trim()).filter(d=>d).forEach(d=>{l.includes(d)?u.push(d):l.push(d)}),n(l),o(u)},resultValues:r,duplicates:i,reset:()=>{n([""]),o([""])}}},pe="modulepreload",R={},he="/",fe=function(r,n){return!n||n.length===0?r():Promise.all(n.map(i=>{if(i=`${he}${i}`,i in R)return;R[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":pe,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>r())},ge=c.div`
  cursor: pointer;
  position: absolute;
  bottom: 9vh;
  right: 7vw;
  @media screen and (min-width: 768px){
    bottom: 9vh;
    right: 3vw;
  }
`;const xe=c.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
`,me=()=>t(xe,{children:f("div",{className:"lds-default",children:[t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{}),t("div",{})]})}),be=T.lazy(()=>fe(()=>import("./PopupDetails.72fdfbd4.js"),["assets/PopupDetails.72fdfbd4.js","assets/vendor.94884866.js"])),ke=({duplicateElements:e})=>{const[r,n]=h.exports.useState(!1);return f(ge,{children:[t(y,{text:m.duplicate,infoBtn:!0,fnClick:()=>n(!0)}),r&&t(h.exports.Suspense,{fallback:t(me,{}),children:t(be,{fnClose:()=>n(!1),values:e})})]})},ve=()=>{const{duplikator:e}=g,{inputPlaceholder:r,inputPlaceholdertWithoutDuplicates:n}=g,[i,o]=h.exports.useState(""),{fnRemoveDuplicate:s,resultValues:a,duplicates:l,reset:u}=ue(i);h.exports.useEffect(()=>{document.title=e},[]);const p=()=>{o(""),u()};return f(oe,{children:[t(C,{children:t(k,{theme:x.LIGHT,placeholder:r,value:i,onChange:d=>o(d.target.value)})}),t(q,{fnResetData:p,fnRemoveData:s,valuesForCopy:a,valueFromUser:i}),t(C,{children:t(k,{theme:x.LIGHT,placeholder:n,readOnly:!0,value:a})}),t(ke,{duplicateElements:l})]})},ye=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
`,j=c.div`
  text-align: center;
  flex: 1;
`,we=e=>{const{errors:{completeText:r,wrongLink:n}}=g,[i,o]=h.exports.useState([""]);return{resultValues:i,fnRemoveLink:()=>{if(!e)return;if(e.indexOf(",p")<0)return alert(n);const l=[];e.split(`
`).map(p=>{const d=p.indexOf(",p"),b=p.lastIndexOf(","),v=p.substring(d+1,b);l.push(v)}),o(l)},reset:()=>{o([""])}}},Se=()=>{const{linker:e}=g,{linkerInputPlaceholder:r,linkerOutputPlaceholder:n}=g,[i,o]=h.exports.useState(""),{resultValues:s,fnRemoveLink:a,reset:l}=we(i),u=()=>{o(""),l()};return h.exports.useEffect(()=>{document.title=e},[]),f(ye,{children:[t(j,{children:t(k,{theme:x.DARK,placeholder:r,value:i,onChange:p=>o(p.target.value),onBlur:()=>o(p=>p+`
`)})}),t(q,{horizontalView:!0,fnResetData:u,fnRemoveData:a,valuesForCopy:s,valueFromUser:i}),t(j,{children:t(k,{theme:x.DARK,placeholder:n,readOnly:!0,value:s})})]})},Ae=c.footer`
  font-size: var(--footer-size);
  color: var(--footer-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer;
`,De=()=>t(Ae,{children:S});const Le=({visible:e})=>{const{linker:r,duplikator:n}=g,i=e?r:n;return t("h2",{"data-text":i,className:i,children:i})},Pe=c.label`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
`,ze=c.header`
  // background: #232323;
  grid-area: header;
  display: flex;
  flex-direction:column;
	justify-content: center;
	align-items: center;
  margin-bottom: 10px;
`;const $e=({checkedValue:e,fnOnChange:r})=>f(D,{children:[t("label",{htmlFor:"switch"}),t("input",{id:"switch",type:"checkbox",checked:e,onChange:()=>r(!e)})]}),Ce=()=>t("span",{className:"slider round"}),Re=({switchValue:e,fnSetSwitch:r})=>f(ze,{children:[t(Le,{visible:e}),f(Pe,{children:[t($e,{checkedValue:e,fnOnChange:r}),t(Ce,{})]})]}),je=c.main`
  grid-area: main;
`,Oe=c.div`
  background: var(--color-background-duplikator);
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-gap: 10px;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 6fr 0.5fr;
  grid-template-areas: 
    "header"
    "main"
    "footer";

  ${({isDuplikator:e})=>e&&`
    background: var(--color-background-linker);
  `}

`;function Te(){const[e,r]=h.exports.useState(!1);return f(Oe,{isDuplikator:e,children:[t(Re,{switchValue:e,fnSetSwitch:()=>r(i=>!i)}),t(je,{children:e?t(Se,{}):t(ve,{})}),t(De,{})]})}te.render(t(T.StrictMode,{children:t(Te,{})}),document.getElementById("root"));export{y as B,f as a,m as b,t as j,g as t};
