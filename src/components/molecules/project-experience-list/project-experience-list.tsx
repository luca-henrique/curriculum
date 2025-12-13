import { ProjectExperienceItem } from '../project-item/project-item';

interface Project {
  name: string;
  description: string;
  link?: string;
}

interface ProjectExperienceListProps {
  projects?: Project[];
}

export const ProjectExperienceList = ({
  projects = [],
}: ProjectExperienceListProps) => {
  return (
    <>
      {projects.map((project) => {
        return <ProjectExperienceItem key={project.name} {...project} />;
      })}
    </>
  );
};
