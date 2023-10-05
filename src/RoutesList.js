import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** RoutesList: All routes.
 *
 * Props:
 * - login(): update state in parent
 * - signup(): update state in parent
 *
*/
function RoutesList({ login, signup, loadedCurrentUser }) {
  console.log("asdasd",loadedCurrentUser)
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />

      {loadedCurrentUser &&
        <>
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
        </>
      }

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}

export default RoutesList;