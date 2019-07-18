import {Panel, PanelOptions, Plugin} from '@infolks/labelmore-devkit'
import HelloWorldComponent from './HelloWorld.vue'

class HelloWorldPanel extends Panel {

    public static NAME = "panels.random.helloworld"

    public readonly title = 'Hello World'
    public readonly icon = `<i class="fas fa-laugh-squint"></i>`
    public readonly component = 'app-panel-helloworld'

    public readonly options: PanelOptions = {
        showTitle: true
    }

    constructor(vue: any) {
        super()

        vue.component(this.component, HelloWorldComponent)
    }
}

export default Plugin.Panel({
    name: HelloWorldPanel.NAME,
    provides: HelloWorldPanel,
    uses: [
        'vue'
    ]
})