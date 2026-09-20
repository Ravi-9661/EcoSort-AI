const knowledge = [
  {keys:["banana","apple","orange","food","vegetable","fruit","peel","leftover","organic","food waste"],category:"Organic",confidence:96,action:"Put it in a compost/organic-waste bin.",points:8},
  {keys:["bottle","plastic","wrapper","polythene","container","pet"],category:"Recyclable Plastic",confidence:93,action:"Clean and place it in the recyclable-plastic stream.",points:10},
  {keys:["paper","cardboard","newspaper","book","carton"],category:"Paper & Cardboard",confidence:95,action:"Keep it dry and send it to paper recycling.",points:9},
  {keys:["glass","jar","bottle glass"],category:"Glass",confidence:92,action:"Separate it carefully and use the glass recycling stream.",points:10},
  {keys:["phone","mobile","laptop","battery","charger","computer","electronic","earphone"],category:"E-Waste",confidence:94,action:"Do not put it in household trash. Send it to an authorized e-waste collection point.",points:15},
  {keys:["diaper","medical","syringe","bandage"],category:"Special Waste",confidence:88,action:"Use the appropriate sanitary/medical-waste collection system.",points:4},
  {keys:["metal","can","aluminium","steel","tin"],category:"Metal",confidence:91,action:"Separate and send it to a metal recycling stream.",points:12}
];

let total=0, recyclable=0, impact=0;

function classifyWaste(){
  const input=document.getElementById("item").value.trim().toLowerCase();
  const result=document.getElementById("result");
  if(!input){result.classList.remove("hidden");result.innerHTML="⚠️ Please enter a waste item.";return;}
  let best=null, score=0;
  for(const item of knowledge){
    let hits=item.keys.filter(k=>input.includes(k)).length;
    if(hits>score){score=hits;best=item;}
  }
  if(!best) best={category:"General Waste",confidence:68,action:"Reduce, reuse where possible, and check your local waste rules before disposal.",points:3};
  total++; impact+=best.points;
  if(["Recyclable Plastic","Paper & Cardboard","Glass","Metal","E-Waste"].includes(best.category)) recyclable++;
  document.getElementById("total").textContent=total;
  document.getElementById("impact").textContent=impact;
  document.getElementById("recyclable").textContent=Math.round(recyclable/total*100)+"%";
  document.getElementById("barFill").style.width=Math.min(100,Math.round(recyclable/total*100))+"%";
  result.classList.remove("hidden");
  result.innerHTML=`<strong>Prediction:</strong> ${best.category}<br>
  <strong>AI confidence:</strong> ${best.confidence}%<br>
  <strong>Recommended action:</strong> ${best.action}<br>
  <strong>Eco points:</strong> +${best.points}`;
}
document.getElementById("item").addEventListener("keydown",e=>{if(e.key==="Enter")classifyWaste()});