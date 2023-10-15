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
    const baseStyle = "bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300 hover:shadow-md hover:bg-blue-500";

    return (
        <Link href={`${href}`} className="ml-auto">
            <button className={`${baseStyle} ${className || ""}`} {...props}>
                {children}
            </button>
        </Link>
    );
}
