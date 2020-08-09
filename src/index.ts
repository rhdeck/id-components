//@NOTE: THis is copy/pasted from @privilege/backend-utils
//probably a smell that, at least some, utils can live outside of @privilege
import { parse } from "uri-js";
/**
 * Check a function and return the `defaultValue` in the event it returns an error (rather than throwing)
 * @param fnc Asynchronous (promise-returning) function
 * @param defaultValue  Value to return in the event of an error
 * @typeparam T Type of expected return
 */
export async function undefinedIfError<T>(
  fnc: () => Promise<T>,
  defaultValue: T | undefined = undefined
): Promise<T | undefined> {
  try {
    const r = await fnc();
    return r;
  } catch (error) {
    return defaultValue;
  }
}
/**
 * Parse a compound id (e.g. url-encoded and joined with slashses) into its constituent components
 * @param id
 */
export function parseCompoundId(id: string) {
  const [primaryId, secondaryId, ...rest] = id.split("/");
  if (rest && rest.length)
    throw new Error(
      "A compoundId should only have 2 components, but this has more: " + id
    );
  const a = [primaryId, secondaryId].map((s) => decodeComponent(s));
  return a;
}
/**
 * Determine whether the string is a compound id
 * @param id string to test
 */
export function isCompoundId(id: string) {
  return id.includes("/");
}
/**
 * Create a compound ID from two other ids
 * @param primaryId Primary id (goes first in the list)
 * @param secondaryId Secondary id (goes second - usually locally unique to the primary)
 */
export function makeCompoundId(primaryId: string, secondaryId: string): string {
  return [primaryId, secondaryId].map(encodeComponent).join("/");
}
/**
 * Encode a component in an un-wrappable way
 * @param component string to encode
 */
export function encodeComponent(component: string): string {
  return cleanComponent(encodeURIComponent(component));
}
/**
 * Decode a component previously wrapped by encodeCOmponent
 * (and should be the same if it was not encoded previously)
 * @param component string to decode
 */
export function decodeComponent(component: string): string {
  return cleanComponent(decodeURIComponent(component));
}
/**
 * Clean a component for use (lower-case)
 * @param component component string to clean up
 */
export function cleanComponent(component: string): string {
  return component.toLowerCase();
}
/**
 * Parse a URI into scheme and host components for uri-ization
 * @param uri URI to parse
 */
export function parseUri(uri: string) {
  let { scheme, host } = parse(uri);
  host = decodeComponent(host!);
  if (!scheme || !host) throw new Error("This is not a uri: " + uri);
  return [scheme, host];
}
