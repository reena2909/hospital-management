import Link from 'next/link'
import React from 'react'

interface BreadcrumbItem {
    label : string,
    link? : string
}

interface BreadcrumbProps {
    items : BreadcrumbItem[],
    className? : string
}

const BreadCrumbItem = ({ items , className = '' }:BreadcrumbProps) => {
  return (
    <div>
      <nav aria-label="breadcrumb" className={`flex items-center space-x-2 ${className}`}>
      {items && items?.map((item:BreadcrumbItem, index:number) => (
        <div key={index} className="flex items-center">
          {item.link ? (
            <Link
              href={item.link}
              className="text-blue-500 hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </div>
      ))}
    </nav>
    </div>
  )
}

export default BreadCrumbItem
