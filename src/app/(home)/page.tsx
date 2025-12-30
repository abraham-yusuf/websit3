import Link from 'next/link'
import type { ReactElement } from 'react'

export default function HomePage(): ReactElement {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 py-16 text-center overflow-hidden'>
      {/* Hero Section */}
      <div className='relative z-10 flex flex-col items-center justify-center pt-20 pb-16'>
        <h1 className='text-8xl font-bold tracking-tighter md:text-9xl'>
          W<span className='text-blue-500'>3</span>IDN
        </h1>
        <p className='mt-6 max-w-2xl text-lg text-gray-400 md:text-xl'>
          Advancing blockchain education, research, resources and development Web3 Indonesia.
        </p>

        <div className='mt-10 flex flex-wrap justify-center gap-6'>
          <Link
            href='/blog'
            className='rounded-md border border-green-400 bg-transparent px-8 py-2 text-lg font-medium text-white shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(74,222,128,0.7)]'
          >
            Blog
          </Link>
          <Link
            href='/docs'
            className='rounded-md border border-green-400 bg-transparent px-8 py-2 text-lg font-medium text-white shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(74,222,128,0.7)]'
          >
            Docs
          </Link>
          <Link
            href='/learn'
            className='rounded-md border border-green-400 bg-transparent px-8 py-2 text-lg font-medium text-white shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(74,222,128,0.7)]'
          >
            Learn
          </Link>
        </div>
      </div>

      {/* Hero Glow Effect Background */}
      <div className='absolute top-1/2 left-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]' />

      {/* Family & Community Section */}
      <div className='mt-32 w-full'>
        <h2 className='text-center text-xl font-medium text-gray-400'>Family & Community</h2>
        <div className='mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16'>
            <span className='text-lg font-bold text-white'>BlockdevID</span>
            <span className='text-lg font-bold text-white'>CoindeskID</span>
            <span className='text-lg font-bold text-white'>Coinvestasi</span>
            <span className='text-lg font-bold text-white'>AirdropFinder</span>
            <span className='text-lg font-bold text-white'>Cryptoiz</span>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className='mt-32 pb-20'>
        <h2 className='text-5xl font-bold md:text-6xl'>
          Mau belajar <br />
          <span className='bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent'>Web3</span> & Crypto?
        </h2>
        <p className='mt-6 max-w-2xl text-gray-400 text-lg mx-auto'>
          Belajar bersama kami, berkembang dan bertumbuh bersama
          <br />
          Learning, Improving, Envolving and Building Together!
        </p>
      </div>
    </main>
  )
}
