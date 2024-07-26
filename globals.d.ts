// globals.d.ts

/**
 * A utility function for selecting a single DOM element.
 *
 * @param {string} selector - A string containing one or more CSS selectors separated by commas.
 * @param {ParentNode} [parent=document] - An optional parent element to scope the query. Defaults to `document`.
 * @returns {HTMLElement | null} The first element that matches the specified selectors within the parent, or `null` if no matches are found.
 */
declare const q: (selector: string, parent?: ParentNode) => HTMLElement | null;

