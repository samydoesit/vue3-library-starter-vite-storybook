import type { App, Plugin } from 'vue';

import TestComponent from './TestComponent';

// install
const install = (app: App): void => {
    app.use(TestComponent);
};

export default { install };

export {
    TestComponent
}

export * from './TestComponent';