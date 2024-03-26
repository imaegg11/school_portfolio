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
    new item("title", "OOP"), 
    new item("body", "Sit do labore exercitation fugiat cillum laborum nulla incididunt ut irure dolore culpa in nisi. Cupidatat tempor duis aliqua minim sit ad. Sit do ad cillum nulla officia."),
    new item("body", "Aliqua labore exercitation proident mollit incididunt qui dolore est laborum id velit esse ex. Consectetur officia tempor laborum Lorem. Nisi consequat tempor nostrud eiusmod do laborum eu do ea nisi laborum Lorem incididunt. Laborum veniam sit cillum nostrud magna. Sit pariatur deserunt laboris qui sint qui labore fugiat Lorem minim ut eu ex."),
    new item("code",
    `public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`, "Main.java"),
    new item("code",
    `public class Joe {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`, "Joe.java"),
    new item("code",
    `public class Bob {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`, "Bob.java"),
    new item("body", "Veniam ex enim officia magna adipisicing laboris veniam sit eiusmod. Sint adipisicing ipsum fugiat amet ipsum. Sint veniam qui eu deserunt ea est elit irure ad quis excepteur ex. Deserunt et excepteur ipsum magna minim consequat laboris. Pariatur Lorem ut sit sint pariatur consectetur dolore laborum ex magna magna pariatur."),
    new item("body", "In aliqua nulla velit adipisicing ex in fugiat cupidatat eu aliquip irure mollit proident. Culpa ipsum sunt excepteur incididunt velit quis proident labore et mollit commodo. Sit sit nostrud sit excepteur officia ea sit nulla nisi consequat. Do dolore aute enim sit laborum nostrud reprehenderit velit duis tempor exercitation cupidatat. Aute nostrud do ullamco laborum. Nulla non veniam dolore minim magna dolor cillum id non mollit nisi. Dolore laboris incididunt quis cupidatat minim tempor.")
]