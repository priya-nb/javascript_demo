

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



//taking object as serch parameter

const searchobject={ name:"Priya NB"}

let findEmployeebyobj=(searchobject)=>{

  return Employees.find(function(employee){

    return Object.entries(searchobject).every(([key,value])=>employee[key]===value);
  });
}


//console.log(findEmployeebyobj(searchobject));


//3) update employee id



const updatesearchobject={ name : "hhhPriya NB"}

let updateEmployeeById=(id,updateobject)=>
{
   const idx=Employees.findIndex(el=>el.id===id)

    if(idx!==-1){

      for(const key in updateobject){
  
        //should not update id 
        if(key !=="id"){

          Employees[idx][key]=updateobject[key]
         // console.log(Employees[2]);
        }
      }

    return true;
   

    }

    console.log("invalid index")
   
  }

  console.log(updateEmployeeById('3',updatesearchobject));
  console.log(Employees[2]);




//4) delete Employee by id


function deleteEmployeeById(id){

    let idx=Employees.findIndex(el=>el.id===id)
    Employees.splice(idx,1);

    return Employees;

}

console.log("After deletion now the Array conatins",deleteEmployeeById("3"))

