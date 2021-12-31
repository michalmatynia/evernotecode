
  // Spread Operator - Array
  const hobbies = ['Sports', 'Cooking'];
  const activeHobbies = ['Hiking']
  
  // Array are OBJECTS - OBJECTS are REFERENCE VALUES - We don't change the address when I push, we only change memory
  // I can push to const
  
  // add array as a list of individual values
  
  activeHobbies.push(...hobbies)
  
  // OR 
  const activeHobbiesTwo = ['Hiking', ...hobbies]
  
  // Spread Operator - Object
  
  const persona = {
    name: 'Max',
    age: 30
  }
  
  // This is not a copy, we just copied a pointer to a different space in memory
  const instancePerson = persona
  
  // To create a real copy, use Spread operator
  
  const trueCopiedPerson = {...persona}
  