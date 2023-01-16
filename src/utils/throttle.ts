const throttle = (fn: () => void, wait: number) => {
  let initialized: boolean;
  let timeoutId: NodeJS.Timeout;
  let lastCalled: number;

  const isPastTimeout = () => Date.now() - lastCalled >= wait;

  const getTimeout = () => Math.max(wait - (Date.now() - lastCalled), 0);

  const call = () => {
    fn();
    initialized ??= true;
    lastCalled = Date.now();
  };

  const recall = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => isPastTimeout() && call(), getTimeout());
  };

  return () => (initialized ? recall() : call());
};

export default throttle;
