import { ProjectExperienceItem } from "../project-item/project-item";



export const ProjectExperienceList = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <ProjectExperienceItem key={project.name} {...project} />
        );
      })}
    </>
  );
};