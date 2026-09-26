'use client';

import { Button, Input } from '@heroui/react';
import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function Register() {
   const router = useRouter();
   const onSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signUp.email({
         name: userData.name, // required
         email: userData.email, // required
         image: userData.image || undefined, // required
         password: userData.password,
         autoSignIn: false, // required
      });
      if (error) {
         alert(error.message);
      } else {
         await authClient.signOut(); //protect auto login
         alert('Registration successful. Please sign in.');
         router.push('/LoginPage');
      }
      console.log(userData);
   };
   return (
      <div className="min-h-[80vh] flex flex-col bg-slate-50 py-12">
         <div className="grow flex items-center justify-center p-4">
            <div className="w-full max-w-md">
               <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                  <div className="text-center space-y-2 relative">
                     <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                        Join <span className="text-blue-600">Mentora</span>
                     </h2>

                     <p className="text-slate-500 font-medium">
                        Create your account to start learning
                     </p>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-6">
                     {/* Full Name */}
                     <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                           Full Name
                        </label>

                        <div className="flex items-center gap-3 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-12 bg-white w-full rounded-2xl px-4">
                           <User className="w-5 h-5 text-slate-400 shrink-0" />

                           <Input
                              id="name"
                              required
                              placeholder="Enter your name"
                              name="name"
                              className="w-full"
                           />
                        </div>
                     </div>

                     {/* Email */}
                     <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                           Email Address
                        </label>

                        <div className="flex items-center gap-3 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-12 bg-white w-full rounded-2xl px-4">
                           <Mail className="w-5 h-5 text-slate-400 shrink-0" />

                           <Input
                              id="email"
                              required
                              placeholder="Enter your email"
                              type="email"
                              name="email"
                              className="w-full"
                           />
                        </div>
                     </div>

                     {/* Profile Image */}
                     <div className="space-y-2">
                        <label htmlFor="image" className="text-sm font-bold text-slate-700 ml-1">
                           Profile Image URL
                        </label>

                        <div className="flex items-center gap-3 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-12 bg-white w-full rounded-2xl px-4">
                           <User className="w-5 h-5 text-slate-400 shrink-0" />

                           <Input
                              id="image"
                              placeholder="https://images.unsplash.com/..."
                              type="url"
                              name="image"
                              className="w-full"
                           />
                        </div>
                     </div>

                     {/* Password */}
                     <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-bold text-slate-700 ml-1">
                           Password
                        </label>

                        <div className="flex items-center gap-3 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-12 bg-white w-full rounded-2xl px-4">
                           <Lock className="w-5 h-5 text-slate-400 shrink-0" />

                           <Input
                              id="password"
                              required
                              placeholder="••••••••"
                              type="password"
                              name="password"
                              className="w-full"
                           />
                        </div>
                     </div>

                     {/* Submit Button */}
                     <Button
                        color="primary"
                        type="submit"
                        className="w-full h-12 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
                     >
                        Create Account
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </form>

                  <div className="text-center pt-2">
                     <p className="text-sm text-slate-500 font-medium">
                        Already have an account?{' '}
                        <Link
                           href="/login"
                           className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                        >
                           Sign in
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
