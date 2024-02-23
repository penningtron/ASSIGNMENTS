from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Config for the PostgreSQL db
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://nathan@localhost/school'

# Init the SQLAlchemy extension
db = SQLAlchemy(app)

class Students(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    grade = db.Column(db.String(1))


@app.route('/students', methods=['GET'])
def get_students():
    students = Students.query.all()
    student_list = [
        {'id': student.id, 'first_name': student.first_name, 'last_name': student.last_name, 'age': student.age, 'grade': student.grade}
        for student in students
    ]
    return jsonify(student_list)

@app.route('/old_students', methods=['GET'])
def get_old_students():
    students = Students.query.all()
    old_students = [student for student in students if int(student['age']) > 20]
    return jsonify(old_students)

@app.route('/young_students', methods=['GET'])
def get_young_students():
    students = Students.query.all()
    young_students = [student for student in students if int(student['age']) < 21]
    return jsonify(young_students)

if __name__ == '__main__':
    app.run(debug=True)

app.route
