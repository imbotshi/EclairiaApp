import { shallowMount, createLocalVue } from '@vue/test-utils'
import Register from '@/pages/register.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.component('nuxt-link', { render: h => h('a') })

describe('Register.vue', () => {
  let actions
  let store
  let wrapper
  let toastMock

  beforeEach(() => {
    actions = {
      register: jest.fn(() => Promise.resolve({ status: 201 }))
    }
    store = new Vuex.Store({
      modules: {
        user: {
          namespaced: true,
          actions,
          state: { loading: false }
        }
      }
    })

    toastMock = {
      error: jest.fn(),
      success: jest.fn()
    }

    wrapper = shallowMount(Register, {
      localVue,
      store,
      stubs: ['nuxt-link'],
      mocks: {
        $toast: toastMock
      }
    })
  })

  it('should call register action on form submit', async () => {
    wrapper.setData({
      formUser: {
        email: 'test@example.com',
        username: 'testuser',
        password: 'password',
        password_confirm: 'password',
        default_language: 1,
        user_location: 1,
        email_source: 1,
        screen_name: 'testuser',
        accept_tos: true
      },
      errors: {}
    })
    await wrapper.vm.register()
    expect(actions.register).toHaveBeenCalled()
  })

  it('should handle registration error gracefully', async () => {
    actions.register.mockImplementation(() =>
      Promise.reject({ status: 400, data: { error: 'Email déjà utilisé' } })
    )
    wrapper.setData({
      formUser: {
        email: 'used@example.com',
        username: 'useduser',
        password: 'password',
        password_confirm: 'password',
        default_language: 1,
        user_location: 1,
        email_source: 1,
        screen_name: 'useduser',
        accept_tos: true
      }
    })
    await wrapper.vm.register()
    expect(wrapper.vm.errors.message).toBe('Email déjà utilisé')
    expect(toastMock.error).toHaveBeenCalledWith('Email déjà utilisé', expect.any(Object))
  })

  it('should handle registration error for field (email) gracefully', async () => {
    actions.register.mockImplementation(() =>
      Promise.reject({ status: 400, data: { email: ['Email déjà utilisé'] } })
    )
    wrapper.setData({
      formUser: {
        email: 'used@example.com',
        username: 'useduser',
        password: 'password',
        password_confirm: 'password',
        default_language: 1,
        user_location: 1,
        email_source: 1,
        screen_name: 'useduser',
        accept_tos: true
      }
    })
    await wrapper.vm.register()
    expect(Object.values(wrapper.vm.errors)).toContain('Email déjà utilisé')
    expect(toastMock.error).toHaveBeenCalledWith('Erreur inconnue lors de l’inscription.', expect.any(Object))
  })

  it('should handle registration error with top-level error message', async () => {
    actions.register.mockImplementation(() =>
      Promise.reject({ status: 400, data: { error: 'Email déjà utilisé' } })
    )
    wrapper.setData({
      formUser: {
        email: 'used@example.com',
        username: 'useduser',
        password: 'password',
        password_confirm: 'password',
        default_language: 1,
        user_location: 1,
        email_source: 1,
        screen_name: 'useduser',
        accept_tos: true
      }
    })
    await wrapper.vm.register()
    expect(Object.values(wrapper.vm.errors)).toContain('Email déjà utilisé')
    expect(toastMock.error).toHaveBeenCalledWith('Email déjà utilisé', expect.any(Object))
  })

  it('should handle registration error for email already used (409)', async () => {
    actions.register.mockImplementation(() =>
      Promise.reject({ status: 409, data: { detail: ['email already used'] } })
    )
    wrapper.setData({
      formUser: {
        email: 'used@example.com',
        username: 'newuser',
        password: 'password',
        password_confirm: 'password',
        default_language: 1,
        user_location: 1,
        email_source: 1,
        screen_name: 'newuser',
        accept_tos: true
      }
    })
    await wrapper.vm.register()
    expect(wrapper.vm.errors.email).toBe('Email déjà utilisé')
    expect(toastMock.error).toHaveBeenCalledWith('Email déjà utilisé', expect.any(Object))
  })

  it('should handle registration error for username already used (409)', async () => {
    actions.register.mockImplementation(() =>
      Promise.reject({ status: 409, data: { detail: ['username already used'] } })
    )
    wrapper.setData({
      formUser: {
        email: 'new@example.com',
        username: 'useduser',
        password: 'password',
        password_confirm: 'password',
        default_language: 1,
        user_location: 1,
        email_source: 1,
        screen_name: 'useduser',
        accept_tos: true
      }
    })
    await wrapper.vm.register()
    expect(wrapper.vm.errors.username).toBe("Nom d'utilisateur déjà utilisé")
    expect(toastMock.error).toHaveBeenCalledWith("Nom d'utilisateur déjà utilisé", expect.any(Object))
  })
})
