import React, { Fragment, useRef } from 'react';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { grayColor } from '../constants/color';
import {
  AttachFile as AttachFileIcon,
  Send as SendICon,
} from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { blue } from '@mui/material/colors';
import FileMenu from '../components/dialogs/FileMenu';

const Chat = () => {
  const containerRef = useRef(null);

  const fileMenuRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={'border-box'}
        padding={'1rem'}
        spacing={'1rem'}
        bgcolor={grayColor}
        height={'90%'}
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        {/* Messages Render*/}
      </Stack>

      <form
        style={{
          height: '10%',
        }}
      >
        <Stack
          direction={'row'}
          height={'100%'}
          padding={'1rem'}
          alignItems={'center'}
          position={'relative'}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: '1.5rem',
              rotate: '30deg',
            }}
            ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Your Message Here..." />

          <IconButton
            type="submit"
            sx={{
              bgcolor: blue,
              rotate: '-30deg',
              marginLeft: '1rem',
              padding: '0.5rem',
            }}
          >
            <SendICon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu anchorE1={fileMenuRef.current} />
    </Fragment>
  );
};
export default AppLayout()(Chat);
