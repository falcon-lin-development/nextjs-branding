import Link from 'next/link';

interface NavigationCardProps {
  title: string;
  path: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ title, path }) => {
  return (
    <div className="border border-gray-300 p-4 m-2 text-center transition-shadow hover:shadow-lg">
      <Link href={path}>
          <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default NavigationCard;
