import './playing-cards.png'

import React from 'react'
import styled from 'styled-components'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import Padding from 'components/item-pages/parts/Padding'
import Title from 'components/item-pages/parts/Title'
import Content from 'components/item-pages/parts/Content'
import {ItemPageProps} from 'components/item-pages/types'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'
import PlayingCard from './PlayingCard'

interface Data {
  p1: string
  p2: string
  imgTitle: string
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
`

const PlayingCardsPage: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  return (
    <Padding>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <Content className={className}>
        <p>{(item.data as Data).p2}</p>
        <p>{(item.data as Data).p1}</p>
        <figure>
          <Container>
            <PlayingCard
              href="https://playingarts.com/ru/special?utm_source=tema&utm_medium=banner&utm_campaign=300x300"
              title="Playing Arts: Special Edition"
              x={18}
              y={0}
              width={174}
              height={240}
            />
            <PlayingCard title="Царик Филипп №2" x={192} y={0} width={160} height={240} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/"
              title="Оперные (репринт)"
              x={362}
              y={0}
              width={160}
              height={240}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/classic-470/"
              title="Karty do gry №490"
              x={529}
              y={0}
              width={158}
              height={243}
            />
            <PlayingCard title="Greek cats" x={686} y={0} width={169} height={242} />
            <PlayingCard title="Nude playing cards" x={855} y={0} width={172} height={242} />
            <PlayingCard title="Lattjo" x={1026} y={0} width={160} height={242} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-667.html"
              title="Белый палех"
              x={1187}
              y={0}
              width={160}
              height={245}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-154.html"
              title="Госпожа удача"
              x={1346}
              y={0}
              width={160}
              height={245}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-701.html"
              title="Невские"
              x={1514}
              y={0}
              width={160}
              height={250}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-133.html"
              title="Атласные"
              x={1674}
              y={0}
              width={160}
              height={248}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-152.html"
              title="Командирские"
              x={1833}
              y={0}
              width={160}
              height={251}
            />

            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/derzhava/"
              title="Derzhava"
              x={18}
              y={240}
              width={170}
              height={240}
            />
            <PlayingCard title="Playing Cards Dollar" x={189} y={239} width={155} height={238} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-637.html"
              title="Jacob's Bible Cards"
              x={346}
              y={242}
              width={170}
              height={238}
            />
            <PlayingCard
              href="https://symbal.by/t/1286-karty-bnr/"
              title="100 гадоў БНР"
              x={522}
              y={244}
              width={172}
              height={241}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/abraxas/"
              title="Abraxas"
              x={696}
              y={242}
              width={157}
              height={243}
            />
            <PlayingCard
              href="https://www.behance.net/gallery/16822663/Hidden-part"
              title="Hidden Part"
              x={856}
              y={242}
              width={147}
              height={238}
            />
            <PlayingCard
              href="https://www.artiphany.com/products/kitten-club"
              title="Kitten Club Playing Cards"
              x={1008}
              y={244}
              width={170}
              height={241}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/international-style/royal-dollar/"
              title="Playing cards"
              x={1176}
              y={248}
              width={157}
              height={237}
            />
            <PlayingCard
              href="https://www.artiphany.com/products/mermaid-playing-cards"
              title="Mermaid Queen Playing Cards"
              x={1335}
              y={245}
              width={170}
              height={240}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-151.html"
              title="Державные"
              x={1513}
              y={250}
              width={157}
              height={245}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-693.html"
              title="Времена года"
              x={1673}
              y={250}
              width={155}
              height={245}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks06/d04208/d04208.htm"
              title="Skat"
              x={1833}
              y={253}
              width={155}
              height={242}
            />

            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/classic/salon-karte-66/"
              title="Salon-Karte №66"
              x={18}
              y={480}
              width={159}
              height={235}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/computer-games/pixel-art/"
              title="Pixel Art"
              x={180}
              y={480}
              width={170}
              height={240}
            />
            <PlayingCard title="Царик Филипп №3" x={355} y={477} width={165} height={246} />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm"
              title="Ennia"
              x={525}
              y={486}
              width={153}
              height={234}
            />
            <PlayingCard title="Portugal" x={679} y={486} width={168} height={237} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1341.html"
              title="Rosina Watchmeister"
              x={847}
              y={481}
              width={157}
              height={240}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1119.html"
              title="Весела політика"
              x={1008}
              y={485}
              width={170}
              height={240}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/"
              title="Greek mythology"
              x={1184}
              y={484}
              width={167}
              height={244}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/atlasnye2/"
              title="Атласные"
              x={1356}
              y={485}
              width={155}
              height={245}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm"
              title="Turkey"
              x={1515}
              y={495}
              width={155}
              height={240}
            />
            <PlayingCard
              href="https://www.russcards.com/lapin-cards"
              title="Карты Лапиных"
              x={1674}
              y={495}
              width={152}
              height={240}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-445.html"
              title="Исторические"
              x={1831}
              y={497}
              width={160}
              height={248}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm"
              title="Петергоф"
              x={0}
              y={718}
              width={160}
              height={248}
            />
            <PlayingCard
              href="https://unitedcardists.com/viewtopic.php?f=8&t=5424"
              title="Pixel Cards"
              x={162}
              y={722}
              width={170}
              height={240}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-272.html"
              title="Московский сувенир"
              x={337}
              y={724}
              width={147}
              height={231}
            />
            <PlayingCard title="Spider-Man" x={484} y={725} width={156} height={235} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/vsya-vlast/"
              title="Вся власть"
              x={641}
              y={726}
              width={157}
              height={240}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-282.html"
              title="Партия"
              x={798}
              y={731}
              width={153}
              height={235}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-153.html"
              title="Княжеские"
              x={955}
              y={726}
              width={159}
              height={248}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/space-invaders/"
              title="Космические захватчики"
              x={1116}
              y={729}
              width={155}
              height={240}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-694.html"
              title="Рококо"
              x={1674}
              y={738}
              width={127}
              height={191}
            />

            {/* row #5 */}
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-137.html"
              title="Лубочные"
              x={0}
              y={973}
              width={141}
              height={222}
            />
            <PlayingCard title="Xuebao No. 2000" x={141} y={963} width={155} height={238} />
            <PlayingCard title="Wanshengda 9706" x={295} y={962} width={156} height={238} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-148.html"
              title="Времена года"
              x={455}
              y={962}
              width={154}
              height={234}
            />
            <PlayingCard
              title="Mad night powered by Tabasco sauce"
              x={611}
              y={969}
              width={159}
              height={239}
            />
            <PlayingCard
              href="https://www.russcards.com/modern-style"
              title="Новый стиль"
              x={770}
              y={969}
              width={160}
              height={241}
            />
            <PlayingCard title="Playing cards" x={930} y={972} width={173} height={237} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-692.html"
              title="Палех"
              x={1106}
              y={970}
              width={160}
              height={245}
            />
            <PlayingCard title="Pokemon" x={1269} y={1044} width={98} height={150} />
            <PlayingCard title="Русский стиль" x={1674} y={935} width={138} height={222} />

            {/* row #6 */}
            <PlayingCard title="Karty do PLAYowania" x={1} y={1205} width={156} height={242} />
            <PlayingCard
              title="Glow-in-the-dark playing cards"
              x={157}
              y={1205}
              width={170}
              height={242}
            />
            <PlayingCard title="Playing cards" x={327} y={1207} width={153} height={239} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-155.html"
              title="Диана"
              x={480}
              y={1208}
              width={160}
              height={247}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/international-style/international/"
              title="International"
              x={638}
              y={1212}
              width={160}
              height={246}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/mafia/"
              title="Mafia"
              x={796}
              y={1212}
              width={156}
              height={246}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-690.html"
              title="Славянские"
              x={952}
              y={1213}
              width={160}
              height={240}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/"
              title="Русский стиль"
              x={1112}
              y={1217}
              width={158}
              height={240}
            />

            {/* row #7 */}
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-700.html"
              title="Майа"
              x={3}
              y={1454}
              width={161}
              height={250}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-737.html"
              title="Рейнские"
              x={165}
              y={1446}
              width={177}
              height={256}
            />
            <PlayingCard title="Dubai" x={342} y={1462} width={158} height={241} />
            <PlayingCard
              title="Карти за игра: 55 чудесни изгледа от България"
              x={501}
              y={1461}
              width={159}
              height={243}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-732.html"
              title="Karty do gry № 410"
              x={660}
              y={1464}
              width={161}
              height={239}
            />
            <PlayingCard
              href="https://wearmedicine.com/p/medicine-karty-do-gry-11788"
              title="Kartу do gry Medicine"
              x={820}
              y={1459}
              width={159}
              height={245}
            />
            <PlayingCard title="Playing cards 777" x={979} y={1468} width={157} height={239} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/brosmino-deck/"
              title="Bicycle: Brosmind"
              x={1138}
              y={1466}
              width={172}
              height={244}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/personality/jagellonskie/"
              title="Jagiellońskie"
              x={1310}
              y={1470}
              width={160}
              height={240}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards"
              title="Ephemerid"
              x={1470}
              y={1465}
              width={175}
              height={245}
            />
            {/* row #8 */}
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/"
              title="Низшие духи восточнославянской мифологии"
              x={0}
              y={1705}
              width={159}
              height={250}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/advertising/science-fiction-1659/"
              title="Sience-Fiction"
              x={160}
              y={1708}
              width={173}
              height={242}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/classic/black-russian-1670/"
              title="Black Russian"
              x={333}
              y={1708}
              width={173}
              height={244}
            />
            <PlayingCard title="Thingvellir" x={506} y={1707} width={154} height={242} />
            <PlayingCard
              href="https://wearmedicine.com/p/medicine-karty-do-gry-16905"
              title="Kartу do gry Medicine"
              x={661}
              y={1708}
              width={160}
              height={242}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/luxury/"
              title="Luxury"
              x={820}
              y={1704}
              width={168}
              height={253}
            />

            {/* rest */}
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/humor/gra-wstepna/"
              title="Gra wstępna"
              x={1270}
              y={1197}
              width={187}
              height={269}
            />
            <PlayingCard title="Playing cards" x={1270} y={734} width={246} height={284} />
            <PlayingCard title="Царик Филипп №1" x={1454} y={1184} width={200} height={280} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1503.html"
              title="Schafkopf Tarock"
              x={1523}
              y={739}
              width={150}
              height={274}
            />
            <PlayingCard
              href="http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html"
              title="Универсальное таро"
              x={1815}
              y={747}
              width={184}
              height={331}
            />
            <PlayingCard title="Playing cards" x={1655} y={1185} width={344} height={522} />
          </Container>
          <figcaption>{(item.data as Data).imgTitle}</figcaption>
        </figure>
      </Content>
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </Padding>
  )
}

export default PlayingCardsPage
