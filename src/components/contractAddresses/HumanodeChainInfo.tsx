import { Code, Table } from "nextra/components";

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
          <Table.Th>Smart Contract</Table.Th>
          <Table.Th>Address</Table.Th>
        </Table.Tr>
      </thead>
      <tbody>
        <Table.Tr>
          <Table.Td>
            <Code>Biomapper</Code>
          </Table.Td>
          <Table.Td>
            <Code>{props.biomapperAddress}</Code>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>
            <Code>BiomapperLog</Code>
          </Table.Td>
          <Table.Td>
            <Code>{props.biomapperLogAddress}</Code>
          </Table.Td>
        </Table.Tr>
      </tbody>
    </Table>
    <p className="x:not-first:mt-6 x:leading-7">
      The UI URL: <Code>{props.uiUrl}</Code>.
    </p>
  </>
);

export default HumanodeChainInfo;
