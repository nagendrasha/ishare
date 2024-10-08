import Image from "next/image";
import SharePopup from "./Sharepopup";

export default function Home() {

  const imageUrl = 'https://mir-s3-cdn-cf.behance.net/projects/404/5f3fa8209214981.Y3JvcCwxNDU2LDExMzgsMCww.jpg'; // Replace with your image URL


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <SharePopup imageUrl={imageUrl} />
  </div>
  );
}
