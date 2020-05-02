//Open actual Canvas webpage when a course rectangle is clicked
const courses = document.querySelectorAll("#course-list .course")
for(const singleCourse of courses){
    singleCourse.addEventListener("click",function(){
        console.log(this.id);
        switch(this.id){
            case "course-1":
                location.href = "https://canvas.auckland.ac.nz/courses/33933";
                break;
            case "course-2":
                location.href = "https://canvas.auckland.ac.nz/courses/46284";
                break;
            case "course-3":
                location.href = "https://canvas.auckland.ac.nz/courses/47849";
                break;
            case "course-4":
                location.href = "https://canvas.auckland.ac.nz/courses/47851";
                break;
            case "course-5":
                location.href = "https://canvas.auckland.ac.nz/courses/47894";
                break;
        }
    });
}
// Right side bar open and close

document.querySelector("#right-side-bar .full-side-bar-wrapper .side-bar-header i").addEventListener("click", closeSideBar);
document.querySelector("header .hamburger-icon").addEventListener("click", openSideBar);

function closeSideBar(){
    document.querySelector("#right-side-bar .full-side-bar-wrapper").setAttribute(
        "style", "transform: translateX(-400px); transition: 0.5s;"
    );
}
function openSideBar(){
    document.querySelector("#right-side-bar .full-side-bar-wrapper").setAttribute(
        "style", "transform: translateX(0px); transition: 0.5s;"
    );
}

