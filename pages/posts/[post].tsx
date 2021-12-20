import { PostgrestResponse } from '@supabase/supabase-js';
import { GetStaticProps, NextPage } from 'next';
import Container from '../../components/Container';
import { supabase } from '../../utils/supabase';
import { Width } from '../../utils/types';
import styles from '../../styles/Posts.module.css';

const Post: NextPage<{ content: string }> = ({ content }) => {
  return (
    <main>
      <Container size={Width.MD} center={true}>
        <div
          className={styles.baseDiv}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </main>
  );
};

export async function getStaticPaths() {
  const res: PostgrestResponse<{ id: number }> = await supabase
    .from('blogs')
    .select('id');
  return {
    paths: res.data?.map(datum => ({
      params: { post: `${datum.id}` }
    })),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SECONDS_IN_AN_HOUR = 60 * 60;

  const postData: PostgrestResponse<{
    content: string;
  }> = await supabase
    .from('blogs')
    .select('content')
    .filter('id', 'eq', params?.post);

  return {
    props: {
      content: postData.body![0].content
    },
    revalidate: SECONDS_IN_AN_HOUR
  };
};

export default Post;
