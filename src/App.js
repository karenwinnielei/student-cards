import { mockSearchData, mockStudentData } from './mockData';
import './blueprint.css';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { useState } from 'react';

import './App.css';

function App(props) {
  const [activeFilter, setActiveFilter] = useState();

  const [displayedStudents, setDisplayedStudents] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [isGreen, setGreen] = useState(false);

  const handleClick = (id) => {
    const result = mockStudentData.filter((data) => {
      return data.filterIds.includes(id);
    });

    const greenButton = mockSearchData.filter((data) => {
      return data._id.includes(id);
    });

    // console.log('green', greenButton);
    // console.log(id);

    setDisplayedStudents(result);
    setActiveFilter(id);

    if (id) {
      setGreen(!isGreen);
    }
  };


  return (
    <div className='App'>
      <div className='filter-container'>
        {mockSearchData.map((filter, index) => {
          if (Math.floor(index / 6) + 1 === currentPage) {
            return (
              <Button
                style={
                  isGreen
                    ? { backgroundColor: 'green' }
                    : { backgroundColor: 'white' }
                }
                className='filter-btn'
                onClick={() => handleClick(filter._id)}
              >
                {filter.emoticon} {filter.title}
              </Button>
            );
          }
        })}
      </div>

      <div className='page-btn'>
        <Button
          icon='chevron-left'
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        ></Button>
        <Button
          icon='chevron-right'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage === Math.floor(mockSearchData.length / 6) + 1
          }
        ></Button>
      </div>

      <div>
        Page {currentPage} of{' '}
        {Math.floor(mockSearchData.length / 6) + 1} results
      </div>
      <div className='card-container'>
        {displayedStudents.map((student) => (
          <Card className='student-cards bp3-elevation-2'>
            <div className='photo-container'>
              <img src={student.profilePic} />
            </div>
            <div className='text-container'>
              <div style={{ fontWeight: 'bold' }}>{student.name}</div>
              <div>{student.university}</div>
              <div>GPA: {student.gpa}</div>
              <div>Enrolled in {student.enroledPrograms}</div>
              <div>Completed {student.completedPrograms}</div>
              <div>Intent Score: {student.intent}</div>
              <div>Skill Score: {student.skillPoints}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
