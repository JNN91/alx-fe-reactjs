import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Profile</h1>
      <nav className="flex gap-4 my-4">
        <Link to="details" className="text-blue-600">Details</Link>
        <Link to="settings" className="text-blue-600">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
