import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div>
          <Header key={course.id} course={course.name} />
          <Content key={course.parts.id} parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  )
}

export default Course
