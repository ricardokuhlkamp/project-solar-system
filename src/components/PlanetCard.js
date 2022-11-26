import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ styles.planetCard }>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ styles.planets }
        />
        <p data-testid="planet-name" className={ styles.name }>{ planetName }</p>
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
