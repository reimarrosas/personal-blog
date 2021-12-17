import type { PostgrestResponse } from '@supabase/supabase-js';
import type { NextPage, GetStaticPropsResult } from 'next';

import Container from '../components/Container';
import PostSignature from '../components/PostSignature';
import { copiedArrayReverse } from '../utils/copiedArrayReverse';
import { parseToReadableDate } from '../utils/rfcDateToReadable';
import { supabase } from '../utils/supabase';
import { PostSignatureType, Width } from '../utils/types';

const Home: NextPage<StaticPropsResult> = ({ data }) => {
  return (
    <main>
      <Container size={Width.MD} center={true}>
        <PostSignature />
        {copiedArrayReverse(data.data)?.map(entry => (
          <PostSignature
            title={entry.title}
            date={parseToReadableDate(entry.updated_at)}
            description={entry.description}
          />
        ))}
      </Container>
    </main>
  );
};

type StaticPropsResult = {
  data: PostgrestResponse<PostSignatureType>;
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<StaticPropsResult>
> {
  const SECONDS_IN_A_DAY = 60 * 60 * 24;
  const data: PostgrestResponse<PostSignatureType> = await supabase
    .from('blogs')
    .select('id, updated_at, title, description');

  return {
    props: { data },
    revalidate: SECONDS_IN_A_DAY
  };
}

export default Home;
