'use client'
export default function Form ({children, onSubmit} : {children: React.ReactNode, onSubmit?: React.FormEventHandler<HTMLFormElement>}){
    return(
        <form onSubmit={onSubmit} className="w-1/2 mx-auto flex justify-center p-2">
            {children}
        </form>
    )
}