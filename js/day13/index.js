let  person = [
    {
        name: "John", 
        age: 30 , 
        city: function(){
            return this.age - 2025
        }},
    {
        id:001,
        name: "Jane", 
        age: 25,
        city: function(){
            return this.age - 2025
        }
     },
    {
        name: "Jim", 
        age: 35,
        city: function(){
            return this.age - 2025
        }}
]





for (let p of person ){
    console.log(p.name, ":", p.city());
    
}


person.forEach( p => {
    console.log(p.name, ":", p.city());
});
