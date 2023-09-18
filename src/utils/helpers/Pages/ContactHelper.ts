import { ClassItem } from 'pages/Contact';

export const uniqueClasses = (classes: ClassItem[]): ClassItem[] => {
  return classes.filter(
    (classItem, index, self) =>
      self.findIndex((item) => item.title === classItem.title) === index
  );
};

export const sortClassesAlphabetically = (
  classes: ClassItem[]
): ClassItem[] => {
  return classes.sort((a, b) => a.title.localeCompare(b.title));
};
