import React from 'react';
import Section from "@/components/Section";

function Impressum() {

    // Fixed rather than random so the orb does not shift between the server
    // and client renders.
    const top = '35%';
    const left = '25%';

    return (
        <Section>
                <div className="max-w-xl mx-auto mt-10 p-6  bg-opacity-60 backdrop-blur-md rounded-xl shadow-2xl">

                    {/* Red orb */}
                    <div className="absolute w-16 h-16 bg-sunrise/30 blur-xl rounded-full opacity-40" style={{ top: top, left: left, width: 100, height: 100 }}></div>

                    <h1 className="text-2xl text-ink">Impressum</h1>
                    <h1 className='text-lg border-b-2 border-driftwood/40 pb-2 mb-5 text-ink' >Angaben gemäß § 5 TMG</h1>
                    <div>
                        <h1></h1>
                        <p className="mb-3 text-ink">
                            Sailsetters e.V.<br/>
                            Zedernweg 6<br/>
                            80939 München
                        </p>
                        <p className="mb-3 text-ink">
                            <span className="font-semibold">Registergericht:</span> Amtsgericht München
                            <br />
                            <span className="font-semibold">Registernummer:</span> VR 210317
                        </p>
                        <p className="mb-3 text-ink"><span className="font-semibold">Vertreten durch:</span><br/>Navid Rajaei</p>
                        <h1 className='text-xl mb-3 mt-5 text-ink' >Kontakt</h1>
                        <p className="mb-3 text-ink">
                            <span className="font-semibold">Telefon:</span> +49 176 32369363<br/>
                            <span className="font-semibold">Telefax:</span> +49 89 54645686<br/>
                            <span className="font-semibold">E-Mail:</span> contact(at)sailsetters.de
                        </p>
                        {/* Since we don't have a Umsatzsteuer ID we don't need to have it in the impressum. test */}
                        {/* <h1 className='text-xl mb-3 mt-5 text-ink' >Umsatzsteuer-ID</h1> */}
                        {/* <p className="mb-3 text-ink">
                            <span className="font-semibold">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</span> DE123456789
                        </p> */}
                        <h1 className='text-xl mb-3 mt-5 text-ink' >Redaktionell verantwortlich</h1>
                        <p className="mb-3 text-ink">
                            Navid Rajaei<br/>
                            c/o Sailsetters e.V.<br/>
                            Zedernweg 6<br/>
                            80939 München
                        </p>
                        <h1 className='text-xl mb-3 mt-5 text-ink' >EU-Streitschlichtung</h1>
                        <p className="mb-3 text-ink">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr" className="text-port break-words"> https://ec.europa.eu/consumers/odr</a>.
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                        <p className="mb-3 text-ink font-bold flex sm:flex-row flex-col">
                            <span>Verbraucherstreitbeilegung/</span><span>Universalschlichtungsstelle:</span>
                        </p>

                        <p className="mb-3 text-ink">
                            Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>
                </div>
        </Section>
    );
}

export default Impressum;
