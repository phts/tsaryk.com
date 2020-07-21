(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/hs+":function(e,t,i){"use strict";i.r(t);var n=i("mXGw"),a=i.n(n),r=i("xARA"),o=(i.p,i.p,i("mj6n")),l=i.n(o),s=i("ssVN"),c=i.n(s),p=new l.a({id:"external-link",use:"external-link-usage",content:'<symbol id="external-link">\n  <g>\n    <g>\n      <polygon style="fill:currentColor" points="2,2 5,2 5,3 3,3 3,9 9,9 9,7 10,7 10,10 2,10   " />\n      <polygon style="fill:currentColor" points="6.211,2 10,2 10,5.789 8.579,4.368 6.447,6.5    5.5,5.553 7.632,3.421   " />\n    </g>\n  </g>\n</symbol>'}),d=(c.a.add(p),i("GcVA")),m=i("USb2"),h=i("oNR1"),u="/",g="/:id",y=i("/KhT");function w(){return a.a.useContext(d.a)}var f,b,k,$=i("cneo"),x=i("pKwR"),E=i("f93M"),v=i("ceze"),S=i("z45+"),P=i("CxYM"),O=i("uWba"),T=i("pXna"),j=i("T3Rs"),M=i("YZBk"),C=i("uKZA"),_=i("Q5NV"),R=i("0WAc");!function(e){e.Category="Category",e.Item="Item",e.Meta="Meta"}(f||(f={})),function(e){e.Head="Head",e.Middle="Middle",e.Tail="Tail"}(b||(b={})),function(e){e.M="M",e.L="L",e.XL="XL",e.XXL="XXL"}(k||(k={}));const A={position:b.Middle,size:k.M,type:f.Item},D={EN:{position:b.Head,type:f.Meta},RU:{position:b.Head,type:f.Meta},Title:{position:b.Head,size:k.XXL,type:f.Meta},"©":{position:b.Tail},About:{type:f.Category},Contacts:{type:f.Category},Hobby:{type:f.Category},Meta:{type:f.Category},Work:{type:f.Category},Ascending:{type:f.Meta},Categorize:{type:f.Meta},Colors:{type:f.Meta},Feedback:{type:f.Meta},Random:{type:f.Meta},Belarus:{size:k.L},"Board games":{size:k.L},Cats:{size:k.XL},"Curriculum vitae":{size:k.L},Drums:{size:k.XL},Electronics:{size:k.L},GitHub:{size:k.L},Family:{size:k.XL},JavaScript:{size:k.XL},"Kraków":{size:k.L},Music:{size:k.XL},"Phil Tsaryk":{size:k.XXL},"Playing cards":{size:k.L},React:{size:k.L},"Software Engineer":{size:k.L},Traveling:{size:k.L}};var B=i("ndCU"),I=i("bxtJ"),H=i("efyt");function L(e){return("0"+e.toString()).slice(-2)}var z=i("+Sao"),F=i("qXsV");const N={category:null},G={};z.a((e,t)=>{F.a(e=>{G[e]={category:t}},e)},{About:["Age","Belarus","Facebook","Family","Kraków","LinkedIn","Novopolotsk","Phil Tsaryk","Pilip Tsaryk","Poland","VK"],Contacts:["+375292181503","+48534898187","Email","Skype","Telegram"],Hobby:["Billiard","Board games","Cats","Drums","Electronics","Heroes of Might and Magic 3","Joy in Time","Last.fm","Music","Playing cards","Promo codes","Ritchie Blackmore","Space Resonance","Škoda","The Netherlands","Traveling","Ultramarined","Video games","Vinyl","ZX Spectrum","bash.org","foobar2000"],Meta:["About","Ascending","Categorize","Colors","Contacts","EN","Feedback","Hobby","Meta","RU","Random","Title","Work","©"],Work:["BitBucket","Curriculum vitae","Debian","Epam","Firefox","GitHub","Grand Parade","Habr","JavaScript","PSU","React","Ruby","SaM Solutions","Software Engineer","Stack Overflow","Sublime Text"]});const U=G;function W(e,t,i=[]){return`<a ${[`href="${e}"`,...i].join(" ")}>${t}</a>`}function K(e){return`<p>${e}</p>`}function J(e,t){var i,n;return`${W(e,`${t}${i="external-link",`<svg height="${(n={height:12,width:12,viewBox:"0 0 12 12"}).height}" width="${n.width}" viewBox="${n.viewBox}"><use xlink:href="#${i}"/></svg>`}`,['target="_blank"'])}`}function V(e,t=e){return W(`#/${e}`,t)}function X(e,t=e){return J(`mailto:${e}`,t)}function q(e,t=e){return J(`tel:${e}`,t)}function Y(e,t){return`\n    <figure>\n      ${e}\n      <figcaption>${t}</figcaption>\n    </figure>\n  `}function Z(e){return`\n    <iframe\n      class="youtube"\n      width="560"\n      height="315"\n      src="https://www.youtube.com/embed/${e}?rel=0"\n      frameborder="0"\n      allow="autoplay; encrypted-media"\n      allowfullscreen>\n    </iframe>\n  `}var Q=i("Ikss"),ee=i("UutA");const te={mobile:320,smartphone:480,tablet:720,desktop:1020,hd:1440},ie=Object.keys(te).reduce((e,t)=>(e.min=e.min||{},e.min[t]=(e,...i)=>ee.c`
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
`;function oe(e,t){const i=`https://i.imgur.com/${e}`;return`\n    <picture>\n      <source srcset="${i}t.jpg" media="(max-width: ${te.mobile}px)">\n      <source srcset="${i}m.jpg" media="(max-width: ${te.smartphone}px)">\n      <source srcset="${i}l.jpg" media="(max-width: ${te.tablet}px)">\n      <source srcset="${i}.jpg" media="(min-width: ${te.hd}px)">\n      <img src="${i}h.jpg" alt=${t}>\n    </picture>\n  `}const le=new Date(1987,11,3,10,15,0),se="https://www.last.fm/user/phil_tsarik",ce={EN:{tooltip:"Not fully translated yet. Sorry."},RU:{},"©":{name:"© Phil Tsaryk, 2019",description:`\n      <p>This site was created and being supported by ${V("Phil Tsaryk","me")} in free time.</p>\n      <p>Main technologies:</p>\n      <ul>\n        <li>MobX</li>\n        <li>React</li>\n        <li>TypeScript</li>\n      </ul>\n      <p>The source code is ${J("https://github.com/phts/tsaryk.com","on Github")}.</p>\n    `},About:{},Contacts:{},Hobby:{},Meta:{},Work:{},"+375292181503":{description:K(`My Byelorussian phone number: ${q("+375292181503","+375 29 218-15-03")}.`)},"+48534898187":{description:K(`My Polish phone number: ${q("+48534898187","+48 534 898 187")}.`)},Age:{data:{days:"days",hours:"hours",min:"min",months:"months",sec:"sec",years:"years"}},Ascending:{},"bash.org":{},Belarus:{description:K("My native country is Belarus.")},Billiard:{description:K("Playing &#x1F3B1; in most cases.")},BitBucket:{description:`\n      <p>\n        Using it for private projects as well as for old non-actual ones which should not be on\n        ${V("GitHub")}. BitBucket has nice feature to group repos by projects that helps to keep\n        actual projects and non-actual ones separatelly.\n      </p>\n      <p>Currently there are a few public projects:</p>\n      <ul>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/JAV","First Java Apps")}\n          &mdash; my first apps written on Java when started to leart it.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/OLD","Old Delphi Apps")}\n          &mdash; programs written on Delphi in 2004&ndash;2006 years.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/PSU","University Projects")}\n          &mdash; programswhich were written by me during studying in ${V("PSU","University")}.\n        </li>\n      </ul>\n    `},"Board games":{description:`\n      <p>I like playing board games especially strategic.</p>\n      <p>Among those what we have I can select:</p>\n      <ul>\n        <li>${J("https://en.wikipedia.org/wiki/Evolution:_The_Origin_of_Species","Evolution: The Origin of Species")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Hive_(game)","Hive")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/7_Wonders_(board_game)","7 wonders")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Galaxy_Trucker","Galaxy Trucker")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Splendor_(game)","Splendor")}</li>\n      </ul>\n    `},Categorize:{},Cats:{data:[{icon:"&#x1F989;",text:"Owls"},{icon:"&#x1F47D;",text:"Raccoons",tooltip:"Raccoons don't have their own emoji in unicode yet"},{icon:"&#x1F98A;",text:"Foxes"},{icon:"&#x1F418;",text:"Elephants"}]},Colors:{},"Curriculum vitae":{description:`\n      <p>\n        In short &mdash; I am ${V("JavaScript","frontend")} developer with more than seven\n        years of expierence.\n        Having deep knowladge and understanding of modern web-technologies and frameworks.\n      </p>\n      <p>\n        In full &mdash; always up-to-date CV is available on my\n        ${J("https://github.com/phts/my-cv","GitHub profile")} as well as on\n        ${J("https://www.linkedin.com/in/tsaryk/","LinkedIn")}.\n      </p>\n    `},Debian:{description:K("Working in Debian.")},Drums:{description:`\n      <p>My set:</p>\n      <ul>\n        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>\n        <li>Paiste 2002 Medium Crash 18&Prime;</li>\n        <li>Paiste Signature Precision Crash 17&Prime;</li>\n        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>\n        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>\n        <li>Drum sticks Vater Los Angeles 5A</li>\n      </ul>\n      <p>Used to play in these bands as a drummer:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n    `},Electronics:{description:"TODO"},Email:{description:K(`My email: ${X("phil@tsaryk.com")}.`)},Epam:{description:`\n      <p>\n        Relocated to ${V("Kraków")} and have been worked in Epam\n        ${V("Curriculum vitae","for little more than two years")}.\n      </p>\n      <p>\n        Learned here Angular and ${V("React")},\n        was participating in trainings, conducting workshops, interviewing new candidates.\n      </p>\n      <p>Projects &mdash; it depends. In most cases there is a lot of boring and legacy stuff.</p>\n      <p>After Epam working in ${V("Grand Parade")}.</p>\n    `},Facebook:{description:`\n      <p>${J("https://www.facebook.com/ph.tsaryk","My page")} on facebook.</p>\n      <p>Being here very very rarely.</p>\n    `},Family:{},Feedback:{data:{sayHello:"Say hello..."}},Firefox:{description:`\n      <p>\n        Using Firefox only. I don't like Chrome from its very beggining due to impossibility to\n        customize it for my needs.\n      </p>\n      <p>\n        ${J("https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts","Occasionally writing")} simple addons for FF.\n      </p>\n    `},foobar2000:{description:`\n      <p>Excellent music player. Using it on my PC and smartphone.</p>\n      <p>\n        Even created a small and useful plugin\n        ${J("https://hydrogenaud.io/index.php/topic,110908.0.html","Party Shuffle")}.\n      </p>\n    `},GitHub:{description:K(`${J("https://github.com/phts","There are")} my useful and useless projects\n      which are accessible for everyone.`)},"Grand Parade":{description:`\n      <p>\n        A company where ${V("Curriculum vitae","currently")} I am working in.\n        This is a part of a big bookmaker\n        ${J("https://en.wikipedia.org/wiki/William_Hill_(bookmaker)","William Hill")}.\n      </p>\n      <p>Excellent product company, fine projects, fine people.</p>\n    `},Habr:{},"Heroes of Might and Magic 3":{description:`\n      <p>\n        I like playing to ${J("https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III","HoMM3")}\n        / ${J("http://h3hota.com/en/documentation","HotA")} when having free time.\n      </p>\n      <p>\n        It is nice since the game is old it still has a huge community, tournaments are taking\n        place, new addons and patches are being released.\n      </p>\n    `},JavaScript:{description:`\n      <p>\n        The main direction of my expertise &mdash; JavaScript and everything related to it\n        including ES6+, Angular, ${V("React")}, Node.js, Typescript, etc.\n      </p>\n    `},"Joy in Time":{description:`\n      <p>\n        This band in some degree is an oposite of ${V("Space Resonance")} in style and mood.\n        In spite of this I used to play in this group with great pleasure.\n      </p>\n      <p>\n        ${Z("egVPsfDi81A")}\n      </p>\n      <p>There is vk page: ${J("https://vk.com/joyintimes","joyintimes")}</p>\n    `},"Kraków":{description:K(`Living here with ${V("Family","my family")} more than three years.`)},"Last.fm":{description:K(`${J(se,"My profile")} on Last.fm`)},LinkedIn:{description:K(`${J("https://www.linkedin.com/in/tsaryk/","My profile")} on LinkedIn.`)},Music:{description:`\n      <p>One of most important part of my life.</p>\n      <h3>Listening</h3>\n      <p>My toplist at the moment:<p>\n      <ul>\n        <li>Pink Floyd</li>\n        <li>Lunatic Soul</li>\n        <li>Riverside</li>\n        <li>Deep Purple</li>\n        <li>Opeth</li>\n        <li>The Gathering</li>\n        <li>Led Zeppelin</li>\n        <li>God Is An Astronaut</li>\n        <li>Anathema</li>\n      </ul>\n      <p>Also I have ${V("Last.fm","Last.fm profile")}.</p>\n      <p>Often listening to music ${V("Vinyl","on vinyl")}.</p>\n      <h3>Playing</h3>\n      <p>...${V("Drums","drums")}.<p>\n      <p>Used to play in bands:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n      <h3>Going to concerts</h3>\n      <p>From my must-have list already visited:</p>\n      ${Y(oe("FykwSDm","Deep Purple in Minsk, 2011"),"Deep Purple in Minsk, 2011")}\n      ${Y(oe("qIIb0bR","God is an Astronaut in Saint Petersburg, 2012"),"God is an Astronaut in Saint Petersburg, 2012")}\n      ${Y(oe("dPNRWdG","Australian Pink Floyd Show in Minsk, 2013"),"Australian Pink Floyd Show in Minsk, 2013")}\n      ${Y(oe("tcyuP0Q","Dream Theater in Katowice, 2015"),"Dream Theater in Katowice, 2015")}\n      ${Y(oe("yDFhHGF","Riverside in Katowice, 2015"),"Riverside in Katowice, 2015")}\n      ${Y(oe("5oDXQ4s","David Gilmour in France, 2016"),"David Gilmour in France, 2016")}\n      ${Y(oe("pxy4Skj","Anathema in Kraków, 2017"),"Anathema in Kraków, 2017")}\n      ${Y(oe("FOuMsdO","Opeth in Warsaw, 2017"),"Opeth in Warsaw, 2017")}\n      ${Y(oe("zMy5wbq","Roger Waters in Kraków, 2018"),"Roger Waters in Kraków, 2018")}\n      ${Y(oe("mROYG5y","Nightwish in Kraków, 2018"),"Nightwish in Kraków, 2018")}\n      ${Y(oe("KhtC73G","RPWL in Warsaw, 2019"),"RPWL in Warsaw, 2019")}\n      ${Y(oe("x7kkpYK","Pink in Warsaw, 2019"),"Pink in Warsaw, 2019")}\n      <p>Remaining:</p>\n      <ul>\n      <li>${V("Ritchie Blackmore","Rainbow or Ritchie Blackmore's Night")}</li>\n      <li>The Gathering</li>\n      <li>The Morningside</li>\n      </ul>\n    `},Novopolotsk:{description:`\n      <p>\n        My native town. It is located in Vitsebsk Province, ${V("Belarus")}.\n        Coordinates:\n        ${J("https://tools.wmflabs.org/geohack/geohack.php?pagename=Novopolotsk&params=55_32_N_28_39_E_region:BY_type:city","55°32′00″ N 28°40′00″ E")}\n      </p>\n    `},"Phil Tsaryk":{description:`\n      <p>\n        My name is Phil Tsaryk. I was born December 3 1987 in ${V("Novopolotsk")}\n        in BSSR (now &mdash; ${V("Belarus")}).\n      </p>\n      <p>\n        In 2011 graduated from ${V("PSU","Polotsk State University")} with a speciality\n        ${V("Software Engineer")}.\n      </p>\n      <p>\n        Nowadays live in ${V("Kraków")} and work as\n        ${V("JavaScript","a frontend developer")} in ${V("Grand Parade")}.\n      </p>\n    `},"Pilip Tsaryk":{description:"\n      <p>My legal name.</p>\n      <p>This is how it is written in my passport.</p>\n    "},"Playing cards":{data:{p1:"Collecting since my childhood.",p2:"There is no purpose to gather everything from everywhere, so the collection is not so big and contains around 90 decks today. Collecting those which I really like.",imgTitle:"One card from each deck (clickable). July 2020"}},Poland:{description:K(`Currently living in Poland in ${V("Kraków")}.`)},"Promo codes":{description:`\n      <p>\n        Feel free to use:\n      </p>\n      <ul>\n        <li>Airbnb: ${J("https://www.airbnb.ru/c/philt68?currency=PLN","philt68")}</li>\n        <li>Allegro: ${J("https://allegro.pl/aplikacja/polecam/pilip782627","pilip782627")}</li>\n        <li>atlasbus.by: ${J("https://atlasbus.by/share/app/GPMQHV","GPMQHV")}</li>\n        <li>Bank Millennium:\n          ${J("https://www.bankmillennium.pl/lubietopolecam?id=24586296","24586296")}</li>\n        <li>Bolt (Taxify): S5S8K8</li>\n        <li>Booking.com: ${J("https://www.booking.com/s/18_6/pilip212","pilip212")}</li>\n        <li>Hulaj: zDNRAA</li>\n        <li>Maxim: 9D06F7E7</li>\n        <li>Revolut: ${J("https://revolut.com/r/pilip1ip","pilip1ip")}</li>\n        <li>Uber: ${J("https://www.uber.com/invite/3daguge8ue","3daguge8ue")}</li>\n      </ul>\n    `},PSU:{},Random:{},React:{description:K(`At this moment I am specializing exactly ${J("https://reactjs.org/","on this library")}.`)},"Ritchie Blackmore":{description:K("In my opinion the best guitarist ever.")},Ruby:{description:`\n      <p>Cool scripting language.</p>\n      <p>\n        In spite of a fact that I am a ${V("JavaScript","frontender")}, sometimes writing\n        various useful things on Ruby.\n      </p>\n    `},"SaM Solutions":{},"Škoda":{},Skype:{description:K(`Deprecated in favor of ${V("Telegram")}.`)},"Software Engineer":{description:K(`My speciality after graduating from ${V("PSU","university")}.`)},"Space Resonance":{},"Stack Overflow":{description:`\n      <p>\n        Sometimes I ${J("https://stackoverflow.com/users/2462524/phts","ask and answer")} questions\n        on ${J("https://stackoverflow.com/","Stack Overflow")}.\n      </p>\n    `},"Sublime Text":{description:`\n      <p>Great code editor. Using it every day.</p>\n      <p>\n        Occasionally I\n        ${J("https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=","make plugins")} for it.\n      </p>\n    `},Telegram:{description:K(`My username in Telegram: ${J("https://t.me/ptsaryk","@ptsaryk")}`)},Title:{},"The Netherlands":{description:K("Someday I will live there for sure.")},Traveling:{description:`\n      <p>\n        I like traveling with my ${V("Family","family")}. ${V("Škoda","By car")},\n        by train, by plane, by anything.\n      </p>\n      <p>There are countries which we have already visited:</p>\n      <ul style="list-style-type: none;">\n        <li>&#127463;&#127486; ${V("Belarus")} &mdash; obviously</li>\n        <li>&#127464;&#127487; Czech Republic</li>\n        <li>&#127466;&#127480; Spain</li>\n        <li>&#127467;&#127479; France</li>\n        <li>&#127468;&#127479; Greece</li>\n        <li>&#127475;&#127473; ${V("The Netherlands")}</li>\n        <li>&#127477;&#127473; ${V("Poland")} &mdash; also obviously :)</li>\n        <li>&#127479;&#127482; Russia</li>\n        <li>&#127481;&#127479; Turkey</li>\n        <li>&#127482;&#127462; Ukraine</li>\n      </ul>\n    `},Ultramarined:{data:{ultrimarine:"Ultramarine me!",unultrimarine:"Unultramarine"}},"Video games":{description:`\n      <p>\n        I like high-quality and interesting computer games, in most cases quests and strategies.\n      </p>\n      <p>Made a huge impression on me and still making:</p>\n      <ul>\n        <li>${J("https://en.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness","Warcraft 2")}\n          / ${J("https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos","3")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/StarCraft","Starcraft")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Stronghold_(2001_video_game)","Stronghold")}</li>\n        <li>${V("Heroes of Might and Magic 3")}\n          / ${J("https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV","4")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Half-Life_(series)","Half-Life")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Syberia","Syberia")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim","Majesty")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Mafia_(video_game)","Mafia")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Grand_Theft_Auto","GTA")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom","Knights and Merchants: The Shattered Kingdom")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Portal_(series)","Portal")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Anno_1701","Anno 1701")}\n          / ${J("https://en.wikipedia.org/wiki/Anno_1404","1404")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Space_Rangers_(video_game)","Space Rangers")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/The_Talos_Principle","The Talos Principle")}</li>\n      </ul>\n      <p>And some games on ${V("ZX Spectrum")} as well.</p>\n    `},Vinyl:{description:Y(oe("Mkb7mO9","Винил"),"Audio-Technica AT-LP120USBHC + Yamaha A-S501 + Hand-made speakers by Andrzej Figarski.")},VK:{description:K(`${J("https://vk.com/phil.tsaryk","My profile")} in VK.`)},"ZX Spectrum":{description:`\n      <p>\n        My first computer. First line of code there most likely was <code>LOAD "" &crarr;</code>\n        &mdash; to load game from сassette tape.\n      </p>\n      <p>\n        Most loved games: ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=2323","Highway Encounter")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=461","Battle Ships")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=1686","Exolon")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=5448","Tujad")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=639","Boulder Dash")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=4784","Spy Hunter")} and many more.\n      </p>\n    `}},pe={EN:{name:"АНГ",tooltip:"Not fully translated yet. Sorry."},RU:{name:"РУС"},"©":{name:"© Филипп Царик, 2019",description:`\n      <p>Этот сайт создавался и поддерживается ${V("Phil Tsaryk","мной")} в свободное время.</p>\n      <p>Основные используемые технологии:</p>\n      <ul>\n        <li>MobX</li>\n        <li>React</li>\n        <li>TypeScript</li>\n      </ul>\n      <p>Исходный код сайта выложен ${J("https://github.com/phts/tsaryk.com","на Гитхабе")}.</p>\n    `},About:{name:"Обо мне"},Contacts:{name:"Контакты"},Hobby:{name:"Хобби"},Meta:{name:"Мета"},Work:{name:"Работа"},"+375292181503":{description:K(`Мой белорусский номер телефона: ${q("+375292181503","+375 29 218-15-03")}.`)},"+48534898187":{description:K(`Мой польский номер телефона: ${q("+48534898187","+48 534 898 187")}.`)},Age:{name:"Возраст",data:{days:"дн.",hours:"ч.",min:"мин.",months:"мес.",sec:"сек.",years:"лет"}},Ascending:{name:"По порядку"},"bash.org":{name:"Башорг",description:K(`Когда-то давно случайно ${J("http://bash.im/quote/393345","попал")} на\n      bash.org.`)},Belarus:{name:"Беларусь",description:K("Родом из Беларуси.")},Billiard:{name:"Бильярд",description:K("Играю в &#x1F3B1; в большинстве случаев.")},BitBucket:{name:"БитБакет",description:`\n      <p>\n        Использую как для приватных проектов, так и для неактуальных, которым нечего делать на\n        ${V("GitHub","Гитхабе")}. БитБакет позволяет группировать репозитории по проектам, что\n        очень помогает отсортировать актуальные репозитории от устаревших.\n      </p>\n      <p>На данный момент в публичный доступ выложены:</p>\n      <ul>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/JAV","First Java Apps")}\n          &mdash; первые программы, написанные на Джаве, когда её начал изучать.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/OLD","Old Delphi Apps")}\n          &mdash; программы, написанные на Delphi примерно в 2004&ndash;2006 годах.\n        </li>\n        <li>\n          ${J("https://bitbucket.org/account/user/phts-home/projects/PSU","University Projects")}\n          &mdash; программы, которые были написаны в период обучения в\n          ${V("PSU","университете")}.\n        </li>\n      </ul>\n    `},"Board games":{name:"Настольные игры",description:`\n      <p>Люблю играть в настолки, особенно в стратегические.</p>\n      <p>Из того, что есть у нас, можно выделить:</p>\n      <ul>\n        <li>${J("ttps://ru.wikipedia.org/wiki/Эволюция_(настольная_игра)","Эволюция")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Улей_(игра)","Улей")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/7_Чудес","7 чудес")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Galaxy_Trucker","Космические дальнобойщики")}</li>\n        <li>${J("https://en.wikipedia.org/wiki/Splendor_(game)","Роскошь")}</li>\n      </ul>\n    `},Categorize:{name:"По категориям"},Cats:{name:"Коты",data:[{icon:"&#x1F989;",text:"Совы"},{icon:"&#x1F47D;",text:"Еноты",tooltip:"У енотов пока нет своего emoji в юникоде"},{icon:"&#x1F98A;",text:"Лисицы"},{icon:"&#x1F418;",text:"Слоны"}]},Colors:{name:"Цвета"},"Curriculum vitae":{name:"Резюме",description:`\n      <p>\n        Если коротко &mdash; я ${V("JavaScript","фронтэнд")} разработчик с более, чем семью\n        годами стажа.\n        Обладаю глубокими знаниями современных веб-технологий и фреймворков.\n      </p>\n      <p>\n        Если подробнее &mdash; всегда актуальное резюме доступно на\n        ${J("https://github.com/phts/my-cv","Гитхабе")}, а также на\n        ${J("https://www.linkedin.com/in/tsaryk/","Линкедине")}.\n      </p>\n    `},Debian:{name:"Дебиан",description:K("Работаю на Debian.")},Drums:{name:"Барабаны",description:`\n      <p>Мой сет:</p>\n      <ul>\n        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>\n        <li>Paiste 2002 Medium Crash 18&Prime;</li>\n        <li>Paiste Signature Precision Crash 17&Prime;</li>\n        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>\n        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>\n        <li>Палочки Vater Los Angeles 5A</li>\n      </ul>\n      <p>Играл в качестве барабанщика в группах:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time","Радость во времени")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n    `},Electronics:{name:"Электроника",description:"TODO"},Email:{name:"Имейл",description:K(`Мой имейл: ${X("phil@tsaryk.com")}.`)},Epam:{name:"Епам",description:`\n      <p>\n        Релоцировался в ${V("Kraków","Краков")} и проработал в Епаме\n        ${V("Curriculum vitae","чуть больше двух лет")}.\n      </p>\n      <p>\n        Изучил тут Ангуляр и ${V("React","Реакт")},\n        ходил на тренинги, проводил воркшопы, собеседовал новых кандидатов.\n      </p>\n      <p>С проектом &mdash; как повезёт. Но в большинстве случаев много неинтересного и легаси.</p>\n      <p>После Епама перешёл в ${V("Grand Parade","Гранд Парэйд")}.</p>\n    `},Facebook:{name:"Фейсбук",description:`\n      <p>${J("https://www.facebook.com/ph.tsaryk","Моя страничка")} на фэйсбуке.</p>\n      <p>Захожу туда очень редко.</p>\n    `},Family:{name:"Семья",description:oe("2GcRB9u","Царики")},Feedback:{name:"Обратная связь",data:{sayHello:"Скажите «привет»..."}},Firefox:{name:"Файерфокс",description:`\n      <p>\n        Пользуюсь только файерфоксом. Не взлюбил Хром с самого начала из-за невозможности его\n        настроить под себя.\n      </p>\n      <p>\n        ${J("https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts","Иногда пишу")} простые аддоны для фф.\n      </p>\n    `},foobar2000:{name:"фубар2000",description:`\n      <p>Отличный плеер музыки. Пользуюсь им на компе и телефоне.</p>\n      <p>\n        Однажды даже написал простой, но полезный плагин\n        ${J("https://hydrogenaud.io/index.php/topic,110908.0.html","Party Shuffle")}.\n      </p>\n    `},GitHub:{name:"ГитХаб",description:K(`${J("https://github.com/phts","Здесь")} находятся полезные и      бесполезные проекты, которые доступны для всех.`)},"Grand Parade":{name:"Гранд Парэйд",description:`\n      <p>\n        Моё ${V("Curriculum vitae","текущее")} место работы. Grand Parade является частью\n        большой букмейкерской конторы\n        ${J("https://en.wikipedia.org/wiki/William_Hill_(bookmaker)","William Hill")}.\n      </p>\n      <p>Отличная продуктовая компания, отличные проекты, отличные люди.</p>\n    `},Habr:{name:"Хабр",description:`\n      <p>\n        Для получения инвайта на ${J("https://habr.com/ru/","Хабр")} я давным давно опубликовал\n        ${J("https://habrahabr.ru/post/128327/","статью &laquo;Стеганография в GIF&raquo;")}, в\n        которой описал принцип работы программы\n        ${J("https://bitbucket.org/phts-home/gifed/src/master/","Gifed")}, написанной в\n        ${V("PSU","универе")} для курсового проекта по предмету &laquo;Программные методы\n        защиты информации&raquo;.\n      </p>\n      <p>${J("https://habrahabr.ru/users/phil_tsarik/","Инвайт получил")}.</p>\n      <p>\n        На Тостере засветился\n        ${J("https://toster.ru/answer?answer_id=158170#answers_list_answer","популярным ответом")}\n        на &laquo;Как оформить программный код в Microsoft Word&raquo;.\n      </p>\n    `},"Heroes of Might and Magic 3":{name:"Герои меча и магии 3",description:`\n      <p>\n        До сих пор играю в\n        ${J("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III","HoMM3")}\n        / ${J("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III:_Horn_of_the_Abyss","HotA")},\n        если появляется свободное время.\n      </p>\n      <p>\n        Радует, что несмотря на то, что игра старая, у неё огромное комьюнити, проходят турниры,\n        выпускаются аддоны и патчи.\n      </p>\n    `},JavaScript:{name:"Джаваскрипт",description:`\n      <p>\n        Основное направление моей деятельности &mdash; джаваскрит и всё, что с ним связано, включая\n        ES6+, Angular, ${V("React")}, Node.js, Typescript и т.д.\n      </p>\n    `},"Joy in Time":{name:"Радость во времени",description:`\n      <p>\n        Является в некоторой степени противоположностью ${V("Space Resonance")} по стилю\n        и настроению. Несмотря на это, я с огромным удовольствием играл в этой группе.\n      </p>\n      <p>\n        ${Z("egVPsfDi81A")}\n      </p>\n      <p>Осталась страничка в контакте: ${J("https://vk.com/joyintimes","joyintimes")}</p>\n    `},"Kraków":{name:"Краков",description:K(`Живём тут с ${V("Family","семьёй")} уже более трёх лет.`)},"Last.fm":{name:"Ласт.фм",description:K(`${J(se,"Мой профиль")} на Ласт.фм`)},LinkedIn:{name:"ЛинкедИн",description:K(`${J("https://www.linkedin.com/in/tsaryk/","Мой профиль")} на ЛинкедИне.`)},Music:{name:"Музыка",description:`\n      <p>Одна из важнейших частей моей жизни.</p>\n      <h3>Слушаю</h3>\n      <p>Мой топ на данный момент:<p>\n      <ul>\n        <li>Pink Floyd</li>\n        <li>Lunatic Soul</li>\n        <li>Riverside</li>\n        <li>Deep Purple</li>\n        <li>Opeth</li>\n        <li>The Gathering</li>\n        <li>Led Zeppelin</li>\n        <li>God Is An Astronaut</li>\n        <li>Anathema</li>\n      </ul>\n      <p>Также я есть на ${V("Last.fm","Ластфм")}.</p>\n      <p>Часто слушаю музыку ${V("Vinyl","на виниле")}.</p>\n      <h3>Играю</h3>\n      <p>...на ${V("Drums","барабанах")}.<p>\n      <p>Участвовал в группах:<p>\n      <ul>\n        <li>${V("Space Resonance")}</li>\n        <li>${V("Joy in Time","Радость во времени")}</li>\n        <li>Mission: Jupiter</li>\n        <li>${V("Ultramarined")}</li>\n      </ul>\n      <h3>Хожу на концерты</h3>\n      <p>Из своего маст-хэв списка уже побывал:</p>\n      ${Y(oe("FykwSDm","Deep Purple в Минске, 2011 г."),"Deep Purple в Минске, 2011 г.")}\n      ${Y(oe("qIIb0bR","God is an Astronaut в Санкт-Петербурге, 2012 г."),"God is an Astronaut в Санкт-Петербурге, 2012 г.")}\n      ${Y(oe("dPNRWdG","Australian Pink Floyd Show в Минске, 2013 г."),"Australian Pink Floyd Show в Минске, 2013 г.")}\n      ${Y(oe("tcyuP0Q","Dream Theater в Катовице, 2015 г."),"Dream Theater в Катовице, 2015 г.")}\n      ${Y(oe("yDFhHGF","Riverside в Катовице, 2015 г."),"Riverside в Катовице, 2015 г.")}\n      ${Y(oe("5oDXQ4s","Дэвид Гилмор во Франции, 2016 г."),"Дэвид Гилмор во Франции, 2016 г.")}\n      ${Y(oe("pxy4Skj","Anathema в Кракове, 2017 г."),"Anathema в Кракове, 2017 г.")}\n      ${Y(oe("FOuMsdO","Opeth в Варшаве, 2017 г."),"Opeth в Варшаве, 2017 г.")}\n      ${Y(oe("zMy5wbq","Roger Waters в Кракове, 2018 г."),"Roger Waters в Кракове, 2018 г.")}\n      ${Y(oe("mROYG5y","Nightwish в Кракове, 2018 г."),"Nightwish в Кракове, 2018 г.")}\n      ${Y(oe("KhtC73G","RPWL в Варшаве, 2019 г."),"RPWL в Варшаве, 2019 г.")}\n      ${Y(oe("x7kkpYK","Pink в Варшаве, 2019 г."),"Pink в Варшаве, 2019 г.")}\n      <p>Осталось:</p>\n      <ul>\n      <li>${V("Ritchie Blackmore","Rainbow или Ritchie Blackmore's Night")}</li>\n      <li>The Gathering</li>\n      <li>The Morningside</li>\n      </ul>\n    `},Novopolotsk:{name:"Новополоцк",description:`\n      <p>\n        Мой родной город. Находится в Витебской области, ${V("Belarus","Республика Беларусь")}.\n        Точные координаты:\n        ${J("https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BF%D0%BE%D0%BB%D0%BE%D1%86%D0%BA","55°32′00″ с. ш. 28°40′00″ в. д.")}\n      </p>\n    `},"Phil Tsaryk":{name:"Филипп Царик",description:`\n      <p>\n        Меня зовут Филипп Царик. Родился 3 декабря 1987 года в городе\n        ${V("Novopolotsk","Новополоцке")} в БССР (сейчас &mdash;\n        ${V("Belarus","Республика Беларусь")}).\n      </p>\n      <p>\n        В 2011 окончил ${V("PSU","Полоцкий Государственный Университет")} по специальности\n        ${V("Software Engineer","&laquo;Программное обеспечение информационных технологий&raquo;")}.\n      </p>\n      <p>\n        Сейчас проживаю в ${V("Kraków","Кракове")} и работаю в компании ${V("Grand Parade")}\n        ${V("JavaScript","фронтэнд разработчиком")}.\n      </p>\n    `},"Pilip Tsaryk":{name:"Пiлiп Царык",description:K("Афіцыйна маё імя пішацца менавіта так.")},"Playing cards":{name:"Игральные карты",data:{p1:"Коллекционирую с детства.",p2:"Не ставлю себе задачу собрать очень много и всё подряд, поэтому коллекция не очень большая и насчитывает на данный момент около 90 колод. Собираю именно те, которые понравились.",imgTitle:"По одной карте из каждой колоды (кликабельно). Июль 2020"}},Poland:{name:"Польша",description:K(`В данный момент проживаю в Польше в городе ${V("Kraków","Кракове")}.`)},"Promo codes":{name:"Промокоды",description:`\n      <p>\n        Пользуйтесь:\n      </p>\n      <ul>\n        <li>Airbnb: ${J("https://www.airbnb.ru/c/philt68?currency=PLN","philt68")}</li>\n        <li>Allegro: ${J("https://allegro.pl/aplikacja/polecam/pilip782627","pilip782627")}</li>\n        <li>atlasbus.by: ${J("https://atlasbus.by/share/app/GPMQHV","GPMQHV")}</li>\n        <li>Bank Millennium:\n          ${J("https://www.bankmillennium.pl/lubietopolecam?id=24586296","24586296")}</li>\n        <li>Bolt (Taxify): S5S8K8</li>\n        <li>Booking.com: ${J("https://www.booking.com/s/18_6/pilip212","pilip212")}</li>\n        <li>Hulaj: zDNRAA</li>\n        <li>Maxim: 9D06F7E7</li>\n        <li>Revolut: ${J("https://revolut.com/r/pilip1ip","pilip1ip")}</li>\n        <li>Uber: ${J("https://www.uber.com/invite/3daguge8ue","3daguge8ue")}</li>\n      </ul>\n    `},PSU:{name:"ПГУ",description:`\n      <p>Полоцкий Государственный Университет.</p>\n      <p>\n        С 2006 по 2011 проучился здесь по специальности &laquo;Программное обеспечение\n        информационных технологий&raquo; на радиотехническом факультете (в последствии\n        переформированном в факультет информационных технологий) в группе 06ИТ-1.\n      </p>\n      <p>\n        За время учёбы было написано много полезных и бесполезных программ и игрушек.\n        ${J("https://bitbucket.org/account/user/phts-home/projects/PSU","Некоторые из них я выложил")} на ${V("BitBucket","Битбакет")}.\n      </p>\n      <p>\n        Также во времена университета у меня был ${J("http://philip-s.narod.ru/","свой сайт")},\n        если можно его так назвать, на котором опубликовывал некоторые программы в разделе\n        &laquo;Проекты&raquo;. Но сейчас этот сайт давно уже заброшен и скачать ничего не получится.\n      </p>\n      <p>\n        Дипломный проект был на тему &laquo;Разработка сервиса для изучения иностранных\n        языков&raquo;. По своей сути на тот момент являлся упрощённым форком сервиса Langaroo\n        &mdash; стартап, над которым я ${V("Curriculum vitae","работал")} вместе с коллегой.\n        Стартап не взлетел.\n      </p>\n      <p>\n        По итогу выпустился дипломированным\n        ${V("Software Engineer","инженером-программистом")}.\n      </p>\n    `},Random:{name:"Вразнобой"},React:{name:"Реакт",description:K(`В данный момент специализируюсь именно ${J("https://reactjs.org/","на этой библиотеке")}.`)},"Ritchie Blackmore":{name:"Ричи Блэкмор",description:K("Лучший гитарист, по моему мнению.")},Ruby:{name:"Руби",description:`\n      <p>Очень классный скриптовый язык.</p>\n      <p>\n        Несмотря на то, что я ${V("JavaScript","фронтендер")}, иногда\n        пишу на нём всякие штуки.\n      </p>\n    `},"SaM Solutions":{name:"Сам Солюшнс",description:`\n      <p>\n        Работал тут во время и после ${V("PSU","универа")}. Точнее, не сразу после универа, т.к\n        пришлось пару месяцев отсидеться на тракторном заводе по распределению из-за несовершенства\n        белорусских законов.\n      </p>\n      <p>\n        Компания оставила только приятные впечатления. Но проекты разной степени качества, может и\n        не повезти. Впрочем, как и в любой аутсорсинговой компании.\n      </p>\n      <p>\n        ${V("Curriculum vitae","После 4 лет работы")} меня захантил ${V("Epam","Епам")},\n        и я переехал в ${V("Kraków","Краков")}.\n      </p>\n    `},"Škoda":{name:"Шкода",description:`\n      <p>А точнее, Škoda Felicia II 1.6 (1999 г. в.).</p>\n      <p>\n        Моя первая машина, купленная в ${V("Kraków","Кракове")} за какие-то 2300 злотых\n        (около $600 по тогдашнему курсу).\n      </p>\n      <p>Очень надежный автомобиль. Прошёл боевое крещение по украинским дорогам в Буковель.</p>\n      <p>${de="https://i.imgur.com/VYfgwDT.jpg",me="Моя Škoda",`\n    <img src="${de}" alt="${me}">\n  `}</p>\n      <p>Хотя от старости уже начинает капризничать.</p>\n    `},Skype:{name:"Скайп",description:K(`Больше не пользуюсь. Перешёл на ${V("Telegram","Телеграм")}.`)},"Software Engineer":{name:"Инженер-программист",description:K(`Моя специальность после окончания ${V("PSU","университета")}.`)},"Space Resonance":{name:"Спасе Резонасе",description:`\n      <p>\n        <i>Холодным зимним вечером четверо встретились на\n        центральной площади ${V("Novopolotsk","Новополоцка")}...</i>\n      </p>\n      <p>\n        Так зародилась величайшая и культовая (в определённых кругах) группа\n        ${J("https://vk.com/club7812592","Space Resonance")}.\n      </p>\n      <p>\n        Является, наверное, самым идеальным попаданием в ${V("Music","мой музыкальный вкус")}.\n        До сих пор переслушиваю самый первый и единственный полноценный альбом, который был выпущен\n        в некоторой спешке, прямо перед распадом группы, и поэтому по качеству он не идеален.\n      </p>\n      <p>\n        Параллельно в это время играл в ${V("Joy in Time","Радости во времени")} и иногда\n        приходилось на одном концерте играть в двух группах.\n      </p>\n    `},"Stack Overflow":{name:"Стак Оверфлоу",description:`\n      <p>\n        Иногда ${J("https://stackoverflow.com/users/2462524/phts","задаю и отвечаю")} на вопросы\n        на ${J("https://stackoverflow.com/","Стак Оверфлоу")}.\n      </p>\n    `},"Sublime Text":{name:"Саблайм Текст",description:`\n      <p>Отличный редактор кода. Пользуюсь им каждый день.</p>\n      <p>\n        Периодически\n        ${J("https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=","пишу плагины")} для него.\n      </p>\n    `},Telegram:{name:"Телеграм",description:K(`Моё имя в Телеграме: ${J("https://t.me/ptsaryk","@ptsaryk")}`)},Title:{},"The Netherlands":{name:"Нидерланды",description:K("Обязательно буду жить там.")},Traveling:{name:"Путешествия",description:`\n      <p>\n        Я люблю путешествовать со своей ${V("Family","семьёй")}. ${V("Škoda","На машине")},\n        на поезде, самолётом, как угодно.\n      </p>\n      <p>Вот, список стран, в которых мы уже побывали:</p>\n      <ul style="list-style-type: none;">\n        <li>&#127463;&#127486; ${V("Belarus","Беларусь")} &mdash; очевидно</li>\n        <li>&#127464;&#127487; Чехия</li>\n        <li>&#127466;&#127480; Испания</li>\n        <li>&#127467;&#127479; Франция</li>\n        <li>&#127468;&#127479; Греция</li>\n        <li>&#127475;&#127473; ${V("The Netherlands","Нидерланды")}</li>\n        <li>&#127477;&#127473; ${V("Poland","Польша")} &mdash; также очевидно :)</li>\n        <li>&#127479;&#127482; Россия</li>\n        <li>&#127481;&#127479; Турция</li>\n        <li>&#127482;&#127462; Украина</li>\n      </ul>\n    `},Ultramarined:{name:"Ультрамаринд",description:`\n      <p>\n        Прошло немало месяцев/лет после того, как ${V("Joy in Time","Радость во времени")}\n        внезапно распалась и смогла эволюционироваться в Ultramarined с новыми идеями и\n        вдохновением.\n      </p>\n      <p>\n        Мы успешно репетировали, сочиняли песни, выступали, и всё складывалось хорошо. До того\n        момента, как я не уехал в ${V("Kraków","Краков")}.\n      </p>\n      ${Y(oe("V5Pazkk","Ultramarined"),"Последнее выступление Ultramarined в 2015 году")}\n      <p>\n        Больше информации о группе доступно на\n        ${J("http://phts.github.io/ultramarined.by/","зеркале официального сайта")}.\n      </p>\n    `,data:{ultrimarine:"Заультрамаринить",unultrimarine:"Разультрамаринить"}},"Video games":{name:"Компьютерные игры",description:`\n      <p>\n        Люблю качественные и интересные компьютерные игры, в большинстве случаев квесты и стратегии.\n      </p>\n      <p>Произведшие на меня огромное впечатление, и производят до сих пор:</p>\n      <ul>\n        <li>${J("https://ru.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness","Warcraft 2")}\n          / ${J("https://ru.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos","3")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/StarCraft_(серия_игр)","Starcraft")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Stronghold","Stronghold")}</li>\n        <li>${V("Heroes of Might and Magic 3")}\n          / ${J("https://ru.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV","4")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Half-Life_(серия_игр)","Half-Life")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Syberia","Syberia")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim","Majesty")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Mafia:_The_City_of_Lost_Heaven","Mafia")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Grand_Theft_Auto_(серия_игр)","GTA")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom","Война и Мир")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Portal","Portal")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Anno_1701","Anno 1701")}\n          / ${J("https://ru.wikipedia.org/wiki/Anno_1404","1404")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/Космические_рейнджеры","Космические рэйнджеры")}</li>\n        <li>${J("https://ru.wikipedia.org/wiki/The_Talos_Principle","The Talos Principle")}</li>\n      </ul>\n      <p>А также некоторые игры на ${V("ZX Spectrum")}.</p>\n    `},Vinyl:{name:"Винил",description:Y(oe("Mkb7mO9","Винил"),"Audio-Technica AT-LP120USBHC + Yamaha A-S501 + акустика, сделанная Анжеем Фигарским.")},VK:{name:"ВК",description:K(`${J("https://vk.com/phil.tsaryk","Моя страница")} в ВК.`)},"ZX Spectrum":{name:"Зэд Икс Спектрум",description:`\n      <p>\n        Мой первый компьютер. Первая строчка кода, написанная на нём,\n        была, скорее всего, <code>LOAD "" &crarr;</code> &mdash; для загрузки игры с кассеты.\n      </p>\n      <p>\n        Любимые игрушки: ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=2323","Highway Encounter")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=461","Battle Ships")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=1686","Exolon")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=5448","Tujad")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=639","Boulder Dash")},\n        ${J("https://spectrumcomputing.co.uk/index.php?cat=96&id=4784","Spy Hunter")} и многие другие.\n      </p>\n    `}};var de,me,he;!function(e){e.EN="EN",e.RU="RU"}(he||(he={}));const ue={EN:ce,RU:pe};var ge;!function(e){e[e.EN=0]="EN",e[e.RU=1]="RU",e[e.Title=2]="Title",e[e["©"]=3]="©",e[e["+375292181503"]=4]="+375292181503",e[e["+48534898187"]=5]="+48534898187",e[e.About=6]="About",e[e.Age=7]="Age",e[e.Ascending=8]="Ascending",e[e["bash.org"]=9]="bash.org",e[e.Belarus=10]="Belarus",e[e.Billiard=11]="Billiard",e[e.BitBucket=12]="BitBucket",e[e["Board games"]=13]="Board games",e[e.Categorize=14]="Categorize",e[e.Cats=15]="Cats",e[e.Colors=16]="Colors",e[e.Contacts=17]="Contacts",e[e["Curriculum vitae"]=18]="Curriculum vitae",e[e.Debian=19]="Debian",e[e.Drums=20]="Drums",e[e.Electronics=21]="Electronics",e[e.Email=22]="Email",e[e.Epam=23]="Epam",e[e.Facebook=24]="Facebook",e[e.Family=25]="Family",e[e.Feedback=26]="Feedback",e[e.Firefox=27]="Firefox",e[e.foobar2000=28]="foobar2000",e[e.GitHub=29]="GitHub",e[e["Grand Parade"]=30]="Grand Parade",e[e.Habr=31]="Habr",e[e["Heroes of Might and Magic 3"]=32]="Heroes of Might and Magic 3",e[e.Hobby=33]="Hobby",e[e.JavaScript=34]="JavaScript",e[e["Joy in Time"]=35]="Joy in Time",e[e["Kraków"]=36]="Kraków",e[e["Last.fm"]=37]="Last.fm",e[e.LinkedIn=38]="LinkedIn",e[e.Meta=39]="Meta",e[e.Music=40]="Music",e[e.Novopolotsk=41]="Novopolotsk",e[e["Phil Tsaryk"]=42]="Phil Tsaryk",e[e["Pilip Tsaryk"]=43]="Pilip Tsaryk",e[e["Playing cards"]=44]="Playing cards",e[e.Poland=45]="Poland",e[e["Promo codes"]=46]="Promo codes",e[e.PSU=47]="PSU",e[e.Random=48]="Random",e[e.React=49]="React",e[e["Ritchie Blackmore"]=50]="Ritchie Blackmore",e[e.Ruby=51]="Ruby",e[e["SaM Solutions"]=52]="SaM Solutions",e[e["Škoda"]=53]="Škoda",e[e.Skype=54]="Skype",e[e["Software Engineer"]=55]="Software Engineer",e[e["Space Resonance"]=56]="Space Resonance",e[e["Stack Overflow"]=57]="Stack Overflow",e[e["Sublime Text"]=58]="Sublime Text",e[e.Telegram=59]="Telegram",e[e["The Netherlands"]=60]="The Netherlands",e[e.Traveling=61]="Traveling",e[e.Ultramarined=62]="Ultramarined",e[e["Video games"]=63]="Video games",e[e.Vinyl=64]="Vinyl",e[e.VK=65]="VK",e[e.Work=66]="Work",e[e["ZX Spectrum"]=67]="ZX Spectrum"}(ge||(ge={}));var ye=i("HlG8"),we=i.n(ye),fe=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class be{constructor(e=he.EN){this.lang=e}setLang(e){this.lang=e}}fe([$.m],be.prototype,"lang",void 0),fe([$.d],be.prototype,"setLang",null);var ke=new be(/^ru(-.*)?$/.test(we()())?he.RU:he.EN),$e=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const xe=(Ee=ge,P.a(T.a(e=>"number"==typeof e),O.a)(Ee));var Ee;const ve=B.a(e=>e,xe),Se=he.RU,Pe=ue[Se];function Oe(e){return Object.assign({},A,N,{id:e,name:e})}function Te(e,t){return P.a(H.a(Oe),H.a(function(e,t){return(i,n)=>Object.assign({},i,D[n]||{},U[n]||{},I.a(["description"],t[n]),I.a(["name","description","data","tooltip"],e[n]))}(t,Pe)))(e)}class je{constructor(e){this.languageStore=e,this.cache={}}get items(){const e=this.cache[this.lang];if(e)return e;const t=Te(ve,this.currentTranslatedStrings);return this.cache[this.lang]=t,t}get lang(){return this.languageStore.lang}get currentTranslatedStrings(){return ue[this.lang]}}$e([$.f],je.prototype,"items",null),$e([$.f],je.prototype,"lang",null),$e([$.f],je.prototype,"currentTranslatedStrings",null);var Me,Ce=new je(ke),_e=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};!function(e){e.Asc="Asc",e.Categories="Categories",e.Random="Random"}(Me||(Me={}));const Re={Asc:x.a(E.a(v.a,S.a("name"))),Categories:x.a(S.a("id")),Random:R.a},Ae=["About","Contacts","Work","Hobby","Meta"];class De{constructor(e){this.items=e,this.mode=Me.Asc,this.list=[],Object($.e)(()=>{this.refresh()})}setMode(e){e===Me.Random&&this.mode===e&&(this.mode=null),this.mode=e}refresh(){this.mode===Me.Categories?this.refreshCategorizedList():this.refreshList()}refreshList(){this.list=P.a(O.a,T.a(j.a("type",f.Category)),e=>[b.Head,b.Middle,b.Tail].map(t=>M.a(j.a("position",t),e)),e=>[...e[0],...Re[this.mode](e[1]),...e[2]])(this.items.items)}refreshCategorizedList(){this.list=P.a(O.a,T.a(j.a("type",f.Category)),Re[Me.Asc],e=>Ae.map(t=>C.a([this.items.items[t]],M.a(j.a("category",t),e))),_.a)(this.items.items)}}_e([$.m],De.prototype,"mode",void 0),_e([$.m],De.prototype,"list",void 0),_e([$.d],De.prototype,"setMode",null);var Be=new De(Ce),Ie=ee.d.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({flexible:e})=>e?"space-around":"flex-start"};
  margin: 0;
  min-width: 100%;
  padding: 0.5rem 0;
`;var He;!function(e){e.Action="Action",e.Default="Default",e.Simple="Simple"}(He||(He={}));const Le={Action:"2px dotted",Default:"1px dashed",Simple:"0 none"};function ze(e){return Le[e]}const Fe={M:"1rem",L:"1.5rem",XL:"2rem",XXL:"2.5rem"},Ne={Category:He.Simple,Item:He.Default,Meta:He.Action};var Ge=e=>({flexible:t,item:i,onNavigate:n,width:r})=>a.a.createElement(e,{buttonType:Ne[i.type],data:i.data,description:i.description,flexBasis:r,flexible:t,fontSize:Fe[i.size],itemId:i.id,onNavigate:n,text:i.name,tooltip:i.tooltip}),Ue=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var We=Object(ee.d)(e=>{var{border:t,fontSize:i}=e,n=Ue(e,["border","fontSize"]);return a.a.createElement("button",Object.assign({},n))})`
  background: none;
  border: 0 none;
  border-bottom: ${({border:e})=>e};
  color: inherit;
  cursor: pointer;
  font-size: ${({fontSize:e})=>e};
  margin: 0;
  padding: 0 2px;
`,Ke=i("GEYi"),Je=e=>a.a.createElement(Ve,Object.assign({},e),"*");const Ve=ee.d.span`
  color: #aa0000;
  cursor: help;
  font-size: 1.3rem;
  opacity: 0.5;
`;var Xe=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var qe,Ye=(qe=e=>{var{buttonType:t,fontSize:i}=e,n=Xe(e,["buttonType","fontSize"]);return a.a.createElement(We,Object.assign({},n,{border:ze(t),fontSize:i}))},e=>e.title?a.a.createElement("span",null,a.a.createElement(qe,Object.assign({},Object(Ke.a)(["title"])(e))),a.a.createElement(Je,{title:e.title})):a.a.createElement(qe,Object.assign({},e))),Ze=ee.d.li.attrs(e=>({style:{flexBasis:`${e.flexBasis}vw`}}))`
  align-items: center;
  display: flex;
  flex-grow: ${({flexible:e})=>e?1:0};
  justify-content: center;
  margin: 0 1rem;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`;var Qe=Ge(Object(d.c)(({flexBasis:e,flexible:t,buttonType:i,fontSize:n,data:r})=>{const{ageStore:o}=w();return a.a.createElement(Ze,{flexBasis:e,flexible:t},a.a.createElement(Ye,{buttonType:i,fontSize:n},function(e,t){const{years:i,months:n,days:a,hours:r,minutes:o,seconds:l}=e.age;return`${i} ${t.years}       ${n} ${t.months}       ${a} ${t.days}       ${r} ${t.hours}       ${L(o)} ${t.min}       ${L(l)} ${t.sec}`}(o,r)))}));const et=ee.d.li`
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
`;var tt=Ge(({text:e})=>a.a.createElement(et,null,"# ",e));var it=E.a(Ge)(e=>{const{uiStore:t}=w(),i=Object(n.useCallback)(()=>{t.backgroundColor=ae(),t.color=ae()},[]);return a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(Ye,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:i},e.text))}),nt=i("MHCJ");nt.init("user_C3T41f8F0pv1ekwT39nYw");var at=new class{send(e){const t={appLang:ke.lang,innerHeight:innerHeight,innerWidth:innerWidth,locale:we()(),localTime:(new Date).toString(),referrer:document.referrer,screenHeight:screen.height,screenWidth:screen.width,text:e,userAgent:navigator.userAgent};return nt.send("feedback_tsaryk_com","tsaryk_com",t)}},rt=ee.d.form`
  background: ${e=>e.disabled?"rgba(102, 102, 102, 0.25)":"transparent"};
  border: ${ze(He.Action)};
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
`;const ct=["\\","|","/","-"],pt=ct.length;var dt,mt=()=>{const[e,t]=Object(n.useState)(0);return Object(n.useEffect)(()=>{const e=window.setInterval(()=>{t(e=>(e+1)%pt)},100);return()=>clearInterval(e)},[]),a.a.createElement("span",null,ct[e])},ht=e=>ee.d.span`
  ${re}
  color: ${e.color};
  &::after {
    content: '\\${e.cssSymbol}';
  }
`,ut=ht({color:"green",cssSymbol:"2714"}),gt=ht({color:"red",cssSymbol:"2718"});!function(e){e[e.Processing=0]="Processing",e[e.Success=1]="Success",e[e.Failed=2]="Failed"}(dt||(dt={}));const yt=ee.d.span`
  font-family: monospace;
`;var wt=({state:e})=>a.a.createElement(yt,null,e===dt.Processing?a.a.createElement(mt,null):"",e===dt.Success?a.a.createElement(ut,null):"",e===dt.Failed?a.a.createElement(gt,null):""),ft=()=>a.a.createElement("span",null,"↵"),bt=()=>a.a.createElement(kt,{type:"submit"},a.a.createElement(ft,null));const kt=ee.d.button`
  background: none;
  border: 0 none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: 18px;
  margin: 0;
  padding: 0;
`;var $t=({placeholder:e,onFinished:t})=>{const i=Object(n.useRef)(null);let r;const[o,l]=Object(n.useState)(null),s=Object(n.useCallback)(e=>{27===e.keyCode&&(e.preventDefault(),t())},[t]),c=Object(n.useCallback)(e=>{l(e),r=window.setTimeout(()=>{l(null),t()},3e3)},[t]),p=Object(n.useCallback)(e=>{e.preventDefault();const t=e.target.text.value;t&&(l(dt.Processing),at.send(t).then(()=>{c(dt.Success)}).catch(()=>{c(dt.Failed)}))},[]);Object(n.useEffect)(()=>(i.current.value="",i.current.focus(),()=>clearTimeout(r)),[]);const d=null!==o;return a.a.createElement(rt,{onSubmit:p,disabled:d,noValidate:!0},a.a.createElement(st,{autoComplete:"off",disabled:d,inputRef:i,name:"text",onKeyDown:s,placeholder:e}),d?a.a.createElement(wt,{state:o}):a.a.createElement(bt,null))};var xt=Ge(e=>{const[t,i]=Object(n.useState)(!1),r=Object(n.useCallback)(()=>{i(!0)},[]),o=Object(n.useCallback)(()=>{i(!1)},[]);return a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},t?a.a.createElement($t,{onFinished:o,placeholder:e.data.sayHello}):a.a.createElement(Ye,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:r},e.text))});function Et(e){return Ge(t=>{const{langStore:i}=w(),r=Object(n.useCallback)(()=>{i.setLang(e)},[]);return a.a.createElement(Ze,{flexBasis:t.flexBasis,flexible:t.flexible},a.a.createElement(Ye,{buttonType:t.buttonType,fontSize:t.fontSize,onClick:r,title:t.tooltip},t.text))})}function vt(e){return Ge(t=>{const{listStore:i,widthsStore:r}=w(),o=Object(n.useCallback)(()=>{e!==i.mode&&r.randomize(i.list),i.setMode(e)},[]);return a.a.createElement(Ze,{flexBasis:t.flexBasis,flexible:t.flexible},a.a.createElement(Ye,{buttonType:t.buttonType,fontSize:t.fontSize,onClick:o},t.text))})}var St=ee.d.span`
  font-size: ${({fontSize:e})=>e};
`,Pt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};var Ot=Object(ee.d)(e=>{var{buttonType:t,fontSize:i}=e,n=Pt(e,["buttonType","fontSize"]);return a.a.createElement(m.b,Object.assign({},n))})`
  border-bottom: ${e=>ze(e.buttonType)};
  color: inherit;
  font-size: ${e=>e.fontSize};
  text-decoration: none;
`;var Tt=Ge(e=>e.description||e.data?a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(Ot,{buttonType:e.buttonType,fontSize:e.fontSize,onClick:e.onNavigate,to:e.itemId},e.text)):a.a.createElement(Ze,{flexBasis:e.flexBasis,flexible:e.flexible},a.a.createElement(St,{fontSize:e.fontSize},e.text)));const jt=ee.d.a`
  color: inherit;
`;var Mt=Ge(({flexBasis:e,flexible:t})=>a.a.createElement(Ze,{flexBasis:e,flexible:t},a.a.createElement(jt,{href:"http://tsaryk.com/"},"tsaryk.com")));const Ct={About:tt,Contacts:tt,Hobby:tt,Meta:tt,Work:tt,Age:Qe,Ascending:vt(Me.Asc),Categorize:vt(Me.Categories),Colors:it,EN:Et(he.EN),Feedback:xt,Random:vt(Me.Random),Title:Mt,RU:Et(he.RU)};var _t=Object(d.c)(()=>{const{listStore:e,widthsStore:t}=w(),i=Object(n.useCallback)(()=>{localStorage.setItem("scrollTop",document.documentElement.scrollTop.toString())},[]);Object(n.useEffect)(()=>{document.documentElement.scrollTop=parseInt(localStorage.getItem("scrollTop")||"0",10)},[]);const r=e.mode!==Me.Categories,o=y.a(e=>{const n=r?t.getWidth(e.id):0,o=Ct[e.id]||Tt;return a.a.createElement(o,{flexible:r,item:e,key:e.id,onNavigate:i,width:n})})(e.list);return a.a.createElement(Ie,{flexible:r},o)});var Rt=e=>a.a.createElement(We,Object.assign({},e,{border:ze(He.Action),fontSize:"1rem"})),At=e=>a.a.createElement("header",Object.assign({},e)),Dt=e=>a.a.createElement("footer",Object.assign({},e)),Bt=ee.d.div`
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
`;var Ht=({className:e,html:t})=>a.a.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:t}});var Lt=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=w();return a.a.createElement(Bt,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Ht,{className:e,html:t.description}),a.a.createElement(Dt,null,a.a.createElement(Rt,{onClick:i},n.labels.close)))},zt=i("mev3"),Ft=({children:e,className:t})=>a.a.createElement("div",{className:t},e);function Nt(e,t){return 1.2+.5*(e-t)}var Gt=ee.d.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  ${e=>function(e){const t=[];for(let i=1;i<=e;i++)t.push(`\n      li:nth-child(${i}) {\n        font-size: ${Nt(e,i)}rem;\n        margin: 0.4em 0;\n      }\n    `);return t}(a.a.Children.toArray(e.children).length)}
`,Ut=({items:e})=>a.a.createElement(Gt,null,e.map(e=>a.a.createElement("li",{key:e.icon},a.a.createElement(Wt,{dangerouslySetInnerHTML:{__html:e.icon},title:e.tooltip}),e.text)));const Wt=ee.d.span`
  cursor: ${e=>e.title?"help":"default"};
  display: inline-block;
  margin-right: 0.5rem;
  text-align: right;
  width: 4rem;
`,Kt=Object(ee.d)(Dt)`
  padding-left: 4.5rem;
`;var Jt=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=w(),r=Object(zt.a)({icon:"&#x1F408;",text:t.name})(t.data);return a.a.createElement(Bt,null,a.a.createElement(Ft,{className:e},a.a.createElement(Ut,{items:r})),a.a.createElement(Kt,null,a.a.createElement(Rt,{onClick:i},n.labels.close)))},Vt=i.p+"static/img/h3-default.2ca8.png",Xt=i.p+"static/img/h3-pointer.7d2e.png";const qt=Object(ee.d)(Bt)`
  cursor: url(${Vt}) 16 16, default;

  button {
    cursor: url(${Xt}) 16 16, pointer;
  }
`;var Yt=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=w();return a.a.createElement(qt,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Ht,{className:e,html:t.description}),a.a.createElement(Dt,null,a.a.createElement(Rt,{onClick:i},n.labels.close)))};var Zt={backgroundColor:"#572fce",color:"white"},Qt=ee.d.div`
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
`;var li=e=>{const{i18nStore:t}=w(),[i,r]=Object(n.useState)(!1),o=Object(n.useCallback)(()=>{r(!i),window.scrollTo(0,0)},[i]),l=e.item.data,s=i?a.a.createElement(ti,null,a.a.createElement(ri,null)):a.a.createElement(It,null,e.item.name),c=i?a.a.createElement(Ft,{className:e.className},a.a.createElement(oi,null,a.a.createElement(ni,{imageId:"XlCoMYy",alt:"Jenya"}),a.a.createElement(ni,{imageId:"82GwSq9",alt:"Dasha"}),a.a.createElement(ni,{imageId:"uAs0gjm",alt:"Galya"}),a.a.createElement(ni,{imageId:"i2VIacr",alt:"Phil"}))):a.a.createElement(Ht,{className:e.className,html:e.item.description}),p=i?l.unultrimarine:l.ultrimarine,d=a.a.createElement(ei,null,a.a.createElement(At,null,s),c,a.a.createElement(Dt,null,a.a.createElement(Qt,null,a.a.createElement(Rt,{onClick:e.onClose},t.labels.close),a.a.createElement(Rt,{onClick:o},p))));return i?a.a.createElement(ee.a,{theme:Zt},d):d},si=i("Y2mD"),ci=i.n(si),pi=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const di=ee.d.div`
  @media (max-width: 720px) {
    background-image: url(${ci.a.images[0].path}?5f4a);
    background-position-x: ${e=>-.5*e.x}px;
    background-position-y: ${e=>-.5*e.y}px;
    height: ${e=>.5*e.height}px;
    width: ${e=>.5*e.width}px;
  }
  @media (min-width: 720px) {
    background-image: url(${ci.a.images[1].path}?5f4a);
    background-position-x: ${e=>-.6*e.x}px;
    background-position-y: ${e=>-.6*e.y}px;
    height: ${e=>.6*e.height}px;
    width: ${e=>.6*e.width}px;
  }
  border-radius: 0.5em;
`,mi=Object(ee.d)(di).attrs(()=>({as:"a",target:"_blank"}))`
  opacity: 1;
  transition: opacity 0.2s;

  &:focus,
  &:hover {
    opacity: 0.5;
  }
`;var hi=e=>{var{href:t}=e,i=pi(e,["href"]);return t?a.a.createElement(mi,Object.assign({href:t},i)):a.a.createElement(di,Object.assign({},i))};const ui=ee.d.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  justify-content: center;
`;var gi=({className:e,item:t,onClose:i})=>{const{i18nStore:n}=w();return a.a.createElement(Bt,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Ft,{className:e},a.a.createElement("p",null,t.data.p2),a.a.createElement("p",null,t.data.p1),a.a.createElement("figure",null,a.a.createElement(ui,null,a.a.createElement(hi,{href:"https://playingarts.com/ru/special?utm_source=tema&utm_medium=banner&utm_campaign=300x300",title:"Playing Arts: Special Edition",x:18,y:0,width:174,height:240}),a.a.createElement(hi,{title:"Царик Филипп №2",x:192,y:0,width:160,height:240}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/",title:"Оперные (репринт)",x:362,y:0,width:160,height:240}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/french-suit/classic-470/",title:"Karty do gry №490",x:529,y:0,width:158,height:243}),a.a.createElement(hi,{title:"Greek cats",x:686,y:0,width:169,height:242}),a.a.createElement(hi,{title:"Nude playing cards",x:855,y:0,width:172,height:242}),a.a.createElement(hi,{title:"Lattjo",x:1026,y:0,width:160,height:242}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-667.html",title:"Белый палех",x:1187,y:0,width:160,height:245}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-154.html",title:"Госпожа удача",x:1346,y:0,width:160,height:245}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-701.html",title:"Невские",x:1514,y:0,width:160,height:250}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-133.html",title:"Атласные",x:1674,y:0,width:160,height:248}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-152.html",title:"Командирские",x:1833,y:0,width:160,height:251}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/russian-motifs/derzhava/",title:"Derzhava",x:18,y:240,width:170,height:240}),a.a.createElement(hi,{title:"Playing Cards Dollar",x:189,y:239,width:155,height:238}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-637.html",title:"Jacob's Bible Cards",x:346,y:242,width:170,height:238}),a.a.createElement(hi,{href:"https://symbal.by/t/1286-karty-bnr/",title:"100 гадоў БНР",x:522,y:244,width:172,height:241}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/otherm/abraxas/",title:"Abraxas",x:696,y:242,width:157,height:243}),a.a.createElement(hi,{href:"https://www.behance.net/gallery/16822663/Hidden-part",title:"Hidden Part",x:856,y:242,width:147,height:238}),a.a.createElement(hi,{href:"https://www.artiphany.com/products/kitten-club",title:"Kitten Club Playing Cards",x:1008,y:244,width:170,height:241}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/international-style/royal-dollar/",title:"Playing cards",x:1176,y:248,width:157,height:237}),a.a.createElement(hi,{href:"https://www.artiphany.com/products/mermaid-playing-cards",title:"Mermaid Queen Playing Cards",x:1335,y:245,width:170,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-151.html",title:"Державные",x:1513,y:250,width:157,height:245}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-693.html",title:"Времена года",x:1673,y:250,width:155,height:245}),a.a.createElement(hi,{href:"http://www.a.trionfi.eu/WWPCM/decks06/d04208/d04208.htm",title:"Skat",x:1833,y:253,width:155,height:242}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/classic/salon-karte-66/",title:"Salon-Karte №66",x:18,y:480,width:159,height:235}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/computer-games/pixel-art/",title:"Pixel Art",x:180,y:480,width:170,height:240}),a.a.createElement(hi,{title:"Царик Филипп №3",x:355,y:477,width:165,height:246}),a.a.createElement(hi,{href:"http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm",title:"Ennia",x:525,y:486,width:153,height:234}),a.a.createElement(hi,{title:"Portugal",x:679,y:486,width:168,height:237}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-1341.html",title:"Rosina Watchmeister",x:847,y:481,width:157,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-1119.html",title:"Весела політика",x:1008,y:485,width:170,height:240}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/",title:"Greek mythology",x:1184,y:484,width:167,height:244}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/russian-motifs/atlasnye2/",title:"Атласные",x:1356,y:485,width:155,height:245}),a.a.createElement(hi,{href:"http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm",title:"Turkey",x:1515,y:495,width:155,height:240}),a.a.createElement(hi,{href:"https://www.russcards.com/lapin-cards",title:"Карты Лапиных",x:1674,y:495,width:152,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-445.html",title:"Исторические",x:1831,y:497,width:160,height:248}),a.a.createElement(hi,{href:"http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm",title:"Петергоф",x:0,y:718,width:160,height:248}),a.a.createElement(hi,{href:"https://unitedcardists.com/viewtopic.php?f=8&t=5424",title:"Pixel Cards",x:162,y:722,width:170,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-272.html",title:"Московский сувенир",x:337,y:724,width:147,height:231}),a.a.createElement(hi,{title:"Spider-Man",x:484,y:725,width:156,height:235}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/french-suit/vsya-vlast/",title:"Вся власть",x:641,y:726,width:157,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-282.html",title:"Партия",x:798,y:731,width:153,height:235}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-153.html",title:"Княжеские",x:955,y:726,width:159,height:248}),a.a.createElement(hi,{href:"https://www.artlebedev.ru/space-invaders/",title:"Космические захватчики",x:1116,y:729,width:155,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-694.html",title:"Рококо",x:1674,y:738,width:127,height:191}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-137.html",title:"Лубочные",x:0,y:973,width:141,height:222}),a.a.createElement(hi,{title:"Xuebao No. 2000",x:141,y:963,width:155,height:238}),a.a.createElement(hi,{title:"Wanshengda 9706",x:295,y:962,width:156,height:238}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-148.html",title:"Времена года",x:455,y:962,width:154,height:234}),a.a.createElement(hi,{title:"Mad night powered by Tabasco sauce",x:611,y:969,width:159,height:239}),a.a.createElement(hi,{href:"https://www.russcards.com/modern-style",title:"Новый стиль",x:770,y:969,width:160,height:241}),a.a.createElement(hi,{title:"Playing cards",x:930,y:972,width:173,height:237}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-692.html",title:"Палех",x:1106,y:970,width:160,height:245}),a.a.createElement(hi,{title:"Pokemon",x:1269,y:1044,width:98,height:150}),a.a.createElement(hi,{title:"Русский стиль",x:1674,y:935,width:138,height:222}),a.a.createElement(hi,{title:"Karty do PLAYowania",x:1,y:1205,width:156,height:242}),a.a.createElement(hi,{title:"Glow-in-the-dark playing cards",x:157,y:1205,width:170,height:242}),a.a.createElement(hi,{title:"Playing cards",x:327,y:1207,width:153,height:239}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-155.html",title:"Диана",x:480,y:1208,width:160,height:247}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/international-style/international/",title:"International",x:638,y:1212,width:160,height:246}),a.a.createElement(hi,{href:"https://www.artlebedev.ru/mafia/",title:"Mafia",x:796,y:1212,width:156,height:246}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-690.html",title:"Славянские",x:952,y:1213,width:160,height:240}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/",title:"Русский стиль",x:1112,y:1217,width:158,height:240}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-700.html",title:"Майа",x:3,y:1454,width:161,height:250}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-737.html",title:"Рейнские",x:165,y:1446,width:177,height:256}),a.a.createElement(hi,{title:"Dubai",x:342,y:1462,width:158,height:241}),a.a.createElement(hi,{title:"Карти за игра: 55 чудесни изгледа от България",x:501,y:1461,width:159,height:243}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-732.html",title:"Karty do gry № 410",x:660,y:1464,width:161,height:239}),a.a.createElement(hi,{href:"https://wearmedicine.com/p/medicine-karty-do-gry-11788",title:"Kartу do gry Medicine",x:820,y:1459,width:159,height:245}),a.a.createElement(hi,{title:"Playing cards 777",x:979,y:1468,width:157,height:239}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/otherm/brosmino-deck/",title:"Bicycle: Brosmind",x:1138,y:1466,width:172,height:244}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/personality/jagellonskie/",title:"Jagiellońskie",x:1310,y:1470,width:160,height:240}),a.a.createElement(hi,{href:"https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards",title:"Ephemerid",x:1470,y:1465,width:175,height:245}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/",title:"Низшие духи восточнославянской мифологии",x:0,y:1705,width:159,height:250}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/advertising/science-fiction-1659/",title:"Sience-Fiction",x:160,y:1708,width:173,height:242}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/classic/black-russian-1670/",title:"Black Russian",x:333,y:1708,width:173,height:244}),a.a.createElement(hi,{title:"Thingvellir",x:506,y:1707,width:154,height:242}),a.a.createElement(hi,{href:"https://wearmedicine.com/p/medicine-karty-do-gry-16905",title:"Kartу do gry Medicine",x:661,y:1708,width:160,height:242}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/french-suit/luxury/",title:"Luxury",x:820,y:1704,width:168,height:253}),a.a.createElement(hi,{title:"Muzeum Powstania Warszawskiego",x:990,y:1713,width:155,height:241}),a.a.createElement(hi,{href:"http://dama-pik.com.ua/cards/classic/el-al-airlines/",title:"EL AL Air Lines",x:1146,y:1713,width:162,height:241}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/drawings/romikartya-3/",title:"Romikartya 3",x:1307,y:1712,width:157,height:243}),a.a.createElement(hi,{title:"Zamki w Polsce",x:1465,y:1714,width:155,height:239}),a.a.createElement(hi,{href:"http://www.dama-pik.com.ua/cards/humor/gra-wstepna/",title:"Gra wstępna",x:1270,y:1197,width:187,height:269}),a.a.createElement(hi,{title:"Playing cards",x:1270,y:734,width:246,height:284}),a.a.createElement(hi,{title:"Царик Филипп №1",x:1454,y:1184,width:200,height:280}),a.a.createElement(hi,{href:"http://www.ukrcards.com.ua/product-1503.html",title:"Schafkopf Tarock",x:1523,y:739,width:150,height:274}),a.a.createElement(hi,{href:"http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html",title:"Универсальное таро",x:1815,y:747,width:184,height:331}),a.a.createElement(hi,{title:"Playing cards",x:1655,y:1185,width:344,height:522})),a.a.createElement("figcaption",null,t.data.imgTitle))),a.a.createElement(Dt,null,a.a.createElement(Rt,{onClick:i},n.labels.close)))};const yi=ee.d.div`
  background-color: ${e=>e.theme.backgroundColor};
  min-height: calc(100% - 10rem);
  width: calc(100% - 10rem);
  z-index: 1;

  ${ie.max.smartphone`
    min-height: calc(100% - 5rem);
    width: calc(100% - 5rem);
  `}
`,wi=ee.d.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  position: relative;
`,fi=ee.c`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
`,bi=ee.c`
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
`,ki=ee.d.div`
  ${fi}

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
`,$i=ee.d.div`
  ${fi}

  animation: starting 5s step-end 4s forwards;
  background-color: cyan;

  &::after {
    ${bi}

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
`,xi=ee.d.div`
  ${fi}

  animation: loading 10s step-end 9s infinite;
  background-color: yellow;

  &::before {
    ${bi}

    animation: sample1 .25s step-start infinite;
    background-image: linear-gradient(to bottom, blue 0%, blue 24%, rgba(0, 0, 0, 0) 25%);

    ${ie.min.desktop`
      animation: sample1-desktop .25s step-start infinite;
    `}
  }

  &::after {
    ${bi}

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
`;var Ei=({children:e})=>a.a.createElement(wi,null,a.a.createElement(ki,null),a.a.createElement($i,null),a.a.createElement(xi,null),a.a.createElement(yi,null,e));var vi=()=>{Object(n.useEffect)(()=>{window.scrollTo(0,0)},[])};const Si={Cats:Jt,"Heroes of Might and Magic 3":Yt,"Playing cards":gi,Ultramarined:li,"ZX Spectrum":({className:e,item:t,onClose:i})=>{const{i18nStore:n}=w();return a.a.createElement(Ei,null,a.a.createElement(At,null,a.a.createElement(It,null,t.name)),a.a.createElement(Ht,{className:e,html:t.description}),a.a.createElement(Dt,null,a.a.createElement(Rt,{onClick:i},n.labels.close)))}};var Pi=Object(h.g)(Object(ee.d)(({match:e,className:t,history:i})=>{const{itemsStore:r}=w(),o=Object(n.useCallback)(()=>{!function(e){e.push(u)}(i)},[]);vi();const l=r.items[e.params.id];if(!l)return a.a.createElement(h.a,{to:u});const s=Si[l.id]||Lt;return a.a.createElement(s,{item:l,onClose:o,className:t})})`
  a {
    color: inherit;
  }

  a[href^="callto"],
  a[href^="mailto"],
  a[href^="tel"] {
    white-space: nowrap;
  }

  a[href^="#/"] {
    border-bottom: ${ze(He.Default)};
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
`),Oi=({backgroundColor:e,color:t})=>({backgroundColor:e,color:t}),Ti=ee.d.div`
  display: flex;
  flex-direction: column;
`,ji=ee.d.div`
  background-color: ${e=>e.theme.backgroundColor};
  box-sizing: border-box;
  color: ${e=>e.theme.color};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`;var Mi=Object(d.c)(({children:e})=>{const{uiStore:t}=w();return a.a.createElement(ee.a,{theme:Oi(t)},a.a.createElement(Ti,null,a.a.createElement(ji,null,e)))}),Ci=()=>a.a.createElement(m.a,null,a.a.createElement(h.d,null,a.a.createElement(Mi,null,a.a.createElement(h.b,{exact:!0,path:u,component:_t}),a.a.createElement(h.b,{path:g,component:Pi})))),_i=i("rx0e"),Ri=i("wiYN"),Ai=i("IIJ7"),Di=i("JS2A"),Bi=i("pCOR"),Ii=i("KsMw"),Hi=i("MiQI"),Li=i("fumj"),zi=i("OYLJ"),Fi=i("W5hp"),Ni=i("qDRa");var Gi=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ui={days:_i.a,hours:Ri.a,minutes:Ai.a,months:Di.a,seconds:e=>e,years:Bi.a},Wi={days:Ii.a,hours:Hi.a,minutes:Li.a,months:zi.a,seconds:Fi.a,years:Ni.a},Ki={seconds:()=>60,minutes:()=>60,hours:()=>24,days:()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),0).getMonth();return i=e.getFullYear(),new Date(i,t+1,0).getDate();var i},months:()=>12,years:()=>999};class Ji{constructor(e){this.initialTime=e||new Date;const[t]=this.reduceDate(le,["years","months","days","hours","minutes","seconds"]);this.age=t,setInterval(()=>{this.inc()},1e3)}reduceDate(e,t){const i={},n=t.reduce((e,t)=>{const n=Wi[t](this.initialTime,e);return i[t]=n,Ui[t](e,n)},e);return[i,n]}inc(){const{minutes:e,hours:t,days:i,months:n,years:a}=this.age;this.age=this.conformAge({seconds:this.age.seconds+1,minutes:e,hours:t,days:i,months:n,years:a})}conformAge(e){const t=["seconds","minutes","hours","days","months","years"];return t.forEach((i,n)=>!(e[i]<Ki[i]())&&(e[i]=0,e[t[n+1]]++,!0)),e}}Gi([$.m],Ji.prototype,"age",void 0);var Vi,Xi=new Ji,qi=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};!function(e){e[e.close=0]="close"}(Vi||(Vi={}));const Yi={EN:{close:"Сlose"},RU:{close:"Закрыть"}};class Zi{constructor(e){this.lang=e}get labels(){return Yi[this.lang.lang]}}qi([$.f],Zi.prototype,"labels",null);var Qi=new Zi(ke),en=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class tn{constructor(){this.backgroundColor="white",this.color="black"}}en([$.m],tn.prototype,"backgroundColor",void 0),en([$.m],tn.prototype,"color",void 0);var nn=new tn,an=function(e,t,i,n){var a,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};class rn{constructor(){this.widths={}}randomize(e){this.widths=P.a(B.a(S.a("id")),H.a(()=>Object(Q.a)(5,30)))(e)}getWidth(e){return this.widths[e]}}an([$.m],rn.prototype,"widths",void 0),an([$.d],rn.prototype,"randomize",null);var on=new rn,ln={ageStore:Xi,itemsStore:Ce,i18nStore:Qi,langStore:ke,listStore:Be,uiStore:nn,widthsStore:on},sn=ee.b`
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
`;ln.widthsStore.randomize(ln.listStore.list);Object(r.render)(a.a.createElement(()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,null),a.a.createElement(d.b,Object.assign({},ln),a.a.createElement(Ci,null))),null),document.getElementById("app"))},Y2mD:function(e,t,i){e.exports={srcSet:i.p+"static/img/playing-cards-1000.png 1000w,"+i.p+"static/img/playing-cards-1200.png 1200w",images:[{path:i.p+"static/img/playing-cards-1000.png",width:1e3,height:980},{path:i.p+"static/img/playing-cards-1200.png",width:1200,height:1176}],src:i.p+"static/img/playing-cards-1000.png",toString:function(){return i.p+"static/img/playing-cards-1000.png"},placeholder:void 0,width:1e3,height:980}}}]);
//# sourceMappingURL=default~app.6987.js.map