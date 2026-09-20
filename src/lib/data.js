import axios from 'axios';

//all courses
export const allCourses = async () => {
   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course`);

      return res.data;
   } catch (error) {
      console.log(error);
   }
};

//single course
export const singleCourse = async (id) => {
   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course/${id}`);

      return res.data || null;
   } catch (error) {
      console.log(error);
   }
};
