import { NextPage } from 'next';
// import Image from 'next/image';
import client from '@/data/contentful';
import Breadcrumb from '@/components/BreadCrump.client';
interface Entry {
  sys: {
    id: string;
  };
  fields: Record<string, any>;
}

async function getData(): Promise<Entry[]> {
  const entries = await client.getEntries();
  return entries.items;
}

const Page: NextPage = async () => {
  const entries: Entry[] = await getData();

  return (
    <>
      <Breadcrumb />
      <div>contentful</div>
      <div>
        {entries.map((entry) => (
          <div key={entry.sys.id}>
            <h2>{entry.fields.title}</h2>
            <p>{entry.fields.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Page;
