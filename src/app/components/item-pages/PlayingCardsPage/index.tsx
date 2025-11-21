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
import playingCards8Imgs from './playing-cards-row8.png'
import playingCards9Imgs from './playing-cards-row9.png'
import playingCardsXImgs from './playing-cards-unusual.png'

interface Data {
  p1: string
  p2: string
  imgTitle: string
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
              href="https://playingarts.com/special"
              title="Playing Arts: Special Edition"
              x={12}
              y={0}
              width={751}
              height={1024}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Царик Филипп №2"
              x={764.2394}
              y={0}
              width={728.1903}
              height={1045.4218}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/"
              title="Оперные (репринт)"
              x={1492.4297}
              y={0}
              width={713.7707}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/classic-470/"
              title="Karty do gry №490"
              x={2213.4102}
              y={0}
              width={692.1413}
              height={1059.8414}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Greek cats"
              x={2912.7614}
              y={0}
              width={728.1903}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Sweet heart - Nude playing cards"
              x={3648.1615}
              y={0}
              width={728.1903}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Lattjo"
              x={4397.9813}
              y={0}
              width={677.7217}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/belyy-palekh/"
              title="Белый палех"
              x={5082.9128}
              y={0}
              width={670.5119}
              height={1074.261}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/other/gospozha-udacha/"
              title="Госпожа удача"
              x={5767.8443}
              y={0}
              width={692.1413}
              height={1074.261}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/nevskie/"
              title="Невские"
              x={6488.8248}
              y={0}
              width={670.5119}
              height={1081.4708}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Атласные"
              x={7166.5465}
              y={0}
              width={684.9315}
              height={1081.4708}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/army-and-police/komandirskie/"
              title="Командирские"
              x={7858.6878}
              y={0}
              width={699.3511}
              height={1081.4708}
              imgs={playingCards1Imgs}
            />

            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/derzhava/"
              title="Derzhava"
              x={0}
              y={1031.0022}
              width={757.0296}
              height={1038.212}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="One Hundred Dollars"
              href="https://dama-pik.com.ua/cards/standard/one-hundred-dollars/"
              x={757.0296}
              y={1045.4218}
              width={670.5119}
              height={1023.7924}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/jacobs-bible-cards/"
              title="Jacob's Bible Cards"
              x={1427.5415}
              y={1031.0022}
              width={749.8198}
              height={1016.5826}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="100 гадоў БНР"
              x={2184.571}
              y={1059.8414}
              width={757.0296}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/abraxas/"
              title="Abraxas"
              x={2941.6006}
              y={1045.4218}
              width={684.9315}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Hidden Part"
              x={3633.7419}
              y={1059.8414}
              width={641.6727}
              height={1009.3727}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/usa/inky-dinky/kitten-club"
              title="Kitten Club Playing Cards"
              x={4275.4146}
              y={1059.8414}
              width={749.8198}
              height={1038.212}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/international-style/royal-dollar/"
              title="Playing cards"
              x={5025.2343}
              y={1074.261}
              width={677.7217}
              height={1023.7924}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/usa/inky-dinky/mermaid-queen"
              title="Mermaid Queen Playing Cards"
              x={5702.956}
              y={1067.0512}
              width={735.4001}
              height={1031.0022}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/fortune-telling/derzhavnye/"
              title="Державные"
              x={6474.4052}
              y={1074.261}
              width={692.1413}
              height={1074.261}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/vremena-goda+1/"
              title="Времена года"
              x={7159.3367}
              y={1081.4708}
              width={699.3511}
              height={1067.0512}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/karty-do-gry-/"
              title="Skat"
              x={7873.1074}
              y={1074.261}
              width={677.7217}
              height={1045.4218}
              imgs={playingCards1Imgs}
            />

            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/salon-karte-66/"
              title="Salon-Karte №66"
              x={7.2098}
              y={2069.2141}
              width={692.1413}
              height={1038.212}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/computer-games/pixel-art/"
              title="Pixel Art"
              x={699.3511}
              y={2069.2141}
              width={757.0296}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Царик Филипп №3"
              x={1456.3807}
              y={2069.2141}
              width={728.1903}
              height={1067.0512}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm"
              title="Ennia"
              x={2198.9906}
              y={2105.2632}
              width={677.7217}
              height={1031.0022}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Portugal"
              x={2869.5025}
              y={2098.0534}
              width={728.1903}
              height={1038.212}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/rosina-wachtmeister-playing-cards"
              title="Rosina Watchmeister"
              x={3597.6929}
              y={2083.6337}
              width={692.1413}
              height={1045.4218}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/policy/ptn-pnkh-vesela-politika/"
              title="Весела політика"
              x={4282.6244}
              y={2098.0534}
              width={764.2394}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/"
              title="Greek mythology"
              x={5046.8637}
              y={2098.0534}
              width={742.6099}
              height={1052.6316}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/atlasnye2/"
              title="Атласные"
              x={5782.2639}
              y={2105.2632}
              width={692.1413}
              height={1074.261}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm"
              title="Turkey"
              x={6481.615}
              y={2148.522}
              width={677.7217}
              height={1038.212}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.russcards.com/lapin-cards"
              title="Карты Лапиных"
              x={7159.3367}
              y={2148.522}
              width={677.7217}
              height={1038.212}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/suvenirnye-/"
              title="Исторические"
              x={7851.478}
              y={2119.6828}
              width={699.3511}
              height={1074.261}
              imgs={playingCards1Imgs}
            />

            {/* Row #4 */}
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm"
              title="Петергоф"
              x={0}
              y={0}
              width={684.9315}
              height={1081.4708}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://unitedcardists.com/viewtopic.php?f=8&t=5424"
              title="Pixel Cards"
              x={684.9315}
              y={0}
              width={764.2394}
              height={1052.6316}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/moskovskiy-suvenir-reprint/"
              title="Московский сувенир (репринт)"
              x={1449.1709}
              y={0}
              width={641.6727}
              height={1023.7924}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              title="Spider-Man"
              x={2090.8435}
              y={0}
              width={670.5119}
              height={1038.212}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/vsya-vlast/"
              title="Вся власть"
              x={2754.1456}
              y={0}
              width={699.3511}
              height={1059.8414}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/personality/partiya-/"
              title="Партия"
              x={3453.4968}
              y={0}
              width={663.3021}
              height={1038.212}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/knyazheskie/"
              title="Княжеские"
              x={4116.7988}
              y={0}
              width={692.1413}
              height={1081.4708}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/space-invaders/"
              title="Космические захватчики"
              x={4816.15}
              y={0}
              width={670.5119}
              height={1059.8414}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards"
              title="Ephemerid"
              x={5486.6619}
              y={0}
              width={757.0296}
              height={1059.8414}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              title="Karty do PLAYowania"
              x={6243.6914}
              y={0}
              width={684.9315}
              height={1052.6316}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              title="Glow-in-the-dark playing cards"
              x={6928.6229}
              y={0}
              width={742.6099}
              height={1045.4218}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/palekh/"
              title="Палех"
              x={7671.2329}
              y={0}
              width={699.3511}
              height={1081.4708}
              imgs={playingCards4Imgs}
            />

            {/* row #5 */}
            <PlayingCard
              title="Xuebao No. 2000"
              x={0}
              y={0}
              width={670.5119}
              height={1038.212}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Wanshengda 9706"
              x={670.5119}
              y={0}
              width={677.7217}
              height={1038.212}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Времена года (китайский репринт)"
              x={1355.4434}
              y={0}
              width={670.5119}
              height={1031.0022}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Mad night powered by Tabasco sauce"
              x={2025.9553}
              y={0}
              width={692.1413}
              height={1052.6316}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://www.russcards.com/modern-style"
              title="Новый стиль"
              x={2710.8868}
              y={0}
              width={692.1413}
              height={1059.8414}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Playing cards"
              x={3403.0281}
              y={0}
              width={749.8198}
              height={1045.4218}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/suvenirnye-slavyanskie/"
              title="Славянские"
              x={4152.8479}
              y={0}
              width={692.1413}
              height={1074.261}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/othercity/diana/"
              title="Диана"
              x={4844.9892}
              y={0}
              width={684.9315}
              height={1074.261}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/pasyansnye-russkiy-stil5/"
              title="Русский стиль"
              x={5529.9207}
              y={0}
              width={684.9315}
              height={1067.0512}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Playing cards"
              x={6222.062}
              y={0}
              width={670.5119}
              height={1031.0022}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Карти за игра: 55 чудесни изгледа от България"
              x={6892.5739}
              y={0}
              width={684.9315}
              height={1059.8414}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/international-style/international/"
              title="International"
              x={7577.5054}
              y={0}
              width={692.1413}
              height={1074.261}
              imgs={playingCards5Imgs}
            />

            {/* row #6 */}
            <PlayingCard
              href="https://www.artlebedev.ru/mafia/"
              title="Mafia"
              x={0}
              y={0}
              width={677.7217}
              height={1074.261}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/russia/maya"
              title="Майа"
              x={677.7217}
              y={0}
              width={692.1413}
              height={1081.4708}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/poland/rhineland-pattern-by-kzwp"
              title="Рейнские"
              x={1369.863}
              y={0}
              width={764.2394}
              height={1124.7296}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Dubai"
              href="https://dama-pik.com.ua/cards/othercity/dubai+II/"
              x={2134.1024}
              y={0}
              width={684.9315}
              height={1052.6316}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Kartу do gry Medicine"
              x={2819.0339}
              y={0}
              width={692.1413}
              height={1081.4708}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Karty do Gry No.410"
              href="https://www.wopc.co.uk/poland/gaber"
              x={3511.1752}
              y={0}
              width={692.1413}
              height={1045.4218}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Playing cards 777"
              x={4203.3165}
              y={0}
              width={692.1413}
              height={1052.6316}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/brosmino-deck/"
              title="Bicycle: Brosmind"
              x={4895.4578}
              y={0}
              width={749.8198}
              height={1067.0512}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/personality/jagellonskie/"
              title="Jagiellońskie"
              x={5645.2776}
              y={0}
              width={692.1413}
              height={1045.4218}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/"
              title="Низшие духи восточнославянской мифологии"
              x={6337.4189}
              y={0}
              width={677.7217}
              height={1081.4708}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/advertising/science-fiction-1659/"
              title="Sience-Fiction"
              x={7007.9308}
              y={0}
              width={757.0296}
              height={1059.8414}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/black-russian-1670/"
              title="Black Russian"
              x={7764.9603}
              y={0}
              width={757.0296}
              height={1067.0512}
              imgs={playingCards6Imgs}
            />

            {/* row #7 */}
            <PlayingCard title="Thingvellir" x={0} y={0} width={677.7217} height={1059.8414} imgs={playingCards7Imgs} />
            <PlayingCard
              title="Kartу do gry Medicine"
              x={677.7217}
              y={0}
              width={692.1413}
              height={1067.0512}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/luxury/"
              title="Luxury"
              x={1362.6532}
              y={0}
              width={728.1903}
              height={1103.1002}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              title="Muzeum Powstania Warszawskiego"
              x={2098.0534}
              y={0}
              width={670.5119}
              height={1059.8414}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/el-al-airlines/"
              title="EL AL Air Lines"
              x={2768.5652}
              y={0}
              width={699.3511}
              height={1074.261}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/drawings/romikartya-3/"
              title="Romikartya 3"
              x={3467.9164}
              y={0}
              width={677.7217}
              height={1059.8414}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/poland/zamki-w-polsce/"
              title="Zamki w Polsce"
              x={4145.6381}
              y={0}
              width={656.0923}
              height={1023.7924}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/ethnography/polska-sztuka-ludowa/"
              title="Polska Sztuka Ludowa"
              x={4801.7304}
              y={0}
              width={670.5119}
              height={1052.6316}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/flora/grzyby-polski/"
              title="Grzyby Polski"
              x={5472.2422}
              y={0}
              width={684.9315}
              height={1059.8414}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/mythology-and-fantasy/marry-christmas/"
              title="Merry Christmas Playing Cards"
              x={6157.1738}
              y={0}
              width={692.1413}
              height={1059.8414}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/football/warka/"
              title="Warka"
              x={6849.3151}
              y={0}
              width={692.1413}
              height={1067.0512}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/rois-de-france/"
              title="Rois de France"
              x={7548.6662}
              y={0}
              width={749.8198}
              height={1067.0512}
              imgs={playingCards7Imgs}
            />

            {/* row #8 */}
            <PlayingCard title="Roma" x={0} y={0} width={677.7217} height={1059.8414} imgs={playingCards8Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/music/pink-floyd-i/"
              title="Pink Floyd"
              x={684.9315}
              y={0}
              width={742.6099}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/poland/kzwp-kr%C3%B3lewskie"
              title="Królewskie"
              x={1420.3317}
              y={0}
              width={684.9315}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/sunishchabba/bosch-playing-cards-0"
              title="Bosch"
              x={2105.2632}
              y={0}
              width={749.8198}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/sunishchabba/a-motley-pack-transformation-playing-cards"
              title="A Motley Pack"
              x={2862.2927}
              y={0}
              width={757.0296}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/fallisdesign/broken-crowns-playing-cards"
              title="Broken crowns"
              x={3619.3223}
              y={0}
              width={749.8198}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://kubikgames.by/ru/igralnyya-karty-vkl/"
              title="ВКЛ. Часть 1"
              x={4369.142}
              y={0}
              width={670.5119}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/ass/cherie-7022"
              title="Chérie"
              x={5046.8637}
              y={0}
              width={677.7217}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/altenburger-spielkartenfabrik/angler-skat"
              title="Angler Skat"
              x={5731.7952}
              y={0}
              width={677.7217}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/denmark/flying-tiger"
              title="Playing cards"
              x={6409.5169}
              y={0}
              width={677.7217}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              title="ВКЛ. Часть 2"
              x={7087.2386}
              y={0}
              width={677.7217}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.sklep.mleczko.pl/pl/p/Karty-Gra-w-Pana/1612"
              title="Gra w Pana"
              x={7764.9603}
              y={0}
              width={742.6099}
              height={1059.8414}
              imgs={playingCards8Imgs}
            />

            {/* row #9 */}
            <PlayingCard title="Medicine" x={0} y={0} width={706.5609} height={1074.261} imgs={playingCards9Imgs} />
            <PlayingCard
              title="Kamasutra Comic II"
              x={713.7707}
              y={0}
              width={728.1903}
              height={1074.261}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://www.piatnik.com/en/games/playing-cards/design-and-gift/picasso"
              title="Picasso"
              x={1441.9611}
              y={0}
              width={699.3511}
              height={1074.261}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://cardbureau.ru/shop/hi-fi-ciao-2023"
              title="Hi-Fi"
              x={2126.8926}
              y={0}
              width={749.8198}
              height={1045.4218}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://cardbureau.ru/shop/popkart01"
              title="Попкарт"
              x={2876.7123}
              y={0}
              width={757.0296}
              height={1059.8414}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              title="Karty do gry z grafikami z kolekcji Zodiak"
              x={3633.7419}
              y={0}
              width={706.5609}
              height={1059.8414}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://alex-makk.livejournal.com/25552.html"
              title="Русские игральные карты в стиле супрематизма"
              x={4361.9322}
              y={0}
              width={670.5119}
              height={1059.8414}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              title="Darłówko i okolice"
              x={5032.4441}
              y={0}
              width={692.1413}
              height={1074.261}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              title="Nice"
              x={5731.7952}
              y={0}
              width={684.9315}
              height={1059.8414}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/kasztelanskie/"
              title="Mexico 86 (Kasztelanskie)"
              x={6416.7267}
              y={0}
              width={692.1413}
              height={1059.8414}
              imgs={playingCards9Imgs}
            />

            {/* unusual */}
            <PlayingCard
              title="Pokemon"
              x={4239.3655}
              y={0}
              width={418.1687}
              height={656.0923}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/pasyansnye-suvenirnye/"
              title="Рококо"
              x={4167.2675}
              y={1449.1709}
              width={547.9452}
              height={836.3374}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/"
              title="Русский стиль"
              x={3561.6438}
              y={1449.1709}
              width={605.6236}
              height={966.1139}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/lubochnye/"
              title="Лубочные"
              x={2956.0202}
              y={1449.1709}
              width={605.6236}
              height={966.1139}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/humor/gra-wstepna/"
              title="Gra wstępna"
              x={1485.2199}
              y={1254.5061}
              width={800.2884}
              height={1175.1983}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              title="Playing cards"
              x={1499.6395}
              y={0}
              width={1081.4708}
              height={1232.8767}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              title="Царик Филипп №1"
              x={2588.3201}
              y={7.2098}
              width={857.9668}
              height={1218.4571}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/ass/bavarian-single-ended"
              title="Schafkopf Tarock"
              x={2292.7181}
              y={1232.8767}
              width={663.3021}
              height={1204.0375}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              title="Tarot De Luxe"
              x={0}
              y={2249.4593}
              width={735.4001}
              height={1319.3944}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              title="Китайские из Temu"
              x={742.6099}
              y={2249.4593}
              width={454.2177}
              height={1427.5415}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html"
              title="Универсальное таро"
              x={3446.287}
              y={0}
              width={793.0786}
              height={1441.9611}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              title="Playing cards"
              x={0}
              y={0}
              width={1485.2199}
              height={2242.2495}
              imgs={playingCardsXImgs}
            />
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
