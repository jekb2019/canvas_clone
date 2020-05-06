//Open actual Canvas webpage when a course rectangle is clicked
    //Actual transition to new page disabled due to privacy reason
const courses = document.querySelectorAll("#course-list .course")
for(const singleCourse of courses){
    singleCourse.addEventListener("click",function(){
        switch(this.id){
            //Actual transition to new page disabled due to privacy reason
            case "course-1":
                // location.href = "https://canvas.auckland.ac.nz/courses/33933";
                break;
            case "course-2":
                // location.href = "https://canvas.auckland.ac.nz/courses/46284";
                break;
            case "course-3":
                // location.href = "https://canvas.auckland.ac.nz/courses/47849";
                break;
            case "course-4":
                // location.href = "https://canvas.auckland.ac.nz/courses/47851";
                break;
            case "course-5":
                // location.href = "https://canvas.auckland.ac.nz/courses/47894";
                break;
        }
    });
}

//Right side bar related OBJECT REFERENCES
const rightSideBar = document.querySelector("#right-side-bar .full-side-bar-wrapper");
const rsbExitIcon = document.querySelector("#right-side-bar .full-side-bar-wrapper .side-bar-header i");
const rsbHamburberIcon = document.querySelector("header .hamburger-icon");

//STILL WORKING ON THIS CODE 6/5
// const rsbHeader = document.querySelector("#right-side-bar .full-side-bar-wrapper .side-bar-header");
// const rsbMenuList = document.querySelector("#right-side-bar .full-side-bar-wrapper .menu-list");
// const rsbMySignature =  document.querySelector("#right-side-bar .full-side-bar-wrapper .signature");
// const rsbMenu =  document.querySelector("#right-side-bar .full-side-bar-wrapper .menu-list .menu");
// const rsbMenuMetadata =  document.querySelector("#right-side-bar .full-side-bar-wrapper .menu-list .menu .menu-metadata");

let isRsbOpen = false;
// Right side bar open and close
rsbExitIcon.addEventListener("click", closeSideBar);
rsbHamburberIcon.addEventListener("click", openSideBar);

function closeSideBar(){
    rightSideBar.setAttribute(
        "style", "transform: translateX(-400px); transition: transform 0.5s;"
    );
    isRsbOpen = false;
}
function openSideBar(){
    rightSideBar.setAttribute(
        "style", "transform: translateX(0px); transition: transform 0.5s;"
    );
    isRsbOpen = true;
}

//STILL WORKING ON THIS CODE 6/5
//close right side bar when outside mouse up detected
// window.addEventListener("mouseup",function(event){
//     let parent = event.target.parentNode;
//     if(isRsbOpen && event.target != rightSideBar && parent != rightSideBar && parent != rsbHeader && parent != rsbMenuList && parent != rsbMySignature && parent != rsbMenuMetadata && parent != rsbMenu){
//         console.log("close!");
//     }
// });


//Dropdown bubble menu related OBJECT REFERENCES
const dropdownBubble = document.querySelector("header .dropdown-bubble");
const ddbDashboardViewMenu = document.querySelector("header .dropdown-bubble #dashboard-view-menu")
const ddbDashboardViews = document.querySelector("header .dropdown-bubble #dashboard-views")

//Dashboard view menu open and close
document.querySelector("header .more-icon").addEventListener("click",function(){
    let displayAtt = getComputedStyle(dropdownBubble).display;
    console.log(displayAtt);
    //toggle open and close
    if(displayAtt === "none"){
        dropdownBubble.style.display = "block";
    }else{
        dropdownBubble.style.display = "none";
    }
})

//close dropdown menu when outside mouse up detected
window.addEventListener("mouseup", function(event){
    if(getComputedStyle(dropdownBubble).display == "block" && event.target != dropdownBubble && event.target.parentNode != dropdownBubble && event.target.parentNode != ddbDashboardViewMenu && event.target.parentNode != ddbDashboardViews){
        dropdownBubble.style.display = "none";
    }
});