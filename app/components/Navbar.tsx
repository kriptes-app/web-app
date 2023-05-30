import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full backdrop-blur-xl">
      <nav className="flex justify-between items-center p-1 px-10 my-3 mx-40">
        <a className="nav-brand" href="/">
          <Image
            src={'/assets/letter-logo.svg'}
            width={50}
            height={50}
            alt="Zenon Logo"
          />
        </a>
        <div className="navbar-tabs flex items-center gap-[4rem]">
          <ol className="list-none flex gap-7">
            <li className="text-lg">
              <a
                className="hover:text-violet-500 ease-in duration-150"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="text-lg">
              <a
                className="hover:text-violet-500 ease-in duration-150"
                href="/features"
              >
                Features
              </a>
            </li>
            <li className="text-lg">
              <a
                className="hover:text-violet-500 ease-in duration-150"
                href="/team"
              >
                About our Team
              </a>
            </li>
            <li className="text-lg">
              <a
                className="hover:text-violet-500 ease-in duration-150"
                href="/pricing"
              >
                Pricing
              </a>
            </li>
          </ol>
          <button className="text-lg border-2 border-violet-600 rounded-full px-4 py-2 hover:scale-105 ease-linear duration-150">
            <Link href={'/login'}>Login to Kriptes</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}
