declare module 'react-scroll' {
    import { ComponentType } from 'react';
  
    export interface LinkProps {
      to: string;
      smooth?: boolean;
      duration?: number;
      offset?: number;
      isDynamic?: boolean;
      spy?: boolean;
      activeClass?: string;
      className?: string;
      onSetActive?: (to: string) => void;
      onSetInactive?: (to: string) => void;
      ignoreCancelEvents?: boolean;
    }
  
    export const Link: ComponentType<LinkProps>;
    export const animateScroll: {
      scrollTo: (y: number, options?: Partial<LinkProps>) => void;
    };
  }
  