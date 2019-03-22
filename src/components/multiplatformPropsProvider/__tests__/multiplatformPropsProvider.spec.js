import React from 'react';
import { shallow } from 'enzyme';
import { MultiplatformPropsProvider } from '../multiplatformPropsProvider.component';
import { describeSketch, describeWeb } from '../../../helpers/describePatterns';


const defaultProps = {
  children: <span id="child" />,
  web: { webProp: 'web-val' },
  sketch: { sketchProp: 'sketch-val' },
};

const component = (props = {}) =>
  shallow(<MultiplatformPropsProvider {...{ ...defaultProps, ...props }} />);

describe('Components/MultiplatformPropsProvider', () => {
  it('should render children', () => {
    const el = component();
    expect(el.find('#child')).toBeDefined();
  });

  describeWeb(() => {
    it('should pass web props to the child', () => {
      const el = component();
      const contentProps = el.find('#child').props();
      expect(contentProps).toMatchObject(defaultProps.web);
    });

    it('should not pass sketch props to the child', () => {
      const el = component();
      const contentProps = el.find('#child').props();
      expect(contentProps).not.toMatchObject(defaultProps.sketch);
    });
  });

  describeSketch(() => {
    it('should pass sketch props to the child', () => {
      const el = component();
      const contentProps = el.find('#child').props();
      expect(contentProps).toMatchObject(defaultProps.sketch);
    });

    it('should not pass web props to the child', () => {
      const el = component();
      const contentProps = el.find('#child').props();
      expect(contentProps).not.toMatchObject(defaultProps.web);
    });
  });
});

