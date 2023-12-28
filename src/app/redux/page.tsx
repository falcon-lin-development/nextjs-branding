import { NextPage } from 'next';
import Breadcrumb from '@/components/BreadCrump.client';

const Page: NextPage = () => {
  return (
    <>
      <Breadcrumb />
      <div>redux</div>
    </>
  );
}
export default Page;