"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[817],{7332:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var l=n(7294),a=(n(9190),n(8872)),s=n(8032),r=n(1084);t.default=e=>{let{data:t}=e;const{bio:n,headshot:c,name:o}=t.contentfulPersonnel,m=t.allContentfulRole.nodes,i=t.allContentfulStaff.nodes;return l.createElement(r.Z,null,l.createElement("main",{className:"personnel-page"},l.createElement("div",{className:"personnel-headshot-name"},l.createElement(s.G,{image:(0,s.c)(c),className:"circular-headshot",alt:o+" headshot"}),l.createElement("div",{className:"personnel-info"},l.createElement("div",{className:"personnel-name"},o),(e=>{if(e)return l.createElement("div",{className:"team-role"},e.jobTitle)})(t.contentfulTeamMember))),(e=>{if(e.length)return l.createElement("ul",{className:"personnel-list"},l.createElement("div",{className:"personnel-section-title"},"Roles"),e.map(((e,t)=>{let{roleName:n,event:a}=e;const s=a[0].production[0].name,r=new Date(a[0].eventDate).getFullYear();return l.createElement("li",{className:"personnel_role",key:"personnel_role-"+t},n," in ",s,", ",r)})))})(m),(e=>{if(e.length)return l.createElement("ul",{className:"personnel-list"},l.createElement("div",{className:"personnel-section-title"},"Creative Direction"),e.map(((e,t)=>{let{production:n,title:a}=e;const s=n[0].name,r=new Date(n[0].events[0].eventDate).getFullYear();return l.createElement("li",{className:"personnel_staff",key:"personnel_staff-"+t},a," in ",s,", ",r)})))})(i),l.createElement("div",{className:"personnel-bio"},n&&(0,a.Z)(n))))};const c=e=>{let{data:t}=e;return l.createElement("title",null,"West End Lyric | "+t.contentfulPersonnel.name)}}}]);
//# sourceMappingURL=component---src-pages-personnel-contentful-personnel-name-js-701d3247db7b94947153.js.map