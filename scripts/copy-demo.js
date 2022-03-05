import { copyFileSync, readdirSync, existsSync, mkdirSync, rmSync } from "fs";
import { resolve, dirname } from "path";

const rootDir = resolve(dirname("./"));
const distDir = resolve(
  dirname("./"),
  "demo/node_modules/react-sticky-children"
);

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir);

const filesToCopy = readdirSync(resolve(rootDir, "dist"));
filesToCopy.forEach((file) => {
  copyFileSync(resolve(rootDir, "dist", file), resolve(distDir, file));
});
