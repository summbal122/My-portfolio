// SkillButton.jsx
export default function SkillButton({ name }) {
  return (
    <button className="border border-golden-yellow font-light text-gray-800 text-sm px-6 py-2.5 rounded-xl shadow-sm hover:bg-yellow-100  hover:shadow-md transition" >
      {name}
    </button>
  )
}
