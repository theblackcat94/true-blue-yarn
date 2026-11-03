const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string) {
  const absolute = path.startsWith("/") ? path : `/${path}`;
  const withTrailingSlash = absolute !== "/" && !absolute.endsWith("/") && !absolute.split("/").at(-1)?.includes(".")
    ? `${absolute}/`
    : absolute;
  return `${basePath}${withTrailingSlash}`;
}
