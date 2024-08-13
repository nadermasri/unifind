// src/pages/Search/Search.jsx

import React, { useState } from 'react';
import './search.css';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logounifind.png';

function Search() {
  const [criteria, setCriteria] = useState({
    acceptanceRate: '',
    accessibilityServices: '',
    gradCreditCost: '',
    undergradCreditCost: '',
    financialAid: '',
    languageTaught: '',
    location: '',
    publicCarpoolingServices: '',
    rankingLebanon: '',
    rankingQS: '',
    research: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Criteria:', criteria);
    // Implement search logic here using the criteria
  };

  return (
    <div>
      <header className="search-header">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Search Universities</h1>
        </div>
      </header>

      <div className="search-page container py-5">
        <Form onSubmit={handleSearch} className="mb-4">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Acceptance Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  name="acceptanceRate"
                  placeholder="Enter minimum acceptance rate"
                  value={criteria.acceptanceRate}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Graduate Credit Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="gradCreditCost"
                  placeholder="Enter maximum graduate credit cost"
                  value={criteria.gradCreditCost}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Undergraduate Credit Cost</Form.Label>
                <Form.Control
                  type="number"
                  name="undergradCreditCost"
                  placeholder="Enter maximum undergraduate credit cost"
                  value={criteria.undergradCreditCost}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={criteria.location}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ranking in Lebanon</Form.Label>
                <Form.Control
                  type="number"
                  name="rankingLebanon"
                  placeholder="Enter maximum ranking in Lebanon"
                  value={criteria.rankingLebanon}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ranking QS</Form.Label>
                <Form.Control
                  type="number"
                  name="rankingQS"
                  placeholder="Enter maximum QS ranking"
                  value={criteria.rankingQS}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Accessibility Services</Form.Label>
                <Form.Select
                  name="accessibilityServices"
                  value={criteria.accessibilityServices}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Financial Aid</Form.Label>
                <Form.Select
                  name="financialAid"
                  value={criteria.financialAid}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Language Taught</Form.Label>
                <Form.Control
                  type="text"
                  name="languageTaught"
                  placeholder="Enter language"
                  value={criteria.languageTaught}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Public/Carpooling Services</Form.Label>
                <Form.Select
                  name="publicCarpoolingServices"
                  value={criteria.publicCarpoolingServices}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Research</Form.Label>
                <Form.Select
                  name="research"
                  value={criteria.research}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" className="btn btn-danger">
            Search
          </Button>
        </Form>

        <div className="search-results">
          <h3 className="text-center">Search Results</h3>
          {/* Display search results here */}
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>University Name</Card.Title>
              <Card.Text>
                Description and details about the university.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Search;