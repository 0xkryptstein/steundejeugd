import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons | Steun de Jeugd Fonds",
  description:
    "Lees het verhaal van Steun de Jeugd Fonds, opgericht begin 2014 met als doel een betere toekomst voor de jeugd.",
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      d="M8 39 20 27l7 7 13-18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31 16h9v9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommunityIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle
      cx="18"
      cy="17"
      r="6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    <circle
      cx="33"
      cy="19"
      r="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    <path
      d="M7 38c0-7 4.8-11 11-11s11 4 11 11M27 29c1.6-1.4 3.5-2 5.8-2 5.1 0 8.2 3.6 8.2 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      d="M24 5 39 11v11c0 10-6 17-15 21-9-4-15-11-15-21V11l15-6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    <path
      d="m17 24 5 5 10-11"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AboutPage() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="Steun de Jeugd Fonds home">
          <Image
            src="/images/logo.png"
            alt="Steun de Jeugd"
            width={521}
            height={104}
            className="brandLogo"
            priority
          />
        </Link>

        <nav className="nav" aria-label="Hoofdnavigatie">
          <Link href="/over-ons">Over ons</Link>
          <Link href="/#missie-visie">Missie &amp; visie</Link>
          <Link href="/#doelstelling">Doelstelling</Link>
          <Link href="/#focus">Waar we helpen</Link>
          <Link href="/#fonds">Steun het fonds</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <Link className="headerCta" href="/doneren">
          Doneren
        </Link>
      </header>

      {/* HERO */}
      <section className="aboutHero">
        <div className="aboutHeroCopy">
          <span className="eyebrow">Over het fonds</span>

          <h1>
            Al sinds 2014
            <br />
            met één doel:
            <br />
            de jeugd vooruit.
          </h1>

          <p>
            Stichting Steun de Jeugd is begin 2014 opgericht met als doel een
            betere toekomst voor de jeugd. Sindsdien vormt die doelstelling de
            basis voor alles waar de stichting voor staat.
          </p>

          <div className="aboutHeroActions">
            <Link className="primaryButton" href="/#doelstelling">
              Bekijk onze doelstelling
              <ArrowIcon />
            </Link>

            <Link className="textLink" href="/#missie-visie">
              Missie &amp; visie
            </Link>
          </div>
        </div>

        <div className="aboutHeroVisual">
          <Image
            src="/images/headerImage.png"
            alt="Kind verkleed als superheld"
            width={2048}
            height={1365}
            className="aboutHeroImage"
            priority
          />

          <div className="aboutSinceCard">
            <span>Opgericht</span>
            <strong>2014</strong>
            <small>Voor een betere toekomst voor de jeugd.</small>
          </div>
        </div>
      </section>

      {/* INTRO STORY */}
      <section className="aboutStory">
        <div className="aboutStoryLabel">
          <span className="sectionKicker">Ons verhaal</span>
        </div>

        <div className="aboutStoryContent">
          <h2>
            Een stichting gebouwd rondom kansen, ontwikkeling en perspectief.
          </h2>

          <p className="aboutStoryLead">
            Steun de Jeugd ontstond vanuit een eenvoudige maar belangrijke
            overtuiging: jongeren verdienen mogelijkheden om zich te ontwikkelen
            en aan hun toekomst te bouwen.
          </p>

          <div className="aboutStoryColumns">
            <p>
              Niet iedere jongere groeit op met dezelfde middelen, ondersteuning
              of kansen. Juist daarom wil de stichting ruimte creëren voor
              projecten en activiteiten die jongeren helpen groeien, leren,
              ontdekken en deelnemen aan de samenleving.
            </p>

            <p>
              Die inzet kan verschillende vormen aannemen. Van educatie,
              workshops en culturele projecten tot sport, preventie,
              maatschappelijke ondersteuning, opvang en het beschikbaar stellen
              van educatiematerialen.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="aboutPrinciples">
        <div className="aboutPrinciplesHeader">
          <span className="sectionKicker light">Waar we voor staan</span>

          <h2>Jongeren moeten ruimte krijgen om vooruit te kijken.</h2>
        </div>

        <div className="aboutPrinciplesGrid">
          <article className="aboutPrincipleCard">
            <span className="aboutPrincipleNumber">01</span>

            <div className="aboutPrincipleIcon">
              <GrowthIcon />
            </div>

            <h3>Kansen creëren</h3>

            <p>
              Jongeren ondersteunen bij het ontdekken en ontwikkelen van hun
              talenten, vaardigheden en mogelijkheden.
            </p>
          </article>

          <article className="aboutPrincipleCard aboutPrincipleFeatured">
            <span className="aboutPrincipleNumber">02</span>

            <div className="aboutPrincipleIcon">
              <CommunityIcon />
            </div>

            <h3>Verbinding versterken</h3>

            <p>
              Jongeren, organisaties en gemeenschappen samenbrengen om
              mogelijkheden te creëren die individueel moeilijker bereikbaar
              zijn.
            </p>
          </article>

          <article className="aboutPrincipleCard">
            <span className="aboutPrincipleNumber">03</span>

            <div className="aboutPrincipleIcon">
              <ShieldIcon />
            </div>

            <h3>Veiligheid &amp; perspectief</h3>

            <p>
              Bijdragen aan een omgeving waarin jongeren zich kunnen
              ontwikkelen, ondersteuning kunnen vinden en vooruit kunnen kijken.
            </p>
          </article>
        </div>
      </section>

      {/* THEN / NOW / FUTURE */}
      <section className="aboutJourney">
        <div className="aboutJourneyHeading">
          <span className="sectionKicker">Onze ontwikkeling</span>

          <h2>Van oprichting naar een fonds dat verder wil bouwen.</h2>
        </div>

        <div className="aboutJourneyGrid">
          <article className="journeyItem">
            <span className="journeyYear">2014</span>

            <div>
              <h3>De stichting wordt opgericht</h3>

              <p>
                Stichting Steun de Jeugd wordt begin 2014 opgericht met als doel
                een betere toekomst voor de jeugd.
              </p>
            </div>
          </article>

          <article className="journeyItem">
            <span className="journeyYear">Vandaag</span>

            <div>
              <h3>De basis verder versterken</h3>

              <p>
                Met Steun de Jeugd Fonds bouwen we verder aan een herkenbaar
                platform voor projecten, ondersteuning, fondsenwerving en
                samenwerking rond jongeren.
              </p>
            </div>
          </article>

          <article className="journeyItem journeyFuture">
            <span className="journeyYear">Toekomst</span>

            <div>
              <h3>Duurzame impact opbouwen</h3>

              <p>
                Onze ambitie is om steeds meer projecten mogelijk te maken,
                samenwerkingen op te bouwen en helder te laten zien welke impact
                bijdragen hebben op jongeren en hun omgeving.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* LONG TERM */}
      <section className="aboutFuture">
        <div className="aboutFutureLeft">
          <span className="sectionKicker">Onze ambitie</span>

          <h2>Niet alleen helpen voor vandaag, maar bouwen voor morgen.</h2>
        </div>

        <div className="aboutFutureRight">
          <p>
            Op langere termijn wil Steun de Jeugd Fonds uitgroeien tot een
            herkenbaar en transparant platform waar jongeren, scholen,
            organisaties, bedrijven en donateurs elkaar kunnen vinden.
          </p>

          <p>
            We willen projecten ondersteunen die aantoonbaar bijdragen aan
            ontwikkeling, participatie, veiligheid en perspectief. Daarbij
            willen we steeds duidelijker communiceren over wat we doen, welke
            middelen beschikbaar zijn en welke resultaten daarmee worden
            bereikt.
          </p>

          <p>
            Groei is voor ons geen doel op zichzelf. Het gaat erom dat meer
            jongeren daadwerkelijk toegang krijgen tot mogelijkheden die hun
            toekomst kunnen versterken.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="aboutCta">
        <div>
          <span className="sectionKicker light">
            Samen bouwen aan de toekomst
          </span>

          <h2>Wil je bijdragen aan wat we willen opbouwen?</h2>

          <p>
            Bekijk onze doelstellingen, volg onze projecten of steun het fonds
            met een bijdrage.
          </p>
        </div>

        <div className="aboutCtaActions">
          <Link className="lightButton" href="/doneren">
            Steun het fonds
            <ArrowIcon />
          </Link>

          <Link className="aboutCtaLink" href="/#doelstelling">
            Bekijk de doelstelling
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footerBrand">
          <Link
            className="footerBrandLink"
            href="/"
            aria-label="Steun de Jeugd home"
          >
            <Image
              src="/images/logo.png"
              alt="Steun de Jeugd"
              width={521}
              height={104}
              className="footerLogo"
            />
          </Link>

          <p>Geef vuur aan de toekomst, steun de jeugd.</p>
        </div>

        <div className="footerColumn">
          <strong>Navigatie</strong>

          <Link href="/over-ons">Over ons</Link>
          <Link href="/#missie-visie">Missie &amp; visie</Link>
          <Link href="/#doelstelling">Doelstelling</Link>
          <Link href="/#focus">Waar we helpen</Link>
          <Link href="/#fonds">Steun het fonds</Link>
        </div>

        <div className="footerColumn">
          <strong>Community</strong>

          <a href="#">X (Twitter)</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>

        <div className="footerColumn">
          <strong>Contact</strong>

          <a href="mailto:info@steundejeugd.nl">info@steundejeugd.nl</a>

          <span>Nederland</span>
        </div>

        <div className="footerBottom">
          <span>© 2026 Steun de Jeugd Fonds</span>
          <span>Een initiatief van Stichting Steun de Jeugd</span>
        </div>
      </footer>
    </main>
  );
}
