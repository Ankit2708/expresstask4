class student{

    static count=0;  //static variable to call

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${age} is not eligible`);

       }

   }
}

const Tina=new student('Tina',18,1234,34);

const Kishan=new student('Kishan',15,2345,35);

const Sammera=new student('Sammera',16,4567,60);

const Samar=new student('Samar',17,7891,70);

const Prakash=new student('Prakash',19,3456,80);

console.log(student.countStudent());

Tina.eligible();

Kishan.eligible();

Sammera.eligible();

Samar.eligible();

Prakash.eligible();