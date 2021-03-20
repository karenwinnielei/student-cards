import { mockSearchData, mockStudentData } from './mockData';
import './blueprint.css';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { useState } from 'react';
import { css, cx } from '@emotion/css';

import './App.css';

function App(props) {
  const [activeFilter, setActiveFilter] = useState();

  const [displayedStudents, setDisplayedStudents] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [toggle, setToggle] = useState(false);

  const handleClick = (id) => {
    const result = mockStudentData.filter((data) => {
      return data.filterIds.includes(id);
    });

    const allStudents = mockStudentData.map((student) => {
      return student;
    });

    setActiveFilter(id);
    setToggle(!toggle);

    const clickedFilter = document.getElementById(`${id}`);
    clickedFilter.style.backgroundColor = 'green';

    const previousFilter = document.getElementById(`${activeFilter}`);

    setDisplayedStudents(result);

    if (previousFilter) {
      previousFilter.style.backgroundColor = 'white';
    } else {
      return;
    }

    if (toggle && clickedFilter.style.backgroundColor === 'white') {
      clickedFilter.style.backgroundColor = 'green';
    } else if (!toggle) {
      setDisplayedStudents(allStudents);
    }
  };

  return (
    <div className='App'>
      <div className='filter-container'>
        {mockSearchData.map((filter, index) => {
          if (Math.floor(index / 6) + 1 === currentPage) {
            return (
              <Button
                id={filter._id}
                style={{ backgroundColor: 'white' }}
                className='filter-btn'
                onClick={() => handleClick(filter._id)}
              >
                {filter.emoticon} {filter.title}
              </Button>
            );
          } else {
            return null;
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
        <p
          className={css`
            padding: 0 3%;
          `}
        >
          Page {currentPage} of{' '}
          {Math.floor(mockSearchData.length / 6) + 1} filters
        </p>
      </div>
      <div className='card-container'>
        {displayedStudents.map((student) => (
          <Card className='student-cards' elevation={Elevation.TWO}>
            <div className='photo-container'>
              <img
                src={student.profilePic}
                alt='student profile pic'
              />
            </div>
            <div className='text-container'>
              <div style={{ fontWeight: 'bold' }}>{student.name}</div>
              <div>{student.university}</div>
              <div>GPA: {Number.parseFloat(`${student.gpa}`).toPrecision(2)}</div>
              <div>Enrolled in {student.enrolledPrograms}</div>
              <div>{student.completedPrograms.length > 0 ? `Completed ${student.completedPrograms}` : 'No Programs Completed' }</div>
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
