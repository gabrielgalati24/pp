(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(82)},51:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/Ubuntu-Bold.e00e2a77.ttf"},80:function(e,t,a){e.exports=a.p+"static/media/SpaceMono-Regular.52eb73db.ttf"},81:function(e,t,a){e.exports=a.p+"static/media/Merriweather-Regular.c97a9fc2.ttf"},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),s=a.n(o),c=(a(51),a(3)),l=a(4),i=a(5),u=a(6),m=a(12),p=a.n(m),d=a(15),h=a(40),f=a(1),v=new function e(){Object(c.a)(this,e),Object(f.h)(this,{loading:!0,isLoggedIn:!1,username:""})},b=a(17),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),a}(r.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),a}(r.a.Component),j=a(11),y=a.n(j),O="http://97b04f6b0765.ngrok.io",w=a(26),x=Object(w.a)(),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={username:"",password:"",dat:"",buttonDisabled:!1},e}return Object(l.a)(a,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(b.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"onSubmit",value:function(){this.state.email,this.state.password;y.a.post("".concat("http://localhost:4000","/api/users/login"),{name:this.state.username,password:this.state.password}).then((function(e){e.data.login?(x.push("/nomina"),window.location.reload(!0)):e.data.login||alert("usario incorrecto")})).catch((function(e){alert("usario incorrecto"),console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},r.a.createElement("h3",{className:"Loginh3"},'Bienvenido a "Empresa"'),r.a.createElement(E,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(E,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement("div",{className:"boton"},r.a.createElement(g,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.onSubmit()}})),r.a.createElement("br",null),r.a.createElement("div",null))}}]),a}(r.a.Component),N=(a(69),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"applications/json","Content-Type":"applications/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(v.loadin=!1,v.isLoggedIn=!0,v.username=a.username):(v.loading=!1,v.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),v.loading=!1,v.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"applications/json","Content-Type":"applications/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success&&(v.isLoggedIn=!1,v.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return v.loading?r.a.createElement("div",{className:"LoginCSS h-100 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"containerLogin"},"Cargando, porfavor espere...")):v.isLoggedIn?r.a.createElement("div",{className:"LoginCSS h-100 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"containerLogin"},"Bienvenido ",v.username)):r.a.createElement("div",{className:"LoginCSS h-100 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"containerLogin"},r.a.createElement(k,null)))}}]),a}(r.a.Component)),C=Object(h.a)(N),L=a(7),S=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",response:"",buttonDisabled:!1},n}return Object(l.a)(a,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(b.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",response:"",buttonDisabled:!1})}},{key:"onSubmit",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:this.state.username,email:this.state.password},e.next=3,(a=t,y.a.post("".concat(O,"/api/users/register"),{email:a.email,name:a.password}).then((function(e){console.log("Registered")}))).then((function(e){console.log(e),e&&alert("asdsd")}));case 3:this.setState.dat=this.state.username,console.log(this.state.dat);case 5:case"end":return e.stop()}var a}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},"Register",r.a.createElement(E,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(E,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(E,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(g,{text:"Registar",disabled:this.state.buttonDisabled,onClick:function(){return e.onSubmit()}}),r.a.createElement("div",null,r.a.createElement(L.b,{to:{pathname:"/"}},r.a.createElement("button",{className:""},"login"))))}}]),a}(r.a.Component),I=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"sistema de nomina vyza"))}}]),a}(n.Component),V=a(8),R=(a(74),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"footer"},r.a.createElement("p",null,"copyright vyza"))}}]),a}(n.Component)),D=a(41),B=(a(75),a(42)),F=(a(76),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-v1"},r.a.createElement("div",{className:"dropdown-v1"},r.a.createElement("button",{className:"dropbtn-v1"},"archivo",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("div",{className:"dropdown-content-v1"},r.a.createElement("a",{href:"#"},"respaldo de datos"),r.a.createElement("a",{href:"#"},"recuperacion de datos"),r.a.createElement("a",{href:"#"},"impresora"))),r.a.createElement("div",{className:"dropdown-v1"},r.a.createElement("button",{className:"dropbtn-v1"},"datos",r.a.createElement("i",{className:"fa fa-caret-down"})),r.a.createElement("div",{className:"dropdown-content-v1"},r.a.createElement(L.b,{to:"/fichadepersonal",className:"navbar-brand",href:"#"},"ficha de personal"),r.a.createElement("a",{href:"#"},"asignacion y deduccion"),r.a.createElement("a",{href:"#"},"Prestamo"))),r.a.createElement("a",{href:"#"},"ejemplo 1"),r.a.createElement("a",{href:"#"},"ejemplo 2"),r.a.createElement("a",{href:"#"},"ejemplo 3"))}}]),a}(n.Component));function M(){var e=Object(D.a)(["\ntext-decoration: none;\n\n&:focus, &:hover, &:visited, &:link, &:active {\n    text-decoration: none;\n}\n"]);return M=function(){return e},e}var A=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,y.a.get("".concat(O,"/api/empleados")).then((function(e){return n.setState({posts:e.data,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}));case 3:console.log(n.state.posts);case 4:case"end":return e.stop()}}),e)}))),n.state={error:null,isLoaded:!1,posts:[]},n}return Object(l.a)(a,[{key:"render",value:function(){Object(B.a)(L.b)(M());var e=this.state,t=e.error,a=e.isLoaded;e.posts;return t?r.a.createElement("div",null,"Error al conectarse al servidor"):a?r.a.createElement("div",null,"Loading ... "):void 0}}]),a}(n.Component),P=(a(77),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={empleado:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("datos"+this.props.location.state.data),e.next=3,y.a.get("".concat(O,"/api/empleados/").concat(this.props.location.state.data)).then((function(e){return t.setState({empleado:e.data[0]})}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.empleado;return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement("div",{className:"cuadro"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col"},"ficha personal : "),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",checked:!0}),r.a.createElement("label",{class:"form-check-label",for:"exampleRadios1"},"V")),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2"}),r.a.createElement("label",{class:"form-check-label",for:"exampleRadios2"},"E")),r.a.createElement("div",{className:"col"},"Cedula de internet:")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},"Apellido: ",e.apellidos),r.a.createElement("div",{className:"col-4"},"Nombres:",e.apellidos)),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-12"},"satus: ",e.cargo),r.a.createElement("p",{className:"col-12"},"cargo: ",e.cargo),r.a.createElement("p",{className:"col-12"},"clase personal:  ",e.clase_personal),r.a.createElement("p",{className:"col-12"},"banco:  ",e.banco),r.a.createElement("p",{className:"col-12"},"N de cuenta:  ",e.numero_de_cuenta))),r.a.createElement(L.b,{to:{pathname:"/md"}},r.a.createElement("button",{className:"btn btn-success"},"modificar")))}}]),a}(n.Component)),U=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={nombres:"",apellidos:"",cedula:"",cargo:"",sexo:"",telefono:""},e}return Object(l.a)(a,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>40||this.setState(Object(b.a)({},e,t))}},{key:"onSubmit",value:function(){y.a.post("".concat("http://localhost:4000","/api/empleados"),{nombres:this.state.nombres,apellidos:this.state.apellidos,cedula:this.state.cedula,cargo:this.state.cargo,sexo:this.state.sexo,telefono:this.state.telefono}).then((function(e){e.data.login?(x.push("/nomina"),window.location.reload(!0),alert("usario creado")):e.data.login||(x.push("/nomina"),window.location.reload(!0),alert("usario creado"))})).catch((function(e){alert("usario creado"),x.push("/nomina"),window.location.reload(!0),console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm "},r.a.createElement("h3",{className:"Loginh3"},"Agregar Nuevo Empleado"),r.a.createElement(E,{type:"text",placeholder:"nombres",value:this.state.nombres?this.state.nombres:"",onChange:function(t){return e.setInputValue("nombres",t)}}),r.a.createElement(E,{type:"text",placeholder:"apellidos",value:this.state.apellidos?this.state.apellidos:"",onChange:function(t){return e.setInputValue("apellidos",t)}}),r.a.createElement(E,{type:"text",placeholder:"cedula",value:this.state.cedula?this.state.cedula:"",onChange:function(t){return e.setInputValue("cedula",t)}}),r.a.createElement(E,{type:"text",placeholder:"cargo",value:this.state.cargo?this.state.cargo:"",onChange:function(t){return e.setInputValue("cargo",t)}}),r.a.createElement(E,{type:"text",placeholder:"sexo",value:this.state.sexo?this.state.sexo:"",onChange:function(t){return e.setInputValue("sexo",t)}}),r.a.createElement(E,{type:"text",placeholder:"telefono",value:this.state.telefono?this.state.telefono:"",onChange:function(t){return e.setInputValue("telefono",t)}}),r.a.createElement("div",{className:"boton"},r.a.createElement(g,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.onSubmit()}})),r.a.createElement("br",null),r.a.createElement("div",null))}}]),a}(n.Component),_=(a(78),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(F,null)),r.a.createElement(L.a,{history:x},r.a.createElement(V.c,null,r.a.createElement(V.a,{path:"/",exact:!0,component:C}),r.a.createElement(V.a,{path:"/register",component:S}),r.a.createElement(V.a,{path:"/nomina",component:I}),r.a.createElement(V.a,{path:"/fichadepersonal",component:A}),r.a.createElement(V.a,{path:"/empleados/:id",component:P}),r.a.createElement(V.a,{path:"/nuevoempleado",component:U})),r.a.createElement(R,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79),a(80),a(81);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.39c6c4ff.chunk.js.map