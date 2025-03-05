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
              href="https://playingarts.com/ru/special?utm_source=tema&utm_medium=banner&utm_campaign=300x300"
              title="Playing Arts: Special Edition"
              x={1}
              y={0}
              width={105}
              height={142}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Царик Филипп №2" x={106} y={0} width={101} height={145} imgs={playingCards1Imgs} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/opernye-teatralnye-reprint-1974g-/"
              title="Оперные (репринт)"
              x={207}
              y={0}
              width={99}
              height={146}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/classic-470/"
              title="Karty do gry №490"
              x={307}
              y={0}
              width={96}
              height={147}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Greek cats" x={404} y={0} width={101} height={146} imgs={playingCards1Imgs} />
            <PlayingCard title="Nude playing cards" x={506} y={0} width={101} height={146} imgs={playingCards1Imgs} />
            <PlayingCard title="Lattjo" x={610} y={0} width={94} height={146} imgs={playingCards1Imgs} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-667.html"
              title="Белый палех"
              x={705}
              y={0}
              width={93}
              height={149}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-154.html"
              title="Госпожа удача"
              x={800}
              y={0}
              width={96}
              height={149}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-701.html"
              title="Невские"
              x={900}
              y={0}
              width={93}
              height={150}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-133.html"
              title="Атласные"
              x={994}
              y={0}
              width={95}
              height={150}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-152.html"
              title="Командирские"
              x={1090}
              y={0}
              width={97}
              height={150}
              imgs={playingCards1Imgs}
            />

            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/derzhava/"
              title="Derzhava"
              x={0}
              y={143}
              width={105}
              height={144}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              title="Playing Cards Dollar"
              x={105}
              y={145}
              width={93}
              height={142}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-637.html"
              title="Jacob's Bible Cards"
              x={198}
              y={143}
              width={104}
              height={141}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1607.html"
              title="100 гадоў БНР"
              x={303}
              y={147}
              width={105}
              height={146}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/abraxas/"
              title="Abraxas"
              x={408}
              y={145}
              width={95}
              height={146}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.behance.net/gallery/16822663/Hidden-part"
              title="Hidden Part"
              x={504}
              y={147}
              width={89}
              height={140}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.artiphany.com/products/kitten-club"
              title="Kitten Club Playing Cards"
              x={593}
              y={147}
              width={104}
              height={144}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/international-style/royal-dollar/"
              title="Playing cards"
              x={697}
              y={149}
              width={94}
              height={142}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.artiphany.com/products/mermaid-playing-cards"
              title="Mermaid Queen Playing Cards"
              x={791}
              y={148}
              width={102}
              height={143}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-151.html"
              title="Державные"
              x={898}
              y={149}
              width={96}
              height={149}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-693.html"
              title="Времена года"
              x={993}
              y={150}
              width={97}
              height={148}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks06/d04208/d04208.htm"
              title="Skat"
              x={1092}
              y={149}
              width={94}
              height={145}
              imgs={playingCards1Imgs}
            />

            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/classic/salon-karte-66/"
              title="Salon-Karte №66"
              x={1}
              y={287}
              width={96}
              height={144}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/computer-games/pixel-art/"
              title="Pixel Art"
              x={97}
              y={287}
              width={105}
              height={146}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Царик Филипп №3" x={202} y={287} width={101} height={148} imgs={playingCards1Imgs} />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks04/d03409/d03409.htm"
              title="Ennia"
              x={305}
              y={292}
              width={94}
              height={143}
              imgs={playingCards1Imgs}
            />
            <PlayingCard title="Portugal" x={398} y={291} width={101} height={144} imgs={playingCards1Imgs} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1341.html"
              title="Rosina Watchmeister"
              x={499}
              y={289}
              width={96}
              height={145}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1119.html"
              title="Весела політика"
              x={594}
              y={291}
              width={106}
              height={146}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/mythology-and-fantasy/greek-mythology+2/"
              title="Greek mythology"
              x={700}
              y={291}
              width={103}
              height={146}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/atlasnye2/"
              title="Атласные"
              x={802}
              y={292}
              width={96}
              height={149}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/WWPCM/Turkey0.htm"
              title="Turkey"
              x={899}
              y={298}
              width={94}
              height={144}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="https://www.russcards.com/lapin-cards"
              title="Карты Лапиных"
              x={993}
              y={298}
              width={94}
              height={144}
              imgs={playingCards1Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-445.html"
              title="Исторические"
              x={1089}
              y={294}
              width={97}
              height={149}
              imgs={playingCards1Imgs}
            />

            {/* Row #4 */}
            <PlayingCard
              href="http://www.a.trionfi.eu/WWPCM/decks/d00150/d00150.htm"
              title="Петергоф"
              x={0}
              y={0}
              width={95}
              height={150}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://unitedcardists.com/viewtopic.php?f=8&t=5424"
              title="Pixel Cards"
              x={95}
              y={0}
              width={106}
              height={146}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-272.html"
              title="Московский сувенир"
              x={201}
              y={0}
              width={89}
              height={142}
              imgs={playingCards4Imgs}
            />
            <PlayingCard title="Spider-Man" x={290} y={0} width={93} height={144} imgs={playingCards4Imgs} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/vsya-vlast/"
              title="Вся власть"
              x={382}
              y={0}
              width={97}
              height={147}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-282.html"
              title="Партия"
              x={479}
              y={0}
              width={92}
              height={144}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-153.html"
              title="Княжеские"
              x={571}
              y={0}
              width={96}
              height={150}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://www.artlebedev.ru/space-invaders/"
              title="Космические захватчики"
              x={668}
              y={0}
              width={93}
              height={147}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/1495552219/ephemerid-playing-cards"
              title="Ephemerid"
              x={761}
              y={0}
              width={105}
              height={147}
              imgs={playingCards4Imgs}
            />
            <PlayingCard title="Karty do PLAYowania" x={866} y={0} width={95} height={146} imgs={playingCards4Imgs} />
            <PlayingCard
              title="Glow-in-the-dark playing cards"
              x={961}
              y={0}
              width={103}
              height={145}
              imgs={playingCards4Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-692.html"
              title="Палех"
              x={1064}
              y={0}
              width={97}
              height={150}
              imgs={playingCards4Imgs}
            />

            {/* row #5 */}
            <PlayingCard title="Xuebao No. 2000" x={0} y={0} width={93} height={144} imgs={playingCards5Imgs} />
            <PlayingCard title="Wanshengda 9706" x={93} y={0} width={94} height={144} imgs={playingCards5Imgs} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-148.html"
              title="Времена года"
              x={188}
              y={0}
              width={93}
              height={143}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              title="Mad night powered by Tabasco sauce"
              x={281}
              y={0}
              width={96}
              height={146}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="https://www.russcards.com/modern-style"
              title="Новый стиль"
              x={376}
              y={0}
              width={96}
              height={147}
              imgs={playingCards5Imgs}
            />
            <PlayingCard title="Playing cards" x={472} y={0} width={104} height={145} imgs={playingCards5Imgs} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-690.html"
              title="Славянские"
              x={576}
              y={0}
              width={96}
              height={149}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-155.html"
              title="Диана"
              x={672}
              y={0}
              width={95}
              height={149}
              imgs={playingCards5Imgs}
            />
            <PlayingCard title="Русский стиль" x={767} y={0} width={95} height={148} imgs={playingCards5Imgs} />
            <PlayingCard title="Playing cards" x={863} y={0} width={93} height={143} imgs={playingCards5Imgs} />
            <PlayingCard
              title="Карти за игра: 55 чудесни изгледа от България"
              x={956}
              y={0}
              width={95}
              height={147}
              imgs={playingCards5Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/international-style/international/"
              title="International"
              x={1051}
              y={0}
              width={96}
              height={149}
              imgs={playingCards5Imgs}
            />

            {/* row #6 */}
            <PlayingCard
              href="https://www.artlebedev.ru/mafia/"
              title="Mafia"
              x={0}
              y={0}
              width={94}
              height={149}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-700.html"
              title="Майа"
              x={94}
              y={0}
              width={96}
              height={150}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-737.html"
              title="Рейнские"
              x={190}
              y={0}
              width={106}
              height={156}
              imgs={playingCards6Imgs}
            />
            <PlayingCard title="Dubai" x={296} y={0} width={95} height={146} imgs={playingCards6Imgs} />
            <PlayingCard
              href="https://wearmedicine.com/p/medicine-karty-do-gry-11788"
              title="Kartу do gry Medicine"
              x={391}
              y={0}
              width={96}
              height={150}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-732.html"
              title="Karty do gry № 410"
              x={487}
              y={0}
              width={96}
              height={145}
              imgs={playingCards6Imgs}
            />
            <PlayingCard title="Playing cards 777" x={583} y={0} width={96} height={146} imgs={playingCards6Imgs} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/otherm/brosmino-deck/"
              title="Bicycle: Brosmind"
              x={679}
              y={0}
              width={104}
              height={148}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/personality/jagellonskie/"
              title="Jagiellońskie"
              x={783}
              y={0}
              width={96}
              height={145}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/mythology-and-fantasy/nizshie-dukhi-vostochnoslavyanskoy-mifologii-var-3/"
              title="Низшие духи восточнославянской мифологии"
              x={879}
              y={0}
              width={94}
              height={150}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/advertising/science-fiction-1659/"
              title="Sience-Fiction"
              x={972}
              y={0}
              width={105}
              height={147}
              imgs={playingCards6Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/classic/black-russian-1670/"
              title="Black Russian"
              x={1077}
              y={0}
              width={105}
              height={148}
              imgs={playingCards6Imgs}
            />

            {/* row #7 */}
            <PlayingCard title="Thingvellir" x={0} y={0} width={94} height={147} imgs={playingCards7Imgs} />
            <PlayingCard
              href="https://wearmedicine.com/p/medicine-karty-do-gry-16905"
              title="Kartу do gry Medicine"
              x={94}
              y={0}
              width={96}
              height={148}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/luxury/"
              title="Luxury"
              x={189}
              y={0}
              width={101}
              height={153}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              title="Muzeum Powstania Warszawskiego"
              x={291}
              y={0}
              width={93}
              height={147}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://dama-pik.com.ua/cards/classic/el-al-airlines/"
              title="EL AL Air Lines"
              x={384}
              y={0}
              width={97}
              height={149}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/drawings/romikartya-3/"
              title="Romikartya 3"
              x={481}
              y={0}
              width={94}
              height={147}
              imgs={playingCards7Imgs}
            />
            <PlayingCard title="Zamki w Polsce" x={575} y={0} width={91} height={142} imgs={playingCards7Imgs} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/ethnography/polska-sztuka-ludowa/"
              title="Polska Sztuka Ludowa"
              x={666}
              y={0}
              width={93}
              height={146}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1618.html"
              title="Grzyby Polski"
              x={759}
              y={0}
              width={95}
              height={147}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://dama-pik.com.ua/cards/mythology-and-fantasy/marry-christmas/"
              title="Merry Christmas Playing Cards"
              x={854}
              y={0}
              width={96}
              height={147}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-397.html"
              title="Warka"
              x={950}
              y={0}
              width={96}
              height={148}
              imgs={playingCards7Imgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/french-suit/rois-de-france/"
              title="Rois de France"
              x={1047}
              y={0}
              width={104}
              height={148}
              imgs={playingCards7Imgs}
            />

            {/* row #8 */}
            <PlayingCard title="Roma" x={0} y={0} width={94} height={147} imgs={playingCards8Imgs} />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/music/pink-floyd-i/"
              title="Pink Floyd"
              x={95}
              y={0}
              width={103}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard title="Królewskie" x={197} y={0} width={95} height={147} imgs={playingCards8Imgs} />
            <PlayingCard
              href="https://www.kickstarter.com/projects/sunishchabba/bosch-playing-cards-0"
              title="Bosch"
              x={292}
              y={0}
              width={104}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/sunishchabba/a-motley-pack-transformation-playing-cards"
              title="A Motley Pack"
              x={397}
              y={0}
              width={105}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.kickstarter.com/projects/fallisdesign/broken-crowns-playing-cards"
              title="Broken crowns"
              x={502}
              y={0}
              width={104}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://oz.by/boardgames/more101057990.html"
              title="ВКЛ. Часть 1"
              x={606}
              y={0}
              width={93}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/ass/cherie-7022"
              title="Chérie"
              x={700}
              y={0}
              width={94}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.wopc.co.uk/germany/altenburger-spielkartenfabrik/angler-skat"
              title="Angler Skat"
              x={795}
              y={0}
              width={94}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://flyingtiger.com/products/playing-cards-3033003"
              title="Playing cards"
              x={889}
              y={0}
              width={94}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://oz.by/boardgames/more101102548.html"
              title="ВКЛ. Часть 2"
              x={983}
              y={0}
              width={94}
              height={147}
              imgs={playingCards8Imgs}
            />
            <PlayingCard
              href="https://www.sklep.mleczko.pl/pl/p/Karty-Gra-w-Pana/1612"
              title="Gra w Pana"
              x={1077}
              y={0}
              width={103}
              height={147}
              imgs={playingCards8Imgs}
            />

            {/* row #9 */}
            <PlayingCard
              href="https://wearmedicine.com/p/karty-do-gry-z-grafikami-kolor-multicolor-1020329"
              title="Medicine"
              x={0}
              y={0}
              width={98}
              height={149}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://shop.ootb.de/en/love/erotic-items-/playing-cards-kamasutra-comic-ii-61-2748"
              title="Kamasutra Comic II"
              x={99}
              y={0}
              width={101}
              height={149}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://www.piatnik.com/en/games/playing-cards/design-and-gift/picasso"
              title="Picasso"
              x={200}
              y={0}
              width={97}
              height={149}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://cardbureau.ru/shop/hi-fi-ciao-2023"
              title="Hi-Fi"
              x={295}
              y={0}
              width={104}
              height={145}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://cardbureau.ru/shop/popkart01"
              title="Попкарт"
              x={399}
              y={0}
              width={105}
              height={147}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://wearmedicine.com/p/karty-do-gry-z-grafikami-z-kolekcji-zodiak-1026784"
              title="Karty do gry z grafikami z kolekcji Zodiak"
              x={504}
              y={0}
              width={98}
              height={147}
              imgs={playingCards9Imgs}
            />
            <PlayingCard
              href="https://alex-makk.livejournal.com/25552.html"
              title="Русские игральные карты в стиле супрематизма"
              x={605}
              y={0}
              width={93}
              height={147}
              imgs={playingCards9Imgs}
            />

            {/* unusual */}
            <PlayingCard title="Pokemon" x={588} y={0} width={58} height={91} imgs={playingCardsXImgs} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-694.html"
              title="Рококо"
              x={578}
              y={201}
              width={76}
              height={116}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/russian-motifs/igralnye-karty-vysshiy-sort-russkiy-stil/"
              title="Русский стиль"
              x={494}
              y={201}
              width={84}
              height={134}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-137.html"
              title="Лубочные"
              x={410}
              y={201}
              width={84}
              height={134}
              imgs={playingCardsXImgs}
            />
            <PlayingCard
              href="http://www.dama-pik.com.ua/cards/humor/gra-wstepna/"
              title="Gra wstępna"
              x={206}
              y={174}
              width={111}
              height={163}
              imgs={playingCardsXImgs}
            />
            <PlayingCard title="Playing cards" x={208} y={0} width={150} height={171} imgs={playingCardsXImgs} />
            <PlayingCard title="Царик Филипп №1" x={359} y={1} width={119} height={169} imgs={playingCardsXImgs} />
            <PlayingCard
              href="http://www.ukrcards.com.ua/product-1503.html"
              title="Schafkopf Tarock"
              x={318}
              y={171}
              width={92}
              height={167}
              imgs={playingCardsXImgs}
            />
            <PlayingCard title="Tarot De Luxe" x={0} y={312} width={102} height={183} imgs={playingCardsXImgs} />
            <PlayingCard
              href="http://nacekomie.ru/hachette/enciklopediya-taro-ashet-kollekciya.html"
              title="Универсальное таро"
              x={478}
              y={0}
              width={110}
              height={200}
              imgs={playingCardsXImgs}
            />
            <PlayingCard title="Playing cards" x={0} y={0} width={206} height={311} imgs={playingCardsXImgs} />
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
