"use client";

import Head from 'next/head'
import Spline from '@splinetool/react-spline';
import React from 'react';
import Link from "next/link";
import Section from "@/components/Section";
import {ChevronDownIcon, MapIcon, TrophyIcon} from '@heroicons/react/24/outline'
import {Element, Link as ScrollLink} from 'react-scroll';
import Logos from "@/components/Logos";
import Button from "@/components/Button";

function Hero() {
    return (
        <section className="relative flex items-center justify-center h-screen bg-primary-50 text-gray-800">
            <div className="w-full h-full overflow-hidden">
                <Spline scene="https://prod.spline.design/IwvZXJP9BoIPF9Cc/scene.splinecode" />
            </div>

            <div className="absolute flex flex-col space-y-4">
                {/* <div className="hidden md:flex relative animate-pulse flex-row items-center space-x-3 mb-2 text-gray-500/80">
                    <CursorArrowRippleIcon className="w-8"/>
                    <p className="text-2xl">Hover over the items</p>
                </div> */}
                <h1 className='relative text-4xl sm:text-6xl font-semibold uppercase tracking-wider'>
                    Sailsetters
                </h1>
                <h2 className="relative text-2xl sm:text-4xl text-gray-800">Students for change.</h2>
                <Link href="/" className="text-lg sm:text-xl text-center text-blue-800 p-2 sm:p-4 rounded-lg shadow-md bg-blue-500/40 hover:bg-blue-500/60 hover:text-blue-50 transition-all duration-200">
                    Jetzt Mitglied werden!
                </Link>
            </div>

            <ScrollLink className="cursor-pointer absolute bottom-16 left-[50%] -translate-x-[50%]" to="statements" smooth duration={500}>
                <ChevronDownIcon className="animate-bounce h-12 w-12"/>
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
    const top = Math.random() * 80 + 10 + '%';
    const left = Math.random() * 70 + 10 + '%';

    return (
        <div className="relative px-6">
            {/* Blue orb */}
            <div className="absolute w-16 h-16 bg-blue-500/70 blur-xl rounded-full opacity-40" style={{ top, left }}></div>

            {/* Main Card with backdrop-blur */}
            <div className="flex flex-col space-y-4 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                    <Icon className="w-8 h-8 text-blue-500" />
                    <h3 className="text-3xl">{title}</h3>
                </div>
                <p className="text-start text-lg">{text}</p>
            </div>
        </div>
    );
}


function Statements() {
    return (
        <Section >
            <h2 id="about" className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Unsere Ziele</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 text-gray-800 gap-10 text-center">
                <StatementCard
                    title="Vision"
                    text="Unsere Vision ist ein Deutschland, in dem jedes Kind, unabhängig von seiner Lebenssituation, gleichen und gerechten Bildungszugang erhält, um ein selbstbestimmtes Leben zu führen."
                    Icon={MapIcon}
                />
                <StatementCard
                    title="Mission"
                    text="Wir engagieren uns für benachteiligte Kinder und Jugendliche, arbeiten mit Partnern zusammen, um Bildungsstrukturen zu verbessern, und setzen Initiativen um, die über akademische Hilfe hinausgehen. Unsere Mission ist die ganzheitliche Förderung und das Streben nach einem gerechteren Bildungssystem in Deutschland."
                    Icon={TrophyIcon}
                />
            </div>
        </Section>
    );
}

interface ProjectCardProps {
    title: string;
    description: string;
  }

function ProjectCard({ title, description }: ProjectCardProps) {
    const top = Math.random() * 80 + 10 + '%';
    const left = Math.random() * 70 + 10 + '%';

    return (
        <div className="group relative max-w-xl p-6 flex flex-col justify-between rounded-lg backdrop-blur-md shadow-lg">
            {/* Blue orb */}
            <div className="absolute w-16 h-16 bg-blue-500/70 blur-xl rounded-full opacity-40" style={{ top, left }}></div>
            
            <div className='mb-4'>
                <h4 className="text-xl text-gray-800 font-semibold mb-4">{title}</h4>
                <p className="text-gray-700">{description}</p>
            </div>

            <Button>
                Jetzt mithelfen
            </Button>
        </div>
    );
}


function Projects() {
    return (
        <Section>
            <h2 id="projects" className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
                <ProjectCard
                    title="Mentoring"
                    description="Bei unserem Mentoring Projekt, „matched“ unser Haven StartStark dich mit einem Mentee, einem Kind oder Jugendlichen, das regelmäßig das Gate6 besucht. Die Idee hinter dem Mentoring, ist den Mentees als eine 1:1 Bezugsperson zur Seite zu stehen. Dabei kann und wird die Mentor-Mentee Beziehung natürlich bei jedem Paar anders aussehen."
                />
                <ProjectCard
                    title="Spieleabend"
                    description="Der Spieleabend ist ein Projekt mit unserem Haven Lichtblick Hasenbergl, bei dem du, zusammen mit mindestens einem anderen Sailsetter, einmal im Monat den Lichtblick Hasenbergl besuchst und einen Spieleabend veranstaltest. Dabei lernt ihr zuvor die Spielregeln und spielt dieses dann zusammen mit einer kleinen Gruppe an Kindern."
                />
                <ProjectCard
                    title="Projektwochen Naturwissenschaften"
                    description="Die Projektwochen Naturwissenschaften sind ein Projekt am Kindergarten unseres Havens Lichtblick Hasenbergl. Dabei bereitest du zusammen mit ein bis drei andern Sailsettern naturwissenschaftliche Experimente für Kindergartenkinder vor. Diese finden dann in vier aufeinanderfolgenden Wochen im Januar 2024 jeweils an einem Vormittag pro Woche statt."
                />
                <ProjectCard
                    title="Verstehendes Lesen"
                    description="Verstehendes Lesen, ist ein 1:1 Projekt mit unserem Haven Lichtblick Hasenbergl. Einmal pro Woche liest du gemeinsam mit einem Kind im Grundschulalter. Dabei geht es darum das Textverständnis des Kindes zu verbessern. Für dieses Projekt suchen wir explizit nach Pädagogik- und Lehramt-Studierenden."
                />
                <ProjectCard
                    title="Nachhilfe"
                    description="Im Tillmann Kinder- und Jugendhaus sind Jugendliche im Alter von 6-18 Jahren untergebracht. Als Teil dieses Projekts, gibst du einmal pro Woche einem Kind oder Jugendlichen 1:1 Nachhilfe."
                />
                <ProjectCard
                    title="Interesse oder Fragen?"
                    description="Wenn du Interesse an einem unserer Projekte hast, oder Fragen zu diesen hast, dann schreib uns gerne per Mail oder social media."
                />
            </div>
        </Section>
    );
}

function Partners() {
    const havens = [
        {src: '/havens/logo_lichtblickHasenbergl.png', alt: 'Lichtblick Hasenbergl', href: 'https://lichtblick-hasenbergl.org'},
        {src: '/havens/logo_startstark.png', alt: 'StartStark', href: 'https://startstark.de'},
    ];

    return (
        <Section>
            <h2 id="partner" className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Unsere Partner</h2>
            <Logos  logos={havens}/>
        </Section>
    );
}

interface TimelineEventProps {
    start: string;
    end: string;
    title: string;
    description: string;
  }

function TimelineEvent({ start, end, title, description}: TimelineEventProps ) {
    return (
        <div className="grid grid-cols-2">
            <div className='mr-0 mb-6'>
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
            <h2 className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Roadmap</h2>
            <div className="relative max-w-3xl mx-auto">
                <div className="grid grid-cols-2">
                    <div className='mr-0 mb-6'>
                    </div>
                    <div className=" ml-4 pl-2 border-l-2 border-black border-dashed">
                    </div>
                </div>
                <TimelineEvent
                    start="16.10.23 -"
                    end="29.10.23"
                    title="Berwerbungsphase"
                    description=""
                />
                <TimelineEvent
                    start="30.10.23 -"
                    end="03.11.23"
                    title="Interviewphase"
                    description=""
                />
                <TimelineEvent
                    start="04.11.23"
                    end=""
                    title="Onboarding Day"
                    description="Onboarding Day für alle neuen Sailsetter."
                />
                <TimelineEvent
                    start="05.11.23 -"
                    end="09.02.24"
                    title="Projektphase"
                    description="In dieser Phase arbeiten alle unsere Sailsetter an verschiedenen Projekten mit."
                />
                <TimelineEvent
                    start="10.02.24"
                    end=""
                    title="Reflection Day"
                    description="An diesem Tag treffen sich alle aktiven Sailsetter und tauschen in einem Workshop Format ihre Erfahrungen, die sie auf ihren Projekten gemacht haben, aus. Danach gemeinsames Socializing und feiern."
                />
                <div className="grid grid-cols-2">
                    <div className='mr-0 mb-6'>
                    </div>
                    <div className=" ml-4 pl-2 border-l-2 border-black border-dashed">
                    </div>
                </div>
            </div>
        </Section>
    );
}

function SailsetterDescription() {
    return (
        <Section>
            <h2 id="join" className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Werde jetzt ein Sailsetter!</h2>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 text-gray-800 justify-center items-center">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-6">Bewirb dich noch heute und starte auf deine Reise als Sailsetter. Such dir bei der Bewerbung einen Haven und ein zugehöriges Projekt aus, bei welchem du ein Semester lang ehrenamtlich regelmäßig mitarbeitest.</p>
                    <p className="text-lg mb-6">Dieses ehrenamtliche Engagement ist der Weg, auf dem wir unsere Mission verfolgen und endet mit der Vorlesungszeit, sodass genug Zeit für die Prüfungsvorbereitung bleibt. Alle unsere Sailsetter bekommen natürlich nach einem abgeschlossenen Semester ein Zertifikat für Ihr Engagement ausgestellt.</p>
                    <p className="text-lg">Im darauffolgenden Semester kannst du dann entweder bei deinem Haven bleiben, zu einem anderen Haven wechseln oder eine organisatorische Rolle übernehmen. Wir freuen uns dich kennenzulernen!</p>
                    <div className="flex justify-end mt-8">
            <Link href="">
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg active:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300 shadow-2xl hover:shadow-inner'>
                    Jetzt bewerben!
                </button>
            </Link>
        </div>
            </div>

                

                {/* <div className="w-full md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <img src="./sailsetter_image.jpg" alt="Sailsetter at work" className="w-full h-auto"/>
                        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
                            <h3 className="text-xl font-semibold">Unsere Arbeit im Fokus</h3>
                            <p className="text-md">Ein Blick hinter die Kulissen der Projekte von Sailsetters.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </Section>
    );
}


export default function Home() {
  return (
   <>
    <Head>
       <title>Sailsetters - Students for Change</title>
       <meta name="description" content="Join Sailsetters to make a difference in the accessebility of education."/>
    </Head>
    <Hero />
    <Element name="statements">
        <Statements />
    </Element>
    <Element name="projects">
        <Projects />
    </Element>
    <Element name="partners">
        <Partners />
    </Element>
    <Element name="join">
        <SailsetterDescription />
    </Element>
    <Element name="timeline">
        <Timeline />
    </Element>
   </>
  )
}