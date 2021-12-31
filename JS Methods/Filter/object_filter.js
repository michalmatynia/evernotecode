// Find and Filter work

         // ===========================
                    let translatedTagParentOptions = response.payload.reduce((accum, currentvalue) => {
                        // VERSION 3
                        // return translatedtagparent.payload.filter(obj => {
                        //     return currentvalue.name === obj.name ? true : false
                        // }) ? accum : [...accum, currentvalue]
                        // VERSION 4
                        
                        return translatedtagparent.payload.filter(obj => {
                            //    console.log(obj.name);
                            //    console.log(currentvalue.name);
                            return currentvalue.name === obj.name ? true : false
                        }) ? accum : [...accum, currentvalue]
                    }, []);
