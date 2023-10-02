export const shuffleArray = (users, setUsers) => {
  // Create a copy of the users array
  const shuffledUsers = [...users];

  // Implement Fisher-Yates shuffle algorithm
  for (let i = shuffledUsers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];
  }

  // Update the state with the shuffled array
  setUsers(shuffledUsers);
};
