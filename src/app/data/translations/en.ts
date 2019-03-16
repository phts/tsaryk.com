/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-len */
import {a, mailto, link, p, tel, youtube, figure} from 'app/helpers/html'
import {picture} from 'app/helpers/imgur'
import {TranslatedStrings} from './index'
import {
  EMAIL,
  LASTFM_URL,
  LINKEDIN_URL,
} from 'app/config'

export const en: TranslatedStrings = {
  EN: {
    tooltip: 'Not fully translated yet. Sorry.',
  },
  RU: {
  },
  '©': {
    name: '© Phil Tsaryk, 2019',
    description: `
      <p>This site was created and being supported by me in free time.</p>
      <p>Main technologies:</p>
      <ul>
        <li>Preact</li>
        <li>MobX</li>
        <li>TypeScript</li>
      </ul>
      <p>${a('https://github.com/phts/tsaryk.com', 'Site\'s source code is')} on Github.</p>
    `,
  },
  About: {
  },
  Contacts: {
  },
  Hobby: {
  },
  Meta: {
  },
  Work: {
  },
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
  Android: {
    description: p('Only Android. I don\'t like iOS.'),
  },
  Ascending: {
  },
  'bash.org': {
  },
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
        <li><a href="https://en.wikipedia.org/wiki/Evolution:_The_Origin_of_Species">\
Evolution: The Origin of Species</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Hive_(game)">Hive</a></li>
        <li><a href="https://en.wikipedia.org/wiki/7_Wonders_(board_game)">7 wonders</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Galaxy_Trucker">Galaxy Trucker</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Splendor_(game)">Splendor</a></li>
      </ul>
    `,
  },
  Categorize: {
  },
  Cats: {
    data: [
      {icon: '&#x1F989;', text: 'Owls'},
      {
        icon: '&#x1F47D;',
        text: 'Raccoons',
        tooltip: 'Raccoons don\'t have their own emoji in unicode yet',
      },
      {icon: '&#x1F98A;', text: 'Foxes'},
      {icon: '&#x1F418;', text: 'Elephants'},
    ],
  },
  Colors: {
  },
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
        <li>Mission: Jupiter</li>
        <li>${link('Ultramarined')}</li>
      </ul>
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
  Family: {
  },
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
          'Occasionally writing')} simple addons for FF.
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
  Habr: {
  },
  'Heroes of Might and Magic 3': {
    description: `
      <p>I like playing to HoMM3 when having free time.</p>
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
      <p>drums in bands:<p>
      <ul>
        <li>${link('Space Resonance')}</li>
        <li>${link('Joy in Time')}</li>
        <li>Mission: Jupiter</li>
        <li>${link('Ultramarined')}</li>
      </ul>
      <h3>Going to concerts</h3>
      <p>From my must-have list already visited:</p>
      ${figure(picture('FykwSDm', 'Deep Purple in Minsk, 2011'),
               'Deep Purple in Minsk, 2011')}
      ${figure(picture('qIIb0bR', 'God is an Astronaut in Saint Petersburg, 2012'),
               'God is an Astronaut in Saint Petersburg, 2012')}
      ${figure(picture('dPNRWdG', 'Australian Pink Floyd Show in Minsk, 2013'),
               'Australian Pink Floyd Show in Minsk, 2013')}
      ${figure(picture('tcyuP0Q', 'Dream Theater in Katowice, 2015'),
               'Dream Theater in Katowice, 2015')}
      ${figure(picture('yDFhHGF', 'Riverside in Katowice, 2015'),
               'Riverside in Katowice, 2015')}
      ${figure(picture('5oDXQ4s', 'David Gilmour in France, 2016'),
               'David Gilmour in France, 2016')}
      ${figure(picture('pxy4Skj', 'Anathema in Kraków, 2017'),
               'Anathema in Kraków, 2017')}
      ${figure(picture('FOuMsdO', 'Opeth in Warsaw, 2017'),
               'Opeth in Warsaw, 2017')}
      ${figure(picture('zMy5wbq', 'Roger Waters in Kraków, 2018'),
               'Roger Waters in Kraków, 2018')}
      ${figure(picture('mROYG5y', 'Nightwish in Kraków, 2018'),
               'Nightwish in Kraków, 2018')}
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
          '55°32′00″ N 28°40′00″ E',
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
  'Pilip Tsaryk': {
    description: `
      <p>My legal name.</p>
      <p>This is how it is written in my passport.</p>
    `,
  },
  'Playing cards': {
    data: {
      p1: 'Collecting since my childhood.',
      p2: 'There is no purpose to gather everything from everywhere, \
so the collection is no so big and contains today more than 70 decks. \
Collecting those which I really like.',
      imgTitle: 'One card from each deck (clickable). March 2019',
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
        <li>Bank Millennium:
          ${a('https://www.bankmillennium.pl/lubietopolecam?id=24586296', '24586296')}</li>
        <li>Revolut: ${a('https://revolut.com/r/pilip1ip', 'pilip1ip')}</li>
        <li>Taxify: S5S8K8</li>
        <li>Maxim: 9D06F7E7</li>
        <li>Uber: ${a('https://www.uber.com/invite/3daguge8ue', '3daguge8ue')}</li>
      </ul>
    `,
  },
  PSU: {
  },
  Random: {
  },
  React: {
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
  'SaM Solutions': {
  },
  Škoda: {
  },
  Skype: {
  },
  'Software Engineer': {
  },
  'Space Resonance': {
  },
  'Stack Overflow': {
  },
  'Sublime Text': {
  },
  Title: {
  },
  'The Netherlands': {
  },
  Ultramarined: {
    data: {
      ultrimarine: 'Ultramarine me!',
      unultrimarine: 'Unultramarine',
    },
  },
  'Video games': {
  },
  Vinyl: {
    description: p('Audio-Technica AT-LP120USBHC + Yamaha A-S501 + Hand-made speakers by Andrzej Figarski.'),
  },
  VK: {
  },
  'ZX Spectrum': {
  },
}
