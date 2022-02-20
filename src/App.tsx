import React from 'react';
import {FC} from 'react';
import {VersionInput} from './VersionInput';

const App: FC = (): JSX.Element => {
  
  const onVersionChange = (value: string) => {
    console.log(value);
  }

  return <div>
    <VersionInput value='1.2.0' onChange={onVersionChange} />
  </div>
}

export default App;
