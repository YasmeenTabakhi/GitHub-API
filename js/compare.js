//comparison
let input1 = document.querySelector(".in1");
let user1 = document.querySelector(".user1");
let followers1 = document.querySelector(".followers1");
let repo1 = document.querySelector(".repo1");
let pic1 = document.querySelector(".pic1");

let input2 = document.querySelector(".in2");
let user2 = document.querySelector(".user2");
let followers2 = document.querySelector(".followers2");
let repo2 = document.querySelector(".repo2");
let pic2 = document.querySelector(".pic2");

let comparBtn = document.querySelector(".compare-btn");

input1.addEventListener("blur", function () {
	getUsersInfo1(input1.value);
});
input2.addEventListener("blur", function () {
	getUsersInfo2(input2.value);
});

function getUsersInfo1(userName1) {
	const URL1 = `https://api.github.com/users/${userName1}`;
	fetch(URL1)
		.then((response) => response.json()) // Converting the responce to JSON object
		.then((data) => {
			resultRepo1 = data.public_repos;
			resultFollowers1 = data.followers;
			pic1.src = `${data.avatar_url}`;
			user1.innerHTML = `${data.login}`;
			followers1.innerHTML = `Followers: ${resultFollowers1}`;
			repo1.innerHTML = `Puplic repositories: ${resultRepo1}`;
		})
		.catch((error) => console.error(error));
}
function getUsersInfo2(userName2) {
	const URL2 = `https://api.github.com/users/${userName2}`;
	fetch(URL2)
		.then((response) => response.json()) // Converting the responce to JSON object
		.then((data) => {
			resultRepo2 = data.public_repos;
			resultFollowers2 = data.followers;
			pic2.src = `${data.avatar_url}`;
			user2.innerHTML = `${data.login}`;
			followers2.innerHTML = `Followers: ${resultFollowers2}`;
			repo2.innerHTML = `Puplic repositories: ${resultRepo2}`;
		})
		.catch((error) => console.error(error));
}

comparBtn.addEventListener("click", compare);

function compare() {

	let p = document.createElement("h3");
	let p2 = document.createElement("h3");
	let winner = document.createTextNode("Winner!");
	let loser = document.createTextNode("Hard Luck!");
    let tie = document.createTextNode("Tie!");
    let tie2 = document.createTextNode("Tie!");

	// resultRepo1 = 5;
	// resultRepo2 = 5;
	// resultFollowers1 = 5;
	// resultFollowers2 = 5;
	if (resultRepo1 > resultRepo2) {
		p.appendChild(winner);
		repo1.appendChild(p);
		p.style.cssText = "color:green; text-align:center";
		p2.appendChild(loser);
		repo2.appendChild(p2);
		p2.style.cssText = "color:red; text-align:center";
	} else if (resultRepo2 > resultRepo1) {
		p2.appendChild(winner);
		repo2.appendChild(p2);
		p2.style.cssText = "color:green; text-align:center";
		p.appendChild(loser);
		repo1.appendChild(p);
		p.style.cssText = "color:red; text-align:center";
	} else {
		if (resultFollowers1 > resultFollowers2) {
			p.appendChild(winner);
			repo1.appendChild(p);
			p.style.cssText = "color:green; text-align:center";
			p2.appendChild(loser);
			repo2.appendChild(p2);
			p2.style.cssText = "color:red; text-align:center";
		} else if (resultFollowers2 > resultFollowers1) {
			p2.appendChild(winner);
			repo2.appendChild(p2);
			p2.style.cssText = "color:green; text-align:center";
			p.appendChild(loser);
			repo1.appendChild(p);
			p.style.cssText = "color:red; text-align:center";
		} else {
			p2.appendChild(tie);
			repo2.appendChild(p2);
			p2.style.cssText = "color:purple; text-align:center";
			p.appendChild(tie2);
			repo1.appendChild(p);
			p.style.cssText = "color:purple; text-align:center";
		}
	}
}
