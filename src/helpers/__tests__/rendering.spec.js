import { forwardStyle, sketchProps, webProps } from '../rendering';
import { describeSketch, describeWeb } from '../describePatterns';


describe('helpers/rendering/sketchProps', () => {
  const mockProps = Object.freeze({ foo: 'foo', bar: 'bar' });

  describeSketch(() => {
    it('should return passed props', () => {
      expect(sketchProps(mockProps)).toMatchObject(mockProps);
    });
  });

  describeWeb(() => {
    it('should return empty object', () => {
      expect(sketchProps(mockProps)).toMatchObject({});
    });
  });
});


describe('helpers/rendering/webProps', () => {
  const mockProps = Object.freeze({ foo: 'foo', bar: 'bar' });

  describeWeb(() => {
    it('should return passed props', () => {
      expect(webProps(mockProps)).toMatchObject(mockProps);
    });
  });

  describeSketch(() => {
    it('should return empty object', () => {
      expect(webProps(mockProps)).toMatchObject({});
    });
  });
});

describe('helpers/rendering/fowardStyle', () => {
  const mockProps = Object.freeze({
    className: 'example-classname',
    style: { color: 'red' },
  });

  describeSketch(() => {
    it('should should pass style prop', () => {
      const passedProps = forwardStyle(mockProps);
      expect(passedProps).toMatchObject({ style: mockProps.style });
    });
  });
  describeWeb(() => {
    it('should pass classname prop', () => {
      const passedProps = forwardStyle(mockProps);
      expect(passedProps).toMatchObject({ className: mockProps.className });
    });
  });
});
