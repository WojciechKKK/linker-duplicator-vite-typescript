import{s as i,U as s}from"./vendor.94884866.js";import{j as t,t as c,a as d,B as l,b as u}from"./index.7a4739c2.js";const h=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default
`,m=s`
  0% { opacity: 0; }
  100% {opacity: 1;}
`,x=i.div`
  background: var(--popup-color-background);
  padding: 20px 30px;
  width: var(--popup-width-big)
  color: var(--popup-text-color);
  overflow-wrap: break-word;
  opacity: 0;
  @media screen and (min-width: 768px){
    width: var(--popup-width-small);
  };
  animation: 0.5s ${m};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`,f=i.h5`
  text-align: center;
  color: var(--popup-text-color);
  font-size: 15px
`,y=({emptyContent:e})=>{const{noDuplicates:o,duplicatesHeader:n}=c;return t(f,{children:e?o:n})},b=({fnClose:e,values:o})=>{const{close:n}=u,a=o[0]===""||!o.length;return t(h,{children:d(x,{children:[t(y,{emptyContent:a}),!a&&t("ul",{children:o.map((r,p)=>t("li",{children:r},`${r}+${p}`))}),t(l,{text:n,fnClick:e,errorBtn:!0})]})})};export{b as default};
