import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }
  /*React, poslednji korak, niz dobija upisane podatke, render function ( koriste se child funkcije) */

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) { /*React, treci korak,  **redux connect */
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) { /* **redux connect*/
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

/*
 const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps); ***
 export default connectStateAndProps(CoursesPage);*/


 export default
 connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // *** kod ima isto znacenje



