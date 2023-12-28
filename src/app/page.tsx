import Image from 'next/image';
import client from '@/data/contentful';

async function getData() {
  const entries = await client
    .getEntries
    //   {
    //   // content_type: 'blog',
    // }
    ();
  return entries.items;
}

export default async function Home() {
  const entries: any[] = await getData();

  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.sys.id}>
          <h2>{entry.fields.title}</h2>
          <p>{entry.fields.description}</p>
        </div>
      ))}
    </div>
  );
}
