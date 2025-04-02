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
    

        // Append inputs to subject div
        subjectdiv.append(subjectInput);
        subjectdiv.append(fullMarks);
        subjectdiv.append(obtainMarks);

        // Append subject div to form
        let marksheetForm = document.getElementById('dynamic-area');
        marksheetForm.append(subjectdiv);
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
        tagline.innerHTML = event.target.value;
    }
};
