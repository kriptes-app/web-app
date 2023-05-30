import { Navbar, Footer, KnowledgeCard } from './components/components';
import Link from 'next/link';
import type { KnowledgeCardProps } from './components/KnowledgeCard';

export default function Home() {
  const knowledgeData: KnowledgeCardProps = [
    {
      dataValue: '2.5 quintillion',
      text: 'bytes of data',
      icon: 'custom-icon fa-duotone fa-binary',
    },
    {
      dataValue: '40.000 searches',
      text: 'every second',
      icon: 'custom-icon fa-duotone fa-user-magnifying-glass',
    },
    {
      dataValue: '600 milion',
      text: 'instagram users in the world',
      icon: 'custom-icon fa-brands fa-instagram',
    },
    {
      dataValue: '16 bilion',
      text: 'text messages',
      icon: 'custom-icon fa-duotone fa-comment-dots',
    },
  ];

  return (
    <main>
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <div className="hero flex flex-row items-center justify-between mx-40 mt-[8rem] gap-40">
        <div className="hero__text">
          <h1 className="text-5xl">
            Control how companies handle your data to achive{' '}
            <span className="underline text-violet-500">Absolute Privacy</span>
          </h1>
          <p className="text-xl mt-5">
            Manage all your data in one place and keep track of information that
            companies exploit against you.
          </p>
          <button className="text-lg text-white bg-violet-600 shadow-btn border-black rounded-full px-4 py-3 hover:scale-105 ease-linear duration-150 mt-5">
            <Link href={'/api/auth/login'}>Get started with Kriptes</Link>
          </button>
        </div>
        <img
          src="/assets/hero-image.png"
          width={600}
          alt="Girl in a perfect study environment"
        />
      </div>
      {/* ========== END HERO SECTION ========== */}

      {/* ========== KNOWLEDGE SECTION ========== */}
      <h1 className="text-[2rem] text-center mb-10 mt-[7rem]">
        How much data do we really produce?
      </h1>

      <section className="knowledge m-auto">
        <div className="world-card p-5 flex items-center justify-center rounded-full">
          <div className="text-container text-center grid grid-cols-2 gap-10">
            {knowledgeData.map((data) => {
              return (
                <KnowledgeCard
                  key={data.dataValue}
                  dataValue={data.dataValue}
                  text={data.text}
                  icon={data.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* ========== END KNOWLEDGE SECTION ========== */}

      <Footer />
    </main>
  );
}
