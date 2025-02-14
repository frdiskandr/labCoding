'use client'
import React from "react";

type TypeProps = {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({
    children,
    props,
}: {
    children?: React.ReactNode;
    props?: TypeProps;
}) {
    const { className, onClick, disabled } = props?? {};

    return (
        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" + ' ' + className}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
}
