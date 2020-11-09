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
import playingCards1Imgs from './playing-cards-row1.png'
import playingCards4Imgs from './playing-cards-row4.png'
import playingCards5Imgs from './playing-cards-row5.png'
import playingCards6Imgs from './playing-cards-row6.png'
import playingCards7Imgs from './playing-cards-row7.png'

interface Data {
  p1: string
  p2: string
  imgTitle: string
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  justify-content: center;
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
              x={1}
              y={0}
              width={105}
              height={142}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Царик Филипп №2"
              x={106}
              y={0}
              width={101}
              height={145}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/"
              title="Оперные (репринт)"
              x={207}
              y={0}
              width={99}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/classic-470/"
              title="Karty do gry №490"
              x={307}
              y={0}
              width={96}
              height={147}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Greek cats"
              x={404}
              y={0}
              width={101}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Nude playing cards"
              x={506}
              y={0}
              width={103}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Lattjo"
              x={610}
              y={0}
              width={94}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-667.html"
              title="Белый палех"
              x={705}
              y={0}
              width={93}
              height={149}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-154.html"
              title="Госпожа удача"
              x={800}
              y={0}
              width={96}
              height={149}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-701.html"
              title="Невские"
              x={900}
              y={0}
              width={93}
              height={150}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-133.html"
              title="Атласные"
              x={994}
              y={0}
              width={96}
              height={150}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-152.html"
              title="Командирские"
              x={1090}
              y={0}
              width={97}
              height={150}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />

            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/derzhava/"
              title="Derzhava"
              x={0}
              y={143}
              width={105}
              height={144}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Playing Cards Dollar"
              x={105}
              y={145}
              width={93}
              height={142}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-637.html"
              title="Jacob's Bible Cards"
              x={198}
              y={143}
              width={104}
              height={141}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1607.html"
              title="100 гадоў БНР"
              x={303}
              y={147}
              width={105}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/abraxas/"
              title="Abraxas"
              x={408}
              y={145}
              width={95}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.behance.net/gallery/16822663/Hidden-part"
              title="Hidden Part"
              x={504}
              y={147}
              width={89}
              height={140}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.artiphany.com/products/kitten-club"
              title="Kitten Club Playing Cards"
              x={593}
              y={147}
              width={104}
              height={144}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/international-style/royal-dollar/"
              title="Playing cards"
              x={697}
              y={149}
              width={94}
              height={142}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.artiphany.com/products/mermaid-playing-cards"
              title="Mermaid Queen Playing Cards"
              x={791}
              y={148}
              width={102}
              height={143}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-151.html"
              title="Державные"
              x={898}
              y={149}
              width={96}
              height={149}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-693.html"
              title="Времена года"
              x={993}
              y={150}
              width={97}
              height={148}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks06/d04208/d04208.htm"
              title="Skat"
              x={1092}
              y={149}
              width={94}
              height={145}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />

            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/classic/salon-karte-66/"
              title="Salon-Karte №66"
              x={1}
              y={287}
              width={96}
              height={144}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/computer-games/pixel-art/"
              title="Pixel Art"
              x={97}
              y={287}
              width={105}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Царик Филипп №3"
              x={202}
              y={287}
              width={101}
              height={148}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm"
              title="Ennia"
              x={305}
              y={292}
              width={94}
              height={143}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Portugal"
              x={398}
              y={291}
              width={101}
              height={144}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1341.html"
              title="Rosina Watchmeister"
              x={499}
              y={289}
              width={96}
              height={145}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1119.html"
              title="Весела політика"
              x={594}
              y={291}
              width={106}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/"
              title="Greek mythology"
              x={700}
              y={291}
              width={103}
              height={146}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/atlasnye2/"
              title="Атласные"
              x={802}
              y={292}
              width={96}
              height={149}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm"
              title="Turkey"
              x={899}
              y={298}
              width={94}
              height={144}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.russcards.com/lapin-cards"
              title="Карты Лапиных"
              x={993}
              y={298}
              width={94}
              height={144}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-445.html"
              title="Исторические"
              x={1089}
              y={294}
              width={97}
              height={149}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />

            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm"
              title="Петергоф"
              x={0}
              y={0}
              width={95}
              height={150}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="https://unitedcardists.com/viewtopic.php?f=8&t=5424"
              title="Pixel Cards"
              x={95}
              y={0}
              width={106}
              height={146}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-272.html"
              title="Московский сувенир"
              x={201}
              y={0}
              width={89}
              height={142}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              title="Spider-Man"
              x={290}
              y={0}
              width={93}
              height={144}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/vsya-vlast/"
              title="Вся власть"
              x={382}
              y={0}
              width={97}
              height={147}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-282.html"
              title="Партия"
              x={479}
              y={0}
              width={92}
              height={144}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-153.html"
              title="Княжеские"
              x={571}
              y={0}
              width={96}
              height={150}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/space-invaders/"
              title="Космические захватчики"
              x={668}
              y={0}
              width={93}
              height={147}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards"
              title="Ephemerid"
              x={761}
              y={0}
              width={105}
              height={147}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              title="Karty do PLAYowania"
              x={866}
              y={0}
              width={95}
              height={146}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              title="Glow-in-the-dark playing cards"
              x={961}
              y={0}
              width={103}
              height={145}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-692.html"
              title="Палех"
              x={1064}
              y={0}
              width={97}
              height={150}
              imgDesktop={playingCards4Imgs.images[1].path}
              imgMobile={playingCards4Imgs.images[0].path}
            />

            {/* row #5 */}
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-137.html"
              title="Лубочные"
              x={0}
              y={0}
              width={141}
              height={222}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard title="Xuebao No. 2000" x={141} y={0} width={155} height={238} />
            <PlayingCard title="Wanshengda 9706" x={295} y={0} width={156} height={238} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-148.html"
              title="Времена года"
              x={455}
              y={0}
              width={154}
              height={234}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Mad night powered by Tabasco sauce"
              x={611}
              y={0}
              width={159}
              height={239}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.russcards.com/modern-style"
              title="Новый стиль"
              x={770}
              y={0}
              width={160}
              height={241}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard title="Playing cards" x={930} y={0} width={173} height={237} />

            <PlayingCard title="Pokemon" x={1269} y={0} width={98} height={150} />
            <PlayingCard title="Русский стиль" x={1674} y={0} width={138} height={222} />

            {/* row #6 */}

            <PlayingCard title="Playing cards" x={327} y={1207} width={153} height={239} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-155.html"
              title="Диана"
              x={480}
              y={1208}
              width={160}
              height={247}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/international-style/international/"
              title="International"
              x={638}
              y={1212}
              width={160}
              height={246}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/mafia/"
              title="Mafia"
              x={796}
              y={1212}
              width={156}
              height={246}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-690.html"
              title="Славянские"
              x={952}
              y={1213}
              width={160}
              height={240}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/"
              title="Русский стиль"
              x={1112}
              y={1217}
              width={158}
              height={240}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />

            {/* row #7 */}
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-700.html"
              title="Майа"
              x={3}
              y={1454}
              width={161}
              height={250}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-737.html"
              title="Рейнские"
              x={165}
              y={1446}
              width={177}
              height={256}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard title="Dubai" x={342} y={1462} width={158} height={241} />
            <PlayingCard
              title="Карти за игра: 55 чудесни изгледа от България"
              x={501}
              y={1461}
              width={159}
              height={243}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-732.html"
              title="Karty do gry № 410"
              x={660}
              y={1464}
              width={161}
              height={239}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="https://wearmedicine.com/p/medicine-karty-do-gry-11788"
              title="Kartу do gry Medicine"
              x={820}
              y={1459}
              width={159}
              height={245}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard title="Playing cards 777" x={979} y={1468} width={157} height={239} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/brosmino-deck/"
              title="Bicycle: Brosmind"
              x={1138}
              y={1466}
              width={172}
              height={244}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/personality/jagellonskie/"
              title="Jagiellońskie"
              x={1310}
              y={1470}
              width={160}
              height={240}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />

            {/* row #8 */}
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/"
              title="Низшие духи восточнославянской мифологии"
              x={0}
              y={1705}
              width={159}
              height={250}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/advertising/science-fiction-1659/"
              title="Sience-Fiction"
              x={160}
              y={1708}
              width={173}
              height={242}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/classic/black-russian-1670/"
              title="Black Russian"
              x={333}
              y={1708}
              width={173}
              height={244}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard title="Thingvellir" x={506} y={1707} width={154} height={242} />
            <PlayingCard
              href="https://wearmedicine.com/p/medicine-karty-do-gry-16905"
              title="Kartу do gry Medicine"
              x={661}
              y={1708}
              width={160}
              height={242}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/luxury/"
              title="Luxury"
              x={820}
              y={1704}
              width={168}
              height={253}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              title="Muzeum Powstania Warszawskiego"
              x={990}
              y={1713}
              width={155}
              height={241}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://dama-pik.com.ua/cards/classic/el-al-airlines/"
              title="EL AL Air Lines"
              x={1146}
              y={1713}
              width={162}
              height={241}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/drawings/romikartya-3/"
              title="Romikartya 3"
              x={1307}
              y={1712}
              width={157}
              height={243}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard title="Zamki w Polsce" x={1465} y={1714} width={155} height={239} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/ethnography/polska-sztuka-ludowa/"
              title="Polska Sztuka Ludowa"
              x={1620}
              y={1714}
              width={158}
              height={242}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1618.html"
              title="Grzyby Polski"
              x={1778}
              y={1711}
              width={158}
              height={245}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
            />

            {/* rest */}
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/humor/gra-wstepna/"
              title="Gra wstępna"
              x={1270}
              y={1197}
              width={187}
              height={269}
              imgDesktop={playingCards1Imgs.images[1].path}
              imgMobile={playingCards1Imgs.images[0].path}
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
