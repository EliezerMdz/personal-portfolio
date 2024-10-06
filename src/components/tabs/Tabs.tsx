import { FC } from 'react';

import { TabType } from '@/types/TabTypes';

interface Props {
  activeTab: TabType;
  handleTabSelection: (tab: TabType) => void;
}

export const Tabs: FC<Props> = ({ activeTab, handleTabSelection }) => {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li>
          <button
            onClick={() => handleTabSelection('experience')}
            className={`px-3 py-2 rounded-md ${
              activeTab === 'experience'
                ? 'bg-white shadow'
                : 'hover:bg-gray-300'
            }`}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabSelection('skills')}
            className={`px-3 py-2 rounded-md ${
              activeTab === 'skills' ? 'bg-white shadow' : 'hover:bg-gray-300'
            }`}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTabSelection('projects')}
            className={`px-3 py-2 rounded-md ${
              activeTab === 'projects' ? 'bg-white shadow' : 'hover:bg-gray-300'
            }`}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
};
