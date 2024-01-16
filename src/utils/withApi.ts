async function withApi<T>(
  fn: () => Promise<T>,
  {
    onSuccess,
    onError,
    onPending,
    onFinished,
  }: {
    onSuccess?: (response: T) => void;
    onError?: (error: unknown) => void;
    onPending?: () => void;
    onFinished?: () => void;
  },
) {
  onPending && onPending();
  try {
    const response = await fn();
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
  onFinished && onFinished();
}

export default withApi;
