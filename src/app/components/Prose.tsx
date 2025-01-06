import clsx from 'clsx'
import { ReactNode } from 'react';

interface ProseProps{
  children:ReactNode;
  className:string;
}

export function Prose({ children, className }:ProseProps) {
  const isHtmlContent = typeof children === 'string'; 
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>
     {isHtmlContent ? (
        <div className="[&>p]:mb-4 [&>p:last-child]:mb-0 [&>*]:my-4" dangerouslySetInnerHTML={{ __html: children }} />
      ) : (
        children
      )}
      </div>
  )
}
