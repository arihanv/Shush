export default function ReqFail() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="bg-red-200 w-fit px-2.5 rounded-xl border-red-300 border text-red-400 flex gap-1 items-center">
        Failed to fetch response
      </div>
    </div>
  )
}