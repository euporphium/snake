(this.webpackJsonpclick=this.webpackJsonpclick||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(12),i=c.n(r),l=c(7),o=(c(18),c(2)),j=c(5),u=c(11),s=c.n(u),b=s.a.mark(O);function O(e,t){return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,Math.floor(Math.random()*(t-e+1)+e);case 3:c.next=0;break;case 5:case"end":return c.stop()}}),b)}function h(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}var d=c(8),f=c(3),v=c(6),w=Object(v.a)("rowCount"),m=Object(v.a)("colCount"),x=Object(v.a)("board"),g=function e(t,c){var n=this;Object(d.a)(this,e),Object.defineProperty(this,w,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),this.getCells=function(){return Object(f.a)(n,x)[x]},this.getCellNum=function(e,t){return 0<=e&&e<Object(f.a)(n,w)[w]&&0<=t&&t<Object(f.a)(n,m)[m]?Object(f.a)(n,x)[x][e][t]:null},Object(f.a)(this,w)[w]=t,Object(f.a)(this,m)[m]=c,Object(f.a)(this,x)[x]=[];for(var a=1,r=0;r<t;r++){for(var i=[],l=0;l<c;l++)i.push(a++);Object(f.a)(this,x)[x].push(i)}},p=c(13),N="UP",k="DOWN",C="LEFT",S="RIGHT",y=function e(t){Object(d.a)(this,e),this.value=t,this.next=null},P=Object(v.a)("head"),E=Object(v.a)("tail"),F=Object(v.a)("occupiedCellNums"),D=Object(v.a)("direction"),I=Object(v.a)("updateSnake"),L=Object(v.a)("getNext"),R=function(){function e(t,c,n){var a=this;Object(d.a)(this,e),Object.defineProperty(this,P,{writable:!0,value:void 0}),Object.defineProperty(this,E,{writable:!0,value:void 0}),Object.defineProperty(this,F,{writable:!0,value:void 0}),Object.defineProperty(this,D,{writable:!0,value:void 0}),this.getOccupiedCellNums=function(){return Object(f.a)(a,F)[F]},Object.defineProperty(this,I,{writable:!0,value:function(e,t){var c=e.row,n=e.col,r=e.cellNum,i=new y({row:c,col:n,cellNum:r});Object(f.a)(a,P)[P].next=i,Object(f.a)(a,P)[P]=i,Object(f.a)(a,F)[F].add(r),t||(Object(f.a)(a,F)[F].delete(Object(f.a)(a,E)[E].value.cellNum),Object(f.a)(a,E)[E]=Object(f.a)(a,E)[E].next)}}),Object.defineProperty(this,L,{writable:!0,value:function(){var e=Object(f.a)(a,D)[D]===k?1:Object(f.a)(a,D)[D]===N?-1:0,t=Object(f.a)(a,D)[D]===S?1:Object(f.a)(a,D)[D]===C?-1:0;return{tgtRow:Object(f.a)(a,P)[P].value.row+e,tgtCol:Object(f.a)(a,P)[P].value.col+t}}});var r=new y({row:c,col:n,cellNum:t.getCellNum(c,n)});Object(f.a)(this,P)[P]=r,Object(f.a)(this,E)[E]=r,Object(f.a)(this,F)[F]=new Set([r.value.cellNum]),Object(f.a)(this,D)[D]=S}return Object(p.a)(e,[{key:"changeDirection",value:function(e){Object(f.a)(this,D)[D]=e}},{key:"move",value:function(e){var t=Object(f.a)(this,L)[L](),c=e(t.tgtRow,t.tgtCol),n=c.row,a=c.col,r=c.cellNum,i=c.grow;r&&Object(f.a)(this,I)[I]({row:n,col:a,cellNum:r},i)}}]),e}(),T=(c(20),c(1)),A="UP",G="DOWN",H="LEFT",M="RIGHT";var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debug,c=void 0!==t&&t,a=Object(n.useState)(O(1,100)),r=Object(j.a)(a,1),i=r[0],l=Object(n.useState)(new g(10,10)),o=Object(j.a)(l,1),u=o[0],s=Object(n.useState)(new R(u,2,2)),b=Object(j.a)(s,1),d=b[0],f=Object(n.useState)(new Set([i.next().value])),v=Object(j.a)(f,2),w=v[0],m=v[1],x=Object(n.useState)(d.getOccupiedCellNums()),p=Object(j.a)(x,2),N=p[0],k=p[1],C=function(e){var t,c="ArrowUp"===(t=e.key)?A:"ArrowRight"===t?M:"ArrowDown"===t?G:"ArrowLeft"===t?H:"";c&&d.changeDirection(c)};function S(){d.move((function(e,t){var c=u.getCellNum(e,t);return c?N.has(c)?{}:w.has(c)?(m(new Set([i.next().value])),{row:e,col:t,cellNum:c,grow:!0}):{row:e,col:t,cellNum:c,grow:!1}:{}})),k(new Set(d.getOccupiedCellNums()))}function y(e){return N.has(e)?"cell cell--snake":w.has(e)?"cell cell--food":"cell"}return Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){return C(e)}))}),[]),h((function(){S()}),200),Object(T.jsxs)("div",{id:"snake-game",children:[Object(T.jsx)("h1",{children:"Snake"}),c&&Object(T.jsx)("button",{onClick:S,children:"Step"}),Object(T.jsx)("div",{className:"snake-game__board",children:u.getCells().map((function(e,t){return Object(T.jsx)("div",{className:"row",children:e.map((function(e,t){return Object(T.jsx)("div",{className:y(e),children:c&&e},t)}))},t)}))})]})};function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.debug;return Object(T.jsx)("div",{id:"nonogram-game",children:Object(T.jsx)("h1",{children:"Snake"})})}c(22);var J=function(){return Object(T.jsxs)("div",{className:"app-container",children:[Object(T.jsxs)("header",{children:[Object(T.jsx)("span",{children:"Games"}),Object(T.jsx)("nav",{children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/",children:"Home"})}),Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/snake",children:"Snake"})}),Object(T.jsx)("li",{children:Object(T.jsx)(l.b,{to:"/nonogram",children:"Nonogram"})})]})})]}),Object(T.jsx)("main",{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{path:"/",element:Object(T.jsx)(T.Fragment,{})}),Object(T.jsx)(o.a,{path:"/snake",element:Object(T.jsx)(U,{})}),Object(T.jsx)(o.a,{path:"/nonogram",element:Object(T.jsx)(B,{})})]})})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(l.a,{children:Object(T.jsx)(J,{})})}),document.getElementById("root")),W()}},[[23,1,2]]]);
//# sourceMappingURL=main.0e947b27.chunk.js.map