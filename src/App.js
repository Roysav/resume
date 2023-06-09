import ProgrammingProjects from "./ProgrammingProjects";
import KnowledgeAndHobbies from "./KnowledgeAndHobbies";
import Education from "./Education";
import Skills from "./Skills";
import PersonalDetails from "./PersonalDetails";

function App() {
    return (
        <div className="flex flex-col items-center justify-items-center w-screen h-screen" dir="rtl">
            <p className="text-xl noprint">
                הקו האפור מסביב זה גבולות הדף, כשמדפיסים לpdf לא רואים אותו.
            </p>

            <p className="noprint">תערכו כאן:
                <a href="https://github.com/Roysav/resume" className="noprint">github</a>
            </p>
            <div className="grid place-items-center w-[210mm] px-8 py-16 space-y-6 border border-noprint bg-gray-200">
                <header className="gradient bg-gray-700/40 text-gray-100 p-2">
                    <PersonalDetails/>
                </header>
                <main className="flex flex-row-reverse" >
                    <div className="w-3/4 flex flex-col">
                        <ProgrammingProjects/>
                        <KnowledgeAndHobbies/>
                    </div>
                    <div className="flex flex-col px-1">
                        <Education/>
                        <Skills/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
