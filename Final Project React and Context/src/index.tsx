import {
  Box,
  Flex,
  Spacer,
  Button,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { TbReload } from 'react-icons/tb';
import { IoMdAdd } from 'react-icons/io';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IIssue, useMyContext } from './context/data';
import { MdModeEdit } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
  rel="stylesheet"></link>;

export const MatTable = () => {
  const { issues, setIssues } = useMyContext();
  const mobile = useBreakpointValue({ base: true, md: false });
  const larguraTabela = useBreakpointValue({
    base: '90%',
    md: '90%',
    lg: '98%',
  });

  const {
    isOpen: isAddItemOpen,
    onOpen: onAddItemOpen,
    onClose: onAddItemClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteItemOpen,
    onOpen: onDeleteItemOpen,
    onClose: onDeleteItemClose,
  } = useDisclosure();
  const {
    isOpen: isUpdateItemOpen,
    onOpen: onUpdateItemOpen,
    onClose: onUpdateItemClose,
  } = useDisclosure();

  const [currentIssue, setCurrentIssue] = useState<IIssue>({
    id: '',
    title: '',
    state: '',
    url: '',
    created: '',
    updated: '',
  });

  useEffect(() => {
    setCurrentIssue({
      id: '',
      title: '',
      state: '',
      url: '',
      created: '',
      updated: '',
    });
  }, [onAddItemClose, onDeleteItemClose, onUpdateItemClose]);

  useEffect(() => {
    setFormData({ ...currentIssue });
  }, [onUpdateItemOpen, currentIssue]);

  const [formData, setFormData] = useState<IIssue>({
    id: '',
    title: '',
    state: '',
    url: '',
    created: '',
    updated: '',
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAddItem() {
    const updatedIssues = [...issues];
    updatedIssues.push(formData);
    setIssues(updatedIssues);
    setFormData({
      id: '',
      title: '',
      state: '',
      url: '',
      created: '',
      updated: '',
    });
  }

  function handleDeleteItem(id: string) {
    const updatedIssues = issues.filter((issue) => issue.id !== id);
    setIssues(updatedIssues);
  }

  function handleUpdateItem(id: string, updatedIssue: IIssue) {
    const updatedIssues = issues.map((issue) => {
      if (issue.id === id) {
        return { ...issue, ...updatedIssue };
      } else {
        return issue;
      }
    });
    setIssues(updatedIssues);
    setFormData({
      id: '',
      title: '',
      state: '',
      url: '',
      created: '',
      updated: '',
    });
  }

  return (
    <>
      <Flex>
        <Box w="50%" bg="#3f51b5" fontSize={20} color="white" padding="18px">
          {' '}
          Angular 9 MatTable CRUD Example{' '}
        </Box>

        <Spacer bg="#3f51b5" />

        <Box bg="#3f51b5" fontSize={20} color="white" padding="16px">
          Reload data:
          <Button colorScheme="#5467d1" size="xs">
            <Icon
              as={TbReload}
              color="white"
              fontSize="24px"
              strokeWidth={2.5}
            />
          </Button>
        </Box>
      </Flex>

      <Box mt="5px" p="8px 24px 0" mb="30px">
        <Input
          variant="flushed"
          placeholder="Filter issues"
          fontSize={14}
          focusBorderColor="red.500"
          pt="10px"
        />
      </Box>
      <Box maxW="99%">
        <TableContainer width={larguraTabela}>
          <Table variant="simple">
            <Thead fontFamily="Roboto">
              <Tr>
                <Th color="#0000008A" fontWeight="normal" textTransform="none">
                  Id
                </Th>
                <Th color="#0000008A" fontWeight="normal" textTransform="none">
                  Title
                </Th>
                <Th color="#0000008A" fontWeight="normal" textTransform="none">
                  State
                </Th>
                <Th color="#0000008A" fontWeight="normal" textTransform="none">
                  Url
                </Th>
                <Th color="#0000008A" fontWeight="normal" textTransform="none">
                  Created at
                </Th>
                <Th color="#0000008A" fontWeight="normal" textTransform="none">
                  Updated at
                </Th>
                <Button onClick={onAddItemOpen} colorScheme="white.100">
                  <Icon as={IoMdAdd} color="#3f51b5" fontSize="22px" />
                </Button>

                <Modal isOpen={isAddItemOpen} onClose={onAddItemClose}>
                  <ModalOverlay />
                  <ModalContent maxWidth="500px">
                    <ModalHeader p="24px 24px 40px 24px" fontWeight="normal">
                      Add new Issue
                    </ModalHeader>
                    <ModalBody p="0 0 0 24px">
                      <Box maxHeight="380px" overflowY="auto">
                        <Stack spacing={8}>
                          <Input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Id *"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Title *"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="State *"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Url"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="created"
                            value={formData.created}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Created at"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="updated"
                            value={formData.updated}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Updated at"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                        </Stack>

                        <ModalFooter justifyContent="flex-start" p="40px 0">
                          <Button
                            onClick={handleAddItem}
                            type="submit"
                            fontSize="14px"
                            fontWeight="normal"
                            variant="ghost">
                            Save
                          </Button>
                          <Button
                            fontSize="14px"
                            fontWeight="normal"
                            variant="ghost"
                            mr={3}
                            onClick={onAddItemClose}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Box>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Modal isOpen={isUpdateItemOpen} onClose={onUpdateItemClose}>
                  <ModalOverlay />
                  <ModalContent maxWidth="500px">
                    <ModalHeader p="24px 24px 40px 24px" fontWeight="normal">
                      Issue id: {currentIssue.id}
                    </ModalHeader>
                    <ModalBody p="0 0 0 24px">
                      <Box maxHeight="380px" overflowY="auto">
                        <Stack spacing={8}>
                          <Input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Id *"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Title *"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="State *"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Url"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="created"
                            value={formData.created}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Created at"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                          <Input
                            type="text"
                            name="updated"
                            value={formData.updated}
                            onChange={handleInputChange}
                            variant="flushed"
                            placeholder="Updated at"
                            fontSize={16}
                            focusBorderColor="red.500"
                          />
                        </Stack>

                        <ModalFooter justifyContent="flex-start" p="40px 0">
                          <Button
                            onClick={() =>
                              handleUpdateItem(currentIssue.id, formData)
                            }
                            fontSize="14px"
                            fontWeight="normal"
                            variant="ghost">
                            Save
                          </Button>
                          <Button
                            fontSize="14px"
                            fontWeight="normal"
                            variant="ghost"
                            mr={3}
                            onClick={onUpdateItemClose}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Box>
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Modal isOpen={isDeleteItemOpen} onClose={onDeleteItemClose}>
                  <ModalOverlay />
                  <ModalContent maxWidth="500px">
                    <ModalHeader p="24px 24px 40px 24px" fontWeight="normal">
                      Issue id:
                    </ModalHeader>
                    <ModalBody p="0 0 0 24px">
                      <Box maxHeight="380px" overflowY="auto">
                        <Stack spacing={8}>
                          <Text>id: {currentIssue.id} </Text>
                          <Text>Title: {currentIssue.title}</Text>
                          <Text>State: {currentIssue.state}</Text>
                          <Text>Url: {currentIssue.url}</Text>
                        </Stack>

                        <ModalFooter justifyContent="flex-start" p="40px 0">
                          <Button
                            onClick={() => handleDeleteItem(currentIssue.id)}
                            fontSize="14px"
                            fontWeight="normal"
                            variant="ghost">
                            Delete
                          </Button>
                          <Button
                            fontSize="14px"
                            fontWeight="normal"
                            variant="ghost"
                            mr={3}
                            onClick={onDeleteItemClose}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Box>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Tr>
            </Thead>

            <Tbody>
              {issues.map((issue) => (
                <Tr key={issue.id}>
                  <Td p="24px 10px 24px 24px" fontSize="14px">
                    {issue.id}
                  </Td>
                  <Td p="0px 10px" fontSize="14px">
                    {issue.title}
                  </Td>
                  <Td p="0px 10px" fontSize="14px">
                    {issue.state}
                  </Td>
                  <Td p="0px 10px" fontSize="14px">
                    {issue.url}
                  </Td>
                  <Td p="0px 10px" fontSize="14px">
                    {issue.created}
                  </Td>
                  <Td p="0px 10px" fontSize="14px">
                    {issue.updated}
                  </Td>
                  <Td p={0}>
                    <Button
                      colorScheme="red"
                      variant="ghost"
                      borderRadius="20px"
                      p={0}
                      bg="white"
                      size="md"
                      onClick={() => {
                        setCurrentIssue(issue);
                        onUpdateItemOpen();
                      }}>
                      <Icon as={MdModeEdit} color="red.500" fontSize="26px" />
                    </Button>
                    <Button
                      p={0}
                      ml="-3px"
                      colorScheme="red"
                      variant="ghost"
                      borderRadius="20px"
                      bg="white"
                      size="md"
                      onClick={() => {
                        setCurrentIssue(issue);
                        onDeleteItemOpen();
                      }}>
                      <Icon as={IoMdTrash} color="red.500" fontSize="26px" />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
