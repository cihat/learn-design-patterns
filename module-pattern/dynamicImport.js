import("module").then((module) => {
  module.default()
  module.namedExport()
})

// Or with async/await
;(async () => {
  const module = await import("module")
  module.default()
  module.namedExport()
})()

//* The module only gets loaded, if the user clicks on the button.
button.addEventListener("click", () => {
  import("./math.js").then((module) => {
    console.log("Add: ", module.add(1, 2))
    console.log("Multiply: ", module.multiply(3, 2))

    const button = document.getElementById("btn")
    button.innerHTML = "Check the console"
  })
})

/*************************** */
/**** Or with async/await ****/
/*************************** */
button.addEventListener("click", async () => {
  const module = await import("./math.js");
  console.log("Add: ", module.add(1, 2));
  console.log("Multiply: ", module.multiply(3, 2));
});
