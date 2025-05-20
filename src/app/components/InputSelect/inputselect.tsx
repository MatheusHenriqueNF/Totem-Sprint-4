"use client";
import { useState, useRef, useEffect } from "react";

interface InputFilterProps {
  placeholderText: string;
  options: { label: string; value: string }[];
  onSelect: (valor: string) => void;
}

export default function InputFilter({ placeholderText, options, onSelect }: InputFilterProps) {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current !== event.target
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6 relative">
      <div className="relative w-[1500px] h-[150px] border border-[#3B48EF] rounded-full bg-white px-8 py-5 flex items-center text-3xl">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholderText}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full outline-none text-[#3B48EF] bg-transparent"
        />
      </div>

      {isFocused && (
        <div
          ref={dropdownRef}
          className="absolute top-[180px] w-[1400px] bg-white border rounded-lg shadow-md max-h-96 overflow-auto z-10"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={`${option.label}-${index}`} // 🔑 Evita duplicidade
                className="p-4 text-2xl text-gray-700 hover:bg-gray-200 cursor-pointer"
                onMouseDown={() => {
                  setSearch(option.label);
                  setIsFocused(false);
                  onSelect(option.value); // ✅ Envia apenas o nome da estação
                }}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500">Nenhuma opção encontrada</div>
          )}
        </div>
      )}
    </div>
  );
}
