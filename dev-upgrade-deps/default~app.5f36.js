(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/hs+":function(e,t,n){"use strict";n.r(t);var i=n("mXGw"),a=n.n(i),r=n("xARA"),l=(n.p,n.p,n("mj6n")),o=n.n(l),s=n("ssVN"),c=n.n(s),p=new o.a({id:"external-link",use:"external-link-usage",content:'<symbol id="external-link">\n  <g>\n    <g>\n      <polygon style="fill:currentColor" points="2,2 5,2 5,3 3,3 3,9 9,9 9,7 10,7 10,10 2,10   " />\n      <polygon style="fill:currentColor" points="6.211,2 10,2 10,5.789 8.579,4.368 6.447,6.5    5.5,5.553 7.632,3.421   " />\n    </g>\n  </g>\n</symbol>'}),m=(c.a.add(p),n("GcVA")),d=n("USb2"),h=n("oNR1"),u="/",g="/:id",k=n("/KhT");function y(){return a.a.useContext(m.a)}var w,f,b,E=n("cneo"),$=n("pKwR"),x=n("f93M"),v=n("ceze"),S=n("z45+"),_=n("CxYM"),P=n("uWba"),T=n("pXna"),O=n("T3Rs"),j=n("YZBk"),M=n("uKZA"),C=n("Q5NV"),H=n("0WAc");!function(e){e.Category="Category",e.Item="Item",e.Meta="Meta"}(w||(w={})),function(e){e.Head="Head",e.Middle="Middle",e.Tail="Tail"}(f||(f={})),function(e){e.M="M",e.L="L",e.XL="XL",e.XXL="XXL"}(b||(b={}));const R={position:f.Middle,size:b.M,type:w.Item},A={EN:{position:f.Head,type:w.Meta},RU:{position:f.Head,type:w.Meta},Title:{position:f.Head,size:b.XXL,type:w.Meta},"©":{position:f.Tail},About:{type:w.Category},Contacts:{type:w.Category},Hobby:{type:w.Category},Meta:{type:w.Category},Work:{type:w.Category},Ascending:{type:w.Meta},Categorize:{type:w.Meta},Colors:{type:w.Meta},Feedback:{type:w.Meta},Random:{type:w.Meta},Belarus:{size:b.L},"Board games":{size:b.L},Cats:{size:b.XL},"Curriculum vitae":{size:b.L},Drums:{size:b.XL},GitHub:{size:b.L},Family:{size:b.XL},JavaScript:{size:b.XL},"Kraków":{size:b.L},Music:{size:b.XL},"Phil Tsaryk":{size:b.XXL},"Playing cards":{size:b.L},React:{size:b.L},"Software Engineer":{size:b.L},Traveling:{size:b.L}};var B=n("ndCU"),D=n("bxtJ"),I=n("efyt");function z(e){return("0"+e.toString()).slice(-2)}var F=n("+Sao"),L=n("qXsV");const N={category:null},U={};F.a((e,t)=>{L.a(e=>{U[e]={category:t}},e)},{About:["Age","Belarus","Facebook","Family","Kraków","LinkedIn","Novopolotsk","Phil Tsaryk","Pilip Tsaryk","Poland","VK"],Contacts:["+375292181503","+48534898187","Email","Skype","Telegram"],Hobby:["Billiard","Board games","Cats","Drums","Heroes of Might and Magic 3","Joy in Time","Last.fm","Music","Playing cards","Promo codes","Ritchie Blackmore","Space Resonance","Škoda","The Netherlands","Traveling","Ultramarined","Video games","Vinyl","ZX Spectrum","bash.org","foobar2000"],Meta:["About","Ascending","Categorize","Colors","Contacts","EN","Feedback","Hobby","Meta","RU","Random","Title","Work","©"],Work:["BitBucket","Curriculum vitae","Debian","Epam","Firefox","GitHub","Grand Parade","Habr","JavaScript","PSU","React","Ruby","SaM Solutions","Software Engineer","Stack Overflow","Sublime Text"]});const G=U;function W(e,t,n=[]){return`<a ${[`href="${e}"`,...n].join(" ")}>${t}</a>`}function K(e){return`<p>${e}</p>`}function J(e,t){var n,i;return`${W(e,`${t}${n="external-link",`<svg height="${(i={height:12,width:12,viewBox:"0 0 12 12"}).height}" width="${i.width}" viewBox="${i.viewBox}"><use xlink:href="#${n}"/></svg>`}`,['target="_blank"'])}`}function V(e,t=e){return W(`#/${e}`,t)}function X(e,t=e){return J(`mailto:${e}`,t)}function q(e,t=e){return J(`tel:${e}`,t)}function Y(e,t){return`\n    <figure>\n      ${e}\n      <figcaption>${t}</figcaption>\n    </figure>\n  `}function Z(e){return`\n    <iframe\n      class="youtube"\n      width="560"\n      height="315"\n      src="https://www.youtube.com/embed/${e}?rel=0"\n      frameborder="0"\n      allow="autoplay; encrypted-media"\n      allowfullscreen>\n    </iframe>\n  `}var Q=n("Ikss"),ee=n("UutA");const te={mobile:320,smartphone:480,tablet:720,desktop:1020,hd:1440},ne=Object.keys(te).reduce((e,t)=>(e.min=e.min||{},e.min[t]=(e,...n)=>ee.c`
      @media (min-width: ${te[t]}px) {
        ${Object(ee.c)(e,...n)};
      }
    `,e.max=e.max||{},e.max[t]=(e,...n)=>ee.c`
      @media (max-width: ${te[t]}px) {
        ${Object(ee.c)(e,...n)};
      }
    `,e),{});function ie(){return Object(Q.a)(0,255)}function ae(){return`rgb(${ie()}, ${ie()}, ${ie()})`}const re=ee.c`
  animation: blink 1s linear infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;function le(e,t){const n=`https://i.imgur.com/${e}`;return`\n    <picture>\n      <source srcset="${n}t.jpg" media="(max-width: ${te.mobile}px)">\n      <source srcset="${n}m.jpg" media="(max-width: ${te.smartphone}px)">\n      <source srcset="${n}l.jpg" media="(max-width: ${te.tablet}px)">\n      <source srcset="${n}.jpg" media="(min-width: ${te.hd}px)">\n      <img src="${n}h.jpg" alt=${t}>\n    </picture>\n  `}const oe=new Date(1987,11,3,10,15,0),se="https://www.last.fm/user/phil_tsarik",ce={EN:{tooltip:"Not fully translated yet. Sorry."},RU:{},"©":{name:"© Phil Tsaryk, 2019",description:`\n      <p>This site was created and being supported by ${V("Phil Tsaryk","me")} in free time.</p>\n      <p>Main technologies:</p>\n      <ul>\n        <li>MobX</li>\n        <li>React</li>\n        <li>TypeScript</li>\n      </ul>\n      <p>The source code is ${J("https://github.com/phts/tsaryk.com","on Github")}.</p>\n    `},About:{},Contacts:{},Hobby:{},Meta:{},Work:{},"+375292181503":{description:K(`My Byelorussian phone number: ${q("+375292181503","+375 29 218-15-03")}.`)},"+48534898187":{description:K(`My Polish phone number: ${q("+48534898187","+48 534 898 187")}.`)},Age:{data:{days:"days",hours:"hours",min:"min",months:"months",sec:"sec",years:"years"}},Ascending:{},"bash.org":{},Belarus:{description:K("My native country is Belarus.")},Billiard:{description:K("Playing &#x1F3B1; in most cases.")},BitBucket:{description:`\n      <p>\n        Using it for private projects as well as for old non-actual ones which should not be on\n        ${V("GitHub")}. BitBucket has nice feature to group repos by projects that helps to keep\n        actual projects and non-actual ones separatelly.\n      </p>\n      <p>Currently there are a few public projects:</p>\n      <ul>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/JAV","First Java Apps")}\n          &mdash; my first apps written on Java when started to leart it.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/OLD","Old Delphi Apps")}\n          &mdash; programs written on Delphi in 2004&ndash;2006 years.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/PSU","University Projects")}\n          &mdash; programswhich were written by me during studying in ${V("PSU","University")}.\n        </li>\n      </ul>\n    `},"Board games":{description:`\n      <p>I like playing board games especially strategic.</p>\n      <p>Among those what we have I can select:</p>\n      <ul>\n        <li>${J("https://en.wikipedia.org/wiki/Evolution:_The_Origin_of_Species","Evolution: The Origin of Species")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Hive_(game)","Hive")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/7_Wonders_(board_game)","7 wonders")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Galaxy_Trucker","Galaxy Trucker")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Splendor_(game)","Splendor")}</li>\n      </ul>\n    `},Categorize:{},Cats:{data:[{icon:"&#x1F989;",text:"Owls"},{icon:"&#x1F47D;",text:"Raccoons",tooltip:"Raccoons don't have their own emoji in unicode yet"},{icon:"&#x1F98A;",text:"Foxes"},{icon:"&#x1F418;",text:"Elephants"}]},Colors:{},"Curriculum vitae":{description:`\n      <p>\n        In short &mdash; I am ${V("JavaScript","frontend")} developer with more than seven\n        years of expierence.\n        Having deep knowladge and understanding of modern web-technologies and frameworks.\n      </p>\n      <p>\n        In full &mdash; always up-to-date CV is available on my\n        ${J("https://github.com/phts/my-cv","GitHub profile")} as well as on\n        ${J("https://www.linkedin.com/in/tsaryk/","LinkedIn")}.\n      </p>\n    `},Debian:{description:K("Working in Debian.")},Drums:{description:`\n      <p>My set:</p>\n      <ul>\n        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>\n        <li>Paiste 2002 Medium Crash 18&Prime;</li>\n        <li>Paiste Signature Precision Crash 17&Prime;</li>\n        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>\n        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>\n        <li>Drum sticks Vater Los Angeles 5A</li>\n      </ul>\n      <p>Used to play in these bands as a drummer:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n    `},Email:{description:K(`My email: ${X("phil@tsaryk.com")}.`)},Epam:{description:`\n      <p>\n        Relocated to ${V("Kraków")} and have been worked in Epam\n        ${V("Curriculum vitae","for little more than two years")}.\n      </p>\n      <p>\n        Learned here Angular and ${V("React")},\n        was participating in trainings, conducting workshops, interviewing new candidates.\n      </p>\n      <p>Projects &mdash; it depends. In most cases there is a lot of boring and legacy stuff.</p>\n      <p>After Epam working in ${V("Grand Parade")}.</p>\n    `},Facebook:{description:`\n      <p>${J("https://www.facebook.com/ph.tsaryk","My page")} on facebook.</p>\n      <p>Being here very very rarely.</p>\n    `},Family:{},Feedback:{data:{sayHello:"Say hello..."}},Firefox:{description:`\n      <p>\n        Using Firefox only. I don't like Chrome from its very beggining due to impossibility to\n        customize it for my needs.\n      </p>\n      <p>\n        ${J("https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts","Occasionally writing")} simple addons for FF.\n      </p>\n    `},foobar2000:{description:`\n      <p>Excellent music player. Using it on my PC and smartphone.</p>\n      <p>\n        Even created a small and useful plugin\n        ${J("https://hydrogenaud.io/index.php/topic,110908.0.html","Party Shuffle")}.\n      </p>\n    `},GitHub:{description:K(`${J("https://github.com/phts","There are")} my useful and useless projects\n      which are accessible for everyone.`)},"Grand Parade":{description:`\n      <p>\n        A company where ${V("Curriculum vitae","currently")} I am working in.\n        This is a part of a big bookmaker\n        ${J("https://en.wikipedia.org/wiki/William_Hill_(bookmaker)","William Hill")}.\n      </p>\n      <p>Excellent product company, fine projects, fine people.</p>\n    `},Habr:{},"Heroes of Might and Magic 3":{description:`\n      <p>\n        I like playing to ${J("https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III","HoMM3")}\n        / ${J("http://h3hota.com/en/documentation","HotA")} when having free time.\n      </p>\n      <p>\n        It is nice since the game is old it still has a huge community, tournaments are taking\n        place, new addons and patches are being released.\n      </p>\n    `},JavaScript:{description:`\n      <p>\n        The main direction of my expertise &mdash; JavaScript and everything related to it\n        including ES6+, Angular, ${V("React")}, Node.js, Typescript, etc.\n      </p>\n    `},"Joy in Time":{description:`\n      <p>\n        This band in some degree is an oposite of ${V("Space Resonance")} in style and mood.\n        In spite of this I used to play in this group with great pleasure.\n      </p>\n      <p>\n        ${Z("egVPsfDi81A")}\n      </p>\n      <p>There is vk page: ${J("https://vk.com/joyintimes","joyintimes")}</p>\n    `},"Kraków":{description:K(`Living here with ${V("Family","my family")} more than three years.`)},"Last.fm":{description:K(`${J(se,"My profile")} on Last.fm`)},LinkedIn:{description:K(`${J("https://www.linkedin.com/in/tsaryk/","My profile")} on LinkedIn.`)},Music:{description:`\n      <p>One of most important part of my life.</p>\n      <h3>Listening</h3>\n      <p>My toplist at the moment:<p>\n      <ul>\n        <li>Pink Floyd</li>\n        <li>Lunatic Soul</li>\n        <li>Riverside</li>\n        <li>Deep Purple</li>\n        <li>Opeth</li>\n        <li>The Gathering</li>\n        <li>Led Zeppelin</li>\n        <li>God Is An Astronaut</li>\n        <li>Anathema</li>\n      </ul>\n      <p>Also I have ${V("Last.fm","Last.fm profile")}.</p>\n      <p>Often listening to music ${V("Vinyl","on vinyl")}.</p>\n      <h3>Playing</h3>\n      <p>...${V("Drums","drums")}.<p>\n      <p>Used to play in bands:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n      <h3>Going to concerts</h3>\n      <p>From my must-have list already visited:</p>\n      ${Y(le("FykwSDm","Deep Purple in Minsk, 2011"),"Deep Purple in Minsk, 2011")}\n      ${Y(le("qIIb0bR","God is an Astronaut in Saint Petersburg, 2012"),"God is an Astronaut in Saint Petersburg, 2012")}\n      ${Y(le("dPNRWdG","Australian Pink Floyd Show in Minsk, 2013"),"Australian Pink Floyd Show in Minsk, 2013")}\n      ${Y(le("tcyuP0Q","Dream Theater in Katowice, 2015"),"Dream Theater in Katowice, 2015")}\n      ${Y(le("yDFhHGF","Riverside in Katowice, 2015"),"Riverside in Katowice, 2015")}\n      ${Y(le("5oDXQ4s","David Gilmour in France, 2016"),"David Gilmour in France, 2016")}\n      ${Y(le("pxy4Skj","Anathema in Kraków, 2017"),"Anathema in Kraków, 2017")}\n      ${Y(le("FOuMsdO","Opeth in Warsaw, 2017"),"Opeth in Warsaw, 2017")}\n      ${Y(le("zMy5wbq","Roger Waters in Kraków, 2018"),"Roger Waters in Kraków, 2018")}\n      ${Y(le("mROYG5y","Nightwish in Kraków, 2018"),"Nightwish in Kraków, 2018")}\n      ${Y(le("KhtC73G","RPWL in Warsaw, 2019"),"RPWL in Warsaw, 2019")}\n      ${Y(le("x7kkpYK","Pink in Warsaw, 2019"),"Pink in Warsaw, 2019")}\n      <p>Remaining:</p>\n      <ul>\n      <li>${V("Ritchie Blackmore","Rainbow or Ritchie Blackmore's Night")}</li>\n      <li>The Gathering</li>\n      <li>The Morningside</li>\n      </ul>\n    `},Novopolotsk:{description:`\n      <p>\n        My native town. It is located in Vitsebsk Province, ${V("Belarus")}.\n        Coordinates:\n        ${J("https://tools.wmflabs.org/geohack/geohack.php?pagename=Novopolotsk&params=55_32_N_28_39_E_region:BY_type:city","55°32′00″ N 28°40′00″ E")}\n      </p>\n    `},"Phil Tsaryk":{description:`\n      <p>\n        My name is Phil Tsaryk. I was born December 3 1987 in ${V("Novopolotsk")}\n        in BSSR (now &mdash; ${V("Belarus")}).\n      </p>\n      <p>\n        In 2011 graduated from ${V("PSU","Polotsk State University")} with a speciality\n        ${V("Software Engineer")}.\n      </p>\n      <p>\n        Nowadays live in ${V("Kraków")} and work as\n        ${V("JavaScript","a frontend developer")} in ${V("Grand Parade")}.\n      </p>\n    `},"Pilip Tsaryk":{description:"\n      <p>My legal name.</p>\n      <p>This is how it is written in my passport.</p>\n    "},"Playing cards":{data:{p1:"Collecting since my childhood.",p2:"There is no purpose to gather everything from everywhere, so the collection is no so big and contains today more than 90 decks. Collecting those which I really like.",imgTitle:"One card from each deck (clickable). November 2019"}},Poland:{description:K(`Currently living in Poland in ${V("Kraków")}.`)},"Promo codes":{description:`\n      <p>\n        Feel free to use:\n      </p>\n      <ul>\n        <li>Airbnb: ${J("https://www.airbnb.ru/c/philt68?currency=PLN","philt68")}</li>\n        <li>Allegro: ${J("https://allegro.pl/aplikacja/polecam/pilip782627","pilip782627")}</li>\n        <li>Bank Millennium:\n          ${J("https://www.bankmillennium.pl/lubietopolecam?id=24586296","24586296")}</li>\n        <li>Bolt (Taxify): S5S8K8</li>\n        <li>Booking.com: ${J("https://www.booking.com/s/18_6/pilip212","pilip212")}</li>\n        <li>Hulaj: zDNRAA</li>\n        <li>Maxim: 9D06F7E7</li>\n        <li>Revolut: ${J("https://revolut.com/r/pilip1ip","pilip1ip")}</li>\n        <li>Uber: ${J("https://www.uber.com/invite/3daguge8ue","3daguge8ue")}</li>\n      </ul>\n    `},PSU:{},Random:{},React:{description:K(`At this moment I am specializing exactly ${J("https://reactjs.org/","on this library")}.`)},"Ritchie Blackmore":{description:K("In my opinion the best guitarist ever.")},Ruby:{description:`\n      <p>Cool scripting language.</p>\n      <p>\n        In spite of a fact that I am a ${V("JavaScript","frontender")}, sometimes writing\n        various useful things on Ruby.\n      </p>\n    `},"SaM Solutions":{},"Škoda":{},Skype:{description:K(`Deprecated in favor of ${V("Telegram")}.`)},"Software Engineer":{description:K(`My speciality after graduating from ${V("PSU","university")}.`)},"Space Resonance":{},"Stack Overflow":{description:`\n      <p>\n        Sometimes I ${J("https://stackoverflow.com/users/2462524/phts","ask and answer")} questions\n        on ${J("https://stackoverflow.com/","Stack Overflow")}.\n      </p>\n    `},"Sublime Text":{description:`\n      <p>Great code editor. Using it every day.</p>\n      <p>\n        Occasionally I\n        ${J("https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=","make plugins")} for it.\n      </p>\n    `},Telegram:{description:K(`My username in Telegram: ${J("https://t.me/ptsaryk","@ptsaryk")}`)},Title:{},"The Netherlands":{description:K("Someday I will live there for sure.")},Traveling:{description:`\n      <p>\n        I like traveling with my ${V("Family","family")}. ${V("Škoda","By car")},\n        by train, by plane, by anything.\n      </p>\n      <p>There are countries which we have already visited:</p>\n      <ul style="list-style-type: none;">\n        <li>&#127463;&#127486; ${V("Belarus")} &mdash; obviously</li>\n        <li>&#127464;&#127487; Czech Republic</li>\n        <li>&#127466;&#127480; Spain</li>\n        <li>&#127467;&#127479; France</li>\n        <li>&#127468;&#127479; Greece</li>\n        <li>&#127475;&#127473; ${V("The Netherlands")}</li>\n        <li>&#127477;&#127473; ${V("Poland")} &mdash; also obviously :)</li>\n        <li>&#127479;&#127482; Russia</li>\n        <li>&#127481;&#127479; Turkey</li>\n        <li>&#127482;&#127462; Ukraine</li>\n      </ul>\n    `},Ultramarined:{data:{ultrimarine:"Ultramarine me!",unultrimarine:"Unultramarine"}},"Video games":{description:`\n      <p>\n        I like high-quality and interesting computer games, in most cases quests and strategies.\n      </p>\n      <p>Made a huge impression on me and still making:</p>\n      <ul>\n        <li>${J("https://en.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness","Warcraft 2")}\n          / ${J("https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos","3")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/StarCraft","Starcraft")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Stronghold_(2001_video_game)","Stronghold")}</li>\n        <li>${V("Heroes of Might and Magic 3")}\n          / ${J("https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV","4")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Half-Life_(series)","Half-Life")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Syberia","Syberia")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim","Majesty")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Mafia_(video_game)","Mafia")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Grand_Theft_Auto","GTA")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom","Knights and Merchants: The Shattered Kingdom")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Portal_(series)","Portal")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Anno_1701","Anno 1701")}\n          / ${J("https://en.wikipedia.org/wiki/Anno_1404","1404")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Space_Rangers_(video_game)","Space Rangers")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/The_Talos_Principle","The Talos Principle")}</li>\n      </ul>\n      <p>And some games on ${V("ZX Spectrum")} as well.</p>\n    `},Vinyl:{description:Y(le("Mkb7mO9","Винил"),"Audio-Technica AT-LP120USBHC + Yamaha A-S501 + Hand-made speakers by Andrzej Figarski.")},VK:{description:K(`${J("https://vk.com/phil.tsaryk","My profile")} in VK.`)},"ZX Spectrum":{description:`\n      <p>\n        My first computer. First line of code there most likely was <code>LOAD "" &crarr;</code>\n        &mdash; to load game from сassette tape.\n      </p>\n      <p>\n        Most loved games: ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=2323","Highway Encounter")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=461","Battle Ships")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=1686","Exolon")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=5448","Tujad")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=639","Boulder Dash")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=4784","Spy Hunter")} and many more.\n      </p>\n    `}},pe={EN:{name:"АНГ",tooltip:"Not fully translated yet. Sorry."},RU:{name:"РУС"},"©":{name:"© Филипп Царик, 2019",description:`\n      <p>Этот сайт создавался и поддерживается ${V("Phil Tsaryk","мной")} в свободное время.</p>\n      <p>Основные используемые технологии:</p>\n      <ul>\n        <li>MobX</li>\n        <li>React</li>\n        <li>TypeScript</li>\n      </ul>\n      <p>Исходный код сайта выложен ${J("https://github.com/phts/tsaryk.com","на Гитхабе")}.</p>\n    `},About:{name:"Обо мне"},Contacts:{name:"Контакты"},Hobby:{name:"Хобби"},Meta:{name:"Мета"},Work:{name:"Работа"},"+375292181503":{description:K(`Мой белорусский номер телефона: ${q("+375292181503","+375 29 218-15-03")}.`)},"+48534898187":{description:K(`Мой польский номер телефона: ${q("+48534898187","+48 534 898 187")}.`)},Age:{name:"Возраст",data:{days:"дн.",hours:"ч.",min:"мин.",months:"мес.",sec:"сек.",years:"лет"}},Ascending:{name:"По порядку"},"bash.org":{name:"Башорг",description:K(`Когда-то давно случайно ${J("http://bash.im/quote/393345","попал")} на\n      bash.org.`)},Belarus:{name:"Беларусь",description:K("Родом из Беларуси.")},Billiard:{name:"Бильярд",description:K("Играю в &#x1F3B1; в большинстве случаев.")},BitBucket:{name:"БитБакет",description:`\n      <p>\n        Использую как для приватных проектов, так и для неактуальных, которым нечего делать на\n        ${V("GitHub","Гитхабе")}. БитБакет позволяет группировать репозитории по проектам, что\n        очень помогает отсортировать актуальные репозитории от устаревших.\n      </p>\n      <p>На данный момент в публичный доступ выложены:</p>\n      <ul>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/JAV","First Java Apps")}\n          &mdash; первые программы, написанные на Джаве, когда её начал изучать.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/OLD","Old Delphi Apps")}\n          &mdash; программы, написанные на Delphi примерно в 2004&ndash;2006 годах.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/PSU","University Projects")}\n          &mdash; программы, которые были написаны в период обучения в\n          ${V("PSU","университете")}.\n        </li>\n      </ul>\n    `},"Board games":{name:"Настольные игры",description:`\n      <p>Люблю играть в настолки, особенно в стратегические.</p>\n      <p>Из того, что есть у нас, можно выделить:</p>\n      <ul>\n        <li>${J("ttps://ru.wikipedia.org/wiki/Эволюция_(настольная_игра)","Эволюция")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Улей_(игра)","Улей")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/7_Чудес","7 чудес")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Galaxy_Trucker","Космические дальнобойщики")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Splendor_(game)","Роскошь")}</li>\n      </ul>\n    `},Categorize:{name:"По категориям"},Cats:{name:"Коты",data:[{icon:"&#x1F989;",text:"Совы"},{icon:"&#x1F47D;",text:"Еноты",tooltip:"У енотов пока нет своего emoji в юникоде"},{icon:"&#x1F98A;",text:"Лисицы"},{icon:"&#x1F418;",text:"Слоны"}]},Colors:{name:"Цвета"},"Curriculum vitae":{name:"Резюме",description:`\n      <p>\n        Если коротко &mdash; я ${V("JavaScript","фронтэнд")} разработчик с более, чем семью\n        годами стажа.\n        Обладаю глубокими знаниями современных веб-технологий и фреймворков.\n      </p>\n      <p>\n        Если подробнее &mdash; всегда актуальное резюме доступно на\n        ${J("https://github.com/phts/my-cv","Гитхабе")}, а также на\n        ${J("https://www.linkedin.com/in/tsaryk/","Линкедине")}.\n      </p>\n    `},Debian:{name:"Дебиан",description:K("Работаю на Debian.")},Drums:{name:"Барабаны",description:`\n      <p>Мой сет:</p>\n      <ul>\n        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>\n        <li>Paiste 2002 Medium Crash 18&Prime;</li>\n        <li>Paiste Signature Precision Crash 17&Prime;</li>\n        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>\n        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>\n        <li>Палочки Vater Los Angeles 5A</li>\n      </ul>\n      <p>Играл в качестве барабанщика в группах:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time","Радость во времени")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n    `},Email:{name:"Имейл",description:K(`Мой имейл: ${X("phil@tsaryk.com")}.`)},Epam:{name:"Епам",description:`\n      <p>\n        Релоцировался в ${V("Kraków","Краков")} и проработал в Епаме\n        ${V("Curriculum vitae","чуть больше двух лет")}.\n      </p>\n      <p>\n        Изучил тут Ангуляр и ${V("React","Реакт")},\n        ходил на тренинги, проводил воркшопы, собеседовал новых кандидатов.\n      </p>\n      <p>С проектом &mdash; как повезёт. Но в большинстве случаев много неинтересного и легаси.</p>\n      <p>После Епама перешёл в ${V("Grand Parade","Гранд Парэйд")}.</p>\n    `},Facebook:{name:"Фейсбук",description:`\n      <p>${J("https://www.facebook.com/ph.tsaryk","Моя страничка")} на фэйсбуке.</p>\n      <p>Захожу туда очень редко.</p>\n    `},Family:{name:"Семья",description:le("2GcRB9u","Царики")},Feedback:{name:"Обратная связь",data:{sayHello:"Скажите «привет»..."}},Firefox:{name:"Файерфокс",description:`\n      <p>\n        Пользуюсь только файерфоксом. Не взлюбил Хром с самого начала из-за невозможности его\n        настроить под себя.\n      </p>\n      <p>\n        ${J("https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts","Иногда пишу")} простые аддоны для фф.\n      </p>\n    `},foobar2000:{name:"фубар2000",description:`\n      <p>Отличный плеер музыки. Пользуюсь им на компе и телефоне.</p>\n      <p>\n        Однажды даже написал простой, но полезный плагин\n        ${J("https://hydrogenaud.io/index.php/topic,110908.0.html","Party Shuffle")}.\n      </p>\n    `},GitHub:{name:"ГитХаб",description:K(`${J("https://github.com/phts","Здесь")} находятся полезные и      бесполезные проекты, которые доступны для всех.`)},"Grand Parade":{name:"Гранд Парэйд",description:`\n      <p>\n        Моё ${V("Curriculum vitae","текущее")} место работы. Grand Parade является частью\n        большой букмейкерской конторы\n        ${J("https://en.wikipedia.org/wiki/William_Hill_(bookmaker)","William Hill")}.\n      </p>\n      <p>Отличная продуктовая компания, отличные проекты, отличные люди.</p>\n    `},Habr:{name:"Хабр",description:`\n      <p>\n        Для получения инвайта на ${J("https://habr.com/ru/","Хабр")} я давным давно опубликовал\n        ${J("https://habrahabr.ru/post/128327/","статью &laquo;Стеганография в GIF&raquo;")}, в\n        которой описал принцип работы программы\n        ${J("https://bitbucket.org/phts-home/gifed/src/master/","Gifed")}, написанной в\n        ${V("PSU","универе")} для курсового проекта по предмету &laquo;Программные методы\n        защиты информации&raquo;.\n      </p>\n      <p>${J("https://habrahabr.ru/users/phil_tsarik/","Инвайт получил")}.</p>\n      <p>\n        На Тостере засветился\n        ${J("https://toster.ru/answer?answer_id=158170#answers_list_answer","популярным ответом")}\n        на &laquo;Как оформить программный код в Microsoft Word&raquo;.\n      </p>\n    `},"Heroes of Might and Magic 3":{name:"Герои меча и магии 3",description:`\n      <p>\n        До сих пор играю в\n        ${J("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III","HoMM3")}\n        / ${J("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III:_Horn_of_the_Abyss","HotA")},\n        если появляется свободное время.\n      </p>\n      <p>\n        Радует, что несмотря на то, что игра старая, у неё огромное комьюнити, проходят турниры,\n        выпускаются аддоны и патчи.\n      </p>\n    `},JavaScript:{name:"Джаваскрипт",description:`\n      <p>\n        Основное направление моей деятельности &mdash; джаваскрит и всё, что с ним связано, включая\n        ES6+, Angular, ${V("React")}, Node.js, Typescript и т.д.\n      </p>\n    `},"Joy in Time":{name:"Радость во времени",description:`\n      <p>\n        Является в некоторой степени противоположностью ${V("Space Resonance")} по стилю\n        и настроению. Несмотря на это, я с огромным удовольствием играл в этой группе.\n      </p>\n      <p>\n        ${Z("egVPsfDi81A")}\n      </p>\n      <p>Осталась страничка в контакте: ${J("https://vk.com/joyintimes","joyintimes")}</p>\n    `},"Kraków":{name:"Краков",description:K(`Живём тут с ${V("Family","семьёй")} уже более трёх лет.`)},"Last.fm":{name:"Ласт.фм",description:K(`${J(se,"Мой профиль")} на Ласт.фм`)},LinkedIn:{name:"ЛинкедИн",description:K(`${J("https://www.linkedin.com/in/tsaryk/","Мой профиль")} на ЛинкедИне.`)},Music:{name:"Музыка",description:`\n      <p>Одна из важнейших частей моей жизни.</p>\n      <h3>Слушаю</h3>\n      <p>Мой топ на данный момент:<p>\n      <ul>\n        <li>Pink Floyd</li>\n        <li>Lunatic Soul</li>\n        <li>Riverside</li>\n        <li>Deep Purple</li>\n        <li>Opeth</li>\n        <li>The Gathering</li>\n        <li>Led Zeppelin</li>\n        <li>God Is An Astronaut</li>\n        <li>Anathema</li>\n      </ul>\n      <p>Также я есть на ${V("Last.fm","Ластфм")}.</p>\n      <p>Часто слушаю музыку ${V("Vinyl","на виниле")}.</p>\n      <h3>Играю</h3>\n      <p>...на ${V("Drums","барабанах")}.<p>\n      <p>Участвовал в группах:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time","Радость во времени")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n      <h3>Хожу на концерты</h3>\n      <p>Из своего маст-хэв списка уже побывал:</p>\n      ${Y(le("FykwSDm","Deep Purple в Минске, 2011 г."),"Deep Purple в Минске, 2011 г.")}\n      ${Y(le("qIIb0bR","God is an Astronaut в Санкт-Петербурге, 2012 г."),"God is an Astronaut в Санкт-Петербурге, 2012 г.")}\n      ${Y(le("dPNRWdG","Australian Pink Floyd Show в Минске, 2013 г."),"Australian Pink Floyd Show в Минске, 2013 г.")}\n      ${Y(le("tcyuP0Q","Dream Theater в Катовице, 2015 г."),"Dream Theater в Катовице, 2015 г.")}\n      ${Y(le("yDFhHGF","Riverside в Катовице, 2015 г."),"Riverside в Катовице, 2015 г.")}\n      ${Y(le("5oDXQ4s","Дэвид Гилмор во Франции, 2016 г."),"Дэвид Гилмор во Франции, 2016 г.")}\n      ${Y(le("pxy4Skj","Anathema в Кракове, 2017 г."),"Anathema в Кракове, 2017 г.")}\n      ${Y(le("FOuMsdO","Opeth в Варшаве, 2017 г."),"Opeth в Варшаве, 2017 г.")}\n      ${Y(le("zMy5wbq","Roger Waters в Кракове, 2018 г."),"Roger Waters в Кракове, 2018 г.")}\n      ${Y(le("mROYG5y","Nightwish в Кракове, 2018 г."),"Nightwish в Кракове, 2018 г.")}\n      ${Y(le("KhtC73G","RPWL в Варшаве, 2019 г."),"RPWL в Варшаве, 2019 г.")}\n      ${Y(le("x7kkpYK","Pink в Варшаве, 2019 г."),"Pink в Варшаве, 2019 г.")}\n      <p>Осталось:</p>\n      <ul>\n      <li>${V("Ritchie Blackmore","Rainbow или Ritchie Blackmore's Night")}</li>\n      <li>The Gathering</li>\n      <li>The Morningside</li>\n      </ul>\n    `},Novopolotsk:{name:"Новополоцк",description:`\n      <p>\n        Мой родной город. Находится в Витебской области, ${V("Belarus","Республика Беларусь")}.\n        Точные координаты:\n        ${J("https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%86%D0%BA","55°32′00″ с. ш. 28°40′00″ в. д.")}\n      </p>\n    `},"Phil Tsaryk":{name:"Филипп Царик",description:`\n      <p>\n        Меня зовут Филипп Царик. Родился 3 декабря 1987 года в городе\n        ${V("Novopolotsk","Новополоцке")} в БССР (сейчас &mdash;\n        ${V("Belarus","Республика Беларусь")}).\n      </p>\n      <p>\n        В 2011 окончил ${V("PSU","Полоцкий Государственный Университет")} по специальности\n        ${V("Software Engineer","&laquo;Программное обеспечение информационных технологий&raquo;")}.\n      </p>\n      <p>\n        Сейчас проживаю в ${V("Kraków","Кракове")} и работаю в компании ${V("Grand Parade")}\n        ${V("JavaScript","фронтэнд разработчиком")}.\n      </p>\n    `},"Pilip Tsaryk":{name:"Пiлiп Царык",description:K("Афіцыйна маё імя пішацца менавіта так.")},"Playing cards":{name:"Игральные карты",data:{p1:"Коллекционирую с детства.",p2:"Не ставлю себе задачу собрать очень много и всё подряд, поэтому коллекция не очень большая и насчитывает на данный момент более 90 колод. Собираю именно те, которые понравились.",imgTitle:"По одной карте из каждой колоды (кликабельно). Декабрь 2019"}},Poland:{name:"Польша",description:K(`В данный момент проживаю в Польше в городе ${V("Kraków","Кракове")}.`)},"Promo codes":{name:"Промокоды",description:`\n      <p>\n        Пользуйтесь:\n      </p>\n      <ul>\n        <li>Airbnb: ${J("https://www.airbnb.ru/c/philt68?currency=PLN","philt68")}</li>\n        <li>Allegro: ${J("https://allegro.pl/aplikacja/polecam/pilip782627","pilip782627")}</li>\n        <li>Bank Millennium:\n          ${J("https://www.bankmillennium.pl/lubietopolecam?id=24586296","24586296")}</li>\n        <li>Bolt (Taxify): S5S8K8</li>\n        <li>Booking.com: ${J("https://www.booking.com/s/18_6/pilip212","pilip212")}</li>\n        <li>Hulaj: zDNRAA</li>\n        <li>Maxim: 9D06F7E7</li>\n        <li>Revolut: ${J("https://revolut.com/r/pilip1ip","pilip1ip")}</li>\n        <li>Uber: ${J("https://www.uber.com/invite/3daguge8ue","3daguge8ue")}</li>\n      </ul>\n    `},PSU:{name:"ПГУ",description:`\n      <p>Полоцкий Государственный Университет.</p>\n      <p>\n        С 2006 по 2011 проучился здесь по специальности &laquo;Программное обеспечение\n        информационных технологий&raquo; на радиотехническом факультете (в последствии\n        переформированном в факультет информационных технологий) в группе 06ИТ-1.\n      </p>\n      <p>\n        За время учёбы было написано много полезных и бесполезных программ и игрушек.\n        ${J("https://bitbucket.org/account/user/phts-home/projects/PSU","Некоторые из них я выложил")} на ${V("BitBucket","Битбакет")}.\n      </p>\n      <p>\n        Также во времена университета у меня был ${J("http://philip-s.narod.ru/","свой сайт")},\n        если можно его так назвать, на котором опубликовывал некоторые программы в разделе\n        &laquo;Проекты&raquo;. Но сейчас этот сайт давно уже заброшен и скачать ничего не получится.\n      </p>\n      <p>\n        Дипломный проект был на тему &laquo;Разработка сервиса для изучения иностранных\n        языков&raquo;. По своей сути на тот момент являлся упрощённым форком сервиса Langaroo\n        &mdash; стартап, над которым я ${V("Curriculum vitae","работал")} вместе с коллегой.\n        Стартап не взлетел.\n      </p>\n      <p>\n        По итогу выпустился дипломированным\n        ${V("Software Engineer","инженером-программистом")}.\n      </p>\n    `},Random:{name:"Вразнобой"},React:{name:"Реакт",description:K(`В данный момент специализируюсь именно ${J("https://reactjs.org/","на этой библиотеке")}.`)},"Ritchie Blackmore":{name:"Ричи Блэкмор",description:K("Лучший гитарист, по моему мнению.")},Ruby:{name:"Руби",description:`\n      <p>Очень классный скриптовый язык.</p>\n      <p>\n        Несмотря на то, что я ${V("JavaScript","фронтендер")}, иногда\n        пишу на нём всякие штуки.\n      </p>\n    `},"SaM Solutions":{name:"Сам Солюшнс",description:`\n      <p>\n        Работал тут во время и после ${V("PSU","универа")}. Точнее, не сразу после универа, т.к\n        пришлось пару месяцев отсидеться на тракторном заводе по распределению из-за несовершенства\n        белорусских законов.\n      </p>\n      <p>\n        Компания оставила только приятные впечатления. Но проекты разной степени качества, может и\n        не повезти. Впрочем, как и в любой аутсорсинговой компании.\n      </p>\n      <p>\n        ${V("Curriculum vitae","После 4 лет работы")} меня захантил ${V("Epam","Епам")},\n        и я переехал в ${V("Kraków","Краков")}.\n      </p>\n    `},"Škoda":{name:"Шкода",description:`\n      <p>А точнее, Škoda Felicia II 1.6 (1999 г. в.).</p>\n      <p>\n        Моя первая машина, купленная в ${V("Kraków","Кракове")} за какие-то 2300 злотых\n        (около $600 по тогдашнему курсу).\n      </p>\n      <p>Очень надежный автомобиль. Прошёл боевое крещение по украинским дорогам в Буковель.</p>\n      <p>${me="https://i.imgur.com/VYfgwDT.jpg",de="Моя Škoda",`\n    <img src="${me}" alt="${de}">\n  `}</p>\n      <p>Хотя от старости уже начинает капризничать.</p>\n    `},Skype:{name:"Скайп",description:K(`Больше не пользуюсь. Перешёл на ${V("Telegram","Телеграм")}.`)},"Software Engineer":{name:"Инженер-программист",description:K(`Моя специальность после окончания ${V("PSU","университета")}.`)},"Space Resonance":{name:"Спасе Резонасе",description:`\n      <p>\n        <i>Холодным зимним вечером четверо встретились на\n        центральной площади ${V("Novopolotsk","Новополоцка")}...</i>\n      </p>\n      <p>\n        Так зародилась величайшая и культовая (в определённых кругах) группа\n        ${J("https://vk.com/club7812592","Space Resonance")}.\n      </p>\n      <p>\n        Является, наверное, самым идеальным попаданием в ${V("Music","мой музыкальный вкус")}.\n        До сих пор переслушиваю самый первый и единственный полноценный альбом, который был выпущен\n        в некоторой спешке, прямо перед распадом группы, и поэтому по качеству он не идеален.\n      </p>\n      <p>\n        Параллельно в это время играл в ${V("Joy in Time","Радости во времени")} и иногда\n        приходилось на одном концерте играть в двух группах.\n      </p>\n    `},"Stack Overflow":{name:"Стак Оверфлоу",description:`\n      <p>\n        Иногда ${J("https://stackoverflow.com/users/2462524/phts","задаю и отвечаю")} на вопросы\n        на ${J("https://stackoverflow.com/","Стак Оверфлоу")}.\n      </p>\n    `},"Sublime Text":{name:"Саблайм Текст",description:`\n      <p>Отличный редактор кода. Пользуюсь им каждый день.</p>\n      <p>\n        Периодически\n        ${J("https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=","пишу плагины")} для него.\n      </p>\n    `},Telegram:{name:"Телеграм",description:K(`Моё имя в Телеграме: ${J("https://t.me/ptsaryk","@ptsaryk")}`)},Title:{},"The Netherlands":{name:"Нидерланды",description:K("Обязательно буду жить там.")},Traveling:{name:"Путешествия",description:`\n      <p>\n        Я люблю путешествовать со своей ${V("Family","семьёй")}. ${V("Škoda","На машине")},\n        на поезде, самолётом, как угодно.\n      </p>\n      <p>Вот, список стран, в которых мы уже побывали:</p>\n      <ul style="list-style-type: none;">\n        <li>&#127463;&#127486; ${V("Belarus","Беларусь")} &mdash; очевидно</li>\n        <li>&#127464;&#127487; Чехия</li>\n        <li>&#127466;&#127480; Испания</li>\n        <li>&#127467;&#127479; Франция</li>\n        <li>&#127468;&#127479; Греция</li>\n        <li>&#127475;&#127473; ${V("The Netherlands","Нидерланды")}</li>\n        <li>&#127477;&#127473; ${V("Poland","Польша")} &mdash; также очевидно :)</li>\n        <li>&#127479;&#127482; Россия</li>\n        <li>&#127481;&#127479; Турция</li>\n        <li>&#127482;&#127462; Украина</li>\n      </ul>\n    `},Ultramarined:{name:"Ультрамаринд",description:`\n      <p>\n        Прошло немало месяцев/лет после того, как ${V("Joy in Time","Радость во времени")}\n        внезапно распалась и смогла эволюционироваться в Ultramarined с новыми идеями и\n        вдохновением.\n      </p>\n      <p>\n        Мы успешно репетировали, сочиняли песни, выступали, и всё складывалось хорошо. До того\n        момента, как я не уехал в ${V("Kraków","Краков")}.\n      </p>\n      ${Y(le("V5Pazkk","Ultramarined"),"Последнее выступление Ultramarined в 2015 году")}\n      <p>\n        Больше информации о группе доступно на\n        ${J("http://phts.github.io/ultramarined.by/","зеркале официального сайта")}.\n      </p>\n    `,data:{ultrimarine:"Заультрамаринить",unultrimarine:"Разультрамаринить"}},"Video games":{name:"Компьютерные игры",description:`\n      <p>\n        Люблю качественные и интересные компьютерные игры, в большинстве случаев квесты и стратегии.\n      </p>\n      <p>Произведшие на меня огромное впечатление, и производят до сих пор:</p>\n      <ul>\n        <li>${J("https://ru.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness","Warcraft 2")}\n          / ${J("https://ru.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos","3")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/StarCraft_(серия_игр)","Starcraft")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Stronghold","Stronghold")}</li>\n        <li>${V("Heroes of Might and Magic 3")}\n          / ${J("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV","4")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Half-Life_(серия_игр)","Half-Life")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Syberia","Syberia")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim","Majesty")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Mafia:_The_City_of_Lost_Heaven","Mafia")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Grand_Theft_Auto_(серия_игр)","GTA")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom","Война и Мир")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Portal","Portal")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Anno_1701","Anno 1701")}\n          / ${J("https://ru.wikipedia.org/wiki/Anno_1404","1404")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Космические_рейнджеры","Космические рэйнджеры")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/The_Talos_Principle","The Talos Principle")}</li>\n      </ul>\n      <p>А также некоторые игры на ${V("ZX Spectrum")}.</p>\n    `},Vinyl:{name:"Винил",description:Y(le("Mkb7mO9","Винил"),"Audio-Technica AT-LP120USBHC + Yamaha A-S501 + акустика, сделанная Анжеем Фигарским.")},VK:{name:"ВК",description:K(`${J("https://vk.com/phil.tsaryk","Моя страница")} в ВК.`)},"ZX Spectrum":{name:"Зэд Икс Спектрум",description:`\n      <p>\n        Мой первый компьютер. Первая строчка кода, написанная на нём,\n        была, скорее всего, <code>LOAD "" &crarr;</code> &mdash; для загрузки игры с кассеты.\n      </p>\n      <p>\n        Любимые игрушки: ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=2323","Highway Encounter")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=461","Battle Ships")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=1686","Exolon")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=5448","Tujad")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=639","Boulder Dash")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=4784","Spy Hunter")} и многие другие.\n      </p>\n    `}};var me,de,he;!function(e){e.EN="EN",e.RU="RU"}(he||(he={}));const ue={EN:ce,RU:pe};var ge;!function(e){e[e.EN=0]="EN",e[e.RU=1]="RU",e[e.Title=2]="Title",e[e["©"]=3]="©",e[e["+375292181503"]=4]="+375292181503",e[e["+48534898187"]=5]="+48534898187",e[e.About=6]="About",e[e.Age=7]="Age",e[e.Ascending=8]="Ascending",e[e["bash.org"]=9]="bash.org",e[e.Belarus=10]="Belarus",e[e.Billiard=11]="Billiard",e[e.BitBucket=12]="BitBucket",e[e["Board games"]=13]="Board games",e[e.Categorize=14]="Categorize",e[e.Cats=15]="Cats",e[e.Colors=16]="Colors",e[e.Contacts=17]="Contacts",e[e["Curriculum vitae"]=18]="Curriculum vitae",e[e.Debian=19]="Debian",e[e.Drums=20]="Drums",e[e.Email=21]="Email",e[e.Epam=22]="Epam",e[e.Facebook=23]="Facebook",e[e.Family=24]="Family",e[e.Feedback=25]="Feedback",e[e.Firefox=26]="Firefox",e[e.foobar2000=27]="foobar2000",e[e.GitHub=28]="GitHub",e[e["Grand Parade"]=29]="Grand Parade",e[e.Habr=30]="Habr",e[e["Heroes of Might and Magic 3"]=31]="Heroes of Might and Magic 3",e[e.Hobby=32]="Hobby",e[e.JavaScript=33]="JavaScript",e[e["Joy in Time"]=34]="Joy in Time",e[e["Kraków"]=35]="Kraków",e[e["Last.fm"]=36]="Last.fm",e[e.LinkedIn=37]="LinkedIn",e[e.Meta=38]="Meta",e[e.Music=39]="Music",e[e.Novopolotsk=40]="Novopolotsk",e[e["Phil Tsaryk"]=41]="Phil Tsaryk",e[e["Pilip Tsaryk"]=42]="Pilip Tsaryk",e[e["Playing cards"]=43]="Playing cards",e[e.Poland=44]="Poland",e[e["Promo codes"]=45]="Promo codes",e[e.PSU=46]="PSU",e[e.Random=47]="Random",e[e.React=48]="React",e[e["Ritchie Blackmore"]=49]="Ritchie Blackmore",e[e.Ruby=50]="Ruby",e[e["SaM Solutions"]=51]="SaM Solutions",e[e["Škoda"]=52]="Škoda",e[e.Skype=53]="Skype",e[e["Software Engineer"]=54]="Software Engineer",e[e["Space Resonance"]=55]="Space Resonance",e[e["Stack Overflow"]=56]="Stack Overflow",e[e["Sublime Text"]=57]="Sublime Text",e[e.Telegram=58]="Telegram",e[e["The Netherlands"]=59]="The Netherlands",e[e.Traveling=60]="Traveling",e[e.Ultramarined=61]="Ultramarined",e[e["Video games"]=62]="Video games",e[e.Vinyl=63]="Vinyl",e[e.VK=64]="VK",e[e.Work=65]="Work",e[e["ZX Spectrum"]=66]="ZX Spectrum"}(ge||(ge={}));var ke=n("HlG8"),ye=n.n(ke),we=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};class fe{constructor(e=he.EN){this.lang=e}setLang(e){this.lang=e}}we([E.m],fe.prototype,"lang",void 0),we([E.d],fe.prototype,"setLang",null);var be=new fe(/^ru(-.*)?$/.test(ye()())?he.RU:he.EN),Ee=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};const $e=(xe=ge,_.a(T.a(e=>"number"==typeof e),P.a)(xe));var xe;const ve=B.a(e=>e,$e),Se=he.RU,_e=ue[Se];function Pe(e){return Object.assign({},R,N,{id:e,name:e})}function Te(e,t){return _.a(I.a(Pe),I.a(function(e,t){return(n,i)=>Object.assign({},n,A[i]||{},G[i]||{},D.a(["description"],t[i]),D.a(["name","description","data","tooltip"],e[i]))}(t,_e)))(e)}class Oe{constructor(e){this.languageStore=e,this.cache={}}get items(){const e=this.cache[this.lang];if(e)return e;const t=Te(ve,this.currentTranslatedStrings);return this.cache[this.lang]=t,t}get lang(){return this.languageStore.lang}get currentTranslatedStrings(){return ue[this.lang]}}Ee([E.f],Oe.prototype,"items",null),Ee([E.f],Oe.prototype,"lang",null),Ee([E.f],Oe.prototype,"currentTranslatedStrings",null);var je,Me=new Oe(be),Ce=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};!function(e){e.Asc="Asc",e.Categories="Categories",e.Random="Random"}(je||(je={}));const He={Asc:$.a(x.a(v.a,S.a("name"))),Categories:$.a(S.a("id")),Random:H.a},Re=["About","Contacts","Work","Hobby","Meta"];class Ae{constructor(e){this.items=e,this.mode=je.Asc,this.list=[],Object(E.e)(()=>{this.refresh()})}setMode(e){e===je.Random&&this.mode===e&&(this.mode=null),this.mode=e}refresh(){this.mode===je.Categories?this.refreshCategorizedList():this.refreshList()}refreshList(){this.list=_.a(P.a,T.a(O.a("type",w.Category)),e=>[f.Head,f.Middle,f.Tail].map(t=>j.a(O.a("position",t),e)),e=>[...e[0],...He[this.mode](e[1]),...e[2]])(this.items.items)}refreshCategorizedList(){this.list=_.a(P.a,T.a(O.a("type",w.Category)),He[je.Asc],e=>Re.map(t=>M.a([this.items.items[t]],j.a(O.a("category",t),e))),C.a)(this.items.items)}}Ce([E.m],Ae.prototype,"mode",void 0),Ce([E.m],Ae.prototype,"list",void 0),Ce([E.d],Ae.prototype,"setMode",null);var Be=new Ae(Me),De=ee.d.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({flexible:e})=>e?"space-around":"flex-start"};
  margin: 0;
  min-width: 100%;
  padding: 0.5rem 0;
`;var Ie;!function(e){e.Action="Action",e.Default="Default",e.Simple="Simple"}(Ie||(Ie={}));const ze={Action:"2px dotted",Default:"1px dashed",Simple:"0 none"};function Fe(e){return ze[e]}const Le={M:"1rem",L:"1.5rem",XL:"2rem",XXL:"2.5rem"},Ne={Category:Ie.Simple,Item:Ie.Default,Meta:Ie.Action};var Ue=e=>({flexible:t,item:n,onNavigate:i,width:r})=>a.a.createElement(e,{buttonType:Ne[n.type],data:n.data,description:n.description,flexBasis:r,flexible:t,fontSize:Le[n.size],itemId:n.id,onNavigate:i,text:n.name,tooltip:n.tooltip}),Ge=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};var We=Object(ee.d)(e=>{var{border:t,fontSize:n}=e,i=Ge(e,["border","fontSize"]);return a.a.createElement("button",Object.assign({},i))})`
  background: none;
  border: 0 none;
  border-bottom: ${({border:e})=>e};
  color: inherit;
  cursor: pointer;
  font-size: ${({fontSize:e})=>e};
  margin: 0;
  padding: 0 2px;
`,Ke=n("GEYi"),Je=e=>a.a.createElement(Ve,Object.assign({},e),"*");const Ve=ee.d.span`
  color: #aa0000;
  cursor: help;
  font-size: 1.3rem;
  opacity: 0.5;
`;var Xe=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};var qe,Ye=(qe=e=>{var{buttonType:t,fontSize:n}=e,i=Xe(e,["buttonType","fontSize"]);return a.a.createElement(We,Object.assign({},i,{border:Fe(t),fontSize:n}))},e=>e.title?a.a.createElement("span",null,a.a.createElement(qe,Object.assign({},Object(Ke.a)(["title"])(e))),a.a.createElement(Je,{title:e.title})):a.a.createElement(qe,Object.assign({},e))),Ze=ee.d.li.attrs(e=>({style:{flexBasis:`${e.flexBasis}vw`}}))`
  align-items: center;
  display: flex;
  flex-grow: ${({flexible:e})=>e?1:0};
  justify-content: center;
  margin: 0 1rem;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`;var Qe=Ue(Object(m.c)(({flexBasis:e,flexible:t,buttonType:n,fontSize:i,data:r})=>{const{ageStore:l}=y();return a.a.createElement(Ze,{flexBasis:e,flexible:t},a.a.createElement(Ye,{buttonType:n,fontSize:i},function(e,t){const{years:n,months:i,days:a,hours:r,minutes:l,seconds:o}=e.age;return`${n} ${t.years}       ${i} ${t.months}       ${a} ${t.days}       ${r} ${t.hours}       ${z(l)} ${t.min}       ${z(o)} ${t.sec}`}(l,r)))}));const et=ee.d.li`
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
`;var tt=Ue(({text:e})=>a.a.createElement(et,null,"# ",e));var nt=x.a(Ue)(e=>{const{uiStore:t}=y(),n=Object(i.useCallback)(()=>{t.backgroundColor=ae(),t.color=ae()},[]);return a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(Ye,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:n},e.text))}),it=n("MHCJ");it.init("user_C3T41f8F0pv1ekwT39nYw");var at=new class{send(e){const t={appLang:be.lang,innerHeight:innerHeight,innerWidth:innerWidth,locale:ye()(),localTime:(new Date).toString(),referrer:document.referrer,screenHeight:screen.height,screenWidth:screen.width,text:e,userAgent:navigator.userAgent};return it.send("feedback_tsaryk_com","tsaryk_com",t)}},rt=ee.d.form`
  background: ${e=>e.disabled?"rgba(102, 102, 102, 0.25)":"transparent"};
  border: ${Fe(Ie.Action)};
  cursor: ${e=>e.disabled?"not-allowed":"default"};

  & > * {
    vertical-align: middle;
  }
`,lt=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};var ot=e=>{var{minLength:t,inputRef:n}=e,r=lt(e,["minLength","inputRef"]);n=n||Object(i.useRef)(null);const l=Object(i.useCallback)(()=>{const e=t||20,i=Math.max(n.current.value.length+2,e);n.current.style.width=`${i}ch`},[t]),o=Object(i.useCallback)(()=>{l()},[]);return Object(i.useEffect)(()=>{l()},[]),a.a.createElement("input",Object.assign({},r,{onKeyUp:o,ref:n,type:"text"}))},st=Object(ee.d)(ot)`
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
`;const ct=["\\","|","/","-"],pt=ct.length;var mt,dt=()=>{const[e,t]=Object(i.useState)(0);return Object(i.useEffect)(()=>{const e=window.setInterval(()=>{t(e=>(e+1)%pt)},100);return()=>clearInterval(e)},[]),a.a.createElement("span",null,ct[e])},ht=e=>ee.d.span`
  ${re}
  color: ${e.color};
  &::after {
    content: '\\${e.cssSymbol}';
  }
`,ut=ht({color:"green",cssSymbol:"2714"}),gt=ht({color:"red",cssSymbol:"2718"});!function(e){e[e.Processing=0]="Processing",e[e.Success=1]="Success",e[e.Failed=2]="Failed"}(mt||(mt={}));const kt=ee.d.span`
  font-family: monospace;
`;var yt=({state:e})=>a.a.createElement(kt,null,e===mt.Processing?a.a.createElement(dt,null):"",e===mt.Success?a.a.createElement(ut,null):"",e===mt.Failed?a.a.createElement(gt,null):""),wt=()=>a.a.createElement("span",null,"↵"),ft=()=>a.a.createElement(bt,{type:"submit"},a.a.createElement(wt,null));const bt=ee.d.button`
  background: none;
  border: 0 none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: 18px;
  margin: 0;
  padding: 0;
`;var Et=({placeholder:e,onFinished:t})=>{const n=Object(i.useRef)(null);let r;const[l,o]=Object(i.useState)(null),s=Object(i.useCallback)(e=>{27===e.keyCode&&(e.preventDefault(),t())},[t]),c=Object(i.useCallback)(e=>{o(e),r=window.setTimeout(()=>{o(null),t()},3e3)},[t]),p=Object(i.useCallback)(e=>{e.preventDefault();const t=e.target.text.value;t&&(o(mt.Processing),at.send(t).then(()=>{c(mt.Success)}).catch(()=>{c(mt.Failed)}))},[]);Object(i.useEffect)(()=>(n.current.value="",n.current.focus(),()=>clearTimeout(r)),[]);const m=null!==l;return a.a.createElement(rt,{onSubmit:p,disabled:m,noValidate:!0},a.a.createElement(st,{autoComplete:"off",disabled:m,inputRef:n,name:"text",onKeyDown:s,placeholder:e}),m?a.a.createElement(yt,{state:l}):a.a.createElement(ft,null))};var $t=Ue(e=>{const[t,n]=Object(i.useState)(!1),r=Object(i.useCallback)(()=>{n(!0)},[]),l=Object(i.useCallback)(()=>{n(!1)},[]);return a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},t?a.a.createElement(Et,{onFinished:l,placeholder:e.data.sayHello}):a.a.createElement(Ye,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:r},e.text))});function xt(e){return Ue(t=>{const{langStore:n}=y(),r=Object(i.useCallback)(()=>{n.setLang(e)},[]);return a.a.createElement(Ze,{flexBasis:t.flexBasis,flexible:t.flexible},a.a.createElement(Ye,{buttonType:t.buttonType,fontSize:t.fontSize,onClick:r,title:t.tooltip},t.text))})}function vt(e){return Ue(t=>{const{listStore:n,widthsStore:r}=y(),l=Object(i.useCallback)(()=>{e!==n.mode&&r.randomize(n.list),n.setMode(e)},[]);return a.a.createElement(Ze,{flexBasis:t.flexBasis,flexible:t.flexible},a.a.createElement(Ye,{buttonType:t.buttonType,fontSize:t.fontSize,onClick:l},t.text))})}var St=ee.d.span`
  font-size: ${({fontSize:e})=>e};
`,_t=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};var Pt=Object(ee.d)(e=>{var{buttonType:t,fontSize:n}=e,i=_t(e,["buttonType","fontSize"]);return a.a.createElement(d.b,Object.assign({},i))})`
  border-bottom: ${e=>Fe(e.buttonType)};
  color: inherit;
  font-size: ${e=>e.fontSize};
  text-decoration: none;
`;var Tt=Ue(e=>e.description||e.data?a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(Pt,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:e.onNavigate,to:e.itemId},e.text)):a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(St,{fontSize:e.fontSize},e.text)));const Ot=ee.d.a`
  color: inherit;
`;var jt=Ue(({flexBasis:e,flexible:t})=>a.a.createElement(Ze,{flexBasis:e,flexible:t},a.a.createElement(Ot,{href:"http://tsaryk.com/"},"tsaryk.com")));const Mt={About:tt,Contacts:tt,Hobby:tt,Meta:tt,Work:tt,Age:Qe,Ascending:vt(je.Asc),Categorize:vt(je.Categories),Colors:nt,EN:xt(he.EN),Feedback:$t,Random:vt(je.Random),Title:jt,RU:xt(he.RU)};var Ct=Object(m.c)(()=>{const{listStore:e,widthsStore:t}=y(),n=Object(i.useCallback)(()=>{localStorage.setItem("scrollTop",document.documentElement.scrollTop.toString())},[]);Object(i.useEffect)(()=>{document.documentElement.scrollTop=parseInt(localStorage.getItem("scrollTop")||"0",10)},[]);const r=e.mode!==je.Categories,l=k.a(e=>{const i=r?t.getWidth(e.id):0,l=Mt[e.id]||Tt;return a.a.createElement(l,{flexible:r,item:e,key:e.id,onNavigate:n,width:i})})(e.list);return a.a.createElement(De,{flexible:r},l)});var Ht=e=>a.a.createElement(We,Object.assign({},e,{border:Fe(Ie.Action),fontSize:"1rem"})),Rt=e=>a.a.createElement("header",Object.assign({},e)),At=e=>a.a.createElement("footer",Object.assign({},e)),Bt=ee.d.div`
  box-sizing: border-box;
  min-height: 100%;
  min-width: 100%;
  padding: 7rem 10rem;

  ${ne.max.tablet`
    padding: 5rem 7rem;
  `}
  ${ne.max.smartphone`
    padding: 2rem;
  `}
  ${ne.max.mobile`
    padding: 1rem;
  `}
`,Dt=ee.d.h1`
  margin: 0 0 1rem;
`;var It=({className:e,html:t})=>a.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:t}});var zt=({className:e,item:t,onClose:n})=>{const{i18nStore:i}=y();return a.a.createElement(Bt,null,a.a.createElement(Rt,null,a.a.createElement(Dt,null,t.name)),a.a.createElement(It,{className:e,html:t.description}),a.a.createElement(At,null,a.a.createElement(Ht,{onClick:n},i.labels.close)))},Ft=n("mev3"),Lt=({children:e,className:t})=>a.a.createElement("div",{className:t},e);function Nt(e,t){return 1.2+.5*(e-t)}var Ut=ee.d.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  ${e=>function(e){const t=[];for(let n=1;n<=e;n++)t.push(`\n      li:nth-child(${n}) {\n        font-size: ${Nt(e,n)}rem;\n        margin: 0.4em 0;\n      }\n    `);return t}(a.a.Children.toArray(e.children).length)}
`,Gt=({items:e})=>a.a.createElement(Ut,null,e.map(e=>a.a.createElement("li",{key:e.icon},a.a.createElement(Wt,{dangerouslySetInnerHTML:{__html:e.icon},title:e.tooltip}),e.text)));const Wt=ee.d.span`
  cursor: ${e=>e.title?"help":"default"};
  display: inline-block;
  margin-right: 0.5rem;
  text-align: right;
  width: 4rem;
`,Kt=Object(ee.d)(At)`
  padding-left: 4.5rem;
`;var Jt=({className:e,item:t,onClose:n})=>{const{i18nStore:i}=y(),r=Object(Ft.a)({icon:"&#x1F408;",text:t.name})(t.data);return a.a.createElement(Bt,null,a.a.createElement(Lt,{className:e},a.a.createElement(Gt,{items:r})),a.a.createElement(Kt,null,a.a.createElement(Ht,{onClick:n},i.labels.close)))},Vt=n.p+"static/img/h3-default.2ca8.png",Xt=n.p+"static/img/h3-pointer.7d2e.png";const qt=Object(ee.d)(Bt)`
  cursor: url(${Vt}) 16 16, default;

  button {
    cursor: url(${Xt}) 16 16, pointer;
  }
`;var Yt=({className:e,item:t,onClose:n})=>{const{i18nStore:i}=y();return a.a.createElement(qt,null,a.a.createElement(Rt,null,a.a.createElement(Dt,null,t.name)),a.a.createElement(It,{className:e,html:t.description}),a.a.createElement(At,null,a.a.createElement(Ht,{onClick:n},i.labels.close)))};var Zt={backgroundColor:"#572fce",color:"white"},Qt=ee.d.div`
  > * {
    margin-right: 1rem;
  }
`,en=Object(ee.d)(Bt)`
  background-color: ${e=>e.theme.backgroundColor};
  color: ${e=>e.theme.color};
`,tn=Object(ee.d)(Dt)`
  text-align: center;
`,nn=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n},an=e=>{var{imageId:t}=e,n=nn(e,["imageId"]);const i=`https://i.imgur.com/${t}`;return a.a.createElement("picture",null,a.a.createElement("source",{srcSet:`${i}t.jpg`,media:`(max-width: ${te.mobile}px)`}),a.a.createElement("source",{srcSet:`${i}m.jpg`,media:`(max-width: ${te.smartphone}px)`}),a.a.createElement("source",{srcSet:`${i}l.jpg`,media:`(max-width: ${te.tablet}px)`}),a.a.createElement("source",{srcSet:`${i}.jpg`,media:`(min-width: ${te.hd}px)`}),a.a.createElement("img",Object.assign({src:`${i}h.jpg`},n)))},rn=ee.d.span`
  color: white;
  font-family: 'Ledger', serif;
  font-size: 1.6rem;
  font-weight: normal;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,ln=()=>a.a.createElement(rn,null,"Ultramarined"),on=ee.d.div`
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
`;var sn=e=>{const{i18nStore:t}=y(),[n,r]=Object(i.useState)(!1),l=Object(i.useCallback)(()=>{r(!n),window.scrollTo(0,0)},[n]),o=e.item.data,s=n?a.a.createElement(tn,null,a.a.createElement(ln,null)):a.a.createElement(Dt,null,e.item.name),c=n?a.a.createElement(Lt,{className:e.className},a.a.createElement(on,null,a.a.createElement(an,{imageId:"XlCoMYy",alt:"Jenya"}),a.a.createElement(an,{imageId:"82GwSq9",alt:"Dasha"}),a.a.createElement(an,{imageId:"uAs0gjm",alt:"Galya"}),a.a.createElement(an,{imageId:"i2VIacr",alt:"Phil"}))):a.a.createElement(It,{className:e.className,html:e.item.description}),p=n?o.unultrimarine:o.ultrimarine,m=a.a.createElement(en,null,a.a.createElement(Rt,null,s),c,a.a.createElement(At,null,a.a.createElement(Qt,null,a.a.createElement(Ht,{onClick:e.onClose},t.labels.close),a.a.createElement(Ht,{onClick:l},p))));return n?a.a.createElement(ee.a,{theme:Zt},m):m},cn=(n("Y2mD"),n("Q4UO")),pn=n.n(cn);var mn=({className:e,item:t,onClose:n})=>{const{uiStore:i,i18nStore:r}=y();return a.a.createElement(Bt,null,a.a.createElement(Rt,null,a.a.createElement(Dt,null,t.name)),a.a.createElement(Lt,{className:e},a.a.createElement("p",null,t.data.p2),a.a.createElement("p",null,t.data.p1),a.a.createElement("figure",null,a.a.createElement(pn.a,{style:{color:i.backgroundColor}}),a.a.createElement("figcaption",null,t.data.imgTitle))),a.a.createElement(At,null,a.a.createElement(Ht,{onClick:n},r.labels.close)))};const dn=ee.d.div`
  background-color: ${e=>e.theme.backgroundColor};
  min-height: calc(100% - 10rem);
  width: calc(100% - 10rem);
  z-index: 1;

  ${ne.max.smartphone`
    min-height: calc(100% - 5rem);
    width: calc(100% - 5rem);
  `}
`,hn=ee.d.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  position: relative;
`,un=ee.c`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
`,gn=ee.c`
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

  ${ne.min.desktop`
    background-size: 100% 4rem;
  `}
`,kn=ee.d.div`
  ${un}

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
`,yn=ee.d.div`
  ${un}

  animation: starting 5s step-end 4s forwards;
  background-color: cyan;

  &::after {
    ${gn}

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
`,wn=ee.d.div`
  ${un}

  animation: loading 10s step-end 9s infinite;
  background-color: yellow;

  &::before {
    ${gn}

    animation: sample1 .25s step-start infinite;
    background-image: linear-gradient(to bottom, blue 0%, blue 24%, rgba(0, 0, 0, 0) 25%);

    ${ne.min.desktop`
      animation: sample1-desktop .25s step-start infinite;
    `}
  }

  &::after {
    ${gn}

    animation: sample2 1s step-start infinite;
    background-image: linear-gradient(to bottom, blue 0%, blue 24%, rgba(0, 0, 0, 0) 25%);

    ${ne.min.desktop`
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
`;var fn=({children:e})=>a.a.createElement(hn,null,a.a.createElement(kn,null),a.a.createElement(yn,null),a.a.createElement(wn,null),a.a.createElement(dn,null,e));var bn=()=>{Object(i.useEffect)(()=>{window.scrollTo(0,0)},[])};const En={Cats:Jt,"Heroes of Might and Magic 3":Yt,"Playing cards":mn,Ultramarined:sn,"ZX Spectrum":({className:e,item:t,onClose:n})=>{const{i18nStore:i}=y();return a.a.createElement(fn,null,a.a.createElement(Rt,null,a.a.createElement(Dt,null,t.name)),a.a.createElement(It,{className:e,html:t.description}),a.a.createElement(At,null,a.a.createElement(Ht,{onClick:n},i.labels.close)))}};var $n=Object(h.g)(Object(ee.d)(({match:e,className:t,history:n})=>{const{itemsStore:r}=y(),l=Object(i.useCallback)(()=>{!function(e){e.push(u)}(n)},[]);bn();const o=r.items[e.params.id];if(!o)return a.a.createElement(h.a,{to:u});const s=En[o.id]||zt;return a.a.createElement(s,{item:o,onClose:l,className:t})})`
  a {
    color: inherit;
  }

  a[href^="callto"],
  a[href^="mailto"],
  a[href^="tel"] {
    white-space: nowrap;
  }

  a[href^="#/"] {
    border-bottom: ${Fe(Ie.Default)};
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

    ${ne.max.tablet`
      height: calc((100vw - 14rem)  * 0.57);
      width: calc(100vw - 14rem);
    `}
    ${ne.max.smartphone`
      height: calc((100vw - 4rem)  * 0.57);
      width: calc(100vw - 4rem);
    `}
    ${ne.max.mobile`
      height: calc((100vw - 2rem)  * 0.57);
      width: calc(100vw - 2rem);
    `}
  }
`),xn=({backgroundColor:e,color:t})=>({backgroundColor:e,color:t}),vn=ee.d.div`
  display: flex;
  flex-direction: column;
`,Sn=ee.d.div`
  background-color: ${e=>e.theme.backgroundColor};
  box-sizing: border-box;
  color: ${e=>e.theme.color};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`;var _n=Object(m.c)(({children:e})=>{const{uiStore:t}=y();return a.a.createElement(ee.a,{theme:xn(t)},a.a.createElement(vn,null,a.a.createElement(Sn,null,e)))}),Pn=()=>a.a.createElement(d.a,null,a.a.createElement(h.d,null,a.a.createElement(_n,null,a.a.createElement(h.b,{exact:!0,path:u,component:Ct}),a.a.createElement(h.b,{path:g,component:$n})))),Tn=n("rx0e"),On=n("wiYN"),jn=n("IIJ7"),Mn=n("JS2A"),Cn=n("pCOR"),Hn=n("KsMw"),Rn=n("MiQI"),An=n("fumj"),Bn=n("OYLJ"),Dn=n("W5hp"),In=n("qDRa");var zn=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};const Fn={days:Tn.a,hours:On.a,minutes:jn.a,months:Mn.a,seconds:e=>e,years:Cn.a},Ln={days:Hn.a,hours:Rn.a,minutes:An.a,months:Bn.a,seconds:Dn.a,years:In.a},Nn={seconds:()=>60,minutes:()=>60,hours:()=>24,days:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),0).getMonth();return n=e.getFullYear(),new Date(n,t+1,0).getDate();var n},months:()=>12,years:()=>999};class Un{constructor(e){this.initialTime=e||new Date;const[t]=this.reduceDate(oe,["years","months","days","hours","minutes","seconds"]);this.age=t,setInterval(()=>{this.inc()},1e3)}reduceDate(e,t){const n={},i=t.reduce((e,t)=>{const i=Ln[t](this.initialTime,e);return n[t]=i,Fn[t](e,i)},e);return[n,i]}inc(){const{minutes:e,hours:t,days:n,months:i,years:a}=this.age;this.age=this.conformAge({seconds:this.age.seconds+1,minutes:e,hours:t,days:n,months:i,years:a})}conformAge(e){const t=["seconds","minutes","hours","days","months","years"];return t.forEach((n,i)=>!(e[n]<Nn[n]())&&(e[n]=0,e[t[i+1]]++,!0)),e}}zn([E.m],Un.prototype,"age",void 0);var Gn,Wn=new Un,Kn=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};!function(e){e[e.close=0]="close"}(Gn||(Gn={}));const Jn={EN:{close:"Сlose"},RU:{close:"Закрыть"}};class Vn{constructor(e){this.lang=e}get labels(){return Jn[this.lang.lang]}}Kn([E.f],Vn.prototype,"labels",null);var Xn=new Vn(be),qn=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};class Yn{constructor(){this.backgroundColor="white",this.color="black"}}qn([E.m],Yn.prototype,"backgroundColor",void 0),qn([E.m],Yn.prototype,"color",void 0);var Zn=new Yn,Qn=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};class ei{constructor(){this.widths={}}randomize(e){this.widths=_.a(B.a(S.a("id")),I.a(()=>Object(Q.a)(5,30)))(e)}getWidth(e){return this.widths[e]}}Qn([E.m],ei.prototype,"widths",void 0),Qn([E.d],ei.prototype,"randomize",null);var ti=new ei,ni={ageStore:Wn,itemsStore:Me,i18nStore:Xn,langStore:be,listStore:Be,uiStore:Zn,widthsStore:ti},ii=ee.b`
  html {
    ${ne.max.tablet`
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
`;ni.widthsStore.randomize(ni.listStore.list);Object(r.render)(a.a.createElement(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(ii,null),a.a.createElement(m.b,Object.assign({},ni),a.a.createElement(Pn,null))),null),document.getElementById("app"))},Q4UO:function(e,t,n){var i=n("mXGw");function a(e){return i.createElement("svg",e,[i.createElement("title",{key:0},"Playing cards collection"),i.createElement("style",{key:1},"@media (max-width:480px){svg{background-image:url(static/img/playing-cards-800.png?1a24)}}@media (min-width:481px) and (max-width:720px){svg{background-image:url(static/img/playing-cards-1000.png?1a24)}}@media (min-width:720px){svg{background-image:url(static/img/playing-cards-1200.png?1a24)}}svg{background-size:contain;background-repeat:no-repeat}svg a rect{cursor:pointer;fill:transparent;opacity:.5;transition:fill .2s}svg a:focus,svg a:hover{outline:0}svg a:hover rect{fill:currentColor;cursor:pointer}svg rect.no-link{cursor:help;fill:transparent}"),i.createElement("a",{xlinkHref:"https://playingarts.com/ru/special?utm_source=tema&utm_medium=banner&utm_campaign=300x300",target:"_blank",key:2},[i.createElement("title",{key:0},"Playing Arts: Special Edition"),i.createElement("rect",{x:"18",width:"174",height:"240",key:1})]),i.createElement("rect",{x:"192",width:"160",height:"240",className:"no-link",key:3},i.createElement("title",null,"Царик Филипп №2")),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/",target:"_blank",key:4},[i.createElement("title",{key:0},"Оперные (репринт)"),i.createElement("rect",{x:"362",width:"160",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/french-suit/classic-470/",target:"_blank",key:5},[i.createElement("title",{key:0},"Karty do gry №490"),i.createElement("rect",{x:"529",width:"160",height:"243",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-667.html",target:"_blank",key:6},[i.createElement("title",{key:0},"Белый палех"),i.createElement("rect",{x:"1187",width:"160",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-154.html",target:"_blank",key:7},[i.createElement("title",{key:0},"Госпожа удача"),i.createElement("rect",{x:"1346",width:"160",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-701.html",target:"_blank",key:8},[i.createElement("title",{key:0},"Невские"),i.createElement("rect",{x:"1514",width:"160",height:"250",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-133.html",target:"_blank",key:9},[i.createElement("title",{key:0},"Атласные"),i.createElement("rect",{x:"1674",width:"160",height:"248",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-152.html",target:"_blank",key:10},[i.createElement("title",{key:0},"Командирские"),i.createElement("rect",{x:"1833",width:"160",height:"251",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/russian-motifs/derzhava/",target:"_blank",key:11},[i.createElement("title",{key:0},"Derzhava"),i.createElement("rect",{x:"18",y:"240",width:"170",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-637.html",target:"_blank",key:12},[i.createElement("title",{key:0},"Jacob's Bible Cards"),i.createElement("rect",{x:"346",y:"240",width:"170",height:"240",key:1})]),i.createElement("a",{xlinkHref:"https://symbal.by/t/1286-karty-bnr/",target:"_blank",key:13},[i.createElement("title",{key:0},"100 гадоў БНР"),i.createElement("rect",{x:"522",y:"243",width:"172",height:"242",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/otherm/abraxas/",target:"_blank",key:14},[i.createElement("title",{key:0},"Abraxas"),i.createElement("rect",{x:"696",y:"240",width:"157",height:"244",key:1})]),i.createElement("a",{xlinkHref:"https://www.behance.net/gallery/16822663/Hidden-part",target:"_blank",key:15},[i.createElement("title",{key:0},"Hidden Part"),i.createElement("rect",{x:"856",y:"242",width:"150",height:"238",key:1})]),i.createElement("a",{xlinkHref:"https://www.artiphany.com/products/kitten-club",target:"_blank",key:16},[i.createElement("title",{key:0},"Kitten Club Playing Cards"),i.createElement("rect",{x:"1008",y:"244",width:"170",height:"241",key:1})]),i.createElement("a",{xlinkHref:"https://www.artiphany.com/products/mermaid-playing-cards",target:"_blank",key:17},[i.createElement("title",{key:0},"Mermaid Queen Playing Cards"),i.createElement("rect",{x:"1335",y:"245",width:"170",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-151.html",target:"_blank",key:18},[i.createElement("title",{key:0},"Державные"),i.createElement("rect",{x:"1513",y:"250",width:"160",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-693.html",target:"_blank",key:19},[i.createElement("title",{key:0},"Времена года"),i.createElement("rect",{x:"1673",y:"250",width:"155",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.a.trionfi.eu/WWPCM/decks06/d04208/d04208.htm",target:"_blank",key:20},[i.createElement("title",{key:0},"Skat"),i.createElement("rect",{x:"1833",y:"253",width:"155",height:"242",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/classic/salon-karte-66/",target:"_blank",key:21},[i.createElement("title",{key:0},"Salon-Karte №66"),i.createElement("rect",{x:"18",y:"480",width:"160",height:"235",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/computer-games/pixel-art/",target:"_blank",key:22},[i.createElement("title",{key:0},"Pixel Art"),i.createElement("rect",{x:"180",y:"480",width:"170",height:"240",key:1})]),i.createElement("rect",{x:"355",y:"480",width:"165",height:"240",className:"no-link",key:23},i.createElement("title",null,"Царик Филипп №3")),i.createElement("a",{xlinkHref:"http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm",target:"_blank",key:24},[i.createElement("title",{key:0},"Ennia"),i.createElement("rect",{x:"525",y:"485",width:"153",height:"235",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-1341.html",target:"_blank",key:25},[i.createElement("title",{key:0},"Rosina Watchmeister"),i.createElement("rect",{x:"847",y:"480",width:"157",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-1119.html",target:"_blank",key:26},[i.createElement("title",{key:0},"Весела політика"),i.createElement("rect",{x:"1008",y:"485",width:"170",height:"243",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/",target:"_blank",key:27},[i.createElement("title",{key:0},"Greek mythology"),i.createElement("rect",{x:"1184",y:"484",width:"167",height:"244",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/russian-motifs/atlasnye2/",target:"_blank",key:28},[i.createElement("title",{key:0},"Атласные"),i.createElement("rect",{x:"1356",y:"485",width:"155",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm",target:"_blank",key:29},[i.createElement("title",{key:0},"Turkey"),i.createElement("rect",{x:"1515",y:"495",width:"155",height:"240",key:1})]),i.createElement("a",{xlinkHref:"https://www.russcards.com/lapin-cards",target:"_blank",key:30},[i.createElement("title",{key:0},"Карты Лапиных"),i.createElement("rect",{x:"1674",y:"495",width:"155",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-445.html",target:"_blank",key:31},[i.createElement("title",{key:0},"Исторические"),i.createElement("rect",{x:"1831",y:"497",width:"160",height:"248",key:1})]),i.createElement("a",{xlinkHref:"http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm",target:"_blank",key:32},[i.createElement("title",{key:0},"Петергоф"),i.createElement("rect",{y:"718",width:"160",height:"248",key:1})]),i.createElement("a",{xlinkHref:"https://unitedcardists.com/viewtopic.php?f=8&t=5424",target:"_blank",key:33},[i.createElement("title",{key:0},"Pixel Cards"),i.createElement("rect",{x:"162",y:"722",width:"170",height:"243",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-272.html",target:"_blank",key:34},[i.createElement("title",{key:0},"Московский сувенир"),i.createElement("rect",{x:"337",y:"722",width:"150",height:"235",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/french-suit/vsya-vlast/",target:"_blank",key:35},[i.createElement("title",{key:0},"Вся власть"),i.createElement("rect",{x:"641",y:"725",width:"157",height:"244",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-282.html",target:"_blank",key:36},[i.createElement("title",{key:0},"Партия"),i.createElement("rect",{x:"798",y:"730",width:"155",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-153.html",target:"_blank",key:37},[i.createElement("title",{key:0},"Княжеские"),i.createElement("rect",{x:"955",y:"725",width:"160",height:"250",key:1})]),i.createElement("a",{xlinkHref:"https://www.artlebedev.ru/space-invaders/",target:"_blank",key:38},[i.createElement("title",{key:0},"Космические захватчики"),i.createElement("rect",{x:"1116",y:"728",width:"155",height:"242",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-1503.html",target:"_blank",key:39},[i.createElement("title",{key:0},"Schafkopf Tarock"),i.createElement("rect",{x:"1270",y:"730",width:"157",height:"277",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-694.html",target:"_blank",key:40},[i.createElement("title",{key:0},"Рококо"),i.createElement("rect",{x:"1668",y:"736",width:"127",height:"194",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-137.html",target:"_blank",key:41},[i.createElement("title",{key:0},"Лубочные"),i.createElement("rect",{y:"973",width:"142",height:"222",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-148.html",target:"_blank",key:42},[i.createElement("title",{key:0},"Времена года"),i.createElement("rect",{x:"455",y:"960",width:"155",height:"240",key:1})]),i.createElement("a",{xlinkHref:"https://www.russcards.com/modern-style",target:"_blank",key:43},[i.createElement("title",{key:0},"Новый стиль"),i.createElement("rect",{x:"770",y:"968",width:"160",height:"242",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-692.html",target:"_blank",key:44},[i.createElement("title",{key:0},"Палех"),i.createElement("rect",{x:"1106",y:"970",width:"160",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/humor/gra-wstepna/",target:"_blank",key:45},[i.createElement("title",{key:0},"Gra wstępna"),i.createElement("rect",{x:"1268",y:"1184",width:"187",height:"270",key:1})]),i.createElement("rect",{x:"1455",y:"1088",width:"205",height:"282",className:"no-link",key:46},i.createElement("title",null,"Царик Филипп №1")),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-155.html",target:"_blank",key:47},[i.createElement("title",{key:0},"Диана"),i.createElement("rect",{x:"468",y:"1203",width:"160",height:"243",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/international-style/international/",target:"_blank",key:48},[i.createElement("title",{key:0},"International"),i.createElement("rect",{x:"627",y:"1208",width:"160",height:"237",key:1})]),i.createElement("a",{xlinkHref:"https://www.artlebedev.ru/mafia/",target:"_blank",key:49},[i.createElement("title",{key:0},"Mafia"),i.createElement("rect",{x:"787",y:"1210",width:"160",height:"243",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-690.html",target:"_blank",key:50},[i.createElement("title",{key:0},"Славянские"),i.createElement("rect",{x:"944",y:"1211",width:"160",height:"245",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/",target:"_blank",key:51},[i.createElement("title",{key:0},"Русский стиль"),i.createElement("rect",{x:"1105",y:"1215",width:"160",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-732.html",target:"_blank",key:52},[i.createElement("title",{key:0},"Karty do gry № 410"),i.createElement("rect",{x:"478",y:"1445",width:"159",height:"238",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-737.html",target:"_blank",key:53},[i.createElement("title",{key:0},"Рейнские"),i.createElement("rect",{x:"637",y:"1445",width:"170",height:"246",key:1})]),i.createElement("a",{xlinkHref:"https://wearmedicine.com/p/medicine-karty-do-gry-11788",target:"_blank",key:54},[i.createElement("title",{key:0},"Kartу do gry Medicine"),i.createElement("rect",{x:"808",y:"1449",width:"160",height:"233",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/otherm/brosmino-deck/",target:"_blank",key:55},[i.createElement("title",{key:0},"Bicycle: Brosmind"),i.createElement("rect",{x:"1127",y:"1455",width:"173",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/personality/jagellonskie/",target:"_blank",key:56},[i.createElement("title",{key:0},"Jagiellońskie"),i.createElement("rect",{x:"1300",y:"1455",width:"162",height:"240",key:1})]),i.createElement("a",{xlinkHref:"http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html",target:"_blank",key:57},[i.createElement("title",{key:0},"Универсальное таро"),i.createElement("rect",{x:"1462",y:"1366",width:"185",height:"328",key:1})]),i.createElement("a",{xlinkHref:"https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards",target:"_blank",key:58},[i.createElement("title",{key:0},"Ephemerid"),i.createElement("rect",{x:"1655",y:"1450",width:"175",height:"244",key:1})]),i.createElement("a",{xlinkHref:"http://www.ukrcards.com.ua/product-700.html",target:"_blank",key:59},[i.createElement("title",{key:0},"Майа"),i.createElement("rect",{x:"1835",y:"1446",width:"160",height:"248",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/",target:"_blank",key:60},[i.createElement("title",{key:0},"Низшие духи восточнославянской мифологии"),i.createElement("rect",{y:"1677",width:"160",height:"248",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/advertising/science-fiction-1659/",target:"_blank",key:61},[i.createElement("title",{key:0},"Sience-Fiction"),i.createElement("rect",{x:"160",y:"1680",width:"173",height:"242",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/classic/black-russian-1670/",target:"_blank",key:62},[i.createElement("title",{key:0},"Black Russian"),i.createElement("rect",{x:"333",y:"1680",width:"173",height:"242",key:1})]),i.createElement("a",{xlinkHref:"https://wearmedicine.com/p/medicine-karty-do-gry-16905",target:"_blank",key:63},[i.createElement("title",{key:0},"Kartу do gry Medicine"),i.createElement("rect",{x:"649",y:"1690",width:"160",height:"238",key:1})]),i.createElement("a",{xlinkHref:"http://www.dama-pik.com.ua/cards/french-suit/luxury/",target:"_blank",key:64},[i.createElement("title",{key:0},"Luxury"),i.createElement("rect",{x:"810",y:"1682",width:"167",height:"245",key:1})])])}a.defaultProps={viewBox:"0 0 2000 1927"},e.exports=a,a.default=a},Y2mD:function(e,t,n){e.exports={srcSet:n.p+"static/img/playing-cards-800.png 800w,"+n.p+"static/img/playing-cards-1000.png 1000w,"+n.p+"static/img/playing-cards-1200.png 1200w",images:[{path:n.p+"static/img/playing-cards-800.png",width:800,height:771},{path:n.p+"static/img/playing-cards-1000.png",width:1e3,height:963},{path:n.p+"static/img/playing-cards-1200.png",width:1200,height:1156}],src:n.p+"static/img/playing-cards-800.png",toString:function(){return n.p+"static/img/playing-cards-800.png"},placeholder:void 0,width:800,height:771}}}]);
//# sourceMappingURL=default~app.5f36.js.map