const CATEGORIES = [
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
        name: 'random!',
    }
];

const questionBank = [
    //category 1
    {
        categoryId: 'cat1',
        question: 'The term Impressionism was taken from the title of a work by which painter?',
        options: [
            {
                text: 'Claude Monet',
                isCorrect: true,
            },
            {
                text: 'Edouard Manet',
            },
            {
                text: 'Alfred Sisley',
            },
            {
                text: 'Henri Matisse',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'The eponymous Don Quixote begins fighting what after mistaking them for giants?',
        options: [
            {
                text: 'Trees',
            },
            {
                text: 'Houses',
            },
            {
                text: 'Horses',
            },
            {
                text: 'Windmills',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: '“Now is the winter of our discontent” is a quote from which Shakespeare play?',
        options: [
            {
                text: 'Macbeth',
            },
            {
                text: 'Richard III',
                isCorrect: true,
            },
            {
                text: 'Henry V',
            },
            {
                text: 'King Lear',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'David is a famous sculpture made by which artist?',
        options: [
            {
                text: 'Leonardo',
            },
            {
                text: 'Michelangelo',
                isCorrect: true,
            },
            {
                text: 'Raphael',
            },
            {
                text: 'Donatello',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Who wrote Sense and Sensibility?',
        options: [
            {
                text: 'Jane Austen',
                isCorrect: true,
            },
            {
                text: 'Charlotte Brontë',
            },
            {
                text: 'George Eliot',
            },
            {
                text: 'Louisa May Alcott',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'How many lines are there in a sonnet?',
        options: [
            {
                text: '5',
            },
            {
                text: '7',
            },
            {
                text: '14',
                isCorrect: true,
            },
            {
                text: '18',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Which is the most visited art gallery in the world?',
        options: [
            {
                text: 'Metropolitan Museum of Art',
            },
            {
                text: 'Tate Modern',
            },
            {
                text: 'Louvre',
                isCorrect: true,
            },
            {
                text: 'Museo Reina Sofía',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Pip is the main character of which Charles Dickens book?',
        options: [
            {
                text: 'A Christmas Carol',
            },
            {
                text: 'Bleak House',
            },
            {
                text: 'Great Expectations',
                isCorrect: true,
            },
            {
                text: 'A Tale of Two Cities',
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'Salvador Dali was a famous name in which art movement?',
        options: [
            {
                text: 'Postimpressionism',
            },
            {
                text: 'Dada',
            },
            {
                text: 'Modernism',
            },
            {
                text: 'Surrealism',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat1',
        question: 'What book is set in Airstrip One, a province of the superstate Oceania?',
        options: [
            {
                text: 'Lord of the Flies',
            },
            {
                text: 'Nineteen Eighty-Four',
                isCorrect: true,
            },
            {
                text: 'The Island of Doctor Moreau',
            },
            {
                text: 'Fahrenheit 451',
            },
        ],
    },
    //category 2
    {
        categoryId: 'cat2',
        question: 'Which element has the highest atomic number?',
        options: [
            {
                text: 'Rutherfordium',
            },
            {
                text: 'Plutonium',
            },
            {
                text: 'Oganesson',
                isCorrect: true,
            },
            {
                text: 'Tennessine',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'What do the numbers 6, 28 and 496 have in common?',
        options: [
            {
                text: 'Prime numbers',
            },
            {
                text: 'Rational numbers',
            },
            {
                text: 'Natural numbers',
            },
            {
                text: 'Perfect numbers',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Where are the carpal bones found?',
        options: [
            {
                text: 'Foot',
            },
            {
                text: 'Wrist',
                isCorrect: true,
            },
            {
                text: 'Ear',
            },
            {
                text: 'Knee',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Which animals, weighing between 11 and 30kg, belong to the family Castoridae?',
        options: [
            {
                text: 'Beavers',
                isCorrect: true,
            },
            {
                text: 'Wolverines',
            },
            {
                text: 'Coyote',
            },
            {
                text: 'Anteater',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'What gives flamingos their distinctive pink colour?',
        options: [
            {
                text: 'Sun exposure',
            },
            {
                text: 'Genetics',
            },
            {
                text: 'Their diet',
                isCorrect: true,
            },
            {
                text: 'Dyed feathers',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'The human eye can distinguish how many different colours?',
        options: [
            {
                text: '100,000',
            },
            {
                text: '1 million',
            },
            {
                text: '10 million',
                isCorrect: true,
            },
            {
                text: '100 million',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Known as ‘the father of genetics’, which scientist discovered the principals of inheritance?',
        options: [
            {
                text: 'Gregor Mendel',
                isCorrect: true,
            },
            {
                text: 'Charles Darwin',
            },
            {
                text: 'Dmitri Mendeleev',
            },
            {
                text: 'Louis Pasteur',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'Ascorbic acid is a form of which vitamin?',
        options: [
            {
                text: 'A',
            },
            {
                text: 'B',
            },
            {
                text: 'C',
                isCorrect: true,
            },
            {
                text: 'D',
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'The Earth’s atmosphere is mainly made up of which element?',
        options: [
            {
                text: 'Hydrogen',
            },
            {
                text: 'Oxygen',
            },
            {
                text: 'Carbon',
            },
            {
                text: 'Nitrogen',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat2',
        question: 'At what temperature are Celsius and Fahrenheit equal?',
        options: [
            {
                text: '100°',
            },
            {
                text: '40°',
            },
            {
                text: '0°',
            },
            {
                text: '-40°',
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
                text: 'British Virgin Islands',
            },
            {
                text: 'Gibraltar',
            },
            {
                text: 'Bermuda',
                isCorrect: true,
            },
            {
                text: 'Falkland Islands',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'In which century was the Mona Lisa painted?',
        options: [
            {
                text: '15th',
            },
            {
                text: '16th',
                isCorrect: true,
            },
            {
                text: '17th',
            },
            {
                text: '18th',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'The longest bridge in Europe, the Vasco de Gama Bridge, is located in which country?',
        options: [
            {
                text: 'Spain',
            },
            {
                text: 'Portugal',
                isCorrect: true,
            },
            {
                text: 'Italy',
            },
            {
                text: 'Greece',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'In 1925 who announced he was taking dictatorial powers over Italy?',
        options: [
            {
                text: 'Adolf Hitler',
            },
            {
                text: 'Francisco Franco',
            },
            {
                text: 'Silvio Berlusconi',
            },
            {
                text: 'Benito Mussolini',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'What type of bird appears on the national flag of Mexico?',
        options: [
            {
                text: 'Eagle',
                isCorrect: true,
            },
            {
                text: 'Falcon',
            },
            {
                text: 'Penguin',
            },
            {
                text: 'Peacock',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'What did Johannes Gutenberg invent in 1440?',
        options: [
            {
                text: 'Steam engine',
            },
            {
                text: 'Spinning wheel',
            },
            {
                text: 'Telephone',
            },
            {
                text: 'Printing press',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'Which of these countries does not border Kenya?',
        options: [
            {
                text: 'Somalia',
            },
            {
                text: 'Eritrea',
                isCorrect: true,
            },
            {
                text: 'Uganda',
            },
            {
                text: 'South Sudan',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'How old was Joan of Arc when she was burnt at the stake?',
        options: [
            {
                text: '19',
                isCorrect: true,
            },
            {
                text: '21',
            },
            {
                text: '25',
            },
            {
                text: '27',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'The Danube flows into what body of water?',
        options: [
            {
                text: 'Caspian Sea',
            },
            {
                text: 'The Dead Sea',
            },
            {
                text: 'The Black Sea',
                isCorrect: true,
            },
            {
                text: 'Sea of Marmara',
            },
        ],
    },
    {
        categoryId: 'cat3',
        question: 'In 1990 who created the first web server and laid the foundations for the World Wide Web?',
        options: [
            {
                text: 'Tim Berners-Lee',
                isCorrect: true,
            },
            {
                text: 'Alan Turing',
            },
            {
                text: 'Manuel Blum',
            },
            {
                text: 'Grace Hopper',
            },
        ],
    },
    //category 4
    {
        categoryId: 'cat4',
        question: 'Which American city is home to teams such as the Rockets, Dynamo, Astros and Dash?',
        options: [
            {
                text: 'New York',
            },
            {
                text: 'Houston',
                isCorrect: true,
            },
            {
                text: 'San Francisco',
            },
            {
                text: 'Seattle',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Which nation caused the greatest Rugby World Cup shock ever when they beat South Africa in 2015?',
        options: [
            {
                text: 'England',
            },
            {
                text: 'Argentina',
            },
            {
                text: 'Wales',
            },
            {
                text: 'Japan',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'How many people make up an Olympic curling team?',
        options: [
            {
                text: '2',
            },
            {
                text: '3',
            },
            {
                text: '4',
                isCorrect: true,
            },
            {
                text: '5',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Which country hosted the 2010 football World Cup?',
        options: [
            {
                text: 'South Africa',
                isCorrect: true,
            },
            {
                text: 'Germany',
            },
            {
                text: 'Brazil',
            },
            {
                text: 'Italy',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Ali Farag and Nour El Tayeb became the first married couple in sporting history to win the same singles title on the same day in which sport?',
        options: [
            {
                text: 'Squash',
                isCorrect: true,
            },
            {
                text: 'Badminton',
            },
            {
                text: 'Tennis',
            },
            {
                text: 'Trampolining',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In April 2021 Rachael Blackmore became the first female winner of what competition?',
        options: [
            {
                text: 'Kentucky Derby',
            },
            {
                text: 'Grand National',
                isCorrect: true,
            },
            {
                text: 'Epsom Derby',
            },
            {
                text: 'Ascot Gold Cup',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In 1966 Pickles the dog helped find which stolen trophy?',
        options: [
            {
                text: 'The Ashes urn',
            },
            {
                text: 'Webb Ellis Cup',
            },
            {
                text: 'Jules Rimet trophy',
                isCorrect: true,
            },
            {
                text: 'Vince Lombardi trophy',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In which winter sport might you have to take a penalty loop?',
        options: [
            {
                text: 'Speed skating',
            },
            {
                text: 'Luge',
            },
            {
                text: 'Bobsleigh',
            },
            {
                text: 'Biathlon',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'In Olympic boxing what category comes between lightweight and middleweight?',
        options: [
            {
                text: 'Welterweight',
                isCorrect: true,
            },
            {
                text: 'Featherweight',
            },
            {
                text: 'Light heavyweight',
            },
            {
                text: 'Flyweight',
            },
        ],
    },
    {
        categoryId: 'cat4',
        question: 'Ayrton Senna lost his life after crashing at which Formula 1 Grand Prix race?',
        options: [
            {
                text: 'Monaco',
            },
            {
                text: 'Barcelona',
            },
            {
                text: 'Imola',
                isCorrect: true,
            },
            {
                text: 'Spa',
            },
        ],
    },
    //category 5
    {
        categoryId: 'cat5',
        question: 'What brand of car is famously driven by James Bond?',
        options: [
            {
                text: 'Rolls Royce',
            },
            {
                text: 'Bentley',
            },
            {
                text: 'Jaguar',
            },
            {
                text: 'Aston Martin',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Which historical drama set in Yorkshire was created and co-written by Julian Fellowes?',
        options: [
            {
                text: 'Bridgerton',
            },
            {
                text: 'Downton Abbey',
                isCorrect: true,
            },
            {
                text: 'Outlander',
            },
            {
                text: 'Poldark',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'In what year was the first Star Wars film released?',
        options: [
            {
                text: '1967',
            },
            {
                text: '1972',
            },
            {
                text: '1977',
                isCorrect: true,
            },
            {
                text: '1982',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Which brothers created the series Stranger Things?',
        options: [
            {
                text: 'Coen brothers',
            },
            {
                text: 'Blues brothers',
            },
            {
                text: 'Duffer brothers',
                isCorrect: true,
            },
            {
                text: 'Wright brothers',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Who directed the 2000 film Gladiator?',
        options: [
            {
                text: 'Ridley Scott',
                isCorrect: true,
            },
            {
                text: 'Steven Spielberg',
            },
            {
                text: 'Martin Scorsese',
            },
            {
                text: 'James Cameron',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Which actor is known for his roles as Magneto and Gandalf?',
        options: [
            {
                text: 'Patrick Stewart',
            },
            {
                text: 'Ian McKellan',
                isCorrect: true,
            },
            {
                text: 'Christopher Lee',
            },
            {
                text: 'Hugh Jackman',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'What did Tom Hanks’ character name the ball he talked to in Cast Away?',
        options: [
            {
                text: 'Nelson',
            },
            {
                text: 'Frank',
            },
            {
                text: 'Wilson',
                isCorrect: true,
            },
            {
                text: 'Mark',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'In the series Breaking Bad who played the character Walter White?',
        options: [
            {
                text: 'Bryan Cranston',
                isCorrect: true,
            },
            {
                text: 'Aaron Paul',
            },
            {
                text: 'Jason Bateman',
            },
            {
                text: 'Pedro Pascal',
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Famous westerns director Sergio Leone was born in what country?',
        options: [
            {
                text: 'Spain',
            },
            {
                text: 'USA',
            },
            {
                text: 'Argentina',
            },
            {
                text: 'Italy',
                isCorrect: true,
            },
        ],
    },
    {
        categoryId: 'cat5',
        question: 'Who starred as Fox Mulder in the series X-Files?',
        options: [
            {
                text: 'Mitch Pileggi',
            },
            {
                text: 'David Duchovny',
                isCorrect: true,
            },
            {
                text: 'David Lynch',
            },
            {
                text: 'Matthew Fox',
            },
        ],
    },
];