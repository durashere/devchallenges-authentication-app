import Link from 'next/link';
import {useState} from 'react';
import {firebaseClient} from '../../../firebaseClient';
import Button from '../elements/Button';
import Input from '../elements/Input';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="sm:w-96">
      <h1 className="mt-6 text-lg font-semibold text-gray-800">Login</h1>
      <form>
        <Input
          icon={'mail'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={'Email'}
          className="mt-8"
        />
        <Input
          type={'password'}
          icon={'lock'}
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder={'Password'}
          className="mt-4"
        />
        <Button
          primary
          fullWidth
          onClick={async e => {
            e.preventDefault();
            await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
            window.location.href = '/';
          }}
          type="submit"
          className="mt-6 font-semibold"
        >
          Login
        </Button>
      </form>
      <p className="mt-6 text-center text-trueGray-500">
        Don’t have an account yet?{' '}
        <Link href="/signup">
          <span className="text-lightBlue-500">SignUp</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
