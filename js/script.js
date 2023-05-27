let searchInput = document.querySelector("#search-user");
let search_btn = document.querySelector(".search-btn");

search_btn.onclick = function () {
	if (searchInput.value == "") {
		searchInput.setAttribute("placeholder", "This field is required");
	} else {
		getUserInfo(searchInput.value);
	}
};

function getUserInfo(user_name) {
	const URL = `https://api.github.com/users/${user_name}`;
	fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			let user_avatar = document.querySelector(".profile-pic");
			let user_name = document.querySelector(".name");
			let followers = document.querySelector(".followers");
			let following = document.querySelector(".following");

			user_avatar.setAttribute("src", `${data.avatar_url}`);
			user_name.textContent = data.login;
			document.title = data.login;
			followers.textContent = `Followers: ${data.followers}`;
			following.textContent = `Following: ${data.following}`;
			fetch(data.repos_url)
				.then((response) => response.json())
				.then((repos) => {
					let cards = document.querySelectorAll(".card");
					for (let i = 0; i < 6; i++) {
						cards[i].querySelector(".repo-name").textContent = repos[i].name;
						cards[i].querySelector(".repo-type").textContent = repos[i].visibility;
						cards[i].querySelector(".repo-category").textContent = repos[i].language;
					}
				});
		})
		.catch((error) => console.error(error));
}
