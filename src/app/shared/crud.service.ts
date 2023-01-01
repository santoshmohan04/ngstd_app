import { Injectable } from '@angular/core';
import { Student } from '../shared/student';
import { Firestore, CollectionReference, docData } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, DocumentReference, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  studentsRef: CollectionReference<any>;
  studentRef: DocumentReference<any>;

  constructor(private db: Firestore) { }

  // Create Student
  AddStudent(student: Student) {
    return addDoc(this.studentsRef, {
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    });
  }

  // Fetch Single Student Object
  GetStudent(id: string) {
    const studentData = doc(this.db, 'students-list/' + id);
    return docData(studentData);
  }

  // Fetch Students List
  GetStudentsList() {
    const studentsData = doc(this.db, 'students-list');
    return docData(studentsData);
  }

  // Update Student Object
  UpdateStudent(student: Student) {
    return updateDoc(this.studentRef, {
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber
    })
  }

  // Delete Student Object
  DeleteStudent(id: string) {
    const deletestudentData = doc(this.db, 'students-list/'+id);
    return deleteDoc(deletestudentData);
  }

}
