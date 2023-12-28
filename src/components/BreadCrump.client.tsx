"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const Breadcrumb: React.FC = () => {
    const pathname = usePathname();
    const pathSegments = useMemo(() => {
        const segments = pathname.split('/').filter(Boolean);
        return segments.map((segment, index) => ({
            name: segment.replace(/-/g, ' ').toUpperCase(),
            url: '/' + segments.slice(0, index + 1).join('/'),
        }));
    }, [pathname]);

    return (
        <nav aria-label="breadcrumb">
            <ol className="list-reset flex text-grey-dark">
                <li><Link href="/">Home</Link></li>
                {pathSegments.map((segment, index) => (
                    <li key={index}>
                        <span className="mx-2">/</span>
                        {index === pathSegments.length - 1 ? (
                            <span>{segment.name}</span>
                        ) : (
                            <Link href={segment.url}><a>{segment.name}</a></Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
