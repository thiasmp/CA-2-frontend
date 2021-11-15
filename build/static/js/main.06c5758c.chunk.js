(this["webpackJsonpca-react"]=this["webpackJsonpca-react"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(14),a=c.n(r),o=(c(21),c(3)),i=(c.p,c(22),c(23),c(8)),j=c(11),l=c(0);function u(e){var t=e.facade,c=e.setLoggedIn,s=e.setErrorMessage,r=e.logout,a=e.loggedIn,u={username:"",password:""},b=Object(n.useState)(u),d=Object(o.a)(b,2),h=d[0],O=d[1],x=function(e){O(Object(j.a)(Object(j.a)({},h),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Home"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(h),t.login(h.username,h.password,c,s),console.log(s),O(u)},children:[Object(l.jsxs)("label",{children:["User Name:",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"username",value:h.username,onChange:x}),Object(l.jsx)("br",{}),"Password:",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"password",value:h.password,onChange:x})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",children:"Login"}),t.hasUserAccess("user",a)&&Object(l.jsx)("p",{children:Object(l.jsx)("button",{onClick:r,children:"Logout"})}),t.hasUserAccess("admin",a)&&Object(l.jsx)("p",{children:Object(l.jsx)("button",{onClick:r,children:"Logout"})}),Object(l.jsxs)("p",{children:["Role: ",t.getUserRoles()]})]})]})}var b=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Bored?"}),Object(l.jsx)("p",{children:e.activity}),Object(l.jsx)("p",{children:e.type})]})},d=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Cat"}),Object(l.jsx)("p",{children:e.fact})]})},h=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Dog"}),Object(l.jsx)("img",{class:"picture",src:e.message})]})};var O=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),j=i[0],u=i[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Genderize"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.genderize.io/?name="+s).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.gender),O(e.probability)}))},children:[Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)("input",{type:"text",name:"name",value:s,onChange:function(e){console.log(e.target.value),r(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),Object(l.jsxs)("p",{children:["Name: ",s]}),Object(l.jsxs)("p",{children:["Gender: ",j]}),Object(l.jsxs)("p",{children:["Probability of gender: ",h]})]})},x="http://localhost:8080/CA2_Backend";function f(e){return e.ok?e.json():Promise.reject({status:e.status,fullError:e.json()})}var g=function(){var e=function(e){localStorage.setItem("jwtToken",e)},t=function(){return localStorage.getItem("jwtToken")},c=function(){var e=null!=t();return e},n=function(){if(null!=t()){var e=t().split(".")[1];return JSON.parse(window.atob(e)).roles}return""},s=function(e,n,s){var r={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return n&&c()&&(r.headers["x-access-token"]=t()),s&&(r.body=JSON.stringify(s)),r};return{makeOptions:s,fetchData:function(e,t,c){var n=s("GET",!0);return fetch(x+"/api/"+e,n).then(f).then((function(e){return t(e)})).catch((function(e){e.status?(console.log(e),e.fullError.then((function(e){return c(e.code+": "+e.message)}))):c("Network error")}))},setToken:e,getToken:t,loggedIn:c,login:function(t,c,n,r){var a=s("POST",!0,{username:t,password:c});return fetch(x+"/api/login",a).then(f).then((function(t){e(t.token),n(!0),r("Logged in")})).catch((function(e){e.status?e.fullError.then((function(e){return r(e.code+": "+e.message)})):r("Network error")}))},logout:function(){localStorage.removeItem("jwtToken")},getUserRoles:n,hasUserAccess:function(e,t){var c=n().split(",");return t&&c.includes(e)}}}(),p=c(6),m=c(2);var v=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],r=c[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),j=i[0],u=i[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Age"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.agify.io?name="+s).then((function(e){return e.json()})).then((function(e){console.log(e),u(e.age),O(e.count)}))},children:[Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)("input",{type:"text",name:"name",value:s,onChange:function(e){console.log(e.target.value),r(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]}),Object(l.jsxs)("p",{children:["name: ",s]}),Object(l.jsxs)("p",{children:["average age: ",j]}),Object(l.jsxs)("p",{children:["Count: ",h]})]})};function S(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(o.a)(r,2),i=a[0],j=a[1],x=Object(n.useState)(""),f=Object(o.a)(x,2),S=f[0],y=f[1],C=Object(n.useState)(""),w=Object(o.a)(C,2),k=w[0],N=w[1],E=Object(n.useState)(!1),I=Object(o.a)(E,2),A=I[0],L=I[1],T=Object(n.useState)("All is good ... so far"),D=Object(o.a)(T,2),U=(D[0],D[1]);return Object(n.useEffect)((function(){fetch("https://www.boredapi.com/api/activity").then((function(e){return e.json()})).then((function(e){return s(e.activity),j(e.type)}))}),[]),Object(n.useEffect)((function(){fetch("https://catfact.ninja/fact").then((function(e){return e.json()})).then((function(e){return y(e.fact)}))}),[]),Object(n.useEffect)((function(){fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()})).then((function(e){return N(e.message)}))}),[]),Object(l.jsx)(p.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{className:"header",children:[Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{exact:!0,activeClassName:"selected",to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{exact:!0,activeClassName:"selected",to:"/bored",children:"Bored"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{exact:!0,activeClassName:"selected",to:"/cat",children:"Cat"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{exact:!0,activeClassName:"selected",to:"/dog",children:"Dog"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{exact:!0,activeClassName:"selected",to:"/genderize",children:"Genderize"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{exact:!0,activeClassName:"selected",to:"/age",children:"Age"})})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{logout:function(){g.logout(),L(!1),U("Logged out.")},loggedIn:A,setLoggedIn:L,facade:g,setErrorMessage:U})}),Object(l.jsx)(m.a,{path:"/bored",children:g.hasUserAccess("user",A)&&Object(l.jsx)(b,{facade:g,setErrorMessage:U,activity:c,type:i})}),Object(l.jsx)(m.a,{path:"/cat",children:Object(l.jsx)(d,{fact:S})}),Object(l.jsx)(m.a,{path:"/dog",children:Object(l.jsx)(h,{message:k})}),Object(l.jsx)(m.a,{path:"/genderize",children:Object(l.jsx)(O,{})}),Object(l.jsx)(m.a,{path:"/age",children:Object(l.jsx)(v,{})})]})})]})})}var y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.06c5758c.chunk.js.map