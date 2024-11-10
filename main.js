// Function to handle form submission and generate the resume
var generateResume = function (event) {
    event.preventDefault();
    // Get the values from the form inputs
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var certifications = document.getElementById('certifications').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create an object of type ResumeData
    var resumeData = {
        name: name,
        phone: phone,
        email: email,
        address: address,
        education: education,
        certifications: certifications,
        experience: experience,
        skills: skills
    };
    // Call the function to display the resume
    displayResume(resumeData);
};
// Function to display the resume on the page
var displayResume = function (data) {
    var resumeDisplay = document.getElementById('resumeDisplay');
    resumeDisplay.innerHTML = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Address:</strong> ").concat(data.address, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n\n        <h3>Certifications</h3>\n        <p>").concat(data.certifications, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
};
// Add event listener for form submission
var form = document.getElementById('resumeForm');
form.addEventListener('submit', generateResume);
