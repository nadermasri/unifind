import React from 'react';
import './Students.css';
import { Card } from 'react-bootstrap';
import NaderMasripic from '../../utils/images/NaderAlMasripicture.jpeg';
import AhmadDimashkieh from '../../utils/images/ahmaddimashkiehpicture.jpeg';
import HusseinChamseddine from '../../utils/images/husseinchamseddinepicture.jpeg';
import HusseinChour from '../../utils/images/husseinchourpicture.jpeg';
// import Student5 from '../../utils/images/student5.jpg';
// import Student6 from '../../utils/images/student6.jpg';

const reviews = [
    {
        id: 1,
        img: NaderMasripic,
        name: 'Nader Al Masri',
        review: 'My experience at AUB has been exceptional. The faculty and the facilities are top-notch. I highly recommend this university to anyone seeking quality education.'
    },
    {
        id: 2,
        img: AhmadDimashkieh,
        name: 'Ahmad Dimashkieh',
        review: 'LAU has provided me with incredible opportunities both academically and socially. The supportive environment and the vibrant campus life make it an excellent choice.'
    },
    {
        id: 3,
        img: HusseinChamseddine,
        name: 'Hussein Chameseddine',
        review: 'BAU is a great place to study. The affordable tuition fees and diverse extracurricular activities have enriched my university experience. I feel well-prepared for my future career.'
    },
    {
        id: 4,
        img: HusseinChour,
        name: 'Hussein Chour',
        review: 'USJ offers a wide range of programs and a supportive learning environment. The focus on academic excellence and community engagement has made my time here truly valuable.'
    },
    // {
    //     id: 5,
    //     img: Student5,
    //     name: 'Michael Brown',
    //     review: 'NDU’s strong academic programs and commitment to student success have been instrumental in my personal and professional growth. The campus life is vibrant and inclusive.'
    // },
    // {
    //     id: 6,
    //     img: Student6,
    //     name: 'Lea Haddad',
    //     review: 'AUST has been an incredible place to study. The emphasis on research and academic excellence, combined with a supportive community, has made my university experience unforgettable.'
    // },
];

function Students() {
  return (
    <div className='students-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>What Our Students Say</h1>
                <p className='text-center w-75 mb-5'>Hear from our students about their experiences at various universities across Lebanon. Their stories and feedback can help you make an informed decision about your future.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className='row g-4'>
                {reviews.map((review) => (
                    <div key={review.id} className='col-md-6'>
                        <Card className='shadow-lg'>
                            <Card.Img variant="top" src={review.img} className='img-fluid rounded-circle w-50 mx-auto mt-3' alt={review.name} />
                            <Card.Body className='text-center'>
                                <Card.Title>{review.name}</Card.Title>
                                <Card.Text>{review.review}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <div className='container text-center'>
                <h2 className='mb-4'>Join the Community</h2>
                <p className='mb-4'>Are you ready to start your journey? Contact us to learn more about the universities and programs available to you.</p>
                <a href="/contact" className='btn btn-danger btn-lg'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Students;
