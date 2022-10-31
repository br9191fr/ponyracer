import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  test('renders a title', () => {
    const wrapper = mount(App);
    expect(wrapper.get('h1').text()).toBe('Ponyracer');
  });
});
describe('App.vue', () => {
  test('describe nb of users', () => {
    const wrapper = mount(App);
    expect(wrapper.get('h2').text()).contains('users');
  });
});
