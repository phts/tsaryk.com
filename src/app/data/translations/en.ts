import {a, mailto, link, p, tel, youtube, figure, phts} from 'helpers/html'
import {picture} from 'helpers/imgur'
import {EMAIL, LASTFM_URL, LINKEDIN_URL} from 'config'
import {TranslatedStrings} from './index'

export const en: TranslatedStrings = {
  EN: {
    tooltip: 'Not fully translated yet. Sorry.',
  },
  RU: {},
  '©': {
    name: '© Phil Tsaryk, 2020',
    description: `
      <p>This site was created and being supported by ${link('Phil Tsaryk', 'me')} in free time.</p>
      <p>Main technologies:</p>
      <ul>
        <li>MobX</li>
        <li>React</li>
        <li>TypeScript</li>
      </ul>
      <p>The source code is ${a('https://github.com/phts/tsaryk.com', 'on Github')}.</p>
    `,
  },
  About: {},
  Contacts: {},
  Hobby: {},
  Meta: {},
  Work: {},
  '+375292181503': {
    description: p(`My Byelorussian phone number: ${tel('+375292181503', '+375 29 218-15-03')}.`),
  },
  '+48534898187': {
    description: p(`My Polish phone number: ${tel('+48534898187', '+48 534 898 187')}.`),
  },
  Age: {
    data: {
      days: 'days',
      hours: 'hours',
      min: 'min',
      months: 'months',
      sec: 'sec',
      years: 'years',
    },
  },
  Ascending: {},
  'bash.org': {},
  Belarus: {
    description: p('My native country is Belarus.'),
  },
  Billiard: {
    description: p('Playing &#x1F3B1; in most cases.'),
  },
  BitBucket: {
    description: `
      <p>
        Using it for private projects as well as for old non-actual ones which should not be on
        ${link('GitHub')}. BitBucket has nice feature to group repos by projects that helps to keep
        actual projects and non-actual ones separatelly.
      </p>
      <p>Currently there are a few public projects:</p>
      <ul>
        <li>
          ${a('https://bitbucket.org/account/user/phts-home/projects/JAV', 'First Java Apps')}
          &mdash; my first apps written on Java when started to leart it.
        </li>
        <li>
          ${a('https://bitbucket.org/account/user/phts-home/projects/OLD', 'Old Delphi Apps')}
          &mdash; programs written on Delphi in 2004&ndash;2006 years.
        </li>
        <li>
          ${a('https://bitbucket.org/account/user/phts-home/projects/PSU', 'University Projects')}
          &mdash; programswhich were written by me during studying in ${link('PSU', 'University')}.
        </li>
      </ul>
    `,
  },
  'Board games': {
    description: `
      <p>I like playing board games especially strategic.</p>
      <p>Among those what we have I can select:</p>
      <ul>
        <li>${a(
          'https://en.wikipedia.org/wiki/Evolution:_The_Origin_of_Species',
          'Evolution: The Origin of Species'
        )}</li>
        <li>${a('https://en.wikipedia.org/wiki/Hive_(game)', 'Hive')}</li>
        <li>${a('https://en.wikipedia.org/wiki/7_Wonders_(board_game)', '7 wonders')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Galaxy_Trucker', 'Galaxy Trucker')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Splendor_(game)', 'Splendor')}</li>
      </ul>
    `,
  },
  Categorize: {},
  Cats: {
    data: [
      {icon: '&#x1F989;', text: 'Owls'},
      {
        icon: '&#x1F47D;',
        text: 'Raccoons',
        tooltip: "Raccoons don't have their own emoji in unicode yet",
      },
      {icon: '&#x1F98A;', text: 'Foxes'},
      {icon: '&#x1F418;', text: 'Elephants'},
    ],
  },
  Colors: {},
  'Curriculum vitae': {
    description: `
      <p>
        In short &mdash; I am ${link('JavaScript', 'frontend')} developer with more than seven
        years of expierence.
        Having deep knowladge and understanding of modern web-technologies and frameworks.
      </p>
      <p>
        In full &mdash; always up-to-date CV is available on my
        ${a('https://github.com/phts/my-cv', 'GitHub profile')} as well as on
        ${a('https://www.linkedin.com/in/tsaryk/', 'LinkedIn')}.
      </p>
    `,
  },
  Debian: {
    description: p('Working in Debian.'),
  },
  Drums: {
    description: `
      <p>My set:</p>
      <ul>
        <li>Paiste Dimensions Medium Heavy Wild Ride 21&Prime;</li>
        <li>Paiste 2002 Medium Crash 18&Prime;</li>
        <li>Paiste Signature Precision Crash 17&Prime;</li>
        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>
        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>
        <li>Drum sticks Vater Los Angeles 5A</li>
      </ul>
      <p>Used to play in these bands as a drummer:<p>
      <ul>
        <li>${link('Space Resonance')}</li>
        <li>${link('Joy in Time')}</li>
        <li>${a(
          'https://mytoucheblog.com/portfolio/jupiter-is-the-most-powerful-beautiful-and-entrancing-planet-in-our-solar-system-interview-with-mission-jupiter/',
          'Mission: Jupiter'
        )}</li>
        <li>${link('Ultramarined')}</li>
      </ul>
    `,
  },
  Electronics: {
    description: `
      <p>I like to solder something in my free time.</p>
      <p>
      Besides fixing numerous devices I have created a few cool
      devices under a brand ${link('PHTS', phts())} which are used at home every day.
      </p>
      <p>For example:</p>
      <ul>
        <li>${a(
          'https://habr.com/ru/post/453474/',
          `arduino-pc-remote-control aka ${phts('RC-01')}`
        )}</li>
        <li>${a('https://github.com/phts/RC', phts('RC-02'))}</li>
        <li>${a('https://easyeda.com/phts/vu-01', phts('VU-01'))}</li>
      </ul>
      <p>
        ${figure('<img src="https://i.imgur.com/VWdIfrE.jpg" alt="PHTS VU-01">', '')}
      </p>
    `,
  },
  Email: {
    description: p(`My email: ${mailto(EMAIL)}.`),
  },
  Epam: {
    description: `
      <p>
        Relocated to ${link('Krako\u0301w')} and have been worked in Epam
        ${link('Curriculum vitae', 'for little more than two years')}.
      </p>
      <p>
        Learned here Angular and ${link('React')},
        was participating in trainings, conducting workshops, interviewing new candidates.
      </p>
      <p>Projects &mdash; it depends. In most cases there is a lot of boring and legacy stuff.</p>
      <p>After Epam working in ${link('Grand Parade')}.</p>
    `,
  },
  Facebook: {
    description: `
      <p>${a('https://www.facebook.com/ph.tsaryk', 'My page')} on facebook.</p>
      <p>Being here very very rarely.</p>
    `,
  },
  Family: {},
  Feedback: {
    data: {
      sayHello: 'Say hello...',
    },
  },
  Firefox: {
    description: `
      <p>
        Using Firefox only. I don't like Chrome from its very beggining due to impossibility to
        customize it for my needs.
      </p>
      <p>
        ${a(
          'https://github.com/topics/firefox-webextension?q=user%3Aphts&unscoped_q=user%3Aphts',
          'Occasionally writing'
        )} simple addons for FF.
      </p>
    `,
  },
  foobar2000: {
    description: `
      <p>Excellent music player. Using it on my PC and smartphone.</p>
      <p>
        Even created a small and useful plugin
        ${a('https://hydrogenaud.io/index.php/topic,110908.0.html', 'Party Shuffle')}.
      </p>
    `,
  },
  GitHub: {
    description: p(`${a('https://github.com/phts', 'There are')} my useful and useless projects
      which are accessible for everyone.`),
  },
  'Grand Parade': {
    description: `
      <p>
        A company where ${link('Curriculum vitae', 'currently')} I am working in.
        This is a part of a big bookmaker
        ${a('https://en.wikipedia.org/wiki/William_Hill_(bookmaker)', 'William Hill')}.
      </p>
      <p>Excellent product company, fine projects, fine people.</p>
    `,
  },
  Habr: {},
  'Heroes of Might and Magic 3': {
    description: `
      <p>
        I like playing to ${a(
          'https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III',
          'HoMM3'
        )}
        / ${a('http://h3hota.com/en/documentation', 'HotA')} when having free time.
      </p>
      <p>
        It is nice since the game is old it still has a huge community, tournaments are taking
        place, new addons and patches are being released.
      </p>
    `,
  },
  JavaScript: {
    description: `
      <p>
        The main direction of my expertise &mdash; JavaScript and everything related to it
        including ES6+, Angular, ${link('React')}, Node.js, Typescript, etc.
      </p>
    `,
  },
  'Joy in Time': {
    description: `
      <p>
        This band in some degree is an oposite of ${link('Space Resonance')} in style and mood.
        In spite of this I used to play in this group with great pleasure.
      </p>
      <p>
        ${youtube('egVPsfDi81A')}
      </p>
      <p>There is vk page: ${a('https://vk.com/joyintimes', 'joyintimes')}</p>
    `,
  },
  Kraków: {
    description: p(`Living here with ${link('Family', 'my family')} more than three years.`),
  },
  'Last.fm': {
    description: p(`${a(LASTFM_URL, 'My profile')} on Last.fm`),
  },
  LinkedIn: {
    description: p(`${a(LINKEDIN_URL, 'My profile')} on LinkedIn.`),
  },
  Music: {
    description: `
      <p>One of most important part of my life.</p>
      <h3>Listening</h3>
      <p>My toplist at the moment:<p>
      <ul>
        <li>Pink Floyd</li>
        <li>Lunatic Soul</li>
        <li>Riverside</li>
        <li>Deep Purple</li>
        <li>Opeth</li>
        <li>The Gathering</li>
        <li>Led Zeppelin</li>
        <li>God Is An Astronaut</li>
        <li>Anathema</li>
      </ul>
      <p>Also I have ${link('Last.fm', 'Last.fm profile')}.</p>
      <p>Often listening to music ${link('Vinyl', 'on vinyl')}.</p>
      <h3>Playing</h3>
      <p>...${link('Drums', 'drums')}.<p>
      <p>Used to play in bands:<p>
      <ul>
        <li>${link('Space Resonance')}</li>
        <li>${link('Joy in Time')}</li>
        <li>Mission: Jupiter</li>
        <li>${link('Ultramarined')}</li>
      </ul>
      <h3>Going to concerts</h3>
      <p>From my must-have list already visited:</p>
      ${figure(picture('FykwSDm', 'Deep Purple in Minsk, 2011'), 'Deep Purple in Minsk, 2011')}
      ${figure(
        picture('qIIb0bR', 'God is an Astronaut in Saint Petersburg, 2012'),
        'God is an Astronaut in Saint Petersburg, 2012'
      )}
      ${figure(
        picture('dPNRWdG', 'Australian Pink Floyd Show in Minsk, 2013'),
        'Australian Pink Floyd Show in Minsk, 2013'
      )}
      ${figure(
        picture('tcyuP0Q', 'Dream Theater in Katowice, 2015'),
        'Dream Theater in Katowice, 2015'
      )}
      ${figure(picture('yDFhHGF', 'Riverside in Katowice, 2015'), 'Riverside in Katowice, 2015')}
      ${figure(
        picture('5oDXQ4s', 'David Gilmour in France, 2016'),
        'David Gilmour in France, 2016'
      )}
      ${figure(picture('pxy4Skj', 'Anathema in Kraków, 2017'), 'Anathema in Kraków, 2017')}
      ${figure(picture('FOuMsdO', 'Opeth in Warsaw, 2017'), 'Opeth in Warsaw, 2017')}
      ${figure(picture('zMy5wbq', 'Roger Waters in Kraków, 2018'), 'Roger Waters in Kraków, 2018')}
      ${figure(picture('mROYG5y', 'Nightwish in Kraków, 2018'), 'Nightwish in Kraków, 2018')}
      ${figure(picture('KhtC73G', 'RPWL in Warsaw, 2019'), 'RPWL in Warsaw, 2019')}
      ${figure(picture('x7kkpYK', 'Pink in Warsaw, 2019'), 'Pink in Warsaw, 2019')}
      <p>Remaining:</p>
      <ul>
      <li>${link('Ritchie Blackmore', "Rainbow or Ritchie Blackmore's Night")}</li>
      <li>The Gathering</li>
      <li>The Morningside</li>
      </ul>
    `,
  },
  Novopolotsk: {
    description: `
      <p>
        My native town. It is located in Vitsebsk Province, ${link('Belarus')}.
        Coordinates:
        ${a(
          'https://tools.wmflabs.org/geohack/geohack.php?pagename=Novopolotsk&params=55_32_N_28_39_E_region:BY_type:city',
          '55°32′00″ N 28°40′00″ E'
        )}
      </p>
    `,
  },
  'Phil Tsaryk': {
    description: `
      <p>
        My name is Phil Tsaryk. I was born December 3 1987 in ${link('Novopolotsk')}
        in BSSR (now &mdash; ${link('Belarus')}).
      </p>
      <p>
        In 2011 graduated from ${link('PSU', 'Polotsk State University')} with a speciality
        ${link('Software Engineer')}.
      </p>
      <p>
        Nowadays live in ${link('Kraków')} and work as
        ${link('JavaScript', 'a frontend developer')} in ${link('Grand Parade')}.
      </p>
    `,
  },
  PHTS: {
    description: [
      p(`Brand for useful and useless ${link('Electronics', 'electronic devices')} made by me.`),
      figure(
        picture('pUbuzOo', 'PHTS CLK-01'),
        `${a('https://oshwlab.com/phts/CLK-01', phts('CLK-01'))} (still in progress)`
      ),
      figure(picture('BXikwKy', 'PHTS VU-01'), a('https://easyeda.com/phts/vu-01', phts('VU-01'))),
      figure(picture('nXCSHXf', 'PHTS USP-01'), phts('USP-01')),
      figure(picture('uPRy2Mu', 'PHTS BB-01'), phts('BB-01')),
      figure(picture('BzSJRpf', 'PHTS BB-01s'), phts('BB-01s')),
      figure(picture('cpv9dk4', 'PHTS FL-01'), phts('FL-01')),
      figure(picture('c3EMslv', 'PHTS RC-02'), a('https://github.com/phts/RC', phts('RC-02'))),
    ],
  },
  'Pilip Tsaryk': {
    description: `
      <p>My legal name.</p>
      <p>This is how it is written in my passport.</p>
    `,
  },
  'Playing cards': {
    data: {
      p1: 'Collecting since my childhood.',
      p2:
        'There is no purpose to gather everything from everywhere, \
so the collection is not so big and contains around 100 decks today. \
Collecting those which I really like.',
      imgTitle: 'One card from each deck (clickable). July 2021',
    },
  },
  Poland: {
    description: p(`Currently living in Poland in ${link('Krako\u0301w')}.`),
  },
  'Promo codes': {
    description: `
      <p>
        Feel free to use:
      </p>
      <ul>
        <li>Airbnb: ${a('https://www.airbnb.ru/c/philt68?currency=PLN', 'philt68')}</li>
        <li>Allegro: ${a('https://allegro.pl/aplikacja/polecam/pilip782627', 'pilip782627')}</li>
        <li>atlasbus.by: ${a('https://atlasbus.by/share/app/GPMQHV', 'GPMQHV')}</li>
        <li>Bank Millennium:
          ${a('https://www.bankmillennium.pl/lubietopolecam?id=24586296', '24586296')}</li>
        <li>Bolt (Taxify): S5S8K8</li>
        <li>Booking.com: ${a('https://www.booking.com/s/18_6/pilip212', 'pilip212')}</li>
        <li>Hulaj: zDNRAA</li>
        <li>Maxim: 9D06F7E7</li>
        <li>Revolut: ${a('https://revolut.com/r/pilip1ip', 'pilip1ip')}</li>
        <li>Uber: ${a('https://www.uber.com/invite/3daguge8ue', '3daguge8ue')}</li>
      </ul>
    `,
  },
  PSU: {},
  Random: {},
  React: {
    description: p(
      `At this moment I am specializing exactly ${a('https://reactjs.org/', 'on this library')}.`
    ),
  },
  'Ritchie Blackmore': {
    description: p('In my opinion the best guitarist ever.'),
  },
  Ruby: {
    description: `
      <p>Cool scripting language.</p>
      <p>
        In spite of a fact that I am a ${link('JavaScript', 'frontender')}, sometimes writing
        various useful things on Ruby.
      </p>
    `,
  },
  'SaM Solutions': {},
  Škoda: {},
  Skype: {
    description: p(`Deprecated in favor of ${link('Telegram')}.`),
  },
  'Software Engineer': {
    description: p(`My speciality after graduating from ${link('PSU', 'university')}.`),
  },
  'Space Resonance': {},
  'Stack Overflow': {
    description: `
      <p>
        Sometimes I ${a('https://stackoverflow.com/users/2462524/phts', 'ask and answer')} questions
        on ${a('https://stackoverflow.com/', 'Stack Overflow')}.
      </p>
    `,
  },
  'Sublime Text': {
    description: `
      <p>Great code editor. Using it every day.</p>
      <p>
        Occasionally I
        ${a(
          'https://github.com/phts?utf8=%e2%9C%93&tab=repositories&q=sublime&type=&language=',
          'make plugins'
        )} for it.
      </p>
    `,
  },
  Telegram: {
    description: p(`My username in Telegram: ${a('https://t.me/ptsaryk', '@ptsaryk')}`),
  },
  Title: {},
  'The Netherlands': {
    description: p('Someday I will live there for sure.'),
  },
  Traveling: {
    description: `
      <p>
        I like traveling with my ${link('Family', 'family')}. ${link('Škoda', 'By car')},
        by train, by plane, by anything.
      </p>
      <p>There are countries which we have already visited:</p>
      <ul style="list-style-type: none;">
        <li>&#127463;&#127486; ${link('Belarus')} &mdash; obviously</li>
        <li>&#127464;&#127487; Czech Republic</li>
        <li>&#127466;&#127480; Spain</li>
        <li>&#127467;&#127479; France</li>
        <li>&#127468;&#127479; Greece</li>
        <li>&#127475;&#127473; ${link('The Netherlands')}</li>
        <li>&#127477;&#127473; ${link('Poland')} &mdash; also obviously :)</li>
        <li>&#127479;&#127482; Russia</li>
        <li>&#127481;&#127479; Turkey</li>
        <li>&#127482;&#127462; Ukraine</li>
      </ul>
    `,
  },
  Ultramarined: {
    data: {
      ultrimarine: 'Ultramarine me!',
      unultrimarine: 'Unultramarine',
    },
  },
  'Video games': {
    description: `
      <p>
        I like high-quality and interesting computer games, in most cases quests and strategies.
      </p>
      <p>Made a huge impression on me and still making:</p>
      <ul>
        <li>${a('https://en.wikipedia.org/wiki/Warcraft_II:_Tides_of_Darkness', 'Warcraft 2')}
          / ${a('https://en.wikipedia.org/wiki/Warcraft_III:_Reign_of_Chaos', '3')}</li>
        <li>${a('https://en.wikipedia.org/wiki/StarCraft', 'Starcraft')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Stronghold_(2001_video_game)', 'Stronghold')}</li>
        <li>${link('Heroes of Might and Magic 3')}
          / ${a('https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_IV', '4')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Half-Life_(series)', 'Half-Life')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Syberia', 'Syberia')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Majesty:_The_Fantasy_Kingdom_Sim', 'Majesty')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Mafia_(video_game)', 'Mafia')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Grand_Theft_Auto', 'GTA')}</li>
        <li>${a(
          'https://en.wikipedia.org/wiki/Knights_and_Merchants:_The_Shattered_Kingdom',
          'Knights and Merchants: The Shattered Kingdom'
        )}</li>
        <li>${a('https://en.wikipedia.org/wiki/Portal_(series)', 'Portal')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Anno_1701', 'Anno 1701')}
          / ${a('https://en.wikipedia.org/wiki/Anno_1404', '1404')}</li>
        <li>${a('https://en.wikipedia.org/wiki/Space_Rangers_(video_game)', 'Space Rangers')}</li>
        <li>${a('https://en.wikipedia.org/wiki/The_Talos_Principle', 'The Talos Principle')}</li>
      </ul>
      <p>And some games on ${link('ZX Spectrum')} as well.</p>
    `,
  },
  Vinyl: {
    description: figure(
      picture('Mkb7mO9', 'Винил'),
      `Audio-Technica AT-LP120USBHC + Yamaha A-S501 + Hand-made speakers by Andrzej Figarski. ${a(
        'https://www.discogs.com/user/phts/collection',
        'Playing Lunatic Soul - Lunatic Soul II'
      )}`
    ),
  },
  VK: {
    description: p(`${a('https://vk.com/phil.tsaryk', 'My profile')} in VK.`),
  },
  'ZX Spectrum': {
    description: `
      <p>
        My first computer. First line of code there most likely was <code>LOAD "" &crarr;</code>
        &mdash; to load game from сassette tape.
      </p>
      <p>
        Most loved games: ${a(
          'https://spectrumcomputing.co.uk/index.php?cat=96&id=2323',
          'Highway Encounter'
        )},
        ${a('https://spectrumcomputing.co.uk/index.php?cat=96&id=461', 'Battle Ships')},
        ${a('https://spectrumcomputing.co.uk/index.php?cat=96&id=1686', 'Exolon')},
        ${a('https://spectrumcomputing.co.uk/index.php?cat=96&id=5448', 'Tujad')},
        ${a('https://spectrumcomputing.co.uk/index.php?cat=96&id=639', 'Boulder Dash')},
        ${a(
          'https://spectrumcomputing.co.uk/index.php?cat=96&id=4784',
          'Spy Hunter'
        )} and many more.
      </p>
    `,
  },
}
