(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(68)},36:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(36),t(3)),s=t(4),i=t(6),m=t(5),u=t(7),p=t(70),h=t(72),d=t(71),b=t(8),f=t.n(b),v=t(12),E=t(29),y=t(17),g=t(13),N=t.n(g),j=r.a.createContext(),C=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return C(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=j.Consumer,w=t(69),x=(t(59),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.handleDelete=function(){var e=Object(v.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.handleClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.showContactInfo,t=this.props.contact,n=t.id,c=t.name,o=t.email,l=t.phone;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3 shadow-sm"},r.a.createElement("h4",{className:"m-0"},c," ",r.a.createElement("i",{onClick:e.handleClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:function(){e.handleDelete(n,s)},className:"fas fa-times text-danger float-right",style:{cursor:"pointer"}}),r.a.createElement(w.a,{to:"contact/edit/".concat(n)},r.a.createElement("i",{className:"fas fa-pencil-alt text-dark mr-3 float-right",style:{cursor:"pointer"}}))),a?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone: ",l)):null)})}}]),a}(n.Component)),S=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),a}(n.Component),A=t(14),T=t(27),D=t.n(T),P=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a,": ")," ",s&&r.a.createElement("span",{className:"invalid-feedback d-inline"},s),r.a.createElement("input",{onChange:l,type:o,name:t,className:D()("form-control form-control-lg",{"is-invalid":s}),value:n,placeholder:c}))};P.defaultProps={type:"text"};var q=P,_=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required."}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required."}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required."}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header font-weight-bold"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){e.onSubmit(l,a)}},r.a.createElement(q,{label:"Name",name:"name",value:t,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",value:n,placeholder:"Enter Email...",onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-block col-md-4 mx-auto"},"Add Contact"))))})}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required."}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required."}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required."}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a,t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header font-weight-bold"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){e.onSubmit(l,a)}},r.a.createElement(q,{label:"Name",name:"name",value:t,placeholder:"Enter Name...",onChange:e.onChange,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",value:n,placeholder:"Enter Email...",onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",value:c,placeholder:"Enter Phone...",onChange:e.onChange,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-block col-md-4 mx-auto"},"Update Contact"))))})}}]),a}(n.Component),M=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{className:"navbar-brand",to:"/"},e.branding),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(w.a,{className:"nav-link",to:"/"},r.a.createElement("i",{className:"fas fa-home"})," Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item ml-4"},r.a.createElement(w.a,{className:"nav-link",to:"/contact/add"},r.a.createElement("i",{className:"fas fa-plus","aria-hidden":"true"})," Add")),r.a.createElement("li",{className:"nav-item ml-4"},r.a.createElement(w.a,{className:"nav-link",to:"/about"},r.a.createElement("i",{className:"fas fa-question","aria-hidden":"true"})," About")),r.a.createElement("li",{className:"nav-item ml-4"},r.a.createElement(w.a,{className:"nav-link",to:"/test"},"Test"))))))};M.defaultProps={branding:"Contact Manager"};var F=M,L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))},B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",body:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(a){return e.setState({title:a.title,body:a.body})})}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,t))}}]),a}(n.Component),J=(t(63),t(65),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{path:"/contact/add",component:_}),r.a.createElement(d.a,{path:"/contact/edit/:id",component:I}),r.a.createElement(d.a,{path:"/about",component:L}),r.a.createElement(d.a,{path:"/test",component:B}),r.a.createElement(d.a,{component:U}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.64e58724.chunk.js.map