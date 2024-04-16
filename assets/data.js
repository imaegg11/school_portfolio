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

window.Arraylists = [
    // https://www.w3schools.com/java/java_arraylist.asp
    // https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#add-int-E-
    new item("body", "ArrayLists"),
    new item("subtitle", "Lesson"),
    new item("body", "Arrays had a fixed size and cannot be modified after declaring the size. However, sometimes programmers need a flexible container for a bunch of elements. This is when ArrayLists come in. ArrayLists are like arrays (with different syntax) but their size can change."),
    new item("body", "Before we can even use it, we must first import a package. For this, we will use import java.util.ArrayList. To create a new ArrayList, we use the syntax ArrayList<dataType> variableName = new ArrayList<dataType>(). Note that primitive data types must use their wrapper class (e.g int and Integer). Once we have created an ArrayList, we can now add things to they ArrayList. To do that, we can use the syntax .add(element). We can also specify which location to add it to with the overloaded method using the syntax of .add(index, element). This will shift all the other elements after the index to the right. To obtain the element at a specified location, we use the .get(index) syntax. In order to change an element at a specific index, we use the .set(index, element)."),
    new item("body", "Much like arrays, ArrayLists are also 0 based, meaning the first element in the ArrayList is at index 0. Similarlly, ArrayLists are also iterable over, meaning you can use a for loop to through the elements. You can use both a normal for loop utlising the .size() method to get the length of the array or using the for each loop mentioned in the arrays lesson. On top of that, ArrayLists can also be nested, creating nested ArrayLists."),
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
    `, "ArrayLists.java")
]

window.BigO = [
    // https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/
    new item("title", "Big O Notation"), 
    new item("body", "Big O notation represents the time complexity of an algorithm, which is simply how long it will take for the algorithm to run as a function of the length of the input. There are six major types of complexities: "),
    new item("list", ["O(1) - Constant Time", 
                      "O(n) - Linear Time",
                      "O(n log n) - Logarithmic Time",
                      "O(n**2) - Quadratic Time",
                      "O(2**n) - Exponential Time",
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
        
        // O(n**2) method
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
        
        // O(2**n) method 
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
    new item("subtitle", "Lesson"),
    new item("body", "Sometimes programmers have to find an element within an array. To do that, they utlise searching algorithms, such as linear search or binary search. Each of these sorting algorithm has their own advantages and disadvantages and there are different use cases for each one."),
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
            int[] arr = {3,435,35,45,4,2,3,423,42,4,64,5,1};
            System.out.println("Element 423 found at position: " + linearSearch(arr, 423));
        }
    }
    `, "LinearSearch.java"),
    new item("body", "Another searching algorithms utlised by programmers is known as binary search. This sorting algorithm has a best case time complexity of O(1) and an avergae and worst case time complexity of O(log n). Binary search works only on an already sorted array. It works by having two pointers, that start out pointing to either ends of the array. It then checks the middle element between the two pointers. If the element is the target, we return the position. If the element is larger than the target, then we know that the ")
]