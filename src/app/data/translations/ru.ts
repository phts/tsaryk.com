const skodaImg = require('static/img/skoda.jpg')

import {TranslatedStrings} from './index'
import {p} from 'app/helpers/html'

export const ru: TranslatedStrings = {
  EN: {
    name: 'АНГ',
  },
  RU: {
    name: 'РУС',
  },
  '© Phil Tsarik, 2018': {
    name: '© Филипп Царик, 2018',
  },
  '+375292181503': {
    description: p('Мой белорусский номер телефона: <a href="tel:+375292181503">+375 29 218-15-03</a>.'),
  },
  '+48534898187': {
    description: p('Мой польский номер телефона: <a href="tel:+48534898187">+48 534 898 187</a>.'),
  },
  Age: {
    name: 'Возраст',
  },
  Android: {
    name: 'Андройд',
  },
  Angular: {
    name: 'Ангулар',
  },
  Ascending: {
    name: 'По порядку',
  },
  'bash.org': {
    name: 'Башорг',
    description: p('Когда-то давно случайно <a href="http://bash.im/quote/393345">попал</a> на bash.org.'),
  },
  Belarus: {
    name: 'Беларусь',
  },
  Billiard: {
    name: 'Бильярд',
  },
  BitBucket: {
    name: 'БитБакет',
    description: p('Использую только для приватных проектов.\
      Все публичные проекты находится на <a href="#/GitHub">моём Гитхабе</a>.'),
  },
  'Board games': {
    name: 'Настолки',
  },
  Cats: {
    name: 'Коты',
  },
  Colors: {
    name: 'Цвета',
  },
  'Curriculum vitae': {
    name: 'Резюме',
    description: `
      <p>Доступно на <a href="https://github.com/phts/my-cv">моём гитхабе</a>.</p>
    `,
  },
  Debian: {
    name: 'Дебиан',
  },
  Drums: {
    name: 'Барабаны',
    description: `
      <h3>Мой сет</h3>
      <ul>
        <li>Paiste Signature Dry Ride 20&Prime;</li>
        <li>Paiste 2002 Medium Crash 18&Prime;</li>
        <li>Paiste Signature Precision Crash 17&Prime;</li>
        <li>Paiste 2002 Sound Edge Hi-Hat 14&Prime;</li>
        <li>Sonor Force 3007 Maple Snare Drum 14&Prime;</li>
        <li>Палочки Vater Los Angeles 5A</li>
      </ul>
    `,
  },
  Email: {
    name: 'Имейл',
    description: p('Мой имейл: <a href="mailto:phil.tsarik@gmail.com">phil.tsarik@gmail.com</a>.'),
  },
  Epam: {
    name: 'Епам',
    description: `
      <p>Релоцировался в <a href="#/Krako\u0301w">Краков</a> и проработал в Епаме чуть больше двух лет.</p>
      <p>
        Изучил тут <a href="#/Angular">Ангуляр</a> и <a href="#/React">Реакт</a>,
        ходил на тренинги, проводил воркшопы, собеседовал новых кандидатов.
      </p>
      <p>С проектом &mdash; как повезёт. Но в большинстве случаев много неинтересного и легаси.</p>
      <p>После Епама перешёл в <a href="#/Grand Parade">Гранд Парэйд</a>.</p>
      <p>
        Больше подробностей в <a href="#/Curriculum vitae">моём резюме</a> и
        на <a href="#/LinkedIn">линкедине</a>
      </p>
    `,
  },
  Facebook: {
    name: 'Фейсбук',
    description: p('<a href="https://www.facebook.com/phil.tsarik">Моя страничка</a> в фэйсбуке.'),
  },
  foobar2000: {
    name: 'фубар2000',
    description: `
      <p>Отличный плеер музыки. Пользуюсь им на компе и телефоне.</p>
      <p>
        Однажды даже написал простой, но полезный плагин
        <a href="https://hydrogenaud.io/index.php/topic,110908.0.html">Party Shuffle</a>.
      </p>
    `,
  },
  GitHub: {
    name: 'ГитХаб',
    description: p('<a href="https://github.com/phts">Тут</a> находятся полезные и\
      бесполезные проекты, которые доступны для всех.'),
  },
  'Grand Parade': {
    name: 'Гранд Парэйд',
  },
  Habr: {
    name: 'Хабр',
    description: `
      <p><a href="https://habrahabr.ru/users/phil_tsarik/">На Хабре</a> давным давно опубликовал
         <a href="https://habrahabr.ru/post/128327/">статью &laquo;Стеганография в GIF&raquo;</a> для получения инвайта.
         Инвайт получил.</p>
      <p>На Тостере засветился <a href="https://toster.ru/answer?answer_id=158170#answers_list_answer">ответом</a> на
         &laquo;Как оформить программный код в Microsoft Word&raquo;.</p>
    `,
  },
  'Heroes of Might and Magic 3': {
    name: 'Герои меча и магии 3',
    description: p('До сих пор играю, если появляется свободное время.'),
  },
  JavaScript: {
    name: 'Джаваскрипт',
  },
  'Joy in Time': {
    name: 'Радость во времени',
  },
  Krako\u0301w: {
    name: 'Краков',
  },
  'Last.fm': {
    name: 'Ласт.фм',
  },
  LinkedIn: {
    name: 'ЛинкедИн',
    description: p('<a href="https://www.linkedin.com/in/tsarik/">Мой профиль</a> на ЛинкедИне.'),
  },
  Music: {
    name: 'Музыка',
    description: `
      <p>Важнейшая часть моей жизни.</p>
      <h3>Слушаю</h3>
      <p>Мой топ на данный момент:<p>
      <ul>
        <li><a href="#/Pink Floyd">Pink Floyd</a></li>
        <li>Lunatic Soul</li>
        <li>Riverside</li>
        <li>Deep Purple</li>
        <li>Opeth</li>
        <li>The Gathering</li>
        <li>Led Zeppelin</li>
        <li>God Is An Astronaut</li>
        <li>Anathema</li>
      </ul>
      <p>Также я есть на <a href="#/Last.fm">Ластфм</a>.</p>
      <h3>Играю</h3>
      <p>На <a href="#/Drums">барабанах</a>.<p>
      <p>Участвовал в группах:<p>
      <ul>
        <li><a href="#/Space Resonance">Space Resonance</a></li>
        <li><a href="#/Joy in Time">Радость во времени</a></li>
        <li>Mission: Jupiter</li>
        <li><a href="#/Ultramarined">Ultramarined</a></li>
      </ul>
      <p>Сейчас с ребятами в <a href="#/Krako\u0301w">Кракове</a> пытаемся играть и сочинять что-то своё.<p>
    `,
  },
  Novopolotsk: {
    name: 'Новополоцк',
  },
  'Phil Tsarik': {
    name: 'Филипп Царик',
  },
  'Pilip Tsaryk': {
    name: 'Пiлiп Царык',
  },
  'Pink Floyd': {
    name: 'Пинк Флойд',
  },
  'Playing cards': {
    name: 'Игральные карты',
  },
  Poland: {
    name: 'Польша',
    description: p('В данный момент проживаю в Польше в городе <a href="#/Krako\u0301w">Кракове</a>.'),
  },
  PSU: {
    name: 'ПГУ',
  },
  Random: {
    name: 'Вразнобой',
  },
  React: {
    name: 'Реакт',
  },
  'Ritchie Blackmore': {
    name: 'Ричи Блэкмор',
  },
  Ruby: {
    name: 'Руби',
  },
  'SaM Solutions': {
    name: 'Сам Солюшнс',
  },
  S\u030Ckoda: {
    name: 'Шкода',
    description: `
      <p>А точнее, S\u030Ckoda Felicia II 1.6 (1999 г. в.).</p>
      <p>
        Моя первая машина, купленная в <a href="#/Krako\u0301w">Кракове</a> за какие-то 2300 злотых
        (около $600 по тогдашнему курсу).
      </p>
      <p>Очень надежный автомобиль. Прошёл боевое крещение по украинским дорогам в Буковель.</p>
      <p><img src="${skodaImg}" alt="My S\u030Ckoda"></p>
    `,
  },
  Skype: {
    name: 'Скайп',
    description: p('Я в скайпе: <a href="callto:phil.tsarik">phil.tsarik</a>.'),
  },
  'Software Engineer': {
    name: 'Инженер-программист',
  },
  'Space Resonance': {
    name: 'Спасе Резонасе',
  },
  'Stack Overflow': {
    name: 'Стак Оверфлоу',
    description: `
      <p>
        Иногда <a href="https://stackoverflow.com/users/2462524/phts">отвечаю и задаю</a>
        вопросы на Стак Оверфлоу.
      </p>
    `,
  },
  'Sublime Text': {
    name: 'Саблайм Текст',
    description: `
      <p>Отличный редактор кода. Пользуюсь им каждый день.</p>
      <p>
        Периодически
        <a href="https://github.com/phts?utf8=%E2%9C%93&tab=repositories&q=sublime&type=&language=">пишу плагины</a>
        для него.
      </p>
    `,
  },
  Title: {
  },
  'The Netherlands': {
    name: 'Нидерланды',
  },
  Typescript: {
    name: 'Тайпскрипт',
  },
  Ultramarined: {
    name: 'Ультрамаринд',
    description: `
      <p>
        Прошло немало месяцев/лет после того, как <a href="#/Joy in Time">Радость во времени</a> внезапно распалась
        и смогла эволюционироваться в Ultramarined с новыми идеями и вдохновением.
      </p>
      <p>
        Мы успешно репетировали, сочиняли песни, выступали, и всё складывалось хорошо. До того момента,
        как я не уехал в <a href="#/Krako\u0301w">Краков</a>.
      </p>
      <p>
        Больше информации о группе доступно на
        <a href="http://phts.github.io/ultramarined.by/">зеркале официального сайта</a>.
      </p>
    `,
  },
  'Video games': {
    name: 'Компьютерные игры',
    description: `
      <p>
        Люблю качественные и интересные компьютерные игры, в большинстве случаев квесты и стратегии.
      </p>
      <p>Произведшие на меня огромное впечатление, и производят до сих пор:</p>
      <ul>
        <li>Warcraft 2 / 3</li>
        <li>Starcraft</li>
        <li>Stronghold</li>
        <li><a href="#/Heroes of Might and Magic 3">Heroes of Might and Magic 3</a> / 4</li>
        <li>Half Life</li>
        <li>Syberia</li>
        <li>Majesty</li>
        <li>Portal</li>
        <li>Anno 1701/1404</li>
        <li>Космические рэйнджеры</li>
        <li>The Talos Principle</li>
      </ul>
      <p>А также некоторые игры на <a href="#/ZX Spectrum">ZX Spectrum</a>.</p>
    `,
  },
  VK: {
    name: 'ВК',
    description: p('<a href="https://vk.com/phil.tsarik">Моя страница</a> в ВК.'),
  },
  'ZX Spectrum': {
    name: 'Зэд Икс Спектрум',
  },
}
