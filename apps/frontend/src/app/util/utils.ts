export function mergeClassNames(...styles : string[]) {
    return styles.join(' ');
}

export interface ReactKey {
    key: string
  }
  
// eslint-disable-next-line @typescript-eslint/ban-types
export function addIndexKey<T extends {}>(value: T, index: number): T & ReactKey {
    return {
      ...value,
      key: `${index}`,
    };
  }
  