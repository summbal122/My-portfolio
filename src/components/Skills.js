// Skills.jsx
import SkillButton from "./button"

export default function Skills() {
  return (
    <section id="skills" className="py-20 flex justify-center bg-white">
      <div className="text-center w-10/12">
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-start">
          <div className="p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-5">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillButton name="React.js" />
              <SkillButton name="Next.js" />
              <SkillButton name="Redux.js" />
              <SkillButton name="JavaScript (ES6+)" />
              <SkillButton name="HTML5" />
              <SkillButton name="CSS3" />
              <SkillButton name="Tailwind CSS" />
              <SkillButton name="Parcel" />
              <SkillButton name="Webpack" />
            </div>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-5">
              Testing
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillButton name="Unit Testing" />
              <SkillButton name="Integration Testing" />
               <SkillButton name="Jest" />
              <SkillButton name="React Testing Library" />
            </div>
          </div>

        
          <div className="p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-700 mb-5">
             Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillButton name="Docker" />
              <SkillButton name="Git" />
              <SkillButton name="Jira" />
              <SkillButton name="GitHub" />
              <SkillButton name="Postman" />
              <SkillButton name="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
