const logoutButton = document.getElementById("logout-button");
const userList = document.getElementById("user-list");

logoutButton.addEventListener("click", (event) => {
  localStorage.clear();
  window.location.href = "index.html";
});

fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <a style="text-decoration:none;" href="details.html?id=${user.id}">
          <h2>${user.first_name} ${user.last_name}</h2>
        </a>
      `;
      userList.appendChild(listItem);
    });
  })
  .catch((error) => console.error(error));
