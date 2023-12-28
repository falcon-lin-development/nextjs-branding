import NavigationCard from '@/components/NavigationCard';

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <NavigationCard title="Auth Demo" path="/auth-demo" />
      <NavigationCard title="CSS Demo" path="/css-demo" />
      <NavigationCard title="Contentful Demo" path="/contentful" />
      {/* Add more cards as needed */}
    </div>
  );
}
