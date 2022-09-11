function gameLoop() {
    console.log('frame');

    window.requestAnimationFrame(gameLoop);
}

export {
    gameLoop
}