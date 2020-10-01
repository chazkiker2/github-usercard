// @ts-check
"use strict";

import axios from "axios";

//* STEP 1 (initial)
// const userRequest = axios.get("https://api.github.com/users/chazkiker2")
//   .then(res=>{
//     console.log(`Response: ${res}`);
//     const chazCard = createCard(res.data);
//     const entry = document.querySelector("div.cards");
//     entry.appendChild(chazCard);
//   })
//   .catch(e=>{
//     console.log(e);
//   });


// >> WRAP axios get request in this insertCard function
/**
 * Receives a username in string format, makes axios get request to GitHub API, 
 * creates a user card via createCard(), and appends the component HTML to the DOM
 * @param {string} username 
 */
const insertCard = (username) => {
  const endpoint = `https://api.github.com/users/${username}`;
  axios.get(endpoint) //* step 1 & 2
    .then( res => {
      const card = createCard(res.data); //* step 4
      document.querySelector("div.cards").appendChild(card); //* step 5
    })
    .catch(e => {
      console.log(e);
    });
  return;
};


//*step 5
const followersArray = ["reesharper", "chazkiker2", "sekotszs", "bigknell", "tetondan"];
followersArray.forEach( usr => insertCard(usr));


//>> STEP 3
/**
 * This method takes an Object of data from the axios GET request.
 * From the data provided, createCard builds a user component and returns the component's HTML
 * @param {Object} user 
 * @return HTML Element 
 */
const createCard = (user) => { 
  const cardDiv = document.createElement("div"); //class="card"
    const profileImg = document.createElement("img"); //src=`${user.avatar_url}`
    const infoDiv = document.createElement("div"); //class="card-info"
      const nameH3 = document.createElement("h3"); //class="name", textContent=user.name
      const usernameP = document.createElement("p"); //class="username", textContent=user.login
      const locationP = document.createElement("p"); //textContent=`Location: ${user.location}`
        const linkToGithub = document.createElement("a"); //href=`${user.url}`
      const followersP = document.createElement("p"); //textContent=`Followers: ${user.followers}
      const followingP = document.createElement("p"); //textContent=`Following: ${user.following}`
      const bioP = document.createElement("p"); //textContent=`Bio: ${user.bio}`
  
  cardDiv.append(profileImg, infoDiv);
  infoDiv.append(nameH3, usernameP, locationP, followersP, followingP, bioP);
  locationP.append(linkToGithub);

  cardDiv.classList.add("card");
  profileImg.setAttribute("src", `${user.avatar_url}`);
  infoDiv.classList.add("card-info");
  nameH3.classList.add("name");
  nameH3.textContent = `${user.name}`;
  usernameP.classList.add("username");
  usernameP.textContent = `${user.login}`;
  locationP.textContent = `Location: ${user.location}`;
  linkToGithub.setAttribute("href", `${user.url}`);
  followersP.textContent = `Followers: ${user.followers}`;
  followingP.textContent = `Following: ${user.following}`;
  bioP.textContent = `Bio: ${user.bio}`;

  return cardDiv;
};

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/