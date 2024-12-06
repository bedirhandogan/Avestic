import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Avestic } from '../src'

describe('avestic', () => {
  it('disabled', () => {
    const wrapper = mount(Avestic, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
