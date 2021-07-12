import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import HomeContext from '../../Containers/Home/HomeContext';

let VideoContainer = styled.div`
  width: 100vw;
  display: flex;
  position: fixed;
`;

let Video = memo(function Video(props) {
  let Context = useContext(HomeContext);
  let { show } = Context;
  return (
    <VideoContainer>
      <video
        onLoad
        loop
        autoPlay
        muted
        style={{
          opacity: show ? '1' : '0',
          transition: 'all 1s ease-in-out',
          zIndex: '0',
          width: '100vw',
        }}
      >
        <source
          src={require('../../Assets/video.mp4')}
          style={{ width: '100vw', height: '100%' }}
        />
      </video>
    </VideoContainer>
  );
});

export default Video;
