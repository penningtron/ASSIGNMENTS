from school import School 
from student import Student
from staff import Staff

school = School('Ridgemont High') 

print(school.name)
print(school.staff)
print(school.students)

alice = Staff("alice", "4", "Teacher", "34233", "xzy1234")
print(alice)

bob = Student("bob", "43", "Student", "49943", "cvb2345" )
print(bob)