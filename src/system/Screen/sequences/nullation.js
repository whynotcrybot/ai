function nullation(screen, layout) {
  const { overlay } = layout;

  const { width, height } = overlay;

  let x = 0;
  let y = 0;

  let accumulator = '';

  const ln = Math.ceil((width * height) / 7500);

  const interval = setInterval(() => {
    const str = Array.from(
      { length: width - x > 10 ? ln : 1 },
      () => '0',
    ).join('');

    accumulator += str;

    overlay.setLine(y, accumulator);
    screen.render();

    x += str.length;

    if (x >= width) {
      accumulator = '';
      x = 0;
      y += 1;
    }

    if (y >= height) {
      clearInterval(interval);
    }
  });
}

module.exports = nullation;
