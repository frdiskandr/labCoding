'use client'
type PropsType = {
    type?: string;
    className?: string;
    placeholder?: string;
    register?: any;
}

export default function Input({type,className,placeholder, register} : PropsType){
    return(
        <input {...register} type={type} placeholder={placeholder} className={className}/>
    )
}