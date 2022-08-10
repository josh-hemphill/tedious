const {
  makeThisModuleAnExecutableReplacer,
  ParsedImportExportStatement,
} = require('denoify');
const fs = require('fs');
const path = require('path');
const packageText = fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8');
const packageJson = JSON.parse(packageText);
/** @type {Record<string,string>} */
const dependencies = packageJson?.dependencies ?? {};

/** @type {[string,string][]} */
const esmShModules = [
  ['@azure/identity', ''],
  ['@azure/keyvault-keys', ''],
  ['@js-joda/core', ''],
  ['@types/es-aggregate-error', ''],
  ['bl', ''],
  ['es-aggregate-error', ''],
  ['js-md4', ''],
  ['jsbi', ''],
  ['native-duplexpair', ''],
  ['node-abort-controller', ''],
  ['sprintf-js', ''],
].map(([pkg]) => [pkg, dependencies[pkg]?.replace('^', '') || '']);

makeThisModuleAnExecutableReplacer(
  async ({ parsedImportExportStatement }) => {
    const name = parsedImportExportStatement.parsedArgument.nodeModuleName;
    console.log(name);
    const found = esmShModules.find(([pkg, ver]) => name === pkg);
    if (found) {
      const ver = found[1];
      return ParsedImportExportStatement.stringify({
        ...parsedImportExportStatement,
        'parsedArgument': {
          'type': 'URL',
          'url': `https://esm.sh/${name}${ver ? `@${ver}` : ''}`
        },
      });

    }

    return undefined;
  }
);
