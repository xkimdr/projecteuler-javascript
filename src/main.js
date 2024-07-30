async function main() {
  const imports = [];

  for (let i = 1; i <= 7; ++i) {
    imports.push(import("./prob/p" + String(i).padStart(3, "0") + ".js"));
  }

  const modules = await Promise.all(imports);

  for (const [i, v] of modules.entries()) {
    console.log(
      "Problem " + String(i + 1).padStart(3, "0") + ": " + new v.default().aop()
    );
  }
}

main();
