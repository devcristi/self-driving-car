class NeuralNetwork {
    constructor(neuronCounts) {
        this.levels = [];

        // Iterate over neuronCounts and create levels
        for (let i = 0; i < neuronCounts.length - 1; i++) {
            this.levels.push(new Level(
                neuronCounts[i], neuronCounts[i + 1]
            ));
        }
    }

    static feedForward(givenInputs, network) {
        // Use the Level class's feedForward method
        let outputs = Level.feedForward(
            givenInputs,
            network.levels[0]
        );

        // Iterate over levels to propagate forward
        for (let i = 1; i < network.levels.length; i++) {
            outputs = Level.feedForward(
                outputs,
                network.levels[i]
            );
        }

        return outputs;
    }
}

class Level {
    constructor(inputCount, outputCount) {
        // Initialize arrays with appropriate sizes
        this.inputs = new Array(inputCount);
        this.outputs = new Array(outputCount);
        this.biases = new Array(outputCount);  // Biases should match output count

        this.weights = [];

        // Create 2D array for weights
        for (let i = 0; i < inputCount; i++) {
            this.weights[i] = new Array(outputCount);
        }

        // Randomize the weights and biases
        Level.#randomize(this);
    }

    // Randomize weights and biases
    static #randomize(level) {
        // Randomize weights
        for (let i = 0; i < level.inputs.length; i++) {  // Corrected "length"
            for (let j = 0; j < level.outputs.length; j++) {  // Corrected "length"
                level.weights[i][j] = Math.random() * 2 - 1; // Random value between -1 and 1
            }
        }

        // Randomize biases
        for (let i = 0; i < level.biases.length; i++) {  // Corrected "length"
            level.biases[i] = Math.random() * 2 - 1;
        }
    }

    // Feedforward through the level
    static feedForward(givenInputs, level) {
        // Copy given inputs to level inputs
        for (let i = 0; i < level.inputs.length; i++) {  // Corrected "length"
            level.inputs[i] = givenInputs[i];
        }

        // Calculate outputs
        for (let i = 0; i < level.outputs.length; i++) {  // Corrected "length"
            let sum = 0;

            // Sum inputs * weights
            for (let j = 0; j < level.inputs.length; j++) {  // Corrected "length"
                sum += level.inputs[j] * level.weights[j][i];
            }

            // Activation function (threshold with bias)
            if (sum > level.biases[i]) {
                level.outputs[i] = 1;
            } else {
                level.outputs[i] = 0;
            }
        }

        // Return the outputs
        return level.outputs;
    }
}
