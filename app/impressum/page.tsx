import React from 'react'
import Image from 'next/image';

const Impressum = () => {
    return (
        <div className='bg-gray-300 relative h-screen w-screen flex' >
            <div className='max-w-6xl m-auto flex flex-wrap justify-center gap-10' >
                <div>
                    <h1 className='text-2xl text-bold' >Impressum</h1>
                    <h2 className='text-md' >Angaben gemäß § 5 TMG</h2>
                </div>
                <div className='p-2'>

                    <p className='p-2'>
                        Sailsetters e.V.<br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                    </p>
                    <p className='p-2'>
                        <strong>Vertreten durch</strong><br />
                        Max Mustermann
                    </p>
                    <p className='p-2'>
                        <strong>Kontakt</strong> <br />
                        Telefon: 01234-789456<br />
                        E-Mail: <a href='mailto:email@example.com'>email@example.com</a>
                    </p >
                    <p className='p-2'>
                        Rest
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Impressum