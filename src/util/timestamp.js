export function formatTimestamp(timestampInSeconds) {
  const minutes = Math.floor(timestampInSeconds / 60);
  const seconds = Math.floor(timestampInSeconds % 60);

  return `${minutes} min ${seconds} sec`;
}

export function parseTimestampToSeconds(timestamp) {
  const parts = timestamp.split(" ");
  console.log(parts);
  let minutes = 0;
  let seconds = 0;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "min") {
      minutes = parseInt(parts[i - 1], 10);
    } else if (parts[i] === "sec") {
      seconds = parseInt(parts[i - 1], 10);
    }
  }

  return minutes * 60 + seconds;
}
