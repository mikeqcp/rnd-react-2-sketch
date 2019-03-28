import { Hero as HeroComponent } from './hero.component';
import { withConfigurableStyle } from '../HOC/withConfigurableStyle';


export const Hero = withConfigurableStyle(HeroComponent);
