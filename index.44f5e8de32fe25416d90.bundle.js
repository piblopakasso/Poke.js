"use strict";(self.webpackChunkwebpack_react=self.webpackChunkwebpack_react||[]).push([[826],{954:function(e,o,n){var r=n(294),t=n(745),i=n(379),a=n.n(i),s=n(795),d=n.n(s),c=n(569),l=n.n(c),p=n(565),x=n.n(p),u=n(216),g=n.n(u),h=n(589),f=n.n(h),b=n(434),m={};m.styleTagTransform=f(),m.setAttributes=x(),m.insert=l().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=g(),a()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals;var k=n(763),j=n(655),y=n(250),w=n(965),v=n(202),P=n(893);function A(){return(0,P.jsxs)(C,{children:[(0,P.jsx)($,{children:"About"}),(0,P.jsxs)(Z,{children:[(0,P.jsxs)(I,{children:[(0,P.jsx)(z,{children:"What is this?"}),(0,P.jsx)(B,{children:"This is my home project that I decided to make from scratch to try something relatively complex and prove (at least to myself) that I can create stuff. It is far from perfection and there are still a lot of things that can be implemented, however, I am glad that it exists and can demonstrate some of my skills or potential."})]}),(0,P.jsxs)(I,{children:[(0,P.jsx)(z,{children:"Why Pokemons?"}),(0,P.jsx)(B,{children:"It started from a joke, and the joke got out of control. Surprisingly, it didn't go so badly, and in my opinion, it's always better to have some additional fun in a project that is supported only by your self-motivation (unfortunately, Nintendo did not pay me anything). PokeAPI proved to be an understandable and easy-to-work-with API. At the same time, it does have its cons and limitations, which provided valuable experience in problem-solving situations."})]}),(0,P.jsxs)(I,{children:[(0,P.jsx)(z,{children:"What was used?"}),(0,P.jsx)(B,{children:"At this stage of the project I have used:"}),(0,P.jsxs)(q,{children:[(0,P.jsx)(S,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{href:"https://pokeapi.co/",children:"PokeAPI"}),"- to access Pokemon data;"]})}),(0,P.jsx)(S,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{href:"https://tanstack.com/query/latest/",children:"TanStack"}),"- to help me deal with all tasks where fetching was involved;"]})}),(0,P.jsx)(S,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{href:"https://reactrouter.com/en/main",children:"React Router"}),"- to make routing easier and more efficient;"]})}),(0,P.jsx)(S,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{href:"https://styled-components.com/",children:"Styled Components"}),"- to change working with CSS in a more enjoyable way;"]})}),(0,P.jsx)(S,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{href:"https://prettier.io/",children:"Prettier"}),"- to format all the written code to meet nice-looking standards."]})})]})]})]})]})}const C=k.ZP.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  font-size: 18px;
`,$=k.ZP.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0 20px 0;
`,Z=k.ZP.div`
  background-color: #dcdcdc;
  border-radius: 12px;
  padding: 30px 30px 0 30px;
`,I=k.ZP.div`
  margin-bottom: 15px;
`,z=k.ZP.h4`
  display: inline-block;
  color: white;
  background-color: #8d9d9f;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`,B=k.ZP.p`
  color: #282c34;
`,q=k.ZP.ul`
  margin-left: 20px;
  list-style: disc;
`,S=k.ZP.li`
  margin-top: 10px;
`,L=k.ZP.a`
  text-decoration: none;
  margin-right: 5px;
`;var F=n(746);async function E(){return(await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")).json()}async function T(e){return(await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)).json()}function N(e,o,n){return n?e.map((e=>e[o][n])):e.map((e=>e[o]))}function U(e){return e.charAt(0).toUpperCase()+e.slice(1)}function W(e){const o=`000${e}`;return 5===e.length?o.slice(-5):o.slice(-4)}function O(e){const o=new Set(e);return Array.from(o)}function _(e){return{names:e.results.map((e=>e.name)),ids:e.results.map((e=>e.url.replace("https://pokeapi.co/api/v2/pokemon/","").slice(0,-1))).filter((e=>e.length<=4))}}function K(e,o){if(!isNaN(e)&&""!==e&&e<=o.ids.length){const n=o.ids.indexOf(e);return o.names[n]}return e}function D(e,o){return o.filter((o=>o.includes(e.toLowerCase())))}const R="#F5F5F5",V="#282c34",X="#dcdcdc",H={normal:"#bca38f",fighting:"#fa8072",flying:"#9ee1e0",poison:"#9bc51a",ground:"#b67d37",rock:"#3a3736",bug:"#449d31",steel:"#8d9d9f",ghost:"#896fb4",fire:"#ff4c4c",water:"#2fadd3",grass:"#8fbc8f",electric:"#f1c91f",psychic:"#c553b4",ice:"#cddade",dragon:"#ea7638",dark:"#29314a",fairy:"#e8a8dd",shadow:"#542693",unknown:"#17ccad"};function M(){return(0,P.jsxs)(Q,{children:[(0,P.jsx)(oe,{}),(0,P.jsx)(ne,{}),(0,P.jsx)(re,{})]})}const Q=k.ZP.div`
  width: 60px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Y=k.F4`
  0% {
    background: #f5f5f5;
  } 
  25% {
    background: rgba(245, 245, 245, 0.66);
  } 
  50% {
    background: rgba(245, 245, 245, 0.33);
  }
  75% {
    background: rgba(245, 245, 245, 0.66);
  }
  100% {
    background: #f5f5f5;
  }
`,G=k.F4`
  0% {
    background: rgba(245, 245, 245, 0.66);
  } 
  25% {
    background: #f5f5f5;
  } 
  50% {
    background: rgba(245, 245, 245, 0.66);
  }
  75% {
    background: rgba(245, 245, 245, 0.33);
  }
  100% {
    background: rgba(245, 245, 245, 0.66);
  }
`,J=k.F4`
  0% {
    background: rgba(245, 245, 245, 0.33);
  } 
  25% {
    background: rgba(245, 245, 245, 0.66);
  } 
  50% {
    background: #f5f5f5;
  }
  75% {
    background: rgba(245, 245, 245, 0.66);
  }
  100% {
    background: rgba(245, 245, 245, 0.33);
  }
`,ee=k.ZP.div`
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 50%;
`,oe=(0,k.ZP)(ee)`
  animation: 1.5s linear infinite ${Y};
`,ne=(0,k.ZP)(ee)`
  animation: 1.5s linear infinite ${G};
`,re=(0,k.ZP)(ee)`
  animation: 1.5s linear infinite ${J};
`;function te(e){let{abilityName:o,hideDescription:n}=e;const{data:r,isLoading:t,isError:i}=(0,F.a)({queryFn:async function(){return function(e,o){const n=e.effect_entries.find((e=>"en"===e.language.name));return{name:U(o),description:n?n.effect:"The ability investigation is still in progress."}}(await async function(e){return(await fetch(`https://pokeapi.co/api/v2/ability/${e}`)).json()}(o),o)},queryKey:["pokemonAbility",o]});return(0,P.jsxs)(ie,{onClick:n,children:[(0,P.jsx)(ae,{children:U(o)}),t?(0,P.jsx)(M,{}):(0,P.jsx)(se,{children:r.description}),i&&(0,P.jsx)(se,{children:"Oops... There is no information about this ability."})]})}const ie=k.ZP.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 12px;
  color: white;
  box-sizing: border-box;
  background-color: ${V};
  cursor: pointer;
`,ae=k.ZP.p`
  padding-bottom: 10px;
`,se=k.ZP.p`
  padding-bottom: 10px;
`;function de(){return(0,P.jsx)(ce,{children:(0,P.jsx)(pe,{})})}const ce=k.ZP.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`,le=k.F4`
  0% {
    transform: rotate(0deg);
  }
  25% {
    border-top-color: rgba(143, 188, 143, 0.5);
    border-left-color: #ff4c4c;
    border-bottom-color: rgba(47, 173, 211, 0.5);
    border-right-color: rgba(241, 201, 31, 0.25);
  }
  50% {
    border-top-color: rgba(143, 188, 143, 0.25);
    border-left-color: rgba(255, 76, 76, 0.5);
    border-bottom-color: #2fadd3;
    border-right-color: rgba(241, 201, 31, 0.5);
  }
  75% {
    border-top-color: rgba(143, 188, 143, 0.5);
    border-left-color: rgba(255, 76, 76, 0.25);
    border-bottom-color: rgba(47, 173, 211, 0.5);
    border-right-color: #f1c91f;
  }
  100% {
    transform: rotate(360deg);
    border-top-color: #8fbc8f;
    border-left-color: rgba(255, 76, 76, 0.5);
    border-bottom-color: rgba(47, 173, 211, 0.25);
    border-right-color: rgba(241, 201, 31, 0.5);
  }
`,pe=k.ZP.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 10px solid #8fbc8f;
  border-left: 10px solid rgba(255, 76, 76, 0.5);
  border-bottom: 10px solid rgba(47, 173, 211, 0.25);
  border-right: 10px solid rgba(241, 201, 31, 0.5);
  animation: 2s linear infinite ${le};
`;function xe(){return(0,P.jsxs)(ue,{children:[(0,P.jsx)(ge,{children:"Oops... Something went wrong"}),(0,P.jsx)(he,{children:"Check your internet connection and try again"})]})}const ue=k.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 70px auto;
`,ge=k.ZP.div`
  margin: 40px 30px 0 30px;
  font-size: 28px;
  font-weight: bold;
`,he=k.ZP.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`;function fe(e){let{currentPokemonId:o}=e;const n=(0,y.s0)(),{data:r,isError:t}=(0,F.a)({queryFn:async function(){return _(await E())},queryKey:["allPokemons"]}),i=r.ids.length,{data:a,isError:s,isLoading:d,isSuccess:c}=(0,F.a)({queryFn:async function(){const e=[1===parseInt(o)?i:parseInt(o)-1,parseInt(o)===i?1:parseInt(o)+1].map(T),[n,r]=await Promise.all(e);return{prevPokemon:{name:n.species.name.toUpperCase(),id:W(n.id)},nextPokemon:{name:r.species.name.toUpperCase(),id:W(r.id)}}},queryKey:["previews",o]});function l(e){c&&n(`/pokedex?specie=${e.toLowerCase()}`)}return(!t||s)&&(0,P.jsxs)(be,{children:[(0,P.jsx)(ke,{children:(0,P.jsx)(ye,{onClick:()=>l(a?.prevPokemon.name),children:d?(0,P.jsx)(M,{}):(0,P.jsxs)("div",{children:[(0,P.jsxs)(ve,{children:["#",a?.prevPokemon.id]}),(0,P.jsx)(ve,{children:a?.prevPokemon.name})]})})}),(0,P.jsx)(je,{children:(0,P.jsx)(we,{onClick:()=>l(a?.nextPokemon.name),children:d?(0,P.jsx)(M,{}):(0,P.jsxs)("div",{children:[(0,P.jsxs)(ve,{children:["#",a?.nextPokemon.id]}),(0,P.jsx)(ve,{children:a?.nextPokemon.name})]})})})]})}const be=k.ZP.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,me=k.ZP.div`
  position: relative;
  top: 0;
  width: 400px;
  height: 60%;
  user-select: none;
  transition: all 0.3s ease;
  z-index: 101;
  font-size: 20px;
`,ke=(0,k.ZP)(me)`
  position: relative;
  left: -180px;

  &:hover {
    left: 0;
  }
`,je=(0,k.ZP)(me)`
  position: relative;
  right: -180px;

  &:hover {
    right: 0;
  }
`,ye=k.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  color: gainsboro;
  background-color: ${V};
  cursor: pointer;
  border-radius: 0 20px 20px 0;
`,we=(0,k.ZP)(ye)`
  border-radius: 20px 0 0 20px;
  float: right;
`,ve=k.ZP.p`
  margin: 5px 25px 5px 25px;
`;function Pe(e){let o="Lack of information. Research in progress.";for(let n of e)"en"===n.language.name&&(o=n.flavor_text);return o}function Ae(){const[e,o]=(0,j.lr)(),n=e.get("specie"),[t,i]=(0,r.useState)(),[a,s]=(0,r.useState)(!1),[d,c]=(0,r.useState)({shown:!1,text:null}),{data:l,isLoading:p,isError:x,isSuccess:u}=(0,F.a)({queryFn:async function(){const e=await async function(e){return(await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e}`)).json()}(n),o=await async function(e){const o=e.map((e=>T(e.pokemon.name)));return(await Promise.all(o)).reduce(((e,o)=>({...e,[o.name]:{imageFront:o.sprites.front_default,imageBack:o.sprites.back_default,types:N(o.types,"type","name"),height:o.height,weight:o.weight,abilities:O(N(o.abilities,"ability","name")),stats:N(o.stats,"base_stat")}})),{})}(e.varieties);return{id:W(e.id),name:e.name.toUpperCase(),description:Pe(e.flavor_text_entries),defaultForm:e.varieties[0].pokemon.name,forms:o}},queryKey:["pokemonData",{searchSpecie:n}]}),g=e.get("form")?e.get("form"):l?.defaultForm;function h(e){const r=e.target.textContent.toLowerCase();r===n||r===l.defaultForm?o({specie:n}):o({specie:n,form:r})}if((0,r.useEffect)((()=>{u&&(s(!1),c((e=>({...e,shown:!1,text:null}))),i(l.forms[g].imageFront))}),[u,l,g]),p)return(0,P.jsx)(de,{});if(x)return(0,P.jsx)(xe,{});const f=l.forms[g],b=H[f.types[0]];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Ce,{$backgroundColor:b,children:[(0,P.jsx)(fe,{currentPokemonId:l.id}),(0,P.jsxs)($e,{children:["#",l.id]})]}),(0,P.jsxs)(ze,{children:[(0,P.jsx)(Ze,{children:(0,P.jsx)(Ie,{src:t,alt:"Pokemon image",onClick:function(){const e=l.forms[g];t!==e.imageFront||null===e.imageBack?i(e.imageFront):i(e.imageBack)}})}),(0,P.jsx)(Be,{children:l.name}),Object.keys(l.forms).length>1&&(0,P.jsxs)(qe,{children:[(0,P.jsx)(Se,{onClick:function(){s((e=>!e))},children:U(g)}),(0,P.jsx)(Le,{$shown:a,children:Object.keys(l.forms).map(((e,o)=>(0,P.jsx)(Fe,{onClick:h,$color:b,children:U(e)},o)))})]}),(0,P.jsxs)(Ee,{$backgroundColor:b,children:[(0,P.jsxs)(Te,{children:["Description",(0,P.jsx)(Ne,{$backgroundColor:b,children:l.description})]}),(0,P.jsxs)(Ue,{children:["Height",(0,P.jsxs)(We,{$backgroundColor:b,children:[f.height/10," m"]})]}),(0,P.jsxs)(Oe,{children:["Weight",(0,P.jsxs)(_e,{$backgroundColor:b,children:[f.weight/10," kg"]})]})]}),(0,P.jsxs)(Ke,{children:[(0,P.jsx)("h4",{children:"Types"}),f.types.map(((e,o)=>(0,P.jsx)(De,{$backgroundColor:H[e],children:U(e)},o)))]}),(0,P.jsxs)(Re,{children:[(0,P.jsx)("h4",{children:"Abilities"}),f.abilities.map(((e,o)=>(0,P.jsx)(Ve,{$touched:d.shown,onClick:e=>function(e){c((o=>({...o,shown:!0,name:e.target.textContent.toLowerCase()})))}(e),children:U(e)},o))),d.shown&&(0,P.jsx)(te,{abilityName:d.name,hideDescription:function(){c((e=>({...e,shown:!1,name:null})))}})]}),(0,P.jsxs)(Xe,{children:["Stats",(0,P.jsx)(He,{children:f.stats.map(((e,o)=>(0,P.jsx)(Qe,{children:(0,P.jsx)(Ge,{$backgroundColor:b,$height:e/2.5+"%"})},o)))}),(0,P.jsxs)(Me,{children:[(0,P.jsx)(Je,{children:"HP"}),(0,P.jsx)(Je,{children:"Attack"}),(0,P.jsx)(Je,{children:"Defense"}),(0,P.jsx)(Je,{children:"Special Attack"}),(0,P.jsx)(Je,{children:"Special Defense"}),(0,P.jsx)(Je,{children:"Speed"})]})]})]})]})}const Ce=k.ZP.div`
  position: relative;
  width: 100%;
  height: 160px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
  background-color: ${e=>e.$backgroundColor};
  border-bottom: solid ${V} 10px;
`,$e=k.ZP.div`
  font-size: 160px;
  color: ${R};
  opacity: 0.33;
`,Ze=k.ZP.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -80px;
  left: calc(50% - 80px);
  margin-bottom: -60px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid ${V} 10px;
  background-color: ${R};
`,Ie=k.ZP.img`
  width: 100px;
  height: 100px;
`,ze=k.ZP.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  color: ${V};
  font-size: 18px;
`,Be=k.ZP.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`,qe=k.ZP.div`
  position: relative;
  width: max-content;
`,Se=k.ZP.div`
  padding: 10px 15px 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  background-color: ${V};

  &:after {
    content: "\\25BC";
    color: gray;
    margin-left: 40px;
    font-size: 12px;
  }
`,Le=k.ZP.div`
  position: absolute;
  width: 100%;
  border: solid ${X} 1px;
  border-radius: 12px;
  background-color: ${R};
  font-size: 14px;
  z-index: 100;

  ${e=>!e.$shown&&k.iv`
      display: none;
    `};
`,Fe=k.ZP.div`
  padding: 10px 15px 10px 15px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${e=>e.$color} 6px;
      margin-left: 8px;
    }
  }
`,Ee=k.ZP.div`
  background-color: ${e=>e.$backgroundColor};
  border-radius: 12px;
  padding: 20px 30px 20px 30px;
  margin-top: 10px;
`,Te=k.ZP.div`
  height: 80px;
  margin: 10px;
  color: white;
`,Ne=k.ZP.p`
  margin-top: 10px;
  color: ${V};

  ${e=>(e.$backgroundColor===H.rock||e.$backgroundColor===H.dark)&&k.iv`
      color: ${X};
    `};
`,Ue=k.ZP.div`
  float: left;
  margin: 10px 10px 10px 10px;
  color: white;
`,We=k.ZP.p`
  margin-top: 10px;
  color: ${V};

  ${e=>(e.$backgroundColor===H.rock||e.$backgroundColor===H.dark)&&k.iv`
      color: ${X};
    `};
`,Oe=k.ZP.div`
  float: right;
  margin: 10px 220px 10px 10px;
  color: white;
`,_e=k.ZP.p`
  margin-top: 10px;
  color: ${V};

  ${e=>(e.$backgroundColor===H.rock||e.$backgroundColor===H.dark)&&k.iv`
      color: ${X};
    `};
`,Ke=k.ZP.div`
  margin: 20px 20px 0 20px;
`,De=k.ZP.div`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  background-color: ${e=>e.$backgroundColor};

  ${e=>(e.$backgroundColor===H.rock||e.$backgroundColor===H.dark||e.$backgroundColor===H.psychic)&&k.iv`
      color: white;
    `};
`,Re=k.ZP.div`
  position: relative;
  margin: 20px 20px 0 20px;
`,Ve=k.ZP.div`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  color: white;
  background-color: ${V};
  cursor: pointer;

  ${e=>e.$touched&&k.iv`
      display: none;
    `};
`,Xe=k.ZP.div`
  margin: 20px 20px 20px 20px;
  width: 560px;
`,He=k.ZP.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`,Me=k.ZP.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`,Qe=k.ZP.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
  border-radius: 5px;
  color: white;
  background-color: #dcdcdc;
`,Ye=k.F4` //to animate first appearance of stats
  from {
    height: 0;
  }
`,Ge=k.ZP.div`
  width: 60px;
  height: ${e=>e.$height};
  border-radius: 5px;
  background-color: ${e=>e.$backgroundColor};
  transition: height 1s ease;
  animation: 1s ease ${Ye};
`,Je=k.ZP.span`
  width: 60px;
  padding-top: 5px;
`;var eo=n(139);function oo(){const[e,o]=(0,r.useState)(12),[n]=(0,j.lr)({option:"name",query:""}),t=n.get("option"),i=n.get("query"),a=(0,y.s0)(),{data:s,isError:d}=(0,F.a)({queryFn:async function(){if(""===i)return(await E()).results.map((e=>e.name));if("name"===t&&""!==i){const e=_(await E());return D(i,e.names)}return"type"===t?await async function(e){return(await async function(e){return(await fetch(`https://pokeapi.co/api/v2/type/${e}`)).json()}(e)).pokemon.map((e=>e.pokemon.name))}(i):void 0},queryKey:["pokemonList",{searchQuery:i}]}),{data:c,isError:l,isLoading:p,isFetching:x}=(0,F.a)({queryFn:async function(){const o=s.slice(0,e).map(T);return(await Promise.all(o)).map((e=>({formName:e.name.toUpperCase(),specieName:e.species.name.toUpperCase(),formId:W(e.id.toString()),image:e.sprites.front_default,types:N(e.types,"type","name")})))},queryKey:["pokemonCatalog",{pokemonList:s,catalogItemsCount:e}],placeholderData:eo.Wk});return(0,r.useEffect)((()=>{o(12)}),[i]),p?(0,P.jsx)(de,{}):d||l?(0,P.jsx)(xe,{}):(0,P.jsxs)(no,{children:[(0,P.jsx)(ro,{children:c?.map(((e,o)=>(0,P.jsxs)(to,{onClick:()=>function(e,o,n){const r=o?`?form=${o.toLowerCase()}`:"";e===o||n.length<5?a(`/pokedex?specie=${e.toLowerCase()}`):a(`/pokedex?specie=${e.toLowerCase()}${r}`)}(e.specieName,e.formName,e.formId),children:[(0,P.jsx)(io,{children:(0,P.jsx)(ao,{src:e.image,alt:"Pokemon Image"})}),(0,P.jsx)(so,{children:U(e.formName)}),(0,P.jsx)(co,{children:e.types.map(((e,o)=>(0,P.jsx)(lo,{$backgroundColor:H[e],children:U(e)},o)))})]},o)))}),(0,P.jsx)(po,{disabled:x||e>=s.length,onClick:function(){e<s.length?o(e+12):o(s.length)},children:"Show more Pokemons!"})]})}const no=k.ZP.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`,ro=k.ZP.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`,to=k.ZP.div`
  width: 180px;
  text-align: center;
  margin: 10px;
  border-radius: 12px;
  background-color: ${V};
  font-size: 14px;
  cursor: pointer;
  outline: solid ${V} 4px;
  outline-offset: -4px;
  transition: 0.1s outline-offset ease-in-out;
  text-decoration: none;

  &:hover {
    outline-offset: -1px;
  }
`,io=k.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${R};
  width: 105px;
  height: 105px;
  margin: 15px auto 10px;
`,ao=k.ZP.img`
  border-radius: 50%;
`,so=k.ZP.div`
  color: white;
  font-weight: bold;
  margin: 5px 10px 0 10px;
`,co=k.ZP.div`
  display: flex;
  justify-content: center;
  margin: 10px 15px 15px 15px;
`,lo=k.ZP.div`
  padding: 8px;
  margin: 0 5px 0 5px;
  border-radius: 10px;
  background-color: ${e=>e.$backgroundColor};
  color: white;

  ${e=>(e.$backgroundColor===H.flying||e.$backgroundColor===H.ice||e.$backgroundColor===H.poison||e.$backgroundColor===H.electric)&&k.iv`
      color: ${V};
    `};
`,po=k.ZP.button`
  width: max-content;
  font-size: 14px;
  padding: 10px 13px 10px 13px;
  margin: 20px auto 40px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;

  &:hover {
    background-color: gainsboro;
  }

  &:disabled {
    color: darkgray;
    background-color: gainsboro;
    cursor: initial;
  }
`;function xo(e,o){(0,r.useEffect)((()=>{function n(n){null===e.current||e.current.contains(n.target)||o(n)}return window.addEventListener("mousedown",n),window.addEventListener("touchstart",n),()=>{window.removeEventListener("mousedown",n),window.removeEventListener("touchstart",n)}}),[e,o])}function uo(e,o){const n=e.indexOf(o.toLowerCase()),r=e.substring(0,n),t=e.substring(n,n+o.length),i=e.substring(n+o.length);return(0,P.jsxs)("span",{children:[r&&U(r),(0,P.jsx)(yo,{children:r?t:U(t)}),i]})}const go=12;function ho(e){let{pokemonList:o,inputValue:n,setInputValue:t,suggestedList:i,setSuggestedList:a}=e;const[s,d]=(0,r.useState)(!1),c=(0,r.useRef)(null);function l(){d(!1)}function p(e){t(U(e)),a([e.toLowerCase()]),l()}return xo(c,l),(0,P.jsxs)(fo,{children:[(0,P.jsx)(bo,{value:n,type:"text",placeholder:"Please enter ID or name",onChange:function(e){const n=K(e.target.value,o),r=D(n,o.names).sort((function(e,o){return e.length-o.length}));(function(e){return/^[a-zA-Z0-9-]+$/.test(e)}(e.target.value)||""===e.target.value)&&t(e.target.value),function(e){d(""!==e)}(n),a(r)}}),s&&(0,P.jsx)(mo,{ref:c,children:0===i.length?(0,P.jsx)(jo,{children:"Pokemon not found"}):i.slice(0,go).map(((e,o)=>(0,P.jsx)(ko,{onClick:()=>p(e),children:uo(e,n)},o)))}),(0,P.jsx)(vo,{type:"button",onClick:function(){var e;p((e=o.names)[Math.floor(Math.random()*e.length)])},children:"🎲"})]})}const fo=k.ZP.div`
  position: relative;
`,bo=k.ZP.input`
  padding: 5px 35px 5px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 210px;
  box-sizing: border-box;
  font-size: 14px;
`,mo=k.ZP.div`
  position: absolute;
  padding: 3px 10px 3px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${R};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`,ko=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${V} 6px;
      margin-left: 8px;
    }
  }
`,jo=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: default;
  color: gray;
`,yo=k.ZP.span`
  font-weight: bold;
  color: #2fadd3;
`,wo=k.F4`
  0% {
    transform: translateX(1px);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(1px);
  }
`,vo=k.ZP.button`
  position: absolute;
  top: 16%;
  right: 0;
  appearance: none;
  padding: 0;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    animation: 0.3s linear ${wo};
  }
`,Po=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"];function Ao(e){let{selectedType:o,setSelectedType:n}=e;const[t,i]=(0,r.useState)(!1),a=(0,r.useRef)(null);function s(){i(!1)}function d(e){n(e.target.textContent),s()}return xo(a,s),(0,P.jsxs)(Co,{ref:a,children:[(0,P.jsx)($o,{onClick:function(){i((e=>!e))},children:(0,P.jsx)(Zo,{$color:H[o?.toLowerCase()],$touched:o,children:o||"Choose a type"})}),t&&(0,P.jsx)(Io,{children:Po.map(((e,o)=>(0,P.jsx)(zo,{$color:H[e],onClick:d,children:U(e)},o)))})]})}const Co=k.ZP.div`
  position: relative;
`,$o=k.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 6px 10px 6px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 210px;
  background-color: white;
  line-height: 1;

  &:after {
    content: "\\25BC";
    color: gray;
    font-size: 12px;
  }
`,Zo=k.ZP.span`
  font-size: 14px;
  color: gray;

  ${e=>e.$touched&&k.iv`
      color: black;

      &:after {
        content: "";
        border-left: solid ${e=>e.$color} 6px;
        margin-left: 8px;
      }
    `};
`,Io=k.ZP.div`
  position: absolute;
  padding: 3px 10px 3px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${R};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`,zo=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${e=>e.$color} 6px;
      margin-left: 8px;
    }
  }
`;function Bo(){const[e,o]=(0,r.useState)(""),[n,t]=(0,r.useState)([]),[i,a]=(0,r.useState)("Name"),[s,d]=(0,r.useState)(!1),c=(0,y.s0)(),l=(0,r.useRef)(null),{data:p}=(0,F.a)({queryFn:async function(){return _(await E())},queryKey:["allPokemons"]}),{refetch:x,isFetching:u}=(0,F.a)({queryFn:async function(){return(await T(e.toLowerCase())).species.name},queryKey:["defaultForm"],enabled:!1});function g(e){a(e.target.textContent),o("")}return xo(l,(function(){d(!1)})),(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(qo,{children:[(0,P.jsx)(So,{children:"Find your Pokemon!"}),"Name"===i?(0,P.jsx)(ho,{pokemonList:p,inputValue:e,setInputValue:o,suggestedList:n,setSuggestedList:t}):(0,P.jsx)(Ao,{selectedType:e,setSelectedType:o}),(0,P.jsx)(Lo,{type:"button",disabled:u,onClick:async function(){const r=n.length,a=K(e.toLowerCase(),p);""===e?c(`/catalog?query=${e.toLowerCase()}&option=${i.toLowerCase()}`):1===r&&"Name"===i?(await async function(o){const n=p.names.indexOf(e.toLowerCase()),r=p.ids.length,t=await x();c(n>r?`/pokedex?specie=${t.data}&form=${o}`:`/pokedex?specie=${t.data}`)}(a),t([])):c(`/catalog?query=${a}&option=${i.toLowerCase()}`),o("")},children:"Search"}),(0,P.jsxs)(Fo,{ref:l,children:[(0,P.jsx)(Eo,{onClick:function(){d((e=>!e))},children:i}),s&&(0,P.jsxs)(To,{children:[(0,P.jsx)(No,{onClick:g,children:"Name"}),(0,P.jsx)(No,{onClick:g,children:"Type"})]})]})]})})}const qo=k.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: ${R};
`,So=k.ZP.span`
  font-size: 15px;
`,Lo=k.ZP.button`
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;
  font-size: 14px;

  &:hover {
    background-color: gainsboro;
  }
`,Fo=k.ZP.div`
  position: relative;
`,Eo=(0,k.ZP)(Lo)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 80px;
  padding: 5px 10px 5px 10px;
  margin: 0;
  font-size: 14px;

  &:after {
    content: "\\25BC";
    color: gray;
    font-size: 12px;
  }
`,To=k.ZP.div`
  position: absolute;
  padding: 3px 10px 3px 10px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${R};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`,No=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${V} 6px;
      margin-left: 8px;
    }
  }
`;function Uo(){return(0,P.jsx)(Wo,{children:(0,P.jsxs)(Oo,{children:[(0,P.jsxs)(_o,{children:[(0,P.jsx)(Ko,{$backgroundColor:"#8fbc8f",to:"/",children:"Home"}),(0,P.jsx)(Ko,{$backgroundColor:"#ff4c4c",to:"/pokedex?specie=bulbasaur",children:"Pokedex"}),(0,P.jsx)(Ko,{$backgroundColor:"#2fadd3",to:"/catalog",children:"Catalog"})]}),(0,P.jsx)(Bo,{})]})})}const Wo=k.ZP.div`
  background-color: ${V};
  width: 100%;
  z-index: 101;
`,Oo=k.ZP.div`
  width: 600px;
  margin-left: 20px;
  padding: 0 25px 15px 25px;
  background-color: ${V};
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-sizing: border-box;
`,_o=k.ZP.div`
  display: flex;
  justify-content: space-between;
`,Ko=(0,k.ZP)(j.OL)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  background-color: ${e=>e.$backgroundColor};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  transition: background-color 0.1s linear, outline-offset 0.1s linear,
    outline-color 0.1s linear;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 18px;
  outline: solid ${e=>e.$backgroundColor} 4px;
  outline-offset: -4px;

  &.active {
    outline-offset: -1px;
    outline-color: ${e=>e.$backgroundColor};
  }

  &:hover {
    background-color: #f1c91f;
    outline-color: #f1c91f;
  }
`;function Do(){return(0,P.jsxs)(Ro,{children:[(0,P.jsx)(Vo,{children:"Page not found"}),(0,P.jsx)(Xo,{children:"The url address was entered incorrectly or the page no longer exist"})]})}const Ro=k.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 70px auto;
`,Vo=k.ZP.div`
  margin: 40px 30px 0 30px;
  font-size: 28px;
  font-weight: bold;
`,Xo=k.ZP.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`,Ho=new w.S;var Mo=function(){return(0,P.jsx)(v.aH,{client:Ho,children:(0,P.jsx)(j.VK,{basename:"/Poke.js",children:(0,P.jsxs)(Qo,{children:[(0,P.jsx)(Uo,{}),(0,P.jsxs)(y.Z5,{children:[(0,P.jsx)(y.AW,{path:"/",element:(0,P.jsx)(A,{})}),(0,P.jsx)(y.AW,{path:"/pokedex",element:(0,P.jsx)(Ae,{})}),(0,P.jsx)(y.AW,{path:"/catalog",element:(0,P.jsx)(oo,{})}),(0,P.jsx)(y.AW,{path:"*",element:(0,P.jsx)(Do,{})})]})]})})})};const Qo=k.ZP.div`
  font-family: "Roboto", sans-serif;
  background-color: whitesmoke;
  color: #282c34;
  min-height: 100vh;
  overflow: visible;
`;(0,t.s)(document.getElementById("root")).render((0,P.jsx)(r.StrictMode,{children:(0,P.jsx)(Mo,{})}))},434:function(e,o,n){var r=n(537),t=n.n(r),i=n(645),a=n.n(i)()(t());a.push([e.id,'html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-weight: inherit;\r\n    font-style: inherit;\r\n    font-size: 100%;\r\n    font-family: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n:focus {\r\n    outline: 0;\r\n}\r\nbody {\r\n    color: black;\r\n    background: white;\r\n    overflow-x: hidden;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n}\r\ncaption, th, td {\r\n    text-align: left;\r\n    font-weight: normal;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: "";\r\n}\r\nblockquote, q {\r\n    quotes: "" "";\r\n}',"",{version:3,sources:["webpack://./src/styles/reset.css"],names:[],mappings:"AAAA;;;;;;;;IAQI,SAAS;IACT,UAAU;IACV,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;AACd;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;;IAEI,WAAW;AACf;AACA;IACI,aAAa;AACjB",sourcesContent:['html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-weight: inherit;\r\n    font-style: inherit;\r\n    font-size: 100%;\r\n    font-family: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n:focus {\r\n    outline: 0;\r\n}\r\nbody {\r\n    color: black;\r\n    background: white;\r\n    overflow-x: hidden;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n}\r\ncaption, th, td {\r\n    text-align: left;\r\n    font-weight: normal;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: "";\r\n}\r\nblockquote, q {\r\n    quotes: "" "";\r\n}'],sourceRoot:""}]),o.Z=a}},function(e){e.O(0,[216],(function(){return 954,e(e.s=954)})),e.O()}]);
//# sourceMappingURL=index.b6904afea9b8d3aa05f17601aee7f8dc.bundle.js.map