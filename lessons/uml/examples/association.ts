class Teacher {
    private students: Student[] = [];

    public addStudent(student: Student): void {
        this.students.push(student)
    }
}

class Student {
    private teachers: Teacher[] = [];

    public addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher)
    }
}
