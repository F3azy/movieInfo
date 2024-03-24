import SectionInfo from "./SectionInfo";

const SectionInfoList = ({ sectionsList }) => {
  return sectionsList.map((section) => (
    <SectionInfo
      key={section.title}
      label={section.title}
      content={section.content}
    />
  ));
};

export default SectionInfoList;
