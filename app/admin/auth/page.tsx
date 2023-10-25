import React from 'react';
import {TextInput} from '../../../components/shared/TextInput';
import crypto from 'crypto';
import {DataStorage} from '../../../utils/DataStorage';
import {redirect} from 'next/navigation';
import {cookies} from "next/headers";
import {SESSION_COOKIE} from "../../../consts";

export default function Page() {
  async function checkCredentials(formData: FormData) {
    'use server';

    const login = formData.get('login');
    const password = formData.get('password');

    if (typeof login !== 'string' || typeof password !== 'string') {
      return {success: false};
    }

    const storage = new DataStorage();

    const userPassHash = await storage.hashGet('adminUsers', login);

    const passHash = crypto.createHash('sha256')
      .update(password as string)
      .digest('hex');

    if (userPassHash === passHash) {
      const sessionUUID = crypto.randomUUID();

      const sessionTime = 60 * 15;

      await storage.set(`session-${sessionUUID}`, login, {ex: sessionTime});

      cookies().set(SESSION_COOKIE, sessionUUID, {maxAge: sessionTime});

      redirect('/admin');
    }

    return {success: false};
  }

  return (
    <main>
      <form className="card w-96 bg-neutral text-neutral-content" action={checkCredentials}>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Log In</h2>
          <TextInput name='login' placeholder={'Login'} withFullWidth />
          <TextInput name='password' type={'password'} placeholder={'Password'} withFullWidth />
          <div className="card-actions justify-end">
            <input type='submit' value={'Submit'} className="btn btn-secondary" />
          </div>
        </div>
      </form>
    </main>
  );
}
