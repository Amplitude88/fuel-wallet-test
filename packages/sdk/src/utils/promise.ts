/* eslint-disable @typescript-eslint/no-explicit-any */
export type DeferPromise<R = unknown> = {
  promise: Promise<R>;
  resolve: (value: R) => void;
  reject: (error: unknown) => void;
};

export function deferPromise<R = unknown>() {
  const defer: DeferPromise<R> = {} as any;

  defer.promise = new Promise((resolve, reject) => {
    defer.reject = reject;
    defer.resolve = resolve;
  });

  return defer;
}

export async function withTimeout<F extends Promise<unknown>, RT = Awaited<F>>(
  promise: F,
  timeout: number = 1050
): Promise<RT> {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, timeout);
  });
  return Promise.race([timeoutPromise, promise]) as any;
}
