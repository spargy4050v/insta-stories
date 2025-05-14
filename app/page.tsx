import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ul className="flex space-x-6 mt-8">
        <li className="flex flex-col items-center space-y-1">
          <div className="relative insta-gradient rounded-full p-1">
          <a className="block theme-bg p-1 rounded-full transform transition duration-300 hover:-rotate-6" href="#">
            <img className="h-35 w-35 rounded-full" src="/a0.jpg" alt="Your Story" />
          </a>
          <button className="absolute bottom-0 right-1 bg-blue-500 h-10 w-10 rounded-full font-semibold text-2xl border-4 theme-border flex justify-center items-center font-mono text-white hover:bg-blue-700">+</button>
          </div>
          <a href="#">Your story</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="insta-gradient rounded-full p-1">
          <a className="block theme-bg p-1 rounded-full transform transition duration-300 hover:-rotate-6" href="#">
            <img className="h-35 w-35 rounded-full" src="/a1.jpg" alt="david_912" />
          </a>
          </div>
          <a href="#">david_912</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="insta-gradient rounded-full p-1">
          <a className="block theme-bg p-1 rounded-full transform transition duration-300 hover:-rotate-6" href="#">
            <img className="h-35 w-35 rounded-full" src="/a2.jpg" alt="carl_son" />
          </a>
          </div>
          <a href="#">carl_son_42</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="insta-gradient rounded-full p-1">
          <a className="block theme-bg p-1 rounded-full transform transition duration-300 hover:-rotate-6" href="#">
            <img className="h-35 w-35 rounded-full" src="/a3.jpg" alt="emma_clarke" />
          </a>
          </div>
          <a href="#">emma_clarke</a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="insta-gradient rounded-full p-1">
          <a className="block theme-bg p-1 rounded-full transform transition duration-300 hover:-rotate-6" href="#">
            <img className="h-35 w-35 rounded-full" src="/a4.jpg" alt="diane_fisher" />
          </a>
          </div>
          <a href="#">diane_fisher</a>
        </li>
      </ul>
    </div>
  );
}