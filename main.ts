// Define an interface to represent the form data structure
interface ResumeData {
    name: string;
    phone: string;
    email: string;
    address: string;
    education: string;
    certifications: string;
    experience: string;
    skills: string;
}

// Function to handle form submission and generate the resume
const generateResume = (event: Event): void => {
    event.preventDefault();

    // Get the values from the form inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create an object of type ResumeData
    const resumeData: ResumeData = {
        name,
        phone,
        email,
        address,
        education,
        certifications,
        experience,
        skills
    };

    // Call the function to display the resume
    displayResume(resumeData);
}

// Function to display the resume on the page
const displayResume = (data: ResumeData): void => {
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLElement;

    resumeDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        
        <h3>Education</h3>
        <p>${data.education}</p>

        <h3>Certifications</h3>
        <p>${data.certifications}</p>

        <h3>Experience</h3>
        <p>${data.experience}</p>

        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}

// Add event listener for form submission
const form = document.getElementById('resumeForm') as HTMLFormElement;
form.addEventListener('submit', generateResume);
