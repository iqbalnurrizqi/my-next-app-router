"use client"
 
export default function error() {
  return (
    <div className="flex flex-col w-full h-screen  items-center justify-center">
      <h2 className="text-xl font-bold text-red-500">Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}