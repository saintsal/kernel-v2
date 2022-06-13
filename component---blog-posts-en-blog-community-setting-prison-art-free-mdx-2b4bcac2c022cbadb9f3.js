(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[1614],{8850:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return d}});var a=n(9756),o=(n(7294),n(3497)),i=n(5618),r=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},h=l("Process"),c=l("Aligner"),p=l("Image"),u={_frontmatter:s},m=i.Z;function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)(m,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-prison-art-free",style:{position:"relative"}},"Setting Prison Art Free",(0,o.kt)("a",{parentName:"h1",href:"#setting-prison-art-free","aria-label":"setting prison art free permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("h2",{id:"just-meaning",style:{position:"relative"}},"Just Meaning",(0,o.kt)("a",{parentName:"h2",href:"#just-meaning","aria-label":"just meaning permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)(h,{mdxType:"Process"},(0,o.kt)("p",null,"What does justice mean to you?"),(0,o.kt)("p",null,"Is it possible to have a just society, unless we are all involved with justice?")),(0,o.kt)("p",null,"These are the two guiding questions of our work, which began in Kernel Block III when ",(0,o.kt)("a",{parentName:"p",href:"https://www.pr1s0n.art/abe.html"},"Abraham Uccello")," joined us. Abe and I connected over a ",(0,o.kt)("a",{parentName:"p",href:"/learn/module-2/shelling-out/#resolution"},"simple question posed in Module 2"),": ",(0,o.kt)("strong",{parentName:"p"},"can we advance the aims of rehabilitative justice using a shared and common historical record"),"?"),(0,o.kt)("p",null,"Before discussing the technicalities by virtue of which we have crafted a pattern for exploring this question more rigorously, I will begin by opening the field to the first question above."),(0,o.kt)("p",null,"I have been shown a very simple map of the self in pursuit of my truth. There are two essential forces which push and pull this life: attraction and repulsion. I am pulled towards what I like or desire, and push away whatever I do not like or desire."),(0,o.kt)("p",null,"Moving through life’s changes, it is possible to “groom” these two forces. The mechanism by which this happens is simply awareness. Only pay ",(0,o.kt)("a",{parentName:"p",href:"https://anthonywilsonpoetry.com/2019/01/24/the-notion-of-attention-in-memory-of-mary-oliver/"},"attention"),": that is all this world ever really asks. In paying deeper and finer attention to the ways these forces manifest in my life, I can - through the course of my own experience - groom the force of attraction and cultivate ",(0,o.kt)("strong",{parentName:"p"},"moderation"),". I can groom the force of repulsion and cultivate ",(0,o.kt)("strong",{parentName:"p"},"courage"),". "),(0,o.kt)("p",null,"When courage and moderation are birthed in the heart, then the seed of modesty may take root in my being. Modesty, given time, may bloom into wisdom. With the exercise and application of wisdom comes the flourishing of justice."),(0,o.kt)(c,{center:!0,mdxType:"Aligner"},(0,o.kt)(p,{src:"/images/blog_headers/self_map.png",mdxType:"Image"})),(0,o.kt)("p",null,"What is justice? Seeing others as no different than myself. Knowing that what I do to others, I do to myself; that what is done to others, is done to me too. Justice is identity. "),(0,o.kt)("h1",{id:"conducting-code",style:{position:"relative"}},"Conducting Code",(0,o.kt)("a",{parentName:"h1",href:"#conducting-code","aria-label":"conducting code permalink",className:"anchor-link after"},(0,o.kt)("span",{parentName:"a"},"¶"))),(0,o.kt)("p",null,"How can we encode this simple map? The words above rely on metaphor and ambiguity: to write code is to strip all that away so that the written word may be executed. This is not a problem though, it is a great opportunity: our language no longer requires third-party ",(0,o.kt)("em",{parentName:"p"},"enforcement"),". Our code no longer needs the threat of violence to run in a way which can affect society."),(0,o.kt)("p",null,"So, how do we map the simple metaphors above to straightforward code which, when executed, exhibits the same kind of insight into what justice is and how we may restore it in ourselves and our societies? My suggestion is: use the standards which have emerged collectively and encode small, creative shifts to make them more suitable to our stated intention."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PrisonArt/restore/tree/main/packages/hardhat-ts/contracts"},"pr1s0n.art contracts")," do precisely this. We have adapted the Zora Auction house to run according to our needs and named it ",(0,o.kt)("strong",{parentName:"p"},"Justice.sol"),". We have adapted the NounsDAO NFT contracts, themselves adaptations of OpenZepellin’s ERC721 standard contracts, and named it ",(0,o.kt)("strong",{parentName:"p"},"Restore.sol"),"."),(0,o.kt)("p",null,"Our major innovation is in the way the auction is run and ",(0,o.kt)("em",{parentName:"p"},"how value flows throughout the system"),". As illustrated below, when an auction closes, the buyer does not automatically receive the NFT. Rather, the NFT is locked in the Restore contract in a manner that ensures it can only be released to the buyer. The funds they spent to procure it are sent to a pr1s0n.art “payment” address, controlled by a 501(c)3 non-profit organization in Florida (for which all documents are kept ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PrisonArt/transparency"},"here"),")."),(0,o.kt)(c,{center:!0,mdxType:"Aligner"},(0,o.kt)(p,{src:"/images/blog_headers/pa_flow_of_funds.png",mdxType:"Image"})),(0,o.kt)("p",null,"This NPO is responsible for exchanging the crypto into USD and paying the Legal Financial Obligations of the artist. The current system is so unjust that people are reincarcerated for failure to pay their debts upon release, creating a vicious cycle which was impossible to break until web3 came along. That said, these LFOs are most often paid to state departments, which creates a virtuous win-win game that has helped us to get this project all the way into production. Once paid, the NPO gathers the receipts into what is now being called an “",(0,o.kt)("a",{parentName:"p",href:"https://arweave.net/vMMzKyvqhN9khzLWZX1A0yEpMpy3qKPtOMgnIH-_1mQ"},"impact certificate"),"”."),(0,o.kt)(c,{center:!0,mdxType:"Aligner"},(0,o.kt)(p,{src:"/images/blog_headers/impact_cert.png",mdxType:"Image"})),(0,o.kt)("p",null,"This certificate is added back to the NFT simultaneous to the NFT being ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PrisonArt/restore/blob/main/packages/hardhat-ts/contracts/Restore.sol#L75"},"transferred from Restore to the buyer"),", using the additional ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," param in the ",(0,o.kt)("inlineCode",{parentName:"p"},"safeTransfer()")," function from the ERC721 standard. In this manner, the aesthetic expression of inherent human dignity carried by the art, and the economic narrative of restorative justice verified within the transaction are ",(0,o.kt)("strong",{parentName:"p"},"one and the same moment")," in our shared record."),(0,o.kt)("p",null,"We have not made major modifications to the ERC721 standard itself: we have simply used it in a manner which most suits our needs and intention. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://restore.pr1s0n.art/#/nfts"},"Our simple, home-cooked app")," enables us to illuminate restorative stories, both social and financial. Holding any artwork made available here in the years to come is simultaneously a statement of principles, aesthetics, ",(0,o.kt)("strong",{parentName:"p"},"and")," economic action. "),(0,o.kt)("p",null,'Restorative justice is not limited to those who have "served time": it is collective. Such financial narrative tools allow us to begin healing the separation we project between the incarcerated and ourselves, allowing us to recognise that - unless we are all involved with justice - it will never be fully realized.'))}d.isMDXComponent=!0},5618:function(e,t,n){"use strict";var a=n(1469),o=n.n(a),i=n(624),r=n(5452),s=n(9329),l=n(4365),h=n(7460),c=n(5444),p=n(1191),u=n(7938);function m(e){var t=e.children;return(0,p.jsx)(u.xu,{sx:{width:["100%","100%","80%"],m:"0 auto",mt:[2,4,4],mb:[2,4,4],pl:[4,4,"64px"],pr:[4,4,0],position:"relative"}},t)}t.Z=function(e){var t=e.children,n=e.pageContext,a=n.frontmatter,d=a.title,g=a.description,f=a.keywords,w=a.authors,k=a.date,y=a.image,b=a.recommend,v=(0,r.$G)().t,x=(0,c.useStaticQuery)("1272206737"),j=x.blogPosts,N=x.siteContent,T=o()(w)&&w.length>1,I=T?w.slice(1,w.length):[],_=n.pagePath.split("/").splice(1,n.pagePath.split("/").length-2),C=_.indexOf("blog")+1,A=C!==_.length-1?_[C]:"general",O=null;O=null==y?"/images/blog_headers/"+A+"_1.png":isNaN(parseInt(y))?y:"/images/blog_headers/"+A+"_"+y+".png";var P=null==b?void 0:b.map((function(e){return j.edges.filter((function(t){return t.node.fileAbsolutePath.includes(e)}))[0]})).concat(null==b?void 0:b.map((function(e){return N.edges.filter((function(t){return t.node.fileAbsolutePath.includes(e)}))[0]}))).filter((function(e){return void 0!==e})),M=P&&P.length>0,F={title:d,description:g,keywords:f};return(0,p.jsx)(u.kC,{sx:{flexDirection:"column"}},(0,p.jsx)(m,null,(0,p.jsx)(h.HJ,F),(0,p.jsx)(s.zx,{outline:!0,icon:"chevron_left",to:"/blog"},v("Back_To_Blog")),(0,p.jsx)(l.X6,{level:1},d),w?(0,p.jsx)(i.p8,{sx:{mb:"16px"},authors:w,date:k,isDefaultLocale:!0}):null,(0,p.jsx)("img",{src:O,sx:{width:"100%",objectFit:"cover",maxHeight:"478px",mb:"48px"}}),(0,p.jsx)("div",{sx:{"& > *:first-of-type":{mt:0}}},t)),T?(0,p.jsx)(u.xu,{sx:{pl:[4,4,"64px"],pr:[4,4,0],mt:2,mb:2}},(0,p.jsx)(s.iz,null)):null,T?(0,p.jsx)(m,null,(0,p.jsx)("h2",{sx:{fontWeight:"500",fontSize:"32px"}}," Contributors "),(0,p.jsx)("p",{sx:{mb:"40px"}},"This article is possible with a little help from friends."),(0,p.jsx)(i.tg,{contributors:I})):null,M?(0,p.jsx)(u.xu,{sx:{pl:[4,4,"64px"],pr:[4,4,0],mt:4,mb:2}},(0,p.jsx)(s.iz,null)):null,M?(0,p.jsx)(u.xu,{sx:{width:["100%","100%","90%"],m:"0 auto",mt:[2,4,4],mb:[2,4,4],pl:[4,4,0],pr:[4,4,0],position:"relative"}},(0,p.jsx)("h2",{sx:{mb:"66px",fontWeight:"500",fontSize:"32px"}}," ","Read More"," "),(0,p.jsx)(u.kC,{sx:{justifyContent:"start",width:"100%",mb:[0,"80px","80px"],flexDirection:["column","row","row"],"& > *:not(:last-child)":{mr:"96px"}}},P.map((function(e,t){var n=e.node;return(0,p.jsx)(i.$h,Object.assign({},n,{key:"blog-recommendation-"+t}))})))):null)}}}]);
//# sourceMappingURL=component---blog-posts-en-blog-community-setting-prison-art-free-mdx-2b4bcac2c022cbadb9f3.js.map