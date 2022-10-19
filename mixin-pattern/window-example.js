window.indexedDB.open("toDoList")

window.addEventListener("beforeunload", (event) => {
  event.preventDefault()
  event.returnValue = ""
})

window.onbeforeunload = function () {
  console.log("Unloading!")
}

console.log(
  "From WindowEventHandlers mixin: onbeforeunload",
  window.onbeforeunload
)

console.log(
  "From WindowOrWorkerGlobalScope mixin: isSecureContext",
  window.isSecureContext
)

console.log(
  "WindowEventHandlers itself is undefined",
  window.WindowEventHandlers
)

console.log(
  "WindowOrWorkerGlobalScope itself is undefined",
  window.WindowOrWorkerGlobalScope
)
