import { Mail, MapPin, Phone } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Eliezer Mendez</h1>
          <p className="text-xl mt-2">Full Stack Developer</p>
        </div>
        <img
          src="/placeholder.svg?height=120&width=120"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white mt-4 sm:mt-0"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          <span>eliezermdz7@gmail.com</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          <span>Santo Domingo, Dominican Republic</span>
        </div>
      </div>
    </header>
  );
};
