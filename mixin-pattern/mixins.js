function mixins(...mixinFactories) {
  var base = class {}
  // TODO: Add all possible method names that might call super()
  // to the base class so that they don't throw.
  for (var i = 0; i < mixinFactories.length; i++) {
    base = mixinFactories[i](base)
  }
  return base
}
