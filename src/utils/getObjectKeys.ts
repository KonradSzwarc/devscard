const getObjectKeys = Object.keys as <T extends Record<string, unknown>>(obj: T) => Array<keyof T>;

export default getObjectKeys;
