import React from 'react';

class UserFavoriteAnimals extends React.Component {
  render() {
    const { favAnimals } = this.props;

    return (
      <ul>
        {favAnimals.map((animal, index) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;