import React from 'react';
import Link from 'next/link'; // Import Next.js Link for navigation

export default function Menuitem({ title, address, icon }) {
  return (
    <div>
      {/* Use Next.js <Link> for navigation */}
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <p className='text-2xl sm:hidden mx-4'>{icon}</p>
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  );
}