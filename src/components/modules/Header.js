import {useState} from 'react';
import Link from 'next/link';
import {firebaseClient} from '../../../firebaseClient';

const MenuItem = ({onClick, icon, children, className}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center self-start w-full gap-2 p-4 hover:bg-gray-100 rounded-xl focus:outline-none ${className}`}
    >
      <span className="material-icons">{icon}</span>
      <span>{children}</span>
    </button>
  );
};

const Header = ({uid, photo}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between">
      <Link href="/">
        <img src="/devchallenges.svg" alt="" />
      </Link>
      {uid && (
        <div className="relative w-8">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <img src={photo} alt="" className="rounded-lg" />
          </button>
          {open && (
            <div className="absolute right-0 z-50 flex flex-col items-start p-2 bg-white border rounded-xl whitespace-nowrap">
              <MenuItem icon="account_circle">
                <Link href={'/'}>My Profile</Link>
              </MenuItem>
              <MenuItem
                icon="exit_to_app"
                onClick={async () => {
                  await firebaseClient.auth().signOut();
                  window.location.href = '/';
                }}
                className="text-red-500"
              >
                Logout
              </MenuItem>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
