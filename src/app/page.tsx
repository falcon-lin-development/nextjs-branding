import NavigationCard from '@/components/NavigationCard';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-wrap">
      <NavigationCard title="Aws Cognito Demo" path="/cognito" />
      <NavigationCard title="Materail-UI Demo" path="/mui" />
      <NavigationCard title="Contentful Demo" path="/contentful" />
      <NavigationCard title="State Mangement Demo" path="/redux" />
      {/* Add more cards as needed */}
    </div>
  );
}
export default Home;