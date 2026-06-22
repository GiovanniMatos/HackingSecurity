"use client";

import Image from 'next/image'
import background from '../public/bgimage.png'
import ebook from '../public/ebook.png'
import Lista from './components/lista'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  function checkout() {
    router.push('https://pay.monetizze.com.br/KCA465240')
  }

  return (
    <div>
      <div className="absolute inset-0 z-0">
        <Image
          alt="background"
          src={background}
          placeholder="blur"
          quality={100}
          className="opacity-20"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <header className='bg-black pt-10 text-center text-white w-full'>
          <p>🔥 Mais de 150 páginas de conteúdo prático 🔥</p>
        </header>

        <div className='flex mb-7 ml-2'>
          <div>
            <h1 className='mt-5 mb-1 text-5xl lg:text-7xl lg:mb-2 lg:mt-20'>Anonymous Hacking</h1>
            <p className='lg:text-2xl'>Aprenda Hacking do Zero ao Avançado</p>
            <p className='hidden lg:text-2xl lg:block'>Com mais de 150 páginas de conteúdo completo e prático sobre pentest<br/>em infraestrutura de redes, aplicações web, servidores e anonimato real</p>
          </div>
          <Image
            alt="E-book"
            src={ebook}
            placeholder="blur"
            quality={100}
            sizes='30vw'
          />
        </div>
        <p className='block lg:text-2xl lg:hidden text-center mb-3'>Com mais de 150 páginas de conteúdo completo e prático sobre pentest em infraestrutura de redes, aplicações web, servidores e anonimato real</p>
        <button className='hover:bg-emerald-600 pl-15 pr-15 pt-5 pb-5 mb-3 bg-green-400 rounded-md font-bold lg:text-2xl' onClick={checkout}>Comprar</button>
        <hr className='p-1 w-85 caret-blue-50' />
      </div>
      <Lista />
    </div>
  );
}
