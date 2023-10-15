import React, {ComponentPropsWithRef} from "react";

export interface Props extends ComponentPropsWithRef<"button"> {
    className?: string;
    children: React.ReactNode;
}

export default function Button({
                                   children,
                                   className,
                                   ...props
                               }: Props) {
    const baseStyle = "ml-auto mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300 hover:shadow-md hover:bg-blue-500";

    return (
        <button className={`${baseStyle} ${className || ""}`} {...props}>
            {children}
        </button>
    );
}
