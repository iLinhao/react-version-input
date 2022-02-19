import React, {useEffect, useState, useCallback} from 'react';
import { FC } from 'react';
import './VersionInput.css'

type Props = {
    value?: string;
}

export const VersionInput: FC<Props> = (props): JSX.Element => {
    const [inputValues, setInputValues] = useState<string[]>();
    const {value} = props;

    const onInputChange = useCallback(() => {

    }, [])

    useEffect(() => {
        if (value && value.indexOf('.')) {
            const values = value.split('.');
            setInputValues(values);
        }
    }, [value])

    return <div className='version-input'>
        {inputValues?.map((value, index) => {
            return <div className='version-input-content' key={`version-input-key${index}`}>
                <input
                    className='version-input-inner'
                    type='text'
                    value={value}
                    onChange={onInputChange}
                    maxLength={2} />
                {index != 2 && <>.</>}
            </div>
        })}
    </div> 
}