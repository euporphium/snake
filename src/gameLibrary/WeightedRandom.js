export default class WeightedRandom {
  #items;
  #cumulativeWeights;

  constructor(items, weights) {
    if (items.length !== weights.length) {
      throw new Error('Items and weights must be of the same size');
    }

    if (!items.length) {
      throw new Error('Items must not be empty');
    }

    const cumulativeWeights = [];
    for ( let i = 0; i < weights.length; i += 1 ) {
      cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
    }

    this.#items = items;
    this.#cumulativeWeights = cumulativeWeights;
  }

  getRandomItem() {
    const randomNumber = this.#cumulativeWeights[this.#cumulativeWeights.length - 1] * Math.random();
    for ( let i = 0; i < this.#items.length; i++ ) {
      if (this.#cumulativeWeights[i] >= randomNumber) {
        return this.#items[i];
      }
    }
  }
}
