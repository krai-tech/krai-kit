/**
 * Prevents the default action of the event and stops it from propagating further in the event chain.
 *
 * This function calls three methods on the provided event object:
 * - `stopImmediatePropagation()`: Stops the event from propagating to any other event listeners.
 * - `stopPropagation()`: Stops the event from propagating to parent elements.
 * - `preventDefault()`: Prevents the default action associated with the event from occurring.
 *
 * @param event - The event object that will have its propagation stopped and default action prevented.
 */
export const stopPropagationAndDefault = (event: Event): void => {
  event.stopImmediatePropagation();
  event.stopPropagation();
  event.preventDefault();
}
