// Day 39 Coding Challenge
// Implement the Caesar cipher

var text = "I LOVE JAVASCRIPT";
var textEnc = encrypt(text, 13);
var textDec = decrypt(textEnc, 13);

println(text);
println(textEnc);
println(textDec);

// Decrypt a message by inversing the key (e.g. rotate in the other direction)
function decrypt(msg, key) {
  return encrypt(msg, key * -1);c
}

// Function will implement Caesar Cipher to encrypt / decrypt the msg by shifting the letters of the message according to the key
function encrypt(msg, key) {
  var encMsg = "";

  for (let i = 0; i < msg.length; i++) {
    let code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }
    encMsg += String.fromCharCode(code);
  }
  return encMsg;
}

// Module function: n mod p
function mod(n, p) {
  if (n < 0) {
    n = p - Math.abs(n) % p;
  }
  return n % p;
}