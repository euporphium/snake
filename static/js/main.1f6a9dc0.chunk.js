(this.webpackJsonpclick=this.webpackJsonpclick||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(13),i=c.n(r),l=c(8),o=(c(18),c(2)),j=c(6),u=c(12),s=c.n(u),b=s.a.mark(O);function O(e,t){return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Math.floor(Math.random()*(t-e+1)+e);case 3:c.next=0;break;case 5:case"end":return c.stop()}}),b)}function h(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}var d=c(7),f=c(9),v=c(3),w=c(5),m=Object(w.a)("rowCount"),x=Object(w.a)("colCount"),g=Object(w.a)("board"),p=function e(t,c){var n=this;Object(d.a)(this,e),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),this.getCells=function(){return Object(v.a)(n,g)[g]},this.getCellNum=function(e,t){return 0<=e&&e<Object(v.a)(n,m)[m]&&0<=t&&t<Object(v.a)(n,x)[x]?Object(v.a)(n,g)[g][e][t]:null},Object(v.a)(this,m)[m]=t,Object(v.a)(this,x)[x]=c,Object(v.a)(this,g)[g]=[];for(var a=1,r=0;r<t;r++){for(var i=[],l=0;l<c;l++)i.push(a++);Object(v.a)(this,g)[g].push(i)}},N="UP",k="DOWN",C="LEFT",S="RIGHT",y=function e(t){Object(d.a)(this,e),this.value=t,this.next=null},P=Object(w.a)("head"),E=Object(w.a)("tail"),F=Object(w.a)("occupiedCellNums"),D=Object(w.a)("direction"),I=Object(w.a)("updateSnake"),L=Object(w.a)("getNext"),R=function(){function e(t,c,n){var a=this;Object(d.a)(this,e),Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),Object.defineProperty(this,F,{writable:!0,value:void 0}),Object.defineProperty(this,D,{writable:!0,value:void 0}),this.getOccupiedCellNums=function(){return Object(v.a)(a,F)[F]},Object.defineProperty(this,I,{writable:!0,value:function(e,t){var c=e.row,n=e.col,r=e.cellNum,i=new y({row:c,col:n,cellNum:r});Object(v.a)(a,P)[P].next=i,Object(v.a)(a,P)[P]=i,Object(v.a)(a,F)[F].add(r),t||(Object(v.a)(a,F)[F].delete(Object(v.a)(a,E)[E].value.cellNum),Object(v.a)(a,E)[E]=Object(v.a)(a,E)[E].next)}}),Object.defineProperty(this,L,{writable:!0,value:function(){var e=Object(v.a)(a,D)[D]===k?1:Object(v.a)(a,D)[D]===N?-1:0,t=Object(v.a)(a,D)[D]===S?1:Object(v.a)(a,D)[D]===C?-1:0;return{tgtRow:Object(v.a)(a,P)[P].value.row+e,tgtCol:Object(v.a)(a,P)[P].value.col+t}}});var r=new y({row:c,col:n,cellNum:t.getCellNum(c,n)});Object(v.a)(this,P)[P]=r,Object(v.a)(this,E)[E]=r,Object(v.a)(this,F)[F]=new Set([r.value.cellNum]),Object(v.a)(this,D)[D]=S}return Object(f.a)(e,[{key:"changeDirection",value:function(e){Object(v.a)(this,D)[D]=e}},{key:"move",value:function(e){var t=Object(v.a)(this,L)[L](),c=e(t.tgtRow,t.tgtCol),n=c.row,a=c.col,r=c.cellNum,i=c.grow;r&&Object(v.a)(this,I)[I]({row:n,col:a,cellNum:r},i)}}]),e}(),T=(c(20),c(1)),A="UP",G="DOWN",H="LEFT",M="RIGHT";var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debug,c=void 0!==t&&t,a=Object(n.useState)(O(1,100)),r=Object(j.a)(a,1),i=r[0],l=Object(n.useState)(new p(10,10)),o=Object(j.a)(l,1),u=o[0],s=Object(n.useState)(new R(u,2,2)),b=Object(j.a)(s,1),d=b[0],f=Object(n.useState)(new Set([i.next().value])),v=Object(j.a)(f,2),w=v[0],m=v[1],x=Object(n.useState)(d.getOccupiedCellNums()),g=Object(j.a)(x,2),N=g[0],k=g[1],C=function(e){var t,c="ArrowUp"===(t=e.key)?A:"ArrowRight"===t?M:"ArrowDown"===t?G:"ArrowLeft"===t?H:"";c&&d.changeDirection(c)};function S(){d.move((function(e,t){var c=u.getCellNum(e,t);return c?N.has(c)?{}:w.has(c)?(m(new Set([i.next().value])),{row:e,col:t,cellNum:c,grow:!0}):{row:e,col:t,cellNum:c,grow:!1}:{}})),k(new Set(d.getOccupiedCellNums()))}function y(e){return N.has(e)?"cell cell--snake":w.has(e)?"cell cell--food":"cell"}return Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){return C(e)}))}),[]),h((function(){S()}),200),Object(T.jsxs)("div",{id:"snake-game",children:[Object(T.jsx)("h1",{children:"Snake"}),c&&Object(T.jsx)("button",{onClick:S,children:"Step"}),Object(T.jsx)("div",{className:"snake-game__board",children:u.getCells().map((function(e,t){return Object(T.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(T.jsx)("div",{className:y(e),children:c&&e},t)}))},t)}))})]})};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.debug;return Object(T.jsx)("div",{id:"nonogram-game",children:Object(T.jsx)("h1",{children:"Snake"})})}c(22);var J=function(){return Object(T.jsxs)("div",{className:"app-container",children:[Object(T.jsxs)("header",{children:[Object(T.jsx)("span",{children:"Games"}),Object(T.jsx)("nav",{children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/",children:"Home"})}),Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/snake",children:"Snake"})}),Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/nonogram",children:"Nonogram"})})]})})]}),Object(T.jsx)("main",{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"/",element:Object(T.jsx)(T.Fragment,{})}),Object(T.jsx)(o.a,{path:"/snake",element:Object(T.jsx)(U,{})}),Object(T.jsx)(o.a,{path:"/nonogram",element:Object(T.jsx)(B,{})})]})})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(l.a,{children:Object(T.jsx)(J,{})})}),document.getElementById("root")),W()}},[[23,1,2]]]);
//# sourceMappingURL=main.1f6a9dc0.chunk.js.map