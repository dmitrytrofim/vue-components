import { mount } from '@vue/test-utils';
import MyButton from './MyButton.vue';

test('increments count on click', async () => {
  const wrapper = mount(MyButton);
  expect(wrapper.text()).toBe('0');

  await wrapper.find('button').trigger('click');
  expect(wrapper.text()).toBe('1');

  await wrapper.find('button').trigger('click');
  expect(wrapper.text()).toBe('2');

  expect(wrapper.html()).toMatchSnapshot();
});
