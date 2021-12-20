import matter from 'gray-matter';
import markdownIt from 'markdown-it';
import { supabase } from './supabase';

const uploadPost = async (file: File) => {
  const textContent = await file.text();
  const { data, content } = matter(textContent);
  const parser = markdownIt();
  const parsedContent = parser.render(content);

  await supabase.from('blogs').upsert(
    [
      {
        title: data.title,
        description: data.description,
        content: parsedContent
      }
    ],
    {
      onConflict: 'title'
    }
  );
};

export default uploadPost;
