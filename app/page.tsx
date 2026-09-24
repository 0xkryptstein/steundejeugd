import Image from "next/image";

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

const EducationIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      d="m5 18 19-9 19 9-19 9-19-9Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    <path
      d="M12 22v10c5.5 5.5 18.5 5.5 24 0V22M43 18v14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const SportIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle
      cx="24"
      cy="24"
      r="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    />

    <path
      d="m24 14 7 5-2.7 8.2h-8.6L17 19l7-5Zm-7 5-7.5 1.2M31 19l7.5 1.2M20 27l-5.3 7M28 27l5.3 7M24 14V7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      d="M24 6c1.8 8.8 8.2 15.2 17 17-8.8 1.8-15.2 8.2-17 17-1.8-8.8-8.2-15.2-17-17C15.8 21.2 22.2 14.8 24 6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />

    <path
      d="M39 7v8M35 11h8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
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

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Steun de Jeugd home">
          <Image
            src="/images/logo.png"
            alt="Steun de Jeugd"
            width={521}
            height={104}
            className="brandLogo"
            priority
          />
        </a>

        <nav className="nav" aria-label="Hoofdnavigatie">
          <a href="/over-ons">Over ons</a>
          {/* <a href="#over-ons">Over ons</a> */}
          <a href="#missie-visie">Missie &amp; visie</a>
          <a href="#doelstelling">Doelstelling</a>
          <a href="#focus">Waar we helpen</a>
          <a href="#fonds">Steun het fonds</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="headerCta" href="/doneren">
          Doneren
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <span className="eyebrow">Steun de Jeugd Fonds</span>

          <h1>Ieder kind verdient de ruimte om te groeien.</h1>

          <p>
            Wij helpen jongeren vooruit door te investeren in ontwikkeling,
            creativiteit, sport en kansen. Niet omdat iedereen dezelfde weg moet
            volgen, maar omdat ieder talent een eerlijke start verdient.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="/doneren">
              Steun de jeugd
              <ArrowIcon />
            </a>

            <a className="textLink" href="#over-ons">
              Lees ons verhaal
            </a>
          </div>
        </div>

        <div className="heroVisual" aria-label="Kind verkleed als superheld">
          <Image
            src="/images/headerImage.png"
            alt="Kind verkleed als superheld"
            width={2048}
            height={1365}
            className="headerHeroImage"
            priority
          />

          {/* <div className="floatingNote">
            <span className="floatingIcon">
              <SparkIcon />
            </span>

            <div>
              <strong>Geloof in potentieel</strong>
              <small>Eén kans kan alles veranderen.</small>
            </div>
          </div> */}
        </div>
      </section>

      <section className="intro" id="over-ons">
        <div>
          <span className="sectionKicker">Waarom we bestaan</span>

          <h2>Een goede start mag niet afhangen van waar je vandaan komt.</h2>
        </div>

        <p>
          Jongeren zijn de toekomst, maar niet iedereen krijgt dezelfde
          mogelijkheden. Steun de Jeugd wil drempels verlagen en ruimte maken
          voor groei. We richten ons op initiatieven die jongeren helpen hun
          talent te ontdekken, vaardigheden te ontwikkelen en zelfvertrouwen op
          te bouwen.
        </p>
      </section>

      <section className="missionVisionSection" id="missie-visie">
        <div className="missionVisionHeader">
          <div>
            <span className="sectionKicker">Missie &amp; visie</span>

            <h2>
              Kansen creëren die vandaag beginnen en morgen verschil maken.
            </h2>
          </div>

          <p>
            Steun de Jeugd Fonds wil bijdragen aan een samenleving waarin
            jongeren de ruimte, ondersteuning en mogelijkheden krijgen om
            zichzelf te ontwikkelen en met vertrouwen aan hun toekomst te
            bouwen.
          </p>
        </div>

        <div className="missionVisionGrid">
          <article className="missionCard">
            <div className="missionCardTop">
              <span className="missionVisionNumber">01</span>
              <span className="missionVisionLabel">Onze missie</span>
            </div>

            <h3>Jongeren de kans geven om hun mogelijkheden te ontdekken.</h3>

            <p>
              Steun de Jeugd Fonds zet zich in om jongeren kansen te geven om
              zich te ontwikkelen, hun talenten te ontdekken en veilig en
              zelfstandig aan hun toekomst te bouwen.
            </p>

            <p>
              Wij ondersteunen en organiseren initiatieven op het gebied van
              educatie, cultuur, sport, preventie, maatschappelijke ontwikkeling
              en participatie.
            </p>
          </article>

          <article className="visionCard">
            <div className="missionCardTop">
              <span className="missionVisionNumber">02</span>
              <span className="missionVisionLabel">Onze visie</span>
            </div>

            <h3>
              De toekomst van een jongere mag niet worden bepaald door zijn of
              haar omstandigheden.
            </h3>

            <p>
              Wij geloven in een samenleving waarin afkomst, financiële
              mogelijkheden of persoonlijke omstandigheden geen onnodige
              belemmering vormen voor ontwikkeling en perspectief.
            </p>

            <p>
              Iedere jongere verdient toegang tot kansen, begeleiding en een
              omgeving waarin talent kan groeien en ambitie de ruimte krijgt.
            </p>
          </article>
        </div>

        <div className="valuesSection">
          <div className="valuesHeading">
            <span className="sectionKicker">Waar we voor staan</span>

            <h3>Onze kernwaarden.</h3>
          </div>

          <div className="valuesGrid">
            <article className="valueCard">
              <span className="valueNumber">01</span>

              <div className="valueIcon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    d="M24 5v38M5 24h38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h4>Kansen</h4>

              <p>
                Mogelijkheden creëren waar jongeren zelf verder op kunnen
                bouwen.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">02</span>

              <div className="valueIcon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    d="M8 38 20 26l7 7L41 15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 15h9v9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h4>Ontwikkeling</h4>

              <p>
                Investeren in kennis, vaardigheden, talent en persoonlijke
                groei.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">03</span>

              <div className="valueIcon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <circle
                    cx="17"
                    cy="18"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="32"
                    cy="18"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 39c0-7 4.5-11 11-11 3.4 0 6 1.1 7.8 3.1M42 39c0-7-4.5-11-10-11-3 0-5.5 1-7.2 3.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h4>Verbinding</h4>

              <p>
                Jongeren, organisaties en gemeenschappen bij elkaar brengen.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">04</span>

              <div className="valueIcon">
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
              </div>

              <h4>Veiligheid</h4>

              <p>
                Een omgeving bevorderen waarin jongeren zich beschermd en gezien
                voelen.
              </p>
            </article>

            <article className="valueCard">
              <span className="valueNumber">05</span>

              <div className="valueIcon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    d="M7 24h34M24 7v34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h4>Gelijkwaardigheid</h4>

              <p>
                Kijken naar potentieel en mogelijkheden, ongeacht achtergrond of
                omstandigheden.
              </p>
            </article>

            <article className="valueCard valueCardFeatured">
              <span className="valueNumber">06</span>

              <div className="valueIcon">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <path
                    d="M7 24s6-11 17-11 17 11 17 11-6 11-17 11S7 24 7 24Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  />
                </svg>
              </div>

              <h4>Transparantie</h4>

              <p>
                Duidelijk communiceren over onze keuzes, projecten, middelen en
                resultaten.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="objectiveSection" id="doelstelling">
        <div className="objectiveHeader">
          <div>
            <span className="sectionKicker">Onze doelstelling</span>

            <h2>Een betere toekomst voor de jeugd.</h2>
          </div>

          <div className="objectiveIntroText">
            <p>
              Stichting Steun de Jeugd is opgericht begin 2014 met als doel: een
              betere toekomst voor de jeugd.
            </p>

            <p>
              De stichting tracht dit doel te bereiken door jongeren kansen,
              ondersteuning, ontwikkeling, veiligheid en perspectief te bieden.
            </p>
          </div>
        </div>

        <div className="objectiveLayout">
          <div className="objectiveMain">
            <span className="objectiveSmallTitle">
              Stichting Steun de Jeugd tracht haar doel te bereiken door:
            </span>

            <div className="objectiveList">
              <article className="objectiveItem">
                <span className="objectiveNumber">01</span>

                <div>
                  <h3>Culturele projecten</h3>

                  <p>
                    Het organiseren van projecten op cultureel gebied,
                    bijvoorbeeld het maken van videoclips, muziek, films, series
                    en documentaires.
                  </p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">02</span>

                <div>
                  <h3>Educatie &amp; ontwikkeling</h3>

                  <p>
                    Het organiseren van educatie, workshops, trainingen en
                    cursussen, waaronder begrepen agressiviteitstrainingen.
                  </p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">03</span>

                <div>
                  <h3>Speeltuinen &amp; sportterreinen</h3>

                  <p>
                    Het aanleggen, onderhouden en opknappen van speeltuinen en
                    sportterreinen.
                  </p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">04</span>

                <div>
                  <h3>Opvang &amp; werk</h3>

                  <p>Het creëren van een opvangplek en werk voor jongeren.</p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">05</span>

                <div>
                  <h3>Preventie &amp; voorlichting</h3>

                  <p>
                    Het verstrekken van informatie ter preventie van
                    prostitutie, loverboys, lovergirls, drugs- en mensenhandel
                    en drugsgebruik.
                  </p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">06</span>

                <div>
                  <h3>Sport, feesten &amp; festivals</h3>

                  <p>
                    Het organiseren van sportevenementen, feesten en festivals.
                  </p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">07</span>

                <div>
                  <h3>Feestdagen</h3>

                  <p>Het vieren van feestdagen.</p>
                </div>
              </article>

              <article className="objectiveItem">
                <span className="objectiveNumber">08</span>

                <div>
                  <h3>Educatiematerialen</h3>

                  <p>
                    Het verstrekken van educatiematerialen aan jongeren op
                    scholen in binnen- en buitenland.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <aside className="boardCard">
            <span className="boardKicker">Het bestuur</span>

            <h3>Stichting Steun de Jeugd</h3>

            <p className="boardIntro">
              Het bestuur van Stichting Steun de Jeugd wordt gevormd door:
            </p>

            <div className="boardMember">
              <span>Voorzitter</span>
              <strong>G. Felter</strong>
              <small>Geboren 08 maart 1985 te Amsterdam</small>
            </div>

            <div className="boardMember">
              <span>Penningmeester</span>
              <strong>Z. Tomasowa</strong>
              <small>Geboren 27 januari 1987 te Zaanstad</small>
            </div>

            <div className="boardMember">
              <span>Secretaris</span>
              <strong>L. Felter</strong>
              <small>Geboren 29 juli 1992 te Amsterdam</small>
            </div>

            <div className="boardEstablished">
              <span>Opgericht</span>
              <strong>Begin 2014</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="focusSection" id="focus">
        <div className="sectionHeading">
          <span className="sectionKicker">Waar we in investeren</span>

          <h2>Van eerste kans naar volgende stap.</h2>
        </div>

        <div className="focusGrid">
          <article className="focusCard">
            <div className="cardIcon">
              <EducationIcon />
            </div>

            <span className="cardNumber">01</span>

            <h3>Onderwijs &amp; ontwikkeling</h3>

            <p>
              Toegang tot kennis, begeleiding en praktische vaardigheden die
              jongeren verder brengen.
            </p>
          </article>

          <article className="focusCard featuredCard">
            <div className="cardIcon">
              <SportIcon />
            </div>

            <span className="cardNumber">02</span>

            <h3>Sport &amp; talent</h3>

            <p>
              Ruimte om discipline, creativiteit, gezondheid en eigen talent te
              ontwikkelen.
            </p>
          </article>

          <article className="focusCard">
            <div className="cardIcon">
              <SparkIcon />
            </div>

            <span className="cardNumber">03</span>

            <h3>Ondernemerschap</h3>

            <p>
              Jongeren leren ideeën omzetten in initiatief, verantwoordelijkheid
              en perspectief.
            </p>
          </article>

          <article className="focusCard">
            <div className="cardIcon">
              <CommunityIcon />
            </div>

            <span className="cardNumber">04</span>

            <h3>Community &amp; verbinding</h3>

            <p>
              Een netwerk waarin jongeren zich gezien voelen en elkaar kunnen
              versterken.
            </p>
          </article>
        </div>
      </section>

      <section className="fundSection" id="fonds">
        <div className="fundHeader">
          <div>
            <span className="sectionKicker">Steun de Jeugd Fonds</span>

            <h2>
              Samen €100.000
              <br />
              voor de toekomst.
            </h2>
          </div>

          <div className="fundIntro">
            <p>
              Met het Steun de Jeugd Fonds willen we €100.000 inzamelen om
              jongeren meer kansen, ondersteuning, ontwikkeling en perspectief
              te bieden.
            </p>

            <p>
              Iedere bijdrage helpt ons om projecten en activiteiten mogelijk te
              maken die daadwerkelijk iets kunnen betekenen voor jongeren.
            </p>
          </div>
        </div>

        <div className="fundCampaign">
          <div className="fundCampaignInfo">
            <span className="fundCampaignLabel">
              Onze eerste grote inzamelingsactie
            </span>

            <h3>Steun de Jeugd Fonds</h3>

            <p>
              Niet iedere jongere krijgt dezelfde kansen. Met deze campagne
              willen we samen financiële ruimte creëren voor initiatieven op het
              gebied van educatie, talentontwikkeling, sport, cultuur,
              preventie, opvang en maatschappelijke ondersteuning.
            </p>

            <div className="fundGoal">
              <div>
                <span>Doelbedrag</span>
                <strong>€100.000</strong>
              </div>

              <div>
                <span>Campagne</span>
                <strong>Steun de Jeugd Fonds</strong>
              </div>
            </div>

            <div className="fundActions">
              <a className="fundPrimaryButton" href="/doneren">
                Steun het fonds
                <ArrowIcon />
              </a>

              <a className="fundSecondaryLink" href="#doelstelling">
                Bekijk onze doelstelling
              </a>
            </div>
          </div>

          <div className="fundWidgetArea">
            <span className="fundWidgetLabel">GoFundMe</span>

            <div className="fundWidgetPlaceholder">
              <div className="fundWidgetLogo">
                <Image
                  src="/images/icon-logo.png"
                  alt=""
                  width={72}
                  height={72}
                />
              </div>

              <h3>Help ons het doel van €100.000 te bereiken.</h3>

              <p>
                Zodra onze GoFundMe-campagne live staat, verschijnt hier de
                officiële GoFundMe-widget.
              </p>

              <div className="fundTarget">
                <span>Doel</span>
                <strong>€100.000</strong>
              </div>

              <a className="fundWidgetButton" href="/doneren">
                Bekijk donatiemogelijkheden
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <div className="quoteMark">“</div>

        <blockquote>
          Soms heeft een jongere niet méér talent nodig, maar simpelweg iemand
          die zegt: ik zie wat er in jou zit.
        </blockquote>

        <span>Steun de Jeugd</span>
      </section>

      <section className="supportSection" id="steunen">
        <div className="supportCopy">
          <span className="sectionKicker light">Samen maken we ruimte</span>

          <h2>Wil je helpen een volgende kans mogelijk te maken?</h2>

          <p>
            De website is in ontwikkeling. Binnenkort vind je hier meer
            informatie over projecten, transparantie en manieren om bij te
            dragen.
          </p>
        </div>

        <a className="lightButton" href="mailto:info@steundejeugd.nl">
          Neem contact op
          <ArrowIcon />
        </a>
      </section>

      <footer className="footer" id="contact">
        <div className="footerBrand">
          <a
            className="footerBrandLink"
            href="#top"
            aria-label="Steun de Jeugd home"
          >
            <Image
              src="/images/logo.png"
              alt="Steun de Jeugd"
              width={521}
              height={104}
              className="footerLogo"
            />
          </a>

          <p>Geef vuur aan de toekomst, steun de jeugd.</p>
        </div>

        <div className="footerColumn">
          <strong>Navigatie</strong>

          <a href="/over-ons">Over ons</a>
          {/* <a href="#over-ons">Over ons</a> */}
          <a href="#missie-visie">Missie &amp; visie</a>
          <a href="#doelstelling">Doelstelling</a>
          <a href="#focus">Waar we helpen</a>
          <a href="#fonds">Steun het fonds</a>
        </div>

        <div className="footerColumn">
          <strong>Community</strong>

          <a href="#">X (Twitter)</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
          <a href="#">Snapchat</a>
          <a href="#">LinkedIn</a>
        </div>

        <div className="footerColumn">
          <strong>Contact</strong>

          <a href="mailto:info@steundejeugd.nl">info@steundejeugd.nl</a>

          <span>Nederland</span>
        </div>

        <div className="footerBottom">
          <span>© 2026 Steun de Jeugd Fonds</span>
          <span>Website in ontwikkeling</span>
        </div>
      </footer>
    </main>
  );
}
