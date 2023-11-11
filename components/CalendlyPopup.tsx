import React from "react";
import { InlineWidget } from "react-calendly";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


export interface CalendlyPopupProps {
    className?: string;
    children: React.ReactNode;
}

export default function CalendlyPopup ({children, className, ...props}: CalendlyPopupProps) {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const baseStyle = "text-lg sm:text-xl text-center text-blue-800 p-2 sm:p-4 rounded-lg shadow-md bg-blue-500/40 hover:bg-blue-500/60 hover:text-blue-50 transition-all duration-200 w-full";

    return (
        <>
            <button onClick={openModal} className={`${baseStyle} ${className || ""}`} {...props}>
                {children}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">

                                <InlineWidget url="https://calendly.com/sailsetters/kennenlerngesprach"/>

                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    );
};