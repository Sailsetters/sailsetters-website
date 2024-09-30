"use client";

import Head from "next/head";
import Section from "@/components/Section";
import {
  ChevronDownIcon,
  GiftIcon,
  InformationCircleIcon,
  MapIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { Element, Link as ScrollLink } from "react-scroll";
import Logos from "@/components/Logos";
import Button from "@/components/Button";
import CalendlyPopup from "@/components/CalendlyPopup";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-linen text-gray-800">
      <div className="w-full h-full overflow-hidden">
        <Image src="/background.png" alt="Hero" fill />
      </div>
      <div className="absolute flex flex-col space-y-1 sm:space-y-4 px-4">
        <Image
          src="/sailsetters_wordmark.png"
          alt="wordmark"
          width={800}
          height={100}
        />
        <h2 className="text-2xl font-medium tracking-wide sm:text-4xl text-gray-900">
          GEMEINSAM FÜR EIN BILDUNGSGERECHTES DEUTSCHLAND
        </h2>
        <div className="w-1/2 self-center pt-12">
          <CalendlyPopup className="mt-2 sm:mt-0">
            Sailsetter:in werden!
          </CalendlyPopup>
        </div>
      </div>
      <ScrollLink
        className="cursor-pointer absolute bottom-16 left-[50%] -translate-x-[50%]"
        to="statements"
        smooth
        duration={500}
      >
        <ChevronDownIcon className="animate-bounce h-12 w-12" />
      </ScrollLink>
    </section>
  );
}

interface StatementCardProps {
  title: string;
  text: string;
  Icon: React.ElementType;
}

function StatementCard({ title, text, Icon }: StatementCardProps) {
  // Random position for the blue orb
  const top = Math.random() * 100 + "%";
  const left = Math.random() * 100 + "%";

  return (
    <div className="relative sm:px-6">
      {/* Blue orb */}
      <div
        className="absolute w-16 h-16 bg-burnt/70 blur-xl rounded-full opacity-20"
        style={{ top, left }}
      ></div>

      {/* Main Card with backdrop-blur */}
      <div className="flex flex-col space-y-4 rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <Icon className="w-8 h-8 text-burnt" />
          <h3 className="text-3xl">{title}</h3>
        </div>
        <p className="text-start text-lg">{text}</p>
      </div>
    </div>
  );
}

function Statements() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 text-gray-800 gap-5 sm:gap-10 text-center">
        <StatementCard
          title="Vision"
          text="Unsere Vision ist ein bildungsgerechtes Deutschland, in dem alle Kinder einen Zugang zu schulischer und sozialer Bildung haben, welcher ihnen ein selbstbestimmtes Leben ermöglicht."
          Icon={MapIcon}
        />
        <StatementCard
          title="Mission"
          text="Als engagierte Gemeinschaft von Studierenden unterstützen wir ehrenamtlich Organisationen, die unsere Vision teilen, und fördern den politischen Diskurs zum Thema Bildungsgerechtigkeit."
          Icon={TrophyIcon}
        />
        <StatementCard
          title="Umsetzung"
          text="Als Sailsetter:innen helfen wir ehrenamtlich ca. 20 Stunden pro Semester an einem oder mehreren unserer Projekte mit."
          Icon={InformationCircleIcon}
        />
        <StatementCard
          title="Engagement"
          text="Alle Sailsetter:innen erhalten neben der Fülle an Erfahrungen und Erlebnissen, die sie während ihrer Zeit bei Sailsetters sammeln, ein Zertifikat für ihr Engagement."
          Icon={GiftIcon}
        />
      </div>
    </Section>
  );
}

interface ProjectCardProps {
  title: string;
  subttitle: string;
  description: React.ReactNode; // it's possible to pass a string aswell
  buttonText?: string;
  href?: string;
}

function ProjectCard({
  title,
  description,
  subttitle,
  buttonText,
  href,
}: ProjectCardProps) {
  const top = Math.random() * 80 + 10 + "%";
  const left = Math.random() * 70 + 10 + "%";

  return (
    <div className="group relative max-w-xl p-6 flex flex-col justify-between rounded-lg backdrop-blur-md shadow-lg">
      {/* Red orb */}
      <div
        className="absolute w-16 h-16 bg-burnt/30 blur-xl rounded-full opacity-40"
        style={{ top, left }}
      ></div>

      <div className="mb-4">
        <h4 className="text-xl text-gray-800 font-semibold mb-4">{title}</h4>
        <h5 className=" text-gray-800 italic mb-4">{subttitle}</h5>
        <p className="text-gray-700">{description}</p>
      </div>

      {buttonText &&
        href && ( // button text and href are optional. -> no button is rendered if none are passed
          <Button href={href}>{buttonText}</Button>
        )}
    </div>
  );
}

function Projects() {
  return (
    <Section>
      <h2
        id="projects"
        className="text-4xl sm:text-5xl text-gray-800 text-center uppercase tracking-widest mb-8 sm:mb-16 font-semibold"
      >
        Projekte
      </h2>
      <h3 className="text-2xl text-gray-800 text-center mb-8 font-semibold">
        Entwicklung eigenständiger Projekte (
        <a
          href="https://www.sot.tum.de/wtg/tuminspiriert-studentische-projekte/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 transition-all duration-300"
        >
          An der TUM 3 ECTS möglich
        </a>{" "}
        )
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center mb-10">
        <ProjectCard
          title="Naturwissenschaftliche Experimente für  Kindergartenkinder"
          subttitle="Haus für Kinder Perlach"
          description="Unsere Mitglieder bereiten naturwissenschaftliche Experimente für Kindergartenkinder vor. Diese führen sie dann alle zwei Wochen mit wechselnden Gruppen an Kindergartenkindern in unserem Haven “Haus für Kinder Perlach” durch. Dadurch wollen wir helfen Kinder schon früh spielend an das Thema der Naturwissenschaften heranzuführen."
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Handwerken mit Kindergartenkindern"
          subttitle="Haus für Kinder Perlach"
          description="Unser Haven “Haus für Kinder Perlach” hat eine Werkbank. Unsere Mitglieder entwicklen Ideen, wie sie zusammen mit Kindergartenkindern an dieser kleine Sachen bauen können. Diese führen sie dann alle zwei Wochen mit wechselnden Gruppen druch. "
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Entwicklung von Angeboten für Kinder"
          subttitle="Adelgundenheim"
          description={
            "Das Adelgundheim organisiert für ihre Familienhilfe immer wieder Kinderangebote, um den Müttern Freizeit für andere Aktivitäten zu ermöglichen. Unsere Mitglieder entwickeln vielfältige Freizeitangebote zusammen mit Pädagoginnen des Adelgundeheims und führen diese durch."
          }
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Get-to-know München mit Geflüchteten"
          subttitle="Diakonie"
          description="Unsere Mitglieder bereiten Stadttouren durch München für Geflüchtete vor, um Ihnen zu helfen in München an- und zurecht-zukommen. Diese führen sie dann an vier Terminen im Juni mit der gleichen Gruppe an Geflüchteten durch"
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="IT-Crashkurs für Geflüchtete"
          subttitle="Diakonie"
          description="Unsere Mitglieder bereiten einen IT-Crashkurs zu einem von ihnen gewählten relevanten Thema vor und führen diesen an vier Terminen im Juni mit verschiedenen Gruppen von Geflüchteten durch."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Sommerfest Organisation für Mentees und Mentoren"
          subttitle="Adelgundenheim"
          description="Unsere Mitglieder unterstützen bei der Organisation des Sommerfestes für die Mentees und Mentoren des Adelgundenheims. Dabei helfen sie bei der Planung und Durchführung des Festes."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
      </div>
      <h3 className="text-2xl text-gray-800 text-center mb-8 font-semibold pt-10">
        Unterstützung bei Projekten in ganz München
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center mb-10">
        <ProjectCard
          title="Deutschkurse für Geflüchtete"
          subttitle="Diakonie"
          description="Unsere Mitglieder unterstützen Deutschkurse für Geflüchtete. Dabei sind Fremdsprachenkenntnisse wie Ukrainisch,Russisch oder auch Arabisch hilfreich. Studierende ohne solche Fremdsprachkenntnisse helfen eher bei fortgeschritteneren Kursen mit. Der Fokus liegt hierbei auf der gesprochenen Sprache."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="She.codes Informatik-Workshops"
          subttitle="Condrobs"
          description="Gemeinsam mit She.codes führen unsere Mitglieder Informatik-Workshops mit weiblich gelesenen Kindern und Jugendlichen durch, um sie an das Thema der Informatik heranzuführen."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
      </div>
      <h3 className="text-2xl text-gray-800 text-center mb-8 font-semibold pt-10">
        1-zu-1 Förderung von Kindern und Jugendlichen
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center mb-10">
        <ProjectCard
          title="Nachhilfe"
          subttitle="Diakonie/Adelgundenheim/Gesellschaft macht Schule"
          description="Unsere Mitglieder unterstützen Kinder und Jugendliche mit klassischer Nachhilfe. Dafür gibt es an mehreren unsere Havens Bedarf."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Deutsch lernen durch Konversation"
          subttitle="Adelgundenheim"
          description="Unsere Mitglieder unterstützen alle zwei Wochen Kinder beim Deutsch lernen durch 1:1 Konversation. "
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Patenschaften mit Geflüchteten "
          subttitle="Diakonie"
          description="Unsere Mitglieder unterstützen Geflüchtete in 1:1 Patenschaften bei Behördengängen, Arztbesuchen oder anderen Notwendigkeiten die in einem fremden Land alleine schwierig zu bewerkstelligen sind."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Leseförderung durch Vorlesen"
          subttitle="Diakonie und Lichtblick Hasenbergl"
          description="Unsere Mitglieder unterstützen Kinder durch Vorlesen und gemeinsames Lesen beim Lesen lernen."
          // buttonText="Jetzt bewerben"
          // href="https://h47ugi7vs69.typeform.com/to/Du70lKoV"
        />
        <ProjectCard
          title="Interesse oder Fragen?"
          subttitle=""
          description="Wenn du Interesse an einem unserer Projekte hast, oder Fragen zu diesen hast, dann schreib uns gerne per Mail oder social media."
          buttonText="Kontaktiere uns"
          href="mailto:contact@sailsetters.de"
        />
      </div>
    </Section>
  );
}

function Havens() {
  const havens = [
    {
      src: "/havens/logo_lichtblickHasenbergl.png",
      alt: "Lichtblick Hasenbergl",
      href: "https://lichtblick-hasenbergl.org",
    },
    {
      src: "/havens/logo_gms.png",
      alt: "Gesellschaft macht Schule",
      href: "https://www.gesellschaft-macht-schule.de/",
    },
    {
      src: "/havens/logo_startstark.png",
      alt: "StartStark",
      href: "https://startstark.de",
    },
    {
      src: "/havens/logo_adelgundenheim.png",
      alt: "Adelgundenheim",
      href: "https://adelgundenheim.de/",
    },
    {
      src: "/havens/logo_shecodes.png",
      alt: "She.codes",
      href: "https://codes.education/",
    },
    {
      src: "/havens/logo_condrobs.png",
      alt: "Condrobs",
      href: "https://www.condrobs.de/",
    },
    {
      src: "/havens/diakonie_logo.png",
      alt: "Diakonie Bayern",
      href: "https://www.diakonie-bayern.de/",
    },
    {
      src: "/havens/logo_tumThinkTank.svg",
      alt: "TUM Think Tank",
      href: "https://tumthinktank.de/",
    },
  ];

  return (
    <Section>
      <h2
        id="havens"
        className="text-4xl sm:text-5xl text-gray-800 text-center uppercase tracking-widest® mb-8 sm:mb-16 font-semibold"
      >
        Unsere Haven und Partner
      </h2>
      <Logos logos={havens} />
    </Section>
  );
}

interface TimelineEventProps {
  start: string;
  end: string;
  title: string;
  description: string;
}

function TimelineEvent({ start, end, title, description }: TimelineEventProps) {
  return (
    <div className="grid grid-cols-2">
      <div className="mr-0 mb-6">
        <h4 className="text-gray-800 text-right text-lg">{start}</h4>
        <h4 className="text-gray-800  text-right pb-8 text-lg"> {end}</h4>
      </div>
      <div className="pb-4 ml-4 pl-2 border-l-2 border-black">
        <h5 className="text-gray-800  text-lg font-semibold">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <Section>
      <div className="relative max-w-3xl mx-auto">
        <div className="grid grid-cols-2">
          <div className="mr-0 mb-6"></div>
          <div className=" ml-4 pl-2 border-l-2 border-black border-dashed"></div>
        </div>
        <TimelineEvent
          start="16.10.23 -"
          end="02.11.23"
          title="Bewerbungsphase"
          description=""
        />
        {/* <TimelineEvent
                    start="30.10.23 -"
                    end="03.11.23"
                    title="Interviewphase"
                    description=""
                /> */}
        <TimelineEvent
          start="04.11.23"
          end=""
          title="Onboarding Day"
          description="Onboarding Day für alle neuen Sailsetter:innen."
        />
        <TimelineEvent
          start="05.11.23 -"
          end="09.02.24"
          title="Projektphase"
          description="In dieser Phase arbeiten alle unsere Sailsetter:innen an verschiedenen Projekten mit."
        />
        <TimelineEvent
          start="10.02.24"
          end=""
          title="Reflection Day"
          description="An diesem Tag treffen sich alle aktiven Sailsetter:innen und tauschen in einem Workshop Format ihre Erfahrungen, die sie auf ihren Projekten gemacht haben, aus."
        />
        <div className="grid grid-cols-2">
          <div className="mr-0 mb-6"></div>
          <div className=" ml-4 pl-2 border-l-2 border-black border-dashed"></div>
        </div>
      </div>
    </Section>
  );
}

function SailsettersAbout() {
  return (
    <Section>
      <h2
        id="join"
        className="text-4xl sm:text-5xl text-gray-800 text-center uppercase tracking-widest mb-10 font-semibold"
      >
        Wer sind wir?
      </h2>
      <div className="flex flex-col text-gray-800 justify-center items-center">
        <div className="flex flex-col justify-center items-center first-line:max-w-[800px] sm:w-3/4 md:w1/2 text-center text-lg text-gray-800 space-y-8">
          <div className="relative w-8/10 h-full">
            <img src="/team.png" alt="Team picture" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-end font-semibold text-center text-blood space-y-4 tracking-wide">
            <p>LEIDENSCHAFTLICH ENGAGIERT</p>
            <p>DYNAMISCH</p>
            <p>GEMEINSCHAFTLICH</p>
          </div>
          <p>
            Wir sind eine Gruppe von Studierenden der TUM und LMU aus
            verschiedensten Studiengängen, denen das Thema Bildungsgerechtigkeit
            am Herzen liegt.
          </p>
        </div>
      </div>
    </Section>
  );
}

function SailsetterDescription() {
  return (
    <Section>
      <h2
        id="join"
        className="text-4xl sm:text-5xl text-gray-800 text-center uppercase tracking-widest mb-10 font-semibold"
      >
        Werde jetzt Sailsetter:in!
      </h2>

      <div className="flex flex-col text-gray-800 justify-center items-center">
        <div className="flex flex-col justify-center items-centermax-w-[800px] sm:w-3/4 md:w1/2 text-center text-lg text-gray-800 space-y-6">
          {/* <p>
            Sprich noch heute mit uns und starte auf deine Reise als
            Sailsetter:in. Das heißt du engagierst du dich während dem Semester
            an einem oder mehreren Projekten. Das Engagement endet mit der
            Vorlesungszeit, sodass genug Zeit für die Prüfungsvorbereitung
            bleibt.
          </p> */}
          <p>
            Engagiere dich in langfristigen Projekten, entwickle eigene Ideen
            und trage zu nachhaltigen Veränderungen bei. Vernetze dich mit
            Experten und erfahrenen Mitgliedern, um wirkungsvolle Projekte zu
            gestalten.
          </p>
          <p>
            Mit ca. 2-3 Stunden pro Woche kannst du aktiv mitwirken,
            Verantwortung übernehmen und dich persönlich weiterentwickeln – und
            hast dabei genug Zeit für dein Studium.
          </p>
          {/* <p>
            Beginne deine Reise als Sailsetter:in und engagiere dich während des
            Semesters in unseren semesterübergreifenden Projekten oder hilf mit
            bei der Entwickl. Dein Engagement endet rechtzeitig vor der
            Prüfungsphase, damit du genug Zeit zum Lernen hast.
          </p>
          <p>Oder hilf mit bei der Entwicklung eigener Projekt</p>
          <p>
            Du kannst dein Engagement flexibel gestalten und etwa 20 Stunden pro
            Semester einbringen. Wir freuen uns darauf, dich kennenzulernen!
          </p> */}
          <div className="flex justify-center pt-8">
            <div className="w-4/5 sm:w-1/2">
              <CalendlyPopup className="bg-burnt/80 hover:bg-burnt">
                Werde jetzt Sailsetter:in!
              </CalendlyPopup>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sailsetters - Gemeinsam für ein bildungsgerechtes Deutschland
        </title>
        <meta
          name="description"
          content="Join Sailsetters to make a difference in the accessebility of education."
        />
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <Hero />
      <Element id="statements">
        <Statements />
      </Element>
      <Element id="join">
        <SailsettersAbout />
        <SailsetterDescription />
      </Element>
      <Element id="projects">
        <Projects />
      </Element>
      <Element id="havens">
        <Havens />
      </Element>
    </>
  );
}
