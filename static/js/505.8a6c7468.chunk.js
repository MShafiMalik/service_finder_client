"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[505],{6505:function(e,s,a){a.r(s);var t=a(1413),r=a(885),i=(a(1731),a(6863)),n=a(4695),l=a(1134),o=a(6871),c=a(9434),m=a(2791),d=a(8963),u=a(7594),h=a(9085),x=(a(5462),a(6700)),f=a(184);s.default=function(){var e=(0,o.s0)(),s=(0,c.I0)(),a=(0,m.useState)(!1),b=(0,r.Z)(a,2),p=b[0],g=b[1],v=i.Ry().shape({email:i.Z_().required("Email is mendatory").email(),password:i.Z_().required("Password is mendatory").min(8,"Enter minimum 8 characters").max(15,"Enter maximum 15 characters")}),j={resolver:(0,n.X)(v)},N=(0,l.cI)(j),w=N.register,y=N.handleSubmit,S=N.formState.errors;return(0,f.jsxs)("div",{className:"container reg-contain",children:[(0,f.jsx)("h2",{className:"font-w-700 text-center",children:"Login"}),(0,f.jsxs)("form",{onSubmit:y((function(a){g(!0),s((0,d.dk)());try{(0,u.x4)(a).then((function(a){if("OK"===(null===a||void 0===a?void 0:a.statusText)){var t=a.data.data;(0,u.YR)(t,(function(){s((0,d.he)({data:t})),g(!1),h.Am.success("Login Successfull!",{autoClose:2e3}),e(x.m8.HOME)}))}else{var r=null===a||void 0===a?void 0:a.statusText;s((0,d.KZ)({error:r})),g(!1),h.Am.error("Login Not Successfull!",{autoClose:2e3})}}))}catch(t){console.log("login page catch error",t),g(!1),h.Am.error("Login Not Successfull!",{autoClose:2e3})}})),children:[(0,f.jsxs)("div",{className:"form-group mb-4",children:[(0,f.jsx)("label",{children:"Email"}),(0,f.jsx)("input",(0,t.Z)({type:"email",name:"email",className:"form-control mt-2 ".concat(S.email?"is-invalid":"")},w("email"))),S.email?(0,f.jsxs)("label",{className:"text-danger mt-1",children:[" ",S.email.message]}):""]}),(0,f.jsxs)("div",{className:"form-group mb-4",children:[(0,f.jsx)("label",{children:"Password"}),(0,f.jsx)("input",(0,t.Z)({type:"password",name:"password",className:"form-control mt-2 ".concat(S.password?"is-invalid":"")},w("password"))),S.password?(0,f.jsxs)("label",{className:"text-danger mt-1",children:[" ",S.password.message]}):""]}),(0,f.jsx)("div",{className:"d-grid",children:!0===p?(0,f.jsx)("button",{type:"submit",className:"btn theme-btn",disabled:"disabled",children:"Loading..."}):(0,f.jsx)("button",{type:"submit",className:"btn theme-btn",children:"LOGIN"})})]})]})}},5462:function(){},1731:function(){}}]);
//# sourceMappingURL=505.8a6c7468.chunk.js.map