import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Avestic } from '../src'

const slotText = 'Test content'

describe('button', () => {
  it('alert render', () => {
    const wrapper = mount(Avestic, {
      slots: {
        default: slotText,
      },
    })

    expect(wrapper.text()).toBe(slotText)
  })

  it('loading', () => {
    const wrapper = mount(Avestic, {
      props: {
        loading: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('disabled', () => {
    const wrapper = mount(Avestic, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
