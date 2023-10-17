import Link from "next/link";
import React, {ComponentPropsWithRef} from "react";

export interface Props extends ComponentPropsWithRef<"button"> {
    className?: string;
    href: string;
    children: React.ReactNode;
}

export default function Button({
                                   children,
                                   className,
                                   href,
                                   ...props
                               }: Props) {
    const baseStyle = "text-lg sm:text-xl text-center text-blue-800 p-2 sm:p-4 rounded-lg shadow-md bg-blue-500/40 hover:bg-blue-500/60 hover:text-blue-50 transition-all duration-200 w-full";

    return (
        <Link href={`${href}`}>
            <button className={`${baseStyle} ${className || ""}`} {...props}>
                {children}
            </button>
        </Link>
    );
}
