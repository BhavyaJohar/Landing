const palette = {
  "white-on-dark-blue": { foreground: "#FFFFFF", background: "#0B1624" },
  "white-on-dark-azure": { foreground: "#FFFFFF", background: "#25678A" },
  "white-on-gradient-end": { foreground: "#FFFFFF", background: "#1A779A" },
  "gray-azure-on-off-white": { foreground: "#505E6A", background: "#F8F9FA" },
  "dark-blue-on-off-white": { foreground: "#0B1624", background: "#F8F9FA" },
  "light-azure-on-dark-blue": { foreground: "#1F97C1", background: "#0B1624" },
};

function hexToRgb(hex) {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function luminance({ r, g, b }) {
  const srgb = [r, g, b].map((channel) => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return srgb[0] * 0.2126 + srgb[1] * 0.7152 + srgb[2] * 0.0722;
}

function contrastRatio(foreground, background) {
  const L1 = luminance(hexToRgb(foreground));
  const L2 = luminance(hexToRgb(background));
  const [lighter, darker] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (lighter + 0.05) / (darker + 0.05);
}

function run() {
  console.log("Sentinel Gradient Contrast Check");
  console.log("--------------------------------");
  let allPass = true;
  Object.entries(palette).forEach(([label, { foreground, background }]) => {
    const ratio = contrastRatio(foreground, background);
    const passes = ratio >= 4.5;
    allPass &&= passes;
    console.log(
      `${label.padEnd(30)} ${ratio.toFixed(2)} ${passes ? "PASS" : "FAIL"}`
    );
  });

  if (!allPass) {
    process.exitCode = 1;
    console.log("\nContrast requirements not satisfied (WCAG AA 4.5:1).");
  } else {
    console.log("\nAll checked combinations meet WCAG AA contrast requirements.");
  }
}

run();
