import { forwardStyle, fromTheme, fromThemeWithRef, sketchProps, webProps } from '../rendering';
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

describe('helpers/rendering/forwardStyle', () => {
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

describe('helpers/rendering/fromTheme', () => {
  const props = {
    theme: {
      mainProp: 'foo',
      colors: {
        primary: 'red',
      },
    },
  };

  describe('single key is provided', () => {
    it('should return theme value', () => {
      const result = fromTheme('mainProp')(props);
      expect(result).toEqual('foo');
    });
  });

  describe('path array of keys is provided', () => {
    it('should return nested theme value', () => {
      const result = fromTheme(['colors', 'primary'])(props);
      expect(result).toEqual('red');
    });
  });
});

describe('helpers/rendering/fromThemeWithRef', () => {
  const props = {
    theme: {
      colors: {
        primary: 'red',
      },
      buttons: {
        colorRef: 'primary',
        colorString: '#fafafa',
      },
    },
  };

  describe('when referenced value exists', () => {
    it('should return referenced value', () => {
      const result = fromThemeWithRef(['buttons', 'colorRef'], 'colors')(props);
      expect(result).toEqual('red');
    });
  });

  describe('when referenced value doesnt exist', () => {
    it('should return the selected value', () => {
      const result = fromThemeWithRef(['buttons', 'colorString'], 'colors')(props);
      expect(result).toEqual('#fafafa');
    });
  });
});
