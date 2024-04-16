import Levels from './Levels';

class Student{
    constructor(
        name,
        course, 
        attendance, 
        totalLessons,
        levels, //It's an object
        comment)
    {
        this.name = name;
        this.course = course;
        this.attendance = attendance;
        this.totalLessons = totalLessons;
        this.levels = levels;
        this.comment= comment;
    }


}

export default Student;