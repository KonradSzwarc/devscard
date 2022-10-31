import { useEffect, useState } from 'react';

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
      <SidebarItem section="main" activeHash={activeHash} />
      <SidebarItem section="skills" activeHash={activeHash} />
      <SidebarItem section="experience" activeHash={activeHash} />
      <SidebarItem section="portfolio" activeHash={activeHash} />
      <SidebarItem section="testimonials" activeHash={activeHash} />
      <SidebarItem section="favorites" activeHash={activeHash} />
    </nav>
  );
};

export default Sidebar;
