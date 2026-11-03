import { spawnSync } from "node:child_process";
import path from "node:path";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "true-blue-yarn";
const defaultBasePath = repository.endsWith(".github.io") ? "" : `/${repository}`;
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? defaultBasePath;
const command = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const result = spawnSync(process.execPath, [command, "build", "--webpack"], {
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES: "1", NEXT_PUBLIC_BASE_PATH: basePath },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
