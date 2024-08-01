import { createComponent, DestroyRef, EnvironmentInjector, inject, Type } from '@angular/core';
import { createTokenFactory } from './create-token.util';

/**
 * Creates a token that provides a Map for storing and managing dynamically created components.
 *
 * The map is automatically cleaned up when the containing context is destroyed.
 * Components stored in the map will be destroyed upon context destruction.
 *
 * @returns {Map<Type<unknown>, ReturnType<typeof createComponent>>} A map for storing components.
 */
const MAP = createTokenFactory(() => {
  const map = new Map<Type<unknown>, ReturnType<typeof createComponent>>();

  inject(DestroyRef).onDestroy(() => map.forEach(component => component.destroy()));

  return map;
});

/**
 * Ensures that a component is created and stored in the map, if not already present.
 *
 * This function uses dependency injection to access the map and environment injector.
 * If the component is not already in the map, it creates the component and stores it.
 *
 * @param {Type<unknown>} component - The component type to be created and stored.
 *
 * @example
 * // Example usage in an Angular service or component:
 * withStyles(MyComponent);
 */
export function withStyles(component: Type<unknown>): void {
  const map = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);

  if (!map.has(component)) {
    map.set(component, createComponent(component, {environmentInjector}));
  }
}
