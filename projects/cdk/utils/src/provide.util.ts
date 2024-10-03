import type { ExistingProvider, ProviderToken } from '@angular/core';

/**
 * Creates an Angular provider configuration to use an existing provider for a given token.
 * This can be useful for aliasing providers or for configuring dependency injection
 * to use an existing implementation for a given token.
 *
 * @param provide - The token that Angular uses to inject the provider. This can be a single token or an array of tokens.
 * @param useExisting - The token of the existing provider that will be used to satisfy the dependency for the `provide` token.
 * @param multi - A flag indicating whether the provider should be added to a multi-provider. When set to `true`,
 *                the provider will be registered as a part of an array of providers for the `provide` token.
 * @returns An `ExistingProvider` configuration object that can be used in Angular's dependency injection system.
 *
 * Example:
 * ```typescript
 * import { Injectable, InjectionToken } from '@angular/core';
 *
 * export const MY_SERVICE_TOKEN = new InjectionToken<MyService>('MyService');
 * export const MY_ALTERNATIVE_SERVICE_TOKEN = new InjectionToken<MyService>('MyAlternativeService');
 *
 * @Injectable({
 *   providedIn: 'root',
 * })
 * export class MyService {
 *   // Service implementation
 * }
 *
 * @Injectable({
 *   providedIn: 'root',
 *   useExisting: MY_SERVICE_TOKEN,
 * })
 * export class MyAlternativeService {
 *   // Alternative service implementation
 * }
 *
 * // Usage in a module or component
 * @NgModule({
 *   providers: [
 *     provide(MY_SERVICE_TOKEN, MyService),
 *     provide(MY_ALTERNATIVE_SERVICE_TOKEN, MY_SERVICE_TOKEN, true),
 *   ]
 * })
 * export class AppModule { }
 * ```
 */
export function provide<T>(
  provide: ProviderToken<T>,
  useExisting: ProviderToken<T>,
): ExistingProvider;
export function provide<T>(
  provide: ProviderToken<T | T[]>,
  useExisting: ProviderToken<T>,
  multi: boolean,
): ExistingProvider;
export function provide<T>(
  provide: ProviderToken<T>,
  useExisting: ProviderToken<T>,
  multi = false,
): ExistingProvider {
  return { provide, useExisting, multi };
}
