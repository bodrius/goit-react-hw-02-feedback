(this["webpackJsonptask-2"]=this["webpackJsonptask-2"]||[]).push([[0],{11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),l=a(1),u=a(4),i=a(5),s=a(6),d=a(9),b=a(7),m=a(10),k=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.countTotalFeedback,r=e.countPositiveFeedbackPercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Good:",t),c.a.createElement("p",null,"Neutral:",a),c.a.createElement("p",null,"Bad:",n),c.a.createElement("h4",null,"TOTAL: ",o()),c.a.createElement("h4",null,"POSITIVE FEEDBACK:",r()," %"))},E=function(e){var t=e.feedbackOptions;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:t,name:"good",type:"button"},"Good"),c.a.createElement("button",{onClick:t,name:"neutral",type:"button"},"Neutral"),c.a.createElement("button",{onClick:t,name:"bad",type:"button"},"Bad"))},f=function(e){var t=e.message;return c.a.createElement("h3",null,t)},g=a(8),h=a.n(g),p=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("h2",null,t),a)},v={good:0,neutral:0,bad:0},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state=Object(u.a)({},v),a.onHandleClickButton=function(e){var t=e.target.name;a.setState(Object(l.a)({},t,a.state[t]+1))},a.countTotalFeedback=function(){var e=a.state;return e.good+e.neutral+e.bad},a.countPositiveFeedbackPercentage=function(){var e=a.state.good;return Math.round(100*e/a.countTotalFeedback())},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:h.a.container},c.a.createElement(p,{title:"Please leave feedback"},c.a.createElement(E,{feedbackOptions:this.onHandleClickButton})),0===this.countTotalFeedback()?c.a.createElement(f,{message:"No feedback given"}):c.a.createElement(p,{title:"STATISTIC"},c.a.createElement(k,Object.assign({},this.state,{countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage}))))}}]),t}(n.Component);r.a.render(c.a.createElement(F,null),document.getElementById("root"))},8:function(e,t,a){e.exports={container:"statistic_container__9Rk-U"}}},[[11,1,2]]]);
//# sourceMappingURL=main.f8f94b67.chunk.js.map