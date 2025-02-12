import { Code, Table } from "nextra/components";

export type BridgedChainInfo = {
  chainName: string;
  addresses: {
    bridgedBiomapper: string;
  };
};

type Props = {
  chains: BridgedChainInfo[];
};

const BridgedChainsInfo: React.FC<Props> = ({ chains }) => (
  <Table className="x:not-first:mt-6 x:p-0">
    <thead>
      <Table.Tr>
        <Table.Th>Chain</Table.Th>
        <Table.Th>
          <Code>BridgedBiomapper</Code> Address
        </Table.Th>
      </Table.Tr>
    </thead>
    <tbody>
      {chains.length === 0 ? (
        <Table.Tr>
          <Table.Td colSpan={2}>Wait for announcements!</Table.Td>
        </Table.Tr>
      ) : (
        chains.map((info, index) => (
          <Table.Tr key={index}>
            <Table.Td>{info.chainName}</Table.Td>
            <Table.Td>
              <Code>{info.addresses.bridgedBiomapper}</Code>
            </Table.Td>
          </Table.Tr>
        ))
      )}
    </tbody>
  </Table>
);

export default BridgedChainsInfo;
