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
    new item("title", "Arrays"),
    new item("body", "Arrays are used when we want to store multiple related values of the same data type into one variable. This allows easier declaration as well as looping through all the data. Each value (element) is stored at an index within the array that represents its position. The index is 0 based, meaning it starts from 0 instead of 1.")
]