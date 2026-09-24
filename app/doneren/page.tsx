import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonationWallets from "./DonationWallets";

export const metadata: Metadata = {
  title: "Doneren | Steun de Jeugd",
  description:
    "Steun Steun de Jeugd Fonds met een donatie via bankoverschrijving of cryptocurrency.",
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

const HeartIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      d="M24 41S6 30.2 6 17.2C6 10.9 10.3 7 15.5 7c3.7 0 6.8 2.1 8.5 5.1C25.7 9.1 28.8 7 32.5 7 37.7 7 42 10.9 42 17.2 42 30.2 24 41 24 41Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
  </svg>
);

/*
  Vul hier later de bankgegevens van de stichting in.

  Bijvoorbeeld:
  const bankIban = "NL00BANK0123456789";
  const bankName = "Steun de Jeugd Fonds";
*/
const bankIban = "";
const bankName = "Steun de Jeugd";

export default function DonatePage() {
  const hasBankDetails = bankIban.trim().length > 0;

  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="Steun de Jeugd home">
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
          <Link href="/#over-ons">Over ons</Link>
          <Link href="/#doelstelling">Doelstelling</Link>
          <Link href="/#focus">Waar we helpen</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <Link className="headerCta donateHeaderActive" href="/doneren">
          Doneren
        </Link>
      </header>

      <section className="donateHero">
        <div className="donateHeroCopy">
          <span className="eyebrow">Samen maken we verschil</span>

          <h1>
            Geef een jongere
            <br />
            een volgende kans.
          </h1>

          <p>
            Met jouw bijdrage help je het Steun de Jeugd fonds om projecten,
            activiteiten en ondersteuning voor jongeren mogelijk te maken.
            Iedere bijdrage, groot of klein, helpt ons verder.
          </p>

          <a className="primaryButton" href="#donatiemogelijkheden">
            Bekijk donatiemogelijkheden
            <ArrowIcon />
          </a>
        </div>

        <div className="donateHeroVisual">

          <Image
            src="/images/headerImage.png"
            alt="Kind verkleed als superheld"
            width={2048}
            height={1365}
            className="donateHeroImage"
            priority
          />

          {/* <div className="donateImpactCard">
            <span className="donateImpactIcon">
              <HeartIcon />
            </span>

            <div>
              <strong>Iedere bijdrage telt</strong>
              <small>Samen investeren we in de toekomst.</small>
            </div>
          </div> */}
        </div>
      </section>

      <section className="donationMethods" id="donatiemogelijkheden">
        <div className="donationSectionHeader">
          <span className="sectionKicker">Donatiemogelijkheden</span>

          <h2>Kies hoe je wilt bijdragen.</h2>

          <p>
            Je kunt Steun de Jeugd Fonds ondersteunen via een
            bankoverschrijving of rechtstreeks met cryptocurrency.
          </p>
        </div>

        <div className="donationMethodGrid">
          <article className="bankDonationCard">
            <span className="donationMethodNumber">01</span>

            <span className="donationMethodType">Bankoverschrijving</span>

            <h3>Doneer rechtstreeks aan de stichting.</h3>

            <p>
              Via een bankoverschrijving kun je rechtstreeks een bijdrage
              overmaken aan Steun de Jeugd Fonds.
            </p>

            {hasBankDetails ? (
              <div className="bankDetails">
                <div className="bankDetailRow">
                  <span>Naam</span>
                  <strong>{bankName}</strong>
                </div>

                <div className="bankDetailRow">
                  <span>IBAN</span>
                  <strong>{bankIban}</strong>
                </div>
              </div>
            ) : (
              <div className="donationPending">
                <span>Bankgegevens</span>
                <strong>Worden binnenkort toegevoegd</strong>
              </div>
            )}
          </article>

          <article className="cryptoDonationIntro">
            <span className="donationMethodNumber">02</span>

            <span className="donationMethodType">Crypto</span>

            <h3>Doneer met cryptocurrency.</h3>

            <p>
              Selecteer hieronder de cryptocurrency waarmee je wilt bijdragen.
              Controleer altijd zorgvuldig het walletadres en het netwerk
              voordat je een transactie verstuurt.
            </p>

            <div className="cryptoIntroNotice">
              <strong>Let op</strong>

              <p>
                Verstuur uitsluitend de aangegeven cryptocurrency via het
                aangegeven netwerk. Cryptotransacties zijn in principe
                onomkeerbaar.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="cryptoSection">
        <div className="cryptoSectionHeader">
          <div>
            <span className="sectionKicker">Crypto wallets</span>

            <h2>Onze donatiewallets.</h2>
          </div>

          <p>
            De walletadressen worden door Steun de Jeugd Fonds beheerd.
            Kopieer altijd het adres rechtstreeks vanaf deze pagina en
            controleer het netwerk voordat je verstuurt.
          </p>
        </div>

        <DonationWallets />
      </section>

      <section className="donationTransparency">
        <div className="donationTransparencyLabel">Transparantie</div>

        <div className="donationTransparencyContent">
          <h2>Jouw bijdrage moet terechtkomen waar die nodig is.</h2>

          <p>
            We willen duidelijk communiceren over de projecten en activiteiten
            waarvoor bijdragen worden ingezet. Naarmate de website verder wordt
            uitgebreid, publiceren we hier meer informatie over projecten,
            bestedingen en resultaten.
          </p>
        </div>
      </section>

      <section className="donationContact">
        <div>
          <span className="sectionKicker light">Vragen over doneren?</span>

          <h2>Neem gerust contact met ons op.</h2>

          <p>
            Heb je een vraag over een donatie, bankoverschrijving,
            cryptotransactie of ontvangstbevestiging? Neem dan contact op met
            Steun de Jeugd Fonds.
          </p>
        </div>

        <a className="lightButton" href="mailto:info@steundejeugd.nl">
          Neem contact op
          <ArrowIcon />
        </a>
      </section>

      <footer className="footer">
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

          <Link href="/#over-ons">Over ons</Link>

          <Link href="/#doelstelling">Doelstelling</Link>

          <Link href="/#focus">Waar we helpen</Link>

          <Link href="/doneren">Doneren</Link>
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

          <span>Steun de Jeugd Fonds</span>
        </div>
      </footer>
    </main>
  );
}
