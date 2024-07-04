import React from 'react';
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { sampleUsers } from '../../constants/sampleData';

const NewGroup = () => {
  const selectMemberHandler = () => {};
  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'25rem'}>
        <DialogTitle>New Group</DialogTitle>

        <TextField />
        <Typography></Typography>
        <Stack>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </Stack>
      </Stack>
    </Dialog>
  );
};
export default NewGroup;
