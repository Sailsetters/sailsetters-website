"use client";

import Head from 'next/head'
import Spline from '@splinetool/react-spline';
import React from 'react';
import Link from "next/link";
import Section from "@/components/Section";
import {ChevronDownIcon, CursorArrowRippleIcon, MapIcon, TrophyIcon} from '@heroicons/react/24/outline'

function Hero() {
    return (
        <section className="relative flex items-center justify-center h-screen bg-primary-50 text-gray-800">
            <div className="w-full h-full overflow-hidden">
                <Spline scene="https://prod.spline.design/IwvZXJP9BoIPF9Cc/scene.splinecode" />
            </div>

            <div className="absolute flex flex-col space-y-4">
                <div className="hidden md:flex relative animate-pulse flex-row items-center space-x-3 mb-2 text-gray-500/80">
                    <CursorArrowRippleIcon className="w-8"/>
                    <p className="text-2xl">Hover over the items</p>
                </div>
                <h1 className='relative text-4xl sm:text-6xl font-semibold uppercase tracking-wider'>
                    Sailsetters
                </h1>
                <h2 className="relative text-2xl sm:text-4xl text-gray-800">Students for change.</h2>
                <Link href="/" className="text-lg sm:text-xl text-center text-blue-800 p-2 sm:p-4 rounded-lg shadow-md bg-blue-500/40 hover:bg-blue-500/60 hover:text-blue-50 transition-all duration-200">
                    Join now!
                </Link>
            </div>

            <button
                className="absolute bottom-16 left-[50%] -translate-x-[50%]"
                onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
            >
                <ChevronDownIcon className="animate-bounce h-12 w-12"/>
            </button>
        </section>
    );
}

function StatementCard({ title, text, Icon }) {
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
            <h2 id="ueber-uns" className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Unsere Ziele</h2>
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

function ProjectCard({ title, description }) {
    return (
        <div className="group relative p-6 rounded-lg backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300">
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        <p className="text-gray-700">{description}</p>
    </div>
    );
}

function Projects() {
    return (
        <Section>
            <h2 id="projekte" className="text-5xl text-gray-800 text-center uppercase tracking-wide mb-16 font-medium">Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard
                    title="Mentoring @ StartStark"
                    description="Bei unserem Mentoring Projekt, „matched“ unser Haven StartStark dich mit einem Mentee, einem Kind oder Jugendlichen, das regelmäßig das Gate6 besucht. Die Idee hinter dem Mentoring, ist den Mentees als eine 1:1 Bezugsperson zur Seite zu stehen. Dabei kann und wird die Mentor-Mentee Beziehung natürlich bei jedem Paar anders aussehen."
                />
                <ProjectCard
                    title="Spieleabend @ Lichtblick Hasenbergl"
                    description="Der Spieleabend ist ein Projekt mit unserem Haven Lichtblick Hasenbergl, bei dem du, zusammen mit mindestens einem anderen Sailsetter, einmal im Monat den Lichtblick Hasenbergl besuchst und einen Spieleabend veranstaltest. Dabei lernt ihr zuvor die Spielregeln und spielt dieses dann zusammen mit einer kleinen Gruppe an Kindern."
                />
                <ProjectCard
                    title="Projektwochen Naturwissenschaften @ Lichtblick Hasenbergl"
                    description="Die Projektwochen Naturwissenschaften sind ein Projekt am Kindergarten unseres Havens Lichtblick Hasenbergl. Dabei bereitest du zusammen mit ein bis drei andern Sailsettern naturwissenschaftliche Experimente für Kindergartenkinder vor. Diese finden dann in vier aufeinanderfolgenden Wochen im Januar 2024 jeweils an einem Vormittag pro Woche statt."
                />
                <ProjectCard
                    title="Verstehendes Lesen @ Lichtblick Hasenbergl"
                    description="Verstehendes Lesen, ist ein 1:1 Projekt mit unserem Haven Lichtblick Hasenbergl. Einmal pro Woche liest du gemeinsam mit einem Kind im Grundschulalter. Dabei geht es darum das Textverständnis des Kindes zu verbessern. Für dieses Projekt suchen wir explizit nach Pädagogik- und Lehramt-Studierenden."
                />
                <ProjectCard
                    title="Interesse oder Fragen?"
                    description="Wenn du Interesse an einem unserer Projekte hast, oder Fragen zu diesen hast, dann schreib uns gerne per Mail oder social media."
                />
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
    <Statements />
    <Projects />
   </>
  )
}