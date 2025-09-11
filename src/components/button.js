export default function SkillButton({ name }) {
  return (
    <span className="bg-gray-100 text-gray-800 text-xs md:text-sm font-medium px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-200 transition">
      {name}
    </span>
  )
}
