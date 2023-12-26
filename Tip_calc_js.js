//global access

let billtotal_ip_div = document.getElementById('billtotal_ip')
let tip_ip_div = document.getElementById('tip_ip')
let no_of_ppl_div = document.getElementById('no_of_ppl')
let total_per_person_div = document.getElementById('total_per_person')


let no_of_ppl = Number(no_of_ppl_div.innerText)


const CalcBill = () =>{

    //get bill from user
    const bill = Number(billtotal_ip_div.value)
    

    //get tip from user
    let tip = Number(tip_ip_div.value)/100

    //calculate the tip amount
    const tip_amount = bill*tip

    //calculate the total amount 
    const total_amount = bill+tip_amount

    //calculate the total per person
    const total_per_person = total_amount/no_of_ppl

    //display the total
    total_per_person_div.innerText = `$${total_per_person.toFixed(2)}` //.toFixed() sets the no. of digits after decimal 
    //.toLocaleString('en-Us') --> 3,300, 1,20,000

}

const increasePeople = () =>{

    //at every click on '+' increment the no of people
    no_of_ppl+=1 

    //display the updates on the dom
    no_of_ppl_div.innerText = no_of_ppl
    CalcBill()
}

const decreasePeople = () =>{

    if(no_of_ppl<=1){
        alert("Solo diner? No tip split! Add a buddy or treat yo'self! ️")
        return
    }
    //at every click on '-' decrement the no of people
    no_of_ppl-=1 

    //display the updates on the dom
    no_of_ppl_div.innerText = no_of_ppl
    CalcBill()
}