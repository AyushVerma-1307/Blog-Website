import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white z-10">
      <h1 className="font-bold text-3xl uppercase text-center cursor-pointer"
      onClick={()=> navigate("/")}>
        Technology Blogs
      </h1>
    </header>
  );
}
