import React, { Component, Fragment } from 'react';
import { Button, ButtonCustom } from '../../../components';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';
import WhatsappIcon from '@material-ui/icons/WhatsApp';

const TalentProfile = () => {
  return <p>Talent Profile</p>;
};

const TalentInfo = ({ title }) => {
  return <p>{title}</p>;
};

const TalentName = ({ name, job }) => {
  return (
    <Fragment>
      <p>{name}</p>
      <p>{job}</p>
    </Fragment>
  );
};

const ProfileSection = () => {
  return (
    <div>
      <TalentProfile />
      <TalentName name='Helios Satryo' job={['Photographer', 'Dancer']} />
      <TalentInfo title='Male' />
      <TalentInfo title='19 October 1982' />
      <TalentInfo title='DI Yogyakarta' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 16px',
        }}
      >
        <Button>Message</Button>
        <Button>Share</Button>
        <Button>Hire</Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 16px',
        }}
      >
        <ButtonCustom tip='instagram'>
          <InstagramIcon />
        </ButtonCustom>
        <ButtonCustom tip='twitter'>
          <TwitterIcon />
        </ButtonCustom>
        <ButtonCustom tip='youtube'>
          <YoutubeIcon />
        </ButtonCustom>
        <ButtonCustom tip='whatsapp'>
          <WhatsappIcon />
        </ButtonCustom>
      </div>
    </div>
  );
};

class TalentPage extends Component {
  render() {
    return (
      <div>
        <ProfileSection />
      </div>
    );
  }
}

export default TalentPage;
