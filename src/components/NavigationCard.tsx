import Link from 'next/link';
import styles from '@/styles/NavigationCard.module.css'; 

interface NavigationCardProps {
  title: string;
  path: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ title, path }) => {
  return (
    <div className={styles.card}>
      <Link href={path}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default NavigationCard;
