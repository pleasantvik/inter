import { Dialogue } from "Dialogue";
import { Table } from "evergreen-ui";
import { useState } from "react";
import { useGetUsersQuery } from "store/apiSlice";

export const App = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);

  const handleShow = (id) => {
    const userDetail = data.filter((item) => item.id === id);

    setShow(true);
    setTitle(userDetail);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      {isLoading && <p>Loading</p>}

      <Table className="w-full">
        <Table.Head style={{ width: "100%" }}>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>Website </Table.Cell>
            <Table.Cell>Company</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data?.map((item) => (
            <Table.Row key={item.id} onClick={() => handleShow(item.id)}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.website}</Table.Cell>
              <Table.Cell>{item?.company?.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Dialogue show={show} handleClose={handleClose} datum={title} />
    </div>
  );
};
