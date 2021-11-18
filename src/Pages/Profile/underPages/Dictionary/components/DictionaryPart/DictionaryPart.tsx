import React from 'react';
import { Table } from 'reactstrap';
import { BTN_BG } from '../../../../../../classes';
import { generateString } from '../../../../../../specialFunction/specialFunction';

const TableWords: React.FC<any> = ({
  activeHomeWork, 
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
              activeHomeWork?.words.map((word: any, idx: number) => {
                return (
                  <tr key={generateString()}>
                    <th scope="row">{ idx + 1 }</th>
                    {!isHideColumnEn? <td className="words-column">{ word?.en }</td> : <td className="words-column"></td>}
                    {!isHideColumnUa? <td className="words-column">{ word?.ua }</td> : <td className="words-column"></td>}
                    {activeHomeWork && <td><input className="form-control" defaultValue="" {...register(word?.en)} /></td>}
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
      <button className={BTN_BG} type="submit">PUSH HOMEWORK</button>
    </>
  )
};

export default TableWords;
