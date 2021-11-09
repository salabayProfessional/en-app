import React, { useState } from 'react';
import { ModalCreatedTest } from '../../../../../../component/Modal/Modals'
import { Table } from 'reactstrap';
import { generateString } from '../../../../../../specialFunction/specialFunction';

const DictionaryOptions: React.FC<any> = ({
  isList, 
  activeDictionary, 
  toggleList, 
  randomDictionaryWords,
  toggleActiveItem,
  reset,
  toggleHideColumnUa,
  toggleHideColumnEn
}) => {
  const [isModal, setIsModal] = useState(false);
  const toggleIsModal = () => setIsModal(!isModal);

  const list = activeDictionary?.map((item: any) => {
    return (
      <>
        <tbody onClick={() => toggleActiveItem(item)} key={generateString()}>
          <tr>
            <th scope="row">
              {item.name}
            </th>
          </tr>
        </tbody>
       {
         activeDictionary.name === item.name && (
          <div className="active-option">
            <button className="btn btn-outline-success top-10" onClick={() => randomDictionaryWords(activeDictionary)}>RANDOM</button>
            <button className="btn btn-outline-success top-10" onClick={() => reset()}>CLEAR ANSWER</button>
            <button className="btn btn-outline-success top-10" onClick={() => toggleHideColumnUa()}>HIDE UA COLUMN</button>
            <button className="btn btn-outline-success top-10" onClick={() => toggleHideColumnEn()}>HIDE EN COLUMN</button>
          </div>
         )
       }
      </>
    )
  });

  return (
    <div className="dictionary-options">
      <ModalCreatedTest toggle={toggleIsModal} isModal={isModal} />
      <div className="dictionary-options__party">
        <input type="text" placeholder="filter" className="form-control btn-bg" />
      </div>
      <div className="dictionary-options__party">
        <button className="btn btn-outline-success btn-100" onClick={toggleIsModal}>Add new dictionary</button>
      </div>
      <div className="dictionary-options__party">
        <button className="btn btn-outline-success btn-100">DELETE</button>
      </div>
      <div className="dictionary-options__party">
        <button className="btn btn-outline-success btn-100" onClick={() => toggleList()}>List</button>
        {
          isList && (
            <Table hover>
              {
                list
              }
            </Table>
          )
        }
      </div>
    </div>
  )
};

export default DictionaryOptions;
