import { isSketch } from '../index';
import { describeSketch, describeWeb } from '../describePatterns';


describe('helpers/index/isSketch', () => {
  describeSketch(() => {
    it('should return true', () => {
      expect(isSketch()).toBe(true);
    });
  });

  describeWeb(() => {
    it('should return false', () => {
      expect(isSketch()).toBe(false);
    });
  });
});
