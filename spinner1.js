process.stdout.write('hello from spinner 1.js... \rheyyy\n');


setTimeout(() => {
  process.stdout.write('\r| | abc ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ \ cab ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- - bca ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\ / abc '); 
}, 700);