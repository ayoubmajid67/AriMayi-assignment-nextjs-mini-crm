"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import "./DropdownMenu.css"


export default function DropdownMenu({ items, triggerText, basePath,onPageChange,className,onMouseEnter }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActiveSection = (path) => {
    return pathname==path;
  };

  const handleItemClick = (itemId) => {
   let newPath =`${basePath}/${itemId}`;
    onPageChange(newPath);
    setIsOpen(false);
  };
  const  handleMouseEnter=()=>{
    setIsOpen(true);
    if(onMouseEnter){
      onMouseEnter(); 
    }
  }

  const handleSpanClick = () => {
    router.push(basePath);
    handleItemClick("")
    setIsOpen(false);
  }
  return (
    <div 
      className={ ` DropdownMenuComponentClass ${className}`}
      onMouseEnter={handleMouseEnter }
      onMouseLeave={() => setIsOpen(false)}
    >
    
      <span className={`dropdown-trigger `} onClick={handleSpanClick}>
        {triggerText}
      </span>

  
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`${basePath}/${item.id}`}
              className={`dropdown-item ${isActiveSection(`${basePath}/${item.id}`)? "Active":""}`  }
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 