/**
 * - CaosJS
 * - https://github.com/vmunozre/caos-js
 * - MIT License
 * - 2025
 */
class CaosJS {
  constructor(options = {}) {
    const { selector } = options
    if (typeof selector === "string") {
      options.selector = [selector]
    }

    // default config
    this.config = {
      selector: [], // default selector
      maxRotation: 2, // max degrees rotation
      minRotation: -2, // min degrees rotation
      allowFrequency: false, // allow frequency to appy effect
      applyFrequencyToAllElements: false, // apply frequency to all elements
      frequency: 0.5, // frequency of the effect
      delay: 0, // delay to applay effect when load
      ...options, // user config
    }

    // set interval to apply effect (delay)
    setInterval(() => {
      this.init()
    }, this.config.delay)
  }

  init() {
    if (this.config.allowFrequency) {
      if (Math.random() < this.config.frequency) {
        this.applyEffect()
      }
    } else {
      this.applyEffect()
    }
  }

  applyEffect() {
    const elements = document.querySelectorAll(this.config.selector)
    elements.forEach(element => {
      if (this.config.allowFrequency && this.config.applyFrequencyToAllElements) {
        if (Math.random() < this.config.frequency) {
          this.caosifyElement(element)
        }
      } else {
        this.caosifyElement(element)
      }
    })
  }

  caosifyElement(element) {
    const rotation = this.getRandomRotation()
    element.style.transform = `rotate(${rotation}deg)`
  }

  getRandomRotation() {
    const { minRotation, maxRotation } = this.config
    return Math.random() * (maxRotation - minRotation) + minRotation
  }
}

// export module
module.exports = CaosJS