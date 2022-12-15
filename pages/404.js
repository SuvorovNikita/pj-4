import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
    </>
  );
};

export default Error;
