import React from 'react'
import { Button, TrashIcon, ManualIcon } from 'evergreen-ui'
import { useDispatch } from 'react-redux'
import { generateString } from '../../../../specialFunction/specialFunction'
import { remove_word } from '../../../../store/slices/authReducer'

const DataWord: React.FC<{data: any, active: string, newActive: any, activePart: string}> = ({data, active, newActive, activePart}) => {
  const dispatch = useDispatch();
  return (
    <tbody className="">
      <tr className="space-between">
        <th>{data?.word}</th>
        <div>
          <th><Button marginY={8} marginRight={12} iconBefore={ManualIcon} onClick={() => newActive(data.word)}></Button></th>
          <th><Button marginY={8} marginRight={12} iconBefore={TrashIcon} onClick={() => dispatch(remove_word({word: data.word, part: activePart}))} intent="danger"></Button></th>
        </div>
      </tr>

      <div className={`${active === data?.word? "show" : "hide"} word-info`}>
        <p><b>Phonetics:</b> {data?.phonetics[0]?.text}</p>
        <p><b>Meanings:</b> part of speech: {data?.meanings[0]?.partOfSpeech}<br /></p>
        <p><b>Definitions:</b> {data?.meanings[0]?.definitions[0]?.definition}<br /></p>
        <p><b>Synonyms:</b> {data?.meanings[0]?.definitions[0]?.synonyms.map((synonym: string) => <span key={generateString()}>{synonym}, </span>)}<br /></p>
        <p><b>Example:</b> {data?.meanings[0]?.definitions[0]?.example}<br /></p>
        <p><b>Origin</b> {data?.origin}<br /></p>
      </div>
    </tbody>
  )
};

export default DataWord;