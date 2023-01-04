import { Mainheading } from "../../../styles/reusableComponents";
import InProgress from "../../../components/InProgress";
import { LevelTag } from "../../../styles/reusableComponents";

function AppliedElectricity() {
  return (
    <>
      <Mainheading>Applied Electricity</Mainheading>
      <LevelTag level="General">General</LevelTag>
      <InProgress />
    </>
  );
}

export default AppliedElectricity;