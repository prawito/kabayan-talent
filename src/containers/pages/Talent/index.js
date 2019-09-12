import React, { Component, Fragment } from 'react';
import { Button } from '../../../components';

const TalentProfile = () => {
    return (
        <p>Talent Profile</p>
    )
}

const TalentInfo = ({title}) => {
    return (
        <p>{title}</p>
    )
}

const TalentName = ({name, job}) => {
    return (
        <Fragment>
            <p>{name}</p>
            <p>{job}</p>
        </Fragment>
    )
}

const ProfileSection = () => {
    return (
        <div>
            <TalentProfile />
            <TalentName name="Helios Satryo" job={["Photographer", "Dancer"]} />
            <TalentInfo title="Male" />
            <TalentInfo title="19 October 1982" />
            <TalentInfo title="DI Yogyakarta" />
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '0px 16px'}}>
                <Button>Message</Button>
                <Button>Share</Button>
                <Button>Hire</Button>
            </div>
        </div>
    )
}

class TalentPage extends Component {
  render() {
    return (
      <div>
          <ProfileSection />
      </div>
    )
  }
}

export default TalentPage