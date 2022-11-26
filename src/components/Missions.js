import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import styles from './Missions.module.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className={ styles.divMissions }>
        <Title headline="Missões" />
        <div className={ styles.missionCard }>
          { missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
