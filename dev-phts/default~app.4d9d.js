(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/hs+":function(e,t,i){"use strict";i.r(t);var n=i("mXGw"),a=i.n(n),r=i("xARA"),o=(i.p,i.p,i("mj6n")),l=i.n(o),s=i("ssVN"),c=i.n(s),p=new l.a({id:"external-link",use:"external-link-usage",content:'<symbol id="external-link">\n  <g>\n    <g>\n      <polygon style="fill:currentColor" points="2,2 5,2 5,3 3,3 3,9 9,9 9,7 10,7 10,10 2,10   " />\n      <polygon style="fill:currentColor" points="6.211,2 10,2 10,5.789 8.579,4.368 6.447,6.5    5.5,5.553 7.632,3.421   " />\n    </g>\n  </g>\n</symbol>'}),m=(c.a.add(p),i("GcVA")),d=i("USb2"),h=i("oNR1"),u="/",g="/:id",w=i("/KhT");function y(){return a.a.useContext(m.a)}var f,b,k,$=i("cneo"),x=i("pKwR"),v=i("f93M"),E=i("ceze"),S=i("z45+"),P=i("CxYM"),T=i("uWba"),j=i("pXna"),O=i("T3Rs"),M=i("YZBk"),C=i("uKZA"),R=i("Q5NV"),_=i("0WAc");!function(e){e.Category="Category",e.Item="Item",e.Meta="Meta"}(f||(f={})),function(e){e.Head="Head",e.Middle="Middle",e.Tail="Tail"}(b||(b={})),function(e){e.M="M",e.L="L",e.XL="XL",e.XXL="XXL"}(k||(k={}));const A={position:b.Middle,size:k.M,type:f.Item},H={EN:{position:b.Head,type:f.Meta},RU:{position:b.Head,type:f.Meta},Title:{position:b.Head,size:k.XXL,type:f.Meta},"©":{position:b.Tail},About:{type:f.Category},Contacts:{type:f.Category},Hobby:{type:f.Category},Meta:{type:f.Category},Work:{type:f.Category},Ascending:{type:f.Meta},Categorize:{type:f.Meta},Colors:{type:f.Meta},Feedback:{type:f.Meta},Random:{type:f.Meta},Belarus:{size:k.L},"Board games":{size:k.L},Cats:{size:k.XL},"Curriculum vitae":{size:k.L},Drums:{size:k.XL},Electronics:{size:k.L},GitHub:{size:k.L},Family:{size:k.XL},JavaScript:{size:k.XL},"Kraków":{size:k.L},Music:{size:k.XL},"Phil Tsaryk":{size:k.XXL},"Playing cards":{size:k.L},React:{size:k.L},"Software Engineer":{size:k.L},Traveling:{size:k.L}};var B=i("ndCU"),I=i("bxtJ"),D=i("efyt");function L(e){return("0"+e.toString()).slice(-2)}var F=i("+Sao"),z=i("qXsV");const N={category:null},U={};F.a((e,t)=>{z.a(e=>{U[e]={category:t}},e)},{About:["Age","Belarus","Facebook","Family","Kraków","LinkedIn","Novopolotsk","Phil Tsaryk","Pilip Tsaryk","Poland","VK"],Contacts:["+375292181503","+48534898187","Email","Skype","Telegram"],Hobby:["Billiard","Board games","Cats","Drums","Electronics","Heroes of Might and Magic 3","Joy in Time","Last.fm","Music","Playing cards","PHTS","Promo codes","Ritchie Blackmore","Space Resonance","Škoda","The Netherlands","Traveling","Ultramarined","Video games","Vinyl","ZX Spectrum","bash.org","foobar2000"],Meta:["About","Ascending","Categorize","Colors","Contacts","EN","Feedback","Hobby","Meta","RU","Random","Title","Work","©"],Work:["BitBucket","Curriculum vitae","Debian","Epam","Firefox","GitHub","Grand Parade","Habr","JavaScript","PSU","React","Ruby","SaM Solutions","Software Engineer","Stack Overflow","Sublime Text"]});const G=U;function W(e,t,i=[]){return`<a ${[`href="${e}"`,...i].join(" ")}>${t}</a>`}function K(e){return`<p>${e}</p>`}function V(e,t){var i,n;return`${W(e,`${t}${i="external-link",`<svg height="${(n={height:12,width:12,viewBox:"0 0 12 12"}).height}" width="${n.width}" viewBox="${n.viewBox}"><use xlink:href="#${i}"/></svg>`}`,['target="_blank"'])}`}function J(e,t=e){return W(`#/${e}`,t)}function X(e,t=e){return V(`mailto:${e}`,t)}function q(e,t=e){return V(`tel:${e}`,t)}function Y(e,t){return`\n    <figure>\n      ${e}\n      <figcaption>${t}</figcaption>\n    </figure>\n  `}function Z(e){return`\n    <iframe\n      class="youtube"\n      width="560"\n      height="315"\n      src="https://www.youtube.com/embed/${e}?rel=0"\n      frameborder="0"\n      allow="autoplay; encrypted-media"\n      allowfullscreen>\n    </iframe>\n  `}var Q=i("Ikss"),ee=i("UutA");const te={mobile:320,smartphone:480,tablet:720,desktop:1020,hd:1440},ie=Object.keys(te).reduce((e,t)=>(e.min=e.min||{},e.min[t]=(e,...i)=>ee.c`
      @media (min-width: ${te[t]}px) {
        ${Object(ee.c)(e,...i)};
      }
    `,e.max=e.max||{},e.max[t]=(e,...i)=>ee.c`
      @media (max-width: ${te[t]}px) {
        ${Object(ee.c)(e,...i)};
      }
    `,e),{});function ne(){return Object(Q.a)(0,255)}function ae(){return`rgb(${ne()}, ${ne()}, ${ne()})`}const re=ee.c`
  animation: blink 1s linear infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;function oe(e,t){const i=`https://i.imgur.com/${e}`;return`\n    <picture>\n      <source srcset="${i}t.jpg" media="(max-width: ${te.mobile}px)">\n      <source srcset="${i}m.jpg" media="(max-width: ${te.smartphone}px)">\n      <source srcset="${i}l.jpg" media="(max-width: ${te.tablet}px)">\n      <source srcset="${i}.jpg" media="(min-width: ${te.hd}px)">\n      <img src="${i}h.jpg" alt="${t}">\n    </picture>\n  `}const le=new Date(1987,11,3,10,15,0),se="https://www.last.fm/user/phil_tsarik",ce={EN:{tooltip:"Not fully translated yet. Sorry."},RU:{},"©":{name:"© Phil Tsaryk, 2020",description:`\n      <p>This site was created and being supported by ${J("Phil Tsaryk","me")} in free time.</p>\n      <p>Main technologies:</p>\n      <ul>\n        <li>MobX</li>\n        <li>React</li>\n        <li>TypeScript</li>\n      </ul>\n      <p>The source code is ${V("https://github.com/phts/tsaryk.com","on Github")}.</p>\n    `},About:{},Contacts:{},Hobby:{},Meta:{},Work:{},"+375292181503":{description:K(`My Byelorussian phone number: ${q("+375292181503","+375 29 218-15-03")}.`)},"+48534898187":{description:K(`My Polish phone number: ${q("+48534898187","+48 534 898 187")}.`)},Age:{data:{days:"days",hours:"hours",min:"min",months:"months",sec:"sec",years:"years"}},Ascending:{},"bash.org":{},Belarus:{description:K("My native country is Belarus.")},Billiard:{description:K("Playing &#x1F3B1; in most cases.")},BitBucket:{description:`\n      <p>\n        Using it for private projects as well as for old non-actual ones which should not be on\n        ${J("GitHub")}. BitBucket has nice feature to group repos by projects that helps to keep\n        actual projects and non-actual ones separatelly.\n      </p>\n      <p>Currently there are a few public projects:</p>\n      <ul>\n        <li>\n          ${V("https://bitbucket.org/account/user/phts-home/projects/JAV","First Java Apps")}\n          &mdash; my first apps written on Java when started to leart it.\n        </li>\n        <li>\n          ${V("https://bitbucket.org/account/user/phts-home/projects/OLD","Old Delphi Apps")}\n          &mdash; programs written on Delphi in 2004&ndash;2006 years.\n        </li>\n        <li>\n          ${V("https://bitbucket.org/account/user/phts-home/projects/PSU","University Projects")}\n          &mdash; programswhich were written by me during studying in ${J("PSU","University")}.\n        </li>\n      </ul>\n    `},"Board games":{description:`\n      <p>I like playing board games especially strategic.</p>\n      <p>Among those what we have I can select:</p>\n      <ul>\n        <li>${V("https://en.wikipedia.org/wiki/Evolution:_The_Origin_of_Species","Evolution: The Origin of Species")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Hive_(game)","Hive")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/7_Wonders_(board_game)","7 wonders")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Galaxy_Trucker","Galaxy Trucker")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Splendor_(game)","Splendor")}</li>\n      </ul>\n    `},Categorize:{},Cats:{data:[{icon:"&#x1F989;",text:"Owls"},{icon:"&#x1F47D;",text:"Raccoons",tooltip:"Raccoons don't have their own emoji in unicode yet"},{icon:"&#x1F98A;",text:"Foxes"},{icon:"&#x1F418;",text:"Elephants"}]},Colors:{},"Curriculum vitae":{description:`\n      <p>\n        In short &mdash; I am ${J("JavaScript","frontend")} developer with more than seven\n        years of expierence.\n        Having deep knowladge and understanding of modern web-technologies and frameworks.\n      </p>\n      <p>\n        In full &mdash; always up-to-date CV is available on my\n        ${V("https://github.com/phts/my-cv","GitHub profile")} as well as on\n        ${V("https://www.linkedin.com/in/tsaryk/","LinkedIn")}.\n      </p>\n    `},Debian:{description:K("Working in Debian.")},Drums:{description:`\n      <p>My set:</p>\n      <ul>\n        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>\n        <li>Paiste 2002 Medium Crash 18&Prime;</li>\n        <li>Paiste Signature Precision Crash 17&Prime;</li>\n        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>\n        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>\n        <li>Drum sticks Vater Los Angeles 5A</li>\n      </ul>\n      <p>Used to play in these bands as a drummer:<p>\n      <ul>\n        <li>${J("Space Resonance")}</li>\n        <li>${J("Joy in Time")}</li>\n        <li>${V("https://mytoucheblog.com/portfolio/jupiter-is-the-most-powerful-beautiful-and-entrancing-planet-in-our-solar-system-interview-with-mission-jupiter/","Mission: Jupiter")}</li>\n        <li>${J("Ultramarined")}</li>\n      </ul>\n    `},Electronics:{description:`\n      <p>I like to solder something in my free time.</p>\n      <p>\n      Besides fixing numerous devices I have created a few cool\n      devices under a brand ${J("PHTS")} which are used at home every day:\n      </p>\n      <p>For example:</p>\n      <ul>\n        <li>${V("https://habr.com/ru/post/453474/","arduino-pc-remote-control aka PHTS RC-01")}</li>\n        <li>${V("https://github.com/phts/arduino-pc-remote-control","PHTS RC-02")}</li>\n        <li>${V("https://easyeda.com/phts/vu-01","PHTS VU-01")}</li>\n      </ul>\n      <p>\n        ${Y('<img src="https://i.imgur.com/VWdIfrE.jpg" alt="PHTS VU-01">',"")}\n      </p>\n    `},Email:{description:K(`My email: ${X("phil@tsaryk.com")}.`)},Epam:{description:`\n      <p>\n        Relocated to ${J("Kraków")} and have been worked in Epam\n        ${J("Curriculum vitae","for little more than two years")}.\n      </p>\n      <p>\n        Learned here Angular and ${J("React")},\n        was participating in trainings, conducting workshops, interviewing new candidates.\n      </p>\n      <p>Projects &mdash; it depends. In most cases there is a lot of boring and legacy stuff.</p>\n      <p>After Epam working in ${J("Grand Parade")}.</p>\n    `},Facebook:{description:`\n      <p>${V("https://www.facebook.com/ph.tsaryk","My page")} on facebook.</p>\n      <p>Being here very very rarely.</p>\n    `},Family:{},Feedback:{data:{sayHello:"Say hello..."}},Firefox:{description:`\n      <p>\n        Using Firefox only. I don't like Chrome from its very beggining due to impossibility to\n        customize it for my needs.\n      </p>\n      <p>\n        ${V("https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts","Occasionally writing")} simple addons for FF.\n      </p>\n    `},foobar2000:{description:`\n      <p>Excellent music player. Using it on my PC and smartphone.</p>\n      <p>\n        Even created a small and useful plugin\n        ${V("https://hydrogenaud.io/index.php/topic,110908.0.html","Party Shuffle")}.\n      </p>\n    `},GitHub:{description:K(`${V("https://github.com/phts","There are")} my useful and useless projects\n      which are accessible for everyone.`)},"Grand Parade":{description:`\n      <p>\n        A company where ${J("Curriculum vitae","currently")} I am working in.\n        This is a part of a big bookmaker\n        ${V("https://en.wikipedia.org/wiki/William_Hill_(bookmaker)","William Hill")}.\n      </p>\n      <p>Excellent product company, fine projects, fine people.</p>\n    `},Habr:{},"Heroes of Might and Magic 3":{description:`\n      <p>\n        I like playing to ${V("https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III","HoMM3")}\n        / ${V("http://h3hota.com/en/documentation","HotA")} when having free time.\n      </p>\n      <p>\n        It is nice since the game is old it still has a huge community, tournaments are taking\n        place, new addons and patches are being released.\n      </p>\n    `},JavaScript:{description:`\n      <p>\n        The main direction of my expertise &mdash; JavaScript and everything related to it\n        including ES6+, Angular, ${J("React")}, Node.js, Typescript, etc.\n      </p>\n    `},"Joy in Time":{description:`\n      <p>\n        This band in some degree is an oposite of ${J("Space Resonance")} in style and mood.\n        In spite of this I used to play in this group with great pleasure.\n      </p>\n      <p>\n        ${Z("egVPsfDi81A")}\n      </p>\n      <p>There is vk page: ${V("https://vk.com/joyintimes","joyintimes")}</p>\n    `},"Kraków":{description:K(`Living here with ${J("Family","my family")} more than three years.`)},"Last.fm":{description:K(`${V(se,"My profile")} on Last.fm`)},LinkedIn:{description:K(`${V("https://www.linkedin.com/in/tsaryk/","My profile")} on LinkedIn.`)},Music:{description:`\n      <p>One of most important part of my life.</p>\n      <h3>Listening</h3>\n      <p>My toplist at the moment:<p>\n      <ul>\n        <li>Pink Floyd</li>\n        <li>Lunatic Soul</li>\n        <li>Riverside</li>\n        <li>Deep Purple</li>\n        <li>Opeth</li>\n        <li>The Gathering</li>\n        <li>Led Zeppelin</li>\n        <li>God Is An Astronaut</li>\n        <li>Anathema</li>\n      </ul>\n      <p>Also I have ${J("Last.fm","Last.fm profile")}.</p>\n      <p>Often listening to music ${J("Vinyl","on vinyl")}.</p>\n      <h3>Playing</h3>\n      <p>...${J("Drums","drums")}.<p>\n      <p>Used to play in bands:<p>\n      <ul>\n        <li>${J("Space Resonance")}</li>\n        <li>${J("Joy in Time")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${J("Ultramarined")}</li>\n      </ul>\n      <h3>Going to concerts</h3>\n      <p>From my must-have list already visited:</p>\n      ${Y(oe("FykwSDm","Deep Purple in Minsk, 2011"),"Deep Purple in Minsk, 2011")}\n      ${Y(oe("qIIb0bR","God is an Astronaut in Saint Petersburg, 2012"),"God is an Astronaut in Saint Petersburg, 2012")}\n      ${Y(oe("dPNRWdG","Australian Pink Floyd Show in Minsk, 2013"),"Australian Pink Floyd Show in Minsk, 2013")}\n      ${Y(oe("tcyuP0Q","Dream Theater in Katowice, 2015"),"Dream Theater in Katowice, 2015")}\n      ${Y(oe("yDFhHGF","Riverside in Katowice, 2015"),"Riverside in Katowice, 2015")}\n      ${Y(oe("5oDXQ4s","David Gilmour in France, 2016"),"David Gilmour in France, 2016")}\n      ${Y(oe("pxy4Skj","Anathema in Kraków, 2017"),"Anathema in Kraków, 2017")}\n      ${Y(oe("FOuMsdO","Opeth in Warsaw, 2017"),"Opeth in Warsaw, 2017")}\n      ${Y(oe("zMy5wbq","Roger Waters in Kraków, 2018"),"Roger Waters in Kraków, 2018")}\n      ${Y(oe("mROYG5y","Nightwish in Kraków, 2018"),"Nightwish in Kraków, 2018")}\n      ${Y(oe("KhtC73G","RPWL in Warsaw, 2019"),"RPWL in Warsaw, 2019")}\n      ${Y(oe("x7kkpYK","Pink in Warsaw, 2019"),"Pink in Warsaw, 2019")}\n      <p>Remaining:</p>\n      <ul>\n      <li>${J("Ritchie Blackmore","Rainbow or Ritchie Blackmore's Night")}</li>\n      <li>The Gathering</li>\n      <li>The Morningside</li>\n      </ul>\n    `},Novopolotsk:{description:`\n      <p>\n        My native town. It is located in Vitsebsk Province, ${J("Belarus")}.\n        Coordinates:\n        ${V("https://tools.wmflabs.org/geohack/geohack.php?pagename=Novopolotsk&params=55_32_N_28_39_E_region:BY_type:city","55°32′00″ N 28°40′00″ E")}\n      </p>\n    `},"Phil Tsaryk":{description:`\n      <p>\n        My name is Phil Tsaryk. I was born December 3 1987 in ${J("Novopolotsk")}\n        in BSSR (now &mdash; ${J("Belarus")}).\n      </p>\n      <p>\n        In 2011 graduated from ${J("PSU","Polotsk State University")} with a speciality\n        ${J("Software Engineer")}.\n      </p>\n      <p>\n        Nowadays live in ${J("Kraków")} and work as\n        ${J("JavaScript","a frontend developer")} in ${J("Grand Parade")}.\n      </p>\n    `},PHTS:{description:[K(`My brand for useful and useless ${J("Electronics","electronic devices")}.`),`${Y(oe("uPRy2Mu","PHTS BB-01"),"PHTS BB-01")}`,`${Y(oe("BzSJRpf","PHTS BB-01s"),"PHTS BB-01s")}`,`${Y(oe("cpv9dk4","PHTS FL-01"),"PHTS FL-01")}`,`${Y(oe("c3EMslv","PHTS RC-02"),"PHTS RC-02")}`,`${Y(oe("nXCSHXf","PHTS USP-01"),"PHTS USP-01")}`,`${Y(oe("BXikwKy","PHTS VU-01"),"PHTS VU-01")}`]},"Pilip Tsaryk":{description:"\n      <p>My legal name.</p>\n      <p>This is how it is written in my passport.</p>\n    "},"Playing cards":{data:{p1:"Collecting since my childhood.",p2:"There is no purpose to gather everything from everywhere, so the collection is not so big and contains around 100 decks today. Collecting those which I really like.",imgTitle:"One card from each deck (clickable). July 2021"}},Poland:{description:K(`Currently living in Poland in ${J("Kraków")}.`)},"Promo codes":{description:`\n      <p>\n        Feel free to use:\n      </p>\n      <ul>\n        <li>Airbnb: ${V("https://www.airbnb.ru/c/philt68?currency=PLN","philt68")}</li>\n        <li>Allegro: ${V("https://allegro.pl/aplikacja/polecam/pilip782627","pilip782627")}</li>\n        <li>atlasbus.by: ${V("https://atlasbus.by/share/app/GPMQHV","GPMQHV")}</li>\n        <li>Bank Millennium:\n          ${V("https://www.bankmillennium.pl/lubietopolecam?id=24586296","24586296")}</li>\n        <li>Bolt (Taxify): S5S8K8</li>\n        <li>Booking.com: ${V("https://www.booking.com/s/18_6/pilip212","pilip212")}</li>\n        <li>Hulaj: zDNRAA</li>\n        <li>Maxim: 9D06F7E7</li>\n        <li>Revolut: ${V("https://revolut.com/r/pilip1ip","pilip1ip")}</li>\n        <li>Uber: ${V("https://www.uber.com/invite/3daguge8ue","3daguge8ue")}</li>\n      </ul>\n    `},PSU:{},Random:{},React:{description:K(`At this moment I am specializing exactly ${V("https://reactjs.org/","on this library")}.`)},"Ritchie Blackmore":{description:K("In my opinion the best guitarist ever.")},Ruby:{description:`\n      <p>Cool scripting language.</p>\n      <p>\n        In spite of a fact that I am a ${J("JavaScript","frontender")}, sometimes writing\n        various useful things on Ruby.\n      </p>\n    `},"SaM Solutions":{},"Škoda":{},Skype:{description:K(`Deprecated in favor of ${J("Telegram")}.`)},"Software Engineer":{description:K(`My speciality after graduating from ${J("PSU","university")}.`)},"Space Resonance":{},"Stack Overflow":{description:`\n      <p>\n        Sometimes I ${V("https://stackoverflow.com/users/2462524/phts","ask and answer")} questions\n        on ${V("https://stackoverflow.com/","Stack Overflow")}.\n      </p>\n    `},"Sublime Text":{description:`\n      <p>Great code editor. Using it every day.</p>\n      <p>\n        Occasionally I\n        ${V("https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=","make plugins")} for it.\n      </p>\n    `},Telegram:{description:K(`My username in Telegram: ${V("https://t.me/ptsaryk","@ptsaryk")}`)},Title:{},"The Netherlands":{description:K("Someday I will live there for sure.")},Traveling:{description:`\n      <p>\n        I like traveling with my ${J("Family","family")}. ${J("Škoda","By car")},\n        by train, by plane, by anything.\n      </p>\n      <p>There are countries which we have already visited:</p>\n      <ul style="list-style-type: none;">\n        <li>&#127463;&#127486; ${J("Belarus")} &mdash; obviously</li>\n        <li>&#127464;&#127487; Czech Republic</li>\n        <li>&#127466;&#127480; Spain</li>\n        <li>&#127467;&#127479; France</li>\n        <li>&#127468;&#127479; Greece</li>\n        <li>&#127475;&#127473; ${J("The Netherlands")}</li>\n        <li>&#127477;&#127473; ${J("Poland")} &mdash; also obviously :)</li>\n        <li>&#127479;&#127482; Russia</li>\n        <li>&#127481;&#127479; Turkey</li>\n        <li>&#127482;&#127462; Ukraine</li>\n      </ul>\n    `},Ultramarined:{data:{ultrimarine:"Ultramarine me!",unultrimarine:"Unultramarine"}},"Video games":{description:`\n      <p>\n        I like high-quality and interesting computer games, in most cases quests and strategies.\n      </p>\n      <p>Made a huge impression on me and still making:</p>\n      <ul>\n        <li>${V("https://en.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness","Warcraft 2")}\n          / ${V("https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos","3")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/StarCraft","Starcraft")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Stronghold_(2001_video_game)","Stronghold")}</li>\n        <li>${J("Heroes of Might and Magic 3")}\n          / ${V("https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV","4")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Half-Life_(series)","Half-Life")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Syberia","Syberia")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim","Majesty")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Mafia_(video_game)","Mafia")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Grand_Theft_Auto","GTA")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom","Knights and Merchants: The Shattered Kingdom")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Portal_(series)","Portal")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Anno_1701","Anno 1701")}\n          / ${V("https://en.wikipedia.org/wiki/Anno_1404","1404")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Space_Rangers_(video_game)","Space Rangers")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/The_Talos_Principle","The Talos Principle")}</li>\n      </ul>\n      <p>And some games on ${J("ZX Spectrum")} as well.</p>\n    `},Vinyl:{description:Y(oe("Mkb7mO9","Винил"),`Audio-Technica AT-LP120USBHC + Yamaha A-S501 + Hand-made speakers by Andrzej Figarski. ${V("https://www.discogs.com/user/phts/collection","Playing Lunatic Soul - Lunatic Soul II")}`)},VK:{description:K(`${V("https://vk.com/phil.tsaryk","My profile")} in VK.`)},"ZX Spectrum":{description:`\n      <p>\n        My first computer. First line of code there most likely was <code>LOAD "" &crarr;</code>\n        &mdash; to load game from сassette tape.\n      </p>\n      <p>\n        Most loved games: ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=2323","Highway Encounter")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=461","Battle Ships")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=1686","Exolon")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=5448","Tujad")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=639","Boulder Dash")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=4784","Spy Hunter")} and many more.\n      </p>\n    `}},pe={EN:{name:"АНГ",tooltip:"Not fully translated yet. Sorry."},RU:{name:"РУС"},"©":{name:"© Филипп Царик, 2020",description:`\n      <p>Этот сайт создавался и поддерживается ${J("Phil Tsaryk","мной")} в свободное время.</p>\n      <p>Основные используемые технологии:</p>\n      <ul>\n        <li>MobX</li>\n        <li>React</li>\n        <li>TypeScript</li>\n      </ul>\n      <p>Исходный код сайта выложен ${V("https://github.com/phts/tsaryk.com","на Гитхабе")}.</p>\n    `},About:{name:"Обо мне"},Contacts:{name:"Контакты"},Hobby:{name:"Хобби"},Meta:{name:"Мета"},Work:{name:"Работа"},"+375292181503":{description:K(`Мой белорусский номер телефона: ${q("+375292181503","+375 29 218-15-03")}.`)},"+48534898187":{description:K(`Мой польский номер телефона: ${q("+48534898187","+48 534 898 187")}.`)},Age:{name:"Возраст",data:{days:"дн.",hours:"ч.",min:"мин.",months:"мес.",sec:"сек.",years:"лет"}},Ascending:{name:"По порядку"},"bash.org":{name:"Башорг",description:K(`Когда-то давно случайно ${V("http://bash.im/quote/393345","попал")} на\n      bash.org.`)},Belarus:{name:"Беларусь",description:K("Родом из Беларуси.")},Billiard:{name:"Бильярд",description:K("Играю в &#x1F3B1; в большинстве случаев.")},BitBucket:{name:"БитБакет",description:`\n      <p>\n        Использую как для приватных проектов, так и для неактуальных, которым нечего делать на\n        ${J("GitHub","Гитхабе")}. БитБакет позволяет группировать репозитории по проектам, что\n        очень помогает отсортировать актуальные репозитории от устаревших.\n      </p>\n      <p>На данный момент в публичный доступ выложены:</p>\n      <ul>\n        <li>\n          ${V("https://bitbucket.org/account/user/phts-home/projects/JAV","First Java Apps")}\n          &mdash; первые программы, написанные на Джаве, когда её начал изучать.\n        </li>\n        <li>\n          ${V("https://bitbucket.org/account/user/phts-home/projects/OLD","Old Delphi Apps")}\n          &mdash; программы, написанные на Delphi примерно в 2004&ndash;2006 годах.\n        </li>\n        <li>\n          ${V("https://bitbucket.org/account/user/phts-home/projects/PSU","University Projects")}\n          &mdash; программы, которые были написаны в период обучения в\n          ${J("PSU","университете")}.\n        </li>\n      </ul>\n    `},"Board games":{name:"Настольные игры",description:`\n      <p>Люблю играть в настолки, особенно в стратегические.</p>\n      <p>Из того, что есть у нас, можно выделить:</p>\n      <ul>\n        <li>${V("ttps://ru.wikipedia.org/wiki/Эволюция_(настольная_игра)","Эволюция")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Улей_(игра)","Улей")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/7_Чудес","7 чудес")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Galaxy_Trucker","Космические дальнобойщики")}</li>\n        <li>${V("https://en.wikipedia.org/wiki/Splendor_(game)","Роскошь")}</li>\n      </ul>\n    `},Categorize:{name:"По категориям"},Cats:{name:"Коты",data:[{icon:"&#x1F989;",text:"Совы"},{icon:"&#x1F47D;",text:"Еноты",tooltip:"У енотов пока нет своего emoji в юникоде"},{icon:"&#x1F98A;",text:"Лисицы"},{icon:"&#x1F418;",text:"Слоны"}]},Colors:{name:"Цвета"},"Curriculum vitae":{name:"Резюме",description:`\n      <p>\n        Если коротко &mdash; я ${J("JavaScript","фронтэнд")} разработчик с более, чем семью\n        годами стажа.\n        Обладаю глубокими знаниями современных веб-технологий и фреймворков.\n      </p>\n      <p>\n        Если подробнее &mdash; всегда актуальное резюме доступно на\n        ${V("https://github.com/phts/my-cv","Гитхабе")}, а также на\n        ${V("https://www.linkedin.com/in/tsaryk/","Линкедине")}.\n      </p>\n    `},Debian:{name:"Дебиан",description:K("Работаю на Debian.")},Drums:{name:"Барабаны",description:`\n      <p>Мой сет:</p>\n      <ul>\n        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>\n        <li>Paiste 2002 Medium Crash 18&Prime;</li>\n        <li>Paiste Signature Precision Crash 17&Prime;</li>\n        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>\n        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>\n        <li>Палочки Vater Los Angeles 5A</li>\n      </ul>\n      <p>Играл в качестве барабанщика в группах:<p>\n      <ul>\n        <li>${J("Space Resonance")}</li>\n        <li>${J("Joy in Time","Радость во времени")}</li>\n        <li>${V("https://mytoucheblog.com/portfolio/jupiter-is-the-most-powerful-beautiful-and-entrancing-planet-in-our-solar-system-interview-with-mission-jupiter/","Mission: Jupiter")}</li>\n        <li>${J("Ultramarined")}</li>\n      </ul>\n    `},Electronics:{name:"Электроника",description:`\n      <p>В свободное время люблю что-нибудь попаять.</p>\n      <p>\n        Помимо починки всяких крупных и мелких домашних девайсов\n        я сделал несколько крутых штук под маркой PHTS, которые\n        используются дома каждый день:\n      </p>\n      <ul>\n        <li>${V("https://habr.com/ru/post/453474/","arduino-pc-remote-control aka PHTS RC-01")}</li>\n        <li>${V("https://github.com/phts/arduino-pc-remote-control","PHTS RC-02")}</li>\n        <li>${V("https://easyeda.com/phts/vu-01","PHTS VU-01")}</li>\n      </ul>\n      <p>\n        ${Y('<img src="https://i.imgur.com/VWdIfrE.jpg" alt="PHTS VU-01">',"")}\n      </p>\n    `},Email:{name:"Имейл",description:K(`Мой имейл: ${X("phil@tsaryk.com")}.`)},Epam:{name:"Епам",description:`\n      <p>\n        Релоцировался в ${J("Kraków","Краков")} и проработал в Епаме\n        ${J("Curriculum vitae","чуть больше двух лет")}.\n      </p>\n      <p>\n        Изучил тут Ангуляр и ${J("React","Реакт")},\n        ходил на тренинги, проводил воркшопы, собеседовал новых кандидатов.\n      </p>\n      <p>С проектом &mdash; как повезёт. Но в большинстве случаев много неинтересного и легаси.</p>\n      <p>После Епама перешёл в ${J("Grand Parade","Гранд Парэйд")}.</p>\n    `},Facebook:{name:"Фейсбук",description:`\n      <p>${V("https://www.facebook.com/ph.tsaryk","Моя страничка")} на фэйсбуке.</p>\n      <p>Захожу туда очень редко.</p>\n    `},Family:{name:"Семья",description:oe("2GcRB9u","Царики")},Feedback:{name:"Обратная связь",data:{sayHello:"Скажите «привет»..."}},Firefox:{name:"Файерфокс",description:`\n      <p>\n        Пользуюсь только файерфоксом. Не взлюбил Хром с самого начала из-за невозможности его\n        настроить под себя.\n      </p>\n      <p>\n        ${V("https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts","Иногда пишу")} простые аддоны для фф.\n      </p>\n    `},foobar2000:{name:"фубар2000",description:`\n      <p>Отличный плеер музыки. Пользуюсь им на компе и телефоне.</p>\n      <p>\n        Однажды даже написал простой, но полезный плагин\n        ${V("https://hydrogenaud.io/index.php/topic,110908.0.html","Party Shuffle")}.\n      </p>\n    `},GitHub:{name:"ГитХаб",description:K(`${V("https://github.com/phts","Здесь")} находятся полезные и      бесполезные проекты, которые доступны для всех.`)},"Grand Parade":{name:"Гранд Парэйд",description:`\n      <p>\n        Моё ${J("Curriculum vitae","текущее")} место работы. Grand Parade является частью\n        большой букмейкерской конторы\n        ${V("https://en.wikipedia.org/wiki/William_Hill_(bookmaker)","William Hill")}.\n      </p>\n      <p>Отличная продуктовая компания, отличные проекты, отличные люди.</p>\n    `},Habr:{name:"Хабр",description:`\n      <p>\n        Для получения инвайта на ${V("https://habr.com/ru/","Хабр")} я давным давно опубликовал\n        ${V("https://habrahabr.ru/post/128327/","статью &laquo;Стеганография в GIF&raquo;")}, в\n        которой описал принцип работы программы\n        ${V("https://bitbucket.org/phts-home/gifed/src/master/","Gifed")}, написанной в\n        ${J("PSU","универе")} для курсового проекта по предмету &laquo;Программные методы\n        защиты информации&raquo;.\n      </p>\n      <p>${V("https://habrahabr.ru/users/phil_tsarik/","Инвайт получил")}.</p>\n      <p>\n        На Тостере засветился\n        ${V("https://toster.ru/answer?answer_id=158170#answers_list_answer","популярным ответом")}\n        на &laquo;Как оформить программный код в Microsoft Word&raquo;.\n      </p>\n    `},"Heroes of Might and Magic 3":{name:"Герои меча и магии 3",description:`\n      <p>\n        До сих пор играю в\n        ${V("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III","HoMM3")}\n        / ${V("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III:_Horn_of_the_Abyss","HotA")},\n        если появляется свободное время.\n      </p>\n      <p>\n        Радует, что несмотря на то, что игра старая, у неё огромное комьюнити, проходят турниры,\n        выпускаются аддоны и патчи.\n      </p>\n    `},JavaScript:{name:"Джаваскрипт",description:`\n      <p>\n        Основное направление моей деятельности &mdash; джаваскрит и всё, что с ним связано, включая\n        ES6+, Angular, ${J("React")}, Node.js, Typescript и т.д.\n      </p>\n    `},"Joy in Time":{name:"Радость во времени",description:`\n      <p>\n        Является в некоторой степени противоположностью ${J("Space Resonance")} по стилю\n        и настроению. Несмотря на это, я с огромным удовольствием играл в этой группе.\n      </p>\n      <p>\n        ${Z("egVPsfDi81A")}\n      </p>\n      <p>Осталась страничка в контакте: ${V("https://vk.com/joyintimes","joyintimes")}</p>\n    `},"Kraków":{name:"Краков",description:K(`Живём тут с ${J("Family","семьёй")} уже более трёх лет.`)},"Last.fm":{name:"Ласт.фм",description:K(`${V(se,"Мой профиль")} на Ласт.фм`)},LinkedIn:{name:"ЛинкедИн",description:K(`${V("https://www.linkedin.com/in/tsaryk/","Мой профиль")} на ЛинкедИне.`)},Music:{name:"Музыка",description:`\n      <p>Одна из важнейших частей моей жизни.</p>\n      <h3>Слушаю</h3>\n      <p>Мой топ на данный момент:<p>\n      <ul>\n        <li>Pink Floyd</li>\n        <li>Lunatic Soul</li>\n        <li>Riverside</li>\n        <li>Deep Purple</li>\n        <li>Opeth</li>\n        <li>The Gathering</li>\n        <li>Led Zeppelin</li>\n        <li>God Is An Astronaut</li>\n        <li>Anathema</li>\n      </ul>\n      <p>Также я есть на ${J("Last.fm","Ластфм")}.</p>\n      <p>Часто слушаю музыку ${J("Vinyl","на виниле")}.</p>\n      <h3>Играю</h3>\n      <p>...на ${J("Drums","барабанах")}.<p>\n      <p>Участвовал в группах:<p>\n      <ul>\n        <li>${J("Space Resonance")}</li>\n        <li>${J("Joy in Time","Радость во времени")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${J("Ultramarined")}</li>\n      </ul>\n      <h3>Хожу на концерты</h3>\n      <p>Из своего маст-хэв списка уже побывал:</p>\n      ${Y(oe("FykwSDm","Deep Purple в Минске, 2011 г."),"Deep Purple в Минске, 2011 г.")}\n      ${Y(oe("qIIb0bR","God is an Astronaut в Санкт-Петербурге, 2012 г."),"God is an Astronaut в Санкт-Петербурге, 2012 г.")}\n      ${Y(oe("dPNRWdG","Australian Pink Floyd Show в Минске, 2013 г."),"Australian Pink Floyd Show в Минске, 2013 г.")}\n      ${Y(oe("tcyuP0Q","Dream Theater в Катовице, 2015 г."),"Dream Theater в Катовице, 2015 г.")}\n      ${Y(oe("yDFhHGF","Riverside в Катовице, 2015 г."),"Riverside в Катовице, 2015 г.")}\n      ${Y(oe("5oDXQ4s","Дэвид Гилмор во Франции, 2016 г."),"Дэвид Гилмор во Франции, 2016 г.")}\n      ${Y(oe("pxy4Skj","Anathema в Кракове, 2017 г."),"Anathema в Кракове, 2017 г.")}\n      ${Y(oe("FOuMsdO","Opeth в Варшаве, 2017 г."),"Opeth в Варшаве, 2017 г.")}\n      ${Y(oe("zMy5wbq","Roger Waters в Кракове, 2018 г."),"Roger Waters в Кракове, 2018 г.")}\n      ${Y(oe("mROYG5y","Nightwish в Кракове, 2018 г."),"Nightwish в Кракове, 2018 г.")}\n      ${Y(oe("KhtC73G","RPWL в Варшаве, 2019 г."),"RPWL в Варшаве, 2019 г.")}\n      ${Y(oe("x7kkpYK","Pink в Варшаве, 2019 г."),"Pink в Варшаве, 2019 г.")}\n      <p>Осталось:</p>\n      <ul>\n      <li>${J("Ritchie Blackmore","Rainbow или Ritchie Blackmore's Night")}</li>\n      <li>The Gathering</li>\n      <li>The Morningside</li>\n      </ul>\n    `},Novopolotsk:{name:"Новополоцк",description:`\n      <p>\n        Мой родной город. Находится в Витебской области, ${J("Belarus","Республика Беларусь")}.\n        Точные координаты:\n        ${V("https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%86%D0%BA","55°32′00″ с. ш. 28°40′00″ в. д.")}\n      </p>\n    `},"Phil Tsaryk":{name:"Филипп Царик",description:`\n      <p>\n        Меня зовут Филипп Царик. Родился 3 декабря 1987 года в городе\n        ${J("Novopolotsk","Новополоцке")} в БССР (сейчас &mdash;\n        ${J("Belarus","Республика Беларусь")}).\n      </p>\n      <p>\n        В 2011 окончил ${J("PSU","Полоцкий Государственный Университет")} по специальности\n        ${J("Software Engineer","&laquo;Программное обеспечение информационных технологий&raquo;")}.\n      </p>\n      <p>\n        Сейчас проживаю в ${J("Kraków","Кракове")} и работаю в компании ${J("Grand Parade")}\n        ${J("JavaScript","фронтэнд разработчиком")}.\n      </p>\n    `},PHTS:{description:[K(`My brand for useful and useless ${J("Electronics","electronic devices")}.`)]},"Pilip Tsaryk":{name:"Пiлiп Царык",description:K("Афіцыйна маё імя пішацца менавіта так.")},"Playing cards":{name:"Игральные карты",data:{p1:"Коллекционирую с детства.",p2:"Не ставлю себе задачу собрать очень много и всё подряд, поэтому коллекция не очень большая и насчитывает на данный момент около 100 колод. Собираю именно те, которые понравились.",imgTitle:"По одной карте из каждой колоды (кликабельно). Июль 2021"}},Poland:{name:"Польша",description:K(`В данный момент проживаю в Польше в городе ${J("Kraków","Кракове")}.`)},"Promo codes":{name:"Промокоды",description:`\n      <p>\n        Пользуйтесь:\n      </p>\n      <ul>\n        <li>Airbnb: ${V("https://www.airbnb.ru/c/philt68?currency=PLN","philt68")}</li>\n        <li>Allegro: ${V("https://allegro.pl/aplikacja/polecam/pilip782627","pilip782627")}</li>\n        <li>atlasbus.by: ${V("https://atlasbus.by/share/app/GPMQHV","GPMQHV")}</li>\n        <li>Bank Millennium:\n          ${V("https://www.bankmillennium.pl/lubietopolecam?id=24586296","24586296")}</li>\n        <li>Bolt (Taxify): S5S8K8</li>\n        <li>Booking.com: ${V("https://www.booking.com/s/18_6/pilip212","pilip212")}</li>\n        <li>Hulaj: zDNRAA</li>\n        <li>Maxim: 9D06F7E7</li>\n        <li>Revolut: ${V("https://revolut.com/r/pilip1ip","pilip1ip")}</li>\n        <li>Uber: ${V("https://www.uber.com/invite/3daguge8ue","3daguge8ue")}</li>\n      </ul>\n    `},PSU:{name:"ПГУ",description:`\n      <p>Полоцкий Государственный Университет.</p>\n      <p>\n        С 2006 по 2011 проучился здесь по специальности &laquo;Программное обеспечение\n        информационных технологий&raquo; на радиотехническом факультете (в последствии\n        переформированном в факультет информационных технологий) в группе 06ИТ-1.\n      </p>\n      <p>\n        За время учёбы было написано много полезных и бесполезных программ и игрушек.\n        ${V("https://bitbucket.org/account/user/phts-home/projects/PSU","Некоторые из них я выложил")} на ${J("BitBucket","Битбакет")}.\n      </p>\n      <p>\n        Также во времена университета у меня был ${V("http://philip-s.narod.ru/","свой сайт")},\n        если можно его так назвать, на котором опубликовывал некоторые программы в разделе\n        &laquo;Проекты&raquo;. Но сейчас этот сайт давно уже заброшен и скачать ничего не получится.\n      </p>\n      <p>\n        Дипломный проект был на тему &laquo;Разработка сервиса для изучения иностранных\n        языков&raquo;. По своей сути на тот момент являлся упрощённым форком сервиса Langaroo\n        &mdash; стартап, над которым я ${J("Curriculum vitae","работал")} вместе с коллегой.\n        Стартап не взлетел.\n      </p>\n      <p>\n        По итогу выпустился дипломированным\n        ${J("Software Engineer","инженером-программистом")}.\n      </p>\n    `},Random:{name:"Вразнобой"},React:{name:"Реакт",description:K(`В данный момент специализируюсь именно ${V("https://reactjs.org/","на этой библиотеке")}.`)},"Ritchie Blackmore":{name:"Ричи Блэкмор",description:K("Лучший гитарист, по моему мнению.")},Ruby:{name:"Руби",description:`\n      <p>Очень классный скриптовый язык.</p>\n      <p>\n        Несмотря на то, что я ${J("JavaScript","фронтендер")}, иногда\n        пишу на нём всякие штуки.\n      </p>\n    `},"SaM Solutions":{name:"Сам Солюшнс",description:`\n      <p>\n        Работал тут во время и после ${J("PSU","универа")}. Точнее, не сразу после универа, т.к\n        пришлось пару месяцев отсидеться на тракторном заводе по распределению из-за несовершенства\n        белорусских законов.\n      </p>\n      <p>\n        Компания оставила только приятные впечатления. Но проекты разной степени качества, может и\n        не повезти. Впрочем, как и в любой аутсорсинговой компании.\n      </p>\n      <p>\n        ${J("Curriculum vitae","После 4 лет работы")} меня захантил ${J("Epam","Епам")},\n        и я переехал в ${J("Kraków","Краков")}.\n      </p>\n    `},"Škoda":{name:"Шкода",description:`\n      <p>А точнее, Škoda Felicia II 1.6 (1999 г. в.).</p>\n      <p>\n        Моя первая машина, купленная в ${J("Kraków","Кракове")} за какие-то 2300 злотых\n        (около $600 по тогдашнему курсу).\n      </p>\n      <p>Очень надежный автомобиль. Прошёл боевое крещение по украинским дорогам в Буковель.</p>\n      <p>${me="https://i.imgur.com/VYfgwDT.jpg",de="Моя Škoda",`\n    <img src="${me}" alt="${de}">\n  `}</p>\n      <p>Хотя от старости уже начинает капризничать.</p>\n    `},Skype:{name:"Скайп",description:K(`Больше не пользуюсь. Перешёл на ${J("Telegram","Телеграм")}.`)},"Software Engineer":{name:"Инженер-программист",description:K(`Моя специальность после окончания ${J("PSU","университета")}.`)},"Space Resonance":{name:"Спасе Резонасе",description:`\n      <p>\n        <i>Холодным зимним вечером четверо встретились на\n        центральной площади ${J("Novopolotsk","Новополоцка")}...</i>\n      </p>\n      <p>\n        Так зародилась величайшая и культовая (в определённых кругах) группа\n        ${V("https://vk.com/club7812592","Space Resonance")}.\n      </p>\n      <p>\n        Является, наверное, самым идеальным попаданием в ${J("Music","мой музыкальный вкус")}.\n        До сих пор переслушиваю самый первый и единственный полноценный альбом, который был выпущен\n        в некоторой спешке, прямо перед распадом группы, и поэтому по качеству он не идеален.\n      </p>\n      <p>\n        Параллельно в это время играл в ${J("Joy in Time","Радости во времени")} и иногда\n        приходилось на одном концерте играть в двух группах.\n      </p>\n    `},"Stack Overflow":{name:"Стак Оверфлоу",description:`\n      <p>\n        Иногда ${V("https://stackoverflow.com/users/2462524/phts","задаю и отвечаю")} на вопросы\n        на ${V("https://stackoverflow.com/","Стак Оверфлоу")}.\n      </p>\n    `},"Sublime Text":{name:"Саблайм Текст",description:`\n      <p>Отличный редактор кода. Пользуюсь им каждый день.</p>\n      <p>\n        Периодически\n        ${V("https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=","пишу плагины")} для него.\n      </p>\n    `},Telegram:{name:"Телеграм",description:K(`Моё имя в Телеграме: ${V("https://t.me/ptsaryk","@ptsaryk")}`)},Title:{},"The Netherlands":{name:"Нидерланды",description:K("Обязательно буду жить там.")},Traveling:{name:"Путешествия",description:`\n      <p>\n        Я люблю путешествовать со своей ${J("Family","семьёй")}. ${J("Škoda","На машине")},\n        на поезде, самолётом, как угодно.\n      </p>\n      <p>Вот, список стран, в которых мы уже побывали:</p>\n      <ul style="list-style-type: none;">\n        <li>&#127463;&#127486; ${J("Belarus","Беларусь")} &mdash; очевидно</li>\n        <li>&#127464;&#127487; Чехия</li>\n        <li>&#127466;&#127480; Испания</li>\n        <li>&#127467;&#127479; Франция</li>\n        <li>&#127468;&#127479; Греция</li>\n        <li>&#127475;&#127473; ${J("The Netherlands","Нидерланды")}</li>\n        <li>&#127477;&#127473; ${J("Poland","Польша")} &mdash; также очевидно :)</li>\n        <li>&#127479;&#127482; Россия</li>\n        <li>&#127481;&#127479; Турция</li>\n        <li>&#127482;&#127462; Украина</li>\n      </ul>\n    `},Ultramarined:{name:"Ультрамаринд",description:`\n      <p>\n        Прошло немало месяцев/лет после того, как ${J("Joy in Time","Радость во времени")}\n        внезапно распалась и смогла эволюционироваться в Ultramarined с новыми идеями и\n        вдохновением.\n      </p>\n      <p>\n        Мы успешно репетировали, сочиняли песни, выступали, и всё складывалось хорошо. До того\n        момента, как я не уехал в ${J("Kraków","Краков")}.\n      </p>\n      ${Y(oe("V5Pazkk","Ultramarined"),"Последнее выступление Ultramarined в 2015 году")}\n      <p>\n        Больше информации о группе доступно на\n        ${V("http://phts.github.io/ultramarined.by/","зеркале официального сайта")}.\n      </p>\n    `,data:{ultrimarine:"Заультрамаринить",unultrimarine:"Разультрамаринить"}},"Video games":{name:"Компьютерные игры",description:`\n      <p>\n        Люблю качественные и интересные компьютерные игры, в большинстве случаев квесты и стратегии.\n      </p>\n      <p>Произведшие на меня огромное впечатление, и производят до сих пор:</p>\n      <ul>\n        <li>${V("https://ru.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness","Warcraft 2")}\n          / ${V("https://ru.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos","3")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/StarCraft_(серия_игр)","Starcraft")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Stronghold","Stronghold")}</li>\n        <li>${J("Heroes of Might and Magic 3")}\n          / ${V("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV","4")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Half-Life_(серия_игр)","Half-Life")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Syberia","Syberia")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim","Majesty")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Mafia:_The_City_of_Lost_Heaven","Mafia")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Grand_Theft_Auto_(серия_игр)","GTA")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom","Война и Мир")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Portal","Portal")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Anno_1701","Anno 1701")}\n          / ${V("https://ru.wikipedia.org/wiki/Anno_1404","1404")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/Космические_рейнджеры","Космические рэйнджеры")}</li>\n        <li>${V("https://ru.wikipedia.org/wiki/The_Talos_Principle","The Talos Principle")}</li>\n      </ul>\n      <p>А также некоторые игры на ${J("ZX Spectrum")}.</p>\n    `},Vinyl:{name:"Винил",description:Y(oe("Mkb7mO9","Винил"),`Audio-Technica AT-LP120USBHC + Yamaha A-S501 + акустика, сделанная Анжеем Фигарским. ${V("https://www.discogs.com/user/phts/collection","Играет Lunatic Soul - Lunatic Soul II")}`)},VK:{name:"ВК",description:K(`${V("https://vk.com/phil.tsaryk","Моя страница")} в ВК.`)},"ZX Spectrum":{name:"Зэд Икс Спектрум",description:`\n      <p>\n        Мой первый компьютер. Первая строчка кода, написанная на нём,\n        была, скорее всего, <code>LOAD "" &crarr;</code> &mdash; для загрузки игры с кассеты.\n      </p>\n      <p>\n        Любимые игрушки: ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=2323","Highway Encounter")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=461","Battle Ships")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=1686","Exolon")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=5448","Tujad")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=639","Boulder Dash")},\n        ${V("https://spectrumcomputing.co.uk/index.php?cat=96&id=4784","Spy Hunter")} и многие другие.\n      </p>\n    `}};var me,de,he;!function(e){e.EN="EN",e.RU="RU"}(he||(he={}));const ue={EN:ce,RU:pe};var ge;!function(e){e[e.EN=0]="EN",e[e.RU=1]="RU",e[e.Title=2]="Title",e[e["©"]=3]="©",e[e["+375292181503"]=4]="+375292181503",e[e["+48534898187"]=5]="+48534898187",e[e.About=6]="About",e[e.Age=7]="Age",e[e.Ascending=8]="Ascending",e[e["bash.org"]=9]="bash.org",e[e.Belarus=10]="Belarus",e[e.Billiard=11]="Billiard",e[e.BitBucket=12]="BitBucket",e[e["Board games"]=13]="Board games",e[e.Categorize=14]="Categorize",e[e.Cats=15]="Cats",e[e.Colors=16]="Colors",e[e.Contacts=17]="Contacts",e[e["Curriculum vitae"]=18]="Curriculum vitae",e[e.Debian=19]="Debian",e[e.Drums=20]="Drums",e[e.Electronics=21]="Electronics",e[e.Email=22]="Email",e[e.Epam=23]="Epam",e[e.Facebook=24]="Facebook",e[e.Family=25]="Family",e[e.Feedback=26]="Feedback",e[e.Firefox=27]="Firefox",e[e.foobar2000=28]="foobar2000",e[e.GitHub=29]="GitHub",e[e["Grand Parade"]=30]="Grand Parade",e[e.Habr=31]="Habr",e[e["Heroes of Might and Magic 3"]=32]="Heroes of Might and Magic 3",e[e.Hobby=33]="Hobby",e[e.JavaScript=34]="JavaScript",e[e["Joy in Time"]=35]="Joy in Time",e[e["Kraków"]=36]="Kraków",e[e["Last.fm"]=37]="Last.fm",e[e.LinkedIn=38]="LinkedIn",e[e.Meta=39]="Meta",e[e.Music=40]="Music",e[e.Novopolotsk=41]="Novopolotsk",e[e["Phil Tsaryk"]=42]="Phil Tsaryk",e[e.PHTS=43]="PHTS",e[e["Pilip Tsaryk"]=44]="Pilip Tsaryk",e[e["Playing cards"]=45]="Playing cards",e[e.Poland=46]="Poland",e[e["Promo codes"]=47]="Promo codes",e[e.PSU=48]="PSU",e[e.Random=49]="Random",e[e.React=50]="React",e[e["Ritchie Blackmore"]=51]="Ritchie Blackmore",e[e.Ruby=52]="Ruby",e[e["SaM Solutions"]=53]="SaM Solutions",e[e["Škoda"]=54]="Škoda",e[e.Skype=55]="Skype",e[e["Software Engineer"]=56]="Software Engineer",e[e["Space Resonance"]=57]="Space Resonance",e[e["Stack Overflow"]=58]="Stack Overflow",e[e["Sublime Text"]=59]="Sublime Text",e[e.Telegram=60]="Telegram",e[e["The Netherlands"]=61]="The Netherlands",e[e.Traveling=62]="Traveling",e[e.Ultramarined=63]="Ultramarined",e[e["Video games"]=64]="Video games",e[e.Vinyl=65]="Vinyl",e[e.VK=66]="VK",e[e.Work=67]="Work",e[e["ZX Spectrum"]=68]="ZX Spectrum"}(ge||(ge={}));var we=i("HlG8"),ye=i.n(we),fe=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class be{constructor(e=he.EN){this.lang=e}setLang(e){this.lang=e}}fe([$.m],be.prototype,"lang",void 0),fe([$.d],be.prototype,"setLang",null);var ke=new be(/^ru(-.*)?$/.test(ye()())?he.RU:he.EN),$e=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const xe=(ve=ge,P.a(j.a(e=>"number"==typeof e),T.a)(ve));var ve;const Ee=B.a(e=>e,xe),Se=he.RU,Pe=ue[Se];function Te(e){return Object.assign({},A,N,{id:e,name:e})}function je(e,t){return P.a(D.a(Te),D.a(function(e,t){return(i,n)=>Object.assign({},i,H[n]||{},G[n]||{},I.a(["description"],t[n]),I.a(["name","description","data","tooltip"],e[n]))}(t,Pe)))(e)}class Oe{constructor(e){this.languageStore=e,this.cache={}}get items(){const e=this.cache[this.lang];if(e)return e;const t=je(Ee,this.currentTranslatedStrings);return this.cache[this.lang]=t,t}get lang(){return this.languageStore.lang}get currentTranslatedStrings(){return ue[this.lang]}}$e([$.f],Oe.prototype,"items",null),$e([$.f],Oe.prototype,"lang",null),$e([$.f],Oe.prototype,"currentTranslatedStrings",null);var Me,Ce=new Oe(ke),Re=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};!function(e){e.Asc="Asc",e.Categories="Categories",e.Random="Random"}(Me||(Me={}));const _e={Asc:x.a(v.a(E.a,S.a("name"))),Categories:x.a(S.a("id")),Random:_.a},Ae=["About","Contacts","Work","Hobby","Meta"];class He{constructor(e){this.items=e,this.mode=Me.Asc,this.list=[],Object($.e)(()=>{this.refresh()})}setMode(e){e===Me.Random&&this.mode===e&&(this.mode=null),this.mode=e}refresh(){this.mode===Me.Categories?this.refreshCategorizedList():this.refreshList()}refreshList(){this.list=P.a(T.a,j.a(O.a("type",f.Category)),e=>[b.Head,b.Middle,b.Tail].map(t=>M.a(O.a("position",t),e)),e=>[...e[0],..._e[this.mode](e[1]),...e[2]])(this.items.items)}refreshCategorizedList(){this.list=P.a(T.a,j.a(O.a("type",f.Category)),_e[Me.Asc],e=>Ae.map(t=>C.a([this.items.items[t]],M.a(O.a("category",t),e))),R.a)(this.items.items)}}Re([$.m],He.prototype,"mode",void 0),Re([$.m],He.prototype,"list",void 0),Re([$.d],He.prototype,"setMode",null);var Be=new He(Ce),Ie=ee.d.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({flexible:e})=>e?"space-around":"flex-start"};
  margin: 0;
  min-width: 100%;
  padding: 0.5rem 0;
`;var De;!function(e){e.Action="Action",e.Default="Default",e.Simple="Simple"}(De||(De={}));const Le={Action:"2px dotted",Default:"1px dashed",Simple:"0 none"};function Fe(e){return Le[e]}const ze={M:"1rem",L:"1.5rem",XL:"2rem",XXL:"2.5rem"},Ne={Category:De.Simple,Item:De.Default,Meta:De.Action};var Ue=e=>({flexible:t,item:i,onNavigate:n,width:r})=>a.a.createElement(e,{buttonType:Ne[i.type],data:i.data,description:i.description,flexBasis:r,flexible:t,fontSize:ze[i.size],itemId:i.id,onNavigate:n,text:i.name,tooltip:i.tooltip}),Ge=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var We=Object(ee.d)(e=>{var{border:t,fontSize:i}=e,n=Ge(e,["border","fontSize"]);return a.a.createElement("button",Object.assign({},n))})`
  background: none;
  border: 0 none;
  border-bottom: ${({border:e})=>e};
  color: inherit;
  cursor: pointer;
  font-size: ${({fontSize:e})=>e};
  margin: 0;
  padding: 0 2px;
`,Ke=i("GEYi"),Ve=e=>a.a.createElement(Je,Object.assign({},e),"*");const Je=ee.d.span`
  color: #aa0000;
  cursor: help;
  font-size: 1.3rem;
  opacity: 0.5;
`;var Xe=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var qe,Ye=(qe=e=>{var{buttonType:t,fontSize:i}=e,n=Xe(e,["buttonType","fontSize"]);return a.a.createElement(We,Object.assign({},n,{border:Fe(t),fontSize:i}))},e=>e.title?a.a.createElement("span",null,a.a.createElement(qe,Object.assign({},Object(Ke.a)(["title"])(e))),a.a.createElement(Ve,{title:e.title})):a.a.createElement(qe,Object.assign({},e))),Ze=ee.d.li.attrs(e=>({style:{flexBasis:`${e.flexBasis}vw`}}))`
  align-items: center;
  display: flex;
  flex-grow: ${({flexible:e})=>e?1:0};
  justify-content: center;
  margin: 0 1rem;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`;var Qe=Ue(Object(m.c)(({flexBasis:e,flexible:t,buttonType:i,fontSize:n,data:r})=>{const{ageStore:o}=y();return a.a.createElement(Ze,{flexBasis:e,flexible:t},a.a.createElement(Ye,{buttonType:i,fontSize:n},function(e,t){const{years:i,months:n,days:a,hours:r,minutes:o,seconds:l}=e.age;return`${i} ${t.years}       ${n} ${t.months}       ${a} ${t.days}       ${r} ${t.hours}       ${L(o)} ${t.min}       ${L(l)} ${t.sec}`}(o,r)))}));const et=ee.d.li`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  font-size: 2rem;
  list-style: none;
  margin-top: 1rem;
  text-align: left;
  white-space: nowrap;

  &:first-child {
    margin-top: 0;
  }
`;var tt=Ue(({text:e})=>a.a.createElement(et,null,"# ",e));var it=v.a(Ue)(e=>{const{uiStore:t}=y(),i=Object(n.useCallback)(()=>{t.backgroundColor=ae(),t.color=ae()},[]);return a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(Ye,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:i},e.text))}),nt=i("MHCJ");nt.init("user_C3T41f8F0pv1ekwT39nYw");var at=new class{send(e){const t={appLang:ke.lang,innerHeight:innerHeight,innerWidth:innerWidth,locale:ye()(),localTime:(new Date).toString(),referrer:document.referrer,screenHeight:screen.height,screenWidth:screen.width,text:e,userAgent:navigator.userAgent};return nt.send("feedback_tsaryk_com","tsaryk_com",t)}},rt=ee.d.form`
  background: ${e=>e.disabled?"rgba(102, 102, 102, 0.25)":"transparent"};
  border: ${Fe(De.Action)};
  cursor: ${e=>e.disabled?"not-allowed":"default"};

  & > * {
    vertical-align: middle;
  }
`,ot=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var lt=e=>{var{minLength:t,inputRef:i}=e,r=ot(e,["minLength","inputRef"]);i=i||Object(n.useRef)(null);const o=Object(n.useCallback)(()=>{const e=t||20,n=Math.max(i.current.value.length+2,e);i.current.style.width=`${n}ch`},[t]),l=Object(n.useCallback)(()=>{o()},[]);return Object(n.useEffect)(()=>{o()},[]),a.a.createElement("input",Object.assign({},r,{onKeyUp:l,ref:i,type:"text"}))},st=Object(ee.d)(lt)`
  background-color: transparent;
  border: 0 none;
  color: inherit;
  font-family: monospace;
  margin: 0;
  outline: none;
  padding: 0;

  &:disabled {
    cursor: not-allowed;
  }

  &::-ms-clear {
    display: none;
  }
`;const ct=["\\","|","/","-"],pt=ct.length;var mt,dt=()=>{const[e,t]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const e=window.setInterval(()=>{t(e=>(e+1)%pt)},100);return()=>clearInterval(e)},[]),a.a.createElement("span",null,ct[e])},ht=e=>ee.d.span`
  ${re}
  color: ${e.color};
  &::after {
    content: '\\${e.cssSymbol}';
  }
`,ut=ht({color:"green",cssSymbol:"2714"}),gt=ht({color:"red",cssSymbol:"2718"});!function(e){e[e.Processing=0]="Processing",e[e.Success=1]="Success",e[e.Failed=2]="Failed"}(mt||(mt={}));const wt=ee.d.span`
  font-family: monospace;
`;var yt=({state:e})=>a.a.createElement(wt,null,e===mt.Processing?a.a.createElement(dt,null):"",e===mt.Success?a.a.createElement(ut,null):"",e===mt.Failed?a.a.createElement(gt,null):""),ft=()=>a.a.createElement("span",null,"↵"),bt=()=>a.a.createElement(kt,{type:"submit"},a.a.createElement(ft,null));const kt=ee.d.button`
  background: none;
  border: 0 none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: 18px;
  margin: 0;
  padding: 0;
`;var $t=({placeholder:e,onFinished:t})=>{const i=Object(n.useRef)(null);let r;const[o,l]=Object(n.useState)(null),s=Object(n.useCallback)(e=>{27===e.keyCode&&(e.preventDefault(),t())},[t]),c=Object(n.useCallback)(e=>{l(e),r=window.setTimeout(()=>{l(null),t()},3e3)},[t]),p=Object(n.useCallback)(e=>{e.preventDefault();const t=e.target.text.value;t&&(l(mt.Processing),at.send(t).then(()=>{c(mt.Success)}).catch(()=>{c(mt.Failed)}))},[]);Object(n.useEffect)(()=>(i.current.value="",i.current.focus(),()=>clearTimeout(r)),[]);const m=null!==o;return a.a.createElement(rt,{onSubmit:p,disabled:m,noValidate:!0},a.a.createElement(st,{autoComplete:"off",disabled:m,inputRef:i,name:"text",onKeyDown:s,placeholder:e}),m?a.a.createElement(yt,{state:o}):a.a.createElement(bt,null))};var xt=Ue(e=>{const[t,i]=Object(n.useState)(!1),r=Object(n.useCallback)(()=>{i(!0)},[]),o=Object(n.useCallback)(()=>{i(!1)},[]);return a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},t?a.a.createElement($t,{onFinished:o,placeholder:e.data.sayHello}):a.a.createElement(Ye,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:r},e.text))});function vt(e){return Ue(t=>{const{langStore:i}=y(),r=Object(n.useCallback)(()=>{i.setLang(e)},[]);return a.a.createElement(Ze,{flexBasis:t.flexBasis,flexible:t.flexible},a.a.createElement(Ye,{buttonType:t.buttonType,fontSize:t.fontSize,onClick:r,title:t.tooltip},t.text))})}function Et(e){return Ue(t=>{const{listStore:i,widthsStore:r}=y(),o=Object(n.useCallback)(()=>{e!==i.mode&&r.randomize(i.list),i.setMode(e)},[]);return a.a.createElement(Ze,{flexBasis:t.flexBasis,flexible:t.flexible},a.a.createElement(Ye,{buttonType:t.buttonType,fontSize:t.fontSize,onClick:o},t.text))})}var St=ee.d.span`
  font-size: ${({fontSize:e})=>e};
`,Pt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var Tt=Object(ee.d)(e=>{var{buttonType:t,fontSize:i}=e,n=Pt(e,["buttonType","fontSize"]);return a.a.createElement(d.b,Object.assign({},n))})`
  border-bottom: ${e=>Fe(e.buttonType)};
  color: inherit;
  font-size: ${e=>e.fontSize};
  text-decoration: none;
`;var jt=Ue(e=>e.description||e.data?a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(Tt,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:e.onNavigate,to:e.itemId},e.text)):a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(St,{fontSize:e.fontSize},e.text)));const Ot=ee.d.a`
  color: inherit;
`;var Mt=Ue(({flexBasis:e,flexible:t})=>a.a.createElement(Ze,{flexBasis:e,flexible:t},a.a.createElement(Ot,{href:"http://tsaryk.com/"},"tsaryk.com")));const Ct={About:tt,Contacts:tt,Hobby:tt,Meta:tt,Work:tt,Age:Qe,Ascending:Et(Me.Asc),Categorize:Et(Me.Categories),Colors:it,EN:vt(he.EN),Feedback:xt,Random:Et(Me.Random),Title:Mt,RU:vt(he.RU)};var Rt=Object(m.c)(()=>{const{listStore:e,widthsStore:t}=y(),i=Object(n.useCallback)(()=>{localStorage.setItem("scrollTop",document.documentElement.scrollTop.toString())},[]);Object(n.useEffect)(()=>{document.documentElement.scrollTop=parseInt(localStorage.getItem("scrollTop")||"0",10)},[]);const r=e.mode!==Me.Categories,o=w.a(e=>{const n=r?t.getWidth(e.id):0,o=Ct[e.id]||jt;return a.a.createElement(o,{flexible:r,item:e,key:e.id,onNavigate:i,width:n})})(e.list);return a.a.createElement(Ie,{flexible:r},o)});var _t=e=>a.a.createElement(We,Object.assign({},e,{border:Fe(De.Action),fontSize:"1rem"})),At=e=>a.a.createElement("header",Object.assign({},e)),Ht=e=>a.a.createElement("footer",Object.assign({},e)),Bt=ee.d.div`
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100%;
  padding: 7rem 10rem;

  ${ie.max.tablet`
    padding: 5rem 7rem;
  `}
  ${ie.max.smartphone`
    padding: 2rem;
  `}
  ${ie.max.mobile`
    padding: 1rem;
  `}
`,It=ee.d.h1`
  margin: 0 0 1rem;
`;var Dt=({className:e,html:t})=>a.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:t}});var Lt=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=y();return a.a.createElement(Bt,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Dt,{className:e,html:t.description}),a.a.createElement(Ht,null,a.a.createElement(_t,{onClick:i},n.labels.close)))},Ft=i("mev3"),zt=({children:e,className:t})=>a.a.createElement("div",{className:t},e);function Nt(e,t){return 1.2+.5*(e-t)}var Ut=ee.d.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  ${e=>function(e){const t=[];for(let i=1;i<=e;i++)t.push(`\n      li:nth-child(${i}) {\n        font-size: ${Nt(e,i)}rem;\n        margin: 0.4em 0;\n      }\n    `);return t}(a.a.Children.toArray(e.children).length)}
`,Gt=({items:e})=>a.a.createElement(Ut,null,e.map(e=>a.a.createElement("li",{key:e.icon},a.a.createElement(Wt,{dangerouslySetInnerHTML:{__html:e.icon},title:e.tooltip}),e.text)));const Wt=ee.d.span`
  cursor: ${e=>e.title?"help":"default"};
  display: inline-block;
  margin-right: 0.5rem;
  text-align: right;
  width: 4rem;
`,Kt=Object(ee.d)(Ht)`
  padding-left: 4.5rem;
`;var Vt=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=y(),r=Object(Ft.a)({icon:"&#x1F408;",text:t.name})(t.data);return a.a.createElement(Bt,null,a.a.createElement(zt,{className:e},a.a.createElement(Gt,{items:r})),a.a.createElement(Kt,null,a.a.createElement(_t,{onClick:i},n.labels.close)))},Jt=i.p+"static/img/h3-default.2ca8.png",Xt=i.p+"static/img/h3-pointer.7d2e.png";const qt=Object(ee.d)(Bt)`
  cursor: url(${Jt}) 16 16, default;

  button {
    cursor: url(${Xt}) 16 16, pointer;
  }
`;var Yt=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=y();return a.a.createElement(qt,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Dt,{className:e,html:t.description}),a.a.createElement(Ht,null,a.a.createElement(_t,{onClick:i},n.labels.close)))};var Zt={backgroundColor:"#572fce",color:"white"},Qt=ee.d.div`
  > * {
    margin-right: 1rem;
  }
`,ei=Object(ee.d)(Bt)`
  background-color: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.color};
`,ti=Object(ee.d)(It)`
  text-align: center;
`,ii=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i},ni=e=>{var{imageId:t}=e,i=ii(e,["imageId"]);const n=`https://i.imgur.com/${t}`;return a.a.createElement("picture",null,a.a.createElement("source",{srcSet:`${n}t.jpg`,media:`(max-width: ${te.mobile}px)`}),a.a.createElement("source",{srcSet:`${n}m.jpg`,media:`(max-width: ${te.smartphone}px)`}),a.a.createElement("source",{srcSet:`${n}l.jpg`,media:`(max-width: ${te.tablet}px)`}),a.a.createElement("source",{srcSet:`${n}.jpg`,media:`(min-width: ${te.hd}px)`}),a.a.createElement("img",Object.assign({src:`${n}h.jpg`},i)))},ai=ee.d.span`
  color: white;
  font-family: 'Ledger', serif;
  font-size: 1.6rem;
  font-weight: normal;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,ri=()=>a.a.createElement(ai,null,"Ultramarined"),oi=ee.d.div`
  display: flex;
  min-height: 0;
  min-width: 0;
  padding: 2rem 0;

  & > * {
    flex: 1 1 auto;
    margin: 0 0 0 6%;

    &:first-child {
      margin-left: 0;
    }
  }
`;var li=e=>{const{i18nStore:t}=y(),[i,r]=Object(n.useState)(!1),o=Object(n.useCallback)(()=>{r(!i),window.scrollTo(0,0)},[i]),l=e.item.data,s=i?a.a.createElement(ti,null,a.a.createElement(ri,null)):a.a.createElement(It,null,e.item.name),c=i?a.a.createElement(zt,{className:e.className},a.a.createElement(oi,null,a.a.createElement(ni,{imageId:"XlCoMYy",alt:"Jenya"}),a.a.createElement(ni,{imageId:"82GwSq9",alt:"Dasha"}),a.a.createElement(ni,{imageId:"uAs0gjm",alt:"Galya"}),a.a.createElement(ni,{imageId:"i2VIacr",alt:"Phil"}))):a.a.createElement(Dt,{className:e.className,html:e.item.description}),p=i?l.unultrimarine:l.ultrimarine,m=a.a.createElement(ei,null,a.a.createElement(At,null,s),c,a.a.createElement(Ht,null,a.a.createElement(Qt,null,a.a.createElement(_t,{onClick:e.onClose},t.labels.close),a.a.createElement(_t,{onClick:o},p))));return i?a.a.createElement(ee.a,{theme:Zt},m):m},si=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const ci=ee.d.div`
  @media (max-width: 720px) {
    background-image: url(${e=>`${e.imgs.images[e.imgs.images.length-1].path}`});
    background-position-x: ${e=>-e.x*e.imgs.images[e.imgs.images.length-1].width/e.imgs.images[0].width}px;
    background-position-y: ${e=>-e.y*e.imgs.images[e.imgs.images.length-1].width/e.imgs.images[0].width}px;
    height: ${e=>e.height*e.imgs.images[e.imgs.images.length-1].width/e.imgs.images[0].width}px;
    width: ${e=>e.width*e.imgs.images[e.imgs.images.length-1].width/e.imgs.images[0].width}px;
  }
  @media (min-width: 720px) {
    background-image: url(${e=>`${e.imgs.images[0].path}`});
    background-position-x: ${e=>-e.x}px;
    background-position-y: ${e=>-e.y}px;
    height: ${e=>e.height}px;
    width: ${e=>e.width}px;
  }
  border-radius: 0.5em;
`,pi=Object(ee.d)(ci).attrs(()=>({as:"a",target:"_blank"}))`
  opacity: 1;
  transition: opacity 0.2s;

  &:focus,
  &:hover {
    opacity: 0.5;
  }
`;var mi=e=>{var{href:t}=e,i=si(e,["href"]);return t?a.a.createElement(pi,Object.assign({href:t},i)):a.a.createElement(ci,Object.assign({},i))},di=i("gdu7"),hi=i.n(di),ui=i("10pW"),gi=i.n(ui),wi=i("IdHV"),yi=i.n(wi),fi=i("X6lO"),bi=i.n(fi),ki=i("AK4d"),$i=i.n(ki),xi=i("KNvj"),vi=i.n(xi),Ei=i("ruF2"),Si=i.n(Ei);const Pi=ee.d.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1em;
`;var Ti=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=y();return a.a.createElement(Bt,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(zt,{className:e},a.a.createElement("p",null,t.data.p2),a.a.createElement("p",null,t.data.p1),a.a.createElement("figure",null,a.a.createElement(Pi,null,a.a.createElement(mi,{href:"https://playingarts.com/ru/special?utm_source=tema&utm_medium=banner&utm_campaign=300x300",title:"Playing Arts: Special Edition",x:1,y:0,width:105,height:142,imgs:hi.a}),a.a.createElement(mi,{title:"Царик Филипп №2",x:106,y:0,width:101,height:145,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/",title:"Оперные (репринт)",x:207,y:0,width:99,height:146,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/french-suit/classic-470/",title:"Karty do gry №490",x:307,y:0,width:96,height:147,imgs:hi.a}),a.a.createElement(mi,{title:"Greek cats",x:404,y:0,width:101,height:146,imgs:hi.a}),a.a.createElement(mi,{title:"Nude playing cards",x:506,y:0,width:101,height:146,imgs:hi.a}),a.a.createElement(mi,{title:"Lattjo",x:610,y:0,width:94,height:146,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-667.html",title:"Белый палех",x:705,y:0,width:93,height:149,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-154.html",title:"Госпожа удача",x:800,y:0,width:96,height:149,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-701.html",title:"Невские",x:900,y:0,width:93,height:150,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-133.html",title:"Атласные",x:994,y:0,width:95,height:150,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-152.html",title:"Командирские",x:1090,y:0,width:97,height:150,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/russian-motifs/derzhava/",title:"Derzhava",x:0,y:143,width:105,height:144,imgs:hi.a}),a.a.createElement(mi,{title:"Playing Cards Dollar",x:105,y:145,width:93,height:142,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-637.html",title:"Jacob's Bible Cards",x:198,y:143,width:104,height:141,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-1607.html",title:"100 гадоў БНР",x:303,y:147,width:105,height:146,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/otherm/abraxas/",title:"Abraxas",x:408,y:145,width:95,height:146,imgs:hi.a}),a.a.createElement(mi,{href:"https://www.behance.net/gallery/16822663/Hidden-part",title:"Hidden Part",x:504,y:147,width:89,height:140,imgs:hi.a}),a.a.createElement(mi,{href:"https://www.artiphany.com/products/kitten-club",title:"Kitten Club Playing Cards",x:593,y:147,width:104,height:144,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/international-style/royal-dollar/",title:"Playing cards",x:697,y:149,width:94,height:142,imgs:hi.a}),a.a.createElement(mi,{href:"https://www.artiphany.com/products/mermaid-playing-cards",title:"Mermaid Queen Playing Cards",x:791,y:148,width:102,height:143,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-151.html",title:"Державные",x:898,y:149,width:96,height:149,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-693.html",title:"Времена года",x:993,y:150,width:97,height:148,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.a.trionfi.eu/WWPCM/decks06/d04208/d04208.htm",title:"Skat",x:1092,y:149,width:94,height:145,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/classic/salon-karte-66/",title:"Salon-Karte №66",x:1,y:287,width:96,height:144,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/computer-games/pixel-art/",title:"Pixel Art",x:97,y:287,width:105,height:146,imgs:hi.a}),a.a.createElement(mi,{title:"Царик Филипп №3",x:202,y:287,width:101,height:148,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm",title:"Ennia",x:305,y:292,width:94,height:143,imgs:hi.a}),a.a.createElement(mi,{title:"Portugal",x:398,y:291,width:101,height:144,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-1341.html",title:"Rosina Watchmeister",x:499,y:289,width:96,height:145,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-1119.html",title:"Весела політика",x:594,y:291,width:106,height:146,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/",title:"Greek mythology",x:700,y:291,width:103,height:146,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/russian-motifs/atlasnye2/",title:"Атласные",x:802,y:292,width:96,height:149,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm",title:"Turkey",x:899,y:298,width:94,height:144,imgs:hi.a}),a.a.createElement(mi,{href:"https://www.russcards.com/lapin-cards",title:"Карты Лапиных",x:993,y:298,width:94,height:144,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-445.html",title:"Исторические",x:1089,y:294,width:97,height:149,imgs:hi.a}),a.a.createElement(mi,{href:"http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm",title:"Петергоф",x:0,y:0,width:95,height:150,imgs:gi.a}),a.a.createElement(mi,{href:"https://unitedcardists.com/viewtopic.php?f=8&t=5424",title:"Pixel Cards",x:95,y:0,width:106,height:146,imgs:gi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-272.html",title:"Московский сувенир",x:201,y:0,width:89,height:142,imgs:gi.a}),a.a.createElement(mi,{title:"Spider-Man",x:290,y:0,width:93,height:144,imgs:gi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/french-suit/vsya-vlast/",title:"Вся власть",x:382,y:0,width:97,height:147,imgs:gi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-282.html",title:"Партия",x:479,y:0,width:92,height:144,imgs:gi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-153.html",title:"Княжеские",x:571,y:0,width:96,height:150,imgs:gi.a}),a.a.createElement(mi,{href:"https://www.artlebedev.ru/space-invaders/",title:"Космические захватчики",x:668,y:0,width:93,height:147,imgs:gi.a}),a.a.createElement(mi,{href:"https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards",title:"Ephemerid",x:761,y:0,width:105,height:147,imgs:gi.a}),a.a.createElement(mi,{title:"Karty do PLAYowania",x:866,y:0,width:95,height:146,imgs:gi.a}),a.a.createElement(mi,{title:"Glow-in-the-dark playing cards",x:961,y:0,width:103,height:145,imgs:gi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-692.html",title:"Палех",x:1064,y:0,width:97,height:150,imgs:gi.a}),a.a.createElement(mi,{title:"Xuebao No. 2000",x:0,y:0,width:93,height:144,imgs:yi.a}),a.a.createElement(mi,{title:"Wanshengda 9706",x:93,y:0,width:94,height:144,imgs:yi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-148.html",title:"Времена года",x:188,y:0,width:93,height:143,imgs:yi.a}),a.a.createElement(mi,{title:"Mad night powered by Tabasco sauce",x:281,y:0,width:96,height:146,imgs:yi.a}),a.a.createElement(mi,{href:"https://www.russcards.com/modern-style",title:"Новый стиль",x:376,y:0,width:96,height:147,imgs:yi.a}),a.a.createElement(mi,{title:"Playing cards",x:472,y:0,width:104,height:145,imgs:yi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-690.html",title:"Славянские",x:576,y:0,width:96,height:149,imgs:yi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-155.html",title:"Диана",x:672,y:0,width:95,height:149,imgs:yi.a}),a.a.createElement(mi,{title:"Русский стиль",x:767,y:0,width:95,height:148,imgs:yi.a}),a.a.createElement(mi,{title:"Playing cards",x:863,y:0,width:93,height:143,imgs:yi.a}),a.a.createElement(mi,{title:"Карти за игра: 55 чудесни изгледа от България",x:956,y:0,width:95,height:147,imgs:yi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/international-style/international/",title:"International",x:1051,y:0,width:96,height:149,imgs:yi.a}),a.a.createElement(mi,{href:"https://www.artlebedev.ru/mafia/",title:"Mafia",x:0,y:0,width:94,height:149,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-700.html",title:"Майа",x:94,y:0,width:96,height:150,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-737.html",title:"Рейнские",x:190,y:0,width:106,height:156,imgs:bi.a}),a.a.createElement(mi,{title:"Dubai",x:296,y:0,width:95,height:146,imgs:bi.a}),a.a.createElement(mi,{href:"https://wearmedicine.com/p/medicine-karty-do-gry-11788",title:"Kartу do gry Medicine",x:391,y:0,width:96,height:150,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-732.html",title:"Karty do gry № 410",x:487,y:0,width:96,height:145,imgs:bi.a}),a.a.createElement(mi,{title:"Playing cards 777",x:583,y:0,width:96,height:146,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/otherm/brosmino-deck/",title:"Bicycle: Brosmind",x:679,y:0,width:104,height:148,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/personality/jagellonskie/",title:"Jagiellońskie",x:783,y:0,width:96,height:145,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/",title:"Низшие духи восточнославянской мифологии",x:879,y:0,width:94,height:150,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/advertising/science-fiction-1659/",title:"Sience-Fiction",x:972,y:0,width:105,height:147,imgs:bi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/classic/black-russian-1670/",title:"Black Russian",x:1077,y:0,width:105,height:148,imgs:bi.a}),a.a.createElement(mi,{title:"Thingvellir",x:0,y:0,width:94,height:147,imgs:$i.a}),a.a.createElement(mi,{href:"https://wearmedicine.com/p/medicine-karty-do-gry-16905",title:"Kartу do gry Medicine",x:94,y:0,width:96,height:148,imgs:$i.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/french-suit/luxury/",title:"Luxury",x:189,y:0,width:101,height:153,imgs:$i.a}),a.a.createElement(mi,{title:"Muzeum Powstania Warszawskiego",x:291,y:0,width:93,height:147,imgs:$i.a}),a.a.createElement(mi,{href:"http://dama-pik.com.ua/cards/classic/el-al-airlines/",title:"EL AL Air Lines",x:384,y:0,width:97,height:149,imgs:$i.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/drawings/romikartya-3/",title:"Romikartya 3",x:481,y:0,width:94,height:147,imgs:$i.a}),a.a.createElement(mi,{title:"Zamki w Polsce",x:575,y:0,width:91,height:142,imgs:$i.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/ethnography/polska-sztuka-ludowa/",title:"Polska Sztuka Ludowa",x:666,y:0,width:93,height:146,imgs:$i.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-1618.html",title:"Grzyby Polski",x:759,y:0,width:95,height:147,imgs:$i.a}),a.a.createElement(mi,{href:"http://dama-pik.com.ua/cards/mythology-and-fantasy/marry-christmas/",title:"Merry Christmas Playing Cards",x:854,y:0,width:96,height:147,imgs:$i.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-397.html",title:"Warka",x:950,y:0,width:96,height:148,imgs:$i.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/french-suit/rois-de-france/",title:"Rois de France",x:1047,y:0,width:104,height:148,imgs:$i.a}),a.a.createElement(mi,{title:"Roma",x:0,y:0,width:94,height:147,imgs:vi.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/music/pink-floyd-i/",title:"Pink Floyd",x:95,y:0,width:103,height:147,imgs:vi.a}),a.a.createElement(mi,{title:"Królewskie",x:197,y:0,width:95,height:147,imgs:vi.a}),a.a.createElement(mi,{href:"https://www.kickstarter.com/projects/sunishchabba/bosch-playing-cards-0",title:"Bosch",x:292,y:0,width:104,height:147,imgs:vi.a}),a.a.createElement(mi,{href:"https://www.kickstarter.com/projects/sunishchabba/a-motley-pack-transformation-playing-cards",title:"A Motley Pack",x:397,y:0,width:105,height:147,imgs:vi.a}),a.a.createElement(mi,{href:"https://www.kickstarter.com/projects/fallisdesign/broken-crowns-playing-cards",title:"Broken crowns",x:502,y:0,width:104,height:147,imgs:vi.a}),a.a.createElement(mi,{title:"Pokemon",x:588,y:0,width:58,height:91,imgs:Si.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-694.html",title:"Рококо",x:578,y:201,width:76,height:116,imgs:Si.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/",title:"Русский стиль",x:494,y:201,width:84,height:134,imgs:Si.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-137.html",title:"Лубочные",x:410,y:201,width:84,height:134,imgs:Si.a}),a.a.createElement(mi,{href:"http://www.dama-pik.com.ua/cards/humor/gra-wstepna/",title:"Gra wstępna",x:206,y:174,width:111,height:163,imgs:Si.a}),a.a.createElement(mi,{title:"Playing cards",x:208,y:0,width:150,height:171,imgs:Si.a}),a.a.createElement(mi,{title:"Царик Филипп №1",x:359,y:1,width:119,height:169,imgs:Si.a}),a.a.createElement(mi,{href:"http://www.ukrcards.com.ua/product-1503.html",title:"Schafkopf Tarock",x:318,y:171,width:92,height:167,imgs:Si.a}),a.a.createElement(mi,{href:"http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html",title:"Универсальное таро",x:478,y:0,width:110,height:201,imgs:Si.a}),a.a.createElement(mi,{title:"Playing cards",x:0,y:0,width:206,height:313,imgs:Si.a})),a.a.createElement("figcaption",null,t.data.imgTitle))),a.a.createElement(Ht,null,a.a.createElement(_t,{onClick:i},n.labels.close)))};const ji=ee.d.div`
  background-color: ${e=>e.theme.backgroundColor};
  min-height: calc(100% - 10rem);
  width: calc(100% - 10rem);
  z-index: 1;

  ${ie.max.smartphone`
    min-height: calc(100% - 5rem);
    width: calc(100% - 5rem);
  `}
`,Oi=ee.d.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  position: relative;
`,Mi=ee.c`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
`,Ci=ee.c`
  background-position: top left;
  background-repeat: repeat-y;
  background-size: 100% 2rem;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  ${ie.min.desktop`
    background-size: 100% 4rem;
  `}
`,Ri=ee.d.div`
  ${Mi}

  animation: preloading 4s step-end forwards;
  background-color: cyan;

  @keyframes preloading {
    0% {
      visibility: visible;
    }
    40% {
      background-color: red;
    }
    75% {
      background-color: cyan;
    }
    100% {
      visibility: hidden;
    }
  }
`,_i=ee.d.div`
  ${Mi}

  animation: starting 5s step-end 4s forwards;
  background-color: cyan;

  &::after {
    ${Ci}

    animation: telnyashka 0.8s linear infinite;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0) 0%,
      rgba(255, 0, 0, 0) 49%,
      rgba(255, 0, 0, 1) 50%,
      rgba(255, 0, 0, 1) 100%
    );
  }

  @keyframes telnyashka {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -4rem;
    }
  }

  @keyframes starting {
    0% {
      visibility: visible;
    }
    100% {
      visibility: hidden;
    }
  }
`,Ai=ee.d.div`
  ${Mi}

  animation: loading 10s step-end 9s infinite;
  background-color: yellow;

  &::before {
    ${Ci}

    animation: sample1 .25s step-start infinite;
    background-image: linear-gradient(to bottom, blue 0%, blue 24%, rgba(0, 0, 0, 0) 25%);

    ${ie.min.desktop`
      animation: sample1-desktop .25s step-start infinite;
    `}
  }

  &::after {
    ${Ci}

    animation: sample2 1s step-start infinite;
    background-image: linear-gradient(to bottom, blue 0%, blue 24%, rgba(0, 0, 0, 0) 25%);

    ${ie.min.desktop`
      animation: sample2-desktop 1s step-start infinite;
    `}
  }

  @keyframes sample1 {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: 0.5rem;
    }
    50% {
      background-position-y: 1rem;
    }
    75% {
      background-position-y: 1.5rem;
    }
    100% {
      background-position-y: 2rem;
    }
  }

  @keyframes sample2 {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: -0.5rem;
    }
    50% {
      background-position-y: -1rem;
    }
    75% {
      background-position-y: -1.5rem;
    }
    100% {
      background-position-y: -2rem;
    }
  }

  @keyframes sample1-desktop {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: 1rem;
    }
    50% {
      background-position-y: 2rem;
    }
    75% {
      background-position-y: 3rem;
    }
    100% {
      background-position-y: 4rem;
    }
  }

  @keyframes sample2-desktop {
    0% {
      background-position-y: 0;
    }
    25% {
      background-position-y: -1rem;
    }
    50% {
      background-position-y: -2rem;
    }
    75% {
      background-position-y: -3rem;
    }
    100% {
      background-position-y: -4rem;
    }
  }

  @keyframes loading {
    0% {
      visibility: visible;
    }
  }
`;var Hi=({children:e})=>a.a.createElement(Oi,null,a.a.createElement(Ri,null),a.a.createElement(_i,null),a.a.createElement(Ai,null),a.a.createElement(ji,null,e));var Bi=()=>{Object(n.useEffect)(()=>{window.scrollTo(0,0)},[])};const Ii={Cats:Vt,"Heroes of Might and Magic 3":Yt,"Playing cards":Ti,Ultramarined:li,"ZX Spectrum":({className:e,item:t,onClose:i})=>{const{i18nStore:n}=y();return a.a.createElement(Hi,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Dt,{className:e,html:t.description}),a.a.createElement(Ht,null,a.a.createElement(_t,{onClick:i},n.labels.close)))}};var Di=Object(h.g)(Object(ee.d)(({match:e,className:t,history:i})=>{const{itemsStore:r}=y(),o=Object(n.useCallback)(()=>{!function(e){e.push(u)}(i)},[]);Bi();const l=r.items[e.params.id];if(!l)return a.a.createElement(h.a,{to:u});const s=Ii[l.id]||Lt;return a.a.createElement(s,{item:l,onClose:o,className:t})})`
  a {
    color: inherit;
  }

  a[href^="callto"],
  a[href^="mailto"],
  a[href^="tel"] {
    white-space: nowrap;
  }

  a[href^="#/"] {
    border-bottom: ${Fe(De.Default)};
    text-decoration: none;
  }

  code {
    background-color: #333;
    color: white;
    padding: 0 3px;
    text-weight: bold;
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 1rem auto;
    max-width: 1200px;
  }

  figcaption {
    text-align: center;
  }

  picture img {
    width: 100%;
  }

  iframe.youtube {
    max-width: 720px;
    max-height: 410px;
    height: calc((100vw - 20rem) * 0.57);
    width: calc(100vw - 20rem);

    ${ie.max.tablet`
      height: calc((100vw - 14rem)  * 0.57);
      width: calc(100vw - 14rem);
    `}
    ${ie.max.smartphone`
      height: calc((100vw - 4rem)  * 0.57);
      width: calc(100vw - 4rem);
    `}
    ${ie.max.mobile`
      height: calc((100vw - 2rem)  * 0.57);
      width: calc(100vw - 2rem);
    `}
  }
`),Li=({backgroundColor:e,color:t})=>({backgroundColor:e,color:t}),Fi=ee.d.div`
  display: flex;
  flex-direction: column;
`,zi=ee.d.div`
  background-color: ${e=>e.theme.backgroundColor};
  box-sizing: border-box;
  color: ${e=>e.theme.color};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`;var Ni=Object(m.c)(({children:e})=>{const{uiStore:t}=y();return a.a.createElement(ee.a,{theme:Li(t)},a.a.createElement(Fi,null,a.a.createElement(zi,null,e)))}),Ui=()=>a.a.createElement(d.a,null,a.a.createElement(h.d,null,a.a.createElement(Ni,null,a.a.createElement(h.b,{exact:!0,path:u,component:Rt}),a.a.createElement(h.b,{path:g,component:Di})))),Gi=i("rx0e"),Wi=i("wiYN"),Ki=i("IIJ7"),Vi=i("JS2A"),Ji=i("pCOR"),Xi=i("KsMw"),qi=i("MiQI"),Yi=i("fumj"),Zi=i("OYLJ"),Qi=i("W5hp"),en=i("qDRa");var tn=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const nn={days:Gi.a,hours:Wi.a,minutes:Ki.a,months:Vi.a,seconds:e=>e,years:Ji.a},an={days:Xi.a,hours:qi.a,minutes:Yi.a,months:Zi.a,seconds:Qi.a,years:en.a},rn={seconds:()=>60,minutes:()=>60,hours:()=>24,days:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),0).getMonth();return i=e.getFullYear(),new Date(i,t+1,0).getDate();var i},months:()=>12,years:()=>999};class on{constructor(e){this.initialTime=e||new Date;const[t]=this.reduceDate(le,["years","months","days","hours","minutes","seconds"]);this.age=t,setInterval(()=>{this.inc()},1e3)}reduceDate(e,t){const i={},n=t.reduce((e,t)=>{const n=an[t](this.initialTime,e);return i[t]=n,nn[t](e,n)},e);return[i,n]}inc(){const{minutes:e,hours:t,days:i,months:n,years:a}=this.age;this.age=this.conformAge({seconds:this.age.seconds+1,minutes:e,hours:t,days:i,months:n,years:a})}conformAge(e){const t=["seconds","minutes","hours","days","months","years"];return t.forEach((i,n)=>!(e[i]<rn[i]())&&(e[i]=0,e[t[n+1]]++,!0)),e}}tn([$.m],on.prototype,"age",void 0);var ln,sn=new on,cn=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};!function(e){e[e.close=0]="close"}(ln||(ln={}));const pn={EN:{close:"Сlose"},RU:{close:"Закрыть"}};class mn{constructor(e){this.lang=e}get labels(){return pn[this.lang.lang]}}cn([$.f],mn.prototype,"labels",null);var dn=new mn(ke),hn=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class un{constructor(){this.backgroundColor="white",this.color="black"}}hn([$.m],un.prototype,"backgroundColor",void 0),hn([$.m],un.prototype,"color",void 0);var gn=new un,wn=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class yn{constructor(){this.widths={}}randomize(e){this.widths=P.a(B.a(S.a("id")),D.a(()=>Object(Q.a)(5,30)))(e)}getWidth(e){return this.widths[e]}}wn([$.m],yn.prototype,"widths",void 0),wn([$.d],yn.prototype,"randomize",null);var fn=new yn,bn={ageStore:sn,itemsStore:Ce,i18nStore:dn,langStore:ke,listStore:Be,uiStore:gn,widthsStore:fn},kn=ee.b`
  html {
    ${ie.max.tablet`
      font-size: 90%;
    `}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  * {
    flex: 0 1 auto;
  }
`;bn.widthsStore.randomize(bn.listStore.list);Object(r.render)(a.a.createElement(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,null),a.a.createElement(m.b,Object.assign({},bn),a.a.createElement(Ui,null))),null),document.getElementById("app"))},"10pW":function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-row4-1187.bfd9.png 1187w,"+i.p+"static/img/playing-cards-row4-1000.4fde.png 1000w",images:[{path:i.p+"static/img/playing-cards-row4-1187.bfd9.png",width:1187,height:150},{path:i.p+"static/img/playing-cards-row4-1000.4fde.png",width:1e3,height:126}],src:i.p+"static/img/playing-cards-row4-1187.bfd9.png",toString:function(){return i.p+"static/img/playing-cards-row4-1187.bfd9.png"},placeholder:void 0,width:1187,height:150}},AK4d:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-row7-1187.e5a2.png 1187w,"+i.p+"static/img/playing-cards-row7-1000.73ae.png 1000w",images:[{path:i.p+"static/img/playing-cards-row7-1187.e5a2.png",width:1187,height:152},{path:i.p+"static/img/playing-cards-row7-1000.73ae.png",width:1e3,height:128}],src:i.p+"static/img/playing-cards-row7-1187.e5a2.png",toString:function(){return i.p+"static/img/playing-cards-row7-1187.e5a2.png"},placeholder:void 0,width:1187,height:152}},IdHV:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-row5-1187.afe4.png 1187w,"+i.p+"static/img/playing-cards-row5-1000.6182.png 1000w",images:[{path:i.p+"static/img/playing-cards-row5-1187.afe4.png",width:1187,height:149},{path:i.p+"static/img/playing-cards-row5-1000.6182.png",width:1e3,height:126}],src:i.p+"static/img/playing-cards-row5-1187.afe4.png",toString:function(){return i.p+"static/img/playing-cards-row5-1187.afe4.png"},placeholder:void 0,width:1187,height:149}},KNvj:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-row8-1188.ce73.png 1188w,"+i.p+"static/img/playing-cards-row8-1000.156b.png 1000w",images:[{path:i.p+"static/img/playing-cards-row8-1188.ce73.png",width:1188,height:148},{path:i.p+"static/img/playing-cards-row8-1000.156b.png",width:1e3,height:125}],src:i.p+"static/img/playing-cards-row8-1188.ce73.png",toString:function(){return i.p+"static/img/playing-cards-row8-1188.ce73.png"},placeholder:void 0,width:1188,height:148}},X6lO:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-row6-1187.150e.png 1187w,"+i.p+"static/img/playing-cards-row6-1000.3c12.png 1000w",images:[{path:i.p+"static/img/playing-cards-row6-1187.150e.png",width:1187,height:156},{path:i.p+"static/img/playing-cards-row6-1000.3c12.png",width:1e3,height:131}],src:i.p+"static/img/playing-cards-row6-1187.150e.png",toString:function(){return i.p+"static/img/playing-cards-row6-1187.150e.png"},placeholder:void 0,width:1187,height:156}},gdu7:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-row1-1187.3d5d.png 1187w,"+i.p+"static/img/playing-cards-row1-1000.6356.png 1000w",images:[{path:i.p+"static/img/playing-cards-row1-1187.3d5d.png",width:1187,height:443},{path:i.p+"static/img/playing-cards-row1-1000.6356.png",width:1e3,height:373}],src:i.p+"static/img/playing-cards-row1-1187.3d5d.png",toString:function(){return i.p+"static/img/playing-cards-row1-1187.3d5d.png"},placeholder:void 0,width:1187,height:443}},ruF2:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-unusual-659.f881.png 659w",images:[{path:i.p+"static/img/playing-cards-unusual-659.f881.png",width:659,height:339}],src:i.p+"static/img/playing-cards-unusual-659.f881.png",toString:function(){return i.p+"static/img/playing-cards-unusual-659.f881.png"},placeholder:void 0,width:659,height:339}}}]);
//# sourceMappingURL=default~app.4d9d.js.map