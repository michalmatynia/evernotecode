// #For objects


// #1) Object.assign()

// You can use the Object.assign() syntax which is explained in greater detail here.
var person = { name: 'Max' }
var copiedPerson = Object.assign({}, person)
// This syntax creates a new object (the {} part) and assigns all properties of the old object (the second argument) to that newly created one. This creates a copy.

// #2)

// Just as with arrays, you can also use the spread operator on objects.
var person = { name: 'Max' }
var copiedPerson = { ...person }
// This will also create a new object (because you used { }) and will then pull all properties of person out of it, into the brand-new objects.