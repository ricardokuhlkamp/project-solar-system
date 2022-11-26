import React from 'react';
import PropTypes from 'prop-types';
import styles from './MissionCard.module.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className={ styles.missionCard }>
        <p data-testid="mission-name" className={ styles.missionName }>{ name }</p>
        <hr />
        <div className={ styles.containerP }>
          <p data-testid="mission-year" className={ styles.p }>{ year }</p>
          <p data-testid="mission-country" className={ styles.p }>{ country }</p>
          <p data-testid="mission-destination" className={ styles.p }>{ destination }</p>
        </div>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
