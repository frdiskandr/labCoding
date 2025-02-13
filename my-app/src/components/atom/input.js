'use client'
function Input({ type, placeholder, onChange, id,register,  className="bg-white text-black p-2 rounded-sm w-full"}) {
    return (
        <input
            {...register}
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
        />
    );
}

export default Input;
