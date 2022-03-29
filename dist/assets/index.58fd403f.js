import{s as i,j as k,l as z,r as u,R as P,a as F}from"./vendor.65235703.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};L();const R=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media screen and (min-width: 768px){
    flex-direction: row;  
    gap:10px
    }
  }
`,g=i.div`
  text-align: center;
  flex: 1;
`,A=i.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  
  @media(min-width: 768px){
    flex-direction: column;
  }
}
`,v="Linker",b="Duplikator",S="Tutaj WKLEJ tekst - u\u017Cyj przecinka jako separator",w="Tutaj pojawi si\u0119 tekst bez duplikat\xF3w",h="\xA9 2022 Linker Duplikator. All rights reserved",f={start:"start",copy:"kopiuj",reset:"reset"},j={completeText:"Uzupe\u0142nij tekst"};var O={linker:v,duplikator:b,inputPlaceholder:S,inputPlaceholdertWithoutDuplicates:w,footerText:h,button:f,errors:j},x=Object.freeze(Object.defineProperty({__proto__:null,linker:v,duplikator:b,inputPlaceholder:S,inputPlaceholdertWithoutDuplicates:w,footerText:h,button:f,errors:j,default:O},Symbol.toStringTag,{value:"Module"}));const D=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,T=i.div`
  line-height: 20px;
  height: 20px;
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
  color: #FFF;
  transition: all 0.5s;
  position: relative;
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
  }
  &:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
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
  }
  &:hover::after {
    opacity: 1;
	  transform: scale(1,1);
  }
`,e=k.exports.jsx,d=k.exports.jsxs,m=({text:t,fnClick:n})=>e(D,{onClick:n,children:e(T,{children:e("span",{children:t.toUpperCase()})})}),V=({fnResetData:t,fnRemoveDuplicate:n,valuesForCopy:a})=>{const{start:s,copy:r,reset:o}=f;return d(A,{children:[e(m,{fnClick:n,text:s}),e(z.CopyToClipboard,{text:`${a}`,children:e(D,{children:e(T,{children:e("span",{children:r.toUpperCase()})})})}),e(m,{fnClick:t,text:o})]})},y=i.textarea`
  height: 100%;
  border: none;
  text-align: center;
  width: var(--text-area-width);
  background: var(--text-area-background);
  border-radius: var(--text-area-border-radius-size);
  resize: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 5px var(--text-area-box-shadow);
  }
`,W=t=>{const{errors:{completeText:n}}=x,[a,s]=u.exports.useState([""]);return{fnRemoveDuplicate:()=>{if(!t)return alert(n);const o=[],c=[];t.split(",").map(l=>l.trim()).filter(l=>l).forEach(l=>{o.includes(l)?c.push(l):o.push(l)}),s(o)},resultValues:a}},B=()=>{const{inputPlaceholder:t,inputPlaceholdertWithoutDuplicates:n}=x,[a,s]=u.exports.useState(""),[r,o]=u.exports.useState([""]),{fnRemoveDuplicate:c,resultValues:p}=W(a),l=()=>{s(""),o([""])};return u.exports.useEffect(()=>{o(p)},[p]),d(R,{children:[e(g,{children:e(y,{placeholder:t,value:a,onChange:C=>s(C.target.value)})}),e(V,{fnResetData:l,fnRemoveDuplicate:c,valuesForCopy:r}),e(g,{children:e(y,{placeholder:n,readOnly:!0,value:r})})]})},N=()=>d("div",{children:[e("div",{className:"linker-dateFrom",children:"first"}),e("div",{className:"linker-dateTo",children:"second"})]}),U=i.footer`
  font-size: var(--footer-size);
  color: var(--footer-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer;
`,E=()=>e(U,{children:h}),M=i.p`
  cursor: pointer;
  padding: 0 5px;
  font-size: var(--header-font-size);
  color: var(--header-text-color);
  transition: var(--switch-transition-time);
  
// ${({isVisible:t})=>t&&`
//   text-shadow: none;
//   color: grey;
// `}
`,I=({visible:t})=>{const{linker:n,duplikator:a}=x;return e(M,{isVisible:t,children:t?n:a})},_=i.label`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
`,$=i.header`
  // background: #232323;
  grid-area: header;
  display: flex;
  flex-direction:column;
	justify-content: center;
	align-items: center;
  margin-bottom: 10px;
`;const K=({checkedValue:t,fnOnChange:n})=>e("input",{type:"checkbox",checked:t,onChange:()=>n(!t)}),q=()=>e("span",{className:"slider round"}),G=({switchValue:t,fnSetSwitch:n})=>d($,{children:[e(I,{visible:t}),d(_,{children:[e(K,{checkedValue:t,fnOnChange:n}),e(q,{})]})]}),J=i.main`
  grid-area: main;
`,H=i.div`
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

${({isDuplikator:t})=>t&&`
  background: var(--color-background-linker);
`}

`;function Q(){const[t,n]=u.exports.useState(!1);return d(H,{isDuplikator:t,children:[e(G,{switchValue:t,fnSetSwitch:()=>n(s=>!s)}),e(J,{children:t?e(N,{}):e(B,{})}),e(E,{})]})}P.render(e(F.StrictMode,{children:e(Q,{})}),document.getElementById("root"));
