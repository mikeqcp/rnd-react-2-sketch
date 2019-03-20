import { TextStyles } from 'react-sketchapp';
import { typography } from '../styles/theme';


export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    typography,
  );
};
