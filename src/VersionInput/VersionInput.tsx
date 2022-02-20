import React, {useEffect, useRef, useState, useCallback} from 'react';
import { FC } from 'react';
import './VersionInput.css'

/**
 * 1、如果传入value，将value分割成三份展示
 * 2、如果有onChange事件，将value传给父组件
 */
type Props = {
  value?: string;
  onChange?: (version: string) => void,
}

export const VersionInput: FC<Props> = (props): JSX.Element => {
  const [inputValues, setInputValues] = useState<string[]>();
  const inputRef: any = useRef();
  const {value, onChange} = props;

  const onInputChange = useCallback((e, index) => {
    if (e.target.value.length === 2 && index < 2) {
      const childInputWrapper = inputRef.current.children[index + 1];
      childInputWrapper.children[0].focus();
    }
  }, [])

  const onInputKeyUp = useCallback((e, index) => {
    if (+e.keyCode === 8 && !e.target.value && index > 0) { // 删除事件
      const childInputWrapper = inputRef.current.children[index-1];
      childInputWrapper.children[0].focus();
    }
  }, [])

  const onInputBlur = useCallback(() => {
    if (onChange) {
      const childInputWrapper = Array.from(inputRef.current.children);
      const result: string[] = [];
      childInputWrapper.forEach((child: any) => {
        const input = child['children'][0];
        result.push(input.value);
      })
      if (result.length === 3) {
        onChange(result.join('.'));
      } else {
        onChange('');
      }
    }
  }, [])

  useEffect(() => {
    if (value && value.indexOf('.')) {
      const values = value.split('.');
      setInputValues(values);
    }
  }, [value])

  return <div
    className='version-input'
    onBlur={onInputBlur}
    ref={inputRef}>
    {inputValues?.map((value, index) => {
      return <div
        className='version-input-content'
        key={`version-input-key${index}`}
        onKeyUp={(e) => onInputKeyUp(e, index)}>
        <input
          className='version-input-inner'
          type='text'
          defaultValue={value}
          onChange={(e) => onInputChange(e, index)}
          maxLength={2} />
        {index != 2 && <>.</>}
      </div>
    })}
  </div> 
}