import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-screen  items-center justify-center">
      <h2 className="text-xl font-bold text-red-500">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="bg-red-500 mt-5 rounded p-2" href="/">Return Home</Link>
    </div>
  )
}