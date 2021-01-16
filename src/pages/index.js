import Head from 'next/head';
import Default from '../components/layouts/DefaultLayout';
import HomePage from '../components/templates/HomePage';

export default function Home() {
  return (
    <Default>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <HomePage />
    </Default>
  );
}
