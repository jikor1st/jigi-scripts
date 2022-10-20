import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { serialize } from 'next-mdx-remote/serialize';

const mdDirectory = path.join(process.cwd(), 'mdDoc');

export async function getMdDoc(id: string) {
  const fullMdPath = path.join(mdDirectory, `${id}.md`);
  const mdExist = fs.existsSync(fullMdPath);

  if (mdExist) {
    const fullPath = path.join(mdDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } else {
    const fullPath = path.join(mdDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const mdxSource = await serialize(matterResult.content);

    return {
      id,
      mdxSource,
      ...matterResult.data,
    };
  }
}
