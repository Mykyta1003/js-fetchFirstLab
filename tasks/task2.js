const fetch = require('node-fetch');

async function createUser(user) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" }).then(result => console.log(result));

module.exports = createUser;
