async function withApi<T>(
  fn: () => Promise<T>,
  {
    onSuccess,
    onError,
    onFinished,
  }: { onSuccess?: (response: T) => void; onError?: (error: unknown) => void; onFinished?: () => void },
) {
  try {
    const response = await fn();
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
  onFinished && onFinished();
}

export default withApi;
