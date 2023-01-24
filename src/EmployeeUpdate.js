

//raw data source ->collection of array of objects


const employees = [
    {
      id: "1",
      name: "Vibhuti Bajaj",
      profileImage: "assets/images/Vibhuti.jpg",
      introduction:
        "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
      profileLink: "https://vibhi24.github.io/Personal-Website/",
    },
    {
      id: "2",
      name: "Varun Athreya",
      profileImage: "assets/images/varun.jpg",
      introduction:
        "I am a passionate coder who loves capturing memories and exploring new places.",
      profileLink: "https://varunsathreya.github.io/contentstack-training/",
    },
    {
      id: "3",
      name: "Priya NB",
      profileImage: "assets/images/Priya.jpeg",
      introduction:
        "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
      profileLink: "https://priya-nb.github.io/personalweb/index.html",
    },
    {
      id: "4",
      name: "Rangaswamy Vikas",
      profileImage: "assets/images/vikas.jpg",
      introduction:
        "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
      profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
    },
    {
      id: "5",
      name: "Deepak Chaturvedi",
      profileImage: "assets/images/deepak.png",
      introduction:
        "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
      profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
    },
    {
      id: "6",
      name: "Rakshitha S",
      profileImage: "assets/images/Rakshitha.jpg",
      introduction:
        "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
      profileLink: "#",
    },
    {
      id: "7",
      name: "Kashmeera Raychoty",
      profileImage: "assets/images/Kashmeera.jpg",
      introduction: "I am a creative person and like to explore new things.",
      profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
    },
    {
      id: "8",
      name: "Harshitha D",
      profileImage: "assets/images/Harshitha D.png",
      introduction: "I'm a partical person and like to travel and listen K-pop.",
      profileLink: "https://harshithad0703.github.io/individual_website/",
    },
    {
      id: "9",
      name: "Sanika Pareek",
      profileImage: "assets/images/sanika.jpeg",
      introduction:
        "I'm curious to learn and explore new things and like to paint.",
      profileLink:
        "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
    },
    {
      id: "10",
      name: "Raj Pandey",
      profileImage: "assets/images/Raj.png",
      introduction: "Computer Engineer, Painter, Poet, Reader",
      profileLink: "https://cs-raj.github.io/pw-2/",
    },
    {
      id: "11",
      name: "Viraj Yadav",
      profileImage: "assets/images/Viraj.jpg",
      introduction:
        "I'm a sincere lunatic curious about technology and like playing cricket.",
      profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
    },
    {
      id: "12",
      name: "Faraaz Biyabani",
      profileImage: "assets/images/faraaz.webp",
      introduction:
        "I am always curious about technology and I love writing code to create purposeful things.",
      profileLink: "https://faraazb.github.io/cs-personal-website/",
    },
    {
      id: "13",
      name: "Vaibhav Patil",
      profileImage: "assets/images/Vaibhav.png",
      introduction:
        "I'm a true technophile. I love to talk about Physics and Spirituality.",
      profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
    },
    {
      id: "14",
      name: "Soumik Paul",
      profileImage: "assets/images/Soumik.png",
      introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
      profileLink: "https://soumik43.github.io/Portfolio/",
    },
  ];


//to make instance of class

//creating one employees constructor function 
function Employee(id,name,profileImage,introduction,profileLink){


    this.id=id;
    this.name=name;
    this.profileImage=profileImage;
    this.introduction=introduction;
    this.profileLink=profileLink;


    return this;
}

/*

//creating instance of class Employee without map
const emp1= new Employee("1","Vibhuti Bajaj", "assets/images/Vibhuti.jpg","I like playing cricket and travelling. I'm always focused on the task which I take at hand.","https://vibhi24.github.io/Personal-Website/");
const emp2= new Employee( "2", "Varun Athreya","assets/images/varun.jpg","I am a passionate coder who loves capturing memories and exploring new places.", "https://varunsathreya.github.io/contentstack-training/");
const emp3= new Employee( "3","Priya NB","assets/images/Priya.jpeg", "I'm enthusiastic to learn new things and I don't give up until i achieve it.","https://priya-nb.github.io/personalweb/index.html");
const emp4= new Employee("4","Rangaswamy Vikas","assets/images/vikas.jpg","I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.","https://vikasrangaswamy.github.io/portfolio/main.html");
const emp5= new Employee("5","Deepak Chaturvedi","assets/images/deepak.png","Believer, Dedicated. I am a curious developer that loves to convert ideas into code.","https://thedeepakchaturvedi.github.io/Portfolio/");
const emp6= new Employee( "6","Rakshitha S","assets/images/Rakshitha.jpg","I'm passionate to meet people, learn new things. I love challenges and interested in travelling.","#");
const emp7= new Employee( "7","Kashmeera Raychoty","assets/images/Kashmeera.jpg", "I am a creative person and like to explore new things.","https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/");
const emp8= new Employee("8","Harshitha D","assets/images/Harshitha D.png","I'm a partical person and like to travel and listen K-pop.","https://harshithad0703.github.io/individual_website/");
const emp9= new Employee( "9","Sanika Pareek","assets/images/sanika.jpeg","I'm curious to learn and explore new things and like to paint.","https://sanikapareek-contentstack.github.io/sanika-portfolio/");
const emp10= new Employee("10","Raj Pandey","assets/images/Raj.png","Computer Engineer, Painter, Poet, Reader","https://cs-raj.github.io/pw-2/");
const emp11= new Employee( "11","Viraj Yadav","assets/images/Viraj.jpg","I'm a sincere lunatic curious about technology and like playing cricket.","https://vikasrangaswamy.github.io/Contentstack/#");
const emp12= new Employee("12","Faraaz Biyabani","assets/images/faraaz.webp","I am always curious about technology and I love writing code to create purposeful things.","https://faraazb.github.io/cs-personal-website/");
const emp13= new Employee( "13", "Vaibhav Patil", "assets/images/Vaibhav.png", "I'm a true technophile. I love to talk about Physics and Spirituality.","https://vaibhav-patil07.github.io/portfolio/#");
const emp14= new Employee("14","Soumik Paul", "assets/images/Soumik.png","2x ICPC regionalist and first runner-up at Techsurf 2022.","https://soumik43.github.io/Portfolio/");




// storing instance of class Employee in new array called Employees

const Employees=[emp1,emp2,emp3,emp4,emp5,emp6,emp7,emp8,emp9,emp10,emp11,emp12,emp13,emp14];

console.log(Employees)


*/


//creating instance of class Employee with map

//empty array to store instance class Employee
let Employees=[];

//maps returns array
let MAp= employees.map((data)=>{

  Employees.push(new Employee(data.id,data.name,data.profileImage,data.introduction,data.profileLink))

})


console.log(Employees)

//1) find employee object by employee id

 function findElementbyId(id) {

    return  Employees.find(element => element.id===id);


    
}
console.log(findElementbyId("3"));



// 2)find employee information that matches the search object
//taking object as key value pair

function findEmployee(key,value){

    //to  restrict the object other than one key value pair
    
   
    //par variable  contains arguments length of findemployee can take  is 2 means 1 key and 1 pair  

 
    var par=arguments.length;
    if(par ===2){

          const object=Employees.find(el=>el[key] ===value)

               if(typeof (object) ==="object"){
                   console.log(object)
               }
    

               else{
                  console.log("No Employee found with",key,value)  
               }
   }

    else{

        console.log("Enter only one key value pair")
   }

}



console.log(findEmployee("name","Priya NB"));



//3) update employee id

//taking Empid and object as key value pair

function updateEmployeeById(EmpId,key,value)
{

    var idx = Employees.findIndex(function(Employee,idx){
        if(Employee.id === EmpId)

        return true;
         });
        if(idx!==-1){
            Employees[idx][key] = value
            console.log("Updated value is:",Employees[idx])
        }
        else
        console.log("Invalid id")



    }


updateEmployeeById("5","name","hari");





//4) delete Employee by id


function deleteEmployeeById(id){

    let idx=Employees.findIndex(el=>el.id==id)
    Employees.splice(idx,1);

    return Employees;

}

console.log("After deletion now the Array conatins",deleteEmployeeById("3"))

