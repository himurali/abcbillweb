

import React from 'react';
import clsx from 'clsx';  

export default function Container () {
  return ( <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
  <slot />
</div> 
  );
}
