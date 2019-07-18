/*!
 * labelmore-plugin-starter v1.0.0
 * (c) infolks
 * Released under the ISC License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var labelmoreDevkit = require('@infolks/labelmore-devkit');
var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

//
//
//
//
//
//
//
//

var script = {
    methods: {
        sayHello() {
            this.$ui.notify('Hello World!');
        }
    }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uk-padding"},[_c('button',{staticClass:"uk-button uk-button-default",on:{"click":_vm.sayHello}},[_vm._v("\n        Say Hello!\n    ")])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var HelloWorldComponent = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

class HelloWorldPanel extends labelmoreDevkit.Panel {
    constructor(vue) {
        super();
        this.title = 'Hello World';
        this.icon = `<i class="fas fa-laugh-squint"></i>`;
        this.component = 'app-panel-helloworld';
        this.options = {
            showTitle: true
        };
        vue.component(this.component, HelloWorldComponent);
    }
}
HelloWorldPanel.NAME = "panels.random.helloworld";
var HelloWorldPanel$1 = labelmoreDevkit.Plugin.Panel({
    name: HelloWorldPanel.NAME,
    provides: HelloWorldPanel,
    uses: [
        'vue'
    ]
});

labelmoreDevkit.Plugin.Package({
    plugins: [
        HelloWorldPanel$1
    ]
});
