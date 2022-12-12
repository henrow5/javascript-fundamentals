const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
};

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
};

const notify = (contactMethod, notifyFunction) => {
  return notifyFunction(contactMethod);
};

emailNotification = notify("hello@makers.tech.test", notifyByEmail);
textNotification = notify("+10000000000", notifyByText);

console.log(emailNotification);
console.log(textNotification);
