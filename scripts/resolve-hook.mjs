// ESM resolution hook for the question validator.
//
// The app source uses Vite-style extensionless relative imports
// ("../utils/helpers"); plain Node needs the ".js" added back. This is
// registered via module.register() (Node 20.6+), which works on the Node 20
// that CI pins as well as newer versions — unlike module.registerHooks(),
// which only exists in Node 22.6+.
export async function resolve(specifier, context, nextResolve) {
  if (
    (specifier.startsWith("./") || specifier.startsWith("../")) &&
    !/\.[a-z]+$/i.test(specifier)
  ) {
    return nextResolve(`${specifier}.js`, context);
  }
  return nextResolve(specifier, context);
}
