import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="img-footer">
            <img
              src="/assets/footer-logo.png"
              alt="Little Lemon logo"
              className="w-16 h-16"
            />
          </div>
          <div className="contact">
            <h1 className="text-2xl font-bold mb-4">Navigation</h1>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="/assets/menu.webp" target="_blank" rel="noreferrer">
                  Menu
                </a>
              </li>
              <li>
                <Link href="/reservations">Reservations</Link>
              </li>
              <li>
                <Link href="/order">Order</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <ul className="space-y-2">
              <li>2395 Maldove Way,</li>
              <li>Chicago Illinois</li>
              <li>(629)-243-6827</li>
              <a
                href="mailto: info@littlelemon.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-400"
              >
                info@littlelemon.com
              </a>
            </ul>
          </div>

          <div className="contact">
            <h1 className="text-2xl font-bold mb-4">Connect</h1>
            <ul className="space-y-4">
              <a
                href="https://www.facebook.com/thelittlelemonshop/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-blue-300 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13h-2v6H9v-6H7v-2h2V9h2v4h2v2z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/littlelemonmoon/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-blue-300 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 15c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm6-13h-1c-.553 0-1-.447-1-1s.447-1 1-1h1c.553 0 1 .447 1 1s-.447 1-1 1zm-6.5 3c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM12 5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm6 13h-12c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2zm-8-10h6v2h-6zm0 3h6v5h-6z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.youtube.com/watch?v=3Li-FfypZYE"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-blue-300 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm-2 14.825v-9.65l7 4.825-7 4.825z" />
                </svg>
                Join us!
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
