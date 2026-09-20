import FeaturedCourses from '@/components/FeaturedCourses';
import Hero from '@/components/Hero';
import Features from '@/components/WhyChoose';
import Image from 'next/image';

export default function Home() {
   return (
      <div>
         <Hero />
         <FeaturedCourses />
         <Features />
      </div>
   );
}
