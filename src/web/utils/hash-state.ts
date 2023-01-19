import sections from '@/data/sections';
import { isServer } from './env';

const getInitialHash = () => {
  if (isServer) return '';

  return window.location.hash || `#${sections.main.config.slug}`;
};

const createHashState = () => {
  let hash = getInitialHash();

  const subscribers: ((hash: string) => void)[] = [];

  const subscribe = (callback: (hash: string) => void) => {
    subscribers.push(callback);
  };

  const getHash = () => hash;

  const updateHash = (value: string) => {
    const newHash = value.includes('#') ? value : `#${value}`;

    if (newHash !== hash) {
      hash = newHash.includes('#') ? newHash : `#${newHash}`;
      window.history.replaceState(null, '', `${window.location.pathname}${hash}`);
      subscribers.forEach((callback) => callback(hash));
    }
  };

  return { getHash, subscribe, updateHash };
};

export default createHashState();
