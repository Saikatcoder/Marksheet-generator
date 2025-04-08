
window.onload = () => {
    let addSubjectButton = document.getElementById('btn');

    // adding subject div
    addSubjectButton.onclick = () => {
        
        let subjectdiv = document.createElement('div');
        subjectdiv.id="form-box";

        // Subject Name Input
        let subjectInput = document.createElement('input');
        subjectInput.name = "Subject";
        subjectInput.placeholder = "Subject Name";
        subjectInput.type = "text";

        // Full Marks Input
        let fullMarks = document.createElement('input');
        fullMarks.placeholder = "Full Marks";
        fullMarks.type = "number";
        fullMarks.name = "marks";
        fullMarks.value = 100;

        // Obtained Marks Input
        let obtainMarks = document.createElement('input');
        obtainMarks.placeholder = "Obtained Marks";
        obtainMarks.type = "number";
        obtainMarks.name = "obtainmarks";
        obtainMarks.className = "obtain-marks";

        // delete button 
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteButton.className = "delet-btn";
        deleteButton.type = 'button'
        // Append inputs to subject div
        subjectdiv.append(subjectInput);
        subjectdiv.append(fullMarks);
        subjectdiv.append(obtainMarks);
        subjectdiv.append(deleteButton)

        // Append subject div to form
        let marksheetForm = document.getElementById('dynamic-area');
        marksheetForm.append(subjectdiv);



        let subjecttr = document.createElement('tr');
         subjecttr.style.textAlign = 'center'

        let subjecttd = document.createElement('td');
        subjecttd.colSpan = 3;


        let fullmarkstd = document.createElement('td');
        fullmarkstd.innerHTML = 100;


        let obtainmarkstd = document.createElement('td');
        obtainmarkstd.colSpan = 2;

        // let subjectmarkslist = document.getElementById('subjectmarks');
        subjecttr.append(subjecttd)
        subjecttr.append(fullmarkstd)
        subjecttr.append(obtainmarkstd)

        let subjectList = document.getElementById('subject-list')
        subjectList.append(subjecttr);


        // live preview subject marks
        subjectInput.oninput=(event)=>{
            subjecttd.innerHTML = event.target.value;
        }
        fullMarks.oninput=(event)=>{
            fullmarkstd.innerHTML = event.target.value;
        }
        obtainMarks.oninput = (event) => {
            obtainmarkstd.innerHTML = event.target.value;
        
            // total marks display
            let totalObtainMarkssum = document.getElementsByClassName('obtain-marks');
            let sum = 0;
            for(let i = 0; i < totalObtainMarkssum.length; i++) {
                let num = Number(totalObtainMarkssum[i].value);
                if(!isNaN(num)) {
                    sum += num;
                }
            }
            let totalmarks = document.getElementById("total-marks");
                totalmarks.innerHTML = sum;



        // delete function
        deleteButton.onclick=()=>{
            alert("are you want to delete this form ")
            subjectdiv.remove();
            subjectList.remove();
        }


    };

    // preview student image
    let studentImageInput = document.getElementById('student-img-input');
    let studentImg = document.getElementById('student-img')
    studentImageInput.onchange = (event)=>{
      let file = event.target.files[0];
     let url = URL.createObjectURL(file);
      studentImg.src = url;
    }

    let collageLogoInput = document.getElementById('collage-logo-input');
    let collageLogo = document.getElementById("collagelogo");
    collageLogoInput.onchange=(event)=>{
        let files = event.target.files[0];
        let url = URL.createObjectURL(files);
        collageLogo.src = url;
    }
    // collage Name Input
    let collageNameInput = document.getElementById('collage-name');
    collageNameInput.oninput=(event)=>{
       let collageName = document.getElementById('clg-name');
        collageName.innerHTML =  event.target.value;        
    }
    // Tagline update
    let tagLineInput = document.getElementById('tag-line-input');
    tagLineInput.oninput = (event)=>{
        let tagline = document.getElementById('tagline');
        tagline.innerHTML = `[${event.target.value}]`;
    }
    let studentNameInput = document.getElementById('student-name-input')
    let studentName = document.getElementById('student-name');
    studentNameInput.oninput =(event)=>{
        studentName.innerHTML = event.target.value;
    }
    let fatherNameInput = document.getElementById('father-name-input');
    let fatherName = document.getElementById('father-name')
    fatherNameInput.oninput = (event)=>{
        fatherName.innerHTML = event.target.value;
    }
    // Date of birth
    let dobInput = document.getElementById('dob-input');
    let dateOfBirth = document.getElementById('dob')
    dobInput.onchange =(event)=>{
        dateOfBirth.innerHTML = event.target.value;
    }
    // Gender select
    let genderInput = document.getElementById('select-gender');
    let gender =document.getElementById('gender');
    genderInput.onchange = (event)=>{
        gender.innerHTML= event.target.value
    }
    // collage depertment
    let depertmentInput = document.getElementById('depertment-input');
    let depertment = document.getElementById('depertment');
    depertmentInput.onchange = (event)=>{
        depertment.innerHTML = event.target.value;
    }
}
}
