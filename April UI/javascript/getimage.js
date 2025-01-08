var s=document.getElementById("images")
s.style.display="none";
function add(ele){
   var ans=document.createElement("img");
   ans.setAttribute("src", ele);
   ans.style.width="100px";
   ans.style.height="100px";
   images.append(ans);
}
function show(){
   s.style.display="flex";
}