import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p">
      {/* bg-[url('/img/hero-image.png')] bg-cover */}
      <div className="flex flex-col justify-center items-center gap-4 h-[32.5rem]">
        <Image
          src="/img/hero-image.png"
          alt="redBus"
          fill
          className="-z-10 max-h-[32.5rem] mt-[6.1rem]"
        />
        <h1 className='text-md md:text-4xl font-bold'>India's No. 1 Online Bus Ticket Booking Site</h1>
        <div>SEARCH BUSES</div>
      </div>
      <div>TRENDING OFFERS</div>
      <div>Some Banner</div>
      <div>NOW, GET MORE THAN JUST BUS TICKETS WITH REDBUS!</div>
      <div>ENJOY THE APP!</div>
    </main>
  );
}
