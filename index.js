/**
 * - CaosJS
 * - https://github.com/vmunozre/caos-js
 * - MIT License
 * - 2025
 */

/**
 * Options to configure the CaosJS instance.
 * @typedef {Object} CaosJSOptions
 * @property {string|string[]} [selectors=[]] - Selectors to apply the effect to. Can be a single string or an array of strings.
 * @property {number} [maxRotation=2] - Maximum degrees of rotation.
 * @property {number} [minRotation=-2] - Minimum degrees of rotation.
 * @property {boolean} [allowFrequency=false] - Whether to allow frequency to determine effect application.
 * @property {boolean} [applyFrequencyToAllElements=false] - Whether to apply frequency to all elements.
 * @property {number} [frequency=0.5] - The frequency of the effect (0 to 1).
 * @property {number} [delay=0] - Delay in milliseconds before applying the effect after initialization.
 */
class CaosJS {
  /**
   * Creates a new instance of CaosJS.
   * @param {CaosJSOptions} [options={}] - Configuration options for the instance.
   */
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

  /**
   * Initializes the effect, applying it based on the configuration.
   */
  init() {
    if (this.config.allowFrequency) {
      if (Math.random() < this.config.frequency) {
        this.applyEffect()
      }
    } else {
      this.applyEffect()
    }
  }

  /**
   * Applies the effect to the configured selectors and elements.
   */
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

  /**
   * Applies a random rotation effect to a specific HTML element.
   * @param {HTMLElement} element - The HTML element to caosify.
   */
  caosifyElement(element) {
    const rotation = this.getRandomRotation()
    element.style.transform = `rotate(${rotation}deg)`
  }

  /**
   * Gets a random rotation value within the configured range.
   * @returns {number} A random number between `minRotation` and `maxRotation`.
   */
  getRandomRotation() {
    const { minRotation, maxRotation } = this.config
    return Math.random() * (maxRotation - minRotation) + minRotation
  }
}

// export module
module.exports= CaosJS