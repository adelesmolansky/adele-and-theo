/**
 * Component for the navbar on the webpage.
 * This allows users to change pages.
 */
const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <ul className="flex justify-center space-x-6">
      <li>
        <a href="/" className="hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="/timeline" className="hover:underline">
          Timeline
        </a>
      </li>
      <li>
        <a href="/why-i-love-you" className="hover:underline">
          What I Love About You
        </a>
      </li>
      <li>
        <a href="/movie-dates" className="hover:underline">
          Movie Dates
        </a>
      </li>
      <li>
        <a href="/dinner-dates" className="hover:underline">
          Dinner Dates
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
