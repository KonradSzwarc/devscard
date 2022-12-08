/**
 * Get all elements of array except last one.
 */
const removeLast = <T>(arr: T[]): T[] => arr.slice(0, -1);

export default removeLast;
