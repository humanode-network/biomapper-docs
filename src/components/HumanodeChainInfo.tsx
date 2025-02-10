import { Table } from "nextra/components";

type Props = {
  biomapperAddress: string;
  biomapperLogAddress: string;
  uiUrl: string;
};

const HumanodeChainInfo: React.FC<Props> = (props) => (
  <>
    <Table>
      <thead>
        <Table.Tr>
          <Table.Td>Smart Contract</Table.Td>
          <Table.Td>Address</Table.Td>
        </Table.Tr>
      </thead>
      <tbody>
        <Table.Tr>
          <Table.Td>`Biomapper`</Table.Td>
          <Table.Td>`{props.biomapperAddress}`</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>`BiomapperLog`</Table.Td>
          <Table.Td>`{props.biomapperLogAddress}`</Table.Td>
        </Table.Tr>
      </tbody>
    </Table>
    The UI URL: `{props.uiUrl}`
  </>
);
