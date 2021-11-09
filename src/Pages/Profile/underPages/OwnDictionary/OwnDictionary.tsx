import { Button } from "evergreen-ui";
import React, { useState } from "react";
import { Table } from "reactstrap";
import Row from "../../../../component/Row/Row";
import SearchWord from "../../../../component/SearchWord/SearchWord";
import { useOwnDictionary } from "../../../../hooks/useOwnDictionary";
import { generateString } from "../../../../specialFunction/specialFunction";
import DataWords from "./DataWords";
import "./OwnDictionary.scss";

const OwnDictionary: React.FC = () => {
  const ownDictionary: any = useOwnDictionary();
  const [activeWord, setActiveWord] = useState("");
  const [activePart, setActivePart] = useState("1 part");
  const [activePartOptions, setActivePartOptions] = useState("");
  const [isModal, setIsModal] = useState<boolean>(false);

  const toggleModal = () => setIsModal(!isModal);

  const newActive = (word: string) => activeWord === word? setActiveWord("") : setActiveWord(word);
  const newActivePartOptions = (part: string) => activePartOptions === part? setActivePartOptions("") : setActivePartOptions(part);

  const listWords = () => {
    const idx = ownDictionary.findIndex((item: any) => item.part === activePart);

    return ownDictionary[idx]?.words?.map((word: any) => (
      <DataWords data={word} active={activeWord} newActive={newActive} key={generateString()} activePart={activePart}/>
    ));
  };

  if(isModal) {
    prompt();
  };

  const dictionaryTabs = ownDictionary.map((part: any) => {
    return (
      <div className="own-tabs">
        <Button 
          marginY={8} 
          marginRight={12}
          key={generateString()} 
          onClick={() => setActivePart(part.part)}
          onDoubleClick={() => newActivePartOptions(part.part)}
        >
          {part.part}
        </Button>
        <div className={`${activePartOptions === part.part? "show" : "hide"} part-option`}>
          <Button 
            marginY={8} 
            marginRight={12}
            key={generateString()} 
            onClick={() => toggleModal}
          >
            add word
          </Button>
          <Button 
            marginY={8} 
            marginRight={12}
            key={generateString()} 
          >
            shuffle
          </Button>
        </div>
      </div>
    )
  });

  return (
    <div>
      <Row
        Left={
        <div>
          {dictionaryTabs}
          <Table className="bg-light table-scroll top-20" style={{height: "100%"}}>{listWords()}</Table>
        </div>}
        fixed="right"
        Right={<SearchWord />}
      />
    </div>
  )
};

export default OwnDictionary;
