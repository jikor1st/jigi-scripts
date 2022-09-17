interface FakePromiseOptions {
  error?: {
    // code?: number;
    message?: string;
  };
}
const fakePromise = async <DataType = any>(
  data: DataType,
  serverTime: number,
  options?: FakePromiseOptions,
): Promise<DataType> => {
  const { error } = options ?? {};
  const { message: errorMessage = null } = error ?? {};

  const promise = await new Promise((resolve, reject) => {
    if (errorMessage) {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, serverTime);
    }
    setTimeout(() => {
      resolve(data);
    }, serverTime);
  });

  return promise as DataType;
};
export { fakePromise };
