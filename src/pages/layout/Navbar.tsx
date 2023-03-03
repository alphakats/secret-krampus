import { Redeem, Settings, Language } from "@mui/icons-material";
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className="w-full h-40 sticky top-0">
      <div className="bg-emerald-700 min-h-screen flex items-center">
          <div className="flex">
          </div>
          <div className=" center flex">
            <Link href="/">
              <span className="p-6 text-4xl"> Secret Santa </span>
            </Link>
          </div>
          <div className="flex align-top">
            <div className="cursor-pointer text-gray-500 relative">
              <Redeem />
              <span className="w-15px absolute top--5px text-white bg-red-700 rounded-full">2</span>
            </div>
            <div className="cursor-pointer text-gray-500 relative">
              <Language />
            </div>
            <div className="cursor-pointer text-gray-500 relative">
              <Settings />
            </div>
          </div>
        </div>
        </div>
    )
}