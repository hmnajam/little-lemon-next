import Image from 'next/image'; // Import the Image component





export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
    <div className="flex items-center">
      <Image src="/assets\nav-logo.png" alt="logo" width={100} height={100} className="ml-4" />
      <h1 className="text-2xl font-bold ml-2 text-white">The Little Lemon Restaurant</h1>
    </div>
      <ul className="flex space-x-4 text-white">
        <li>
          <a href="/home" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:underline">About</a>
        </li>
        <li>
          <a href="/blog" className="hover:underline">Menu</a>
        </li>
        <li>
          <a href="/about" className="hover:underline">Reservations</a>
        </li>
        <li>
          <a href="/about" className="hover:underline">Order Online</a>
        </li>
        <li>
          <a href="/about" className="hover:underline">Login</a>
        </li>
      </ul>
    </nav>
  );
}



