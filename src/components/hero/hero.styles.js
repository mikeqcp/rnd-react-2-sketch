import styled from 'styled-components/primitives';


export const Container = styled.View`
  width: 100%;
  height: 400px;
  background: red;
  min-width: 320px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.View`
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, .3);
  bottom: 40px;
  height: 90px;
  line-height: 90px;
  padding: 20px 50px;
`;
