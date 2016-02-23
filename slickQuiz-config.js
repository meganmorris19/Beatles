// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Let's see what you've learned.",
        "main":    "<p>Think you've learned a lot about the Beatles? Let's see.</p>",
        "results": "",
        "level1":  "Great job!",
        "level2":  "Well done.",
        "level3":  "Good effort.",
        "level4":  "Go through the website again, maybe...",
        "level5":  "Did you read the website...?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Who was the original founder of the Beatles?",
            "a": [
                {"option": "Paul McCartney",      "correct": false},
                {"option": "Ringo Starr",     "correct": false},
                {"option": "John Lennon",      "correct": true},
                {"option": "George Harrison",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect. John Lennon founded the Beatles.</span>" // no comma here
        },
          { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "When did the Beatles begin digitally stream their music?",
            "a": [
                {"option": "2015",      "correct": false},
                {"option": "2007",     "correct": false},
                {"option": "2003",      "correct": true},
                {"option": "2012",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect. The Beatles started digitally streaming their music on December 24, 2015.</span>" // no comma here
          },
          { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Who was John Lennon's original partner for the Beatles?",
            "a": [
                {"option": "Paul McCartney",      "correct": true},
                {"option": "Ringo Starr",     "correct": false},
                {"option": "John Lennon",      "correct": false},
                {"option": "George Harrison",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect. Paul McCartney was John Lennon's original partner.</span>" // no comma here
        },
          { // Question 4
            "q": "Who was the lead guitarist of the Beatles?",
            "a": [
                {"option": "Paul McCartney",      "correct": false},
                {"option": "Ringo Starr",     "correct": false},
                {"option": "John Lennon",      "correct": false},
                {"option": "George Harrison",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect. George Harrison was the lead guitarist of the Beatles.</span>"
          },
          { // Question 5
              "q": "Are the Beatles on iTunes?",
              "a": [
                  {"option": "Yes",    "correct": true},
                  {"option": "No",     "correct": false} // no comma here
              ],
              "correct": "<p><span>Correct!</span></p>",
              "incorrect": "<p><span>Incorrect — they're on iTunes!</span></p>" // no comma here
          } // no comma here
      ]
};
