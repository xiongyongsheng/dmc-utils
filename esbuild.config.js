const esbuild = require("esbuild");
const isDev = process.argv.includes("--dev");
const target = ["chrome58", "firefox57", "safari11", "edge18"];

const callback = async (ctx) => {
  if (isDev) {
    await ctx.watch();
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
};
const commonOption = {
  bundle: true,
  logLevel: "info",
  color: true,
  // minify: false,
  // minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  target: "es6",
};
const startTime = new Date().getTime();
Promise.all([
  esbuild
    .context({
      ...commonOption,
      entryPoints: ["./main.js"],
      outdir: "./lib",
      platform: "neutral",
    })
    .then(callback),
  esbuild
    .context({
      ...commonOption,
      entryPoints: ["./modules/*.js"],
      outdir: "./lib/modules",
      platform: "neutral",
    })
    .then(callback),
]).then((result) => {
  if (!isDev) {
    console.log(`⚡️ ${new Date().getTime() - startTime}ms`);
    console.log("build done!");
  }
});
