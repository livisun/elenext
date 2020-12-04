import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const cls = getBlockCls('ButtonGroup')
const ButtonGroup = defineComponent({
  name: getCompName('ButtonGroup'),
  setup(props, { attrs, slots }) {
    return () => <div class={`${cls}-group`}>{slots.default?.()}</div>
  }
})

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
