(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[0],{32:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(19),c=s.n(a),n=s(11),r=s(2),o=s(7),l=s(21),d=s(12);function j(e,t){switch(t.type){case"ADD_TO_FAVORITES":return Object(d.a)(Object(d.a)({},e),{},{favoritesList:[t.payload].concat(Object(l.a)(e.favoritesList))});case"REMOVE_FROM_FAVORITES":return Object(d.a)(Object(d.a)({},e),{},{favoritesList:e.favoritesList.filter((function(e){return e.id!==t.payload}))});default:return e}}var b=s(0),m={favoritesList:localStorage.getItem("favoritesList")?JSON.parse(localStorage.getItem("favoritesList")):[]},u=Object(i.createContext)(m),v=function(e){var t=Object(i.useReducer)(j,m),s=Object(o.a)(t,2),a=s[0],c=s[1];Object(i.useEffect)((function(){localStorage.setItem("favoritesList",JSON.stringify(a.favoritesList))}),[a]);return Object(b.jsx)(u.Provider,{value:{favoritesList:a.favoritesList,addToFavoritesList:function(e){c({type:"ADD_TO_FAVORITES",payload:e})},removeFromFavoritesList:function(e){c({type:"REMOVE_FROM_FAVORITES",payload:e})}},children:e.children})};var O=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(b.jsx)("nav",{className:"navbar is-fixed-top is-primary",role:"navigation","aria-label":"main navigation",children:Object(b.jsxs)("div",{className:"container is-max-desktop",children:[Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)("div",{className:"navbar-item",children:"The Movie DB"}),Object(b.jsxs)("button",{className:"navbar-burger burger ".concat(s?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",onClick:function(){a(!s)},children:[Object(b.jsx)("span",{"aria-hidden":"true"}),Object(b.jsx)("span",{"aria-hidden":"true"}),Object(b.jsx)("span",{"aria-hidden":"true"})]})]}),Object(b.jsx)("div",{id:"navbarMenu",className:"navbar-menu ".concat(s?"is-active":""),children:Object(b.jsxs)("div",{className:"navbar-end",children:[Object(b.jsx)(n.b,{className:"navbar-item",to:"/",onClick:function(){a(!s)},children:"Home"}),Object(b.jsx)(n.b,{className:"navbar-item",to:"/favorites",onClick:function(){a(!s)},children:"Favorites"})]})})]})})},h=function(e){var t=e.movie,s=Object(i.useContext)(u),a=s.addToFavoritesList,c=!!s.favoritesList.find((function(e){return e.id===t.id}));return Object(b.jsx)("div",{className:"box mt-2",children:Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-128x128 is-2by3",children:t.poster_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(b.jsx)("img",{src:"https://via.placeholder.com/200x300/0D253F/FFFFFF?text=Poster+not+found",alt:"Poster not found"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h3",{className:"title is-3",children:t.title}),Object(b.jsx)("p",{className:"subtitle is-5",children:t.release_date?t.release_date.substring(0,4):"-"}),Object(b.jsxs)("div",{className:"field is-grouped",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("button",{className:"button is-danger is-outlined",disabled:c,onClick:function(){return a(t)},children:"Add to Favorites"})}),Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("button",{className:"button is-primary is-outlined",children:"Movie Details"})})]})]})})]})})},x=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(i.useState)([]),n=Object(o.a)(c,2),r=n[0],l=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"hero is-primary",children:Object(b.jsx)("div",{className:"hero-body",children:Object(b.jsxs)("div",{className:"container is-max-desktop",children:[Object(b.jsx)("h1",{className:"title is-1 is-size-3-mobile",children:"Welcome to The Movie Data Base."}),Object(b.jsx)("h2",{className:"subtitle is-3 is-size-6-mobile",children:"Explore now millions of movies"}),Object(b.jsx)("input",{className:"input is-medium is-rounded",type:"text",placeholder:"Search for a movie",value:s,onChange:function(e){e.preventDefault(),a(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("4cb1eeab94f45affe2536f2c684a5c9e","&language=en-US&page=1&include_adult=false&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results)}))}})]})})}),Object(b.jsx)("div",{className:"container pb-2",children:r.length>0&&Object(b.jsx)("ul",{children:r.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(h,{movie:e})},e.id)}))})})]})},f=function(e){var t=e.movie,s=(e.type,Object(i.useContext)(u).removeFromFavoritesList);return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-2by3",children:t.poster_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(b.jsx)("img",{src:"https://via.placeholder.com/200x300/0D253F/FFFFFF?text=Poster+not+found",alt:"Poster not found"})})}),Object(b.jsxs)("div",{className:"custom-card-content",children:[Object(b.jsx)("h4",{className:"title is-6",children:t.title}),Object(b.jsx)("button",{class:"button is-small is-danger is-outlined",onClick:function(){return s(t.id)},children:"Remove"})]})]})},p=function(){var e=Object(i.useContext)(u).favoritesList;return Object(b.jsxs)("div",{className:"container pt-2 pb-2",children:[Object(b.jsx)("h2",{className:"title is-3 is-size-5-mobile",children:"My favorites movies"}),e.length>0?Object(b.jsx)("div",{className:"columns is-multiline",children:e.map((function(e){return Object(b.jsx)("div",{className:"column is-one-quarter is-full-mobile",children:Object(b.jsx)(f,{movie:e,type:"favoritesList"})},e.id)}))}):Object(b.jsx)("div",{className:"notification is-link is-light",children:Object(b.jsx)("p",{children:"No movies in your favorites list, add some!"})})]})},N=function(){return Object(b.jsx)(v,{children:Object(b.jsxs)(n.a,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(r.a,{exact:!0,path:"/favorites",component:p})]})]})})};s(32);c.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4c8e7d64.chunk.js.map