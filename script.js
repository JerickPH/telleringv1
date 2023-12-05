let currentReceiptNumber = 199282337;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("studentId").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            fetchStudentData();
        }
    });

    document.getElementById("paidBtn").addEventListener("click", function(event) {
        event.preventDefault();
        const studentId = document.getElementById("studentId").value;
        if (studentId && studentData[studentId]) {
            showPaymentModal(studentId);
            currentReceiptNumber++;
        } else {
            alert("Please fetch student data first.");
        }
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        closeModal();
    });
    
    document.querySelector(".close-btn").addEventListener("click", function() {
        closeModal();
    });

    window.addEventListener("click", function(event) {
        const modal = document.getElementById("paymentModal");
        if (event.target === modal) {
            closeModal();
        }
    });

    document.querySelectorAll('.accordion').forEach(function(accordion) {
        accordion.addEventListener('click', function() {
          var content = document.getElementById('studentInfo');
          if (content.style.display === 'block') {
            content.style.display = 'none';
          } else {
            content.style.display = 'block';
          }
        });
    });

    var today = new Date().toISOString().substr(0, 10);
    document.getElementById('date').value = today;
      
});
  
  

function showPaymentModal(studentId) {
    document.getElementById("confirmedStudentId").innerText = studentId;
    document.getElementById("confirmedReceiptNumber").innerText = currentReceiptNumber;

    const data = studentData[studentId];

    if (data) {
        const fullName = `${data.firstName} ${data.middleName} ${data.lastName}`;
        
        document.getElementById("confirmedStudentName").innerText = fullName;
    } else {
        document.getElementById("confirmedStudentName").innerText = "Name not found";
    }

    const today = new Date().toISOString().substr(0, 10);

    document.getElementById("confirmedDate").innerText = today;
    document.getElementById("paymentModal").style.display = "block";
}



function closeModal() {
    document.getElementById("paymentModal").style.display = "none";
    clearFormFields();
}


function fetchStudentData() {
    const studentId = document.getElementById("studentId").value;
    const data = studentData[studentId];

    if (data) {

        const fullName = `${data.lastName}, ${data.firstName} ${data.middleName}`;

        document.getElementById("fullname").value = fullName;
        document.getElementById("lastname").value = data.lastName;
        document.getElementById("firstname").value = data.firstName;
        document.getElementById("middlename").value = data.middleName;
        document.getElementById("gender").value = data.gender.toLowerCase();
        document.getElementById("birthday").value = data.birthday;
        document.getElementById("civilstatus").value = data.civilStatus.toLowerCase();
        document.getElementById("birthplace").value = data.birthplace;
        document.getElementById("nationality").value = data.nationality;
        document.getElementById("presentaddress").value = data.presentAddress;
        document.getElementById("religion").value = data.religion;
        document.getElementById("contactnumber").value = data.contactNumber;
        document.getElementById("email").value = data.emailAddress;
        document.getElementById("course").value = data.course;
        document.getElementById("coursemajor").value = data.courseMajor;
        document.getElementById("courseyearlevel").value = data.courseYearLevel;
        document.getElementById("courseshsstrand").value = data.courseShsStrand;
        document.getElementById("schoollastattended").value = data.schoolLastAttended;
        document.getElementById("schoolyear").value = data.schoolYear;
        document.getElementById("receiptNumber").value = currentReceiptNumber;
    } else {
        clearFormFields();
        toastr.error("Student not found.");
    }
}

function clearFormFields() {
    document.getElementById("fullname").value = "";
    document.getElementById("receiptNumber").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("civilstatus").value = "";
    document.getElementById("birthplace").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("presentaddress").value = "";
    document.getElementById("religion").value = "";
    document.getElementById("contactnumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("coursemajor").value = "";
    document.getElementById("courseyearlevel").value = "";
    document.getElementById("courseshsstrand").value = "";
    document.getElementById("schoollastattended").value = "";
    document.getElementById("schoolyear").value = "";
}

const studentData = {
    "12345": {
        lastName: "Paler",
        firstName: "Jerick",
        middleName: "H.",
        gender: "Male",
        birthday: "1990-12-31",
        civilStatus: "Single",
        birthplace: "Manila",
        nationality: "Filipino",
        presentAddress: "Davao City",
        religion: "Christianity",
        contactNumber: "1234-567-8901",
        emailAddress: "johndoe@example.com",
        course: "bsit",
        courseMajor: "Software Engineering",
        courseYearLevel: "first-year",
        courseShsStrand: "N/A",
        schoolLastAttended: "XYZ High School",
        schoolYear: "2018-2019"
    },
    "67890": {
        lastName: "Bernardo",
        firstName: "Kathryn",
        middleName: "G.",
        gender: "Female",
        birthday: "1995-06-28",
        civilStatus: "Married",
        birthplace: "Cebu City",
        nationality: "Filipino",
        presentAddress: "Quezon City",
        religion: "Christianity",
        contactNumber: "0987-654-3210",
        emailAddress: "janedoe@example.com",
        course: "bsn",
        courseMajor: "Pediatric Nursing",
        courseYearLevel: "third-year",
        courseShsStrand: "Health Allied",
        schoolLastAttended: "ABC Senior High",
        schoolYear:"2018-2019"
    }
}