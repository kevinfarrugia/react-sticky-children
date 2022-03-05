import { copyFileSync, writeFileSync } from "fs";
import { createRequire } from "module";
import { resolve, dirname } from "path";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const rootDir = resolve(dirname("./"));
const distDir = resolve(dirname("./"), "dist");

const filesToCopy = ["package.json", "README.md", "LICENSE"];
filesToCopy.forEach((file) => {
  copyFileSync(resolve(rootDir, file), resolve(distDir, file));
});

const packageFieldsToRemove = [
  "private",
  "devDependencies",
  "optionalDependencies",
  "lint-staged",
  "scripts",
  "husky",
  "prettier",
  "jest",
  "eslintConfig",
  "eslintIgnore",
  "np",
];

packageFieldsToRemove.forEach((field) => {
  delete pkg[field];
});

// Remove 'dist' from the files inside the 'dist' dir, after we move them
const fields = ["main", "module", "unpkg", "esmodule", "typings"];
fields.forEach((key) => {
  pkg[key] = pkg[key].replace("dist/", "");
});

writeFileSync(
  resolve(distDir, "package.json"),
  JSON.stringify(pkg, undefined, 2),
  "utf-8"
);
