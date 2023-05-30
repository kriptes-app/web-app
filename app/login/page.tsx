'use client';

import Link from 'next/link';
import { Navbar, Footer } from '@/app/components/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'authenticated') router.push('/dashboard');

  return (
    <section className="login">
      <Navbar />
      <div className="login-header">
        <h1></h1>
      </div>
      <Footer />
    </section>
  );
}
