//change css sheet based on toogle - change name to match functionality
function nightTime(){
    let theme = document.getElementById("theme");
    if(document.getElementById("sunshine").checked){
        on.style.display = "none";
        off.style.display = "block";
        theme.href = "darkmode.css";
        } else{
            on.style.display = "block";
            off.style.display = "none";
            theme.href = "site.css";
        }
}