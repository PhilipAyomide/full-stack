function maskEmail(email) {
  // Split into username and domain
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // Mask middle characters of username
  const maskedUsername =
    username[0] + "*".repeat(username.length - 2) + username[username.length - 1];

  // Return masked email
  return maskedUsername + domain;
}

const email = "user@domain.org";
console.log(maskEmail(email)); // Output: a*******e@example.com
