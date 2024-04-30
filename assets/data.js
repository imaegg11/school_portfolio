// https://stackoverflow.com/questions/502366/structs-in-javascript
function createStruct(names) {
    let ids = names.split(' ');
    let count = names.length;
   
    function constructor() {
        for (let i = 0; i < count; i++) {
          this[ids[i]] = arguments[i];
        }
        this.format = () => {
            if (this.type == "code") {
                let temp = this.content;
                temp = temp.split("\n");
                temp = temp.map((e, i) => {return i != 0 ? e.substring(4, e.length) : e});
                this.content = temp.join("\n");
            }
        }
    }
 
    return constructor;
}

let item = createStruct("type content file_name");
let project = createStruct("name img about tech download download_type")

let projects = [
    new project("Chess", "", "Chess is an abstract strategy game where the both sides attempt to checkmate the opponenet.\n\nThis recreation of chess was made in Python using the library pygame and stockfish. The squares are highlighted for the last pieces moved as well as the legal moves when clicking on a piece. It also has a time controls, which you can modify in the config file. Stockfish is also usable with this project.\n\nRead the README.md file for information on how to use.", ["Python", "Pygame"], "https://github.com/imaegg11/chess", "github"),
    new project("Portfolio", "", "The portfolio website that you are currently looking at. Built on HTML, CSS and JavaScript (with no libraries), it is the place to find out more about me. It contains projects that I have made, tutorials for ICS4U as well as some things about myself. \n\nThis portfolio was made for ICS4U.", ["HTML", "CSS", "JavaScript"], "", "download"),
    new project("Asteriod Alert", "", "Asteriod alert is a game that follows the astronaut that is scrambling to fix their escape pod in order to save the world from an asteriod. To fix their escape pod, they must go through multiple rooms within the space station to find the nesscary parts. Fix the escape pod and save the world. Be unable to fix it and watch the world be destroyed.\n\nMade for ICS2OP culminating with Colin.", ["Processing Java"], "", "download"),
    new project("Chemistry Carnival", "", "Chemistry Carnival is a game where the player learns about chemistry and molecules. It takes the player through a splash screen, into a maze of learning, where the player learns about how certain molecules are formed and used for. Finally, the player will use that knowledge in the final game part, where they race against the clock to form molecules.\n\nMade for ICS3U culminating with Colin", ["Java", "HSA"], "", "download"),
    new project("Java Syntax Highlighter", "assets/java.png", "This is a Java syntax highlighter made in JavaScript, designed to be used for code blocks on websites. The syntax.css file allows you to modify the palette to your own liking.\n\nEvery code block on this website utlises this syntax highlighter to do the highlighting.", ["JavaScript"], "", "download")
]

window.OOP_Basic = [
    // https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP
    // https://www.baeldung.com/java-protected-access-modifier
    new item("title", "Object Oriented Programming - Basics"), 
    new item("subtitle", "Object Oriented Programming"),
    new item("body", "Object oriented programming (OOP) is a programming model that utilizes objects and classes. Objects are data fields with unique attributes and behavior. An example of an object could be a table and the attributes could be thought as it's color or the material it's made of."),
    new item("subtitle", "Java Objects and Classes"),
    new item("body", "In Java, objects are created from classes, which are like blueprints for the object. Within the classes, there are then attributes and methods. These attributes hold the state of an object. Going back to the table as an object example, the attributes inside of the class could contain the information about the color or the materials. Methods represents an object's behaviors, and can be used to modify the attributes or perform some other action. Finally, in Java, an object is an instance of the class, with it's own data values. For example, an object could be a table class with the color set as red and the material be plastic."),
    new item("body", "To create an object in Java, we will invoke the constructor of a class. The constructor of a class is what creates the object. When writing a constructor, it has no return type and the name is the name of the class. Java allows overloading constructors, meaning we can constructors with different arguments. This allows us to set up the basics for the class, setting values for attributes and more. If no constructor is present, Java will assign a zero parameter constructor for the class. "),
    new item("body", "The code below demonstrates the basics of a class and object. However in Java, there are more to attributes and methods than we have just covered."),
    new item("code", 
    `// The Class: The blueprint for a table
    public class Table {
    
        // The Attributes: Holds the values for the color of the table as well as the material
        // Instance Variables
        private String color;
        private String material;
        
        // Static Variables
        public static String name = "Table";
    
        // The Constructor 
        public Table(String c, String m) {
            color = c;
            material = m;
        }
    
        // Methods: Behaviors of a table
    
        // Set Methods: Sets the attribute, color, with the provided color
        public void paintColor(String c) {
            color = c;
        }
    
        // Get Methods: Returns the attribute, color, so it can be used elsewhere
        public String getColor() {
            return color;
        }
    
        public static void main(String[] args) {
    
            // The Object: t is an object of the class Table, where it has it's own 
            // attributes for color and material
            Table t = new Table("red", "plastic");
    
            // Utilizing the methods of the object
            t.paintColor("blue");
            System.out.println(t.getColor()); 
        }
    }`, "Table.java"),
    new item("subtitle", "Attributes"),
    new item("body", "Attributes can be broken down into two different categories, instance and static. In java, an instance attributes is data that is localized to each object of the class. Each object will have it's own instance attributes, which can be different to another object's instance attributes. On the other hand, static attributes are the same throughout all objects of a class and every object has access to the same static attribute. There is only one copy of each static attribute per class."),
    new item("code", `// Same Table class as before
    public static void main(String[] args) {
        
        Table t1 = new Table("red", "plastic");
        Table t2 = new Table("blue", "wood"); 
        System.out.println("t1 name: " + t1.name + "    t2 name: " + t2.name);
        
        // Change the static attribute, name, through t2 
        t2.name = "Not Table";
        
        // Both table names have been changed because both static attribute 
        // points to the same static attribute (Shared across all objects)
        System.out.println("t1 name: " + t1.name + "    t2 name: " + t2.name);
        
    }`, "Table.java"),
    new item("subtitle", "Methods"),
    new item("body", "Methods can also be categorized. Two common category are set and get methods. Set methods take in arguments and changes the value of one or more attribute. On the other hand, get methods are methods which will return the value of specific attributes. Both of these methods are designed for other parts of the program to interact with data inside of the object. "),
    new item("code", `// Same Table class as before
    public static void main(String[] args) {
        
        Table t = new Table("red", "plastic");
        
        // Using a set method to set the color attribute
        t.paintColor("blue");
        
        // Using a get method to then get the value of the color attribute
        System.out.println(t.getColor()); 
        
    }`, "Table.java"),
    new item("subtitle", "Access"),
    new item("body", "In Java, there are different levels of access an attribute or methods can have. A public access is one where anything can access it. A public method can be called by anything and a public attribute can be modified by anything. A private access means that only the object itself and other objects of the same class can access it. This is where set and get methods come in, as they provide a way for other objects to modify or read these private attributes. Finally, there is protected access. This allows for any class that is the current class or subclasses to access it. Different attributes and methods will have different levels of access to them, depending on each of their uses. "),
    new item("subtitle", "Common Mistakes"),
    new item("body", "One common mistake that people can make when dealing with objects in Java is do not think that assigning a new variable to the a variable that holds an object will create a new object. This does not create a new object, but rather creates a reference to the memory of the original object. This means that if we modify the new variable's object, we also modify the original variable's object."),
    new item("code", `public class Main {
        public int x = 3;
        
        public static void main(String[] args) {
            Main m1 = new Main();
            Main m2 = m1; // This doesn't create a new object 
            
            m2.x = 5;
            // It modifies both because m2 points towards the same object as m1
            System.out.println("m1: " + m1.x);
            System.out.println("m2: " + m2.x);
            // Same object!!
            System.out.println("m1: " + m1 + "\\nm2: " + m2);
        }
    }
    `, "Main.java"),
    new item("subtitle", "Project Demo"),
    new item("body", "One project that utlises the concept of OOP was the creating software assignment, where we were given 4 classes to comment. One of them was a student class, which was then used tested out in a tester class. "),
    new item("code", `// Name: Alex Yan
    // Teacher: Ms. Krasteva
    // Date: 20/09/2024
    // Description: 
    
    public class Student{
        // Usage of attributes
        public String name;
        public int mark1;
        public int mark2;
        public double average;
    
        // The constructor to create the class
        public Student(String n){
            name = n;
            mark1 = 0;
            mark2 = 0;
            average = 0.0;
        }
    
        // Methods of the classes

        public void setMarks(int x, int y){
            mark1 = x;
            mark2 = y;
        }
    
        public void calcAverage(){
            average=(mark1 + mark2)/2;
        }
    
        public String message( ){
            return name + ", you got an " + average;
        }
    }`, "Student.java"), 
    new item("body", "We also had the tester class, which created Student objects, which were then used to test the different methods.")
    
]

window.OOP_Advanced = [
    // https://www.geeksforgeeks.org/inheritance-in-java/
    // https://www.geeksforgeeks.org/polymorphism-in-java/ 
    new item("title", "Object Oriented Programming - Advanced"),
    new item("subtitle", "Inheritance and Polymorphism"), 
    new item("body", "Classes can have additional functionality through inheritance and polymorphism. These are the key features that object oriented programming have. Inheritance allows classes inherit from different classes while polymorphism allows for classes to have many different \"forms\"."),
    new item("subtitle", "Inheritance"),
    new item("body", "Inheritance is created through a superclass (the parent) and subclass (the child). This creates an is-a relation between the subclass and the superclass. In the subclass, it inherits code from the superclass. Therefore, we can reuse code and share code that is common between multiple classes. For example, the Table class may be our subclass and a Furniture class may be our superclass. Thus, some code can be reused in the Table class from the Furniture class."),
    new item("body", "Inheritance in Java is created through the usage of the extends keyword."),
    new item("code", `public class Table extends Furniture // Instead of just public class Table`, "Table.java"),
    new item("body", "This way, our Table class can now access all of the protected/public attributes and methods of the parent class (Furniture). For example, if there was a clean() method within the Furniture class, the Table class now has access to the method. "),
    new item("code", `// The "Parent" class 
    public class Furniture {
        private int dustAmount = 100;
        
        public void clean() {
            dustAmount = 0;
        }
        
        public int getDustAmount() {
            return dustAmount;
        }
    }`, "Furniture.java"),
    new item("body", "Now, the Table class has access to both the clean() method and the getDustAmount() method."),
    new item("code", `// The main method within the Table class
    public static void main(String[] args) {
        // Our Table class which now extends the Furniture class 
        Table t = new Table("red", "plastic");
        // Our Table class now has access to both the getDustAmount() and clean method
        System.out.println("Dust amount before cleaning: " + t.getDustAmount());
        t.clean();
        System.out.println("Dust amount after cleaning: " + t.getDustAmount());
    }`, "Table.java"),
    new item("subtitle", "Accessing The Parent Class"),
    new item("body", "The subclass can also access the superclass through the keyword super. For example, super() will access the constructor of the super class. Of course, Java automatically calls this at the start of the constructors in child class. However, if the constructor of the parent is manually invoked, it must be at the very top of the child's constructor. super can also access other things, such as methods or attributes, as long as the child has access to them."),
    new item("subtitle", "Polymorphism"),
    new item("body", "Polymorphism has two neat features, known as method overloading and method overriding. Method overloading is when a method has the same name but different parameters. On the other hand, method overriding is when a method in the parent class is overriden by another method of the same name and parameter later down in the heirachy."),
    new item("subtitle", "Method Overloading"),
    new item("body", "When method overloading, it requires the method to have the same name but different parameters. The different parameters could be a different number of parameters or parameters of a different type. This allows the Java complier to figure out which method is being called, as the parameters would be different. This allows for methods that do similar tasks to have the same name, for ease for the programmer."),
    new item("code", `public class Overloading {
    
        public void task(int x) {
            System.out.println("This performs a task to output an integer x!");
            System.out.println(x);
        }
        
        // Overloading with a different parameter type (Double instead of integer!)
        public void task(double x) {
            System.out.println("This performs a task to output a double x!");
            System.out.println(x);
        }
        
        public static void main(String[] args) {
            Overloading o = new Overloading();
            o.task(10); // Calling the method with integer parameter
            o.task(3.14); // Calling the method with double parameter
        }
    }
    `, "Overloading.java"),
    new item("subtitle", "Method Overriding"),
    new item("body", "Method overriding is done when a child class (or any class in the heirachy) has a method of the same name and parameters as the one in the parenet. However, the body of the child class' method might be different than the parent, to suite the needs of the child."),
    new item("code", `public class Parent {
        public void task() {
            System.out.println("Doing something vague and related to the parent");
        }
    }`, "Parent.java"),
    new item("code", `public class Overriding extends Parent {
    
        // Overrides the parent's task method
        public void task() {
            System.out.println("Doing something more specific and related to the child");
        }
        
        public static void main(String[] args) {
            Main o = new Main();
            o.task(); // It calls the child's method!
        }
    }`, "Overriding.java"),
    new item("subtitle", "Class Casting"),
    new item("body", "Class casting is where the true power of method overriding comes in. However, unlike primitive data types, the obejct doesn't change types. If we have a Dog object and we cast it into a Animal class, the Dog object doesn't suddenly turn itself into an Animal object. Rather, the Dog object now gets treated as if it were a Animal object and looses access to all of the methods and attributes specific the Dog class. Upcasting is when a child gets casted to a parent while downcasting is when a parent gets casted into a child. When upcasting, Java will automatically do it for the programmer. However, downcasting requires the programmer to manually state which child, as Cat object cannot be casting into a sibling class, such as a Dog. When a child is upcasted into a parent, it looses access to the child class' specific attributes and variables. However, if a method in the child is overriding a parent method whilst being upcasted, when the method is called, it calls the child's rather than the parent."),
    new item("code", `public class Parent {
        public void task() {
            System.out.println("Doing something vague and related to the parent class");
        }
    }`, "Parent.java"),
    new item("code", `public class ClassCasting extends Parent {
    
        // Overrides the parent's task method
        public void task() {
            System.out.println("Doing something more specific and related to the child class");
        }
        
        public void otherTask() {
            System.out.println("Doing something, in the child class");
        }
        
        public static void main(String[] args) {
            Parent p = new ClassCasting(); // Child class is upcasted to parent automatically by Java
            p.task(); // Calls the child class' method!!
            // p.otherTask(); // Throws an error because otherTask doesn't exist in Parent 
            // Uncomment to see
        }
    }
    `, "ClassCasting.java"),
    new item("subtitle", "Abstract Classes and Interfaces"),
    new item("body", "Sometimes, programmers want classes that have some or all of its methods to be abstracted. An abstracted method is one that specially designed to be overrided and in the code, only provides the name, return type and parameters. It is created with the key word abstract and has no body code. An abstract class is one where one or more of its methods is abstracted. However, it can also contain non-abstracted methods. On the other hand, interfaces only contain abstracted methods. They cannot contain any other non-abstracted methods and only have final variables. Interfaces are created with the keyword interface while abstract classes are created with the keyword, abstract class. The interfaces implemented while abstracted classes are extended."),
    new item("code", `public abstract class AbstractTest {
        public abstract void task(); // An abstract method (No Body)
    
        public void nonAbstract() {
            System.out.println("I can also be a non abstract method as well!!");
        }
    }`, "AbstractTest.java"),
    new item("code", `public interface InterfaceTest {
        int x = 3; // Can drop the final and static 
        
        // Can drop the abstract as it must be abstract
        void otherTask(); 
    }`, "InterfaceTest.java"),
    new item("code", `public class Main extends AbstractTest implements InterfaceTest {
    
        // Overrides the AbstractTest's abstract task method
        public void task() {
            System.out.println("This method is doing something!");
        }
        
        // Overrides the InterfaceTest's abstract task method
        public void otherTask() {
            System.out.println("This method is doing something else!");
            System.out.println("Hey look, the final variable from InterfaceTest!");
            System.out.println(x);
        }
        
        
        public static void main(String[] args) {
            Main m = new Main();
            m.task(); // Abstract's abstract method being overriden 
            m.nonAbstract(); // A non-abstract method from the abstract class 
            m.otherTask(); // Interface's abstract method being overriden
        }
    }
    `, "Main.java"),
    new item("subtitle", "Common Mistakes"), 
    new item("body", "Some common mistakes include whilst upcasting is done automatically by Java, downcasting is not. Therefore, whenever you need to cast it to a child, you must specifiy which child class it should be casted into. This is to prevent a Dog object from accidently being casting into its sibling, a Cat class. Another common mistake is that just because a method has a different return type doesn't mean it has been method overloaded. Two methods with different return types are treated to be the same as Java cannot predict which one the programmer wants."),
    new item("subtitle", "Project Demo"), 
    new item("body", "One project that made use of inheritance was the fantasical invention assignment. In this assignment, we had to come up with two inventions. The first needed to be a more general or vague invention and then the second would be one that was more specific than the first. This meant that during coding, the first invention would be the parent and the second would be the child, as the second would inherient some features from the first as they are closely related."), 
    new item("body", "Part of the parent class"),
    new item("code", `// Names: Alex Yan & Colin Cai
    // Date: 02/20/2024
    // Teacher: Ms. Krasteva
    // Description: This class is to represent an invention that allows you to make a 
    //              save file of a certain part of your body and in the future, restore 
    //              the body part using the save file
    
    public class OrganQuickSave {
    
        private double costOfRestore;
        private int timesOfUses;
        private String organName;
        private double overallCondition;
        private double weight;
        private String[] diseasesPresent;
        
    
        // Default constructor initlizing the class to that of a brain
        public OrganQuickSave() {
            this.costOfRestore = 100.0;
            this.timesOfUses = 0;
            this.organName = "Brain";
            this.overallCondition = 100.0;
            this.weight = 1.5;
            this.diseasesPresent = new String[] {};
        }
            
        // Returns cost of restore
        public double getCost() {
            return costOfRestore;
        }
        
        // Updates/Sets the new cost for a restore 
        public void setCost(double cost) {
            costOfRestore = cost;
        }
     
        // toString method to print out all the details of the save
        public String toString() {
            String output =  "Name: " + organName + "\\n" +
                             "Cost Of Usage: $" + costOfRestore + "\\n" +
                             "Number Of Times Used: " + timesOfUses + "\\n" +
                             "Condition Of Save: " + overallCondition + "%\\n" +
                             "Weight Of Organ: " + weight + "kg\\n" +
                             "Diseases Present: ";
    
            for (int i = 0; i < diseasesPresent.length; i++) {
                output += "\\n\\t" + diseasesPresent[i];
            }
    
            if (diseasesPresent.length == 0) {
                output += "None";
            }
    
            return output;
        }
    }
    `, "OrganQuickSave.java"),
    new item("body", "Part of the child class"),
    new item("code", `// Names: Alex Yan & Colin Cai
    // Date: 02/20/2024
    // Teacher: Ms. Krasteva
    // Description: Extension of the general organ quick 
    //              save class to be more specific towards the brain
    
    public class BrainQuickSave extends OrganQuickSave { // Inherits from OrganQuickSame
    
        private String[] memories; 
        private String[] mentalHealth;
        private double numOfNeurons;
        private double treatmentCost;
    
        // Default constructor
        public BrainQuickSave() {
            super(); // Calling super class constructor
            this.memories = new String [] {};
            this.mentalHealth = new String[] {};
            this.numOfNeurons = 86000000000.0;
            this.treatmentCost = 100.0;
        }
    
        // Update memories (It's own methods)
        public void addMemories(String[] updatedMemories) {
            String[] newMemories = new String[updatedMemories.length + memories.length];
            for (int i = 0; i < memories.length; i++) {
                newMemories[i] = memories[i];
            }
            for (int i = memories.length; i < newMemories.length; i++) {
                newMemories[i] = updatedMemories[i-memories.length];
            }
            memories = new String[newMemories.length];
            for (int i = 0; i < newMemories.length; i++) {
                memories[i] = newMemories[i];
            }
        }
    
        // Method overriding
        // toString method to print out all the details of the save
        public String toString() {
            String output =  super.toString() + 
                             "\\nNeurons: " + (long) numOfNeurons + "\\n" +
                             "Mental Treatment Cost: $" + treatmentCost + "\\n";
    
            output += "Memories: ";
    
            for (int i = 0; i < memories.length; i++) {
                output += "\\n\\t" + memories[i];
            }
    
            if (memories.length == 0) {
                output += "None";
            }
    
            output += "\\nMental Health: ";
    
            for (int i = 0; i < mentalHealth.length; i++) {
                output += "\\n\\t" + mentalHealth[i];
            }
    
            if (mentalHealth.length == 0) {
                output += "Normal Mental Health";
            }
    
            return output;
       }
    
    }`, "BrainQuickSave.java")
]

window.Arrays = [
    // https://www.w3schools.com/java/java_arrays.asp
    // https://www.w3schools.com/java/java_arrays_loop.asp
    new item("title", "Arrays"),
    new item("subtitle", "Arrays"),
    new item("body", "Arrays are used when we want to store multiple related values of the same data type into one variable. This allows easier declaration as well as looping through all the data. Each value (element) is stored at an index within the array that represents its position. The index is 0 based, meaning it starts from 0 instead of 1. The data type of an array is the data type of its elements with a square brackets, [ ]. To create a new array, we will use the new keyword, followed by the array data type, with the length of the array between the brackets. This will create an array of the length with every element being the default value for the data type. However, an array can also be created by using curly brackets, { }, with all the elements defined within, separated by commas. To access one of these elements within the array, we use the syntax variableName[index] where the index is the index of the element we want to fetch. We can also use this to change the element at that index. Note that once we have declared the length of the array, we cannot change the length afterwards."),
    new item("code", `public class Array {
        public static void main(String[] args) {
            // A string array 
            String[] stringArray; 
            // A integer array of length 10 with every element being 0 
            int[] intArray = new int[10];
            // A double array with the elements already defined 
            double[] doubleArray = {1.2, 3.2, 4.1};
            
            // Accessing the element at index 1 in the intArray 
            System.out.println(intArray[1]);
            // Modifying the element at index 2 in the doubleArray 
            doubleArray[2] = 3.14;
            System.out.println(doubleArray[2]);
        }
    }
    `, "Array.java"),
    new item("subtitle", "Iterating"),
    new item("body", "One of the advantages of arrays is that it is easy to loop through and access all of the information. In java, there are two ways to do it, both utilizing for loops. In the first method, we can use a for loop to loop through all the numbers from 0 (inclusive) to the length of the array (exclusive). Then, within the for loop, we can then fetch the element at the index. To get the length of the array, we use .length syntax. The other method is using a for each loop. A for each loop cannot modify the original data unless the original data was an object, as well as not having the index. The syntax of an for each loop is described below."),
    new item("code", `public class Array {
        public static void main(String[] args) {
            int[] intArray = {3,1,4,1,5};
            // For loop with a counter to track the index 
            // using the length of the array
            System.out.println("Normal For Loop");
            for (int i = 0; i < intArray.length; i++) {
                int element = intArray[i]; // Accessing the element 
                System.out.println(element);
            }
            
            // For each loop 
            // Syntax: for (typeOfData variableName : arrayName)
            System.out.println("For Each Loop");
            for (int i : intArray) {
                // Notice here i is the element and not the index
                System.out.println(i); 
                // Changing i does not change the original data
                // Unless i is an object 
                i = 0;
            }
            
            // Note no change after modifying from for each loop
            System.out.println("Element at index 0: " + intArray[0]); 
        }
    }
    `, "Array.java"),
    new item("subtitle", "Arrays Within Arrays"),
    new item("body", "Another advantage of arrays is that they can be nested. This means that an array can contain other arrays. Accessing the information is the same as if it was a normal array, but instead of getting the element, the element is another array. We can call these an nD array where n is the number of arrays that contains another array inside of it plus one (E.g a 2D array is an array containing another array)."),
    new item("code", `public class Array {
        public static void main(String[] args) {
            // A 2D array that is 3 by 3 
            double[][] double2DArray = new double[3][3];
            int[][] int2DArray = {{1, 3, 2}, 
                                  {3, 4, 5}, 
                                  {1, 3, 4}};
            // Looping over it
            for (int i = 0; i < int2DArray.length; i++) {
                // Remember that int2DArray contains arrays within it 
                int[] element = int2DArray[i];
                for (int j = 0; j < element.length; j++) {
                    // Accessing the elements (the integers)
                    System.out.print(element[j] + " ");
                }
                System.out.println();
            }
            
            // Modifying the array 
            int2DArray[0][0] = 9;
            System.out.println("Element at index 0, 0: " + int2DArray[0][0]);
        }
    }
    `, "Array.java"),
    new item("subtitle", "Common Mistakes"),
    new item("body", "One common mistake is that when accessing the length of array, it is not length() as a method but length. This is because length is not a method but rather an attributes. On top of that, the length of an array is how humans normally count, starting from zero. However, arrays in code actually start from 0, meaning the length of the array is not the last element"),
    new item("subtitle", "Project Demo"),
    new item("body", "One assignment that used arrays was the assignment, I rate myself. In this assignment, we compare ourselves to other people based on five different attributes about ourselves. These attributes were stored in an array, providing a quick access to all of the attributes."),
    new item("code", `// Name: Alex Yan & Colin Cai
    // Teacher: Ms. Krasteva
    // Date: 02/26/2024
    // Description: This code compares people on how good they are at progarmming
    
    import java.util.*;
    
    public class Rating {
    
        // Variables (Arrays to store each person's rating)
        private String[] names;
        private int[] cccSeniorScore;
        private int[] dmojTotalPoints;
        private int[] dmojContestRating;
        private double[] icsGrade;
        private int[] leetcodeProblems;
    
        // Constructor
        public Rating(String[] n, int[] c, int[] dTP, int[] dCR, double[] grade, int[] leetcode) {
            this.names = n;
            this.cccSeniorScore = c;
            this.dmojTotalPoints = dTP;
            this.dmojContestRating = dCR;
            this.icsGrade = grade;
            this.leetcodeProblems = leetcode;
        }
    
        // Returns a string containing the best programming based on a certain metric
        public String getBest(int stat) {
            // Index of currently best programmer
            int bestIndex = 0;
            // Loop through all programmers
            for (int i = 1; i < names.length; i++) { // Simple for loop to loop over the array
                // Based on which number, check corresponding metric (Accessing the array)
                switch (stat) {
                    case 1:
                        if (cccSeniorScore[i] > cccSeniorScore[bestIndex]) bestIndex = i;
                        break;
                    case 2:
                        if (dmojTotalPoints[i] > dmojTotalPoints[bestIndex]) bestIndex = i;
                        break;
                    case 3:
                        if (dmojContestRating[i] > dmojContestRating[bestIndex]) bestIndex = i;
                        break;
                    case 4:
                        if (icsGrade[i] > icsGrade[bestIndex]) bestIndex = i;
                        break;
                    case 5:
                        if (leetcodeProblems[i] > leetcodeProblems[bestIndex]) bestIndex = i; 
                        break;
                    case 6: 
                        if(calculateRank(i) > calculateRank(bestIndex)) bestIndex = i;
                        break;
                }
            }
    
            // Returns all the information about the person
            return "Name: " + names[bestIndex] + "\\n" +
                   "CCC Senior Score: " + cccSeniorScore[bestIndex] + "\\n" +
                   "DMOJ Total Points: " + dmojTotalPoints[bestIndex] + "\\n" +
                   "DMOJ Contest Rating: " + dmojContestRating[bestIndex] + "\\n" +
                   "ICS Grade: " + icsGrade[bestIndex] + "\\n" + 
                   "Leetcode Problems Solved: " + leetcodeProblems[bestIndex];
        }
    
        public static void main(String[] args) {
            Rating r = new Rating(
                new String[] {"Alex", "Bob", "Colin", "Dora", "Eve"},
                new int[] {34, 12, 60, 32, 45},
                new int[] {201, 103, 409, 112, 304},
                new int[] {0, 1032, 1274, 1023, 2031},
                new double[] {99.3, 89.4, 99.5, 96.5, 90.4},
                new int[] {44, 0, 84, 32, 10}
            );
        }
    
    }`, "Rating.java")
]

window.Arraylists = [
    // https://www.w3schools.com/java/java_arraylist.asp
    // https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#add-int-E-
    new item("title", "ArrayLists"),
    new item("subtitle", "Arrays With Changeable Size"),
    new item("body", "Arrays have a fixed size and cannot be modified after declaring the size. However, sometimes programmers need a flexible container for a bunch of elements. This is when ArrayLists come in. ArrayLists are like arrays but with a changeable size."),
    new item("body", "Before we can even use it, we must first import a package. For this, we will use import java.util.ArrayList. To create a new ArrayList, we use the syntax ArrayList<dataType> variableName = new ArrayList<dataType>(). Note that primitive data types must use their wrapper class (e.g int and Integer). Once we have created an ArrayList, we can now add things to they ArrayList. To do that, we can use the syntax .add(element). We can also specify which location to add it to with the overloaded method using the syntax of .add(index, element). This will shift all the other elements after the index to the right. To obtain the element at a specified location, we use the .get(index) syntax. In order to change an element at a specific index, we use the .set(index, element)."),
    new item("body", "Much like arrays, ArrayLists are also 0 based, meaning the first element in the ArrayList is at index 0. Similarly, ArrayLists are also iterable over, meaning you can use a for loop to through the elements. You can use both a normal for loop utilizing the .size() method to get the length of the array or using the for each loop mentioned in the arrays lesson. On top of that, ArrayLists can also be nested, creating nested ArrayLists."),
    new item("code", `// Importing the package to use ArrayLists
    import java.util.ArrayList; 
    
    public class ArrayLists {
        public static void main(String[] args) {
            // Creating an ArrayList with the wrapper class for int (Integer)
            ArrayList<Integer> intArrayList = new ArrayList<Integer>();
            
            for (int i = 10; i > 0; i--) {
                intArrayList.add(i); // Adding the numbers from 10 - 1 to the ArrayList 
            }
            
            System.out.print("Before adding the 100: ");
            // Looping through the ArrayList 
            for (int i = 0; i < intArrayList.size(); i++) {
                int element = intArrayList.get(i); // Getting the element at index i 
                System.out.print(element + " ");
            }
            
            intArrayList.add(3, 100); // Adds 100 at index 3 and shifts 7 - 1 to the right 
            
            System.out.print("\\nAfter adding the 100: ");
            // Looping over using a for each loop 
            for (int i : intArrayList) {
                System.out.print(i + " ");
            }
            
            // Nested ArrayLists 
            ArrayList<ArrayList<String>> stringArrayList = new ArrayList<ArrayList<String>>();
            
        }
    }
    `, "ArrayLists.java"),
    new item("subtitle", "Common Mistakes"),
    new item("body", "Some common mistakes while using arraylists is that they are not arrays and you cannot interact with them like arrays. Square brackets don't work and .length doesn't either! They have their own seperate methods to interact with arraylist. Instead of square brackets to get an element, use the method .get(). Instead of using .length, use the method .size(). The same method that might work with arrays won't necessarily work with arraylist. "),
    new item("subtitle", "Project Demo"),
    new item("body", "One project that used arraylists was an assignment called arraylist assignment (Who would have guessed!). In this assignment, we were given a bunch of tasks to complete using array lists. One of them was to "),
    new item("code", `import java.util.ArrayList;

    public class AIPoem {
        // AI was used for generating this poem.
        private String poem =
                "In the dark abyss of Java's reign,\\n" +
                "Where Ready to Program inflicts its pain.\\n" +
                "A Grade 10 student, burdened with dread,\\n" +
                "In its clutches, their hopes lie dead.\\n" +
                "\\n" +
                "Oh cursed IDE of ancient lore,\\n" +
                "Your crashes leave my spirit sore.\\n" +
                "Java 1.4, a relic of old,\\n" +
                "In its grip, my struggles unfold.\\n" +
                "\\n" +
                "Lines of code, a tangled dance,\\n" +
                "Within Ready to Program's trance.\\n" +
                "Performance lags, a sluggish stride,\\n" +
                "As I battle against the tide.\\n" +
                "\\n" +
                "I summon forth powers untold,\\n" +
                "To break free from this stronghold.\\n" +
                "But Ready to Program, it sneers and mocks,\\n" +
                "As I stumble over syntax blocks.\\n" +
                "\\n" +
                "Oh Java spirits, hear my plea,\\n" +
                "From this torment, set me free.\\n" +
                "For in the shadows of obsolete lore,\\n" +
                "I yearn for an escape forevermore.\\n" +
                "\\n" +
                "Yet until then, I chant and groan,\\n" +
                "In the clutches of code, I'm alone.\\n" +
                "A captive to Ready to Program's plight,\\n" +
                "In Grade 10's relentless night.";
        private String newPoem;
    
        // This method generates the poems.
        private void generatePoem(){
            // Using arraylists to store the poem!
            ArrayList<String> words = new ArrayList<String>();
            for(String word: poem.split(" ")) {
                words.add(word);
            }
            // Shuffle the ArrayList
            // We use a Fisher-Yates shuffle
            // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
            for(int i = 1; i < words.size(); i++) {
                int j = (int) (Math.random() * (i + 1));
                String t = words.get(j);
                words.set(j, words.get(i));
                words.set(i, t);
            }
            newPoem = "";
            // Looping over the arraylist! 
            for(String word: words) {
                newPoem += word + " ";
            }
        }
    
        // This method prints the poems.
        private void printPoems(){
            System.out.println("##### Original Poem #####");
            System.out.println(poem);
            System.out.println();
            System.out.println("####### New Poem ########");
            System.out.println(newPoem);
            System.out.println();
        }
    
        public static void main(String[] args) {
            AIPoem aiPoem = new AIPoem();
            aiPoem.generatePoem();
            aiPoem.printPoems();
        }
    }`, "")
]

window.BigO = [
    // https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/
    new item("title", "Big O Notation"), 
    new item("subtitle", "How Are Algorithms Measured?"),
    new item("body", "Big O notation represents the time complexity of an algorithm, which is simply how long it will take for the algorithm to run as a function of the length of the input.For example, a method that loops over an array will have a time complexity equal to the length of the array being inputted. There are six major types of complexities: "),
    new item("list", ["O(1) - Constant Time", 
                      "O(n) - Linear Time",
                      "O(n log n) - Logarithmic Time",
                      "O(n^2) - Quadratic Time",
                      "O(2^n) - Exponential Time",
                      "O(n!) - Factorial Time"]),
    new item("body", "Generally, programmers want their program to be as fast as possible, and this means that the time complexity of the code should be as low as possible. Below are some example of methods with the time complexity labeled."),
    new item("code", `public class TimeComplexity  {
        // O(1) method 
        public static String getElement(String[] s, int index) {
            return s[index]; 
        }
        
        // O(n) method 
        public static int product(int[] i) {
            int total = 1;
            for (int element : i) {
                total *= element;
            }
            
            return total;
        }
        
        // O(n^2) method
        public static int[] getPosition(String[][] s, String element) {
            int x = 0;
            int y = 0;
            for (int i = 0; i < s.length; i++) {
                for (int j = 0; j < s[i].length; j++) {
                    if (s[i][j].equals(element)) {
                        x = i;
                        y = j;
                        break;
                    }
                }
            }
            
            return new int[] {x, y};
        }
        
        // O(2^n) method 
        public static int fibonacci(int n) {
            if (n < 2) return n;
            return fibonacci(n-1) + fibonacci(n-2);
        } 
    }
    `, "TimeComplexity.java")
    
]

window.Searching = [
    // https://www.geeksforgeeks.org/linear-search/
    // https://www.geeksforgeeks.org/binary-search/
    new item("title", "Searching"),
    new item("subtitle", "Let's Find A Needle In A Haystack"),
    new item("body", "Sometimes programmers have to find an element within an array. To do that, they utilize searching algorithms, such as linear search or binary search. Each of these sorting algorithm has their own advantages and disadvantages and there are different use cases for each one."),
    new item("subtitle", "Linear Search"),
    new item("body", "Linear search is one of the simplest, yet also the slowest, searching algorithm. It has a best case time complexity of O(1), assuming the first index is the element being searched for. However, it's worst case and average case time complexity is O(n). Linear search works by looping through the entire container, from one end to another, and checking each element to determine whether it is the right element being looked for. The advantage of this is that it is extremely simple to implement, thus making it friendly to beginner programmers. However, it is also one of the slower searching algorithms, making it very bad for large data sets. Below is an implementation for an integer array that returns the index."),
    new item("code", `public class LinearSearch  {
        // Linear search on a 1d integer array 
        public static int linearSearch(int[] arr, int element) {
            // Loop through all the elements
            for (int i = 0; i < arr.length; i++) {
                // Checks if it is the element and return the index 
                if (arr[i] == element) return i;
            }
            
            // -1 represents element not in array 
            return -1;
        }
        
        public static void main(String[] args) {
            int[] arr = {3, 4, 0, 14, 10, 12, 9, 2, 7, 1, 6, 13, 11, 5, 8};
            System.out.println("Element 11 found at position: " + linearSearch(arr, 11));
        }
    }`, "LinearSearch.java"),
    new item("subtitle", "Binary Search"),
    new item("body", "Another searching algorithms utilized by programmers is known as binary search. This sorting algorithm has a best case time of O(1) and an average and worst case time complexity of O(log n). Binary search works only on an already sorted array. The following explanation assumes that it is sorted from lowest to greatest. Binary search works by having two pointers, that start out pointing to either ends of the array, the left and right pointer. It then checks the middle element between the two pointers. If the element is the target, we return the position. If the element is larger than the target, then we know that the target is left of the element. Thus, we would narrow down our pointers to the be the left and the index of the middle - 1. On the other hand, if it was smaller, then we would narrow down our pointers to be the index of the middle + 1 and right. We would constantly do this until we find our target. If the right pointer, at any time, becomes smaller than the left pointer, then we must know that the target is not in the array. Binary search has the advantage that it is much faster than linear search. However, it also suffers from the drawback that the array must be sorted beforehand, or else it won't work. Below is an implementation for an integer array that returns the index."),
    new item("code", `public class BinarySearch  {
        // Binary search on a 1d integer array 
        public static int binarySearch(int[] arr, int element) {
            // Our two pointers 
            int left = 0, right = arr.length-1;
            
            // Making sure right is not smaller than left 
            while (right >= left) {
                // Get middle 
                int middle = (left + right) / 2; 
                
                // If the element at middle is our element, return the index 
                if (arr[middle] == element) {
                    return middle;
                // If the element at middle is greater than element
                } else if (arr[middle] > element) {
                    // Set right to be middle - 1 
                    right = middle - 1; 
                // Else, element at middle is less than element
                } else {
                    // Set left to be middle + 1
                    left = middle + 1; 
                }
            }
            
            // -1 represents element not in array 
            return -1;
        }
        
        public static void main(String[] args) {
            int[] arr = {2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8};
            System.out.println("Element 6 found at position: " + binarySearch(arr, 6));
        }
    }`, "BinarySearch.java"),
    new item("subtitle", "Common Mistakes"),
    new item("body", "One common mistake in binary search in using it on an unsorted array. Binary search relies on a sorted array and when it is fed an unsorted array, it no longer works. Therefore, programmers must keep in mind to sort the array before performing binary search or just using a different search algorithm. ")
]

window.Sorting = [
    // https://www.geeksforgeeks.org/selection-sort/
    // https://www.geeksforgeeks.org/merge-sort/
    // https://www.geeksforgeeks.org/stable-and-unstable-sorting-algorithms/
    new item("title", "Sorting"),
    new item("subtitle", "How Do We Sort?"),
    new item("body", "Binary search is quick and all, but it suffers from the downfall of that the array needs to be sorted beforehand. So, how do programmers sort an array? Well, there are many, many different algorithms that can sort an array. This can range anywhere from basic sorting algorithms such as selection sort to more advanced ones like merge sort. Below are explanation of the sorting algorithms mentioned above."),
    new item("subtitle", "Stability? Isn't This About Programming Though?"),
    new item("body", "Before we talk about the sorting algorithms, lets talk about a property of it. Stability is the property of whether elements of the same value appear in the same relative order in both the unsorted array and the sorted array. A algorithm is said to be stable if this does happen and unstable if it doesn't. This could be important to a programmer as these values may be tied to other values that need to remain in order."),
    new item("subtitle", "Selection Sort"), 
    new item("body", "Selection sort is one of the most basic types of sorting. It constantly selects the smallest element of the unsorted portion of the array and swaps it with the first element of the unsorted portion of the array, until it reaches the end. But how do we know what portion of the array is unsorted? Well, it is easier to take a look at an example. If there is an array of length 10, when the algorithm first starts out, it doesn't know if any of the elements are sorted. Thus, it declares the entire array to be the unsorted array. It will then pick the smallest element within the portion (the entire array) to swap it with the first element. After the first swap, the algorithm now knows that the first element is in the correct position. Thus, the first element is now sorted and the unsorted portion becomes the portion between the second element and the last element. It will then repeat this until it determines that every element is in the correct position. Selection sort is has an average time complexity of O(n^2) and is not a stable sort. This is because because when swapping elements, it may send an element that was previously in front of another element of the value to behind it. "),
    new item("code", `public class SelectionSort {
        // Selection sort on a 1d array 
        public static void selectionSort(int[] arr) {
            
            // Looping through each element, to be the first element of the unsorted portion
            for (int i = 0; i < arr.length; i++) {
                // An variable to keep track of the index of the smallest element 
                int smallestIndex = i;
                // Loop through the rest of the array from index j+1 (The unsorted portion)
                for (int j = i+1; j < arr.length; j++) {
                    // If the element at index j is smaller than the element at smallestIndex
                    if (arr[j] < arr[smallestIndex]) {
                        // Set the smallestIndex to be j 
                        smallestIndex = j;
                    }
                }
                // Perform the swap with the first element of the unsorted portion and the 
                // element with the smallest value of the unsorted portion 
                int temp = arr[smallestIndex];
                arr[smallestIndex] = arr[i];
                arr[i] = temp;
            }
            
            return arr;
        }
        
        public static void main(String[] args) {
            int[] arr = {3, 4, 0, 14, 10, 12, 9, 2, 7, 1, 6, 13, 11, 5, 8};
            selectionSort(arr);
            // Outputting the sorted array
            System.out.print("Sorted Array: ");
            for (int i : arr) {
                System.out.print(i + " ");
            }
        }
    }
    `, "SelectionSort.java"),
    new item("subtitle", "Merge Sort"),
    new item("body", "Another sorting algorithm is merge sort. This algorithm is more advanced than selection sort and performs much better on larger data sets. It is a divide and conquer sorting algorithm, meaning it breaks the array down into more manageable tasks. Given an array, it will perform the following steps until the array is declared to be sorted: "),
    new item("list", [
        "If the array has a length of 1, it must be sorted and end the method",
        "If it isn't, find the middle and create two separate arrays by splitting down the middle (One array will include the middle element)",
        "Perform merge sort on the two arrays",
        "Once sorted, merge these two sorted arrays to create one big sorted array"
    ]),
    new item("body", "Merge sort has a time complexity of O(n log n) as well as being a stable sort. The following implementation is recursive (Recursion is explained later in the recursion lesson)"),
    new item("code", `public class MergeSort {
        // Method to merge the two sections together
        public static void merge(int[] arr, int left, int middle, int right) {

            // Gets the first section from the array 
            int[] firstSection = new int[middle-left+1];
            for (int i = left; i <= middle; i++) firstSection[i-left] = arr[i];
            // Get the section section from the array
            int[] secondSection = new int[right-middle];
            for (int i = middle+1; i <= right; i++) secondSection[i-(middle+1)] = arr[i];
            
            // Pointers to the current index for the first section, second section and the main array 
            // during the merging
            int p1 = 0, p2 = 0, arrP = left;
            // While both the index for first section and section is smaller than their lengths
            while (p1 < firstSection.length && p2 < secondSection.length) {
                // If the element at the current index for first section is smaller than the one for 
                // the second section  
                if (firstSection[p1] < secondSection[p2]) {
                    // Add element and increment index
                    arr[arrP] = firstSection[p1];
                    p1++;
                // Else the opposite is true 
                } else {
                    // Add element and increment index
                    arr[arrP] = secondSection[p2];
                    p2++;
                }
                // Increment the index of the main array 
                arrP++;
            }
            
            // Add the remaining elements of the first section, if any, to their positions
            for (int i = p1; i < firstSection.length; i++) {
                arr[arrP] = firstSection[i];
                arrP++;
            }
            
            // Add the remaining elements of the second section, if any, to their positions
            for (int i = p2; i < secondSection.length; i++) {
                arr[arrP] = secondSection[i];
                arrP++;
            }
        }
        
        // Merge sort on a 1d array (Left and right indicate the indexes of the portion being looked at)
        public static void mergeSort(int[] arr, int left, int right) {
            // If it's one element, return (Already sorted)
            if (right - left <= 0) return;
            // Get middle
            int middle = (left + right)/2;
            // Merge sort on the two sections after the splitting into two 
            mergeSort(arr, left, middle);
            mergeSort(arr, middle+1, right);
            // Merge the two sections together
            merge(arr, left, middle, right);
        }
        
        public static void main(String[] args) {
            int[] arr = {3, 4, 0, 14, 10, 12, 9, 2, 7, 1, 6, 13, 11, 5, 8};
            mergeSort(arr, 0, arr.length-1);
            // Outputting the sorted array
            System.out.print("Sorted Array: ");
            for (int i : arr) {
                System.out.print(i + " ");
            }
        }
    }
    `, "MergeSort.java"),
    new item("subtitle", "Common Mistakes"),
    new item("body", "A common mistake while "),
    new item("subtitle", "Project Demo"),
    new item("body", "One assignment that utlised a sorting algorithm was the sorting algorithm, where we had to sort a bunch of countries by their name or by their population. After we sorted it, we would then output it to a file. In this assignment, we utlised insertion sort (a sorting algorithm not covered above)."),
    new item("code", `public class SortingCountries {
        // Just the sorting method
        public void sortByCountryPopulations() {
            // Insertion sort 
            // Loops through all the country names starting from the second element
            for(int i = 1; i < countryNames.size(); i++) {
                // Get the name and population of the country
                String name = countryNames.get(i);
                long population = countryPopulations.get(i);
                // Loops from the current index to the first index
                for(int j = i; j >= 0; --j) {
                    // If the index is not 0 and if the population at index j - 1
                    // is less than the current population
                    if(j > 0 && countryPopulations.get(j - 1) < population) {
                        // Set j to be the country and population at index j - 1
                        countryNames.set(j, countryNames.get(j - 1));
                        countryPopulations.set(j, countryPopulations.get(j - 1));
                    // Else we are now looking at the first element or the current population 
                    // is less than the population at index j - 1 
                    } else {
                        // Set j to be the country and population of index i (Current country data)
                        countryNames.set(j, name);
                        countryPopulations.set(j, population);
                        // Break out of the loop
                        break;
                    }
                }
            }
        }
    }`, "SortingCountries.java")
]

window.Recursion = [
    // https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/
    // https://www.javatpoint.com/stack-vs-heap-java
    new item("title", "Recursion"),
    new item("subtitle", "Recursion"),
    new item("body", "You might hear recursion get used often, but what exactly is it? To put it simply, it is when a method calls itself. When this happens, the method call gets placed on the top of the stack (where method calls and local variables are stored in the memory by Java). When it finally finishes all calls, the calls are removed from the stack, from top to bottom. This also means that it will resolve everything first in the last method call before starting to resolve everything else."),
    new item("subtitle", "Wait, How Does It Finish All The Calls?"),
    new item("body", "Well, in order to have a good recursive method, it must have a base case. A base case is a case in which the method will stop calling itself. This means, if the method determines it is true, it will no longer make any more calls to itself and thus, breaking the chain. A base case is very important in order to prevent a stack overflow, when the method calls itself too many times and Java runs out of memory. To make a good base case, it must be a case in which all intended inputs will reach it eventually. On the other hand, a recursive case is then a case in which the method will call itself with new parameters. "),
    new item("subtitle", "Binary Search"),
    new item("body", "So when can programmers use recursion? Many times, a iterative solution is better than a recursive one. However, recursion can still be used for many different things. An example is binary search. The binary search in the searching lesson was using a iterative solution. Below, is an implementation utlising recursion. "),
    new item("code", `public class BinarySearch  {
        // Binary search on a 1d integer array 
        public static int binarySearch(int[] arr, int element, int left, int right) {
    
            // Base Case A: The element is not in the array
            if (right < left) return -1;
    
            // Get middle 
            int middle = (left + right) / 2; 
                
            // Base Case B: If the element at middle is our element, return the index 
            if (arr[middle] == element) {
                return middle;
            // Recursive Case A: If the element at middle is greater than element
            } else if (arr[middle] > element) {
                // Recall method with right to be middle - 1 
                return binarySearch(arr, element, left, middle-1);
            // Recursive Case B: Else, element at middle is less than element
            } else {
                // Recall method with left to be middle + 1
                return binarySearch(arr, element, middle+1, right);
            } 
        }
        
        public static void main(String[] args) {
            int[] arr = {2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8};
            System.out.println("Element 6 found at position: " + binarySearch(arr, 6, 0, arr.length-1));
        }
    }`, "BinarySearch.java"),
    new item("subtitle", "Common Mistake"), 
    new item("body", "A very common mistake when using recurison is writing a poor base case that doesn't apply to all intended cases. This will cause a stack overflow to happen as some data may never enter the base case. Another common mistake for recursion is using it for the wrong purpose. For example, using recursion on very large data may not be the smartest idea as it may recursively call itself so many times that it throws a stack overflow anyways. Thus, the programmer must choose very carefully when doing recursion."),
    new item("subtitle", "Project Demo"), 
    new item("body", "One "),
    new item("code", ``, ""),
]
