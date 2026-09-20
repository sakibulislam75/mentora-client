import axios from 'axios';

export const allCourses = async () => {
   try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course`);

      return res.data;
   } catch (error) {
      console.log(error);
   }
};
