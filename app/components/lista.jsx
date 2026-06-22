
import Image from "next/image"
import dynamic from 'next/dynamic'
// import diamante from "../public/diamante.png"
export default function Lista() {
    return (
        <div className="relative z-10">
            <div className="flex flex-row items-center justify-center">
                <p className="text-center">Conteúdo em português pt-br</p>
                <Image
                    src="/diamante.png"
                    alt="diamante"
                    width={23}
                    height={5}
                />
            </div>
            <div className="m-1">
                <div className="mt-4 relative flex items-center justify-center border-2 border-b-cyan-50 py-3 bg-gray-800 rounded-t-2xl text-white text-xl">
                    <h1>Conteúdo do E-book</h1>
                    <div className="absolute right-4 bg-red-500 rounded-full w-6 h-6"></div>
                </div>
                <div className="border-2 border-b-cyan-50 pt-3 pb-3 bg-black text-green-400 text-sm mx-auto w-full">
                    <ul className="ml-1 pl-5 text-left lg:text-2xl space-y-1">
                        <li className="text-white mb-4">root@anonymous:~# show content </li>
                        <li>✅ Preparando o ambiente do zero</li>
                        <li>🐧 Linux e Windows para Hackers</li>
                        <li>🌐 Redes de Computadores</li>
                        <li>🎯 Apresentação do Pentest</li>
                        <li>💻 Como aplicações web funcionam</li>
                        <li>🔍 Coleta de informações do alvo</li>
                        <li>🛰️ Exploração de Infraestrutura de Rede</li>
                        <li>🧰 Principais ferramentas de Pentest</li>
                        <li>💥 Ataques do zero ao avançado com comandos e payloads</li>
                        <li>📤 Shell Upload e Bypass</li>
                        <li>🔑 Descobrindo Senhas com Brute Force</li>
                        <li>🎣 Desenvolvendo ferramenta de Phishing</li>
                        <li>⬆️ Escalação de Privilégio avançada</li>
                        <li>🕶️ Anonimato e ocultação de rastros — TOR não é o suficiente</li>
                        <li>🧪 Exemplos práticos</li>
                        <li>🚀 E muito mais...</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}