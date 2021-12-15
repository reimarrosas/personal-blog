import Head from 'next/head';

const HeadWrapper: React.FC = () => {
  return (
    <Head>
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Personal Blog of Reimar Rosas. Contains programming progress, interesting tech, projects, and more.'
      />
      <meta
        name='keywords'
        content='Blog, Personal, Programming, Tech, Projects'
      />
      <title>Autodidactics | Tech, Programming, and more!</title>
    </Head>
  );
};

export default HeadWrapper;
