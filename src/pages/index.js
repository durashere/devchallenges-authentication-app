import Head from 'next/head';
import DefaultLayout from '../components/layouts/DefaultLayout';
import HomePage from '../components/templates/HomePage';
import nookies from 'nookies';
import {firebaseAdmin} from '../../firebaseAdmin';

export default function Home(props) {
  return (
    <DefaultLayout uid={props.uid} photo={props.photo}>
      <Head>
        <title>Authentication App</title>
      </Head>
      <HomePage props={props} />
    </DefaultLayout>
  );
}

export const getServerSideProps = async ctx => {
  try {
    const cookies = nookies.get(ctx);
    // console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const {uid, email} = token;

    // console.log('token:', token);

    const user = await firebaseAdmin
      .auth()
      .getUser(uid)
      .then(userRecord => {
        return {
          name: userRecord.displayName || 'undefined',
          phone: userRecord.phoneNumber || 'undefined',
          photo: userRecord.photoURL || 'https://via.placeholder.com/80',
        };
      })
      .catch(error => {
        console.log('Error fetching user data:', error);
      });

    const {name, phone, photo} = user;

    return {
      props: {email, uid, name, phone, photo},
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
      props: {},
    };
  }
};
