import { ModeToggle } from "./ModeToggle"
import { GlobeIcon } from '@radix-ui/react-icons'

export default function Header() {
     return (
       <header className="flex container mx-auto justify-between items-center">
   Logo 
   <nav className="flex items-center">
     <ul className="flex space-x-6">
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
     </ul>
     <div className="flex items-center border-l border-slate-200 ml-6 pl-6 space-x-6">
          <ModeToggle/>
          <GlobeIcon />
     </div>
   </nav>
       </header>
     );
   }