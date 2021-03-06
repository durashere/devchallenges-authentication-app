import Head from 'next/head';
import AuthLayout from '../components/layouts/AuthLayout';
import LoginPage from '../components/templates/LoginPage';

const login = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <LoginPage />
    </AuthLayout>
  );
};

export default login;
