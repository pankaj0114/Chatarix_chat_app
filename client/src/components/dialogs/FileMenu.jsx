import { Menu } from '@mui/material';
import React from 'react';

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div
        style={{
          width: '10rem',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus
        porro commodi nihil placeat, animi distinctio possimus nobis qui
        obcaecati accusamus quis tempora voluptatem aspernatur eius dolor
        impedit illum. Vero!
      </div>
    </Menu>
  );
};

export default FileMenu;
