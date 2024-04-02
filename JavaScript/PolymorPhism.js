class Factory{
 constructor(name,price){
    this.name=name
    this.price=price
 }
 getDetail(){
    console.log(`the name of my mobile is ${this.name}`)
    console.log(`the price of my mobile is ${this.price}`)
 }
 generateEmi(){
    console.log(Math.floor(Math.random()*100000000000000))
 }
}

const iphone = new Factory("Iphone",150000)
iphone.getDetail()
iphone.generateEmi()

const nokia = new Factory("Nokia",1600)
nokia.getDetail()
nokia.generateEmi()