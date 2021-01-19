import React, {useState} from 'react';
import {firebaseClient} from '../../../firebaseClient';
import Button from '../elements/Button';
import Input from '../elements/Input';

const HomePage = ({props}) => {
  const [editMode, setEditMode] = useState(false);

  const [photo, setPhoto] = useState(props.photo);
  const [name, setName] = useState(props.name);
  const [bio, setBio] = useState();
  const [phone, setPhone] = useState(props.phone);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('');

  const ProfileItem = ({label, children, className}) => {
    return (
      <p className={`flex items-center justify-between py-6 -mx-6 border border-t-0 ${className}`}>
        <span className="px-6 text-sm font-medium text-warmGray-300">{label}</span>
        <span className="px-6 font-medium text-gray-800">{children}</span>
      </p>
    );
  };

  const updateProfile = () => {
    console.log('updateProfile');
    console.log(props.uid);

    firebaseClient
      .auth()
      .currentUser.updateProfile({
        displayName: name,
        phoneNumber: phone,
        photoURL: photo,
      })
      .then(function () {
        setName(name);
        setPhone(phone);
        setPhoto(photo);
        setEditMode(false);
        if (password !== '') {
          firebaseClient
            .auth()
            .currentUser.updatePassword(password)
            .then(function () {
              setPassword('');
              // Update successful.
            })
            .catch(function (error) {
              // An error happened.
            });
        }
        // Update successful.
        if (email !== props.email) {
          firebaseClient
            .auth()
            .currentUser.updateEmail(email)
            .then(function () {
              setEmail(email);
              // Update successful.
            })
            .catch(function (error) {
              // An error happened.
            });
        }
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="">
      {editMode ? (
        <div>
          <button
            onClick={() => setEditMode(false)}
            className="flex items-center mt-6 cursor-pointer text-lightBlue-500 focus:outline-none"
          >
            <span className="material-icons">keyboard_arrow_left</span>Back
          </button>
          <section className="px-6 py-6 mt-6 mb-4 border sm:py-8 sm:px-12 border-trueGray-200 rounded-xl">
            <p className="text-2xl">Change Info</p>
            <p className="mt-1 text-sm font-medium text-trueGray-500">
              Changes will be reflected to every services
            </p>
            <p className="mt-1 text-sm font-medium text-red-500">
              User must recently signed in to change email or password
            </p>
            <form>
              <Input
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                label="Photo"
                placeholder="Provide your photo URL..."
                className="mt-6"
              />
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                label="Name"
                placeholder="Enter your name..."
                className="mt-6"
              />
              <Input
                value={bio}
                onChange={e => setBio(e.target.value)}
                multiline
                label="Bio"
                placeholder="Enter your bio..."
                className="mt-6"
              />
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                label="Phone"
                placeholder="Enter your phone..."
                className="mt-6"
              />
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Email"
                placeholder="Enter your email..."
                className="mt-6"
              />
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Password"
                placeholder="Enter your new password..."
                className="mt-6"
              />
              <Button
                primary
                onClick={async e => {
                  e.preventDefault();
                  updateProfile();
                }}
                type="submit"
                className="mt-6"
              >
                Save
              </Button>
            </form>
          </section>
        </div>
      ) : (
        <section className="">
          <h1 className="mt-6 text-2xl text-center">Personal info</h1>
          <h2 className="mt-2 text-center">Basic info, like your name and photo</h2>
          <div className="flex items-center justify-between mt-10 sm:border sm:border-b-0 sm:rounded-t-xl sm:p-6 sm:-mx-6">
            <div className="w-44 sm:w-full">
              <p className="text-2xl">Profile</p>
              <p className="mt-1 text-sm font-medium text-trueGray-500">
                Some info may be visible to other people
              </p>
            </div>
            <Button onClick={() => setEditMode(true)} className="">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between py-6 -mx-6 border border-t-0 sm:border-t">
            <span className="px-6 text-sm font-medium text-warmGray-300">PHOTO</span>
            <div className="w-20 mx-6">
              <img src={photo} alt="Profile" className="rounded-xl" />
            </div>
          </div>
          <ProfileItem label="NAME">{name}</ProfileItem>
          <ProfileItem label="BIO">{bio}</ProfileItem>
          <ProfileItem label="PHONE">{phone}</ProfileItem>
          <ProfileItem label="EMAIL">{email}</ProfileItem>
          <ProfileItem className="rounded-b-xl" label="PASSWROD">
            ************
          </ProfileItem>
        </section>
      )}
    </div>
  );
};

export default HomePage;
