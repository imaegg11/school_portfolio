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

window.OOP_Basic = [
    // https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP
    new item("title", "Object Oriented Programming - Basics"), 
    new item("subtitle", "Lesson"),
    new item("body", "Object oriented programming (OOP) is a programming model that utilizes objects and classes. Objects are data fields with unique attributes and behavior. An example of an object could be a table and the attributes could be thought as it's color or the material it's made of. In Java, objects are created from classes, which are like blueprints for the object. Within the classes, there are then attributes and methods. These attributes hold the state of an object. Going back to the table as an object example, the attributes inside of the class could contain the information about the color or the materials. Methods represents an object's behaviors, and can be used to modify the attributes or perform some other action. Finally, in Java, an object is an instance of the class, with it's own data values. For example, an object could be a table class with the color set as red and the material be plastic. To create an object in Java, we will invoke a constructor of the class with a new keyword, passing in the correct parameters."),
    new item("body", "The code below demostrates the basics of a class and object. However in Java, there are more to attributes and methods than we have just covered."),
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
    new item("body", "Attributes can be broken down into two different categories, instance and static. In java, an instance attributes is data that is localized to each object of the class. Each object will have it's own instance attributes, which can be different to another object's instance attributes. On the other hand, static attributes are the same throughout all objects of a class and every object has access to the same static attribute. There is only one copy of each static attribute per class."),
    new item("code", `// Same Table class as before
    public static void main(String[] args) {
    
        Table t1 = new Table("red", "plastic");
        Table t2 = new Table("blue", "wood"); 
        System.out.println("t1 name: " + t1.name + "    t2 name: " + t2.name);
        
        // Change the static atttribute, name, through t2 
        t2.name = "Not Table";
        
        // Both table names have been changed because both static attribute 
        // points to the same static attribute (Shared across all objects)
        System.out.println("t1 name: " + t1.name + "    t2 name: " + t2.name);
    
    }`, "Table.java"),
    new item("body", "Methods can also be categorized. Two common category are set and get methods. Set methods take in arguments and changes the value of one or more attribute. On the other hand, get methods are methods which will return the value of specific attributes. Both of these methods are designed for other parts of the program to interact with data inside of the object. "),
]

window.OOP_Advanced = [
    // https://www.geeksforgeeks.org/inheritance-in-java/
    new item("title", "Object Oriented Programming - Advanced"),
    new item("subtitle", "Lesson"), 
    new item("body", "Classes can have additional functionality through inheritance and [INSERT POLYMORPHISM???]. Inheritance is created through a superclass (the parent) and subclass (the child). This creates an is-a relation between the subclass and the superclass. In the subclass, it inherits code from the superclass. Therefore, we can reuse code and share code that is common between multiple classes. For example, the Table class may be our subclass and a Furniture class may be our superclass. Thus, some code can be reused in the Table calss from the Furniture class."),
    new item("body", "Inheritance in Java is created through the usuage of the extends keyword."),
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
    new item("body", "The subclass can also access the superclass through the keyword super. For example, super() will access the constructor of the super class.")
]

window.Arrays = [
    // https://www.w3schools.com/java/java_arrays.asp
    // https://www.w3schools.com/java/java_arrays_loop.asp
    new item("title", "Arrays"),
    new item("subtitle", "Lesson"),
    new item("body", "Arrays are used when we want to store multiple related values of the same data type into one variable. This allows easier declaration as well as looping through all the data. Each value (element) is stored at an index within the array that represents its position. The index is 0 based, meaning it starts from 0 instead of 1. The data type of an array is the data type of its elements with a square brackets, [ ]. To create a new array, we will use the new keyword, followed by the array data type, with the length of the array between the brackets. This will create an array of the length with every element being the default value for the data type. However, an array can also be created by using curly brackets, { }, with all the elements definied within, seperated by commas. To access one of these elements within the array, we use the syntax variableName[index] where the index is the index of the element we want to fetch. We can also use this to change the element at that index. Note that once we have declared the length of the array, we cannot change the length afterwards."),
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
    new item("body", "One of the advantages of arrays is that it is easy to loop through and access all of the information. In java, there are two ways to do it, both utlizing for loops. In the first method, we can use a for loop to loop through all the numbers from 0 (inclusive) to the length of the array (exclusive). Then, within the for loop, we can then fetch the element at the index. To get the length of the array, we use .length syntax. The other method is using a for each loop. A for each loop cannot modify the original data unless the original data was an object, as well as not having the index. The syntax of an for each loop is described below."),
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
    `, "Array.java")
]

window.ArrayLists = [
    // https://www.w3schools.com/java/java_arraylist.asp
    new item("body", "ArrayLists"),
    new item("subtitle", "Lesson"),
    new item("body", "Arrays had a fixed size and cannot be modified after declaring the size. However, sometimes programmers need a flexible container for a bunch of elements. This is when ArrayLists come in. ArrayLists are like arrays (with different syntax) but their size can change."),
    new item("body", "Before we can even use it, we must first import a package. For this, we will use import java.util.ArrayList. ")
]