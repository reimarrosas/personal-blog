export const nilChecker = <T>(input: T | null | undefined): boolean =>
  input !== undefined && input !== null;
