import { shallowMount } from '@vue/test-utils';
import LoginPage from '@/pages/login.vue';

describe('LoginPage.vue', () => {
  it('toggles password visibility', async () => {
    const wrapper = shallowMount(LoginPage, {
      mocks: {
        $store: { state: { user: { loading: false, authenticated: false } } },
        $cookies: { get: jest.fn(), remove: jest.fn() },
        $toast: { show: jest.fn(), clear: jest.fn(), error: jest.fn() },
        $router: { push: jest.fn() },
        $session: {},
      },
      stubs: ['nuxt-link', 'SvgLogoEclairiaVoice']
    });
    const passwordInput = wrapper.find('input[type="password"]');
    expect(passwordInput.exists()).toBe(true);
    // Simulate click on the eye icon
    await wrapper.find('span.cursor-pointer').trigger('click');
    // Now the input type should be text
    const textInput = wrapper.find('input[type="text"]');
    expect(textInput.exists()).toBe(true);
  });
});
