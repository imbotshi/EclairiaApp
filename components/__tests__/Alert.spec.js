import { shallowMount } from '@vue/test-utils';
import Alert from '@/components/Alert.vue';

describe('Alert.vue', () => {
  it('renders slot content', () => {
    const wrapper = shallowMount(Alert, {
      slots: {
        default: 'Hello World'
      }
    });
    expect(wrapper.text()).toContain('Hello World');
  });
});
