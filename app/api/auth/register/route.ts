import bcrypt from 'bcrypt';

import { getXataClient } from '@/app/lib/xata';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const xata = getXataClient();
    const body = (await request.text()).split('&');

    if (body.length === 0 || body === undefined)
      return new NextResponse('Body not found', { status: 500 });

    let username = decodeURIComponent(body[0].split('=')[1]);
    let email = decodeURIComponent(body[1].split('=')[1]);
    let psw = decodeURIComponent(body[2].split('=')[1]);

    const password = await bcrypt.hash(psw, 10);

    const user = await xata.db.users.create({
      email: email,
      name: username,
      password: password,
      created_at: new Date(),
    });

    return new NextResponse(JSON.stringify(user, null, 2), { status: 200 });
  } catch (error: any) {
    console.error(error, 'REGISTRATION_ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
