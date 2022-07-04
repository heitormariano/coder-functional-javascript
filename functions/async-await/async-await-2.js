// practice (tests in Browser)
function getUserById(id) {
  // fetch method returns a promise
  // using a external API (reqres - https://reqres.in/)
  return fetch(`https://reqres.in/api/users/${id}`)
    .then(data => data.json())
    .catch(err => console.log(err));
}
async function showUserName(id) {
  const user = await getUserById(id);
  const username = user.data.first_name;
  console.log(`User name is ${username}`);
}

showUserName(3);

async function showUserEmail(id) {
  const user = await getUserById(id);
  const userEmail = user.data.email;
  console.log(`Email is ${userEmail}`);
}

showUserEmail(4);
