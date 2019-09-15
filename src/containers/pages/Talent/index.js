import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components';

const TalentProfile = () => <p>Talent Profile</p>;

const TalentInfo = ({ title }) => <p>{title}</p>;

TalentInfo.propTypes = {
    title: PropTypes.string,
};

const TalentName = ({ name, job }) => (
    <Fragment>
        <p>{name}</p>
        <p>{job}</p>
    </Fragment>
);

TalentName.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
};

const ProfileSection = () => (
    <div>
        <TalentProfile />
        <TalentName name="Helios Satryo" job={['Photographer', 'Dancer']} />
        <TalentInfo title="Male" />
        <TalentInfo title="19 October 1982" />
        <TalentInfo title="DI Yogyakarta" />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 16px' }}>
            <Button>Message</Button>
            <Button>Share</Button>
            <Button>Hire</Button>
        </div>
    </div>
);

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
