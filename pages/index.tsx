import type { PostgrestResponse } from '@supabase/supabase-js';
import type { NextPage, GetStaticPropsResult } from 'next';
import Link from 'next/link';

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
        {copiedArrayReverse(data.data)?.map(entry => (
          <Link key={`${entry.id}link`} href={`/posts/${entry.id}`}>
            <a>
              <PostSignature
                title={entry.title}
                date={parseToReadableDate(entry.updated_at)}
                description={entry.description}
                key={entry.id}
              />
            </a>
          </Link>
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
  const SECONDS_IN_AN_HOUR = 60 * 60;
  const data: PostgrestResponse<PostSignatureType> = await supabase
    .from('blogs')
    .select('id, updated_at, title, description');

  return {
    props: { data },
    revalidate: SECONDS_IN_AN_HOUR
  };
}

export default Home;
