(this["webpackJsonpciclo-componentes"]=this["webpackJsonpciclo-componentes"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,a,e){},,function(t,a,e){},function(t,a,e){},function(t,a,e){},function(t,a,e){},function(t,a,e){},function(t,a,e){"use strict";e.r(a);var n=e(1),i=e.n(n),s=e(9),o=e.n(s),r=e(2),c=e(3),u=e(5),l=e(4),h=e(6),p=e(7);e(14);function d(){return(d=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function f(t,a){if(null==t)return{};var e,n,i=function(t,a){if(null==t)return{};var e,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||(i[e]=t[e]);return i}(t,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)e=s[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var j=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),v=n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function b(t,a){var e=t.title,i=t.titleId,s=f(t,["title","titleId"]);return n.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"18px",height:"18px",ref:a,"aria-labelledby":i},s),e?n.createElement("title",{id:i},e):null,j,v)}var g=n.forwardRef(b),O=(e.p,e(0)),m=function(t){Object(u.a)(e,t);var a=Object(l.a)(e);function e(){return Object(r.a)(this,e),a.apply(this,arguments)}return Object(c.a)(e,[{key:"apagar",value:function(){var t=this.props.indice;this.props.apagarNota(t)}},{key:"render",value:function(){return Object(O.jsxs)("section",{className:"card-nota",children:[Object(O.jsxs)("header",{className:"card-nota_cabecalho",children:[Object(O.jsx)("h3",{className:"card-nota_titulo",children:this.props.titulo}),Object(O.jsx)(g,{onClick:this.apagar.bind(this)}),Object(O.jsx)("h4",{children:this.props.categoria})]}),Object(O.jsx)("p",{className:"card-nota_texto",children:this.props.texto})]})}}]),e}(n.Component),_=(e(16),function(t){Object(u.a)(e,t);var a=Object(l.a)(e);function e(){var t;return Object(r.a)(this,e),(t=a.call(this)).state={notas:[]},t._novasNotas=t._novasNotas.bind(Object(p.a)(t)),t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.notas.inscrever(this._novasNotas)}},{key:"componentWillUnmount",value:function(){this.props.notas.desinscrever(this._novasNotas)}},{key:"_novasNotas",value:function(t){this.setState(Object(h.a)(Object(h.a)({},this.state),{},{notas:t}))}},{key:"render",value:function(){var t=this;return Object(O.jsx)("ul",{className:"lista-notas",children:this.state.notas.map((function(a,e){return Object(O.jsx)("li",{className:"lista-notas_item",children:Object(O.jsx)(m,{indice:e,apagarNota:t.props.apagarNota,titulo:a.titulo,texto:a.texto,categoria:a.categoria})},e)}))})}}]),e}(n.Component)),x=(e(17),function(t){Object(u.a)(e,t);var a=Object(l.a)(e);function e(t){var n;return Object(r.a)(this,e),(n=a.call(this,t)).titulo="",n.texto="",n.categoria="Sem Categoria",n.state={categorias:[]},n._novasCategorias=n._novasCategorias.bind(Object(p.a)(n)),n}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.categorias.inscrever(this._novasCategorias)}},{key:"componentWillUnmount",value:function(){this.props.categorias.desinscrever(this._novasCategorias)}},{key:"_novasCategorias",value:function(t){this.setState(Object(h.a)(Object(h.a)({},this.state),{},{categorias:t}))}},{key:"_handleMudancaCategoria",value:function(t){t.stopPropagation(),this.categoria=t.target.value}},{key:"_handleMudancaTitulo",value:function(t){t.stopPropagation(),this.titulo=t.target.value}},{key:"_handleMudancaTexto",value:function(t){t.stopPropagation(),this.texto=t.target.value}},{key:"_criarNota",value:function(t){t.preventDefault(),t.stopPropagation(),this.props.criarNota(this.titulo,this.texto,this.categoria)}},{key:"render",value:function(){return Object(O.jsxs)("form",{className:"form-cadastro",onSubmit:this._criarNota.bind(this),children:[Object(O.jsxs)("select",{onChange:this._handleMudancaCategoria.bind(this),className:"form-cadastro_input",children:[Object(O.jsx)("option",{children:"Sem Categoria"}),this.state.categorias.map((function(t,a){return Object(O.jsx)("option",{children:t},a)}))]}),Object(O.jsx)("input",{type:"text",placeholder:"T\xedtulo",className:"form-cadastro_input",onChange:this._handleMudancaTitulo.bind(this)}),Object(O.jsx)("textarea",{rows:15,placeholder:"Escreva sua nota...",className:"form-cadastro_input",onChange:this._handleMudancaTexto.bind(this)}),Object(O.jsx)("button",{className:"form-cadastro_input form-cadastro_submit",children:"Criar Nota"})]})}}]),e}(n.Component)),y=(e(18),function(t){Object(u.a)(e,t);var a=Object(l.a)(e);function e(){var t;return Object(r.a)(this,e),(t=a.call(this)).state={categorias:[]},t._novasCategorias=t._novasCategorias.bind(Object(p.a)(t)),t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.categorias.inscrever(this._novasCategorias)}},{key:"componentWillUnmount",value:function(){this.props.categorias.desinscrever(this._novasCategorias)}},{key:"_novasCategorias",value:function(t){this.setState(Object(h.a)(Object(h.a)({},this.state),{},{categorias:t}))}},{key:"_handleEventoInput",value:function(t){if("Enter"==t.key){var a=t.target.value;this.props.adicionarCategoria(a)}}},{key:"render",value:function(){return Object(O.jsxs)("section",{className:"lista-categorias",children:[Object(O.jsx)("ul",{className:"lista-categorias_lista",children:this.state.categorias.map((function(t,a){return Object(O.jsx)("li",{className:"lista-categorias_item",children:t},a)}))}),Object(O.jsx)("input",{type:"text",className:"lista-categorias_input",placeholder:"Adicionar Categoria",onKeyUp:this._handleEventoInput.bind(this)})]})}}]),e}(n.Component)),k=(e(19),e(20),function(){function t(){Object(r.a)(this,t),this.categorias=[],this._inscritos=[]}return Object(c.a)(t,[{key:"inscrever",value:function(t){this._inscritos.push(t)}},{key:"desinscrever",value:function(t){console.log(this._inscritos.length),this._inscritos=this._inscritos.filter((function(a){return a!==t})),console.log(this._inscritos.length)}},{key:"notificar",value:function(){var t=this;this._inscritos.forEach((function(a){a(t.categorias)}))}},{key:"adicionarCategoria",value:function(t){this.categorias.push(t),this.notificar()}}]),t}()),N=function(){function t(){Object(r.a)(this,t),this.notas=[],this._inscritos=[]}return Object(c.a)(t,[{key:"adicionarNota",value:function(t,a,e){var n=new C(t,a,e);this.notas.push(n),this.notificar()}},{key:"apagarNota",value:function(t){this.notas.splice(t,1),this.notificar()}},{key:"inscrever",value:function(t){this._inscritos.push(t)}},{key:"desinscrever",value:function(t){this._inscritos=this._inscritos.filter((function(a){return a!==t}))}},{key:"notificar",value:function(){var t=this;this._inscritos.forEach((function(a){a(t.notas)}))}}]),t}(),C=function t(a,e,n){Object(r.a)(this,t),this.titulo=a,this.texto=e,this.categoria=n},w=function(t){Object(u.a)(e,t);var a=Object(l.a)(e);function e(){var t;return Object(r.a)(this,e),(t=a.call(this)).categorias=new k,t.notas=new N,t}return Object(c.a)(e,[{key:"render",value:function(){return Object(O.jsxs)("section",{className:"conteudo",children:[Object(O.jsx)(x,{categorias:this.categorias,criarNota:this.notas.adicionarNota.bind(this.notas)}),Object(O.jsxs)("main",{className:"conteudo-principal",children:[Object(O.jsx)(y,{adicionarCategoria:this.categorias.adicionarCategoria.bind(this.categorias),categorias:this.categorias}),Object(O.jsx)(_,{apagarNota:this.notas.apagarNota.bind(this.notas),notas:this.notas})]})]})}}]),e}(n.Component);o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a8eb775c.chunk.js.map