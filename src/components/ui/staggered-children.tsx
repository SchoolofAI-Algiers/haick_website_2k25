"use client";
import React, { Children, ReactNode, cloneElement, isValidElement, useEffect } from "react";
import { cn } from "@/lib/utils"; // Utility for combining class names

interface StaggeredChildrenProps {
  children: ReactNode;
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
  childClassName?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function StaggeredChildren({
  children,
  baseDelay = 0,
  staggerDelay = 100,
  className = "",
  childClassName = "",
  as: Component = "div",
}: StaggeredChildrenProps) {
  // Process children to add staggered delays
  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;
    
    // Type assertion to properly type the child element
    const typedChild = child as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & {
        className?: string;
        style?: React.CSSProperties;
        'data-animate'?: string;
        'data-delay'?: number | string;
      }
    >;
    
    // Calculate the delay for this specific child
    const delay = baseDelay + index * staggerDelay;
    
    // Add transition classes to each child
    const enhancedClassName = cn(
      typedChild.props.className || "",
      childClassName,
      "transition-all duration-500 opacity-0"
    );
    
    // Clone the element with new props
    return cloneElement(typedChild, {
      className: enhancedClassName,
      style: {
        ...(typedChild.props.style || {}),
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      },
      "data-animate": "true",
      "data-delay": delay,
    });
  });

  const animationScript = `
    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const container = entry.target;
            const items = container.querySelectorAll('[data-animate="true"]');
            items.forEach(item => {
              setTimeout(() => {
                item.classList.remove("opacity-0");
                item.classList.add("opacity-100");
              }, parseInt(item.getAttribute("data-delay") || "0"));
            });
            observer.unobserve(container);
          }
        });
      }, { threshold: 0.1, rootMargin: "20px" });
      
      // Find all staggered containers and observe them
      const containers = document.querySelectorAll("[data-staggered-container]");
      containers.forEach((container) => observer.observe(container));
    })();
  `;

  return (
    <Component className={cn("relative", className)} data-staggered-container="true">
      {staggeredChildren}
      <script dangerouslySetInnerHTML={{ __html: animationScript }} />
    </Component>
  );
}
