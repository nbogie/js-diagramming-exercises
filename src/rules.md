rules.md

wip...

param passing
in this mental model, param-passing consistently makes copies of what's IN the variable. In the case of the primitive that's a copy of the value, like 20, or "hi", which we're modelling as being stored IN the variable. In the case of objects and arrays, that's a copy of the _reference_. The reference is in the variable, the array / object is not in the variable.
