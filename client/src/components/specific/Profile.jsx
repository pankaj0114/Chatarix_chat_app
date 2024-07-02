import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import {
  AccountBoxTwoTone as FaceIcon,
  AlternateEmailTwoTone as UserNameIcon,
  CalendarMonth as CalendarICon,
} from '@mui/icons-material';

const Profile = () => {
  return (
    <Stack spacing={'2rem'} direction={'column'} alignItems={'center'}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: 'contain',
          marginBottom: '1rem',
          border: '5px solid white',
        }}
      />

      <ProfileCard heading={'Bio'} text={'gdfftftdfwgdvg hehgfyefyg'} />
      <ProfileCard
        heading={'Username'}
        text={'kashyappankaj14'}
        Icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={'Name'}
        text={'Pankaj Kashyap'}
        Icon={<FaceIcon />}
      />
      <ProfileCard heading={'Joined'} text={''} Icon={<CalendarICon />} />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={'row'}
    alignItems={'center'}
    spacing={'1rem'}
    color={'black'}
    textAlign={'center'}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text} </Typography>
      <Typography color={'grey'} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
