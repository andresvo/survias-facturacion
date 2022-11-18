import Head from 'next/head'
import Image from 'next/image'
import foto from '../public/Desktop/Header-Survias-Desktop.jpg'
import fotoM from '../public/Mobile/Header-Survias-Mobile.jpg'
import boleta from '../public/SVG/Recurso 1.svg'
import logo from '../public/SVG/Recurso 6.svg'
import iconoWeb from '../public/SVG/Recurso 2.svg'
import iconoTwitter from '../public/SVG/Recurso 3.svg'
import iconoInsta from '../public/SVG/Recurso 4.svg'
import iconoTel from '../public/SVG/Recurso 5.svg'

export default function Home() {
  return (
    <div className='fondo flex flex-col justify-between'>
      <Head>
        <title>Survías</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='lg:grid grid-cols-2'>
        <Image src={foto} alt='foto' className='hidden lg:block foto' />
        <Image src={fotoM} alt='foto' className='lg:hidden w-full' />
        <div className='mx-8 flex flex-col justify-center items-center lg:items-start'>
          <Image src={boleta} alt='foto' className='w-16 lg:w-28 mb-2 lg:mb-6 mt-2 lg:mt-0' />
          <h1 className={'font-bold text-2xl lg:text-6xl line-after color-primary font-gbold'}>¡GRACIAS!</h1>
          <p className='text-sm lg:text-2xl mt-6 leading-5 lg:leading-10 font-gbook text-center lg:text-left'>Ya estás suscrito. Desde el próximo periodo de facturación comenzarás a recibir tu boleta/factura a través de tu correo electrónico.</p>
        </div>
      </main>

      <footer className='lg:flex justify-between items-end px-8 lg:px-16 lg:pb-8'>
        <Image src={logo} alt='logo Survías' className='lg:hidden w-32 mx-auto lg:mt-10 mb-6' />
        <ul className='grid grid-cols-2 lg:flex lg:flex-row font-bold font-gbold text-xs lg:text-base'>
          <li>
            <a href="https://www.survias.cl" className='flex items-center mr-12 mb-2 lg:mb-0'>
              <Image src={iconoWeb} alt='ícono' className='w-6 lg:w-8 mr-2' />
              survias.cl
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Ruta5Survias" className='flex items-center mr-12 mb-2 lg:mb-0'>
            <Image src={iconoTwitter} alt='ícono' className='w-6 lg:w-8 mr-2' />
            @Ruta5Survias
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/survias_/" className='flex items-center mr-12 mb-2 lg:mb-0'>
              <Image src={iconoInsta} alt='ícono' className='w-6 lg:w-8 mr-2' />
              @survias_
            </a>
          </li>
          <li>
            <a href="tel:6002526000" className='flex items-center'>
              <Image src={iconoTel} alt='ícono' className='w-6 lg:w-8 mr-2' />
              600 252 6000
            </a>
          </li>
        </ul>
        <Image src={logo} alt='logo Survías' className='hidden lg:block w-56' />
      </footer>
    </div>
  )
}
