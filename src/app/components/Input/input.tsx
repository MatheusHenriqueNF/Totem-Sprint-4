"use client";
import React, { useState } from "react";

type InputProps = {
    placeholder?: string;
    corTexto?: string;
    label?: string;
};

const Input: React.FC<InputProps> = ({
    placeholder = 'Digite o texto',
    corTexto = '#3B48EF',
    label = 'Label'
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className="relative w-full">
            <label
                className={`absolute left-20 mt-[-8] bg-white transition-all duration-200 pointer-events-none ${
                    isFocused || value ? 'top-0 text-xs  opacity-100' : 'opacity-0'
                }`}
                style={{ color: corTexto }}
            >
                {label}
            </label>
            <input
                className="w-full h-25 px-10 mb-20 border border-[#3B48EF] rounded-full text-3xl"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ color: corTexto, backgroundColor: 'white' }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
}

export default Input;