(this["webpackJsonplazy-load"]=this["webpackJsonplazy-load"]||[]).push([[0],{32:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(16),i=n.n(s),o=(n(32),n(11)),j=n.n(o),l=n(14),u=n(10),b=n(17),h=n.n(b);var d=function(e){var t=e.post;return Object(c.jsx)(h.a,{placeholder:"Loading....",children:Object(c.jsx)("div",{className:"post",children:t.body})})},O=n(3),p=n(9);var x=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(O.d,{children:[Object(c.jsx)(O.b,{path:"/",children:n.map((function(e,t){return Object(c.jsx)(p.b,{to:"/comment/"+e.id,children:Object(c.jsx)(d,{post:e})},t)}))}),Object(c.jsx)(O.b,{path:"/comment/:id/*",children:Object(c.jsx)(O.a,{to:"/"})})]})})};var f=function(e){var t=e.photo;return Object(c.jsx)(h.a,{height:150,offset:100,placeholder:Object(c.jsx)("p",{style:{height:"150px"},children:"Loading..."}),children:Object(c.jsx)("img",{src:t.thumbnailUrl,alt:t.id})})};var m=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/albums/1/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)("div",{className:"container container-photos",children:n.length?n.map((function(e){return Object(c.jsx)(f,{photo:e},e.id)})):"loading..."})},v=n(12),g=n(18),y=Object(g.b)({name:"user",initialState:{value:{login:!1,user_name:"ahahaha"}},reducers:{setUser:function(e,t){e.value={login:!0,user_name:t.payload}}}}),w=y.actions.setUser,S=function(e){return e.user.value},k=y.reducer;var E=function(){var e=Object(O.h)().id,t=Object(O.g)(),n=Object(r.useState)([]),a=Object(u.a)(n,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){(function(){var n=Object(l.a)(j.a.mark((function n(){var c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/posts/".concat(e,"/comments"));case 3:if((c=n.sent)&&!(c.status>399)){n.next=6;break}throw Error();case 6:return n.next=8,c.json();case 8:r=n.sent,i(r),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),t.push("/");case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}})()()}),[t,e]),Object(c.jsx)("div",{className:"container",children:s.length?s.map((function(e,t){return Object(c.jsx)("p",{children:e.body},t)})):"loading..."})};var F=function(){var e=Object(v.c)(S),t=Object(O.g)(),n=Object(v.b)();if(!e.login){var r=localStorage.getItem("userlearning");r||t.push("/login"),n(w(r))}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("ul",{style:{listStyleType:"none",display:"flex"},children:[Object(c.jsx)("li",{style:{marginRight:"1rem"},children:Object(c.jsx)(p.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(p.b,{to:"/photos",children:"Photos"})}),Object(c.jsx)("li",{style:{marginLeft:"auto",marginRight:"2rem"},children:e.user_name})]}),Object(c.jsx)("hr",{}),e.login?Object(c.jsxs)(O.d,{children:[Object(c.jsx)(O.b,{exact:!0,path:"/",children:Object(c.jsx)(x,{})}),Object(c.jsx)(O.b,{exact:!0,path:"/photos",children:Object(c.jsx)(m,{})}),Object(c.jsx)(O.b,{exact:!0,path:"/comment/:id",children:Object(c.jsx)(E,{})}),Object(c.jsx)(O.b,{path:"*",children:Object(c.jsx)(O.a,{to:"/"})})]}):""]})};var N=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),o=i[0],j=i[1],l=Object(O.g)(),b=Object(v.b)();return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),b(w(n)),localStorage.setItem("userlearning",n),l.push("/")}(e)},children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("label",{htmlFor:"uname",children:Object(c.jsx)("b",{children:"Username"})}),Object(c.jsx)("input",{type:"text",placeholder:"Enter any username",name:"uname",value:n,onChange:function(e){return a(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"psw",children:Object(c.jsx)("b",{children:"Password"})}),Object(c.jsx)("input",{type:"password",placeholder:"Enter mock Password",name:"psw",value:o,onChange:function(e){return j(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Login"})]})})})};var L=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p.a,{basename:"/react-learn",children:Object(c.jsxs)(O.d,{children:[Object(c.jsx)(O.b,{exact:!0,path:"/login",children:Object(c.jsx)(N,{})}),Object(c.jsx)(O.b,{path:"/",children:Object(c.jsx)(F,{})})]})})})},C=Object(g.a)({reducer:{user:k}}),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v.a,{store:C,children:Object(c.jsx)(L,{})})}),document.getElementById("root")),P()}},[[47,1,2]]]);
//# sourceMappingURL=main.cd11ab16.chunk.js.map