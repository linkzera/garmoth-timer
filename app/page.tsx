import { GarmothTable } from '@/components/GarmothTable'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='md:scale-150'>
        <h1 className='text-center mb-3 text-xl'>Horário do Garmoth</h1>
        <GarmothTable />
      </div>
    </main>
  )
}
