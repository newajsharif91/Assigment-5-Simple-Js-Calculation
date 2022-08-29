function setPlayerNameToPlayerList(btnId, nameId) {
   document.getElementById(btnId).addEventListener('click', function () {
       const playersList = document.getElementById('player-list');
       const nameElement = document.getElementById(nameId);

       const name = nameElement.innerText;
       const li = document.createElement('li');
       li.innerText = name;

       const list = document.querySelectorAll('#player-list li')
       if (list.length < 5) {
           playersList.appendChild(li);
           const button = document.getElementById(btnId);
           button.setAttribute('disabled', true);
           button.style.backgroundColor = 'gray';
       }
       else {
           alert('You Have To  Select Only Five Player')
       }

   })
}

setPlayerNameToPlayerList('player1-btn', 'player1-name');
setPlayerNameToPlayerList('player2-btn', 'player2-name');
setPlayerNameToPlayerList('player3-btn', 'player3-name');
setPlayerNameToPlayerList('player4-btn', 'player4-name');
setPlayerNameToPlayerList('player5-btn', 'player5-name');
setPlayerNameToPlayerList('player6-btn', 'player6-name');





document.getElementById('btn-calculate').addEventListener('click',function(){

   var playerCost=parseInt(document.getElementById('per-player-cost').value);
   
   const list = document.querySelectorAll('#player-list li');
   
   const n4=document.getElementById('player-expences').innerText=playerCost*list.length;
   
   })
   
   document.getElementById('calculate-total').addEventListener('click',function(){
   
   
   
      var managerCost=parseInt(document.getElementById('manager-cost').value);
   
      var coashCost=parseInt(document.getElementById('coach-cost').value);
   
      var playerEspencesAfterPlayerCostCalculate=parseInt(document.getElementById('player-expences').innerText);
   
      var managerCostcoashCost=managerCost+coashCost+playerEspencesAfterPlayerCostCalculate;
   
   var overAllcost=document.getElementById('total-cost').innerText=managerCostcoashCost;
   })
