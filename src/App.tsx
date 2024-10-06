import { useState } from 'react';
import { Briefcase, Code } from 'lucide-react';
import { Header } from './components/header';
import { Tabs } from './components/tabs';
import { TabType } from './types/TabTypes';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const handleTabSelection = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <Header />
        <Tabs activeTab={activeTab} handleTabSelection={handleTabSelection} />
        <main className="p-6 sm:p-8">
          {activeTab === 'experience' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="flex">
                  <Briefcase className="w-6 h-6 mr-4 text-gray-500" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Front-end Developer - Fullstack Labs
                    </h3>
                    <p className="text-gray-600">2022 - Present</p>
                    <p className="mt-2">
                      Led development of multiple high-impact projects,
                      improving efficiency by 40%.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Briefcase className="w-6 h-6 mr-4 text-gray-500" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Web Developer - StartUp Inc
                    </h3>
                    <p className="text-gray-600">2015 - 2018</p>
                    <p className="mt-2">
                      Developed and maintained various client websites and web
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
          {activeTab === 'skills' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="bg-gray-200 rounded-full px-4 py-2 text-center"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </section>
          )}
          {activeTab === 'projects' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="space-y-6">
                <div className="flex">
                  <Code className="w-6 h-6 mr-4 text-gray-500" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      E-commerce Platform
                    </h3>
                    <p className="mt-2">
                      Developed a full-stack e-commerce platform using React,
                      Node.js, and MongoDB.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <Code className="w-6 h-6 mr-4 text-gray-500" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Task Management App
                    </h3>
                    <p className="mt-2">
                      Created a responsive task management application with
                      React and Firebase.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
        <footer className="bg-gray-900 text-white p-6 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
