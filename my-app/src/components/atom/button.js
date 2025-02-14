'use client'
export function Button(props) {
    const { children, onClick } = props;

    return (
        <button onClick={onClick} className={'bg-slate-600 p-2 rounded' + " " + props.className}>
            {children}
        </button>
    );
}
