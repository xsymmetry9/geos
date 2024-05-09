import Levels from './Levels';
import {format} from "date-fns"

class Student{
    constructor(
        name,
        course,
        textbook, 
        attendance, 
        totalLessons,
        levels, //It's an object
        comment)
    {
        this.name = name;
        this.course = course;
        this.textbook = textbook;
        this.attendance = attendance;
        this.totalLessons = totalLessons;
        this.levels = levels;
        this.comment= comment;
    }

    getPercentage = () =>{
        return Math.round((this.attendance / this.totalLessons) * 100);
    }

    getDate = () =>{
        return format(new Date(), "MM/dd/yyyy");
    }

    getTotal = (category) =>{
        let sum = 0;
        this.levels.forEach((item) =>{
            sum += item[category]
        })
        return sum;
    }
    getAverage =(category) =>{
        const average = this.getTotal(category) / this.levels.length;
        return average;
    }


}

export default Student;