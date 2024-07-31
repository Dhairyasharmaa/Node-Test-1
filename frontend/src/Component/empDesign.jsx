const EmpDesign = (props) => {
  return (
      <tr>
          <td>{props.empId}</td>
          <td>{props.nm}</td>
          <td>{props.des}</td>
          <td>{props.sal}</td>
      </tr>
  );
}

export default EmpDesign;
