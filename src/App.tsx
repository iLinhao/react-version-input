import React from 'react';
import {FC} from 'react';
import {VersionInput} from './VersionInput';

const App: FC = (): JSX.Element => {
  
  return <div>
    <VersionInput value='1.2.0'></VersionInput>
  </div>
}

export default App;
