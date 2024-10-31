const fetch = require('node-fetch');

async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    });
    
    return response.status;
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
}

deleteUser(1).then(status => console.log("Status:", status));

module.exports = deleteUser;
