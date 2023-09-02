import React from 'react';
import {TextInput} from '../../../components/shared/TextInput';
import crypto from 'crypto';
import {ServerSideFetcher} from '../../../utils/ServerSideFetcher';
import {DataStorage} from '../../../utils/DataStorage';
import {redirect} from 'next/navigation';

export default function Page() {
  async function checkCredentials(formData: FormData) {
    'use server';

    const login = formData.get('login');
    const password = formData.get('password');

    if (typeof login !== 'string' || typeof password !== 'string') {
      return {success: false};
    }

    const userPassHash = await new DataStorage().hashGet('adminUsers', login);

    const passHash = crypto.createHash('sha256')
      .update(password as string)
      .digest('hex');

    if (userPassHash === passHash) {
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
