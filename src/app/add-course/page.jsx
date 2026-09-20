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

import { BookPlus, Image as ImageIcon, DollarSign, Clock, List } from 'lucide-react';

const CATEGORIES = [
   'Web Development',
   'Data Science',
   'Design',
   'Business',
   'Marketing',
   'Personal Development',
];

export default function AddCourse() {
   return (
      <div className="w-6/12 mx-auto mb-16 mt-5">
         {/* Main Card */}
         <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-200 shadow-xl">
            {/* Scrollable Content */}
            <div className="custom-scrollbar max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
               {/* Header */}
               <div className="text-center mb-6">
                  <div className="mx-auto w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                     <BookPlus className="w-6 h-6" />
                  </div>

                  <h1 className="text-2xl font-bold text-slate-900">
                     Create New <span className="text-blue-600">Course</span>
                  </h1>

                  <p className="text-sm text-slate-500 mt-1">Share your knowledge with the world</p>
               </div>

               {/* Form */}
               <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     {/* Course Title */}
                     <div className="md:col-span-2 space-y-1.5">
                        <label htmlFor="title" className="text-sm font-semibold text-slate-700">
                           Course Title
                        </label>

                        <Input
                           id="title"
                           name="title"
                           required
                           placeholder="e.g. Next.js 15 Masterclass"
                           className="w-full h-12 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-xl bg-white transition-all duration-300 shadow-none"
                        />
                     </div>

                     {/* Description */}
                     <div className="md:col-span-2 space-y-1.5">
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
                           className="w-full h-24 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-xl bg-white transition-all duration-300 shadow-none resize-none"
                        />
                     </div>

                     {/* Thumbnail URL */}
                     <div className="space-y-1.5">
                        <label htmlFor="thumbnail" className="text-sm font-semibold text-slate-700">
                           Thumbnail URL
                        </label>

                        <div className="relative">
                           <ImageIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 z-10 pointer-events-none" />

                           <Input
                              id="thumbnail"
                              name="thumbnail"
                              required
                              type="url"
                              placeholder="https://images.unsplash.com/..."
                              className="w-full h-12 pl-11 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-xl bg-white transition-all duration-300 shadow-none"
                           />
                        </div>
                     </div>

                     {/* Category */}
                     <div className="space-y-1.5">
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
                           <SelectTrigger className="h-12 border-2 border-slate-200 hover:border-blue-600/50 data-[focus-within=true]:border-blue-600 rounded-xl bg-white transition-all duration-300 flex items-center px-3.5 shadow-none outline-none group">
                              <div className="flex items-center gap-2.5 w-full">
                                 <List className="w-4.5 h-4.5 text-slate-400 group-data-[focus-within=true]:text-blue-600" />

                                 <SelectValue className="text-sm font-medium text-slate-600" />
                              </div>

                              <SelectIndicator className="ml-auto">
                                 <List className="w-4 h-4 text-slate-400" />
                              </SelectIndicator>
                           </SelectTrigger>

                           <SelectPopover className="bg-white border border-slate-200 shadow-xl rounded-xl p-1.5 mt-1">
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
                     <div className="space-y-1.5">
                        <label htmlFor="price" className="text-sm font-semibold text-slate-700">
                           Price ($)
                        </label>

                        <div className="relative">
                           <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 z-10 pointer-events-none" />

                           <Input
                              id="price"
                              name="price"
                              required
                              type="number"
                              placeholder="0.00"
                              className="w-full h-12 pl-11 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-xl bg-white transition-all duration-300 shadow-none"
                           />
                        </div>
                     </div>

                     {/* Duration */}
                     <div className="space-y-1.5">
                        <label htmlFor="duration" className="text-sm font-semibold text-slate-700">
                           Duration
                        </label>

                        <div className="relative">
                           <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 z-10 pointer-events-none" />

                           <Input
                              id="duration"
                              name="duration"
                              required
                              type="text"
                              placeholder="e.g. 12h 30m"
                              className="w-full h-12 pl-11 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-xl bg-white transition-all duration-300 shadow-none"
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
                        className="flex-1 font-semibold rounded-xl h-11 bg-slate-100"
                     >
                        Cancel
                     </Button>

                     <Button
                        color="primary"
                        type="submit"
                        size="lg"
                        className="flex-1 font-bold rounded-xl h-11 shadow-lg shadow-blue-600/20"
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
