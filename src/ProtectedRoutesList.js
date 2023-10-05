import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import ProfileForm from "./ProfileForm";

function ProtectedRoutesList() {
  return (
    <Routes>
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/profile" element={<ProfileForm />} />
    </Routes>
  );
}

export default ProtectedRoutesList;