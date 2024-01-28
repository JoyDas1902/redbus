import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex justify-evenly items-center p-5 sticky top-0 bg-inherit">
      <Link href="/">
        <Image src="/img/logo.svg" alt="redBus" width={86} height={57} />
      </Link>
      <Link href="/">Bus Tickets</Link>
      <Link href="/ryde">Cab Rental</Link>
      <Link href="/railways">Train Tickets</Link>
      <Link href="/help">Help</Link>
    </div>
  );
};

export default Nav;
