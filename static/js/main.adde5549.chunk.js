(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=a(6),s=a(1),i=a(2),u=a(4),h=a(3),d=a(5),m=(a(14),a(15),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.reverseClick,a=e.alphabetSort,n=e.lengthSort,r=e.resetClick,l=e.handleChange;return o.a.createElement("div",{className:"functionalityBlock"},o.a.createElement("div",{className:"yellow ui vertical buttons"},o.a.createElement("button",{type:"button",onClick:t,className:"ui button"},"Reverse"),o.a.createElement("button",{type:"button",onClick:a,className:"ui button"},"Alphabet sort"),o.a.createElement("button",{type:"button",onClick:n,className:"ui button"},"Length sort")),o.a.createElement("button",{type:"button",onClick:r,className:"negative ui button"},"Reset"),o.a.createElement("select",{name:"length",id:"lenghtChoose",onChange:l,className:"ui selection dropdown"},o.a.createElement("option",{selected:!0,value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10")))}}]),t}(o.a.Component)),p=(a(16),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.goods,a=e.reverseClick,n=e.alphabetSort,r=e.lengthSort,l=e.resetClick,c=e.handleChange;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"ui header"},"LIST OF GOODS"),o.a.createElement("div",{className:"goods"},o.a.createElement(m,{reverseClick:a,alphabetSort:n,lengthSort:r,resetClick:l,handleChange:c}),o.a.createElement("div",{className:"ui inverted segment"},o.a.createElement("div",{className:"ui inverted relaxed divided list"},t.map(function(e){return o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"header"},e)))})))))}}]),t}(o.a.Component)),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=[].concat(g),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={hidden:!1,goods:g,optionState:1},a.startClick=function(){a.setState({hidden:!0})},a.reverseClick=function(){a.setState({goods:a.state.goods.reverse()})},a.alphabetSort=function(){a.setState({goods:a.state.goods.sort()})},a.lengthSort=function(){a.setState({goods:a.state.goods.sort(function(e,t){return t.replace(/ /gi,"").length-e.replace(/ /gi,"").length})})},a.resetClick=function(){a.setState({goods:Object(c.a)(v)})},a.handleChange=function(e){var t=e.target.value;a.setState({goods:Object(c.a)(v).filter(function(e){return e.length>=t})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("button",{type:"button",onClick:this.startClick,className:this.state.hidden?"hiddenButton":"positive ui button"},"Press to START!"),this.state.hidden&&o.a.createElement(p,{goods:this.state.goods,reverseClick:this.reverseClick,alphabetSort:this.alphabetSort,lengthSort:this.lengthSort,resetClick:this.resetClick,handleChange:this.handleChange}))}}]),t}(o.a.Component);l.a.render(o.a.createElement(b,{test:123}),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.adde5549.chunk.js.map