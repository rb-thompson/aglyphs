/**
 * aglyphs-demo.js: Basic fake parser stub for Aglyphs notation.
 * Splits chains by '→', reversible (parse/serialize roundtrip).
 * Exports: parse(str) -> array of parts, serialize(parts) -> string.
 */

function parse(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  // Normalize: replace → with ' → ' (add spaces for splitting), trim
  const normalized = str.replace(/→/g, ' → ').trim();
  // Split by ' → ', trim each part, filter out empty strings
  const parts = normalized.split(' → ').map(part => part.trim()).filter(part => part.length > 0);
  return parts;
}

function serialize(parts) {
  if (!Array.isArray(parts)) {
    throw new Error('Input must be an array');
  }
  return parts.join(' → ');
}

// Node.js self-test
if (typeof require !== 'undefined' && require.main === module) {
  const testChain = '𝔾 → ⊙_zk → ▷';
  try {
    const parsed = parse(testChain);
    const serialized = serialize(parsed);
    console.log('Original:', testChain);
    console.log('Parsed:', JSON.stringify(parsed));
    console.log('Serialized:', serialized);
    console.log('Roundtrip OK:', testChain === serialized ? 'PASS' : 'FAIL');
  } catch (err) {
    console.error('Test failed:', err.message);
  }
}

// Exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { parse, serialize };
}

// Global for browser
if (typeof window !== 'undefined') {
  window.aglyphsDemo = { parse, serialize };
}
