export const transformTagName = (tagNameToBeTransformed: string, knownUntransformedTagName: string, knownUntransformedTagNameElementReference: HTMLElement): string => {
  const actualCurrentTag = knownUntransformedTagNameElementReference.tagName.toLowerCase();
  const [prefix, suffix] = actualCurrentTag.split(knownUntransformedTagName);
  return prefix + tagNameToBeTransformed + suffix;
};