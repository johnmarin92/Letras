(this.webpackJsonpletras=this.webpackJsonpletras||[]).push([[0],{23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(17),n=a.n(s),i=(a(23),a(6)),l=a.n(i),j=a(18),o=a(3),b=a(4),d=a(7),h=a(0),m=function(e){var t=e.guardarBusquedaLetra,a=Object(c.useState)({artista:"",cancion:""}),r=Object(o.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),j=l[0],m=l[1],O=s.artista,u=s.cancion,x=function(e){n(Object(d.a)(Object(d.a)({},s),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("div",{className:"bg-info",children:[j?Object(h.jsx)("p",{className:"alert alert-danger text-center p-2",children:"Todos los campos son obligatorios"}):null,Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==O.trim()&&""!==u.trim()?(m(!1),t(s)):m(!0)},className:"col card text-white bg-transparent mb-5 pt-5 pb-2",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{className:"text-center",children:"Buscador Letras Canciones"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Artista"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"artista",placeholder:"Nombre Artista",onChange:x,value:O})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Canci\xf3n"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"cancion",placeholder:"Nombre Canci\xf3n",onChange:x,value:u})]})})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Buscar"})]})})})})]})},O=function(e){var t=e.letra;return 0===t.length?null:Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("h2",{children:"Letra Canci\xf3n"}),Object(h.jsx)("p",{className:"letra",children:t})]})},u=function(e){var t=e.info;if(0===Object.keys(t).length)return null;var a=t.strArtistThumb,c=t.strGenre,r=t.strBiographyES;return Object(h.jsxs)("div",{className:"card border-light",children:[Object(h.jsx)("div",{className:"card-header bg-primary text-light font-weight-bold",children:"Informaci\xf3n Artista"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("img",{src:a,alt:"Logo Artista"}),Object(h.jsxs)("p",{className:"card-text",children:["G\xe9nero: ",c]}),Object(h.jsx)("h2",{className:"card-text",children:"Biograf\xeda:"}),Object(h.jsx)("p",{className:"card-text",children:r}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("a",{href:"https://".concat(t.strFacebook),target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-facebook"})}),Object(h.jsx)("a",{href:"https://".concat(t.strTwitter),target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-twitter"})}),Object(h.jsx)("a",{href:"".concat(t.strLastFMChart),target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("i",{className:"fab fa-lastfm"})})]})]})]})},x=a(8),f=a.n(x);var p=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),n=Object(o.a)(s,2),i=n[0],b=n[1],d=Object(c.useState)({}),x=Object(o.a)(d,2),p=x[0],g=x[1];return Object(c.useEffect)((function(){0!==Object.keys(a).length&&function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,r,s,n,i,j,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.artista,c=a.cancion,r="https://api.lyrics.ovh/v1/".concat(t,"/").concat(c),s="https://www.theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),e.next=5,Promise.all([f()(r),f()(s)]);case 5:n=e.sent,i=Object(o.a)(n,2),j=i[0],d=i[1],b(j.data.lyrics),g(d.data.artists[0]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,p]),Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(m,{guardarBusquedaLetra:r}),Object(h.jsx)("div",{className:"container mt-5",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(u,{info:p})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(O,{letra:i})})]})})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.3df055ff.chunk.js.map