import React from 'react';
import { Table } from 'reactstrap';
import { BTN_BG } from '../../../../../../classes';
import { generateString } from '../../../../../../specialFunction/specialFunction';

const DictionaryOptions: React.FC<any> = ({
  isList, 
  activeHomeWork, 
  toggleList, 
  setActiveNewItem,
  reset,
  toggleHideColumnUa,
  toggleHideColumnEn,
  homeWorks
}) => {

  const list = homeWorks?.map((item: {name: string, words: []}) => {
    return (
      <>
        <tbody onClick={() => setActiveNewItem(item)} key={generateString()}>
          <tr>
            <th scope="row">
              {item?.name}
            </th>
          </tr>
        </tbody>
       {
         activeHomeWork?.name === item?.name && (
          <div className="active-option">
            <button className="btn btn-outline-success top-10">RANDOM</button>
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
      <div className="dictionary-options__party">
        <input type="text" placeholder="filter" className="form-control btn-bg" />
      </div>
      <div className="dictionary-options__party">
        <button className={BTN_BG} onClick={() => toggleList()}>List</button>
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
