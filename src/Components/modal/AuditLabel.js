import audits from "../../audits.json";

const AuditLabel = ({ auditId }) => {
  const auditObj = audits.audits[auditId];
  let auditName = "";
  switch (auditObj.class) {
    case "accessibility":
      auditName = "접근성";
      break;
    case "connectivity":
      auditName = "접속성";
      break;
    case "compatibility":
      auditName = "호환성";
      break;
    case "openness":
      auditName = "개방성";
      break;
    default:
      auditName = "";
  }
  return (
    <div className='text-lg font-bold text-blue'>
      {[auditName, auditObj.subClass, auditObj.spec, auditId].join(" > ")}
    </div>
  );
};

export default AuditLabel;
