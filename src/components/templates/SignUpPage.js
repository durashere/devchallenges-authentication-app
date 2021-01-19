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
      <h1 className="mt-6 text-lg font-semibold text-gray-800">
        Join thousands of learners from around the world
      </h1>
      <h2 className="mt-4 text-gray-800">
        Master web development by making real-life projects. There are multiple paths for you to
        choose
      </h2>
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
            await firebaseClient.auth().createUserWithEmailAndPassword(email, pass);
            window.location.href = '/';
          }}
          type="submit"
          className="mt-6"
        >
          Start coding now
        </Button>
      </form>
      <p className="mt-6 text-center text-trueGray-500">
        Adready a member?{' '}
        <Link href="/login">
          <span className="text-lightBlue-500">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
