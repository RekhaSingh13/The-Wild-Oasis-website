(()=>{var e={};e.id=301,e.ids=[301],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},47261:e=>{"use strict";e.exports=require("node:util")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},66676:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>l});var r=s(50482),a=s(69108),A=s(62563),i=s.n(A),n=s(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let l=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,36995)),"/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/about/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,4998))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,57575)),"/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/layout.js"],error:[()=>Promise.resolve().then(s.bind(s,60826)),"/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/error.js"],loading:[()=>Promise.resolve().then(s.bind(s,65016)),"/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,46178)),"/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,4998))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/about/page.js"],d="/about/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},74740:(e,t,s)=>{Promise.resolve().then(s.bind(s,70490)),Promise.resolve().then(s.t.bind(s,31900,23)),Promise.resolve().then(s.t.bind(s,61476,23)),Promise.resolve().then(s.bind(s,74184))},21044:(e,t,s)=>{Promise.resolve().then(s.bind(s,11812))},57315:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,26840,23)),Promise.resolve().then(s.t.bind(s,38771,23)),Promise.resolve().then(s.t.bind(s,13225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,43982,23))},73434:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,31900,23)),Promise.resolve().then(s.bind(s,8944)),Promise.resolve().then(s.bind(s,74498))},19570:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,61476,23))},35303:()=>{},70490:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ReservationProvider:()=>n,useReservation:()=>o});var r=s(95344),a=s(3729);let A=(0,a.createContext)(),i={from:void 0,to:void 0};function n({children:e}){let[t,s]=(0,a.useState)(i);return r.jsx(A.Provider,{value:{range:t,setRange:s,resetRange:()=>s(i)},children:e})}function o(){let e=(0,a.useContext)(A);if(void 0===e)throw Error("Context was used outside provider");return e}},11812:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(95344);function a({error:e,reset:t}){return(0,r.jsxs)("main",{className:"flex justify-center items-center flex-col gap-6",children:[r.jsx("h1",{className:"text-3xl font-semibold",children:"Something went wrong!"}),r.jsx("p",{className:"text-lg",children:e.message}),r.jsx("button",{className:"inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg",onClick:t,children:"Try again"})]})}},15300:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(25036);let a=function(){return r.jsx("div",{className:"spinner"})}},42735:(e,t,s)=>{"use strict";s.d(t,{HT:()=>c,I8:()=>n,a4:()=>d,w7:()=>l,zB:()=>o});var r=s(78537),a=s(37579),A=s(66563);let i={providers:[(0,a.Z)({clientId:process.env.AUTH_GOOGLE_ID,clientSecret:process.env.AUTH_GOOGLE_SECRET})],callbacks:{authorized:({auth:e,request:t})=>!!e?.user,async signIn({user:e,account:t,profile:s}){try{return await (0,A.PT)(e.email)||await (0,A.Az)({email:e.email,fullName:e.name}),!0}catch{return!1}},async session({session:e,user:t}){let s=await (0,A.PT)(e.user.email);return e.user.guestId=s.id,e}},pages:{signIn:"/login"}},{auth:n,signIn:o,signOut:l,handlers:{GET:c,POST:d}}=(0,r.ZP)(i)},66563:(e,t,s)=>{"use strict";s.d(t,{$_:()=>i,Az:()=>g,Gw:()=>u,PT:()=>o,aL:()=>c,bz:()=>d,ee:()=>n,lx:()=>l,ox:()=>h});var r=s(867),a=s(45407),A=s(61024);async function i(e){let{data:t,error:s}=await A.O.from("cabins").select("*").eq("id",e).single();return s&&(console.error(s),(0,r.notFound)()),t}let n=async function(){let{data:e,error:t}=await A.O.from("cabins").select("id, name, maxCapacity, regularPrice, discount, image").order("name");if(t)throw console.error(t),Error("Cabins could not be loaded");return e};async function o(e){let{data:t,error:s}=await A.O.from("guests").select("*").eq("email",e).single();return t}async function l(e){let{data:t,error:s,count:r}=await A.O.from("bookings").select("*").eq("id",e).single();if(s)throw console.error(s),Error("Booking could not get loaded");return t}async function c(e){let{data:t,error:s,count:r}=await A.O.from("bookings").select("id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)").eq("guestId",e).order("startDate");if(s)throw console.error(s),Error("Bookings could not get loaded");return t}async function d(e){let t=new Date;t.setUTCHours(0,0,0,0),t=t.toISOString();let{data:s,error:r}=await A.O.from("bookings").select("*").eq("cabinId",e).or(`startDate.gte.${t},status.eq.checked-in`);if(r)throw console.error(r),Error("Bookings could not get loaded");return s.map(e=>(0,a.D)({start:new Date(e.startDate),end:new Date(e.endDate)})).flat()}async function u(){let{data:e,error:t}=await A.O.from("settings").select("*").single();if(t)throw console.error(t),Error("Settings could not be loaded");return e}async function h(){try{let e=await fetch("https://restcountries.com/v2/all?fields=name,flag");return await e.json()}catch{throw Error("Could not fetch countries")}}async function g(e){let{data:t,error:s}=await A.O.from("guests").insert([e]);if(s)throw console.error(s),Error("Guest could not be created");return t}},61024:(e,t,s)=>{"use strict";s.d(t,{O:()=>r});let r=(0,s(47363).eI)(process.env.SUPABASE_URL,process.env.SUPABASE_KEY)},36995:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o,revalidate:()=>n});var r=s(25036),a=s(2813);let A={src:"/_next/static/media/about-1.58c75042.jpg",height:2e3,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ4U/wD/xAAdEAACAQQDAAAAAAAAAAAAAAABBAIAAwUREhUi/9oACAEBAAE/AO5bdxlxabQO4GHAAehX/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAIf/aAAgBAgEBPwBGutO//8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/ACAQN//Z",blurWidth:8,blurHeight:8};var i=s(66563);let n=86400,o={title:"About"};async function l(){let e=await (0,i.ee)();return(0,r.jsxs)("div",{className:"grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center",children:[(0,r.jsxs)("div",{className:"col-span-3",children:[r.jsx("h1",{className:"text-4xl mb-10 text-accent-400 font-medium",children:"Welcome to The Wild Oasis"}),(0,r.jsxs)("div",{className:"space-y-8",children:[r.jsx("p",{children:"Where nature's beauty and comfortable living blend seamlessly. Hidden away in the heart of the Italian Dolomites, this is your paradise away from home. But it's not just about the luxury cabins. It's about the experience of reconnecting with nature and enjoying simple pleasures with family."}),(0,r.jsxs)("p",{children:["Our ",e.length," luxury cabins provide a cozy base, but the real freedom and peace you'll find in the surrounding mountains. Wander through lush forests, breathe in the fresh air, and watch the stars twinkle above from the warmth of a campfire or your hot tub."]}),r.jsx("p",{children:"This is where memorable moments are made, surrounded by nature's splendor. It's a place to slow down, relax, and feel the joy of being together in a beautiful setting."})]})]}),r.jsx("div",{className:"col-span-2",children:r.jsx(a.default,{src:A,alt:"Family sitting around a fire pit in front of cabin",placeholder:"blur",quality:80})}),r.jsx("div",{className:"relative aspect-square col-span-2",children:r.jsx(a.default,{src:"/about-2.jpg",fill:!0,className:"object-cover",alt:"Family that manages The Wild Oasis"})}),(0,r.jsxs)("div",{className:"col-span-3",children:[r.jsx("h1",{className:"text-4xl mb-10 text-accent-400 font-medium",children:"Managed by our family since 1962"}),(0,r.jsxs)("div",{className:"space-y-8",children:[r.jsx("p",{children:"Since 1962, The Wild Oasis has been a cherished family-run retreat. Started by our grandparents, this haven has been nurtured with love and care, passing down through our family as a testament to our dedication to creating a warm, welcoming environment."}),r.jsx("p",{children:"Over the years, we've maintained the essence of The Wild Oasis, blending the timeless beauty of the mountains with the personal touch only a family business can offer. Here, you're not just a guest; you're part of our extended family. So join us at The Wild Oasis soon, where tradition meets tranquility, and every visit is like coming home."}),r.jsx("div",{children:r.jsx("a",{href:"/cabins",className:"inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all",children:"Explore our luxury cabins"})})]})]})]})}},60826:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>A,__esModule:()=>a,default:()=>i});let r=(0,s(86843).createProxy)(String.raw`/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/error.js`),{__esModule:a,$$typeof:A}=r,i=r.default},57575:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b,metadata:()=>f});var r=s(25036),a=s(54842),A=s.n(a),i=s(2813),n=s(16274);let o={src:"/_next/static/media/logo.b502d2fa.png",height:163,width:163,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Aem/agANDgAp/v4GmP34+Dn7+PgA/wkiyP8EEmf69PLXAeO9bCkVHRnF//z8Ef39BgABBRYA/goeAPbs5e/28fU7Ab95MMIJJjs9Gykk+url7gYCERwAIRb++unTwwb8+gDCAY9fOPoJ9eYFAggBANzg4QDR5wAAcWlDABsOBQDM1/L7AWFINvoKCQMF8vP6ABQeFgD5/wQAvs7qAFMsAgDn7fr7AVdEN8Hd7/0+Jh8O+mA/Ewb7+fwAmcHx+rLY9AYwFQPDAVZWSikFBQLFFQsDETMfBwD59/oAyuP8ANHk9O/J3PA7AT89OQArHg0p4u74mdz0/jjwAAIADf/+xw3//mjs+QDX4aJ7np7qbooAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},l=function(){return(0,r.jsxs)(n.default,{href:"/",className:"flex items-center gap-4 z-10",children:[r.jsx(i.default,{src:o,height:"60",quality:100,width:"60",alt:"The Wild Oasis logo"}),r.jsx("span",{className:"text-xl font-semibold text-primary-100",children:"The Wild Oasis"})]})};var c=s(42735);async function d(){let e=await (0,c.I8)();return console.log(e),r.jsx("nav",{className:"z-10 text-xl",children:(0,r.jsxs)("ul",{className:"flex gap-16 items-center",children:[r.jsx("li",{children:r.jsx(n.default,{href:"/cabins",className:"hover:text-accent-400 transition-colors",children:"Cabins"})}),r.jsx("li",{children:r.jsx(n.default,{href:"/about",className:"hover:text-accent-400 transition-colors",children:"About"})}),r.jsx("li",{children:e?.user?.image?(0,r.jsxs)(n.default,{href:"/account",className:"hover:text-accent-400 transition-colors flex items-center gap-4",children:[r.jsx("img",{className:"h-8 rounded-full",src:e.user.image,alt:e.user.name,referrerPolicy:"no-referrer"}),r.jsx("span",{children:"Guest area"})]}):r.jsx(n.default,{href:"/account",className:"hover:text-accent-400 transition-colors",children:"Guest area"})})]})})}s(22901);let u=function(){return r.jsx("header",{className:"border-b border-primary-900 px-8 py-5",children:(0,r.jsxs)("div",{className:"flex justify-between items-center max-w-7xl mx-auto",children:[r.jsx(l,{}),r.jsx(d,{})]})})};var h=s(86843);let g=(0,h.createProxy)(String.raw`/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/_components/ReservationContext.js`),{__esModule:m,$$typeof:p}=g;g.default;let x=(0,h.createProxy)(String.raw`/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/_components/ReservationContext.js#ReservationProvider`);(0,h.createProxy)(String.raw`/Users/rekha/Desktop/react-projects/The-Wild-Oasis-website/app/_components/ReservationContext.js#useReservation`);let f={title:{template:"%s / The Wild Oasis",default:"Welcome / The Wild Oasis"},description:"Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests"};function b({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:`${A().className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`,children:[r.jsx(u,{}),r.jsx("div",{className:"flex-1 px-8 py-12 grid",children:r.jsx("main",{className:"max-w-7xl mx-auto w-full",children:r.jsx(x,{children:e})})})]})})}},65016:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var r=s(25036),a=s(15300);function A(){return r.jsx(a.Z,{})}},46178:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var r=s(25036),a=s(16274);let A=function(){return(0,r.jsxs)("main",{className:"text-center space-y-6 mt-4",children:[r.jsx("h1",{className:"text-3xl font-semibold",children:"This page could not be found :("}),r.jsx(a.default,{href:"/",className:"inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg",children:"Go back home"})]})}},8944:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/about-1.58c75042.jpg",height:2e3,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ4U/wD/xAAdEAACAQQDAAAAAAAAAAAAAAABBAIAAwUREhUi/9oACAEBAAE/AO5bdxlxabQO4GHAAehX/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAIf/aAAgBAgEBPwBGutO//8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/ACAQN//Z",blurWidth:8,blurHeight:8}},74498:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/about-2.f59444f2.jpg",height:2e3,width:2e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAkBf/xAAcEAABBAMBAAAAAAAAAAAAAAACAQMEBQATIhL/2gAIAQEAAT8Ak2bc8GqxJ5kwBa9nhBTnnP/EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAgEBPwCs/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/AHC//9k=",blurWidth:8,blurHeight:8}},74184:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/_next/static/media/logo.b502d2fa.png",height:163,width:163,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Aem/agANDgAp/v4GmP34+Dn7+PgA/wkiyP8EEmf69PLXAeO9bCkVHRnF//z8Ef39BgABBRYA/goeAPbs5e/28fU7Ab95MMIJJjs9Gykk+url7gYCERwAIRb++unTwwb8+gDCAY9fOPoJ9eYFAggBANzg4QDR5wAAcWlDABsOBQDM1/L7AWFINvoKCQMF8vP6ABQeFgD5/wQAvs7qAFMsAgDn7fr7AVdEN8Hd7/0+Jh8O+mA/Ewb7+fwAmcHx+rLY9AYwFQPDAVZWSikFBQLFFQsDETMfBwD59/oAyuP8ANHk9O/J3PA7AT89OQArHg0p4u74mdz0/jjwAAIADf/+xw3//mjs+QDX4aJ7np7qbooAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},4998:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(70337);let a=e=>[{type:"image/png",sizes:"163x163",url:(0,r.fillMetadataSegment)(".",e.params,"icon.png")+"?b502d2fa4ef91864"}]},22901:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,548,441,225],()=>s(66676));module.exports=r})();