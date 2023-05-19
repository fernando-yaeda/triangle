export function createGradient(ctx: CanvasRenderingContext2D) {
  const colorStart = "#f68bff";
  const colorEnd = "#6f47eb";

  const gradient = ctx.createLinearGradient(100, 0, 1000, 0);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export function createFillGradient(ctx: CanvasRenderingContext2D) {
  const colorStart = "rgb(239, 229, 240)";
  const colorEnd = "#ffffff";

  const gradient = ctx.createLinearGradient(50, 0, 50, 300);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}
