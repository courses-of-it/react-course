(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(9),s=a(20),u=a(64),i=a(4),m="[ui] Open modal",d="[ui] Close modal",p="[event] Set Active",f="[event] Add new",v="[event] Clear active event",b="[event] Event updated",E="[event] Event deleted",h="[event] Events loaded",g="[auth] Finish checking login state",O="[auth] Login",j="[auth] Logout",y={modalOpen:!1},N=a(29),w={events:[],activeEvent:null},k={checking:!0},x=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case f:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case v:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case b:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(i.a)(Object(i.a)({},e),{},{events:Object(N.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case g:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case j:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,C=Object(s.e)(x,S(Object(s.a)(u.a))),T=a(36),D=a(8),P=a(13),I=a(24),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(P.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(I.a)({},t.name,t.value)))};return[r,l,o]},_=a(11),L=a.n(_),R=a(19),G="https://mern-calendar-fher.herokuapp.com/api",F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(G,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(G,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},H=a(16),J=a.n(H),M=function(){return{type:g}},U=function(e){return{type:O,payload:e}},B=function(){return{type:j}},X=(a(76),function(){var e=Object(l.b)(),t=A({lEmail:"",lPassword:""}),a=Object(P.a)(t,2),n=a[0],c=a[1],o=A({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),s=Object(P.a)(o,2),u=s[0],i=s[1],m=n.lEmail,d=n.lPassword,p=u.rName,f=u.rEmail,v=u.rPassword1,b=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=d,function(){var e=Object(R.a)(L.a.mark((function e(t){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:c.uid,name:c.name}))):J.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),v!==b)return J.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var a,n,r;console.log("?"),e((a=f,n=v,r=p,function(){var e=Object(R.a)(L.a.mark((function e(t){var c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:o.uid,name:o.name}))):J.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),q=a(54),z=a(22),K=a.n(z),Q=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e((function(e){localStorage.clear(),e(B())}))}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},W={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Y=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))},Z=a(49),$=a.n(Z),ee=a(50),te=a.n(ee),ae=function(){return{type:m}},ne=function(e){return{type:f,payload:e}},re=function(){return{type:v}},ce=function(e){return{type:b,payload:e}},oe=function(e){return{type:h,payload:e}},le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};$.a.setAppElement("#root");var se=K()().minutes(0).seconds(0).add(1,"hours"),ue=se.clone().add(1,"hours"),ie={title:"",notes:"",start:se.toDate(),end:ue.toDate()},me=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(se.toDate()),o=Object(P.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(ue.toDate()),p=Object(P.a)(m,2),f=p[0],v=p[1],b=Object(n.useState)(!0),E=Object(P.a)(b,2),h=E[0],g=E[1],O=Object(n.useState)(ie),j=Object(P.a)(O,2),y=j[0],N=j[1],w=y.notes,k=y.title,x=y.start,S=y.end;Object(n.useEffect)((function(){N(t||ie)}),[t,N]);var C=function(e){var t=e.target;N(Object(i.a)(Object(i.a)({},y),{},Object(I.a)({},t.name,t.value)))},T=function(){a({type:d}),a(re()),N(ie)};return r.a.createElement($.a,{isOpen:e,onRequestClose:T,style:le,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=K()(x),c=K()(S);return r.isSameOrAfter(c)?J.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):k.trim().length<2?g(!1):(a(t?(n=y,function(){var e=Object(R.a)(L.a.mark((function e(t){var a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(ce(n)):J.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(R.a)(L.a.mark((function t(a,n){var r,c,o,l,s;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,V("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:s=t.sent,console.log(s),s.ok&&(e.id=s.evento.id,e.user={_id:c,name:o},console.log(e),a(ne(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),g(!0),void T())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(te.a,{onChange:function(e){u(e),N(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(te.a,{onChange:function(e){v(e),N(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:f,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},de=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(ae()),console.log("e")}},r.a.createElement("i",{className:"fas fa-plus"}))}),pe=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t,a){var n,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,console.log(n),e.prev=2,e.next=5,V("events/".concat(n),{},"DELETE");case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).ok?t({type:E}):J.a.fire("Error",c.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};K.a.locale("es");var fe=Object(q.b)(K.a),ve=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(n.useState)(localStorage.getItem("lastView")||"month"),s=Object(P.a)(o,2),u=s[0],i=s[1];Object(n.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t(oe(Object(N.a)(n.eventos))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(Q,null),r.a.createElement(q.a,{localizer:fe,events:a,startAccessor:"start",endAccessor:"end",messages:W,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#367CF7",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ae())},onSelectEvent:function(t){e({type:p,payload:t})},onView:function(e){i(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(re())},selectable:!0,view:u,components:{event:Y}}),r.a.createElement(de,null),c&&r.a.createElement(pe,null),r.a.createElement(me,null))},be=a(40),Ee=function(e){var t=e.isAuthenticated,a=e.component,n=Object(be.a)(e,["isAuthenticated","component"]);return r.a.createElement(D.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(D.a,{to:"/"}):r.a.createElement(a,e)}}))},he=function(e){var t=e.isAuthenticated,a=e.component,n=Object(be.a)(e,["isAuthenticated","component"]);return r.a.createElement(D.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(D.a,{to:"/login"})}}))},ge=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:n.uid,name:n.name}))):t(M());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere..."):r.a.createElement(T.a,null,r.a.createElement("div",null,r.a.createElement(D.d,null,r.a.createElement(Ee,{exact:!0,path:"/login",component:X,isAuthenticated:!!c}),r.a.createElement(he,{exact:!0,path:"/",component:ve,isAuthenticated:!!c}),r.a.createElement(D.a,{to:"/"}))))},Oe=function(){return r.a.createElement(l.a,{store:C},r.a.createElement(ge,null))};a(114);o.a.render(r.a.createElement(Oe,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},76:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.8f473e24.chunk.js.map