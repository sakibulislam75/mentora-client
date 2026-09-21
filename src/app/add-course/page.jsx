'use client';

import {
   Button,
   Input,
   TextArea,
   Select,
   SelectTrigger,
   SelectValue,
   SelectIndicator,
   SelectPopover,
   ListBox,
   ListBoxItem,
} from '@heroui/react';
import axios from 'axios';

import { BookPlus, Image as ImageIcon, DollarSign, Clock, List } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
   'Web Development',
   'Data Science',
   'Design',
   'Business',
   'Marketing',
   'Personal Development',
];

export default function AddCourse() {
   const router = useRouter();
   const onsubmit = async (e) => {
      e.preventDefault();

      const userData = new FormData(e.target);
      const data = Object.fromEntries(userData.entries());

      try {
         const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course`, data);

         console.log(res);

         if (res.data.insertedId) {
            alert('Course added successfully');
            e.target.reset();
         } else {
            alert('Failed to add course');
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="w-full max-w-2xl mx-auto mb-10 mt-5 px-4">
         {/* Main Card */}
         <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-200 shadow-lg">
            {/* Scrollable Content */}
            <div className="custom-scrollbar max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
               {/* Header */}
               <div className="text-center mb-5">
                  <div className="mx-auto w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-2">
                     <BookPlus className="w-5 h-5" />
                  </div>

                  <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                     Create New <span className="text-blue-600">Course</span>
                  </h1>

                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                     Share your knowledge with the world
                  </p>
               </div>

               {/* Form */}
               <form onSubmit={onsubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Course Title */}
                     <div className="md:col-span-2 space-y-1">
                        <label htmlFor="title" className="text-sm font-semibold text-slate-700">
                           Course Title
                        </label>

                        <Input
                           id="title"
                           name="title"
                           required
                           placeholder="e.g. Next.js 15 Masterclass"
                           className="w-full h-11 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-lg bg-white transition-all duration-300 shadow-none"
                        />
                     </div>

                     {/* Description */}
                     <div className="md:col-span-2 space-y-1">
                        <label
                           htmlFor="description"
                           className="text-sm font-semibold text-slate-700"
                        >
                           Description
                        </label>

                        <TextArea
                           id="description"
                           name="description"
                           required
                           placeholder="What will students learn in this course?"
                           className="w-full h-20 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-lg bg-white transition-all duration-300 shadow-none resize-none"
                        />
                     </div>

                     {/* Thumbnail URL */}
                     <div className="space-y-1">
                        <label htmlFor="thumbnail" className="text-sm font-semibold text-slate-700">
                           Thumbnail URL
                        </label>

                        <div className="relative">
                           <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10 pointer-events-none" />

                           <Input
                              id="thumbnail"
                              name="thumbnail"
                              required
                              type="url"
                              placeholder="https://images.unsplash.com/..."
                              className="w-full h-11 pl-10 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-lg bg-white transition-all duration-300 shadow-none"
                           />
                        </div>
                     </div>

                     {/* Category */}
                     <div className="space-y-1">
                        <label htmlFor="category" className="text-sm font-semibold text-slate-700">
                           Category
                        </label>

                        <Select
                           id="category"
                           name="category"
                           required
                           placeholder="Select a category"
                           className="w-full"
                        >
                           <SelectTrigger className="h-11 border-2 border-slate-200 hover:border-blue-600/50 data-[focus-within=true]:border-blue-600 rounded-lg bg-white transition-all duration-300 flex items-center px-3 shadow-none outline-none group">
                              <div className="flex items-center gap-2 w-full">
                                 <List className="w-4 h-4 text-slate-400 group-data-[focus-within=true]:text-blue-600" />

                                 <SelectValue className="text-sm font-medium text-slate-600" />
                              </div>

                              <SelectIndicator className="ml-auto">
                                 <List className="w-4 h-4 text-slate-400" />
                              </SelectIndicator>
                           </SelectTrigger>

                           <SelectPopover className="bg-white border border-slate-200 shadow-xl rounded-lg p-1.5 mt-1">
                              <ListBox>
                                 {CATEGORIES.map((cat) => (
                                    <ListBoxItem
                                       key={cat}
                                       id={cat}
                                       className="px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors"
                                    >
                                       {cat}
                                    </ListBoxItem>
                                 ))}
                              </ListBox>
                           </SelectPopover>
                        </Select>
                     </div>

                     {/* Price */}
                     <div className="space-y-1">
                        <label htmlFor="price" className="text-sm font-semibold text-slate-700">
                           Price ($)
                        </label>

                        <div className="relative">
                           <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10 pointer-events-none" />

                           <Input
                              id="price"
                              name="price"
                              required
                              type="number"
                              placeholder="0.00"
                              className="w-full h-11 pl-10 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-lg bg-white transition-all duration-300 shadow-none"
                           />
                        </div>
                     </div>

                     {/* Duration */}
                     <div className="space-y-1">
                        <label htmlFor="duration" className="text-sm font-semibold text-slate-700">
                           Duration
                        </label>

                        <div className="relative">
                           <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10 pointer-events-none" />

                           <Input
                              id="duration"
                              name="duration"
                              required
                              type="text"
                              placeholder="e.g. 12h 30m"
                              className="w-full h-11 pl-10 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-lg bg-white transition-all duration-300 shadow-none"
                           />
                        </div>
                     </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-1 flex gap-3">
                     <Button
                        type="button"
                        variant="flat"
                        size="lg"
                        className="flex-1 font-semibold rounded-lg h-10 bg-slate-100"
                     >
                        Cancel
                     </Button>

                     <Button
                        color="primary"
                        type="submit"
                        size="lg"
                        className="flex-1 font-bold rounded-lg h-10 shadow-lg shadow-blue-600/20"
                     >
                        Publish Course
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
