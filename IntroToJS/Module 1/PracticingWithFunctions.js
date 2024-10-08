/** Programmming with Javascript: Exercise Module 1 Working with conditionals and loops */




function letterFinder(word,match) {
    for (var i = 0 ; i < word.length; i++) {
        if (word[i] == match){
            console.log('Found the', match, 'at', i)
        } else { console.log('---No match found at', i)

        }
    }
}

letterFinder("test", "t");