import{s as i,j as u,r as p,R as f,a as h}from"./vendor.1ab93a93.js";const x=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}};x();const m=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px){
    flex-direction: row;
    }
  }
`,y=i.div`
  flex-grow: 5;
  border: 1px solid white;
`,e=u.exports.jsx,s=u.exports.jsxs,g=()=>e(y,{children:"data from user"}),F=i.div`
  flex-grow: 5;
  border: 1px solid white;
`,k=()=>e(F,{children:"data to user"}),v=i.div`
  padding: 0 10px;
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`,b=()=>s(v,{children:[e("button",{children:"usu\u0144"}),e("button",{children:"kopiuj"}),e("button",{children:"reset"})]}),w=()=>s(m,{children:[e(g,{}),e(b,{}),e(k,{})]}),S=()=>s("div",{children:[e("div",{className:"linker-dateFrom",children:"first"}),e("div",{className:"linker-dateTo",children:"second"})]}),j=i.footer`
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer;
`,D=()=>e(j,{children:"\xA9 2022 Linker Duplicator. All rights reserved"}),A=i.header`
  // background: #232323;
  grid-area: header;
  display: flex;
	justify-content: center;
	align-items: center;
  color: red
`,L=i.p`
  cursor: pointer;
  padding: 0 10px;
  font-size: 15px;
  color: #FFF;
  transition: var(--transition-time);;
  // text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
  
  &:hover{
    color: white
  }
  
${({isVisible:r})=>r&&`
  text-shadow: none;
  color: grey;
`}
 
`,a=({fnOnClick:r,visible:n,text:c})=>e(L,{isVisible:n,onClick:()=>r(n),children:c}),C=i.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;const N=({switchValue:r,fnSetSwitch:n})=>s(A,{children:[e(a,{fnOnClick:n,visible:r,text:"Duplicator"}),s(C,{children:[e("input",{type:"checkbox",checked:r,onChange:()=>n(!r)}),e("span",{className:"slider round"})]}),e(a,{fnOnClick:n,visible:!r,text:"Linker"})]}),O=i.main`
  background: #92A8D1;
  grid-area: main;
`;function T(){const[r,n]=p.exports.useState(!1);return s("div",{className:"App",children:[e(N,{switchValue:r,fnSetSwitch:()=>n(l=>!l)}),e(O,{children:r?e(S,{}):e(w,{})}),e(D,{})]})}f.render(e(h.StrictMode,{children:e(T,{})}),document.getElementById("root"));
