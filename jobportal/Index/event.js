var signin = document.getElementById("signin");
var mainform = document.getElementById("mainform");
var banner = document.getElementById("banner");

var job = document.getElementById("job");
var comp = document.getElementById("comp");
var about = document.getElementById("about");

function dispMainform() {
    mainform.style.display = "block";
    // signin.style.border = "1px solid white";
    // signin.style.borderRadius = "4px";

}
function hideMainform() {
    mainform.style.display = "none";
    // signin.style.border = "";
    // signin.style.borderRadius = "";

}

signin.addEventListener("mouseenter", dispMainform);
job.addEventListener("mouseenter", hideMainform);
comp.addEventListener("mouseenter", hideMainform);
about.addEventListener("mouseenter", hideMainform);

banner.addEventListener("mouseenter", hideMainform);
mainform.addEventListener("mouseleave", hideMainform);
mainform.addEventListener("mouseleave", hideMainform);
 

