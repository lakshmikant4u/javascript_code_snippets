// Function to initialize the game
function initGame() {
    // Initialize the game state
    let gameState = {
        score: 0,
        level: 1,
        lives: 3
    };

    // Initialize the player state
    let playerState = {
        x: 0,
        y: 0,
        speed: 10
    };

    // Initialize the enemy state
    let enemyState = {
        x: 100,
        y: 100,
        speed: 5
    };

    // Return an object containing the game state, player state, and enemy state
    return {
        gameState,
        playerState,
        enemyState
    };
}

// Function to update the game state
function updateGameState({ gameState, playerState, enemyState }) {
    // Update the player position based on the speed
    playerState.x += playerState.speed;

    // Update the enemy position based on the speed
    enemyState.x += enemyState.speed;

    // Check if the player has collided with the enemy
    if (playerState.x >= enemyState.x && playerState.x <= enemyState.x + 50 && playerState.y >= enemyState.y && playerState.y <= enemyState.y + 50) {
        // Decrement the player's lives and reset their position
        gameState.lives--;
        playerState.x = 0;
        playerState.y = 0;
    }

    // Check if the enemy has gone off screen and reset its position
    if (enemyState.x > 800) {
        enemyState.x = 0;
    }

    // Check if the player has reached the end of the level
    if (playerState.x > 800) {
        // Increment the player's score and level, and reset their position and the enemy's position
        gameState.score++;
        gameState.level++;
        playerState.x = 0;
        playerState.y = 0;
        enemyState.x = 100;
        enemyState.y = 100;
    }

    // Return the updated game state, player state, and enemy state
    return {
        gameState,
        playerState,
        enemyState
    };
}

// Function to render the game
function renderGame({ gameState, playerState, enemyState }) {
    // Render the game state, player state, and enemy state
    console.log("Score:", gameState.score);
    console.log("Level:", gameState.level);
    console.log("Lives:", gameState.lives);
    console.log("Player Position:", playerState.x, playerState.y);
    console.log("Enemy Position:", enemyState.x, enemyState.y);
}

// Initialize the game
let game = initGame();

// Render the initial game state
renderGame(game);

// Update the game state and render the updated game state
game = updateGameState(game);
renderGame(game);

// Update the game state and render the updated game state
game = updateGameState(game);
renderGame(game);

// Update the game state and render the updated game state
game = updateGameState(game);
renderGame(game);
