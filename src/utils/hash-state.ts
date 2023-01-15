const getInitialHash = () => {
  if (typeof window === 'undefined') return '';

  return window.location.hash || '#main';
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
