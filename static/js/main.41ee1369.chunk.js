(this.webpackJsonprest=this.webpackJsonprest||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),i=(n(96),n(78)),s=n(61),l=n(17),u=n.n(l),b=n(36),j=n(14),d=n(166),f=n(167),O=n(168),h=n(165),p=n(163),x=n(164),v=n(175),k=n(161),m=n(5),g=n(2),C=Object(m.a)((function(e){return{root:{backgroundColor:k.a[700],"&:hover":{backgroundColor:k.a[800],color:"#000"}}}}))(v.a);var y=function(e){return Object(g.jsx)(C,{onClick:function(){return e.edit(e.book)},size:"small",disableElevation:!0,children:"Edit"})},w=n(58),S=Object(m.a)((function(e){return{root:{marginLeft:15,color:"#fff",backgroundColor:w.a[500],"&:hover":{backgroundColor:w.a[700]}}}}))(v.a);var B=function(e){return Object(g.jsx)(S,{onClick:e.deleteBook,size:"small",disableElevation:!0,children:"Delete"})},E=n(162),I=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var F=function(e){var t=e.book,n=t.id,a=t.title,o=t.rating,r=I();return Object(g.jsxs)(p.a,{className:r.root,children:[Object(g.jsx)(x.a,{children:n}),Object(g.jsx)(x.a,{children:a}),Object(g.jsx)(x.a,{children:o}),Object(g.jsxs)(x.a,{children:[Object(g.jsx)(y,{bookForUpdate:e.bookForUpdate,close:e.close,edit:e.edit,book:e.book,size:"small",label:"Edit",disableElevation:!0}),Object(g.jsx)(B,{deleteBook:function(){return e.clickHandler(n)},size:"small",disableElevation:!0,children:"Delete"})]})]})},z=n(174);var H=function(e){var t=function(t){e.getBookId(t)},n=e.books.map((function(n){return Object(g.jsx)(F,{book:n,clickHandler:t,edit:e.handleEdit,close:e.event,bookForUpdate:e.bookForUpdate},n.id)}));return Object(g.jsx)(z.a,{mx:"auto",children:Object(g.jsx)(h.a,{children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(f.a,{children:Object(g.jsxs)(p.a,{children:[Object(g.jsx)(x.a,{children:"#"}),Object(g.jsx)(x.a,{wdth:"20%",children:"Title"}),Object(g.jsx)(x.a,{children:"Rating"}),Object(g.jsx)(x.a,{children:"Actions"})]})}),Object(g.jsx)(O.a,{children:n})]})})})},P=n(169),N=n(170);var T=function(){return Object(g.jsx)(P.a,{position:"static",children:Object(g.jsx)(N.a,{children:Object(g.jsx)(z.a,{width:"80%",children:Object(g.jsx)("h1",{children:"Books"})})})})},U=n(176),D=n(172),W=n(173),R=n(59),A=Object(m.a)((function(e){return{root:{color:"#fff",backgroundColor:R.a[500],"&:hover":{backgroundColor:R.a[700]}}}}))(v.a);var L=function(e){return Object(g.jsx)(A,{onSubmit:e.close,type:"submit",size:"small",form:"addForm",disableElevation:!0,children:"Submit"})};var J=function(e){return Object(g.jsx)(v.a,{onClick:e.close,size:"small",variant:"contained",disableElevation:!0,children:"Cancel"})},V=n(171),M=n(56),q=n.n(M),G=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var K=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(""),i=Object(j.a)(c,2),s=i[0],l=i[1],u=G();return Object(g.jsxs)(z.a,{style:e.style,className:e.class,children:[Object(g.jsxs)(z.a,{display:"flex",justifyContent:"space-between",py:1,px:2,children:[Object(g.jsx)("h2",{children:"Add a Book"}),Object(g.jsx)(z.a,{my:"auto",children:Object(g.jsx)(q.a,{onClick:e.event})})]}),Object(g.jsx)(V.a,{}),Object(g.jsx)(z.a,{p:1,children:Object(g.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault();var n={id:0!==e.length?e.lastBook.id+1:1,title:o,rating:s};""===o||""===s?alert("Please fill out all the fields"):s<0||s>10?alert("Please assign rating between 0 and 10"):(e.bookHandler(n),e.event(!1))},id:"addForm",children:[Object(g.jsx)(z.a,{mx:1,my:2,children:Object(g.jsx)(W.a,{id:"outlined-basic",size:"small",label:"Title",fullWidth:!0,variant:"outlined",value:o,onChange:function(e){return r(e.target.value)}})}),Object(g.jsx)(z.a,{mx:1,my:2,children:Object(g.jsx)(W.a,{id:"outlined-basic",label:"Rating",type:"number",size:"small",fullWidth:!0,variant:"outlined",inputProps:{min:"0",max:"10",step:"1"},value:s,onChange:function(e){return l(e.target.value)}})}),Object(g.jsxs)(z.a,{className:u.root,children:[Object(g.jsx)(L,{close:e.event}),Object(g.jsx)(J,{close:e.event})]})]})})]})};function Q(){return{top:"20%",left:"50%",transform:"translate(-50%, -50%)"}}var X=Object(E.a)((function(e){return{paper:{width:"90%",maxWidth:600,position:"absolute",outline:"none",backgroundColor:e.palette.background.paper}}}));var Y=function(e){var t=X(),n=Object(a.useState)(Q),o=Object(j.a)(n,1)[0];return Object(g.jsx)(U.a,{open:e.open,onClose:e.close,children:Object(g.jsx)(D.a,{in:e.open,children:Object(g.jsx)(K,{style:o,class:t.paper,event:e.event,length:e.length,lastBook:e.lastBook,bookHandler:e.bookHandler})})})},Z=Object(m.a)((function(e){return{root:{backgroundColor:k.a[700],"&:hover":{backgroundColor:k.a[800],color:"#000"}}}}))(v.a);var $=function(e){return Object(g.jsx)(Z,{onSubmit:e.close,type:"submit",size:"small",form:"updateForm",disableElevation:!0,children:"Update"})},_=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));var ee=function(e){var t=_(),n=Object(a.useState)(e.bookInfo.title),o=Object(j.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)(e.bookInfo.rating),s=Object(j.a)(i,2),l=s[0],u=s[1];return Object(g.jsxs)(z.a,{style:e.style,className:e.class,children:[Object(g.jsxs)(z.a,{display:"flex",justifyContent:"space-between",py:1,px:2,children:[Object(g.jsxs)("h2",{children:["Update ",e.bookInfo.title]}),Object(g.jsx)(z.a,{my:"auto",children:Object(g.jsx)(q.a,{onClick:e.event})})]}),Object(g.jsx)(V.a,{}),Object(g.jsx)(z.a,{p:1,children:Object(g.jsxs)("form",{noValidate:!0,autoComplete:"off",id:"updateForm",onSubmit:function(t){t.preventDefault();var n={id:e.bookInfo.id,title:r,rating:l};""===r||""===l?alert("Please fill out all the fields"):l<0||l>10?alert("Please assign rating between 0 and 10"):(e.bookHandler(n),e.event(!1))},children:[Object(g.jsx)(z.a,{mx:1,my:2,children:Object(g.jsx)(W.a,{id:"outlined-basic",size:"small",label:"Title",fullWidth:!0,variant:"outlined",value:r,onChange:function(e){return c(e.target.value)}})}),Object(g.jsx)(z.a,{mx:1,my:2,children:Object(g.jsx)(W.a,{id:"outlined-basic",label:"Rating",type:"number",size:"small",fullWidth:!0,variant:"outlined",inputProps:{min:"0",max:"10",step:"1"},value:l,onChange:function(e){return u(e.target.value)}})}),Object(g.jsxs)(z.a,{className:t.root,children:[Object(g.jsx)($,{close:e.event}),Object(g.jsx)(J,{close:e.event})]})]})})]})};function te(){return{top:"20%",left:"50%",transform:"translate(-50%, -50%)"}}var ne=Object(E.a)((function(e){return{paper:{width:"90%",maxWidth:600,position:"absolute",outline:"none",backgroundColor:e.palette.background.paper}}}));var ae=function(e){var t=ne(),n=Object(a.useState)(te),o=Object(j.a)(n,1)[0];return Object(g.jsx)(U.a,{open:e.open,onClose:e.close,children:Object(g.jsx)(D.a,{in:e.open,children:Object(g.jsx)(ee,{style:o,class:t.paper,event:e.event,length:e.length,lastBook:e.lastBook,bookHandler:e.bookHandler,bookInfo:e.bookInfo})})})},oe=Object(m.a)((function(e){return{root:{width:120,color:"#fff",backgroundColor:R.a[500],"&:hover":{backgroundColor:R.a[700]}}}}))(v.a);var re=function(e){return Object(g.jsx)(oe,{onClick:e.open,disableElevation:!0,children:"Add Item"})},ce=n(43),ie=n.n(ce),se="https://restful-book-server.herokuapp.com/books";var le=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),c=Object(j.a)(r,2),l=c[0],d=c[1],f=Object(a.useState)(!1),O=Object(j.a)(f,2),h=O[0],p=O[1],x=Object(a.useState)({}),v=Object(j.a)(x,2),k=v[0],m=v[1],C=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.get(se);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){m(e),p(!0)},w=function(){var e=Object(b.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(s.a)({},t),e.next=3,ie.a.post(se,a);case 3:r=e.sent,o([].concat(Object(i.a)(n),[r.data]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.put("".concat(se,"/").concat(t.id),t);case 2:a=e.sent,r=a.data,c=r.id,r.title,r.rating,o(n.map((function(e){return e.id===c?Object(s.a)({},a.data):e})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.a.delete("".concat(se,"/").concat(t));case 2:a=n.filter((function(e){return e.id!==t})),o(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:(t=e.sent)&&o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){localStorage.setItem("books",JSON.stringify(n))}),[n]),Object(g.jsxs)(z.a,{width:"100%",children:[Object(g.jsx)(T,{}),Object(g.jsxs)(N.a,{children:[Object(g.jsxs)(z.a,{my:2,display:"flex",justifyContent:"space-between",className:"list-header",children:[Object(g.jsx)("h1",{children:"Book List"}),Object(g.jsx)(re,{open:function(){return d(!0)}}),Object(g.jsx)(Y,{open:l,event:function(){return d(!1)},length:n.length,lastBook:n.slice(-1)[0],bookHandler:w}),Object(g.jsx)(ae,{open:h,event:function(){return p(!1)},lastBook:n.slice(-1)[0],bookInfo:k,bookHandler:S})]}),n.length>0?Object(g.jsx)(H,{books:n,getBookId:B,handleEdit:y}):Object(g.jsx)("h1",{children:"This is a CRUD RESTful API application."})]})]})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(le,{})}),document.getElementById("root")),ue()},96:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.41ee1369.chunk.js.map