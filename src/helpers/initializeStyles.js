import { TextStyles } from 'react-sketchapp';
import { typography } from '../theme/default';


export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    typography,
  );
};
