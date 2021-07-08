const categories = [
    {
        id: 'cat1',
        name: 'art & literature',
    },
    {
        id: 'cat2',
        name: 'science',
    },
    {
        id: 'cat3',
        name: 'geography & history',
    },
    {
        id: 'cat4',
        name: 'sport',
    },
    {
        id: 'cat5',
        name: 'film & tv',
    },
    {
        id: 'cat6',
        name: 'random',
    }
];

const questionBank = [
    //category 1
    {
        categoryId: 'cat1',
        question: 'The term Impressionism was taken from the title of a work by which painter?',
        options: [
            {
                a: 'Claude Monet',
                isCorrect: true,
            },
            {
                b: 'Edouard Manet',
            },
            {
                c: 'Alfred Sisley',
            },
            {
                d: 'Henri Matisse',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'The eponymous Don Quixote begins fighting what after mistaking them for giants?',
        options: [
            {
                a: 'Trees',
            },
            {
                b: 'Houses',
            },
            {
                c: 'Horses',
            },
            {
                d: 'Windmills',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: '“Now is the winter of our discontent” is a quote from which Shakespeare play?',
        options: [
            {
                a: 'Macbeth',
            },
            {
                b: 'Richard III',
                isCorrect: true,
            },
            {
                c: 'Henry V',
            },
            {
                d: 'King Lear',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'David is a famous sculpture made by which artist?',
        options: [
            {
                a: 'Leonardo',
            },
            {
                b: 'Michelangelo',
                isCorrect: true,
            },
            {
                c: 'Raphael',
            },
            {
                d: 'Donatello',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Who wrote Sense and Sensibility?',
        options: [
            {
                a: 'Jane Austen',
                isCorrect: true,
            },
            {
                b: 'Charlotte Brontë',
            },
            {
                c: 'George Eliot',
            },
            {
                d: 'Louisa May Alcott',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'How many lines are there in a sonnet?',
        options: [
            {
                a: '5',
            },
            {
                b: '7',
            },
            {
                c: '14',
                isCorrect: true,
            },
            {
                d: '18',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Which is the most visited art gallery in the world?',
        options: [
            {
                a: 'Metropolitan Museum of Art',
            },
            {
                b: 'Tate Modern',
            },
            {
                c: 'Louvre',
                isCorrect: true,
            },
            {
                d: 'Museo Reina Sofía',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Pip is the main character of which Charles Dickens book?',
        options: [
            {
                a: 'A Christmas Carol',
            },
            {
                b: 'Bleak House',
            },
            {
                c: 'Great Expectations',
                isCorrect: true,
            },
            {
                d: 'A Tale of Two Cities',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Salvador Dali was a famous name in which art movement?',
        options: [
            {
                a: 'Postimpressionism',
            },
            {
                b: 'Dada',
            },
            {
                c: 'Modernism',
            },
            {
                d: 'Surrealism',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'What book is set in Airstrip One, a province of the superstate Oceania?',
        options: [
            {
                a: 'Lord of the Flies',
            },
            {
                b: 'Nineteen Eighty-Four',
                isCorrect: true,
            },
            {
                c: 'The Island of Doctor Moreau',
            },
            {
                d: 'Fahrenheit 451',
            },
        ],
    },
    //category 2
    {
        categoryId: 'cat2',
        question: 'Which element has the highest atomic number?',
        options: [
            {
                a: 'Rutherfordium',
            },
            {
                b: 'Plutonium',
            },
            {
                c: 'Oganesson',
                isCorrect: true,
            },
            {
                d: 'Tennessine',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'What do the numbers 6, 28 and 496 have in common?',
        options: [
            {
                a: 'Prime numbers',
            },
            {
                b: 'Rational numbers',
            },
            {
                c: 'Natural numbers',
            },
            {
                d: 'Perfect numbers',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Where are the carpal bones found?',
        options: [
            {
                a: 'Foot',
            },
            {
                b: 'Wrist',
                isCorrect: true,
            },
            {
                c: 'Ear',
            },
            {
                d: 'Knee',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Which animals, weighing between 11 and 30kg, belong to the family Castoridae?',
        options: [
            {
                a: 'Beavers',
                isCorrect: true,
            },
            {
                b: 'Wolverines',
            },
            {
                c: 'Coyote',
            },
            {
                d: 'Anteater',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'What gives flamingos their distinctive pink colour?',
        options: [
            {
                a: 'Sun exposure',
            },
            {
                b: 'Genetics',
            },
            {
                c: 'Their diet',
                isCorrect: true,
            },
            {
                d: 'Dyed feathers',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'The human eye can distinguish how many different colours?',
        options: [
            {
                a: '100,000',
            },
            {
                b: '1 million',
            },
            {
                c: '10 million',
                isCorrect: true,
            },
            {
                d: '100 million',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Known as ‘the father of genetics’, which scientist discovered the principals of inheritance?',
        options: [
            {
                a: 'Gregor Mendel',
                isCorrect: true,
            },
            {
                b: 'Charles Darwin',
            },
            {
                c: 'Dmitri Mendeleev',
            },
            {
                d: 'Louis Pasteur',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Ascorbic acid is a form of which vitamin?',
        options: [
            {
                a: 'A',
            },
            {
                b: 'B',
            },
            {
                c: 'C',
                isCorrect: true,
            },
            {
                d: 'D',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'The Earth’s atmosphere is mainly made up of which element?',
        options: [
            {
                a: 'Hydrogen',
            },
            {
                b: 'Oxygen',
            },
            {
                c: 'Carbon',
            },
            {
                d: 'Nitrogen',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'At what temperature are Celsius and Fahrenheit equal?',
        options: [
            {
                a: '100°',
            },
            {
                b: '40°',
            },
            {
                c: '0°',
            },
            {
                d: '-40°',
                isCorrect: true,
            },
        ],
    },
    //category 3
    {
        categoryId: 'cat3',
        question: 'Hamilton is the capital of which British Overseas Territory?',
        options: [
            {
                a: 'British Virgin Islands',
            },
            {
                b: 'Gibraltar',
            },
            {
                c: 'Bermuda',
                isCorrect: true,
            },
            {
                d: 'Falkland Islands',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'In which century was the Mona Lisa painted?',
        options: [
            {
                a: '15th',
            },
            {
                b: '16th',
                isCorrect: true,
            },
            {
                c: '17th',
            },
            {
                d: '18th',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'The longest bridge in Europe, the Vasco de Gama Bridge, is located in which country?',
        options: [
            {
                a: 'Spain',
            },
            {
                b: 'Portugal',
                isCorrect: true,
            },
            {
                c: 'Italy',
            },
            {
                d: 'Greece',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'In 1925 who announced he was taking dictatorial powers over Italy?',
        options: [
            {
                a: 'Adolf Hitler',
            },
            {
                b: 'Francisco Franco',
            },
            {
                c: 'Silvio Berlusconi',
            },
            {
                d: 'Benito Mussolini',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'What type of bird appears on the national flag of Mexico?',
        options: [
            {
                a: 'Eagle',
                isCorrect: true,
            },
            {
                b: 'Falcon',
            },
            {
                c: 'Penguin',
            },
            {
                d: 'Peacock',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'What did Johannes Gutenberg invent in 1440?',
        options: [
            {
                a: 'Steam engine',
            },
            {
                b: 'Spinning wheel',
            },
            {
                c: 'Telephone',
            },
            {
                d: 'Printing press',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'Which of these countries does not border Kenya?',
        options: [
            {
                a: 'Somalia',
            },
            {
                b: 'Eritrea',
                isCorrect: true,
            },
            {
                c: 'Uganda',
            },
            {
                d: 'South Sudan',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'How old was Joan of Arc when she was burnt at the stake?',
        options: [
            {
                a: '19',
                isCorrect: true,
            },
            {
                b: '21',
            },
            {
                c: '25',
            },
            {
                d: '27',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'The Danube flows into what body of water?',
        options: [
            {
                a: 'Caspian Sea',
            },
            {
                b: 'The Dead Sea',
            },
            {
                c: 'The Black Sea',
                isCorrect: true,
            },
            {
                d: 'Sea of Marmara',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'In 1990 who created the first web server and laid the foundations for the World Wide Web?',
        options: [
            {
                a: 'Tim Berners-Lee',
                isCorrect: true,
            },
            {
                b: 'Alan Turing',
            },
            {
                c: 'Manuel Blum',
            },
            {
                d: 'Grace Hopper',
            },
        ],
    },
    //category 4
    {
        categoryId: 'cat4',
        question: 'Which American city is home to teams such as the Rockets, Dynamo, Astros and Dash?',
        options: [
            {
                a: 'New York',
            },
            {
                b: 'Houston',
                isCorrect: true,
            },
            {
                c: 'San Francisco',
            },
            {
                d: 'Seattle',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Which nation caused the greatest Rugby World Cup shock ever when they beat South Africa in 2015?',
        options: [
            {
                a: 'England',
            },
            {
                b: 'Argentina',
            },
            {
                c: 'Wales',
            },
            {
                d: 'Japan',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'How many people make up an Olympic curling team?',
        options: [
            {
                a: '2',
            },
            {
                b: '3',
            },
            {
                c: '4',
                isCorrect: true,
            },
            {
                d: '5',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Which country hosted the 2010 football World Cup?',
        options: [
            {
                a: 'South Africa',
                isCorrect: true,
            },
            {
                b: 'Germany',
            },
            {
                c: 'Brazil',
            },
            {
                d: 'Italy',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Ali Farag and Nour El Tayeb became the first married couple in sporting history to win the same singles title on the same day in which sport?',
        options: [
            {
                a: 'Squash',
                isCorrect: true,
            },
            {
                b: 'Badminton',
            },
            {
                c: 'Tennis',
            },
            {
                d: 'Trampolining',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In April 2021 Rachael Blackmore became the first female winner of what competition?',
        options: [
            {
                a: 'Kentucky Derby',
            },
            {
                b: 'Grand National',
                isCorrect: true,
            },
            {
                c: 'Epsom Derby',
            },
            {
                d: 'Ascot Gold Cup',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In 1966 Pickles the dog helped find which stolen trophy?',
        options: [
            {
                a: 'The Ashes urn',
            },
            {
                b: 'Webb Ellis Cup',
            },
            {
                c: 'Jules Rimet trophy',
                isCorrect: true,
            },
            {
                d: 'Vince Lombardi trophy',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In which winter sport might you have to take a penalty loop?',
        options: [
            {
                a: 'Speed skating',
            },
            {
                b: 'Luge',
            },
            {
                c: 'Bobsleigh',
            },
            {
                d: 'Biathlon',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In Olympic boxing what category comes between lightweight and middleweight?',
        options: [
            {
                a: 'Welterweight',
                isCorrect: true,
            },
            {
                b: 'Featherweight',
            },
            {
                c: 'Light heavyweight',
            },
            {
                d: 'Flyweight',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Ayrton Senna lost his life after crashing at which Formula 1 Grand Prix race?',
        options: [
            {
                a: 'Monaco',
            },
            {
                b: 'Barcelona',
            },
            {
                c: 'Imola',
                isCorrect: true,
            },
            {
                d: 'Spa',
            },
        ],
    },
    //category 5
    {
        categoryId: 'cat5',
        question: 'What brand of car is famously driven by James Bond?',
        options: [
            {
                a: 'Rolls Royce',
            },
            {
                b: 'Bentley',
            },
            {
                c: 'Jaguar',
            },
            {
                d: 'Aston Martin',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Which historical drama set in Yorkshire was created and co-written by Julian Fellowes?',
        options: [
            {
                a: 'Bridgerton',
            },
            {
                b: 'Downton Abbey',
                isCorrect: true,
            },
            {
                c: 'Outlander',
            },
            {
                d: 'Poldark',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'In what year was the first Star Wars film released?',
        options: [
            {
                a: '1967',
            },
            {
                b: '1972',
            },
            {
                c: '1977',
                isCorrect: true,
            },
            {
                d: '1982',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Which brothers created the series Stranger Things?',
        options: [
            {
                a: 'Coen brothers',
            },
            {
                b: 'Blues brothers',
            },
            {
                c: 'Duffer brothers',
                isCorrect: true,
            },
            {
                d: 'Wright brothers',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Who directed the 2000 film Gladiator?',
        options: [
            {
                a: 'Ridley Scott',
                isCorrect: true,
            },
            {
                b: 'Steven Spielberg',
            },
            {
                c: 'Martin Scorsese',
            },
            {
                d: 'James Cameron',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Which actor is known for his roles as Magneto and Gandalf?',
        options: [
            {
                a: 'Patrick Stewart',
            },
            {
                b: 'Ian McKellan',
                isCorrect: true,
            },
            {
                c: 'Christopher Lee',
            },
            {
                d: 'Hugh Jackman',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'What did Tom Hanks’ character name the ball he talked to in Cast Away?',
        options: [
            {
                a: 'Nelson',
            },
            {
                b: 'Frank',
            },
            {
                c: 'Wilson',
                isCorrect: true,
            },
            {
                d: 'Mark',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'In the series Breaking Bad who played the character Walter White?',
        options: [
            {
                a: 'Bryan Cranston',
                isCorrect: true,
            },
            {
                b: 'Aaron Paul',
            },
            {
                c: 'Jason Bateman',
            },
            {
                d: 'Pedro Pascal',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Famous westerns director Sergio Leone was born in what country?',
        options: [
            {
                a: 'Spain',
            },
            {
                b: 'USA',
            },
            {
                c: 'Argentina',
            },
            {
                d: 'Italy',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Who starred as Fox Mulder in the series X-Files?',
        options: [
            {
                a: 'Mitch Pileggi',
            },
            {
                b: 'David Duchovny',
                isCorrect: true,
            },
            {
                c: 'David Lynch',
            },
            {
                d: 'Matthew Fox',
            },
        ],
    },
];