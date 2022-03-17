
const spin = ['\r| | abc ', '\r/ \ cab ', '\r- - bca ', '\r\\ / abc '];

let delay = 100;
for (const i of spin) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay)
  delay += 200
}

