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
            <PlayingCard title="Царик Филипп №2" x={764} y={0} width={728} height={1044} imgs={playingCards1Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/"
              title="Оперные (репринт)"
              x={1492}
              y={0}
              width={713}
              height={1052}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/classic-470/"
              title="Karty do gry №490"
              x={2213}
              y={0}
              width={692}
              height={1059}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Greek cats" x={2912} y={0} width={728} height={1052} imgs={playingCards1Imgs} />
            <PlayingCard
              title="Sweet heart - Nude playing cards"
              x={3648}
              y={0}
              width={728}
              height={1052}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Lattjo" x={4397} y={0} width={677} height={1052} imgs={playingCards1Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/belyy-palekh/"
              title="Белый палех"
              x={5082}
              y={0}
              width={670}
              height={1074}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/other/gospozha-udacha/"
              title="Госпожа удача"
              x={5767}
              y={0}
              width={692}
              height={1074}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/nevskie/"
              title="Невские"
              x={6488}
              y={0}
              width={670}
              height={1081}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Атласные" x={7166} y={0} width={684} height={1081} imgs={playingCards1Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/army-and-police/komandirskie/"
              title="Командирские"
              x={7858}
              y={0}
              width={699}
              height={1081}
              imgs={playingCards1Imgs}
            />

            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/derzhava/"
              title="Derzhava"
              x={0}
              y={1031}
              width={757}
              height={1038}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="One Hundred Dollars"
              href="https://dama-pik.com.ua/cards/standard/one-hundred-dollars/"
              x={757}
              y={1045}
              width={670}
              height={1023}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/jacobs-bible-cards/"
              title="Jacob's Bible Cards"
              x={1427}
              y={1031}
              width={749}
              height={1016}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="100 гадоў БНР" x={2184} y={1059} width={757} height={1052} imgs={playingCards1Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/abraxas/"
              title="Abraxas"
              x={2941}
              y={1045}
              width={684}
              height={1052}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Hidden Part" x={3633} y={1059} width={641} height={1009} imgs={playingCards1Imgs} />
            <PlayingCard
              href="https://www.wopc.co.uk/usa/inky-dinky/kitten-club"
              title="Kitten Club Playing Cards"
              x={4275}
              y={1059}
              width={749}
              height={1038}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/international-style/royal-dollar/"
              title="Playing cards"
              x={5025}
              y={1074}
              width={677}
              height={1023}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/usa/inky-dinky/mermaid-queen"
              title="Mermaid Queen Playing Cards"
              x={5702}
              y={1067}
              width={735}
              height={1031}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/fortune-telling/derzhavnye/"
              title="Державные"
              x={6474}
              y={1074}
              width={692}
              height={1074}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/vremena-goda+1/"
              title="Времена года"
              x={7159}
              y={1081}
              width={699}
              height={1067}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/karty-do-gry-/"
              title="Skat"
              x={7873}
              y={1074}
              width={677}
              height={1045}
              imgs={playingCards1Imgs}
            />

            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/salon-karte-66/"
              title="Salon-Karte №66"
              x={7}
              y={2069}
              width={692}
              height={1038}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/computer-games/pixel-art/"
              title="Pixel Art"
              x={699}
              y={2069}
              width={757}
              height={1052}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Царик Филипп №3" x={1456} y={2069} width={728} height={1067} imgs={playingCards1Imgs} />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm"
              title="Ennia"
              x={2198}
              y={2105}
              width={677}
              height={1031}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Portugal" x={2869} y={2098} width={728} height={1038} imgs={playingCards1Imgs} />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/rosina-wachtmeister-playing-cards"
              title="Rosina Watchmeister"
              x={3597}
              y={2083}
              width={692}
              height={1045}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/policy/ptn-pnkh-vesela-politika/"
              title="Весела політика"
              x={4282}
              y={2098}
              width={764}
              height={1052}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/"
              title="Greek mythology"
              x={5046}
              y={2098}
              width={742}
              height={1052}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/atlasnye2/"
              title="Атласные"
              x={5782}
              y={2105}
              width={692}
              height={1074}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm"
              title="Turkey"
              x={6481}
              y={2148}
              width={677}
              height={1038}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.russcards.com/lapin-cards"
              title="Карты Лапиных"
              x={7159}
              y={2148}
              width={677}
              height={1038}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/suvenirnye-/"
              title="Исторические"
              x={7851}
              y={2119}
              width={699}
              height={1074}
              imgs={playingCards1Imgs}
            />

            {/* Row #4 */}
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm"
              title="Петергоф"
              x={0}
              y={0}
              width={684}
              height={1081}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://unitedcardists.com/viewtopic.php?f=8&t=5424"
              title="Pixel Cards"
              x={684}
              y={0}
              width={764}
              height={1052}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/moskovskiy-suvenir-reprint/"
              title="Московский сувенир (репринт)"
              x={1449}
              y={0}
              width={641}
              height={1023}
              imgs={playingCards4Imgs}
            />
            <PlayingCard title="Spider-Man" x={2090} y={0} width={670} height={1038} imgs={playingCards4Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/vsya-vlast/"
              title="Вся власть"
              x={2754}
              y={0}
              width={699}
              height={1059}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/personality/partiya-/"
              title="Партия"
              x={3453}
              y={0}
              width={663}
              height={1038}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/knyazheskie/"
              title="Княжеские"
              x={4116}
              y={0}
              width={692}
              height={1081}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/space-invaders/"
              title="Космические захватчики"
              x={4816}
              y={0}
              width={670}
              height={1059}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards"
              title="Ephemerid"
              x={5486}
              y={0}
              width={757}
              height={1059}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              title="Karty do PLAYowania"
              x={6243}
              y={0}
              width={684}
              height={1052}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              title="Glow-in-the-dark playing cards"
              x={6928}
              y={0}
              width={742}
              height={1045}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/palekh/"
              title="Палех"
              x={7671}
              y={0}
              width={699}
              height={1081}
              imgs={playingCards4Imgs}
            />

            {/* row #5 */}
            <PlayingCard title="Xuebao No. 2000" x={0} y={0} width={670} height={1038} imgs={playingCards5Imgs} />
            <PlayingCard title="Wanshengda 9706" x={670} y={0} width={677} height={1038} imgs={playingCards5Imgs} />
            <PlayingCard
              title="Времена года (китайский репринт)"
              x={1355}
              y={0}
              width={670}
              height={1031}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Mad night powered by Tabasco sauce"
              x={2025}
              y={0}
              width={692}
              height={1052}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://www.russcards.com/modern-style"
              title="Новый стиль"
              x={2710}
              y={0}
              width={692}
              height={1059}
              imgs={playingCards5Imgs}
            />
            <PlayingCard title="Playing cards" x={3403} y={0} width={749} height={1045} imgs={playingCards5Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/suvenirnye-slavyanskie/"
              title="Славянские"
              x={4152}
              y={0}
              width={692}
              height={1074}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/othercity/diana/"
              title="Диана"
              x={4844}
              y={0}
              width={684}
              height={1074}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/pasyansnye-russkiy-stil5/"
              title="Русский стиль"
              x={5529}
              y={0}
              width={684}
              height={1067}
              imgs={playingCards5Imgs}
            />
            <PlayingCard title="Playing cards" x={6222} y={0} width={670} height={1031} imgs={playingCards5Imgs} />
            <PlayingCard
              title="Карти за игра: 55 чудесни изгледа от България"
              x={6892}
              y={0}
              width={684}
              height={1059}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/international-style/international/"
              title="International"
              x={7577}
              y={0}
              width={692}
              height={1074}
              imgs={playingCards5Imgs}
            />

            {/* row #6 */}
            <PlayingCard
              href="https://www.artlebedev.ru/mafia/"
              title="Mafia"
              x={0}
              y={0}
              width={677}
              height={1074}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/russia/maya"
              title="Майа"
              x={677}
              y={0}
              width={692}
              height={1081}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/poland/rhineland-pattern-by-kzwp"
              title="Рейнские"
              x={1369}
              y={0}
              width={764}
              height={1124}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Dubai"
              href="https://dama-pik.com.ua/cards/othercity/dubai+II/"
              x={2134}
              y={0}
              width={684}
              height={1052}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Kartу do gry Medicine"
              x={2819}
              y={0}
              width={692}
              height={1081}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              title="Karty do Gry No.410"
              href="https://www.wopc.co.uk/poland/gaber"
              x={3511}
              y={0}
              width={692}
              height={1045}
              imgs={playingCards6Imgs}
            />
            <PlayingCard title="Playing cards 777" x={4203} y={0} width={692} height={1052} imgs={playingCards6Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/otherm/brosmino-deck/"
              title="Bicycle: Brosmind"
              x={4895}
              y={0}
              width={749}
              height={1067}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/personality/jagellonskie/"
              title="Jagiellońskie"
              x={5645}
              y={0}
              width={692}
              height={1045}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/"
              title="Низшие духи восточнославянской мифологии"
              x={6337}
              y={0}
              width={677}
              height={1081}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/advertising/science-fiction-1659/"
              title="Sience-Fiction"
              x={7007}
              y={0}
              width={757}
              height={1059}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/black-russian-1670/"
              title="Black Russian"
              x={7764}
              y={0}
              width={757}
              height={1067}
              imgs={playingCards6Imgs}
            />

            {/* row #7 */}
            <PlayingCard title="Thingvellir" x={0} y={0} width={677} height={1059} imgs={playingCards7Imgs} />
            <PlayingCard
              title="Kartу do gry Medicine"
              x={677}
              y={0}
              width={692}
              height={1067}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/luxury/"
              title="Luxury"
              x={1362}
              y={0}
              width={728}
              height={1103}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              title="Muzeum Powstania Warszawskiego"
              x={2098}
              y={0}
              width={670}
              height={1059}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/el-al-airlines/"
              title="EL AL Air Lines"
              x={2768}
              y={0}
              width={699}
              height={1074}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/drawings/romikartya-3/"
              title="Romikartya 3"
              x={3467}
              y={0}
              width={677}
              height={1059}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/poland/zamki-w-polsce/"
              title="Zamki w Polsce"
              x={4145}
              y={0}
              width={656}
              height={1023}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/ethnography/polska-sztuka-ludowa/"
              title="Polska Sztuka Ludowa"
              x={4801}
              y={0}
              width={670}
              height={1052}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/flora/grzyby-polski/"
              title="Grzyby Polski"
              x={5472}
              y={0}
              width={684}
              height={1059}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/mythology-and-fantasy/marry-christmas/"
              title="Merry Christmas Playing Cards"
              x={6157}
              y={0}
              width={692}
              height={1059}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/football/warka/"
              title="Warka"
              x={6849}
              y={0}
              width={692}
              height={1067}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/rois-de-france/"
              title="Rois de France"
              x={7548}
              y={0}
              width={749}
              height={1067}
              imgs={playingCards7Imgs}
            />

            {/* row #8 */}
            <PlayingCard title="Roma" x={0} y={0} width={677} height={1059} imgs={playingCards8Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/music/pink-floyd-i/"
              title="Pink Floyd"
              x={684}
              y={0}
              width={742}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/poland/kzwp-kr%C3%B3lewskie"
              title="Królewskie"
              x={1420}
              y={0}
              width={684}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/sunishchabba/bosch-playing-cards-0"
              title="Bosch"
              x={2105}
              y={0}
              width={749}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/sunishchabba/a-motley-pack-transformation-playing-cards"
              title="A Motley Pack"
              x={2862}
              y={0}
              width={757}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/fallisdesign/broken-crowns-playing-cards"
              title="Broken crowns"
              x={3619}
              y={0}
              width={749}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://kubikgames.by/ru/igralnyya-karty-vkl/"
              title="ВКЛ. Часть 1"
              x={4369}
              y={0}
              width={670}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/ass/cherie-7022"
              title="Chérie"
              x={5046}
              y={0}
              width={677}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/altenburger-spielkartenfabrik/angler-skat"
              title="Angler Skat"
              x={5731}
              y={0}
              width={677}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/denmark/flying-tiger"
              title="Playing cards"
              x={6409}
              y={0}
              width={677}
              height={1059}
              imgs={playingCards8Imgs}
            />
            <PlayingCard title="ВКЛ. Часть 2" x={7087} y={0} width={677} height={1059} imgs={playingCards8Imgs} />
            <PlayingCard
              href="https://www.sklep.mleczko.pl/pl/p/Karty-Gra-w-Pana/1612"
              title="Gra w Pana"
              x={7764}
              y={0}
              width={742}
              height={1059}
              imgs={playingCards8Imgs}
            />

            {/* row #9 */}
            <PlayingCard title="Medicine" x={0} y={0} width={706} height={1074} imgs={playingCards9Imgs} />
            <PlayingCard title="Kamasutra Comic II" x={713} y={0} width={728} height={1074} imgs={playingCards9Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/international-style/picasso-2235/"
              title="Picasso"
              x={1441}
              y={0}
              width={699}
              height={1074}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://cardbureau.ru/shop/hi-fi-ciao-2023"
              title="Hi-Fi"
              x={2126}
              y={0}
              width={749}
              height={1045}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://cardbureau.ru/shop/popkart01"
              title="Попкарт"
              x={2876}
              y={0}
              width={757}
              height={1059}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              title="Karty do gry z grafikami z kolekcji Zodiak"
              x={3633}
              y={0}
              width={706}
              height={1059}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://alex-makk.livejournal.com/25552.html"
              title="Русские игральные карты в стиле супрематизма"
              x={4361}
              y={0}
              width={670}
              height={1059}
              imgs={playingCards9Imgs}
            />
            <PlayingCard title="Darłówko i okolice" x={5032} y={0} width={692} height={1074} imgs={playingCards9Imgs} />
            <PlayingCard title="Nice" x={5731} y={0} width={684} height={1059} imgs={playingCards9Imgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/classic/kasztelanskie/"
              title="Mexico 86 (Kasztelanskie)"
              x={6416}
              y={0}
              width={692}
              height={1059}
              imgs={playingCards9Imgs}
            />

            {/* unusual */}
            <PlayingCard title="Pokemon" x={4239} y={0} width={418} height={656} imgs={playingCardsXImgs} />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/pasyansnye-suvenirnye/"
              title="Рококо"
              x={4167}
              y={1449}
              width={547}
              height={836}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/"
              title="Русский стиль"
              x={3561}
              y={1449}
              width={605}
              height={966}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/french-suit/lubochnye/"
              title="Лубочные"
              x={2956}
              y={1449}
              width={605}
              height={966}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="https://dama-pik.com.ua/cards/humor/gra-wstepna/"
              title="Gra wstępna"
              x={1485}
              y={1254}
              width={800}
              height={1175}
              imgs={playingCardsXImgs}
            />
            <PlayingCard title="Playing cards" x={1499} y={0} width={1081} height={1232} imgs={playingCardsXImgs} />
            <PlayingCard title="Царик Филипп №1" x={2588} y={7} width={857} height={1218} imgs={playingCardsXImgs} />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/ass/bavarian-single-ended"
              title="Schafkopf Tarock"
              x={2292}
              y={1232}
              width={663}
              height={1204}
              imgs={playingCardsXImgs}
            />
            <PlayingCard title="Tarot De Luxe" x={0} y={2249} width={735} height={1319} imgs={playingCardsXImgs} />
            <PlayingCard
              title="Китайские из Temu"
              x={742}
              y={2249}
              width={454}
              height={1427}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html"
              title="Универсальное таро"
              x={3446}
              y={0}
              width={793}
              height={1441}
              imgs={playingCardsXImgs}
            />
            <PlayingCard title="Playing cards" x={0} y={0} width={1485} height={2242} imgs={playingCardsXImgs} />
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
