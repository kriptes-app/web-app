'use client';

import { Navbar, Footer } from '@/app/components/components';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'authenticated') router.push('/dashboard');

  return (
    <div className="login min-h-screen">
      {/* <Navbar /> */}
      <div className="login-header">
        <h1>Login to Kriptes</h1>
        <button
          className="btn"
          onClick={() => {
            signIn('discord');
          }}
        >
          Aiuto
        </button>
      </div>
      <Footer />
    </div>
  );
}
