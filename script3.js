const userDetails = document.getElementById("user-details");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://reqres.in/api/users/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const user = data.data;
    userDetails.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <img  style="width:20%;height:20%; border-radius:15%; box-shadow:10px 10px 10px rgba(0,0,0,0.5);" src="${user.avatar}" alt="${user.first_name} ${user.last_name} Avatar">
    `;
  })
  .catch((error) => console.error(error));
