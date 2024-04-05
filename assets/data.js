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

window.OOP = [
    new item("title", "Object Oriented Programming"), 
    new item("body", "Object oriented programming (OOP) is a programming model that utilizes objects and classes. Objects are data fields with unique attributes and behavior. An example of an object could be a table and the attributes could be thought as it's color or the material it's made of. In Java, objects are created from classes, which are like blueprints for the object. Within the classes, there are then attributes and methods. These attributes hold the state of an object. Going back to the table as an object, the attributes inside of the class could contain the information about the color or the materials. Methods represents an object's behaviors, and can be used to modify the attributes or perform some other action. Set and get methods are types of method which will set and get the value of certain attributes respectively. Finally, in Java, an object is an instance of the class, with it's own data values. For example, an object could be a table class with the color set as red and the material be plastic."),
    new item("code", 
    `// The Class: The blueprint for a table
    public class Table {
    
        // The Attributes: Holds the values for the color of the table as well as the material
    
        private String color;
        private String material;
    
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
    }
    `, "Table.java"
    )
]