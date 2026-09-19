import React from "react";
import {cva, VariantProps} from "class-variance-authority";
import Image from "next/image";

const styles = cva("relative p-8 sm:py-16 lg:py-32", {
    variants: {
        background: {
            sand: "bg-sand",
            dune: "bg-dune",
            ink: "bg-ink text-sand",
        },
    },
    defaultVariants: {
        background: "sand",
    },
});

export interface Props extends VariantProps<typeof styles> {
    children: React.ReactNode;
    className?: string;
    backgroundImage?: string;
}

export default function Section({
                                    background,
                                    children,
                                    backgroundImage,
                                    className,
                                }: Props) {
    return (
        <section className={styles({ background, className: className })}>
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt="Hero background image"
                    fill
                    className="absolute -z-10 object-cover"
                />
            )}
            <div className="container mx-auto">{children}</div>
        </section>
    );
}
