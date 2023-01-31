const API_URL = "https://reqres.in/api/users";

async function fetchUsers(page = 1) {
  const response = await fetch(`${API_URL}?page=${page}`);
  const data = await response.json();
  return data.data;
}

async function displayUsers(page) {
  const users = await fetchUsers(page);
  const sortedUsers = users.sort((a, b) => a.first_name.localeCompare(b.first_name));
  const userCards = sortedUsers.map((user) => {
    return `
      <div class="card__item">
       <img src=${user.avatar}>  </img>
        <p> ${user.first_name} ${user.last_name} </p>
        <a href=mailto:${user.email}> email </a>
        <p class="card__item-text">  ${user.id} </p>
      </div>
    `;
  });

  document.getElementById("user-list").innerHTML = userCards.join("");
}

displayUsers(1);

const pagination = document.getElementById("pagination");

pagination.addEventListener("click", (e) => {
  const page = e.target.dataset.page;
  displayUsers(page);
});
