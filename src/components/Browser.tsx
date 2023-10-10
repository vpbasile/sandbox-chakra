import { useState } from 'react';
import Gameboard from "../(games)/gameboard";
import GenerativeBoard from "../hexboard/boards/Generative";
import Keyboard from "../hexboard/boards/Keyboard";
import CheatSheet from "./jsCheatSheet";
import { Box, Button, Stack } from '@chakra-ui/react';

// <>DATA<>
export default function Browser() {

  type moduleType = {
    uid: number;
    id: string;
    contents: JSX.Element;
    headerText: string;
    type?: "notDB" | null;
  };

  // <> Define modules
  // <> FIXME - THis hsould use a map instead of an array
  const modules: moduleType[] = []
  let makeUID = 0
  modules.push({ uid: makeUID++, id: 'jsCheatSheet', contents: <CheatSheet />, type: "notDB", headerText: "JS Cheat Sheet" })
  // modules.push({ uid: makeUID++, id: 'triviaDisplay', contents: <TriviaDisplay />, headerText: 'Trivia' })
  // modules.push({ uid: makeUID++, id: "notesDisplay", headerText: "Notes Database", contents: <DisplayNotes /> });
  // modules.push({ uid: makeUID++, headerText: 'People Database', id: 'peopleDisplay', contents: <DisplayPeople /> });
  // modules.push({ uid: makeUID++, id: "trivia", headerText: "Trivia board", contents: <TriviaBoard />, type: "notDB" });
  modules.push({ uid: makeUID++, id: "keyboard", headerText: "Keyboard", contents: <Keyboard />, type: "notDB" })
  modules.push({ uid: makeUID++, id: "generative", headerText: "Generative Map", contents: <GenerativeBoard /> });
  modules.push({ uid: makeUID++, id: "cardeck", headerText: "CarDeck Simulator", contents: <Gameboard />, type: "notDB" });
  // modules.push({ uid: makeUID++, id: "savedHexBoard", headerText: "Saved Hex Board", contents: <SavedBoard />});
  // modules.push({ uid: makeUID++, id: "create", headerText: "Create Hex Board", contents: <CreateBoard /> });
  // modules.push({ uid: makeUID++, id: "snowflake", headerText: "Snowflake Generator", contents: <Snowflake />, type: "notDB" });


  // <> Toolbar for selecting a module
  function toolbarButton(eachModule: moduleType) {
    const uid = eachModule.uid;

    return (
        <Button key={uid} onClick={() => {
          SETselectedModule(uid);
        }} >{eachModule.headerText}</Button>
    );
  }


  const [selectedModule, SETselectedModule] = useState(0);
  // <> FIXME
  // const toolbar1color = ""
  const toolbar = <Stack dir='row'>
    <label htmlFor='toolbar'>Database modules:</label>
    {modules.filter((module => { return (module.type === undefined) })).map(eachModule => toolbarButton(eachModule))}
  </Stack>
  const toolbar2 = <Stack dir='row'>
    <label htmlFor='toolbar'>Other modules:</label>
    {modules.filter((module => { return (module.type !== undefined) })).map(eachModule => toolbarButton(eachModule))}
  </Stack>
  const actualModule = modules[selectedModule];
  // <> Varibales used in key loops
  // <> FIXME
  // let moduleCounter = 0;

  // <> Main return
  return (
    <Box>
      {toolbar}
      {toolbar2}
      {actualModule.contents}
    </Box>
  )

}