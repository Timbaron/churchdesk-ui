import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  churchName: string;
  sectionName: string;
  onLogout: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, churchName, sectionName, onLogout, onMenuClick }) => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b border-slate-200">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <div>
            <h1 className="text-xl font-semibold text-slate-800">Welcome, {user.name.split(' ')[0]}!</h1>
            <p className="text-xs text-slate-500">{churchName} / <span className="font-medium">{sectionName}</span></p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right hidden sm:block">
          <p className="font-semibold text-slate-700">{user.name}</p>
          <p className="text-xs text-slate-500">{user.role}</p>
        </div>
        <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {getInitials(user.name)}
        </div>
        <button
          onClick={onLogout}
          className="text-slate-500 hover:text-slate-700"
          title="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;