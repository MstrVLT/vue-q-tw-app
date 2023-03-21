import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import App from '../App.vue';

installQuasarPlugin();

describe('Example Test App', () => {
  it('should mount correctly', async () => {
    const wrapper = mount(App, {});
    expect(wrapper.html()).toMatchSnapshot()
  });
});