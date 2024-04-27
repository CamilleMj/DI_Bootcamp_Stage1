(() => {
    const userName = " ";
  
    const userDiv = document.createElement("div");
  
    userDiv.innerHTML = `
      <p>Welcome, ${userName}!</p>
      <img src="profile-picture.jpg" alt="${userName}'s profile picture">
    `;
  
    const navbar = document.querySelector("navbar bg-body-tertiary");
    navbar.appendChild(userDiv);
})();