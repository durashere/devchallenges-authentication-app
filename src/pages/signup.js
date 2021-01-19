import Head from 'next/head';
import AuthLayout from '../components/layouts/AuthLayout';
import SignUpPage from '../components/templates/SignUpPage';

const signup = () => {
  return (
    <AuthLayout>
      <Head>
        <title>SignUp</title>
      </Head>
      <SignUpPage />
    </AuthLayout>
  );
};

export default signup;
