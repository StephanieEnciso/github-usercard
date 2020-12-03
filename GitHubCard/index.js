import axios from 'axios';


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
  image.src = `${res.data.avatar_url}`;
  divInfo.classList.add('card-info');
  h3name.classList.add('name');
  pUser.classList.add('username');
  a.href = `${res.data.url}`;

  h3name.textContent(`${res.data.name}`);
  pUser.textContent(`${res.data.login}`);
  pLctn.textContent(`Location: ${res.data.location}`);
  pProfile.textContent('Profile:');
  a.textContent(`${res.data.url}`);
  pFollowers.textContent(`Followers: ${res.data.followers}`);
  pFollowing.textContent(`Following: ${res.data.following}`);
  pBio.textContent(`Bio: ${res.data.bio}`)


};




axios
  .get('https://api.github.com/users/StephanieEnciso')
  .then((res) => {

  })
  .catch((err) => {
    debugger;
  });

