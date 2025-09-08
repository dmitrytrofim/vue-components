import { mount } from '@vue/test-utils';
import BaseButton from '@/common-components/base-button/BaseButton.vue';

describe('BaseButton snapshot', () => {
  test('matches snapshot', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me!',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
