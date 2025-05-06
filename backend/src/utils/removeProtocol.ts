export function removeProtocol(url: string): string {
  const withoutProtocol = url.replace(/^(https?:\/\/)/, "");

  // If it starts with localhost:..., remove the port
  if (withoutProtocol.startsWith("localhost:")) {
    return "localhost";
  }

  return withoutProtocol;
}
