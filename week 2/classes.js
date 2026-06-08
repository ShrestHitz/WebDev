class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }
   
}

const rect = new Rectangle(2, 4)
const area = rect.area();
console.log(area)

//JS provided Classes
//date
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format

 
//Maps
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);

const firstName = map.get('name');
console.log(firstName);