(this["webpackJsonpfrontend-applications"]=this["webpackJsonpfrontend-applications"]||[]).push([[0],{128:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(3),i=n.n(a),c=n(36),o=n.n(c),s=(n(128),n(5)),u=n(1),l=20,d=20,f=30,h=40,g=700-h-d,p=400-l-f,m=u.j().range([0,g]).padding(.1),j=u.k().range([p,0]);var b="https://opendata.rdw.nl/resource/b3us-f26s.json?$limit=90000",v="https://opendata.rdw.nl/resource/t5pc-eb34.json?$limit=90000",k="maximumvehicleheight",x=n(2),w=n.n(x),O=n(39);function z(e,t){return y.apply(this,arguments)}function y(){return(y=Object(O.a)(w.a.mark((function e(t,n){var r,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return r=e.sent,e.next=5,n;case 5:return a=e.sent,i=[],r.forEach((function(e){a.forEach((function(t){if(e.areaid===t.areaid){var n=[parseFloat(t.location.longitude),parseFloat(t.location.latitude)];i.push({areamanagerId:e.areamanagerid,areaId:e.areaid,capacity:parseFloat(e.capacity),chargingpointCapacity:e.chargingpointcapacity,disabledAccess:e.disabledaccess,maximumVehicleHeight:e.maximumvehicleheight,limitedAccess:e.limitedaccess,location:n,areaDesc:t.areadesc})}}))})),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=u.l("#bar").attr("width",g+h+d).attr("height",p+l+f).append("g").attr("transform","translate("+h+","+l+")");function t(e){return fetch(e)}z(t(b).then((function(e){return e.json()})).then((function(e){var t;return t=k,e.filter((function(e){return e[t]>0}))})),t(v).then((function(e){return e.json()})).then((function(e){return e}))).then((function(t){return function(t){var n=function(e){return u.f(e,(function(e){return e})).map((function(e){var t=Object(s.a)(e,2),n=t[0],r=t[1];return{name:n,amount:u.i(r,(function(e){return e})).length}}))}((r=t,a="maximumVehicleHeight",r.map((function(e){return e[a]}))));var r,a;m.domain(n.map((function(e){return e.name})).sort(u.a)),j.domain([0,u.h(n,(function(e){return e.amount}))]),e.selectAll(".bar").data(n).enter().append("rect").attr("class","bar").attr("x",(function(e){return m(e.name)})).attr("width",m.bandwidth()).attr("y",(function(e){return j(e.amount)})).attr("height",(function(e){return p-j(e.amount)})).attr("class",(function(e){return function(e){return parseInt(e.name)<=200?"redBar":"greenBar"}(e)})),e.append("g").attr("transform","translate(0,"+p+")").call(u.b(m)),e.append("g").call(u.c(j))}(t),t}))};var H=function(){return Object(a.useEffect)((function(){I()}),[]),Object(r.jsx)("svg",{id:"bar"})},A=window.localStorage;function E(){var e=JSON.parse(A.getItem("zoom"));if(e)return"translate("+e.x+","+e.y+") scale("+e.k+")"}u.l("#map");var F,C=u.d().center([6.36,52.4]).scale(7e3),D=u.e().projection(C),S=u.l("article").append("div").attr("class","focus");function B(e){return e>1e3?10:e<1e3&&e>700?8:e<700&&e>500?6:4}function J(e,t){S.html(t.areaDesc+"<br> Capacity: "+t.capacity),S.style("left",e.pageX+"px").style("top",e.pageY+10+"px").attr("class","focus")}function V(){S.attr("class","unfocus")}function M(e,t){var n;t.selectAll("svg g").attr("transform",e.transform),F=e.transform,n=F,A.setItem("zoom",JSON.stringify(n))}var P=function(){var e=u.l("#map");u.g("https://gist.githubusercontent.com/larsbouwens/1afef9beb0c3df0e4b24/raw/5ed7eb4517eee5737a4cb4551558e769ed8da41a/nl.json").then((function(t){e.selectAll("#paths").selectAll("path").data(t.features).enter().append("path").attr("d",D)})),e.selectAll("g").attr("transform",E),e.call(u.m().scaleExtent([1,4]).translateExtent([[-200,-200],[1e3,800]]).on("zoom",(function(t){return M(t,e)})))};var L=function(){var e=u.l("#map");function t(e){return fetch(e)}z(t(b).then((function(e){return e.json()})).then((function(e){var t;return t=k,e.filter((function(e){return e[t]>0}))})),t(v).then((function(e){return e.json()})).then((function(e){return e}))).then((function(t){var n;return n=t,e.select("#circles").selectAll("circle").data(n).enter().append("circle").attr("class",(function(e){return e.maximumVehicleHeight})).attr("cx",(function(e){return C(e.location)[0]})).attr("cy",(function(e){return C(e.location)[1]})).attr("r",(function(e){return B(e.capacity)})).attr("class",(function(e){return function(e){return e.maximumVehicleHeight<=200?"redDot":"greenDot"}(e)})).on("mouseover",(function(t){return J(t,e)})).on("mouseout",(function(e){return V()})),t})),console.log("hallo")};var N=function(){return Object(a.useEffect)((function(){P(),L()}),[]),Object(r.jsxs)("svg",{id:"map",children:[Object(r.jsx)("g",{id:"paths"}),Object(r.jsx)("g",{id:"circles"})]})};n(130);var T=function(){return Object(r.jsxs)("article",{children:[Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{children:"Met een Hummer in de parkeergarage"}),Object(r.jsx)("p",{children:"Parkeergarages zijn in elke grote stad te vinden, en worden het hele jaar door gebruikt door iedereen. Maar wat nou als je een grote auto hebt, pas je dan nog wel in de meeste parkeergarages?"}),Object(r.jsx)("p",{children:"Een hummer is een voorbeeld van zo een grote auto, met maar liefst een hoogte van iets hoger dan 2 meter. In dit korte artikel heb ik uitgezogd in welke parkeergarages nog wel en niet geparkeerd kan worden met een Hummer."})]}),Object(r.jsx)("h2",{children:"Even een snel overzicht"}),Object(r.jsx)(H,{}),Object(r.jsx)("p",{children:"Hierboven staat een grafiek waarop alle hoogtes van parkeergarages staan. Zoals je ziet zijn er een heel aantal garages waar de Hummer niet in past."}),Object(r.jsx)("h2",{children:"In kaart gebracht"}),Object(r.jsx)("p",{children:"In welke steden is het dan wel mogelijk om zonder te veel stress te parkeren? Op de map hieronder is te zien waar de parkeergarages liggen waar je kan parkeren met een Hummer of ander voertuig dat hoger is dan 2 meter."}),Object(r.jsx)(N,{}),Object(r.jsx)("p",{children:"Zoals u hierboven kan zien zijn er nogsteeds een aantal parkeermogelijkheden voor een Hummer. In Amsterdam zijn er bijvoorbeeld een aantal kleine garages die geschikt zijn, maar ook in de grote steden als Rotterdam en Utrecht zijn genoeg mogelijkheden. In Friesland is zelfs elke parkeerplaats hoog genoeg!"})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),Z()}},[[131,1,2]]]);
//# sourceMappingURL=main.51efaf07.chunk.js.map