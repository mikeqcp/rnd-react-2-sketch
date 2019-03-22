export const describeWeb = runTests => {
  return describe('for web build', () => {
    beforeEach(() => {
      global.IS_WEB_TARGET = true;
    });

    afterEach(() => {
      global.IS_WEB_TARGET = undefined;
    });

    runTests();
  });
};


export const describeSketch = runTests => {
  return describe('for sketch build', () => {
    afterEach(() => {
      global.IS_WEB_TARGET = undefined;
    });

    runTests();
  });
};
