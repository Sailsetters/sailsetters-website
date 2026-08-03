import React from 'react';
import Section from "@/components/Section";
import {DocumentIcon} from '@heroicons/react/24/outline';

function Impressum() {

    // Random position for the blue orb
    const top = Math.random() * 80 + 10 + '%';
    const left = Math.random() * 70 + 10 + '%';

    return (
        <Section>
                <div className="max-w-xl mx-auto mt-10 p-6  bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl">

                    {/* Red orb */}
                    <div className="absolute w-16 h-16 bg-burnt/30 blur-xl rounded-full opacity-40" style={{ top: top, left: left, width: 100, height: 100 }}></div>

                    <h1 className="text-2xl font-bold text-black">Impressum</h1>
                    <h1 className='text-lg font-bold border-b-2 border-gray-300 pb-2 mb-5 text-black' >Angaben gemäß § 5 TMG</h1>
                    <div>
                        <h1></h1>
                        <p className="mb-3 text-black">
                            Sailsetters e.V.<br/>
                            Zedernweg 6<br/>
                            80939 München
                        </p>
                        <p className="mb-3 text-black">
                            <span className="font-semibold">Registergericht:</span> Amtsgericht München
                            <br />
                            <span className="font-semibold">Registernummer:</span> VR 210317
                        </p>
                        <p className="mb-3 text-black"><span className="font-semibold">Vertreten durch:</span><br/>Navid Rajaei</p>
                        <h1 className='text-xl font-bold mb-3 mt-5 text-black' >Kontakt</h1>
                        <p className="mb-3 text-black">
                            <span className="font-semibold">Telefon:</span> +49 176 32369363<br/>
                            <span className="font-semibold">Telefax:</span> +49 89 54645686<br/>
                            <span className="font-semibold">E-Mail:</span> contact(at)sailsetters.de
                        </p>
                        {/* Since we don't have a Umsatzsteuer ID we don't need to have it in the impressum. */}
                        {/* <h1 className='text-xl font-bold mb-3 mt-5 text-black' >Umsatzsteuer-ID</h1> */}
                        {/* <p className="mb-3 text-black">
                            <span className="font-semibold">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</span> DE123456789
                        </p> */}
                        <h1 className='text-xl font-bold mb-3 mt-5 text-black' >Redaktionell verantwortlich</h1>
                        <p className="mb-3 text-black">
                            Navid Rajaei<br/>
                            c/o Sailsetters e.V.<br/>
                            Zedernweg 6<br/>
                            80939 München
                        </p>
                        <h1 className='text-xl font-bold mb-3 mt-5 text-black' >EU-Streitschlichtung</h1>
                        <p className="mb-3 text-black">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr" className="text-blue-500 break-words"> https://ec.europa.eu/consumers/odr</a>.
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                        <p className="mb-3 text-black font-bold flex sm:flex-row flex-col">
                            <span>Verbraucherstreitbeilegung/</span><span>Universalschlichtungsstelle:</span>
                        </p>

                        <p className="mb-3 text-black">
                            Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>
                </div>
        </Section>
    );
}

export default Impressum;
