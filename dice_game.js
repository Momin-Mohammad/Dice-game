
let button = document.querySelector("#roll");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");

function rollTheDice(){
    event.preventDefault();

    let member1 = document.querySelector("#member-1");
    let member2 = document.querySelector("#member-2");
    let member3 = document.querySelector("#member-3");

    let mem1 = document.querySelector("#mem1_div");
    let mem2 = document.querySelector("#mem2_div");
    let mem3 = document.querySelector("#mem3_div");

    const firstMember = Math.floor(Math.random()*6)+1
    const secondMember = Math.floor(Math.random()*6)+1
    const thirdMember = Math.floor(Math.random()*6)+1

    member1.innerText = firstMember;
    member2.innerText = secondMember;
    member3.innerText = thirdMember;

    dice1.setAttribute("src","./dice/dice"+firstMember+".png");
    dice2.setAttribute("src","./dice/dice"+secondMember+".png");
    dice3.setAttribute("src","./dice/dice"+thirdMember+".png");

    if(member1.innerText > member2.innerText && member1.innerText > member3.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Winner is Member-1";

        mem1.style.color = "cyan";
        mem2.style.color = "black";
        mem3.style.color = "black";
        member1.style.color = "green";
        if(member2.innerText > member3.innerText)
        {member2.style.color = "orange";
         member3.style.color = "red";}

         else if (member2.innerText === member3.innerText)
         {member2.style.color = "orange";
          member3.style.color = "orange"; }

          else
          {member2.style.color = "red";
           member3.style.color = "orange"; }
    }

    else if(member2.innerText > member1.innerText && member2.innerText > member3.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Winner is Member-2"

        mem1.style.color = "black";
        mem2.style.color = "cyan";
        mem3.style.color = "black";
        member2.style.color = "green"
        if(member1.innerText > member3.innerText)
        {member1.style.color = "orange";
         member3.style.color = "red";}

         else if (member1.innerText === member3.innerText)
         {member1.style.color = "orange";
          member3.style.color = "orange";
          mem1.style.color = "black";
          mem3.style.color = "black"; }

          else
          {member1.style.color = "red";
           member3.style.color = "orange"; }
    }

    else if(member3.innerText > member1.innerText && member3.innerText > member2.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Winner is Member-3"

        mem1.style.color = "black";
        mem2.style.color = "black";
        mem3.style.color = "cyan";
        member3.style.color = "green"
        if(member2.innerText > member1.innerText)
        {member2.style.color = "orange";
         member1.style.color = "red";}

         else if (member2.innerText === member1.innerText)
         {member2.style.color = "orange";
          member1.style.color = "orange";
          mem1.style.color = "black";
          mem2.style.color = "black"; }

          else
          {member2.style.color = "red";
           member1.style.color = "orange"; }
    }

    else if(member2.innerText === member1.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Draw between Member-1 & Member-2"

        member2.style.color = "green"
        member1.style.color = "green"
        member3.style.color = "orange"
        mem1.style.color = "black";
        mem2.style.color = "black";
        mem3.style.color = "black";
    }

    else if(member2.innerText === member3.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Draw between Member-2 & Member-3"

        member2.style.color = "green"
        member1.style.color = "orange"
        member3.style.color = "green"
        mem1.style.color = "black";
        mem2.style.color = "black";
        mem3.style.color = "black";
    }

    else if(member1.innerText === member3.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Draw between Member-1 & Member-3"

        member2.style.color = "orange"
        member1.style.color = "green"
        member3.style.color = "green"
        mem1.style.color = "black";
        mem2.style.color = "black";
        mem3.style.color = "black";
    }

    if(member1.innerText === member2.innerText && member2.innerText === member3.innerText)
    {
        let winner = document.querySelector("#winner");
        winner.innerText = "Draw"

        member2.style.color = "green"
        member1.style.color = "green"
        member3.style.color = "green"
        mem1.style.color = "black";
        mem2.style.color = "black";
        mem3.style.color = "black";
    }

}