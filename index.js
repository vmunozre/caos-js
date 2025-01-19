/**
 * - CaosJS
 * - https://github.com/vmunozre/caos-js
 * - MIT License
 * - 2025
 */
class CaosJS {
  constructor(options = {}) {
    const { selectors } = options
    if (typeof selectors === "string") {
      options.selectors = [selectors]
    }

    // default config
    this.config = {
      selectors: [], // default selectors
      maxRotation: 2, // max degrees rotation
      minRotation: -2, // min degrees rotation
      allowFrequency: false, // allow frequency to appy effect
      applyFrequencyToAllElements: false, // apply frequency to all elements
      frequency: 0.5, // frequency of the effect
      delay: 0, // delay to applay effect when load
      ...options, // user config
    }

    // set timeout to apply effect (delay)
    setTimeout(() => {
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
    this.config.selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector)
      elements.forEach(element => {
        if (this.config.allowFrequency && this.config.applyFrequencyToAllElements) {
          if (Math.random() < this.config.frequency) {
            this.caosifyElement(element)
          }
        } else {
          this.caosifyElement(element)
        }
      })
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
module.exports= CaosJS