const courses = document.querySelectorAll(".course")
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


