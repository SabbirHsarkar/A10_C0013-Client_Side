import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { updateProfile } from "firebase/auth";
// import auth from "../firebase/firebase.config";
import { Link } from "react-router";

const Profile = () => {
  const {  user } = useContext(AuthContext);
  // const [isOpen, setIsOpen] = useState(false);


  // const handleOpenForm = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleUpdate=(e)=>{
  //   e.preventDefault();
  //   const name=e.target.name.value;
  //   const photoURL=e.target.photoURL.value;

  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //   })
  //     .then((r) => {
  //       console.log(r);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const photoURL = e.target.photoURL.value;

  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //   })
  //     .then(() => {
  //       setUser({ ...auth.currentUser });
  //       
  //       setIsOpen(false);
  //     })
  //     .catch((error) => {
  //      
  //     });
  // };

  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/30 p-8 text-white bg-gradient-to-br from-[#3A0CA3] via-[#7209B7] to-[#B5179E]">

       
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
          />
          <h2 className="text-3xl font-bold mt-4">
            {user?.displayName || "No Name Available"}
          </h2>
          <p className="text-purple-200 text-sm">{user?.email}</p>
        </div>

      
        <div className="divider divider-neutral my-6"></div>

       
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
            <h3 className="text-xl font-bold">12</h3>
            <p className="text-sm text-purple-200">Games Played</p>
          </div>

          <div className="p-3 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
            <h3 className="text-xl font-bold">5</h3>
            <p className="text-sm text-purple-200">Favorites</p>
          </div>

          <div className="p-3 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
            <h3 className="text-xl font-bold">3</h3>
            <p className="text-sm text-purple-200">Achieve</p>
          </div>
        </div>

       
        <div className="mt-8 bg-white/10 p-5 rounded-2xl shadow-md hover:bg-white/20 transition">
          <h3 className="text-lg font-semibold mb-2">About You</h3>
          <p className="text-purple-200 text-sm leading-relaxed">
            Welcome to your GameHub profile! Track your favorite games, see your
            stats, and enjoy a personalized gaming library experience.
          </p>
        </div>

        <Link to='/update-profile' className="btn mt-2 items-center">
          Update Profile
        </Link>

        {/* {isOpen && (
          <form onSubmit={handleUpdate} className="space-y-4 mt-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                name="name"
                type="text"
                className="input input-bordered w-full text-black"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">PhotoURL</span>
              </label>
              <input
                defaultValue={user?.photoURL}
                name="photoURL"
                type="text"
                className="input input-bordered w-full text-black"
                placeholder="Enter photoURL"
              />
            </div>

            <button className="btn btn-neutral w-full mt-2">Update</button>
          </form>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
