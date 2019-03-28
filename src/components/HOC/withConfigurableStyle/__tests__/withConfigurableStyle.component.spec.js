import React from 'react';
import { shallow } from 'enzyme';
import withConfigurableStyle from '../withConfigurableStyle.component';
import { describeSketch, describeWeb } from '../../../../helpers/describePatterns';


const defaultProps = {
  styleConfig: {
    css: 'example css',
    className: 'example-classname',
    as: 'section',
    title: {
      as: 'h3',
      className: 'example-title',

      innerElement: {
        className: 'innner-class',
      },
    },
  },
};

const Inner = () => <span />;
const Wrapped = withConfigurableStyle(Inner);
const component = (props = {}) =>
  shallow(<Wrapped {...{ ...defaultProps, ...props }} />);

describe('Components/withConfigurableStyle', () => {
  it('should render wrapped component', () => {
    const el = component();
    expect(el.exists(Inner)).toBeTruthy();
  });

  it('should pass props to rendered component', () => {
    const props = { foo: 'foo', bar: 'bar' };
    const el = component(props);
    expect(el.find(Inner).props()).toMatchObject(props);
  });

  it('should pass apply prop to rendered component', () => {
    const el = component();
    expect(el.find(Inner).prop('applyStyle')).toBeDefined();
  });

  describe('custom render function is provided', () => {
    it('should render element using provided function', () => {
      const InnerCustom = () => <div />;
      const props = {
        styleConfig: {
          ...defaultProps.styleConfig,
          render: InnerCustom,
        },
      };
      const el = component(props);
      expect(el.exists(InnerCustom)).toBeTruthy();
    });

    it('should pass props to rendered component', () => {
      const InnerCustom = () => <div />;
      const customProps = { foo: 'foo', bar: 'bar' };
      const props = {
        ...customProps,
        styleConfig: {
          ...defaultProps.styleConfig,
          render: InnerCustom,
        },
      };
      const el = component(props);
      expect(el.find(InnerCustom).props()).toMatchObject(props);
    });
  });

  describe('applyStyle function', () => {
    describeWeb(() => {
      describe('when no elementId parameter is provided', () => {
        it('should extract css, classname & as properties from styleConfig', () => {
          const el = component();
          const extractedStyle = el.find(Inner).prop('applyStyle')();

          expect(extractedStyle).toMatchObject({
            css: 'example css',
            className: 'example-classname',
            as: 'section',
          });
        });

        it('should extract css, classname & as properties directly from props', () => {
          const el = component({
            css: 'example css',
            className: 'example-classname',
            as: 'section',
            styleConfig: {},
          });
          const extractedStyle = el.find(Inner).prop('applyStyle')();

          expect(extractedStyle).toMatchObject({
            css: 'example css',
            className: 'example-classname',
            as: 'section',
          });
        });
      });

      describe('when elementId parameter is provided', () => {
        it('should extract css, classname & as properties from specific property', () => {
          const el = component();
          const extractedStyle = el.find(Inner).prop('applyStyle')('title');

          expect(extractedStyle).toMatchObject({
            as: 'h3',
            className: 'example-title',
          });
        });

        it('should pass other values for specific property as styleConfig prop', () => {
          const el = component();
          const extractedStyle = el.find(Inner).prop('applyStyle')('title');

          expect(extractedStyle.styleConfig).toMatchObject({
            innerElement: {
              className: 'innner-class',
            },
          });
        });
      });
    });

    describeSketch(() => {
      describe('when no elementId parameter is provided', () => {
        it('should ignore any custom style provided', () => {
          const el = component();
          const extractedStyle = el.find(Inner).prop('applyStyle')();
          expect(extractedStyle).toEqual({});
        });
      });

      describe('when elementId parameter is provided', () => {
        it('should ignore any custom style provided', () => {
          const el = component();
          const extractedStyle = el.find(Inner).prop('applyStyle')('title');
          expect(extractedStyle).toEqual({});
        });
      });
    });
  });
});

