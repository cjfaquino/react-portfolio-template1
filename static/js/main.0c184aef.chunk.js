(this["webpackJsonpportfolio-template"]=this["webpackJsonpportfolio-template"]||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(15),s=a.n(l),m=(a(22),a(23),a(6)),n=a(1);function c(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m.b,{to:"/",className:"name"},r.a.createElement("strong",null,"your name."))),r.a.createElement("div",{className:"contractWork"},"Available for contract work: ",r.a.createElement("strong",null,"Available"))))}function o(){return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("span",{className:"nameFooter"},r.a.createElement("strong",null,"Your name."))," ","All rights reserved."),r.a.createElement("div",{className:"footerLinks"},r.a.createElement("span",null,r.a.createElement(m.b,{to:"/cv"},"curriculum vitae")),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:exmaple@email.com"},"email")),r.a.createElement("span",null,r.a.createElement("a",{href:"https://github.com/yourusername"},"github")),r.a.createElement("span",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/yourusename"},"linkedin"))))}var u=a(7);function p(){Object(i.useEffect)((function(){document.title="Home | Christian Aquino"}));var e=u.map((function(e,t){return r.a.createElement("div",{className:"cardProject fade-in",key:t+1},r.a.createElement(m.b,{to:e.routeProps.path},r.a.createElement("div",{className:"cardImg"},r.a.createElement("img",{src:e.img,alt:"",className:"mainImg"})),r.a.createElement("div",{className:"cardInfo"},r.a.createElement("div",{className:"cardTitle"},e.name),r.a.createElement("div",{className:"cardDesc"},e.shortDesc))))}));return r.a.createElement("div",{className:"projects cardGrid gridWrapper"},e)}function d(e){Object(i.useEffect)((function(){document.title="".concat(e.name," | Your Name")}));var t=e.id,a=u.length-1,l=t+1,s=u[t-1],n=u[l];return r.a.createElement("div",{className:"project fade-in"},r.a.createElement("h1",{className:"projectTitle"},e.name),r.a.createElement("div",{className:"projectLinks"},r.a.createElement("a",{href:e.repo},"source"),r.a.createElement("a",{href:e.link},"live")),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"projectDesc"},e.desc)),r.a.createElement("div",{className:"projectImg"},r.a.createElement("img",{src:e.img,alt:"",className:"mainImg-project"})),t>0?r.a.createElement("div",{className:"lastPage"},r.a.createElement("p",null,"Previous project"),r.a.createElement(m.b,{to:s.routeProps.path},s.name)):null,t<a?r.a.createElement("div",{className:"nextPage"},r.a.createElement("p",null,"Next project"),r.a.createElement(m.b,{to:n.routeProps.path},n.name)):null)}function E(){return r.a.createElement("h1",null,"other test")}var g=function(){var e=r.a.createElement("div",{className:"jumbo fade-in"},r.a.createElement("h1",{className:"mainTitle"},"Lorem ipsum dolor sit amet consectetur adipisicing & elit."),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"jumboDesc"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis illo quisquam sit praesentium, tempora quos doloribus fugit reiciendis. Animi facilis ipsum reprehenderit temporibus! Beatae sequi eos odit id rerum minus pariatur. Cum consectetur eum corporis tenetur ab culpa ratione?"),r.a.createElement("div",{className:"jumboDesc"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quam impedit ad, illum a in, delectus sunt pariatur vel minus similique dolorem dolor error! Veniam rem corrupti voluptas laudantium quidem?"))),t=r.a.createElement("div",{className:"services fade-in"},r.a.createElement("h1",{className:"mainTitle"},"Services"),r.a.createElement("div",{className:"grid"},r.a.createElement("div",null,r.a.createElement("h2",null,"Lorem, ipsum."),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum consequatur veniam odio unde praesentium natus, error magni tempore repellat est amet, atque et ipsam at iste. Ex.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Lorem, ipsum."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae magni molestiae quae quas temporibus voluptatem beatae voluptatibus sunt mollitia. Vel incidunt inventore illum blanditiis et a!")),r.a.createElement("div",{className:"gridNewLine"},r.a.createElement("h2",null,"Lorem, ipsum."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat aliquid debitis sed maxime. Quisquam soluta maiores debitis laborum velit rem, mollitia animi culpa odio ut explicabo.")),r.a.createElement("div",null,r.a.createElement("h2",null,"Lorem, ipsum."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati in accusantium earum! Eos magnam quisquam iure esse eum vel ipsa, excepturi laudantium, delectus autem a possimus."))));return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App container"},r.a.createElement(c,null),r.a.createElement(n.c,null,r.a.createElement(n.a,{exact:!0,path:"/"},e,r.a.createElement(p,null),t),r.a.createElement(n.a,{path:"/cv"},r.a.createElement(E,null)),u.map((function(e,t){return r.a.createElement(n.a,Object.assign({},e.routeProps,{key:e.name}),r.a.createElement(d,Object.assign({},e,{id:t})))}))),r.a.createElement(o,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('[{"name":"Title1","link":"/project1","routeProps":{"path":"/project1"},"img":"/imgs/laptop01.png","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque accumsan gravida. Donec posuere tristique mauris sed sagittis. Nulla eleifend ex id risus semper ullamcorper. Nulla sit amet maximus turpis.","shortDesc":"Lorem ipsum dolor"},{"name":"Title2","link":"/project2","routeProps":{"path":"/project2"},"img":"/imgs/laptop02.png","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque accumsan gravida. Donec posuere tristique mauris sed sagittis. Nulla eleifend ex id risus semper ullamcorper. Nulla sit amet maximus turpis.","shortDesc":"Lorem ipsum dolor"},{"name":"Title3","link":"/project3","routeProps":{"path":"/project3"},"img":"/imgs/laptop03.png","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque accumsan gravida. Donec posuere tristique mauris sed sagittis. Nulla eleifend ex id risus semper ullamcorper. Nulla sit amet maximus turpis.","shortDesc":"Lorem ipsum dolor"},{"name":"Title4","link":"/project4","routeProps":{"path":"/project4"},"img":"/imgs/laptop04.png","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque accumsan gravida. Donec posuere tristique mauris sed sagittis. Nulla eleifend ex id risus semper ullamcorper. Nulla sit amet maximus turpis.","shortDesc":"Lorem ipsum dolor"},{"name":"Title5","link":"/project5","routeProps":{"path":"/project5"},"img":"/imgs/laptop05.png","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque accumsan gravida. Donec posuere tristique mauris sed sagittis. Nulla eleifend ex id risus semper ullamcorper. Nulla sit amet maximus turpis.","shortDesc":"Lorem ipsum dolor"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.0c184aef.chunk.js.map
