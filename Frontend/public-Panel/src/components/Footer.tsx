import { college } from "../config/college";
import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <GraduationCap size={35} />
          <h2>{college.name}</h2>
          <p>{college.tagline}</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#notices">Notice Board</a>
          <a href="#admissions">Admissions</a>
        </div>

        <div>
          <h3>Contact Information</h3>

          <p><MapPin size={16} /> {college.address}</p>
          <p><Phone size={16} /> {college.phone}</p>
          <p><Mail size={16} /> {college.email}</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {college.name}.
        All Rights Reserved.
      </div>
    </footer>
  );
}