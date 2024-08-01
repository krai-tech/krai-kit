import { InjectionToken } from '@angular/core';

/**
 * Creates a new injection token with a factory function.
 *
 * This function generates an `InjectionToken` with the provided factory function,
 * which will be used to create the value associated with the token.
 *
 * @template T - The type of the value produced by the factory function.
 * @param {() => T} factory - A function that returns the value to be associated with the token.
 * @param {string} [desc] - An optional description for the injection token.
 * @returns {InjectionToken<T>} A new injection token configured with the given factory function.
 *
 * @example
 * // Example usage:
 * const MY_TOKEN = createTokenFactory(() => 'My Value');
 *
 * @example
 * // Providing the token in an Angular module:
 * @NgModule({
 *   providers: [
 *     { provide: MY_TOKEN, useFactory: () => 'My Value' }
 *   ]
 * })
 * export class AppModule {}
 */
export function createTokenFactory<T>(factory: () => T, desc?: string): InjectionToken<T> {
  return new InjectionToken<T>(desc || '', { factory });
}
