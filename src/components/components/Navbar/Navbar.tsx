'use client'

import { useEffect, useState, useContext } from 'react';
import { LogOut, User2 } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { AppContext } from '@/context/AppContext';
import { toast } from 'sonner';
import { assets } from '@/assets/assets_frontend/assets';

const Navbar = () => {
   const { token, setToken, userData } = useContext(AppContext);
   const router = useRouter();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   const [open, setOpen] = useState(false);

   const handleNavigate = (path: string) => {
      router.push(path);
      setOpen(false); // Close popover
   };

   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const updateView = (e: MediaQueryListEvent) => setIsMobile(e.matches);
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener('change', updateView);
      return () => mediaQuery.removeEventListener('change', updateView);
   }, []);

   const pathname = usePathname();
   const navLinks = [
      { name: 'HOME', href: '/' },
      { name: 'ALL DOCTORS', href: '/doctors' },
      { name: 'ABOUT', href: '/about' },
      { name: 'CONTACT', href: '/contact' },
   ];

   const logoutHandler = () => {
      toast.success('Logout successful.');
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      router.push('/');
   };

   return (
      <div className="bg-white border-b border-gray-300 py-4 px-5 md:px-10 flex justify-between items-center mb-8">
         <img
            src={assets.logo.src}
            alt="CareVita Logo"
            className="w-40 cursor-pointer"
            onClick={() => router.push('/')}
         />

         {!isMobile && (
            <div className="flex gap-6 font-medium">
               {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                     <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-1 rounded-md transition-colors duration-200 ${isActive
                              ? 'text-primary font-semibold underline underline-offset-4'
                              : 'text-gray-700 hover:text-primary'
                           }`}
                     >
                        {link.name}
                     </Link>
                  );
               })}
            </div>
         )}

         <div className="flex items-center gap-4">
            {token && userData ? (
               <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                     <Avatar className="cursor-pointer">
                        <AvatarImage src={userData?.image} alt="User Avatar" />
                     </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-56">
                     <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                           <AvatarImage src={userData?.image} />
                        </Avatar>
                        <div>
                           <p className="font-medium">{userData?.name}</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-2 text-sm">
                        <Button
                           variant="ghost"
                           onClick={() => handleNavigate('/my-profile')}
                           className="justify-start"
                        >
                           <User2 className="mr-2 h-4 w-4" /> My Profile
                        </Button>
                        <Button
                           variant="ghost"
                           onClick={() => handleNavigate('/my-appointments')}
                           className="justify-start"
                        >
                           📅 My Appointments
                        </Button>
                        <Button
                           variant="ghost"
                           onClick={() => {
                              logoutHandler();
                              setOpen(false);
                           }}
                           className="justify-start text-red-500"
                        >
                           <LogOut className="mr-2 h-4 w-4" /> Logout
                        </Button>
                     </div>
                  </PopoverContent>
               </Popover>
            ) : (
               <div className='items-center gap-4 hidden md:flex'>
                     <Button variant={'outline'} onClick={() => router.push('/signup')} className="px-6 cursor-pointer py-2 rounded-full">
                        Signup
                     </Button>
                     <Button variant={'ghost'} onClick={() => router.push('/login')} className="bg-primary text-white cursor-pointer px-6 py-2 rounded-full">
                        Login
                     </Button>
               </div>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
               <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden">
                  <img src={assets.menu_icon.src} className="w-6" alt="Menu" />
               </button>
            )}
         </div>

         {/* Mobile Menu */}
         {isMobile && isMenuOpen && (
            <div className="fixed inset-0 bg-white z-30 p-6">
               <div className="flex justify-between mb-6">
                  <img src={assets.logo.src} alt="CareVita Logo" className="w-32" />
                  <img src={assets.cross_icon.src} onClick={() => setIsMenuOpen(false)} className="w-6 cursor-pointer" />
               </div>
               <div className="flex flex-col gap-4 text-lg font-medium text-gray-700">
                  
                     {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                           <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`px-3 py-1 rounded-md transition-colors duration-200 ${isActive
                                    ? 'text-primary font-semibold underline underline-offset-4'
                                    : 'text-gray-700 hover:text-primary'
                                 }`} 
                           >
                              {link.name}
                           </Link>
                        );
                     })}
                  
                  {!token && (
                     <div className='flex flex-col gap-4 mt-6'>
                        <Link href={'/signup'} onClick={() => setIsMenuOpen(false)}>
                           <Button variant={'outline'} className="px-6 cursor-pointer py-2 rounded-full w-full">
                              Signup
                           </Button>
                        </Link>
                        <Link href={'/login'} onClick={() => setIsMenuOpen(false)}>
                           <Button variant={'ghost'}  className="bg-primary text-white cursor-pointer px-6 py-2 rounded-full w-full">
                              Login
                           </Button>
                        </Link>
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default Navbar;
