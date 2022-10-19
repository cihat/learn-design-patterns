var Bar1 = (base) =>
  class extends base {
    componentWillMount() {
      super.componentWillMount()
      console.log("Bar1")
    }
  }

var Bar2 = (base) =>
  class extends base {
    componentWillMount() {
      super.componentWillMount()
      console.log("Bar2")
    }
  }

class Foo extends mixins(Bar1, Bar2) {
  componentWillMount() {
    console.log("Foo before mixins")
    super.componentWillMount()
    console.log("Foo after mixins")
  }
}
