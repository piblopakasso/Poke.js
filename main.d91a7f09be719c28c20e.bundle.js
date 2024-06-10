"use strict";(self.webpackChunkwebpack_react=self.webpackChunkwebpack_react||[]).push([[179],{21:function(e,o,n){var r=n(294),t=n(745),i=n(379),a=n.n(i),s=n(795),d=n.n(s),c=n(569),l=n.n(c),p=n(565),x=n.n(p),u=n(216),h=n.n(u),g=n(589),f=n.n(g),m=n(434),b={};b.styleTagTransform=f(),b.setAttributes=x(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),a()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;var k=n(763),j=n(655),y=n(250),v=n(965),w=n(202),P=n(893);function $(){return(0,P.jsxs)(C,{children:[(0,P.jsx)(A,{children:"About"}),(0,P.jsxs)(Z,{children:[(0,P.jsxs)(I,{children:[(0,P.jsx)(z,{children:"What is this?"}),(0,P.jsx)(q,{children:"This is my home project that I decided to make from scratch to try something relatively complex and prove (at least to myself) that I can create stuff. It is far from perfection and there are still a lot of things that can be implemented, however, I am glad that it exists and can demonstrate some of my skills or potential."})]}),(0,P.jsxs)(I,{children:[(0,P.jsx)(z,{children:"Why Pokemons?"}),(0,P.jsx)(q,{children:"It started from a joke, and the joke got out of control. Surprisingly, it didn't go so badly, and in my opinion, it's always better to have some additional fun in a project that is supported only by your self-motivation (unfortunately, Nintendo did not pay me anything). PokeAPI proved to be an understandable and easy-to-work-with API. At the same time, it does have its cons and limitations, which provided valuable experience in problem-solving situations."})]}),(0,P.jsxs)(I,{children:[(0,P.jsx)(z,{children:"What was used?"}),(0,P.jsx)(q,{children:"At this stage of the project I have used:"}),(0,P.jsxs)(S,{children:[(0,P.jsx)(B,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(F,{href:"https://pokeapi.co/",children:"PokeAPI"}),"- to access Pokemon data;"]})}),(0,P.jsx)(B,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(F,{href:"https://tanstack.com/query/latest/",children:"TanStack Query"}),"- to help me deal with all tasks where fetching was involved;"]})}),(0,P.jsx)(B,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(F,{href:"https://reactrouter.com/en/main",children:"React Router"}),"- to make routing easier and more efficient;"]})}),(0,P.jsx)(B,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(F,{href:"https://styled-components.com/",children:"Styled Components"}),"- to change working with CSS in a more enjoyable way;"]})}),(0,P.jsx)(B,{children:(0,P.jsxs)("div",{children:[(0,P.jsx)(F,{href:"https://prettier.io/",children:"Prettier"}),"- to format all the written code to meet nice-looking standards."]})})]})]})]})]})}const C=k.ZP.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px auto;
  font-size: 18px;
`,A=k.ZP.h3`
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
`,q=k.ZP.p`
  color: #282c34;
`,S=k.ZP.ul`
  margin-left: 20px;
  list-style: disc;
`,B=k.ZP.li`
  margin-top: 10px;
`,F=k.ZP.a`
  text-decoration: none;
  margin-right: 5px;
`;var L=n(746);async function E(){return(await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")).json()}async function U(e){return(await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)).json()}async function _(e){return(await fetch(e)).json()}function T(e,o,n){return n?e.map((e=>e[o][n])):e.map((e=>e[o]))}function K(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N(e){const o=e.toString(),n=`000${o}`;return 5===o.length?n.slice(-5):n.slice(-4)}function W(e){const o=new Set(e);return Array.from(o)}function O(e){return{names:e.results.map((e=>e.name)),ids:e.results.map((e=>e.url.replace("https://pokeapi.co/api/v2/pokemon/","").slice(0,-1))).filter((e=>e.length<=4))}}function D(e,o){if(parseInt(e)<=o.ids.length){const n=o.ids.indexOf(e);return o.names[n]}return e}function R(e,o){return o.filter((o=>o.includes(e.toLowerCase())))}const V="#F5F5F5",X="#282c34",H="#dcdcdc",M={normal:"#bca38f",fighting:"#fa8072",flying:"#9ee1e0",poison:"#9bc51a",ground:"#b67d37",rock:"#3a3736",bug:"#449d31",steel:"#8d9d9f",ghost:"#896fb4",fire:"#ff4c4c",water:"#2fadd3",grass:"#8fbc8f",electric:"#f1c91f",psychic:"#c553b4",ice:"#cddade",dragon:"#ea7638",dark:"#29314a",fairy:"#e8a8dd",shadow:"#542693",unknown:"#17ccad"};function Q(e){const o=e.flavor_text_entries.find((e=>"en"===e.language.name));return o?o.flavor_text:"The ability investigation is still in progress."}function Y(e){let{abilities:o}=e;const[n,t]=(0,r.useState)({shown:!1,name:null,description:null}),{data:i,isError:a}=(0,L.a)({queryFn:async function(){const e=o.map((e=>async function(e){return(await fetch(`https://pokeapi.co/api/v2/ability/${e}`)).json()}(e))),n=await Promise.all(e);return console.log(n),n.reduce(((e,o)=>({...e,[o.name]:Q(o)})),{})},queryKey:["pokemonAbility",o]});function s(){t((e=>({...e,shown:!1,name:null})))}return(0,r.useEffect)((()=>{s()}),[o]),(0,P.jsxs)(G,{children:[(0,P.jsx)("h4",{children:"Abilities"}),o?.map(((e,o)=>(0,P.jsx)(J,{$active:!n.shown||e===n.name,onClick:()=>{return o=e,void t((e=>({...e,shown:!(n.shown&&n.name===o),name:o,description:i[o]})));var o},children:K(e)},o))),n.shown&&(0,P.jsx)(oe,{onClick:s,children:(0,P.jsx)(re,{children:a?"Oops... something went wrong":n.description})})]})}const G=k.ZP.div`
  margin: 20px 20px 0 20px;
`,J=k.ZP.div`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  color: white;
  background-color: ${X};
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${e=>e.$active?k.iv`
          background-color: ${X};
        `:k.iv`
          background-color: ${H};
        `};
`,ee=k.F4`
  from {
    max-height: 0;
  }
  to {
    max-height: 100px;
  }
`,oe=k.ZP.div`
  margin-top: 10px;
  border-radius: 12px;
  color: white;
  box-sizing: border-box;
  background-color: ${X};
  cursor: pointer;
  animation: 1s ease ${ee};
`,ne=k.F4`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,re=k.ZP.p`
  padding: 20px 10px 20px 10px;
  opacity: 0;
  animation: 0.4s ease forwards 0.5s ${ne};
`;function te(){return(0,P.jsx)(ie,{children:(0,P.jsx)(se,{})})}const ie=k.ZP.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ae=k.F4`
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
`,se=k.ZP.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 10px solid #8fbc8f;
  border-left: 10px solid rgba(255, 76, 76, 0.5);
  border-bottom: 10px solid rgba(47, 173, 211, 0.25);
  border-right: 10px solid rgba(241, 201, 31, 0.5);
  animation: 2s linear infinite ${ae};
`;function de(){return(0,P.jsxs)(ce,{children:[(0,P.jsx)(le,{children:"Oops... Something went wrong"}),(0,P.jsx)(pe,{children:"Check your internet connection and try again"})]})}const ce=k.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 70px auto;
`,le=k.ZP.div`
  margin: 40px 30px 0 30px;
  font-size: 28px;
  font-weight: bold;
`,pe=k.ZP.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`;function xe(){return(0,P.jsxs)(ue,{children:[(0,P.jsx)(be,{}),(0,P.jsx)(ke,{}),(0,P.jsx)(je,{})]})}const ue=k.ZP.div`
  width: 60px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,he=k.F4`
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
`,ge=k.F4`
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
`,fe=k.F4`
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
`,me=k.ZP.div`
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 50%;
`,be=(0,k.ZP)(me)`
  animation: 1.5s linear infinite ${he};
`,ke=(0,k.ZP)(me)`
  animation: 1.5s linear infinite ${ge};
`,je=(0,k.ZP)(me)`
  animation: 1.5s linear infinite ${fe};
`;function ye(e){let{currentPokemonId:o}=e;const n=(0,y.s0)(),{data:r,isError:t}=(0,L.a)({queryFn:async function(){return O(await E())},queryKey:["allPokemons"]}),i=r.ids.length,{data:a,isError:s,isLoading:d,isSuccess:c}=(0,L.a)({queryFn:async function(){const e=[1===parseInt(o)?i:parseInt(o)-1,parseInt(o)===i?1:parseInt(o)+1].map(U),[n,r]=await Promise.all(e);return{prevPokemon:{name:n.species.name.toUpperCase(),id:N(n.id)},nextPokemon:{name:r.species.name.toUpperCase(),id:N(r.id)}}},queryKey:["previews",o]});function l(e){c&&n(`/pokedex?specie=${e.toLowerCase()}`)}return(!t||s)&&(0,P.jsxs)(ve,{children:[(0,P.jsx)(Pe,{children:(0,P.jsx)(Ce,{onClick:()=>l(a?.prevPokemon.name),children:d?(0,P.jsx)(xe,{}):(0,P.jsxs)("div",{children:[(0,P.jsxs)(Ze,{children:["#",a?.prevPokemon.id]}),(0,P.jsx)(Ze,{children:a?.prevPokemon.name})]})})}),(0,P.jsx)($e,{children:(0,P.jsx)(Ae,{onClick:()=>l(a?.nextPokemon.name),children:d?(0,P.jsx)(xe,{}):(0,P.jsxs)("div",{children:[(0,P.jsxs)(Ze,{children:["#",a?.nextPokemon.id]}),(0,P.jsx)(Ze,{children:a?.nextPokemon.name})]})})})]})}const ve=k.ZP.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,we=k.ZP.div`
  position: relative;
  top: 0;
  width: 400px;
  height: 60%;
  user-select: none;
  transition: all 0.3s ease;
  z-index: 101;
  font-size: 20px;
`,Pe=(0,k.ZP)(we)`
  position: relative;
  left: -180px;

  &:hover {
    left: 0;
  }
`,$e=(0,k.ZP)(we)`
  position: relative;
  right: -180px;

  &:hover {
    right: 0;
  }
`,Ce=k.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 50%;
  color: gainsboro;
  background-color: ${X};
  cursor: pointer;
  border-radius: 0 20px 20px 0;
`,Ae=(0,k.ZP)(Ce)`
  border-radius: 20px 0 0 20px;
  float: right;
`,Ze=k.ZP.p`
  margin: 5px 25px 5px 25px;
`;function Ie(e,o){const n=e.evolves_to;return o.push(e.species.url.replace("-species","")),n[0]?Ie(n[0],o):o}function ze(e){let{chainUrl:o}=e;const n=(0,y.s0)(),{data:r,isSuccess:t}=(0,L.a)({queryFn:async function(){return Ie((await _(o)).chain,[])},queryKey:["evolutionChainData",{chainUrl:o}]}),{data:i,isSuccess:a}=(0,L.a)({queryFn:async function(){const e=r.map((e=>_(e)));return(await Promise.all(e)).map((e=>({formName:e.forms[0].name,name:e.species.name,id:N(e.id),image:e.sprites.front_default})))},queryKey:["evolutionChainData",{evolutionChainSpecies:r}]});return(0,P.jsxs)(qe,{children:[(0,P.jsx)("h4",{children:"Evolution Chain"}),t&&a&&(0,P.jsx)(Be,{children:i?.map(((e,o)=>(0,P.jsxs)(Le,{children:[(0,P.jsxs)(Ee,{onClick:()=>{return o=e.name,void n(`/pokedex?specie=${o.toLowerCase()}`);var o},children:[(0,P.jsx)(Ue,{src:e.image,alt:"Pokemon Image"}),(0,P.jsxs)("p",{children:["#",e.id]}),(0,P.jsx)("p",{children:K(e.name)})]}),o<r.length-1&&(0,P.jsx)(_e,{children:(0,P.jsx)(Te,{})})]},o)))})]})}const qe=k.ZP.div`
  margin: 20px 20px 40px 20px;
`,Se=k.F4`
  from {
    max-height: 0;
  }
  to {
    max-height: 200px;
  }
`,Be=k.ZP.div`
  display: flex;
  width: fit-content;
  background: ${X};
  border-radius: 12px;
  margin-top: 10px;
  animation: 0.8s ease ${Se};
`,Fe=k.F4`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Le=k.ZP.div`
  display: flex;
  opacity: 0;
  animation: 0.5s ease forwards 0.6s ${Fe};
`,Ee=k.ZP.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;
  background-color: ${X};
  border-radius: 12px;
  padding: 15px 0 15px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
`,Ue=k.ZP.img`
  width: 100px;
  height: 100px;
  background-color: ${V};
  border: solid 5px ${H};
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 10px;
`,_e=k.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 55px;
`,Te=k.ZP.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid ${H};
`;function Ke(e){let o="Lack of information. Research in progress.";for(let n of e)"en"===n.language.name&&(o=n.flavor_text);return o}function Ne(){const[e,o]=(0,j.lr)(),n=e.get("specie"),[t,i]=(0,r.useState)(),[a,s]=(0,r.useState)(!1),[d,c]=(0,r.useState)({shown:!1,text:null}),{data:l,isLoading:p,isError:x,isSuccess:u}=(0,L.a)({queryFn:async function(){const e=await async function(e){return(await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e}`)).json()}(n),o=await async function(e){const o=e.map((e=>U(e.pokemon.name)));return(await Promise.all(o)).reduce(((e,o)=>({...e,[o.name]:{imageFront:o.sprites.front_default,imageBack:o.sprites.back_default,types:T(o.types,"type","name"),height:o.height,weight:o.weight,abilities:W(T(o.abilities,"ability","name")),stats:T(o.stats,"base_stat")}})),{})}(e.varieties);return{id:N(e.id),name:e.name.toUpperCase(),description:Ke(e.flavor_text_entries),defaultForm:e.varieties[0].pokemon.name,evolution:e.evolution_chain.url,forms:o}},queryKey:["pokemonData",{searchSpecie:n}]}),h=e.get("form")?e.get("form"):l?.defaultForm;function g(e){const r=e.target.textContent.toLowerCase();r===n||r===l.defaultForm?o({specie:n}):o({specie:n,form:r})}if((0,r.useEffect)((()=>{u&&(s(!1),c((e=>({...e,shown:!1,text:null}))),i(l.forms[h].imageFront))}),[u,l,h]),p)return(0,P.jsx)(te,{});if(x)return(0,P.jsx)(de,{});const f=l.forms[h],m=M[f.types[0]];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(We,{$backgroundColor:m,children:[(0,P.jsx)(ye,{currentPokemonId:l.id}),(0,P.jsxs)(Oe,{children:["#",l.id]})]}),(0,P.jsxs)(Ve,{children:[(0,P.jsx)(De,{children:(0,P.jsx)(Re,{src:t,alt:"Pokemon image",onClick:function(){const e=l.forms[h];t!==e.imageFront||null===e.imageBack?i(e.imageFront):i(e.imageBack)}})}),(0,P.jsx)(Xe,{children:l.name}),Object.keys(l.forms).length>1&&(0,P.jsxs)(He,{children:[(0,P.jsx)(Me,{onClick:function(){s((e=>!e))},children:K(h)}),(0,P.jsx)(Qe,{$shown:a,children:Object.keys(l.forms).map(((e,o)=>(0,P.jsx)(Ye,{onClick:g,$color:m,children:K(e)},o)))})]}),(0,P.jsxs)(Ge,{$backgroundColor:m,children:[(0,P.jsxs)(Je,{children:["Description",(0,P.jsx)(eo,{$backgroundColor:m,children:l.description})]}),(0,P.jsxs)(oo,{children:["Height",(0,P.jsxs)(no,{$backgroundColor:m,children:[f.height/10," m"]})]}),(0,P.jsxs)(ro,{children:["Weight",(0,P.jsxs)(to,{$backgroundColor:m,children:[f.weight/10," kg"]})]})]}),(0,P.jsxs)(io,{children:[(0,P.jsx)("h4",{children:"Types"}),f.types.map(((e,o)=>(0,P.jsx)(ao,{$backgroundColor:M[e],children:K(e)},o)))]}),(0,P.jsx)(Y,{abilities:f.abilities}),(0,P.jsxs)(so,{children:["Stats",(0,P.jsx)(co,{children:f.stats.map(((e,o)=>(0,P.jsx)(po,{children:(0,P.jsx)(uo,{$backgroundColor:m,$height:e/2.5+"%"})},o)))}),(0,P.jsxs)(lo,{children:[(0,P.jsx)(ho,{children:"HP"}),(0,P.jsx)(ho,{children:"Attack"}),(0,P.jsx)(ho,{children:"Defense"}),(0,P.jsx)(ho,{children:"Special Attack"}),(0,P.jsx)(ho,{children:"Special Defense"}),(0,P.jsx)(ho,{children:"Speed"})]})]}),(0,P.jsx)(ze,{chainUrl:l.evolution})]})]})}const We=k.ZP.div`
  position: relative;
  width: 100%;
  height: 160px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
  background-color: ${e=>e.$backgroundColor};
  border-bottom: solid ${X} 10px;
`,Oe=k.ZP.div`
  font-size: 160px;
  line-height: 1;
  color: ${V};
  opacity: 0.33;
`,De=k.ZP.div`
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
  border: solid ${X} 10px;
  background-color: ${V};
`,Re=k.ZP.img`
  width: 100px;
  height: 100px;
`,Ve=k.ZP.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  color: ${X};
  font-size: 18px;
`,Xe=k.ZP.h3`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
`,He=k.ZP.div`
  position: relative;
  width: max-content;
`,Me=k.ZP.div`
  padding: 10px 15px 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  background-color: ${X};

  &:after {
    content: "\\25BC";
    color: gray;
    margin-left: 40px;
    font-size: 12px;
  }
`,Qe=k.ZP.div`
  position: absolute;
  width: 100%;
  border: solid ${H} 1px;
  border-radius: 12px;
  background-color: ${V};
  font-size: 14px;
  z-index: 100;

  ${e=>!e.$shown&&k.iv`
      display: none;
    `};
`,Ye=k.ZP.div`
  padding: 10px 15px 10px 15px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${e=>e.$color} 6px;
      margin-left: 8px;
    }
  }
`,Ge=k.ZP.div`
  background-color: ${e=>e.$backgroundColor};
  border-radius: 12px;
  padding: 20px 30px 20px 30px;
  margin-top: 20px;
`,Je=k.ZP.div`
  margin: 10px;
  color: white;
`,eo=k.ZP.p`
  margin-top: 10px;
  color: ${X};

  ${e=>(e.$backgroundColor===M.rock||e.$backgroundColor===M.dark)&&k.iv`
      color: ${H};
    `};
`,oo=k.ZP.div`
  float: left;
  margin: 10px 10px 10px 10px;
  color: white;
`,no=k.ZP.p`
  margin-top: 10px;
  color: ${X};

  ${e=>(e.$backgroundColor===M.rock||e.$backgroundColor===M.dark)&&k.iv`
      color: ${H};
    `};
`,ro=k.ZP.div`
  float: right;
  margin: 10px 220px 10px 10px;
  color: white;
`,to=k.ZP.p`
  margin-top: 10px;
  color: ${X};

  ${e=>(e.$backgroundColor===M.rock||e.$backgroundColor===M.dark)&&k.iv`
      color: ${H};
    `};
`,io=k.ZP.div`
  margin: 20px 20px 0 20px;
`,ao=k.ZP.div`
  display: inline-block;
  padding: 10px;
  margin: 10px 10px 0 0;
  border-radius: 12px;
  background-color: ${e=>e.$backgroundColor};

  ${e=>(e.$backgroundColor===M.rock||e.$backgroundColor===M.dark||e.$backgroundColor===M.psychic)&&k.iv`
      color: white;
    `};
`,so=k.ZP.div`
  margin: 20px 20px 0 20px;
  width: 560px;
`,co=k.ZP.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`,lo=k.ZP.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`,po=k.ZP.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
  border-radius: 5px;
  color: white;
  background-color: #dcdcdc;
`,xo=k.F4`
  from {
    height: 0;
  }
`,uo=k.ZP.div`
  width: 65px;
  height: ${e=>e.$height};
  border-radius: 5px;
  background-color: ${e=>e.$backgroundColor};
  transition: height 1s ease;
  animation: 1s ease ${xo};
`,ho=k.ZP.span`
  width: 60px;
  padding-top: 5px;
`;var go=n(139);const fo=12,mo=5;function bo(){const[e,o]=(0,r.useState)(fo),[n]=(0,j.lr)({option:"name",query:""}),t=n.get("option"),i=n.get("query"),a=(0,y.s0)(),{data:s,isError:d}=(0,L.a)({queryFn:async function(){if(""===i)return(await E()).results.map((e=>e.name));if("name"===t&&""!==i){const e=O(await E());return R(i,e.names)}return"type"===t?await async function(e){return(await async function(e){return(await fetch(`https://pokeapi.co/api/v2/type/${e}`)).json()}(e)).pokemon.map((e=>e.pokemon.name))}(i):void 0},queryKey:["pokemonList",{searchQuery:i}]}),{data:c,isError:l,isLoading:p,isFetching:x}=(0,L.a)({queryFn:async function(){const o=s.slice(0,e).map(U);return(await Promise.all(o)).map((e=>({formName:e.name.toUpperCase(),specieName:e.species.name.toUpperCase(),formId:N(e.id),image:e.sprites.front_default,types:T(e.types,"type","name")})))},queryKey:["pokemonCatalog",{pokemonList:s,catalogItemsCount:e}],placeholderData:go.Wk});return(0,r.useEffect)((()=>{o(fo)}),[i]),p?(0,P.jsx)(te,{}):d||l?(0,P.jsx)(de,{}):(0,P.jsxs)(ko,{children:[(0,P.jsx)(jo,{children:c?.map(((e,o)=>(0,P.jsxs)(yo,{onClick:()=>function(e,o,n){const r=o?`?form=${o.toLowerCase()}`:"";e===o||n.length<mo?a(`/pokedex?specie=${e.toLowerCase()}`):a(`/pokedex?specie=${e.toLowerCase()}${r}`)}(e.specieName,e.formName,e.formId),children:[(0,P.jsx)(vo,{children:(0,P.jsx)(wo,{src:e.image,alt:"Pokemon Image"})}),(0,P.jsx)(Po,{children:K(e.formName)}),(0,P.jsx)($o,{children:e.types.map(((e,o)=>(0,P.jsx)(Co,{$backgroundColor:M[e],children:K(e)},o)))})]},o)))}),(0,P.jsx)(Ao,{disabled:x||e>=s.length,onClick:function(){e<s.length?o(e+fo):o(s.length)},children:"Show more Pokemons!"})]})}const ko=k.ZP.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`,jo=k.ZP.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`,yo=k.ZP.div`
  width: 180px;
  text-align: center;
  margin: 10px;
  border-radius: 12px;
  background-color: ${X};
  font-size: 14px;
  cursor: pointer;
  outline: solid ${X} 4px;
  outline-offset: -4px;
  transition: 0.1s outline-offset ease-in-out;
  text-decoration: none;

  &:hover {
    outline-offset: -1px;
  }
`,vo=k.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${V};
  width: 105px;
  height: 105px;
  margin: 15px auto 10px;
`,wo=k.ZP.img`
  border-radius: 50%;
`,Po=k.ZP.div`
  color: white;
  font-weight: bold;
  margin: 5px 10px 0 10px;
`,$o=k.ZP.div`
  display: flex;
  justify-content: center;
  margin: 10px 15px 15px 15px;
`,Co=k.ZP.div`
  padding: 8px;
  margin: 0 5px 0 5px;
  border-radius: 10px;
  background-color: ${e=>e.$backgroundColor};
  color: white;

  ${e=>(e.$backgroundColor===M.flying||e.$backgroundColor===M.ice||e.$backgroundColor===M.poison||e.$backgroundColor===M.electric)&&k.iv`
      color: ${X};
    `};
`,Ao=k.ZP.button`
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
`;function Zo(e,o){(0,r.useEffect)((()=>{function n(n){null===e.current||e.current.contains(n.target)||o(n)}return window.addEventListener("mousedown",n),window.addEventListener("touchstart",n),()=>{window.removeEventListener("mousedown",n),window.removeEventListener("touchstart",n)}}),[e,o])}var Io=n.p+"9bd1c7f670e5120b1316.webp";function zo(e,o){const n=e.indexOf(o.toLowerCase()),r=e.substring(0,n),t=e.substring(n,n+o.length),i=e.substring(n+o.length);return(0,P.jsxs)("span",{children:[r&&K(r),(0,P.jsx)(_o,{children:r?t:K(t)}),i]})}const qo=12;function So(e){let{pokemonList:o,inputValue:n,setInputValue:t,suggestedList:i,setSuggestedList:a}=e;const[s,d]=(0,r.useState)(!1),c=(0,r.useRef)(null);function l(){d(!1)}function p(e){t(K(e)),a([e.toLowerCase()]),l()}return Zo(c,l),(0,P.jsxs)(Bo,{children:[(0,P.jsx)(Fo,{value:n,type:"text",placeholder:"Please enter ID or name",onChange:function(e){const n=D(e.target.value,o),r=R(n,o.names).sort((function(e,o){return e.length-o.length}));(function(e){return/^[a-zA-Z0-9-]+$/.test(e)}(e.target.value)||""===e.target.value)&&t(e.target.value),function(e){d(""!==e)}(n),a(r)}}),s&&(0,P.jsx)(Lo,{ref:c,children:0===i.length?(0,P.jsx)(Uo,{children:"Pokemon not found"}):i.slice(0,qo).map(((e,o)=>(0,P.jsx)(Eo,{onClick:()=>p(e),children:zo(e,n)},o)))}),(0,P.jsx)(To,{onClick:function(){var e;p((e=o.names)[Math.floor(Math.random()*e.length)])},children:(0,P.jsx)(No,{src:Io,alt:""})})]})}const Bo=k.ZP.div`
  position: relative;
`,Fo=k.ZP.input`
  padding: 5px 35px 5px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  width: 210px;
  box-sizing: border-box;
  font-size: 14px;
`,Lo=k.ZP.div`
  position: absolute;
  padding: 3px 10px 3px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${V};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`,Eo=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${X} 6px;
      margin-left: 8px;
    }
  }
`,Uo=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: default;
  color: gray;
`,_o=k.ZP.span`
  font-weight: bold;
  color: #2fadd3;
`,To=k.ZP.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 6px 10px 0 0;
`,Ko=k.F4`
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
`,No=k.ZP.img`
  width: 16px;
  cursor: pointer;
  transition: all linear 0.3s;

  &:hover {
    animation: 0.25s linear ${Ko};
  }

  &:active {
    transform: rotate(360deg);
  }
`,Wo=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"];function Oo(e){let{selectedType:o,setSelectedType:n}=e;const[t,i]=(0,r.useState)(!1),a=(0,r.useRef)(null);function s(){i(!1)}function d(e){n(e.target.textContent),s()}return Zo(a,s),(0,P.jsxs)(Do,{ref:a,children:[(0,P.jsx)(Ro,{onClick:function(){i((e=>!e))},children:(0,P.jsx)(Vo,{$color:M[o?.toLowerCase()],$touched:o,children:o||"Choose a type"})}),t&&(0,P.jsx)(Xo,{children:Wo.map(((e,o)=>(0,P.jsx)(Ho,{$color:M[e],onClick:d,children:K(e)},o)))})]})}const Do=k.ZP.div`
  position: relative;
`,Ro=k.ZP.div`
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
`,Vo=k.ZP.span`
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
`,Xo=k.ZP.div`
  position: absolute;
  padding: 3px 10px 3px 15px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${V};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`,Ho=k.ZP.div`
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
`;function Mo(){const[e,o]=(0,r.useState)(""),[n,t]=(0,r.useState)([]),[i,a]=(0,r.useState)("Name"),[s,d]=(0,r.useState)(!1),c=(0,y.s0)(),l=(0,r.useRef)(null),{data:p}=(0,L.a)({queryFn:async function(){return O(await E())},queryKey:["allPokemons"]}),{refetch:x,isFetching:u}=(0,L.a)({queryFn:async function(){return(await U(e.toLowerCase())).species.name},queryKey:["defaultForm"],enabled:!1});function h(e){a(e.target.textContent),o("")}return Zo(l,(function(){d(!1)})),(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(Qo,{children:[(0,P.jsx)(Yo,{children:"Find your Pokemon!"}),"Name"===i?(0,P.jsx)(So,{pokemonList:p,inputValue:e,setInputValue:o,suggestedList:n,setSuggestedList:t}):(0,P.jsx)(Oo,{selectedType:e,setSelectedType:o}),(0,P.jsx)(Go,{type:"button",disabled:u,onClick:async function(){const r=n.length,a=D(e.toLowerCase(),p);""===e?c(`/catalog?query=${e.toLowerCase()}&option=${i.toLowerCase()}`):1===r&&"Name"===i?(await async function(o){const n=p.names.indexOf(e.toLowerCase()),r=p.ids.length,t=await x();c(n>r?`/pokedex?specie=${t.data}&form=${o}`:`/pokedex?specie=${t.data}`)}(a),t([])):c(`/catalog?query=${a}&option=${i.toLowerCase()}`),o("")},children:"Search"}),(0,P.jsxs)(Jo,{ref:l,children:[(0,P.jsx)(en,{onClick:function(){d((e=>!e))},children:i}),s&&(0,P.jsxs)(on,{children:[(0,P.jsx)(nn,{onClick:h,children:"Name"}),(0,P.jsx)(nn,{onClick:h,children:"Type"})]})]})]})})}const Qo=k.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 5px 15px 5px 15px;
  border-radius: 12px;
  background-color: ${V};
`,Yo=k.ZP.span`
  font-size: 15px;
`,Go=k.ZP.button`
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: solid gainsboro 1px;
  font-size: 14px;

  &:hover {
    background-color: gainsboro;
  }
`,Jo=k.ZP.div`
  position: relative;
`,en=(0,k.ZP)(Go)`
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
`,on=k.ZP.div`
  position: absolute;
  padding: 3px 10px 3px 10px;
  border: solid gainsboro 1px;
  border-radius: 8px;
  background-color: ${V};
  font-size: 12px;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`,nn=k.ZP.div`
  padding: 3px 0 3px 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    &:after {
      content: "";
      border-left: solid ${X} 6px;
      margin-left: 8px;
    }
  }
`,rn="bulbasaur";function tn(){return(0,P.jsx)(an,{children:(0,P.jsxs)(sn,{children:[(0,P.jsxs)(dn,{children:[(0,P.jsx)(cn,{$backgroundColor:"#8fbc8f",to:"/",children:"Home"}),(0,P.jsx)(cn,{$backgroundColor:"#ff4c4c",to:`/pokedex?specie=${rn}`,children:"Pokedex"}),(0,P.jsx)(cn,{$backgroundColor:"#2fadd3",to:"/catalog",children:"Catalog"})]}),(0,P.jsx)(Mo,{})]})})}const an=k.ZP.div`
  background-color: ${X};
  width: 100%;
  z-index: 101;
`,sn=k.ZP.div`
  width: 600px;
  margin-left: 20px;
  padding: 0 25px 15px 25px;
  background-color: ${X};
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-sizing: border-box;
`,dn=k.ZP.div`
  display: flex;
  justify-content: space-between;
`,cn=(0,k.ZP)(j.OL)`
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
`;function ln(){return(0,P.jsxs)(pn,{children:[(0,P.jsx)(xn,{children:"Page not found"}),(0,P.jsx)(un,{children:"The url address was entered incorrectly or the page no longer exist"})]})}const pn=k.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 70px auto;
`,xn=k.ZP.div`
  margin: 40px 30px 0 30px;
  font-size: 28px;
  font-weight: bold;
`,un=k.ZP.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
`;function hn(){return(0,P.jsx)(gn,{children:(0,P.jsx)("p",{children:"© 2024 Poke"})})}const gn=k.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  padding: 20px 0 20px 0;
  color: white;
  background-color: ${X};
`,fn=new v.S;function mn(){return(0,P.jsx)(w.aH,{client:fn,children:(0,P.jsx)(j.VK,{basename:"Poke.js",children:(0,P.jsxs)(bn,{children:[(0,P.jsx)(tn,{}),(0,P.jsx)(kn,{children:(0,P.jsxs)(y.Z5,{children:[(0,P.jsx)(y.AW,{path:"/",element:(0,P.jsx)($,{})}),(0,P.jsx)(y.AW,{path:"/pokedex",element:(0,P.jsx)(Ne,{})}),(0,P.jsx)(y.AW,{path:"/catalog",element:(0,P.jsx)(bo,{})}),(0,P.jsx)(y.AW,{path:"*",element:(0,P.jsx)(ln,{})})]})}),(0,P.jsx)(hn,{})]})})})}const bn=k.ZP.div`
  font-family: "Roboto", sans-serif;
  background-color: whitesmoke;
  color: #282c34;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,kn=k.ZP.div`
  margin-bottom: 60px;
`;(0,t.s)(document.getElementById("root")).render((0,P.jsx)(r.StrictMode,{children:(0,P.jsx)(mn,{})}))},434:function(e,o,n){var r=n(537),t=n.n(r),i=n(645),a=n.n(i)()(t());a.push([e.id,'html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-weight: inherit;\r\n    font-style: inherit;\r\n    font-size: 100%;\r\n    font-family: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n:focus {\r\n    outline: 0;\r\n}\r\nbody {\r\n    color: black;\r\n    background: white;\r\n    overflow-x: hidden;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n}\r\ncaption, th, td {\r\n    text-align: left;\r\n    font-weight: normal;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: "";\r\n}\r\nblockquote, q {\r\n    quotes: "" "";\r\n}',"",{version:3,sources:["webpack://./src/styles/reset.css"],names:[],mappings:"AAAA;;;;;;;;IAQI,SAAS;IACT,UAAU;IACV,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,wBAAwB;AAC5B;;AAEA;IACI,UAAU;AACd;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;;IAEI,WAAW;AACf;AACA;IACI,aAAa;AACjB",sourcesContent:['html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    outline: 0;\r\n    font-weight: inherit;\r\n    font-style: inherit;\r\n    font-size: 100%;\r\n    font-family: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n:focus {\r\n    outline: 0;\r\n}\r\nbody {\r\n    color: black;\r\n    background: white;\r\n    overflow-x: hidden;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n}\r\ncaption, th, td {\r\n    text-align: left;\r\n    font-weight: normal;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: "";\r\n}\r\nblockquote, q {\r\n    quotes: "" "";\r\n}'],sourceRoot:""}]),o.Z=a}},function(e){e.O(0,[216],(function(){return 21,e(e.s=21)})),e.O()}]);
//# sourceMappingURL=main.6e86e8f6d24e035056f540e5744c0b4a.bundle.js.map