window.onload = function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 600;

  let player = { x: 100, y: 500, size: 40, vy: 0, gravity: 0.8, jumping: false };

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !player.jumping) {
      player.vy = -15; // jump force
      player.jumping = true;
    }
  });

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply gravity
    player.y += player.vy;
    player.vy += player.gravity;

    // Floor collision
    if (player.y + player.size > canvas.height) {
      player.y = canvas.height - player.size;
      player.vy = 0;
      player.jumping = false;
    }

    // Draw player
    ctx.fillStyle = "lime";
    ctx.fillRect(player.x, player.y, player.size, player.size);

    requestAnimationFrame(gameLoop);
  }

  gameLoop();
};