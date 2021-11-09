import React from 'react';
import { Table } from 'reactstrap';
import { generateString } from '../../../../../../specialFunction/specialFunction';

const TableWords: React.FC<any> = ({
  activeDictionary, 
  register,
  isHideColumnEn,
  isHideColumnUa
}) => {

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>EN</th>
            <th>UA</th>
            <th>YOUR</th>
          </tr>
        </thead>
        <tbody>
          { 
              activeDictionary?.words.map((word: any, idx: number) => {
                return (
                  <tr key={generateString()}>
                    <th scope="row">{ idx + 1 }</th>
                    {!isHideColumnEn? <td className="words-column">{ word.en }</td> : <td className="words-column"></td>}
                    {!isHideColumnUa? <td className="words-column">{ word.ua }</td> : <td className="words-column"></td>}
                    <td><input className="form-control" defaultValue="" {...register(`answers${word.en}`)} /></td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
      <button className="btn btn-outline-success btn-100">EDIT THE DICTIONARY</button>
    </>
  )
};

export default TableWords;
