import axios from 'axios';

const cards = document.querySelector('.cards');
axios
  .get('https://api.github.com/users/StephanieEnciso')
  .then((res) => {
    console.log(res);
    const info = res.data;
    const gitCard = cardMaker(info);
    cards.appendChild(gitCard);
  })
  .catch((err) => {
  
    debugger;
  });


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
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

const followersArray = [];

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
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function cardMaker(data){
  const divCard = document.createElement('div');
  const image = document.createElement('img');
  const divInfo = document.createElement('div');
  const h3name = document.createElement('h3');
  const pUser = document.createElement('p');
  const pLctn = document.createElement('p');
  const pProfile = document.createElement('p');
  const a = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  divCard.classList.add('card');
  image.src = `${data.avatar_url}`;
  divInfo.classList.add('card-info');
  h3name.classList.add('name');
  pUser.classList.add('username');
  a.href = `${data.url}`;

  h3name.textContent = `${data.name}`;
  pUser.textContent = `${data.login}`;
  pLctn.textContent = `Location: ${data.location}`;
  pProfile.textContent = 'Profile:';
  a.textContent = `${data.url}`;
  pFollowers.textContent = `Followers: ${data.followers}`;
  pFollowing.textContent = `Following: ${data.following}`;
  pBio.textContent = `Bio: ${data.bio}`;

  divCard.appendChild(image);
  divCard.appendChild(divInfo);
  divInfo.appendChild(h3name);
  divInfo.appendChild(pUser);
  divInfo.appendChild(pLctn);
  divInfo.appendChild(pProfile);
  pProfile.appendChild(a);
  divInfo.appendChild(pFollowers);
  divInfo.appendChild(pFollowing);
  divInfo.appendChild(pBio);

  return divCard;

};





