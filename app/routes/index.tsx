
import { useEffect } from "react";
import { json, Link, LoaderFunction, useLoaderData } from "remix";
import { getSellers, Seller } from "~/api/seller";
import globalStyles from "~/styles/style.css";

const imageBaseUrl = 'https://ik.imagekit.io/8ddkl3jbn2i/brauerei/';
const generateImagePath = (imageName: string) => {
  return `${imageBaseUrl}${imageName}`;
}

export const loader: LoaderFunction = async () => {
  let sellers: Seller[] = []

  try {
    sellers = await getSellers()
  } catch (error) {
    console.log(error)
  }

  return json(sellers)
}


export const links = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export default function Index() {
  const sellers = useLoaderData <Seller[]>()

  return (
    <>
      <Hero />
      <Products />
      <BrewSeminar />
      <Sellers sellers={sellers} />
      <Team />
    </>
  );
}

const Hero = () => {
  return (
    <>
      <section className="header-image" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${generateImagePath('hero.jpg')})`,
      }}>
        <div className="container logo">
          <img src={generateImagePath('kaegi-logo.png')} className="logo-img" alt="Kägi Bräu" />
          <h3 className="header-subheading">Kägi Bräu</h3>
        </div>
        <div className="container container-center">
          <h1>Genussbiere aus der Region</h1>
          <a href="#sellers" className="btn">Ich habe durst!</a>
        </div>
      </section>
    </>
  );
}

export const Products = () => {
  return (
    <section id="produkte">
      <h2 className="section-heading"> Siebner Biere</h2>
      <div className="container-lg">
        <div className="columns">
          <div className="col-6">
            <img
              // loading="lazy"
              alt=""
              src={generateImagePath('bier-fabrik.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Fabrikbier</h3>
            <p>
              Die Verbindung von Böhmischen Tennenmalz mit Abbey Malz verleiht
              diesem Bier eine feine Bernsteinfarbe und seine aussergewöhnliche
              Geschmacksvielfalt. Die auserlesene Hopfen-Kombination macht
              dieses untergärige Bier zu einem Favoriten unserer Kollektion.
            </p>
          </div>
        </div>

        <div className="columns flex-revers-lg">
          <div className="col-6">
            <img
              // loading="lazy"
              alt=""
              src={generateImagePath('bier-fest.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Festbier</h3>
            <p>
              Ein untergäriges, würzig gehopftes Pilsner mit einer IBU um 20.
              Seine bekömmliche Herbe erfreut den Geniesser und hebt sich
              vollmundig und spritzig ab von leichten Standard Pilsner.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="col-6">
            <img
              loading="lazy"
              alt=""
              src={generateImagePath('bier-weizen.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Weizenbier</h3>
            <p>
              Die milde Hopfenzugabe macht dieses unfiltrierte und naturtrübe
              Weizenbier zu einem dezenten Genuss. Typisch Weizen!
            </p>
          </div>
        </div>
        <div className="columns flex-revers-lg">
          <div className="col-6">
            <img
              loading="lazy"
              alt=""
              src={generateImagePath('bier-himbeer.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Himbeere-Weizen</h3>
            <p>
              Die beschwingte Himbeeren-Note im Bouquet ist unverwechselbar,
              doch wer ein süsses Getränk erwartet, spürt schon beim ersten
              Schluck: Ein echtes Bier, und dank der leichten Fruchtsäure ein
              herrlicher Durstlöscher.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="col-6">
            <img
              loading="lazy"
              alt=""
              src={generateImagePath('bier-roggen.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Roggen Datteln</h3>
            <p>
              Die Kombination von Roggenmalz mit dem Extrakt der Medjool
              Bio-Dattel machen dieses Bier zu einem urtümlichen und
              unvergleichbaren Genussbier. Unfiltriert und naturtrüb bietet es
              mit seinen Roggenaromen und dem Hefesediment einen sehr weichen
              und geschmeidigen Trinkgenuss. Passt perfekt zu einem guten Stück
              Fleisch.
            </p>
          </div>
        </div>

        <div className="columns flex-revers-lg">
          <div className="col-6">
            <img
              loading="lazy"
              alt=""
              src={generateImagePath('bier-gewuerz.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Gewürzbier</h3>
            <p>
              Diese aromatische Kreation birgt feinste Noten von auserlesenen
              Gewürzen: Kardamom, Muskatnuss, Nelken, Orangenschalen und einen
              feinen Hauch von Zimt. Ein Bier passend zum Abschluss eines
              erfolgreichen Tages.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="col-6">
            <img
              loading="lazy"
              alt=""
              src={generateImagePath('bier-rauch.jpg')}
              className="product-image"
            />
          </div>
          <div className="container py-2 px-lg-2 col-6">
            <h3>Rauchbier</h3>
            <p>
              Dieses speziell mit Buchenrauchmalz gebraute Bier entfaltet ein
              herrliches, rauchiges Bouquet. Es erinnert im Geschmack an den
              Duft von Speck oder Schinken und passt vorzüglich zu Käse, Salsiz,
              und vielen weiteren Trockenfleischvariationen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const BrewSeminar = () => {
  return (
    <section id="#brau-seminar">
      <h2 className="section-heading">Brauseminare</h2>
      <div className="columns container-lg">
        <div className="col-6">
          <img
            loading="lazy"
            alt=""
            src={generateImagePath('brau-kurs.jpg')}
            className="seminar-image"
          />
        </div>
        <div className="container py-2 px-lg-2 col-6">
          <h3>Brau dein eigenes Bier</h3>
          <p>
            Möchten Sie Ihr eigenes Bier brauen und das Brau-Handwerk in
            geselliger Runde live erleben? Möchten Sie als aktiver Brauer den
            gesamten Brau- gang begleiten und dabei die verschiedenen Bier-
            sorten verkosten?
          </p>
          <p>
            Für Firmen, Vereine oder Private bietet sich vor Ort dazu die beste
            Gelegenheit. (5 bis max. 15 Personen). Kursunterlagen, Getränke und
            ein kleiner Snack sind im Kurs inbegriffen.
          </p>
          <p> Dauer: ca. 6 Stunden </p>
          <p> Kosten: CHF 100 / Person </p>
        </div>
      </div>
    </section>
  );
}

const SellerItem = ({seller}: {seller: Seller}) => {
  return (
    <div className="seller-item">
      <h3 className="seller-heading">{seller.name}</h3>
      <div className="seller-address" style={{ whiteSpace: 'pre-line'}}>
        {seller.description}
      </div>
    </div>
  )

}

const Sellers = ({sellers}:{sellers: Seller[]}) => {  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log({sellers})
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [sellers])
  return (
    <section id="sellers">
      <h2 className="section-heading">Verkaufsstellen</h2>

      <div className="columns container sellers">
        {sellers?.map(item => <SellerItem key={item.id} seller={item} />)}
      </div>
    </section>
  );
}


const Team = () => {
  return (
    <section id="#team" className="team">
      <h2 className="section-heading">Team</h2>
      <div className="container profiles">
        <div className="profile-item">
          <img
            className="profile-img"
            loading="lazy"
            alt=""
            // className="img-profile"
            src={generateImagePath(`team-laurence.jpg`)}
          />
          <h3 className="profile-name">Laurence Kägi</h3>
          <p className="profile-position">Brauer</p>
        </div>
        <div className="profile-item">
          <img
            className="profile-img"
            loading="lazy"
            alt=""
            // className="img-profile"
            src={generateImagePath(`team-christoph.jpg`)}
          />
          <h3 className="profile-name">Christoph Kägi</h3>
          <p className="profile-position">Brauer</p>
        </div>
        <div className="profile-item">
          <img
            className="profile-img"
            loading="lazy"
            alt=""
            // className="img-profile"
            src={generateImagePath(`team-irene.jpg`)}
          />
          <h3 className="profile-name">Irene Kägi</h3>
          <p className="profile-position">Finanzen</p>
        </div>
      </div>
      <div className="container">
        <div className="team-description">
          <p>
            Der Anstoss für das erste Bier war die Berufsmaturaarbeit von
            Laurence mit dem Titel; Hopfen und Malz verloren. Die Begeisterung
            am Brauen in unserem Gartenschopf entwickelte sich danach
            kontinuierlich beim Ausprobieren verschiedenster Rezepturen. Durch
            praxisorientiertes Arbeiten am Produkt erlangten wir unser
            Grundwissen.
          </p>
          <p>
            Die verblüffenden Bierkreationen, welche wir in kleinen Serien in
            unserem Gartenschopf brauten und die vielen ermutigenden
            Rückmeldungen im Freundeskreis veranlassten Vater und Sohn eine
            Mikro Brauerei zu eröffnen.
          </p>
        </div>
      </div>
    </section>
  );
}


