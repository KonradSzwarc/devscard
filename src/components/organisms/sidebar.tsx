import { useEffect, useState } from 'react';
import data from 'src/data';

import SidebarItem from '@/atoms/sidebar-item';
import SECTION_IDS from '@/constants/sectionIds';

export interface Props {
  className?: string;
}

const Sidebar = ({ className = '' }: Props) => {
  const [activeHash, setActiveHash] = useState(SECTION_IDS.main);

  useEffect(() => {
    const handleHashChange = (e: HashChangeEvent) => {
      const newHash = e.newURL.split('#')[1];
      setActiveHash(newHash || SECTION_IDS.main);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [setActiveHash]);

  return (
    <nav className={`flex flex-col w-max h-fit p-2 rounded-lg gap-2 bg-white shadow-md ${className}`}>
      <SidebarItem icon="fa6-solid:user" id={SECTION_IDS.main} activeHash={activeHash} />
      {data.skills && <SidebarItem icon="fa6-solid:bars-progress" id={SECTION_IDS.skills} activeHash={activeHash} />}
      {data.experience && <SidebarItem icon="fa6-solid:suitcase" id={SECTION_IDS.experience} activeHash={activeHash} />}
      {data.portfolio && <SidebarItem icon="fa6-solid:rocket" id={SECTION_IDS.portfolio} activeHash={activeHash} />}
      {data.testimonials && (
        <SidebarItem icon="fa6-solid:comment" id={SECTION_IDS.testimonials} activeHash={activeHash} />
      )}
      {data.favorites && <SidebarItem icon="fa6-solid:star" id={SECTION_IDS.favorites} activeHash={activeHash} />}
    </nav>
  );
};

export default Sidebar;
