import React from 'react';
import styled from 'styled-components';


const FlexView = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const WebImage = styled.img.attrs({ src: props => props.source })`
  object-fit: cover;
`;

export default {
  Text: styled.p,
  View: styled(FlexView),
  Image: styled(WebImage),
};
