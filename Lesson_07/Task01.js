'use strict';

const filter = (all, forDelete) => {
    let all_ = all;
    for (let i = 0; i < forDelete.length; i++) {
        all_ = all_.filter(item => item !== forDelete[i]);
    }
    return all_; 
}

const allStudents = ['Askar', 'Nurs', 'Beka', 'Abay', 'Dastan', 'Erbol',];
const failedStudents = ['Askar', 'Beka', 'Erbol',];
console.log(filter(allStudents, failedStudents));
