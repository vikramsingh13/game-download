import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/game_main_menu.png" 
          alt="Astrocide Background" 
          layout="fill"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-yellow-400 m-2">Astrocide</h1>
        <div className="flex flex-row m-2">
          <a href="#"><button className="bg-white text-black text-5xl font-bold py-2 px-6 rounded-full">Play</button></a>
        </div>
      </div>
    </main>
  )
}
