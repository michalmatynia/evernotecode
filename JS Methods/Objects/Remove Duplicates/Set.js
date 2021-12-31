var myArray = ['a', 1, 'a', 2, '1'];

let unique = [...new Set(myArray)];

console.log(unique); // unique is ['a', 1, 2, '1']

// Druga wersja
        let subpage_models = get_models.filter((v, i, a) => a.indexOf(v) === i)
        // Array Of Objects
        things.thing = things.thing.filter((thing, index, self) =>
          index === self.findIndex((t) => (
            t.place === thing.place && t.name === thing.name
          ))
        )
