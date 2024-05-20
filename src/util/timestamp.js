export function formatTimestamp(timestampInSeconds) {
  const minutes = Math.floor(timestampInSeconds / 60);
  const seconds = Math.floor(timestampInSeconds % 60);

  return `${minutes} min ${seconds} sec`;
}
