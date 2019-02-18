import React from 'react';
import MediaQuery from 'react-responsive';

import { Planet } from './Planet.js';
import { Section, bodyTextStyle } from './Section.js';
import styled from '@emotion/styled';

import SchedulePlanet from './img/schedule-planet.svg';

const scheduleData = [
  ['BREAKFAST', '10:00', '12:00', 'ATRIUM'],
  ['LAUNCH IDEAS', '11:00', '12:00', 'ATRIUM'],
  ['WORKSHOP', '1:00', '3:00', 'ATRIUM'],
  ['SPEAKER ONE', '3:00', '2:00', 'ATRIUM'],
  ['SPEAKER TWO', '4:00', '5:30', 'ATRIUM'],
  ['WORKSHOP: SOMETHING', '4:00', '5:30', 'ATRIUM'],
  ['LUNCH', '6:00', '7:00', 'ATRIUM'],
  ['IDEATION WORKSHOP', '8:00', '2:00', 'ATRIUM'],
  ['GET FREE STUFF YAY', '3:00', '2:00', 'ATRIUM'],
  ['DESIGN WOOHOO', '4:00', '5:30', 'ATRIUM'],
  ['YAY I LOVE IDEATE', '4:00', '5:30', 'ATRIUM']
];

export class Schedule extends React.Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    // Client-side only
    this.setState({ mounted: true });
  }

  render() {
    if (!this.state.mounted) return null;

    const scheduleDesktopItems = (
      <DesktopTable>
        {scheduleData.map(([event, start, end, location], i) => (
          <React.Fragment key={i}>
            <DesktopEvent>{event}</DesktopEvent>
            <DesktopTimeLocation>
              {start}-{end} IN THE {location}
            </DesktopTimeLocation>
          </React.Fragment>
        ))}
      </DesktopTable>
    );

    const scheduleMobileItems = (
      <MobileTable>
        {scheduleData.map(([event, start, end, location], i) => (
          <React.Fragment key={i}>
            <MobileTime>{start}</MobileTime>
            <div>
              <MobileLocation>{location}</MobileLocation>
              <MobileEvent>{event}</MobileEvent>
            </div>
          </React.Fragment>
        ))}
      </MobileTable>
    );

    return (
      <>
        <Planet src={SchedulePlanet} />
        <Section title="Schedule">
          <MediaQuery minWidth={500}>
            {matches => (matches ? scheduleDesktopItems : scheduleMobileItems)}
          </MediaQuery>
        </Section>
      </>
    );
  }
}

const DesktopTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  grid-gap: 1em;
  margin: 0 auto;
  max-width: 540px;
`;

const DesktopEvent = styled.span`
  font-weight: 600;
`;

const DesktopTimeLocation = styled.span`
  text-align: right;
  ${bodyTextStyle}
`;

const MobileTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  grid-gap: 1.5em;
`;

const MobileTime = styled.span`
  font-size: 1.75em;
  ${bodyTextStyle}
`;

const MobileLocation = styled.span``;

const MobileEvent = styled.div`
  font-weight: 600;
  font-size: 1.333em;
`;
