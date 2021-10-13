/*
Create a simple phone book application
*/
// Define constants for fields
const NAME_FIELD = 0;
const NUMBER_FIELD = 1;

// Define Phonebook class
class Phonebook {
    // Class properties
    #persons; // This is to store all the information about contacts in this phonebook i.e. person objects
    // Constructor method
    constructor() {
        this.#persons = new Array();
    }
    // Let's create a add method to add persons in to the phonebook
    add(person) {
        this.#persons.push(person);
    }
    // Let's create a print method to print all the contents of the phonebook
    print() {
        // Let's loop through the persons in the phonebook
        this.#persons.forEach(person => {
            // Call person object's printInfo() method to print out info
            person.printInfo();           
        });
    }
}

// Define person class
class Person {
    // Class properties (attributes)
    #name; // Private class variable
    #number; // Private class variable
    #created;
    // Constructor method
    constructor(name) {
        this.#name = name;
        // Let's store the created date
        this.#created = new Date();
    }
    // Getter & setter methods
    setName(name) {
        this.#name = name;
    }
    setNumber(number) {
        this.#number = number;
    }
    // Class methods (behaviour)
    printInfo() {
        process.stdout.write("\nName: " + this.#name + "\tNumber: " + this.#number + "\t(Created: " + this.#created + ")\n");
    }
}

// Let's create a phonebook object 
let phonebook = new Phonebook();

// Ask the user to enter a person with a phone number
process.stdout.write("Please enter name and number, separated by space: (Press 0 to terminate)");

// Read in user input
process.stdin.on("data", function(inputFromUser) {
    let userInput = inputFromUser.toString().trim().split(' ');
    if(userInput[NAME_FIELD] == 0) {
        // User wants to quit
        // Print out the contents of the phonebook
        phonebook.print();
        // Terminate the program
        process.exit();
    } else {
        // Let's create an object of person class
        let person = new Person(userInput[NAME_FIELD]);
        // Set attribute values
        person.setNumber(userInput[NUMBER_FIELD]);
        // Let's add the created person into phonebook
        phonebook.add(person);
        // Print out person info
        person.printInfo();
        // Ask the user to enter a person with a phone number
        process.stdout.write("\n\nPlease enter name and number, separated by space: (Press 0 to terminate) ");
    }
})

// Print out phonebook