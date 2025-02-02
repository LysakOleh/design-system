/* eslint-disable */
/* tslint:disable */
import { EventEmitter } from '@angular/core'

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item]
      },
      set(val: any) {
        this.z.runOutsideAngular(() => (this.el[item] = val))
      },
    })
  })
}

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      // eslint-disable-next-line prefer-rest-params
      const args = arguments
      // eslint-disable-next-line prefer-spread
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args))
    }
  })
}

export const proxyOutputs = (instance: any, _el: any, events: string[]) => {
  events.forEach(eventName => (instance[eventName] = new EventEmitter()))
}

export const defineCustomElement = (tagName: string, customElement: any) => {
  if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    customElements.define(tagName, customElement)
  }
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { defineCustomElementFn?: () => void; inputs?: any; methods?: any }) {
  const decorator = function (cls: any) {
    const { defineCustomElementFn, inputs, methods } = opts

    if (defineCustomElementFn !== undefined) {
      defineCustomElementFn()
    }

    if (inputs) {
      proxyInputs(cls, inputs)
    }
    if (methods) {
      proxyMethods(cls, methods)
    }
    return cls
  }
  return decorator
}
