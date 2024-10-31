const fetch = require('node-fetch');

async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
}

updateUser(1, { name: 'New Name' }).then(result => console.log(result));

module.exports = updateUser;
