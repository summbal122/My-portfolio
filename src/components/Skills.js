// Skills.jsx
import SkillButton from "./button"

export default function Skills() {
  return (
    <section id="skills" className="py-8 lg:py-12 flex justify-center bg-white">
      <div className="text-center px-4 xl:px-0 xl:w-10/12">
        <h2 className="text-2xl lg:text-4xl font-serif font-semibold text-gray-800 mb-6 lg:mb-8 xl:mb-12">
          Technical Skills
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-10 text-start">
          <div className="p-4 lg:p-6 rounded-2xl shadow-sm lg:shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-3 lg:mb-5">
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

          <div className="p-4 lg:p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-3 lg:mb-5">
              Testing
            </h3>
            <div className="flex flex-wrap gap-3">
              <SkillButton name="Unit Testing" />
              <SkillButton name="Integration Testing" />
               <SkillButton name="Jest" />
              <SkillButton name="React Testing Library" />
            </div>
          </div>

        
          <div className="p-4 lg:p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-3 lg:mb-5">
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
