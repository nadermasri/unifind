// src/pages/UniversityDetail/UniversityDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AUBBackground from '../../utils/images/aubbackground.jpg';
import LAUBackground from '../../utils/images/laubackground.jpg';
import BAUBackground from '../../utils/images/baubackground.jpg';
import USJBackground from '../../utils/images/usjbackground.jpg';
import NDUBackground from '../../utils/images/ndubackground.jpg';
import logo from '../../logounifind.png';
import './UniversityDetail.css';
const universities = [
  {
    id: 1,
    name: 'American University of Beirut',
    description: 'The American University of Beirut (AUB) offers a diverse range of programs and state-of-the-art facilities. Known for its strong emphasis on research and academic excellence, AUB is located in the heart of Beirut, providing students with a vibrant and dynamic campus life.',
    programs: ['Engineering', 'Medicine', 'Arts', 'Sciences'],
    address: 'Bliss Street, Beirut, Lebanon',
    contact: 'contact@aub.edu.lb',
    phone: '+961 1 350000',
    gradPrograms: [
      'Graduate degree in Urban Planning and Policy',
      'Grad Degree Urban Design',
      'Master of Science (MS) in Biomedical Engineering',
      'Doctor of Philosophy (PhD) in Biomedical Engineering',
      'Master of Engineering (ME), major in civil engineering (CE)',
      'Master of Engineering (ME), major in environmental and water resources engineering (EWRE)',
      'Master of Science (MS), major in environmental technology (ET)',
      'PhD in civil engineering (CE)',
      'PhD in environmental and water resources engineering (EWRE)',
      'Master of Engineering in Chemical Engineering (ME)',
      'Master of Science in Chemical Engineering (MS)',
      'ME in Electrical and Computer Engineering',
      'PhD in Electrical and Computer Engineering',
      'Master degree in Engineering Management (MEM)',
      'ME in Mechanical Engineering',
      'ME in Mechanical Engineering major in Applied Energy',
      'MS in Energy Studies',
      'PhD in Mechanical Engineering'
    ],
    undergradPrograms: [
      'Bachelor of Architecture',
      'Bachelor of Fine Arts in Graphic Design',
      'BE in civil engineering (CE)',
      'BS in Construction Engineering',
      'BE in Chemical Engineering',
      'BS in Chemical engineering (BS)',
      'BE in Mechanical Engineering',
      'BE in Computer and Communications Engineering',
      'BE in Electrical and Computer Engineering',
      'BE in Industrial Engineering',
      'BE in Mechanical Engineering'
    ],
    tuition: {
      undergrad: 'Credit Cost: 909$ (UNDERGRAD, needed 15 credits)',
      grad: 'Credit Cost: 1139$ (Grad, needed 9 to 12 credits)'
    },
    ranking: '250 overall, 1 in Lebanon',
    research: 'Offers within Departments',
    acceptanceRate: '58%',
    languageTaught: 'English',
    financialAid: 'Need-Based Financial Aid',
    accessibility: 'Offered',
    scholarships: [
      'AUB Merit Scholarship',
      'President Scholarship',
      'USAID',
      'The Lebanese Baccalaureate Merit Scholarships',
      'The MEPI Tomorrow’s Leaders Undergraduate Scholarship Program',
      'Education for Leadership in Crisis Scholarship program (ELC)',
      'Rafic Hariri School of Nursing: HSON Scholarship',
      'The Raji & Fawzieh Sinno Undergraduate Scholarship in Agriculture',
      'Carmen and Ray Debbane Scholarship',
      'The Abdulrahim Abuissa Memorial Scholarship in Agricultural and Biosystems Engineering',
      'The Bassam Hamdi Al Aker Scholarship in Agricultural and Biosystems Engineering'
    ],
    publicTransport: 'No carpooling. The Transportation Services is a university servicing department that prides itself in providing safe, timely, convenient, and reliable transportation services in Lebanon to the AUB community. Transportation services are offered to all AUB faculty, staff, students and visitors for university business only. These services include providing taxi services and delivery of university materials.',
    extracurricularActivities: 'Clubs, Societies, Sport Teams, AUB Outdoors, Government (SRC/USFC), Elections, Campus Yearbook, Annual Events, Student Publications',
    background: AUBBackground

  },
  {
    id: 2,
    name: 'Lebanese American University',
    description: 'The Lebanese American University (LAU) is renowned for its innovative research programs and inclusive campus environment. With a strong focus on student development and community engagement, LAU offers a rich academic experience in both its Beirut and Byblos campuses.',
    programs: ['Engineering', 'Medicine', 'Arts', 'Sciences'],
    address: 'Beirut Campus, Byblos Campus',
    contact: 'info@lau.edu.lb',
    phone: '+961 1 786456',
    gradPrograms: [
      'MS in Civil and Environmental Engineering',
      'MS in Computer Engineering',
      'MS in Industrial Engineering & Engineering Management',
      'MS in International Construction Management (Online)',
      'MS in Mechanical Engineering'
    ],
    undergradPrograms: [
      'BE in Chemical Engineering',
      'BE in Civil Engineering',
      'BE in Computer Engineering',
      'BE in Electrical Engineering',
      'BE in Industrial Engineering',
      'BE in Mechanical Engineering',
      'BE in Mechatronics Engineering',
      'BE in Petroleum Engineering'
    ],
    tuition: {
      undergrad: 'Credit Cost: 890$',
      grad: 'Credit Cost: 936$',
      onlineMasters: 'Credit Cost: 525$'
    },
    ranking: '#701-710 in the world, #4 in Lebanon',
    research: 'Offered within Departments',
    acceptanceRate: '64.2% overall',
    languageTaught: 'English',
    financialAid: 'Need-Based Financial Aid',
    accessibility: 'Campus and Classroom accessibility services are offered',
    scholarships: [
      'Merit Scholarships for National Students (100% of Tuition)',
      'Athletic Scholarship',
      'USAID Higher Education Scholarship Program (HES USP RSS)',
      'MEPI Tomorrow’s Leaders Program (MEPI TL)'
    ],
    publicTransport: 'No Carpooling. Offers paid bus transportation.',
    extracurricularActivities: 'There’s an exciting variety of activities year-round, including talks, presentations, workshops, debates, field trips, hikes, social gatherings, awareness campaigns, fundraising drives, community outreach actions, performances, varsity teams, and much more.',
    background: LAUBackground

  },
  {
    id: 3,
    name: 'Beirut Arab University',
    description: 'Beirut Arab University (BAU) is recognized for its affordable tuition fees and diverse extracurricular activities. Located in Beirut, BAU provides a supportive learning environment with a variety of programs designed to cater to the academic and personal growth of its students.',
    programs: ['Engineering', 'Medicine', 'Arts', 'Sciences'],
    address: 'Debbieh',
    contact: 'info@bau.edu.lb',
    phone: '+961 7 985856',
    gradPrograms: [
      'Masters in Civil Engineering',
      'Masters in Communications and Electronics Engineering',
      'Masters in Electrical Power and Machines Engineering',
      'Masters in Industrial Engineering',
      'Masters in Mechanical Engineering',
      'PhD in Civil Engineering',
      'PhD in Communications and Electronics Engineering',
      'PhD in Computer Engineering',
      'PhD in Electrical Power and Machines Engineering',
      'PhD in Mechanical Engineering'
    ],
    undergradPrograms: [
      'Civil Engineering',
      'Computer Engineering',
      'Communications and Electronics Engineering',
      'Mechanical Engineering',
      'Petroleum Engineering',
      'Biomedical Engineering',
      'Chemical Engineering',
      'Electrical Power and Machines Engineering',
      'Industrial Engineering'
    ],
    tuition: {
      undergrad: 'Fees per credit 217$ + 3,627,000 LBP'
    },
    ranking: '641-650, 3rd in Lebanon',
    research: 'Offered within departments',
    acceptanceRate: '66%',
    languageTaught: 'English',
    financialAid: 'Yes',
    accessibility: 'Yes',
    scholarships: [
      'OFFICIAL BAU SCHOLARSHIP',
      'ACADEMIC SCHOLARSHIP',
      'DISCOUNT UPON ADMISSION FOR THE LEBANESE ARMY'
    ],    publicTransport: 'No',
    extracurricularActivities: 'Clubs, Society, Sports',
    background: BAUBackground

  },
  {
    id: 4,
    name: 'University Saint Joseph',
    description: 'The University Saint Joseph (USJ) is a leading institution in Lebanon, offering a wide range of programs in various fields. With a focus on academic excellence and community engagement, USJ provides students with a supportive learning environment and opportunities for personal growth.',
    programs: ['Engineering', 'Medicine', 'Arts', 'Sciences'],
    address: 'Beirut',
    contact: 'contact@usj.edu.lb',
    phone: '+961 1 421000',
    gradPrograms: [
      'Master in Renewable Energy',
      'Master in Electrical and Electronic Engineering',
      'Master in Water Sciences',
      'Master in Soil Structure and Mechanics',
      'Master in Telecommunications, Networks, and Security',
      'Master in Systems and Networks - Information Security'
    ],
    undergradPrograms: [
      'Diploma in Agri-food Engineering',
      'Diploma in Agronomist Engineering',
      'Diploma in Architecture Engineering',
      'Diploma in Chemical and Petrochemical Engineering',
      'Diploma in Civil Engineering - Buildings and Enterprise Engineering',
      'Diploma in Civil Engineering - Water and Environment',
      'Diploma in Civil Engineering - Public Works and Transport',
      'Diploma in Electrical Engineering',
      'Diploma in Computer & Communications Engineering (Specialize in Software Engineering or Telecommunications Networks)',
      'Diploma in Mechanical Engineering'
    ],
    tuition: {
      undergrad: '300$ per Credit',
      grad: '120$ per Credit'
    },
    ranking: '#711-720 in the World, #5 in Lebanon',
    research: 'Offered within Departments',
    acceptanceRate: '80%',
    languageTaught: 'French (English on specified Majors)',
    financialAid: 'Need-Based Financial Aid',
    accessibility: 'Not Offered (Mafrud)',
    scholarships: [
      'Merit Scholarship',
      'Athletic Scholarship',
      'Work Study Scholarship',
      'Sibling Discount',
      'Dependents of USJ and HDF Staff',
      'International Students',
      'Magis rant',
      'ISEB Grant',
      'FSI HDI Grant'
    ],
    publicTransport: 'Non Offered',
    extracurricularActivities: 'Clubs, societies, varsity teams, and competitions',
    background: USJBackground

  },
  {
    id: 5,
    name: 'Notre Dame University',
    description: 'Notre Dame University (NDU) is known for its strong academic programs and commitment to student success. With a focus on research and innovation, NDU offers a vibrant campus life and a supportive community for students to thrive in their academic pursuits.',
    programs: ['Engineering', 'Medicine', 'Arts', 'Sciences'],
    address: 'XJ28+73C, Zouk Mosbeh',
    contact: 'info@ndu.edu.lb',
    phone: '+961 9 218950',
    gradPrograms: [
      'Masters of Science in Civil Engineering',
      'MASTER OF SCIENCE IN ELECTRICAL AND COMPUTER ENGINEERING',
      'MASTER OF SCIENCE IN MECHANICAL ENGINEERING'
    ],
    undergradPrograms: [
      'Petroleum Engineering',
      'Civil Engineering',
      'Electrical Engineering',
      'Computer and Communication Engineering',
      'Mechanical Engineering',
      'Chemical Engineering'
    ],
    tuition: {
      undergrad: '470$ (60% USD cash 40% @15000LBP)',
      grad: '765$ (60% USD cash 40% @15000LBP)'
    },
    ranking: '#901-950 in QS (6th in Lebanon)',
    research: 'Offered within Departments',
    acceptanceRate: '66%',
    languageTaught: 'English',
    financialAid: 'Need-Based Financial Aid',
    accessibility: 'Offered',
    scholarships: [
      'OFFICIAL BACCALAUREATE SCHOLARSHIP',
      'SAT SCHOLARSHIP',
      'ACADEMIC SCHOLARSHIP',
      'DISCOUNT UPON ADMISSION FOR THE LEBANESE ARMY'
    ],
    publicTransport: 'Non Offered',
    extracurricularActivities: 'Clubs, societies, varsity teams, and competitions',
    background: NDUBackground

  }
];

function UniversityDetail() {
  const { id } = useParams();
  const university = universities.find(u => u.id === parseInt(id));

  if (!university) {
    return <div>University not found</div>;
  }

  return (
    <div className='university-detail'>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <img src={logo} alt="Logo" width="100" height="70" />
              <span className='mx-2 text-light lh-1 fw-semibold'>
                UNI
                <br></br>
                Find
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link as={Link} to="/" className='text-uppercase'>Home</Nav.Link>
              <Nav.Link as={Link} to="/colleges" className='text-uppercase'>Colleges</Nav.Link>
              <Nav.Link as={Link} to="/students" className='text-uppercase'>Students</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className='text-uppercase'>About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className='text-uppercase'>Get in Touch</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className='university-header' style={{ backgroundImage: `url(${university.background})` }}>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>{university.name}</h1>
        </div>
      </header>

      <div className='container py-5'>
        <h2>About</h2>
        <p>{university.description}</p>

        <h2>Programs</h2>
        <ul>
          {university.programs.map(program => (
            <li key={program}>{program}</li>
          ))}
        </ul>

        <h2>Graduate Degrees</h2>
        <ul>
          {university.gradPrograms.map(degree => (
            <li key={degree}>{degree}</li>
          ))}
        </ul>

        <h2>Undergraduate Degrees</h2>
        <ul>
          {university.undergradPrograms.map(degree => (
            <li key={degree}>{degree}</li>
          ))}
        </ul>

        <h2>Contact Information</h2>
        <p><strong>Address:</strong> {university.address}</p>
        <p><strong>Email:</strong> {university.contact}</p>
        <p><strong>Phone:</strong> {university.phone}</p>

        <h2>Tuition</h2>
        <p><strong>Undergraduate:</strong> {university.tuition.undergrad}</p>
        <p><strong>Graduate:</strong> {university.tuition.grad}</p>

        <h2>Ranking</h2>
        <p>{university.ranking}</p>

        <h2>Research</h2>
        <p>{university.research}</p>

        <h2>Acceptance Rate</h2>
        <p>{university.acceptanceRate}</p>

        <h2>Language Taught</h2>
        <p>{university.languageTaught}</p>

        <h2>Financial Aid</h2>
        <p>{university.financialAid}</p>

        <h2>Accessibility Services</h2>
        <p>{university.accessibility}</p>

        <h2>Scholarship Listings</h2>
        <ul>
          {university.scholarships.map(scholarship => (
            <li key={scholarship}>{scholarship}</li>
          ))}
        </ul>

        <h2>Public/Carpooling Transportation</h2>
        <p>{university.publicTransport}</p>

        <h2>Extracurricular Activities</h2>
        <p>{university.extracurricularActivities}</p>
      </div>
    </div>
  );
}

export default UniversityDetail;