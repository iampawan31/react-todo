import React from 'react';

function Header() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Todo List</span>
      </div>
    </nav>
  );
}

export default Header;
