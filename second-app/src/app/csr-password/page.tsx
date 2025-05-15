"use client"
import { useState, useEffect } from "react"
import SliderBar from "@/components/passwords/SliderBar"
import SwitchInput from "@/components/passwords/SwitchInput"

const PasswordsPage = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [longitudPass, setLongitudPass] = useState<number>(10)
    // switchers
    const [mayusculas, setMayusculas] = useState<boolean>(true)
    const [minusculas, setMinusculas] = useState<boolean>(true)
    const [numeros, setNumeros] = useState<boolean>(true)
    const [simbolos, setSimbolos] = useState<boolean>(true)

    const [showToast, setShopwToast] = useState<boolean>(false)

    useEffect(() => {
        generatePassword()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [longitudPass, mayusculas, minusculas, numeros, simbolos])

    const generatePassword = () => {
        let characters = ""

        if (mayusculas) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if (minusculas) {
            characters += "abcdefghijklmnopqrstuvwxyz"
        }
        if (numeros) {
            characters += "0123456789"
        }
        if (simbolos) {
            characters += "!@#$%^&*()_+[]{}|;:,.<>?"
        }

        let password = ""

        for (let i = 0; i < longitudPass; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        setInputValue(password)
    }

    const copyPassword = () => {
        navigator.clipboard.writeText(inputValue)
        setShopwToast(true)

    }



    return (
        <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
            <div className="border border-gray-200 bg-white p-5 rounded">
                <h2>Password Generate</h2>
                <hr />
                <div className="flex">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="new password"
                        className="rounded p-2 bg-white my-2 border border-gray-100"
                    />
                    <button
                        onClick={copyPassword}
                        className="w-20 text-center flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="size-6 text-gray-400 hover:text-gray-600"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                        </svg>
                    </button>
                </div>
                <SliderBar value={longitudPass} changeValue={setLongitudPass} />
                <p>{longitudPass}</p>
                <div className="flex justify-between py-2">
                    <SwitchInput
                        changeValue={setMayusculas}
                        value={mayusculas}
                        title="Mayúsculas"
                    />
                    <SwitchInput
                        value={minusculas}
                        changeValue={setMinusculas}
                        title="Minúsculas"
                    />
                </div>
                <div className="flex justify-between pb-3">
                    <SwitchInput
                        value={numeros}
                        changeValue={setNumeros}
                        title="Números"
                    />
                    <SwitchInput
                        value={simbolos}
                        changeValue={setSimbolos}
                        title="Símbolos"
                    />
                </div>
                <button
                    className="w-full bg-blue-500 text-white rounded p-2"
                    onClick={generatePassword}
                >Generate</button>


            </div>

            <div className="absolute bottom-5 right-5">
                {showToast && (

                    <p className="bg-green-400 text-sm text-center text-white rounded p-2 w-full mt-5 flex justify-between gap-5">
                        <span>Contraseña copiada </span> <svg onClick={() => setShopwToast(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            className="size-6 hover:cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </p>
                )}

            </div>

        </div>
    )
}

export default PasswordsPage