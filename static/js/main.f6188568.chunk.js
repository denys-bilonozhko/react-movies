(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(4),r=t.n(s),i=(t(10),t(2)),j=t(0),l=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("nav",{children:Object(j.jsx)("div",{className:"nav-wrapper indigo darken-3",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("a",{href:"./",className:"brand-logo",children:"React Movies"}),Object(j.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"./",children:"News"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"./",children:"Blog"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"./",children:"Account"})})]})]})})})})},o=function(){return Object(j.jsx)("footer",{className:"page-footer indigo darken-3",children:Object(j.jsx)("div",{className:"footer-copyright indigo darken-3",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," denys-b",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"./",children:"GitHub"})]})})})},d=t(5),h=function(e){var c=e.Title,t=e.Year,n=e.Type,a=e.Poster;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(j.jsx)("img",{src:a,alt:c})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:c}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:t}),Object(j.jsx)("span",{className:"right",children:n})]})]})]})},b=function(e){var c=e.movies;return Object(j.jsx)("ul",{className:"movies container",children:c.map((function(e){return Object(j.jsx)(h,Object(d.a)({},e),e.imdbID)}))})},u=function(e){var c=Object(n.useState)(""),t=Object(i.a)(c,2),a=t[0],s=t[1];return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{className:"validate",type:"search",placeholder:"Search",value:a,onChange:function(e){return s(e.target.value)},onKeyDown:function(c){"Enter"===c.key&&e.searchMovie(a)}}),Object(j.jsx)("button",{className:"waves-effect waves-light btn",onClick:function(){return e.searchMovie(a)},children:"Search"})]})})},O=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=7b9ce72f&s=".concat("star wars")).then((function(e){return e.json()})).then((function(e){a(e.Search)}))}),[]);return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(l,{}),Object(j.jsx)(u,{searchMovie:function(e){fetch("https://www.omdbapi.com/?apikey=7b9ce72f&s=".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e.Search)}))}}),Object(j.jsx)("main",{className:"main",children:t.length?Object(j.jsx)(b,{movies:t}):Object(j.jsx)("p",{className:"center",children:"Loading..."})}),Object(j.jsx)(o,{})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f6188568.chunk.js.map
