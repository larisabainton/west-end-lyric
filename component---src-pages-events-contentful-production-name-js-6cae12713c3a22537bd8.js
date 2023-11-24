"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[144],{1239:function(e,t,n){var a=n(7294);t.Z=e=>{let{ticketsLink:t,id:n}=e;if(t)return a.createElement("div",{className:"tickets-button",id:n},a.createElement("a",{target:"_blank",rel:"noreferrer",href:t},"Get Tickets"))}},7397:function(e,t,n){n.r(t),n.d(t,{Head:function(){return L},default:function(){return w}});var a=n(7294),r=(n(9190),n(8032)),s=n(8872),i=n(1084),o=n(1883);const c=(e,t)=>t.find((t=>t.node.pageContext&&t.node.pageContext.name===e)).node.path,l=(e,t)=>{const n=((e,t)=>{const n=[];return e.forEach((e=>e.roles&&e.roles.forEach((a=>{const r=n.find((e=>e&&e.name==a.castMember.name));r?r.dates.push(e.eventDate):n.push({roleName:a.roleName,name:a.castMember.name,headshot:a.castMember.headshot,dates:[e.eventDate],link:c(a.castMember.name,t)})})))),n.length&&n.sort(((e,t)=>e.roleName<t.roleName?-1:e.roleName>t.roleName?1:0)),n})(e,t);if(n)return a.createElement("div",{className:"cast-section"},a.createElement("div",{className:"production_artists_cast-title section-title"},"Cast"),a.createElement("ul",{className:"cast-list"},n.map(((e,t)=>{let{name:n,roleName:s,headshot:i,dates:c,link:l}=e;const m=c.sort().map((e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"}))),d=(0,r.c)(i);return a.createElement("li",{className:"cast-member artist",key:"cast-member-"+t},a.createElement(r.G,{className:"circular-headshot",image:d,alt:n+" headshot"}),a.createElement("div",{className:"artist-text"},a.createElement("div",{className:"cast-member_role"},s),a.createElement(o.Link,{className:"cast-member_name artist-name",to:l},n),a.createElement("div",{className:"cast-member_dates"},a.createElement("div",null,"Performing"),a.createElement("div",null,m.join(", ")))))}))))};var m=e=>{let{events:t,staff:n,pages:s}=e;if(t[0].roles)return a.createElement("div",{className:"production_artists",id:"#production-artists"},((e,t)=>{if(e&&e.length)return a.createElement("div",{className:"staff-section"},a.createElement("div",{className:"production_artists_staff-title section-title"},"Creative Team"),a.createElement("ul",{className:"staff"},e.sort(((e,t)=>e.title-t.title)).map(((e,n)=>{const s=e.personnel.name,i=(0,r.c)(e.personnel.headshot),l=e.title,m=c(s,t);return a.createElement("li",{className:"staff-member_info artist",key:"staff-member-"+n},a.createElement(r.G,{className:"circular-headshot",image:i,alt:s+" headshot"}),a.createElement("div",{className:"artist-text"},a.createElement("div",{className:"staff-member_title"},l),a.createElement(o.Link,{to:m,className:"staff-member_name artist-name"},s)))}))))})(n,s),l(t,s))},d=n(1239);var u=e=>{let{events:t}=e;if(t.length)return a.createElement("div",{className:"production_dates"},t.sort(((e,t)=>new Date(e.eventDate)-new Date(t.eventDate))).map(((e,t)=>{let{eventDate:n,ticketsLink:r}=e;return a.createElement("div",{className:"event_date",key:"event_date-"+t},(e=>{const t=new Date(e);return a.createElement("div",{className:"event_date-container"},a.createElement("div",{className:"event_date"},t.toLocaleDateString("en-US",{month:"short",day:"numeric"})," at ",t.toLocaleTimeString("en-US",{hour12:!0,hour:"numeric",minute:"numeric"})))})(n),(e=>{if(e)return a.createElement(d.Z,{ticketsLink:e})})(r))})))},v=Object.defineProperty,f=(e,t,n)=>(((e,t,n)=>{t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),h=new Map,p=new WeakMap,E=0,g=void 0;function b(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(p.has(n)||(E+=1,p.set(n,E.toString())),p.get(n)):"0"):e[t]}`;var n})).toString()}function _(e,t,n={},a=g){if(void 0===window.IntersectionObserver&&void 0!==a){const r=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:s,elements:i}=function(e){let t=b(e),n=h.get(t);if(!n){const a=new Map;let r;const s=new IntersectionObserver((t=>{t.forEach((t=>{var n;const s=t.isIntersecting&&r.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=a.get(t.target))||n.forEach((e=>{e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:a},h.set(t,n)}return n}(n);let o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(t),s.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(i.delete(e),s.unobserve(e)),0===i.size&&(s.disconnect(),h.delete(r))}}a.Component;const k=(e,t)=>{const n=document.getElementById("production_navigation"),a=document.getElementById("navbar-tickets");t.boundingClientRect.bottom<=0?(n.classList.add("sticky"),a&&(a.classList.add("visible"),a.classList.remove("not-visible"))):t.boundingClientRect.bottom>0&&(n.classList.remove("sticky"),a&&(a.classList.add("not-visible"),a.classList.remove("visible")))};var N=e=>{let{ticketsLink:t}=e;const{ref:n}=function({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:s,triggerOnce:i,skip:o,initialInView:c,fallbackInView:l,onChange:m}={}){var d;const[u,v]=a.useState(null),f=a.useRef(),[h,p]=a.useState({inView:!!c,entry:void 0});f.current=m,a.useEffect((()=>{if(o||!u)return;let a;return a=_(u,((e,t)=>{p({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&i&&a&&(a(),a=void 0)}),{root:s,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{a&&a()}}),[Array.isArray(e)?e.toString():e,u,s,r,i,o,n,l,t]);const E=null==(d=h.entry)?void 0:d.target,g=a.useRef();u||!E||i||o||g.current===E||(g.current=E,p({inView:!!c,entry:void 0}));const b=[v,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({onChange:k});if(t)return a.createElement("div",{className:"navigation-wrapper",ref:n},a.createElement("div",{className:"production_navigation",id:"production_navigation"},a.createElement("div",{className:"production_navigation_links"},a.createElement(o.Link,{to:"#production_about"},"About")," |",a.createElement(o.Link,{to:"#production_artists"},"Artists")," |",a.createElement(o.Link,{to:"#production_venues"},"Venue")),a.createElement(d.Z,{ticketsLink:t,id:"navbar-tickets"})))};var y=e=>{let{events:t}=e;const n=t.every((e=>{let{venue:n}=e;return n.name===t[0].venue.name}));return a.createElement("div",{className:"production_venues",id:"production_venues"},a.createElement("div",{className:"production_venues_title section-title"},n?"Venue":"Venues"),a.createElement("ul",{className:"production_venues_list"},t.sort(((e,t)=>new Date(e.eventDate)-new Date(t.eventDate))).map(((e,t)=>{let{venue:n,eventDate:s}=e;const{name:i,address:o,website:c,photo:l}=n;return a.createElement("li",{className:"production_venues_list-item",key:"production-venue-"+t},a.createElement(r.G,{className:"venue_image",image:(0,r.c)(l),alt:i+" image"}),a.createElement("a",{className:"production_venue-name",href:c},i),a.createElement("div",{className:"production_venue-address"},o),a.createElement("div",null,new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric"})))}))))};var w=e=>{let{data:t}=e;const n=t.contentfulProduction,o=t.allSitePage.edges,{events:c,longDescription:l,name:d,productionPhoto:v,staff:f}=n;return a.createElement(i.Z,null,a.createElement("main",{className:"production-page"},(e=>e&&a.createElement(r.G,{className:"production_cover-photo",image:(0,r.c)(e),style:{position:"absolute"},alt:""}))(v),a.createElement("div",{className:"production_title"},d),a.createElement(u,{events:c}),a.createElement(N,{ticketsLink:c[0].ticketsLink}),a.createElement("div",{className:"production_about",id:"production_about"},l&&(0,s.Z)(l)),a.createElement(m,{pages:o,events:c,staff:f}),a.createElement(y,{events:c})))};const L=e=>{let{data:t}=e;return a.createElement("title",null,"West End Lyric | "+t.contentfulProduction.name)}}}]);
//# sourceMappingURL=component---src-pages-events-contentful-production-name-js-6cae12713c3a22537bd8.js.map