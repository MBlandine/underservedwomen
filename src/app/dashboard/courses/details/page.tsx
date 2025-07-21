'use client';

import Link from 'next/link';
import './details.css';
import { FiTrash2 } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import api from '@/lib/api';
import toast from 'react-hot-toast';

interface Course {
  id: number;
  title: string;
  image: string | null;
  mentor: string;
  progressPercent?: number;
}

const dummyCourses: Course[] = [
  {
    id: 1,
    title: 'Coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
    mentor: 'Jane',
    progressPercent: 65,
  },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  // const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

  const fetchAdminCourses = async () => {
    try {
      await new Promise((res) => setTimeout(res, 500)); // simulate loading
      setCourses(dummyCourses);
      // const response = await api.get('/api/courses/admin-list');
      // setCourses(response.data);
    } catch (error) {
      console.error('Failed to fetch courses for admin:', error);
      toast.error('Could not load course data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminCourses();
  }, []);

  // const handleDeleteCourse = async () => {
  //   if (!courseToDelete) return;

  //   const toastId = toast.loading('Deleting course...');
  //   try {
  //     await api.delete(`/api/courses/${courseToDelete.id}`);
  //     toast.success(`Course "${courseToDelete.title}" deleted successfully.`, { id: toastId });
  //     setCourseToDelete(null);
  //     setTimeout(() => fetchAdminCourses(), 200);
  //   } catch (error) {
  //     console.error('Failed to delete course:', error);
  //     toast.error('Failed to delete the course.', { id: toastId });
  //     setCourseToDelete(null);
  //   }
  // };

  // const openDeleteModal = (course: Course) => {
  //   setCourseToDelete(course);
  // };

  // const closeDeleteModal = () => {
  //   setCourseToDelete(null);
  // };

  if (loading) {
    return <div className="courses-page-admin">Loading courses...</div>;
  }

  return (
    <>
      <div className="courses-page-admin">
        <table className="courses-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Mentor</th>
              <th>Progress</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>
                  <img
                    src={course.image || '/placeholder-image.png'}
                    alt={course.title}
                    className="course-img"
                  />
                </td>
                <td>{course.title}</td>
                <td>{course.mentor === 'Not Assigned' ? <span className="text-muted">—</span> : course.mentor}</td>
                <td>
                  <div
                    className="progress-bar-container"
                    style={{
                      margin: '0.5rem 0',
                      position: 'relative',
                      height: '10px',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '10px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${course.progressPercent || 0}%`,
                        height: '100%',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        transition: 'width 0.5s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: (course.progressPercent || 0) > 10 ? 'center' : 'flex-end',
                        color: 'white',
                        fontWeight: 'bold',
                        paddingRight: (course.progressPercent || 0) > 10 ? '0' : '5px',
                        whiteSpace: 'nowrap',
                        fontSize: '0.85rem',
                      }}
                    >
                      {course.progressPercent || 0}%
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {courseToDelete && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Deletion</h2>
            <p>
              Are you sure you want to permanently delete the course "<strong>{courseToDelete.title}</strong>"?
              This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button className="modal-btn-cancel" onClick={closeDeleteModal}>
                Cancel
              </button>
              <button className="modal-btn-confirm" onClick={handleDeleteCourse}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
