import React from 'react';
import { TagContainer } from './style';

interface TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return <TagContainer>{children}</TagContainer>;
};
