import styled from 'styled-components';

// Align default styles to match Sketch layout system
const FlexView = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const WebImage = styled.img.attrs({ src: props => props.source })`
  object-fit: cover;
`;

const styledWebBridge = args => styled(args);
styledWebBridge.Text = styled.p;
styledWebBridge.View = styled(FlexView);
styledWebBridge.Image = styled(WebImage);

export default styledWebBridge;
